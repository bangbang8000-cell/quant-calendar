#!/bin/bash
# ============================================================
# quant-calendar 全链路验证脚本 (V4.7.4, FR-3.18.13 补全)
# 验证: 健康/登录/日历/数据源/复盘/事件/因子IC/WS握手/敏感端点401门禁
# 用法: bash scripts/verify_chain.sh [base_url] [username] [password]
#   默认 base_url=http://127.0.0.1:8000, admin/admin
# 退出码: 0=全绿 1=任一节点失败
# ============================================================
set -u
BASE="${1:-http://127.0.0.1:8000}"
USER="${2:-admin}"
PASS="${3:-admin}"
FAIL=0
PASS_N=0

say()  { echo -e "\033[36m[verify]\033[0m $*"; }
ok()   { echo -e "  \033[32m✅ $*\033[0m"; PASS_N=$((PASS_N+1)); }
bad()  { echo -e "  \033[31m❌ $*\033[0m"; FAIL=1; }

say "目标: $BASE  用户: $USER"

# ---------- 1. 健康检查 ----------
V=$(curl --noproxy "*" -s -m 10 "$BASE/api/health")
if echo "$V" | grep -q "\"status\":\"ok\""; then
  VER=$(echo "$V" | sed -n 's/.*"version":"\([^"]*\)".*/\1/p')
  ok "健康检查 (v$VER)"
else
  bad "健康检查失败: $V"
fi

# ---------- 2. 登录 ----------
LOGIN=$(curl --noproxy "*" -s -m 10 -X POST "$BASE/api/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"$USER\",\"password\":\"$PASS\"}")
TOKEN=$(echo "$LOGIN" | sed -n 's/.*"access_token":"\([^"]*\)".*/\1/p')
if [ -n "$TOKEN" ]; then ok "登录成功 ($USER)"; else bad "登录失败: $LOGIN"; fi
AUTH="Authorization: Bearer $TOKEN"

# ---------- 3. 日历视图 (日视图) ----------
D=$(curl --noproxy "*" -s -m 10 "$BASE/api/dates" -H "$AUTH")
DATE=$(echo "$D" | sed -n 's/.*"dates":\[\([^]]*\)\].*/\1/p' | grep -oE "[0-9]{4}-[0-9]{2}-[0-9]{2}" | tail -1)
if [ -n "$DATE" ]; then
  VW=$(curl --noproxy "*" -s -m 15 -o /dev/null -w "%{http_code}" "$BASE/api/view/day/$DATE?status=all" -H "$AUTH")
  [ "$VW" = "200" ] && ok "日历日视图 $DATE (HTTP $VW)" || bad "日历视图 HTTP $VW"
else
  bad "日历日期列表为空"
fi

# ---------- 4. 数据源状态 ----------
DS=$(curl --noproxy "*" -s -m 15 "$BASE/api/market/datasource/status")
if echo "$DS" | grep -q "connected\":true"; then
  CNT=$(echo "$DS" | grep -o "connected\":true" | wc -l)
  ok "数据源三源状态 ($CNT connected)"
else
  bad "数据源异常: $(echo "$DS" | head -c 200)"
fi

# ---------- 5. 市场复盘 ----------
RV=$(curl --noproxy "*" -s -m 20 -o /dev/null -w "%{http_code}" "$BASE/api/market/review" -H "$AUTH")
if [ "$RV" = "200" ]; then ok "市场复盘 (HTTP $RV)"; else bad "市场复盘 HTTP $RV (可降级)"; fi

# ---------- 6. 事件提醒 ----------
EV=$(curl --noproxy "*" -s -m 15 -o /dev/null -w "%{http_code}" "$BASE/api/market/events" -H "$AUTH")
if [ "$EV" = "200" ]; then ok "事件提醒 (HTTP $EV)"; else bad "事件提醒 HTTP $EV (可降级)"; fi

# ---------- 7. 因子 IC ----------
IC=$(curl --noproxy "*" -s -m 30 -o /dev/null -w "%{http_code}" "$BASE/api/market/factor-ic" -H "$AUTH")
if [ "$IC" = "200" ]; then ok "因子 IC (HTTP $IC)"; else bad "因子 IC HTTP $IC (数据不可达可降级为空)"; fi

# ---------- 8. WebSocket 握手 (带 token + 订阅) ----------
WS=$(PYTHONPATH=/home/evergreen/dsh-workspace/qc_ws_pkgs TOKEN="$TOKEN" /usr/bin/python3 "$(dirname "$0")/ws_probe.py" "$BASE" "$TOKEN" 2>&1)
if echo "$WS" | grep -q "^OK"; then ok "WS 握手+订阅: $WS"; else bad "WS 失败: $WS"; fi

# ---------- 9. 敏感端点 401 门禁 (匿名) ----------
S401=$(curl --noproxy "*" -s -m 10 -o /dev/null -w "%{http_code}" -X POST "$BASE/api/ai/models")
if [ "$S401" = "401" ] || [ "$S401" = "403" ]; then ok "敏感端点匿名拒绝 (HTTP $S401)"; else bad "敏感端点未拒绝: HTTP $S401"; fi

# ---------- 汇总 ----------
echo
if [ "$FAIL" = "0" ]; then
  echo -e "\033[32m🎉 全链路验证通过 ($PASS_N 项)\033[0m"
  exit 0
else
  echo -e "\033[31m⚠️  全链路验证有失败项 (通过 $PASS_N 项)\033[0m"
  exit 1
fi
