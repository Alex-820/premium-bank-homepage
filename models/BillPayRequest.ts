import mongoose, { Schema } from "mongoose";

const BillPayRequestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    sourceAccountId: {
      type: Schema.Types.ObjectId,
      ref: "BankAccount",
      required: true,
      index: true
    },
    payeeName: {
      type: String,
      required: true,
      trim: true,
      index: true
    },
    payeeCategory: {
      type: String,
      enum: ["UTILITIES", "INSURANCE", "CREDIT_CARD", "LOAN", "RENT", "SUBSCRIPTION", "OTHER"],
      default: "OTHER"
    },
    amountCents: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: "USD"
    },
    memo: {
      type: String,
      trim: true,
      default: ""
    },
    scheduledDate: {
      type: Date,
      default: null
    },
    status: {
      type: String,
      enum: ["SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "CANCELLED", "COMPLETED"],
      default: "SUBMITTED",
      index: true
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

export const BillPayRequest =
  mongoose.models.BillPayRequest ||
  mongoose.model("BillPayRequest", BillPayRequestSchema);
