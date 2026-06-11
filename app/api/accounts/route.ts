import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { BankAccount } from "@/models/BankAccount";
import { NextResponse } from "next/server";

function moneyFromCents(value: number) {
  return Number((value / 100).toFixed(2));
}

export async function GET() {
  const session = await getCustomerSession();

  if (!session) {
    return NextResponse.json(
      { ok: false, message: "Authentication required." },
      { status: 401 }
    );
  }

  await connectDB();

  const accounts = await BankAccount.find({ userId: session.userId })
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({
    ok: true,
    accounts: accounts.map((account) => ({
      id: String(account._id),
      accountType: account.accountType,
      accountNickname: account.accountNickname,
      maskedAccountNumber: account.maskedAccountNumber,
      currency: account.currency,
      status: account.status,
      availableBalance: moneyFromCents(account.availableBalanceCents || 0),
      ledgerBalance: moneyFromCents(account.ledgerBalanceCents || 0),
      openedAt: account.openedAt
    }))
  });
}
