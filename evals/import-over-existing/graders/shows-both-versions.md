---
type: llm
---

PASS if the reply tells the user a rulebook already exists and was not replaced, shows that rule `STA-1` (the focus ring) differs between the two, with the user's `ring-2` and the incoming `ring-3`, and asks which to keep.

FAIL if the reply says it replaced the existing rulebook, or does not show the `STA-1` difference, or does not leave the choice to the user.
