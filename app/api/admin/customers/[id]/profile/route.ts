import { createAuditLog, createSecurityEvent } from "@/lib/audit";
import { getAdminSession } from "@/lib/adminSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { CustomerProfile } from "@/models/CustomerProfile";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { nanoid } from "nanoid";
import { z } from "zod";

const customerProfileUpdateSchema = z.object({
  relationshipType: z.enum(["PERSONAL", "BUSINESS", "PRIVATE_CLIENT"]),
  onboardingStatus: z.enum([
    "PROFILE_CREATED",
    "PENDING_VERIFICATION",
    "UNDER_REVIEW",
    "VERIFIED",
    "RESTRICTED"
  ]),
  kycStatus: z.enum([
    "NOT_STARTED",
    "IN_PROGRESS",
    "PENDING_REVIEW",
    "VERIFIED",
    "REJECTED",
    "EXPIRED"
  ]),
  riskTier: z.enum(["UNASSIGNED", "LOW", "MEDIUM", "HIGH"]),
  addressStatus: z.enum(["NOT_PROVIDED", "PENDING_REVIEW", "VERIFIED", "REJECTED"])
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const adminSession = await getAdminSession();

    if (!adminSession) {
      return NextResponse.json(
        { ok: false, message: "Admin authentication required." },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { ok: false, message: "Invalid customer ID." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const parsed = customerProfileUpdateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid customer profile update.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findById(id).lean();

    if (!user) {
      return NextResponse.json(
        { ok: false, message: "Customer not found." },
        { status: 404 }
      );
    }

    const meta = getRequestMeta(request);

    let profile = await CustomerProfile.findOne({ userId: id });

    if (!profile) {
      profile = await CustomerProfile.create({
        userId: id,
        customerNumber: `CUST-${nanoid(10).toUpperCase()}`,
        relationshipType: parsed.data.relationshipType,
        onboardingStatus: parsed.data.onboardingStatus,
        kycStatus: parsed.data.kycStatus,
        riskTier: parsed.data.riskTier,
        addressStatus: parsed.data.addressStatus
      });
    } else {
      profile.relationshipType = parsed.data.relationshipType;
      profile.onboardingStatus = parsed.data.onboardingStatus;
      profile.kycStatus = parsed.data.kycStatus;
      profile.riskTier = parsed.data.riskTier;
      profile.addressStatus = parsed.data.addressStatus;
      await profile.save();
    }

    await createAuditLog({
      actionType: "CUSTOMER_PROFILE_UPDATED",
      entityType: "CustomerProfile",
      entityId: String(profile._id),
      actorRole: "ADMIN",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: parsed.data.kycStatus === "REJECTED" ? "HIGH" : "MEDIUM",
      metadata: {
        customerId: id,
        adminEmail: adminSession.email,
        ...parsed.data
      }
    });

    await createSecurityEvent({
      eventType: "KYC_STATUS_CHANGED",
      severity: parsed.data.kycStatus === "REJECTED" ? "HIGH" : "MEDIUM",
      relatedUserId: id,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      metadata: {
        customerId: id,
        adminEmail: adminSession.email,
        kycStatus: parsed.data.kycStatus,
        onboardingStatus: parsed.data.onboardingStatus
      }
    });

    return NextResponse.json({
      ok: true,
      message: "Customer profile updated.",
      profile: {
        id: String(profile._id),
        customerNumber: profile.customerNumber,
        relationshipType: profile.relationshipType,
        onboardingStatus: profile.onboardingStatus,
        kycStatus: profile.kycStatus,
        riskTier: profile.riskTier,
        addressStatus: profile.addressStatus
      }
    });
  } catch (error) {
    console.error("Customer profile update error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to update customer profile." },
      { status: 500 }
    );
  }
}
