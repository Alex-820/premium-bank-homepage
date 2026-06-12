import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { StakingEligibilityRequest } from "@/models/StakingEligibilityRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const stakingSchema = z.object({
  requestedAsset: z.enum(["ETH", "SOL", "OTHER_PROOF_OF_STAKE_ASSET"]),
  understandsVariableRewards: z.boolean(),
  understandsSlashingRisk: z.boolean(),
  understandsLockupUnbonding: z.boolean(),
  understandsAssetPriceRisk: z.boolean(),
  rewardReportingPreference: z.enum(["MONTHLY", "QUARTERLY", "ANNUAL"])
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = stakingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid staking eligibility request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const acknowledgements = [
      parsed.data.understandsVariableRewards,
      parsed.data.understandsSlashingRisk,
      parsed.data.understandsLockupUnbonding,
      parsed.data.understandsAssetPriceRisk
    ];

    if (acknowledgements.some((value) => value !== true)) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "All staking risk acknowledgements are required. Staking rewards are variable, not guaranteed, and subject to protocol, validator, lockup, slashing, tax, liquidity, and asset price risks."
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    await ensureInvestmentProfile(session.userId, {
      digitalAssetEligibility: "PENDING_REVIEW"
    });

    const staking = await StakingEligibilityRequest.create({
      userId: session.userId,
      ...parsed.data
    });

    await createAuditLog({
      actionType: "STAKING_ELIGIBILITY_SUBMITTED",
      entityType: "StakingEligibilityRequest",
      entityId: String(staking._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "HIGH",
      metadata: {
        requestedAsset: parsed.data.requestedAsset,
        rewardReportingPreference: parsed.data.rewardReportingPreference,
        note: "Staking rewards are variable and not guaranteed."
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Staking eligibility request submitted for review.",
        request: {
          id: String(staking._id),
          status: staking.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Staking eligibility error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit staking eligibility request." },
      { status: 500 }
    );
  }
}
