import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { ETFInterestRequest } from "@/models/ETFInterestRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const etfSchema = z.object({
  etfCategory: z.enum(["BROAD_MARKET", "DIVIDEND", "SECTOR", "INTERNATIONAL", "BOND_ETF", "DIGITAL_ASSET_ETF"]),
  intendedAllocationRange: z.enum(["UNDER_5_PERCENT", "5_10_PERCENT", "10_20_PERCENT", "20_PERCENT_PLUS", "UNDECIDED"]),
  advisoryPreference: z.enum(["SELF_DIRECTED", "ADVISOR_REVIEW", "MANAGED_PORTFOLIO"])
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = etfSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid ETF interest request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    await ensureInvestmentProfile(session.userId);

    const etf = await ETFInterestRequest.create({
      userId: session.userId,
      ...parsed.data
    });

    await createAuditLog({
      actionType: "ETF_INTEREST_REQUEST_SUBMITTED",
      entityType: "ETFInterestRequest",
      entityId: String(etf._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: parsed.data.etfCategory === "DIGITAL_ASSET_ETF" ? "HIGH" : "MEDIUM",
      metadata: {
        etfCategory: parsed.data.etfCategory,
        advisoryPreference: parsed.data.advisoryPreference
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "ETF interest request submitted for review.",
        request: {
          id: String(etf._id),
          status: etf.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("ETF interest error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit ETF interest request." },
      { status: 500 }
    );
  }
}
