import type { BankPage } from "./pageContent";

export const businessBankPages: BankPage[] = [
  {
    slug: "business/checking",
    category: "Business Banking",
    title: "Business Checking",
    seoTitle: "Business Checking Accounts | Aster Bank",
    seoDescription: `Business checking accounts designed for operating deposits, payments, cash flow visibility, user access, and business account management.`,
    eyebrow: "Business Checking",
    headline: "Operating accounts designed for business cash flow and control.",
    description: `Aster Bank business checking supports daily operating needs with account visibility, payments, deposits, user access controls, and digital tools for managing business activity.`,
    primaryCta: "Open Business Account",
    secondaryCta: "Contact Business Banking",
    trustNote: `Business checking is subject to business verification, authorized signer review, account approval, applicable fees, and business account agreements.`,
    sections: [
      {
        title: "Core operating account support",
        description: `Manage everyday business transactions through accounts designed for deposits, payments, withdrawals, and operating cash visibility.`,
        items: [
          {
            title: "Operating deposits",
            description: `Receive and manage business deposits with clear account visibility and activity tracking.`
          },
          {
            title: "Payments and disbursements",
            description: `Support eligible payments, transfers, withdrawals, and account activity subject to limits and account terms.`
          },
          {
            title: "User access controls",
            description: `Support authorized access workflows for business owners, operators, and approved signers.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Cash flow visibility",
        description: `Review balances, recent activity, and transaction history for operating account management.`
      },
      {
        title: "Business-ready controls",
        description: `Support permissions, alerts, and internal oversight for eligible business users.`
      },
      {
        title: "Relationship banking",
        description: `Connect checking with treasury, merchant services, business lending, and commercial support.`
      }
    ],
    eligibility: {
      title: "Business account requirements",
      description: `Business checking typically requires entity information, authorized signer details, tax identification placeholder, and ownership review.`,
      items: [
        "Business formation or registration details",
        "EIN or tax identification placeholder",
        "Authorized signer information",
        "Beneficial ownership information where required",
        "Acceptance of business account agreements"
      ]
    },
    faqs: [
      {
        question: "Can a business checking account be opened online?",
        answer: `A digital intake flow can collect initial information, but business verification, documentation review, and approval may be required.`
      },
      {
        question: "Can multiple users access the account?",
        answer: `Business access may support authorized users and signers subject to business account settings, verification, and permissions.`
      }
    ],
    finalCta: {
      headline: "Establish a business account for daily operations.",
      description: `Start with a checking relationship designed to support cash flow, payments, and business account visibility.`,
      primaryCta: "Open Business Account",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Business checking products, fees, limits, services, and availability are subject to eligibility, verification, approval, and applicable agreements.`
  },
  {
    slug: "business/treasury-management",
    category: "Business Banking",
    title: "Treasury Management",
    seoTitle: "Treasury Management Services | Aster Bank",
    seoDescription: `Treasury management services for cash visibility, liquidity, payables, receivables, fraud controls, and operational risk management.`,
    eyebrow: "Treasury Management",
    headline: "Treasury services designed for liquidity, payments, and control.",
    description: `Aster Bank treasury management is designed to help eligible businesses improve cash visibility, manage payables and receivables, support liquidity decisions, and strengthen operational controls.`,
    primaryCta: "Request Treasury Consultation",
    secondaryCta: "Explore Business Banking",
    trustNote: `Treasury services are subject to eligibility, risk review, service agreements, implementation requirements, and approval.`,
    sections: [
      {
        title: "Cash management for complex operations",
        description: `Support treasury needs with tools and workflows focused on visibility, payment control, liquidity, and operational risk management.`,
        items: [
          {
            title: "Cash visibility",
            description: `Monitor balances and account activity across eligible business relationships.`
          },
          {
            title: "Payables and receivables",
            description: `Support outgoing and incoming payment workflows through approved treasury services.`
          },
          {
            title: "Fraud control placeholders",
            description: `Use account controls, review workflows, and monitoring tools to help reduce operational risk.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Improved liquidity oversight",
        description: `Understand cash positions and movement patterns for more informed operating decisions.`
      },
      {
        title: "Payment workflow discipline",
        description: `Support payment initiation, approval, and reconciliation through treasury workflows.`
      },
      {
        title: "Risk management support",
        description: `Apply controls and review processes to help manage fraud and operational exposure.`
      }
    ],
    eligibility: {
      title: "Treasury eligibility",
      description: `Treasury services may require business size, transaction volume, operating history, risk review, implementation approval, and executed service agreements.`,
      items: [
        "Business verification",
        "Operating account relationship",
        "Treasury risk review",
        "Service agreement acceptance",
        "Implementation and user authorization"
      ]
    },
    faqs: [
      {
        question: "Are treasury services available to all businesses?",
        answer: `No. Treasury services may be limited based on business profile, risk review, transaction needs, and approval.`
      },
      {
        question: "Can treasury services help with fraud controls?",
        answer: `Treasury workflows can support controls and monitoring, but no system eliminates fraud risk entirely.`
      }
    ],
    finalCta: {
      headline: "Bring greater visibility and discipline to business cash flow.",
      description: `Request a treasury conversation to review liquidity, payment workflows, and operating controls.`,
      primaryCta: "Request Treasury Consultation",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Treasury management services are subject to eligibility, risk review, fees, service agreements, implementation requirements, and approval.`
  },
  {
    slug: "business/merchant-services",
    category: "Business Banking",
    title: "Merchant Services",
    seoTitle: "Merchant Services | Aster Bank",
    seoDescription: `Merchant services information for payment acceptance, settlement visibility, business operations, and provider integration placeholders.`,
    eyebrow: "Merchant Services",
    headline: "Payment acceptance support for business operations.",
    description: `Aster Bank merchant services content is structured for businesses that need payment acceptance, settlement visibility, reporting, and integration with approved processing partners.`,
    primaryCta: "Explore Merchant Services",
    secondaryCta: "Contact Business Banking",
    trustNote: `Merchant services require approved payment processing providers, underwriting, service agreements, pricing disclosures, and risk review.`,
    sections: [
      {
        title: "Support for customer payments",
        description: `Merchant services can help businesses accept payments and monitor settlement activity through approved provider workflows.`,
        items: [
          {
            title: "Payment acceptance",
            description: `Support card or digital payment acceptance through approved merchant processing infrastructure.`
          },
          {
            title: "Settlement visibility",
            description: `Review settlement activity, deposits, chargebacks, and reporting where available.`
          },
          {
            title: "Operational support",
            description: `Coordinate merchant services with business checking, treasury, and reporting workflows.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Customer payment access",
        description: `Support payment acceptance channels that align with business needs and provider availability.`
      },
      {
        title: "Business reporting",
        description: `Review payment and settlement activity through approved reporting tools.`
      },
      {
        title: "Banking coordination",
        description: `Connect merchant settlement workflows with business account operations.`
      }
    ],
    eligibility: {
      title: "Merchant review requirements",
      description: `Merchant services typically require business verification, processing risk review, pricing acceptance, and provider onboarding.`,
      items: [
        "Business verification",
        "Industry and processing review",
        "Owner or signer information",
        "Merchant agreement acceptance",
        "Approved processing provider setup"
      ]
    },
    faqs: [
      {
        question: "Does Aster Bank process card payments directly?",
        answer: `Real merchant acquiring requires approved payment processing infrastructure. This prototype should use licensed provider placeholders.`
      },
      {
        question: "Are all industries eligible?",
        answer: `No. Merchant services availability may depend on industry, risk review, transaction type, and provider requirements.`
      }
    ],
    finalCta: {
      headline: "Review merchant service options for your business.",
      description: `Explore payment acceptance and settlement workflows subject to provider review and approval.`,
      primaryCta: "Explore Merchant Services",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Merchant services are subject to underwriting, processing agreements, provider requirements, pricing, fees, risk review, and approval.`
  },
  {
    slug: "business/business-lending",
    category: "Business Banking",
    title: "Business Lending",
    seoTitle: "Business Lending and Working Capital | Aster Bank",
    seoDescription: `Business lending options for working capital, equipment, expansion, and operating needs subject to underwriting and approval.`,
    eyebrow: "Business Lending",
    headline: "Business financing structured around responsible credit review.",
    description: `Aster Bank business lending is designed to support qualified companies with financing for working capital, equipment, expansion, and operating needs through a disciplined review process.`,
    primaryCta: "Explore Business Loans",
    secondaryCta: "Prepare to Apply",
    trustNote: `Business loans are subject to application, credit review, financial documentation, underwriting, collateral review where applicable, and approval.`,
    sections: [
      {
        title: "Financing for business needs",
        description: `Explore financing structures designed to support eligible business goals while maintaining responsible underwriting standards.`,
        items: [
          {
            title: "Working capital",
            description: `Support short-term operating needs subject to financial review and repayment capacity.`
          },
          {
            title: "Equipment and expansion",
            description: `Finance eligible business purchases or growth initiatives subject to underwriting and documentation.`
          },
          {
            title: "Commercial credit review",
            description: `Applications are reviewed based on business performance, credit profile, collateral, and policy factors.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Structured review",
        description: `Understand documentation, financial review, and approval steps before borrowing.`
      },
      {
        title: "Responsible lending",
        description: `Financing decisions consider business capacity, repayment ability, and risk factors.`
      },
      {
        title: "Relationship support",
        description: `Coordinate lending conversations with business banking and treasury needs.`
      }
    ],
    eligibility: {
      title: "Business loan requirements",
      description: `Business loan eligibility depends on financial performance, business history, credit profile, documentation, collateral where applicable, and underwriting.`,
      items: [
        "Completed loan application",
        "Business financial statements or revenue information",
        "Owner or guarantor information where required",
        "Credit and underwriting review",
        "Final loan agreement"
      ]
    },
    faqs: [
      {
        question: "Does applying guarantee approval?",
        answer: `No. Business loan approval depends on underwriting, documentation, credit review, policy requirements, and final approval.`
      },
      {
        question: "Can startups qualify?",
        answer: `Eligibility depends on product requirements, business profile, revenue, collateral, guarantor information, and lending policy.`
      }
    ],
    finalCta: {
      headline: "Prepare for a responsible business lending review.",
      description: `Explore lending options and documentation requirements before submitting a financing request.`,
      primaryCta: "Explore Business Loans",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Business loans are subject to credit approval, underwriting, documentation, collateral review where applicable, fees, and final loan agreements.`
  },
  {
    slug: "business/payroll",
    category: "Business Banking",
    title: "Payroll Solutions",
    seoTitle: "Business Payroll Solutions | Aster Bank",
    seoDescription: `Payroll solution placeholders for payroll workflows, employee payments, reporting, and approved provider integrations.`,
    eyebrow: "Payroll Solutions",
    headline: "Payroll support designed to connect business banking and workforce payments.",
    description: `Aster Bank payroll content is structured to support businesses that need payroll coordination, employee payment workflows, reporting visibility, and approved provider integrations.`,
    primaryCta: "Explore Payroll Options",
    secondaryCta: "Contact Business Banking",
    trustNote: `Payroll services require provider integration, service agreements, employer responsibilities, tax compliance review, and business verification.`,
    sections: [
      {
        title: "Payroll workflow support",
        description: `Coordinate payroll activity with business accounts and approved payroll provider infrastructure.`,
        items: [
          {
            title: "Employee payment workflows",
            description: `Support employee payment processing through approved payroll partners and eligible business accounts.`
          },
          {
            title: "Reporting placeholders",
            description: `Review payroll-related reporting and account activity where provider tools are available.`
          },
          {
            title: "Business account coordination",
            description: `Align payroll funding needs with operating accounts and cash flow planning.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Operational organization",
        description: `Connect payroll timing with business cash flow and account management.`
      },
      {
        title: "Provider-led processing",
        description: `Use approved payroll infrastructure rather than unsupported internal payment logic.`
      },
      {
        title: "Employer visibility",
        description: `Review payroll funding and related activity where service tools allow.`
      }
    ],
    eligibility: {
      title: "Payroll requirements",
      description: `Payroll solutions may require business verification, payroll provider onboarding, employee data handling, tax setup, and service agreements.`,
      items: [
        "Verified business profile",
        "Approved payroll provider",
        "Authorized employer user setup",
        "Payroll funding account",
        "Provider agreements and compliance review"
      ]
    },
    faqs: [
      {
        question: "Does the bank calculate payroll taxes?",
        answer: `Payroll tax calculation should be handled by approved payroll providers or qualified professionals. This prototype should not simulate tax compliance.`
      },
      {
        question: "Can payroll connect to business checking?",
        answer: `Eligible payroll services may connect to approved funding accounts subject to provider setup and account verification.`
      }
    ],
    finalCta: {
      headline: "Coordinate payroll with your business banking structure.",
      description: `Explore payroll workflows designed around approved providers, funding visibility, and business operations.`,
      primaryCta: "Explore Payroll Options",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Payroll services require approved provider integrations and are subject to service agreements, employer responsibilities, tax rules, and compliance review.`
  },
  {
    slug: "business/commercial-banking",
    category: "Business Banking",
    title: "Commercial Banking",
    seoTitle: "Commercial Banking Services | Aster Bank",
    seoDescription: `Commercial banking services for larger business relationships, operating accounts, credit, treasury, liquidity, and relationship management.`,
    eyebrow: "Commercial Banking",
    headline: "Commercial banking for complex business relationships.",
    description: `Aster Bank commercial banking is designed for companies that require relationship-led support across operating accounts, credit, treasury management, liquidity, and financial decision-making.`,
    primaryCta: "Request Commercial Consultation",
    secondaryCta: "Explore Treasury Management",
    trustNote: `Commercial banking services are subject to business review, relationship eligibility, documentation, underwriting, treasury review, and service agreements.`,
    sections: [
      {
        title: "Relationship-led commercial support",
        description: `Support larger and more complex business needs through coordinated banking, credit, and treasury services.`,
        items: [
          {
            title: "Operating relationships",
            description: `Manage commercial deposit and operating account structures with visibility and service support.`
          },
          {
            title: "Credit and lending",
            description: `Explore commercial financing options subject to underwriting, collateral review, and approval.`
          },
          {
            title: "Liquidity and treasury",
            description: `Coordinate cash management, payment workflows, and liquidity considerations with treasury services.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Dedicated relationship focus",
        description: `Support financial needs through a coordinated commercial banking relationship.`
      },
      {
        title: "Operational visibility",
        description: `Bring cash, credit, and payment activity into a more structured banking view.`
      },
      {
        title: "Risk-aware support",
        description: `Review treasury, fraud, liquidity, and credit considerations as business needs evolve.`
      }
    ],
    eligibility: {
      title: "Commercial eligibility",
      description: `Commercial banking relationships may require business size, financial profile, operating history, credit needs, and relationship review.`,
      items: [
        "Business and ownership verification",
        "Financial information review",
        "Operating account relationship",
        "Treasury or credit review where applicable",
        "Commercial agreements and approvals"
      ]
    },
    faqs: [
      {
        question: "Who is commercial banking for?",
        answer: `Commercial banking is generally designed for businesses with more complex operating, treasury, credit, and relationship needs.`
      },
      {
        question: "Does commercial banking include lending?",
        answer: `Commercial lending may be available to eligible businesses subject to underwriting, documentation, collateral review, and approval.`
      }
    ],
    finalCta: {
      headline: "Build a commercial banking relationship around your company’s needs.",
      description: `Review business operations, liquidity, credit, and treasury requirements with a commercial banking team.`,
      primaryCta: "Request Commercial Consultation",
      secondaryCta: "Explore Business Banking"
    },
    disclosure: `Commercial banking services are subject to eligibility, documentation, fees, service agreements, underwriting where applicable, and approval.`
  },
  {
    slug: "business/corporate-cards",
    category: "Business Banking",
    title: "Corporate Cards",
    seoTitle: "Corporate Cards and Business Expense Controls | Aster Bank",
    seoDescription: `Corporate card information for business purchasing, employee spending, expense controls, card alerts, and reporting placeholders.`,
    eyebrow: "Corporate Cards",
    headline: "Corporate card programs designed for business spending control.",
    description: `Aster Bank corporate card content is structured for businesses that need purchasing power, employee card workflows, spending controls, reporting, and account oversight.`,
    primaryCta: "Explore Corporate Cards",
    secondaryCta: "Review Card Terms",
    trustNote: `Corporate cards are subject to credit approval, business review, card agreements, employee card controls, fees, APRs where applicable, and disclosures.`,
    sections: [
      {
        title: "Business spending with oversight",
        description: `Support business purchases and employee spending through card workflows designed for visibility and control.`,
        items: [
          {
            title: "Employee card access",
            description: `Issue eligible cards or card access to authorized employees subject to program rules and controls.`
          },
          {
            title: "Spending limits",
            description: `Use placeholder controls for spending limits, categories, approvals, and monitoring.`
          },
          {
            title: "Expense visibility",
            description: `Review card activity, statements, and reporting to support business expense management.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Purchasing control",
        description: `Manage business spending with card controls and internal oversight workflows.`
      },
      {
        title: "Activity monitoring",
        description: `Track card use, statements, transactions, and exceptions where available.`
      },
      {
        title: "Business expense support",
        description: `Coordinate corporate card usage with business operations and accounting workflows.`
      }
    ],
    eligibility: {
      title: "Corporate card requirements",
      description: `Corporate card programs generally require business verification, credit review, authorized user setup, program terms, and approval.`,
      items: [
        "Business application",
        "Credit or financial review",
        "Authorized user information",
        "Card program agreement",
        "Approval and account setup"
      ]
    },
    faqs: [
      {
        question: "Can employees receive cards?",
        answer: `Eligible business card programs may support employee cards subject to authorized user setup, controls, and program terms.`
      },
      {
        question: "Are corporate cards guaranteed?",
        answer: `No. Corporate card programs are subject to credit approval, eligibility, business review, and applicable agreements.`
      }
    ],
    finalCta: {
      headline: "Review corporate card options for controlled business spending.",
      description: `Explore card program features, controls, reporting, and responsible credit requirements.`,
      primaryCta: "Explore Corporate Cards",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Corporate and business card products are subject to credit approval, fees, APRs where applicable, card program rules, agreements, and disclosures.`
  }
];
