import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

for (const policy of [
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    sections: 8,
    last: "8. Modification of this Privacy Policy:",
    hash: "#section-8",
  },
  {
    path: "/terms",
    title: "Terms of Use",
    sections: 17,
    last: "Schedule B",
    hash: "#schedule-b",
  },
]) {
  test(`${policy.title} preserves the complete document and supports section navigation`, async ({
    page,
    isMobile,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(policy.path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(`${policy.title} | Currency Alliance`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://www.currencyalliance.com${policy.path}`,
    );
    await expect(
      page.getByRole("heading", { level: 1, name: policy.title, exact: true }),
    ).toBeVisible();
    const article = page.getByRole("article", {
      name: policy.title,
      exact: true,
    });
    await expect(article.getByRole("heading", { level: 2 })).toHaveCount(
      policy.sections,
    );
    await expect(
      page
        .getByRole("navigation", { name: "Legal documents" })
        .getByRole("link", { name: policy.title }),
    ).toHaveAttribute("aria-current", "page");
    if (policy.path === "/terms") {
      await expect(article.getByRole("heading", { level: 3 })).toHaveCount(10);
      await expect(article.locator('ol[type="a"]')).toHaveCount(5);
      await expect(article.locator('ol[type="i"]')).toHaveCount(5);
      await expect(article.locator('ol[type="1"]')).toHaveCount(2);
      await expect(article.locator("ul")).toHaveCount(2);
      expect(
        await article
          .locator('ol[type="a"]')
          .first()
          .evaluate((list) => getComputedStyle(list).listStyleType),
      ).toBe("lower-alpha");
      await expect(
        article.getByText("Standard and Value-added Services", { exact: true }),
      ).toBeVisible();
    } else {
      await expect(
        article.getByRole("link", { name: "legal@currencyalliance.com" }),
      ).toHaveCount(2);
    }
    if (isMobile)
      await page
        .getByText("On this page", { exact: true })
        .filter({ visible: true })
        .click();
    const contents = page.getByRole("navigation", {
      name: "On this page",
      exact: true,
    });
    await expect(contents.getByRole("link")).toHaveCount(policy.sections);
    const anchors = await contents
      .getByRole("link")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    for (const anchor of anchors)
      await expect(article.locator(anchor!)).toHaveCount(1);
    await contents.getByRole("link").last().click();
    expect(new URL(page.url()).hash).toBe(policy.hash);
    await expect(
      article.getByRole("heading", {
        level: 2,
        name: policy.last,
        exact: true,
      }),
    ).toBeInViewport();
    await article
      .getByRole("link", { name: "Back to top", exact: true })
      .click();
    await expect(
      page.getByRole("heading", { level: 1, name: policy.title }),
    ).toBeInViewport();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBe(page.viewportSize()?.width);
    expect(errors).toEqual([]);
  });
}

test("footer legal links and the previous terms destination resolve locally", async ({
  page,
  request,
}) => {
  await page.goto("/about-us");
  await page
    .getByRole("navigation", { name: "Legal information" })
    .getByRole("link", { name: "Privacy", exact: true })
    .click();
  await expect(page).toHaveURL(/\/privacy-policy$/);
  await page
    .getByRole("navigation", { name: "Legal documents" })
    .getByRole("link", { name: "Terms of Use", exact: true })
    .click();
  await expect(page).toHaveURL(/\/terms$/);
  await expect(
    page
      .getByRole("navigation", { name: "Legal information" })
      .getByRole("link", { name: "Terms", exact: true }),
  ).toHaveAttribute("href", "/terms");
  const legacy = await request.get("/terms-and-conditions", {
    maxRedirects: 0,
  });
  expect(legacy.status()).toBe(308);
  expect(legacy.headers().location).toBe("/terms");
});

test("registration opens local policies without losing entered details", async ({
  page,
}) => {
  await page.goto("/sign-up");
  const form = page.getByRole("form");
  await form.getByRole("textbox", { name: "First name" }).fill("Test Partner");
  for (const [name, path] of [
    ["Terms of Use", "/terms"],
    ["Privacy Policy", "/privacy-policy"],
  ]) {
    const popupPromise = page.waitForEvent("popup");
    await form.getByRole("link", { name, exact: true }).click();
    const popup = await popupPromise;
    await expect(
      popup.getByRole("heading", { level: 1, name, exact: true }),
    ).toBeVisible();
    expect(new URL(popup.url()).pathname).toBe(path);
    expect(new URL(popup.url()).origin).toBe(new URL(page.url()).origin);
    await popup.close();
  }
  await expect(form.getByRole("textbox", { name: "First name" })).toHaveValue(
    "Test Partner",
  );
  await expect(
    form.getByRole("checkbox", { name: /I agree/ }),
  ).not.toBeChecked();
});
