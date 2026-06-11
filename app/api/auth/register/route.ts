import bcrypt from "bcryptjs";
import { createAuditLog } from "@/lib/audit";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { registerSchema } from "@/lib/validators/auth";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const parsed = registerSchema.safeParse(body);
    const meta = getRequestMeta(request);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid registration request.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const email = parsed.data.email.toLowerCase();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { ok: false, message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(parsed.data.password, 12);

    const user = await User.create({
      fullName: parsed.data.fullName,
      email,
      phone: parsed.data.phone || "",
      passwordHash,
      role: "CUSTOMER",
      status: "PENDING_VERIFICATION"
    });

    await createAuditLog({
      actionType: "CUSTOMER_REGISTERED",
      entityType: "User",
      entityId: String(user._id),
      actorId: String(user._id),
      actorRole: "CUSTOMER",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "LOW",
      metadata: { email }
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Customer registration created.",
        user: {
          id: String(user._id),
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          status: user.status
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Customer register error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to create customer registration." },
      { status: 500 }
    );
  }
}
