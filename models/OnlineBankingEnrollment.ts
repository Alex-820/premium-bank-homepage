import mongoose, { Schema } from "mongoose";
import { applicationStatuses } from "@/types/backend";

const OnlineBankingEnrollmentSchema = new Schema(
  {
    accountType: {
      type: String,
      required: true,
      enum: [
        "Personal account",
        "Business account",
        "Credit card account",
        "Loan account",
        "Wealth or investment relationship"
      ],
      index: true
    },
    customerIdentifier: {
      type: String,
      required: true,
      trim: true
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
    verificationStatus: {
      type: String,
      enum: ["NOT_STARTED", "PENDING", "VERIFIED", "FAILED"],
      default: "NOT_STARTED"
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    reviewedAt: {
      type: Date,
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

export const OnlineBankingEnrollment =
  mongoose.models.OnlineBankingEnrollment ||
  mongoose.model("OnlineBankingEnrollment", OnlineBankingEnrollmentSchema);
