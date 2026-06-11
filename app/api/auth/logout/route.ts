import { clearCustomerCookie } from "@/lib/customerSession";
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    ok: true,
    message: "Logged out."
  });

  clearCustomerCookie(response);

  return response;
}
