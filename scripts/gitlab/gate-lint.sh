#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "ruff lint (E,F,W; ignore E501)"
qc_require ruff
V=$(grep -oP '^ruff==\K[0-9.]+' requirements-dev.lock)
echo "锁定 ruff 版本: ${V}"
ruff --version
ruff check backend/ --select=E,F,W --ignore=E501
