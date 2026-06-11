import type { NextRequest } from "next/server";

export function getRequestMeta(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  const ipAddress =
    forwardedFor?.split(",")[0]?.trim() ||
    realIp ||
    "unknown";

  const userAgent = request.headers.get("user-agent") || "unknown";

  return {
    ipAddress,
    userAgent
  };
}
