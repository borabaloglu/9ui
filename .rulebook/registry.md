# Registry and docs

These rules apply only to a project that publishes components through a registry and documents them, as 9ui does. In an app that only uses the components, skip this file.

### REG-1 Every component has a demo

- **Recipe:** `components/demos/<name>/<name>-demo.tsx` for the main demo, and one `<name>-<case>-demo.tsx` per documented example. A demo that uses state, effects or handlers starts with `"use client"`.

### REG-2 Demos do not repair components

- **Recipe:** a demo passes no class that every user would also have to pass. If it needs one, the fix belongs in the component.
- **Why:** people copy demos; a hidden fix in a demo becomes a bug in their app.

### REG-3 Every component has an RTL demo

- **Recipe:** `<name>-rtl-demo.tsx` with English, Arabic and Hebrew strings through `useTranslation`, shown with `<ComponentPreview name="<name>-rtl-demo" direction="rtl" />`. It shows only the cases where direction matters, and passes `dir` to portaled parts.

### REG-4 Docs page shape

- **Recipe:** in this order: links to the primitive's reference, the main preview, `## Installation`, `## Usage` (imports and anatomy), `## Examples` with one `###` per demo, `### RTL` as the last example, `## Form Integration` where the component is a form control, `## API Reference`.
- **Wording:** short and direct: "To do X, set Y." No implementation details.

### REG-5 API Reference lists only what the library adds

- **Recipe:** own props, defaults that differ from the primitive, props forwarded to a bundled part, parts that do not exist in the primitive, exported helpers. Never `className`, `children`, `render` or `ref`. A component that adds nothing gets one sentence and a link to the primitive's reference.

### REG-6 Registry entry

- **Recipe:** one item per component in `registry.json`. `dependencies` lists every package the file imports, without versions. `registryDependencies` lists every other component it imports.
- **Why:** the shadcn CLI skips an unversioned package that is already installed and re-adds a versioned one, so versions on items cause needless reinstalls.
- **Exceptions:** Checkbox Group: lists Checkbox as a registry dependency without importing it, because a group is of no use without its checkboxes.

### REG-7 Version pins live in the init

- **Recipe:** pin shared packages once, in the init item. Pin on a component only when a newer major of its package is known to break it.

### REG-8 Tokens a component needs ship with the registry

- **Recipe:** a custom easing, utility, keyframe or variable used by a component is added to the registry in the same change: on the component's own item when only that component uses it, in the init when it is shared.
- **Why:** a class that only exists on the docs site compiles to nothing in a user's project.
