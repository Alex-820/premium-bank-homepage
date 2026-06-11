import mongoose, { Schema } from "mongoose";

const CustomerProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true
    },
    customerNumber: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    relationshipType: {
      type: String,
      enum: ["PERSONAL", "BUSINESS", "PRIVATE_CLIENT"],
      default: "PERSONAL",
      index: true
    },
    onboardingStatus: {
      type: String,
      enum: ["PROFILE_CREATED", "PENDING_VERIFICATION", "UNDER_REVIEW", "VERIFIED", "RESTRICTED"],
      default: "PROFILE_CREATED",
      index: true
    },
    kycStatus: {
      type: String,
      enum: ["NOT_STARTED", "IN_PROGRESS", "PENDING_REVIEW", "VERIFIED", "REJECTED", "EXPIRED"],
      default: "NOT_STARTED",
      index: true
    },
    riskTier: {
      type: String,
      enum: ["UNASSIGNED", "LOW", "MEDIUM", "HIGH"],
      default: "UNASSIGNED"
    },
    preferredName: {
      type: String,
      trim: true,
      default: ""
    },
    addressStatus: {
      type: String,
      enum: ["NOT_PROVIDED", "PENDING_REVIEW", "VERIFIED", "REJECTED"],
      default: "NOT_PROVIDED"
    }
  },
  { timestamps: true }
);

export const CustomerProfile =
  mongoose.models.CustomerProfile ||
  mongoose.model("CustomerProfile", CustomerProfileSchema);
