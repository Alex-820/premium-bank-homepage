import { SectionHeader } from "@/components/SectionHeader";
import { investmentCategories } from "@/lib/site";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

export function WealthInvestments() {
  return (
    <section id="wealth" className="border-y border-bank-line bg-[#FBFCFD] py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Wealth & Investments"
              title="Guidance for sophisticated portfolios, family wealth, and long-term capital."
              description="Private banking, advisory, retirement, portfolio construction, trust services, tax-aware planning, and risk education are presented with institutional discipline."
            />
            <div className="mt-8 space-y-3 text-sm leading-7 text-bank-steel">
              {[
                "Private banking and personalized relationship coverage",
                "Investment advisory and managed portfolio options",
                "Retirement, trust, estate, and tax-aware planning"
              ].map((item) => (
                <p key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-bank-blue" size={17} /> {item}
                </p>
              ))}
            </div>
            <a href="/wealth" className="btn-primary mt-8 w-fit">
              Speak with an advisor <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {investmentCategories.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className={`border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card ${
                    category.highRisk
                      ? "border-amber-300 bg-amber-50/70 sm:col-span-2"
                      : "border-bank-line bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className={category.highRisk ? "grid h-11 w-11 place-items-center bg-amber-100 text-amber-800" : "grid h-11 w-11 place-items-center bg-bank-mist text-bank-blue"}>
                      <Icon size={20} />
                    </span>
                    {category.highRisk && (
                      <span className="inline-flex items-center gap-1.5 border border-amber-300 bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800">
                        <AlertTriangle size={13} /> High Risk
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink-950">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-bank-steel">
                    {category.highRisk
                      ? "Digital assets and crypto exposure should be treated as speculative, volatile, and unsuitable for some clients. Availability requires explicit risk review and separate disclosures."
                      : "Explore institutional planning, advisory, risk management, and account capabilities through a disciplined investment framework."}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
