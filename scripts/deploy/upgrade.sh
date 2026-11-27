#!/usr/bin/env bash
# 升级：备份 data/ → 迁移 → verify；失败自动回滚
set -euo pipefail
cd "$(dirname "$0")/.."
PY=.venv/bin/python
[ -x "$PY" ] || { echo "未找到 .venv，请先跑 install.sh" >&2; exit 1; }
echo "备份当前数据"
"$PY" backend/deploy_tool.py backup
if ! "$PY" backend/deploy_tool.py upgrade; then
  echo "升级失败，自动回滚" >&2
  "$PY" backend/deploy_tool.py rollback
  exit 1
fi
"$PY" backend/deploy_tool.py verify
echo "升级完成"
