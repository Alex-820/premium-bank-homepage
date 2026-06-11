import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      ok: true,
      service: "premium-bank-homepage",
      database: "connected",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Health check failed:", error);

    return NextResponse.json(
      {
        ok: false,
        service: "premium-bank-homepage",
        database: "disconnected",
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
