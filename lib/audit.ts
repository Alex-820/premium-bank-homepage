import { AuditLog } from "@/models/AuditLog";
import { SecurityEvent } from "@/models/SecurityEvent";
import type { AuditEventType, SecurityEventType } from "@/types/backend";

type AuditInput = {
  actionType: AuditEventType;
  entityType: string;
  entityId?: string;
  actorId?: string | null;
  actorRole?: string;
  ipAddress?: string;
  userAgent?: string;
  riskLevel?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  metadata?: Record<string, unknown>;
};

type SecurityEventInput = {
  eventType: SecurityEventType;
  severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  relatedUserId?: string | null;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
};

export async function createAuditLog(input: AuditInput) {
  return AuditLog.create({
    actorId: input.actorId || null,
    actorRole: input.actorRole || "ANONYMOUS",
    actionType: input.actionType,
    entityType: input.entityType,
    entityId: input.entityId || "",
    ipAddress: input.ipAddress || "",
    userAgent: input.userAgent || "",
    riskLevel: input.riskLevel || "LOW",
    metadata: input.metadata || {}
  });
}

export async function createSecurityEvent(input: SecurityEventInput) {
  return SecurityEvent.create({
    eventType: input.eventType,
    severity: input.severity || "LOW",
    relatedUserId: input.relatedUserId || null,
    ipAddress: input.ipAddress || "",
    userAgent: input.userAgent || "",
    metadata: input.metadata || {}
  });
}
