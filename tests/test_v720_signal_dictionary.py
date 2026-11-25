#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.20 专项: 择时信号字典与策略判断联动映射

用户反馈: 择时信号矩阵里的信号用「100% + 图形」无法理解, 应改为
买入/卖出/持有/加仓/减仓等明确文字, 并与策略判断准确联动。

本文件锁定:
- D1 字典完整性: VALID_ACTIONS 全部覆盖 + wait 兜底, 字段齐全
- D2 映射准确性: 5 种 action → 正确 label/tone, strength → 强度档
- D3 单一事实来源: 三个端点(evaluate/state/matrix)均下发字典, 单元格带展示字段
- D4 关键歧义修复: buy/add/hold 的三个 label 必须不同(旧版都是 100%)
"""
import os
import sys

import pytest

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, "backend"))

from timing.base import VALID_ACTIONS, TimingSignal  # noqa: E402
from timing.signal_dict import (  # noqa: E402
    SIGNAL_DICTIONARY, action_display, signal_display, strength_band,
)


def _read(rel):
    with open(os.path.join(ROOT, rel), "r", encoding="utf-8") as f:
        return f.read()


def test_d1_dictionary_covers_all_actions():
    required = set(VALID_ACTIONS) | {"wait"}
    assert required.issubset(SIGNAL_DICTIONARY.keys()), \
        "字典必须覆盖全部合法 action + wait 兜底"
    for key, meta in SIGNAL_DICTIONARY.items():
        assert set(meta.keys()) == {"label", "tone", "meaning", "exposure"}, key
        assert meta["tone"] in ("up", "down", "flat"), key
        assert meta["label"], key


def test_d2_action_to_label_tone_mapping():
    expected = {
        "buy": ("买入", "up"),
        "add": ("加仓", "up"),
        "hold": ("持有", "flat"),
        "reduce": ("减仓", "down"),
        "sell": ("卖出", "down"),
        "wait": ("观望", "flat"),
    }
    for action, (label, tone) in expected.items():
        meta = action_display(action)
        assert meta["label"] == label, action
        assert meta["tone"] == tone, action
    assert action_display("不存在的动作")["label"] == "观望", "未知动作须兜底观望"


def test_d2_strength_band_thresholds():
    assert strength_band(0.8) == "强"
    assert strength_band(0.5) == "中"
    assert strength_band(0.2) == "弱"
    assert strength_band(0.0) == "弱"
    assert strength_band(float("nan")) == "弱"
    assert strength_band(None) == "弱"


def test_d4_buy_add_hold_labels_are_distinct():
    """用户无法理解的核心: 三种 action 的仓位系数都是 1.0, 文字标签必须不同"""
    labels = {a: action_display(a)["label"] for a in ("buy", "add", "hold")}
    assert len(set(labels.values())) == 3, labels
    exposures = {a: signal_display(TimingSignal(a, 0.5, 1.0))["exposure"]
                 for a in ("buy", "add", "hold")}
    assert len(set(exposures.values())) == 1, "验证旧版歧义确实存在(三个 exposure 都是 1.0)"


def test_d3_signal_display_keeps_contract_fields():
    sig = TimingSignal("reduce", 0.8, 0.3, message="跌破趋势均线")
    d = signal_display(sig)
    assert d["action"] == "reduce" and d["strength"] == 0.8 and d["exposure"] == 0.3
    assert d["message"] == "跌破趋势均线"
    assert d["label"] == "减仓" and d["tone"] == "down" and d["strength_band"] == "强"
    assert "0.5→0.25" in d["meaning"], "减仓语义须说明强度联动"


def test_d3_hold_has_no_strength_band():
    d = signal_display(TimingSignal("hold", 0.0, 1.0))
    assert d["label"] == "持有" and d["strength_band"] == ""
    assert "不代表满仓买入" in d["meaning"]


def test_d3_three_endpoints_emit_dictionary():
    """evaluate/state/matrix 三端点都要下发 signal_dictionary"""
    src = _read("backend/api/v1/timing_api.py")
    assert src.count('"signal_dictionary": SIGNAL_DICTIONARY') >= 3, \
        "三个端点都应下发字典 (evaluate/state/matrix)"
    assert "from timing.signal_dict import" in src


def test_d3_frontend_uses_dict_not_hardcode():
    """前端只渲染后端下发的 label/tone, 不硬编码文案"""
    src = _read("frontend/js/components/overlay-radar.js")
    assert "p.row.signals[st.id].label" in src
    assert "p.row.signals[st.id].tone" in src
    assert "tone-up" in _read("frontend/css/components.css")
