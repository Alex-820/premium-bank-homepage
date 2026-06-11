import { LoginPanel } from "@/components/LoginPanel";
import { BANK_NAME } from "@/lib/site";
import { ArrowRight, Building2, ShieldCheck, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(168,132,69,0.18),transparent_34%),linear-gradient(135deg,#071326_0%,#091A33_42%,#123B66_100%)]" />
      <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/3 border border-white/10 opacity-50 animate-slow-drift" />
      <div className="absolute bottom-0 right-0 -z-10 h-64 w-[42rem] border-l border-t border-white/10 bg-white/[0.025]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_400px] lg:items-center lg:py-20 xl:grid-cols-[1fr_430px]">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 border border-white/15 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/78">
            <ShieldCheck size={15} className="text-bank-goldSoft" /> Secure banking for modern financial life
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Banking built for trust, capital, and long-term financial confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            {BANK_NAME} brings together personal banking, business services, lending, wealth planning, investments, and secure digital access in one disciplined financial institution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/open-account" className="btn-gold h-12 justify-center px-6">
              Open an Account <ArrowRight size={17} />
            </a>
            <a href="/wealth" className="btn-ghost-dark h-12 justify-center px-6">
              Explore Wealth Services
            </a>
          </div>

          <div className="mt-12 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3">
            {[
              { label: "Personal, business, and private client banking", icon: Building2 },
              { label: "Integrated planning and investment guidance", icon: TrendingUp },
              { label: "Security-led online and mobile banking", icon: ShieldCheck }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-3 text-sm leading-6 text-white/76">
                  <Icon className="mt-1 shrink-0 text-bank-goldSoft" size={18} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <LoginPanel />
        </div>
      </div>
    </section>
  );
}
