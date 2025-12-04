# 9ui – AI Coding Agent Instructions

## Overview
- Monorepo managed with `pnpm` and `turbo` in `package.json`.
- Two Next.js 15 apps under `apps/1x` and `apps/2x`; `2x` is the primary docs/demo site.
- Components are built on `@base-ui-components/react` and Tailwind CSS, exposed via docs pages and a generated component registry.

## Key Workspaces
- `apps/2x/src/app`: Next App Router pages/layouts; main site entry is `page.tsx`, root shell in `layout.tsx`.
- `apps/2x/src/components`: Reusable UI components (buttons, badges, marketing sections, etc.). Prefer reusing these before adding new primitives.
- `apps/2x/src/config`: Site-level config such as `site` metadata and navigation.
- `apps/2x/src/content`: MDX-based docs and component docs; rendered via `mdx-components.tsx` and registry helpers.
- `apps/2x/src/__registry__`: Generated files (`contents.tsx`, `demos.tsx`) that map component metadata and demo implementations.
- `apps/2x/public/r/*.json`: Generated JSON registry describing components for external consumption and LLM tooling.

## Generated Artifacts & Scripts
- Do not manually edit files in `apps/2x/src/__registry__`, `apps/2x/public/r/*.json`, or `apps/2x/src/app/globals.css`; they are generated.
- Use the following scripts (run from `apps/2x` unless otherwise noted):
  - `pnpm generate:contents`: Regenerates `src/__registry__/contents.tsx` from `src/content`.
  - `pnpm generate:demos`: Regenerates `src/__registry__/demos.tsx` from component demo sources.
  - `pnpm generate:globals-css`: Regenerates global Tailwind styles.
  - `pnpm generate:llms`: Regenerates `public/r/*.json` and other LLM-facing registry artifacts.
  - `pnpm build:registry`: Runs the registry build script; safe to run after changing registry/config files.
- At the monorepo root, use `pnpm build`, `pnpm dev`, `pnpm dev:2x`, and `pnpm lint` instead of calling `next` directly.

## Component & Docs Patterns
- When adding or updating a component:
  - Implement the React component under `apps/2x/src/components` using Base UI primitives where possible.
  - Add or update docs/demos in `apps/2x/src/content` (MDX) following existing files for structure, frontmatter, and code block conventions.
  - Run the content/demo generation scripts to keep registries in sync.
- MDX rendering is wired via `apps/2x/src/mdx-components.tsx`; extend this when introducing new MDX elements or custom components.
- Use Tailwind utility classes and `cn` from `apps/2x/src/lib/utils` for conditional styling instead of manual string concatenation.

## Styling & Theming
- Global theming is handled in `apps/2x/src/app/layout.tsx` via `next-themes` and CSS variables.
- Prefer using existing design tokens (Tailwind config and CSS variables) and existing components like `Button`, `Badge`, and layout shells rather than redefining spacing, colors, or typography.
- Tailwind 4 and React 19 support is a requirement in `apps/2x`; avoid patterns incompatible with these versions.

## Linting, Formatting, and Conventions
- Respect ESLint and Prettier configs at the repo root and under each app (`eslint.config.mjs`, `prettier.config.mjs`).
- Use `pnpm lint` at the root or `pnpm lint` inside `apps/2x`/`apps/1x` to validate changes; for auto-fixes, run `pnpm fix` in the app directory.
- Keep imports sorted according to the existing Prettier sort-imports plugin.
- Prefer named exports for reusable utilities/components; default exports are typically used only for Next page/layout components.

## When Modifying Workflows
- If you add new scripts that affect registries or build output, place them under the appropriate app `scripts/` directory and wire them into `package.json` similarly to existing `generate:*` scripts.
- Keep cross-app changes minimal; `1x` and `2x` may evolve independently. If a change must touch both, mirror the pattern already present in both apps.

## Quick Start for Agents
- For UI or docs changes: work inside `apps/2x`, update components in `src/components` and docs in `src/content`, then run the generation scripts.
- For build or tooling changes: modify root configs (`turbo.json`, `eslint.config.mjs`, `prettier.config.mjs`) and verify with root `pnpm` scripts.
- Avoid hand-editing any file clearly marked as generated or under `__registry__` or `public/r`.
