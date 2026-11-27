#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# SAST: bandit，存量 21 条已在 bandit-baseline.json 中登记，只拦新增。
qc_log "安全② SAST (bandit -ll, 基线外新增即失败)"
qc_require bandit
bandit -r backend/ -ll -b scripts/gitlab/bandit-baseline.json -q
echo "SAST: 无新增 medium/high 问题"
