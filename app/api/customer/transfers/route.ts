import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { BankAccount } from "@/models/BankAccount";
import { TransferRequest } from "@/models/TransferRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const transferSchema = z.object({
  sourceAccountId: z.string().min(1),
  transferType: z.enum(["INTERNAL", "EXTERNAL", "WIRE"]),
  recipientName: z.string().trim().min(2).max(120),
  recipientReference: z.string().trim().max(120).optional().or(z.literal("")),
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

  const transfers = await TransferRequest.find({ userId: session.userId })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  return NextResponse.json({
    ok: true,
    transfers: transfers.map((item: any) => ({
      id: String(item._id),
      transferType: item.transferType,
      recipientName: item.recipientName,
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
    const parsed = transferSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid transfer request.", errors: parsed.error.flatten() },
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

    const transfer = await TransferRequest.create({
      userId: session.userId,
      sourceAccountId: parsed.data.sourceAccountId,
      transferType: parsed.data.transferType,
      recipientName: parsed.data.recipientName,
      recipientReference: parsed.data.recipientReference || "",
      amountCents,
      currency: "USD",
      memo: parsed.data.memo || "",
      scheduledDate: parsed.data.scheduledDate ? new Date(parsed.data.scheduledDate) : null,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "TRANSFER_REQUEST_SUBMITTED",
      entityType: "TransferRequest",
      entityId: String(transfer._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: parsed.data.transferType === "WIRE" ? "HIGH" : "MEDIUM",
      metadata: {
        transferType: parsed.data.transferType,
        amountCents,
        note: "Transfer request placeholder only. No money movement occurred."
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Transfer request submitted for review.",
        transfer: {
          id: String(transfer._id),
          status: transfer.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Transfer request error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit transfer request." },
      { status: 500 }
    );
  }
}
