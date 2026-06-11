import { createAuditLog } from "@/lib/audit";
import { adminReviewConfig, isAdminReviewSection } from "@/lib/adminReview";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { z } from "zod";

const statusSchema = z.object({
  status: z.string().min(1)
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ section: string; id: string }> }
) {
  try {
    const { section, id } = await params;

    if (!isAdminReviewSection(section) || !isValidObjectId(id)) {
      return NextResponse.json({ ok: false, message: "Invalid review record." }, { status: 404 });
    }

    const config = adminReviewConfig[section];

    if (config.allowedStatuses.length === 0) {
      return NextResponse.json(
        { ok: false, message: "This record type does not support status updates." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const parsed = statusSchema.safeParse(body);

    if (!parsed.success || !config.allowedStatuses.includes(parsed.data.status as never)) {
      return NextResponse.json(
        { ok: false, message: "Invalid status value." },
        { status: 400 }
      );
    }

    await connectDB();

    const meta = getRequestMeta(request);

    const updated = await config.model.findByIdAndUpdate(
      id,
      { [config.statusField]: parsed.data.status },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ ok: false, message: "Record not found." }, { status: 404 });
    }

    await createAuditLog({
      actionType: "ADMIN_STATUS_UPDATED",
      entityType: section,
      entityId: id,
      actorRole: "DEV_ADMIN",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: section === "fraud" ? "HIGH" : "MEDIUM",
      metadata: {
        status: parsed.data.status,
        statusField: config.statusField
      }
    });

    return NextResponse.json({
      ok: true,
      message: "Status updated.",
      status: parsed.data.status
    });
  } catch (error) {
    console.error("Admin status update error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to update status." },
      { status: 500 }
    );
  }
}
