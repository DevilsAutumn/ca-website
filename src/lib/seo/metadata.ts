import type { Metadata } from "next";
import { siteIndexable, siteName, siteUrl } from "./site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  image?: string | null;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
  };
};

const defaultImage = {
  url: siteUrl("/social-preview.png"),
  width: 1200,
  height: 630,
  alt: siteName,
};

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  image,
  article,
}: PageMetadata): Metadata {
  const brandedTitle = `${title} | ${siteName}`;
  const url = siteUrl(path);
  const images = [image ? { url: image } : defaultImage];
  const social = { title: brandedTitle, description, images };
  const openGraph = { ...social, url, siteName };

  return {
    title: brandedTitle,
    description,
    alternates: { canonical: url },
    robots:
      siteIndexable && index
        ? undefined
        : { index: false, follow: siteIndexable },
    openGraph: article
      ? { ...openGraph, type: "article", ...article }
      : { ...openGraph, type: "website" },
    twitter: { ...social, card: "summary_large_image" },
  };
}
