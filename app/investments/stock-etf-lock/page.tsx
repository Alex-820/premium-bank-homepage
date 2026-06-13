import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { StockEtfLockContent } from "@/components/wealth/InvestmentLockTables";
import { BANK_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Stock & ETF Lock Portfolio | ${BANK_NAME}`,
  description:
    "Reviewed stock and ETF lock portfolio strategies with target growth ranges, suitability review, duration, maturity, and risk disclosures."
};

export default function StockEtfLockPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Wealth & Investments
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
            Stock & ETF Lock Portfolio.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
            A reviewed investment strategy where eligible clients may request access to
            curated stock and ETF portfolio plans for selected durations. Target growth
            ranges are not guaranteed and are subject to suitability, market risk, fees,
            and advisor review.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/login" className="btn-primary h-11 px-5">
              Request Access
            </a>
            <a href="/dashboard/investments" className="btn-secondary h-11 px-5">
              Investment Dashboard
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <StockEtfLockContent />
      </section>

      <Footer />
    </main>
  );
}
