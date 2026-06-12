import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { SuitabilityReview } from "@/models/SuitabilityReview";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const suitabilitySchema = z.object({
  employmentStatus: z.enum(["EMPLOYED", "SELF_EMPLOYED", "BUSINESS_OWNER", "RETIRED", "STUDENT", "OTHER"]),
  annualIncomeRange: z.enum(["UNDER_50K", "50K_100K", "100K_250K", "250K_500K", "500K_PLUS", "PREFER_NOT_TO_SAY"]),
  netWorthRange: z.enum(["UNDER_100K", "100K_500K", "500K_1M", "1M_5M", "5M_PLUS", "PREFER_NOT_TO_SAY"]),
  investmentObjective: z.enum(["CAPITAL_PRESERVATION", "INCOME", "GROWTH", "SPECULATION", "RETIREMENT", "WEALTH_TRANSFER"]),
  riskTolerance: z.enum(["CONSERVATIVE", "MODERATE", "GROWTH", "AGGRESSIVE"]),
  timeHorizon: z.enum(["SHORT_TERM", "MEDIUM_TERM", "LONG_TERM"]),
  understandsInvestmentRisk: z.boolean(),
  understandsNoGuaranteedReturns: z.boolean()
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = suitabilitySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid suitability review.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (!parsed.data.understandsInvestmentRisk || !parsed.data.understandsNoGuaranteedReturns) {
      return NextResponse.json(
        {
          ok: false,
          message: "Investment risk and no-guaranteed-return acknowledgements are required."
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const review = await SuitabilityReview.create({
      userId: session.userId,
      ...parsed.data,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await ensureInvestmentProfile(session.userId, {
      riskTolerance: parsed.data.riskTolerance,
      timeHorizon: parsed.data.timeHorizon,
      suitabilityStatus: "PENDING_REVIEW"
    });

    await createAuditLog({
      actionType: "SUITABILITY_REVIEW_SUBMITTED",
      entityType: "SuitabilityReview",
      entityId: String(review._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: parsed.data.riskTolerance === "AGGRESSIVE" ? "HIGH" : "MEDIUM",
      metadata: {
        investmentObjective: parsed.data.investmentObjective,
        riskTolerance: parsed.data.riskTolerance
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Suitability review submitted for advisor review.",
        review: {
          id: String(review._id),
          status: review.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Suitability review error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit suitability review." },
      { status: 500 }
    );
  }
}
