import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { DigitalAssetLockContent } from "@/components/wealth/InvestmentLockTables";
import { BANK_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Digital Asset Lock Program | ${BANK_NAME}`,
  description:
    "Reviewed digital asset lock strategies with target net return ranges, eligibility review, duration, maturity, and risk disclosures."
};

export default function DigitalAssetLockPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Digital Assets
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
            Digital Asset Lock Program.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
            A reviewed digital asset strategy for eligible clients who understand lockup,
            market, liquidity, custody, protocol, counterparty, regulatory, tax, and
            operational risks. Target net return ranges are not guaranteed.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/login" className="btn-primary h-11 px-5">
              Request Review
            </a>
            <a href="/dashboard/investments" className="btn-secondary h-11 px-5">
              Investment Dashboard
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <DigitalAssetLockContent />
      </section>

      <Footer />
    </main>
  );
}
