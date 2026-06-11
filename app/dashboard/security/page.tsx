import { SuspiciousActivityForm } from "@/components/dashboard/SuspiciousActivityForm";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { SecurityEvent } from "@/models/SecurityEvent";
import { User } from "@/models/User";
import { ArrowLeft, LockKeyhole, ShieldAlert, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

async function getSecurityData(userId: string) {
  await connectDB();

  const [user, events] = await Promise.all([
    User.findById(userId).lean(),
    SecurityEvent.find({ relatedUserId: userId }).sort({ createdAt: -1 }).limit(50).lean()
  ]);

  return {
    user,
    events
  };
}

export default async function CustomerSecurityPage() {
  const session = await getCustomerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await getSecurityData(session.userId);

  if (!data.user) {
    redirect("/login");
  }

  const highRiskEvents = data.events.filter((event: any) =>
    ["HIGH", "CRITICAL"].includes(String(event.severity))
  );

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bank-blue"
          >
            <ArrowLeft size={16} /> Back to dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Security Center
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl">
            Review account security activity.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-bank-steel">
            View login and security events linked to your profile, and report suspicious
            activity for internal review.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              User Status
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.user.status}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <LockKeyhole className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Email Verified
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.user.emailVerified ? "YES" : "NO"}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldAlert className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Security Events
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.events.length}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldAlert className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              High Risk
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {highRiskEvents.length}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 sm:pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <ShieldAlert className="text-bank-blue" size={22} />

          <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink-950">
            Report Suspicious Activity
          </h2>

          <p className="mt-2 text-sm leading-7 text-bank-steel">
            Submit a security report if you notice an unrecognized login, suspicious
            message, card concern, profile concern, or unauthorized activity.
          </p>

          <SuspiciousActivityForm />

          <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-4">
            <p className="text-xs leading-6 text-ink-900">
              Do not enter passwords, full card numbers, SSN, or sensitive credentials.
              For production banking, urgent fraud reporting must include verified support
              channels, case handling, and regulated escalation procedures.
            </p>
          </div>
        </div>

        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <div className="border-b border-bank-line pb-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
              Security Event History
            </h2>
            <p className="mt-2 text-sm leading-6 text-bank-steel">
              Recent login, security, and suspicious activity events linked to your customer profile.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {data.events.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-5 text-sm text-bank-steel">
                No security events yet.
              </div>
            ) : (
              data.events.map((event: any) => (
                <div
                  key={String(event._id)}
                  className="grid gap-3 border border-bank-line bg-white p-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink-950">
                      {event.eventType}
                    </p>
                    <p className="mt-1 text-xs text-bank-steel">
                      {event.ipAddress || "unknown IP"}
                    </p>
                    <p className="mt-2 text-[11px] text-bank-steel">
                      {formatDate(event.createdAt)}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="inline-flex border border-bank-line bg-bank-mist px-3 py-1 text-xs font-semibold text-bank-blue">
                      {event.severity}
                    </span>
                    <p className="mt-2 text-xs text-bank-steel">
                      {event.status}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
