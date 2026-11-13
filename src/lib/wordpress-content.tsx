import "server-only";

import { DomUtils, parseDocument } from "htmlparser2";
import Image from "next/image";
import { createElement, type ReactNode } from "react";
import { siteLinks } from "@/lib/site-links";
import { legacyRedirects } from "@/lib/site-redirects";
import { getWordPressImageUrl } from "@/lib/wordpress-images";

type HtmlNode = ReturnType<typeof parseDocument>["children"][number];

const visibleTags = [
  "p",
  "h2",
  "h3",
  "h4",
  "blockquote",
  "ul",
  "ol",
  "li",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "sup",
  "sub",
  "figure",
  "figcaption",
  "table",
  "caption",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "br",
  "hr",
] as const;
const allowedTags = new Set<string>(visibleTags);
const hiddenTags = new Set([
  "script",
  "style",
  "object",
  "embed",
  "template",
  "noscript",
  "form",
  "svg",
]);
const website = "https://www.currencyalliance.com";
const websiteHosts = new Set([
  "www.currencyalliance.com",
  "currencyalliance.com",
  "www.blog.currencyalliance.com",
  "blog.currencyalliance.com",
  "cablogprod.wpenginepowered.com",
]);
const localPaths = new Set([
  "/",
  "/about-us",
  "/contact-us",
  "/our-technology",
  "/case-studies",
  "/insights",
  ...Object.values(siteLinks).filter(
    (path) => path.startsWith("/") && path !== siteLinks.register,
  ),
]);
const redirects = new Map(
  legacyRedirects.map(({ source, destination }) => [source, destination]),
);

type ArticleOptions = {
  omittedImage?: HtmlNode | null;
  insightSlugs?: ReadonlySet<string>;
};

export function parseWordPressArticle(html: string) {
  return parseDocument(html, { withStartIndices: true }).children;
}

export function wordpressText(html: string) {
  return DomUtils.textContent(parseDocument(html)).replace(/\s+/g, " ").trim();
}

function articleLink(
  value: string | undefined,
  insightSlugs?: ReadonlySet<string>,
) {
  const href = value?.trim();
  if (!href) return null;
  if (href.startsWith("#")) return href;

  try {
    const url = new URL(href, website);
    if (
      !["https:", "http:"].includes(url.protocol) ||
      url.username ||
      url.password
    )
      return null;
    if (websiteHosts.has(url.hostname)) {
      const path = url.pathname.replace(/\/+$/, "") || "/";
      const destination = redirects.get(path);
      if (destination) return `${destination}${url.search}${url.hash}`;
      if (
        localPaths.has(path) ||
        /^\/(?:case-studies|insights)\/[^/]+$/.test(path)
      ) {
        return `${path}${url.search}${url.hash}`;
      }

      const legacySlug = /^\/\d{4}\/\d{2}\/([^/]+)$/.exec(path)?.[1];
      if (legacySlug && insightSlugs?.has(legacySlug)) {
        const insight = `/insights/${legacySlug}`;
        return `${redirects.get(insight) ?? insight}${url.search}${url.hash}`;
      }
    }
    return url.href;
  } catch {
    return null;
  }
}

function positiveInteger(value: string | undefined, maximum: number) {
  const size = Number(value);
  return Number.isSafeInteger(size) && size > 0 && size <= maximum
    ? size
    : undefined;
}

function videoLink(value: string | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password || url.port)
      return null;

    if (
      url.hostname === "www.youtube.com" ||
      url.hostname === "www.youtube-nocookie.com"
    ) {
      const id = /^\/embed\/([\w-]{11})\/?$/.exec(url.pathname)?.[1];
      return id
        ? {
            href: `https://www.youtube.com/watch?v=${id}`,
            provider: "YouTube",
          }
        : null;
    }

    if (url.hostname === "player.vimeo.com") {
      const id = /^\/video\/(\d+)\/?$/.exec(url.pathname)?.[1];
      if (!id) return null;
      const href = new URL(`https://player.vimeo.com/video/${id}`);
      href.searchParams.set("dnt", "1");
      const hash = url.searchParams.get("h");
      if (hash && /^[a-f\d]+$/i.test(hash)) href.searchParams.set("h", hash);
      return { href: href.href, provider: "Vimeo" };
    }
  } catch {
    return null;
  }
  return null;
}

export function renderWordPressArticle(
  nodes: HtmlNode[],
  options: ArticleOptions = {},
): ReactNode[] {
  return nodes.flatMap((node): ReactNode[] => {
    if (node === options.omittedImage) return [];
    if (DomUtils.isText(node)) return [node.data];
    if (!DomUtils.isTag(node) || hiddenTags.has(node.name)) return [];

    const key = node.startIndex;
    if (node.name === "img") {
      const src = getWordPressImageUrl(node.attribs.src);
      return src
        ? [
            <Image
              key={key}
              src={src}
              alt={node.attribs.alt ?? ""}
              width={positiveInteger(node.attribs.width, 5000) ?? 1200}
              height={positiveInteger(node.attribs.height, 5000) ?? 675}
              className="h-auto max-w-full"
            />,
          ]
        : [];
    }

    if (node.name === "iframe") {
      const video = videoLink(node.attribs.src);
      return video
        ? [
            <a
              key={key}
              href={video.href}
              title={node.attribs.title || undefined}
              target="_blank"
              rel="noreferrer"
              className="my-3 inline-flex items-center gap-2"
            >
              Watch on {video.provider} <span aria-hidden="true">↗</span>
            </a>,
          ]
        : [];
    }

    const children = renderWordPressArticle(node.children, options);
    if (node.name === "a") {
      const href = articleLink(node.attribs.href, options.insightSlugs);
      return href
        ? [
            <a key={key} href={href}>
              {children}
            </a>,
          ]
        : children;
    }

    const tag = node.name === "h1" ? "h2" : node.name;
    if (!allowedTags.has(tag)) return children;
    if (tag === "br" || tag === "hr") return [createElement(tag, { key })];
    if (
      tag === "p" &&
      children.every((child) => typeof child === "string" && !child.trim())
    )
      return [];

    const id = node.attribs.id;
    const attributes = {
      key,
      id: id && /^[\w:.-]+$/.test(id) ? id : undefined,
    };

    if (tag === "table")
      return [
        <div
          key={key}
          role="region"
          aria-label="Article table"
          tabIndex={0}
          className="my-6 max-w-full overflow-x-auto focus-visible:outline-2 focus-visible:outline-teal"
        >
          <table id={attributes.id}>{children}</table>
        </div>,
      ];
    if (tag === "td" || tag === "th") {
      return [
        createElement(
          tag,
          {
            ...attributes,
            colSpan: positiveInteger(node.attribs.colspan, 100),
            rowSpan: positiveInteger(node.attribs.rowspan, 100),
          },
          children,
        ),
      ];
    }
    if (tag === "ol")
      return [
        <ol
          key={key}
          id={attributes.id}
          start={positiveInteger(node.attribs.start, 5000)}
        >
          {children}
        </ol>,
      ];

    return [
      createElement(tag as (typeof visibleTags)[number], attributes, children),
    ];
  });
}
