import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { ShieldCheck, WalletCards, FileText } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getCustomerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Customer Dashboard
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
            Welcome to your secure banking dashboard.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
            Signed in as {session.email}. This dashboard is the foundation for accounts,
            transactions, transfers, cards, support, alerts, and customer profile services.
          </p>

          <form action="/api/auth/logout" method="post" className="mt-8">
            <button type="submit" className="btn-secondary h-11 px-5">
              Sign Out
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-3">
        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <WalletCards className="text-bank-blue" size={22} />
          <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
            Accounts
          </h2>
          <p className="mt-3 text-sm leading-7 text-bank-steel">
            Account balances, masked account numbers, and transaction history will be added next.
          </p>
        </div>

        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <FileText className="text-bank-blue" size={22} />
          <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
            Applications
          </h2>
          <p className="mt-3 text-sm leading-7 text-bank-steel">
            Customer application status, enrollment status, and support requests will be connected.
          </p>
        </div>

        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <ShieldCheck className="text-bank-blue" size={22} />
          <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
            Security
          </h2>
          <p className="mt-3 text-sm leading-7 text-bank-steel">
            Login history, security events, alerts, and profile protection controls will be added.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
