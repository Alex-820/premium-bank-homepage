import { env } from "@/config/env";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { NextResponse } from "next/server";

const secret = new TextEncoder().encode(env.AUTH_SECRET);

export const ADMIN_SESSION_COOKIE = `${env.SESSION_COOKIE_NAME}_admin`;

export type AdminSession = {
  email: string;
  role: "ADMIN";
};

export async function createAdminToken(email: string) {
  return new SignJWT({
    email,
    role: "ADMIN",
    scope: "admin"
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret);
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret);
    const payload = verified.payload;

    if (payload.scope !== "admin" || payload.role !== "ADMIN" || typeof payload.email !== "string") {
      return null;
    }

    return {
      email: payload.email,
      role: "ADMIN"
    };
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin-login");
  }

  return session;
}

export function setAdminCookie(response: NextResponse, token: string) {
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

export function clearAdminCookie(response: NextResponse) {
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });
}
