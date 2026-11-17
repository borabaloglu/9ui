# Companion skills

These skills are separate installs. A skill is installed when it appears in your list of available skills. When one is installed, use it at the step named below and fold its result into your own report. When it is not, do the step yourself from `checks.md` and `standards.md`.

| Skill | From | Use it when | For |
|---|---|---|---|
| `review-animations` | `emilkowalski/skills` | Checking | The motion check |
| `break-ui` | `emilkowalski/skills` | Checking | The worst-case content check |
| `emil-design-eng` | `emilkowalski/skills` | Building or changing | Design decisions no rule covers: polish, feel, small details |
| `animate` | `emilkowalski/skills` | Building or changing | A new animation |
| `apple-design` | `emilkowalski/skills` | Building or changing | Gestures, sheets, touch behaviour and typography on touch devices |

Rules for using them:

- Under "Not checked", name a missing companion only when it has a step in what you just did: the two checking skills in any run of the checks, the three building skills only when you built or changed something.
- The project's rulebook outranks a companion's advice. When they disagree, follow the rulebook and report the companion's point under "Nice to have".
- A companion's advice never outranks a standard, and a standard is never dropped because a companion did not mention it.
- A companion's opinion is not a finding unless a rule or a standard backs it.

To install them all:

```bash
npx skills add emilkowalski/skills --skill emil-design-eng animate review-animations break-ui apple-design
```
