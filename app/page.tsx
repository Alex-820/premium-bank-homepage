import { BankingSection } from "@/components/BankingSection";
import { DigitalBanking } from "@/components/DigitalBanking";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { MainNav } from "@/components/MainNav";
import { ProductCategories } from "@/components/ProductCategories";
import { SecurityTrust } from "@/components/SecurityTrust";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { WealthInvestments } from "@/components/WealthInvestments";
import { businessBanking, personalBanking } from "@/lib/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />
      <Hero />
      <ProductCategories />
      <BankingSection
        eyebrow="Personal Banking"
        title="Daily banking with the depth of a full-service institution."
        description="From day-to-day spending to major purchases, the personal banking experience is designed around clarity, security, and durable financial confidence."
        items={personalBanking}
        imagePosition="right"
      />
      <BankingSection
        eyebrow="Business Banking"
        title="Operating accounts, treasury tools, and credit for every stage of growth."
        description="A serious banking platform for businesses that need reliable cash management, merchant services, lending, payroll support, and commercial relationship coverage."
        items={businessBanking}
        tone="dark"
        imagePosition="left"
      />
      <WealthInvestments />
      <SecurityTrust />
      <DigitalBanking />
      <Insights />
      <Footer />
    </main>
  );
}
