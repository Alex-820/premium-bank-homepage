import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { BANK_NAME } from "@/lib/site";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  UserCheck
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Enroll in Online Banking | ${BANK_NAME}`,
  description:
    "Enroll in secure online banking for eligible accounts with identity verification, credential setup, authentication, and digital banking access."
};

const enrollmentSteps = [
  {
    icon: UserCheck,
    title: "Verify your identity",
    description:
      "Confirm customer information before online banking access is created."
  },
  {
    icon: KeyRound,
    title: "Create secure credentials",
    description:
      "Set up a username, password, and security verification method."
  },
  {
    icon: Smartphone,
    title: "Configure digital access",
    description:
      "Prepare account access, alerts, device review, and authentication settings."
  }
];

export default function EnrollPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_460px] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Online Banking Enrollment
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              Enroll for secure digital access to eligible accounts.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              Set up online banking access through a protected enrollment workflow
              designed for identity verification, credential creation, authentication,
              and account protection.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {enrollmentSteps.map((item) => (
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
                  Secure Enrollment
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  Create online banking access
                </h2>
              </div>

              <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
                <LockKeyhole size={21} className="text-bank-blue" />
              </div>
            </div>

            <form className="mt-6 space-y-5">
              <div>
                <label htmlFor="accountType" className="text-sm font-semibold text-ink-950">
                  Account type
                </label>
                <select
                  id="accountType"
                  name="accountType"
                  className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm text-ink-950 outline-none transition focus:border-bank-blue"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select account type
                  </option>
                  <option>Personal account</option>
                  <option>Business account</option>
                  <option>Credit card account</option>
                  <option>Loan account</option>
                  <option>Wealth or investment relationship</option>
                </select>
              </div>

              <div>
                <label htmlFor="identifier" className="text-sm font-semibold text-ink-950">
                  Account or customer identifier
                </label>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                  placeholder="Enter customer or account reference"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-ink-950">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-ink-950">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                  placeholder="Phone number"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="enrollmentAcknowledgement"
                  name="enrollmentAcknowledgement"
                  type="checkbox"
                  className="mt-1 h-4 w-4 border-bank-line"
                />
                <label htmlFor="enrollmentAcknowledgement" className="text-sm leading-6 text-bank-steel">
                  I understand enrollment requires identity verification, secure
                  credential creation, authentication controls, and backend approval
                  before production use.
                </label>
              </div>

              <button type="button" className="btn-primary h-12 w-full justify-center">
                Continue Enrollment <ArrowRight size={17} />
              </button>
            </form>

            <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-4">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-bank-gold" size={18} />
                <p className="text-xs leading-6 text-ink-900">
                  {BANK_NAME} will never ask for your password or one-time verification
                  code through an unsolicited message, phone call, or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <FileText className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Eligibility
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Online banking enrollment requires an eligible account or approved
              customer profile, verified contact information, and acceptance of
              digital banking terms.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <CheckCircle2 className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Verification
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Production enrollment should verify identity, account ownership,
              contact methods, device risk, and customer authorization.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <LockKeyhole className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Backend readiness
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Real enrollment requires secure validation, password hashing,
              multifactor authentication, rate limiting, and audit logging.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
