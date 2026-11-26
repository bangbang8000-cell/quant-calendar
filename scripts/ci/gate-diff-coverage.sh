#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 用法: gate-diff-coverage.sh [base-ref]
# 有 base-ref（PR）时校验变更行覆盖率；无参时非 PR 场景，空变更直接跳过。
BASE="${1:-}"
qc_log "变更行覆盖率门禁 (变更行 >=60% / 核心模块 >=70%)"
if [ -n "$BASE" ]; then
  git fetch origin "$BASE" --depth=1 || true
  python3 scripts/check_diff_coverage.py --base "origin/$BASE" --gate
else
  python3 scripts/check_diff_coverage.py --gate || echo "[diff-cov] 非 PR 触发无变更行, 跳过"
fi
