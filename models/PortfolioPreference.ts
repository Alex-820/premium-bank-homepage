import mongoose, { Schema } from "mongoose";

const PortfolioPreferenceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    portfolioGoal: {
      type: String,
      enum: ["INCOME", "GROWTH", "BALANCED", "RETIREMENT", "WEALTH_PRESERVATION", "TAX_AWARE"],
      required: true
    },
    preferredManagement: {
      type: String,
      enum: ["ROBO_ADVISOR", "HUMAN_ADVISOR", "PRIVATE_CLIENT_TEAM"],
      required: true
    },
    riskLevel: {
      type: String,
      enum: ["CONSERVATIVE", "MODERATE", "GROWTH", "AGGRESSIVE"],
      required: true
    },
    notes: {
      type: String,
      trim: true,
      default: ""
    },
    status: {
      type: String,
      enum: ["SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "NEEDS_MORE_INFO"],
      default: "SUBMITTED",
      index: true
    }
  },
  { timestamps: true }
);

export const PortfolioPreference =
  mongoose.models.PortfolioPreference ||
  mongoose.model("PortfolioPreference", PortfolioPreferenceSchema);
