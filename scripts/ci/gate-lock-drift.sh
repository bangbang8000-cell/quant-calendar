#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 依赖锁漂移校验：跳过文件头 3 行（头部注释含 -o 输出路径，与编译目标不同）
qc_log "requirements.lock / requirements-dev.lock 漂移校验"
qc_require uv
uv pip compile --universal --python-version 3.11 requirements.in -o /tmp/qc-check-runtime.lock
diff -u <(tail -n +4 requirements.lock) <(tail -n +4 /tmp/qc-check-runtime.lock)
uv pip compile --universal --python-version 3.11 -c requirements.lock requirements-dev.in -o /tmp/qc-check-dev.lock
diff -u <(tail -n +4 requirements-dev.lock) <(tail -n +4 /tmp/qc-check-dev.lock)
echo "依赖锁无漂移"
