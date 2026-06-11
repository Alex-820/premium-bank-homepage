import mongoose, { Schema } from "mongoose";
import { supportStatuses } from "@/types/backend";

const SupportTicketSchema = new Schema(
  {
    topic: {
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
    status: {
      type: String,
      enum: supportStatuses,
      default: "OPEN",
      index: true
    },
    priority: {
      type: String,
      enum: ["LOW", "NORMAL", "HIGH", "URGENT"],
      default: "NORMAL"
    },
    assignedTo: {
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

export const SupportTicket =
  mongoose.models.SupportTicket ||
  mongoose.model("SupportTicket", SupportTicketSchema);
