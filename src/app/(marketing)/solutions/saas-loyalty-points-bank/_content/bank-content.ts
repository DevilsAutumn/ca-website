const openingBalance = 1200;
const purchaseAward = 240;
const rewardCost = 500;
const balanceAfterPurchase = openingBalance + purchaseAward;
const closingBalance = balanceAfterPurchase - rewardCost;

export const memberStatement = {
  closingBalance,
  entries: [
    { label: "Opening balance", change: null, balance: openingBalance },
    {
      label: "Online purchase",
      change: purchaseAward,
      balance: balanceAfterPurchase,
    },
    {
      label: "Reward redemption",
      change: -rewardCost,
      balance: closingBalance,
    },
  ],
} as const;

export const bankCapabilities = [
  {
    title: "Partner transactions",
    description:
      "Record points and miles earned, redeemed, or exchanged in your own program and with participating partners.",
  },
  {
    title: "Accounting and oversight",
    description:
      "Use an immutable double-entry ledger for audit and reconciliation. Monitor transactions for potential fraud.",
  },
  {
    title: "Tiers and subscriptions",
    description:
      "Manage member tiers and subscriptions, with rules for moving members between tiers as they qualify.",
  },
  {
    title: "Variable point pricing",
    description:
      "Use data from connected systems to vary point prices by transaction, partner, or campaign.",
  },
] as const;

export const activeSuperCaseHref =
  "https://www.currencyalliance.com/case-studies/active-super-enables-members-to-earn-everyday-via-linked-payment-cards";

export const pointsBankGuideHref =
  "https://www.currencyalliance.com/insights/the-benefits-of-a-saas-loyalty-points-bank";
