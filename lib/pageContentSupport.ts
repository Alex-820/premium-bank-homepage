import type { BankPage } from "./pageContent";

export const supportBankPages: BankPage[] = [
  {
    slug: "support/help-center",
    category: "Support",
    title: "Help Center",
    seoTitle: "Banking Help Center | Aster Bank",
    seoDescription: `Help center resources for account questions, digital banking support, cards, payments, loans, business banking, and security guidance.`,
    eyebrow: "Help Center",
    headline: "Find guidance for common banking questions and service needs.",
    description: `The Aster Bank Help Center is designed to help customers find clear information about accounts, digital banking, cards, payments, lending, business services, and security support.`,
    primaryCta: "Contact Support",
    secondaryCta: "Visit Security Center",
    trustNote: `For sensitive account requests, customers should use verified support channels and complete required identity verification.`,
    sections: [
      {
        title: "Support resources by topic",
        description: `Find answers and service paths for common banking needs while keeping account protection in focus.`,
        items: [
          {
            title: "Account help",
            description: `Review guidance for checking, savings, statements, profile updates, account access, and service requests.`
          },
          {
            title: "Digital banking support",
            description: `Find information about online banking, mobile access, transfers, bill pay, alerts, and card controls.`
          },
          {
            title: "Security and fraud help",
            description: `Access guidance for suspicious activity, scams, account protection, and fraud reporting.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Clear navigation",
        description: `Find the right support topic before contacting a service team.`
      },
      {
        title: "Security-aware guidance",
        description: `Review safe ways to handle account questions, fraud concerns, and identity verification.`
      },
      {
        title: "Service preparation",
        description: `Understand what information may be needed before contacting support.`
      }
    ],
    eligibility: {
      title: "Support verification",
      description: `Some support requests require customer verification before account details or sensitive actions can be discussed.`,
      items: [
        "Verified customer identity",
        "Eligible account or service relationship",
        "Secure communication channel",
        "Additional documentation where required"
      ]
    },
    faqs: [
      {
        question: "Can the Help Center replace customer support?",
        answer: `The Help Center provides general guidance. Sensitive or account-specific issues may require verified customer support.`
      },
      {
        question: "Should I share passwords with support?",
        answer: `No. Do not share passwords, full security codes, or one-time verification codes with anyone.`
      }
    ],
    finalCta: {
      headline: "Find the right support path for your banking need.",
      description: `Use the Help Center to review guidance, prepare information, and contact verified support when needed.`,
      primaryCta: "Contact Support",
      secondaryCta: "Visit Security Center"
    },
    disclosure: `Help Center information is general and may not address every account situation. Account-specific support requires verification and may be subject to bank policies.`
  },
  {
    slug: "support/contact",
    category: "Support",
    title: "Contact Support",
    seoTitle: "Contact Aster Bank Support | Aster Bank",
    seoDescription: `Contact support for personal banking, business banking, cards, lending, digital banking, security concerns, and appointment requests.`,
    eyebrow: "Contact Support",
    headline: "Reach the right support team through verified service channels.",
    description: `Aster Bank contact support is structured to help customers connect with the appropriate service path for account questions, digital banking support, cards, lending, business banking, wealth, and security concerns.`,
    primaryCta: "Contact Support",
    secondaryCta: "Schedule Appointment",
    trustNote: `Use only verified bank contact channels. Do not share passwords, full card details, or one-time passcodes through unsolicited calls, emails, or messages.`,
    sections: [
      {
        title: "Service channels for different needs",
        description: `Support requests should route through secure channels based on urgency, account type, and sensitivity of the request.`,
        items: [
          {
            title: "Account support",
            description: `Get help with balances, statements, profile updates, account access, and general service questions.`
          },
          {
            title: "Card and digital banking help",
            description: `Request help for card controls, login issues, online banking, mobile access, alerts, and payments.`
          },
          {
            title: "Security concerns",
            description: `Report suspicious messages, unauthorized activity, lost cards, or fraud concerns through verified channels.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Directed support",
        description: `Route questions to the appropriate team for faster and more accurate service handling.`
      },
      {
        title: "Verified communication",
        description: `Use official channels to reduce the risk of impersonation or account compromise.`
      },
      {
        title: "Appointment options",
        description: `Schedule conversations for more complex banking, lending, business, or wealth needs where available.`
      }
    ],
    eligibility: {
      title: "Information to prepare",
      description: `Support may require information that helps verify identity and understand the service request.`,
      items: [
        "Name and verified contact information",
        "Account or service type",
        "Brief description of issue",
        "Documentation where required",
        "Secure verification for sensitive requests"
      ]
    },
    faqs: [
      {
        question: "Can support discuss my account without verification?",
        answer: `No. Sensitive account details or changes require identity verification through approved processes.`
      },
      {
        question: "What should I do for suspected fraud?",
        answer: `Use the report fraud channel immediately and avoid sharing credentials or verification codes.`
      }
    ],
    finalCta: {
      headline: "Contact support through a verified channel.",
      description: `Get help with account questions, digital banking, cards, lending, business services, and security concerns.`,
      primaryCta: "Contact Support",
      secondaryCta: "Report Fraud"
    },
    disclosure: `Support availability, response times, and service options may vary. Sensitive requests require verification and may be subject to review.`
  },
  {
    slug: "support/locations",
    category: "Support",
    title: "Locations",
    seoTitle: "Branch and ATM Locations | Aster Bank",
    seoDescription: `Location support for branch access, ATM information, appointment scheduling, service availability, and regional banking assistance.`,
    eyebrow: "Locations",
    headline: "Find branch, ATM, and appointment options where available.",
    description: `Aster Bank location resources are designed to help customers find service points, branch information, ATM access, appointment options, and location-specific support details.`,
    primaryCta: "Find a Location",
    secondaryCta: "Schedule Appointment",
    trustNote: `Branch, ATM, and appointment availability may vary by market, location, business hours, service type, and operational status.`,
    sections: [
      {
        title: "In-person and self-service access",
        description: `Location resources can support customers who need branch service, ATM access, or appointment-based assistance.`,
        items: [
          {
            title: "Branch information",
            description: `Review location details, hours, service availability, and appointment options where available.`
          },
          {
            title: "ATM access",
            description: `Find ATM access information for cash withdrawals, balance inquiries, deposits where available, and service limitations.`
          },
          {
            title: "Appointment support",
            description: `Schedule time for account, lending, business banking, or wealth conversations where appointment services are offered.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Service planning",
        description: `Check location details before visiting to confirm hours and available services.`
      },
      {
        title: "Appointment coordination",
        description: `Plan more complex banking conversations with a scheduled visit where available.`
      },
      {
        title: "ATM convenience",
        description: `Access supported ATM services subject to location, network, and account eligibility.`
      }
    ],
    eligibility: {
      title: "Location service considerations",
      description: `Some services may require appointment scheduling, identification, account verification, or specific documentation.`,
      items: [
        "Valid identification where required",
        "Account verification for sensitive service",
        "Appointment confirmation where applicable",
        "Required documentation for specialized requests"
      ]
    },
    faqs: [
      {
        question: "Are all services available at every location?",
        answer: `No. Service availability may vary by branch, market, staffing, appointment type, and operational status.`
      },
      {
        question: "Can I visit without an appointment?",
        answer: `Some services may support walk-ins, while lending, business, or wealth conversations may require or benefit from an appointment.`
      }
    ],
    finalCta: {
      headline: "Plan your next branch or ATM visit.",
      description: `Review location details, service availability, and appointment options before visiting.`,
      primaryCta: "Find a Location",
      secondaryCta: "Schedule Appointment"
    },
    disclosure: `Location information, hours, ATM access, and available services are subject to change and should be confirmed through official bank channels.`
  },
  {
    slug: "support/security-center",
    category: "Support",
    title: "Security Center",
    seoTitle: "Security Center | Aster Bank",
    seoDescription: `Security Center resources for fraud awareness, account protection, scams, identity protection, secure digital banking, and suspicious activity reporting.`,
    eyebrow: "Security Center",
    headline: "Security guidance to help protect accounts and information.",
    description: `Aster Bank Security Center resources are designed to help customers recognize fraud, strengthen account access, protect credentials, use alerts, and report suspicious activity through verified channels.`,
    primaryCta: "Report Suspicious Activity",
    secondaryCta: "Review Security Tips",
    trustNote: `Aster Bank will never ask for your password, full security code, or one-time verification code through unsolicited messages.`,
    sections: [
      {
        title: "Protection resources and reporting guidance",
        description: `Security education helps customers understand threats and respond carefully to suspicious messages, transactions, or account events.`,
        items: [
          {
            title: "Fraud awareness",
            description: `Learn common warning signs of phishing, impersonation, payment scams, and credential theft.`
          },
          {
            title: "Secure digital banking",
            description: `Use strong credentials, multifactor authentication where available, alerts, and secure devices.`
          },
          {
            title: "Suspicious activity reporting",
            description: `Report unauthorized transactions, suspicious messages, lost cards, or account concerns through verified support channels.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Better threat recognition",
        description: `Understand common scam patterns before responding to suspicious requests.`
      },
      {
        title: "Account monitoring",
        description: `Use alerts and regular account review to notice unusual activity faster.`
      },
      {
        title: "Verified reporting",
        description: `Route suspected fraud through official bank channels for review and support.`
      }
    ],
    eligibility: {
      title: "Security best practices",
      description: `Customers should maintain strong account habits and contact information to support account protection.`,
      items: [
        "Use unique passwords",
        "Enable multifactor authentication where available",
        "Keep contact information current",
        "Review account activity regularly",
        "Report suspicious activity promptly"
      ]
    },
    faqs: [
      {
        question: "Should I share a one-time code with someone claiming to be the bank?",
        answer: `No. Do not share one-time codes, passwords, or full security details with anyone who contacts you unexpectedly.`
      },
      {
        question: "What should I do if I clicked a suspicious link?",
        answer: `Stop interacting with the message, do not enter credentials, review account activity, and contact support through verified channels.`
      }
    ],
    finalCta: {
      headline: "Take action when activity appears suspicious.",
      description: `Review security guidance and report suspicious activity through official support channels.`,
      primaryCta: "Report Fraud",
      secondaryCta: "Contact Support"
    },
    disclosure: `Security guidance is educational and does not eliminate fraud risk. Customers are responsible for safeguarding credentials and reporting suspicious activity promptly.`
  },
  {
    slug: "support/report-fraud",
    category: "Support",
    title: "Report Fraud",
    seoTitle: "Report Fraud and Suspicious Activity | Aster Bank",
    seoDescription: `Fraud reporting guidance for unauthorized transactions, suspicious messages, lost cards, identity concerns, account compromise, and verified support channels.`,
    eyebrow: "Report Fraud",
    headline: "Report suspicious activity through verified bank channels.",
    description: `Aster Bank fraud reporting is designed to help customers respond to unauthorized transactions, suspicious messages, lost or stolen cards, identity concerns, and possible account compromise.`,
    primaryCta: "Report Fraud",
    secondaryCta: "Visit Security Center",
    trustNote: `If you suspect fraud, stop communication with the suspected party and do not share passwords, card details, or one-time verification codes.`,
    sections: [
      {
        title: "When to report suspicious activity",
        description: `Prompt reporting helps support review, account protection actions, and next steps when suspicious activity appears.`,
        items: [
          {
            title: "Unauthorized transactions",
            description: `Report transactions, withdrawals, transfers, or card activity you do not recognize.`
          },
          {
            title: "Suspicious messages",
            description: `Report emails, texts, calls, or websites that impersonate the bank or ask for sensitive information.`
          },
          {
            title: "Lost or stolen access",
            description: `Report lost cards, compromised credentials, stolen devices, or account access concerns.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Faster account review",
        description: `Fraud reports can help support teams review activity and recommend protective actions.`
      },
      {
        title: "Credential protection",
        description: `Secure reporting helps reduce the risk of sharing information with impersonators.`
      },
      {
        title: "Clear next steps",
        description: `Customers can be guided toward card replacement, password changes, account review, or other protective actions.`
      }
    ],
    eligibility: {
      title: "Information to provide",
      description: `Fraud reports may require customer verification and details about the suspicious activity.`,
      items: [
        "Verified customer identity",
        "Date and type of suspicious activity",
        "Transaction or message details where available",
        "Affected card, account, or digital channel",
        "Any screenshots or documents where appropriate"
      ]
    },
    faqs: [
      {
        question: "Should I call back a number from a suspicious message?",
        answer: `No. Use verified contact information from official bank channels instead of numbers or links in suspicious messages.`
      },
      {
        question: "Can reporting fraud stop all losses?",
        answer: `Reporting helps initiate review and protective actions, but outcomes depend on timing, facts, applicable rules, and account terms.`
      }
    ],
    finalCta: {
      headline: "Report suspicious activity as soon as possible.",
      description: `Use verified bank channels to report unauthorized activity, suspicious messages, lost cards, or account access concerns.`,
      primaryCta: "Report Fraud",
      secondaryCta: "Visit Security Center"
    },
    disclosure: `Fraud reporting outcomes depend on account terms, timing, facts, network rules, and applicable law. This content is informational and not a guarantee of reimbursement.`
  },
  {
    slug: "support/schedule-appointment",
    category: "Support",
    title: "Schedule an Appointment",
    seoTitle: "Schedule a Banking Appointment | Aster Bank",
    seoDescription: `Schedule appointment content for personal banking, business banking, lending, wealth, account support, and service consultations.`,
    eyebrow: "Appointments",
    headline: "Schedule time for banking conversations that need more attention.",
    description: `Aster Bank appointment support is designed for customers who need more detailed conversations about accounts, lending, business banking, wealth services, digital support, or service needs.`,
    primaryCta: "Schedule Appointment",
    secondaryCta: "Contact Support",
    trustNote: `Appointments may be subject to availability, customer verification, service type, location, and required documentation.`,
    sections: [
      {
        title: "Appointment options for specialized needs",
        description: `Scheduling can help customers prepare for conversations that require more time, documentation, or specialist support.`,
        items: [
          {
            title: "Personal banking appointments",
            description: `Discuss account opening, checking, savings, digital banking, cards, or general service needs.`
          },
          {
            title: "Business banking appointments",
            description: `Review business accounts, treasury needs, merchant services, lending, or commercial support.`
          },
          {
            title: "Wealth and lending consultations",
            description: `Schedule planning, private banking, mortgage, credit, or investment-related discussions where available.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Prepared conversations",
        description: `Know what to bring and what topic the appointment will cover before meeting.`
      },
      {
        title: "Specialist routing",
        description: `Route more complex requests to the appropriate banking, lending, business, or wealth team.`
      },
      {
        title: "Better service experience",
        description: `Reduce uncertainty by scheduling time for important financial conversations.`
      }
    ],
    eligibility: {
      title: "Appointment preparation",
      description: `Some appointments may require identification, account information, business documents, financial documents, or prior verification.`,
      items: [
        "Valid identification where required",
        "Account or service details",
        "Business documents where applicable",
        "Financial documents for lending or wealth conversations",
        "Verified contact information"
      ]
    },
    faqs: [
      {
        question: "Can every service be handled by appointment?",
        answer: `No. Some services may require online workflows, secure messaging, branch visits, or specialist review beyond the appointment.`
      },
      {
        question: "What should I bring?",
        answer: `Bring identification and any relevant account, business, lending, or financial documents related to the appointment topic.`
      }
    ],
    finalCta: {
      headline: "Schedule a conversation with the right banking team.",
      description: `Plan your appointment around account needs, business services, lending questions, or wealth planning conversations.`,
      primaryCta: "Schedule Appointment",
      secondaryCta: "Contact Support"
    },
    disclosure: `Appointments are subject to availability, verification, service type, location, documentation, and applicable bank policies.`
  }
];
