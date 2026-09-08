#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.5 / FR-5.4.7): 重点跟踪 5 档动作派生 (focus_action_map)

单一实现: 推送/界面/API 同口径, 前端不重复计算。
- direction_from_level(level): 看多 / 震荡 / 看空
- derive_action(score, level, holding): 5 档 买入/持有/观望/减仓/卖出
- EMOJI / ACTION_ORDER: digest 渲染与统计统一符号

派生 (PRD-v5.4 §1 FR-5.4.7, 评分驱动 + level 方向修正):
  score>=60 (或看多声明) × 未持仓 → 买入; × 已持仓 → 持有
  40<=score<60 × 未持仓 → 观望; × 已持仓 → 持有
  30<=score<40 × 未持仓 → 观望; × 已持仓 → 减仓
  score<30 (或看空声明) × 未持仓 → 观望; × 已持仓 → 卖出
"""
import logging

logger = logging.getLogger(__name__)

ACTION_BUY = "买入"
ACTION_HOLD = "持有"
ACTION_WATCH = "观望"
ACTION_REDUCE = "减仓"
ACTION_SELL = "卖出"

# 动作档位降序 (digest 排序: 买入 > 持有 > 观望 > 减仓 > 卖出)
ACTION_ORDER = (ACTION_BUY, ACTION_HOLD, ACTION_WATCH, ACTION_REDUCE, ACTION_SELL)

# 统一符号 (digest 渲染)
EMOJI = {
    ACTION_BUY: "🟢",
    ACTION_HOLD: "🟡",
    ACTION_WATCH: "⚪",
    ACTION_REDUCE: "🟠",
    ACTION_SELL: "🔴",
}

# level → 方向: 看空系优先 (避免「不推荐」等被看多词误判)
_BEARISH_KEYWORDS = ("看空", "看跌", "卖出", "减持", "回避", "弱势", "减仓", "规避")
_BULLISH_KEYWORDS = ("强烈推荐", "推荐", "看多", "看涨", "买入", "增持", "强势", "加仓")
# 谨慎/否定修饰: 「谨慎推荐」不应按「推荐」判看多
_NEGATION_PREFIXES = ("不", "非", "无", "谨慎")


def _negated(s, idx):
    return any(neg in s[max(0, idx - 2):idx] for neg in _NEGATION_PREFIXES)


def direction_from_level(level) -> str:
    """level → 看多 / 震荡 / 看空。

    - 含看空系关键词(且未被否定) → 看空
    - 含「强烈推荐/推荐/看多…」(且未被否定) → 看多
    - 其余 (中性/观望/谨慎推荐/空值) → 震荡
    """
    if not level:
        return "震荡"
    s = str(level)
    for kw in _BEARISH_KEYWORDS:
        idx = s.find(kw)
        if idx >= 0 and not _negated(s, idx):
            return "看空"
    for kw in _BULLISH_KEYWORDS:
        idx = s.find(kw)
        if idx >= 0 and not _negated(s, idx):
            return "看多"
    return "震荡"


def derive_action(score, level, holding=False) -> str:
    """评分 × level × 持仓 → 5 档动作 (PRD FR-5.4.7 派生表)。

    评分驱动: score 是连续真值; level 仅修正方向 (看空声明直接进减仓/卖出系)。
    """
    s = float(score) if score is not None else 50.0
    d = direction_from_level(level)
    if d == "看空" or s < 30:
        # 深看空: score<30 (或看空声明且低分) → 卖出; 看空声明/弱 → 减仓
        if s < 30:
            return ACTION_SELL if holding else ACTION_WATCH
        return ACTION_REDUCE if holding else ACTION_WATCH
    if s < 40:
        # 看空/弱档 (30<=score<40)
        return ACTION_REDUCE if holding else ACTION_WATCH
    if s >= 60:
        # 推荐档 (强烈推荐/推荐)
        return ACTION_HOLD if holding else ACTION_BUY
    # 谨慎推荐/中性档 (40<=score<60)
    return ACTION_HOLD if holding else ACTION_WATCH


def action_bucket_key(action) -> int:
    """动作 → 档位序号 (排序/分组用, 越小越优先)。"""
    try:
        return ACTION_ORDER.index(action)
    except ValueError:
        return len(ACTION_ORDER)  # 未知动作排最后
