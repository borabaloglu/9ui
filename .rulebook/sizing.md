# Sizing and type

### SIZ-1 Height scale

One scale for every row control. Each size grows one step on touch devices.

- **Recipe:** fine pointer, then `any-pointer-coarse:`: xs `h-6`, `h-7`; sm `h-7`, `h-8`; default `h-8`, `h-9`; lg `h-9`, `h-10`; xl `h-10`, `h-11`. List items `min-h-7`, `min-h-9`. Checkbox, Radio and Slider thumb `size-4`, `size-5`.
- **Why:** a Button next to an Input of the same size must line up.

### SIZ-2 Size coverage

Every row control takes `size` with `sm | default | lg`. Button also has `xs` and `xl`.

- **Applies to:** Button, Toggle, Input, Input Group, Select trigger, Number Field, OTP Field, Combobox chips, Phone Input.
- **Exceptions:** Textarea: no `size`, it has no fixed height.

### SIZ-3 Control type

- **Recipe:** `text-sm font-medium`; `sm` controls `text-[0.8rem]`; `xs` `text-xs`; `gap-1.5 px-2.5` at the default size. Only `font-medium` and `font-normal` are used. No px font sizes and nothing under 11px.
- **Exceptions:** Input: `px-2.75`, so its text lines up optically with a Select trigger's.

### SIZ-4 Touch text

Interactive text grows to 16px on touch devices.

- **Recipe:** `any-pointer-coarse:text-base` on default and larger sizes. Text fields use it at every size, including `sm`.
- **Why:** 16px is readable at arm's length, and iOS zooms the page when a focused field is smaller.
- **Exceptions:** `xs` and `sm` buttons, toggles and tabs keep their size.

### SIZ-5 Touch hit area

A control smaller than 44px gets an invisible 44px hit area on touch devices.

- **Recipe:** `any-pointer-coarse:after:absolute any-pointer-coarse:after:size-full any-pointer-coarse:after:min-h-11 any-pointer-coarse:after:min-w-11`, or `after:-inset-*` for a fixed shape. Keyed on pointer capability, never on a breakpoint.
- **Standard:** `STD-A5`, `STD-K6`
- **Exceptions:** Tabs tab: 36px on touch. The scrolling tab list clips an overflowing hit area, and a 44px track would stand taller than the buttons beside it.

### SIZ-6 Icons

- **Recipe:** `[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`. Steps: `size-3` (xs), `size-3.5` (sm), `size-4`, `size-4.5` (xl).
- **Why:** an icon keeps its size in a shrinking row, never swallows a click, and a user's `size-*` class still wins.

### SIZ-7 List popups

- **Recipe:** popup `p-1`, `sideOffset` 4; menus `min-w-32`; Select, Combobox and Autocomplete `min-w-(--anchor-width)`; item `px-2 py-1 gap-2 text-sm`; group label `px-2 py-1.5 text-xs font-medium text-muted-foreground`.
- **Exceptions:** Menubar and Navigation Menu: larger `sideOffset`, to clear their bar.

### SIZ-8 Text parts

- **Recipe:** title `text-base leading-snug font-medium`; label `text-sm leading-snug font-medium`; description `text-muted-foreground text-sm text-pretty`; links inside a description `underline underline-offset-3 hover:text-foreground`.
- **Applies to:** titles and descriptions in Dialog, Alert Dialog, Sheet and Drawer; labels in Field and Label.
- **Exceptions:** Popover: its title and description take the popup's `text-sm`.

### SIZ-9 Tracks

- **Recipe:** Progress and Slider `h-1`; Meter `h-2`.
- **Why:** a meter is a standing reading with level colours, read at a glance, so it gets more area.

### SIZ-10 Changing numbers use tabular figures

- **Recipe:** `tabular-nums` on values that update in place.
- **Applies to:** Number Field, Slider value, Progress and Meter values, Pagination, table numbers, chart tooltips.
