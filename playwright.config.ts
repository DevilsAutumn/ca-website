import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://127.0.0.1:3100";
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  workers: 2,
  reporter: "list",
  use: {
    baseURL,
    launchOptions: executablePath ? { executablePath } : {},
    screenshot: "only-on-failure",
    trace: "off",
    video: "off",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: [
    {
      command: "node tests/fixtures/mock-website-api.mjs",
      url: "http://127.0.0.1:3101/health",
      reuseExistingServer: false,
    },
    {
      command:
        "npm run build && npm run start -- --hostname 127.0.0.1 --port 3100",
      url: baseURL,
      env: {
        PLAYWRIGHT_TEST_BUILD: "1",
        API_URL: "http://127.0.0.1:3101",
        WEBSITE_AUTHORIZATION_KEY: "playwright-website-key",
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "playwright-site-key",
        NEXT_PUBLIC_BLOG_URL: "http://127.0.0.1:3101",
        NEXT_PUBLIC_SITE_URL: "https://www.currencyalliance.com",
        SITE_NOINDEX: "0",
        VERCEL_ENV: "production",
      },
      reuseExistingServer: false,
      timeout: 120_000,
    },
  ],
});
