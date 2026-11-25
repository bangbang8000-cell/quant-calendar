#!/usr/bin/env bash
# V5.9 (T-5.9.5): 一键回滚 — 安全备份 → 迁移回滚 → 验证 (失败自动恢复)
# 用法: scripts/rollback.sh [--target N] [--dry-run]
set -euo pipefail
cd "$(dirname "$0")/.."
DRY=""; TARGET=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY="--dry-run"; echo "[deploy] 干跑模式: 仅预览, 不写入";;
    --target=*) TARGET="${1#*=}";;
    --target) shift; TARGET="$1";;
  esac
  shift
done
TARGET_ARG=""
if [[ -n "$TARGET" ]]; then TARGET_ARG="--target $TARGET"; fi
PYTHONPATH=backend python3 backend/deploy_tool.py rollback $TARGET_ARG ${DRY}
