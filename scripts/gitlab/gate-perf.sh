#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "性能回归 / 前端体积预算 / 虚拟滚动 / 运行效率"
python3 -m pytest tests/test_performance.py -v --tb=short
python3 -m pytest tests/test_bundle_budget_v534.py -v --tb=short
python3 -m pytest tests/test_virtual_scope_v534.py -v --tb=short
python3 -m pytest tests/test_release_643_perf.py -q -m "not e2e"
