---
name: rulebook-update
description: Change the project's component rulebook in .rulebook/ (change a rule's value, add a rule, remove a rule, record an exception for one component, or accept a deviation from a standard), log the decision, and list the components the change affects. Use when the user wants to edit, change, override or add to their rulebook or design rules, or to record why a component is different.
argument-hint: "[the rule or the change]"
metadata:
  author: 9ui
---

# Update the rulebook

The rulebook belongs to the user. Any rule can change. Your job is to make the change cleanly, record why, and show what it touches.

## References

- [references/rulebook-format.md](references/rulebook-format.md): the files, how a rule is written, the decisions log.
- [references/standards.md](references/standards.md): the standards a rule may implement.

Read both before starting.

## Steps

1. **Find the rulebook.** If there is no `.rulebook/`, say so and offer `rulebook-create` or `rulebook-import`.

2. **Find the rule.** Read `README.md` and the area file. If the user described the change in their own words, name the rule you think they mean and confirm when it is not obvious. If no rule covers it, this is a new rule.

3. **Work out which kind of change it is.**

   | Kind | What you write |
   |---|---|
   | Change a rule | Edit the rule in place. Add a line to "Rule changes" in `decisions.md`: date, id, old value to new value, reason. |
   | Add a rule | New heading with the next free id in that area. Add a line to "Rule changes". |
   | Remove a rule | Keep the heading, mark it "Removed" with the date, delete the body. Add a line to "Rule changes". |
   | Exception for one component | Add it to the rule's **Exceptions** line with the reason. |
   | Accept a deviation from a standard | Add a line to "Accepted deviations" in `decisions.md`: date, standard id, where, what, reason. |

4. **Ask for the reason** if the user did not give one. One sentence is enough. A change without a reason is hard to judge later, but if the user does not want to give one, write "No reason given" and move on.

5. **Show the effect before writing.** Search the components for the old value:
   - For a rule change: list every component that follows the old rule. These will be reported as inconsistent until they are updated.
   - For a new rule: list the components that already follow it and the ones that do not.
   - For an exception: confirm the component really differs in the way described.

6. **Flag what the change costs.** Do not argue and do not block; say it once, plainly:
   - If the new value fails a standard in `standards.md`, name the standard and what it means for users (for example: a focus ring under 3:1 is hard to see for low-vision users). The change is then recorded as an accepted deviation as well, and will be listed in every later report.
   - If the change makes one role differ from a related role (popups faster than menus, fields taller than buttons), say which.
   - If the change touches motion, check it against the motion standards and say which ones it meets and which it does not.

7. **Write the change** once the user confirms. Edit only the rulebook files.

8. **Offer to apply it.** For a rule change or a new rule, offer to update the affected components now with `update-component`, one role at a time. The user may say later or never; both are fine.

## Keeping the rulebook healthy

- Ids never change and are never reused.
- One rule, one place. If a change makes two rules say the same thing, merge them and note it in `decisions.md`.
- Recipes are real classes or values that can be searched for in the code, not descriptions. Never put a placeholder inside a class name: Tailwind compiles it and the build breaks.
- Do not delete lines from `decisions.md`. To reverse a decision, add a new line.
