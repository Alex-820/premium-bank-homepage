import type { BankPage } from "./pageContent";

export const utilityBankPages: BankPage[] = [
  {
    slug: "search",
    category: "Digital Banking",
    title: "Search",
    seoTitle: "Search Banking Services | Aster Bank",
    seoDescription: "Search Aster Bank services, support resources, security information, disclosures, and banking product pages.",
    eyebrow: "Search",
    headline: "Find banking services, support resources, and important information.",
    description: "Use search to locate personal banking, business banking, wealth, investments, loans, credit cards, digital banking, support, security, and disclosure resources across Aster Bank.",
    primaryCta: "Contact Support",
    secondaryCta: "Visit Help Center",
    trustNote: "Search results should direct customers only to verified bank pages and approved service resources.",
    sections: [
      {
        title: "Search across banking resources",
        description: "A production search experience should help customers find relevant banking pages while protecting sensitive information.",
        items: [
          { title: "Products and services", description: "Find checking, savings, lending, card, wealth, investment, and business banking pages." },
          { title: "Support resources", description: "Locate help center articles, contact options, fraud reporting, and appointment resources." },
          { title: "Disclosures and security", description: "Find regulatory information, privacy, terms, security, and product disclosure pages." }
        ]
      }
    ],
    benefits: [
      { title: "Faster navigation", description: "Help customers reach the right resource without guessing where it lives." },
      { title: "Verified results", description: "Search should prioritize official bank pages and approved content." },
      { title: "Support routing", description: "Direct customers to help, contact, or fraud reporting pages when needed." }
    ],
    eligibility: {
      title: "Search implementation requirements",
      description: "A production search system should use approved indexed content, safe result ranking, and privacy-conscious analytics.",
      items: ["Approved content index", "No exposure of private account data", "Security review", "Analytics and privacy review"]
    },
    faqs: [
      { question: "Can search show account data?", answer: "No. Public website search should not expose private customer account information." },
      { question: "Can search results include disclosures?", answer: "Yes. Approved disclosure and regulatory pages should be easy to find." }
    ],
    finalCta: {
      headline: "Need help finding something?",
      description: "Use support resources for account questions, fraud concerns, appointments, and product information.",
      primaryCta: "Contact Support",
      secondaryCta: "Visit Help Center"
    },
    disclosure: "Search content is informational. Production search functionality requires security, privacy, compliance, and content governance review."
  },
  {
    slug: "enroll",
    category: "Digital Banking",
    title: "Enroll in Online Banking",
    seoTitle: "Enroll in Online Banking | Aster Bank",
    seoDescription: "Enroll in secure online banking for eligible accounts, digital access, alerts, transfers, bill pay, and account management.",
    eyebrow: "Online Banking Enrollment",
    headline: "Enroll for secure digital access to eligible accounts.",
    description: "Aster Bank online banking enrollment is designed to verify customer identity, establish secure credentials, configure security settings, and provide digital access to eligible account services.",
    primaryCta: "Enroll in Online Banking",
    secondaryCta: "Learn About Security",
    trustNote: "Enrollment requires eligible accounts, identity verification, secure credentials, and acceptance of digital banking terms.",
    sections: [
      {
        title: "Secure enrollment workflow",
        description: "Online banking enrollment should protect customer information while setting up access to digital account services.",
        items: [
          { title: "Identity verification", description: "Confirm customer information before creating digital banking access." },
          { title: "Credential setup", description: "Create secure username, password, and verification settings." },
          { title: "Digital services", description: "Access eligible balances, statements, transfers, bill pay, alerts, and support tools." }
        ]
      }
    ],
    benefits: [
      { title: "Secure access", description: "Access eligible accounts through authenticated digital channels." },
      { title: "Account visibility", description: "Review balances, transactions, statements, and alerts." },
      { title: "Service convenience", description: "Manage common banking needs without visiting a branch." }
    ],
    eligibility: {
      title: "Enrollment requirements",
      description: "Digital banking enrollment generally requires an eligible account and verified customer profile.",
      items: ["Eligible Aster Bank account", "Verified customer information", "Secure contact method", "Digital banking agreement acceptance"]
    },
    faqs: [
      { question: "Can anyone enroll?", answer: "Enrollment requires an eligible account or approved customer profile." },
      { question: "Why is verification required?", answer: "Verification helps protect customers from unauthorized digital account access." }
    ],
    finalCta: {
      headline: "Start secure online banking enrollment.",
      description: "Set up protected digital access for eligible account services.",
      primaryCta: "Enroll in Online Banking",
      secondaryCta: "Visit Security Center"
    },
    disclosure: "Online banking enrollment is subject to eligibility, verification, service availability, security review, and digital banking agreements."
  },
  {
    slug: "forgot-password",
    category: "Secure Access",
    title: "Recover Online Banking Access",
    seoTitle: "Recover Online Banking Access | Aster Bank",
    seoDescription: "Recover online banking access through identity verification, secure reset workflows, and account protection controls.",
    eyebrow: "Account Recovery",
    headline: "Recover access through a secure verification process.",
    description: "Aster Bank account recovery is designed to help eligible customers reset online banking credentials through identity verification, security checks, and protected reset workflows.",
    primaryCta: "Recover Access",
    secondaryCta: "Contact Support",
    trustNote: "Never share passwords or one-time verification codes with anyone who contacts you unexpectedly.",
    sections: [
      {
        title: "Protected account recovery",
        description: "Credential recovery should balance customer access with strong protection against unauthorized account takeover.",
        items: [
          { title: "Identity verification", description: "Confirm customer identity before allowing credential changes." },
          { title: "Secure reset", description: "Reset credentials through approved digital banking workflows." },
          { title: "Account protection", description: "Use step-up verification, lockout controls, and monitoring where risk signals appear." }
        ]
      }
    ],
    benefits: [
      { title: "Safer recovery", description: "Protect accounts while helping customers regain access." },
      { title: "Fraud awareness", description: "Reduce exposure to impersonation and credential theft." },
      { title: "Support escalation", description: "Route complex cases to verified support channels." }
    ],
    eligibility: {
      title: "Recovery requirements",
      description: "Account recovery may require an enrolled profile, verified contact method, identity checks, and additional review.",
      items: ["Enrolled online banking profile", "Verified identity", "Secure contact method", "Additional review where required"]
    },
    faqs: [
      { question: "Can support ask for my password?", answer: "No. Do not share your password or one-time code with anyone." },
      { question: "Why might recovery require extra review?", answer: "Extra review may be required for device changes, unusual activity, or failed verification attempts." }
    ],
    finalCta: {
      headline: "Recover access through verified channels.",
      description: "Use secure recovery tools or contact support for help with online banking access.",
      primaryCta: "Recover Access",
      secondaryCta: "Contact Support"
    },
    disclosure: "Account recovery requires backend authentication, secure reset workflows, rate limiting, audit logging, and fraud controls before production use."
  },
  {
    slug: "insights",
    category: "Insights",
    title: "Insights and Education",
    seoTitle: "Financial Insights and Education | Aster Bank",
    seoDescription: "Financial insights, market commentary, security education, business resources, and wealth planning articles from Aster Bank.",
    eyebrow: "Insights",
    headline: "Financial education and insights for more informed decisions.",
    description: "Aster Bank insights are designed to provide market education, financial planning perspectives, business resources, security updates, and banking guidance in a clear, compliance-aware format.",
    primaryCta: "Explore Insights",
    secondaryCta: "Visit Security Center",
    trustNote: "Insights are educational and should not be treated as individualized financial, investment, legal, or tax advice.",
    sections: [
      {
        title: "Education across financial topics",
        description: "Insights should support informed decisions without overpromising outcomes or replacing professional advice.",
        items: [
          { title: "Market insights", description: "Educational commentary on markets, volatility, portfolio considerations, and economic themes." },
          { title: "Wealth planning", description: "Planning perspectives on retirement, estate considerations, liquidity, and family wealth." },
          { title: "Security updates", description: "Fraud awareness and account protection guidance for digital banking customers." }
        ]
      }
    ],
    benefits: [
      { title: "Better financial understanding", description: "Learn concepts that support clearer financial decision-making." },
      { title: "Risk awareness", description: "Understand risks, limitations, and tradeoffs before acting." },
      { title: "Practical resources", description: "Access education for personal, business, wealth, investment, and security topics." }
    ],
    eligibility: {
      title: "Content governance",
      description: "Published insights should be reviewed for accuracy, balance, compliance, and suitability of disclaimers.",
      items: ["Editorial review", "Compliance review", "Risk disclosure review", "Source and date control"]
    },
    faqs: [
      { question: "Are insights personalized advice?", answer: "No. Insights are general education and not individualized financial, investment, legal, or tax advice." },
      { question: "Can market commentary guarantee outcomes?", answer: "No. Market commentary is educational and cannot guarantee investment results." }
    ],
    finalCta: {
      headline: "Use education to support better financial conversations.",
      description: "Explore insights across banking, business, wealth, investments, security, and planning.",
      primaryCta: "Explore Insights",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: "Insights are informational only and do not constitute financial, investment, legal, tax, accounting, or fiduciary advice. Investment products involve risk."
  }
];
