import { routeForLabel } from "@/lib/routes";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProductCard({ title, description, icon: Icon }: ProductCardProps) {
  return (
    <a href={routeForLabel(title)} className="group block border border-bank-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-bank-blue hover:shadow-card">
      <div className="flex items-start justify-between gap-5">
        <span className="grid h-12 w-12 place-items-center bg-bank-mist text-bank-blue transition group-hover:bg-ink-950 group-hover:text-white">
          <Icon size={22} />
        </span>
        <ArrowUpRight className="text-bank-steel transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bank-blue" size={18} />
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-ink-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-bank-steel">{description}</p>
    </a>
  );
}
