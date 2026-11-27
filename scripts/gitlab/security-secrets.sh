#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 密钥泄露: detect-secrets 钩子，存量 30 条已在 .secrets.baseline 中登记，只拦新增。
qc_log "安全④ 密钥泄露扫描 (detect-secrets-hook, 基线外新增即失败)"
qc_require detect-secrets-hook
detect-secrets-hook --baseline .secrets.baseline .
echo "密钥扫描: 无新增"
