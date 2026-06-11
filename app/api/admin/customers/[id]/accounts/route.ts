import { createAuditLog, createSecurityEvent } from "@/lib/audit";
import { getAdminSession } from "@/lib/adminSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { BankAccount } from "@/models/BankAccount";
import { CustomerProfile } from "@/models/CustomerProfile";
import { User } from "@/models/User";
import { randomInt } from "crypto";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const accountCreateSchema = z.object({
  accountType: z.enum([
    "CHECKING",
    "SAVINGS",
    "PREMIUM_CHECKING",
    "HIGH_YIELD_SAVINGS",
    "BUSINESS_CHECKING",
    "MONEY_MARKET"
  ]),
  accountNickname: z.string().trim().max(80).optional().or(z.literal(""))
});

function generateMaskedAccountNumber() {
  const lastFour = String(randomInt(1000, 9999));
  return `•••• ${lastFour}`;
}

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
        { ok: false, message: "Invalid customer ID." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const parsed = accountCreateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid account request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await connectDB();

    const [user, profile] = await Promise.all([
      User.findById(id).lean(),
      CustomerProfile.findOne({ userId: id }).lean()
    ]);

    if (!user) {
      return NextResponse.json(
        { ok: false, message: "Customer not found." },
        { status: 404 }
      );
    }

    if (!profile) {
      return NextResponse.json(
        { ok: false, message: "Customer profile must be created and reviewed first." },
        { status: 400 }
      );
    }

    if (
      user.status !== "ACTIVE" ||
      profile.kycStatus !== "VERIFIED" ||
      profile.onboardingStatus !== "VERIFIED"
    ) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Customer must be ACTIVE with VERIFIED KYC and VERIFIED onboarding before an account placeholder can be created."
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const account = await BankAccount.create({
      userId: id,
      accountType: parsed.data.accountType,
      accountNickname: parsed.data.accountNickname || parsed.data.accountType.replaceAll("_", " "),
      maskedAccountNumber: generateMaskedAccountNumber(),
      currency: "USD",
      status: "ACTIVE",
      availableBalanceCents: 0,
      ledgerBalanceCents: 0,
      openedAt: new Date()
    });

    await createAuditLog({
      actionType: "ACCOUNT_PLACEHOLDER_CREATED",
      entityType: "BankAccount",
      entityId: String(account._id),
      actorRole: "ADMIN",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "HIGH",
      metadata: {
        adminEmail: adminSession.email,
        customerId: id,
        accountType: parsed.data.accountType,
        note: "Administrative placeholder account only. Not a real bank account."
      }
    });

    await createSecurityEvent({
      eventType: "PROFILE_UPDATED",
      severity: "MEDIUM",
      relatedUserId: id,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      metadata: {
        adminEmail: adminSession.email,
        customerId: id,
        action: "ACCOUNT_PLACEHOLDER_CREATED"
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Account placeholder created.",
        account: {
          id: String(account._id),
          accountType: account.accountType,
          accountNickname: account.accountNickname,
          maskedAccountNumber: account.maskedAccountNumber,
          status: account.status,
          availableBalance: 0,
          ledgerBalance: 0
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admin account placeholder creation error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to create account placeholder." },
      { status: 500 }
    );
  }
}
