# Standards

These are general standards for interface components. They do not belong to any one project. Check every one of them on every run, whatever the project's rulebook says.

A project may knowingly not meet a standard. That is its right, and you do not block it. When it does, the deviation is recorded in `.rulebook/decisions.md` under "Accepted deviations", and you still list it in every report, one line each, under "Accepted". A deviation that is not recorded is a finding.

## Consistency

- **STD-C1 Same role, same recipe.** A part matches its siblings of the same role in radius, height, padding, type, states and motion. A difference is either recorded as an exception with a reason, or it is a finding.
- **STD-C2 One vocabulary.** Prop names, variant names, part names and data attributes match the ones siblings use for the same idea.

## Worst-case content

- **STD-W1 Long unbreakable text** (a URL, a path, a file name) never makes the component scroll sideways or pushes its controls out of reach.
- **STD-W2 Text that cannot fit** wraps or truncates on purpose. The element that holds it can shrink; the icons and buttons beside it cannot.
- **STD-W3 Popups stay inside the viewport**, in both directions, down to a 320px wide screen.
- **STD-W4 Extreme values render sanely:** empty, missing, one character, zero items, hundreds of items, counts of five digits.
- **STD-W5 Non-Latin text and emoji** do not clip. Line height leaves room for tall scripts.
- **STD-W6 Right-to-left:** the layout mirrors. Spacing and position use logical properties; physical ones remain only where the meaning is physical.

## Motion

- **STD-M1 Motion has a reason.** Actions repeated many times a minute, actions triggered from the keyboard, and popups driven by typing do not animate.
- **STD-M2 Never `transition: all`.** List the properties.
- **STD-M3 Movement uses `translate`, `scale` and `opacity`.** Layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`) do not animate. Two exceptions: a size change driven by a measured variable (a height reveal, a popup resizing as its content swaps), and an anchored popup following its anchor.
- **STD-M4 Entering and exiting use an ease-out curve.** Nothing that enters starts slow. No `ease-in` on interface motion.
- **STD-M5 Interface transitions stay at or under 300ms.** Large panels that travel their own size may run longer. Exits are shorter than enters; a crossfade between two contents may use one duration.
- **STD-M6 Nothing appears from `scale(0)`.** Start at 0.9 or higher, together with opacity.
- **STD-M7 A popup grows from its trigger** (transform origin at the anchor). A centred modal grows from its centre.
- **STD-M8 Enter and exit are interruptible.** Use transitions, which retarget when reversed mid-way. Keyframe animations restart.
- **STD-M9 Reduced motion** removes movement and scale and keeps opacity and colour. Press scale sits behind a reduced-motion check. An endless animation has a still fallback unless it is status feedback.
- **STD-M10 Pressing gives feedback at once.** Every pressable shows a change on pointer-down, with no delay and no easing in.
- **STD-M11 A backdrop shares its panel's curve and durations.**

## Accessibility (WCAG 2.2 level AA)

Name the success criterion in every finding. Anything that no AA criterion requires is a recommendation, reported under "Nice to have", never as a finding.

- **STD-A1 Text contrast** is at least 4.5:1, or 3:1 for large text (1.4.3). This includes text on highlighted and selected items.
- **STD-A2 Non-text contrast** is at least 3:1 for control boundaries, state indicators and focus indicators (1.4.11).
- **STD-A3 Focus is visible** on every element a user can focus with the keyboard, and is not hidden by other content (2.4.7, 2.4.11). A container that only receives focus from script, such as a dialog surface, needs no indicator.
- **STD-A4 Name, role and value** are exposed: icon-only controls have a name, custom controls have a role, and states such as expanded, selected, checked, disabled and current are set (4.1.2, 1.3.1).
- **STD-A5 Targets are at least 24 by 24 CSS pixels**, or have that much space (2.5.8). Recommend 44px on touch devices.
- **STD-A6 Everything works from the keyboard**, with no trap (2.1.1, 2.1.2).
- **STD-A7 Colour is never the only signal** for a state or an error (1.4.1).
- **STD-A8 Content reflows at 320px wide and survives 200% text zoom** without loss (1.4.10, 1.4.4).
- **STD-A9 Status changes are announced** without moving focus (4.1.3).

## Code

- **STD-K1 What the user passes reaches the element.** `className` and remaining props are applied on every branch that renders, and the user's classes win.
- **STD-K2 Types do not accept what the code drops.**
- **STD-K3 The client and server boundary is right.** A file is a client module only when it needs to be; helpers meant for the server stay callable there.
- **STD-K4 State selectors match only the intended state and element.** No bare `[aria-invalid]` (it matches `"false"`); no unnamed ancestor selectors that an unrelated parent can trigger.
- **STD-K5 No `!important`** to win specificity.
- **STD-K6 Touch behaviour is keyed on pointer capability**, never on viewport width.

## Fallback values

Skip this section unless you are creating a rulebook. Use these only when writing a rulebook for a project whose own code shows no consistent pattern. They are neutral defaults, not a house style.

| Topic | Value |
|---|---|
| Focus indicator | 2px solid, 3:1 against adjacent colours, 2px offset |
| Control edge | 3:1 against its surface |
| Text | 4.5:1; muted text still 4.5:1 |
| Touch target | 44px hit area on touch devices, 24px minimum everywhere |
| Field text on touch | 16px |
| Popup enter and exit | 150ms in, 100ms out, ease-out, opacity plus scale from 0.95 |
| Modal enter and exit | 200ms in, 150ms out, ease-out, opacity plus scale from 0.96 |
| Colour and border change | 150ms ease-out |
| Press | scale 0.97 under a reduced-motion check, plus a colour step |
