import mongoose, { Schema } from "mongoose";

const BondTreasuryRequestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    fixedIncomeType: {
      type: String,
      enum: ["TREASURY_BILLS", "TREASURY_NOTES", "TREASURY_BONDS", "MUNICIPAL_BONDS", "CORPORATE_BONDS", "BOND_LADDER"],
      required: true
    },
    maturityPreference: {
      type: String,
      enum: ["SHORT_TERM", "INTERMEDIATE", "LONG_TERM", "LADDERED", "UNDECIDED"],
      required: true
    },
    incomeObjective: {
      type: String,
      enum: ["CAPITAL_PRESERVATION", "REGULAR_INCOME", "TAX_AWARE_INCOME", "DIVERSIFICATION"],
      required: true
    },
    approximateAmountRange: {
      type: String,
      enum: ["UNDER_10K", "10K_50K", "50K_250K", "250K_PLUS", "UNDECIDED"],
      default: "UNDECIDED"
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

export const BondTreasuryRequest =
  mongoose.models.BondTreasuryRequest ||
  mongoose.model("BondTreasuryRequest", BondTreasuryRequestSchema);
