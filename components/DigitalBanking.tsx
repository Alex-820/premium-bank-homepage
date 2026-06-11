import { SectionHeader } from "@/components/SectionHeader";
import { digitalFeatures } from "@/lib/site";
import { ArrowRight, Bell, CreditCard, ReceiptText, Send, Smartphone } from "lucide-react";

export function DigitalBanking() {
  return (
    <section id="digital-banking" className="overflow-hidden bg-bank-mist py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="relative min-h-[520px]">
          <div className="absolute left-0 top-10 hidden h-[430px] w-[270px] border border-bank-line bg-white p-4 shadow-institutional sm:block">
            <div className="border-b border-bank-line pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">Mobile Banking</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink-950">Account Overview</h3>
            </div>
            <div className="mt-5 space-y-3">
              {["Premier Checking", "High-Yield Savings", "Rewards Card"].map((label, index) => (
                <div key={label} className="border border-bank-line p-4">
                  <p className="text-xs text-bank-steel">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-ink-950">•••• {2481 + index * 113}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-[330px] border-[10px] border-ink-950 bg-white shadow-institutional sm:absolute sm:left-44 sm:top-0">
            <div className="bg-ink-950 px-5 py-4 text-white">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Secure Banking</p>
                <Smartphone size={18} />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-bank-goldSoft">Available balance</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">$42,680.25</p>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4">
              {[
                { label: "Transfers", icon: Send },
                { label: "Bill Pay", icon: ReceiptText },
                { label: "Card Controls", icon: CreditCard },
                { label: "Alerts", icon: Bell }
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <button key={action.label} className="border border-bank-line bg-bank-mist p-4 text-left text-sm font-semibold text-ink-900 transition hover:border-bank-blue hover:bg-white">
                    <Icon className="mb-3 text-bank-blue" size={19} />
                    {action.label}
                  </button>
                );
              })}
            </div>
            <div className="border-t border-bank-line p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">Recent alerts</p>
              <div className="mt-4 space-y-3 text-sm text-bank-steel">
                <p className="border-l-2 border-bank-blue pl-3">Card purchase approved</p>
                <p className="border-l-2 border-bank-gold pl-3">New device recognized</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Digital Banking"
            title="Secure account access wherever financial decisions happen."
            description="Modern online and mobile banking should feel calm, controlled, and secure. Clients can move money, monitor accounts, manage cards, deposit checks, and receive alerts with confidence."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {digitalFeatures.map((feature) => (
              <div key={feature} className="border border-bank-line bg-white px-4 py-3 text-sm font-semibold text-ink-900 shadow-sm">
                {feature}
              </div>
            ))}
          </div>
          <a href="/digital-banking" className="btn-primary mt-8 w-fit">
            Explore digital banking <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
