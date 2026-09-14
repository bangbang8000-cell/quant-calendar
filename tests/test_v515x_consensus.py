# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F1): 策略共识度 TOP5 / 共识榜移除「0% 共识」契约测试。

覆盖 TC-5.15.01~.02:
- StockList 共识文本仅在 consensus_level 为合法非 0 值时渲染 (hasConsensus 条件)
- 缺失/为 0 时不渲染百分比, 保留「N 策略」徽章
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_stocklist_has_consensus_guard():
    """TC-5.15.01: StockList 虚拟+非虚拟两处共识文本均受 hasConsensus 条件保护"""
    src = _read_f("src/components/common/StockList.vue")
    # 两处渲染点 (虚拟/非虚拟) 都必须引用 hasConsensus 保护
    n_guarded = src.count('v-if="showConsensus && hasConsensus(item)"')
    assert n_guarded >= 2, f"虚拟+非虚拟两处共识文本都应受 hasConsensus 保护, 当前 {n_guarded} 处 v-if"
    # 共识文本只能出现在受保护的 v-if 分支内 (不应存在无保护的渲染)
    n_pct = src.count('{{ pctOf(item) }}% 共识')
    assert n_pct >= 2, "应保留两处共识百分比渲染 (受保护)"
    assert n_pct == n_guarded, f"每处百分比渲染都应有对应保护 v-if (pct={n_pct}, guard={n_guarded})"


def test_stocklist_has_consensus_helper():
    """TC-5.15.02: hasConsensus 工具 — consensus_level 缺失/0/非数字 返回 false"""
    src = _read_f("src/components/common/StockList.vue")
    assert "hasConsensus" in src, "应定义 hasConsensus 工具"
    # 语义: Number(x) > 0 (缺失/0/NaN → false)
    assert "> 0" in src, "hasConsensus 应按 Number(x) > 0 判定"
    assert "consensus_level" in src, "应读取 item.consensus_level"


def test_stocklist_keeps_strategy_badge():
    """TC-5.15.03: 保留「N 策略」徽章与策略标签"""
    src = _read_f("src/components/common/StockList.vue")
    assert "qc-stock-badge" in src, "N 策略徽章应保留"
    assert "strategy_count" in src, "徽章应读 strategy_count"
