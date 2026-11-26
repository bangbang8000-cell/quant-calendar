#!/usr/bin/env bash
# 公共函数库 —— GitHub Actions 与 GitLab CI 共用。
# 所有 gate-*.sh 通过 source 引入；本文件不执行任何检查。
set -euo pipefail

QC_CI_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

qc_log()  { printf '\n===== %s =====\n' "$*"; }
qc_fail() { printf 'ERROR: %s\n' "$*" >&2; exit 1; }
qc_require() { command -v "$1" >/dev/null 2>&1 || qc_fail "缺少命令: $1"; }
qc_app_version() {
  grep -oP 'APP_VERSION = "\K[0-9]+\.[0-9]+\.[0-9]+' "$QC_CI_ROOT/backend/main_new.py" || true
}
