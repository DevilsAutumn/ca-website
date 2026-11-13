import "server-only";

import { cache } from "react";
import { editorialSeoFields, getEditorialSeo } from "@/lib/seo/articles";
import { legacyInsightRedirects } from "@/lib/site-redirects";
import {
  fetchWordPressCollection,
  fetchWordPressPage,
  WordPressRequestError,
  type WordPressQuery,
} from "@/lib/wordpress";
import { wordpressText } from "@/lib/wordpress-content";
import { getWordPressImageUrl } from "@/lib/wordpress-images";
import { parseInsightPage } from "./archive-url";

const summaryFields = [
  "id",
  "slug",
  "date",
  "title",
  "cluster",
  "primary_featured_image",
  "secondary_featured_image",
  "yoast_head_json.description",
  "yoast_head_json.og_image",
] as const;
const legacyIds = legacyInsightRedirects.flatMap(({ id }) =>
  id === undefined ? [] : [id],
);
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function fetchInsightPosts({
  exclude = [],
  ...query
}: Omit<WordPressQuery, "exclude"> & { exclude?: number[] }) {
  return fetchWordPressPage(
    "posts",
    { ...query, exclude: [...legacyIds, ...exclude] },
    summaryFields,
  );
}

type InsightPost = Awaited<
  ReturnType<typeof fetchInsightPosts>
>["items"][number];

function toTopic({
  id,
  slug,
  name,
}: {
  id: number;
  slug: string;
  name: string;
}) {
  return { id, slug, name: wordpressText(name) };
}

function toInsightSummary(post: InsightPost) {
  const primary = getWordPressImageUrl(post.primary_featured_image);
  const secondary = getWordPressImageUrl(post.secondary_featured_image);
  const fallback = getWordPressImageUrl(
    post.yoast_head_json?.og_image?.[0]?.url,
  );
  const date = post.date?.slice(0, 10);
  const timestamp = date ? Date.parse(date) : NaN;

  return {
    id: post.id,
    slug: post.slug,
    title: wordpressText(post.title.rendered),
    description: wordpressText(post.yoast_head_json?.description ?? ""),
    date,
    dateLabel: Number.isFinite(timestamp) ? dateFormat.format(timestamp) : "",
    image: secondary ?? primary ?? fallback,
    cover: primary ?? fallback ?? secondary,
    topicIds: post.cluster ?? [],
  };
}

export type InsightSummary = ReturnType<typeof toInsightSummary>;

async function getInsightTopics() {
  const topics = await fetchWordPressCollection("cluster", {}, [
    "id",
    "slug",
    "name",
  ]);
  return topics.map(toTopic).sort((a, b) => a.name.localeCompare(b.name, "en"));
}

export const getInsightPage = cache(
  async (page: number, topicId: number | undefined) => {
    const query = { page, per_page: 12, cluster: topicId };
    const result = await fetchInsightPosts(query).catch((error) => {
      if (
        page > 1 &&
        error instanceof WordPressRequestError &&
        error.code === "rest_post_invalid_page_number"
      )
        return null;
      throw error;
    });

    if (!result || (page > 1 && page > result.totalPages)) return null;
    return {
      articles: result.items.map(toInsightSummary),
      totalItems: result.totalItems,
      totalPages: result.totalPages,
    };
  },
);

export type InsightSearchParams = Record<string, string | string[] | undefined>;

export async function getInsightArchive({
  cluster,
  page: requestedPage,
}: InsightSearchParams) {
  const page = parseInsightPage(requestedPage);
  const topicsRequest = getInsightTopics();
  const selected =
    typeof cluster === "string" && cluster
      ? (await topicsRequest).find(({ slug }) => slug === cluster)
      : undefined;
  const [topics, result] = await Promise.all([
    topicsRequest,
    getInsightPage(page, selected?.id),
  ]);

  return { page, topics, selected, result };
}

export const getInsight = cache(async (slug: string) => {
  if (!slug || slug.length > 200 || slug.includes("/")) return null;

  const { items } = await fetchWordPressPage("posts", { slug, per_page: 1 }, [
    ...summaryFields,
    ...editorialSeoFields,
    "_embedded",
    "_links",
  ]);
  const post = items[0];
  if (!post) return null;

  const topics = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term.taxonomy === "cluster")
    .map(toTopic);

  const summary = toInsightSummary(post);
  return {
    ...summary,
    body: post.content.rendered,
    seo: getEditorialSeo(post, summary.cover),
    topics,
  };
});

export type Insight = NonNullable<Awaited<ReturnType<typeof getInsight>>>;

export async function getPublishedInsightSlugs() {
  const posts = await fetchWordPressCollection("posts", {}, ["slug"]);
  return new Set(posts.map(({ slug }) => slug));
}

export async function getRelatedInsights({ id, topicIds }: Insight) {
  const { items } = await fetchInsightPosts({
    per_page: 3,
    cluster: topicIds.length ? topicIds : undefined,
    exclude: [id],
  });
  return items.map(toInsightSummary);
}
