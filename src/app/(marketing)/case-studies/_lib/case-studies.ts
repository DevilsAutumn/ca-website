import "server-only";

import { cache } from "react";
import { editorialSeoFields, getEditorialSeo } from "@/lib/seo/articles";
import {
  fetchWordPressCollection,
  fetchWordPressPage,
  type WordPressPost,
} from "@/lib/wordpress";
import { wordpressText } from "@/lib/wordpress-content";
import { getWordPressImageUrl } from "@/lib/wordpress-images";

const summaryFields = [
  "id",
  "slug",
  "title",
  "yoast_head_json",
  "primary_featured_image",
  "secondary_featured_image",
  "_embedded",
  "_links",
] as const;

type SummaryPost = Pick<WordPressPost, (typeof summaryFields)[number]>;

function toSummary(post: SummaryPost) {
  const topics = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term.taxonomy === "cluster")
    .map(({ slug, name }) => ({ slug, name: wordpressText(name) }));

  return {
    id: post.id,
    slug: post.slug,
    title: wordpressText(post.title.rendered),
    description: wordpressText(post.yoast_head_json?.description ?? ""),
    image:
      getWordPressImageUrl(post.secondary_featured_image) ??
      getWordPressImageUrl(post.primary_featured_image),
    topics,
  };
}

export type CaseStudySummary = ReturnType<typeof toSummary>;
export async function getCaseStudySummaries() {
  const posts = await fetchWordPressCollection("case-study", {}, summaryFields);
  return posts.map(toSummary);
}

export const getCaseStudy = cache(async (slug: string) => {
  if (!slug || slug.length > 200 || slug.includes("/")) return null;

  const { items } = await fetchWordPressPage(
    "case-study",
    { slug, per_page: 1 },
    [...summaryFields, ...editorialSeoFields],
  );
  const post = items[0];
  if (!post) return null;

  const summary = toSummary(post);
  const cover =
    getWordPressImageUrl(post.primary_featured_image) ?? summary.image;
  return {
    ...summary,
    cover,
    body: post.content.rendered,
    seo: getEditorialSeo(post, cover),
  };
});

export type CaseStudy = NonNullable<Awaited<ReturnType<typeof getCaseStudy>>>;
