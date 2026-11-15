import { siteLinks } from "@/lib/site-links";

export type NavigationLink = {
  label: string;
  href: string;
  target?: "_blank";
};

type NavigationSection = {
  label?: string;
  links: readonly NavigationLink[];
};

export type NavigationMenu = {
  type: "menu";
  id: string;
  label: string;
  sections: readonly NavigationSection[];
};

type NavigationItem =
  NavigationMenu | { type: "link"; id: string; label: string; href: string };

export const navigationItems: readonly NavigationItem[] = [
  {
    type: "menu",
    id: "platform",
    label: "Platform",
    sections: [
      {
        label: "Partner collaboration",
        links: [
          {
            label: "Partner marketplace",
            href: siteLinks.partnerMarketplace,
          },
          {
            label: "Partnership management",
            href: siteLinks.partnershipManagement,
          },
          {
            label: "Loyalty account linking",
            href: siteLinks.loyaltyAccountLinking,
          },
          { label: "Partner accrual", href: siteLinks.partnerAccrual },
          {
            label: "Partner contracting",
            href: siteLinks.partnerContracting,
          },
        ],
      },
      {
        label: "Loyalty services",
        links: [
          {
            label: "Loyalty rules engine",
            href: siteLinks.loyaltyRulesEngine,
          },
          {
            label: "Points bank",
            href: siteLinks.loyaltyPointsBank,
          },
          {
            label: "Voucher platform",
            href: siteLinks.loyaltyVoucherPlatform,
          },
        ],
      },
      {
        label: "Customer interfaces",
        links: [
          {
            label: "White-label solutions",
            href: siteLinks.whiteLabelSolutions,
          },
          {
            label: "Universal Points Terminal",
            href: siteLinks.universalPointsTerminal,
          },
        ],
      },
    ],
  },
  {
    type: "menu",
    id: "solutions",
    label: "Solutions",
    sections: [
      {
        label: "Programs & partnerships",
        links: [
          {
            label: "Launch a loyalty program",
            href: siteLinks.launchLoyaltyProgram,
          },
          {
            label: "Modernise an existing program",
            href: siteLinks.moderniseLoyaltyProgram,
          },
          {
            label: "Grow a loyalty partner network",
            href: siteLinks.coalitionLoyalty,
          },
        ],
      },
      {
        label: "Member experiences",
        links: [
          {
            label: "Exchange points and miles",
            href: siteLinks.exchangePointsMiles,
          },
          { label: "Pay with points", href: siteLinks.payWithPoints },
          {
            label: "Card-linked loyalty",
            href: siteLinks.cardLinkedLoyalty,
          },
          {
            label: "Ecommerce and retail loyalty",
            href: siteLinks.ecommerceLoyalty,
          },
        ],
      },
    ],
  },
  {
    type: "link",
    id: "technology",
    label: "Technology",
    href: "/our-technology",
  },
  {
    type: "link",
    id: "pricing",
    label: "Pricing",
    href: siteLinks.pricing,
  },
  {
    type: "menu",
    id: "resources",
    label: "Resources",
    sections: [
      {
        links: [
          {
            label: "Case studies",
            href: "/case-studies",
          },
          {
            label: "Insights",
            href: "/insights",
          },
          {
            label: "API documentation",
            href: siteLinks.apiDocumentation,
            target: "_blank",
          },
        ],
      },
    ],
  },
  {
    type: "menu",
    id: "company",
    label: "Company",
    sections: [
      {
        links: [
          {
            label: "About us",
            href: "/about-us",
          },
          {
            label: "Contact us",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
];

export function isCurrentNavigationLink(pathname: string, href: string) {
  if (!href.startsWith("/") || href.includes("#")) return false;
  return pathname === href || pathname.startsWith(href + "/");
}

export function isNavigationItemCurrent(
  pathname: string,
  item: NavigationItem,
) {
  if (item.type === "link") return isCurrentNavigationLink(pathname, item.href);
  return item.sections.some((section) =>
    section.links.some((link) => isCurrentNavigationLink(pathname, link.href)),
  );
}
