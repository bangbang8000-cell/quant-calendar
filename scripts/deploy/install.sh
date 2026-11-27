#!/usr/bin/env bash
# 首次安装：建 venv、按锁装依赖、校验迁移状态
set -euo pipefail
cd "$(dirname "$0")/.."
PY="${PYTHON:-python3}"
if [ ! -d .venv ]; then
  echo "创建虚拟环境 .venv"
  "$PY" -m venv .venv
fi
.venv/bin/pip install --disable-pip-version-check -r requirements.lock
.venv/bin/python backend/deploy_tool.py verify
echo "安装完成。启动: PORT=8000 .venv/bin/python backend/main_new.py"
