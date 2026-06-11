import { env } from "@/config/env";
import { createAuditLog, createSecurityEvent } from "@/lib/audit";
import { createAdminToken, setAdminCookie } from "@/lib/adminSession";
import { connectDB } from "@/lib/db";
import { getRequestMeta } from "@/lib/requestMeta";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export async function POST(request: NextRequest) {
  try {
    if (!env.ADMIN_EMAIL || !env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { ok: false, message: "Admin login is not configured." },
        { status: 500 }
      );
    }

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

    const emailMatches = parsed.data.email.toLowerCase() === env.ADMIN_EMAIL.toLowerCase();
    const passwordMatches = parsed.data.password === env.ADMIN_PASSWORD;

    if (!emailMatches || !passwordMatches) {
      await createAuditLog({
        actionType: "LOGIN_FAILED",
        entityType: "AdminAuth",
        actorRole: "ADMIN",
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        riskLevel: "HIGH",
        metadata: { email: parsed.data.email }
      });

      await createSecurityEvent({
        eventType: "LOGIN_FAILED",
        severity: "HIGH",
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        metadata: { area: "admin", email: parsed.data.email }
      });

      return NextResponse.json(
        { ok: false, message: "Invalid admin credentials." },
        { status: 401 }
      );
    }

    const token = await createAdminToken(env.ADMIN_EMAIL);

    await createAuditLog({
      actionType: "LOGIN_SUCCESS",
      entityType: "AdminAuth",
      actorRole: "ADMIN",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      riskLevel: "MEDIUM",
      metadata: { email: env.ADMIN_EMAIL }
    });

    await createSecurityEvent({
      eventType: "LOGIN_SUCCESS",
      severity: "MEDIUM",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      metadata: { area: "admin", email: env.ADMIN_EMAIL }
    });

    const response = NextResponse.json({
      ok: true,
      message: "Admin login successful."
    });

    setAdminCookie(response, token);

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { ok: false, message: "Unable to complete admin login." },
      { status: 500 }
    );
  }
}
