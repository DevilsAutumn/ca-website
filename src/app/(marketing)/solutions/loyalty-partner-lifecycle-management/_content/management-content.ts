export const partnerControls = [
  {
    label: "Issue points",
    description: "Choose which loyalty currency the partner can issue.",
    example: "Your program’s points",
  },
  {
    label: "Redeem points",
    description: "Enable redemptions and set their price in points.",
    example: "Disabled",
  },
  {
    label: "Exchange points",
    description: "Set whether points can move in, out, or both ways.",
    example: "Into your program only",
  },
] as const;

export const reportingMethods = [
  {
    label: "API",
    description: "Real-time submissions",
  },
  {
    label: "Batch files",
    description: "Bulk uploads",
  },
  {
    label: "Portal",
    description: "Manual entry",
  },
] as const;

export const settlementSteps = [
  {
    title: "Reconcile",
    description: "Match partner records against transactions on the platform.",
  },
  {
    title: "Invoice",
    description: "Consolidate invoices across partners where the terms allow.",
  },
  {
    title: "Settle",
    description:
      "Use advance payment, credit, or escrow as agreed with each partner.",
  },
] as const;

export const flyingBlueCaseStudy = {
  customer: "Flying Blue",
  title: "One consolidated invoice each month.",
  description:
    "Air France–KLM invoices Currency Alliance for the total owed. Currency Alliance then bills participating partners, collects their payments, and pays the Flying Blue program.",
  href: "https://www.currencyalliance.com/case-studies/partner-network-scaling-for-the-flying-blue-loyalty-program",
} as const;
