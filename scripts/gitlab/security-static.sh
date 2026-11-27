#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 静态检查：与 layer1 的 ruff 同源，供 GitLab security 阶段调用
qc_log "安全① 静态检查 (ruff)"
bash scripts/gitlab/gate-lint.sh
