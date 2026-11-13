export const platformFeeRate = 0.02;
export const exampleLoyaltyShare = 0.01;

export const formatPercent = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
}).format;
