#!/usr/bin/env bash
# v7.25 FR-10: 部署失败回滚。用法: QC_DEPLOY_DIR=/srv/quant-calendar bash scripts/deploy/rollback.sh <备份目录>
set -euo pipefail

SRC="${1:-}"
[ -n "$SRC" ] && [ -d "$SRC" ] || { echo "备份不存在: ${SRC:-<空>}" >&2; exit 2; }
DEST="${QC_DEPLOY_DIR:-}"
[ -n "$DEST" ] || { echo "未设置 QC_DEPLOY_DIR，拒绝回滚" >&2; exit 2; }

rm -rf "$DEST/app"
mkdir -p "$DEST/app"
cp -a "$SRC/." "$DEST/app/"
echo "[rollback] 已回滚到 $SRC"
