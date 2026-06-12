import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { getRequestMeta } from "@/lib/requestMeta";
import { InvestmentAccountApplication } from "@/models/InvestmentAccountApplication";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const investmentAccountSchema = z.object({
  accountType: z.enum(["INDIVIDUAL_BROKERAGE", "JOINT_BROKERAGE", "IRA", "ROTH_IRA", "TRUST", "BUSINESS_INVESTMENT"]),
  serviceLevel: z.enum(["SELF_DIRECTED", "ROBO_ADVISOR", "HUMAN_ADVISOR", "PRIVATE_CLIENT"]),
  fundingIntent: z.enum(["CASH_TRANSFER", "BANK_ACCOUNT_LINK", "ROLLOVER", "EXTERNAL_TRANSFER", "UNDECIDED"]),
  disclosureAcknowledged: z.boolean()
});

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = investmentAccountSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid investment account application.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (!parsed.data.disclosureAcknowledged) {
      return NextResponse.json(
        { ok: false, message: "Investment disclosure acknowledgement is required." },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    await ensureInvestmentProfile(session.userId);

    const application = await InvestmentAccountApplication.create({
      userId: session.userId,
      ...parsed.data,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "INVESTMENT_ACCOUNT_APPLICATION_SUBMITTED",
      entityType: "InvestmentAccountApplication",
      entityId: String(application._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: parsed.data.serviceLevel === "PRIVATE_CLIENT" ? "HIGH" : "MEDIUM",
      metadata: {
        accountType: parsed.data.accountType,
        serviceLevel: parsed.data.serviceLevel
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Investment account application submitted for review.",
        application: {
          id: String(application._id),
          status: application.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Investment account application error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit investment account application." },
      { status: 500 }
    );
  }
}
