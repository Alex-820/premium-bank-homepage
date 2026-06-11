import type { BankPage } from "./pageContent";

export const creditCardBankPages: BankPage[] = [
  {
    slug: "credit-cards/personal",
    category: "Credit Cards",
    title: "Personal Credit Cards",
    seoTitle: "Personal Credit Cards | Aster Bank",
    seoDescription: `Personal credit card options designed for everyday purchases, account controls, alerts, digital access, and responsible credit use.`,
    eyebrow: "Personal Credit Cards",
    headline: "Credit cards for everyday spending with clear controls and visibility.",
    description: `Aster Bank personal credit card content is designed to support customers reviewing credit access, purchases, payments, account alerts, card controls, and responsible borrowing considerations.`,
    primaryCta: "Compare Cards",
    secondaryCta: "Review Card Terms",
    trustNote: `Personal credit cards are subject to credit approval, APRs, fees, cardmember agreements, rewards rules, and applicable disclosures.`,
    sections: [
      {
        title: "Credit access for personal spending",
        description: `Personal credit cards can support purchases and financial flexibility when used with clear understanding of terms, payments, and account obligations.`,
        items: [
          {
            title: "Everyday purchases",
            description: `Use an eligible credit line for purchases subject to available credit, account status, and card terms.`
          },
          {
            title: "Payments and statements",
            description: `Review balances, due dates, minimum payments, statements, and transaction activity through digital access.`
          },
          {
            title: "Card controls and alerts",
            description: `Use available account alerts and card controls to help monitor card activity.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Spending visibility",
        description: `Track purchases, payments, balances, and statements through secure account access.`
      },
      {
        title: "Account protection tools",
        description: `Use alerts, fraud monitoring placeholders, and card controls to help protect card activity.`
      },
      {
        title: "Responsible credit support",
        description: `Review APRs, fees, payment obligations, and terms before applying or using credit.`
      }
    ],
    eligibility: {
      title: "Application requirements",
      description: `Personal credit card applications generally require identity verification, income information, credit review, and acceptance of card terms.`,
      items: [
        "Completed credit card application",
        "Identity verification",
        "Income or financial information where required",
        "Credit review",
        "Cardmember agreement acceptance"
      ]
    },
    faqs: [
      {
        question: "Is credit card approval guaranteed?",
        answer: `No. Credit card approval is subject to application review, credit evaluation, eligibility, and applicable lending policies.`
      },
      {
        question: "Where are APRs and fees disclosed?",
        answer: `APRs, fees, penalty terms, rewards rules, and card conditions should be shown in approved disclosures before application submission.`
      }
    ],
    finalCta: {
      headline: "Compare personal cards with clear terms in view.",
      description: `Review card features, account controls, fees, APR placeholders, and responsible credit considerations before applying.`,
      primaryCta: "Compare Cards",
      secondaryCta: "Review Terms"
    },
    disclosure: `Personal credit cards are subject to credit approval. APRs, fees, rewards, benefits, and terms are governed by applicable cardmember agreements and disclosures.`
  },
  {
    slug: "credit-cards/business",
    category: "Credit Cards",
    title: "Business Credit Cards",
    seoTitle: "Business Credit Cards | Aster Bank",
    seoDescription: `Business credit card options for company purchases, employee spending, account controls, expense visibility, and responsible business credit use.`,
    eyebrow: "Business Credit Cards",
    headline: "Business cards designed for purchasing visibility and expense control.",
    description: `Aster Bank business credit card content is structured for companies that need purchasing power, employee card workflows, spending controls, account alerts, and expense visibility.`,
    primaryCta: "Explore Business Cards",
    secondaryCta: "Contact Business Banking",
    trustNote: `Business credit cards are subject to business verification, credit approval, card program terms, fees, APRs where applicable, and disclosures.`,
    sections: [
      {
        title: "Business spending with oversight",
        description: `Business cards can help organize company spending while supporting controls, visibility, and payment management.`,
        items: [
          {
            title: "Company purchases",
            description: `Use eligible business credit for operating purchases subject to card terms and available credit.`
          },
          {
            title: "Employee cards",
            description: `Support authorized employee card access where available, subject to permissions and program rules.`
          },
          {
            title: "Expense visibility",
            description: `Review transactions, statements, spending categories, and account activity through supported tools.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Spending control",
        description: `Use limits, alerts, and internal workflows to help manage company card activity.`
      },
      {
        title: "Operational convenience",
        description: `Support purchases, travel, recurring expenses, and employee spending in a structured way.`
      },
      {
        title: "Business account coordination",
        description: `Connect business cards with business checking, treasury, and commercial banking needs.`
      }
    ],
    eligibility: {
      title: "Business card requirements",
      description: `Business card programs generally require business verification, ownership or signer information, credit review, and acceptance of card program terms.`,
      items: [
        "Business verification",
        "Authorized signer information",
        "Ownership information where required",
        "Credit or financial review",
        "Business card agreement acceptance"
      ]
    },
    faqs: [
      {
        question: "Can employees receive business cards?",
        answer: `Eligible programs may support employee cards subject to authorized user setup, limits, controls, and card program terms.`
      },
      {
        question: "Are business cards automatically approved?",
        answer: `No. Business card approval depends on application review, credit evaluation, business verification, and applicable policies.`
      }
    ],
    finalCta: {
      headline: "Review business card options for controlled company spending.",
      description: `Explore business card features, employee access, account controls, and responsible credit requirements.`,
      primaryCta: "Explore Business Cards",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Business credit cards are subject to credit approval, business verification, fees, APRs where applicable, card program terms, and disclosures.`
  },
  {
    slug: "credit-cards/premium",
    category: "Credit Cards",
    title: "Premium Credit Cards",
    seoTitle: "Premium Credit Cards | Aster Bank",
    seoDescription: `Premium credit card content for eligible customers seeking travel, service, account controls, elevated benefits, and responsible premium credit use.`,
    eyebrow: "Premium Cards",
    headline: "Premium card features with clear eligibility and terms.",
    description: `Aster Bank premium card content is designed for eligible customers seeking enhanced card features, travel or lifestyle benefit placeholders, account controls, alerts, and service support.`,
    primaryCta: "Explore Premium Cards",
    secondaryCta: "Review Card Terms",
    trustNote: `Premium cards are subject to credit approval, eligibility, fees, benefit terms, APRs, cardmember agreements, and applicable disclosures.`,
    sections: [
      {
        title: "Elevated card features for eligible clients",
        description: `Premium credit cards may include enhanced services and benefits, but customers should review fees, terms, benefit limitations, and responsible credit obligations.`,
        items: [
          {
            title: "Travel benefit placeholders",
            description: `Travel-related features may be available subject to program rules, provider terms, and benefit limitations.`
          },
          {
            title: "Premium service access",
            description: `Eligible cardholders may access enhanced service channels or support workflows where available.`
          },
          {
            title: "Security and controls",
            description: `Use card alerts, controls, transaction monitoring, and account visibility to help manage activity.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Enhanced card experience",
        description: `Access premium features subject to eligibility, fees, and program rules.`
      },
      {
        title: "Travel and lifestyle placeholders",
        description: `Review benefit structures carefully before relying on travel, purchase, or service features.`
      },
      {
        title: "Account visibility",
        description: `Monitor balances, payments, transactions, and alerts through digital banking.`
      }
    ],
    eligibility: {
      title: "Premium card eligibility",
      description: `Premium cards may require stronger credit qualification, income review, relationship eligibility, annual fees, and cardmember agreement acceptance.`,
      items: [
        "Completed application",
        "Identity and credit review",
        "Income or financial information where required",
        "Premium card fee review",
        "Benefit and cardmember agreement acceptance"
      ]
    },
    faqs: [
      {
        question: "Are premium benefits guaranteed?",
        answer: `No. Benefits are subject to program rules, provider terms, eligibility, exclusions, and change.`
      },
      {
        question: "Can a premium card have higher fees?",
        answer: `Yes. Premium cards may include annual fees or other costs that should be reviewed in approved disclosures.`
      }
    ],
    finalCta: {
      headline: "Evaluate premium card value with terms and fees in view.",
      description: `Review premium features, eligibility, fees, benefit rules, and responsible credit considerations before applying.`,
      primaryCta: "Explore Premium Cards",
      secondaryCta: "Review Terms"
    },
    disclosure: `Premium credit cards are subject to credit approval, fees, APRs, benefit limitations, program rules, cardmember agreements, and disclosures.`
  },
  {
    slug: "credit-cards/rewards",
    category: "Credit Cards",
    title: "Rewards Credit Cards",
    seoTitle: "Rewards Credit Cards | Aster Bank",
    seoDescription: `Rewards credit card content for eligible customers reviewing points, cash back placeholders, redemption rules, account controls, and responsible credit use.`,
    eyebrow: "Rewards Cards",
    headline: "Rewards cards with clear rules, controls, and responsible use.",
    description: `Aster Bank rewards card content is designed to help eligible customers review rewards structures, redemption rules, spending categories, account alerts, and the cost of carrying credit.`,
    primaryCta: "Explore Rewards Cards",
    secondaryCta: "Review Rewards Terms",
    trustNote: `Rewards cards are subject to credit approval, rewards program rules, exclusions, fees, APRs, card terms, and applicable disclosures.`,
    sections: [
      {
        title: "Rewards with terms clearly disclosed",
        description: `Rewards can add value when used responsibly, but customers should review earning rules, redemption restrictions, fees, and interest costs.`,
        items: [
          {
            title: "Points or cash back placeholders",
            description: `Rewards structures may include points, cash back, or category-based earning subject to program rules.`
          },
          {
            title: "Redemption terms",
            description: `Rewards redemption may be subject to minimums, expiration rules, exclusions, and provider terms.`
          },
          {
            title: "Cost of carrying balances",
            description: `Interest charges and fees may outweigh rewards if balances are carried.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Rewards visibility",
        description: `Review earning activity, eligible categories, and redemption options where available.`
      },
      {
        title: "Spending alignment",
        description: `Choose a rewards structure that aligns with actual spending behavior and account needs.`
      },
      {
        title: "Responsible value review",
        description: `Consider fees, APRs, and payment behavior before evaluating rewards value.`
      }
    ],
    eligibility: {
      title: "Rewards card requirements",
      description: `Rewards credit cards require credit approval, account eligibility, rewards program acceptance, and cardmember agreement acceptance.`,
      items: [
        "Completed application",
        "Credit review",
        "Rewards program terms acceptance",
        "Cardmember agreement acceptance",
        "Fee and APR disclosure review"
      ]
    },
    faqs: [
      {
        question: "Can rewards terms change?",
        answer: `Yes. Rewards programs, categories, redemption options, exclusions, and rules may change according to program terms.`
      },
      {
        question: "Are rewards always worth it?",
        answer: `Not always. Fees and interest charges may reduce or outweigh rewards value if the card is not used responsibly.`
      }
    ],
    finalCta: {
      headline: "Review rewards with the full card terms in mind.",
      description: `Compare rewards structures, fees, APRs, redemption rules, and responsible credit considerations before applying.`,
      primaryCta: "Explore Rewards Cards",
      secondaryCta: "Review Rewards Terms"
    },
    disclosure: `Rewards credit cards are subject to credit approval, fees, APRs, rewards rules, exclusions, redemption terms, cardmember agreements, and disclosures.`
  }
];
