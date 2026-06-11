import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { BANK_NAME } from "@/lib/site";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  UserRound
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Secure Online Banking Login | ${BANK_NAME}`,
  description:
    "Sign in to secure online banking with protected access, fraud awareness, account recovery, and enrollment support."
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_440px] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Secure Online Banking
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              Sign in through a protected banking access point.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              Access eligible accounts through a secure login experience designed for
              authentication, account monitoring, fraud awareness, and digital banking protection.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: LockKeyhole,
                  title: "Protected access",
                  text: "Secure credentials and session controls."
                },
                {
                  icon: Smartphone,
                  title: "Verification ready",
                  text: "Prepared for step-up authentication."
                },
                {
                  icon: ShieldCheck,
                  title: "Fraud aware",
                  text: "Designed with account protection in mind."
                }
              ].map((item) => (
                <div key={item.title} className="border border-bank-line bg-white p-5 shadow-sm">
                  <item.icon className="text-bank-blue" size={21} />
                  <h2 className="mt-4 text-sm font-semibold text-ink-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-bank-steel">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-institutional">
            <div className="flex items-start justify-between gap-4 border-b border-bank-line pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
                  Account Access
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  Online Banking Login
                </h2>
              </div>

              <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
                <LockKeyhole size={21} className="text-bank-blue" />
              </div>
            </div>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="text-sm font-semibold text-ink-950"
                >
                  Username
                </label>
                <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
                  <UserRound size={18} className="text-bank-steel" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="h-12 w-full bg-transparent px-3 text-sm text-ink-950 outline-none placeholder:text-bank-steel"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-ink-950"
                >
                  Password
                </label>
                <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
                  <LockKeyhole size={18} className="text-bank-steel" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="h-12 w-full bg-transparent px-3 text-sm text-ink-950 outline-none placeholder:text-bank-steel"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="remember-device"
                  name="rememberDevice"
                  type="checkbox"
                  className="mt-1 h-4 w-4 border-bank-line"
                />
                <label htmlFor="remember-device" className="text-sm leading-6 text-bank-steel">
                  Remember this device placeholder. In production, this requires secure device
                  fingerprinting, consent, and risk controls.
                </label>
              </div>

              <button type="button" className="btn-primary h-12 w-full justify-center">
                Sign In Securely <ArrowRight size={17} />
              </button>
            </form>

            <div className="mt-5 grid gap-3 border-t border-bank-line pt-5 text-sm">
              <a href="/forgot-password" className="font-semibold text-bank-blue hover:underline">
                Forgot username or password?
              </a>
              <a href="/enroll" className="font-semibold text-bank-blue hover:underline">
                Enroll in online banking
              </a>
            </div>

            <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 shrink-0 text-bank-gold" size={18} />
                <p className="text-xs leading-6 text-ink-900">
                  {BANK_NAME} will never ask for your password, full card number, or one-time
                  verification code through an unsolicited call, text, or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Security Center
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Review fraud prevention guidance, account protection practices, and suspicious
              activity reporting resources.
            </p>
            <a href="/security-center" className="mt-5 inline-flex text-sm font-semibold text-bank-blue">
              Visit Security Center →
            </a>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <Building2 className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Business Access
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Business banking access should support authorized users, permissions, audit trails,
              and treasury controls.
            </p>
            <a href="/business" className="mt-5 inline-flex text-sm font-semibold text-bank-blue">
              Explore Business Banking →
            </a>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <LockKeyhole className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Backend Readiness
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Production login requires password hashing, secure sessions, rate limiting,
              account lockout, device review, and audit logging.
            </p>
            <a href="/disclosures" className="mt-5 inline-flex text-sm font-semibold text-bank-blue">
              Review Disclosures →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
