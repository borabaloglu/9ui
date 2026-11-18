---
type: llm
---

PASS if the reply tells the user that the project has no rulebook (no `.rulebook/` folder), so the review was done against general standards and the sibling components, AND it offers to create or import a rulebook (it may name `rulebook-create` or `rulebook-import`).

FAIL if the reply never says a rulebook is missing, or does not offer to create or import one.
