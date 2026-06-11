import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { FraudReport } from "@/models/FraudReport";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { SupportTicket } from "@/models/SupportTicket";
import { NextResponse } from "next/server";

function formatItem(item: any, type: string, titleField: string, subtitleField: string) {
  return {
    id: String(item._id),
    type,
    title: String(item[titleField] || type),
    subtitle: String(item[subtitleField] || ""),
    status: String(item.status || "SUBMITTED"),
    createdAt: item.createdAt
  };
}

export async function GET() {
  const session = await getCustomerSession();

  if (!session) {
    return NextResponse.json(
      { ok: false, message: "Authentication required." },
      { status: 401 }
    );
  }

  await connectDB();

  const email = session.email.toLowerCase();

  const [applications, enrollments, supportTickets, fraudReports, appointments] =
    await Promise.all([
      AccountOpeningApplication.find({ email }).sort({ createdAt: -1 }).lean(),
      OnlineBankingEnrollment.find({ email }).sort({ createdAt: -1 }).lean(),
      SupportTicket.find({ email }).sort({ createdAt: -1 }).lean(),
      FraudReport.find({ email }).sort({ createdAt: -1 }).lean(),
      AppointmentRequest.find({ email }).sort({ createdAt: -1 }).lean()
    ]);

  return NextResponse.json({
    ok: true,
    requests: {
      applications: applications.map((item: any) =>
        formatItem(item, "Account Application", "relationshipType", "email")
      ),
      enrollments: enrollments.map((item: any) =>
        formatItem(item, "Online Banking Enrollment", "accountType", "customerIdentifier")
      ),
      supportTickets: supportTickets.map((item: any) =>
        formatItem(item, "Support Ticket", "topic", "message")
      ),
      fraudReports: fraudReports.map((item: any) =>
        formatItem(item, "Fraud Report", "fraudType", "severity")
      ),
      appointments: appointments.map((item: any) =>
        formatItem(item, "Appointment Request", "appointmentType", "preferredLocation")
      )
    }
  });
}
