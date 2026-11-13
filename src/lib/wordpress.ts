import "server-only";

type WordPressTerm = { id: number; slug: string; name: string; count: number };
type EmbeddedTerm = WordPressTerm & { taxonomy: string };
type WordPressSeo = {
  description?: string;
  og_image?: { url: string }[];
  author?: string;
  article_published_time?: string;
  article_modified_time?: string;
};

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  date_gmt?: string | null;
  modified_gmt?: string | null;
  link: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content: { rendered: string };
  primary_featured_image: string | null;
  secondary_featured_image: string | null;
  categories?: number[];
  cluster?: number[];
  yoast_head_json?: WordPressSeo;
  _embedded?: { "wp:term"?: EmbeddedTerm[][] };
  _links?: unknown;
};

type WordPressResources = {
  posts: WordPressPost;
  "case-study": WordPressPost;
  cluster: WordPressTerm;
  categories: WordPressTerm;
};

export type WordPressQuery = {
  page?: number;
  per_page?: number;
  slug?: string;
  categories?: number | number[];
  cluster?: number | number[];
  exclude?: number | number[];
};

type Resource = keyof WordPressResources;
type FieldOf<R extends Resource> =
  | keyof WordPressResources[R]
  | (R extends "posts" | "case-study"
      ? `yoast_head_json.${keyof WordPressSeo}`
      : never);
type RootField<Field> = Field extends `${infer Root}.${string}` ? Root : Field;
type WordPressProjection<R extends Resource, Field extends FieldOf<R>> = Pick<
  WordPressResources[R],
  Extract<RootField<Field>, keyof WordPressResources[R]>
>;

export class WordPressRequestError extends Error {
  constructor(
    resource: Resource,
    readonly status: number,
    readonly code?: string,
  ) {
    super(`WordPress ${resource} returned ${status}.`);
  }
}

function paginationCount(value: string | null, fallback: number) {
  const count = Number(value ?? NaN);
  return Number.isSafeInteger(count) && count >= 0 ? count : fallback;
}

export function wordPressTimestamp(value?: string | null) {
  if (!value) return undefined;
  // WordPress GMT fields omit the timezone suffix.
  const timestamp = Date.parse(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value) ? `${value}Z` : value,
  );
  return Number.isFinite(timestamp)
    ? new Date(timestamp).toISOString()
    : undefined;
}

export async function fetchWordPressPage<
  R extends Resource,
  Field extends FieldOf<R> = keyof WordPressResources[R],
>(resource: R, query: WordPressQuery = {}, fields?: readonly Field[]) {
  const origin =
    process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.currencyalliance.com";
  const url = new URL(`/wp-json/wp/v2/${resource}`, origin);

  if (
    (resource === "posts" || resource === "case-study") &&
    (!fields?.length || fields.some((field) => field === "_embedded"))
  ) {
    url.searchParams.set("_embed", "wp:term");
  }
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }
  if (fields?.length) url.searchParams.set("_fields", fields.join(","));

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    const error: { code?: unknown } | null =
      response.status === 400 ? await response.json().catch(() => null) : null;
    throw new WordPressRequestError(
      resource,
      response.status,
      typeof error?.code === "string" ? error.code : undefined,
    );
  }

  const items: unknown = await response.json();
  if (!Array.isArray(items))
    throw new Error(`Invalid WordPress ${resource} response.`);

  return {
    items: items as WordPressProjection<R, Field>[],
    totalPages: paginationCount(
      response.headers.get("X-WP-TotalPages"),
      Number(items.length > 0),
    ),
    totalItems: paginationCount(
      response.headers.get("X-WP-Total"),
      items.length,
    ),
  };
}

export async function fetchWordPressCollection<
  R extends Resource,
  Field extends FieldOf<R> = keyof WordPressResources[R],
>(
  resource: R,
  query: Omit<WordPressQuery, "page" | "per_page">,
  fields: readonly Field[],
) {
  const first = await fetchWordPressPage(
    resource,
    { ...query, per_page: 100, page: 1 },
    fields,
  );
  const remaining = await Promise.all(
    Array.from({ length: Math.max(0, first.totalPages - 1) }, (_, index) =>
      fetchWordPressPage(
        resource,
        { ...query, per_page: 100, page: index + 2 },
        fields,
      ),
    ),
  );

  return [first, ...remaining].flatMap(({ items }) => items);
}
