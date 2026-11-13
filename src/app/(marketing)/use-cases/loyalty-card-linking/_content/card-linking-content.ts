import { siteLinks } from "@/lib/site-links";

export const cardLinkingSteps = [
  {
    title: "Link a payment method",
    description:
      "The member links an eligible payment card or wallet to their loyalty account.",
  },
  {
    title: "Pay as usual",
    description:
      "The member pays with the linked method at a participating merchant. The payment identifies their loyalty account.",
  },
  {
    title: "Earn the reward",
    description:
      "When the payment provider reports the eligible purchase, Currency Alliance applies the program’s earning rules.",
  },
] as const;

export const cardConnections = [
  {
    label: "Payment cards",
    description:
      "Connect through a card-linking provider in your market. Eligible cards and reward timing depend on that provider’s coverage and transaction feed.",
  },
  {
    label: "Mobile wallets",
    description:
      "Connect through a compatible wallet. A supported integration can send payment events in real time so the reward can be credited promptly.",
  },
] as const;

export const activeSuperCaseStudy = {
  title: "How Active Super linked everyday purchases to savings",
  description:
    "Covalent connected a local card-linking provider to Currency Alliance. Active Super members earned cashback at participating retailers, which was periodically added to their savings.",
  href: "https://www.currencyalliance.com/case-studies/active-super-enables-members-to-earn-everyday-via-linked-payment-cards",
  logo: { src: "/partners/active-super.svg", width: 144, height: 43 },
} as const;

export const checkoutAlternatives = [
  {
    title: "Online",
    description:
      "Embed branded account and payment screens in your website or app.",
    action: {
      label: "Explore white-label solutions",
      href: siteLinks.whiteLabelSolutions,
    },
  },
  {
    title: "In store",
    description:
      "Scan a member’s loyalty code or enter their ID at the checkout counter.",
    action: {
      label: "Explore the Universal Points Terminal",
      href: siteLinks.universalPointsTerminal,
    },
  },
] as const;
