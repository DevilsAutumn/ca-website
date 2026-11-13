import { expect, test } from "@playwright/test";

test("the case study library filters by topic and opens an article", async ({
  page,
}) => {
  await page.goto("/case-studies");
  const library = page.getByRole("region", { name: "Case study library" });
  const topic = library.getByRole("combobox", { name: "Topic" });
  await expect(library.getByRole("status")).toHaveText("3 case studies");
  await expect(
    library.getByText("Featured case study", { exact: true }),
  ).toBeVisible();
  await expect(library.getByRole("article")).toHaveCount(3);

  await topic.selectOption("partner-connectivity");
  await expect(page).toHaveURL(/\?cluster=partner-connectivity$/);
  await expect(library.getByRole("status")).toHaveText("2 case studies");
  await expect(library.getByRole("link", { name: /Active Super/ })).toHaveCount(
    0,
  );

  await library
    .getByRole("link", { name: /Connecting First Abu Dhabi Bank’s/ })
    .click();
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Connecting First Abu Dhabi Bank’s/,
    }),
  ).toBeVisible();
  const article = page.getByRole("article", {
    name: /Connecting First Abu Dhabi Bank’s/,
  });
  const bodyParagraph = article.getByText(
    "Members can exchange loyalty points with travel partners.",
  );
  await expect(bodyParagraph).toBeVisible();
  const width = (await article.boundingBox())?.width;
  for (const text of [
    article.getByRole("heading", { level: 1 }),
    article.getByText(
      "Bank loyalty members can exchange points with travel partners.",
    ),
    bodyParagraph,
  ]) {
    expect((await text.boundingBox())?.width).toBe(width);
  }
  await expect(article.getByText("More about the program")).toBeVisible();
  await expect(
    article.getByRole("link", { name: "More about the program" }),
  ).toHaveCount(0);
  await expect(
    article.getByRole("link", { name: "White label solutions" }),
  ).toHaveAttribute("href", "/solutions/low-code-loyalty-white-labels");
  await expect(
    page
      .getByRole("region", { name: "Related case studies" })
      .getByRole("link", { name: /Flying Blue/ }),
  ).toBeVisible();

  await article.getByRole("link", { name: "Partner Connectivity" }).click();
  await expect(topic).toHaveValue("partner-connectivity");
  await expect(library.getByRole("status")).toHaveText("2 case studies");
});
