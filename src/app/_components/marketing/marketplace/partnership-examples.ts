import {
  Coins,
  Gift,
  Hotel,
  Plane,
  ShoppingBag,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

type PartnershipNode = {
  title: string;
  icon: LucideIcon;
};

export type PartnershipExample = {
  id: string;
  label: string;
  title: string;
  description: string;
  illustrationLabel: string;
  source: PartnershipNode;
  destination: PartnershipNode;
  bidirectional?: boolean;
};

export const partnershipExamples: PartnershipExample[] = [
  {
    id: "earn",
    label: "Earn",
    title: "Turn partner purchases into points.",
    description:
      "Reward members in your loyalty currency when they spend with a complementary brand.",
    illustrationLabel:
      "Example: purchases at a retail partner earn points in your loyalty program.",
    source: {
      title: "Retail partner",
      icon: ShoppingBag,
    },
    destination: {
      title: "Your loyalty points",
      icon: Coins,
    },
  },
  {
    id: "exchange",
    label: "Exchange",
    title: "Let points travel between programs.",
    description:
      "Give members the freedom to exchange balances between participating loyalty programs.",
    illustrationLabel:
      "Example: members exchange hotel points and airline miles between partnered programs.",
    source: {
      title: "Hotel points",
      icon: Hotel,
    },
    destination: {
      title: "Airline miles",
      icon: Plane,
    },
    bidirectional: true,
  },
  {
    id: "redeem",
    label: "Redeem",
    title: "Give your points more places to go.",
    description:
      "Let members use their points with partner brands for products, services, and experiences.",
    illustrationLabel:
      "Example: members redeem points from your loyalty program for rewards from a partner brand.",
    source: {
      title: "Loyalty points",
      icon: WalletCards,
    },
    destination: {
      title: "Partner rewards",
      icon: Gift,
    },
  },
];
