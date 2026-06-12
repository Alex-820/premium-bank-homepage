"use client";

import { useState } from "react";

type FormState = {
  message: string;
  loading: boolean;
};

const defaultState: FormState = {
  message: "",
  loading: false
};

export function InvestmentRequestForms() {
  const [state, setState] = useState(defaultState);

  async function post(endpoint: string, payload: Record<string, unknown>, successMessage: string) {
    setState({ loading: true, message: "Submitting request..." });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        setState({
          loading: false,
          message: data?.message || "Request could not be submitted."
        });
        return;
      }

      setState({
        loading: false,
        message: successMessage
      });
    } catch {
      setState({
        loading: false,
        message: "Network error. Please try again."
      });
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <InvestmentFormCard title="Suitability Review" description="Submit investor risk, objective, and suitability information for review.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/suitability",
              {
                employmentStatus: "EMPLOYED",
                annualIncomeRange: "100K_250K",
                netWorthRange: "500K_1M",
                investmentObjective: "GROWTH",
                riskTolerance: "MODERATE",
                timeHorizon: "LONG_TERM",
                understandsInvestmentRisk: true,
                understandsNoGuaranteedReturns: true
              },
              "Suitability review submitted."
            )
          }
          className="btn-primary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit Sample Suitability Review
        </button>
      </InvestmentFormCard>

      <InvestmentFormCard title="Investment Account Application" description="Request review for brokerage, retirement, advisor, or private client investment account access.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/account-application",
              {
                accountType: "INDIVIDUAL_BROKERAGE",
                serviceLevel: "HUMAN_ADVISOR",
                fundingIntent: "UNDECIDED",
                disclosureAcknowledged: true
              },
              "Investment account application submitted."
            )
          }
          className="btn-primary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit Investment Account Request
        </button>
      </InvestmentFormCard>

      <InvestmentFormCard title="ETF Interest" description="Request ETF access review including broad market, bond ETF, and digital asset ETF categories.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/etf-interest",
              {
                etfCategory: "BROAD_MARKET",
                intendedAllocationRange: "5_10_PERCENT",
                advisoryPreference: "ADVISOR_REVIEW"
              },
              "ETF interest request submitted."
            )
          }
          className="btn-secondary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit ETF Interest
        </button>
      </InvestmentFormCard>

      <InvestmentFormCard title="Bonds & Treasury Bills" description="Request review for Treasury bills, Treasury notes, bonds, municipal bonds, or bond ladder strategies.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/bond-treasury",
              {
                fixedIncomeType: "TREASURY_BILLS",
                maturityPreference: "SHORT_TERM",
                incomeObjective: "CAPITAL_PRESERVATION",
                approximateAmountRange: "10K_50K"
              },
              "Bond/Treasury request submitted."
            )
          }
          className="btn-secondary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit Bond/Treasury Request
        </button>
      </InvestmentFormCard>

      <InvestmentFormCard title="Portfolio Preference" description="Request portfolio management review for income, growth, retirement, preservation, or tax-aware goals.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/portfolio-preference",
              {
                portfolioGoal: "BALANCED",
                preferredManagement: "HUMAN_ADVISOR",
                riskLevel: "MODERATE",
                notes: "Interested in a balanced portfolio review."
              },
              "Portfolio preference submitted."
            )
          }
          className="btn-secondary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit Portfolio Preference
        </button>
      </InvestmentFormCard>

      <InvestmentFormCard title="Digital Asset Eligibility" description="Submit risk acknowledgements before any digital asset ETF or staking review can be considered.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/digital-asset-eligibility",
              {
                digitalAssetExperience: "LIMITED",
                understandsVolatility: true,
                understandsNotDeposit: true,
                understandsNotFDICInsured: true,
                understandsMayLoseValue: true,
                understandsNoGuarantee: true
              },
              "Digital asset eligibility review submitted."
            )
          }
          className="btn-secondary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit Digital Asset Eligibility
        </button>
      </InvestmentFormCard>

      <InvestmentFormCard title="Crypto ETF Interest" description="Request advisor review for Bitcoin ETF, Ethereum ETF, or managed digital asset ETF portfolio exposure.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/crypto-etf-interest",
              {
                requestedExposure: "BITCOIN_ETF",
                intendedAllocationRange: "UNDER_2_PERCENT",
                advisoryPreference: "ADVISOR_REVIEW",
                riskAcknowledged: true
              },
              "Crypto ETF interest request submitted."
            )
          }
          className="btn-secondary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit Crypto ETF Interest
        </button>
      </InvestmentFormCard>

      <InvestmentFormCard title="Staking Eligibility" description="Request review for variable proof-of-stake reward eligibility. Rewards are not guaranteed.">
        <button
          type="button"
          disabled={state.loading}
          onClick={() =>
            post(
              "/api/customer/investments/staking-eligibility",
              {
                requestedAsset: "ETH",
                understandsVariableRewards: true,
                understandsSlashingRisk: true,
                understandsLockupUnbonding: true,
                understandsAssetPriceRisk: true,
                rewardReportingPreference: "MONTHLY"
              },
              "Staking eligibility request submitted."
            )
          }
          className="btn-secondary h-11 w-full justify-center disabled:opacity-60"
        >
          Submit Staking Eligibility
        </button>
      </InvestmentFormCard>

      {state.message && (
        <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel lg:col-span-2">
          {state.message}
        </div>
      )}
    </div>
  );
}

function InvestmentFormCard({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-bank-line bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
        {title}
      </h3>
      <p className="mt-2 min-h-[56px] text-sm leading-7 text-bank-steel">
        {description}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
