import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { BondTreasuryRequest } from "@/models/BondTreasuryRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bondSchema = z.object({
  fixedIncomeType: z.enum(["TREASURY_BILLS", "TREASURY_NOTES", "TREASURY_BONDS", "MUNICIPAL_BONDS", "CORPORATE_BONDS", "BOND_LADDER"]),
  maturityPreference: z.enum(["SHORT_TERM", "INTERMEDIATE", "LONG_TERM", "LADDERED", "UNDECIDED"]),
  incomeObjective: z.enum(["CAPITAL_PRESERVATION", "REGULAR_INCOME", "TAX_AWARE_INCOME", "DIVERSIFICATION"]),
  approximateAmountRange: z.enum(["UNDER_10K", "10K_50K", "50K_250K", "250K_PLUS", "UNDECIDED"])
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = bondSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid bond/Treasury request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    await ensureInvestmentProfile(session.userId);

    const bond = await BondTreasuryRequest.create({
      userId: session.userId,
      ...parsed.data
    });

    await createAuditLog({
      actionType: "BOND_TREASURY_REQUEST_SUBMITTED",
      entityType: "BondTreasuryRequest",
      entityId: String(bond._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: parsed.data.fixedIncomeType === "CORPORATE_BONDS" ? "MEDIUM" : "LOW",
      metadata: {
        fixedIncomeType: parsed.data.fixedIncomeType,
        maturityPreference: parsed.data.maturityPreference
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Bond/Treasury request submitted for review.",
        request: {
          id: String(bond._id),
          status: bond.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Bond/Treasury request error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit bond/Treasury request." },
      { status: 500 }
    );
  }
}
