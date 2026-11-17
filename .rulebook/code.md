# Code

### COD-1 Component shape

- **Recipe:** function declarations; no `forwardRef`, `ref` arrives as a prop; one file per component family in `components/ui/`.

### COD-2 Imports

- **Recipe:** `import { X as BaseX } from "@base-ui/react/x"`; `import type * as React from "react"` unless the file uses hooks; lucide icons with the `Icon` suffix (`ChevronDownIcon`).

### COD-3 Prop typing

A styled part types `className` as a string. An unstyled part uses the primitive's props as they are.

- **Recipe:** styled `Omit<BaseX.Part.Props, "className"> & { className?: string }`; unstyled the primitive's own props (`BaseX.Part.Props` or `React.ComponentProps<typeof BaseX.Part>`). Keep the primitive's generics (`BaseX.Root.Props<Payload>`).
- **Why:** Base UI also accepts a function for `className`. `cn()` drops a function without an error, so the type must not accept it.
- **Standard:** `STD-K2`

### COD-4 `"use client"` only where needed

- **Recipe:** add it when the file itself uses hooks, context or event handlers. Leave it off files that only compose parts. Demos that use hooks or handlers declare it themselves.
- **Why:** a needless directive turns exported helpers such as `buttonVariants()` into client references that throw when called from a Server Component.
- **Standard:** `STD-K3`

### COD-5 Every rendered element has a `data-slot`

- **Recipe:** `data-slot="{component}-{part}"`, unique per part (`dialog-close` and `dialog-close-button` are two slots).
- **Why:** slots are the stable hook for styling a part from a parent, and for selectors such as `has-data-[slot=card-footer]`.

### COD-6 `className` and props always reach the element

- **Recipe:** `className={cn("base classes", className)}` then `{...props}`, on every branch that renders.
- **Why:** a branch that forgets either silently ignores what the user passed.
- **Standard:** `STD-K1`

### COD-7 Variants

- **Recipe:** `cva` when a part has several variant axes, a plain class map when it has one; defaults repeated in the destructure (`variant = "default"`); `data-variant` and `data-size` always emitted; size unions ordered `"sm" | "default" | "lg"`.
- **Why:** the data attributes let a parent style by variant, and they are only reliable when they are always present.

### COD-8 Popup wrappers bundle their parts

- **Recipe:** one `XPopup` renders Portal, Positioner and Popup. It accepts `align`, `alignOffset`, `side`, `sideOffset`, `anchor`, `dir` and `portalProps`.
- **Applies to:** every positioned popup.
- **Exceptions:** Context Menu: no offset defaults, it opens at the pointer.

### COD-9 Part names

- **Recipe:** `Popup` for the surface, `Panel` for a scrolling body, `Backdrop` for the layer behind a modal.
- **Exceptions:** parts that mirror a third-party library keep its names (Vaul `Content`, `Overlay`).

### COD-10 Vocabulary

- **Recipe:** `destructive` for actions (Button, menu items); `danger` for status (Badge, Alert); Toast keeps `error`, matching the toast API people know. Optional chrome uses `show*` booleans (`showArrow`, `showCloseButton`, `showHandle`), never `hide*` or a bare name. `active`, not `isActive`. Exported hooks are prefixed with their component (`useComboboxFilter`).
- **Why:** one word per idea across the library.

### COD-11 Exports

- **Recipe:** a single sorted `export { … }` block at the end of the file; types in a separate `export type { … }` line above it.

### COD-12 Ancestor selectors use named groups

- **Recipe:** `group/number-field` on the root and `group-data-[size=sm]/number-field:` on the part, in place of `in-data-[size=sm]:`.
- **Why:** an unnamed ancestor selector also matches unrelated parents that set the same attribute, such as a Card with `data-size`.
- **Standard:** `STD-K4`

### COD-13 Touch behaviour is keyed on the pointer

- **Recipe:** `any-pointer-coarse:` for anything that exists because of touch. Breakpoints are for layout only.
- **Why:** a touch tablet is wide, and a narrow window on a laptop has a mouse.
- **Standard:** `STD-K6`
