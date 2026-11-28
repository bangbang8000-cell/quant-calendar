#!/usr/bin/env bash
# v7.25 FR-10: 制品部署（GitLab manual deploy 调用）。
# 用法: QC_DEPLOY_DIR=/srv/quant-calendar bash scripts/deploy/deploy.sh <制品.tar.gz>
set -euo pipefail

PKG="${1:-}"
[ -n "$PKG" ] && [ -f "$PKG" ] || { echo "用法: deploy.sh <制品.tar.gz>" >&2; exit 2; }
DEST="${QC_DEPLOY_DIR:-}"
[ -n "$DEST" ] || { echo "未设置 QC_DEPLOY_DIR，拒绝部署" >&2; exit 2; }
HEALTH_URL="${QC_HEALTH_URL:-http://127.0.0.1:${QC_HEALTH_PORT:-8000}/api/health}"

mkdir -p "$DEST"
BACKUP="$DEST/.rollback/$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP"
if [ -d "$DEST/app" ]; then
  echo "[deploy] 备份当前版本 → $BACKUP"
  tar -C "$DEST/app" -cf - . 2>/dev/null | tar -C "$BACKUP" -xf - || true
fi

echo "[deploy] 解包 $PKG（排除 .env / data / .venv）"
tar -xzf "$PKG" -C "$DEST" --exclude='.env' --exclude='data/*' --exclude='.venv/*'

if [ -d "$DEST/app/backend" ]; then
  echo "[deploy] 数据库迁移/初始化"
  ( cd "$DEST/app" && (python -m alembic upgrade head 2>/dev/null || \
      python -c 'import sys; sys.path.insert(0,"backend"); import db; db.init_db()') )
fi

echo "[deploy] 健康检查 $HEALTH_URL"
if ! curl -fsS --max-time 10 "$HEALTH_URL" >/dev/null; then
  echo "[deploy] 健康检查失败，执行回滚" >&2
  bash "$(dirname "$0")/rollback.sh" "$BACKUP"
  exit 1
fi

echo "[deploy] 完成: $PKG"
