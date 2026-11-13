import { siteLinks } from "./site-links";

const legacyPageRedirects = [
  ["/terms-and-conditions", siteLinks.termsOfUse],
  ["/headless-loyalty-platform", "/our-technology"],
  ["/b2b-marketplace", siteLinks.partnerMarketplace],
  ["/custom-loyalty-program", siteLinks.launchLoyaltyProgram],
  ["/success-stories", "/insights"],
  ["/loyalty-industry-insights", "/insights"],
  ["/sitemap-0.xml", "/sitemap.xml"],
] as const;

type InsightRedirect = { id?: number; source: string; destination: string };

export const legacyInsightRedirects: readonly InsightRedirect[] = [
  {
    id: 54270,
    source: "/insights/loyalty-point-liquidity-drives-customer-engagement",
    destination:
      "/insights/loyalty-programs-should-you-issue-your-own-points-or-miles",
  },
  {
    id: 55454,
    source: "/insights/characteristics-of-a-winning-loyalty-program-in-2025",
    destination:
      "/insights/7-loyalty-trends-for-2025-fads-fundamentals-and-innovations",
  },
  {
    source:
      "/insights/beyond-the-hotel-earning-guest-loyalty-with-hospitality-tech",
    destination: "/insights/hotel-loyalty-how-to-leverage-local-partnerships",
  },
];

export const legacyRedirects = [
  ...legacyPageRedirects.map(([source, destination]) => ({
    source,
    destination,
  })),
  ...legacyInsightRedirects,
];
