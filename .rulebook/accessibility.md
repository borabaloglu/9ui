# Accessibility

### ACC-1 Scope

Components meet WCAG 2.2 level AA. Anything beyond it is reported as "nice to have" with a recommendation and is not applied unless asked for.

- **Recipe:** every accessibility finding names the success criterion it fails. No criterion, no required fix.
- **Why:** a library that adds every possible announcement and role makes choices that belong to the app.
- **Standard:** `STD-A1` to `STD-A9`

### ACC-2 Name, role and state

- **Recipe:** icon-only controls get an `aria-label`. A popup with `role="dialog"` gets a name. A disabled link keeps `role="link"` with `aria-disabled`. A trigger that collapses something sets `aria-expanded`. The current page link sets `aria-current="page"`.
- **Standard:** `STD-A4`

### ACC-3 Selected and highlighted text keeps its contrast

- **Recipe:** secondary text inside a highlighted item switches to the item's foreground: `in-data-highlighted:text-accent-foreground`.
- **Applies to:** menu shortcuts, Command shortcut, calling codes and other muted text inside list items.
- **Standard:** `STD-A1`

### ACC-4 Not supported by the library

Left to the app, on purpose:

- Forced-colors and Windows contrast themes.
- Translated default labels. A few parts ship an English `aria-label`, such as the close button; translate it in your copy of the component.

- **Why:** both depend on the app's audience, and neither is required at level AA.
