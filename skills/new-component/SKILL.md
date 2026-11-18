---
name: new-component
description: Build a new UI component that matches the rest of the project's component library, following the project's rulebook in .rulebook/ and its sibling components, then check it for consistency, worst-case content, motion and accessibility. Use when the user asks to add, create or build a new component in a 9ui or Base UI plus Tailwind component library.
argument-hint: "[component name and what it should do]"
metadata:
  author: 9ui
---

# New component

Build one new component so that it reads as if the same person designed it and every other component in the project.

The rulebook is the user's. You follow it, you ask when it does not cover a case, and you never block the user from departing from it. You always tell them when a choice is inconsistent with sibling components, breaks under worst-case content, or goes against a motion or accessibility standard, even when they have chosen to proceed.

## References

- [references/rulebook-format.md](references/rulebook-format.md): where the rulebook lives, how a rule is written, what to do when code and rulebook disagree or there is no rulebook.
- [references/standards.md](references/standards.md): the standards checked on every run.
- [references/checks.md](references/checks.md): the checks and the report format.
- [references/companions.md](references/companions.md): other skills to call when they are installed.

Read `rulebook-format.md` and `checks.md` before starting. Read `standards.md` before the checks.

## Steps

1. **Understand the request.** What does the component do, and which primitive is it built on (a Base UI component, another library, or plain elements)? If the request leaves the primitive or the scope open, ask once, with your recommendation.

2. **Read the project.** Follow "Before checking" in `checks.md`: project shape, rulebook, siblings. If there is no `.rulebook/`, say so, offer `rulebook-create` or `rulebook-import`, and continue with the standards and the siblings as your reference.

3. **Name the role.** Say which role each part plays (the rulebook's README lists roles) and which two or three existing components you will use as siblings. A component often has several roles: a date picker has a button-sized trigger, a content popup and list items.

4. **Propose before writing.** In a short message, list: the parts and their names, the props and variants, the recipes each part takes from the rulebook, and anything the rulebook does not cover. For each uncovered case, say what the siblings do and what you recommend. Wait for the user's answer only when a real choice is open; otherwise proceed.

5. **Build it.** Copy the structure of the closest sibling: imports, typing, `data-slot` names, variant setup, exports. Use the rulebook's recipes as written. For the primitive's API, read its current documentation or type definitions instead of relying on memory. If `emil-design-eng` is installed, use it for the design decisions no rule covers; use `animate` for any new motion.

6. **Add what the project keeps beside a component.** Only when the project publishes a registry (`registry.json` exists): the demos, the right-to-left demo, the docs page, the registry entry. Follow the rulebook's registry file and copy a sibling's files for shape. Declare every package the component imports in its registry entry, without versions.

7. **Run the checks.** All six in `checks.md`, using the strongest way to verify that is available.

8. **Report.** Use the report format in `checks.md`: Findings, About the rules, Accepted, Nice to have, Not checked. Then ask what to do with each finding.

## When the user wants something the rulebook does not allow

Do it. These steps add to the report in step 8; they do not replace it. Write the full report first, with all five sections, then, below it:

- Say plainly which rule or standard it departs from, and what it will look like next to its siblings.
- Ask whether this is an exception for this component or a change to the rule. A rule change affects every component of that role; offer to list them.
- Record the answer with `rulebook-update`, or tell the user to run it.

## When the rulebook needs a new rule

A new component often brings a case no rule covers, such as a new role or a new state. After the user decides how it should look, offer to add the rule so the next component follows it.
