# Surfaces

### SUR-1 Radius follows the role

Each role has one radius. A component never picks its own.

- **Recipe:** controls and popups `rounded-lg`; `sm` controls `rounded-[min(var(--radius-md),0.75rem)]`; `xs` controls `rounded-[min(var(--radius-md),0.625rem)]`; list items and chips `rounded-sm`; cards and containers `rounded-xl`; modals `--radius-xl`; edge panels `--radius-2xl`; tracks and badges `rounded-full`.
- **Why:** radius is the fastest way to tell that two parts belong to the same family.
- **Exceptions:** Tooltip: `rounded-md`, it is a small inverted label, not a popup surface. Tabs tab: `rounded-md`, it sits inside the tab list (see `SUR-2`). Command and Emoji Picker: `rounded-xl`, they are standalone containers that can also be placed in a popup. Sidebar badge and Sidebar action buttons: `rounded-md`, they sit inside a menu row. Dialog and Alert Dialog in bottom mode: keep the modal radius on their top corners, as Drawer does. Checkbox: `rounded-[min(var(--radius-sm),0.25rem)]`, so a 16px box never turns into a circle.

### SUR-2 Nested radii keep their role

Nested parts use fixed radius tokens, never a value computed from their container. Concentric (inner = outer minus border minus padding) is the reference, not a requirement.

- **Recipe:** a child may be up to 3px rounder than concentric and at most 1px squarer. Do not square a child or change padding to reach an exact fit.
- **Applies to:** items in list popups, tabs in a tab list, buttons in a toolbar, search fields inside popups.
- **Why:** re-deriving each child from its container breaks down in containers with mixed children, and the visible error inside this band is about 1px.

### SUR-3 Field surface

- **Recipe:** `bg-input shadow-xs`, a 1px `border-border` edge, and a 1px edge highlight: black 6% under the bottom edge in light, white 8% along the top edge in dark. The shadow and highlight are removed when the field is disabled, read-only or invalid; the highlight is also removed on focus.
- **Applies to:** text fields, Select trigger.
- **Why:** the highlight gives the field depth; on focus the ring takes over, and a disabled or invalid field should look flat.
- **Exceptions:** Input, Textarea, OTP Field: native inputs cannot render `::before`, so they draw the edge with `inset-ring-1` and the highlight with `inset-shadow`. The result must match the pseudo-element version.

### SUR-4 Outlined control surface

Outlined controls use the field surface, and drop the shadow and highlight when they are pressed, checked, disabled or invalid.

- **Recipe:** `border-border bg-input shadow-xs` plus the `before:` highlight, gated with `not-active` and `not-data-disabled` on buttons and toggles, and with `not-data-checked` and `not-aria-invalid` on Checkbox and Radio.
- **Applies to:** Button `outline` and `destructive-outline`, Toggle `outline`, Checkbox, Radio.

### SUR-5 Popup surface

- **Recipe:** `bg-popover text-popover-foreground rounded-lg border shadow-md`, no blur. Light: `not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-md)]`. Dark: the `edge-highlight-*` utility with the popup's radius, for example `dark:edge-highlight-lg` or `dark:edge-highlight-(--popover-radius)`.
- **Applies to:** list popups and content popups.
- **Why:** one edge treatment on every floating surface, drawn with one shared utility.
- **Exceptions:** Tooltip: inverted, `bg-foreground text-background`, no border. Select: `ring-1 ring-border` in place of `border`, with the same highlights drawn as shadow layers under the ring, so the popup can line up with its trigger.

### SUR-6 Modal surface

- **Recipe:** backdrop `bg-black/30 dark:bg-black/50 supports-backdrop-filter:backdrop-blur-xs`; panel `bg-popover shadow-lg` with the popup edge treatment; footer `bg-muted/50 border-t`; a panel under a nested one dims with `brightness-90 dark:brightness-75`.
- **Applies to:** modals and edge panels.

### SUR-7 Card surface

- **Recipe:** `rounded-xl border shadow-xs bg-card text-card-foreground` plus the `before:` edge highlight.
- **Applies to:** Card, Alert, Table frame, Toolbar, Menubar bar, floating and inset Sidebar panels.
- **Exceptions:** tinted Alert variants: 5% of the tone mixed into the card colour, for example `bg-[color-mix(in_oklab,var(--warning)_5%,var(--card))]`, so the tint sits on the card colour and keeps the dark surface lift.

### SUR-8 Primary fills

A button-sized primary fill carries a white 20% top highlight. Indicators 20px and under stay flat.

- **Applies to:** highlight on Button `default` and the selected Calendar day; flat on checked Checkbox, Radio, Switch, Badge, and Slider, Progress and Meter fills.
- **Why:** a highlight on a small indicator reads as noise.

### SUR-9 Colours come from tokens

No raw colours in components.

- **Recipe:** theme tokens only. Black and white with alpha are allowed for edge highlights, shadows and backdrops.
- **Why:** presets and dark mode change tokens; a raw colour does not follow.
- **Exceptions:** Slider thumb: white in both themes, it is a physical knob. Number Field scrub cursor: black with a white outline, like a system cursor.

### SUR-10 No `!` modifier

Components never use Tailwind's `!` modifier. To override a class, pass the same variant chain so `tailwind-merge` replaces it.

- **Why:** `!` makes a class impossible to override from `className`.
- **Standard:** `STD-K5`
- **Exceptions:** Vaul: its library injects unlayered CSS that only `!` can beat.
