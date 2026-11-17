# The rulebook

A project's rulebook lives in `.rulebook/` and is committed with the code. It sits at the project root: beside `components.json`, or at the repository root in a monorepo that keeps it there. It belongs to the project. The skills read it, ask before changing it, and never overwrite it silently.

## Files

One Markdown file per area, plus an index and a log:

```
.rulebook/
├── README.md         index: name, version, source, stack, the list of roles
├── surfaces.md       radius, fields, popups, modals, cards, colour
├── states.md         focus, hover, pressed, disabled, invalid, read-only
├── sizing.md         heights, type, touch sizes, hit areas, icons
├── motion.md         curves, durations, enter and exit, reduced motion
├── content.md        long text, missing data, small screens
├── rtl.md            right-to-left
├── accessibility.md  what is required, what is optional
├── code.md           file shape, typing, slots, variants, naming
├── registry.md       demos, docs, registry entries (only if the project publishes a registry)
└── decisions.md      rule changes, exceptions, accepted deviations
```

A project may add, rename or drop area files. Read whatever is there. Load only the files a task needs.

## A rule

```md
### MOT-3 Popups scale and fade from their trigger

One or two sentences that state the rule.

- **Recipe:** the classes or values that implement it.
- **Applies to:** the roles or components it covers.
- **Why:** the reason.
- **Standard:** `STD-M7`
- **Exceptions:** Tooltip: reason.
```

- **Id:** a short area prefix and a number. Ids never change and are never reused. A removed rule keeps its heading, marked "Removed" with the date.
- **Recipe, Applies to, Why, Standard, Exceptions** are each optional. **Why** is strongly preferred: a rule without a reason cannot be judged when a case does not fit.
- **Standard** names the general standard the rule implements (see `standards.md`). A rule with no Standard line is house style.
- **Exceptions** are components that break the rule on purpose, each with a reason.
- **Applies to** names where the rule was written for, not the limit of its standard. When a component is missing from the list but the rule's standard clearly covers it, check the standard and report the gap in the rule.

## `decisions.md`

Three tables, newest first:

- **Rule changes:** date, rule id, old value to new value, reason.
- **Accepted deviations:** date, standard id, where, what is accepted, reason. Listed in every report.
- **Exceptions** that span several rules. Single-rule exceptions live on the rule.

## Tailwind reads the rulebook

Tailwind CSS scans every text file in the project for class names, and the rulebook is full of them. Two consequences:

- **Write only real classes in a recipe.** A placeholder inside a class, such as an arbitrary value with `<name>` in it, compiles to invalid CSS and breaks the build. Describe the variable part in words and give one real example.
- **Exclude the folder from the scan,** so classes that appear only in the rulebook (including the ones a rule forbids) are not generated. In the project's main stylesheet, with the path relative to that file:

```css
@source not "../.rulebook";
```

When you create or import a rulebook, check for this line and offer to add it. Do not add it without asking; it is the user's stylesheet.

## When the code and the rulebook disagree

Neither wins by default. The rulebook states intent; the code is evidence of what the project really does.

1. Say what differs, with file and line, and which rule.
2. Count: is it one component, or most of them? A lone difference is drift. A difference that most siblings share means the rule is out of date.
3. Ask which the user wants: fix the code, record an exception, or change the rule.
4. Do exactly that. Never fix components the task did not touch; list them.

## When there is no rulebook

Do not invent rules and do not block. Say there is no `.rulebook/`, and offer the two ways to get one: `rulebook-create` writes one from the project's own code; `rulebook-import` downloads an existing one. Then carry on with the task using the standards and the sibling components as the reference.
