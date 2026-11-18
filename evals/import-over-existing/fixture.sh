#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "${BASH_SOURCE[0]}")/../_fixtures" && pwd)/lib.sh"
scratch_project
user_changed_focus_ring
incoming_rulebook vendor/rulebook
incoming_new_rule vendor/rulebook
