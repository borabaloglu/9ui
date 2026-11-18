#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "${BASH_SOURCE[0]}")/../_fixtures" && pwd)/lib.sh"
scratch_project --no-rulebook
incoming_rulebook vendor/rulebook
incoming_injected vendor/rulebook
