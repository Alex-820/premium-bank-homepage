import mongoose, { Schema } from "mongoose";
import { auditEventTypes } from "@/types/backend";

const AuditLogSchema = new Schema(
  {
    actorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true
    },
    actorRole: {
      type: String,
      default: "ANONYMOUS",
      index: true
    },
    actionType: {
      type: String,
      enum: auditEventTypes,
      required: true,
      index: true
    },
    entityType: {
      type: String,
      required: true,
      index: true
    },
    entityId: {
      type: String,
      default: "",
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
    riskLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
      default: "LOW",
      index: true
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
);

export const AuditLog =
  mongoose.models.AuditLog ||
  mongoose.model("AuditLog", AuditLogSchema);
