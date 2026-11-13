<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Styling conventions

- Use Tailwind CSS utilities for page and component styling. Keep utility classes static so Tailwind can detect them.
- Reuse the brand colors exposed through `@theme` in `src/app/globals.css`. Use Manrope for UI text and monospace for code examples.
- Keep global CSS limited to theme tokens, shared element defaults, accessibility defaults, and custom animation keyframes. Do not add CSS Modules for ordinary layout or component styles.
- Reuse `ButtonLink`, `TextLink`, and `ContentTabs` for their respective patterns. Group longer conditional or responsive class lists with `cn()` and keep them formatted.
- Verify responsive layouts, hover/focus states, and reduced motion when changing styling. Preserve the existing design during styling refactors.

## Component boundaries and checks

- Keep shared presentation server-rendered. Add client boundaries only for browser interactions.
- Define desktop/mobile menu destinations in `src/app/_components/navigation/navigation-links.ts`.
- Make shared components accept standard native/framework props and avoid tying color themes to content counts.
- Run `npm run format`, `npm run lint`, and `npm run typecheck` for code changes. Use `npm test` for changes to navigation, tabs, or diagram interaction.
- `npm run check` runs formatting, lint, types, a production build, and desktop/mobile smoke tests. Browser tests use port 3100; keep the user's development preview on port 3000.
