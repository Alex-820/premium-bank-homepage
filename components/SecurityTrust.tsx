import { SectionHeader } from "@/components/SectionHeader";
import { trustItems } from "@/lib/site";
import { ArrowRight, LockKeyhole } from "lucide-react";

export function SecurityTrust() {
  return (
    <section id="security-center" className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Security & Trust"
              title="Security controls designed for serious financial relationships."
              description="Clients expect strong protection, clear disclosures, and practical education. This section avoids unsupported insurance claims and keeps trust language compliant and precise."
            />
            <div className="mt-8 border border-bank-line bg-bank-mist p-5">
              <div className="flex gap-3">
                <LockKeyhole className="mt-1 shrink-0 text-bank-blue" size={19} />
                <p className="text-sm leading-7 text-bank-steel">
                  Deposit protection, insurance eligibility, and regulatory coverage depend on the account type, charter, product provider, and applicable official disclosures. Review all disclosures before opening or funding an account.
                </p>
              </div>
            </div>
            <a href="/security-center" className="btn-primary mt-8 w-fit">
              Visit Security Center <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={index === 0 ? "border border-bank-line bg-ink-950 p-6 text-white sm:col-span-2" : "border border-bank-line bg-white p-6 shadow-sm"}>
                  <span className={index === 0 ? "grid h-12 w-12 place-items-center bg-bank-goldSoft text-ink-950" : "grid h-12 w-12 place-items-center bg-bank-mist text-bank-blue"}>
                    <Icon size={22} />
                  </span>
                  <h3 className={`mt-5 text-lg font-semibold tracking-[-0.02em] ${index === 0 ? "text-white" : "text-ink-950"}`}>{item.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/70" : "text-bank-steel"}`}>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
