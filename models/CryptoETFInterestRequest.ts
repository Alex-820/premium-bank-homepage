import mongoose, { Schema } from "mongoose";

const CryptoETFInterestRequestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    requestedExposure: {
      type: String,
      enum: ["BITCOIN_ETF", "ETHEREUM_ETF", "MULTI_ASSET_DIGITAL_ASSET_ETF", "MANAGED_DIGITAL_ASSET_ETF_PORTFOLIO"],
      required: true
    },
    intendedAllocationRange: {
      type: String,
      enum: ["UNDER_2_PERCENT", "2_5_PERCENT", "5_10_PERCENT", "10_PERCENT_PLUS", "UNDECIDED"],
      default: "UNDECIDED"
    },
    advisoryPreference: {
      type: String,
      enum: ["ADVISOR_REVIEW", "MANAGED_PORTFOLIO", "PRIVATE_CLIENT_REVIEW"],
      required: true
    },
    status: {
      type: String,
      enum: ["SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "NEEDS_MORE_INFO"],
      default: "SUBMITTED",
      index: true
    },
    riskAcknowledged: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

export const CryptoETFInterestRequest =
  mongoose.models.CryptoETFInterestRequest ||
  mongoose.model("CryptoETFInterestRequest", CryptoETFInterestRequestSchema);
