---
name: review-component
description: Review a UI component, a diff or a whole component library against the project's rulebook in .rulebook/ without changing any code, and report inconsistencies with sibling components, worst-case content failures, motion problems and accessibility failures. Use when the user asks to review, audit or check a component or the component library for consistency or quality.
argument-hint: "[component name, 'diff', or 'all']"
metadata:
  author: 9ui
---

# Review component

Read-only. Report what differs from the rulebook and what fails a standard. Change no files.

## References

- [references/rulebook-format.md](references/rulebook-format.md): where the rulebook lives, how a rule is written, what to do when code and rulebook disagree or there is no rulebook.
- [references/standards.md](references/standards.md): the standards checked on every run.
- [references/checks.md](references/checks.md): the checks and the report format.
- [references/companions.md](references/companions.md): other skills to call when they are installed.

Read all four before starting. They are shared with the skills that build components, so skip the parts about building and about creating a rulebook.

## Scope

- **A component name:** review that component's file, demos and docs.
- **`diff`, or nothing with uncommitted changes present:** review the components changed in the working tree or on the current branch.
- **`all`:** review the whole library. See "Reviewing the whole library" below.

If the scope is unclear, ask once.

## Steps

1. **Read the project.** Follow "Before checking" in `checks.md`. If there is no `.rulebook/`, say so, and review against the standards and the sibling components only. Offer `rulebook-create` or `rulebook-import` at the end.

2. **Run the six checks** in `checks.md`, following "Changing nothing in a review". Use the strongest way to verify that is available. Use `review-animations` for the motion check and `break-ui` for the worst-case check when they are installed.

3. **Verify each finding before reporting it.** Open the line. Check the rule's Exceptions and the accepted deviations in `decisions.md`. Check that the class really does what you think: a class can be overridden later in the same string, set by the primitive's inline style, or already set by the base stylesheet. Drop anything you cannot stand behind.

4. **Report** in the format in `checks.md`: Findings, About the rules, Accepted, Nice to have, Not checked.

5. **Offer the next step.** For each finding the user can fix it (`update-component`), record an exception or change the rule (`rulebook-update`). Do not start any of them unasked.

## Judging a finding

- Something that differs from a rule and is not a recorded exception is a finding, however small.
- A difference from a sibling that no rule or standard covers is not a finding. Mention it under "Nice to have" if it looks unintended.
- Something that fails a standard and is not a recorded accepted deviation is a finding.
- A difference from your own taste, or from a companion skill's advice, is "Nice to have".
- When most siblings differ from a rule or a standard in the same way, the finding is about the rule, not about each component. Report it once under "About the rules": "the rule says X, eight of ten components do Y".

## Reviewing the whole library

1. Group the components by role, using the roles in the rulebook's README.
2. Review one role at a time, so siblings are compared with each other. Where you can run subagents, give each one a role, the rulebook files it needs and this skill's references, and have it return findings with file and line.
3. Verify the findings yourself before reporting, as in step 3.
4. Report by theme first (the same problem in many components is one finding with a list), then by component.
5. Say how many components were read in full and how many only searched.
