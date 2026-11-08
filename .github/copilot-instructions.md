# 9ui – AI Coding Agent Instructions

## Overview

- Monorepo managed with `pnpm` and `turbo` in `package.json`.
- Two Next.js 15 app under `apps/www` is the primary docs/demo site.
- Components are built on `@base-ui/react` and Tailwind CSS, exposed via docs pages and a generated component registry.

## Key Workspaces

- `apps/www/src/app`: Next App Router pages/layouts; main site entry is `page.tsx`, root shell in `layout.tsx`.
- `apps/www/src/components`: Reusable UI components (buttons, badges, marketing sections, etc.). Prefer reusing these before adding new primitives.
- `apps/www/src/config`: Site-level config such as `site` metadata and navigation.
- `apps/www/src/content`: MDX-based docs and component docs; rendered via `mdx-components.tsx` and registry helpers.
- `apps/www/src/__registry__`: Generated files (`contents.tsx`, `demos.tsx`) that map component metadata and demo implementations.
- `apps/www/public/r/*.json`: Generated JSON registry describing components for external consumption and LLM tooling.

## Generated Artifacts & Scripts

- Do not manually edit files in `apps/www/src/__registry__`, `apps/www/public/r/*.json`, or `apps/www/src/app/globals.css`; they are generated.
- Use the following scripts (run from `apps/www` unless otherwise noted):
  - `pnpm generate:contents`: Regenerates `src/__registry__/contents.tsx` from `src/content`.
  - `pnpm generate:demos`: Regenerates `src/__registry__/demos.tsx` from component demo sources.
  - `pnpm generate:globals-css`: Regenerates global Tailwind styles.
  - `pnpm generate:llms`: Regenerates `public/r/*.json` and other LLM-facing registry artifacts.
  - `pnpm build:registry`: Runs the registry build script; safe to run after changing registry/config files.
- At the monorepo root, use `pnpm build`, `pnpm dev`, `pnpm dev:www`, and `pnpm lint` instead of calling `next` directly.

## Component & Docs Patterns

- When adding or updating a component:
  - Implement the React component under `apps/www/src/components` using Base UI primitives where possible.
  - Add or update docs/demos in `apps/www/src/content` (MDX) following existing files for structure, frontmatter, and code block conventions.
  - Run the content/demo generation scripts to keep registries in sync.
- MDX rendering is wired via `apps/www/src/mdx-components.tsx`; extend this when introducing new MDX elements or custom components.
- Use Tailwind utility classes and `cn` from `apps/www/src/lib/utils` for conditional styling instead of manual string concatenation.

## Styling & Theming

- Global theming is handled in `apps/www/src/app/layout.tsx` via `next-themes` and CSS variables.
- Prefer using existing design tokens (Tailwind config and CSS variables) and existing components like `Button`, `Badge`, and layout shells rather than redefining spacing, colors, or typography.
- Tailwind 4 and React 19 support is a requirement in `apps/www`; avoid patterns incompatible with these versions.

## Linting, Formatting, and Conventions

- Biome handles linting and formatting: shared settings live in the root `biome.json`, app-specific ones in `apps/www/biome.json`.
- Use `pnpm lint` at the root or `pnpm lint` inside `apps/www` to validate changes; for auto-fixes, run `pnpm fix` in the app directory. Use `pnpm lint:ci` at the root for a read-only check.
- Imports and Tailwind classes are sorted by Biome; run `pnpm fix` instead of ordering them by hand.
- Prefer named exports for reusable utilities/components; default exports are typically used only for Next page/layout components.

## When Modifying Workflows

- If you add new scripts that affect registries or build output, place them under the appropriate app `scripts/` directory and wire them into `package.json` similarly to existing `generate:*` scripts.
- Keep cross-app changes minimal.

## Quick Start for Agents

- For UI or docs changes: work inside `apps/www`, update components in `src/components` and docs in `src/content`, then run the generation scripts.
- For build or tooling changes: modify root configs (`turbo.json`, `biome.json`) and verify with root `pnpm` scripts.
- Avoid hand-editing any file clearly marked as generated or under `__registry__` or `public/r`.
