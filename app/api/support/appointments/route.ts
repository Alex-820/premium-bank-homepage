import { createAuditLog } from "@/lib/audit";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { appointmentRequestSchema } from "@/lib/validators/publicForms";
import { AppointmentRequest } from "@/models/AppointmentRequest";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const parsed = appointmentRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid appointment request.",
          errors: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const appointment = await AppointmentRequest.create({
      appointmentType: parsed.data.appointmentType,
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      preferredDate: parsed.data.preferredDate ? new Date(parsed.data.preferredDate) : null,
      preferredLocation: parsed.data.preferredLocation || "",
      message: parsed.data.message || "",
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "APPOINTMENT_REQUEST_SUBMITTED",
      entityType: "AppointmentRequest",
      entityId: String(appointment._id),
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "LOW",
      metadata: {
        appointmentType: parsed.data.appointmentType
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Appointment request submitted.",
        id: appointment._id,
        status: appointment.status
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit appointment request."
      },
      { status: 500 }
    );
  }
}
