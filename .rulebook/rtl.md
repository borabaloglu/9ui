# Right-to-left

Every component works in right-to-left layouts.

### RTL-1 Logical utilities

- **Recipe:** `ps-*`, `pe-*`, `ms-*`, `me-*`, `start-*`, `end-*`, `text-start`, `text-end`, `border-s`, `border-e`, `rounded-s-*`, `rounded-e-*` in place of the left and right forms. Use an `rtl:` variant only where no logical utility exists, for example rotation and translation.
- **Why:** logical classes compile to the same values in left-to-right, so nothing changes for existing layouts.
- **Standard:** `STD-W6`
- **Exceptions:** Phone Input: physical padding on the number field under `rtl:`. The number field stays left-to-right inside a right-to-left group, so logical padding would follow the field's own direction and land on the wrong side.

### RTL-2 Popups take their direction from `dir`

- **Recipe:** a popup wrapper accepts `dir` and passes it to its Positioner, so `align="start"` and `side="inline-start"` follow the reading direction.
- **Applies to:** Popover, Tooltip, Preview Card, Menu, Context Menu, Menubar, Navigation Menu, Select, Combobox, Autocomplete.
- **Why:** portaled content does not inherit direction from the place it was opened.

### RTL-3 Direction-aware behaviour reads the provider

- **Recipe:** `useDirection()` from Base UI for anything computed in JavaScript: scroll direction, arrow keys, slide order.
- **Applies to:** Carousel, Calendar.

### RTL-4 Physical props stay physical

A prop that names a physical edge is not mirrored.

- **Applies to:** Sheet `side`, Toast `position`, Drawer `swipeDirection`.
- **Why:** "right" means the right edge of the screen in every language. Use `inline-start` and `inline-end` where a logical side is offered.

### RTL-5 Keyboard shortcuts keep keycap order

- **Recipe:** `[unicode-bidi:plaintext]` on inline shortcut text, or an inner `<span dir="ltr">` where the shortcut is a flex container; key groups keep left-to-right order.
- **Applies to:** Kbd, menu shortcuts, Command shortcut.
- **Why:** `⌘N` describes a physical keyboard, which is not mirrored.

### RTL-6 Directional icons mirror, circular ones do not

- **Recipe:** `rtl:rotate-180` (or the mirrored icon) on chevrons and arrows that mean "forward" or "back".
- **Exceptions:** Spinner and other circular indicators keep turning clockwise.
