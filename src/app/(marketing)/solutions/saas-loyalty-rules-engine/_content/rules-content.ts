import {
  ChartNoAxesCombined,
  Database,
  Gift,
  Handshake,
  Layers,
  Megaphone,
  Settings2,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import activityDesktop from "../_assets/activity-rule.png";
import activityMobile from "../_assets/activity-rule-mobile.png";
import purchaseDesktop from "../_assets/purchase-rule.png";
import purchaseMobile from "../_assets/purchase-rule-mobile.png";

export const earningRuleScreens = [
  {
    id: "purchase",
    tabLabel: "Purchase rules",
    desktop: purchaseDesktop,
    mobile: purchaseMobile,
    alt: "Purchase rules screen showing sample promotions, points amounts, and which rules are active",
    caption: "Set a fixed award or base it on how much the member spends.",
  },
  {
    id: "activity",
    tabLabel: "Activity rules",
    desktop: activityDesktop,
    mobile: activityMobile,
    alt: "Activity rules screen showing sample birthday, referral, and social sharing promotions with their points amounts",
    caption:
      "Award points for birthdays, referrals, or sharing on social media.",
  },
] as const;

export const ruleBenefits = [
  {
    title: "Partner transactions",
    description:
      "Apply loyalty rules when members transact in your points or miles, or in a participating partner’s currency.",
    icon: Handshake,
  },
  {
    title: "Dynamic points pricing",
    description:
      "Vary the points earned or needed for a reward using signals such as inventory and demand from your commerce systems.",
    icon: SlidersHorizontal,
  },
  {
    title: "Personalized incentives",
    description:
      "Adjust the value of an incentive using the member’s profile, tier, or purchase history.",
    icon: UserRound,
  },
  {
    title: "Rules across channels",
    description:
      "Apply loyalty rules in your online store, apps, social campaigns, and other connected customer touchpoints.",
    icon: Layers,
  },
] as const;

export const loyaltyModules = [
  {
    id: "points-bank",
    name: "Main points bank",
    description: "Records loyalty transactions and tracks member balances.",
    icon: Database,
  },
  {
    id: "rules-engine",
    name: "Loyalty rules engine",
    description: "Calculates how many points members earn or spend.",
    icon: Settings2,
  },
  {
    id: "crm-analytics",
    name: "CRM and analytics",
    description:
      "Connect your CRM to build member profiles and analyze behavior.",
    icon: ChartNoAxesCombined,
  },
  {
    id: "campaign-management",
    name: "Campaign management system",
    description:
      "Connect your tools to manage member communications across channels.",
    icon: Megaphone,
  },
  {
    id: "redemption-catalog",
    name: "Redemption catalog",
    description:
      "Lists rewards members can redeem, including options from Currency Alliance.",
    icon: Gift,
  },
] as const;

export const rulesGuideHref =
  "https://www.currencyalliance.com/insights/loyalty-rules-and-the-loyalty-rules-engine";
