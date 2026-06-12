import mongoose, { Schema } from "mongoose";

const InvestmentAccountApplicationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    accountType: {
      type: String,
      enum: ["INDIVIDUAL_BROKERAGE", "JOINT_BROKERAGE", "IRA", "ROTH_IRA", "TRUST", "BUSINESS_INVESTMENT"],
      required: true,
      index: true
    },
    serviceLevel: {
      type: String,
      enum: ["SELF_DIRECTED", "ROBO_ADVISOR", "HUMAN_ADVISOR", "PRIVATE_CLIENT"],
      required: true
    },
    fundingIntent: {
      type: String,
      enum: ["CASH_TRANSFER", "BANK_ACCOUNT_LINK", "ROLLOVER", "EXTERNAL_TRANSFER", "UNDECIDED"],
      default: "UNDECIDED"
    },
    status: {
      type: String,
      enum: ["SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "NEEDS_MORE_INFO"],
      default: "SUBMITTED",
      index: true
    },
    disclosureAcknowledged: {
      type: Boolean,
      required: true
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

export const InvestmentAccountApplication =
  mongoose.models.InvestmentAccountApplication ||
  mongoose.model("InvestmentAccountApplication", InvestmentAccountApplicationSchema);
