import { FormApiBinder } from "@/components/FormApiBinder";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { BANK_NAME } from "@/lib/site";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileText,
  LockKeyhole,
  MapPin,
  MessageSquare,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";

type SupportFormPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  formTitle: string;
  formType: "contact" | "fraud" | "appointment";
  notice: string;
};

const supportCards = [
  {
    icon: ShieldCheck,
    title: "Verified support channels",
    description:
      "Sensitive account requests should always move through authenticated and approved service channels."
  },
  {
    icon: LockKeyhole,
    title: "Identity verification",
    description:
      "Production support workflows require customer verification before account-specific actions are taken."
  },
  {
    icon: FileText,
    title: "Audit-ready process",
    description:
      "Backend support requests should create secure records, status updates, and internal review trails."
  }
];

export function SupportFormPage({
  eyebrow,
  title,
  description,
  formTitle,
  formType,
  notice
}: SupportFormPageProps) {
  const endpoint =
    formType === "fraud"
      ? "/api/support/fraud-report"
      : formType === "appointment"
        ? "/api/support/appointments"
        : "/api/support/tickets";

  const formId = `support-${formType}-form`;
  const fieldMap: Record<string, string> = formType === "appointment" ? { location: "preferredLocation" } : {};

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_460px] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              {eyebrow}
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              {description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {supportCards.map((item) => (
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
                  Secure Request
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  {formTitle}
                </h2>
              </div>

              <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
                {formType === "fraud" ? (
                  <ShieldAlert size={21} className="text-bank-blue" />
                ) : formType === "appointment" ? (
                  <CalendarDays size={21} className="text-bank-blue" />
                ) : (
                  <MessageSquare size={21} className="text-bank-blue" />
                )}
              </div>
            </div>

            <form id={formId} className="mt-6 space-y-5">
              {formType === "contact" && (
                <div>
                  <label htmlFor="topic" className="text-sm font-semibold text-ink-950">
                    Support topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm text-ink-950 outline-none transition focus:border-bank-blue"
                    defaultValue=""
                  >
                    <option value="" disabled>Select support topic</option>
                    <option>Personal banking</option>
                    <option>Business banking</option>
                    <option>Credit cards</option>
                    <option>Digital banking</option>
                    <option>Lending</option>
                    <option>Wealth or investments</option>
                  </select>
                </div>
              )}

              {formType === "fraud" && (
                <div>
                  <label htmlFor="fraudType" className="text-sm font-semibold text-ink-950">
                    Fraud or security concern
                  </label>
                  <select
                    id="fraudType"
                    name="fraudType"
                    className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm text-ink-950 outline-none transition focus:border-bank-blue"
                    defaultValue=""
                  >
                    <option value="" disabled>Select concern type</option>
                    <option>Unauthorized transaction</option>
                    <option>Suspicious email, text, or phone call</option>
                    <option>Lost or stolen card</option>
                    <option>Online banking access concern</option>
                    <option>Identity theft concern</option>
                  </select>
                </div>
              )}

              {formType === "appointment" && (
                <div>
                  <label htmlFor="appointmentType" className="text-sm font-semibold text-ink-950">
                    Appointment type
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm text-ink-950 outline-none transition focus:border-bank-blue"
                    defaultValue=""
                  >
                    <option value="" disabled>Select appointment type</option>
                    <option>Personal banking</option>
                    <option>Business banking</option>
                    <option>Mortgage or lending</option>
                    <option>Wealth consultation</option>
                    <option>Digital banking support</option>
                  </select>
                </div>
              )}

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

              {formType === "appointment" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="preferredDate" className="text-sm font-semibold text-ink-950">
                      Preferred date
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      className="mt-2 h-12 w-full border border-bank-line px-3 text-sm outline-none transition focus:border-bank-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="text-sm font-semibold text-ink-950">
                      Preferred location
                    </label>
                    <div className="mt-2 flex h-12 items-center border border-bank-line px-3">
                      <MapPin size={17} className="text-bank-steel" />
                      <input
                        id="location"
                        name="location"
                        type="text"
                        className="h-full w-full px-3 text-sm outline-none"
                        placeholder="City or branch"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-ink-950">
                  {formType === "fraud" ? "Describe the suspicious activity" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full border border-bank-line p-3 text-sm outline-none transition focus:border-bank-blue"
                  placeholder={
                    formType === "fraud"
                      ? "Do not include passwords, full card numbers, or one-time verification codes."
                      : "Briefly describe how we can help."
                  }
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
                  I understand this request is a frontend prototype. Production handling requires
                  secure backend submission, customer verification, protected storage, routing,
                  audit logging, and service review.
                </label>
              </div>

              <button type="submit" className="btn-primary h-12 w-full justify-center">
                {formType === "appointment"
                  ? "Request Appointment"
                  : formType === "fraud"
                    ? "Submit Fraud Report"
                    : "Submit Request"}{" "}
                <ArrowRight size={17} />
              </button>
            </form>

            <FormApiBinder formId={formId} endpoint={endpoint} fieldMap={fieldMap} />

            <div className="mt-6 border border-bank-gold/40 bg-[#fff8e8] p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 shrink-0 text-bank-gold" size={18} />
                <p className="text-xs leading-6 text-ink-900">{notice}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <CheckCircle2 className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Request routing
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Backend workflows should route each request to the correct service team,
              queue, or escalation path.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <LockKeyhole className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Protected data
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Production forms require secure validation, encryption, access controls,
              retention rules, and sensitive-data filtering.
            </p>
          </div>

          <div className="border border-bank-line bg-white p-6 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
              Verification required
            </h2>
            <p className="mt-3 text-sm leading-7 text-bank-steel">
              Account-specific service actions should require identity verification
              before any sensitive changes are made.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
