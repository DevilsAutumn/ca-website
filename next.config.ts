import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/site-redirects";
import { wordpressImagePatterns } from "./src/lib/wordpress-images";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["192.168.1.5"],
  distDir:
    process.env.PLAYWRIGHT_TEST_BUILD === "1" ? ".next/playwright" : ".next",
  images: {
    remotePatterns: wordpressImagePatterns,
    maximumRedirects: 0,
  },
  async redirects() {
    return legacyRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        condition: { not: { path: "*.module.css" } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
