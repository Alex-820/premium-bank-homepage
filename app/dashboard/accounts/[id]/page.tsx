import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { BankAccount } from "@/models/BankAccount";
import { Transaction } from "@/models/Transaction";
import { ArrowLeft, FileText, ShieldCheck, WalletCards } from "lucide-react";
import { isValidObjectId } from "mongoose";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function moneyFromCents(value: number) {
  return `$${(value / 100).toFixed(2)}`;
}

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

export default async function AccountDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getCustomerSession();

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;

  if (!isValidObjectId(id)) {
    notFound();
  }

  await connectDB();

  const [account, transactions] = await Promise.all([
    BankAccount.findOne({
      _id: id,
      userId: session.userId
    }).lean(),
    Transaction.find({
      accountId: id,
      userId: session.userId
    })
      .sort({ createdAt: -1 })
      .limit(100)
      .lean()
  ]);

  if (!account) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bank-blue"
          >
            <ArrowLeft size={16} /> Back to dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Account Detail
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl">
            {account.accountNickname || account.accountType}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-bank-steel">
            Review account placeholder details and transaction-history structure. These
            records are for prototype dashboard testing only and do not represent real
            deposits, transfers, or payment activity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <WalletCards className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Account Type
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {account.accountType}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <FileText className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Account Number
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {account.maskedAccountNumber}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Status
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {account.status}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <WalletCards className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Available
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {moneyFromCents(account.availableBalanceCents || 0)}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 sm:pb-20 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border border-bank-line bg-white p-6 shadow-sm">
          <div className="border-b border-bank-line pb-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
              Account Summary
            </h2>
            <p className="mt-2 text-sm leading-6 text-bank-steel">
              Placeholder account metadata from MongoDB.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {[
              ["Nickname", account.accountNickname || "—"],
              ["Currency", account.currency],
              ["Ledger Balance", moneyFromCents(account.ledgerBalanceCents || 0)],
              ["Opened", formatDate(account.openedAt)],
              ["Created", formatDate(account.createdAt)]
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[140px_1fr] gap-4 border border-bank-line bg-bank-mist p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bank-steel">
                  {label}
                </p>
                <p className="text-sm font-semibold text-ink-950">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 border border-bank-gold/40 bg-[#fff8e8] p-4">
            <p className="text-xs leading-6 text-ink-900">
              This is not a live banking account. Real account balances, statements,
              deposits, payment rails, and ledger activity require regulated banking
              infrastructure.
            </p>
          </div>
        </aside>

        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <div className="border-b border-bank-line pb-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
              Transaction History
            </h2>
            <p className="mt-2 text-sm leading-6 text-bank-steel">
              Placeholder transaction records for this account.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {transactions.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-5">
                <p className="text-sm font-semibold text-ink-950">
                  No transactions yet.
                </p>
                <p className="mt-2 text-sm leading-7 text-bank-steel">
                  Admin-created transaction placeholders will appear here.
                </p>
              </div>
            ) : (
              transactions.map((transaction: any) => (
                <div
                  key={String(transaction._id)}
                  className="grid gap-3 border border-bank-line bg-white p-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink-950">
                      {transaction.description}
                    </p>
                    <p className="mt-1 text-xs text-bank-steel">
                      {transaction.transactionType} • {transaction.reference}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                      {transaction.status} • {formatDate(transaction.createdAt)}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-lg font-semibold text-ink-950">
                      {transaction.direction === "CREDIT" ? "+" : "-"}
                      {moneyFromCents(transaction.amountCents || 0)}
                    </p>
                    <p className="mt-1 text-xs text-bank-steel">
                      {transaction.direction}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
