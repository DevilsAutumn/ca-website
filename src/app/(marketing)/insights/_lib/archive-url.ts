export function parseInsightPage(value: string | string[] | undefined) {
  return typeof value === "string" && /^[1-9]\d{0,5}$/.test(value)
    ? Number(value)
    : 1;
}

export function insightArchiveUrl(topic?: string, page = 1) {
  const params = new URLSearchParams();
  if (topic) params.set("cluster", topic);
  if (page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? `/insights?${query}` : "/insights";
}
