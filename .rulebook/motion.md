# Motion

### MOT-1 Curves and durations

- **Recipe:** `ease-out-quint` (`cubic-bezier(0.23, 1, 0.32, 1)`) for anything that enters, exits, moves or scales; Tailwind `ease-out` for colour, border and shadow changes; `ease-drawer` (`cubic-bezier(0.32, 0.72, 0, 1)`) for edge panels. Press scale shares its control's `duration-150 ease-out`. Nothing runs longer than 300ms except edge panels, the stacked toast and looping progress.
- **Standard:** `STD-M4`, `STD-M5`

### MOT-2 List every transitioned property

- **Recipe:** `transition-[scale,opacity]`, `transition-[background-color,border-color,box-shadow]`, or a named group such as `transition-colors`. Never `transition-all`.
- **Why:** `all` animates properties nobody chose, including layout.
- **Standard:** `STD-M2`

### MOT-3 Popups scale and fade from their trigger

- **Recipe:** Base UI starting and ending styles: `origin-(--transform-origin) transition-[scale,opacity] ease-out-quint duration-150 data-ending-style:duration-100 data-starting-style:opacity-0 data-ending-style:opacity-0`. Scale `0.95` for list popups, `0.98` for content popups. Add `data-instant:transition-none` wherever the primitive sets `data-instant`.
- **Applies to:** list popups and content popups.
- **Standard:** `STD-M6`, `STD-M7`, `STD-M8`
- **Exceptions:** submenus: opacity only, 100ms. Select aligned over its trigger: no transition, a popup that covers its trigger does not grow from it. Navigation Menu: 200ms in, 150ms out, it is a larger surface that changes size. Popover, Preview Card and Navigation Menu also transition `width` and `height` from the primitive's measured variables when their content swaps, and their positioners follow the anchor.

### MOT-4 Popups driven by typing do not animate

- **Applies to:** Combobox, Autocomplete, the Phone Input country list, Command Dialog. Menubar opens instantly and only fades out.
- **Why:** the popup opens and closes on every keystroke; motion there is noise.
- **Standard:** `STD-M1`

### MOT-5 Modals

- **Recipe:** Dialog and Alert Dialog: `ease-out-quint`, 200ms in, 150ms out, scale `0.96` with opacity.
- **Standard:** `STD-M6`

### MOT-6 Edge panels

- **Recipe:** `ease-drawer`, 400ms in, 250ms out, moved with `translate`. Applies to Sheet, Drawer and the bottom mode of Dialog and Alert Dialog on small screens.
- **Why:** a panel that travels its own height needs more time than a popup, and one curve for every edge panel keeps them related.
- **Exceptions:** Drawer: 450ms in and an exit scaled by swipe strength; it animates `transform`, because it composes translate and scale from swipe variables.

### MOT-7 A backdrop shares its panel's timing

- **Recipe:** the backdrop carries the same ease class and the same in and out durations as the panel it sits behind.
- **Standard:** `STD-M11`

### MOT-8 Expand and collapse

- **Recipe:** the panel height from the Base UI variable, for example `h-(--accordion-panel-height) transition-[height] ease-out-quint duration-200 data-starting-style:h-0 data-ending-style:h-0 data-ending-style:duration-150`.
- **Applies to:** Accordion, Collapsible.
- **Why:** exits never start slow, so closing stays on an ease-out curve.

### MOT-9 Control state changes

- **Recipe:** colour, border and shadow: `duration-150 ease-out`. Check marks and radio dots appear instantly.
- **Exceptions:** Switch: 200ms `ease-out-quint`, so the track colour stays in step with the thumb.

### MOT-10 Hover easing

An isolated control eases its hover at 150ms. A member of a dense repeated set does not.

- **Applies to:** eased: Button, Toggle, standalone triggers. Instant: list items, table rows, Menubar triggers, Sidebar buttons, Calendar days, links inside a navigation popup.
- **Why:** moving the pointer down a list should not leave a trail of fading highlights.

### MOT-11 Progress and loading

- **Recipe:** Progress `transition-[width] duration-300 ease-out`; Meter the same, plus `background-color` for its level colour. Indeterminate progress loops at 1.5s. Spinner 800ms linear. Skeleton 2s linear.

### MOT-12 Reduced motion

Remove movement and scale; keep opacity and colour.

- **Recipe:** popups `motion-reduce:transition-opacity motion-reduce:data-starting-style:scale-100 motion-reduce:data-ending-style:scale-100`; edge panels fade with `motion-reduce:duration-200 motion-reduce:data-ending-style:duration-150` instead of sliding; height reveals drop the height transition (`motion-reduce:transition-none`, or `motion-reduce:transition-opacity` when the panel also fades); press scale always under `motion-safe:`. The library sets no smooth scrolling.
- **Standard:** `STD-M9`
- **Exceptions:** Spinner: keeps spinning, it is status feedback. Swipe-to-dismiss on Toast and Drawer: direct manipulation follows the finger.

### MOT-13 Keyboard shortcuts skip animation

- **Recipe:** a state change triggered by a shortcut is instant (`data-instant` or `transition-none`).
- **Applies to:** Sidebar toggle shortcut.
- **Standard:** `STD-M1`

### MOT-14 Page-level layout moves with translate

- **Recipe:** an off-canvas panel slides with `translate`; the content beside it transitions with the panel, on the same curve and duration, instead of snapping.
- **Applies to:** Sidebar.
- **Standard:** `STD-M3`
