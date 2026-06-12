import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { PortfolioPreference } from "@/models/PortfolioPreference";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const portfolioSchema = z.object({
  portfolioGoal: z.enum(["INCOME", "GROWTH", "BALANCED", "RETIREMENT", "WEALTH_PRESERVATION", "TAX_AWARE"]),
  preferredManagement: z.enum(["ROBO_ADVISOR", "HUMAN_ADVISOR", "PRIVATE_CLIENT_TEAM"]),
  riskLevel: z.enum(["CONSERVATIVE", "MODERATE", "GROWTH", "AGGRESSIVE"]),
  notes: z.string().trim().max(1000).optional().or(z.literal(""))
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = portfolioSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid portfolio preference.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    await ensureInvestmentProfile(session.userId, {
      riskTolerance: parsed.data.riskLevel
    });

    const preference = await PortfolioPreference.create({
      userId: session.userId,
      ...parsed.data
    });

    await createAuditLog({
      actionType: "PORTFOLIO_PREFERENCE_SUBMITTED",
      entityType: "PortfolioPreference",
      entityId: String(preference._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: parsed.data.riskLevel === "AGGRESSIVE" ? "HIGH" : "MEDIUM",
      metadata: {
        portfolioGoal: parsed.data.portfolioGoal,
        preferredManagement: parsed.data.preferredManagement
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Portfolio preference submitted for review.",
        preference: {
          id: String(preference._id),
          status: preference.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Portfolio preference error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit portfolio preference." },
      { status: 500 }
    );
  }
}
