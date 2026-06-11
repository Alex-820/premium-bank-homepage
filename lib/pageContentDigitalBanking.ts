import type { BankPage } from "./pageContent";

export const digitalBankPages: BankPage[] = [
  {
    slug: "digital-banking/mobile-app",
    category: "Digital Banking",
    title: "Mobile Banking App",
    seoTitle: "Mobile Banking App | Aster Bank",
    seoDescription: `Mobile banking app content for secure account access, balances, transfers, alerts, deposits, card controls, and service tools.`,
    eyebrow: "Mobile Banking",
    headline: "Mobile banking designed for secure access wherever you manage your finances.",
    description: `Aster Bank mobile banking is designed to help eligible customers access accounts, review balances, manage activity, receive alerts, deposit checks where available, and use card controls from supported mobile devices.`,
    primaryCta: "Explore Mobile Banking",
    secondaryCta: "Learn About Security",
    trustNote: `Mobile banking requires enrollment, eligible accounts, supported devices, authentication, service availability, and acceptance of digital banking terms.`,
    sections: [
      {
        title: "Account access from supported devices",
        description: `Mobile banking helps customers monitor and manage eligible banking activity through a secure digital channel.`,
        items: [
          {
            title: "Balances and activity",
            description: `Review eligible account balances, recent transactions, statements, and account details.`
          },
          {
            title: "Mobile deposits",
            description: `Deposit checks where available, subject to eligibility, deposit limits, review, and funds availability policies.`
          },
          {
            title: "Alerts and controls",
            description: `Use alerts and card controls to help monitor account activity and manage supported card features.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Convenient access",
        description: `Manage eligible banking activity without visiting a branch.`
      },
      {
        title: "Security-centered experience",
        description: `Use authentication, encrypted sessions, device controls, and alerts to support account protection.`
      },
      {
        title: "Service visibility",
        description: `Review transfers, deposits, cards, statements, and account activity from one mobile experience.`
      }
    ],
    eligibility: {
      title: "Mobile banking requirements",
      description: `Mobile banking access requires eligible accounts, digital banking enrollment, supported devices, secure credentials, and service agreement acceptance.`,
      items: [
        "Eligible Aster Bank account",
        "Online or mobile banking enrollment",
        "Supported mobile device",
        "Secure login credentials",
        "Multifactor authentication where required"
      ]
    },
    faqs: [
      {
        question: "Can I deposit checks through the mobile app?",
        answer: `Mobile deposit may be available for eligible accounts and is subject to deposit limits, review, holds, and funds availability policies.`
      },
      {
        question: "Is mobile banking protected?",
        answer: `Mobile banking should use secure authentication, encrypted sessions, alerts, device review, and fraud monitoring controls.`
      }
    ],
    finalCta: {
      headline: "Manage eligible accounts through secure mobile banking.",
      description: `Use mobile banking to access balances, transfers, deposits, alerts, and card controls where available.`,
      primaryCta: "Explore Mobile Banking",
      secondaryCta: "Review Security Tips"
    },
    disclosure: `Mobile banking features are subject to enrollment, device compatibility, service availability, account eligibility, transaction limits, and digital banking agreements.`
  },
  {
    slug: "digital-banking/online-banking",
    category: "Digital Banking",
    title: "Online Banking",
    seoTitle: "Online Banking | Aster Bank",
    seoDescription: `Online banking content for secure account access, statements, transfers, bill pay, alerts, profile settings, and account services.`,
    eyebrow: "Online Banking",
    headline: "Secure online banking for account visibility and control.",
    description: `Aster Bank online banking is designed to provide eligible customers with secure access to balances, transactions, statements, transfers, bill pay, alerts, profile settings, and service requests.`,
    primaryCta: "Enroll in Online Banking",
    secondaryCta: "Sign In",
    trustNote: `Online banking requires enrollment, secure credentials, eligible accounts, authentication, and acceptance of electronic service terms.`,
    sections: [
      {
        title: "Digital access for everyday account management",
        description: `Online banking supports secure account visibility and essential service workflows from a web-based experience.`,
        items: [
          {
            title: "Account dashboard",
            description: `View eligible account balances, transaction history, statements, alerts, and account details.`
          },
          {
            title: "Payments and transfers",
            description: `Move money and schedule eligible payments subject to account status, limits, and service terms.`
          },
          {
            title: "Profile and security settings",
            description: `Manage contact information, alerts, login settings, and security preferences where available.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Centralized account visibility",
        description: `Access eligible deposit, loan, card, and investment placeholders from one digital relationship view.`
      },
      {
        title: "Secure service workflows",
        description: `Handle routine banking needs through authenticated digital channels.`
      },
      {
        title: "Document access",
        description: `Review statements, notices, and account documents where electronic delivery is available.`
      }
    ],
    eligibility: {
      title: "Online banking enrollment",
      description: `Enrollment may require eligible accounts, verified customer information, secure credentials, and electronic communications consent.`,
      items: [
        "Eligible customer profile",
        "Account verification",
        "Username and password setup",
        "Security verification method",
        "Digital banking agreement acceptance"
      ]
    },
    faqs: [
      {
        question: "Can I manage all accounts online?",
        answer: `Eligible accounts may be available online, but access depends on account type, enrollment status, service availability, and bank policy.`
      },
      {
        question: "Can online banking be locked for security?",
        answer: `Yes. A secure banking system should support account lockout, step-up verification, and review for suspicious login activity.`
      }
    ],
    finalCta: {
      headline: "Enroll in secure online banking.",
      description: `Access eligible accounts, transfers, bill pay, statements, alerts, and service tools from a protected digital experience.`,
      primaryCta: "Enroll in Online Banking",
      secondaryCta: "Sign In"
    },
    disclosure: `Online banking services are subject to enrollment, account eligibility, service availability, security controls, transaction limits, and digital banking agreements.`
  },
  {
    slug: "digital-banking/transfers",
    category: "Digital Banking",
    title: "Online Transfers",
    seoTitle: "Online Transfers | Aster Bank",
    seoDescription: `Online transfer content for moving money between eligible accounts, external transfer placeholders, limits, verification, and fraud review.`,
    eyebrow: "Transfers",
    headline: "Move money through secure transfer workflows.",
    description: `Aster Bank transfer services are designed to help eligible customers move funds between approved accounts through authenticated digital banking channels, subject to verification, limits, and review.`,
    primaryCta: "Explore Transfers",
    secondaryCta: "Review Limits",
    trustNote: `Transfers are subject to account eligibility, authentication, available funds, transaction limits, processing times, fraud review, and service terms.`,
    sections: [
      {
        title: "Transfer options for eligible accounts",
        description: `Digital transfers help customers manage funds while maintaining controls around identity, authorization, limits, and fraud monitoring.`,
        items: [
          {
            title: "Internal transfers",
            description: `Move funds between eligible Aster Bank accounts subject to account status and available balance.`
          },
          {
            title: "External transfer placeholders",
            description: `External transfers require account verification, network/provider infrastructure, limits, and processing rules.`
          },
          {
            title: "Scheduled transfers",
            description: `Schedule eligible recurring or future-dated transfers where supported by service terms.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Money movement visibility",
        description: `Review pending, completed, and scheduled transfers where available.`
      },
      {
        title: "Security controls",
        description: `Use authentication, limits, alerts, and review workflows to support safer transfers.`
      },
      {
        title: "Cash flow support",
        description: `Coordinate movement between spending, savings, business, or loan-related accounts where eligible.`
      }
    ],
    eligibility: {
      title: "Transfer requirements",
      description: `Transfers generally require eligible accounts, verified ownership or authorization, available funds, security verification, and service agreement acceptance.`,
      items: [
        "Eligible sending and receiving accounts",
        "Verified customer identity",
        "Available funds",
        "Transaction limits",
        "Fraud and compliance review where required"
      ]
    },
    faqs: [
      {
        question: "Are transfers instant?",
        answer: `Not always. Transfer timing depends on transfer type, account status, cut-off times, network rules, review, and processing requirements.`
      },
      {
        question: "Can transfers be delayed or rejected?",
        answer: `Yes. Transfers may be delayed, rejected, or reviewed for insufficient funds, verification issues, limits, fraud concerns, or compliance reasons.`
      }
    ],
    finalCta: {
      headline: "Move funds with visibility and security controls.",
      description: `Explore transfer workflows designed around account eligibility, verification, limits, and account protection.`,
      primaryCta: "Explore Transfers",
      secondaryCta: "Review Security Tips"
    },
    disclosure: `Transfer services are subject to eligibility, verification, available funds, transaction limits, processing times, network rules, fraud review, and applicable agreements.`
  },
  {
    slug: "digital-banking/bill-pay",
    category: "Digital Banking",
    title: "Bill Pay",
    seoTitle: "Online Bill Pay | Aster Bank",
    seoDescription: `Online bill pay content for payee management, scheduled payments, payment history, processing times, limits, and account controls.`,
    eyebrow: "Bill Pay",
    headline: "Bill pay tools designed for payment organization and visibility.",
    description: `Aster Bank bill pay is designed to help eligible customers organize payees, schedule payments, review payment history, and manage recurring obligations through secure digital banking.`,
    primaryCta: "Explore Bill Pay",
    secondaryCta: "Enroll in Online Banking",
    trustNote: `Bill pay is subject to enrollment, account eligibility, payee rules, payment limits, processing times, available funds, and service terms.`,
    sections: [
      {
        title: "Payment management in one digital channel",
        description: `Bill pay can help customers manage payment obligations with scheduling tools, payee records, and activity visibility.`,
        items: [
          {
            title: "Payee setup",
            description: `Add and manage eligible payees subject to verification, payee rules, and service availability.`
          },
          {
            title: "Scheduled payments",
            description: `Schedule one-time or recurring payments where supported, subject to processing rules and available funds.`
          },
          {
            title: "Payment history",
            description: `Review submitted, pending, and completed payments through digital banking where available.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Payment organization",
        description: `Manage bills, payees, due dates, and recurring obligations from one digital workflow.`
      },
      {
        title: "Visibility and records",
        description: `Review payment activity and maintain a clearer view of scheduled obligations.`
      },
      {
        title: "Secure payment access",
        description: `Use authenticated banking access and alerts to support bill payment activity.`
      }
    ],
    eligibility: {
      title: "Bill pay requirements",
      description: `Bill pay may require eligible checking accounts, online banking enrollment, verified payees, available funds, and acceptance of service terms.`,
      items: [
        "Eligible funding account",
        "Online banking enrollment",
        "Payee setup",
        "Available funds",
        "Bill pay agreement acceptance"
      ]
    },
    faqs: [
      {
        question: "When are bill payments delivered?",
        answer: `Payment timing depends on payee type, payment method, cut-off times, processing rules, and service availability.`
      },
      {
        question: "Can a bill payment fail?",
        answer: `Yes. Payments may fail or be delayed due to insufficient funds, incorrect payee details, processing rules, limits, or review.`
      }
    ],
    finalCta: {
      headline: "Organize recurring payments through secure bill pay.",
      description: `Use bill pay to manage eligible payees, scheduled payments, and payment activity through digital banking.`,
      primaryCta: "Explore Bill Pay",
      secondaryCta: "Enroll in Online Banking"
    },
    disclosure: `Bill pay services are subject to enrollment, eligibility, payee rules, payment limits, processing times, available funds, and applicable service agreements.`
  },
  {
    slug: "digital-banking/card-controls",
    category: "Digital Banking",
    title: "Card Controls",
    seoTitle: "Card Controls | Aster Bank",
    seoDescription: `Card control content for locking cards, transaction alerts, spending controls, replacement requests, digital card management, and fraud support.`,
    eyebrow: "Card Controls",
    headline: "Card controls designed to help manage and monitor card activity.",
    description: `Aster Bank card control features are designed to help eligible customers monitor card activity, manage supported card settings, receive alerts, and respond quickly to suspicious or unauthorized use.`,
    primaryCta: "Explore Card Controls",
    secondaryCta: "Report Card Issue",
    trustNote: `Card controls depend on card eligibility, service availability, transaction type, network processing, and digital banking enrollment.`,
    sections: [
      {
        title: "Manage supported card features digitally",
        description: `Card controls can provide added visibility and convenience, but they do not eliminate fraud risk or replace prompt reporting of unauthorized activity.`,
        items: [
          {
            title: "Lock or unlock placeholders",
            description: `Temporarily lock supported cards where available, subject to processing and card network limitations.`
          },
          {
            title: "Transaction alerts",
            description: `Receive alerts for eligible transactions, balance activity, or account events where configured.`
          },
          {
            title: "Card replacement support",
            description: `Request support for lost, stolen, damaged, or compromised cards through verified service channels.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Faster response",
        description: `Take action quickly when a card is misplaced or suspicious activity appears.`
      },
      {
        title: "Activity awareness",
        description: `Monitor card use through alerts and transaction visibility.`
      },
      {
        title: "Digital convenience",
        description: `Manage eligible card settings without waiting for branch support.`
      }
    ],
    eligibility: {
      title: "Card control requirements",
      description: `Card controls require eligible cards, digital banking enrollment, supported card networks, and verified customer access.`,
      items: [
        "Eligible debit or credit card",
        "Digital banking enrollment",
        "Verified customer profile",
        "Supported transaction and card type",
        "Security verification where required"
      ]
    },
    faqs: [
      {
        question: "Does locking a card stop every transaction?",
        answer: `Not always. Some transactions may still process because of network timing, recurring payments, offline approvals, or merchant rules.`
      },
      {
        question: "What should I do if my card is stolen?",
        answer: `Report the card immediately through verified support or fraud channels and review recent account activity.`
      }
    ],
    finalCta: {
      headline: "Use digital controls to help monitor card activity.",
      description: `Explore alerts, card management, and reporting workflows designed to support account protection.`,
      primaryCta: "Explore Card Controls",
      secondaryCta: "Report Card Issue"
    },
    disclosure: `Card controls are subject to card eligibility, network rules, transaction timing, service availability, and digital banking terms. Controls do not eliminate fraud risk.`
  },
  {
    slug: "digital-banking/security-alerts",
    category: "Digital Banking",
    title: "Security Alerts",
    seoTitle: "Security Alerts | Aster Bank",
    seoDescription: `Security alert content for account notifications, transaction alerts, login alerts, fraud monitoring, identity protection, and suspicious activity reporting.`,
    eyebrow: "Security Alerts",
    headline: "Alerts designed to help customers recognize important account activity.",
    description: `Aster Bank security alerts are designed to help eligible customers monitor account events, card activity, login changes, suspicious transactions, and important service notifications.`,
    primaryCta: "Set Up Alerts",
    secondaryCta: "Visit Security Center",
    trustNote: `Alerts are subject to enrollment, delivery settings, contact accuracy, service availability, and network or carrier limitations.`,
    sections: [
      {
        title: "Account awareness through timely notifications",
        description: `Security and account alerts can help customers respond quickly to activity that may require attention.`,
        items: [
          {
            title: "Transaction alerts",
            description: `Receive notifications for eligible card, account, or payment activity based on alert settings.`
          },
          {
            title: "Login and profile alerts",
            description: `Monitor important changes such as login events, password updates, or contact changes where available.`
          },
          {
            title: "Fraud and security notices",
            description: `Receive security-related messages when activity requires review or action through verified channels.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Earlier awareness",
        description: `Alerts can help customers notice unusual activity and respond more quickly.`
      },
      {
        title: "Custom monitoring",
        description: `Configure available alerts based on account preferences and service capabilities.`
      },
      {
        title: "Security support",
        description: `Connect suspicious alerts to fraud reporting and verified support channels.`
      }
    ],
    eligibility: {
      title: "Alert setup requirements",
      description: `Security alerts require eligible accounts, digital banking enrollment, accurate contact information, and notification preferences.`,
      items: [
        "Eligible account or card",
        "Digital banking enrollment",
        "Current phone or email information",
        "Alert preference setup",
        "Carrier and delivery availability"
      ]
    },
    faqs: [
      {
        question: "Will alerts always arrive instantly?",
        answer: `No. Alert timing depends on systems, carrier networks, internet access, delivery settings, and service availability.`
      },
      {
        question: "What should I do after a suspicious alert?",
        answer: `Do not share credentials or one-time codes. Review account activity and contact support through verified channels if something appears suspicious.`
      }
    ],
    finalCta: {
      headline: "Use alerts as part of your account protection routine.",
      description: `Set up eligible alerts and review the Security Center for guidance on fraud prevention and suspicious activity reporting.`,
      primaryCta: "Set Up Alerts",
      secondaryCta: "Visit Security Center"
    },
    disclosure: `Alerts are informational and may be delayed or unavailable. Customers remain responsible for monitoring account activity and reporting suspicious activity promptly.`
  }
];
