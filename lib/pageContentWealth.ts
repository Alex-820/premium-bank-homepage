import type { BankPage } from "./pageContent";

export const wealthBankPages: BankPage[] = [
  {
    slug: "wealth/private-banking",
    category: "Wealth",
    title: "Private Banking",
    seoTitle: "Private Banking Services | Aster Bank",
    seoDescription: `Private banking services designed for eligible clients with complex liquidity, credit, banking, and wealth planning needs.`,
    eyebrow: "Private Banking",
    headline: "Private banking for complex financial lives.",
    description: `Aster Bank private banking is designed for eligible clients seeking a coordinated relationship across deposits, liquidity, credit, wealth planning, and advisory-led financial support.`,
    primaryCta: "Request Wealth Consultation",
    secondaryCta: "Explore Wealth Services",
    trustNote: `Private banking services are subject to client eligibility, relationship review, applicable agreements, disclosures, and approval.`,
    sections: [
      {
        title: "Coordinated banking and wealth support",
        description: `Private banking brings banking, credit, liquidity, and planning conversations into a more personalized relationship structure.`,
        items: [
          {
            title: "Liquidity management",
            description: `Support cash, deposits, reserves, and short-term planning needs through relationship-based banking.`
          },
          {
            title: "Credit access",
            description: `Explore credit options subject to underwriting, collateral review where applicable, and approval.`
          },
          {
            title: "Planning coordination",
            description: `Coordinate banking decisions with broader financial, investment, family, and legacy objectives.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Relationship-led service",
        description: `Work with a banking relationship structure designed for more complex financial needs.`
      },
      {
        title: "Integrated view",
        description: `Coordinate deposits, credit, investments, planning, and service needs in one relationship.`
      },
      {
        title: "Confidential support",
        description: `Access service workflows designed for sensitive financial matters and qualified client needs.`
      }
    ],
    eligibility: {
      title: "Private banking eligibility",
      description: `Private banking may be limited to eligible clients based on relationship size, financial profile, service needs, and review.`,
      items: [
        "Client profile review",
        "Relationship eligibility assessment",
        "Financial objective discussion",
        "Applicable disclosures and agreements",
        "Service approval"
      ]
    },
    faqs: [
      {
        question: "Who is private banking for?",
        answer: `Private banking is generally designed for eligible clients with more complex banking, liquidity, credit, investment, or planning needs.`
      },
      {
        question: "Does private banking include investment advice?",
        answer: `Investment advisory services may be available through appropriate advisory relationships, subject to eligibility, disclosures, and agreements.`
      }
    ],
    finalCta: {
      headline: "Begin a private banking conversation.",
      description: `Explore whether a private banking relationship aligns with your financial needs, planning goals, and service expectations.`,
      primaryCta: "Request Wealth Consultation",
      secondaryCta: "Contact Support"
    },
    disclosure: `Private banking services are subject to eligibility, relationship review, fees, product terms, credit approval where applicable, and legal or compliance review.`
  },
  {
    slug: "wealth/financial-advisors",
    category: "Wealth",
    title: "Financial Advisors",
    seoTitle: "Financial Advisor Services | Aster Bank",
    seoDescription: `Financial advisor services for eligible clients seeking planning support, investment guidance, retirement strategy, and long-term financial organization.`,
    eyebrow: "Financial Advisors",
    headline: "Advisory support for long-term financial decisions.",
    description: `Aster Bank advisor-led services are designed to help eligible clients organize financial priorities, assess goals, understand risk, and coordinate planning decisions over time.`,
    primaryCta: "Speak With an Advisor",
    secondaryCta: "Explore Wealth Planning",
    trustNote: `Advisory services are subject to eligibility, suitability review, investment disclosures, advisory agreements, and market risk.`,
    sections: [
      {
        title: "Guidance for complex decisions",
        description: `Advisor relationships can support planning around investments, retirement, liquidity, risk tolerance, and long-term financial priorities.`,
        items: [
          {
            title: "Goal planning",
            description: `Define objectives, time horizons, liquidity needs, and risk considerations.`
          },
          {
            title: "Investment guidance",
            description: `Review investment approaches based on profile, suitability, and applicable advisory terms.`
          },
          {
            title: "Ongoing review",
            description: `Revisit plans as personal, family, business, and market conditions evolve.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Personalized planning",
        description: `Receive guidance aligned with financial objectives, risk tolerance, and time horizon.`
      },
      {
        title: "Risk-aware decisions",
        description: `Understand investment and planning tradeoffs before making important decisions.`
      },
      {
        title: "Coordinated relationship",
        description: `Connect advisory conversations with banking, lending, retirement, and wealth planning needs.`
      }
    ],
    eligibility: {
      title: "Advisor relationship requirements",
      description: `Advisor services may require an investment profile, account eligibility, disclosures, and advisory agreement acceptance.`,
      items: [
        "Investment profile",
        "Risk tolerance review",
        "Suitability and objective assessment",
        "Advisory disclosures",
        "Advisory agreement where applicable"
      ]
    },
    faqs: [
      {
        question: "Can an advisor guarantee returns?",
        answer: `No. Investment and advisory services involve risk, including possible loss of principal. No advisor can guarantee performance.`
      },
      {
        question: "What will an advisor review?",
        answer: `An advisor may review goals, assets, liabilities, time horizon, risk tolerance, liquidity needs, and planning priorities.`
      }
    ],
    finalCta: {
      headline: "Talk with an advisor about your financial priorities.",
      description: `Begin a planning conversation designed around goals, risk, time horizon, and long-term financial organization.`,
      primaryCta: "Speak With an Advisor",
      secondaryCta: "Explore Portfolio Management"
    },
    disclosure: `Advisory services involve risk and are subject to eligibility, suitability review, disclosures, agreements, and market conditions.`
  },
  {
    slug: "wealth/portfolio-management",
    category: "Wealth",
    title: "Portfolio Management",
    seoTitle: "Portfolio Management Services | Aster Bank",
    seoDescription: `Portfolio management services focused on objectives, risk tolerance, asset allocation, diversification, liquidity, and long-term planning.`,
    eyebrow: "Portfolio Management",
    headline: "Portfolio management shaped by objectives, risk, and discipline.",
    description: `Aster Bank portfolio management content is designed for eligible clients seeking structured investment oversight aligned with goals, risk tolerance, time horizon, and liquidity needs.`,
    primaryCta: "Explore Portfolio Management",
    secondaryCta: "Speak With an Advisor",
    trustNote: `Portfolio management involves investment risk, including possible loss of principal, and is subject to eligibility, disclosures, and advisory agreements.`,
    sections: [
      {
        title: "Disciplined investment oversight",
        description: `Portfolio management focuses on aligning investment structure with objectives, risk profile, time horizon, and market conditions.`,
        items: [
          {
            title: "Asset allocation",
            description: `Review allocation across investment categories based on goals and risk tolerance.`
          },
          {
            title: "Diversification",
            description: `Use diversification principles to manage concentration risk, while recognizing diversification does not guarantee profit or prevent loss.`
          },
          {
            title: "Ongoing monitoring",
            description: `Review portfolio positioning as goals, markets, liquidity needs, and personal circumstances change.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Objective-based structure",
        description: `Build portfolios around client goals, risk tolerance, and time horizon.`
      },
      {
        title: "Professional oversight",
        description: `Support decision-making through defined investment processes and periodic review.`
      },
      {
        title: "Risk discipline",
        description: `Evaluate suitability, diversification, liquidity, and market exposure before decisions are made.`
      }
    ],
    eligibility: {
      title: "Portfolio management eligibility",
      description: `Managed portfolio services may require account minimums, client profile review, investment objectives, and advisory agreements.`,
      items: [
        "Client profile and objective review",
        "Risk tolerance assessment",
        "Investment account eligibility",
        "Advisory disclosures",
        "Managed account agreement"
      ]
    },
    faqs: [
      {
        question: "Can portfolio management prevent losses?",
        answer: `No. Portfolios are subject to market risk and may lose value. Diversification does not guarantee a profit or prevent loss.`
      },
      {
        question: "How often are portfolios reviewed?",
        answer: `Review frequency depends on service model, account type, market conditions, client needs, and advisory relationship terms.`
      }
    ],
    finalCta: {
      headline: "Review your investment strategy with portfolio discipline.",
      description: `Explore portfolio management designed around risk tolerance, objectives, time horizon, and long-term planning.`,
      primaryCta: "Explore Portfolio Management",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Investment management involves risk, including possible loss of principal. Availability depends on eligibility, advisory agreements, account type, and regulatory review.`
  },
  {
    slug: "wealth/retirement-planning",
    category: "Wealth",
    title: "Retirement Planning",
    seoTitle: "Retirement Planning Services | Aster Bank",
    seoDescription: `Retirement planning services for long-term goals, income needs, investment strategy, account review, and risk-aware financial planning.`,
    eyebrow: "Retirement Planning",
    headline: "Retirement planning designed for long-term financial clarity.",
    description: `Aster Bank retirement planning is structured to help eligible clients organize goals, estimate future income needs, review account options, and align investment decisions with time horizon and risk tolerance.`,
    primaryCta: "Plan for Retirement",
    secondaryCta: "Speak With an Advisor",
    trustNote: `Retirement planning does not guarantee outcomes and is subject to market risk, tax considerations, eligibility, and applicable disclosures.`,
    sections: [
      {
        title: "Planning for future income needs",
        description: `Retirement planning helps clients consider savings, investments, income sources, spending needs, and long-term financial risks.`,
        items: [
          {
            title: "Retirement goals",
            description: `Define retirement timing, lifestyle expectations, spending needs, and long-term priorities.`
          },
          {
            title: "Income planning",
            description: `Review potential income sources, withdrawal strategies, liquidity needs, and market risks.`
          },
          {
            title: "Account review",
            description: `Evaluate retirement account structures, contribution considerations, and investment alignment.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Long-term planning clarity",
        description: `Create a clearer picture of retirement goals, resources, and potential planning gaps.`
      },
      {
        title: "Risk and time horizon alignment",
        description: `Review investment strategy in the context of age, time horizon, liquidity, and tolerance for volatility.`
      },
      {
        title: "Integrated advice",
        description: `Coordinate retirement planning with investments, banking, wealth, estate, and tax-aware considerations.`
      }
    ],
    eligibility: {
      title: "Planning requirements",
      description: `Retirement planning may require a client profile, financial information, account details, investment objectives, and advisory disclosures.`,
      items: [
        "Financial objective review",
        "Retirement timeline estimate",
        "Income and asset information",
        "Risk tolerance assessment",
        "Applicable advisory agreement"
      ]
    },
    faqs: [
      {
        question: "Does retirement planning guarantee income?",
        answer: `No. Planning tools and projections are estimates and do not guarantee investment results, income, or future account values.`
      },
      {
        question: "Can tax matters be included?",
        answer: `Tax-aware planning may be discussed, but clients should consult qualified tax professionals for tax advice.`
      }
    ],
    finalCta: {
      headline: "Plan retirement with discipline and realistic assumptions.",
      description: `Review goals, income needs, account options, and risk considerations with a planning-focused relationship.`,
      primaryCta: "Plan for Retirement",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Retirement planning is informational and involves assumptions that may not occur. Investment products involve risk and may lose value. Tax and legal matters should be reviewed with qualified professionals.`
  },
  {
    slug: "wealth/trust-estate",
    category: "Wealth",
    title: "Trust and Estate Services",
    seoTitle: "Trust and Estate Planning Support | Aster Bank",
    seoDescription: `Trust and estate support content for legacy planning, family wealth coordination, fiduciary considerations, and professional review.`,
    eyebrow: "Trust and Estate",
    headline: "Planning support for family wealth, legacy, and continuity.",
    description: `Aster Bank trust and estate content is designed to support conversations around legacy planning, family wealth coordination, fiduciary needs, and continuity across generations.`,
    primaryCta: "Explore Trust Services",
    secondaryCta: "Speak With an Advisor",
    trustNote: `Trust and estate services require legal documentation, fiduciary review, eligibility, and coordination with qualified legal and tax professionals.`,
    sections: [
      {
        title: "Legacy planning coordination",
        description: `Trust and estate planning can help organize how assets, responsibilities, and intentions are addressed over time.`,
        items: [
          {
            title: "Family wealth planning",
            description: `Coordinate family objectives, beneficiary considerations, and long-term financial priorities.`
          },
          {
            title: "Fiduciary support placeholders",
            description: `Trust administration and fiduciary services require legal authority, documentation, and approval.`
          },
          {
            title: "Professional coordination",
            description: `Work alongside legal, tax, and advisory professionals for estate-related decisions.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Continuity planning",
        description: `Support orderly planning around family needs, assets, and long-term intentions.`
      },
      {
        title: "Coordination with professionals",
        description: `Align banking and wealth conversations with legal and tax guidance.`
      },
      {
        title: "Legacy focus",
        description: `Consider beneficiary needs, family priorities, and long-term stewardship.`
      }
    ],
    eligibility: {
      title: "Trust and estate requirements",
      description: `Trust and estate services may require legal documents, fiduciary authority, account review, beneficiary details, and professional consultation.`,
      items: [
        "Legal document review",
        "Fiduciary or trustee authority where applicable",
        "Client and beneficiary information",
        "Account and asset review",
        "Legal and tax professional coordination"
      ]
    },
    faqs: [
      {
        question: "Does Aster Bank provide legal advice?",
        answer: `No. Trust and estate information is not legal advice. Clients should work with qualified legal professionals.`
      },
      {
        question: "Can trust services manage assets?",
        answer: `Trust or fiduciary services may be available subject to eligibility, documentation, legal authority, and service agreements.`
      }
    ],
    finalCta: {
      headline: "Coordinate legacy planning with experienced support.",
      description: `Explore trust and estate conversations designed around family priorities, continuity, and professional review.`,
      primaryCta: "Explore Trust Services",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Trust and estate services are subject to eligibility, documentation, legal authority, fees, agreements, and review. This content is not legal or tax advice.`
  },
  {
    slug: "wealth/tax-aware-planning",
    category: "Wealth",
    title: "Tax-Aware Planning",
    seoTitle: "Tax-Aware Wealth Planning | Aster Bank",
    seoDescription: `Tax-aware wealth planning content for investment decisions, retirement planning, charitable strategies, estate considerations, and professional coordination.`,
    eyebrow: "Tax-Aware Planning",
    headline: "Tax-aware planning for more coordinated financial decisions.",
    description: `Aster Bank tax-aware planning content is designed to help eligible clients consider how investment, retirement, charitable, estate, and liquidity decisions may interact with tax considerations.`,
    primaryCta: "Explore Tax-Aware Planning",
    secondaryCta: "Speak With an Advisor",
    trustNote: `Aster Bank does not provide tax advice through this content. Clients should consult qualified tax professionals before making tax-related decisions.`,
    sections: [
      {
        title: "Planning with tax context",
        description: `Tax-aware planning helps clients ask better questions and coordinate decisions with qualified professionals.`,
        items: [
          {
            title: "Investment tax considerations",
            description: `Review how asset location, gains, income, and timing may affect planning discussions.`
          },
          {
            title: "Retirement distribution planning",
            description: `Consider how withdrawals, account types, and timing may interact with tax planning.`
          },
          {
            title: "Estate and charitable strategies",
            description: `Coordinate legacy and charitable intentions with legal and tax advisors.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "More coordinated decisions",
        description: `Consider tax context before major investment, liquidity, or estate decisions.`
      },
      {
        title: "Professional collaboration",
        description: `Work with tax and legal professionals alongside banking and wealth advisors.`
      },
      {
        title: "Long-term planning focus",
        description: `Align tax-aware conversations with objectives, time horizon, and family priorities.`
      }
    ],
    eligibility: {
      title: "Planning considerations",
      description: `Tax-aware planning may require client financial information, investment details, retirement accounts, estate intentions, and professional coordination.`,
      items: [
        "Financial profile review",
        "Investment account information",
        "Retirement and income planning details",
        "Estate or charitable planning goals",
        "Tax professional involvement"
      ]
    },
    faqs: [
      {
        question: "Is this tax advice?",
        answer: `No. This content is informational only. Clients should consult qualified tax professionals for tax advice.`
      },
      {
        question: "Can tax-aware planning affect investments?",
        answer: `Tax considerations may inform investment decisions, but investments still involve risk and should be reviewed for suitability.`
      }
    ],
    finalCta: {
      headline: "Bring tax context into wealth planning conversations.",
      description: `Coordinate investment, retirement, estate, and charitable planning with qualified professionals.`,
      primaryCta: "Explore Tax-Aware Planning",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Tax-aware planning content is informational and not tax advice. Clients should consult qualified tax, legal, and financial professionals before acting.`
  },
  {
    slug: "wealth/high-net-worth",
    category: "Wealth",
    title: "High-Net-Worth Wealth Management",
    seoTitle: "High-Net-Worth Wealth Management | Aster Bank",
    seoDescription: `High-net-worth wealth management for eligible clients with complex banking, investment, estate, tax-aware, family, and liquidity planning needs.`,
    eyebrow: "High-Net-Worth Wealth",
    headline: "Wealth management for significant complexity and long-term stewardship.",
    description: `Aster Bank high-net-worth wealth services are designed for eligible clients seeking coordinated support across banking, investments, credit, estate planning, family wealth, liquidity, and tax-aware strategy.`,
    primaryCta: "Request Wealth Consultation",
    secondaryCta: "Explore Private Banking",
    trustNote: `High-net-worth services are subject to eligibility, relationship review, investment disclosures, advisory agreements, and applicable product approvals.`,
    sections: [
      {
        title: "Coordinated wealth relationship",
        description: `Support complex financial lives through integrated banking, advisory, investment, and planning conversations.`,
        items: [
          {
            title: "Family wealth coordination",
            description: `Organize planning priorities across generations, beneficiaries, liquidity needs, and long-term goals.`
          },
          {
            title: "Integrated banking and credit",
            description: `Coordinate private banking, deposits, liquidity, and credit discussions subject to review and approval.`
          },
          {
            title: "Investment and legacy planning",
            description: `Align portfolio, estate, retirement, and tax-aware conversations with long-term objectives.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Institutional-level coordination",
        description: `Bring multiple financial disciplines into a relationship designed for complexity.`
      },
      {
        title: "Long-term stewardship",
        description: `Plan around continuity, family needs, liquidity, and legacy intentions.`
      },
      {
        title: "Relationship depth",
        description: `Support banking, investment, advisory, and planning needs through a coordinated service model.`
      }
    ],
    eligibility: {
      title: "Eligibility and review",
      description: `High-net-worth services may require relationship minimums, financial profile review, advisory suitability, and service agreement acceptance.`,
      items: [
        "Relationship eligibility review",
        "Financial profile and objective assessment",
        "Investment suitability review",
        "Applicable agreements and disclosures",
        "Legal and tax professional coordination where appropriate"
      ]
    },
    faqs: [
      {
        question: "Are services customized?",
        answer: `Eligible high-net-worth relationships may receive more tailored planning discussions based on profile, goals, and service eligibility.`
      },
      {
        question: "Are investment outcomes guaranteed?",
        answer: `No. Investment services involve risk, including possible loss of principal, and no strategy can guarantee results.`
      }
    ],
    finalCta: {
      headline: "Coordinate wealth with an institution-grade relationship.",
      description: `Explore high-net-worth services designed for complexity, continuity, and long-term stewardship.`,
      primaryCta: "Request Wealth Consultation",
      secondaryCta: "Explore Private Banking"
    },
    disclosure: `High-net-worth wealth services are subject to eligibility, relationship review, account agreements, investment risk, legal and tax review, and applicable disclosures.`
  }
];
