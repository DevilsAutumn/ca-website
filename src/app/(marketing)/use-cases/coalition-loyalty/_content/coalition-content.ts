import { siteLinks } from "@/lib/site-links";

export const coalitionJourney = [
  {
    title: "Earn with a retail partner",
    description: "A member earns coalition points on a purchase.",
  },
  {
    title: "Use points with a travel partner",
    description: "They put those points towards a reward from another brand.",
  },
] as const;

export const coalitionStartingPoints = [
  {
    title: "Start a coalition",
    description:
      "Create a program with complementary brands and agree how members earn and redeem.",
  },
  {
    title: "Join a coalition",
    description:
      "Connect to an established network and take part in the rewards you agree to offer.",
  },
  {
    title: "Extend a coalition",
    description:
      "Add partners in more categories so members can use points in more of their everyday spending.",
  },
] as const;

export const partnershipSteps = [
  {
    title: "Find complementary partners",
    description:
      "Discover other loyalty programs in the marketplace and connect through one integration.",
    action: {
      label: "Explore the marketplace",
      href: siteLinks.partnerMarketplace,
    },
  },
  {
    title: "Agree how you’ll work together",
    description:
      "Use the agreement framework to set earning, redemption, and settlement terms for each partnership.",
    action: {
      label: "Explore partner contracting",
      href: siteLinks.partnerContracting,
    },
  },
  {
    title: "Manage live partnerships",
    description:
      "Track partner transactions, reporting, reconciliation, and settlement in one place.",
    action: {
      label: "Explore partnership management",
      href: siteLinks.partnershipManagement,
    },
  },
] as const;

export const coalitionCaseStudy = {
  title: "How Air Miles Middle East expanded its retail network",
  description:
    "Kognitiv adapted the Universal Points Terminal for local retailers. The published rollout covered more than 20 partners across hundreds of stores, where teams could award and accept points using browser-enabled devices.",
  href: "https://www.currencyalliance.com/case-studies/coalition-loyalty-allowing-sme-retailers-to-collaborate-without-integrations",
  logo: { src: "/partners/kognitiv.png", width: 366, height: 76 },
} as const;

export const partnerMixGuide = {
  title: "Plan your partner mix",
  description:
    "Choose partners whose products complement each other and fit the ways members already spend.",
  label: "Read the partner mix guide",
  href: "https://www.currencyalliance.com/insights/loyalty-partnerships-how-to-optimize-your-partner-mix",
} as const;
