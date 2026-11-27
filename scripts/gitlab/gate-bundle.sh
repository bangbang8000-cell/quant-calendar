#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "构建体积报告 + 阈值门禁 (总量 <=1800KB / 首屏 <=400KB / EP <=600KB)"
mkdir -p data
python3 scripts/report_bundle_size.py --gate --json data/bundle_size.json
