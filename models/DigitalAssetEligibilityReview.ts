import mongoose, { Schema } from "mongoose";

const DigitalAssetEligibilityReviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    digitalAssetExperience: {
      type: String,
      enum: ["NONE", "LIMITED", "MODERATE", "EXTENSIVE"],
      required: true
    },
    understandsVolatility: {
      type: Boolean,
      required: true
    },
    understandsNotDeposit: {
      type: Boolean,
      required: true
    },
    understandsNotFDICInsured: {
      type: Boolean,
      required: true
    },
    understandsMayLoseValue: {
      type: Boolean,
      required: true
    },
    understandsNoGuarantee: {
      type: Boolean,
      required: true
    },
    eligibilityStatus: {
      type: String,
      enum: ["SUBMITTED", "UNDER_REVIEW", "ELIGIBLE", "NOT_ELIGIBLE", "RESTRICTED", "NEEDS_MORE_INFO"],
      default: "SUBMITTED",
      index: true
    }
  },
  { timestamps: true }
);

export const DigitalAssetEligibilityReview =
  mongoose.models.DigitalAssetEligibilityReview ||
  mongoose.model("DigitalAssetEligibilityReview", DigitalAssetEligibilityReviewSchema);
