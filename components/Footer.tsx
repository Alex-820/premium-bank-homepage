import { institutionalLinks, navigationGroups } from "@/lib/navigation";
import { BANK_NAME } from "@/lib/site";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-bank-line bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <a href="/" className="flex items-center gap-3" aria-label={`${BANK_NAME} home`}>
              <span className="grid h-11 w-11 place-items-center border border-bank-gold/50 bg-white text-sm font-semibold text-ink-950">
                AB
              </span>
              <span>
                <span className="block text-xl font-semibold tracking-[-0.03em]">
                  {BANK_NAME}
                </span>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Private • Commercial • Digital
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              A premium banking platform structured for personal banking, business banking,
              wealth, investments, lending, credit cards, digital banking, and secure support.
            </p>

            <div className="mt-6 border border-white/10 bg-white/[0.04] p-4">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-bank-goldSoft" size={18} />
                <p className="text-xs leading-6 text-white/55">
                  Security, regulatory, deposit insurance, investment, lending, and digital asset
                  language must be reviewed by legal and compliance teams before production use.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {navigationGroups.map((group) => (
              <div key={group.label}>
                <a
                  href={group.href}
                  className="text-sm font-semibold text-white transition hover:text-bank-goldSoft"
                >
                  {group.label}
                </a>

                <ul className="mt-4 space-y-2.5">
                  {group.links.slice(0, 7).map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm leading-6 text-white/55 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-goldSoft">
                Institutional Information
              </p>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Important legal, privacy, accessibility, security, regulatory, and disclosure
                information for customers and visitors.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {institutionalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <p className="text-xs leading-6 text-white/40">
              © {new Date().getFullYear()} {BANK_NAME}. All rights reserved. This website is a
              frontend prototype for a premium U.S. banking experience. Product availability,
              account opening, lending, investments, advisory services, digital assets, regulatory
              status, deposit insurance, fees, terms, and disclosures require legal, compliance,
              operational, and regulatory approval before real-world use.
            </p>

            <p className="text-xs leading-6 text-white/40 lg:text-right">
              Investments involve risk. Digital assets are highly speculative and may lose value.
              Credit products are subject to approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
