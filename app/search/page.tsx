import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { institutionalLinks, navigationGroups } from "@/lib/navigation";
import { BANK_NAME } from "@/lib/site";
import {
  ArrowRight,
  FileText,
  HelpCircle,
  LockKeyhole,
  Search,
  ShieldCheck
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Search Banking Services | ${BANK_NAME}`,
  description:
    "Search banking services, support resources, security information, disclosures, and product pages."
};

const popularSearches = [
  { label: "Open an Account", href: "/open-account" },
  { label: "Secure Login", href: "/login" },
  { label: "Enroll in Online Banking", href: "/enroll" },
  { label: "Report Fraud", href: "/support/report-fraud" },
  { label: "Digital Assets Risk", href: "/investments/digital-assets" },
  { label: "Regulatory Information", href: "/regulatory-information" }
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Search {BANK_NAME}
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
            Find banking services, support resources, and important disclosures.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
            Search across personal banking, business banking, wealth, investments,
            lending, credit cards, digital banking, support, security, and institutional
            information.
          </p>

          <form className="mt-8 max-w-3xl border border-bank-line bg-white p-3 shadow-institutional">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-h-12 flex-1 items-center border border-bank-line px-3">
                <Search size={19} className="text-bank-steel" />
                <input
                  type="search"
                  name="query"
                  placeholder="Search Aster Bank"
                  className="h-12 w-full bg-transparent px-3 text-sm text-ink-950 outline-none placeholder:text-bank-steel"
                />
              </div>

              <button type="button" className="btn-primary h-12 justify-center px-6">
                Search <ArrowRight size={17} />
              </button>
            </div>

            <p className="mt-3 text-xs leading-6 text-bank-steel">
              Prototype note: production search requires approved indexing, privacy review,
              security review, result ranking, and no exposure of private customer data.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Popular Searches
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink-950 sm:text-4xl">
              Common destinations customers look for first.
            </h2>
            <p className="mt-5 text-base leading-8 text-bank-steel">
              These links route customers to high-priority banking, security, support,
              and disclosure pages.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {popularSearches.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between border border-bank-line bg-white p-5 shadow-sm transition hover:border-bank-blue hover:bg-bank-mist"
              >
                <span className="text-sm font-semibold text-ink-950">{item.label}</span>
                <span className="text-bank-gold">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-bank-line bg-white p-6 shadow-sm">
              <HelpCircle className="text-bank-blue" size={22} />
              <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
                Support resources
              </h2>
              <p className="mt-3 text-sm leading-7 text-bank-steel">
                Find help center topics, contact options, appointments, fraud reporting,
                and digital banking support.
              </p>
              <a href="/support/help-center" className="mt-5 inline-flex text-sm font-semibold text-bank-blue">
                Visit Help Center →
              </a>
            </div>

            <div className="border border-bank-line bg-white p-6 shadow-sm">
              <ShieldCheck className="text-bank-blue" size={22} />
              <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
                Security information
              </h2>
              <p className="mt-3 text-sm leading-7 text-bank-steel">
                Review fraud prevention, account protection, alerts, secure login,
                and suspicious activity reporting.
              </p>
              <a href="/security-center" className="mt-5 inline-flex text-sm font-semibold text-bank-blue">
                Visit Security Center →
              </a>
            </div>

            <div className="border border-bank-line bg-white p-6 shadow-sm">
              <FileText className="text-bank-blue" size={22} />
              <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
                Disclosures
              </h2>
              <p className="mt-3 text-sm leading-7 text-bank-steel">
                Access regulatory information, product disclosures, privacy, terms,
                accessibility, and important risk language.
              </p>
              <a href="/disclosures" className="mt-5 inline-flex text-sm font-semibold text-bank-blue">
                Review Disclosures →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border border-bank-line bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <LockKeyhole className="text-bank-blue" size={22} />
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                Banking categories
              </h2>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {navigationGroups.map((group) => (
                <a
                  key={group.href}
                  href={group.href}
                  className="border border-bank-line bg-bank-mist px-4 py-3 text-sm font-semibold text-ink-950 transition hover:border-bank-blue hover:bg-white"
                >
                  {group.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border border-bank-line bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <FileText className="text-bank-blue" size={22} />
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                Institutional information
              </h2>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {institutionalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border border-bank-line bg-bank-mist px-4 py-3 text-sm font-semibold text-ink-950 transition hover:border-bank-blue hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
