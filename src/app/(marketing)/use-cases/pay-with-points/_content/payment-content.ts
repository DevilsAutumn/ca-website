import { siteLinks } from "@/lib/site-links";
import terminalPhoto from "../../_assets/pay-with-points-in-store.jpg";
import onlinePhoto from "../_assets/pay-with-points-online.jpg";

export const paymentChoices = [
  {
    title: "Choose how much to pay with points",
    description:
      "Members can cover the entire purchase with points, pay in cash, or use points for part of the total and pay the rest in cash.",
  },
  {
    title: "Spend from a partner program",
    description:
      "Members can use a participating partner’s points or miles directly at checkout. Payment comes from their eligible balance in that program.",
  },
] as const;

export const checkoutAmounts = { orderTotal: 80, pointsValue: 30 } as const;

export const paymentChannels = [
  {
    id: "payment-online",
    title: "Online checkout",
    description:
      "Embed a branded payment screen in your website or app so members can choose points, cash, or both during checkout.",
    image: onlinePhoto,
    alt: "A tablet showing a pay-with-points screen for an online booking",
    action: {
      label: "Explore white-label solutions",
      href: siteLinks.whiteLabelSolutions,
    },
  },
  {
    id: "payment-in-store",
    title: "In-store checkout",
    description:
      "Open the Universal Points Terminal on a browser-enabled POS, tablet, or phone and accept points alongside your existing till.",
    image: terminalPhoto,
    alt: "A tablet with a loyalty sign-in screen at a store counter",
    action: {
      label: "Explore the Universal Points Terminal",
      href: siteLinks.universalPointsTerminal,
    },
  },
] as const;

export const bankRedemptionCase = {
  customer: "US bank loyalty program",
  title: "Cardholders pay with points for travel.",
  description:
    "A large US bank uses Currency Alliance to let premium cardholders spend their points on rewards and travel services from its redemption partner.",
  href: "https://www.currencyalliance.com/case-studies/partner-redemptions-for-a-leading-bank-loyalty-program",
} as const;
