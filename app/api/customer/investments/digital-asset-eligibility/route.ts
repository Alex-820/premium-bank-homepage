import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { DigitalAssetEligibilityReview } from "@/models/DigitalAssetEligibilityReview";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const digitalAssetSchema = z.object({
  digitalAssetExperience: z.enum(["NONE", "LIMITED", "MODERATE", "EXTENSIVE"]),
  understandsVolatility: z.boolean(),
  understandsNotDeposit: z.boolean(),
  understandsNotFDICInsured: z.boolean(),
  understandsMayLoseValue: z.boolean(),
  understandsNoGuarantee: z.boolean()
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = digitalAssetSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid digital asset eligibility review.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const acknowledgements = [
      parsed.data.understandsVolatility,
      parsed.data.understandsNotDeposit,
      parsed.data.understandsNotFDICInsured,
      parsed.data.understandsMayLoseValue,
      parsed.data.understandsNoGuarantee
    ];

    if (acknowledgements.some((value) => value !== true)) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "All digital asset risk acknowledgements are required. Digital assets are not bank deposits, are not FDIC insured, are not guaranteed, and may lose value."
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const review = await DigitalAssetEligibilityReview.create({
      userId: session.userId,
      ...parsed.data
    });

    await ensureInvestmentProfile(session.userId, {
      investmentExperience: parsed.data.digitalAssetExperience,
      digitalAssetEligibility: "PENDING_REVIEW"
    });

    await createAuditLog({
      actionType: "DIGITAL_ASSET_ELIGIBILITY_SUBMITTED",
      entityType: "DigitalAssetEligibilityReview",
      entityId: String(review._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "HIGH",
      metadata: {
        digitalAssetExperience: parsed.data.digitalAssetExperience,
        note: "Digital asset investments are not deposits, not FDIC insured, not guaranteed, and may lose value."
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Digital asset eligibility review submitted.",
        review: {
          id: String(review._id),
          status: review.eligibilityStatus
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Digital asset eligibility error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit digital asset eligibility review." },
      { status: 500 }
    );
  }
}
