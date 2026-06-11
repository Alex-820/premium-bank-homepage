import mongoose, { Schema } from "mongoose";
import { fraudSeverities, fraudStatuses } from "@/types/backend";

const FraudReportSchema = new Schema(
  {
    fraudType: {
      type: String,
      required: true,
      trim: true,
      index: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
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
    message: {
      type: String,
      required: true,
      maxlength: 5000
    },
    severity: {
      type: String,
      enum: fraudSeverities,
      default: "MEDIUM",
      index: true
    },
    status: {
      type: String,
      enum: fraudStatuses,
      default: "SUBMITTED",
      index: true
    },
    assignedSecurityReviewer: {
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

export const FraudReport =
  mongoose.models.FraudReport ||
  mongoose.model("FraudReport", FraudReportSchema);
