import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { requireAdminSession } from "@/lib/adminSession";
import { connectDB } from "@/lib/db";
import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { AuditLog } from "@/models/AuditLog";
import { BillPayRequest } from "@/models/BillPayRequest";
import { FraudReport } from "@/models/FraudReport";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { SecurityEvent } from "@/models/SecurityEvent";
import { SupportTicket } from "@/models/SupportTicket";
import { TransferRequest } from "@/models/TransferRequest";
import {
  AlertTriangle,
  ClipboardList,
  FileText,
  ReceiptText,
  Send,
  ShieldAlert,
  ShieldCheck,
  Users
} from "lucide-react";
import type { Metadata } from "next";
import type { ComponentType } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Review Dashboard | Aster Bank",
  description: "Internal admin review dashboard for submitted banking requests and security events."
};

type ReviewItem = {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  status: string;
  createdAt: string;
};

type IconType = ComponentType<{ size?: number; className?: string }>;

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

function toId(value: unknown) {
  if (!value) return "";
  return String(value);
}

function moneyFromCents(value: number) {
  return `$${(value / 100).toFixed(2)}`;
}

async function getAdminData() {
  await connectDB();

  const [
    accountApplications,
    enrollments,
    supportTickets,
    fraudReports,
    appointments,
    transferRequests,
    billPayRequests,
    auditLogs,
    securityEvents
  ] = await Promise.all([
    AccountOpeningApplication.find().sort({ createdAt: -1 }).limit(6).lean(),
    OnlineBankingEnrollment.find().sort({ createdAt: -1 }).limit(6).lean(),
    SupportTicket.find().sort({ createdAt: -1 }).limit(6).lean(),
    FraudReport.find().sort({ createdAt: -1 }).limit(6).lean(),
    AppointmentRequest.find().sort({ createdAt: -1 }).limit(6).lean(),
    TransferRequest.find().sort({ createdAt: -1 }).limit(6).lean(),
    BillPayRequest.find().sort({ createdAt: -1 }).limit(6).lean(),
    AuditLog.find().sort({ createdAt: -1 }).limit(8).lean(),
    SecurityEvent.find().sort({ createdAt: -1 }).limit(8).lean()
  ]);

  const counts = {
    accountApplications: await AccountOpeningApplication.countDocuments(),
    enrollments: await OnlineBankingEnrollment.countDocuments(),
    supportTickets: await SupportTicket.countDocuments(),
    fraudReports: await FraudReport.countDocuments(),
    appointments: await AppointmentRequest.countDocuments(),
    transferRequests: await TransferRequest.countDocuments(),
    billPayRequests: await BillPayRequest.countDocuments(),
    auditLogs: await AuditLog.countDocuments(),
    securityEvents: await SecurityEvent.countDocuments()
  };

  return {
    counts,
    accountApplications: accountApplications.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/applications/${toId(item._id)}`,
      title: `${item.firstName} ${item.lastName}`,
      subtitle: item.relationshipType,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    enrollments: enrollments.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/enrollments/${toId(item._id)}`,
      title: item.email,
      subtitle: item.accountType,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    supportTickets: supportTickets.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/support/${toId(item._id)}`,
      title: `${item.firstName} ${item.lastName}`,
      subtitle: item.topic,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    fraudReports: fraudReports.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/fraud/${toId(item._id)}`,
      title: `${item.firstName} ${item.lastName}`,
      subtitle: item.fraudType,
      status: `${item.status} • ${item.severity}`,
      createdAt: formatDate(item.createdAt)
    })),
    appointments: appointments.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/appointments/${toId(item._id)}`,
      title: `${item.firstName} ${item.lastName}`,
      subtitle: item.appointmentType,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    transferRequests: transferRequests.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/transfer-requests/${toId(item._id)}`,
      title: item.recipientName,
      subtitle: `${item.transferType} • ${moneyFromCents(item.amountCents || 0)}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    billPayRequests: billPayRequests.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/bill-pay-requests/${toId(item._id)}`,
      title: item.payeeName,
      subtitle: `${item.payeeCategory} • ${moneyFromCents(item.amountCents || 0)}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    auditLogs: auditLogs.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/audit-logs/${toId(item._id)}`,
      title: item.actionType,
      subtitle: item.entityType,
      status: item.riskLevel,
      createdAt: formatDate(item.createdAt)
    })),
    securityEvents: securityEvents.map((item: any): ReviewItem => ({
      id: toId(item._id),
      href: `/admin/security-events/${toId(item._id)}`,
      title: item.eventType,
      subtitle: item.status,
      status: item.severity,
      createdAt: formatDate(item.createdAt)
    }))
  };
}

function StatCard({
  label,
  value,
  icon: Icon
}: {
  label: string;
  value: number;
  icon: IconType;
}) {
  return (
    <div className="border border-bank-line bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
          {label}
        </p>
        <Icon size={20} className="text-bank-blue" />
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
        {value}
      </p>
    </div>
  );
}

function ReviewSection({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: ReviewItem[];
}) {
  return (
    <section className="border border-bank-line bg-white p-6 shadow-sm">
      <div className="border-b border-bank-line pb-5">
        <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-bank-steel">{description}</p>
      </div>

      <div className="mt-5 grid gap-3">
        {items.length === 0 ? (
          <div className="border border-bank-line bg-bank-mist p-4 text-sm text-bank-steel">
            No records yet.
          </div>
        ) : (
          items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="grid gap-3 border border-bank-line bg-white p-4 transition hover:border-bank-blue hover:bg-bank-mist sm:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="text-sm font-semibold text-ink-950">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-bank-steel">{item.subtitle}</p>
                <p className="mt-2 text-[11px] text-bank-steel">ID: {item.id}</p>
              </div>

              <div className="sm:text-right">
                <span className="inline-flex border border-bank-line bg-bank-mist px-3 py-1 text-xs font-semibold text-bank-blue">
                  {item.status}
                </span>
                <p className="mt-2 text-xs text-bank-steel">{item.createdAt}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
}

export default async function AdminDashboardPage() {
  await requireAdminSession();

  const data = await getAdminData();

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-goldSoft">
            Internal Operations
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Admin review dashboard for submitted banking workflows.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Review account applications, enrollments, support requests, fraud reports,
            appointments, transfer requests, bill-pay requests, audit logs, and security events.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/admin/customers" className="btn-primary h-11 px-5">
              Customer Management
            </a>

            <form action="/api/admin/auth/logout" method="post">
              <button type="submit" className="btn-secondary h-11 px-5">
                Sign Out Admin
              </button>
            </form>
          </div>

          <div className="mt-8 border border-bank-gold/40 bg-white/[0.04] p-5">
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 shrink-0 text-bank-goldSoft" size={19} />
              <p className="text-sm leading-7 text-white/70">
                Transfer and bill-pay requests are review placeholders only. No ACH,
                wire, card, biller, payment rail, or real money movement is connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Applications" value={data.counts.accountApplications} icon={FileText} />
          <StatCard label="Enrollments" value={data.counts.enrollments} icon={ClipboardList} />
          <StatCard label="Support Tickets" value={data.counts.supportTickets} icon={ShieldCheck} />
          <StatCard label="Fraud Reports" value={data.counts.fraudReports} icon={ShieldAlert} />
          <StatCard label="Appointments" value={data.counts.appointments} icon={ClipboardList} />
          <StatCard label="Transfers" value={data.counts.transferRequests} icon={Send} />
          <StatCard label="Bill Pay" value={data.counts.billPayRequests} icon={ReceiptText} />
          <StatCard label="Audit Logs" value={data.counts.auditLogs} icon={FileText} />
          <StatCard label="Security Events" value={data.counts.securityEvents} icon={ShieldAlert} />
          <StatCard label="Customers" value={0} icon={Users} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 sm:pb-20 lg:grid-cols-2">
        <ReviewSection
          title="Transfer Requests"
          description="Customer-submitted transfer request placeholders awaiting review."
          items={data.transferRequests}
        />

        <ReviewSection
          title="Bill-Pay Requests"
          description="Customer-submitted bill-pay request placeholders awaiting review."
          items={data.billPayRequests}
        />

        <ReviewSection
          title="Account Opening Applications"
          description="Recent account opening requests submitted from the public application flow."
          items={data.accountApplications}
        />

        <ReviewSection
          title="Online Banking Enrollments"
          description="Recent online banking enrollment requests submitted by customers."
          items={data.enrollments}
        />

        <ReviewSection
          title="Support Tickets"
          description="Recent customer support requests submitted through the support form."
          items={data.supportTickets}
        />

        <ReviewSection
          title="Fraud Reports"
          description="Recent suspicious activity and fraud reports requiring security review."
          items={data.fraudReports}
        />

        <ReviewSection
          title="Appointment Requests"
          description="Recent appointment requests for banking, lending, wealth, or digital support."
          items={data.appointments}
        />

        <ReviewSection
          title="Audit Logs"
          description="Recent audit events generated by public form submissions and backend actions."
          items={data.auditLogs}
        />

        <ReviewSection
          title="Security Events"
          description="Recent security events generated by fraud reporting or sensitive actions."
          items={data.securityEvents}
        />
      </section>

      <Footer />
    </main>
  );
}
