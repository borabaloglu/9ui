# Decisions

The log of this rulebook. Add a line whenever a rule changes, an exception is granted, or a standard is knowingly not met. Newest first.

## Rule changes

| Date | Rule | Change | Reason |
|---|---|---|---|
| 2026-11-17 | `MOT-12` | Smooth scrolling under `motion-safe:` to no smooth scrolling | Owner decision, 2026-11-17 |
| 2026-11-17 | all | Imported from 9ui | Starting point |

## Accepted deviations

Standards this project knowingly does not meet. Each one is listed in every report, as a single line.

| Date | Standard | Where | What is accepted | Reason |
|---|---|---|---|---|
| 2026-11-15 | `STD-A2` | Focus ring (`STA-1`) | `ring-ring/50` is below 3:1 against the page | A stronger ring was judged too heavy; the ring is 3px wide and paired with a border change on controls that have an edge |
| 2026-11-15 | `STD-A2` | Control edges (`SUR-3`, `SUR-4`) | `--border` is below 3:1 against the surface | A 3:1 edge on every control made a full page look sketched |
| 2026-11-17 | `STD-K5` | Vaul | `!` modifiers | The library injects unlayered CSS that utilities cannot beat; fix belongs upstream |

## Exceptions

Exceptions live under the rule they belong to, on its **Exceptions** line. List one here only when it spans several rules.

| Date | Component | Rules | Reason |
|---|---|---|---|
