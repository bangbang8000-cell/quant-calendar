#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""数据分层与冲突仲裁 (v6.7.0 / B1.7, PRD FR-6.7.8 / D21)

用户约束：**量化日历本身与个股 K 线必须保留 tushare/sxsc-tushare**，
Fuyao（同花顺）只允许用于"周边功能"；供应商若转收费/停服，软件必须照常工作。

三层模型：
- T1 核心：交易日历、日历视图/策略持仓、个股 K 线（日/周/月/分钟）、自选实时、
  回测撮合输入、daily_basic —— **Fuyao 禁止参与**（硬断言，不降级）
- T2 周边：三池、天梯、龙虎榜、竞价、热榜、异动、公告快讯、概念标签、
  行业强度、财务体检、现金流质量、研究导出 —— Fuyao **优先**（冲突以 Fuyao 为准）
- T3 加速：10 年全市场 Parquet/DuckDB 底座、概念图谱 —— 派生来源，不得成为唯一路径

本模块只做"声明 + 纯函数判定"，不 import 数据源实现，避免循环依赖。
"""

TIER_CORE = 'T1'
TIER_PERIPHERAL = 'T2'
TIER_ACCEL = 'T3'

#: T1 核心数据面（Fuyao 不得参与）
T1_CORE = frozenset({
    'calendar', 'strategy_holdings', 'kline_daily', 'kline_minute',
    'realtime_quote', 'backtest_input', 'daily_basic',
})

#: T2 周边数据面（Fuyao 可优先）
T2_PERIPHERAL = frozenset({
    'limit_pools', 'ladder', 'limit_stats', 'limit_reason', 'lhb', 'auction',
    'hot_rank', 'anomaly', 'news', 'concept', 'industry_strength',
    'fin_checkup', 'fin_quality', 'research_export',
})

#: T3 加速层（派生，不得成为唯一路径）
T3_ACCEL = frozenset({'dwh_parquet', 'concept_graph'})

#: 在核心链路中被禁止的数据源（即使被误加进 SOURCE_ORDER 也要剔除）
T1_FORBIDDEN = frozenset({'fuyao'})


def tier_of(name):
    """返回数据面所属层级；未知返回 None。"""
    if name in T1_CORE:
        return TIER_CORE
    if name in T2_PERIPHERAL:
        return TIER_PERIPHERAL
    if name in T3_ACCEL:
        return TIER_ACCEL
    return None


def is_forbidden_in_core(source_name):
    """该数据源是否被禁止进入核心链路。"""
    return str(source_name or '') in T1_FORBIDDEN


def filter_t1_sources(sources):
    """过滤掉核心链路禁用的源，保持原有顺序。

    用于所有 T1 路由构造点：SOURCE_ORDER 遍历、minute priority 回退、preferred 前置。
    """
    return [s for s in (sources or []) if not is_forbidden_in_core(s)]


def assert_preferred_allowed(preferred):
    """T1 方法收到 preferred 时校验；禁止把禁入源提到最前（抛错而非静默降级）。"""
    if is_forbidden_in_core(preferred):
        raise ValueError(
            '核心行情链路不允许 preferred=%r：Fuyao/同花顺仅可用于周边功能（PRD FR-6.7.8 / D21）'
            % (preferred,))
    return preferred


def arbitrate_field(tier, current, incoming):
    """字段级冲突仲裁。

    - T1：恒返回 ``current``（现有 tushare/sxsc 值），Fuyao 不得覆盖
    - T2/T3：返回 ``incoming``（新源值），由调用方记录差异
    - 未知层级：保守返回 ``current``
    """
    if tier == TIER_CORE:
        return current
    if tier in (TIER_PERIPHERAL, TIER_ACCEL):
        return incoming
    return current


def contract_snapshot():
    """供 /api/market/datasource/status 暴露的分层契约快照。"""
    return {
        't1_core': sorted(T1_CORE),
        't2_peripheral': sorted(T2_PERIPHERAL),
        't3_accel': sorted(T3_ACCEL),
        't1_forbidden': sorted(T1_FORBIDDEN),
    }
