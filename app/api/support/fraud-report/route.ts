import { createAuditLog, createSecurityEvent } from "@/lib/audit";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { fraudReportSchema } from "@/lib/validators/publicForms";
import { FraudReport } from "@/models/FraudReport";
import { NextRequest, NextResponse } from "next/server";

function severityForFraudType(fraudType: string) {
  const value = fraudType.toLowerCase();

  if (
    value.includes("unauthorized") ||
    value.includes("identity") ||
    value.includes("stolen") ||
    value.includes("online banking")
  ) {
    return "HIGH";
  }

  return "MEDIUM";
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const parsed = fraudReportSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid fraud report.",
          errors: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);
    const severity = severityForFraudType(parsed.data.fraudType);

    const report = await FraudReport.create({
      fraudType: parsed.data.fraudType,
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,
      severity,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "FRAUD_REPORT_SUBMITTED",
      entityType: "FraudReport",
      entityId: String(report._id),
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: severity,
      metadata: {
        fraudType: parsed.data.fraudType
      }
    });

    await createSecurityEvent({
      eventType: "FRAUD_REPORTED",
      severity,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      metadata: {
        fraudReportId: String(report._id),
        fraudType: parsed.data.fraudType
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Fraud report submitted.",
        id: report._id,
        status: report.status,
        severity: report.severity
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Fraud report API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit fraud report."
      },
      { status: 500 }
    );
  }
}
