import mongoose, { Schema } from "mongoose";

const InvestmentProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true
    },
    profileNumber: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    investorType: {
      type: String,
      enum: ["INDIVIDUAL", "JOINT", "RETIREMENT", "TRUST", "BUSINESS", "PRIVATE_CLIENT"],
      default: "INDIVIDUAL",
      index: true
    },
    investmentExperience: {
      type: String,
      enum: ["NONE", "LIMITED", "MODERATE", "EXTENSIVE", "PROFESSIONAL"],
      default: "NONE"
    },
    riskTolerance: {
      type: String,
      enum: ["UNASSIGNED", "CONSERVATIVE", "MODERATE", "GROWTH", "AGGRESSIVE"],
      default: "UNASSIGNED",
      index: true
    },
    timeHorizon: {
      type: String,
      enum: ["UNASSIGNED", "SHORT_TERM", "MEDIUM_TERM", "LONG_TERM"],
      default: "UNASSIGNED"
    },
    liquidityNeed: {
      type: String,
      enum: ["UNASSIGNED", "LOW", "MEDIUM", "HIGH"],
      default: "UNASSIGNED"
    },
    suitabilityStatus: {
      type: String,
      enum: ["NOT_STARTED", "PENDING_REVIEW", "SUITABLE", "NOT_SUITABLE", "NEEDS_MORE_INFO"],
      default: "NOT_STARTED",
      index: true
    },
    digitalAssetEligibility: {
      type: String,
      enum: ["NOT_REQUESTED", "PENDING_REVIEW", "ELIGIBLE", "NOT_ELIGIBLE", "RESTRICTED"],
      default: "NOT_REQUESTED",
      index: true
    }
  },
  { timestamps: true }
);

export const InvestmentProfile =
  mongoose.models.InvestmentProfile ||
  mongoose.model("InvestmentProfile", InvestmentProfileSchema);
