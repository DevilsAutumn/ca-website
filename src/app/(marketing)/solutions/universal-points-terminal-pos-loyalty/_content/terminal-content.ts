export const checkoutSteps = [
  {
    title: "Identify the member",
    description:
      "Scan the QR code or barcode on a member’s app or loyalty card, or enter their member ID at checkout.",
  },
  {
    title: "Apply an offer and choose a currency",
    description:
      "Tailor offers using member or inventory data. Let members choose your loyalty currency or a participating partner’s points or miles.",
  },
  {
    title: "Award points or take payment",
    description:
      "Issue points or let members pay entirely or partly with points or miles. Two-factor verification is available for points payments.",
  },
] as const;

export const airMilesTerminalCase = {
  title: "How Kognitiv brought Air Miles Middle East to partner stores",
  description:
    "Kognitiv adapted the Terminal for Air Miles Middle East. Participating stores used the browser app to identify members, award points, and accept points as payment without changing their POS software.",
  href: "https://www.currencyalliance.com/case-studies/coalition-loyalty-allowing-sme-retailers-to-collaborate-without-integrations",
  logo: { src: "/partners/kognitiv.png", width: 366, height: 76 },
} as const;
