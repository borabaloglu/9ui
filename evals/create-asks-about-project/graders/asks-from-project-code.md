---
type: llm
---

PASS if the reply describes patterns found in the user's own components using their real values (for example `rounded-sm`, `h-10`, `outline-blue-600`, `duration-200`) AND asks the user to confirm or decide something about them: the grouping of components by role, or places where components disagree (for example Panel's `rounded-xl` against the other cards' `rounded-sm`, Search Input's `rounded-full`, or Icon Button's `transition-all`).

FAIL if the reply asks nothing, or proposes values that do not come from the user's code without saying they are a general standard.
