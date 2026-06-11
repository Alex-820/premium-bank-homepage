import mongoose, { Schema } from "mongoose";

const CardControlRequestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    requestType: {
      type: String,
      enum: [
        "LOCK_CARD",
        "UNLOCK_CARD",
        "TRAVEL_NOTICE",
        "SPENDING_LIMIT_CHANGE",
        "REPLACEMENT_CARD"
      ],
      required: true,
      index: true
    },
    cardLabel: {
      type: String,
      required: true,
      trim: true
    },
    maskedCardNumber: {
      type: String,
      trim: true,
      default: ""
    },
    travelDestination: {
      type: String,
      trim: true,
      default: ""
    },
    travelStartDate: {
      type: Date,
      default: null
    },
    travelEndDate: {
      type: Date,
      default: null
    },
    requestedLimitCents: {
      type: Number,
      default: null
    },
    replacementReason: {
      type: String,
      trim: true,
      default: ""
    },
    memo: {
      type: String,
      trim: true,
      default: ""
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

export const CardControlRequest =
  mongoose.models.CardControlRequest ||
  mongoose.model("CardControlRequest", CardControlRequestSchema);
