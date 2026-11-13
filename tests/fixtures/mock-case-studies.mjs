const partnerConnectivity = {
  id: 1,
  slug: "partner-connectivity",
  name: "Partner Connectivity",
  taxonomy: "cluster",
};
const cardLinkedLoyalty = {
  id: 2,
  slug: "card-linked-loyalty",
  name: "Card-Linked Loyalty",
  taxonomy: "cluster",
};

export const caseStudies = [
  {
    id: 10,
    slug: "partner-network-scaling-for-the-flying-blue-loyalty-program",
    title: {
      rendered: "Partner network scaling for the Flying Blue loyalty program",
    },
    yoast_head_json: {
      description: "A travel loyalty program grows its partner network.",
    },
    content: { rendered: "<p>Flying Blue works with travel partners.</p>" },
    _embedded: { "wp:term": [[partnerConnectivity]] },
  },
  {
    id: 11,
    slug: "connecting-first-abu-dhabi-banks-loyalty-program-to-travel-brands",
    title: {
      rendered:
        "Connecting First Abu Dhabi Bank&#8217;s loyalty program to travel brands",
    },
    yoast_head_json: {
      description:
        "Bank loyalty members can exchange points with travel partners.",
    },
    content: {
      rendered: `<p>Members can exchange loyalty points with travel partners.</p>
        <script>window.untrustedCaseStudyScript = true;</script>
        <p><a href="javascript:alert(1)">More about the program</a></p>
        <p><a href="https://www.blog.currencyalliance.com/solutions/low-code-loyalty-white-labels">White label solutions</a></p>`,
    },
    _embedded: { "wp:term": [[partnerConnectivity]] },
  },
  {
    id: 12,
    slug: "active-super-enables-members-to-earn-everyday-via-linked-payment-cards",
    title: {
      rendered:
        "Active Super enables members to earn everyday via linked payment cards",
    },
    excerpt: {
      rendered:
        "<p>Members earn points when shopping with their linked card.</p>",
    },
    content: { rendered: "<p>Members can earn with their linked cards.</p>" },
    _embedded: { "wp:term": [[cardLinkedLoyalty]] },
  },
];
