---
runs: 1
max_turns: 60
timeout_seconds: 900
allowed_tools: [Read, Glob, Grep, Skill]
---

Keep the rounded-md radius on the hint card popup. It is on purpose: the card sits inside dense toolbars and the larger radius looked wrong there. Record it as an exception and leave the component alone.
