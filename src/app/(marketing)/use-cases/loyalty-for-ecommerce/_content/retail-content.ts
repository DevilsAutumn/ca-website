import { siteLinks } from "@/lib/site-links";
import terminalPhoto from "../../../solutions/universal-points-terminal-pos-loyalty/_assets/terminal-at-checkout.jpg";
import onlineCatalogPhoto from "../_assets/online-rewards-catalog.jpg";

export const retailSectionLinks = [
  { label: "Shopping experiences", href: "#retail-touchpoints" },
  { label: "Launch or extend", href: "#retail-program" },
  { label: "Partner currencies", href: "#retail-partners" },
] as const;

export const retailMoments = [
  {
    id: "browse",
    label: "Browse",
    title: "Personalise offers while members shop.",
    description:
      "Send loyalty activity and member preferences to your ecommerce, CRM, and campaign tools through the API. Use the data members share to tailor offers and retail media.",
    action: {
      label: "See integration options",
      href: "/our-technology#integration",
    },
    media: {
      kind: "diagram",
      from: { label: "Loyalty program", detail: "Member activity" },
      to: { label: "Commerce and CRM", detail: "Tailored offers" },
      connection: "API",
      description:
        "Loyalty activity goes through the API to commerce and CRM tools so brands can tailor offers.",
    },
  },
  {
    id: "online",
    label: "Online",
    title: "Give members a choice at online checkout.",
    description:
      "Embed branded screens for account linking, partner earning, and points payments. Add a member portal for balances and screens for points exchange, vouchers, and gift cards.",
    action: {
      label: "Explore white-label solutions",
      href: siteLinks.whiteLabelSolutions,
    },
    media: {
      kind: "image",
      src: onlineCatalogPhoto,
      alt: "An online rewards catalog displayed on a desktop screen",
    },
  },
  {
    id: "store",
    label: "In store",
    title: "Recognise members at the counter.",
    description:
      "Use the Universal Points Terminal to identify members and award or accept points. Run it on a POS with a browser or use a separate device at the counter.",
    action: {
      label: "Explore the Universal Points Terminal",
      href: siteLinks.universalPointsTerminal,
    },
    media: {
      kind: "image",
      src: terminalPhoto,
      alt: "The Universal Points Terminal running on a tablet at a store counter",
    },
  },
] as const;

export const retailProgramOptions = [
  {
    title: "Extend your existing program",
    description:
      "Connect the loyalty platform you use today and add earning, redemption, or partner capabilities through the API.",
    action: {
      label: "Explore modernisation options",
      href: siteLinks.moderniseLoyaltyProgram,
    },
  },
  {
    title: "Launch a new program",
    description:
      "Use the points bank and rules engine as your loyalty backend, connected to your storefront, customer data, and campaign tools.",
    action: {
      label: "Explore program launch",
      href: siteLinks.launchLoyaltyProgram,
    },
  },
] as const;

export const retailPartnerOptions = [
  {
    title: "Let members earn a partner’s points",
    description:
      "Offer a choice of points or miles from participating programs when a customer makes an eligible purchase.",
    action: {
      label: "Explore partner accrual",
      href: siteLinks.partnerAccrual,
    },
  },
  {
    title: "Let members spend a partner balance",
    description:
      "Link the member’s partner account so eligible points can cover part or all of an order at checkout.",
    action: {
      label: "Explore loyalty account linking",
      href: siteLinks.loyaltyAccountLinking,
    },
  },
] as const;
