import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { BankAccount } from "@/models/BankAccount";
import { Transaction } from "@/models/Transaction";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";

function moneyFromCents(value: number) {
  return Number((value / 100).toFixed(2));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getCustomerSession();
  const { id } = await params;

  if (!session) {
    return NextResponse.json(
      { ok: false, message: "Authentication required." },
      { status: 401 }
    );
  }

  if (!isValidObjectId(id)) {
    return NextResponse.json(
      { ok: false, message: "Invalid account ID." },
      { status: 400 }
    );
  }

  await connectDB();

  const account = await BankAccount.findOne({
    _id: id,
    userId: session.userId
  }).lean();

  if (!account) {
    return NextResponse.json(
      { ok: false, message: "Account not found." },
      { status: 404 }
    );
  }

  const transactions = await Transaction.find({
    accountId: id,
    userId: session.userId
  })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  return NextResponse.json({
    ok: true,
    account: {
      id: String(account._id),
      accountType: account.accountType,
      maskedAccountNumber: account.maskedAccountNumber,
      status: account.status
    },
    transactions: transactions.map((transaction) => ({
      id: String(transaction._id),
      transactionType: transaction.transactionType,
      direction: transaction.direction,
      amount: moneyFromCents(transaction.amountCents),
      currency: transaction.currency,
      status: transaction.status,
      description: transaction.description,
      reference: transaction.reference,
      postedAt: transaction.postedAt,
      createdAt: transaction.createdAt
    }))
  });
}
