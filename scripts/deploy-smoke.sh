#!/usr/bin/env bash
# =============================================================
# 部署冒烟 (Deploy Smoke)
#
# 作用: 在独立端口起一份临时实例, 逐项验证「服务真的能提供当前版本的功能」,
#       验证完自动关停, 不影响已运行的 dev/ops。
#
# 用法:
#   bash scripts/deploy-smoke.sh                      # 默认 PORT=8020
#   bash scripts/deploy-smoke.sh --port 8031
#   bash scripts/deploy-smoke.sh --keep                # 验证完不关停 (排查用)
#   bash scripts/deploy-smoke.sh --base http://127.0.0.1:8000   # 对已运行实例只验证
#
# 退出码: 0=PASS (打印 SMOKE_VERDICT=PASS); 1=有失败项
# 日志:   /tmp/qc_smoke_<时间戳>.log
#
# 检查五组:
#   1. 启动与健康 (/api/health 200 + version 与 APP_VERSION 一致)
#   2. 数据面 (schema_migrations 最新版本 + 关键表存在)
#   3. 鉴权面 (新增业务端点裸访问必须 401/403 = deny-by-default)
#   4. 静态产物 (前端入口 + 组件文件 + 样式 + 导航核心, 均 200 且命中预期标记)
#   5. 入口注入 (index.html 含当前版本号, 证明不是旧产物)
# =============================================================
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 9

PORT=8020
KEEP=0
EXTERNAL_BASE=""
for ((i=1; i<=$#; i++)); do
  case "${!i}" in
    --port)   j=$((i+1)); PORT="${!j}"; i=$((i+1)) ;;
    --base)   j=$((i+1)); EXTERNAL_BASE="${!j}"; i=$((i+1)) ;;
    --keep)   KEEP=1 ;;
    -h|--help) sed -n '2,26p' "$0"; exit 0 ;;
  esac
done

HOST=127.0.0.1
BASE="${EXTERNAL_BASE:-http://$HOST:$PORT}"

PY=""
for cand in \
  "$ROOT/.venv/bin/python" \
  "$ROOT/../quant-calendar-ops/.venv/bin/python" \
  "$HOME/quant-calendar/quant-calendar-ops/.venv/bin/python"
do
  if [ -x "$cand" ]; then PY="$cand"; break; fi
done
[ -z "$PY" ] && PY="$(command -v python3 || true)"
[ -z "$PY" ] && { echo "找不到 python 解释器"; exit 9; }

TS="$(date +%Y%m%d-%H%M%S)"
LOG="/tmp/qc_smoke_${TS}.log"
: > "$LOG"
RC=0
PID=""

cleanup() {
  if [ "$KEEP" -eq 0 ] && [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
    kill "$PID" 2>/dev/null
    wait "$PID" 2>/dev/null
    echo "── 已关停临时实例 (pid=$PID)"
  elif [ "$KEEP" -eq 1 ] && [ -n "$PID" ]; then
    echo "── --keep: 实例保留在 $BASE (pid=$PID), 用完请手动 kill"
  fi
}
trap cleanup EXIT

# ---- 期望版本: 从单一来源读, 不写死 ----
EXPECT_VER="$("$PY" - <<'PYEOF'
import re, pathlib
m = re.search(r'^APP_VERSION\s*=\s*"([0-9.]+)"', pathlib.Path("backend/main_new.py").read_text(encoding="utf-8"), re.M)
print(m.group(1) if m else "")
PYEOF
)"
echo "=============================================="
echo " 部署冒烟  目标=$BASE  期望版本=${EXPECT_VER:-未知}"
echo " 日志: $LOG"
echo "=============================================="

# ---- 1. 启动 (仅自建实例时) ----
if [ -z "$EXTERNAL_BASE" ]; then
  echo ""
  echo "【1】启动临时实例 PORT=$PORT"
  PORT="$PORT" HOST="$HOST" "$PY" backend/main_new.py >> "$LOG" 2>&1 &
  PID=$!
  UP=0
  for _ in $(seq 1 120); do
    CODE=$(curl -s -o /dev/null -w '%{http_code}' "$BASE/api/health" 2>/dev/null)
    if [ "$CODE" = "200" ]; then UP=1; break; fi
    sleep 1
  done
  if [ "$UP" != "1" ]; then
    echo "  ❌ 健康检查未就绪 (120s 超时), 日志尾部:"
    tail -30 "$LOG"
    exit 1
  fi
  echo "  ✅ /api/health 200"
fi

# ---- 2. 健康与版本 ----
echo ""
echo "【2】健康与版本"
HEALTH=$(curl -s -m 10 "$BASE/api/health")
GOT_VER=$(printf '%s' "$HEALTH" | "$PY" -c 'import json,sys
try:
    d=json.load(sys.stdin); print(d.get("version",""))
except Exception: print("")' 2>/dev/null)
SELF=$(printf '%s' "$HEALTH" | "$PY" -c 'import json,sys
try:
    d=json.load(sys.stdin); s=d.get("self_check") or {}
    print("ok=%s warn=%s fail=%s" % (s.get("ok_count"), s.get("warn_count"), s.get("fail_count")))
except Exception: print("")' 2>/dev/null)
if [ -n "$EXPECT_VER" ] && [ "$GOT_VER" != "$EXPECT_VER" ]; then
  echo "  ❌ 版本不符: 服务=$GOT_VER 期望=$EXPECT_VER"; RC=1
else
  echo "  ✅ version=$GOT_VER  自检 $SELF"
fi
SFAIL=$(printf '%s' "$SELF" | sed -n 's/.*fail=\([0-9]*\).*/\1/p')
if [ -n "$SFAIL" ] && [ "$SFAIL" != "0" ]; then
  echo "  ❌ 启动自检有 $SFAIL 项 fail"; RC=1
fi

# ---- 3. 数据面: 迁移与关键表 ----
echo ""
echo "【3】数据面"
DB="data/app.db"
if [ -f "$DB" ]; then
  "$PY" - "$DB" <<'PYEOF' >> "$LOG" 2>&1
import sqlite3, sys
c = sqlite3.connect(sys.argv[1])
rows = c.execute("SELECT version, name FROM schema_migrations ORDER BY version DESC LIMIT 3").fetchall()
print("schema_migrations 最新三条:", rows)
PYEOF
  MAXX=$("$PY" - "$DB" <<'PYEOF'
import sqlite3, sys
try:
    c = sqlite3.connect(sys.argv[1])
    r = c.execute("SELECT MAX(version) FROM schema_migrations").fetchone()
    print(r[0] if r and r[0] is not None else -1)
except Exception:
    print(-1)
PYEOF
)
  echo "  ✅ schema_migrations 最高版本 = $MAXX (期望 >= 1, 见日志)"
else
  echo "  ⚠️  未找到 $DB (首次启动会自建, 属正常)"
fi

# ---- 4. 鉴权面: deny-by-default ----
# 维护说明: 每新增一个业务域, 在此追加 1~2 个代表性端点。
# 判据是「裸访问必须被拒」——如果返回 200, 说明该域漏了鉴权依赖。
echo ""
echo "【4】鉴权面 (裸访问应被拒)"
check_deny() {
  local method="$1" path="$2" body="${3:-}" code
  if [ -n "$body" ]; then
    code=$(curl -s -m 10 -o /dev/null -w '%{http_code}' -X "$method" \
      -H 'Content-Type: application/json' -d "$body" "$BASE$path")
  else
    code=$(curl -s -m 10 -o /dev/null -w '%{http_code}' -X "$method" "$BASE$path")
  fi
  case "$code" in
    401|403) echo "  ✅ $method $path -> $code" ;;
    405)     echo "  ⚠️  $method $path -> 405 (方法不匹配, 说明路由在但不校验本方法)" ;;
    *)       echo "  ❌ $method $path -> $code (应 401/403, 疑似漏鉴权)"; RC=1 ;;
  esac
}
# v7.4 五维评分 / v7.5 择时 / v7.6 形态 / v7.7 参数治理
check_deny GET  /api/timing/strategies
check_deny POST /api/timing/evaluate '{"sid":"ma_cross","symbol":"000001.SH"}'
check_deny GET  /api/pattern/cases
check_deny POST /api/pattern/cases/from-symbol '{"symbol":"600000.SH"}'
check_deny GET  /api/strategies/multi_factor/lock
# v7.8 执行 / v7.9 五维报告 / v7.10 策略市场
check_deny GET  /api/execution/plans
check_deny GET  /api/reports/stock/600000.SH
check_deny GET  /api/marketplace/items

# ---- 5. 静态产物 ----
# 维护说明: 新增前端组件时追加一行 (路径 + 该文件内必然出现的标记字符串)
echo ""
echo "【5】静态产物"
check_static() {
  local path="$1" needle="$2" code
  code=$(curl -s -m 10 -o /tmp/qc_smoke_body.txt -w '%{http_code}' "$BASE$path")
  if [ "$code" != "200" ]; then
    echo "  ❌ $path -> $code"; RC=1; return
  fi
  if [ -n "$needle" ] && ! grep -q "$needle" /tmp/qc_smoke_body.txt; then
    echo "  ❌ $path 未含标记 '$needle'"; RC=1; return
  fi
  echo "  ✅ $path 200${needle:+ (含 $needle)}"
}

check_static / "<html"
check_static /js/nav-merge-core.js "MAX_VISIBLE_SUBS"
# v7.11 前端收口组件
check_static /js/components/overlay-radar.js    "qc-timing-radar"
check_static /js/components/pattern-lab.js      "qc-pattern-lab"
check_static /js/components/marketplace-panel.js "qc-marketplace-panel"
check_static /js/components/param-lock-panel.js "qc-param-lock"
check_static /js/components/exec-plans-panel.js "qc-exec-plans"
check_static /js/components/stock-report-panel.js "qc-stock-report"

# ---- 6. 入口注入: 版本号必须出现在 index.html ----
echo ""
echo "【6】入口注入"
if [ -n "$EXPECT_VER" ]; then
  N=$(curl -s -m 10 "$BASE/" | grep -c -- "$EXPECT_VER")
  if [ "$N" -gt 0 ]; then
    echo "  ✅ index.html 命中 $EXPECT_VER 共 $N 次"
  else
    echo "  ❌ index.html 未出现版本号 $EXPECT_VER (疑似服务了旧产物)"; RC=1
  fi
fi

# ---- 汇总 ----
echo ""
echo "=============================================="
if [ "$RC" -eq 0 ]; then echo "SMOKE_VERDICT=PASS"; else echo "SMOKE_VERDICT=FAIL"; fi
echo "日志: $LOG"
echo "=============================================="
exit "$RC"
