import { expect, test } from "@playwright/test";

test("the insights archive paginates and resets to page one when filtered", async ({
  page,
}) => {
  await page.goto("/insights");
  const library = page.getByRole("region", { name: "Insight library" });
  const pager = library.getByRole("navigation", {
    name: "Insights pagination",
  });
  await expect(library.getByRole("status")).toHaveText("14 articles");
  await expect(
    library.getByText("Latest insight", { exact: true }),
  ).toBeVisible();
  await expect(pager).toContainText("Page 1 of 2");

  await pager.getByRole("link", { name: "Next" }).click();
  await expect(page).toHaveURL(/\/insights\?page=2#insight-library$/);
  await expect(pager).toContainText("Page 2 of 2");
  await expect(library.getByRole("article")).toHaveCount(2);

  const topics = library.getByRole("combobox", { name: "Topic" });
  await topics.selectOption("loyalty-strategy");
  await expect(page).toHaveURL(/\/insights\?cluster=loyalty-strategy$/);
  await expect(library.getByRole("status")).toHaveText("2 articles");
  await expect(topics).toHaveValue("loyalty-strategy");
  await expect(pager).toHaveCount(0);
});

test("an insight opens from the archive with safe rich content and local article links", async ({
  page,
}) => {
  await page.goto("/insights");
  const library = page.getByRole("region", { name: "Insight library" });
  await library
    .getByRole("link", { name: /Calculating total cost of ownership/ })
    .click();
  const article = page.getByRole("article", {
    name: /Calculating total cost of ownership/,
  });
  await expect(article.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(article.getByRole("table")).toContainText("Integration");
  await expect(
    article.getByRole("link", { name: "Plan your partner mix" }),
  ).toHaveAttribute(
    "href",
    "/insights/loyalty-partnerships-how-to-optimize-your-partner-mix",
  );
  await expect(
    article.getByRole("link", { name: "Watch on YouTube" }),
  ).toHaveAttribute("href", "https://www.youtube.com/watch?v=Gd7hIQxc2aA");
  await expect(article.locator("iframe")).toHaveCount(0);
  await expect(article.locator("script")).toHaveCount(0);
  await expect(
    page
      .getByRole("region", { name: "Related insights" })
      .getByRole("link", { name: /optimize your partner mix/ }),
  ).toBeVisible();
});
