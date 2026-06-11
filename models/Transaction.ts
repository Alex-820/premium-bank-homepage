import mongoose, { Schema } from "mongoose";

const TransactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    accountId: {
      type: Schema.Types.ObjectId,
      ref: "BankAccount",
      required: true,
      index: true
    },
    transactionType: {
      type: String,
      enum: [
        "DEPOSIT",
        "WITHDRAWAL",
        "TRANSFER",
        "CARD_PAYMENT",
        "BILL_PAYMENT",
        "LOAN_PAYMENT",
        "INTEREST",
        "FEE",
        "REFUND",
        "ADJUSTMENT"
      ],
      required: true,
      index: true
    },
    direction: {
      type: String,
      enum: ["DEBIT", "CREDIT"],
      required: true
    },
    amountCents: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: "USD"
    },
    status: {
      type: String,
      enum: ["PENDING", "PROCESSING", "POSTED", "FAILED", "REVERSED", "FLAGGED"],
      default: "PENDING",
      index: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    reference: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    postedAt: {
      type: Date,
      default: null
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
);

export const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
