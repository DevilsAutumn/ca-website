export const insightTopics = [
  {
    id: 31,
    slug: "loyalty-strategy",
    name: "Loyalty Strategy",
    taxonomy: "cluster",
  },
  {
    id: 32,
    slug: "partner-connectivity",
    name: "Partner Connectivity",
    taxonomy: "cluster",
  },
];

function insight(id, slug, title, topic, body) {
  return {
    id,
    slug,
    date: "2026-04-01T09:00:00",
    date_gmt: "2026-04-01T09:00:00",
    modified_gmt: "2026-04-03T09:00:00",
    title: { rendered: title },
    content: { rendered: body },
    yoast_head_json: { description: "A guide for loyalty program teams." },
    cluster: [topic.id],
    _embedded: { "wp:term": [[topic]] },
  };
}

export const insightPosts = [
  insight(
    101,
    "calculating-total-cost-of-ownership-in-a-loyalty-program",
    "Calculating total cost of ownership in a loyalty program",
    insightTopics[0],
    `
    <p>Measure the full cost of running a loyalty program.</p>
    <h2 id="costs">Program costs</h2>
    <table><tbody><tr><th>Cost</th><td>Integration</td></tr></tbody></table>
    <p><a href="https://cablogprod.wpenginepowered.com/2025/03/loyalty-partnerships-how-to-optimize-your-partner-mix/">Plan your partner mix</a></p>
    <iframe title="Loyalty interview" src="https://www.youtube.com/embed/Gd7hIQxc2aA?autoplay=1"></iframe>
    <iframe title="Unexpected embed" src="https://example.test/embedded"></iframe>
    <script>window.untrustedInsightScript = true;</script>`,
  ),
  insight(
    102,
    "loyalty-partnerships-how-to-optimize-your-partner-mix",
    "Loyalty partnerships: how to optimize your partner mix",
    insightTopics[0],
    "<p>Start with partners your members use.</p>",
  ),
  insight(
    103,
    "loyalty-for-neobanks",
    "Loyalty for neobanks",
    insightTopics[1],
    "<p>Connect financial products with partner rewards.</p>",
  ),
  ...Array.from({ length: 11 }, (_, index) =>
    insight(
      104 + index,
      `partner-insight-${index + 1}`,
      `Partner insight ${index + 1}`,
      insightTopics[1],
      "<p>Find partners for your program.</p>",
    ),
  ),
  insight(
    54270,
    "loyalty-point-liquidity-drives-customer-engagement",
    "Legacy loyalty insight",
    insightTopics[0],
    "<p>This URL redirects to the updated article.</p>",
  ),
];
