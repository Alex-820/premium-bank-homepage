import { createAuditLog } from "@/lib/audit";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { CardControlRequest } from "@/models/CardControlRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const cardControlSchema = z.object({
  requestType: z.enum([
    "LOCK_CARD",
    "UNLOCK_CARD",
    "TRAVEL_NOTICE",
    "SPENDING_LIMIT_CHANGE",
    "REPLACEMENT_CARD"
  ]),
  cardLabel: z.string().trim().min(2).max(120),
  maskedCardNumber: z.string().trim().max(40).optional().or(z.literal("")),
  travelDestination: z.string().trim().max(160).optional().or(z.literal("")),
  travelStartDate: z.string().trim().optional().or(z.literal("")),
  travelEndDate: z.string().trim().optional().or(z.literal("")),
  requestedLimit: z.coerce.number().positive().max(1000000).optional().or(z.literal("")),
  replacementReason: z.string().trim().max(240).optional().or(z.literal("")),
  memo: z.string().trim().max(500).optional().or(z.literal(""))
});

function moneyFromCents(value: number | null | undefined) {
  if (!value) return null;
  return Number((value / 100).toFixed(2));
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

  const requests = await CardControlRequest.find({ userId: session.userId })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  return NextResponse.json({
    ok: true,
    cardControls: requests.map((item: any) => ({
      id: String(item._id),
      requestType: item.requestType,
      cardLabel: item.cardLabel,
      maskedCardNumber: item.maskedCardNumber,
      requestedLimit: moneyFromCents(item.requestedLimitCents),
      status: item.status,
      memo: item.memo,
      createdAt: item.createdAt
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
    const parsed = cardControlSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid card control request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const meta = getRequestMeta(request);

    const requestedLimitCents =
      typeof parsed.data.requestedLimit === "number"
        ? Math.round(parsed.data.requestedLimit * 100)
        : null;

    const cardControl = await CardControlRequest.create({
      userId: session.userId,
      requestType: parsed.data.requestType,
      cardLabel: parsed.data.cardLabel,
      maskedCardNumber: parsed.data.maskedCardNumber || "",
      travelDestination: parsed.data.travelDestination || "",
      travelStartDate: parsed.data.travelStartDate ? new Date(parsed.data.travelStartDate) : null,
      travelEndDate: parsed.data.travelEndDate ? new Date(parsed.data.travelEndDate) : null,
      requestedLimitCents,
      replacementReason: parsed.data.replacementReason || "",
      memo: parsed.data.memo || "",
      submittedIp: meta.ipAddress,
      submittedUserAgent: meta.userAgent
    });

    await createAuditLog({
      actionType: "CARD_CONTROL_REQUEST_SUBMITTED",
      entityType: "CardControlRequest",
      entityId: String(cardControl._id),
      actorId: session.userId,
      actorRole: session.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel:
        parsed.data.requestType === "REPLACEMENT_CARD" ||
        parsed.data.requestType === "SPENDING_LIMIT_CHANGE"
          ? "HIGH"
          : "MEDIUM",
      metadata: {
        requestType: parsed.data.requestType,
        note: "Card control request placeholder only. No real card action occurred."
      }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Card control request submitted for review.",
        cardControl: {
          id: String(cardControl._id),
          status: cardControl.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Card control request error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to submit card control request." },
      { status: 500 }
    );
  }
}
