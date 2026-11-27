#!/usr/bin/env bash
# GitLab shell runner 环境自举（与 GitHub Actions 完全隔离）。
#
# 背景：runner 宿主 Ubuntu 24.04，有 python3 3.12 / node 22 / npm / git / curl，
#       但无 sudo、无 pip3。Docker image 关键字对 shell executor 无效。
# 策略：
#   1) uv：优先用 runner 预置的 /usr/local/bin/uv（0.11.7，已由运维部署）；
#          缺失时才下载静态二进制（fallback，GitHub 大文件下载不稳定）。
#   2) Python：优先用 uv 管理的 3.11（锁文件编译目标）；缺失时下载；
#              若下载失败退回系统 python3 3.12（锁文件为 universal，兼容）。
#   3) venv + 按锁装依赖（运行时 + 开发门禁）。
# 幂等：.ci-venv/.ready 标记存在且关键命令可用则跳过，跨 job 复用。
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT"

CI_BIN="$ROOT/.ci-bin"
CI_VENV="$ROOT/.ci-venv"
READY="$CI_VENV/.ready"
UV_VERSION="0.11.7"
PY_VERSION="3.11"

qc_log() { printf '\n===== %s =====\n' "$*"; }

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
  qc_log "GitLab runner 环境自举"

  # 1. uv：系统预置优先，缺失才下载（带重试）
  if command -v uv >/dev/null 2>&1; then
    UV="$(command -v uv)"
    echo "使用系统 uv: $UV"
  elif [ -x "$CI_BIN/uv" ]; then
    UV="$CI_BIN/uv"
    echo "使用项目缓存 uv: $UV"
  else
    echo "系统无 uv，下载静态二进制（fallback）..."
    UV_SRC="https://github.com/astral-sh/uv/releases/download/${UV_VERSION}/uv-x86_64-unknown-linux-gnu.tar.gz"
    curl -LsSf --retry 5 --retry-all-errors --retry-delay 2 "$UV_SRC" -o /tmp/qc-uv.tar.gz
    rm -rf /tmp/qc-uv-extract && mkdir -p /tmp/qc-uv-extract
    tar -xzf /tmp/qc-uv.tar.gz -C /tmp/qc-uv-extract
    UV_BIN_PATH="$(find /tmp/qc-uv-extract -type f -name uv -perm -u+x | head -1)"
    [ -n "$UV_BIN_PATH" ] || { echo "ERROR: uv 二进制解压后未找到"; exit 1; }
    cp "$UV_BIN_PATH" "$CI_BIN/uv"
    chmod +x "$CI_BIN/uv"
    UV="$CI_BIN/uv"
    rm -rf /tmp/qc-uv.tar.gz /tmp/qc-uv-extract
  fi
  "$UV" --version

  # 2. Python 解释器：优先系统 python3（3.12+），避免大文件下载。
  #    锁文件由 uv --universal 编译，3.11/3.12 均能正确解析环境标记。
  if "$UV" python list --only-installed 2>/dev/null | grep -q "$PY_VERSION"; then
    PY_SPEC="$PY_VERSION"
    echo "使用 uv 管理的 Python $PY_VERSION"
  else
    PY_SPEC="$(command -v python3)"
    echo "使用系统 python3: $($PY_SPEC --version 2>&1)"
  fi

  # 3. 建 venv + 按锁装依赖（运行时 + 开发门禁）
  qc_log "创建 venv 并按锁安装依赖"
  rm -rf "$CI_VENV"
  "$UV" venv --python "$PY_SPEC" "$CI_VENV"
  "$UV" pip install --python "$CI_VENV/bin/python" \
    -r requirements.lock -r requirements-dev.lock

  touch "$READY"
  qc_log "环境自举完成"
fi

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
