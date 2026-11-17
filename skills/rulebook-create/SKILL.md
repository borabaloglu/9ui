---
name: rulebook-create
description: Write a component rulebook in .rulebook/ from a project's own component code, by finding the pattern most components already follow for surfaces, states, sizing, motion, content, right-to-left, accessibility and code, and asking the user to settle the places where the components disagree. Use when the user wants to create, generate or start a rulebook or design rules for their component library.
argument-hint: "[optional: path to the components folder]"
metadata:
  author: 9ui
---

# Create a rulebook

Write `.rulebook/` from what the project's components already do. The rulebook describes this project. It is not a copy of anyone else's house style: where the code gives no answer, use the general standards, not another library's values.

To start from an existing rulebook instead, such as 9ui's, the user runs `rulebook-import`.

## References

- [references/rulebook-format.md](references/rulebook-format.md): the files, how a rule is written, the decisions log.
- [references/standards.md](references/standards.md): the standards, and the fallback values for cases the code does not settle.

Read both before starting.

## Steps

1. **Check for an existing rulebook.** If `.rulebook/` exists, stop and say so. Offer `rulebook-update` to change it. Overwrite only if the user asks for that in so many words.

2. **Find the components.** Read `components.json` for the component path, or use the path the user gave. List the component files. Note the stack: primitive library, Tailwind version, React version.

3. **Group them by role.** Button-sized controls, text fields, small controls, list popups, content popups, modals, edge panels, card surfaces, list items, indicators. Add roles the project has and drop ones it does not. Show the grouping to the user and correct it if they disagree.

4. **Find the pattern for each topic.** For each area and role, read what every component of that role does and count:
   - **Surfaces:** radius, background, border, shadow, edge treatment, backdrop.
   - **States:** focus, hover, pressed, open, highlighted, disabled, invalid, read-only, cursor.
   - **Sizing:** heights per size, padding, gaps, type, touch sizes, hit areas, icon sizes.
   - **Motion:** curves, durations in and out, what scales and from what value, reduced-motion handling.
   - **Content:** how long text, truncation and popup sizes are handled.
   - **Right-to-left:** logical or physical utilities, how popups get their direction.
   - **Accessibility:** names, roles, states the components set.
   - **Code:** imports, typing, `data-slot`, variants, part and prop names, exports.

   With many components, work one role at a time. Where you can run subagents, give each a role and have it return the counts.

5. **Sort every topic into one of three.**
   - **Settled:** nearly every component of the role agrees. That is the rule. Components that differ become candidates for an exception or a fix.
   - **Split:** the components disagree with no clear majority. Ask the user to choose. Show the options with the components on each side.
   - **Absent:** the code does not address it at all, such as no reduced-motion handling anywhere. Propose the value from "Fallback values" in `standards.md` and say that it is a standard, not something found in the code.

6. **Ask the user about the split topics.** Group the questions; do not ask them one message at a time. Give your recommendation with each. For a topic where every option fails a standard, say so and include an option that meets it.

7. **Check the settled rules against the standards.** A pattern can be consistent and still fail a standard: a focus ring too faint, `transition-all` everywhere, a 20px touch target. Do not silently correct it and do not silently accept it. Show the user each one and ask: write the rule as the code has it and record an accepted deviation, or write the rule to meet the standard and list the components that will then need a fix.

8. **Write the files** in the format in `rulebook-format.md`:
   - One file per area that has rules. Skip `registry.md` unless the project has a `registry.json`.
   - Every rule has an id, a statement, a recipe copied from real code, the roles it applies to, and a reason. Where you do not know the reason, ask, or leave "Why" off; never invent one.
   - Add the **Standard** line where a rule implements a standard.
   - Record on-purpose differences under **Exceptions**.
   - `README.md` with the name, today's date as the version, the stack and the list of roles.
   - `decisions.md` with the first line "Created from the project's code", plus the accepted deviations from step 7.

9. **Keep Tailwind out of the rulebook.** If the project uses Tailwind CSS, offer to add the `@source not` line described in `rulebook-format.md` to the main stylesheet. Then build the project, or ask the user to, and confirm the stylesheet still compiles.

10. **Report.** Say how many rules were written per area, which were settled, chosen by the user, or taken from the standards. List the components that do not follow the rules as written, by rule. Offer `review-component all` for a full report and `update-component` to bring them in line. Do not change any component in this skill.

## What not to do

- Do not import another library's values to fill a gap. Use the standards.
- Do not write a rule from one component. A rule needs at least two that agree, or the user's word.
- Do not record a difference as an exception unless the user confirms it is on purpose.
- Do not write a placeholder inside a class name. Tailwind compiles it and the build breaks.
