#!/usr/bin/env bash
# =============================================================
# 本地等价 CI 门禁 (Local CI Gate)
#
# 作用: 在推送前复现 .github/workflows/ci.yml 的全部阻塞项, 不依赖 GitHub Runner。
# 用法:
#   bash scripts/local-ci-gate.sh              # 全量 (约 5~6 分钟)
#   bash scripts/local-ci-gate.sh --fast       # 只跑 L1 (lint/版本/模板, 约 10 秒)
#   bash scripts/local-ci-gate.sh --no-cov     # 全量但跳过覆盖率统计
#
# 退出码: 0=全部通过 (打印 GATE_VERDICT=PASS); 非 0=失败步数
# 日志:   /tmp/qc_gate_<时间戳>.log
#
# 设计说明:
#   - 与 CI 的层序一致 (第①层 lint/版本 → 第②层 单测/覆盖率 → 专项), 失败先定位到层
#   - 不在脚本内写死版本号: 版本一致性由 bump_version.py --check 自己校验
#   - 任何一步失败都继续跑完, 最后统一汇总 (避免"修一个跑一个"的低效循环)
# =============================================================
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 9

FAST=0
COV=1
for arg in "$@"; do
  case "$arg" in
    --fast)   FAST=1 ;;
    --no-cov) COV=0 ;;
    -h|--help) sed -n '2,20p' "$0"; exit 0 ;;
    *) echo "未知参数: $arg"; exit 2 ;;
  esac
done

# ---- Python 解释器探测: 优先项目 venv, 其次 ops venv, 最后 python3 ----
PY=""
for cand in \
  "$ROOT/.venv/bin/python" \
  "$ROOT/../quant-calendar-ops/.venv/bin/python" \
  "$HOME/quant-calendar/quant-calendar-ops/.venv/bin/python"
do
  if [ -x "$cand" ]; then PY="$cand"; break; fi
done
[ -z "$PY" ] && PY="$(command -v python3 || true)"
if [ -z "$PY" ]; then echo "找不到 python 解释器"; exit 9; fi

# ---- ruff: 优先 venv 内的, 其次 PATH ----
RUFF=""
for cand in "$(dirname "$PY")/ruff" "$ROOT/.venv/bin/ruff"; do
  if [ -x "$cand" ]; then RUFF="$cand"; break; fi
done
[ -z "$RUFF" ] && RUFF="$(command -v ruff || true)"

TS="$(date +%Y%m%d-%H%M%S)"
LOG="/tmp/qc_gate_${TS}.log"
: > "$LOG"
FAIL=0
declare -a FAILED_STEPS=()

run() {
  local name="$1"; shift
  echo "── $name"
  {
    echo ""
    echo "==================== $name ===================="
    echo "\$ $*"
  } >> "$LOG"
  "$@" >> "$LOG" 2>&1
  local rc=$?
  if [ $rc -ne 0 ]; then
    echo "   ❌ FAIL (rc=$rc)  ← 详见 $LOG"
    FAIL=$((FAIL + 1))
    FAILED_STEPS+=("$name")
  else
    echo "   ✅ ok"
  fi
}

echo "=============================================="
echo " 本地等价 CI 门禁"
echo " 仓库: $ROOT"
echo " 解释器: $PY"
echo " 日志: $LOG"
echo "=============================================="

# ============ 第①层: lint / 版本治理 / 前端模板 ============
echo ""
echo "【第①层】静态检查"
if [ -n "$RUFF" ]; then
  run "ruff (E,F,W 忽略 E501)" "$RUFF" check backend/ --select=E,F,W --ignore=E501
else
  echo "── ruff 未安装, 跳过 (CI 会跑; 本地装: uv pip install ruff)"
fi
run "版本治理 --check" "$PY" scripts/bump_version.py --check
if [ -f frontend/scripts/check-templates.js ] && command -v node >/dev/null 2>&1; then
  run "前端模板编译" node frontend/scripts/check-templates.js
else
  echo "── 前端模板检查跳过 (缺 node 或脚本)"
fi

if [ "$FAST" -eq 1 ]; then
  echo ""
  echo "(--fast 模式, 跳过单测层)"
  if [ "$FAIL" -eq 0 ]; then echo "GATE_VERDICT=PASS (fast)"; else echo "GATE_VERDICT=FAIL steps=$FAIL (fast)"; fi
  exit "$FAIL"
fi

# ============ 第②层: 全量单测 + 覆盖率 ============
echo ""
echo "【第②层】全量单测 (约 5 分钟, 4000+ 用例)"
if [ "$COV" -eq 1 ]; then
  run "pytest 全量 + 覆盖率" "$PY" -m pytest tests/ -q --tb=short \
    --cov=backend --cov-report=term --cov-fail-under=40 -m "not e2e and not network"
else
  run "pytest 全量" "$PY" -m pytest tests/ -q --tb=short -m "not e2e and not network"
fi

# ============ 第③层: 结构 / 契约 / 安全专项 ============
# 这些用例覆盖"单测过了但架构约束被破坏"的情况, 单独跑便于快速定位
echo ""
echo "【第③层】专项门禁"

run "拆分对拍 + 体积预算 + 模块规模 + 虚拟滚动" "$PY" -m pytest \
  tests/test_split_parity.py \
  tests/test_bundle_budget_v534.py \
  tests/test_module_size_630.py \
  tests/test_virtual_list.py \
  tests/test_virtual_coverage_631.py \
  tests/test_virtual_scope_611.py \
  tests/test_virtual_scope_v534.py \
  -q

run "RBAC + PIT + 性能 + 迁移" "$PY" -m pytest \
  tests/test_rbac_matrix.py \
  tests/test_pit_audit.py \
  tests/test_pit_no_lookahead.py \
  tests/test_dwh_pit.py \
  tests/test_performance.py \
  tests/test_perf_gates.py \
  tests/test_release_643_perf.py \
  tests/test_migrations.py \
  -q

run "前端一致性 + 四态 + 便捷性 + 导航 + 行为对拍" "$PY" -m pytest \
  tests/test_frontend_consistency.py \
  tests/test_four_state_631.py \
  tests/test_convenience_631.py \
  tests/test_release_650_nav.py \
  tests/test_behavior_parity_630.py \
  tests/test_type_scale.py \
  tests/test_typography_scale_620.py \
  tests/test_v63_m0_gates.py \
  -q

# ============ 汇总 ============
echo ""
echo "=============================================="
if [ "$FAIL" -eq 0 ]; then
  echo "GATE_VERDICT=PASS (日志: $LOG)"
else
  echo "GATE_VERDICT=FAIL steps=$FAIL (日志: $LOG)"
  echo "失败步骤:"
  for s in "${FAILED_STEPS[@]}"; do echo "  - $s"; done
fi
echo "=============================================="
exit "$FAIL"
