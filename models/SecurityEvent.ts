import mongoose, { Schema } from "mongoose";
import { securityEventTypes } from "@/types/backend";

const SecurityEventSchema = new Schema(
  {
    eventType: {
      type: String,
      enum: securityEventTypes,
      required: true,
      index: true
    },
    severity: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
      default: "LOW",
      index: true
    },
    relatedUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true
    },
    ipAddress: {
      type: String,
      default: ""
    },
    userAgent: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      enum: ["OPEN", "REVIEWED", "ESCALATED", "CLOSED"],
      default: "OPEN",
      index: true
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
);

export const SecurityEvent =
  mongoose.models.SecurityEvent ||
  mongoose.model("SecurityEvent", SecurityEventSchema);
