import { expect, test, type Page } from "@playwright/test";

const registration = {
  first_name: "Test",
  last_name: "Partner",
  company_name: "Example Company",
  job_position: "Partnership manager",
  registration_country: "2510769",
  email: "partner@example.test",
  password: "Local-test-password-123",
};

async function fillAccount(page: Page, email = registration.email) {
  const form = page.getByRole("form");
  for (const [name, value] of Object.entries({ ...registration, email })) {
    if (name === "registration_country") {
      await expect(form.locator(`select[name="${name}"]`)).toBeEnabled();
      await form.locator(`select[name="${name}"]`).selectOption(value);
    } else {
      await form.locator(`input[name="${name}"]`).fill(value);
    }
  }
  await form.getByRole("checkbox", { name: /I agree/ }).check();
  return form;
}

test("registration has the original required fields, optional consent, and password visibility", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("/sign-up");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("Register for Free | Currency Alliance");
  const form = page.getByRole("form");
  await expect(form.locator("input, select")).toHaveCount(9);
  for (const name of [...Object.keys(registration), "terms"]) {
    await expect(form.locator(`[name="${name}"]`)).toHaveJSProperty(
      "required",
      true,
    );
  }
  const newsletter = form.getByRole("checkbox", { name: /Send me occasional/ });
  await expect(newsletter).not.toBeChecked();
  await expect(newsletter).toHaveJSProperty("required", false);
  await expect(
    form.getByRole("link", { name: "Terms of Use" }),
  ).toHaveAttribute("href", "/terms");
  await expect(
    form.getByRole("link", { name: "Privacy Policy" }),
  ).toHaveAttribute("target", "_blank");
  const password = form.locator('input[name="password"]');
  await password.fill(registration.password);
  await form.getByRole("button", { name: "Show password" }).click();
  await expect(password).toHaveAttribute("type", "text");
  await form.getByRole("button", { name: "Hide password" }).click();
  await expect(password).toHaveAttribute("type", "password");
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(
    form.getByRole("heading", { name: "Let’s start with you." }),
  ).toBeVisible();
  expect(
    await form
      .locator('input[name="first_name"]')
      .evaluate((input: HTMLInputElement) => input.validity.valueMissing),
  ).toBe(true);
  await page.evaluate(() => document.fonts.ready);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(
    page.viewportSize()?.width,
  );
  expect(errors).toEqual([]);
});

test("registration displays server validation and preserves details when going back", async ({
  page,
}) => {
  await page.goto("/sign-up");
  const form = await fillAccount(page, "rejected@example.test");
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  const email = form.getByRole("textbox", { name: "Email address" });
  await expect(email).toHaveAttribute("aria-invalid", "true");
  await expect(email).toBeFocused();
  await expect(form.getByText("Use a business email address.")).toBeVisible();
  await expect(form.locator('input[name="company_name"]')).toHaveValue(
    registration.company_name,
  );
  await email.fill(registration.email);
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(
    form.getByRole("heading", { name: "Your program, your way." }),
  ).toBeFocused();
  await form.getByRole("button", { name: "Back", exact: true }).click();
  await expect(email).toHaveValue(registration.email);
  await expect(form.locator('input[name="password"]')).toHaveValue(
    registration.password,
  );
  await expect(form.getByRole("checkbox", { name: /I agree/ })).toBeChecked();
});

for (const currencyOwner of [true, false]) {
  test(`registration completes the ${currencyOwner ? "currency owner" : "issuing partner"} flow through the mock backend`, async ({
    page,
  }) => {
    await page.goto("/sign-up");
    const form = await fillAccount(page);
    await form.getByRole("button", { name: "Continue", exact: true }).click();
    await expect(
      form.getByRole("button", { name: "Continue", exact: true }),
    ).toBeDisabled();
    await form.locator(`input[type="radio"][value="${currencyOwner}"]`).check();
    await form.getByRole("button", { name: "Continue", exact: true }).click();
    await expect(form.getByRole("checkbox")).toHaveCount(currencyOwner ? 5 : 2);
    await form.locator('input[name="issue_other_currencies"]').check();
    const requestPromise = page.waitForRequest(
      (request) =>
        request.url().endsWith("/api/register") && request.method() === "POST",
    );
    await form.getByRole("button", { name: "Create free account" }).click();
    const request = await requestPromise;
    expect(request.postDataJSON()).toEqual({
      ...registration,
      terms: true,
      newsletter: false,
      company_has_loyalty_currency: currencyOwner,
      interests: { issue_other_currencies: true },
    });
    const confirmation = page.getByRole("heading", {
      name: "Check your inbox.",
    });
    await expect(confirmation).toBeVisible();
    await expect(confirmation).toBeFocused();
    await expect(page.getByRole("status")).toContainText(registration.email);
    await expect(
      page.getByRole("main").getByRole("link", { name: /Go to sign in/ }),
    ).toHaveAttribute(
      "href",
      "https://dashboard.currencyalliance.com/#/auth/login",
    );
    await expect(
      page.getByRole("main").locator('input[type="password"]'),
    ).toHaveCount(0);
    expect(
      await page.evaluate(() => ({
        local: localStorage.length,
        session: sessionStorage.length,
      })),
    ).toEqual({ local: 0, session: 0 });
    expect(page.url()).not.toContain(registration.email);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBe(page.viewportSize()?.width);
  });
}

test("registration clears incompatible interests and recovers from a final API field error", async ({
  page,
}) => {
  await page.goto("/sign-up");
  const form = await fillAccount(page);
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await form.locator('input[type="radio"][value="true"]').check();
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await form.locator('input[name="enable_currency_exchange"]').check();
  await form.getByRole("button", { name: "Back", exact: true }).click();
  await form.locator('input[type="radio"][value="false"]').check();
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(form.getByRole("checkbox")).toHaveCount(2);
  await page.route("**/api/register", (route) =>
    route.fulfill({
      status: 409,
      json: { email: ["An account with this email already exists."] },
    }),
  );
  const requestPromise = page.waitForRequest((request) =>
    request.url().endsWith("/api/register"),
  );
  await form.getByRole("button", { name: "Create free account" }).click();
  expect((await requestPromise).postDataJSON().interests).toEqual({});
  await expect(
    form.getByText("An account with this email already exists."),
  ).toBeVisible();
  await expect(
    form.getByRole("textbox", { name: "Email address" }),
  ).toBeFocused();
  await expect(form.locator('input[name="first_name"]')).toHaveValue(
    registration.first_name,
  );
  await expect(
    page.getByRole("heading", { name: "Check your inbox." }),
  ).toHaveCount(0);
  await page.unroute("**/api/register");
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await form.locator('input[name="issue_other_currencies"]').check();
  await page.route("**/api/register", (route) =>
    route.fulfill({
      status: 400,
      json: {
        interests: ["This loyalty goal is unavailable. Choose another option."],
      },
    }),
  );
  await form.getByRole("button", { name: "Create free account" }).click();
  await expect(
    form.getByText("This loyalty goal is unavailable. Choose another option."),
  ).toBeVisible();
  await expect(
    form.locator('input[name="define_loyalty_rules"]'),
  ).toBeFocused();
});

test("registration country loading can be retried and network failures do not show success", async ({
  page,
}) => {
  await page.route("**/api/countries", (route) =>
    route.fulfill({ status: 503, json: { detail: "Unavailable" } }),
  );
  await page.goto("/sign-up");
  const form = page.getByRole("form");
  await expect(
    form.getByText("We couldn’t load the country list. Please try again."),
  ).toBeVisible();
  await expect(
    form.getByRole("button", { name: "Continue", exact: true }),
  ).toBeDisabled();
  await page.unroute("**/api/countries");
  await form.getByRole("button", { name: "Retry country list" }).click();
  await fillAccount(page);
  await page.route("**/api/register-validate", (route) =>
    route.abort("failed"),
  );
  await form.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(form.getByRole("alert")).toContainText(
    "We couldn’t check your details.",
  );
  await expect(
    form.getByRole("heading", { name: "Let’s start with you." }),
  ).toBeVisible();
  await expect(form.locator('input[name="email"]')).toHaveValue(
    registration.email,
  );
});
