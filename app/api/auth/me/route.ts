import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getCustomerSession();

  if (!session) {
    return NextResponse.json(
      { ok: false, user: null },
      { status: 401 }
    );
  }

  await connectDB();

  const user = await User.findById(session.userId).lean();

  if (!user) {
    return NextResponse.json(
      { ok: false, user: null },
      { status: 401 }
    );
  }

  return NextResponse.json({
    ok: true,
    user: {
      id: String(user._id),
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      status: user.status
    }
  });
}
