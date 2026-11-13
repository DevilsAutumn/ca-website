export const siteName = "Currency Alliance";
export const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://www.currencyalliance.com",
).origin;

export const siteIndexable =
  process.env.NODE_ENV === "production" &&
  process.env.SITE_NOINDEX !== "1" &&
  process.env.VERCEL_ENV !== "preview";

export const socialProfiles = {
  linkedin: "https://www.linkedin.com/company/currency-alliance/",
  youtube: "https://www.youtube.com/@CurrencyAlliance",
} as const;

export function siteUrl(path: string) {
  return path === "/" ? siteOrigin : new URL(path, siteOrigin).href;
}
