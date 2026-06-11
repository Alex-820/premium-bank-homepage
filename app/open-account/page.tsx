import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { BANK_NAME } from "@/lib/site";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  UserRound
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Open an Account | ${BANK_NAME}`,
  description:
    "Start a secure account opening process for personal, business, wealth, investment, lending, and digital banking services."
};

const accountTypes = [
  {
    icon: UserRound,
    title: "Personal Banking",
    description: "Checking, savings, cards, digital banking, and everyday financial access."
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Banking",
    description: "Business checking, treasury, merchant services, payroll, and lending support."
  },
  {
    icon: Landmark,
    title: "Wealth and Investments",
    description: "Private banking, advisory, portfolio, retirement, and investment account review."
  }
];

const steps = [
  "Choose the relationship or product you want to request",
  "Provide identity, contact, and eligibility information",
  "Review disclosures, terms, and required acknowledgements",
  "Submit for verification, approval, or follow-up review"
];

export default function OpenAccountPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_460px] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Account Opening
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              Start a secure banking relationship with a structured application.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              Begin an account opening request for personal banking, business banking,
              wealth, investments, lending, or digital access. Applications are subject to
              verification, eligibility, disclosures, and approval.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {accountTypes.map((item) => (
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
                  Secure Application
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  Begin account request
                </h2>
              </div>

              <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
                <LockKeyhole size={21} className="text-bank-blue" />
              </div>
            </div>

            <form className="mt-6 space-y-5">
              <div>
                <label htmlFor="relationshipType" className="text-sm font-semibold text-ink-950">
                  Relationship type
                </label>
                <select
                  id="relationshipType"
                  name="relationshipType"
                  className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm text-ink-950 outline-none transition focus:border-bank-blue"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select relationship type
                  </option>
                  <option>Personal Banking</option>
                  <option>Business Banking</option>
                  <option>Wealth Management</option>
                  <option>Investment Account</option>
                  <option>Lending Inquiry</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="text-sm font-semibold text-ink-950">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="text-sm font-semibold text-ink-950">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                    placeholder="Last name"
                  />
                </div>
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
                  id="acknowledgement"
                  name="acknowledgement"
                  type="checkbox"
                  className="mt-1 h-4 w-4 border-bank-line"
                />
                <label htmlFor="acknowledgement" className="text-sm leading-6 text-bank-steel">
                  I understand this is a frontend prototype. A production account opening
                  flow requires identity verification, disclosures, KYC/KYB review,
                  approval workflows, and secure backend processing.
                </label>
              </div>

              <button type="button" className="btn-primary h-12 w-full justify-center">
                Continue Application <ArrowRight size={17} />
              </button>
            </form>

            <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-4">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-bank-gold" size={18} />
                <p className="text-xs leading-6 text-ink-900">
                  Account opening is subject to eligibility, customer verification,
                  applicable terms, disclosures, product approval, and bank policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink-950 sm:text-4xl">
              Built for verification, clarity, and compliance review.
            </h2>
            <p className="mt-5 text-base leading-8 text-bank-steel">
              A real account opening workflow must protect sensitive information,
              collect required details, present disclosures, and route applications
              through the appropriate review path.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 border border-bank-line bg-white p-5 shadow-sm">
                <div className="grid h-9 w-9 shrink-0 place-items-center border border-bank-line bg-bank-mist text-sm font-semibold text-bank-blue">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink-950">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-bank-steel">
                    This step is prepared for secure backend validation, document handling,
                    review status, and audit logging in later phases.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-3">
          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <FileText className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Documents and disclosures
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Product-specific disclosures, agreements, fees, terms, and risk notices
              must be presented before submission or acceptance.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Identity verification
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Production onboarding requires secure identity checks, fraud controls,
              KYC/KYB workflows, and compliance review.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <CheckCircle2 className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Application status
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Later backend phases should support submission tracking, review status,
              requests for information, and secure customer notifications.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
