#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "全量单测 + 总覆盖率 >= 40%"
bash scripts/ci/setup-test-data.sh
python3 -m pytest tests/ -v --tb=short \
  --cov=backend --cov-report=term --cov-report=json:coverage.json \
  --cov-fail-under=40 -m "not e2e and not network"
