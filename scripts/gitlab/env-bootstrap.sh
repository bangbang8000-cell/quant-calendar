#!/usr/bin/env bash
# GitLab shell runner 环境自举（与 GitHub Actions 完全独立）。
#
# 背景：runner 宿主 Ubuntu 24.04，有 python3 3.12 / node 22 / npm / git / curl，
#       但无 sudo、无 pip3、无 uv。Docker image 关键字对 shell executor 无效。
# 策略：curl 下载 uv 静态二进制 → uv 自带下载 Python 3.11 → venv → 按锁装依赖。
# 幂等：.ci-venv/.ready 标记存在且关键命令可用则跳过，实现跨 job 复用。
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT"

CI_BIN="$ROOT/.ci-bin"
CI_VENV="$ROOT/.ci-venv"
READY="$CI_VENV/.ready"
UV_VERSION="0.11.7"
PY_VERSION="3.11"

qc_log() { printf '\n===== %s =====\n' "$*"; }

# 关键命令就绪检查
ready() {
  [ -f "$READY" ] && \
  [ -x "$CI_VENV/bin/python" ] && \
  "$CI_VENV/bin/python" -c 'import pytest, fastapi, pandas' >/dev/null 2>&1 && \
  [ -x "$CI_VENV/bin/ruff" ] && \
  [ -x "$CI_VENV/bin/bandit" ] && \
  [ -x "$CI_VENV/bin/detect-secrets" ]
}

mkdir -p "$CI_BIN"

if ready; then
  qc_log "环境已就绪，复用 .ci-venv（跳过自举）"
else
  qc_log "GitLab runner 环境自举 (uv $UV_VERSION + Python $PY_VERSION)"

  # 1. 下载 uv 静态二进制（无 sudo / 无 pip 也能装）
  if [ ! -x "$CI_BIN/uv" ]; then
    echo "下载 uv $UV_VERSION 静态二进制..."
    UV_SRC="https://github.com/astral-sh/uv/releases/download/${UV_VERSION}/uv-x86_64-unknown-linux-gnu.tar.gz"
    curl -LsSf "$UV_SRC" -o /tmp/qc-uv.tar.gz
    rm -rf /tmp/qc-uv-extract && mkdir -p /tmp/qc-uv-extract
    tar -xzf /tmp/qc-uv.tar.gz -C /tmp/qc-uv-extract
    # 目录名随版本变化（0.11.7 为 uv-x86_64-unknown-linux-gnu），动态定位二进制
    UV_BIN_PATH="$(find /tmp/qc-uv-extract -type f -name uv -perm -u+x | head -1)"
    [ -n "$UV_BIN_PATH" ] || { echo "ERROR: uv 二进制解压后未找到"; tar -tzf /tmp/qc-uv.tar.gz | head; exit 1; }
    cp "$UV_BIN_PATH" "$CI_BIN/uv"
    UVX_BIN_PATH="$(dirname "$UV_BIN_PATH")/uvx"
    [ -f "$UVX_BIN_PATH" ] && cp "$UVX_BIN_PATH" "$CI_BIN/uvx"
    chmod +x "$CI_BIN/uv"
    rm -rf /tmp/qc-uv.tar.gz /tmp/qc-uv-extract
  fi
  UV="$CI_BIN/uv"
  "$UV" --version

  # 2. 用 uv 下载独立 Python 3.11（不依赖系统 python 的 venv/ensurepip）
  qc_log "准备 Python $PY_VERSION 解释器"
  "$UV" python install "$PY_VERSION"

  # 3. 建 venv + 按锁装依赖（运行时 + 开发门禁）
  qc_log "创建 venv 并按锁安装依赖"
  "$UV" venv --python "$PY_VERSION" "$CI_VENV"
  "$UV" pip install --python "$CI_VENV/bin/python" \
    -r requirements.lock -r requirements-dev.lock

  touch "$READY"
  qc_log "环境自举完成"
fi

# 4. 导出 PATH：venv 优先，uv 次之（供后续所有脚本使用）
export PATH="$CI_VENV/bin:$CI_BIN:$PATH"
export VIRTUAL_ENV="$CI_VENV"

qc_log "工具链版本快照"
python3 --version
node --version
npm --version
pytest --version
ruff --version
bandit --version 2>/dev/null | head -1
detect-secrets --version 2>/dev/null | head -1
uv --version
