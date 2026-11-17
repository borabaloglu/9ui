---
name: update-component
description: Change an existing UI component (restyle it, add a variant, size, prop or part, fix a bug) while keeping it consistent with the project's rulebook in .rulebook/ and its sibling components, then check the result for consistency, worst-case content, motion and accessibility. Use when the user asks to modify, restyle, extend or fix a component in a 9ui or Base UI plus Tailwind component library.
argument-hint: "[component and the change]"
metadata:
  author: 9ui
---

# Update component

Change one component without letting it drift from the others.

The rulebook is the user's. You make the change they ask for. You never block it. You always tell them when it is inconsistent with sibling components, breaks under worst-case content, or goes against a motion or accessibility standard, even when they have chosen to proceed.

## References

- [references/rulebook-format.md](references/rulebook-format.md): where the rulebook lives, how a rule is written, what to do when code and rulebook disagree or there is no rulebook.
- [references/standards.md](references/standards.md): the standards checked on every run.
- [references/checks.md](references/checks.md): the checks and the report format.
- [references/companions.md](references/companions.md): other skills to call when they are installed.

Read `rulebook-format.md` and `checks.md` before starting. Read `standards.md` before the checks.

## Steps

1. **Read the project.** Follow "Before checking" in `checks.md`: project shape, rulebook, siblings. Read the whole component file, its demos, and every place that imports it. If there is no `.rulebook/`, say so, offer `rulebook-create` or `rulebook-import`, and continue with the standards and the siblings as your reference.

2. **Classify the change** before making it:
   - **Inside the rules:** a bug fix, or an addition the rulebook already describes (a missing size, a missing state). Make it.
   - **A new case:** something the rulebook does not cover. Say what the siblings do, recommend, and make it.
   - **Against a rule or a standard:** make it, and follow "When the change departs from the rulebook" below.

3. **Check the same change on the siblings.** If the user is adding a `lg` size to one field, do the other fields have it? If they are changing how one popup animates, the other popups now differ. Say so before finishing, and offer to apply the change to the siblings. Do not touch them unasked.

4. **Make the change.** Keep the file's existing shape. Use the rulebook's recipes. To override a class from a variant, pass the same variant chain so the class merges; do not reach for `!`. If `emil-design-eng` is installed, use it for design decisions no rule covers; use `animate` for new motion.

5. **Update what depends on it.** Demos that use a renamed prop, the docs page, the API reference, the registry entry when imports changed. Renamed props and removed parts break the user's own code: search for usages and list them.

6. **Run the checks.** All six in `checks.md`, on the changed component. Compare against the version before your change, so you can say what your change caused and what was already there.

7. **Report.** Use the report format in `checks.md`. Separate "caused by this change" from "already present". Then ask what to do with each finding.

## When the change departs from the rulebook

1. Say which rule or standard, in one sentence, and what the component will now look like next to its siblings.
2. Ask one question: is this an **exception** for this component, or a **rule change** for every component of that role?
3. For an exception: record it on the rule's Exceptions line with the reason.
4. For a rule change: list every component that follows the old rule, and ask whether to update them now, later, or not at all. Components left on the old value are reported as inconsistent on later runs until they are updated or recorded as exceptions.
5. For a departure from a standard: record it in `decisions.md` under "Accepted deviations". It is listed in every later report, one line.

Record these through `rulebook-update`, or tell the user to run it. Never edit the rulebook without the user's answer.
