import mongoose, { Schema } from "mongoose";

const ETFInterestRequestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    etfCategory: {
      type: String,
      enum: ["BROAD_MARKET", "DIVIDEND", "SECTOR", "INTERNATIONAL", "BOND_ETF", "DIGITAL_ASSET_ETF"],
      required: true
    },
    intendedAllocationRange: {
      type: String,
      enum: ["UNDER_5_PERCENT", "5_10_PERCENT", "10_20_PERCENT", "20_PERCENT_PLUS", "UNDECIDED"],
      default: "UNDECIDED"
    },
    advisoryPreference: {
      type: String,
      enum: ["SELF_DIRECTED", "ADVISOR_REVIEW", "MANAGED_PORTFOLIO"],
      required: true
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

export const ETFInterestRequest =
  mongoose.models.ETFInterestRequest ||
  mongoose.model("ETFInterestRequest", ETFInterestRequestSchema);
