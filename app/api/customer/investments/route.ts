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
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getCustomerSession();

  if (!session) {
    return NextResponse.json(
      { ok: false, message: "Authentication required." },
      { status: 401 }
    );
  }

  await connectDB();

  const profile = await ensureInvestmentProfile(session.userId);

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
    SuitabilityReview.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean(),
    InvestmentAccountApplication.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean(),
    PortfolioPreference.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean(),
    ETFInterestRequest.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean(),
    BondTreasuryRequest.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean(),
    DigitalAssetEligibilityReview.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean(),
    CryptoETFInterestRequest.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean(),
    StakingEligibilityRequest.find({ userId: session.userId }).sort({ createdAt: -1 }).limit(10).lean()
  ]);

  return NextResponse.json({
    ok: true,
    profile: {
      id: String(profile._id),
      profileNumber: profile.profileNumber,
      investorType: profile.investorType,
      investmentExperience: profile.investmentExperience,
      riskTolerance: profile.riskTolerance,
      timeHorizon: profile.timeHorizon,
      liquidityNeed: profile.liquidityNeed,
      suitabilityStatus: profile.suitabilityStatus,
      digitalAssetEligibility: profile.digitalAssetEligibility
    },
    requests: {
      suitabilityReviews,
      accountApplications,
      portfolioPreferences,
      etfRequests,
      bondRequests,
      digitalAssetReviews,
      cryptoEtfRequests,
      stakingRequests
    }
  });
}
