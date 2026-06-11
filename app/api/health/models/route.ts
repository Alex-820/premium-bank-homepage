import { connectDB } from "@/lib/db";
import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { AdminNote } from "@/models/AdminNote";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { AuditLog } from "@/models/AuditLog";
import { FraudReport } from "@/models/FraudReport";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { SecurityEvent } from "@/models/SecurityEvent";
import { SupportTicket } from "@/models/SupportTicket";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  return NextResponse.json({
    ok: true,
    database: "connected",
    models: [
      User.modelName,
      AccountOpeningApplication.modelName,
      OnlineBankingEnrollment.modelName,
      SupportTicket.modelName,
      FraudReport.modelName,
      AppointmentRequest.modelName,
      AuditLog.modelName,
      SecurityEvent.modelName,
      AdminNote.modelName
    ],
    timestamp: new Date().toISOString()
  });
}
