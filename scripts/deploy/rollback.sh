#!/usr/bin/env bash
# 回滚：透传参数给 deploy_tool.py rollback（如 --target N）
set -euo pipefail
cd "$(dirname "$0")/.."
PY=.venv/bin/python
[ -x "$PY" ] || { echo "未找到 .venv，请先跑 install.sh" >&2; exit 1; }
"$PY" backend/deploy_tool.py rollback "$@"
"$PY" backend/deploy_tool.py verify
echo "回滚完成"
