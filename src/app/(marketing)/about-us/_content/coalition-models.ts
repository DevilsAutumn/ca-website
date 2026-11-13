export const coalitionModels = [
  {
    id: "v1",
    version: "V1.0",
    title: "An operator owns the coalition.",
    description:
      "Brands join a shared loyalty program run by a third party. The operator controls the technology, data, and commercial model.",
    changeLabel: "Why the model evolved",
    change:
      "Operator costs leave less value for member rewards, while brands have limited control over the network.",
    diagramDescription:
      "A third-party operator owns the program, data, and rules. Retail and travel partners participate in its coalition.",
  },
  {
    id: "v2",
    version: "V2.0",
    title: "A leading brand takes ownership.",
    description:
      "An airline, hotel group, or major retailer runs the loyalty program and brings partner brands into its ecosystem.",
    changeLabel: "What changed from V1.0",
    change:
      "Ownership moves to a brand. Other partners still depend on that brand’s rules and access to customer insight.",
    diagramDescription:
      "A lead brand replaces the third-party operator at the top of the network. Retail and travel partners still participate in one owner’s program.",
  },
  {
    id: "v3",
    version: "V3.0",
    title: "Brands collaborate as peers.",
    description:
      "Currency Alliance connects loyalty programs through a shared API layer. Brands choose their partners and control their own relationships.",
    changeLabel: "What changes with V3.0",
    change:
      "Easier, lower-cost collaboration leaves more value for members to earn, exchange, and redeem points across brands.",
    diagramDescription:
      "Retail and travel brands operate as peers, each with its own program and rules. A shared Currency Alliance API layer connects them beneath their programs.",
  },
] as const;

export type CoalitionModel = (typeof coalitionModels)[number];

export const COALITION_ARTICLE =
  "https://www.currencyalliance.com/insights/loyalty-coalitions-v3-0-greater-benefits-for-consumers-and-brands";
