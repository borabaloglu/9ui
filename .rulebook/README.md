---
name: 9ui
version: 2026-11-17
source: https://9ui.dev/r/rulebook.json
stack: Base UI 1.9, Tailwind CSS 4.2, React 19
---

# 9ui rulebook

The rules every 9ui component follows, so the library reads as if one person designed it. This is 9ui's house style. After you import it, it is yours: change any rule, and record the change in `decisions.md`.

## Files

| File | What it covers |
|---|---|
| `surfaces.md` | Radius, fields, popups, modals, cards, fills, colour tokens |
| `states.md` | Focus, hover, pressed, highlighted, open, disabled, invalid, read-only, cursor |
| `sizing.md` | Heights, type, touch sizes, hit areas, icons, list popups, text parts |
| `motion.md` | Curves, durations, popups, modals, expand and collapse, reduced motion |
| `content.md` | Long text, missing data, popups at small widths |
| `rtl.md` | Right-to-left layout |
| `accessibility.md` | What is required, what is optional |
| `code.md` | File shape, typing, slots, variants, naming |
| `registry.md` | Demos, docs pages and registry entries. Applies only to projects that publish a registry |
| `decisions.md` | Every change to a rule, every exception, every accepted deviation from a standard |

## How a rule is written

```md
### MOT-2 Popups scale and fade from their trigger

One or two sentences that state the rule.

- **Recipe:** the classes or values that implement it.
- **Applies to:** the roles or components it covers.
- **Why:** the reason, so the rule can be judged when a case does not fit.
- **Standard:** the standard it implements, if any (for example `STD-M7`).
- **Exceptions:** Component: reason.
```

- The id never changes, even when the rule does. Removed rules keep their heading with "Removed" and a date.
- A rule with a **Standard** line implements a general standard the skills always check. You can still change it; the change is listed as an accepted deviation in every report.
- A rule without one is house style. Change it freely; after that, only components that do not follow the new value are reported.
- **Exceptions** are components that break the rule on purpose. An exception with a reason is not reported.

## Tailwind

Tailwind reads this folder like any other source file. To keep class names that appear only here out of your CSS, exclude it in your main stylesheet, with the path relative to that file:

```css
@source not "../.rulebook";
```

## Roles

Rules apply to roles, not to component names. A new component takes the rules of the role it plays.

| Role | Examples |
|---|---|
| Button-sized control | Button, Toggle, Select trigger, Tabs tab |
| Text field | Input, Textarea, Number Field, OTP Field, Input Group, Combobox chips |
| Small control | Checkbox, Radio, Switch, Slider thumb |
| List popup | Menu, Context Menu, Menubar, Select, Combobox, Autocomplete |
| Content popup | Popover, Preview Card, Tooltip, Navigation Menu |
| Modal | Dialog, Alert Dialog |
| Edge panel | Sheet, Drawer, bottom Dialog on small screens |
| Card surface | Card, Alert, Table frame, Toolbar, Menubar bar |
| List item | Menu item, Select item, Command item |
| Indicator | Check mark, radio dot, Progress, Meter, Badge, Spinner |
