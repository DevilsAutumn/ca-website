import {
  ArrowLeftRight,
  BadgeCheck,
  BookOpen,
  Coins,
  Database,
  Gift,
  ListFilter,
  ReceiptText,
  ShoppingBag,
  SlidersHorizontal,
  UserRound,
  Wallet,
} from "lucide-react";
import { siteLinks } from "@/lib/site-links";

export const API_DOCUMENTATION = siteLinks.apiDocumentation;

export const adoptionPaths = [
  {
    label: "Extend your platform",
    title: "A new layer. A familiar foundation.",
    description:
      "Keep your existing loyalty system and add partner connectivity, new ways to earn and redeem, or more flexible rules.",
    details: [
      {
        term: "Keep",
        description: "Your current points bank and member records.",
      },
      { term: "Add", description: "The Currency Alliance services you need." },
      {
        term: "Connect",
        description: "Partner programs through one standard API.",
      },
    ],
  },
  {
    label: "Build a new program",
    title: "Your loyalty backend. Your experience.",
    description:
      "Use our points bank, rules engine, and transaction services to build a loyalty program around your customers.",
    details: [
      {
        term: "Keep",
        description: "Your choice of CRM, commerce, and customer channels.",
      },
      {
        term: "Add",
        description: "A modular backend for balances, rules, and transactions.",
      },
      {
        term: "Control",
        description: "How and where members interact with your program.",
      },
    ],
  },
] as const;

export const machPrinciples = [
  {
    letter: "M",
    name: "Microservices",
    benefit: "Services that evolve independently.",
  },
  {
    letter: "A",
    name: "API-first",
    benefit: "Loyalty capabilities through a standard interface.",
  },
  {
    letter: "C",
    name: "Cloud-native",
    benefit: "Cloud software, operated as a service.",
  },
  {
    letter: "H",
    name: "Headless",
    benefit: "Your frontend, connected to our backend.",
  },
] as const;

export const loyaltyServices = [
  {
    id: "accrual",
    label: "Accrual",
    role: "Issue value",
    title: "Turn an action into an earning moment.",
    description:
      "Award your own points or a partner’s currency for purchases and activities. Supply the amount directly, or let configured rules calculate it.",
    capabilities: ["Direct accrual", "Purchase rules", "Activity rules"],
    href: siteLinks.partnerAccrual,
    linkLabel: "Explore partner accrual",
    flow: [
      {
        label: "Member action",
        detail: "Purchase or activity",
        icon: ShoppingBag,
      },
      { label: "Accrual service", detail: "Apply earning rules", icon: Coins },
      {
        label: "Member account",
        detail: "Receive points or miles",
        icon: UserRound,
      },
    ],
    flowCaption: "One earning flow, using your currency or a partner’s.",
  },
  {
    id: "exchange",
    label: "Exchange",
    role: "Convert value",
    title: "Make points useful beyond one program.",
    description:
      "Let members convert one loyalty currency into another. Simulate the result first, then apply the exchange terms agreed with each partner.",
    capabilities: [
      "Simulate an exchange",
      "Partner-specific terms",
      "Execute a conversion",
    ],
    href: "/use-cases/exchange-points-miles",
    linkLabel: "Explore points exchange",
    flow: [
      {
        label: "Origin program",
        detail: "Member’s existing points",
        icon: Wallet,
      },
      {
        label: "Exchange service",
        detail: "Apply agreed terms",
        icon: ArrowLeftRight,
      },
      {
        label: "Partner program",
        detail: "Member’s chosen currency",
        icon: Coins,
      },
    ],
    flowCaption: "A standard flow across different loyalty systems.",
  },
  {
    id: "redemption",
    label: "Redemption",
    role: "Spend value",
    title: "Bring loyalty value to the checkout.",
    description:
      "Let members pay with points for products and services. Use a common redemption flow across participating partners and customer channels.",
    capabilities: [
      "Preview points required",
      "Execute a redemption",
      "Adjust or cancel where allowed",
    ],
    href: siteLinks.payWithPoints,
    linkLabel: "Explore pay with points",
    flow: [
      {
        label: "Member balance",
        detail: "Available loyalty value",
        icon: Wallet,
      },
      {
        label: "Redemption service",
        detail: "Validate and deduct",
        icon: Gift,
      },
      {
        label: "Partner checkout",
        detail: "Products and services",
        icon: ShoppingBag,
      },
    ],
    flowCaption: "Points become a payment option in a partner experience.",
  },
  {
    id: "rules",
    label: "Rules engine",
    role: "Decide value",
    title: "Change the rules, without changing the app.",
    description:
      "Configure the logic behind earning and spending. Adapt incentives to purchases, activities, members, and partner terms from the backend.",
    capabilities: [
      "Purchase & activity rules",
      "Personalized incentives",
      "Dynamic loyalty value",
    ],
    href: siteLinks.loyaltyRulesEngine,
    linkLabel: "Explore the rules engine",
    flow: [
      {
        label: "Transaction context",
        detail: "Member, activity, partner",
        icon: ListFilter,
      },
      {
        label: "Rules engine",
        detail: "Evaluate conditions",
        icon: SlidersHorizontal,
      },
      {
        label: "Loyalty outcome",
        detail: "Calculate the incentive",
        icon: BadgeCheck,
      },
    ],
    flowCaption:
      "The decision logic stays separate from your customer interface.",
  },
  {
    id: "points-bank",
    label: "Points bank",
    role: "Record value",
    title: "One source of truth for your program.",
    description:
      "When launching a new program, use our points bank to record loyalty transactions and member balances. Connect it to the business systems you already use.",
    capabilities: [
      "Double-entry ledger",
      "Member balances & tiers",
      "Transaction history",
    ],
    href: siteLinks.loyaltyPointsBank,
    linkLabel: "Explore the points bank",
    flow: [
      {
        label: "Loyalty transaction",
        detail: "Earn, transfer, or spend",
        icon: ReceiptText,
      },
      { label: "Points bank", detail: "Record ledger entries", icon: Database },
      {
        label: "Program records",
        detail: "Balances and history",
        icon: BookOpen,
      },
    ],
    flowCaption: "The primary ledger for a new loyalty program.",
  },
] as const;

export type LoyaltyService = (typeof loyaltyServices)[number];

export const apiFacts = [
  {
    title: "REST + JSON",
    description:
      "Resource-based endpoints with standard HTTP methods and response codes.",
  },
  {
    title: "Signed over HTTPS",
    description:
      "Server-to-server requests authenticated with credentials and HMAC-SHA256 signatures.",
  },
  {
    title: "Safe retries",
    description:
      "Idempotency keys help prevent duplicate operations when a request needs to be retried.",
  },
  {
    title: "Sandbox + production",
    description:
      "Separate environments to develop and test your integration before going live.",
  },
] as const;

export const technologyResources = [
  {
    title: "Headless loyalty, explained",
    description: "A practical introduction for business leaders.",
    href: "/insights/headless-loyalty-explained-for-non-technical-business-leaders",
  },
  {
    title: "Loyalty in the API economy",
    description: "The principles behind connected loyalty systems.",
    href: "/insights/loyalty-technology-for-the-api-economy",
  },
  {
    title: "Loyalty meets composable commerce",
    description: "How a modular backend fits the wider commerce stack.",
    href: "/insights/headless-loyalty-enhances-composable-commerce",
  },
] as const;
