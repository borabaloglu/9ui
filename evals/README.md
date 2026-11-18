# Skill evals

Automatic tests for the six skills in `skills/`. Each case gives a fresh agent a user message in a small scratch project and checks what it did. The runner is `claude plugin eval`, built into Claude Code 2.1.269 and later.

Every run is a real model call on your account.

## Run

```bash
pnpm skills:eval
```

Options go after the script name:

```bash
pnpm skills:eval --tag review-component
```

```bash
pnpm skills:eval --case update-against-rule --runs 3
```

```bash
pnpm skills:eval --tag trigger -j 6 --max-cost-usd 3
```

The script runs each case once, on Opus, with no baseline arm. To compare against a run without the skills, add `--ablation with-without`.

Results and an HTML report are written to `evals/results/<timestamp>/`.

## Tags

| Tag | Cases |
|---|---|
| `behaviour` | The skill does the right thing once loaded |
| `trigger` | The right skill loads for a message, and near-misses do not load the wrong one |
| `negative` | Messages where no skill should load |
| `second-turn` | Cases that replay a recorded first turn and send the user's answer |
| a skill name | Every case for that skill |

Triggering cases stop after two turns, so each ends with "Reached maximum number of turns". That is expected; they are graded on which skill was called.

## Layout

```text
evals/
├── _fixtures/
│   ├── lib.sh           builds the scratch projects from the real repo files
│   ├── hint-card.tsx    a popup with planted mistakes
│   └── foreign/         a small project that is not 9ui
├── <case>/
│   ├── prompt.md        the user's message and run limits
│   ├── case.yaml        name, tags, fixture script, optional history
│   ├── fixture.sh       which fixture the case starts from
│   ├── history.jsonl    second-turn cases only: the recorded first turn
│   └── graders/         one check per file
└── triggers/<case>/     triggering cases
```

The scratch projects copy `.rulebook/` and components from this repo when a case starts, so they follow the repo.

## Planted mistakes in `hint-card.tsx`

| Mistake | Rule or standard |
|---|---|
| `transition-all` | `MOT-2`, `STD-M2` |
| `ease-in` | `MOT-1`, `STD-M4` |
| `duration-500` | `MOT-1`, `STD-M5` |
| No reduced-motion handling | `MOT-12`, `STD-M9` |
| `rounded-md` on a popup | `SUR-1` |
| Title and description do not break long words | `CON-2` |
| `w-96` with no width limit | `CON-4` |
| Close button at `right-2` | `RTL-1` |
| Close button has no `data-slot` | `COD-5` |

The close button's `ring-ring/50` focus ring is an accepted deviation. It must appear under Accepted, not under Findings.

## Add a case

1. Copy a case folder and rename it. Set `name` in `case.yaml` to the folder name.
2. Write the message in `prompt.md` the way a user would type it.
3. Pick a fixture in `fixture.sh`.
4. Add graders. Prefer `regex`, `tool_used` and `file_exists`, which are free and give the same answer every time. Use `llm` only for what they cannot check.

## Re-record a second turn

A second-turn case replays the transcript of its first-turn case. Record it again when the first turn changes.

1. Run the first-turn case and keep its folder:

```bash
pnpm skills:eval --case rulebook-update-lists-affected --keep-temp
```

2. Copy the transcript from the `kept temp` folder the run printed. The script removes local paths from it:

```bash
node scripts/record-eval-history.mjs /private/tmp/e-XXXXXX rulebook-update-confirmed
```

| Second-turn case | Recorded from |
|---|---|
| `review-followup-exception` | `review-seeded-component` |
| `rulebook-update-confirmed` | `rulebook-update-lists-affected` |
| `create-writes-project-values` | `create-asks-about-project` |

The workspace is rebuilt from the fixture for the second turn. Files the first turn wrote are not carried over.

## Limits

- Runs have no shell, no browser and no network, so builds, type checks and on-screen checks are not exercised.
- The agent cannot show a question dialog. A question is graded as text in its reply.
- `llm` graders are judged by a model and can change their verdict between runs. Run a case three times before trusting a failure.
- Only Claude Code is tested.
