import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { FraudReport } from "@/models/FraudReport";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { SupportTicket } from "@/models/SupportTicket";
import { ArrowLeft, CalendarDays, FileText, MessageSquare, ShieldAlert, UserCheck } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type RequestItem = {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  createdAt: string;
};

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

function shortText(value: unknown, limit = 120) {
  const text = String(value || "");
  if (text.length <= limit) return text;
  return `${text.slice(0, limit)}...`;
}

async function getCustomerRequests(email: string) {
  await connectDB();

  const normalizedEmail = email.toLowerCase();

  const [applications, enrollments, supportTickets, fraudReports, appointments] =
    await Promise.all([
      AccountOpeningApplication.find({ email: normalizedEmail }).sort({ createdAt: -1 }).lean(),
      OnlineBankingEnrollment.find({ email: normalizedEmail }).sort({ createdAt: -1 }).lean(),
      SupportTicket.find({ email: normalizedEmail }).sort({ createdAt: -1 }).lean(),
      FraudReport.find({ email: normalizedEmail }).sort({ createdAt: -1 }).lean(),
      AppointmentRequest.find({ email: normalizedEmail }).sort({ createdAt: -1 }).lean()
    ]);

  return {
    applications: applications.map((item: any): RequestItem => ({
      id: String(item._id),
      title: item.relationshipType,
      subtitle: item.email,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    enrollments: enrollments.map((item: any): RequestItem => ({
      id: String(item._id),
      title: item.accountType,
      subtitle: item.customerIdentifier,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    supportTickets: supportTickets.map((item: any): RequestItem => ({
      id: String(item._id),
      title: item.topic,
      subtitle: shortText(item.message),
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    fraudReports: fraudReports.map((item: any): RequestItem => ({
      id: String(item._id),
      title: item.fraudType,
      subtitle: `Severity: ${item.severity}`,
      status: item.status,
      createdAt: formatDate(item.createdAt)
    })),
    appointments: appointments.map((item: any): RequestItem => ({
      id: String(item._id),
      title: item.appointmentType,
      subtitle: item.preferredLocation || "Location not selected",
      status: item.status,
      createdAt: formatDate(item.createdAt)
    }))
  };
}

function RequestSection({
  title,
  description,
  icon: Icon,
  items
}: {
  title: string;
  description: string;
  icon: typeof FileText;
  items: RequestItem[];
}) {
  return (
    <section className="border border-bank-line bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3 border-b border-bank-line pb-5">
        <Icon className="mt-1 text-bank-blue" size={22} />
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-bank-steel">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {items.length === 0 ? (
          <div className="border border-bank-line bg-bank-mist p-5">
            <p className="text-sm font-semibold text-ink-950">No records yet.</p>
            <p className="mt-2 text-sm leading-7 text-bank-steel">
              Matching customer requests will appear here after submission.
            </p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="grid gap-3 border border-bank-line bg-white p-5 sm:grid-cols-[1fr_auto]"
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
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default async function DashboardSupportPage() {
  const session = await getCustomerSession();

  if (!session) {
    redirect("/login");
  }

  const requests = await getCustomerRequests(session.email);

  const totalRequests =
    requests.applications.length +
    requests.enrollments.length +
    requests.supportTickets.length +
    requests.fraudReports.length +
    requests.appointments.length;

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bank-blue"
          >
            <ArrowLeft size={16} /> Back to dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Customer Support Center
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl">
            Track your banking requests and service activity.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-bank-steel">
            Signed in as {session.email}. This page shows account requests,
            enrollments, support tickets, fraud reports, and appointment requests
            associated with your email address.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <FileText className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Total Requests
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              {totalRequests}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <MessageSquare className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Support
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              {requests.supportTickets.length}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldAlert className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Fraud Reports
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              {requests.fraudReports.length}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <CalendarDays className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Appointments
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              {requests.appointments.length}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 sm:pb-20 lg:grid-cols-2">
        <RequestSection
          title="Account Applications"
          description="Account opening requests submitted with your email address."
          icon={FileText}
          items={requests.applications}
        />

        <RequestSection
          title="Online Banking Enrollments"
          description="Online banking enrollment requests linked to your email address."
          icon={UserCheck}
          items={requests.enrollments}
        />

        <RequestSection
          title="Support Tickets"
          description="Customer support requests submitted through the support center."
          icon={MessageSquare}
          items={requests.supportTickets}
        />

        <RequestSection
          title="Fraud Reports"
          description="Suspicious activity reports submitted for review."
          icon={ShieldAlert}
          items={requests.fraudReports}
        />

        <RequestSection
          title="Appointment Requests"
          description="Appointment requests for banking, lending, wealth, or digital support."
          icon={CalendarDays}
          items={requests.appointments}
        />
      </section>

      <Footer />
    </main>
  );
}
