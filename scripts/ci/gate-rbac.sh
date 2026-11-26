#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "RBAC 权限矩阵 (deny-by-default)"
python3 -m pytest tests/test_rbac_matrix.py -v --tb=short
