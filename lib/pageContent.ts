export type BankPageSectionItem = {
  title: string;
  description: string;
};

export type BankPageSection = {
  title: string;
  description: string;
  items: BankPageSectionItem[];
};

export type BankPage = {
  slug: string;
  category: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  trustNote: string;
  sections: BankPageSection[];
  benefits: BankPageSectionItem[];
  eligibility: {
    title: string;
    description: string;
    items: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  finalCta: {
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  disclosure: string;
};

export const bankPages: BankPage[] = [
  {
    slug: "personal",
    category: "Personal Banking",
    title: "Personal Banking",
    seoTitle: "Personal Banking Services | Aster Bank",
    seoDescription:
      "Explore personal banking services designed for secure everyday access, checking, savings, cards, lending, and digital banking support.",
    eyebrow: "Personal Banking",
    headline: "Banking designed around everyday financial confidence.",
    description:
      "Aster Bank personal banking is structured to support secure deposits, payments, savings goals, borrowing needs, and digital access through a disciplined, service-led banking experience.",
    primaryCta: "Open an Account",
    secondaryCta: "Explore Digital Banking",
    trustNote:
      "Account opening, product availability, and services are subject to eligibility, verification, applicable disclosures, and approval.",
    sections: [
      {
        title: "Everyday banking with institutional discipline",
        description:
          "Manage core financial needs through banking products built for clarity, access, and account protection.",
        items: [
          {
            title: "Checking and spending",
            description:
              "Access checking options designed for deposits, purchases, transfers, debit card use, and account visibility."
          },
          {
            title: "Savings and planning",
            description:
              "Support short-term reserves and longer-term goals with savings tools, balance visibility, and digital access."
          },
          {
            title: "Lending and credit access",
            description:
              "Explore mortgage, auto, personal credit, and card options subject to application review and approval."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Secure account access",
        description:
          "View balances, activity, alerts, and account services through online and mobile banking."
      },
      {
        title: "Support when it matters",
        description:
          "Access service resources for account help, card support, fraud reporting, and appointment scheduling."
      },
      {
        title: "Designed for financial organization",
        description:
          "Bring deposits, payments, cards, savings, and lending into one structured banking relationship."
      }
    ],
    eligibility: {
      title: "Account eligibility",
      description:
        "Personal banking products may require identity verification, address information, tax certification, funding review, and acceptance of account terms.",
      items: [
        "Valid identification and customer verification",
        "U.S. address and contact information",
        "Product-specific disclosures and agreements",
        "Approval based on applicable bank policies"
      ]
    },
    faqs: [
      {
        question: "Can I open a personal account online?",
        answer:
          "The account opening flow is designed for digital onboarding, subject to identity verification, eligibility, disclosures, and approval."
      },
      {
        question: "Are all products available to every customer?",
        answer:
          "No. Product availability may depend on eligibility, location, verification status, account history, and applicable terms."
      }
    ],
    finalCta: {
      headline: "Begin with a banking relationship built for clarity.",
      description:
        "Explore personal banking products and digital tools designed to support secure everyday financial management.",
      primaryCta: "Open an Account",
      secondaryCta: "Contact Support"
    },
    disclosure:
      "This page is for informational purposes only. Products, services, rates, fees, and availability are subject to change, eligibility, approval, and applicable agreements. Deposit insurance language requires legal and regulatory review before publication."
  },
  {
    slug: "business",
    category: "Business Banking",
    title: "Business Banking",
    seoTitle: "Business Banking Services | Aster Bank",
    seoDescription:
      "Business banking services for operating accounts, treasury management, merchant services, lending, payroll support, and commercial banking.",
    eyebrow: "Business Banking",
    headline: "Commercial banking support for companies that need control, visibility, and service.",
    description:
      "Aster Bank business banking is designed to support operating accounts, cash flow visibility, payments, treasury services, merchant needs, lending, and relationship-based financial management.",
    primaryCta: "Explore Business Banking",
    secondaryCta: "Schedule a Consultation",
    trustNote:
      "Business products and services are subject to verification, underwriting, treasury review, documentation, and approval.",
    sections: [
      {
        title: "Banking for operating businesses",
        description:
          "Support day-to-day operations and long-term business needs with structured banking services.",
        items: [
          {
            title: "Business checking",
            description:
              "Manage deposits, payments, withdrawals, and operating cash through business account structures."
          },
          {
            title: "Treasury management",
            description:
              "Improve visibility across cash positions, payables, receivables, liquidity, and risk controls."
          },
          {
            title: "Business lending",
            description:
              "Explore working capital, equipment, expansion, and commercial lending options subject to review."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Cash flow visibility",
        description:
          "Monitor balances, transactions, payment activity, and account movement across business relationships."
      },
      {
        title: "Relationship-based support",
        description:
          "Access business banking guidance for operating accounts, treasury needs, and growth planning."
      },
      {
        title: "Controls for business activity",
        description:
          "Use account permissions, alerts, card controls, and service workflows to support internal oversight."
      }
    ],
    eligibility: {
      title: "Business requirements",
      description:
        "Business banking services generally require business verification, ownership information, authorized signer review, and product-specific documentation.",
      items: [
        "Business formation or registration information",
        "EIN or tax identification placeholder",
        "Authorized signer information",
        "Beneficial ownership information where required",
        "Product-specific review and approval"
      ]
    },
    faqs: [
      {
        question: "Can a business open accounts online?",
        answer:
          "Digital onboarding can support initial business information collection, but business verification and documentation review may be required."
      },
      {
        question: "Are treasury services automatically available?",
        answer:
          "No. Treasury services are subject to eligibility, risk review, documentation, service agreements, and approval."
      }
    ],
    finalCta: {
      headline: "Build a banking structure around your business operations.",
      description:
        "Explore business banking services designed for cash flow, payments, lending, and relationship support.",
      primaryCta: "Explore Business Solutions",
      secondaryCta: "Contact Business Banking"
    },
    disclosure:
      "Business banking products and services are subject to eligibility, documentation, review, applicable agreements, fees, and approval. Lending and treasury services require additional review."
  },
  {
    slug: "wealth",
    category: "Wealth",
    title: "Wealth Management",
    seoTitle: "Wealth Management and Private Banking | Aster Bank",
    seoDescription:
      "Private banking, advisory support, portfolio management, retirement planning, trust and estate services, and tax-aware wealth strategies.",
    eyebrow: "Wealth Management",
    headline: "Advisory-led wealth services for complex financial lives.",
    description:
      "Aster Bank wealth services are structured for clients seeking coordinated planning, private banking, investment guidance, family wealth support, and long-term financial strategy.",
    primaryCta: "Request Wealth Consultation",
    secondaryCta: "Explore Private Banking",
    trustNote:
      "Wealth and advisory services are subject to client eligibility, suitability review, disclosures, and applicable advisory agreements.",
    sections: [
      {
        title: "Planning beyond everyday banking",
        description:
          "Coordinate banking, investments, liquidity, retirement, estate considerations, and family objectives through an advisory-led relationship.",
        items: [
          {
            title: "Private banking",
            description:
              "Access relationship-based banking support for liquidity, credit, deposits, and complex financial needs."
          },
          {
            title: "Portfolio management",
            description:
              "Develop investment strategies aligned with objectives, risk tolerance, time horizon, and liquidity needs."
          },
          {
            title: "Trust and estate planning support",
            description:
              "Coordinate legacy, family wealth, and estate-related considerations with qualified professionals."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Tailored advisory support",
        description:
          "Work with professionals who can help organize financial priorities and long-term planning needs."
      },
      {
        title: "Integrated banking and wealth view",
        description:
          "Bring deposits, credit, investment planning, and advisory conversations into one relationship."
      },
      {
        title: "Long-term planning discipline",
        description:
          "Focus on objectives, risk management, liquidity, tax awareness, and generational considerations."
      }
    ],
    eligibility: {
      title: "Client eligibility",
      description:
        "Private banking and wealth services may be limited to eligible clients and may require asset, relationship, suitability, or documentation review.",
      items: [
        "Client profile and financial objective review",
        "Risk tolerance and time horizon assessment",
        "Applicable advisory disclosures",
        "Service agreement and eligibility review"
      ]
    },
    faqs: [
      {
        question: "Does wealth management guarantee investment results?",
        answer:
          "No. Investment and advisory services involve risk, including possible loss of principal. No strategy can guarantee performance."
      },
      {
        question: "Can wealth services include banking and lending?",
        answer:
          "Eligible clients may access private banking and credit services, subject to review, approval, and applicable terms."
      }
    ],
    finalCta: {
      headline: "Coordinate wealth decisions with a disciplined advisory relationship.",
      description:
        "Explore private banking and wealth planning services designed for long-term financial complexity.",
      primaryCta: "Request Consultation",
      secondaryCta: "Explore Wealth Services"
    },
    disclosure:
      "Investment and advisory services involve risk, including possible loss of principal. Trust, estate, and tax-related content is informational and should be reviewed with qualified legal and tax professionals."
  },
  {
    slug: "investments",
    category: "Investments",
    title: "Investments",
    seoTitle: "Investment Services and Accounts | Aster Bank",
    seoDescription:
      "Explore investment accounts, stocks and ETFs, bonds, Treasury bills, retirement accounts, advisory support, and risk-aware investment planning.",
    eyebrow: "Investments",
    headline: "Investment access with planning discipline and risk awareness.",
    description:
      "Aster Bank investment services are designed to support market access, long-term planning, advisory guidance, retirement goals, and informed investment decisions.",
    primaryCta: "Explore Investment Accounts",
    secondaryCta: "Review Risk Information",
    trustNote:
      "Investment products are not deposits, may lose value, and are subject to eligibility, suitability, disclosures, and market risk.",
    sections: [
      {
        title: "Investment services for different objectives",
        description:
          "Access investment account structures and planning support designed around objectives, risk tolerance, and time horizon.",
        items: [
          {
            title: "Investment accounts",
            description:
              "Use taxable or goal-based account structures to support long-term investment participation."
          },
          {
            title: "Stocks, ETFs, and fixed income",
            description:
              "Explore diversified market exposure and income-oriented securities through appropriate investment channels."
          },
          {
            title: "Advisory support",
            description:
              "Receive guidance from digital or human advisory models based on eligibility and suitability."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Risk-aware investing",
        description:
          "Understand investment choices through education, disclosures, and planning support."
      },
      {
        title: "Retirement planning alignment",
        description:
          "Coordinate investment decisions with retirement goals, time horizon, and liquidity needs."
      },
      {
        title: "Access to advisory models",
        description:
          "Explore self-directed, digital advisory, or advisor-supported relationships where available."
      }
    ],
    eligibility: {
      title: "Investment account requirements",
      description:
        "Investment accounts require customer verification, investment profile information, disclosures, and applicable account agreements.",
      items: [
        "Identity and tax certification",
        "Investment objective and risk profile",
        "Account agreement acceptance",
        "Suitability and eligibility review where required"
      ]
    },
    faqs: [
      {
        question: "Are investments guaranteed?",
        answer:
          "No. Investment products involve risk, including possible loss of principal, and are not guaranteed by the bank."
      },
      {
        question: "Can I receive advice?",
        answer:
          "Advisory services may be available depending on eligibility, account type, suitability, and applicable agreements."
      }
    ],
    finalCta: {
      headline: "Invest with a clear understanding of risk and objectives.",
      description:
        "Explore investment services designed to support informed decisions and long-term planning.",
      primaryCta: "Explore Investments",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure:
      "Investment products are not bank deposits, are not guaranteed by Aster Bank, may lose value, and may not be insured by any government agency. Brokerage, custody, advisory, and securities services require licensed provider review before production use."
  },
  {
    slug: "digital-assets",
    category: "Investments",
    title: "Digital Assets",
    seoTitle: "Digital Assets and Crypto Investment Risk Information | Aster Bank",
    seoDescription:
      "Review institutional digital asset eligibility, risk disclosures, suitability considerations, custody review, and compliance requirements.",
    eyebrow: "High-Risk Investment Category",
    headline: "Digital asset access requires elevated risk review and compliance oversight.",
    description:
      "Digital assets are separated from traditional banking and investment services because they are highly speculative, volatile, and subject to legal, custody, regulatory, and suitability considerations.",
    primaryCta: "Review Risk Disclosures",
    secondaryCta: "Check Eligibility",
    trustNote:
      "Digital assets are not bank deposits, are not guaranteed by Aster Bank, may lose value, and may not be FDIC-insured or protected by any government agency.",
    sections: [
      {
        title: "Institutional risk-controlled access",
        description:
          "Digital asset interest is reviewed through a controlled process that emphasizes eligibility, risk understanding, disclosures, custody review, and compliance approval.",
        items: [
          {
            title: "Eligibility review",
            description:
              "Access may be limited to eligible clients after profile review, suitability assessment, and required disclosures."
          },
          {
            title: "Custody and compliance review",
            description:
              "Any digital asset service would require approved custody, legal, regulatory, and compliance infrastructure."
          },
          {
            title: "No promotional trading claims",
            description:
              "Digital asset access should never be presented as guaranteed, low-risk, or suitable for all clients."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Risk-first education",
        description:
          "Understand volatility, custody risk, legal uncertainty, and potential loss before any participation."
      },
      {
        title: "Suitability discipline",
        description:
          "Review whether digital asset exposure aligns with risk tolerance, objectives, and eligibility."
      },
      {
        title: "Compliance-led access",
        description:
          "Availability depends on legal, regulatory, custody, and internal compliance approval."
      }
    ],
    eligibility: {
      title: "Digital asset eligibility",
      description:
        "Digital asset access may be restricted and requires disclosure acceptance, suitability review, compliance approval, and legal availability.",
      items: [
        "Risk disclosure acceptance",
        "Suitability questionnaire",
        "Eligible client status",
        "Compliance review",
        "Approved custody and legal framework"
      ]
    },
    faqs: [
      {
        question: "Are digital assets bank deposits?",
        answer:
          "No. Digital assets are not bank deposits and are not guaranteed by Aster Bank."
      },
      {
        question: "Can digital assets lose value?",
        answer:
          "Yes. Digital assets are highly speculative and may lose substantial value, including the full amount of exposure."
      },
      {
        question: "Are digital assets FDIC-insured?",
        answer:
          "Digital assets may not be FDIC-insured or protected by any government agency. Any insurance language requires legal and regulatory review."
      }
    ],
    finalCta: {
      headline: "Review risk before considering digital assets.",
      description:
        "Digital asset services require eligibility, risk disclosure, suitability review, custody review, and compliance approval.",
      primaryCta: "Review Disclosures",
      secondaryCta: "Contact an Advisor"
    },
    disclosure:
      "Digital assets are highly speculative, may lose value, are not bank deposits, are not guaranteed by Aster Bank, and may not be FDIC-insured or protected by any government agency. Access may be limited to eligible clients and depends on legal, regulatory, custody, and compliance review."
  },
  {
    slug: "loans",
    category: "Loans",
    title: "Loans",
    seoTitle: "Loan Products and Financing Options | Aster Bank",
    seoDescription:
      "Explore mortgage, auto, personal, business, and commercial financing options subject to application review, eligibility, and approval.",
    eyebrow: "Loans",
    headline: "Financing options designed around responsible lending.",
    description:
      "Aster Bank lending services are designed to support qualified borrowers with structured application review, documentation, repayment terms, and responsible credit evaluation.",
    primaryCta: "Explore Loan Options",
    secondaryCta: "Prepare to Apply",
    trustNote:
      "Loan products are subject to application, credit review, documentation, underwriting, collateral review where applicable, and approval.",
    sections: [
      {
        title: "Borrowing for personal and business needs",
        description:
          "Explore financing options with clear requirements, review processes, and responsible repayment considerations.",
        items: [
          {
            title: "Mortgage lending",
            description:
              "Support home financing needs through application review, income documentation, property evaluation, and underwriting."
          },
          {
            title: "Auto and personal loans",
            description:
              "Finance eligible vehicles or personal needs subject to credit, income, and repayment review."
          },
          {
            title: "Business and commercial lending",
            description:
              "Support working capital, equipment, expansion, and commercial financing subject to business review."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Clear application process",
        description:
          "Understand required documentation, review steps, decision timing, and loan terms."
      },
      {
        title: "Responsible credit review",
        description:
          "Applications are evaluated based on relevant financial, credit, collateral, and policy factors."
      },
      {
        title: "Structured repayment visibility",
        description:
          "Review payment expectations, terms, fees, and servicing information before accepting a loan."
      }
    ],
    eligibility: {
      title: "Loan eligibility",
      description:
        "Loan eligibility depends on credit profile, income, documentation, collateral where applicable, product requirements, and underwriting review.",
      items: [
        "Completed loan application",
        "Identity and income verification",
        "Credit and underwriting review",
        "Collateral review where applicable",
        "Final approval and loan agreement"
      ]
    },
    faqs: [
      {
        question: "Does submitting an application guarantee approval?",
        answer:
          "No. Loan approval is not guaranteed and depends on eligibility, documentation, underwriting, and applicable lending policies."
      },
      {
        question: "Are rates and terms fixed on this page?",
        answer:
          "No. Rates, terms, fees, and availability are placeholders until approved disclosures and pricing are provided."
      }
    ],
    finalCta: {
      headline: "Review financing options with a responsible lending process.",
      description:
        "Explore lending products and prepare the information needed for a complete application.",
      primaryCta: "Explore Loans",
      secondaryCta: "Contact Lending Support"
    },
    disclosure:
      "Loan products are subject to credit approval, underwriting, collateral review where applicable, documentation, fees, and final agreements. This page does not represent a credit decision or offer of guaranteed approval."
  },
  {
    slug: "credit-cards",
    category: "Credit Cards",
    title: "Credit Cards",
    seoTitle: "Personal and Business Credit Cards | Aster Bank",
    seoDescription:
      "Explore personal, business, premium, and rewards credit card options with security controls, account alerts, and responsible credit use.",
    eyebrow: "Credit Cards",
    headline: "Credit card options built for purchasing power, controls, and visibility.",
    description:
      "Aster Bank credit card services are designed to support everyday spending, business expenses, premium benefits, security controls, and account management.",
    primaryCta: "Explore Credit Cards",
    secondaryCta: "Review Card Terms",
    trustNote:
      "Credit cards are subject to credit approval, account terms, fees, APRs, rewards rules, and applicable disclosures.",
    sections: [
      {
        title: "Cards for personal and business needs",
        description:
          "Choose card features based on spending patterns, travel needs, business expenses, rewards preferences, and account controls.",
        items: [
          {
            title: "Personal cards",
            description:
              "Support everyday purchases with account visibility, alerts, payments, and card controls."
          },
          {
            title: "Business cards",
            description:
              "Manage business spending, employee cards, expense tracking, and purchasing controls."
          },
          {
            title: "Premium and rewards cards",
            description:
              "Access benefits and rewards structures subject to card terms, eligibility, and program rules."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Spending visibility",
        description:
          "Track card activity, payments, balances, and alerts through secure digital banking."
      },
      {
        title: "Security controls",
        description:
          "Use alerts, card lock controls, fraud monitoring, and account support to help protect card activity."
      },
      {
        title: "Responsible credit management",
        description:
          "Review APRs, fees, payment obligations, and credit terms before applying."
      }
    ],
    eligibility: {
      title: "Card eligibility",
      description:
        "Credit card eligibility depends on credit review, income or business information, identity verification, and applicable terms.",
      items: [
        "Completed application",
        "Identity verification",
        "Credit review",
        "Income or business information where required",
        "Acceptance of cardmember agreement"
      ]
    },
    faqs: [
      {
        question: "Is approval guaranteed?",
        answer:
          "No. Credit card approval is subject to application review, credit evaluation, eligibility, and applicable terms."
      },
      {
        question: "Where are APRs and fees shown?",
        answer:
          "APRs, fees, rewards rules, and terms should be displayed in approved pricing and disclosure documents before application submission."
      }
    ],
    finalCta: {
      headline: "Choose a card with clear terms and account controls.",
      description:
        "Explore credit card options designed for visibility, security, purchasing needs, and responsible use.",
      primaryCta: "Compare Cards",
      secondaryCta: "Review Terms"
    },
    disclosure:
      "Credit cards are subject to credit approval. APRs, fees, rewards, benefits, and terms are subject to applicable cardmember agreements and disclosures."
  },
  {
    slug: "digital-banking",
    category: "Digital Banking",
    title: "Digital Banking",
    seoTitle: "Online and Mobile Banking | Aster Bank",
    seoDescription:
      "Secure digital banking services for mobile access, online banking, transfers, bill pay, card controls, alerts, and account management.",
    eyebrow: "Digital Banking",
    headline: "Secure digital banking for account access, payments, and control.",
    description:
      "Aster Bank digital banking is designed to give clients secure access to accounts, transfers, bill pay, card controls, alerts, and service workflows across devices.",
    primaryCta: "Enroll in Online Banking",
    secondaryCta: "Explore Mobile Banking",
    trustNote:
      "Digital banking features require enrollment, authentication, account eligibility, and acceptance of electronic service terms.",
    sections: [
      {
        title: "Banking access across digital channels",
        description:
          "Manage eligible accounts and services through secure online and mobile banking experiences.",
        items: [
          {
            title: "Online banking",
            description:
              "View account balances, activity, statements, transfers, bill pay, alerts, and profile settings."
          },
          {
            title: "Mobile banking",
            description:
              "Access eligible banking features from supported mobile devices with secure authentication."
          },
          {
            title: "Controls and alerts",
            description:
              "Set alerts, manage card controls, monitor activity, and review account security events."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "24/7 account visibility",
        description:
          "Access eligible account information when you need it through secure digital channels."
      },
      {
        title: "Payment and transfer tools",
        description:
          "Move money, manage payees, schedule payments, and review activity subject to limits and eligibility."
      },
      {
        title: "Security-centered design",
        description:
          "Use authentication, alerts, encrypted sessions, and monitoring tools to support account protection."
      }
    ],
    eligibility: {
      title: "Digital banking enrollment",
      description:
        "Digital banking access requires eligible accounts, identity verification, user credentials, security settings, and acceptance of electronic terms.",
      items: [
        "Eligible Aster Bank account",
        "Verified customer profile",
        "Secure login credentials",
        "Multifactor authentication where required",
        "Electronic communications consent"
      ]
    },
    faqs: [
      {
        question: "Can I transfer money digitally?",
        answer:
          "Eligible transfers may be available subject to account status, limits, verification, fraud review, and service terms."
      },
      {
        question: "Are digital banking sessions protected?",
        answer:
          "Digital banking should use secure authentication, encrypted sessions, monitoring, alerts, and account protection controls."
      }
    ],
    finalCta: {
      headline: "Manage banking activity with secure digital access.",
      description:
        "Enroll in digital banking to access eligible accounts, payments, alerts, and account services.",
      primaryCta: "Enroll Now",
      secondaryCta: "Learn About Security"
    },
    disclosure:
      "Digital banking features are subject to enrollment, account eligibility, service availability, transaction limits, security review, and applicable digital banking agreements."
  },
  {
    slug: "support",
    category: "Support",
    title: "Support",
    seoTitle: "Customer Support and Banking Help | Aster Bank",
    seoDescription:
      "Access customer support, help center resources, contact options, appointments, fraud reporting, locations, and secure service channels.",
    eyebrow: "Support",
    headline: "Support for account questions, service needs, and security concerns.",
    description:
      "Aster Bank support resources are designed to help clients find answers, contact service teams, schedule appointments, locate branches, and report suspicious activity.",
    primaryCta: "Contact Support",
    secondaryCta: "Visit Help Center",
    trustNote:
      "For suspected fraud or unauthorized activity, contact support through verified bank channels and avoid sharing sensitive credentials.",
    sections: [
      {
        title: "Service resources",
        description:
          "Find the right support path for account help, online banking, cards, lending, business banking, wealth, and fraud concerns.",
        items: [
          {
            title: "Help center",
            description:
              "Access guidance for common banking questions, digital banking use, cards, payments, and account services."
          },
          {
            title: "Contact and appointments",
            description:
              "Reach service teams or schedule a conversation for account, business, lending, or wealth needs."
          },
          {
            title: "Fraud reporting",
            description:
              "Report suspicious activity, unauthorized transactions, scams, or security concerns through protected channels."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Clear service paths",
        description:
          "Find the right destination for personal, business, wealth, lending, card, and security support."
      },
      {
        title: "Security-aware assistance",
        description:
          "Use verified support channels and fraud reporting workflows for sensitive account concerns."
      },
      {
        title: "Appointment options",
        description:
          "Schedule time for more complex banking conversations where appointment services are available."
      }
    ],
    eligibility: {
      title: "Support access",
      description:
        "Some support requests may require identity verification, account verification, secure messaging, or documentation.",
      items: [
        "Verified contact information",
        "Account or customer reference where applicable",
        "Secure identity confirmation for sensitive requests",
        "Documentation for specialized service needs"
      ]
    },
    faqs: [
      {
        question: "How should I report suspected fraud?",
        answer:
          "Use the official report fraud channel or contact support through verified bank contact information. Do not share passwords or one-time codes."
      },
      {
        question: "Can support change account settings?",
        answer:
          "Certain account changes may require identity verification, secure authentication, and review before completion."
      }
    ],
    finalCta: {
      headline: "Get the right support for your banking need.",
      description:
        "Use secure service channels for account help, appointments, locations, fraud reports, and digital banking support.",
      primaryCta: "Contact Support",
      secondaryCta: "Report Fraud"
    },
    disclosure:
      "Support availability, response times, service channels, and appointment options may vary. Sensitive account requests require verification."
  },
  {
    slug: "security-center",
    category: "Security",
    title: "Security Center",
    seoTitle: "Security Center and Fraud Protection | Aster Bank",
    seoDescription:
      "Learn about account protection, fraud monitoring, secure authentication, encryption, alerts, scam education, and suspicious activity reporting.",
    eyebrow: "Security Center",
    headline: "Security resources designed to help protect accounts and information.",
    description:
      "The Aster Bank Security Center provides education and resources related to fraud prevention, secure digital banking, identity protection, account alerts, and suspicious activity reporting.",
    primaryCta: "Report Suspicious Activity",
    secondaryCta: "Review Security Tips",
    trustNote:
      "Aster Bank will never ask for your password, full security code, or one-time passcode through unsolicited messages.",
    sections: [
      {
        title: "Account protection resources",
        description:
          "Security education and tools help clients recognize threats, strengthen access controls, and respond to suspicious activity.",
        items: [
          {
            title: "Fraud monitoring",
            description:
              "Account activity may be monitored for patterns associated with unauthorized or suspicious activity."
          },
          {
            title: "Secure authentication",
            description:
              "Digital access should use strong credentials, session controls, multifactor authentication, and device review where available."
          },
          {
            title: "Scam education",
            description:
              "Learn to recognize phishing, impersonation, payment scams, and requests for sensitive credentials."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Fraud awareness",
        description:
          "Understand common scam patterns and warning signs before responding to suspicious requests."
      },
      {
        title: "Account alerts",
        description:
          "Use alerts to monitor activity, security changes, card transactions, and account events."
      },
      {
        title: "Secure reporting",
        description:
          "Report suspicious activity through verified channels so support teams can review the concern."
      }
    ],
    eligibility: {
      title: "Security recommendations",
      description:
        "Customers should maintain updated contact information, use strong credentials, enable available alerts, and report suspicious activity promptly.",
      items: [
        "Use unique passwords",
        "Enable multifactor authentication where available",
        "Keep contact information current",
        "Review account activity regularly",
        "Report suspicious messages and transactions"
      ]
    },
    faqs: [
      {
        question: "What should I do if I suspect fraud?",
        answer:
          "Stop communication with the suspected party, do not share credentials, and report the concern through official support or fraud channels."
      },
      {
        question: "Will the bank ask for my one-time code?",
        answer:
          "No. Do not share passwords, full security codes, or one-time passcodes with anyone who contacts you unexpectedly."
      }
    ],
    finalCta: {
      headline: "Take action if something does not look right.",
      description:
        "Report suspicious activity and review security guidance to help protect your accounts.",
      primaryCta: "Report Fraud",
      secondaryCta: "Contact Support"
    },
    disclosure:
      "Security information is educational and does not eliminate risk. Customers are responsible for safeguarding credentials, monitoring account activity, and reporting suspicious activity promptly."
  },
  {
    slug: "open-account",
    category: "Onboarding",
    title: "Open an Account",
    seoTitle: "Open an Account | Aster Bank",
    seoDescription:
      "Start a secure account opening workflow for personal, business, wealth, or investment services subject to verification and approval.",
    eyebrow: "Account Opening",
    headline: "Start a secure account opening process.",
    description:
      "Aster Bank account opening is designed to collect required information, verify identity, present disclosures, and route applications through appropriate review workflows.",
    primaryCta: "Start Application",
    secondaryCta: "Review Requirements",
    trustNote:
      "Opening an account requires verification, eligibility review, account approval, and acceptance of applicable terms and disclosures.",
    sections: [
      {
        title: "A structured onboarding process",
        description:
          "The account opening experience is designed to support personal, business, wealth, and investment onboarding with appropriate controls.",
        items: [
          {
            title: "Profile information",
            description:
              "Provide basic identity, contact, address, tax, and customer profile details required for review."
          },
          {
            title: "Product selection",
            description:
              "Select the account or service relationship you want to request based on your banking needs."
          },
          {
            title: "Disclosure and review",
            description:
              "Review terms, disclosures, consent language, and any product-specific requirements before submission."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Secure workflow",
        description:
          "Account opening is designed to protect sensitive information and support required verification."
      },
      {
        title: "Product-specific review",
        description:
          "Applications can route differently for deposits, business services, lending, wealth, or investment products."
      },
      {
        title: "Clear next steps",
        description:
          "Customers should receive status updates, required actions, or requests for additional information."
      }
    ],
    eligibility: {
      title: "Information typically required",
      description:
        "Requirements vary by product and customer type, but account opening generally requires identity, contact, tax, and eligibility information.",
      items: [
        "Legal name and contact details",
        "Identity verification information",
        "Address and tax certification placeholder",
        "Business information where applicable",
        "Product disclosures and agreements"
      ]
    },
    faqs: [
      {
        question: "Does starting an application guarantee account approval?",
        answer:
          "No. Applications are subject to verification, eligibility review, applicable policies, and approval."
      },
      {
        question: "Can business accounts be opened the same way?",
        answer:
          "Business accounts typically require additional business, ownership, signer, and documentation review."
      }
    ],
    finalCta: {
      headline: "Begin with a secure application.",
      description:
        "Start the account opening workflow and review product requirements before submitting information.",
      primaryCta: "Start Application",
      secondaryCta: "Contact Support"
    },
    disclosure:
      "Account opening is subject to verification, eligibility, approval, applicable agreements, and required disclosures. This prototype does not represent a final regulated account opening process."
  },
  {
    slug: "login",
    category: "Secure Access",
    title: "Secure Login",
    seoTitle: "Secure Online Banking Login | Aster Bank",
    seoDescription:
      "Secure online banking access prepared for authentication, account lockout, session controls, alerts, and audit logging.",
    eyebrow: "Secure Access",
    headline: "Access online banking through a secure authentication experience.",
    description:
      "The secure login experience is prepared for protected sessions, password verification, login monitoring, account lockout rules, and additional verification where required.",
    primaryCta: "Sign In",
    secondaryCta: "Enroll in Online Banking",
    trustNote:
      "Never share your password or one-time verification code. Use only verified Aster Bank channels to access your account.",
    sections: [
      {
        title: "Security-first access",
        description:
          "Online banking authentication should be built with layered controls to help protect customer accounts.",
        items: [
          {
            title: "Secure credentials",
            description:
              "Passwords should be protected through strong hashing, secure session handling, and safe error responses."
          },
          {
            title: "Login monitoring",
            description:
              "Successful and failed login attempts should be tracked for account protection and audit review."
          },
          {
            title: "Additional verification",
            description:
              "One-time verification or step-up authentication may be required based on risk signals."
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Protected access",
        description:
          "Secure login supports account access while reducing exposure of sensitive authentication details."
      },
      {
        title: "Account lockout controls",
        description:
          "Repeated failed attempts can trigger protective restrictions and review workflows."
      },
      {
        title: "Audit visibility",
        description:
          "Sensitive authentication actions should create logs for security and operational review."
      }
    ],
    eligibility: {
      title: "Login requirements",
      description:
        "Digital access requires an enrolled profile, verified credentials, supported security settings, and account eligibility.",
      items: [
        "Enrolled online banking profile",
        "Valid username and password",
        "Verification method where required",
        "Active or eligible account status"
      ]
    },
    faqs: [
      {
        question: "What if I forget my password?",
        answer:
          "Use the official password recovery flow. Identity verification and additional security steps may be required."
      },
      {
        question: "Why might login require extra verification?",
        answer:
          "Additional verification may be requested because of device changes, risk signals, unusual activity, or security settings."
      }
    ],
    finalCta: {
      headline: "Sign in through secure online banking.",
      description:
        "Access eligible account services through a protected authentication workflow.",
      primaryCta: "Sign In",
      secondaryCta: "Recover Access"
    },
    disclosure:
      "Secure login functionality requires backend authentication, protected cookies or sessions, password hashing, rate limiting, account lockout logic, and audit logging before production use."
  }
];

export function getBankPage(slug: string): BankPage | undefined {
  return bankPages.find((page) => page.slug === slug);
}
