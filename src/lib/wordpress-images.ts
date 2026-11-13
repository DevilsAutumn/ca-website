const imageHosts = [
  "blog.currencyalliance.com",
  "cablogprod.wpenginepowered.com",
];
const uploadsPath = "/wp-content/uploads/";

export const wordpressImagePatterns = imageHosts.map(
  (host) => new URL(`https://${host}${uploadsPath}**`),
);

export function getWordPressImageUrl(value: string | null | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (
      !["https:", "http:"].includes(url.protocol) ||
      url.port ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      !imageHosts.includes(url.hostname) ||
      !url.pathname.startsWith(uploadsPath)
    )
      return null;

    url.protocol = "https:";
    return url.href;
  } catch {
    return null;
  }
}
