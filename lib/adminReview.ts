import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { AuditLog } from "@/models/AuditLog";
import { BillPayRequest } from "@/models/BillPayRequest";
import { BondTreasuryRequest } from "@/models/BondTreasuryRequest";
import { CardControlRequest } from "@/models/CardControlRequest";
import { CryptoETFInterestRequest } from "@/models/CryptoETFInterestRequest";
import { DigitalAssetEligibilityReview } from "@/models/DigitalAssetEligibilityReview";
import { ETFInterestRequest } from "@/models/ETFInterestRequest";
import { FraudReport } from "@/models/FraudReport";
import { InvestmentAccountApplication } from "@/models/InvestmentAccountApplication";
import { InvestmentProfile } from "@/models/InvestmentProfile";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { PortfolioPreference } from "@/models/PortfolioPreference";
import { SecurityEvent } from "@/models/SecurityEvent";
import { StakingEligibilityRequest } from "@/models/StakingEligibilityRequest";
import { SuitabilityReview } from "@/models/SuitabilityReview";
import { SupportTicket } from "@/models/SupportTicket";
import { TransferRequest } from "@/models/TransferRequest";
import { User } from "@/models/User";
import {
  applicationStatuses,
  appointmentStatuses,
  fraudStatuses,
  supportStatuses,
  userStatuses
} from "@/types/backend";

export const securityEventStatuses = ["OPEN", "REVIEWED", "ESCALATED", "CLOSED"] as const;

export const paymentRequestStatuses = [
  "SUBMITTED",
  "UNDER_REVIEW",
  "APPROVED",
  "REJECTED",
  "CANCELLED",
  "COMPLETED"
] as const;

export const investmentRequestStatuses = [
  "SUBMITTED",
  "UNDER_REVIEW",
  "APPROVED",
  "REJECTED",
  "NEEDS_MORE_INFO"
] as const;

export const digitalAssetEligibilityStatuses = [
  "SUBMITTED",
  "UNDER_REVIEW",
  "ELIGIBLE",
  "NOT_ELIGIBLE",
  "RESTRICTED",
  "NEEDS_MORE_INFO"
] as const;

export const investmentProfileSuitabilityStatuses = [
  "NOT_STARTED",
  "PENDING_REVIEW",
  "SUITABLE",
  "NOT_SUITABLE",
  "NEEDS_MORE_INFO"
] as const;

export const adminReviewConfig = {
  customers: {
    label: "Customer",
    model: User,
    statusField: "status",
    allowedStatuses: userStatuses
  },
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
  "transfer-requests": {
    label: "Transfer Request",
    model: TransferRequest,
    statusField: "status",
    allowedStatuses: paymentRequestStatuses
  },
  "bill-pay-requests": {
    label: "Bill-Pay Request",
    model: BillPayRequest,
    statusField: "status",
    allowedStatuses: paymentRequestStatuses
  },
  "card-control-requests": {
    label: "Card Control Request",
    model: CardControlRequest,
    statusField: "status",
    allowedStatuses: paymentRequestStatuses
  },

  "investment-profiles": {
    label: "Investment Profile",
    model: InvestmentProfile,
    statusField: "suitabilityStatus",
    allowedStatuses: investmentProfileSuitabilityStatuses
  },
  "suitability-reviews": {
    label: "Suitability Review",
    model: SuitabilityReview,
    statusField: "status",
    allowedStatuses: investmentRequestStatuses
  },
  "investment-account-applications": {
    label: "Investment Account Application",
    model: InvestmentAccountApplication,
    statusField: "status",
    allowedStatuses: investmentRequestStatuses
  },
  "portfolio-preferences": {
    label: "Portfolio Preference",
    model: PortfolioPreference,
    statusField: "status",
    allowedStatuses: investmentRequestStatuses
  },
  "etf-interest-requests": {
    label: "ETF Interest Request",
    model: ETFInterestRequest,
    statusField: "status",
    allowedStatuses: investmentRequestStatuses
  },
  "bond-treasury-requests": {
    label: "Bond/Treasury Request",
    model: BondTreasuryRequest,
    statusField: "status",
    allowedStatuses: investmentRequestStatuses
  },
  "digital-asset-eligibility": {
    label: "Digital Asset Eligibility Review",
    model: DigitalAssetEligibilityReview,
    statusField: "eligibilityStatus",
    allowedStatuses: digitalAssetEligibilityStatuses
  },
  "crypto-etf-interest-requests": {
    label: "Crypto ETF Interest Request",
    model: CryptoETFInterestRequest,
    statusField: "status",
    allowedStatuses: investmentRequestStatuses
  },
  "staking-eligibility-requests": {
    label: "Staking Eligibility Request",
    model: StakingEligibilityRequest,
    statusField: "status",
    allowedStatuses: investmentRequestStatuses
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
