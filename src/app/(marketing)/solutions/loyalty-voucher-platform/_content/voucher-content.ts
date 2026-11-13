import { siteLinks } from "@/lib/site-links";

export const voucherExample = {
  amount: "$15",
  name: "Shopping voucher",
  terms: [
    { label: "Applies to", value: "Selected products" },
    { label: "Redeem", value: "Online or in store" },
    { label: "Valid for", value: "30 days after issue" },
  ],
} as const;

type VoucherStage = {
  title: string;
  description: string;
  action?: { label: string; href: string };
};

export const voucherStages: readonly VoucherStage[] = [
  {
    title: "Define the offer",
    description:
      "Set a value in cash, points, or miles. Set where and when the voucher applies, down to the brand or product.",
  },
  {
    title: "Issue the voucher",
    description:
      "Issue unassigned vouchers in batches for a public campaign, or send targeted offers by email, SMS, or in your app.",
  },
  {
    title: "Accept it at checkout",
    description:
      "Let customers redeem the voucher under its terms in your app, online store, or at the point of sale.",
    action: {
      label: "See the Universal Points Terminal",
      href: siteLinks.universalPointsTerminal,
    },
  },
];

export const voucherOptions = [
  {
    title: "Standalone promotions",
    description:
      "Issue cash-value vouchers for a campaign without running a points program.",
  },
  {
    title: "Vouchers funded by points or miles",
    description:
      "Set how many points a voucher costs and let members claim it using your own or a participating partner’s currency.",
  },
  {
    title: "Data from your existing tools",
    description:
      "Connect your CRM, customer data platform, or commerce systems by API. Use member data to target an offer and stock levels to adjust its value.",
  },
] as const;

export const avoltaCase = {
  title: "How Avolta members turn Avios into vouchers",
  description:
    "After linking accounts, members can exchange Avios for Avolta vouchers and keep them alongside gift cards in the Red by Dufry wallet.",
  href: "https://www.currencyalliance.com/case-studies/avolta-airport-retail-and-dining-collaborations-with-partners",
  logo: { src: "/partners/avolta.png", width: 225, height: 68 },
} as const;
