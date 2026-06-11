import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, Check } from "lucide-react";

type BankingSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  tone?: "light" | "dark";
  imagePosition?: "left" | "right";
};

export function BankingSection({
  eyebrow,
  title,
  description,
  items,
  tone = "light",
  imagePosition = "right"
}: BankingSectionProps) {
  const isDark = tone === "dark";
  const copy = (
    <div className="lg:max-w-xl">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} light={isDark} />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className={`flex items-center gap-3 border p-4 text-sm font-semibold ${isDark ? "border-white/10 bg-white/[0.04] text-white/84" : "border-bank-line bg-white text-ink-900"}`}>
            <span className={`grid h-6 w-6 shrink-0 place-items-center ${isDark ? "bg-bank-goldSoft text-ink-950" : "bg-bank-mist text-bank-blue"}`}>
              <Check size={14} />
            </span>
            {item}
          </div>
        ))}
      </div>
      <a href={title.toLowerCase().includes("business") ? "/business" : "/personal"} className={isDark ? "btn-gold mt-8 w-fit" : "btn-primary mt-8 w-fit"}>
        Learn more <ArrowRight size={16} />
      </a>
    </div>
  );

  const visual = (
    <div className={`relative min-h-[420px] overflow-hidden border ${isDark ? "border-white/10 bg-white/[0.045]" : "border-bank-line bg-bank-mist"}`}>
      <div className="absolute inset-8 border border-bank-gold/30" />
      <div className="absolute left-8 top-8 h-24 w-44 bg-white shadow-card" />
      <div className="absolute bottom-10 left-8 right-8 border border-bank-line bg-white p-6 shadow-institutional">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">Relationship Summary</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {["Deposits", "Credit", "Advisory"].map((label, index) => (
            <div key={label} className="border border-bank-line p-4">
              <p className="text-xs text-bank-steel">{label}</p>
              <div className="mt-3 h-2 bg-bank-mist">
                <div className="h-2 bg-bank-blue" style={{ width: `${62 + index * 11}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-10 top-12 w-56 border border-white/60 bg-ink-950 p-5 text-white shadow-institutional">
        <p className="text-xs uppercase tracking-[0.2em] text-bank-goldSoft">Banking Desk</p>
        <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">360°</p>
        <p className="mt-2 text-sm leading-6 text-white/70">Coverage across accounts, lending, planning, and secure digital access.</p>
      </div>
    </div>
  );

  return (
    <section id={eyebrow.toLowerCase().replaceAll(" ", "-")} className={isDark ? "bg-ink-950 py-18 text-white sm:py-24" : "bg-white py-18 sm:py-24"}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        {imagePosition === "left" ? (
          <>
            {visual}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}
