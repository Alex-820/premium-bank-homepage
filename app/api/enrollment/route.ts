import { createAuditLog } from "@/lib/audit";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { enrollmentSchema } from "@/lib/validators/publicForms";
import { OnlineBankingEnrollment } from "@/models/OnlineBankingEnrollment";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const parsed = enrollmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid enrollment request.",
          errors: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const enrollment = await OnlineBankingEnrollment.create({
      accountType: parsed.data.accountType,
      customerIdentifier: parsed.data.customerIdentifier,
      email: parsed.data.email,
      phone: parsed.data.phone,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "ENROLLMENT_SUBMITTED",
      entityType: "OnlineBankingEnrollment",
      entityId: String(enrollment._id),
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "LOW",
      metadata: {
        accountType: parsed.data.accountType
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Enrollment request submitted.",
        id: enrollment._id,
        status: enrollment.status
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enrollment API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit enrollment request."
      },
      { status: 500 }
    );
  }
}
