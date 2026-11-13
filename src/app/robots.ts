import type { MetadataRoute } from "next";
import { siteIndexable, siteUrl } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: siteIndexable ? siteUrl("/sitemap.xml") : undefined,
  };
}
