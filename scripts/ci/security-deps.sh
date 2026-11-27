#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 依赖 CVE: 首版 report-only（存量 CVE 与网络波动均不阻塞）。
# 转阻塞前需补齐 pip-audit-ignore.txt 白名单（每条注明复核日期）。
qc_log "安全③ 依赖 CVE (pip-audit, report-only)"
qc_require pip-audit
AUDIT_OUT=/tmp/qc-pip-audit.txt
if timeout 120 pip-audit -r requirements.lock --desc > "$AUDIT_OUT" 2>&1; then
  echo "依赖 CVE: 无"
else
  RC=$?
  if [ "$RC" -eq 124 ]; then
    echo "[warn] pip-audit 网络超时，本轮跳过（report-only）"
  else
    echo "[warn] pip-audit 报告如下（report-only，暂不阻塞）:"
    tail -30 "$AUDIT_OUT"
  fi
fi
