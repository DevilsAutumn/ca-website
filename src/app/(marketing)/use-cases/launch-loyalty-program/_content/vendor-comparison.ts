import type { ComparisonRow } from "@/app/_components/marketing/comparison/comparison-table";
import {
  formatPercent,
  issuanceFeeRate,
} from "../../../_content/platform-pricing";

export const vendorAlternatives = [
  "Traditional enterprise systems",
  "Other SaaS loyalty platforms",
] as const;

export const vendorComparisonRows = [
  {
    criterion: "Setup and integration",
    alternatives: ["6–18 months", "1–3 months"],
    alliance: "Under 1 week",
  },
  {
    criterion: "Upfront platform cost",
    alternatives: ["100K–2M", "10K–40K"],
    alliance: "Zero upfront platform fees",
  },
  {
    criterion: "Ongoing platform cost",
    alternatives: ["3K–700K per year", "2K–20K per year"],
    alliance: `${formatPercent(issuanceFeeRate)} of loyalty value issued`,
  },
  {
    criterion: "CRM and campaign tools",
    alternatives: ["Vendor tools favoured", "Optional integration"],
    alliance: "Connect your existing tools",
  },
  {
    criterion: "Multi-brand collaboration",
    alternatives: ["Depends on the provider", "Depends on partner support"],
    alliance: "Partner marketplace via one integration",
  },
] as const satisfies readonly ComparisonRow[];
