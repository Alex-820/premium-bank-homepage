import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { BANK_NAME } from "@/lib/site";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Recover Online Banking Access | ${BANK_NAME}`,
  description:
    "Recover online banking access through secure identity verification, credential reset, account protection, and support workflows."
};

const recoverySteps = [
  {
    icon: UserCheck,
    title: "Verify identity",
    description: "Confirm customer information before account recovery continues."
  },
  {
    icon: KeyRound,
    title: "Reset credentials",
    description: "Use a protected workflow to recover username or reset password."
  },
  {
    icon: ShieldCheck,
    title: "Protect access",
    description: "Apply additional checks when risk signals or unusual activity appear."
  }
];

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_460px] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Account Recovery
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              Recover online banking access through a secure verification process.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              Recover your username or reset your password through a protected workflow
              designed for identity verification, account protection, risk review, and
              secure digital access.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {recoverySteps.map((item) => (
                <div key={item.title} className="border border-bank-line bg-white p-5 shadow-sm">
                  <item.icon className="text-bank-blue" size={22} />
                  <h2 className="mt-4 text-sm font-semibold text-ink-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-bank-steel">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-institutional">
            <div className="flex items-start justify-between gap-4 border-b border-bank-line pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
                  Secure Recovery
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  Recover access
                </h2>
              </div>

              <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
                <LockKeyhole size={21} className="text-bank-blue" />
              </div>
            </div>

            <form className="mt-6 space-y-5">
              <div>
                <label htmlFor="recoveryType" className="text-sm font-semibold text-ink-950">
                  What do you need help with?
                </label>
                <select
                  id="recoveryType"
                  name="recoveryType"
                  className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm text-ink-950 outline-none transition focus:border-bank-blue"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select recovery option
                  </option>
                  <option>Forgot username</option>
                  <option>Forgot password</option>
                  <option>Account locked</option>
                  <option>Security verification issue</option>
                </select>
              </div>

              <div>
                <label htmlFor="identifier" className="text-sm font-semibold text-ink-950">
                  Username, email, or customer reference
                </label>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                  placeholder="Enter username, email, or reference"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-ink-950">
                  Email address on profile
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                  placeholder="name@example.com"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="recoveryAcknowledgement"
                  name="recoveryAcknowledgement"
                  type="checkbox"
                  className="mt-1 h-4 w-4 border-bank-line"
                />
                <label htmlFor="recoveryAcknowledgement" className="text-sm leading-6 text-bank-steel">
                  I understand account recovery requires identity verification and may
                  require additional review before access is restored.
                </label>
              </div>

              <button type="button" className="btn-primary h-12 w-full justify-center">
                Continue Recovery <ArrowRight size={17} />
              </button>
            </form>

            <div className="mt-5 grid gap-3 border-t border-bank-line pt-5 text-sm">
              <a href="/login" className="font-semibold text-bank-blue hover:underline">
                Return to secure login
              </a>
              <a href="/support/contact" className="font-semibold text-bank-blue hover:underline">
                Contact support
              </a>
            </div>

            <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 shrink-0 text-bank-gold" size={18} />
                <p className="text-xs leading-6 text-ink-900">
                  {BANK_NAME} will never ask for your password or one-time verification
                  code through an unsolicited call, text, or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <UserCheck className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Identity verification
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Production recovery should verify identity, profile ownership, contact
              methods, and account status before allowing credential changes.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <CheckCircle2 className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Risk review
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Recovery attempts should be monitored for unusual activity, repeated
              failures, device changes, and suspicious patterns.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <LockKeyhole className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Backend readiness
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Real recovery requires secure tokens, expiration windows, rate limiting,
              audit logs, lockout rules, and protected password reset handling.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
