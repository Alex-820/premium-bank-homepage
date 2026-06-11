import mongoose, { Schema } from "mongoose";

const TransferRequestSchema = new Schema(
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
    transferType: {
      type: String,
      enum: ["INTERNAL", "EXTERNAL", "WIRE"],
      required: true,
      index: true
    },
    recipientName: {
      type: String,
      required: true,
      trim: true
    },
    recipientReference: {
      type: String,
      trim: true,
      default: ""
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

export const TransferRequest =
  mongoose.models.TransferRequest ||
  mongoose.model("TransferRequest", TransferRequestSchema);
