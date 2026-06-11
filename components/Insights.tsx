import { SectionHeader } from "@/components/SectionHeader";
import { insights } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function Insights() {
  return (
    <section id="support" className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Advisory & Insights"
            title="Perspective for markets, planning, business, and security."
            description="A serious financial institution should educate as well as transact. These editorial cards are intentionally calm, structured, and professional."
          />
          <a href="/insights" className="btn-secondary w-fit">
            View insights
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((item) => (
            <article key={item.title} className="group border border-bank-line bg-white p-6 transition hover:-translate-y-1 hover:border-bank-blue hover:shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bank-gold">{item.eyebrow}</p>
              <h3 className="mt-5 text-xl font-semibold leading-7 tracking-[-0.03em] text-ink-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-bank-steel">{item.description}</p>
              <a href="/insights" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bank-blue">
                Read article <ArrowRight className="transition group-hover:translate-x-1" size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
