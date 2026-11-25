#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""择时信号字典 (v7.20) — 策略判断 → 人类可读文案的单一事实来源

背景: 择时矩阵旧版单元格只渲染「圆点 + 仓位条 + 目标仓位百分比」。
overlay 契约里 buy/add/hold 的目标仓位系数都是 1.0(100%),
三种完全不同的动作被渲染成同一个「100% 满格进度条」——用户无法理解。

本模块把策略 evaluate() 返回的 TimingSignal(action, strength, target_exposure, message)
映射为带明确文字标签的展示结构。前端只消费本字典下发的 label/tone, 不再自行硬编码,
保证「策略判断」与「界面文案」永远同口径。

设计约束:
- action 是权威(见 timing/base.py VALID_ACTIONS), 字典必须完整覆盖 5 个 + wait 兜底。
- 仓位系数(exposure)是 overlay 注入回测的内部量, 降级为辅助信息, 不占单元格主视觉。
- strength 是信号强度(0~1), 用「强/中/弱」文字档表达, 不用进度条误导为「胜率」。
- 涨跌配色沿用 A 股口径: 买入/加仓=红(up), 卖出/减仓=绿(down), 持有/观望=灰(flat)。
"""
from typing import Any, Dict

from timing.base import TimingSignal

# 强度分档阈值: ≥0.66 强, ≥0.33 中, 其余弱。hold/wait 无强度语义。
_STRONG = 0.66
_MID = 0.33

# 字典: action -> 展示元数据
# label    单元格主文字(用户第一眼要读的)
# tone     配色档: up(红)/down(绿)/flat(灰), 与 A 股涨跌口径一致
# meaning  一句话语义, 用于 tooltip / 报告
# exposure 目标仓位系数的文字说明(辅助信息, 非主视觉)
SIGNAL_DICTIONARY: Dict[str, Dict[str, str]] = {
    "buy": {
        "label": "买入", "tone": "up",
        "meaning": "首次建仓，从空仓升至目标仓位",
        "exposure": "目标仓位 100%",
    },
    "add": {
        "label": "加仓", "tone": "up",
        "meaning": "已有持仓上追加（海龟突破、趋势回调缩量等）",
        "exposure": "目标仓位 100%",
    },
    "hold": {
        "label": "持有", "tone": "flat",
        "meaning": "无信号，维持原仓位（不代表满仓买入）",
        "exposure": "维持原仓位",
    },
    "reduce": {
        "label": "减仓", "tone": "down",
        "meaning": "部分减仓，信号越强减得越多（仓位系数 0.5→0.25）",
        "exposure": "目标仓位 ≤50%",
    },
    "sell": {
        "label": "卖出", "tone": "down",
        "meaning": "清仓离场",
        "exposure": "目标仓位 0%",
    },
    "wait": {
        "label": "观望", "tone": "flat",
        "meaning": "数据不足或数据源降级，暂无法判定方向",
        "exposure": "不调整",
    },
}


def strength_band(strength: Any) -> str:
    """强度 0~1 → 强/中/弱文字档; 非法值按弱处理"""
    try:
        s = float(strength)
    except (TypeError, ValueError):
        return "弱"
    if not (s == s) or s <= 0:  # NaN / 0 → 无强度语义(多见于 hold)
        return "弱"
    return "强" if s >= _STRONG else ("中" if s >= _MID else "弱")


def signal_display(sig: TimingSignal) -> Dict[str, Any]:
    """TimingSignal → 前端展示结构 (保留原始字段, 附加文案三件套)

    返回字段:
        action        原始动作代码(权威, 供排序/筛选/统计)
        strength      原始强度(0~1)
        exposure      原始目标仓位系数(辅助, tooltip 用)
        message       策略给出的判定理由
        label         明确文字: 买入/加仓/持有/减仓/卖出/观望
        tone          配色档: up/down/flat
        strength_band 强度文字档: 强/中/弱 (hold 恒弱)
        meaning       字典语义(tooltip)
        exposure_note 仓位系数文字说明(tooltip)
    """
    action = getattr(sig, "action", "hold") or "hold"
    meta = SIGNAL_DICTIONARY.get(action, SIGNAL_DICTIONARY["wait"])
    strength = float(getattr(sig, "strength", 0.0) or 0.0)
    exposure = float(getattr(sig, "target_exposure", 1.0))
    return {
        "action": action,
        "strength": round(strength, 4),
        "exposure": round(exposure, 4),
        "message": getattr(sig, "message", "") or "",
        "label": meta["label"],
        "tone": meta["tone"],
        "strength_band": strength_band(strength) if action not in ("hold", "wait") else "",
        "meaning": meta["meaning"],
        "exposure_note": meta["exposure"],
    }


def action_display(action: Any) -> Dict[str, str]:
    """仅凭 action 代码取展示元数据(供买卖点表 / 聚合摘要复用)"""
    key = str(action or "hold")
    meta = SIGNAL_DICTIONARY.get(key, SIGNAL_DICTIONARY["wait"])
    return dict(meta)
