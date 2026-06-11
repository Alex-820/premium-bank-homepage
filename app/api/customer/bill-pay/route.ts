import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { BankAccount } from "@/models/BankAccount";
import { BillPayRequest } from "@/models/BillPayRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const billPaySchema = z.object({
  sourceAccountId: z.string().min(1),
  payeeName: z.string().trim().min(2).max(120),
  payeeCategory: z.enum(["UTILITIES", "INSURANCE", "CREDIT_CARD", "LOAN", "RENT", "SUBSCRIPTION", "OTHER"]),
  amount: z.coerce.number().positive().max(1000000),
  memo: z.string().trim().max(180).optional().or(z.literal("")),
  scheduledDate: z.string().trim().optional().or(z.literal(""))
});

function moneyFromCents(value: number) {
  return Number((value / 100).toFixed(2));
}

export async function GET() {
  const session = await getCustomerSession();

  if (!session) {
    return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
  }

  await connectDB();

  const billPayments = await BillPayRequest.find({ userId: session.userId })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  return NextResponse.json({
    ok: true,
    billPayments: billPayments.map((item: any) => ({
      id: String(item._id),
      payeeName: item.payeeName,
      payeeCategory: item.payeeCategory,
      amount: moneyFromCents(item.amountCents),
      currency: item.currency,
      status: item.status,
      memo: item.memo,
      scheduledDate: item.scheduledDate,
      createdAt: item.createdAt
    }))
  });
}

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const parsed = billPaySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid bill-pay request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const account = await BankAccount.findOne({
      _id: parsed.data.sourceAccountId,
      userId: session.userId,
      status: "ACTIVE"
    }).lean();

    if (!account) {
      return NextResponse.json(
        { ok: false, message: "Active source account placeholder not found." },
        { status: 404 }
      );
    }

    const meta = getRequestMeta(request);
    const amountCents = Math.round(parsed.data.amount * 100);

    const billPay = await BillPayRequest.create({
      userId: session.userId,
      sourceAccountId: parsed.data.sourceAccountId,
      payeeName: parsed.data.payeeName,
      payeeCategory: parsed.data.payeeCategory,
      amountCents,
      currency: "USD",
      memo: parsed.data.memo || "",
      scheduledDate: parsed.data.scheduledDate ? new Date(parsed.data.scheduledDate) : null,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "BILL_PAY_REQUEST_SUBMITTED",
      entityType: "BillPayRequest",
      entityId: String(billPay._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "MEDIUM",
      metadata: {
        payeeName: parsed.data.payeeName,
        amountCents,
        note: "Bill-pay request placeholder only. No payment was processed."
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Bill-pay request submitted for review.",
        billPay: {
          id: String(billPay._id),
          status: billPay.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Bill-pay request error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit bill-pay request." },
      { status: 500 }
    );
  }
}
