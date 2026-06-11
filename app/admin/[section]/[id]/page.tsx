import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { connectDB } from "@/lib/db";
import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { AuditLog } from "@/models/AuditLog";
import { FraudReport } from "@/models/FraudReport";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { SecurityEvent } from "@/models/SecurityEvent";
import { SupportTicket } from "@/models/SupportTicket";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import { isValidObjectId } from "mongoose";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const sectionConfig = {
  applications: {
    label: "Account Opening Application",
    model: AccountOpeningApplication,
    backHref: "/admin",
    statusField: "status"
  },
  enrollments: {
    label: "Online Banking Enrollment",
    model: OnlineBankingEnrollment,
    backHref: "/admin",
    statusField: "status"
  },
  support: {
    label: "Support Ticket",
    model: SupportTicket,
    backHref: "/admin",
    statusField: "status"
  },
  fraud: {
    label: "Fraud Report",
    model: FraudReport,
    backHref: "/admin",
    statusField: "status"
  },
  appointments: {
    label: "Appointment Request",
    model: AppointmentRequest,
    backHref: "/admin",
    statusField: "status"
  },
  "audit-logs": {
    label: "Audit Log",
    model: AuditLog,
    backHref: "/admin",
    statusField: "riskLevel"
  },
  "security-events": {
    label: "Security Event",
    model: SecurityEvent,
    backHref: "/admin",
    statusField: "severity"
  }
} as const;

type SectionKey = keyof typeof sectionConfig;

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === "") return "—";

  if (value instanceof Date) {
    return value.toLocaleString();
  }

  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return String(value);
}

function formatLabel(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

function cleanRecord(record: Record<string, unknown>) {
  const hiddenFields = ["__v"];

  return Object.entries(record).filter(([key]) => !hiddenFields.includes(key));
}

export default async function AdminDetailPage({
  params
}: {
  params: Promise<{ section: string; id: string }>;
}) {
  const { section, id } = await params;

  if (!(section in sectionConfig)) {
    notFound();
  }

  if (!isValidObjectId(id)) {
    notFound();
  }

  const config = sectionConfig[section as SectionKey];

  await connectDB();

  const record = await config.model.findById(id).lean();

  if (!record) {
    notFound();
  }

  const plainRecord = JSON.parse(JSON.stringify(record)) as Record<string, unknown>;
  const statusValue = plainRecord[config.statusField] || "REVIEW";

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <a
            href="/admin"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bank-goldSoft"
          >
            <ArrowLeft size={16} /> Back to admin dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-goldSoft">
            Admin Review Detail
          </p>

          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                {config.label}
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">
                Review submitted record details from MongoDB. This page is currently read-only.
                Status updates, internal notes, reviewer assignment, and role protection come next.
              </p>
            </div>

            <div className="w-fit border border-bank-gold/40 bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">Current status</p>
              <p className="mt-1 text-sm font-semibold text-bank-goldSoft">
                {formatValue(statusValue)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-bank-line pb-5">
              <FileText className="text-bank-blue" size={22} />
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
                  Record Details
                </h2>
                <p className="mt-1 text-sm text-bank-steel">
                  Full submitted data for review and operational triage.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {cleanRecord(plainRecord).map(([key, value]) => (
                <div
                  key={key}
                  className="grid gap-2 border border-bank-line bg-bank-mist p-4 md:grid-cols-[220px_1fr]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bank-steel">
                    {formatLabel(key)}
                  </p>
                  <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-ink-950">
                    {formatValue(value)}
                  </pre>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-bank-line bg-white p-6 shadow-sm">
              <ShieldCheck className="text-bank-blue" size={22} />
              <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
                Review Controls Coming Next
              </h2>
              <p className="mt-3 text-sm leading-7 text-bank-steel">
                The next phase will add status updates, internal notes, reviewer assignment,
                admin authentication, and audit logging for every admin action.
              </p>
            </div>

            <div className="border border-bank-gold/40 bg-[#fff8e8] p-5">
              <p className="text-sm font-semibold text-ink-950">Security Reminder</p>
              <p className="mt-2 text-xs leading-6 text-ink-900">
                Admin routes must be protected before production. This development dashboard
                should not be exposed publicly without authentication and role-based access control.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
