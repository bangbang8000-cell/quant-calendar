#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "拆分对拍 (符号/结构/import/行为/覆盖)"
python3 -m pytest tests/test_split_parity.py -v --tb=short
