import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getAdminSession } from "@/lib/adminSession";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Login | Aster Bank",
  description: "Secure admin login for internal banking operations review."
};

export default async function AdminLoginPage() {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_440px] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Internal Access
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              Secure admin access for review operations.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              This admin area is for reviewing submitted applications, enrollments,
              support requests, fraud reports, audit logs, and security events.
            </p>

            <div className="mt-8 border border-bank-gold/40 bg-[#fff8e8] p-5">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-bank-gold" size={19} />
                <p className="text-sm leading-7 text-ink-900">
                  Production admin access should use separate admin identity,
                  MFA, RBAC, device review, session controls, and audit logging.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-institutional">
            <div className="flex items-start justify-between gap-4 border-b border-bank-line pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
                  Admin Login
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  Sign in
                </h2>
              </div>

              <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
                <LockKeyhole size={21} className="text-bank-blue" />
              </div>
            </div>

            <AdminLoginForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
