import { createAuditLog } from "@/lib/audit";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { supportTicketSchema } from "@/lib/validators/publicForms";
import { SupportTicket } from "@/models/SupportTicket";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const parsed = supportTicketSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid support request.",
          errors: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const ticket = await SupportTicket.create({
      topic: parsed.data.topic,
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "SUPPORT_REQUEST_SUBMITTED",
      entityType: "SupportTicket",
      entityId: String(ticket._id),
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "LOW",
      metadata: {
        topic: parsed.data.topic
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Support request submitted.",
        id: ticket._id,
        status: ticket.status
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Support ticket API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit support request."
      },
      { status: 500 }
    );
  }
}
