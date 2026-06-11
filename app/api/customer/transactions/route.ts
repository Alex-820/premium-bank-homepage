import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { BankAccount } from "@/models/BankAccount";
import { Transaction } from "@/models/Transaction";
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

  const [accounts, transactions] = await Promise.all([
    BankAccount.find({ userId: session.userId }).lean(),
    Transaction.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(25).lean()
  ]);

  const accountMap = new Map(
    accounts.map((account: any) => [
      String(account._id),
      {
        accountType: account.accountType,
        accountNickname: account.accountNickname,
        maskedAccountNumber: account.maskedAccountNumber
      }
    ])
  );

  return NextResponse.json({
    ok: true,
    transactions: transactions.map((transaction: any) => {
      const account = accountMap.get(String(transaction.accountId));

      return {
        id: String(transaction._id),
        account,
        transactionType: transaction.transactionType,
        direction: transaction.direction,
        amount: moneyFromCents(transaction.amountCents),
        currency: transaction.currency,
        status: transaction.status,
        description: transaction.description,
        reference: transaction.reference,
        postedAt: transaction.postedAt,
        createdAt: transaction.createdAt
      };
    })
  });
}
