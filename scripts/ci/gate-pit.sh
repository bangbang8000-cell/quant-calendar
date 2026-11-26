#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "PIT 防前视断言 (end<=as_of 四路径)"
python3 -m pytest tests/test_pit_no_lookahead.py -v --tb=short
