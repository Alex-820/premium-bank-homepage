import type { BankPage } from "./pageContent";

export const loanBankPages: BankPage[] = [
  {
    slug: "loans/mortgage",
    category: "Loans",
    title: "Mortgage Loans",
    seoTitle: "Mortgage Loans | Aster Bank",
    seoDescription: `Mortgage loan information for eligible homebuyers and homeowners, subject to application, documentation, underwriting, property review, and approval.`,
    eyebrow: "Mortgage Lending",
    headline: "Home financing with a responsible review process.",
    description: `Aster Bank mortgage lending is designed to support eligible borrowers through a structured home financing process that includes application intake, income documentation, property review, underwriting, and closing preparation.`,
    primaryCta: "Start Mortgage Application",
    secondaryCta: "Review Requirements",
    trustNote: `Mortgage loans are subject to application, credit review, income verification, collateral review, underwriting, closing conditions, and final approval.`,
    sections: [
      {
        title: "A structured path to home financing",
        description: `Mortgage financing requires careful review of borrower information, property details, repayment capacity, and loan terms.`,
        items: [
          {
            title: "Application intake",
            description: `Provide borrower, income, asset, employment, and property information for mortgage review.`
          },
          {
            title: "Documentation review",
            description: `Submit required documents such as identification, income verification, asset statements, and property information.`
          },
          {
            title: "Underwriting and closing",
            description: `Applications are evaluated based on credit, income, collateral, program requirements, and final loan conditions.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Clear lending steps",
        description: `Understand the information and documents typically required before a mortgage decision can be made.`
      },
      {
        title: "Responsible underwriting",
        description: `Mortgage applications are reviewed using credit, income, collateral, and ability-to-repay considerations.`
      },
      {
        title: "Home financing support",
        description: `Support purchase or refinancing needs through a disciplined lending workflow.`
      }
    ],
    eligibility: {
      title: "Mortgage eligibility",
      description: `Mortgage eligibility depends on borrower profile, credit history, income, assets, property details, collateral review, and underwriting requirements.`,
      items: [
        "Completed mortgage application",
        "Identity and income verification",
        "Credit and debt review",
        "Property appraisal or valuation where required",
        "Final underwriting approval"
      ]
    },
    faqs: [
      {
        question: "Does applying guarantee mortgage approval?",
        answer: `No. Mortgage approval is not guaranteed and depends on documentation, credit review, property review, underwriting, and final approval.`
      },
      {
        question: "Are mortgage rates final on this page?",
        answer: `No. Rates, fees, terms, and closing costs must be provided through approved mortgage disclosures and may change.`
      }
    ],
    finalCta: {
      headline: "Prepare for a responsible mortgage review.",
      description: `Review the application requirements and documentation needed before beginning a mortgage request.`,
      primaryCta: "Start Mortgage Application",
      secondaryCta: "Contact Lending Support"
    },
    disclosure: `Mortgage products are subject to credit approval, underwriting, property review, collateral requirements, fees, closing conditions, and applicable disclosures. This page does not represent loan approval.`
  },
  {
    slug: "loans/auto",
    category: "Loans",
    title: "Auto Loans",
    seoTitle: "Auto Loans | Aster Bank",
    seoDescription: `Auto loan information for eligible vehicle purchases or refinancing requests subject to application, credit review, vehicle eligibility, and approval.`,
    eyebrow: "Auto Lending",
    headline: "Vehicle financing with clear terms and disciplined review.",
    description: `Aster Bank auto lending is designed to support eligible vehicle purchases or refinancing requests through borrower review, vehicle information, repayment evaluation, and final loan documentation.`,
    primaryCta: "Explore Auto Loans",
    secondaryCta: "Review Requirements",
    trustNote: `Auto loans are subject to credit approval, vehicle eligibility, documentation, terms, fees, and applicable disclosures.`,
    sections: [
      {
        title: "Financing for eligible vehicles",
        description: `Auto lending supports vehicle financing needs while maintaining clear repayment expectations and responsible credit review.`,
        items: [
          {
            title: "Purchase financing",
            description: `Finance eligible vehicle purchases subject to borrower profile, vehicle information, and loan terms.`
          },
          {
            title: "Refinance review",
            description: `Auto refinance requests may be available where eligible and subject to credit, vehicle, and documentation review.`
          },
          {
            title: "Loan servicing visibility",
            description: `Eligible borrowers may manage payments, due dates, and account information through supported servicing tools.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Structured application",
        description: `Submit borrower and vehicle information through a clear lending workflow.`
      },
      {
        title: "Repayment clarity",
        description: `Review repayment terms, fees, due dates, and obligations before accepting a loan.`
      },
      {
        title: "Digital account support",
        description: `Access eligible loan information and payment options through digital banking where available.`
      }
    ],
    eligibility: {
      title: "Auto loan eligibility",
      description: `Eligibility depends on credit profile, income, vehicle information, loan amount, term, collateral requirements, and applicable lending policies.`,
      items: [
        "Completed loan application",
        "Identity and income verification",
        "Eligible vehicle information",
        "Credit review",
        "Final loan agreement"
      ]
    },
    faqs: [
      {
        question: "Is auto loan approval guaranteed?",
        answer: `No. Approval depends on credit review, eligibility, documentation, vehicle information, and lending policy.`
      },
      {
        question: "Can I refinance an existing auto loan?",
        answer: `Refinance options may be available for eligible vehicles and borrowers, subject to review and approval.`
      }
    ],
    finalCta: {
      headline: "Review vehicle financing options responsibly.",
      description: `Explore auto lending requirements and prepare the information needed for application review.`,
      primaryCta: "Explore Auto Loans",
      secondaryCta: "Contact Lending Support"
    },
    disclosure: `Auto loans are subject to credit approval, vehicle eligibility, documentation, fees, final loan terms, and applicable disclosures.`
  },
  {
    slug: "loans/personal",
    category: "Loans",
    title: "Personal Loans",
    seoTitle: "Personal Loans | Aster Bank",
    seoDescription: `Personal loan information for eligible borrowers seeking financing for personal needs, subject to application, credit review, terms, and approval.`,
    eyebrow: "Personal Loans",
    headline: "Personal financing with clear terms and responsible review.",
    description: `Aster Bank personal lending is designed to support eligible borrowers with structured financing for qualified personal needs, subject to application review, credit evaluation, repayment capacity, and final approval.`,
    primaryCta: "Explore Personal Loans",
    secondaryCta: "Review Requirements",
    trustNote: `Personal loans are subject to credit approval, income verification, loan terms, fees, documentation, and applicable disclosures.`,
    sections: [
      {
        title: "Financing for personal needs",
        description: `Personal loans can support eligible planned expenses, but borrowing should be evaluated with repayment ability and total cost in mind.`,
        items: [
          {
            title: "Application review",
            description: `Provide borrower information, income details, requested amount, and purpose information where required.`
          },
          {
            title: "Credit evaluation",
            description: `Applications are reviewed based on credit profile, income, existing obligations, and lending criteria.`
          },
          {
            title: "Repayment terms",
            description: `Review payment schedule, fees, total repayment obligations, and loan agreement terms before accepting.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Clear borrowing process",
        description: `Understand what information is needed and how applications are reviewed.`
      },
      {
        title: "Responsible repayment focus",
        description: `Evaluate monthly payment obligations and total borrowing cost before proceeding.`
      },
      {
        title: "Digital servicing access",
        description: `Eligible borrowers may access payment information and loan activity through supported account tools.`
      }
    ],
    eligibility: {
      title: "Personal loan eligibility",
      description: `Personal loan eligibility depends on credit profile, income, debt obligations, identity verification, requested amount, and lending policies.`,
      items: [
        "Completed personal loan application",
        "Identity and income verification",
        "Credit review",
        "Repayment capacity assessment",
        "Final loan agreement"
      ]
    },
    faqs: [
      {
        question: "Does applying affect approval automatically?",
        answer: `No. Submitting an application starts a review process. Approval is not guaranteed.`
      },
      {
        question: "Can loan terms vary?",
        answer: `Yes. Loan amount, term, fees, and pricing depend on eligibility, credit review, approved disclosures, and final agreement terms.`
      }
    ],
    finalCta: {
      headline: "Borrow with a clear understanding of terms.",
      description: `Review personal loan requirements, repayment obligations, and eligibility before applying.`,
      primaryCta: "Explore Personal Loans",
      secondaryCta: "Contact Lending Support"
    },
    disclosure: `Personal loans are subject to credit approval, income verification, documentation, fees, loan terms, and applicable disclosures. This page does not represent guaranteed approval.`
  },
  {
    slug: "loans/business",
    category: "Loans",
    title: "Business Loans",
    seoTitle: "Business Loans | Aster Bank",
    seoDescription: `Business loan information for working capital, equipment, expansion, and operating needs subject to business review, underwriting, and approval.`,
    eyebrow: "Business Loans",
    headline: "Business financing with underwriting discipline.",
    description: `Aster Bank business loans are designed to support qualified companies with financing for working capital, equipment, expansion, and operating needs through a responsible review process.`,
    primaryCta: "Explore Business Loans",
    secondaryCta: "Prepare to Apply",
    trustNote: `Business loans are subject to application, business verification, financial review, credit approval, underwriting, collateral review where applicable, and final agreement terms.`,
    sections: [
      {
        title: "Capital for eligible business needs",
        description: `Business lending can support growth and operations while requiring careful review of financial strength, repayment capacity, and risk.`,
        items: [
          {
            title: "Working capital",
            description: `Support short-term operating needs subject to cash flow, financial, and credit review.`
          },
          {
            title: "Equipment and expansion",
            description: `Finance eligible business investments subject to documentation, collateral review where applicable, and approval.`
          },
          {
            title: "Business credit evaluation",
            description: `Applications are reviewed using business history, financial information, guarantor details where required, and lending policy.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Business-focused review",
        description: `Evaluate financing needs in the context of operations, cash flow, and repayment capacity.`
      },
      {
        title: "Relationship coordination",
        description: `Connect lending conversations with business checking, treasury, merchant services, and commercial banking.`
      },
      {
        title: "Clear documentation expectations",
        description: `Understand required financial documents, ownership information, and approval steps.`
      }
    ],
    eligibility: {
      title: "Business loan requirements",
      description: `Eligibility depends on business profile, financial performance, credit history, collateral where applicable, documentation, and underwriting.`,
      items: [
        "Completed business loan application",
        "Business verification",
        "Financial statements or revenue information",
        "Owner or guarantor information where required",
        "Underwriting and final approval"
      ]
    },
    faqs: [
      {
        question: "Are business loans guaranteed?",
        answer: `No. Business loan approval depends on documentation, underwriting, credit review, repayment capacity, and applicable policy.`
      },
      {
        question: "What information may be required?",
        answer: `Requirements may include formation documents, financial statements, tax information placeholders, ownership details, and bank statements.`
      }
    ],
    finalCta: {
      headline: "Prepare for a responsible business lending review.",
      description: `Review business loan options and documentation requirements before submitting a financing request.`,
      primaryCta: "Explore Business Loans",
      secondaryCta: "Contact Business Banking"
    },
    disclosure: `Business loans are subject to credit approval, underwriting, documentation, collateral review where applicable, fees, and final loan agreements.`
  },
  {
    slug: "loans/commercial",
    category: "Loans",
    title: "Commercial Loans",
    seoTitle: "Commercial Loans | Aster Bank",
    seoDescription: `Commercial lending information for larger companies and complex financing needs, subject to relationship review, underwriting, documentation, and approval.`,
    eyebrow: "Commercial Lending",
    headline: "Commercial financing for complex business needs.",
    description: `Aster Bank commercial lending is designed for eligible businesses that require structured financing, relationship-based review, collateral analysis, treasury coordination, and responsible credit oversight.`,
    primaryCta: "Request Commercial Consultation",
    secondaryCta: "Explore Commercial Banking",
    trustNote: `Commercial loans are subject to business and relationship review, financial analysis, underwriting, collateral review, legal documentation, fees, and final approval.`,
    sections: [
      {
        title: "Financing for larger business relationships",
        description: `Commercial lending supports more complex capital needs and requires detailed review of business performance, collateral, structure, and repayment sources.`,
        items: [
          {
            title: "Commercial credit facilities",
            description: `Support operating, expansion, acquisition, or capital needs through eligible commercial credit structures.`
          },
          {
            title: "Collateral and documentation",
            description: `Commercial loans may require collateral review, legal documentation, covenants, and ongoing reporting.`
          },
          {
            title: "Relationship coordination",
            description: `Coordinate commercial lending with treasury, deposits, liquidity, and business advisory needs.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Structured financing",
        description: `Review financing needs through tailored structures subject to underwriting and approval.`
      },
      {
        title: "Commercial relationship support",
        description: `Coordinate borrowing with broader commercial banking and treasury relationships.`
      },
      {
        title: "Risk-aware review",
        description: `Evaluate repayment sources, collateral, cash flow, covenants, and business conditions.`
      }
    ],
    eligibility: {
      title: "Commercial loan requirements",
      description: `Commercial eligibility depends on business size, financial performance, collateral, credit structure, ownership, industry, and underwriting review.`,
      items: [
        "Commercial loan request",
        "Business financial review",
        "Collateral review where applicable",
        "Ownership and guarantor review where required",
        "Legal documentation and final approval"
      ]
    },
    faqs: [
      {
        question: "Who is commercial lending for?",
        answer: `Commercial lending is generally designed for companies with larger or more complex financing needs, subject to relationship review and approval.`
      },
      {
        question: "Are covenants required?",
        answer: `Some commercial loans may include covenants, reporting requirements, collateral terms, or other conditions depending on structure and risk review.`
      }
    ],
    finalCta: {
      headline: "Review complex financing with commercial lending support.",
      description: `Discuss commercial credit needs, structure, documentation, and treasury coordination with a relationship team.`,
      primaryCta: "Request Commercial Consultation",
      secondaryCta: "Explore Commercial Banking"
    },
    disclosure: `Commercial loans are subject to credit approval, underwriting, collateral review, legal documentation, covenants where applicable, fees, and final loan agreements.`
  }
];
