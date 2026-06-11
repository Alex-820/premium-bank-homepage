import { CustomerRegisterForm } from "@/components/auth/CustomerRegisterForm";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { BANK_NAME } from "@/lib/site";
import { FileText, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Create Customer Profile | ${BANK_NAME}`,
  description:
    "Create a secure customer profile for online banking access, account requests, enrollment, and digital banking services."
};

export default async function RegisterPage() {
  const session = await getCustomerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_460px] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Customer Registration
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              Create a secure customer profile for digital banking access.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              Register a customer profile to prepare for secure online banking,
              application tracking, customer dashboard access, support workflows,
              and future account services.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border border-bank-line bg-white p-5 shadow-sm">
                <UserRound className="text-bank-blue" size={22} />
                <h2 className="mt-4 text-sm font-semibold text-ink-950">
                  Customer identity
                </h2>
                <p className="mt-2 text-xs leading-6 text-bank-steel">
                  Create the initial customer record for secure profile access.
                </p>
              </div>

              <div className="border border-bank-line bg-white p-5 shadow-sm">
                <LockKeyhole className="text-bank-blue" size={22} />
                <h2 className="mt-4 text-sm font-semibold text-ink-950">
                  Protected access
                </h2>
                <p className="mt-2 text-xs leading-6 text-bank-steel">
                  Passwords are hashed before storage and never saved as plain text.
                </p>
              </div>

              <div className="border border-bank-line bg-white p-5 shadow-sm">
                <ShieldCheck className="text-bank-blue" size={22} />
                <h2 className="mt-4 text-sm font-semibold text-ink-950">
                  Audit-ready
                </h2>
                <p className="mt-2 text-xs leading-6 text-bank-steel">
                  Registration events are prepared for audit and security logging.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-institutional">
            <div className="flex items-start justify-between gap-4 border-b border-bank-line pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
                  Secure Profile
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  Register
                </h2>
              </div>

              <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
                <UserRound size={21} className="text-bank-blue" />
              </div>
            </div>

            <CustomerRegisterForm />

            <div className="mt-5 border-t border-bank-line pt-5 text-sm">
              <a href="/login" className="font-semibold text-bank-blue hover:underline">
                Already have a profile? Sign in
              </a>
            </div>

            <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-4">
              <div className="flex gap-3">
                <FileText className="mt-0.5 shrink-0 text-bank-gold" size={18} />
                <p className="text-xs leading-6 text-ink-900">
                  This profile does not automatically open a bank account. Real account
                  opening requires eligibility checks, identity verification, disclosures,
                  compliance review, and approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
