import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { siteUrl } from "@/lib/seo/site";
import { siteLinks } from "@/lib/site-links";
import { legacyInsightRedirects } from "@/lib/site-redirects";
import { fetchWordPressCollection, wordPressTimestamp } from "@/lib/wordpress";

const pagePaths = [
  "/",
  "/about-us",
  "/our-technology",
  siteLinks.solutions,
  "/insights",
  "/case-studies",
  "/contact-us",
  siteLinks.privacyPolicy,
  siteLinks.termsOfUse,
  siteLinks.register,
  ...Object.values(siteLinks).filter(
    (href) => href.startsWith("/solutions/") || href.startsWith("/use-cases/"),
  ),
];

const legacyPaths = new Set(legacyInsightRedirects.map(({ source }) => source));

async function getEditorialEntries(
  section: "insights" | "case-studies",
  resource: "posts" | "case-study",
): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchWordPressCollection(resource, {}, [
    "slug",
    "modified_gmt",
    "date_gmt",
  ]);

  return posts.flatMap(({ slug, modified_gmt, date_gmt }) => {
    if (!slug || slug.length > 200 || !/^(?:[\w-]|%[\da-f]{2})+$/i.test(slug))
      return [];

    const path = `/${section}/${slug}`;
    if (legacyPaths.has(path)) return [];
    return [
      {
        url: siteUrl(path),
        lastModified:
          wordPressTimestamp(modified_gmt) ?? wordPressTimestamp(date_gmt),
      },
    ];
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Let the website build even when the editorial CMS is unavailable.
  await connection();
  const editorial = await Promise.allSettled([
    getEditorialEntries("insights", "posts"),
    getEditorialEntries("case-studies", "case-study"),
  ]);
  const entries = [
    ...pagePaths.map((path) => ({ url: siteUrl(path) })),
    ...editorial.flatMap((result) =>
      result.status === "fulfilled" ? result.value : [],
    ),
  ];
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
