import { expect, test, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(
    /^https:\/\/www\.google\.com\/recaptcha\/api\.js\?/,
    (route) =>
      route.fulfill({
        contentType: "text/javascript",
        body: `window.grecaptcha = {
        ready: (callback) => callback(),
        execute: async (_key, options) => {
          if (options.action !== "submit") throw new Error("Unexpected action");
          return "playwright-token";
        },
      };`,
      }),
  );
});

async function openNavigationCategory(
  page: Page,
  isMobile: boolean,
  label: string,
) {
  const navigation = page.getByRole("navigation", {
    name: isMobile ? "Mobile navigation" : "Main navigation",
    exact: true,
  });
  if (isMobile && !(await navigation.isVisible())) {
    await page.getByRole("button", { name: "Open navigation" }).click();
  }
  const trigger = navigation.getByRole("button", { name: label, exact: true });
  if (!isMobile) {
    await trigger.hover();
  } else if ((await trigger.getAttribute("aria-expanded")) !== "true") {
    await trigger.click();
  }
  const content = isMobile
    ? navigation
    : page.getByRole("group", { name: label + " navigation", exact: true });
  await expect(content).toBeVisible();
  return content;
}

test("marketing pages load without overflow or runtime errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of [
    "/",
    "/our-technology",
    "/about-us",
    "/contact-us",
    "/solutions",
    "/solutions/loyalty-partnerships-marketplace",
    "/solutions/loyalty-partner-lifecycle-management",
    "/solutions/loyalty-account-linking",
    "/solutions/partner-accrual",
    "/solutions/loyalty-partnership-contract-framework",
    "/solutions/saas-loyalty-rules-engine",
    "/solutions/saas-loyalty-points-bank",
    "/solutions/loyalty-voucher-platform",
    "/solutions/low-code-loyalty-white-labels",
    "/solutions/universal-points-terminal-pos-loyalty",
    "/use-cases/launch-loyalty-program",
    "/use-cases/api-first-loyalty",
    "/use-cases/coalition-loyalty",
    "/use-cases/exchange-points-miles",
    "/use-cases/pay-with-points",
    "/use-cases/loyalty-card-linking",
    "/use-cases/loyalty-for-ecommerce",
  ]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("main").getByRole("heading", { level: 1 }),
    ).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBe(page.viewportSize()?.width);

    if (route === "/") {
      const logos = page
        .getByRole("list", { name: "Currency Alliance partner network" })
        .locator("img");
      await expect(logos.first()).toBeVisible();
      const mismatched = await logos.evaluateAll((images) =>
        images
          .filter((image) => {
            if (!(image instanceof HTMLImageElement)) return false;
            const widthChanged =
              String(image.width) !== image.getAttribute("width");
            const heightChanged =
              String(image.height) !== image.getAttribute("height");
            return widthChanged !== heightChanged;
          })
          .map((image) => image.getAttribute("src")),
      );
      expect(mismatched).toHaveLength(0);
    }
  }

  expect(errors).toEqual([]);
});

test("Contact Us loads country codes and handles validation and delivery", async ({
  page,
  isMobile,
}) => {
  await page.goto("/about-us");
  const company = await openNavigationCategory(page, isMobile, "Company");
  await company.getByRole("link", { name: "Contact us", exact: true }).click();
  await expect(page).toHaveURL(/\/contact-us$/);

  const form = page.getByRole("form", { name: "Send a message" });
  await expect(form.locator("input, select, textarea")).toHaveCount(5);
  const name = form.getByRole("textbox", { name: "Full name" });
  const email = form.getByRole("textbox", { name: "Email address" });
  const code = form.getByRole("combobox", { name: "Country code" });
  const phone = form.getByRole("textbox", { name: "Phone" });
  const message = form.getByRole("textbox", { name: "Message" });

  for (const field of [name, email, message]) {
    await expect(field).toHaveJSProperty("required", true);
  }
  for (const field of [code, phone]) {
    await expect(field).toHaveJSProperty("required", false);
  }
  await expect(email).toHaveAttribute("type", "email");
  await expect(phone).toHaveAttribute("type", "tel");
  await expect(code.locator("option")).toHaveCount(3);
  await code.selectOption({ label: "Spain +34" });
  await expect(code).toHaveValue("2510769");
  await name.fill("Test Visitor");
  await email.fill("rejected@example.test");
  await message.fill("A message for the local test backend.");
  const send = form.getByRole("button", { name: "Send", exact: true });
  await send.click();
  await expect(email).toHaveAttribute("aria-invalid", "true");
  await expect(form.getByText("Use a business email address.")).toBeVisible();
  await expect(message).toHaveValue("A message for the local test backend.");

  await email.fill("visitor@example.test");
  await send.click();
  await expect(form.getByRole("status")).toHaveText(
    "Message sent. Thank you for getting in touch.",
  );
  await expect(message).toHaveValue("");
  await expect(code).toHaveValue("");

  const offices = page.getByRole("region", { name: "Offices" });
  for (const address of [
    "spain@currencyalliance.com",
    "usa@currencyalliance.com",
    "uk@currencyalliance.com",
  ]) {
    await expect(offices.getByRole("link", { name: address })).toHaveAttribute(
      "href",
      `mailto:${address}`,
    );
  }
});

test("platform pages connect partner discovery to management", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const platform = await openNavigationCategory(page, isMobile, "Platform");
  await platform
    .getByRole("link", { name: "Partner marketplace", exact: true })
    .click();
  await expect(page).toHaveURL(
    /\/solutions\/loyalty-partnerships-marketplace$/,
  );
  await expect(platform).toBeHidden();

  const main = page.getByRole("main");
  await expect(
    main.getByRole("heading", {
      name: "Find your next loyalty partner.",
      level: 1,
    }),
  ).toBeVisible();
  await main
    .getByRole("link", { name: "Explore partnership management" })
    .click();
  await expect(page).toHaveURL(
    /\/solutions\/loyalty-partner-lifecycle-management$/,
  );

  const sections = main.getByRole("navigation", {
    name: "Partnership management sections",
  });
  await sections.getByRole("link", { name: "Reconcile and settle" }).click();
  await expect(page).toHaveURL(/#settlement$/);
  await expect(
    main.getByRole("heading", { name: "From transaction to settlement." }),
  ).toBeInViewport();
  await expect(
    main.getByRole("link", { name: "Explore partner marketplace" }),
  ).toHaveAttribute("href", "/solutions/loyalty-partnerships-marketplace");
});

test("partner capability pages connect and agreement models support keyboard navigation", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const platform = await openNavigationCategory(page, isMobile, "Platform");
  await platform
    .getByRole("link", { name: "Loyalty account linking", exact: true })
    .click();
  await expect(page).toHaveURL(/\/solutions\/loyalty-account-linking$/);

  const main = page.getByRole("main");
  await expect(
    main.getByText("Partner sign-in", { exact: true }),
  ).toBeVisible();
  await main
    .getByRole("link", { name: "Explore partner accrual", exact: true })
    .click();
  await expect(page).toHaveURL(/\/solutions\/partner-accrual$/);
  await expect(
    main
      .getByRole("region", { name: "Where members earn. Where points go." })
      .getByRole("article"),
  ).toHaveCount(2);
  await main
    .getByRole("link", { name: "Explore partner contracting", exact: true })
    .click();
  await expect(page).toHaveURL(
    /\/solutions\/loyalty-partnership-contract-framework$/,
  );

  const tabs = main.getByRole("tablist", { name: "Partner agreement models" });
  await expect(
    tabs.getByRole("tab", { name: "Direct", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  const agency = tabs.getByRole("tab", { name: "Agency", exact: true });
  await agency.click();
  await expect(
    main.getByRole("tabpanel", { name: "Agency", exact: true }),
  ).toContainText(
    "Your brand and the partner are still the parties to the agreement.",
  );
  await agency.focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    tabs.getByRole("tab", { name: "Serviced", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await expect(main.getByRole("tabpanel")).toHaveCount(1);
  await expect(
    main.getByRole("tabpanel", { name: "Serviced", exact: true }),
  ).toContainText("Contracts directly with the approved partners.");
});

test("About is reachable from navigation and marked as the current page", async ({
  page,
  isMobile,
}) => {
  await page.goto("/our-technology");
  const menu = await openNavigationCategory(page, isMobile, "Company");
  await menu.getByRole("link", { name: /^About us/ }).click();
  await expect(page).toHaveURL(/\/about-us$/);
  await expect(page).toHaveTitle(/About us .* Currency Alliance/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.currencyalliance.com/about-us",
  );

  await expect(menu).toBeHidden();
  const currentMenu = await openNavigationCategory(page, isMobile, "Company");
  await expect(
    currentMenu.getByRole("link", { name: /^About us/ }),
  ).toHaveAttribute("aria-current", "page");
  await expect(
    page
      .getByRole("navigation", {
        name: isMobile ? "Mobile navigation" : "Main navigation",
        exact: true,
      })
      .getByRole("button", { name: "Company", exact: true }),
  ).toHaveAttribute("data-current", "");
});

test("About fills the opening viewport and presents linked leadership portraits", async ({
  page,
}) => {
  await page.goto("/about-us");
  const hero = page.getByRole("region", {
    name: "Better loyalty. Built together.",
    exact: true,
  });
  await expect(hero.locator("a, button")).toHaveCount(0);
  await expect
    .poll(() =>
      hero.evaluate((element) => {
        const bottom = element.getBoundingClientRect().bottom;
        return bottom >= window.innerHeight - 1;
      }),
    )
    .toBe(true);

  await page.locator("#leadership").scrollIntoViewIfNeeded();
  await expect(page.locator("#leadership")).toBeInViewport();
  for (const [name, profile] of [
    ["Chuck Ehredt", "https://www.linkedin.com/in/charles-ehredt"],
    ["Manish Jindal", "https://www.linkedin.com/in/manijindal"],
  ]) {
    const article = page.getByRole("article", { name, exact: true });
    const portrait = article.getByRole("img", { name, exact: true });
    await portrait.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        portrait.evaluate(
          (element: HTMLImageElement) =>
            element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
    const link = article.getByRole("link");
    await expect(link).toHaveAttribute("href", profile);
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    await link.focus();
    await expect(link).toBeFocused();
  }

  const contact = page.getByRole("region", {
    name: "Let’s build something together.",
    exact: true,
  });
  await expect(
    contact.getByRole("link", { name: "Talk to our team", exact: true }),
  ).toHaveAttribute("href", "/contact-us");
  await expect(
    contact.getByRole("link", { name: "Register for free", exact: true }),
  ).toHaveAttribute("href", "/sign-up");
});

test("coalition evolution shows one ownership model at a time", async ({
  page,
}) => {
  await page.goto("/about-us");
  const section = page.locator("#partnership-models");
  const tabs = section.getByRole("tablist", {
    name: "Evolution of loyalty coalitions",
  });

  for (const [version, heading, owner] of [
    ["V1.0", "An operator owns the coalition.", "Third-party operator"],
    ["V2.0", "A leading brand takes ownership.", "Lead brand"],
    ["V3.0", "Brands collaborate as peers.", "Shared API layer"],
  ]) {
    await tabs.getByRole("tab", { name: version, exact: true }).click();
    const panel = section.getByRole("tabpanel", {
      name: version,
      exact: true,
    });
    await expect(section.getByRole("tabpanel")).toHaveCount(1);
    await expect(
      panel.getByRole("heading", { name: heading, exact: true }),
    ).toBeVisible();
    await expect(panel.getByText(owner, { exact: true })).toBeVisible();
  }

  await expect(
    section.getByText("Own program & rules", { exact: true }),
  ).toHaveCount(2);
  await tabs.getByRole("tab", { name: "V1.0", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    tabs.getByRole("tab", { name: "V2.0", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("End");
  await expect(
    tabs.getByRole("tab", { name: "V3.0", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
});

test("navigation links and the current page work on both layouts", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", {
    name: isMobile ? "Mobile navigation" : "Main navigation",
    exact: true,
  });
  if (isMobile) {
    await openNavigationCategory(page, isMobile, "Platform");
    await navigation
      .getByRole("button", { name: "Platform", exact: true })
      .click();
  } else {
    const trigger = navigation.getByRole("button", {
      name: "Platform",
      exact: true,
    });
    await trigger.focus();
    await trigger.press("ArrowDown");
    const platform = page.getByRole("group", {
      name: "Platform navigation",
      exact: true,
    });
    await expect(platform).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(
      platform.getByRole("link", { name: /^Partner marketplace/ }),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(trigger).toBeFocused();
    await expect(platform).toBeHidden();
  }
  await navigation
    .getByRole("link", { name: "Technology", exact: true })
    .click();
  if (isMobile) await expect(navigation).toBeHidden();

  await expect(page).toHaveURL(/\/our-technology$/);
  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation" }).click();
  }
  const current = page
    .getByRole("navigation", {
      name: isMobile ? "Mobile navigation" : "Main navigation",
      exact: true,
    })
    .getByRole("link", { name: "Technology", exact: true });
  await expect(current).toHaveAttribute("aria-current", "page");
  if (isMobile) {
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toBeFocused();
  }
});

test("navigation exposes the grouped hierarchy and utility links", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const platform = await openNavigationCategory(page, isMobile, "Platform");
  const collaboration = platform.getByRole("group", {
    name: "Partner collaboration",
    exact: true,
  });
  await expect(
    collaboration.getByRole("link", {
      name: "Loyalty account linking",
      exact: true,
    }),
  ).toHaveAttribute("href", "/solutions/loyalty-account-linking");
  await expect(
    collaboration.getByRole("link", { name: "Partner accrual", exact: true }),
  ).toHaveAttribute("href", "/solutions/partner-accrual");
  await expect(
    collaboration.getByRole("link", {
      name: "Partner contracting",
      exact: true,
    }),
  ).toHaveAttribute(
    "href",
    "/solutions/loyalty-partnership-contract-framework",
  );

  const solutions = await openNavigationCategory(page, isMobile, "Solutions");
  await expect(
    solutions.getByRole("link", {
      name: "Modernise an existing program",
      exact: true,
    }),
  ).toHaveAttribute("href", "/use-cases/api-first-loyalty");
  await expect(
    solutions.getByRole("link", { name: "Card-linked loyalty", exact: true }),
  ).toHaveAttribute("href", "/use-cases/loyalty-card-linking");
  await expect(
    solutions.getByRole("link", {
      name: "Exchange points and miles",
      exact: true,
    }),
  ).toHaveAttribute("href", "/use-cases/exchange-points-miles");

  const resources = await openNavigationCategory(page, isMobile, "Resources");
  await expect(
    resources.getByRole("link", { name: /^Case studies/ }),
  ).toHaveAttribute("href", "/case-studies");
  await expect(
    resources.getByRole("link", { name: /^Insights/ }),
  ).toHaveAttribute("href", "/insights");
  const docs = resources.getByRole("link", { name: /^API documentation/ });
  await expect(docs).toHaveAttribute(
    "href",
    "https://api.currencyalliance.com/api-docs/v3",
  );
  await expect(docs).toHaveAttribute("target", "_blank");
  await expect(docs).toHaveAttribute("rel", "noopener noreferrer");

  const company = await openNavigationCategory(page, isMobile, "Company");
  await expect(
    company.getByRole("link", { name: /^Contact us/ }),
  ).toHaveAttribute("href", "/contact-us");
  const actions = page.locator(
    isMobile ? ".mobile-actions" : ".header-actions",
  );
  await expect(
    actions.getByRole("link", { name: /^API documentation/ }),
  ).toHaveCount(0);
  await expect(
    actions.getByRole("link", { name: "Register", exact: true }),
  ).toHaveAttribute("href", "/sign-up");
});

test("service tabs expose the right content and support keyboard navigation", async ({
  page,
}) => {
  await page.goto("/our-technology");
  const tabs = page.getByRole("tablist", { name: "Loyalty services" });
  const examples = [
    ["Accrual", "Turn an action into an earning moment."],
    ["Exchange", "Make points useful beyond one program."],
    ["Redemption", "Bring loyalty value to the checkout."],
    ["Rules engine", "Change the rules, without changing the app."],
    ["Points bank", "One source of truth for your program."],
  ];

  for (const [label, heading] of examples) {
    await tabs.getByRole("tab", { name: label, exact: true }).click();
    await expect(
      page
        .getByRole("tabpanel", { name: label, exact: true })
        .getByRole("heading", { name: heading, exact: true }),
    ).toBeVisible();
    await expect(page.getByRole("tabpanel")).toHaveCount(1);
  }

  await tabs.getByRole("tab", { name: "Accrual", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    tabs.getByRole("tab", { name: "Exchange", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("End");
  await expect(
    tabs.getByRole("tab", { name: "Points bank", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
});

test("marketplace tabs explain earning, exchanging, and redeeming", async ({
  page,
}) => {
  await page.goto("/");
  const tabs = page.getByRole("tablist", {
    name: "Explore loyalty partnership examples",
  });
  for (const [label, heading] of [
    ["Earn", "Turn partner purchases into points."],
    ["Exchange", "Let points travel between programs."],
    ["Redeem", "Give your points more places to go."],
  ]) {
    await tabs.getByRole("tab", { name: label, exact: true }).click();
    await expect(
      page
        .getByRole("tabpanel", { name: label, exact: true })
        .getByRole("heading", { name: heading, exact: true }),
    ).toBeVisible();
  }
});

test("the platform diagram can be expanded and collapsed by keyboard", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const stack = page.getByRole("button", {
    name: "Explore the loyalty API, rules engine, and settlement layers",
  });
  await expect(stack).toHaveAttribute("aria-expanded", "false");
  await stack.press("Enter");
  await expect(stack).toHaveAttribute("aria-expanded", "true");
  await stack.press("Enter");
  await expect(stack).toHaveAttribute("aria-expanded", "false");

  if (!isMobile) {
    await stack
      .locator(".home-network-api .home-network-layerFace")
      .hover({ force: true });
    await expect(stack).toHaveAttribute("aria-expanded", "true");
    await page.mouse.move(0, 0);
    await expect(stack).toHaveAttribute("aria-expanded", "false");
  }
});

test("the Python example stays readable and resource cards have explicit links", async ({
  page,
}) => {
  await page.goto("/our-technology");
  const content = page.getByLabel("Direct accrual API request", {
    exact: true,
  });
  await expect(content).toContainText("requests.post(");
  await expect(content).toContainText(
    "https://sandbox.api.currencyalliance.com/public/v3.0/accruals/standard",
  );
  await expect(page.locator("#integration").getByRole("button")).toHaveCount(0);
  await expect(
    page
      .locator("[aria-labelledby=technology-resources-title]")
      .getByRole("link"),
  ).toHaveCount(3);
  await expect(
    page
      .locator("[aria-labelledby=technology-resources-title]")
      .getByText(/^Read more/),
  ).toHaveCount(3);

  if (
    await content.evaluate(
      (element) => element.scrollWidth > element.clientWidth,
    )
  ) {
    await content.focus();
    await page.keyboard.press("ArrowRight");
    await expect
      .poll(() => content.evaluate((element) => element.scrollLeft))
      .toBeGreaterThan(0);
  }
});

test("diagrams respect reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/", "/our-technology"]) {
    await page.goto(route);
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            document.getAnimations().filter((animation) => {
              const name =
                animation instanceof CSSAnimation
                  ? animation.animationName
                  : "";
              return (
                /^(home-network|tech-diagram)/.test(name) &&
                animation.playState === "running"
              );
            }).length,
        ),
      )
      .toBe(0);
  }
});
