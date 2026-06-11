import { utilityLinks } from "@/lib/site";
import { routeForLabel } from "@/lib/routes";

export function TopUtilityBar() {
  return (
    <div className="hidden border-b border-white/10 bg-ink-950 text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs tracking-[0.02em] text-white/78">
        <p>Institutional banking, lending, advisory, and digital services</p>
        <nav aria-label="Utility navigation" className="flex items-center gap-6">
          {utilityLinks.map((link) => (
            <a key={link} href={routeForLabel(link)} className="transition hover:text-white">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
