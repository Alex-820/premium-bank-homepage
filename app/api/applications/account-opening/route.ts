import { createAuditLog } from "@/lib/audit";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { accountOpeningSchema } from "@/lib/validators/publicForms";
import { AccountOpeningApplication } from "@/models/AccountOpeningApplication";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const parsed = accountOpeningSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid account opening request.",
          errors: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const application = await AccountOpeningApplication.create({
      relationshipType: parsed.data.relationshipType,
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "ACCOUNT_APPLICATION_SUBMITTED",
      entityType: "AccountOpeningApplication",
      entityId: String(application._id),
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "LOW",
      metadata: {
        relationshipType: parsed.data.relationshipType
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Account opening request submitted.",
        id: application._id,
        status: application.status
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Account opening API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit account opening request."
      },
      { status: 500 }
    );
  }
}
