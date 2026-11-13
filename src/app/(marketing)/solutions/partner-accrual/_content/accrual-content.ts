export const earningPaths = [
  {
    id: "your-points",
    title: "Partners award your points",
    description:
      "Extend your program to places where members already spend. A partner can reward eligible purchases or activities with your points or miles.",
    from: { label: "Partner brand", detail: "Member shops with a partner" },
    to: {
      label: "Your loyalty program",
      detail: "Member receives your points",
    },
    figureDescription:
      "A member shops with a partner brand and earns points in your loyalty program.",
  },
  {
    id: "partner-points",
    title: "You award a partner’s points",
    description:
      "Reward customers with a currency they already collect. You can offer a partner’s points or miles even if you do not issue a currency of your own.",
    from: { label: "Your brand", detail: "Member shops with you" },
    to: {
      label: "Partner loyalty program",
      detail: "Member receives partner points",
    },
    figureDescription:
      "A member shops with your brand and earns points in a partner loyalty program.",
  },
] as const;

export const accrualControls = [
  {
    label: "Point price",
    description: "Set a price per point or mile by partner or campaign.",
  },
  {
    label: "Earn rules",
    description: "Define what qualifies for an award and when points expire.",
  },
  {
    label: "Data sharing",
    description: "Agree what transaction data you share with each partner.",
  },
  {
    label: "Settlement",
    description: "Use reconciliation and settlement services as agreed.",
  },
] as const;

export const dynataCase = {
  customer: "Dynata",
  title: "Survey rewards in partner points.",
  description:
    "Dynata uses one integration to offer members points or miles from participating loyalty programs as rewards for completing surveys.",
  href: "https://www.currencyalliance.com/case-studies/partner-points-issuance-for-a-consumer-research-company",
} as const;
