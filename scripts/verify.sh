#!/usr/bin/env bash
# v7.25 FR-10: 本地一键预检（提交前）。失败即阻断。
# 用法: bash scripts/verify.sh [--skip-build]
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

SKIP_BUILD=0
for a in "$@"; do [ "$a" = "--skip-build" ] && SKIP_BUILD=1; done

PY="${QC_PYTHON:-python3}"
if [ -x ".venv/bin/python" ]; then PY=".venv/bin/python"; fi

echo "[verify] 1/4 ruff"
"$PY" -m ruff check backend/ --select=E,F,W --ignore=E501

echo "[verify] 2/4 pytest (not e2e)"
"$PY" -m pytest tests -q -m "not e2e"

echo "[verify] 3/4 version consistency"
"$PY" scripts/bump_version.py --check

echo "[verify] 3.5/4 research style gate"
"$PY" scripts/ci/check_research_style.py

if [ "$SKIP_BUILD" -eq 0 ]; then
  echo "[verify] 4/4 frontend build"
  ( cd frontend && "$PY" scripts/build_css.py && node node_modules/vite/bin/vite.js build )
else
  echo "[verify] 4/4 frontend build skipped"
fi

echo "[verify] OK"
