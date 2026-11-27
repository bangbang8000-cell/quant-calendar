#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

VER="$(qc_app_version)"
[ -n "$VER" ] || qc_fail "APP_VERSION 缺失"
COMMIT="$(git rev-parse --short HEAD)"

qc_log "打包 quant-calendar-$VER.tar.gz"
STAGE="$(mktemp -d)"
PKG="$STAGE/quant-calendar-$VER"
mkdir -p "$PKG/deploy" "$PKG/frontend/dist" "$PKG/frontend/css" "$PKG/libs"

cp -a backend "$PKG/backend"
cp -a frontend/dist/. "$PKG/frontend/dist/"
# CSS 必须单独带：StaticFiles 从 frontend/css/ 直接提供，不在 dist 里
cp -a frontend/css/. "$PKG/frontend/css/"
cp -a libs/. "$PKG/libs/"
cp requirements.lock docker-entrypoint.sh DEPLOYMENT.md "$PKG/"
cp backend/deploy_tool.py "$PKG/deploy/"
cp scripts/deploy/install.sh scripts/deploy/upgrade.sh scripts/deploy/rollback.sh "$PKG/deploy/"

# 清掉缓存与编译产物
find "$PKG" -type d -name __pycache__ -prune -exec rm -rf {} +
find "$PKG" -type f \( -name '*.pyc' -o -name '*.pyo' \) -delete

cat > "$PKG/BUILD_INFO" <<EOF
version=$VER
commit=$COMMIT
built_at=$(date -Iseconds)
python=3.11
EOF

chmod +x "$PKG/deploy/"*.sh "$PKG/docker-entrypoint.sh"
mkdir -p dist
tar -C "$STAGE" -czf "dist/quant-calendar-$VER.tar.gz" "quant-calendar-$VER"
rm -rf "$STAGE"

echo "交付物: dist/quant-calendar-$VER.tar.gz ($(du -h dist/quant-calendar-$VER.tar.gz | cut -f1))"

# 自检：缺 CSS / BUILD_INFO 或起不来服务即失败
if [ "${QC_SKIP_SELFCHECK:-0}" != "1" ]; then
  SELF="$(mktemp -d)"
  tar -xzf "dist/quant-calendar-$VER.tar.gz" -C "$SELF"
  PKGDIR="$SELF/quant-calendar-$VER"
  [ -f "$PKGDIR/frontend/css/app.css" ] || qc_fail "交付物缺 frontend/css/app.css（CSS 会全丢）"
  [ -f "$PKGDIR/BUILD_INFO" ] || qc_fail "交付物缺 BUILD_INFO"
  grep -q "commit=$COMMIT" "$PKGDIR/BUILD_INFO" || qc_fail "BUILD_INFO commit 与当前 HEAD 不一致"

  qc_log "自检：从交付物启动服务并检查 /api/health"
  # main_new.py 只认 PORT 环境变量，不解析 --port 参数
  (cd "$PKGDIR" && PORT=18000 python3 backend/main_new.py > "$SELF/server.log" 2>&1) &
  SPID=$!
  OK=0
  for i in $(seq 1 20); do
    if curl -sf http://127.0.0.1:18000/api/health > /dev/null 2>&1; then OK=1; break; fi
    sleep 1
  done
  kill $SPID 2>/dev/null || true
  wait $SPID 2>/dev/null || true
  if [ "$OK" -ne 1 ]; then
    tail -20 "$SELF/server.log" || true
    qc_fail "交付物自检失败：/api/health 未响应"
  fi
  echo "自检通过"
  rm -rf "$SELF"
fi
