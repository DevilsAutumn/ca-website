import type { StaticImageData } from "next/image";
import { siteLinks } from "@/lib/site-links";
import accrualImage from "../_assets/accrual.jpg";
import exchangeImage from "../_assets/exchange-gift-cards.jpg";
import linkingImage from "../_assets/link-loyalty-accounts.jpg";
import portalImage from "../_assets/member-portal.jpg";
import paymentImage from "../_assets/pay-with-points.jpg";

export type LoyaltyScreen = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  action?: { label: string; href: string };
};

export const loyaltyScreens: readonly LoyaltyScreen[] = [
  {
    id: "exchange",
    label: "Exchange",
    title: "Give points more ways to be used.",
    description:
      "Let members exchange their points for gift cards from your brand or a partner, or convert them to another loyalty currency, inside your site or app.",
    image: exchangeImage,
    alt: "A customer viewing a gift card and voucher catalog on a desktop screen",
    action: {
      label: "Explore voucher rewards",
      href: siteLinks.loyaltyVoucherPlatform,
    },
  },
  {
    id: "account-linking",
    label: "Account linking",
    title: "Connect a member’s partner account.",
    description:
      "Link accounts so members can earn, exchange, or redeem with participating programs. Partner-managed sign-in and security tokens can limit the member data shared.",
    image: linkingImage,
    alt: "A customer using a laptop and phone to access their loyalty account",
    action: {
      label: "Explore account linking",
      href: siteLinks.loyaltyAccountLinking,
    },
  },
  {
    id: "accrual",
    label: "Partner accrual",
    title: "Offer a choice of points at checkout.",
    description:
      "After an online purchase, let customers choose whether to earn your points or a participating partner’s points or miles. The award is issued in real time.",
    image: accrualImage,
    alt: "A loyalty offer displayed inside a mobile shopping experience",
    action: {
      label: "Explore partner accrual",
      href: siteLinks.partnerAccrual,
    },
  },
  {
    id: "member-portal",
    label: "Member portal",
    title: "Keep the member account in your brand.",
    description:
      "Embed a branded portal where members can check their balance, review their transaction history, and find offers and redemption options.",
    image: portalImage,
    alt: "A branded member portal showing a balance and transaction history on a desktop screen",
  },
  {
    id: "pay-with-points",
    label: "Pay with points",
    title: "Let members spend points at checkout.",
    description:
      "Add a payment screen that lets members cover all or part of an order with your points or a participating partner’s points or miles.",
    image: paymentImage,
    alt: "A customer completing an online payment on a laptop",
    action: {
      label: "Explore pay with points",
      href: siteLinks.payWithPoints,
    },
  },
];

export const avoltaWhiteLabelCase = {
  title: "How Avolta links accounts within its branded journey",
  description:
    "Red by Dufry members could link their Avios accounts through a branded screen with sign-in handled by the partner. Currency Alliance also hosts the wallet for vouchers and gift cards.",
  href: "https://www.currencyalliance.com/case-studies/avolta-airport-retail-and-dining-collaborations-with-partners",
  logo: { src: "/partners/avolta.png", width: 225, height: 68 },
} as const;
