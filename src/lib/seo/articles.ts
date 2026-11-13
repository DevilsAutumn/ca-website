import "server-only";

import { DomUtils, parseDocument } from "htmlparser2";
import { wordPressTimestamp, type WordPressPost } from "@/lib/wordpress";
import { wordpressText } from "@/lib/wordpress-content";
import { getWordPressImageUrl } from "@/lib/wordpress-images";
import { pageMetadata } from "./metadata";
import { siteName, siteUrl } from "./site";
import { organizationId } from "./structured-data";

export const editorialSeoFields = [
  "content",
  "excerpt",
  "date_gmt",
  "modified_gmt",
  "yoast_head_json.author",
  "yoast_head_json.article_published_time",
  "yoast_head_json.article_modified_time",
] as const;

function excerptDescription(excerpt: string, body: string) {
  const text = wordpressText(excerpt);
  const paragraph = text
    ? undefined
    : DomUtils.findOne(
        (node) => node.name === "p" && DomUtils.innerText(node).trim() !== "",
        parseDocument(body).children,
      );
  const description =
    text ||
    (paragraph && DomUtils.innerText(paragraph).replace(/\s+/g, " ").trim()) ||
    "";

  if (description.length <= 160) return description;
  const prefix = description.slice(0, 159);
  const lastSpace = prefix.lastIndexOf(" ");
  return `${lastSpace > 0 ? prefix.slice(0, lastSpace) : prefix}…`;
}

export function getEditorialSeo(
  post: Pick<
    WordPressPost,
    "content" | "excerpt" | "date_gmt" | "modified_gmt" | "yoast_head_json"
  >,
  cover: string | null,
) {
  const seo = post.yoast_head_json;
  return {
    description:
      wordpressText(seo?.description ?? "") ||
      excerptDescription(post.excerpt?.rendered ?? "", post.content.rendered),
    image: cover ?? getWordPressImageUrl(seo?.og_image?.[0]?.url),
    publishedTime:
      wordPressTimestamp(seo?.article_published_time) ??
      wordPressTimestamp(post.date_gmt),
    modifiedTime:
      wordPressTimestamp(seo?.article_modified_time) ??
      wordPressTimestamp(post.modified_gmt),
    author: wordpressText(seo?.author ?? "") || undefined,
  };
}

type EditorialSection = "insights" | "case-studies";
type EditorialArticle = {
  slug: string;
  title: string;
  seo: ReturnType<typeof getEditorialSeo>;
};

export function articleMetadata(
  section: EditorialSection,
  { slug, title, seo }: EditorialArticle,
) {
  const { description, image, publishedTime, modifiedTime } = seo;
  return pageMetadata({
    title,
    description,
    path: `/${section}/${slug}`,
    image,
    article: { publishedTime, modifiedTime },
  });
}

export function articleStructuredData(
  section: EditorialSection,
  { slug, title, seo }: EditorialArticle,
) {
  const url = siteUrl(`/${section}/${slug}`);
  return {
    "@context": "https://schema.org",
    "@type": section === "insights" ? "BlogPosting" : "Article",
    headline: title,
    description: seo.description || undefined,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: seo.image ?? undefined,
    datePublished: seo.publishedTime,
    dateModified: seo.modifiedTime,
    author: seo.author
      ? {
          "@type": seo.author === siteName ? "Organization" : "Person",
          name: seo.author,
        }
      : undefined,
    publisher: { "@id": organizationId },
    inLanguage: "en",
  };
}
