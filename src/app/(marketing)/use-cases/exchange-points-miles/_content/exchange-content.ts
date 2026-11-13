export const exchangeActions = [
  {
    label: "Exchange",
    description:
      "Set a conversion rate and allow points to move into your program, out of it, or both.",
  },
  {
    label: "Issue",
    description:
      "Award your points or a partner’s currency for eligible purchases and other activities.",
  },
  {
    label: "Redeem",
    description:
      "Set how many points members need for a product or service online or in store.",
  },
] as const;

export const otherTransactions = [
  {
    title: "Buy, gift, or tip with points",
    description:
      "Let members buy points to top up a balance, transfer points to family or friends, or leave a tip with points.",
  },
  {
    title: "Gift cards and other value",
    description:
      "Support gift cards, cash balances, or carbon offsets alongside points and miles where partner terms allow.",
  },
] as const;

export const bankExchangeCaseStudy = {
  title: "How First Abu Dhabi Bank connects members to travel rewards",
  description:
    "Members can convert the bank’s rewards into points or miles with participating airlines and hotel groups through one Currency Alliance connection.",
  href: "https://www.currencyalliance.com/case-studies/connecting-first-abu-dhabi-banks-loyalty-program-to-travel-brands",
  logo: { src: "/partners/fab.png", width: 276, height: 162 },
} as const;
