import { expect, test } from "@playwright/test";

const contact = {
  full_name: "Test Visitor",
  email: "visitor@example.test",
  message: "Test contact request.",
};

test("website API routes use the configured backend and keep its response private", async ({
  request,
}) => {
  const countries = await request.get("/api/countries");
  expect(countries.ok()).toBe(true);
  expect(await countries.json()).toEqual([{ id: 2510769, value: "Spain" }]);

  const registration = {
    first_name: "Test",
    last_name: "Visitor",
    company_name: "Example",
    job_position: "Engineer",
    registration_country: "2510769",
    email: "visitor@example.test",
    password: "Local-test-password-123",
    terms: true,
  };
  const submissions = [
    ["/api/register-validate", registration],
    [
      "/api/register",
      {
        ...registration,
        company_has_loyalty_currency: true,
        interests: { issue_other_currencies: true },
      },
    ],
    [
      "/api/subscribe-newsletter",
      { name: "Test Visitor", email: "visitor@example.test", terms: true },
    ],
    [
      "/api/contact-us",
      {
        ...contact,
        captcha: "playwright-token",
        phone: "",
        internal_only: true,
      },
    ],
  ] as const;

  for (const [path, data] of submissions) {
    const response = await request.post(path, {
      data,
      headers: { Authorization: "caller-value" },
    });
    expect(response.ok()).toBe(true);
    expect(response.headers()["cache-control"]).toBe("no-store");
    expect(await response.json()).toEqual({ ok: true });
  }
});

test("contact API rejects malformed, unverified, and cross-site requests", async ({
  request,
}) => {
  const missingCaptcha = await request.post("/api/contact-us", {
    data: contact,
  });
  expect(missingCaptcha.status()).toBe(400);
  expect(await missingCaptcha.json()).toHaveProperty("captcha");

  const invalidCaptcha = await request.post("/api/contact-us", {
    data: { ...contact, captcha: "wrong-token" },
  });
  expect(invalidCaptcha.status()).toBe(403);
  expect(await invalidCaptcha.json()).toHaveProperty("captcha");

  const crossSite = await request.post("/api/contact-us", {
    data: { ...contact, captcha: "playwright-token" },
    headers: { "Sec-Fetch-Site": "cross-site" },
  });
  expect(crossSite.status()).toBe(403);

  const nonJson = await request.post("/api/contact-us", { form: contact });
  expect(nonJson.status()).toBe(415);
  const tooLarge = await request.post("/api/contact-us", {
    data: { ...contact, message: "x".repeat(66_000) },
  });
  expect(tooLarge.status()).toBe(413);
  const unsupported = await request.get("/api/contact-us");
  expect(unsupported.status()).toBe(405);
});
