import mongoose, { Schema } from "mongoose";

const SuitabilityReviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    employmentStatus: {
      type: String,
      enum: ["EMPLOYED", "SELF_EMPLOYED", "BUSINESS_OWNER", "RETIRED", "STUDENT", "OTHER"],
      required: true
    },
    annualIncomeRange: {
      type: String,
      enum: ["UNDER_50K", "50K_100K", "100K_250K", "250K_500K", "500K_PLUS", "PREFER_NOT_TO_SAY"],
      required: true
    },
    netWorthRange: {
      type: String,
      enum: ["UNDER_100K", "100K_500K", "500K_1M", "1M_5M", "5M_PLUS", "PREFER_NOT_TO_SAY"],
      required: true
    },
    investmentObjective: {
      type: String,
      enum: ["CAPITAL_PRESERVATION", "INCOME", "GROWTH", "SPECULATION", "RETIREMENT", "WEALTH_TRANSFER"],
      required: true
    },
    riskTolerance: {
      type: String,
      enum: ["CONSERVATIVE", "MODERATE", "GROWTH", "AGGRESSIVE"],
      required: true
    },
    timeHorizon: {
      type: String,
      enum: ["SHORT_TERM", "MEDIUM_TERM", "LONG_TERM"],
      required: true
    },
    understandsInvestmentRisk: {
      type: Boolean,
      required: true
    },
    understandsNoGuaranteedReturns: {
      type: Boolean,
      required: true
    },
    status: {
      type: String,
      enum: ["SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "NEEDS_MORE_INFO"],
      default: "SUBMITTED",
      index: true
    },
    submittedIp: {
      type: String,
      default: ""
    },
    submittedUserAgent: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

export const SuitabilityReview =
  mongoose.models.SuitabilityReview ||
  mongoose.model("SuitabilityReview", SuitabilityReviewSchema);
