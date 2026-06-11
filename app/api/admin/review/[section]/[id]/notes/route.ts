import { createAuditLog } from "@/lib/audit";
import { isAdminReviewSection } from "@/lib/adminReview";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { AdminNote } from "@/models/AdminNote";
import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { z } from "zod";

const noteSchema = z.object({
  note: z.string().trim().min(3).max(5000),
  visibility: z.enum(["INTERNAL_ONLY", "CUSTOMER_VISIBLE"]).default("INTERNAL_ONLY")
});

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ section: string; id: string }> }
) {
  const { section, id } = await params;

  if (!isAdminReviewSection(section) || !isValidObjectId(id)) {
    return NextResponse.json({ ok: false, message: "Invalid review record." }, { status: 404 });
  }

  await connectDB();

  const notes = await AdminNote.find({ entityType: section, entityId: id })
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({
    ok: true,
    notes: notes.map((note: any) => ({
      id: String(note._id),
      note: note.note,
      visibility: note.visibility,
      createdAt: note.createdAt
    }))
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ section: string; id: string }> }
) {
  try {
    const { section, id } = await params;

    if (!isAdminReviewSection(section) || !isValidObjectId(id)) {
      return NextResponse.json({ ok: false, message: "Invalid review record." }, { status: 404 });
    }

    const body = await request.json();
    const parsed = noteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid note.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await connectDB();

    const meta = getRequestMeta(request);

    const note = await AdminNote.create({
      entityType: section,
      entityId: id,
      note: parsed.data.note,
      visibility: parsed.data.visibility,
      createdBy: null
    });

    await createAuditLog({
      actionType: "ADMIN_NOTE_ADDED",
      entityType: section,
      entityId: id,
      actorRole: "DEV_ADMIN",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: section === "fraud" ? "HIGH" : "MEDIUM",
      metadata: {
        noteId: String(note._id),
        visibility: parsed.data.visibility
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Internal note added.",
        note: {
          id: String(note._id),
          note: note.note,
          visibility: note.visibility,
          createdAt: note.createdAt
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admin note error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to add note." },
      { status: 500 }
    );
  }
}
