#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 注意: 统一用 build:direct —— 显式 node 调 vite，规避本机 .bin/vite shim 损坏问题，
#       且比 npm run build 跨平台更确定。两者均先跑 build_css.py 聚合 CSS。
qc_log "前端构建 (CSS 聚合 + vite)"
cd frontend
npm ci
npm run build:direct
