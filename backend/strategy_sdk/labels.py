#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-9): 策略研究术语中文映射（后端单一来源）

背景：中文模式下策略研究页出现 `mom20 (technical)` / `success` / `multi_factor` / `fastdtw`
等英文，根因不是 i18n 字典缺失，而是**后端枚举与因子名原样透出**：
`FactorSpec` 只有 name/category，运行记录只有 status/mode/sid。

本模块提供：
- 静态映射表（因子 / 类别 / 状态 / 模式 / 引擎 / 数据源 / 策略 id）
- `label_of(kind, key)` 统一取值，查不到时**原样返回**（不伪造中文）
- `localize_run(run)` 给运行记录补 `status_cn / mode_cn / sid_cn`
- `localize_factor(spec)` 给因子声明补 `label / category_cn`

前端 `frontend/js/research-lexicon.js` 是同一张表的兜底副本，两处需保持一致
（`tests/test_v719_i18n_lexicon.py` 会做一致性断言）。
"""
from typing import Any, Optional

STRATEGY_LABELS = {
    'multi_factor': '多因子选股',
    'sector_rotation': '行业轮动',
    'index_enhance': '指数增强',
    'capital_flow': '资金流选股',
    'golden_triangle': '金三角',
    'oversold_rebound': '超跌反弹',
    'main_uptrend_dip_buy': '主升低吸',
    'leader': '龙头',
    'limit_up_pullback': '涨停回马枪',
    'morning_star': '启明星',
    'multi_golden_cross': '多金叉共振',
    'multi_party_cannon': '多方炮',
    'resistance_breakout': '阻力位突破',
    'immortal_guidance': '仙人指路',
    'new_stock_drawdown': '次新腰斩',
    'strategy_2560': '2560战法',
}

FACTOR_LABELS = {
    'pe': '市盈率(PE)',
    'pb': '市净率(PB)',
    'mom20': '20日动量',
    'mom60': '60日动量',
    'turnover20': '20日换手率',
    'capital_flow': '主力资金流',
    'roe': '净资产收益率(ROE)',
    'vol20': '20日波动率',
    'rsi14': '相对强弱(RSI14)',
}

CATEGORY_LABELS = {
    'valuation': '估值',
    'fundamental': '基本面',
    'capital': '资金面',
    'sentiment': '情绪',
    'technical': '技术面',
}

STATUS_LABELS = {
    'success': '成功',
    'failed': '失败',
    'running': '进行中',
    'pending': '等待中',
    'queued': '排队中',
    'canceled': '已取消',
    'cancelled': '已取消',
}

MODE_LABELS = {
    'manual': '手动',
    'scheduled': '定时',
    'auto': '自动',
}

ENGINE_LABELS = {
    'fastdtw': '快速DTW',
    'simple_dtw': '标准DTW',
    'hmmlearn': 'HMM',
    'heuristic': '启发式',
}

DATA_SOURCE_LABELS = {
    'akshare': 'AKShare',
    'tushare': 'Tushare',
    'eastmoney': '东方财富',
    'tonghuashun': '同花顺',
    'sxsc_tushare': '山西证券 Tushare',
    'mock': '模拟数据',
}

MAPS = {
    'sid': STRATEGY_LABELS,
    'factor': FACTOR_LABELS,
    'category': CATEGORY_LABELS,
    'status': STATUS_LABELS,
    'mode': MODE_LABELS,
    'engine': ENGINE_LABELS,
    'source': DATA_SOURCE_LABELS,
}


def label_of(kind: str, key: Any, fallback: Optional[str] = None) -> Any:
    """按类别取中文标签；查不到时返回 fallback（默认原值），绝不伪造。"""
    if key is None or key == '':
        return '—' if fallback is None else fallback
    table = MAPS.get(kind) or {}
    return table.get(str(key), key if fallback is None else fallback)


def localize_factor(spec: dict) -> dict:
    """因子声明补 label / category_cn（幂等）。"""
    if not isinstance(spec, dict):
        return spec
    out = dict(spec)
    out['label'] = out.get('label') or label_of('factor', out.get('name'), '')
    out['category_cn'] = out.get('category_cn') or label_of('category', out.get('category'), '')
    return out


def localize_run(run: dict) -> dict:
    """运行记录补 status_cn / mode_cn / sid_cn（幂等）。"""
    if not isinstance(run, dict):
        return run
    out = dict(run)
    sid = out.get('strategy_id') or out.get('sid')
    if sid:
        out['sid'] = sid
        out['sid_cn'] = out.get('sid_cn') or label_of('sid', sid, sid)
    if out.get('status'):
        out['status_cn'] = out.get('status_cn') or label_of('status', out['status'], out['status'])
    if out.get('mode'):
        out['mode_cn'] = out.get('mode_cn') or label_of('mode', out['mode'], out['mode'])
    return out
