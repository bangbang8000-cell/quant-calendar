#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.1 (T-5.2.15): 明日验证条件 — 固定指标集 + eps + 三态核验 + 基准发生率

借鉴 vibe-astock verification.py:
- 三态核验: 成立 / 证伪 / 数据不足(=None, 不算判错)
- eps 阈值: "40 → 41" 不算上升(数值波动不误判)
- 基准发生率: 近 N 日该方向成立比例(口径披露)
"""
from statistics import mean

# 固定指标集(用户可自设条件覆盖阈值)
METRICS = [
    {'key': 'limit_up_count', 'label': '涨停家数', 'unit': '家', 'direction': '>='},
    {'key': 'highest_board', 'label': '最高板', 'unit': '板', 'direction': '>='},
    {'key': 'promotion_1to2', 'label': '1进2晋级率', 'unit': '', 'direction': '>='},
    {'key': 'money_median', 'label': '赚钱效应中位数', 'unit': '%', 'direction': '>='},
    {'key': 'broken_rate', 'label': '炸板率', 'unit': '', 'direction': '<='},
    {'key': 'limit_down_count', 'label': '跌停家数', 'unit': '家', 'direction': '<='},
]


def metric_value(bundle: dict, key: str):
    """从指标汇总(emotion build_metrics + facts)取指标值; 取不到 → None(数据不足)"""
    promotion = bundle.get('promotion') or {}
    if key == 'limit_up_count':
        return promotion.get('limit_up_count')
    if key == 'highest_board':
        ladder = bundle.get('ladder') or {}
        return ladder.get('highest')
    if key == 'promotion_1to2':
        return (promotion.get('tiers') or {}).get('1进2', {}).get('rate')
    if key == 'money_median':
        return (bundle.get('money_effect') or {}).get('median')
    if key == 'broken_rate':
        return (bundle.get('seal_quality') or {}).get('broken_rate')
    if key == 'limit_down_count':
        return (bundle.get('loss_effect') or {}).get('down_limit_count')
    return None


def _direction(direction: str, current: float, threshold: float, eps: float = 0.05) -> str:
    """三态核验: 成立/证伪。current=None → 数据不足(不算判错)。"""
    if current is None or threshold is None:
        return '数据不足'
    if direction == '>=':
        return '成立' if current >= threshold - eps else '证伪'
    if direction == '<=':
        return '成立' if current <= threshold + eps else '证伪'
    return '数据不足'


def build_conditions(bundle: dict, baselines: dict = None, days: int = 60) -> list:
    """为固定指标集生成验证条件。

    baselines: {key: {'threshold': float, 'base_rate': float, 'sample': int}}
    未提供某指标阈值 → threshold None → 数据不足(不算判错)。
    """
    baselines = baselines or {}
    out = []
    for m in METRICS:
        key = m['key']
        base = baselines.get(key, {})
        threshold = base.get('threshold')
        current = metric_value(bundle, key)
        out.append({
            'key': key, 'label': m['label'], 'unit': m['unit'],
            'direction': m['direction'],
            'current': current,
            'threshold': threshold,
            'verdict': _direction(m['direction'], current, threshold),
            'base_rate': base.get('base_rate'),
            'base_sample': base.get('sample'),
            'note': '数据不足不算判错' if threshold is None else
                    f'近{days}日基准发生率 {base.get("base_rate") or "-"}',
        })
    return out


def direction_baseline(history: list, key: str, direction: str,
                       eps: float = 0.05) -> dict:
    """近 N 日该指标的历史均值作为基准阈值 + 方向成立发生率。"""
    vals = [h[key] for h in history if h.get(key) is not None]
    if not vals:
        return {'threshold': None, 'base_rate': None, 'sample': 0}
    avg = mean(vals)
    if direction == '>=':
        hits = sum(1 for v in vals if v >= avg - eps)
    else:
        hits = sum(1 for v in vals if v <= avg + eps)
    return {'threshold': round(avg, 3), 'sample': len(vals),
            'base_rate': round(hits / len(vals), 3)}


def summarize(results: list) -> dict:
    """条件核验汇总: 成立/证伪/数据不足 计数"""
    return {
        'total': len(results),
        'hit': sum(1 for r in results if r['verdict'] == '成立'),
        'miss': sum(1 for r in results if r['verdict'] == '证伪'),
        'unknown': sum(1 for r in results if r['verdict'] == '数据不足'),
    }
