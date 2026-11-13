export type Story = {
  type: "Case study" | "Insight";
  title: string;
  summary: string;
  href: string;
  topic: string;
  logo?: string;
};

export const stories: Story[] = [
  {
    type: "Case study",
    title: "From bank points to travel rewards.",
    summary:
      "First Abu Dhabi Bank connects members to airline and hotel loyalty programs.",
    href: "/case-studies/connecting-first-abu-dhabi-banks-loyalty-program-to-travel-brands",
    topic: "Banking & travel",
    logo: "/partners/fab.png",
  },
  {
    type: "Case study",
    title: "Everyday spending. Long-term value.",
    summary:
      "Active Super members earn cashback at participating retailers through linked cards.",
    href: "/case-studies/active-super-enables-members-to-earn-everyday-via-linked-payment-cards",
    topic: "Card-linked loyalty",
    logo: "/partners/active-super.svg",
  },
  {
    type: "Insight",
    title: "Build a partner mix that fits your members.",
    summary:
      "How to choose complementary partners for engagement, insight, and member value.",
    href: "/insights/loyalty-partnerships-how-to-optimize-your-partner-mix",
    topic: "Partnership strategy",
  },
];
