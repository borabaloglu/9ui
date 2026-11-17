# States

### STA-1 Focus ring

- **Recipe:** `outline-none focus-visible:ring-3 focus-visible:ring-ring/50`. Add `focus-visible:border-ring` (or `focus-visible:inset-ring-ring`) when the element has a visible edge. A composite field puts the ring on its wrapper with a `has-` variant that matches its focused input, for example `has-[[data-slot=input-group-control]:focus-visible]:border-ring`.
- **Applies to:** every focusable element.
- **Standard:** `STD-A3`
- **Exceptions:** list items: they show `data-highlighted` instead of a ring. Accordion trigger: adds a 1px inset outline to the ring, because the accordion clips a ring drawn outside the trigger.

### STA-2 The keyboard focus ring does not fade in

- **Recipe:** `focus-visible:duration-0` on controls that have `box-shadow` in their transition list.
- **Why:** the ring is a box shadow, so it would otherwise animate in over 150ms and feel late.
- **Exceptions:** text fields: `:focus-visible` also matches on click there, and the ring fades on purpose.

### STA-3 Hover

- **Recipe:** neutral controls `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`; filled controls drop their fill to 80% (`hover:bg-primary/80`); tinted `/20`, dark `/30`; text links `hover:text-foreground`. Text fields and list items have no hover.
- **Exceptions:** Toggle and Sidebar menu buttons: `hover:bg-accent/50` in both themes, so hover stays weaker than the pressed or active fill.

### STA-4 Pressed

Every pressable responds on pointer-down, with a scale and an instant colour step.

- **Recipe:** scale `motion-safe:active:scale-98` on buttons and toggles, `scale-95` on small controls (Checkbox, Radio, Calendar day, emoji). Colour, preferably through `[&:active]:` so it beats hover: neutral buttons `[&:active]:bg-foreground/15 dark:[&:active]:bg-accent`; small controls and members of dense sets `bg-foreground/10`; default fill `/75`; secondary `/60`; tinted `/30`, dark `/40`. Colour is left out of the transition while pressed (an `active:` transition list without colour).
- **Why:** the colour step is what shows on small targets and under reduced motion, where scale is invisible or off.
- **Standard:** `STD-M10`
- **Exceptions:** triggers that open a list on press (`[aria-haspopup=menu]`, `[aria-haspopup=listbox]`, `[role=combobox]`) and link-style buttons do not scale. Controls joined in a group cancel the scale. Members of dense sets (tabs, accordion triggers, menubar and navigation triggers, sidebar buttons) change colour only.

### STA-5 Highlighted list item

- **Recipe:** `data-highlighted:bg-accent data-highlighted:text-accent-foreground rounded-sm cursor-default outline-none`, no transition.
- **Applies to:** every item in a list popup.
- **Why:** the highlight follows the pointer and arrow keys; easing it makes the list feel slow.

### STA-6 Open trigger

- **Recipe:** `data-popup-open:bg-accent data-popup-open:text-accent-foreground`, at 50% in dark mode (`dark:data-popup-open:bg-accent/50`) on standalone triggers. Button uses `aria-expanded:` for the same fill.

### STA-7 Disabled

- **Recipe:** opacity 50. Buttons, tabs and items add `pointer-events-none`; form controls add `cursor-not-allowed`; labels use `text-foreground/50`. Style `aria-disabled` too when the primitive uses it.
- **Exceptions:** Accordion trigger: `cursor-not-allowed` in place of `pointer-events-none`.

### STA-8 Invalid

Invalid at rest is a red edge only. The red ring appears on keyboard focus.

- **Recipe:** `aria-invalid:border-destructive/60` (or `aria-invalid:inset-ring-destructive/60`), `aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40` together with the focus ring. Labels `data-invalid:text-destructive`. In arbitrary selectors write `[aria-invalid=true]`, never bare `[aria-invalid]`.
- **Why:** a form full of resting red rings is louder than the error it reports. Bare `[aria-invalid]` also matches `aria-invalid="false"`.
- **Standard:** `STD-K4`

### STA-9 Read-only field

- **Recipe:** `bg-transparent`, no shadow, no edge highlight, text at full strength and selectable.
- **Applies to:** Input, Textarea, OTP Field, Number Field, Input Group.
- **Why:** a read-only field shows a value that can be copied but not edited, so it loses the "type here" surface.

### STA-10 Cursor

- **Recipe:** `cursor-pointer` on buttons and button-like triggers, `cursor-default` on list items, `cursor-not-allowed` on disabled form controls. Field-like triggers, such as the Select trigger, keep the default cursor, like the text fields they sit beside.
