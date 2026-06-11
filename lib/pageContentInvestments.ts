import type { BankPage } from "./pageContent";

export const investmentBankPages: BankPage[] = [
  {
    slug: "investments/accounts",
    category: "Investments",
    title: "Investment Accounts",
    seoTitle: "Investment Accounts | Aster Bank",
    seoDescription: `Investment account options designed for eligible clients seeking market access, long-term planning, portfolio organization, and risk-aware investing.`,
    eyebrow: "Investment Accounts",
    headline: "Investment accounts designed for planning, access, and risk awareness.",
    description: `Aster Bank investment accounts are structured to support eligible clients with account access, planning tools, investment education, and advisory or self-directed investment pathways where available.`,
    primaryCta: "Explore Investment Accounts",
    secondaryCta: "Review Risk Information",
    trustNote: `Investment products are not bank deposits, are not guaranteed by Aster Bank, may lose value, and are subject to eligibility, disclosures, and market risk.`,
    sections: [
      {
        title: "Account structures for investment goals",
        description: `Investment accounts can support taxable investing, long-term planning, advisory relationships, and portfolio organization based on client objectives.`,
        items: [
          {
            title: "Taxable investment accounts",
            description: `Support general investment activity with account structures subject to eligibility and applicable agreements.`
          },
          {
            title: "Advisory account placeholders",
            description: `Advisor-supported accounts require client profile review, suitability assessment, disclosures, and advisory agreements.`
          },
          {
            title: "Portfolio visibility",
            description: `Review holdings, activity, account values, and investment history where supported by licensed infrastructure.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Goal-based organization",
        description: `Align investment accounts with objectives, time horizon, liquidity needs, and risk tolerance.`
      },
      {
        title: "Account visibility",
        description: `Review eligible investment account activity, holdings, and performance reporting where available.`
      },
      {
        title: "Planning support",
        description: `Coordinate investment accounts with retirement, wealth, advisory, and banking relationships.`
      }
    ],
    eligibility: {
      title: "Investment account requirements",
      description: `Investment accounts generally require identity verification, tax certification, investment profile information, disclosures, and account agreement acceptance.`,
      items: [
        "Verified customer profile",
        "Tax certification placeholder",
        "Investment objective and risk profile",
        "Account agreement acceptance",
        "Eligibility and suitability review where required"
      ]
    },
    faqs: [
      {
        question: "Are investment accounts insured like bank deposits?",
        answer: `Investment products are not bank deposits, are not guaranteed by Aster Bank, may lose value, and may not be insured by any government agency.`
      },
      {
        question: "Can I open an investment account online?",
        answer: `Digital onboarding may be available for eligible clients, subject to verification, disclosures, account approval, and regulatory requirements.`
      }
    ],
    finalCta: {
      headline: "Open an investment relationship with risk clearly understood.",
      description: `Review account types, objectives, disclosures, and eligibility before beginning an investment account process.`,
      primaryCta: "Explore Investment Accounts",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Investment products involve risk, including possible loss of principal. Brokerage, custody, advisory, and securities trading require licensed provider infrastructure and approved disclosures.`
  },
  {
    slug: "investments/stocks-etfs",
    category: "Investments",
    title: "Stocks and ETFs",
    seoTitle: "Stocks and ETFs | Aster Bank",
    seoDescription: `Stocks and ETF investment content focused on market access, diversification, risk, volatility, and suitability considerations.`,
    eyebrow: "Stocks and ETFs",
    headline: "Market participation with clear risk and suitability considerations.",
    description: `Aster Bank stocks and ETFs content is designed to help eligible investors understand equity market access, diversification, volatility, investment objectives, and the risks of market exposure.`,
    primaryCta: "Review Investment Options",
    secondaryCta: "Review Risk Information",
    trustNote: `Stocks and ETFs fluctuate in value, may lose principal, and are subject to market, sector, liquidity, and investment risk.`,
    sections: [
      {
        title: "Equity and fund-based exposure",
        description: `Stocks and ETFs may provide market exposure, diversification opportunities, and long-term growth potential, but they also involve meaningful risk.`,
        items: [
          {
            title: "Individual stocks",
            description: `Ownership in individual companies can offer upside potential but may involve higher concentration and volatility risk.`
          },
          {
            title: "Exchange-traded funds",
            description: `ETFs may provide diversified exposure to indexes, sectors, strategies, or asset classes, subject to fund risks and expenses.`
          },
          {
            title: "Risk and allocation",
            description: `Equity exposure should be reviewed in the context of objectives, time horizon, liquidity needs, and tolerance for volatility.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Market access",
        description: `Participate in equity markets through individual securities or fund-based investment structures where available.`
      },
      {
        title: "Diversification potential",
        description: `ETFs may help diversify exposure, though diversification does not guarantee profit or prevent loss.`
      },
      {
        title: "Planning alignment",
        description: `Coordinate equity exposure with broader portfolio strategy, risk tolerance, and long-term goals.`
      }
    ],
    eligibility: {
      title: "Investment access requirements",
      description: `Stocks and ETF access requires an eligible investment account, disclosures, risk acknowledgment, and licensed trading or brokerage infrastructure.`,
      items: [
        "Eligible investment account",
        "Risk profile and investment objective",
        "Trading or advisory agreement",
        "Applicable fund and securities disclosures",
        "Suitability review where required"
      ]
    },
    faqs: [
      {
        question: "Can stocks and ETFs lose value?",
        answer: `Yes. Stocks and ETFs can decline in value, including during market stress, and investors may lose principal.`
      },
      {
        question: "Does diversification eliminate risk?",
        answer: `No. Diversification can help manage certain risks, but it does not guarantee returns or prevent losses.`
      }
    ],
    finalCta: {
      headline: "Review equity exposure with disciplined planning.",
      description: `Consider objectives, risks, time horizon, and portfolio allocation before investing in stocks or ETFs.`,
      primaryCta: "Review Investment Options",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Stocks and ETFs involve market risk, may lose value, and are not bank deposits or guaranteed by Aster Bank. Trading and custody require licensed provider infrastructure.`
  },
  {
    slug: "investments/bonds-treasury-bills",
    category: "Investments",
    title: "Bonds and Treasury Bills",
    seoTitle: "Bonds and Treasury Bills | Aster Bank",
    seoDescription: `Fixed income content for bonds, Treasury bills, income planning, interest rate risk, credit risk, maturity, and liquidity considerations.`,
    eyebrow: "Bonds and Treasury Bills",
    headline: "Fixed income investing with attention to income, maturity, and risk.",
    description: `Aster Bank fixed income content is designed to help eligible investors understand bonds, Treasury bills, income planning, maturity structure, interest rate risk, credit risk, and liquidity considerations.`,
    primaryCta: "Explore Fixed Income",
    secondaryCta: "Review Investment Risks",
    trustNote: `Bonds and Treasury bills involve risks including interest rate risk, inflation risk, liquidity risk, reinvestment risk, and credit risk where applicable.`,
    sections: [
      {
        title: "Income-oriented investment considerations",
        description: `Fixed income investments can support income and capital preservation goals, but they are not risk-free and must be reviewed in context.`,
        items: [
          {
            title: "Treasury bills",
            description: `Short-term U.S. government securities may support liquidity and income planning but still involve price, reinvestment, and rate considerations.`
          },
          {
            title: "Bonds",
            description: `Corporate, municipal, government, or agency bonds vary by issuer, maturity, credit quality, liquidity, and tax treatment.`
          },
          {
            title: "Maturity and yield",
            description: `Fixed income decisions should consider maturity dates, yield, duration, liquidity needs, and interest rate sensitivity.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Income planning",
        description: `Fixed income may support income objectives, cash flow planning, and portfolio diversification.`
      },
      {
        title: "Maturity structure",
        description: `Use maturity planning to align future cash needs with investment timelines.`
      },
      {
        title: "Risk balance",
        description: `Evaluate fixed income alongside equities, cash, liquidity needs, and broader portfolio risk.`
      }
    ],
    eligibility: {
      title: "Fixed income access requirements",
      description: `Fixed income access requires an eligible investment account, disclosures, issuer or product information, and licensed brokerage or advisory infrastructure.`,
      items: [
        "Eligible investment account",
        "Fixed income risk acknowledgment",
        "Issuer and product disclosure review",
        "Trading or advisory agreement",
        "Suitability review where required"
      ]
    },
    faqs: [
      {
        question: "Are Treasury bills risk-free?",
        answer: `Treasury bills are backed by the U.S. government, but investors should still understand interest rate, liquidity, reinvestment, and opportunity-cost considerations.`
      },
      {
        question: "Can bonds lose value?",
        answer: `Yes. Bond prices can decline, especially when interest rates rise or issuer credit conditions change.`
      }
    ],
    finalCta: {
      headline: "Review fixed income within a broader investment plan.",
      description: `Explore income, maturity, liquidity, and risk considerations before adding bonds or Treasury bills to a portfolio.`,
      primaryCta: "Explore Fixed Income",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Fixed income investments involve risk and may lose value. Securities access requires licensed brokerage, custody, and approved disclosures. Tax treatment should be reviewed with qualified professionals.`
  },
  {
    slug: "investments/retirement-accounts",
    category: "Investments",
    title: "Retirement Accounts",
    seoTitle: "Retirement Investment Accounts | Aster Bank",
    seoDescription: `Retirement account content for long-term investing, tax-advantaged placeholders, contribution rules, planning goals, and risk-aware retirement strategy.`,
    eyebrow: "Retirement Accounts",
    headline: "Retirement accounts designed for long-term planning discipline.",
    description: `Aster Bank retirement account content is structured to help eligible clients consider long-term investment goals, contribution rules, tax treatment, time horizon, and retirement income planning.`,
    primaryCta: "Explore Retirement Accounts",
    secondaryCta: "Plan for Retirement",
    trustNote: `Retirement accounts and investment choices are subject to eligibility, contribution rules, tax considerations, market risk, and applicable account agreements.`,
    sections: [
      {
        title: "Account structures for retirement goals",
        description: `Retirement accounts can help organize long-term investing, but decisions should consider tax rules, time horizon, income needs, and market risk.`,
        items: [
          {
            title: "IRA placeholders",
            description: `Individual retirement account structures may be available subject to eligibility, contribution rules, and tax considerations.`
          },
          {
            title: "Employer plan rollover placeholders",
            description: `Rollover decisions require careful review of fees, investments, tax implications, and plan features.`
          },
          {
            title: "Retirement income planning",
            description: `Coordinate account choices with future income needs, withdrawal timing, and risk tolerance.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Long-term organization",
        description: `Structure retirement savings around time horizon, objectives, and future income needs.`
      },
      {
        title: "Planning alignment",
        description: `Coordinate retirement accounts with broader investment, tax-aware, estate, and liquidity planning.`
      },
      {
        title: "Investment flexibility",
        description: `Access investment options appropriate to account type, eligibility, and risk profile.`
      }
    ],
    eligibility: {
      title: "Retirement account requirements",
      description: `Retirement accounts may require eligibility verification, tax certification, contribution review, disclosures, and account agreement acceptance.`,
      items: [
        "Verified customer profile",
        "Tax certification placeholder",
        "Retirement account eligibility",
        "Contribution and rollover rule review",
        "Account agreement and disclosures"
      ]
    },
    faqs: [
      {
        question: "Are retirement account investments guaranteed?",
        answer: `No. Retirement investments involve market risk and may lose value. Tax treatment and account rules vary.`
      },
      {
        question: "Should I roll over an employer plan?",
        answer: `Rollover decisions are important and should be reviewed carefully with financial and tax professionals before acting.`
      }
    ],
    finalCta: {
      headline: "Plan retirement accounts with long-term discipline.",
      description: `Review retirement account structures, investment choices, and planning considerations before opening or transferring assets.`,
      primaryCta: "Explore Retirement Accounts",
      secondaryCta: "Speak With an Advisor"
    },
    disclosure: `Retirement investing involves risk. Tax rules, contribution limits, and rollover considerations should be reviewed with qualified tax and financial professionals.`
  },
  {
    slug: "investments/robo-advisor",
    category: "Investments",
    title: "Robo-Advisor",
    seoTitle: "Digital Robo-Advisor | Aster Bank",
    seoDescription: `Digital advisory content for automated portfolio guidance, risk questionnaire placeholders, model portfolios, rebalancing, and suitability review.`,
    eyebrow: "Digital Advisory",
    headline: "Digital advisory support with risk-based portfolio guidance.",
    description: `Aster Bank robo-advisor content is designed for eligible clients seeking digital investment guidance based on objectives, risk tolerance, time horizon, and model portfolio selection.`,
    primaryCta: "Explore Digital Advisory",
    secondaryCta: "Review Advisory Risks",
    trustNote: `Digital advisory services are subject to eligibility, risk questionnaire completion, advisory disclosures, model limitations, and market risk.`,
    sections: [
      {
        title: "Automated guidance with human-level seriousness",
        description: `Digital advisory tools can support portfolio recommendations, but they must be built on suitability, disclosure, and ongoing risk review.`,
        items: [
          {
            title: "Risk questionnaire",
            description: `Collect objectives, risk tolerance, time horizon, liquidity needs, and investment experience.`
          },
          {
            title: "Model portfolios",
            description: `Use model allocations subject to investment methodology, suitability, and disclosure review.`
          },
          {
            title: "Rebalancing placeholders",
            description: `Automated rebalancing may be available where supported by approved advisory infrastructure.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Structured digital guidance",
        description: `Support investment decisions through a rules-based advisory workflow.`
      },
      {
        title: "Lower-friction planning",
        description: `Provide eligible clients with digital access to portfolio guidance and account setup.`
      },
      {
        title: "Risk profile alignment",
        description: `Match model portfolios to client objectives, risk tolerance, and time horizon where appropriate.`
      }
    ],
    eligibility: {
      title: "Digital advisory requirements",
      description: `Digital advisory access requires an eligible profile, risk questionnaire, advisory disclosures, account agreement, and approved advisory infrastructure.`,
      items: [
        "Eligible client profile",
        "Completed risk questionnaire",
        "Investment objective review",
        "Digital advisory agreement",
        "Suitability and compliance review"
      ]
    },
    faqs: [
      {
        question: "Does a robo-advisor guarantee returns?",
        answer: `No. Digital advisory portfolios involve market risk and may lose value. No model can guarantee performance.`
      },
      {
        question: "Can I change my risk profile?",
        answer: `Risk profile updates may be available, but changes should reflect true objectives, time horizon, and tolerance for loss.`
      }
    ],
    finalCta: {
      headline: "Explore digital advisory with risk clearly defined.",
      description: `Review how digital advisory models, questionnaires, and portfolio guidance may support investment planning.`,
      primaryCta: "Explore Digital Advisory",
      secondaryCta: "Review Risk Information"
    },
    disclosure: `Digital advisory services involve investment risk and require licensed advisory infrastructure, disclosures, methodology review, and compliance approval before production use.`
  },
  {
    slug: "investments/human-advisors",
    category: "Investments",
    title: "Human Financial Advisors",
    seoTitle: "Human Financial Advisors | Aster Bank",
    seoDescription: `Human advisor investment support for planning, portfolio guidance, investment decisions, retirement strategy, and risk-aware advisory relationships.`,
    eyebrow: "Human Advisors",
    headline: "Advisor-led investment guidance for more complex decisions.",
    description: `Aster Bank human advisor content is designed for eligible clients who want a planning conversation around investments, retirement, portfolio structure, liquidity, and long-term financial objectives.`,
    primaryCta: "Speak With an Advisor",
    secondaryCta: "Explore Investments",
    trustNote: `Advisor-led services are subject to eligibility, suitability review, investment risk, advisory disclosures, and applicable agreements.`,
    sections: [
      {
        title: "Guidance with personal context",
        description: `Human advisors can help clients evaluate financial priorities, investment choices, risk tradeoffs, and long-term planning needs.`,
        items: [
          {
            title: "Personal planning discussion",
            description: `Review goals, time horizon, income needs, risk tolerance, and life events.`
          },
          {
            title: "Portfolio review",
            description: `Evaluate allocation, diversification, concentration risk, liquidity, and investment suitability.`
          },
          {
            title: "Retirement and wealth alignment",
            description: `Coordinate investment guidance with retirement, wealth, estate, and tax-aware planning conversations.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Personalized context",
        description: `Discuss investments in the context of broader financial life, not only account balances.`
      },
      {
        title: "Risk-aware guidance",
        description: `Understand volatility, suitability, concentration, liquidity, and planning tradeoffs.`
      },
      {
        title: "Ongoing relationship",
        description: `Review plans periodically as objectives, markets, and personal circumstances change.`
      }
    ],
    eligibility: {
      title: "Advisor access requirements",
      description: `Advisor access may require client eligibility, investment profile review, advisory disclosures, and account agreements.`,
      items: [
        "Client profile review",
        "Investment objectives",
        "Risk tolerance assessment",
        "Advisory disclosures",
        "Agreement acceptance"
      ]
    },
    faqs: [
      {
        question: "Can an advisor guarantee investment performance?",
        answer: `No. Advisors cannot guarantee returns. Investment products involve risk and may lose value.`
      },
      {
        question: "What should I prepare before speaking with an advisor?",
        answer: `Prepare goals, current accounts, time horizon, income needs, risk tolerance, and major financial priorities.`
      }
    ],
    finalCta: {
      headline: "Discuss investment decisions with advisory support.",
      description: `Start a conversation focused on objectives, risk, time horizon, and portfolio discipline.`,
      primaryCta: "Speak With an Advisor",
      secondaryCta: "Explore Investment Accounts"
    },
    disclosure: `Advisor-led investment services involve risk and are subject to eligibility, suitability review, advisory agreements, disclosures, and market conditions.`
  },
  {
    slug: "investments/digital-assets",
    category: "Investments",
    title: "Digital Assets",
    seoTitle: "Digital Assets and Crypto Risk Review | Aster Bank",
    seoDescription: `Digital assets content focused on eligibility, suitability, disclosure acceptance, custody review, volatility, and institutional compliance controls.`,
    eyebrow: "High-Risk Digital Assets",
    headline: "Digital assets require elevated risk review, eligibility, and compliance oversight.",
    description: `Aster Bank digital assets content is intentionally separated from traditional investments because crypto and digital assets are highly speculative, volatile, and subject to legal, regulatory, custody, and suitability considerations.`,
    primaryCta: "Review Risk Disclosures",
    secondaryCta: "Check Eligibility",
    trustNote: `Digital assets are highly speculative, may lose value, are not bank deposits, are not guaranteed by Aster Bank, and may not be FDIC-insured or protected by any government agency.`,
    sections: [
      {
        title: "Risk-controlled digital asset interest process",
        description: `Any digital asset access should be reviewed through eligibility, suitability, disclosure, custody, legal, and compliance workflows before availability.`,
        items: [
          {
            title: "Eligibility review",
            description: `Access may be limited to eligible clients after profile, risk, suitability, and disclosure review.`
          },
          {
            title: "Custody provider review",
            description: `Digital asset custody requires approved third-party or regulated custody infrastructure before production use.`
          },
          {
            title: "No hype-driven access",
            description: `Digital assets should never be presented as guaranteed, low-risk, or appropriate for all clients.`
          }
        ]
      }
    ],
    benefits: [
      {
        title: "Risk-first education",
        description: `Understand volatility, custody risk, regulatory uncertainty, and potential loss before considering exposure.`
      },
      {
        title: "Suitability discipline",
        description: `Evaluate whether digital asset exposure aligns with risk tolerance, objectives, and eligibility.`
      },
      {
        title: "Compliance-led process",
        description: `Availability depends on legal, regulatory, custody, operational, and compliance review.`
      }
    ],
    eligibility: {
      title: "Digital asset access requirements",
      description: `Digital asset access may require eligible client status, risk disclosure acceptance, suitability review, custody review, and compliance approval.`,
      items: [
        "Eligible client status",
        "Digital asset risk disclosure acceptance",
        "Suitability questionnaire",
        "Compliance review",
        "Approved custody and legal framework"
      ]
    },
    faqs: [
      {
        question: "Are digital assets bank deposits?",
        answer: `No. Digital assets are not bank deposits and are not guaranteed by Aster Bank.`
      },
      {
        question: "Can digital assets lose value?",
        answer: `Yes. Digital assets are highly speculative and may lose substantial value, including the full amount of exposure.`
      },
      {
        question: "Are digital assets FDIC-insured?",
        answer: `Digital assets may not be FDIC-insured or protected by any government agency. Insurance language requires legal and regulatory review.`
      }
    ],
    finalCta: {
      headline: "Review digital asset risk before considering access.",
      description: `Digital asset interest requires eligibility, risk disclosure, suitability review, custody review, and compliance approval.`,
      primaryCta: "Review Risk Disclosures",
      secondaryCta: "Contact an Advisor"
    },
    disclosure: `Digital assets are highly speculative, may lose value, are not bank deposits, are not guaranteed by Aster Bank, and may not be FDIC-insured or protected by any government agency. Access may be limited to eligible clients and depends on legal, regulatory, custody, and compliance review.`
  }
];
