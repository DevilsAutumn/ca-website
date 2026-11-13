export const discoverySteps = [
  {
    title: "Find a partner that fits",
    description:
      "Explore brands in travel, retail, payments, entertainment, and more. Choose partners based on where your members already spend, travel, or shop.",
  },
  {
    title: "Connect your loyalty program",
    description:
      "Integrate your existing system with the Currency Alliance API. Use that connection to work with additional brands already on the platform.",
  },
  {
    title: "Agree the terms and launch",
    description:
      "Decide how members can earn, redeem, or exchange points. The contracting framework helps you agree commercial terms, responsibilities, and what data to share.",
  },
] as const;

export const memberActions = [
  {
    label: "Earn",
    example: "Award travel points when a member shops with a retail partner.",
  },
  {
    label: "Redeem",
    example: "Let members spend points on a partner reward or gift card.",
  },
  {
    label: "Exchange",
    example: "Convert points from one loyalty program into another.",
  },
] as const;

export const bankTravelCaseStudy = {
  title: "From bank points to travel rewards.",
  customer: "First Abu Dhabi Bank",
  description:
    "The bank uses one connection to give its members a way to exchange their rewards for points or miles with participating airlines and hotel groups.",
  href: "https://www.currencyalliance.com/case-studies/connecting-first-abu-dhabi-banks-loyalty-program-to-travel-brands",
} as const;
