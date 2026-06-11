import mongoose, { Schema } from "mongoose";
import { appointmentStatuses } from "@/types/backend";

const AppointmentRequestSchema = new Schema(
  {
    appointmentType: {
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
    preferredDate: {
      type: Date,
      default: null
    },
    preferredLocation: {
      type: String,
      trim: true,
      default: ""
    },
    message: {
      type: String,
      maxlength: 5000,
      default: ""
    },
    status: {
      type: String,
      enum: appointmentStatuses,
      default: "REQUESTED",
      index: true
    },
    assignedBanker: {
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

export const AppointmentRequest =
  mongoose.models.AppointmentRequest ||
  mongoose.model("AppointmentRequest", AppointmentRequestSchema);
