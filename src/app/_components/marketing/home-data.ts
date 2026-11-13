import { siteLinks } from "@/lib/site-links";

export const platformHighlights = [
  { value: "1", label: "API integration" },
  { value: "Days", label: "to launch a partnership" },
  { value: "200+", label: "partner brands in network" },
  { value: "35", label: "optimized API endpoints" },
] as const;

export const partners = [
  {
    name: "Flying Blue",
    category: "Airline",
    logo: "/partners/flyingblue.png",
  },
  {
    name: "Qatar Airways",
    category: "Airline",
    logo: "/partners/qatar-airways.png",
  },
  {
    name: "Avolta",
    category: "Travel retail",
    logo: "/partners/avolta.png",
  },
  {
    name: "AirAsia",
    category: "Airline",
    logo: "/partners/airasia.png",
  },
  {
    name: "IHG",
    category: "Hospitality",
    logo: "/partners/ihg.png",
  },
  {
    name: "Singapore Airlines",
    category: "Airline",
    logo: "/partners/singapore-airlines.png",
  },
  {
    name: "First Abu Dhabi Bank",
    category: "Banking",
    logo: "/partners/fab.png",
  },
  {
    name: "MeliaRewards",
    category: "Hospitality",
    logo: "/partners/melia-rewards.png",
  },
  {
    name: "Live Nation",
    category: "Entertainment",
    logo: "/partners/live-nation.png",
  },
  {
    name: "Ticketmaster",
    category: "Entertainment",
    logo: "/partners/ticketmaster.png",
  },
  {
    name: "Active Super",
    category: "Finance",
    logo: "/partners/active-super.svg",
  },
  {
    name: "Air Miles",
    category: "Loyalty",
    logo: "/partners/air-miles.png",
  },
  {
    name: "Kognitiv",
    category: "Technology",
    logo: "/partners/kognitiv.png",
  },
  {
    name: "Garuda Indonesia",
    category: "Airline",
    logo: "/partners/garuda-indonesia.png",
  },
  {
    name: "Vietnam Airlines",
    category: "Airline",
    logo: "/partners/vietnam-airlines.jpeg",
  },
  {
    name: "Reward The World",
    category: "Loyalty",
    logo: "/partners/reward-the-world.png",
  },
];

export const comparisonRows = [
  {
    criterion: "Partner discovery",
    alternatives: ["Manual outreach", "May need a separate network"],
    alliance: "Marketplace network",
  },
  {
    criterion: "Integration model",
    alternatives: ["One-off build per partner", "Program-specific APIs"],
    alliance: "One API layer",
  },
  {
    criterion: "Partner operations",
    alternatives: ["Build or connect admin tools", "Depends on the provider"],
    alliance: "Shared lifecycle view",
  },
  {
    criterion: "Points movement",
    alternatives: ["Custom rules each time", "Depends on partner support"],
    alliance: "Issue, exchange, redeem",
  },
  {
    criterion: "Cost to change",
    alternatives: ["High engineering overhead", "Depends on the scope"],
    alliance: "Built for repeatability",
  },
] as const;

export const comparisonOutcomes = [
  {
    value: "+80%",
    label: "go-to-market",
    copy: "Contract negotiations move from months to weeks.",
  },
  {
    value: "+60%",
    label: "operational ROI",
    copy: "Productivity tools and consistent reporting reduce admin drag.",
  },
  {
    value: "−35%",
    label: "financial costs",
    copy: "Consolidated invoices and automated settlement simplify the back office.",
  },
] as const;

export const capabilities = [
  {
    number: "01",
    title: "Connect partners",
    href: siteLinks.partnerMarketplace,
    copy: "One API for partner discovery, integration, and the everyday exchange of value.",
  },
  {
    number: "02",
    title: "Run the relationship",
    href: siteLinks.partnershipManagement,
    copy: "Contracts, rules, settlement, reporting, and partner operations in one place.",
  },
  {
    number: "03",
    title: "Give members more reasons to return",
    href: siteLinks.payWithPoints,
    copy: "Make points useful across travel, retail, payments, and the moments in between.",
  },
];
