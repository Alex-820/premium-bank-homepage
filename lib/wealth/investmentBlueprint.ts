export const stockEtfLockPlans = [
  {
    name: "Equity Flex Lock",
    interval: "30 days",
    targetRange: "2.50% – 5.50%",
    meaning: "Short-term equity opportunity range",
    risk: "High"
  },
  {
    name: "Equity Core Lock",
    interval: "90 days",
    targetRange: "5.50% – 9.00%",
    meaning: "Quarterly stock/ETF growth target",
    risk: "High"
  },
  {
    name: "Equity Growth Lock",
    interval: "180 days",
    targetRange: "9.00% – 15.00%",
    meaning: "Medium-term managed equity position",
    risk: "High / Very High"
  },
  {
    name: "Equity Private Lock",
    interval: "365 days",
    targetRange: "15.00% – 27.00%",
    meaning: "Full-year aggressive equity strategy",
    risk: "Very High / Private Client"
  }
];

export const digitalAssetLockPlans = [
  {
    name: "Flex Lock",
    interval: "30 days",
    targetRange: "5.50% – 7.50%",
    strategy: "Short-term liquidity deployment",
    risk: "High"
  },
  {
    name: "Core Lock",
    interval: "90 days",
    targetRange: "9.00% – 13.50%",
    strategy: "Liquidity plus lending spread",
    risk: "High"
  },
  {
    name: "Growth Lock",
    interval: "180 days",
    targetRange: "15.00% – 21.00%",
    strategy: "Lending, OTC liquidity, and staking mix",
    risk: "Very High"
  },
  {
    name: "Private Lock",
    interval: "365 days",
    targetRange: "22.00% – 27.00%",
    strategy: "Private client digital asset yield strategy",
    risk: "Very High / Private Client"
  }
];

export const stockEtfPortfolioTypes = [
  {
    type: "U.S. Core Equity Portfolio",
    mix: "Broad market ETFs, blue-chip equities",
    source: "Market appreciation and dividends",
    risk: "Moderate / High"
  },
  {
    type: "Dividend Income Portfolio",
    mix: "Dividend stocks, dividend ETFs, quality income names",
    source: "Dividends, distributions, and price movement",
    risk: "Moderate"
  },
  {
    type: "Growth Equity Portfolio",
    mix: "Technology, healthcare, consumer growth, innovation ETFs",
    source: "Price appreciation",
    risk: "High"
  },
  {
    type: "Balanced Equity Portfolio",
    mix: "Stocks, bond ETFs, cash reserve placeholder",
    source: "Blended growth, income, and risk control",
    risk: "Moderate"
  },
  {
    type: "Private Equity Strategy",
    mix: "High-conviction curated stock/ETF basket",
    source: "Aggressive growth and active management",
    risk: "Very High"
  }
];

export const digitalAssetYieldChannels = [
  {
    channel: "Staking Reward Vault",
    valueCreation: "Proof-of-stake network rewards on eligible assets",
    revenue: "Staking service commission, validator/custody fee",
    risk: "Slashing, validator failure, protocol change, asset price decline, tax risk"
  },
  {
    channel: "Crypto Lending Vault",
    valueCreation: "Eligible assets or stablecoins support collateralized lending",
    revenue: "Lending spread, origination/service fee, collateral management fee",
    risk: "Borrower default, collateral liquidation failure, liquidity risk, legal risk"
  },
  {
    channel: "Institutional Liquidity Vault",
    valueCreation: "Locked assets support OTC settlement, express trade, merchant settlement, or treasury liquidity",
    revenue: "Liquidity fee, OTC spread, settlement fee",
    risk: "Liquidity mismatch, counterparty risk, market shock, operational risk"
  },
  {
    channel: "Stablecoin Treasury Access",
    valueCreation: "Stablecoin-to-cash pathway for Treasury or money-market style exposure through regulated partners",
    revenue: "Advisory/access fee, admin fee, partner fee share where permitted",
    risk: "Market risk, stablecoin depeg, partner risk, liquidity risk, regulatory risk"
  }
];

export const requiredInvestmentDisclosure =
  "Investment products are not bank deposits, are not FDIC-insured, are not guaranteed by the bank, and may lose value. Target return ranges are not guaranteed. Actual results may be lower, zero, or negative. Digital asset strategies are subject to market, liquidity, protocol, custody, counterparty, regulatory, tax, and operational risks.";
