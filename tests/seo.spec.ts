import { expect, test, type APIRequestContext } from "@playwright/test";
import { DomUtils, parseDocument } from "htmlparser2";

const origin = "https://www.currencyalliance.com";
const insight =
  "/insights/calculating-total-cost-of-ownership-in-a-loyalty-program";
const caseStudy =
  "/case-studies/partner-network-scaling-for-the-flying-blue-loyalty-program";
const crawler = { "User-Agent": "Twitterbot/1.0" };

async function getCrawlerPage(request: APIRequestContext, path: string) {
  const response = await request.get(path, {
    headers: crawler,
    maxRedirects: 0,
  });
  const document = parseDocument(await response.text());
  const head = DomUtils.getElementsByTagName("head", document.children)[0];
  const meta = DomUtils.getElementsByTagName("meta", head.children);
  const getMeta = (name: string) =>
    meta.find((tag) => (tag.attribs.name ?? tag.attribs.property) === name)
      ?.attribs.content;
  const canonical = DomUtils.getElementsByTagName("link", head.children).find(
    (tag) => tag.attribs.rel === "canonical",
  )?.attribs.href;
  const title = DomUtils.getElementsByTagName("title", head.children)[0];

  return {
    response,
    document,
    canonical,
    getMeta,
    title: title ? DomUtils.textContent(title) : "",
  };
}

test("the sitemap lists only reachable canonical pages", async ({
  request,
}) => {
  const [robots, sitemap] = await Promise.all([
    request.get("/robots.txt"),
    request.get("/sitemap.xml"),
  ]);
  expect(robots.ok()).toBe(true);
  const rules = await robots.text();
  expect(rules).toContain(`Sitemap: ${origin}/sitemap.xml`);
  expect(rules).toContain("Disallow: /api/");
  expect(sitemap.ok()).toBe(true);

  const xml = parseDocument(await sitemap.text(), { xmlMode: true });
  const urls = DomUtils.getElementsByTagName("loc", xml.children).map((tag) =>
    DomUtils.textContent(tag),
  );
  expect(urls).toEqual(
    expect.arrayContaining([
      origin,
      origin + "/solutions",
      origin + insight,
      origin + caseStudy,
    ]),
  );
  expect(urls).toHaveLength(new Set(urls).size);
  expect(urls).not.toContain(origin + "/headless-loyalty-platform");
  expect(urls).not.toContain(
    origin + "/insights/loyalty-point-liquidity-drives-customer-engagement",
  );
  expect(
    DomUtils.getElementsByTagName("lastmod", xml.children).map((tag) =>
      DomUtils.textContent(tag),
    ),
  ).toContain("2026-04-03T09:00:00.000Z");

  const titles = new Set<string>();
  for (const url of urls) {
    const address = new URL(url);
    expect(address.origin).toBe(origin);
    expect(address.search).toBe("");
    const { response, canonical, getMeta, title } = await getCrawlerPage(
      request,
      address.pathname,
    );
    expect(response.status(), url).toBe(200);
    expect(canonical, url).toBe(url);
    expect(title, url).toMatch(/ \| Currency Alliance$/);
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    expect(getMeta("description"), url).toBeTruthy();
    expect(getMeta("robots") ?? "", url).not.toContain("noindex");
    expect(getMeta("og:url"), url).toBe(url);
    expect(getMeta("og:image"), url).toMatch(/^https:\/\//);
    expect(getMeta("twitter:card"), url).toBe("summary_large_image");
  }
});

test("editorial pagination and topic filters have distinct indexing rules", async ({
  request,
}) => {
  const [pageTwo, topicInsights, topicStudies] = await Promise.all([
    getCrawlerPage(request, "/insights?page=2&utm_source=email"),
    getCrawlerPage(request, "/insights?cluster=loyalty-strategy"),
    getCrawlerPage(request, "/case-studies?cluster=partner-connectivity"),
  ]);
  expect(pageTwo.canonical).toBe(origin + "/insights?page=2");
  expect(pageTwo.title).toContain("Page 2");
  expect(pageTwo.getMeta("robots") ?? "").not.toContain("noindex");
  expect(topicInsights.canonical).toBe(origin + "/insights");
  expect(topicInsights.getMeta("robots")).toContain("noindex");
  expect(topicStudies.canonical).toBe(origin + "/case-studies");
  expect(topicStudies.getMeta("robots")).toContain("noindex");
});

test("homepage and article structured data use canonical URLs", async ({
  request,
}) => {
  const [home, article, study, image] = await Promise.all([
    getCrawlerPage(request, "/"),
    getCrawlerPage(request, insight),
    getCrawlerPage(request, caseStudy),
    request.get("/social-preview.png"),
  ]);
  const data = (page: typeof home) => {
    const script = DomUtils.getElementsByTagName(
      "script",
      page.document.children,
    ).find((tag) => tag.attribs.type === "application/ld+json");
    return script ? JSON.parse(DomUtils.textContent(script)) : null;
  };

  expect(data(home)["@graph"]).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ "@type": "WebSite", url: origin }),
      expect.objectContaining({
        "@type": "Organization",
        logo: origin + "/logo.svg",
      }),
    ]),
  );
  expect(data(article)).toMatchObject({
    "@type": "BlogPosting",
    url: origin + insight,
    datePublished: "2026-04-01T09:00:00.000Z",
  });
  expect(data(study)).toMatchObject({
    "@type": "Article",
    url: origin + caseStudy,
  });
  expect(article.getMeta("og:type")).toBe("article");
  expect(home.getMeta("og:image")).toBe(origin + "/social-preview.png");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
});

test("old URLs redirect permanently and missing editorial pages are excluded from search", async ({
  request,
}) => {
  const redirects = [
    ["/headless-loyalty-platform", "/our-technology"],
    ["/b2b-marketplace", "/solutions/loyalty-partnerships-marketplace"],
    ["/custom-loyalty-program", "/use-cases/launch-loyalty-program"],
    ["/loyalty-industry-insights", "/insights"],
    ["/sitemap-0.xml", "/sitemap.xml"],
    [
      "/insights/beyond-the-hotel-earning-guest-loyalty-with-hospitality-tech",
      "/insights/hotel-loyalty-how-to-leverage-local-partnerships",
    ],
  ];
  for (const [source, destination] of redirects) {
    const response = await request.get(source, { maxRedirects: 0 });
    expect(response.status(), source).toBe(308);
    expect(response.headers().location, source).toBe(destination);
  }

  for (const path of [
    "/insights/does-not-exist",
    "/case-studies/does-not-exist",
  ]) {
    const { response, canonical, getMeta } = await getCrawlerPage(
      request,
      path,
    );
    expect(response.status(), path).toBe(404);
    expect(canonical, path).toBeUndefined();
    expect(getMeta("robots"), path).toContain("noindex");
  }
});
