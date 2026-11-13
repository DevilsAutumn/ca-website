import { siteName, siteUrl, socialProfiles } from "./site";

export const organizationId = siteUrl("/#organization");

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      url: siteUrl("/"),
      logo: siteUrl("/logo.svg"),
      sameAs: Object.values(socialProfiles),
    },
    {
      "@type": "WebSite",
      "@id": siteUrl("/#website"),
      name: siteName,
      url: siteUrl("/"),
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};
