"use client";

import {
  digitalAssetLockPlans,
  requiredInvestmentDisclosure,
  stockEtfLockPlans
} from "@/lib/wealth/investmentBlueprint";
import { AlertTriangle, BarChart3, Coins, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";

type ProductKey = "stock-etf" | "digital-asset";

export function InvestmentProductAccessCards() {
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>("stock-etf");
  const [acknowledged, setAcknowledged] = useState(false);
  const [message, setMessage] = useState("");

  const plans = selectedProduct === "stock-etf" ? stockEtfLockPlans : digitalAssetLockPlans;

  function handleRequest() {
    if (!acknowledged) {
      setMessage("Please acknowledge the investment risk disclosure before continuing.");
      return;
    }

    setMessage(
      selectedProduct === "stock-etf"
        ? "Stock & ETF Lock Portfolio selected. Backend lock request workflow will be connected after frontend completion."
        : "Digital Asset Lock Program selected. Backend lock agreement workflow will be connected after frontend completion."
    );
  }

  return (
    <section className="border border-bank-line bg-white p-6 shadow-sm">
      <div className="border-b border-bank-line pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
          Featured Investment Access
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
          Lock portfolio strategies for reviewed clients.
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-bank-steel">
          Select a product category to review target ranges, duration, risk level,
          and required disclosures. These are request pathways only and do not execute
          trades, open accounts, custody assets, or guarantee returns.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <button
          type="button"
          onClick={() => {
            setSelectedProduct("stock-etf");
            setMessage("");
          }}
          className={`border p-5 text-left transition ${
            selectedProduct === "stock-etf"
              ? "border-bank-blue bg-bank-mist"
              : "border-bank-line bg-white hover:border-bank-blue"
          }`}
        >
          <BarChart3 className="text-bank-blue" size={24} />
          <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-ink-950">
            Stock & ETF Lock Portfolio
          </h3>
          <p className="mt-2 text-sm leading-7 text-bank-steel">
            Reviewed stock and ETF portfolio strategy with selected lock duration,
            target growth range, suitability review, and market-risk disclosure.
          </p>
          <p className="mt-4 text-sm font-semibold text-bank-blue">
            Target range: 2.50% – 27.00%
          </p>
        </button>

        <button
          type="button"
          onClick={() => {
            setSelectedProduct("digital-asset");
            setMessage("");
          }}
          className={`border p-5 text-left transition ${
            selectedProduct === "digital-asset"
              ? "border-bank-blue bg-bank-mist"
              : "border-bank-line bg-white hover:border-bank-blue"
          }`}
        >
          <Coins className="text-bank-blue" size={24} />
          <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-ink-950">
            Digital Asset Lock Program
          </h3>
          <p className="mt-2 text-sm leading-7 text-bank-steel">
            Reviewed digital asset lock strategy for eligible clients with risk
            acknowledgement, duration review, maturity rules, and no guaranteed yield.
          </p>
          <p className="mt-4 text-sm font-semibold text-bank-blue">
            Target net range: 5.50% – 27.00%
          </p>
        </button>
      </div>

      <div className="mt-6 border border-bank-line bg-bank-mist p-5">
        <div className="flex items-start gap-3">
          <LockKeyhole className="mt-1 shrink-0 text-bank-blue" size={20} />

          <div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
              {selectedProduct === "stock-etf"
                ? "Stock & ETF Lock Plan Options"
                : "Digital Asset Lock Plan Options"}
            </h3>

            <p className="mt-2 text-sm leading-7 text-bank-steel">
              Lock terms are designed for investment planning discipline and review
              workflows. Proposal terms should expire after 10–30 days, and suitability
              or eligibility should refresh every 6–12 months or after material changes.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="grid gap-3 border border-bank-line bg-white p-4 lg:grid-cols-[0.8fr_0.6fr_0.7fr_1fr_0.7fr]"
            >
              <div>
                <p className="text-sm font-semibold text-ink-950">{plan.name}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                  Duration
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-950">
                  {plan.interval}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                  Target
                </p>
                <p className="mt-1 text-sm font-semibold text-bank-blue">
                  {plan.targetRange}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                  Strategy
                </p>
                <p className="mt-1 text-sm leading-6 text-bank-steel">
                  {"meaning" in plan ? plan.meaning : plan.strategy}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                  Risk
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-950">
                  {plan.risk}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-5">
        <div className="flex gap-3">
          <AlertTriangle className="mt-1 shrink-0 text-bank-gold" size={20} />
          <p className="text-sm leading-7 text-ink-900">{requiredInvestmentDisclosure}</p>
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 border border-bank-line bg-white p-4">
        <input
          type="checkbox"
          checked={acknowledged}
          onChange={(event) => setAcknowledged(event.target.checked)}
          className="mt-1"
        />
        <span className="text-sm leading-7 text-bank-steel">
          I understand this is a reviewed investment request pathway only. Target ranges
          are not guaranteed, investment products may lose value, and digital assets are
          not bank deposits or FDIC-insured products.
        </span>
      </label>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={handleRequest} className="btn-primary h-11 px-5">
          Request Review
        </button>

        <a
          href={
            selectedProduct === "stock-etf"
              ? "/investments/stock-etf-lock"
              : "/investments/digital-asset-lock"
          }
          className="btn-secondary h-11 px-5"
        >
          View Product Details
        </a>

        <a href="/dashboard/investments/portfolio" className="btn-secondary h-11 px-5">
          View Portfolio
        </a>
      </div>

      {message && (
        <div className="mt-5 flex items-start gap-3 border border-bank-line bg-bank-mist p-4">
          <ShieldCheck className="mt-1 shrink-0 text-bank-blue" size={18} />
          <p className="text-sm leading-6 text-bank-steel">{message}</p>
        </div>
      )}
    </section>
  );
}
