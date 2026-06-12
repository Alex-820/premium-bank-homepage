import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { requireAdminSession } from "@/lib/adminSession";
import { connectDB } from "@/lib/db";
import { BondTreasuryRequest } from "@/models/BondTreasuryRequest";
import { CryptoETFInterestRequest } from "@/models/CryptoETFInterestRequest";
import { DigitalAssetEligibilityReview } from "@/models/DigitalAssetEligibilityReview";
import { ETFInterestRequest } from "@/models/ETFInterestRequest";
import { InvestmentAccountApplication } from "@/models/InvestmentAccountApplication";
import { InvestmentProfile } from "@/models/InvestmentProfile";
import { PortfolioPreference } from "@/models/PortfolioPreference";
import { StakingEligibilityRequest } from "@/models/StakingEligibilityRequest";
import { SuitabilityReview } from "@/models/SuitabilityReview";
import { ArrowLeft, BarChart3, Coins, FileText, Landmark, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";
import type { ComponentType } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Investment Review Dashboard | Aster Bank",
  description:
    "Admin review dashboard for suitability, investment account, ETF, bond, digital asset, and staking requests."
};

type ReviewItem = {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  status: string;
  createdAt: string;
};

type IconType = ComponentType<{ size?: number; className?: string }>;

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

function toId(value: unknown) {
  if (!value) return "";
  return String(value);
}

async function getInvestmentAdminData() {
  await connectDB();

  const [
    investmentProfiles,
    suitabilityReviews,
    accountApplications,
    portfolioPreferences,
    etfRequests,
    bondRequests,
    digitalAssetReviews,
    cryptoEtfRequests,
    stakingRequests
  ] = await Promise.all([
    InvestmentProfile.find().sort({ createdAt: -1 }).limit(8).lean(),
    SuitabilityReview.find().sort({ createdAt: -1 }).limit(8).lean(),
    InvestmentAccountApplication.find().sort({ createdAt: -1 }).limit(8).lean(),
    PortfolioPreference.find().sort({ createdAt: -1 }).limit(8).lean(),
    ETFInterestRequest.find().sort({ createdAt: -1 }).limit(8).lean(),
    BondTreasuryRequest.find().sort({ createdAt: -1 }).limit(8).lean(),
    DigitalAssetEligibilityReview.find().sort({ createdAt: -1 }).limit(8).lean(),
    CryptoETFInterestRequest.find().sort({ createdAt: -1 }).limit(8).lean(),
    StakingEligibilityRequest.find().sort({ createdAt: -1 }).limit(8).lean()
  ]);

  const counts = {
    investmentProfiles: await InvestmentProfile.countDocuments(),
    suitabilityReviews: await SuitabilityReview.countDocuments(),
    accountApplications: await InvestmentAccountApplication.countDocuments(),
    portfolioPreferences: await PortfolioPreference.countDocuments(),
    etfRequests: await ETFInterestRequest.countDocuments(),
    bondRequests: await BondTreasuryRequest.countDocuments(),
    digitalAssetReviews: await DigitalAssetEligibilityReview.countDocuments(),
    cryptoEtfRequests: await CryptoETFInterestRequest.countDocuments(),
    stakingRequests: await StakingEligibilityRequest.countDocuments()
  };

  return {
    counts,
    investmentProfiles: investmentProfiles.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/investment-profiles/${toId(item._id)}`,
      title: item.profileNumber,
      subtitle: `${item.investorType} • ${item.riskTolerance}`,
      status: item.suitabilityStatus,
      createdAt: formatDate(item.createdAt)
    })),
    suitabilityReviews: suitabilityReviews.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/suitability-reviews/${toId(item._id)}`,
      title: item.investmentObjective,
      subtitle: `${item.riskTolerance} • ${item.timeHorizon}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    accountApplications: accountApplications.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/investment-account-applications/${toId(item._id)}`,
      title: item.accountType,
      subtitle: `${item.serviceLevel} • ${item.fundingIntent}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    portfolioPreferences: portfolioPreferences.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/portfolio-preferences/${toId(item._id)}`,
      title: item.portfolioGoal,
      subtitle: `${item.preferredManagement} • ${item.riskLevel}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    etfRequests: etfRequests.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/etf-interest-requests/${toId(item._id)}`,
      title: item.etfCategory,
      subtitle: `${item.advisoryPreference} • ${item.intendedAllocationRange}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    bondRequests: bondRequests.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/bond-treasury-requests/${toId(item._id)}`,
      title: item.fixedIncomeType,
      subtitle: `${item.maturityPreference} • ${item.approximateAmountRange}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    digitalAssetReviews: digitalAssetReviews.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/digital-asset-eligibility/${toId(item._id)}`,
      title: item.digitalAssetExperience,
      subtitle: "Digital asset risk acknowledgement review",
      status: item.eligibilityStatus,
      createdAt: formatDate(item.createdAt)
    })),
    cryptoEtfRequests: cryptoEtfRequests.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/crypto-etf-interest-requests/${toId(item._id)}`,
      title: item.requestedExposure,
      subtitle: `${item.advisoryPreference} • ${item.intendedAllocationRange}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    stakingRequests: stakingRequests.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/staking-eligibility-requests/${toId(item._id)}`,
      title: item.requestedAsset,
      subtitle: `${item.rewardReportingPreference} reporting`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    }))
  };
}

function StatCard({
  label,
  value,
  icon: Icon
}: {
  label: string;
  value: number;
  icon: IconType;
}) {
  return (
    <div className="border border-bank-line bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
          {label}
        </p>
        <Icon size={20} className="text-bank-blue" />
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
        {value}
      </p>
    </div>
  );
}

function ReviewSection({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: ReviewItem[];
}) {
  return (
    <section className="border border-bank-line bg-white p-6 shadow-sm">
      <div className="border-b border-bank-line pb-5">
        <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-bank-steel">{description}</p>
      </div>

      <div className="mt-5 grid gap-3">
        {items.length === 0 ? (
          <div className="border border-bank-line bg-bank-mist p-4 text-sm text-bank-steel">
            No records yet.
          </div>
        ) : (
          items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="grid gap-3 border border-bank-line bg-white p-4 transition hover:border-bank-blue hover:bg-bank-mist sm:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="text-sm font-semibold text-ink-950">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-bank-steel">{item.subtitle}</p>
                <p className="mt-2 text-[11px] text-bank-steel">ID: {item.id}</p>
              </div>

              <div className="sm:text-right">
                <span className="inline-flex border border-bank-line bg-bank-mist px-3 py-1 text-xs font-semibold text-bank-blue">
                  {item.status}
                </span>
                <p className="mt-2 text-xs text-bank-steel">{item.createdAt}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
}

export default async function AdminInvestmentsPage() {
  await requireAdminSession();

  const data = await getInvestmentAdminData();

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <a
            href="/admin"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bank-goldSoft"
          >
            <ArrowLeft size={16} /> Back to admin dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-goldSoft">
            Investment Operations
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Admin review for investment, ETF, bond, and digital asset requests.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Review suitability, investment account applications, portfolio preferences,
            ETF interest, fixed income requests, digital asset eligibility, crypto ETF
            interest, and staking eligibility requests.
          </p>

          <div className="mt-8 border border-bank-gold/40 bg-white/[0.04] p-5">
            <p className="text-sm leading-7 text-white/70">
              These workflows are request and review placeholders only. They do not execute trades,
              open brokerage accounts, custody assets, stake crypto, promise yield, or provide
              personalized investment advice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Profiles" value={data.counts.investmentProfiles} icon={FileText} />
          <StatCard label="Suitability" value={data.counts.suitabilityReviews} icon={ShieldCheckIcon} />
          <StatCard label="Accounts" value={data.counts.accountApplications} icon={Landmark} />
          <StatCard label="Portfolios" value={data.counts.portfolioPreferences} icon={BarChart3} />
          <StatCard label="ETF Requests" value={data.counts.etfRequests} icon={BarChart3} />
          <StatCard label="Bonds/Treasury" value={data.counts.bondRequests} icon={Landmark} />
          <StatCard label="Digital Assets" value={data.counts.digitalAssetReviews} icon={ShieldAlert} />
          <StatCard label="Crypto ETF" value={data.counts.cryptoEtfRequests} icon={Coins} />
          <StatCard label="Staking" value={data.counts.stakingRequests} icon={Coins} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 sm:pb-20 lg:grid-cols-2">
        <ReviewSection
          title="Investment Profiles"
          description="Customer investment profile records and suitability status."
          items={data.investmentProfiles}
        />

        <ReviewSection
          title="Suitability Reviews"
          description="Submitted investment suitability questionnaires for advisor or compliance review."
          items={data.suitabilityReviews}
        />

        <ReviewSection
          title="Investment Account Applications"
          description="Requests for brokerage, retirement, advisor, or private client investment account access."
          items={data.accountApplications}
        />

        <ReviewSection
          title="Portfolio Preferences"
          description="Customer preferences for managed portfolios, robo-advisory, private client teams, and goals."
          items={data.portfolioPreferences}
        />

        <ReviewSection
          title="ETF Interest Requests"
          description="Customer requests for ETF access review across market, bond, sector, and digital asset ETF categories."
          items={data.etfRequests}
        />

        <ReviewSection
          title="Bond & Treasury Requests"
          description="Fixed income requests for Treasury bills, notes, bonds, municipal bonds, corporate bonds, and ladders."
          items={data.bondRequests}
        />

        <ReviewSection
          title="Digital Asset Eligibility"
          description="Risk acknowledgement and eligibility review for digital asset investment access."
          items={data.digitalAssetReviews}
        />

        <ReviewSection
          title="Crypto ETF Interest"
          description="Requests for Bitcoin ETF, Ethereum ETF, multi-asset digital asset ETF, or managed digital asset ETF portfolio exposure."
          items={data.cryptoEtfRequests}
        />

        <ReviewSection
          title="Staking Eligibility"
          description="Requests for variable proof-of-stake network reward eligibility review."
          items={data.stakingRequests}
        />
      </section>

      <Footer />
    </main>
  );
}

function ShieldCheckIcon({ size, className }: { size?: number; className?: string }) {
  return <ShieldAlert size={size} className={className} />;
}
