import mongoose, { Schema } from "mongoose";
import { applicationStatuses } from "@/types/backend";

const AccountOpeningApplicationSchema = new Schema(
  {
    relationshipType: {
      type: String,
      required: true,
      enum: [
        "Personal Banking",
        "Business Banking",
        "Wealth Management",
        "Investment Account",
        "Lending Inquiry"
      ],
      index: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: applicationStatuses,
      default: "PENDING",
      index: true
    },
    kycStatus: {
      type: String,
      enum: ["NOT_STARTED", "IN_PROGRESS", "PENDING_REVIEW", "VERIFIED", "REJECTED", "EXPIRED"],
      default: "NOT_STARTED"
    },
    kybStatus: {
      type: String,
      enum: ["NOT_REQUIRED", "NOT_STARTED", "IN_PROGRESS", "PENDING_REVIEW", "VERIFIED", "REJECTED", "EXPIRED"],
      default: "NOT_REQUIRED"
    },
    riskReviewStatus: {
      type: String,
      enum: ["NOT_STARTED", "PENDING_REVIEW", "CLEARED", "FLAGGED"],
      default: "NOT_STARTED"
    },
    assignedReviewerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null
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

export const AccountOpeningApplication =
  mongoose.models.AccountOpeningApplication ||
  mongoose.model("AccountOpeningApplication", AccountOpeningApplicationSchema);
