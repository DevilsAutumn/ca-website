// Rates from Schedule A of the Terms of Use.
export const issuanceFeeRate = 0.02;
export const exchangeFeeRate = 0.02;

export const exampleLoyaltyShare = 0.01;

export const formatPercent = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
}).format;

export const formatEuros = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
}).format;
