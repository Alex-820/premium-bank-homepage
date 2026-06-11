import { env } from "@/config/env";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

const secret = new TextEncoder().encode(env.AUTH_SECRET);

export const CUSTOMER_SESSION_COOKIE = env.SESSION_COOKIE_NAME;

export type CustomerSession = {
  userId: string;
  email: string;
  role: string;
};

export async function createCustomerToken(input: CustomerSession) {
  return new SignJWT({
    userId: input.userId,
    email: input.email,
    role: input.role,
    scope: "customer"
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret);
}

export async function getCustomerSession(): Promise<CustomerSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(CUSTOMER_SESSION_COOKIE)?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret);
    const payload = verified.payload;

    if (
      payload.scope !== "customer" ||
      typeof payload.userId !== "string" ||
      typeof payload.email !== "string" ||
      typeof payload.role !== "string"
    ) {
      return null;
    }

    return {
      userId: payload.userId,
      email: payload.email,
      role: payload.role
    };
  } catch {
    return null;
  }
}

export function setCustomerCookie(response: NextResponse, token: string) {
  response.cookies.set(CUSTOMER_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

export function clearCustomerCookie(response: NextResponse) {
  response.cookies.set(CUSTOMER_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });
}
