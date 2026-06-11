import { createAuditLog, createSecurityEvent } from "@/lib/audit";
import { getAdminSession } from "@/lib/adminSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { BankAccount } from "@/models/BankAccount";
import { CustomerProfile } from "@/models/CustomerProfile";
import { Transaction } from "@/models/Transaction";
import { User } from "@/models/User";
import { isValidObjectId } from "mongoose";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const transactionCreateSchema = z.object({
  transactionType: z.enum([
    "DEPOSIT",
    "WITHDRAWAL",
    "TRANSFER",
    "CARD_PAYMENT",
    "BILL_PAYMENT",
    "LOAN_PAYMENT",
    "INTEREST",
    "FEE",
    "REFUND",
    "ADJUSTMENT"
  ]),
  direction: z.enum(["DEBIT", "CREDIT"]),
  amount: z.coerce.number().positive().max(1000000),
  status: z.enum(["PENDING", "PROCESSING", "POSTED", "FAILED", "REVERSED", "FLAGGED"]).default("POSTED"),
  description: z.string().trim().min(3).max(180)
});

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const adminSession = await getAdminSession();

    if (!adminSession) {
      return NextResponse.json(
        { ok: false, message: "Admin authentication required." },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { ok: false, message: "Invalid account ID." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const parsed = transactionCreateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid transaction placeholder.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await connectDB();

    const account = await BankAccount.findById(id);

    if (!account) {
      return NextResponse.json(
        { ok: false, message: "Account placeholder not found." },
        { status: 404 }
      );
    }

    const [user, profile] = await Promise.all([
      User.findById(account.userId).lean(),
      CustomerProfile.findOne({ userId: account.userId }).lean()
    ]);

    if (!user || !profile) {
      return NextResponse.json(
        { ok: false, message: "Customer profile is required before transaction placeholders can be created." },
        { status: 400 }
      );
    }

    if (
      user.status !== "ACTIVE" ||
      profile.kycStatus !== "VERIFIED" ||
      profile.onboardingStatus !== "VERIFIED" ||
      account.status !== "ACTIVE"
    ) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Customer and account must be ACTIVE with VERIFIED KYC and VERIFIED onboarding before transaction placeholders can be created."
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);
    const amountCents = Math.round(parsed.data.amount * 100);

    const transaction = await Transaction.create({
      userId: account.userId,
      accountId: account._id,
      transactionType: parsed.data.transactionType,
      direction: parsed.data.direction,
      amountCents,
      currency: "USD",
      status: parsed.data.status,
      description: parsed.data.description,
      reference: `TXN-${nanoid(14).toUpperCase()}`,
      postedAt: parsed.data.status === "POSTED" ? new Date() : null,
      metadata: {
        placeholder: true,
        note: "Administrative placeholder transaction only. No real money movement occurred."
      }
    });

    await createAuditLog({
      actionType: "TRANSACTION_PLACEHOLDER_CREATED",
      entityType: "Transaction",
      entityId: String(transaction._id),
      actorRole: "ADMIN",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "HIGH",
      metadata: {
        adminEmail: adminSession.email,
        customerId: String(account.userId),
        accountId: String(account._id),
        transactionType: parsed.data.transactionType,
        direction: parsed.data.direction,
        amountCents,
        note: "Placeholder transaction only. Balance was not modified."
      }
    });

    await createSecurityEvent({
      eventType: "PROFILE_UPDATED",
      severity: "MEDIUM",
      relatedUserId: String(account.userId),
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      metadata: {
        adminEmail: adminSession.email,
        action: "TRANSACTION_PLACEHOLDER_CREATED",
        accountId: String(account._id),
        transactionId: String(transaction._id)
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Transaction placeholder created.",
        transaction: {
          id: String(transaction._id),
          transactionType: transaction.transactionType,
          direction: transaction.direction,
          amount: parsed.data.amount,
          currency: transaction.currency,
          status: transaction.status,
          description: transaction.description,
          reference: transaction.reference,
          createdAt: transaction.createdAt
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Transaction placeholder creation error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to create transaction placeholder." },
      { status: 500 }
    );
  }
}
