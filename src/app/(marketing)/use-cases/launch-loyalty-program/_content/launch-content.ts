import { siteLinks } from "@/lib/site-links";

type LaunchLink = { label: string; href: string };

type ProgramModule = {
  title: string;
  description: string;
  action?: LaunchLink;
};

export type ProgramModuleGroup = {
  id: string;
  title: string;
  start: number;
  modules: readonly ProgramModule[];
};

export const purchaseSteps = [
  {
    system: "Your checkout",
    title: "Purchase confirmed",
    description: "Your store sends the qualifying order to Currency Alliance.",
  },
  {
    system: "Rules engine",
    title: "+100 points",
    description: "Your first-purchase rule awards a welcome bonus.",
  },
  {
    system: "Points bank",
    title: "Balance updated",
    description: "The points bank records the award in the member’s account.",
  },
] as const;

export const programModuleGroups: readonly ProgramModuleGroup[] = [
  {
    id: "launch-core-services",
    title: "Loyalty services from Currency Alliance",
    start: 1,
    modules: [
      {
        title: "Points bank",
        description:
          "Issue your own points or miles. A double-entry ledger records every transaction and keeps member balances current.",
        action: {
          label: "Explore the points bank",
          href: siteLinks.loyaltyPointsBank,
        },
      },
      {
        title: "Loyalty rules engine",
        description:
          "Set the rules for earning and redeeming points. Reward purchases, birthdays, and other activity, or run promotions with partners.",
        action: {
          label: "Explore the rules engine",
          href: siteLinks.loyaltyRulesEngine,
        },
      },
    ],
  },
  {
    id: "launch-connected-tools",
    title: "Rewards and marketing tools you connect",
    start: 3,
    modules: [
      {
        title: "Rewards catalog",
        description:
          "Choose what members can redeem points for. Offer your own rewards or add vouchers and rewards from participating partners.",
        action: {
          label: "Explore the voucher platform",
          href: siteLinks.loyaltyVoucherPlatform,
        },
      },
      {
        title: "CRM and analytics",
        description:
          "Connect your CRM or customer data platform to bring loyalty activity into customer profiles, segments, and reporting.",
      },
      {
        title: "Campaign management",
        description:
          "Use your existing marketing tools to send loyalty offers and updates through email, your app, and other channels.",
      },
    ],
  },
];

export const launchGuides = [
  {
    label: "Should you issue your own points or miles?",
    href: "https://www.currencyalliance.com/insights/loyalty-programs-should-you-issue-your-own-points-or-miles",
  },
  {
    label: "Calculate the total cost of a loyalty program",
    href: "https://www.currencyalliance.com/insights/calculating-total-cost-of-ownership-in-a-loyalty-program",
  },
] as const;
