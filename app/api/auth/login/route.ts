import bcrypt from "bcryptjs";
import { createAuditLog, createSecurityEvent } from "@/lib/audit";
import { createCustomerToken, setCustomerCookie } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { loginSchema } from "@/lib/validators/auth";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const parsed = loginSchema.safeParse(body);
    const meta = getRequestMeta(request);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid login request." },
        { status: 400 }
      );
    }

    const email = parsed.data.email.toLowerCase();

    const user = await User.findOne({ email }).select("+passwordHash");

    if (!user) {
      await createAuditLog({
        actionType: "LOGIN_FAILED",
        entityType: "CustomerAuth",
        actorRole: "CUSTOMER",
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        riskLevel: "MEDIUM",
        metadata: { email }
      });

      await createSecurityEvent({
        eventType: "LOGIN_FAILED",
        severity: "MEDIUM",
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        metadata: { area: "customer", email }
      });

      return NextResponse.json(
        { ok: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    if (user.lockedUntil && new Date(user.lockedUntil) > new Date()) {
      return NextResponse.json(
        { ok: false, message: "Account is temporarily locked. Please try again later." },
        { status: 423 }
      );
    }

    const passwordMatches = await bcrypt.compare(parsed.data.password, user.passwordHash);

    if (!passwordMatches) {
      const failedAttempts = Number(user.failedLoginAttempts || 0) + 1;
      const update: Record<string, unknown> = { failedLoginAttempts: failedAttempts };

      if (failedAttempts >= 5) {
        update.lockedUntil = new Date(Date.now() + 15 * 60 * 1000);
      }

      await User.findByIdAndUpdate(user._id, update);

      await createAuditLog({
        actionType: "LOGIN_FAILED",
        entityType: "CustomerAuth",
        entityId: String(user._id),
        actorId: String(user._id),
        actorRole: user.role,
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        riskLevel: failedAttempts >= 5 ? "HIGH" : "MEDIUM",
        metadata: { email, failedAttempts }
      });

      await createSecurityEvent({
        eventType: failedAttempts >= 5 ? "ACCOUNT_LOCKED" : "LOGIN_FAILED",
        severity: failedAttempts >= 5 ? "HIGH" : "MEDIUM",
        relatedUserId: String(user._id),
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        metadata: { area: "customer", email, failedAttempts }
      });

      return NextResponse.json(
        { ok: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    if (!["ACTIVE", "PENDING_VERIFICATION"].includes(user.status)) {
      return NextResponse.json(
        { ok: false, message: "Account is not eligible for login." },
        { status: 403 }
      );
    }

    await User.findByIdAndUpdate(user._id, {
      failedLoginAttempts: 0,
      lockedUntil: null,
      lastLoginAt: new Date(),
      lastLoginIp: meta.ipAddress,
      lastUserAgent: meta.userAgent
    });

    const token = await createCustomerToken({
      userId: String(user._id),
      email: user.email,
      role: user.role
    });

    await createAuditLog({
      actionType: "LOGIN_SUCCESS",
      entityType: "CustomerAuth",
      entityId: String(user._id),
      actorId: String(user._id),
      actorRole: user.role,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "LOW",
      metadata: { email }
    });

    await createSecurityEvent({
      eventType: "LOGIN_SUCCESS",
      severity: "LOW",
      relatedUserId: String(user._id),
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      metadata: { area: "customer", email }
    });

    const response = NextResponse.json({
      ok: true,
      message: "Login successful.",
      user: {
        id: String(user._id),
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        status: user.status
      }
    });

    setCustomerCookie(response, token);

    return response;
  } catch (error) {
    console.error("Customer login error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to complete login." },
      { status: 500 }
    );
  }
}
