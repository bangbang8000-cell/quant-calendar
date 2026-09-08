#!/usr/bin/env bash
# V5.9 (T-5.9.5): 一键升级 — 备份 → 迁移 → 验证 (失败自动回滚)
# 用法: scripts/upgrade.sh [--dry-run]
set -euo pipefail
cd "$(dirname "$0")/.."
DRY=""
if [[ "${1:-}" == "--dry-run" ]]; then DRY="--dry-run"; echo "[deploy] 干跑模式: 仅预览, 不写入"; fi
PYTHONPATH=backend python3 backend/deploy_tool.py upgrade ${DRY}
