import { siteLinks } from "@/lib/site-links";
import onlineLoyaltyImage from "../_assets/digital-touchpoints.jpg";
import checkoutImage from "../../_assets/pay-with-points-in-store.jpg";

export const modernisationPaths = [
  {
    id: "extend",
    label: "Extend",
    title: "Add to your current platform.",
    description:
      "Keep your member accounts and points system. Add capabilities such as partner earning through a secure API that exchanges data with your current platform in real time.",
    action: {
      label: "Explore partner accrual",
      href: siteLinks.partnerAccrual,
    },
    diagram: {
      from: { label: "Current platform", detail: "Points and members" },
      to: { label: "Currency Alliance", detail: "Partner loyalty services" },
      connection: "Secure API",
      description:
        "Your current loyalty platform exchanges data with Currency Alliance’s partner services through a secure API.",
    },
  },
  {
    id: "migrate",
    label: "Migrate",
    title: "Move one service at a time.",
    description:
      "Introduce a module such as the rules engine while the rest of your loyalty stack stays in service. Add other modules when you’re ready.",
    action: {
      label: "Explore the rules engine",
      href: siteLinks.loyaltyRulesEngine,
    },
    diagram: {
      from: { label: "Existing stack", detail: "Services you keep" },
      to: { label: "New module", detail: "Rules engine or points bank" },
      connection: "API",
      description:
        "Keep the parts of your existing stack you need and connect an individual loyalty module by API.",
    },
  },
  {
    id: "replace",
    label: "Replace",
    title: "Adopt a headless backend.",
    description:
      "Use Currency Alliance for loyalty rules and balances. Keep control of the experience across your app, website, and stores, with your CRM, customer data, and campaigns connected.",
    action: {
      label: "See the platform architecture",
      href: "/our-technology#architecture",
    },
    diagram: {
      from: { label: "Your channels", detail: "App, web, and stores" },
      to: { label: "Loyalty backend", detail: "Rules and balances" },
      connection: "API",
      description:
        "The brand’s member channels connect by API to a Currency Alliance backend that handles loyalty rules and balances.",
    },
  },
] as const;

export const loyaltyTouchpoints = [
  {
    id: "online",
    title: "On your website or app",
    description:
      "Embed branded screens for account linking, earning, redemption, and member accounts inside your digital experience.",
    image: onlineLoyaltyImage,
    alt: "",
    action: {
      label: "Explore white-label solutions",
      href: siteLinks.whiteLabelSolutions,
    },
  },
  {
    id: "in-store",
    title: "At your store checkout",
    description:
      "Award or accept points on a browser-enabled device with the Universal Points Terminal. Store staff can use the checkout software they already know.",
    image: checkoutImage,
    alt: "A tablet with a loyalty sign-in screen at a store counter",
    action: {
      label: "Explore the Universal Points Terminal",
      href: siteLinks.universalPointsTerminal,
    },
  },
] as const;
