import { createAuditLog, createSecurityEvent } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { SecurityEvent } from "@/models/SecurityEvent";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const suspiciousActivitySchema = z.object({
  activityType: z.enum([
    "UNRECOGNIZED_LOGIN",
    "SUSPICIOUS_EMAIL",
    "UNAUTHORIZED_TRANSACTION",
    "CARD_CONCERN",
    "PROFILE_CHANGE_CONCERN",
    "OTHER"
  ]),
  description: z.string().trim().min(10).max(5000),
  contactPreference: z.enum(["EMAIL", "PHONE", "SECURE_MESSAGE"]).default("EMAIL")
});

export async function GET() {
  const session = await getCustomerSession();

  if (!session) {
    return NextResponse.json(
      { ok: false, message: "Authentication required." },
      { status: 401 }
    );
  }

  await connectDB();

  const events = await SecurityEvent.find({ relatedUserId: session.userId })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  return NextResponse.json({
    ok: true,
    events: events.map((event: any) => ({
      id: String(event._id),
      eventType: event.eventType,
      severity: event.severity,
      status: event.status,
      ipAddress: event.ipAddress,
      userAgent: event.userAgent,
      metadata: event.metadata || {},
      createdAt: event.createdAt
    }))
  });
}

export async function POST(request: NextRequest) {
  try {
    const session = await getCustomerSession();

    if (!session) {
      return NextResponse.json(
        { ok: false, message: "Authentication required." },
        { status: 401 }
      );
    }

    await connectDB();

    const body = await request.json();
    const parsed = suspiciousActivitySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid security report.",
          errors: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const user = await User.findById(session.userId).lean();

    if (!user) {
      return NextResponse.json(
        { ok: false, message: "Customer not found." },
        { status: 404 }
      );
    }

    const meta = getRequestMeta(request);

    const event = await createSecurityEvent({
      eventType: "SUSPICIOUS_ACTIVITY",
      severity:
        parsed.data.activityType === "UNAUTHORIZED_TRANSACTION" ||
        parsed.data.activityType === "UNRECOGNIZED_LOGIN"
          ? "HIGH"
          : "MEDIUM",
      relatedUserId: session.userId,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      metadata: {
        activityType: parsed.data.activityType,
        description: parsed.data.description,
        contactPreference: parsed.data.contactPreference,
        customerEmail: user.email,
        source: "customer_security_center"
      }
    });

    await createAuditLog({
      actionType: "SECURITY_EVENT_CREATED",
      entityType: "SecurityEvent",
      entityId: String(event._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel:
        parsed.data.activityType === "UNAUTHORIZED_TRANSACTION" ||
        parsed.data.activityType === "UNRECOGNIZED_LOGIN"
          ? "HIGH"
          : "MEDIUM",
      metadata: {
        activityType: parsed.data.activityType,
        source: "customer_security_center"
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Security report submitted for review.",
        event: {
          id: String(event._id),
          status: event.status,
          severity: event.severity
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Customer security report error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit security report." },
      { status: 500 }
    );
  }
}
