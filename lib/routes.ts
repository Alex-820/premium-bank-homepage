export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const routeMap: Record<string, string> = {
  Personal: "/personal",
  Business: "/business",
  Wealth: "/wealth",
  Investments: "/investments",
  Loans: "/loans",
  "Credit Cards": "/credit-cards",
  "Digital Banking": "/digital-banking",
  Support: "/support",

  Contact: "/contact",
  Help: "/support",
  Locations: "/locations",
  "Security Center": "/security-center",
  Language: "/language",
  Accessibility: "/accessibility",

  Checking: "/checking",
  Savings: "/savings",
  "Home Loans": "/home-loans",
  "Auto Loans": "/auto-loans",
  "Business Banking": "/business",
  "Wealth Management": "/wealth",
  "Investment Accounts": "/investments",
  "Digital Assets": "/digital-assets",
  "Crypto & Digital Assets": "/digital-assets"
};

export function routeForLabel(label: string) {
  return routeMap[label] ?? `/${slugify(label)}`;
}
