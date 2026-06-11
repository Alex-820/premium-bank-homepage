import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { bankPages } from "@/lib/pageContent";
import { personalBankPages } from "@/lib/pageContentPersonal";
import { businessBankPages } from "@/lib/pageContentBusiness";
import { wealthBankPages } from "@/lib/pageContentWealth";
import { investmentBankPages } from "@/lib/pageContentInvestments";
import { loanBankPages } from "@/lib/pageContentLoans";
import { creditCardBankPages } from "@/lib/pageContentCreditCards";
import { digitalBankPages } from "@/lib/pageContentDigitalBanking";
import { supportBankPages } from "@/lib/pageContentSupport";
import { institutionalBankPages } from "@/lib/pageContentInstitutional";
import { utilityBankPages } from "@/lib/pageContentUtility";
import { BANK_NAME } from "@/lib/site";
import { ArrowRight, CheckCircle2, HelpCircle, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

const allBankPages = [...bankPages, ...personalBankPages, ...businessBankPages, ...wealthBankPages, ...investmentBankPages, ...loanBankPages, ...creditCardBankPages, ...digitalBankPages, ...supportBankPages, ...institutionalBankPages, ...utilityBankPages];

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

function titleFromSlug(slug: string) {
  return slug
    .split("/")
    .pop()
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") ?? "Banking Services";
}

function ctaHref(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes("open") || normalized.includes("start")) return "/open-account";
  if (normalized.includes("contact")) return "/support/contact";
  if (normalized.includes("support")) return "/support";
  if (normalized.includes("fraud")) return "/support/report-fraud";
  if (normalized.includes("security")) return "/security-center";
  if (normalized.includes("advisor") || normalized.includes("consultation")) return "/wealth/financial-advisors";
  if (normalized.includes("sign in")) return "/login";
  if (normalized.includes("enroll")) return "/digital-banking/online-banking";
  if (normalized.includes("recover")) return "/forgot-password";
  if (normalized.includes("risk") || normalized.includes("disclosure")) return "/disclosures";

  return "/open-account";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const page = allBankPages.find((bankPage) => bankPage.slug === path);

  if (!page) {
    const title = titleFromSlug(path);

    return {
      title: `${title} | ${BANK_NAME}`,
      description:
        "Aster Bank information page prepared for secure banking services, disclosures, and customer support."
    };
  }

  return {
    title: page.seoTitle,
    description: page.seoDescription
  };
}

export function generateStaticParams() {
  return allBankPages.filter((page) => page.slug !== "login").map((page) => ({
    slug: page.slug.split("/")
  }));
}

export default async function BankDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const path = slug.join("/");
  const page = allBankPages.find((bankPage) => bankPage.slug === path);

  if (!page) {
    const fallbackTitle = titleFromSlug(path);

    return (
      <main className="min-h-screen bg-white text-ink-950">
        <TopUtilityBar />
        <MainNav />

        <section className="border-b border-bank-line bg-bank-mist">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              {BANK_NAME}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
              {fallbackTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
              This page is prepared for dedicated banking content, disclosures,
              secure workflows, and backend integration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/open-account" className="btn-primary h-12 justify-center px-6">
                Open an Account <ArrowRight size={17} />
              </a>
              <a href="/support" className="btn-secondary h-12 justify-center px-6">
                Contact Support
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {["Overview", "Eligibility", "Security", "Disclosures", "Digital Access", "Support"].map((item) => (
              <div key={item} className="border border-bank-line bg-white p-6 shadow-sm">
                <ShieldCheck className="text-bank-blue" size={22} />
                <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
                  {item}
                </h2>
                <p className="mt-3 text-sm leading-7 text-bank-steel">
                  Structured for a secure, compliant, institution-grade banking experience.
                </p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            {page.eyebrow}
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
            {page.headline}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
            {page.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={ctaHref(page.primaryCta)} className="btn-primary h-12 justify-center px-6">
              {page.primaryCta} <ArrowRight size={17} />
            </a>
            <a href={ctaHref(page.secondaryCta)} className="btn-secondary h-12 justify-center px-6">
              {page.secondaryCta}
            </a>
          </div>

          <div className="mt-8 max-w-4xl border border-bank-gold/35 bg-white p-5 text-sm leading-7 text-bank-steel shadow-sm">
            <strong className="text-ink-950">Important:</strong> {page.trustNote}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              {page.category}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink-950 sm:text-4xl">
              {page.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-bank-steel">
              {page.seoDescription}
            </p>
          </div>

          <div className="space-y-8">
            {page.sections.map((section) => (
              <div key={section.title} className="border border-bank-line bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-bank-steel">
                  {section.description}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {section.items.map((item) => (
                    <div key={item.title} className="bg-bank-mist p-5">
                      <ShieldCheck size={20} className="text-bank-blue" />
                      <h4 className="mt-4 text-base font-semibold text-ink-950">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-bank-steel">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
                Customer Benefits
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
                Built for clarity, protection, and long-term relationship value.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {page.benefits.map((benefit) => (
                <div key={benefit.title} className="border border-bank-line bg-white p-6 shadow-sm">
                  <CheckCircle2 className="text-bank-blue" size={22} />
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-bank-steel">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border border-bank-line bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
              {page.eligibility.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-bank-steel">
              {page.eligibility.description}
            </p>

            <ul className="mt-6 space-y-3">
              {page.eligibility.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-bank-steel">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-bank-blue" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-bank-gold/40 bg-[#fff8e8] p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
              Disclosure and risk information
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-900">
              {page.disclosure}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-bank-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="border border-bank-line bg-bank-mist p-6">
                <HelpCircle className="text-bank-blue" size={22} />
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-ink-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-bank-steel">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-14 text-white sm:px-6 sm:py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-goldSoft">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {page.finalCta.headline}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
              {page.finalCta.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={ctaHref(page.finalCta.primaryCta)} className="btn-gold h-12 justify-center px-6">
                {page.finalCta.primaryCta} <ArrowRight size={17} />
              </a>
              <a href={ctaHref(page.finalCta.secondaryCta)} className="btn-ghost-dark h-12 justify-center px-6">
                {page.finalCta.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
