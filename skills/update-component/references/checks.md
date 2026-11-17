# Checks

Run these on a component after building or changing it, and as the whole job of a review. They do not block anything. Their purpose is that the user decides with full knowledge.

## Before checking

1. **Find the project's shape.**
   - Find `components.json`. In a monorepo it sits in the app or package that owns the components, not at the repository root; treat that folder as the project.
   - `components.json` gives import aliases. Resolve them to folders through the `paths` in `tsconfig.json`.
   - Note the primitive library and Tailwind versions from that folder's `package.json`.
   - Check for a `registry.json` (the project publishes a registry). If it has one, find its base item, often called the init: the item that sets up the theme and shared packages. It may exist only as built output.
   - Find where demos and docs live by searching for the component's name; the rulebook's registry file names the convention when there is one.
2. **Read the rulebook.** Look for `.rulebook/` beside `components.json`, then at the repository root. Read `README.md` and `decisions.md`, then the area files. Most components touch most areas; skip `registry.md` when there is no registry, and skip rules for states and parts the component does not have.
3. **Name the role or roles.** The README lists roles. A component can play several: a dialog is a modal, and an edge panel in its bottom mode. Open two or three siblings for each role. They are the reference for everything the rulebook does not spell out.
4. **Review what is on disk now,** including uncommitted changes.

## Changing nothing in a review

A review writes no files. That includes generated files: do not run a registry build, a formatter with a write flag, or a type check that writes build info. Type check with emitting and incremental output turned off. In place of a registry build, compare the built item with its source file. Say under "Not checked" what you skipped for this reason.

When the checks run after building or changing a component, run the builds.

## The checks

### 1. Consistency

Compare the component with its siblings, part by part: radius, height and padding at each size, type, each state the component has, motion, prop and variant names, part names, `data-slot` names.

- A difference in something a rule or a standard covers is a finding, unless the rule's Exceptions line records it.
- A difference that no rule or standard covers is not a finding. If it looks unintended, mention it under "Nice to have".

### 2. Worst-case content

Go through this list against the component, in the code and, when a browser is available, on screen:

| Input | What must hold |
|---|---|
| An 80-character string with no spaces (URL, path, file name) | No sideways scroll; controls stay reachable |
| A 300-character sentence | Wraps or truncates on purpose |
| One character; empty string; missing optional parts | No collapsed or lopsided layout |
| A count of 12,345; 0 items; 200 items | Shape holds; long lists scroll inside the component |
| One child, and one more child than the layout expects | No empty half, no orphaned row |
| A 320px wide screen | Popups fit; nothing is cut off |
| Arabic or Hebrew text with `dir="rtl"` | Layout mirrors; icons and spacing sit on the correct side |
| Emoji and tall scripts | Nothing clips |
| 200% text zoom | Content reflows |

If the `break-ui` skill is installed, use it for this check.

### 3. Motion

Read every `transition`, `animate`, `duration`, `ease`, starting-style and ending-style class in the component and check each motion standard (`STD-M1` to `STD-M11`) and the rulebook's motion file. Check reduced motion specifically: what still moves? If the `review-animations` skill is installed, use it for this check.

### 4. Accessibility

Check `STD-A1` to `STD-A9`. Name the success criterion in each finding. Anything not required at level AA goes under "Nice to have".

Compute contrast; do not estimate it. Convert each token to sRGB, composite any colour with alpha over the surface behind it, and use the WCAG relative-luminance formula. Compute the pairs the component itself draws: its text on its surface, muted text on its surface, text on highlighted or selected states, and its edges and focus indicator against what is behind them. Use the default theme, light and dark, and say so.

### 5. Code

Check `STD-K1` to `STD-K6` and the rulebook's code file. Check that the component uses its primitive as documented: the right parts, current prop names, and the primitive's generics kept. Run the project's type check and linter on the component's files when they exist; a whole-project type check is fine when it takes seconds.

### 6. Registry and docs

Only when the project has a `registry.json`. Check the rulebook's registry file: demo, right-to-left demo, docs page sections, API reference, registry entry and its dependencies, tokens shipped with the registry. A problem in a demo or a docs page is a finding against the component, tagged `[Registry]`.

When there is no registry but the project has demos or docs for the component, read them for the same worst-case and consistency problems, and report those under their own category.

## Ways to verify, strongest first

1. **In a browser**, when you have browser tools and a dev server is already running: render the component, measure, try the worst-case inputs, emulate touch, reduced motion, dark mode and right-to-left.
2. **By compiling:** the type check and the linter. The compiled stylesheet, when one exists, settles questions about which class wins.
3. **By reading:** the code.

Use the strongest one available. Ask before starting a dev server or creating a temporary page for testing, and remove the page afterwards.

## The report

Always these five sections, in this order.

```md
## Review: <component>

**Findings**
- [Worst case] … `file:line` (rule or standard id)
- [Consistency] …
- [Motion] None. <how it was verified>
- [Accessibility] … (criterion)
- [Code] …
- [Registry] …

**About the rules**
- `SIZ-8` says X; eight of ten components do Y. `file:line`, …

**Accepted**
- `STD-A2` Focus ring below 3:1, accepted 2026-11-15.

**Nice to have**
- …

**Not checked**
- …
```

- **Findings** are things in this component that differ from a rule or fail a standard, and are not recorded as accepted. Put the most harmful first. One or two sentences each, with a file and line. Every category appears: one with nothing to report says "None" and how that was verified.
- **About the rules** holds findings that belong to a rule, not to this component: most siblings differ from the rule in the same way, the rule leaves out a component its standard clearly covers, or the rule's text is out of date. Count siblings within the role; when the role has fewer than three members, count across the library. Report each once, with the count. Write "None" when there are none.
- **Accepted** lists every accepted deviation in `decisions.md` that applies to this component or to a part it renders itself, such as a built-in close button. Leave out deviations that only reach it through other components used in its demos. Write "None apply" when none do. Never leave this section out, even when the user has just accepted the deviation.
- **Nice to have** holds recommendations that no rule or standard requires.
- **Not checked** says what you could not verify and why: no browser, no real touch device, no screen reader, default theme only, builds skipped in a review. Never leave it empty.

## After the report

Ask what to do with each finding: fix it, record it as an exception, or change the rule. For an entry under "About the rules", the choice is to change the rule or to bring the components in line.

Fixing is the `update-component` skill and recording is the `rulebook-update` skill. If they are not installed, offer the same actions in plain words and, when the user agrees, edit the component or the rulebook files directly, following `rulebook-format.md`.

A finding the user chooses to keep moves to "Accepted" from the next run on; it does not disappear.
