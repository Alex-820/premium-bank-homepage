import { InvestmentRequestForms } from "@/components/dashboard/InvestmentRequestForms";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { ensureInvestmentProfile } from "@/lib/investments";
import { BondTreasuryRequest } from "@/models/BondTreasuryRequest";
import { CryptoETFInterestRequest } from "@/models/CryptoETFInterestRequest";
import { DigitalAssetEligibilityReview } from "@/models/DigitalAssetEligibilityReview";
import { ETFInterestRequest } from "@/models/ETFInterestRequest";
import { InvestmentAccountApplication } from "@/models/InvestmentAccountApplication";
import { PortfolioPreference } from "@/models/PortfolioPreference";
import { StakingEligibilityRequest } from "@/models/StakingEligibilityRequest";
import { SuitabilityReview } from "@/models/SuitabilityReview";
import { ArrowLeft, BarChart3, FileText, ShieldAlert, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

async function getInvestmentDashboardData(userId: string) {
  await connectDB();

  const profile = await ensureInvestmentProfile(userId);

  const [
    suitabilityReviews,
    accountApplications,
    portfolioPreferences,
    etfRequests,
    bondRequests,
    digitalAssetReviews,
    cryptoEtfRequests,
    stakingRequests
  ] = await Promise.all([
    SuitabilityReview.find({ userId }).sort({ createdAt: -1 }).limit(5).lean(),
    InvestmentAccountApplication.find({ userId }).sort({ createdAt: -1 }).limit(5).lean(),
    PortfolioPreference.find({ userId }).sort({ createdAt: -1 }).limit(5).lean(),
    ETFInterestRequest.find({ userId }).sort({ createdAt: -1 }).limit(5).lean(),
    BondTreasuryRequest.find({ userId }).sort({ createdAt: -1 }).limit(5).lean(),
    DigitalAssetEligibilityReview.find({ userId }).sort({ createdAt: -1 }).limit(5).lean(),
    CryptoETFInterestRequest.find({ userId }).sort({ createdAt: -1 }).limit(5).lean(),
    StakingEligibilityRequest.find({ userId }).sort({ createdAt: -1 }).limit(5).lean()
  ]);

  const requests = [
    ...suitabilityReviews.map((item: any) => ({
      id: String(item._id),
      type: "Suitability Review",
      title: item.investmentObjective,
      status: item.status,
      createdAt: item.createdAt
    })),
    ...accountApplications.map((item: any) => ({
      id: String(item._id),
      type: "Investment Account",
      title: item.accountType,
      status: item.status,
      createdAt: item.createdAt
    })),
    ...portfolioPreferences.map((item: any) => ({
      id: String(item._id),
      type: "Portfolio Preference",
      title: item.portfolioGoal,
      status: item.status,
      createdAt: item.createdAt
    })),
    ...etfRequests.map((item: any) => ({
      id: String(item._id),
      type: "ETF Interest",
      title: item.etfCategory,
      status: item.status,
      createdAt: item.createdAt
    })),
    ...bondRequests.map((item: any) => ({
      id: String(item._id),
      type: "Bond/Treasury",
      title: item.fixedIncomeType,
      status: item.status,
      createdAt: item.createdAt
    })),
    ...digitalAssetReviews.map((item: any) => ({
      id: String(item._id),
      type: "Digital Asset Eligibility",
      title: item.digitalAssetExperience,
      status: item.eligibilityStatus,
      createdAt: item.createdAt
    })),
    ...cryptoEtfRequests.map((item: any) => ({
      id: String(item._id),
      type: "Crypto ETF Interest",
      title: item.requestedExposure,
      status: item.status,
      createdAt: item.createdAt
    })),
    ...stakingRequests.map((item: any) => ({
      id: String(item._id),
      type: "Staking Eligibility",
      title: item.requestedAsset,
      status: item.status,
      createdAt: item.createdAt
    }))
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return {
    profile,
    requests
  };
}

export default async function CustomerInvestmentsPage() {
  const session = await getCustomerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await getInvestmentDashboardData(session.userId);

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
            Wealth & Investment Dashboard
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl">
            Request investment, portfolio, fixed income, and digital asset reviews.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-bank-steel">
            This dashboard captures investment interest and suitability information for review.
            It does not provide trading, brokerage execution, custody, staking, guaranteed returns,
            or investment advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <FileText className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Profile Number
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.profile.profileNumber}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <BarChart3 className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Risk Tolerance
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.profile.riskTolerance}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Suitability
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.profile.suitabilityStatus}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldAlert className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Digital Assets
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.profile.digitalAssetEligibility}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="border border-bank-gold/40 bg-[#fff8e8] p-5">
          <p className="text-sm leading-7 text-ink-900">
            Investment products are not bank deposits, are not FDIC insured, are not guaranteed by the bank,
            and may lose value. Digital asset investments may provide market exposure or variable network
            rewards, but returns are not guaranteed and are subject to market, liquidity, protocol, custody,
            regulatory, tax, and operational risks.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <InvestmentRequestForms />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <div className="border-b border-bank-line pb-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
              Recent Investment Requests
            </h2>
            <p className="mt-2 text-sm leading-6 text-bank-steel">
              Submitted requests awaiting advisor, compliance, or operations review.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {data.requests.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-5 text-sm text-bank-steel">
                No investment requests yet.
              </div>
            ) : (
              data.requests.map((item) => (
                <div
                  key={`${item.type}-${item.id}`}
                  className="grid gap-3 border border-bank-line bg-white p-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink-950">
                      {item.type}
                    </p>
                    <p className="mt-1 text-xs text-bank-steel">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[11px] text-bank-steel">
                      {formatDate(item.createdAt)}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="inline-flex border border-bank-line bg-bank-mist px-3 py-1 text-xs font-semibold text-bank-blue">
                      {item.status}
                    </span>
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
