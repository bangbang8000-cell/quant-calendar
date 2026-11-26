#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 先重新构建，再与入库 dist / app.css 逐字节比对。
# POC 已验证（2026-11-27）：两次构建 10 个文件 sha256 完全一致，故可用严格门禁。
qc_log "前端 dist 与源码一致性门禁"
bash scripts/ci/build-frontend.sh
cd "$QC_CI_ROOT"
git diff --exit-code -- frontend/dist || {
  echo "::error::frontend/dist 与源码构建结果不一致 —— 请提交最新构建产物"
  exit 1
}
git diff --exit-code -- frontend/css/app.css || {
  echo "::error::frontend/css/app.css 与 CSS 源文件不一致 —— 请跑 build_css.py 后提交"
  exit 1
}
echo "dist / app.css 与源码一致"
