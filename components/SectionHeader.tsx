type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, description, align = "left", light = false }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`section-eyebrow ${light ? "text-bank-goldSoft" : "text-bank-gold"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl ${light ? "text-white" : "text-ink-950"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-8 ${light ? "text-white/72" : "text-bank-steel"}`}>{description}</p>
      )}
    </div>
  );
}
