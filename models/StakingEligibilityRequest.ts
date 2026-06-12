import mongoose, { Schema } from "mongoose";

const StakingEligibilityRequestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    requestedAsset: {
      type: String,
      enum: ["ETH", "SOL", "OTHER_PROOF_OF_STAKE_ASSET"],
      required: true
    },
    understandsVariableRewards: {
      type: Boolean,
      required: true
    },
    understandsSlashingRisk: {
      type: Boolean,
      required: true
    },
    understandsLockupUnbonding: {
      type: Boolean,
      required: true
    },
    understandsAssetPriceRisk: {
      type: Boolean,
      required: true
    },
    rewardReportingPreference: {
      type: String,
      enum: ["MONTHLY", "QUARTERLY", "ANNUAL"],
      default: "MONTHLY"
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

export const StakingEligibilityRequest =
  mongoose.models.StakingEligibilityRequest ||
  mongoose.model("StakingEligibilityRequest", StakingEligibilityRequestSchema);
