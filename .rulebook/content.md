# Content

A component is fixed where plausible data makes content unreadable or unreachable: file names, emails, URLs, paths, long names, large counts. Layout choices for unusual content, such as a very long button label, stay with the app.

### CON-1 Text that can be long must be able to shrink

- **Recipe:** `min-w-0` on the flex child that holds text; `minmax(0,1fr)` or `grid-cols-1` for grid tracks that hold text; `shrink-0` on the icons, buttons and badges beside it.
- **Why:** flex and grid children default to their content width, so one long word widens the whole component.
- **Standard:** `STD-W2`

### CON-2 Titles and descriptions break long words

- **Recipe:** `wrap-break-word` on titles and descriptions. `wrap-anywhere` where the text sits in a grid or flex item that keeps its minimum content width.
- **Applies to:** Dialog, Alert Dialog, Popover, Card, Alert, Toast, Tooltip, and item text in Select, Combobox and Menubar.
- **Standard:** `STD-W1`

### CON-3 Single-line values truncate

- **Recipe:** `min-w-0 truncate` on the label, in its own element when the parent is a flex row.
- **Applies to:** Combobox chips, Input Group text, Sidebar labels.
- **Standard:** `STD-W2`

### CON-4 Popups stay inside the viewport

- **Recipe:** `max-h-(--available-height)` with `overflow-y-auto` on every positioned popup; `max-w-(--available-width)` on popups whose content sets their width.
- **Applies to:** height: every positioned popup. Width: Select, Combobox, Autocomplete, Popover, Preview Card, Navigation Menu, Tooltip.
- **Standard:** `STD-W3`

### CON-5 Counts keep their shape up to three digits

- **Recipe:** a minimum width with `w-auto px-1` in place of a fixed square (for example `min-w-8 w-auto px-1`), so the control grows only when it has to.
- **Applies to:** Pagination links, Sidebar badge.
- **Standard:** `STD-W4`

### CON-6 Left to the app

Not fixed in components, on purpose:

- Wrapping of long Button, Badge and Tab labels.
- Overflow of a Menubar or Toolbar with too many items.
- First-line alignment of a control beside a wrapped label.

- **Why:** each is a layout decision with more than one right answer, and a default would get in the way of the others.
