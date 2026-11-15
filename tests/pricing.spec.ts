import { expect, test } from "@playwright/test";

test("Pricing is a direct navigation link and explains transaction fees", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const openMenu = page.getByRole("button", { name: "Open navigation" });
  const navigation = page.getByRole("navigation", {
    name: isMobile ? "Mobile navigation" : "Main navigation",
    exact: true,
  });
  if (isMobile) await openMenu.click();

  const pricing = navigation.getByRole("link", {
    name: "Pricing",
    exact: true,
  });
  await expect(pricing).toHaveAttribute("href", "/pricing");
  await pricing.click();
  await expect(page).toHaveURL(/\/pricing$/);

  const main = page.getByRole("main");
  await expect(main.getByRole("heading", { level: 1 })).toHaveText(
    "Loyalty platform pricing.",
  );
  await expect(main.getByRole("figure")).toContainText("€5,000");
  await expect(main.getByRole("figure")).toContainText("€100");
  const fees = main.getByRole("region", { name: "Transaction fees" });
  await expect(fees.getByText("2%", { exact: true })).toHaveCount(2);
  await expect(
    main.getByText(/optional services|monthly minimum/i),
  ).toHaveCount(0);
  await expect(
    main.getByRole("link", { name: "Discuss pricing" }),
  ).toHaveAttribute("href", "/contact-us");
  await expect(
    main.getByRole("link", { name: "Register for free" }),
  ).toHaveAttribute("href", "/sign-up");

  if (isMobile) {
    await expect(navigation).toBeHidden();
    await openMenu.click();
  }
  await expect(pricing).toHaveAttribute("aria-current", "page");
});
