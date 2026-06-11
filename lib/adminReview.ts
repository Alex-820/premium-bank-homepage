import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { AuditLog } from "@/models/AuditLog";
import { FraudReport } from "@/models/FraudReport";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { SecurityEvent } from "@/models/SecurityEvent";
import { SupportTicket } from "@/models/SupportTicket";
import {
  applicationStatuses,
  appointmentStatuses,
  fraudStatuses,
  supportStatuses
} from "@/types/backend";

export const securityEventStatuses = ["OPEN", "REVIEWED", "ESCALATED", "CLOSED"] as const;

export const adminReviewConfig = {
  applications: {
    label: "Account Opening Application",
    model: AccountOpeningApplication,
    statusField: "status",
    allowedStatuses: applicationStatuses
  },
  enrollments: {
    label: "Online Banking Enrollment",
    model: OnlineBankingEnrollment,
    statusField: "status",
    allowedStatuses: applicationStatuses
  },
  support: {
    label: "Support Ticket",
    model: SupportTicket,
    statusField: "status",
    allowedStatuses: supportStatuses
  },
  fraud: {
    label: "Fraud Report",
    model: FraudReport,
    statusField: "status",
    allowedStatuses: fraudStatuses
  },
  appointments: {
    label: "Appointment Request",
    model: AppointmentRequest,
    statusField: "status",
    allowedStatuses: appointmentStatuses
  },
  "audit-logs": {
    label: "Audit Log",
    model: AuditLog,
    statusField: "riskLevel",
    allowedStatuses: []
  },
  "security-events": {
    label: "Security Event",
    model: SecurityEvent,
    statusField: "status",
    allowedStatuses: securityEventStatuses
  }
} as const;

export type AdminReviewSection = keyof typeof adminReviewConfig;

export function isAdminReviewSection(section: string): section is AdminReviewSection {
  return section in adminReviewConfig;
}
