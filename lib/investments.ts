import { InvestmentProfile } from "@/models/InvestmentProfile";
import { nanoid } from "nanoid";

type InvestmentProfileUpdate = {
  investorType?: string;
  investmentExperience?: string;
  riskTolerance?: string;
  timeHorizon?: string;
  liquidityNeed?: string;
  suitabilityStatus?: string;
  digitalAssetEligibility?: string;
};

export async function ensureInvestmentProfile(
  userId: string,
  updates: InvestmentProfileUpdate = {}
) {
  let profile = await InvestmentProfile.findOne({ userId });

  if (!profile) {
    profile = await InvestmentProfile.create({
      userId,
      profileNumber: `INV-${nanoid(10).toUpperCase()}`,
      ...updates
    });

    return profile;
  }

  Object.entries(updates).forEach(([key, value]) => {
    if (value !== undefined) {
      profile.set(key, value);
    }
  });

  await profile.save();

  return profile;
}
