import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { CustomerProfile } from "@/models/CustomerProfile";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function GET() {
  const session = await getCustomerSession();

  if (!session) {
    return NextResponse.json(
      { ok: false, message: "Authentication required." },
      { status: 401 }
    );
  }

  await connectDB();

  const user = await User.findById(session.userId).lean();

  if (!user) {
    return NextResponse.json(
      { ok: false, message: "Customer not found." },
      { status: 404 }
    );
  }

  let profile = await CustomerProfile.findOne({ userId: session.userId }).lean();

  if (!profile) {
    const created = await CustomerProfile.create({
      userId: session.userId,
      customerNumber: `CUST-${nanoid(10).toUpperCase()}`,
      relationshipType: "PERSONAL",
      onboardingStatus: "PROFILE_CREATED",
      kycStatus: "NOT_STARTED"
    });

    profile = created.toObject();
  }

  return NextResponse.json({
    ok: true,
    user: {
      id: String(user._id),
      fullName: user.fullName,
      email: user.email,
      phone: user.phone || "",
      role: user.role,
      status: user.status,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt
    },
    profile: {
      id: String(profile._id),
      customerNumber: profile.customerNumber,
      relationshipType: profile.relationshipType,
      onboardingStatus: profile.onboardingStatus,
      kycStatus: profile.kycStatus,
      riskTier: profile.riskTier,
      addressStatus: profile.addressStatus,
      createdAt: profile.createdAt
    }
  });
}
