import mongoose, { Schema } from "mongoose";

const BankAccountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    accountType: {
      type: String,
      enum: [
        "CHECKING",
        "SAVINGS",
        "PREMIUM_CHECKING",
        "HIGH_YIELD_SAVINGS",
        "BUSINESS_CHECKING",
        "MONEY_MARKET"
      ],
      required: true,
      index: true
    },
    accountNickname: {
      type: String,
      trim: true,
      default: ""
    },
    maskedAccountNumber: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      default: "USD"
    },
    status: {
      type: String,
      enum: ["PENDING", "ACTIVE", "FROZEN", "RESTRICTED", "CLOSED"],
      default: "PENDING",
      index: true
    },
    availableBalanceCents: {
      type: Number,
      default: 0
    },
    ledgerBalanceCents: {
      type: Number,
      default: 0
    },
    openedAt: {
      type: Date,
      default: null
    },
    closedAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

export const BankAccount =
  mongoose.models.BankAccount ||
  mongoose.model("BankAccount", BankAccountSchema);
