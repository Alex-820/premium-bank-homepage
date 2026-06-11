import { TransferRequestForm } from "@/components/dashboard/TransferRequestForm";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { BankAccount } from "@/models/BankAccount";
import { TransferRequest } from "@/models/TransferRequest";
import { ArrowLeft, Send } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function moneyFromCents(value: number) {
  return `$${(value / 100).toFixed(2)}`;
}

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

export default async function TransfersPage() {
  const session = await getCustomerSession();

  if (!session) redirect("/login");

  await connectDB();

  const [accounts, transfers] = await Promise.all([
    BankAccount.find({ userId: session.userId, status: "ACTIVE" }).sort({ createdAt: -1 }).lean(),
    TransferRequest.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(25).lean()
  ]);

  const accountOptions = accounts.map((account: any) => ({
    id: String(account._id),
    label: `${account.accountNickname || account.accountType} — ${account.maskedAccountNumber}`
  }));

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <a href="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-bank-blue">
            <ArrowLeft size={16} /> Back to dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Transfer Requests
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl">
            Submit a transfer request for review.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-bank-steel">
            This prototype captures transfer requests only. It does not move money,
            process ACH, initiate wire transfers, or change balances.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <Send className="text-bank-blue" size={22} />
          <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink-950">
            New Transfer Request
          </h2>
          <p className="mt-2 text-sm leading-7 text-bank-steel">
            Requests are submitted for internal review and audit logging.
          </p>

          <TransferRequestForm accounts={accountOptions} />
        </div>

        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
            Recent Transfer Requests
          </h2>

          <div className="mt-5 grid gap-3">
            {transfers.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-5 text-sm text-bank-steel">
                No transfer requests yet.
              </div>
            ) : (
              transfers.map((item: any) => (
                <div key={String(item._id)} className="grid gap-3 border border-bank-line bg-white p-5 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-sm font-semibold text-ink-950">{item.recipientName}</p>
                    <p className="mt-1 text-xs text-bank-steel">{item.transferType} • {item.memo || "No memo"}</p>
                    <p className="mt-2 text-[11px] text-bank-steel">{formatDate(item.createdAt)}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-lg font-semibold text-ink-950">{moneyFromCents(item.amountCents || 0)}</p>
                    <p className="mt-1 text-xs font-semibold text-bank-blue">{item.status}</p>
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
