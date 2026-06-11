import {
  BadgeDollarSign,
  Banknote,
  Bell,
  BriefcaseBusiness,
  Building2,
  ChartCandlestick,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  FileText,
  Globe2,
  HandCoins,
  Home,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  PiggyBank,
  ReceiptText,
  Scale,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  University,
  WalletCards
} from "lucide-react";

export const BANK_NAME = "Aster Bank";

export const utilityLinks = [
  "Contact",
  "Help",
  "Locations",
  "Security Center",
  "Language",
  "Accessibility"
];

export const navLinks = [
  "Personal",
  "Business",
  "Wealth",
  "Investments",
  "Loans",
  "Credit Cards",
  "Digital Banking",
  "Support"
];

export const productCategories = [
  {
    title: "Checking",
    description: "Everyday accounts with secure digital access and premium service options.",
    icon: WalletCards
  },
  {
    title: "Savings",
    description: "Savings solutions designed for liquidity, discipline, and long-term goals.",
    icon: PiggyBank
  },
  {
    title: "Credit Cards",
    description: "Cards for purchasing power, travel, cash flow, and account controls.",
    icon: CreditCard
  },
  {
    title: "Home Loans",
    description: "Mortgage support for buying, refinancing, and home equity needs.",
    icon: Home
  },
  {
    title: "Auto Loans",
    description: "Vehicle financing with clear terms and digital account servicing.",
    icon: CircleDollarSign
  },
  {
    title: "Business Banking",
    description: "Accounts, lending, payments, and treasury capabilities for companies.",
    icon: BriefcaseBusiness
  },
  {
    title: "Wealth Management",
    description: "Integrated guidance for private clients, families, and complex portfolios.",
    icon: Landmark
  },
  {
    title: "Investment Accounts",
    description: "Access investment solutions with planning, advisory, and risk education.",
    icon: LineChart
  }
];

export const personalBanking = [
  "Everyday banking",
  "Premium checking",
  "High-yield savings",
  "Credit cards",
  "Mortgages",
  "Auto loans",
  "Digital banking app"
];

export const businessBanking = [
  "Business checking",
  "Treasury management",
  "Merchant services",
  "Business lending",
  "Payroll solutions",
  "Commercial banking",
  "Corporate accounts"
];

export const investmentCategories = [
  { title: "Investment Accounts", icon: Layers3 },
  { title: "Stocks & ETFs", icon: TrendingUp },
  { title: "Bonds & Treasury Bills", icon: BadgeDollarSign },
  { title: "Retirement Accounts", icon: ReceiptText },
  { title: "Robo-Advisor", icon: ChartCandlestick },
  { title: "Human Financial Advisors", icon: University },
  { title: "Portfolio Management", icon: LineChart },
  { title: "Trust & Estate Services", icon: FileText },
  { title: "Tax-Aware Planning", icon: Scale },
  { title: "High-Net-Worth Wealth Management", icon: Building2 },
  { title: "Crypto & Digital Assets", icon: Globe2, highRisk: true }
];

export const trustItems = [
  {
    title: "Advanced fraud monitoring",
    description: "Layered transaction review and suspicious activity detection across digital channels.",
    icon: ShieldCheck
  },
  {
    title: "Encryption and secure sessions",
    description: "Protected online access designed around modern security and privacy expectations.",
    icon: LockKeyhole
  },
  {
    title: "Secure authentication",
    description: "Account access controls, device recognition, and step-up verification when needed.",
    icon: CheckCircle2
  },
  {
    title: "Identity protection",
    description: "Tools and education to help clients identify scams, phishing, and account misuse.",
    icon: Banknote
  },
  {
    title: "Account alerts",
    description: "Configurable notifications for card activity, transfers, balances, and profile changes.",
    icon: Bell
  }
];

export const digitalFeatures = [
  "Mobile banking",
  "Online transfers",
  "Bill pay",
  "Card controls",
  "Real-time alerts",
  "Mobile deposits",
  "24/7 secure account access"
];

export const insights = [
  {
    eyebrow: "Markets",
    title: "Quarterly market perspective for long-term investors",
    description: "Read institutional commentary on rates, asset allocation, and portfolio discipline."
  },
  {
    eyebrow: "Planning",
    title: "Preparing a household balance sheet for major life decisions",
    description: "A practical guide for liquidity, borrowing, retirement, and estate priorities."
  },
  {
    eyebrow: "Business",
    title: "Treasury controls that help growing companies manage cash",
    description: "Explore payment approval workflows, fraud controls, and operating liquidity."
  },
  {
    eyebrow: "Security",
    title: "Recognizing social engineering and account takeover attempts",
    description: "Learn the warning signs and the steps clients can take to protect account access."
  }
];

export const footerGroups = [
  {
    title: "Personal Banking",
    links: ["Checking", "Savings", "Credit Cards", "Home Loans", "Auto Loans", "Digital Banking"]
  },
  {
    title: "Business Banking",
    links: ["Business Checking", "Treasury", "Merchant Services", "Business Lending", "Commercial Banking"]
  },
  {
    title: "Wealth",
    links: ["Private Banking", "Advisory", "Retirement", "Trust Services", "Estate Planning"]
  },
  {
    title: "Investments",
    links: ["Investment Accounts", "Stocks & ETFs", "Bonds", "Managed Portfolios", "Digital Assets"]
  },
  {
    title: "Support",
    links: ["Contact", "Locations", "Help Center", "Security", "Accessibility", "Careers"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Investor Relations", "Regulatory Information", "Disclosures"]
  }
];
