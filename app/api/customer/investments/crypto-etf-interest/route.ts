import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { CryptoETFInterestRequest } from "@/models/CryptoETFInterestRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const cryptoEtfSchema = z.object({
  requestedExposure: z.enum(["BITCOIN_ETF", "ETHEREUM_ETF", "MULTI_ASSET_DIGITAL_ASSET_ETF", "MANAGED_DIGITAL_ASSET_ETF_PORTFOLIO"]),
  intendedAllocationRange: z.enum(["UNDER_2_PERCENT", "2_5_PERCENT", "5_10_PERCENT", "10_PERCENT_PLUS", "UNDECIDED"]),
  advisoryPreference: z.enum(["ADVISOR_REVIEW", "MANAGED_PORTFOLIO", "PRIVATE_CLIENT_REVIEW"]),
  riskAcknowledged: z.boolean()
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = cryptoEtfSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid crypto ETF interest request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (!parsed.data.riskAcknowledged) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Risk acknowledgement is required. Digital asset ETFs are subject to market, liquidity, regulatory, tax, custody, and operational risks."
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    await ensureInvestmentProfile(session.userId, {
      digitalAssetEligibility: "PENDING_REVIEW"
    });

    const requestDoc = await CryptoETFInterestRequest.create({
      userId: session.userId,
      ...parsed.data
    });

    await createAuditLog({
      actionType: "CRYPTO_ETF_INTEREST_SUBMITTED",
      entityType: "CryptoETFInterestRequest",
      entityId: String(requestDoc._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "HIGH",
      metadata: {
        requestedExposure: parsed.data.requestedExposure,
        intendedAllocationRange: parsed.data.intendedAllocationRange,
        note: "No guaranteed returns. Investor earns or loses based on market value movement."
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Crypto ETF interest request submitted for review.",
        request: {
          id: String(requestDoc._id),
          status: requestDoc.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Crypto ETF interest error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit crypto ETF interest request." },
      { status: 500 }
    );
  }
}
