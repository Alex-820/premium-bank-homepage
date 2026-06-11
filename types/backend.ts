export const userRoles = [
  "CUSTOMER",
  "BUSINESS_CUSTOMER",
  "PRIVATE_CLIENT",
  "ADVISOR",
  "SUPPORT_AGENT",
  "COMPLIANCE_OFFICER",
  "OPERATIONS_MANAGER",
  "ADMIN",
  "SUPER_ADMIN"
] as const;

export const userStatuses = [
  "PENDING_VERIFICATION",
  "ACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "CLOSED"
] as const;

export const applicationStatuses = [
  "PENDING",
  "UNDER_REVIEW",
  "APPROVED",
  "REJECTED",
  "NEEDS_MORE_INFO"
] as const;

export const supportStatuses = [
  "OPEN",
  "IN_PROGRESS",
  "WAITING_FOR_CUSTOMER",
  "RESOLVED",
  "CLOSED",
  "ESCALATED"
] as const;

export const fraudStatuses = [
  "SUBMITTED",
  "TRIAGE",
  "UNDER_INVESTIGATION",
  "ACTION_REQUIRED",
  "CLOSED"
] as const;

export const fraudSeverities = [
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL"
] as const;

export const appointmentStatuses = [
  "REQUESTED",
  "CONFIRMED",
  "RESCHEDULED",
  "CANCELLED",
  "COMPLETED"
] as const;

export const auditEventTypes = [
  "CUSTOMER_REGISTERED",
  "CUSTOMER_PROFILE_UPDATED",
  "ACCOUNT_PLACEHOLDER_CREATED",
  "KYC_STATUS_CHANGED",
  "LOGIN_SUCCESS",
  "LOGIN_FAILED",
  "LOGOUT",
  "PASSWORD_RESET_REQUESTED",
  "PASSWORD_RESET_COMPLETED",
  "ENROLLMENT_SUBMITTED",
  "ACCOUNT_APPLICATION_SUBMITTED",
  "SUPPORT_REQUEST_SUBMITTED",
  "FRAUD_REPORT_SUBMITTED",
  "APPOINTMENT_REQUEST_SUBMITTED",
  "ADMIN_STATUS_UPDATED",
  "ADMIN_NOTE_ADDED",
  "SECURITY_EVENT_CREATED"
] as const;

export const securityEventTypes = [
  "LOGIN_SUCCESS",
  "LOGIN_FAILED",
  "PASSWORD_CHANGED",
  "ACCOUNT_LOCKED",
  "PROFILE_UPDATED",
  "KYC_STATUS_CHANGED",
  "FRAUD_REPORTED",
  "SUSPICIOUS_ACTIVITY",
  "DIGITAL_ASSET_DISCLOSURE_ACCEPTED"
] as const;

export type UserRole = (typeof userRoles)[number];
export type UserStatus = (typeof userStatuses)[number];
export type ApplicationStatus = (typeof applicationStatuses)[number];
export type SupportStatus = (typeof supportStatuses)[number];
export type FraudStatus = (typeof fraudStatuses)[number];
export type FraudSeverity = (typeof fraudSeverities)[number];
export type AppointmentStatus = (typeof appointmentStatuses)[number];
export type AuditEventType = (typeof auditEventTypes)[number];
export type SecurityEventType = (typeof securityEventTypes)[number];
