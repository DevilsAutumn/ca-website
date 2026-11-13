# Currency Alliance website

Currency Alliance marketing website built with Next.js App Router, React, and
Tailwind CSS. The current pages include Home, Technology, About Us, and the
five partner collaboration pages under Platform.

## Development

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

The development preview runs at http://localhost:3000.

## Website API configuration

Use `.env.example` as the template for a local `.env.local` or for the deployment
environment. Set `API_URL` and `WEBSITE_AUTHORIZATION_KEY` from the existing
website backend configuration. The key is the complete `Authorization` header
value. Both values are read on the server at request time. The API origin in
`.env.example` is `https://api.currencyalliance.com`, matching the backend's
production configuration. The original website's `http://django:8000` value is
an address inside its Docker network.

Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` before building the site. Use a reCAPTCHA v3
site key that allows the website's domain. Contact Us generates a fresh `submit`
token and forwards it to the existing backend for verification. Use staging
credentials for local submission tests.

Contact Us is fully wired through `/api/contact-us` to `/website/contact/`.
Each submission requests a fresh reCAPTCHA token, omits empty optional phone
fields, and keeps entered details after errors. The form resets only after the
backend confirms success. Submission stays disabled while the public site key
is absent or verification is loading. After adding
`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, restart the development server or rebuild the
deployment to include its value in the browser bundle. The paired reCAPTCHA
secret is configured in Django, not in this frontend.

The frontend uses same-origin route handlers; the browser never receives the
backend authorization header. Shared client helpers handle request timeouts,
field errors, general errors, and success responses. Country and phone-code
selectors load their IDs and labels from the backend, with retry controls.

| Frontend endpoint                | Backend endpoint                          | Purpose                                 |
| -------------------------------- | ----------------------------------------- | --------------------------------------- |
| `GET /api/countries`             | `/website/constants/countries/`           | Registration countries                  |
| `GET /api/phone-country-codes`   | `/website/constants/phone-country-codes/` | Contact phone codes                     |
| `POST /api/register-validate`    | `/partners/register/validate/`            | Validate account details                |
| `POST /api/register`             | `/partners/register/`                     | Register and start email activation     |
| `POST /api/contact-us`           | `/website/contact/`                       | Send a contact enquiry with reCAPTCHA   |
| `POST /api/subscribe-newsletter` | `/website/subscribe-newsletter/`          | Subscribe with name, email, and consent |

The footer's newsletter drawer submits to the subscription endpoint and uses
the local Terms of Use and Privacy Policy. Registration sends its optional
newsletter preference with the account payload; it does not send a second
subscription request.

The App Router handlers in `src/app/api/` retain the original contact,
country lookup, registration, and newsletter paths. `src/lib/wordpress.ts`
reads Insights, Case Studies, and their taxonomies on the server with a
five-minute revalidation interval. `NEXT_PUBLIC_BLOG_URL` can override the
default WordPress origin.

`/sign-up` uses the existing country lookup, registration validation, and
registration endpoints. The three-step form collects account details, the
loyalty-currency preference, and optional goals, then confirms email activation.
Registration data stays in component memory and is cleared after success.
Local legal policies open in new tabs to preserve registration progress.
Registration browser tests use the local mock API only.

## Project structure

- `src/app/(marketing)/` contains the shared marketing layout and route entry
  points. Pages compose sections rather than owning their implementation.
- `src/app/(marketing)/our-technology/_components/` and `_content/` contain the
  technology page's visuals, sections, and copy.
- `src/app/(marketing)/about-us/_components/` and `_content/` contain the company
  story, collaboration model, leadership profiles, and their source content.
- `src/app/(marketing)/solutions/` contains the partner collaboration pages
  and their shared diagrams, case study presentation, and pricing section.
- `src/app/_components/marketing/` contains homepage sections and their local
  content and diagrams, plus the shared contact section.
- `src/app/_components/navigation/` contains the shared header and desktop/mobile
  navigation. `navigation-links.ts` defines the shared Platform, Solutions,
  Technology, Resources, and Company hierarchy, with flat capability groups.
  Desktop uses grouped dropdowns; below 1024px the same items use mobile
  accordions. API documentation is in Resources; Register and Sign in are utility
  actions. Shared URLs live in `src/lib/site-links.ts`.
- `src/app/_components/ui/` contains the site's reusable buttons, text links,
  arrows, and content tabs.
- `src/app/_components/forms/` contains the shared field labels, error messages,
  and input styling used by Contact Us and registration.
- `src/app/_components/newsletter/` contains the footer's newsletter drawer and
  subscription form.
- `src/app/(marketing)/sign-up/` contains registration steps, preferences,
  confirmation, and the route's form controller.
- `src/app/(marketing)/(legal)/` contains the Privacy Policy and Terms of Use,
  their published source content, and a shared server-rendered document layout.
  The canonical routes are `/privacy-policy` and `/terms`; the previous
  `/terms-and-conditions` link redirects to `/terms`.
- `src/components/ui/` contains adapted shadcn primitives.
- `src/lib/` contains shared utilities and server-only syntax highlighting.
  `website-api/` separates the server proxy, form validation, browser submission
  helper, and live option lookups.
- `research/` contains the original content research and design audits.
- `tests/` contains browser smoke tests for the important marketing-page flows.

The `/solutions` directory links to each capability and use case using the
same destinations as the navigation.
Dropdown links avoid prefetching the full page catalogue.

## Styling and components

Use Tailwind utilities and the brand tokens in `src/app/globals.css`. Global CSS is
reserved for tokens, shared element/accessibility defaults, and animation
keyframes. Use Manrope for UI text and monospace for code.

Reuse `ButtonLink` for primary/secondary calls to action and `TextLink` for text
links. Both forward standard Next.js link properties. `ContentTabs` accepts any
number of tabs and renders nothing for an empty list.

Keep static sections and code presentation on the server. Use client components
for interactive features such as navigation, forms, tabs, and the homepage diagram.
The code highlighter
loads the Python grammar on the server and caches the rendered lines.

## Checks

```sh
npm run format        # Format source, configuration, tests, and project docs
npm run format:check  # Check formatting without editing files
npm run lint
npm run typecheck
npm test
npm run check         # Run all checks, including a production build and smoke tests
```

Before the first browser-test run, install Chromium:

```sh
npx playwright install chromium
```

To use an existing Chromium-based browser instead, set
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable. For example:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH="/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" npm test
```

The smoke tests build into `.next/playwright`, serve a temporary production
preview on port 3100, and test desktop and mobile layouts. Form and API checks
use a mock backend on port 3101 and a stubbed reCAPTCHA script. The test servers
stop after the run. Video and trace recording are disabled.

Research documents and source image assets are excluded from automatic formatting.

## Production

```sh
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the public canonical origin before building
(the default is `https://www.currencyalliance.com`). Set `SITE_NOINDEX=1` on
public staging deployments. Local development and Vercel Preview builds
also emit `noindex`. Keep `SITE_NOINDEX` unset or `0` for production.

`/robots.txt` advertises `/sitemap.xml` on indexable builds. The sitemap lists
canonical marketing pages and published Insights and Case Studies, with
WordPress update dates when available. It reads the CMS at request time and
can still serve marketing URLs during a CMS outage. The permanent legacy URL
mappings live in `src/lib/site-redirects.ts`.
Submit the live sitemap in Google Search Console after launch.

Component licenses are recorded in `THIRD_PARTY_NOTICES.md`.
