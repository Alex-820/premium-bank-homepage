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
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  return NextResponse.json({
    ok: true,
    database: "connected",
    models: [
      InvestmentProfile.modelName,
      SuitabilityReview.modelName,
      InvestmentAccountApplication.modelName,
      PortfolioPreference.modelName,
      ETFInterestRequest.modelName,
      BondTreasuryRequest.modelName,
      DigitalAssetEligibilityReview.modelName,
      CryptoETFInterestRequest.modelName,
      StakingEligibilityRequest.modelName
    ],
    note: "Investment models are request/review placeholders only. No real trading, custody, brokerage, staking, or money movement is connected.",
    timestamp: new Date().toISOString()
  });
}
