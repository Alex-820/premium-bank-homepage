import type { BankPage } from "./pageContent";

export const personalBankPages: BankPage[] = [
  {
    slug: "personal/checking",
    category: "Personal Banking",
    title: "Checking Accounts",
    seoTitle: "Personal Checking Accounts | Aster Bank",
    seoDescription: "Explore personal checking accounts designed for everyday deposits, payments, debit card access, digital banking, and account visibility.",
    eyebrow: "Personal Checking",
    headline: "Checking built for secure everyday money movement.",
    description: "Aster Bank checking accounts are designed to support deposits, debit card use, payments, transfers, alerts, and digital account management through a secure banking relationship.",
    primaryCta: "Open an Account",
    secondaryCta: "Explore Digital Banking",
    trustNote: "Checking account opening is subject to identity verification, eligibility, funding requirements, applicable fees, and account agreement approval.",
    sections: [
      {
        title: "Everyday access with account controls",
        description: "Use checking for daily financial activity while maintaining visibility into balances, transactions, alerts, and payment activity.",
        items: [
          { title: "Debit card access", description: "Use an eligible debit card for purchases and ATM access with account activity available through digital banking." },
          { title: "Payments and transfers", description: "Move money, pay bills, and manage eligible transfers subject to account status, limits, and verification." },
          { title: "Account visibility", description: "Review balances, transactions, statements, alerts, and account details through secure online and mobile banking." }
        ]
      }
    ],
    benefits: [
      { title: "Daily banking convenience", description: "Support deposits, purchases, transfers, and payments through one core operating account." },
      { title: "Security alerts", description: "Use account alerts and transaction visibility to help monitor activity." },
      { title: "Digital access", description: "Manage eligible checking services through online and mobile banking." }
    ],
    eligibility: {
      title: "Opening requirements",
      description: "Checking accounts generally require customer verification, address information, tax certification placeholder, and acceptance of terms.",
      items: ["Valid customer identification", "Contact and address information", "Initial funding where required", "Acceptance of account agreements and fee schedule"]
    },
    faqs: [
      { question: "Can I manage checking online?", answer: "Yes. Eligible checking accounts can be managed through online and mobile banking after enrollment and authentication." },
      { question: "Are fees disclosed before opening?", answer: "Fees, limits, and account terms should be reviewed in the applicable account disclosure before opening." }
    ],
    finalCta: {
      headline: "Open a checking relationship designed for everyday access.",
      description: "Start with secure account access, clear visibility, and support for daily banking activity.",
      primaryCta: "Open an Account",
      secondaryCta: "Review Requirements"
    },
    disclosure: "Checking products, fees, features, and availability are subject to eligibility, approval, account agreements, and applicable disclosures."
  },
  {
    slug: "personal/savings",
    category: "Personal Banking",
    title: "Savings Accounts",
    seoTitle: "Personal Savings Accounts | Aster Bank",
    seoDescription: "Savings accounts designed to support reserves, financial goals, secure account access, and balance visibility.",
    eyebrow: "Personal Savings",
    headline: "Savings designed to support financial discipline and future needs.",
    description: "Aster Bank savings services are structured to help customers organize funds for short-term reserves, planned expenses, and longer-term goals with secure digital access.",
    primaryCta: "Open an Account",
    secondaryCta: "Explore Personal Banking",
    trustNote: "Savings account terms, rates, fees, withdrawal limits, and eligibility are subject to approved disclosures and account agreements.",
    sections: [
      {
        title: "Build and organize savings",
        description: "Use savings accounts to separate funds, monitor balances, and support disciplined financial planning.",
        items: [
          { title: "Goal-based reserves", description: "Set aside funds for emergency reserves, planned purchases, and household priorities." },
          { title: "Balance visibility", description: "Review account balances and activity through secure digital banking." },
          { title: "Transfers from eligible accounts", description: "Move funds between eligible accounts subject to limits, account status, and service terms." }
        ]
      }
    ],
    benefits: [
      { title: "Financial organization", description: "Separate savings from everyday spending for clearer planning." },
      { title: "Secure access", description: "View balances and account activity through protected digital channels." },
      { title: "Relationship banking", description: "Use savings alongside checking, lending, and digital banking services." }
    ],
    eligibility: {
      title: "Savings eligibility",
      description: "Savings account opening may require identity verification, minimum deposit requirements, and acceptance of account terms.",
      items: ["Customer verification", "Eligible funding source", "Account disclosures", "Applicable account agreement"]
    },
    faqs: [
      { question: "Are savings rates guaranteed?", answer: "No. Rates, if offered, are subject to change and must be presented with approved disclosures." },
      { question: "Can I transfer from savings?", answer: "Eligible transfers may be available subject to account terms, transaction limits, and service availability." }
    ],
    finalCta: {
      headline: "Create structure around your savings goals.",
      description: "Explore savings options designed for reserves, planning, and secure account access.",
      primaryCta: "Open an Account",
      secondaryCta: "Explore Checking"
    },
    disclosure: "Savings products, rates, features, fees, and withdrawal rules are subject to eligibility, account terms, and approved disclosures."
  },
  {
    slug: "personal/credit-cards",
    category: "Personal Banking",
    title: "Personal Credit Cards",
    seoTitle: "Personal Credit Cards | Aster Bank",
    seoDescription: "Personal credit card options for everyday purchases, account alerts, card controls, rewards placeholders, and responsible credit use.",
    eyebrow: "Personal Credit Cards",
    headline: "Credit card options with visibility, controls, and responsible use in focus.",
    description: "Aster Bank personal credit cards are designed to support purchasing needs with account management tools, alerts, card controls, and clear terms.",
    primaryCta: "Compare Cards",
    secondaryCta: "Review Card Terms",
    trustNote: "Credit cards are subject to credit approval, APRs, fees, cardmember agreements, rewards rules, and applicable disclosures.",
    sections: [
      {
        title: "Credit access with account management",
        description: "Use credit card tools to manage purchases, payments, alerts, and account visibility.",
        items: [
          { title: "Purchase flexibility", description: "Use an eligible credit line for purchases subject to account terms and available credit." },
          { title: "Payments and statements", description: "Review balances, statements, payment due dates, and activity through digital banking." },
          { title: "Card controls and alerts", description: "Use available controls and alerts to help monitor card activity." }
        ]
      }
    ],
    benefits: [
      { title: "Spending visibility", description: "Track purchases, balances, due dates, and payment activity." },
      { title: "Security controls", description: "Use alerts and card management tools to help protect account activity." },
      { title: "Responsible credit use", description: "Review APRs, fees, payment obligations, and terms before applying." }
    ],
    eligibility: {
      title: "Application requirements",
      description: "Credit card applications generally require identity verification, income information, credit review, and acceptance of card terms.",
      items: ["Completed application", "Identity verification", "Credit evaluation", "Cardmember agreement acceptance"]
    },
    faqs: [
      { question: "Is approval guaranteed?", answer: "No. Credit card approval is subject to credit review, eligibility, and applicable lending policies." },
      { question: "Where are APRs and fees shown?", answer: "APRs, fees, and terms should be presented in approved card disclosures before application submission." }
    ],
    finalCta: {
      headline: "Review personal card options with clear terms.",
      description: "Compare card features, controls, and responsible credit considerations before applying.",
      primaryCta: "Compare Cards",
      secondaryCta: "Review Terms"
    },
    disclosure: "Credit cards are subject to credit approval. APRs, fees, rewards, benefits, and terms are governed by applicable cardmember agreements and disclosures."
  },
  {
    slug: "personal/mortgages",
    category: "Personal Banking",
    title: "Mortgage Lending",
    seoTitle: "Mortgage Lending | Aster Bank",
    seoDescription: "Mortgage lending information for home financing needs subject to application, documentation, underwriting, and approval.",
    eyebrow: "Mortgage Lending",
    headline: "Home financing with a responsible review process.",
    description: "Aster Bank mortgage services are designed to support qualified borrowers through application intake, documentation, property review, underwriting, and closing preparation.",
    primaryCta: "Start Application",
    secondaryCta: "Prepare Documents",
    trustNote: "Mortgage loans are subject to application, credit review, income verification, property evaluation, underwriting, and final approval.",
    sections: [
      {
        title: "A structured path to home financing",
        description: "Understand the steps and information typically required before a mortgage decision can be made.",
        items: [
          { title: "Application review", description: "Provide borrower, income, asset, and property information for review." },
          { title: "Documentation", description: "Submit required documents such as income verification, identification, and property-related information." },
          { title: "Underwriting and closing", description: "Applications are reviewed based on credit, income, collateral, policy, and loan terms." }
        ]
      }
    ],
    benefits: [
      { title: "Clear process", description: "Understand application steps, documentation needs, and review milestones." },
      { title: "Responsible lending", description: "Mortgage decisions are subject to underwriting and ability-to-repay considerations." },
      { title: "Servicing support", description: "Eligible borrowers may access payment and account support after closing." }
    ],
    eligibility: {
      title: "Mortgage requirements",
      description: "Mortgage eligibility depends on borrower profile, property information, income, credit, collateral, and underwriting review.",
      items: ["Completed application", "Income and asset documentation", "Credit review", "Property appraisal or valuation where required", "Final underwriting approval"]
    },
    faqs: [
      { question: "Does applying guarantee mortgage approval?", answer: "No. Mortgage approval depends on documentation, underwriting, property review, and lending requirements." },
      { question: "Are rates shown here final?", answer: "No. Any rates or terms must be provided through approved mortgage disclosures and are subject to change." }
    ],
    finalCta: {
      headline: "Prepare for a mortgage review with clear expectations.",
      description: "Start the mortgage process by reviewing documentation, eligibility, and responsible lending requirements.",
      primaryCta: "Start Application",
      secondaryCta: "Contact Lending Support"
    },
    disclosure: "Mortgage products are subject to credit approval, property review, underwriting, fees, closing conditions, and applicable disclosures. This page does not represent loan approval."
  },
  {
    slug: "personal/auto-loans",
    category: "Personal Banking",
    title: "Auto Loans",
    seoTitle: "Auto Loans | Aster Bank",
    seoDescription: "Auto loan information for eligible vehicle financing subject to credit review, documentation, terms, and approval.",
    eyebrow: "Auto Loans",
    headline: "Vehicle financing with clear terms and responsible review.",
    description: "Aster Bank auto lending is designed to support eligible vehicle purchases or refinancing requests through application review, credit evaluation, and loan documentation.",
    primaryCta: "Explore Auto Loans",
    secondaryCta: "Review Requirements",
    trustNote: "Auto loans are subject to application, credit approval, vehicle eligibility, documentation, terms, and applicable disclosures.",
    sections: [
      {
        title: "Financing for eligible vehicles",
        description: "Review financing options, application needs, and repayment considerations before submitting a request.",
        items: [
          { title: "Purchase financing", description: "Finance eligible vehicles subject to loan terms, credit review, and vehicle requirements." },
          { title: "Refinance placeholder", description: "Refinancing may be available where eligible and subject to loan review and documentation." },
          { title: "Payment visibility", description: "Review repayment obligations, due dates, and loan servicing information." }
        ]
      }
    ],
    benefits: [
      { title: "Structured application", description: "Submit vehicle and borrower information for responsible credit review." },
      { title: "Clear repayment terms", description: "Review loan amount, term, payment expectations, and applicable fees before acceptance." },
      { title: "Digital servicing support", description: "Eligible loans may support digital payment and account visibility." }
    ],
    eligibility: {
      title: "Auto loan eligibility",
      description: "Eligibility depends on credit profile, income, vehicle information, loan terms, and applicable lending policies.",
      items: ["Completed loan application", "Vehicle information", "Identity and income verification", "Credit review", "Final loan agreement"]
    },
    faqs: [
      { question: "Can I get approved instantly?", answer: "This page does not imply instant or guaranteed approval. Applications require review and approval." },
      { question: "Can loan terms change?", answer: "Yes. Terms, rates, payments, and fees are subject to eligibility, credit review, and approved disclosures." }
    ],
    finalCta: {
      headline: "Review vehicle financing options responsibly.",
      description: "Explore auto loan requirements and prepare the information needed for application review.",
      primaryCta: "Explore Auto Loans",
      secondaryCta: "Contact Lending Support"
    },
    disclosure: "Auto loans are subject to credit approval, vehicle eligibility, documentation, fees, final loan terms, and applicable disclosures."
  },
  {
    slug: "personal/digital-banking",
    category: "Personal Banking",
    title: "Personal Digital Banking",
    seoTitle: "Personal Digital Banking | Aster Bank",
    seoDescription: "Personal digital banking tools for secure online access, mobile banking, transfers, bill pay, alerts, and card controls.",
    eyebrow: "Personal Digital Banking",
    headline: "Secure digital access for everyday personal banking.",
    description: "Aster Bank personal digital banking is designed to help customers manage eligible accounts, payments, transfers, alerts, statements, and card controls through protected online and mobile channels.",
    primaryCta: "Enroll in Online Banking",
    secondaryCta: "Learn About Security",
    trustNote: "Digital banking access requires enrollment, authentication, eligible accounts, security settings, and acceptance of digital banking terms.",
    sections: [
      {
        title: "Manage eligible accounts digitally",
        description: "Access key personal banking services through secure online and mobile experiences.",
        items: [
          { title: "Mobile and online access", description: "View balances, transactions, statements, and account details from supported devices." },
          { title: "Transfers and bill pay", description: "Move money and schedule payments subject to limits, account status, and service terms." },
          { title: "Alerts and card controls", description: "Use notifications and card management tools to help monitor account activity." }
        ]
      }
    ],
    benefits: [
      { title: "Convenient access", description: "Manage eligible account services without visiting a branch." },
      { title: "Security-centered design", description: "Use authentication, alerts, and secure sessions to support account protection." },
      { title: "Service visibility", description: "Review payments, transfers, statements, and card activity in one digital experience." }
    ],
    eligibility: {
      title: "Enrollment requirements",
      description: "Personal digital banking requires an eligible account, verified profile, secure credentials, and electronic service acceptance.",
      items: ["Eligible personal account", "Verified customer profile", "Secure username and password", "Multifactor authentication where required", "Electronic service agreement"]
    },
    faqs: [
      { question: "Can I use bill pay digitally?", answer: "Eligible bill pay features may be available subject to enrollment, limits, payee rules, and service terms." },
      { question: "How is online access protected?", answer: "Digital banking should use secure authentication, encrypted sessions, monitoring, alerts, and protected account workflows." }
    ],
    finalCta: {
      headline: "Enroll in secure personal digital banking.",
      description: "Access eligible personal accounts, transfers, bill pay, alerts, and card controls through protected digital channels.",
      primaryCta: "Enroll in Online Banking",
      secondaryCta: "Review Security Tips"
    },
    disclosure: "Digital banking features are subject to enrollment, eligibility, availability, transaction limits, authentication, and applicable digital banking agreements."
  }
];
