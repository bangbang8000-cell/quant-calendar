#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-4): 美林时钟阶段切换滞回规则（纯函数，便于单测）

背景：旧逻辑在指标贴近 0 轴时直接翻转（`trigger=boundary`），实测 2026-11-21 晚
22:55 衰退→过热、23:03 过热→衰退，8 分钟两次翻转；每次翻转还把阶段起始重置，
导致「已过 3 天 / 进度 1.25%」与「阶段稳定」同时出现。

规则（三层，全部可配置常量）：
1. 滞回带：|weighted_score| < 0.15 → 保持原阶段（不因贴轴抖动切换）。
2. 连续确认：候选阶段需连续 2 次评估一致才允许切换。
3. 最短持续期：当前阶段已持续 < 20 个交易日 → 不切（确认保留，期满后自动生效）。

返回 decision 供 UI 表达「边界犹豫」：
  first（首次确定） / same（一致） / hysteresis（滞回带内保持）
  confirming（候选中，待确认） / blocked_dwell（确认但未满最短持续期） / switch（切换）
"""
from typing import Optional

HYSTERESIS_BAND = 0.15
CONFIRM_EVALUATIONS = 2
MIN_DWELL_TRADING_DAYS = 20
# 阶段切换后承接的进度上限（占新阶段历史均值比例）——避免「一进新阶段就 100%」
INHERIT_CAP_RATIO = 0.25


def to_trading_days(calendar_days: float) -> int:
    """自然日 → 交易日（按 5/7 估算，无日历依赖）。"""
    try:
        d = float(calendar_days)
    except (TypeError, ValueError):
        return 0
    return int(max(0.0, d) * 5 / 7)


def decide(raw_stage: str, current_stage: Optional[str], weighted_score: float,
           pending: Optional[dict], dwell_trading_days: int) -> dict:
    """返回 {stage, decision, trigger, pending, dwell_blocked, band}。

    - `pending` 形如 {'stage': 'recession', 'count': 1}，由调用方持久化到 history。
    - 返回的 `pending` 为 None 表示清空（阶段一致或已切换）。
    """
    band = HYSTERESIS_BAND
    if not current_stage:
        return {'stage': raw_stage, 'decision': 'first', 'trigger': 'boundary',
                'pending': None, 'dwell_blocked': False, 'band': band}

    if raw_stage == current_stage:
        return {'stage': current_stage, 'decision': 'same', 'trigger': '',
                'pending': None, 'dwell_blocked': False, 'band': band}

    try:
        score = float(weighted_score)
    except (TypeError, ValueError):
        score = 0.0
    if abs(score) < band:
        # 贴轴抖动：保持原阶段，同时清空候选（避免下次一越界就误判为「已确认」）
        return {'stage': current_stage, 'decision': 'hysteresis', 'trigger': '',
                'pending': None, 'dwell_blocked': False, 'band': band}

    prev = pending or {}
    count = (int(prev.get('count') or 0) + 1) if prev.get('stage') == raw_stage else 1
    if count < CONFIRM_EVALUATIONS:
        return {'stage': current_stage, 'decision': 'confirming', 'trigger': '',
                'pending': {'stage': raw_stage, 'count': count},
                'dwell_blocked': False, 'band': band}

    if dwell_trading_days < MIN_DWELL_TRADING_DAYS:
        return {'stage': current_stage, 'decision': 'blocked_dwell', 'trigger': '',
                'pending': {'stage': raw_stage, 'count': count},
                'dwell_blocked': True, 'band': band}

    return {'stage': raw_stage, 'decision': 'switch', 'trigger': 'confirmed',
            'pending': None, 'dwell_blocked': False, 'band': band}
