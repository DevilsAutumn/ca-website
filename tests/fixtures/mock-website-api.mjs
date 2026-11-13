import { createServer } from "node:http";
import { caseStudies } from "./mock-case-studies.mjs";
import { insightPosts, insightTopics } from "./mock-insights.mjs";

const cms = new Map([
  ["/wp-json/wp/v2/case-study", caseStudies],
  ["/wp-json/wp/v2/posts", insightPosts],
  ["/wp-json/wp/v2/cluster", insightTopics],
]);

const phoneCodes = [
  { id: 2510769, value: "Spain +34" },
  { id: 6251999, value: "Canada +1" },
];
const countries = [{ id: 2510769, value: "Spain" }];
const formPaths = new Set([
  "/website/contact/",
  "/partners/register/validate/",
  "/partners/register/",
  "/website/subscribe-newsletter/",
]);

createServer(async (request, response) => {
  function send(status, data, headers = {}) {
    response.writeHead(status, {
      "Content-Type": "application/json",
      ...headers,
    });
    response.end(JSON.stringify(data));
  }

  if (request.url === "/health") return send(200, { ok: true });
  const url = new URL(request.url, "http://127.0.0.1:3101");
  const records = cms.get(url.pathname);
  if (request.method === "GET" && records) {
    const slug = url.searchParams.get("slug");
    const cluster = (url.searchParams.get("cluster") ?? "")
      .split(",")
      .filter(Boolean)
      .map(Number);
    const exclude = (url.searchParams.get("exclude") ?? "")
      .split(",")
      .filter(Boolean)
      .map(Number);
    const items = records.filter(
      (item) =>
        (!slug || item.slug === slug) &&
        (!cluster.length || item.cluster?.some((id) => cluster.includes(id))) &&
        !exclude.includes(item.id),
    );
    const perPage = Number(url.searchParams.get("per_page") ?? 10);
    const page = Number(url.searchParams.get("page") ?? 1);
    const totalPages = Math.ceil(items.length / perPage);
    if (items.length && page > totalPages)
      return send(400, { code: "rest_post_invalid_page_number" });

    return send(200, items.slice((page - 1) * perPage, page * perPage), {
      "X-WP-TotalPages": String(totalPages),
      "X-WP-Total": String(items.length),
    });
  }
  if (request.headers.authorization !== "playwright-website-key") {
    return send(403, { detail: "Mock authorization rejected." });
  }

  if (request.method === "GET") {
    if (request.url === "/website/constants/phone-country-codes/")
      return send(200, phoneCodes);
    if (request.url === "/website/constants/countries/")
      return send(200, countries);
  }

  if (request.method !== "POST" || !formPaths.has(request.url)) {
    return send(404, { detail: "Unknown mock route." });
  }

  try {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString());

    if ("internal_only" in body || body.phone === "") {
      return send(422, {
        non_field_errors: ["Unexpected fields were forwarded."],
      });
    }
    if (
      request.url === "/website/contact/" &&
      body.captcha !== "playwright-token"
    ) {
      return send(403, { captcha: ["Complete verification and try again."] });
    }
    if (body.email === "rejected@example.test") {
      return send(400, {
        email: ["Use a business email address."],
        internal_only: "Mock debug data",
      });
    }

    return send(200, { internal_only: "Mock upstream response" });
  } catch {
    return send(400, { detail: "Invalid mock request." });
  }
}).listen(3101, "127.0.0.1");
