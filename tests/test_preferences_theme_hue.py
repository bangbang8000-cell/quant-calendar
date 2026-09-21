# -*- coding: utf-8 -*-
"""
V6.11 (需求轮2·批次2): 偏好链路回归门禁

背景 (两个 P1 缺陷, 详见 docs/EVAL-UI-ROUND2.md §5):
- R2-01: `loadPreferences()` 对 `theme_hue` 调用 `PREFERENCE_VALUES['theme_hue'].indexOf(...)`,
  而该键不在白名单里 → TypeError 被外层 catch 静默吞掉 → **theme_hue 及其之后的键
  (chart_period/language/info_density/kline_show_minutes) 都不会从后端恢复**。
- R2-02: `_validThemeHue` 要求 `v >= 0`, 「中性无色相」档 (-1) 被静默过滤 → 选了也不落偏好。

本门禁通过 tests/preferences_probe.js 在 Node 里直跑 preferences.js 校验三点:
  ① 色相合法性 (0 与 -1 合法; 361/-2/非数字非法)
  ② 服务端偏好逐键合并 (含 theme_hue=0 与排在它之后的键)
  ③ 本地持久化 (setPreference('theme_hue', 0/-1) 真的写入 localStorage)
"""
import json
import os
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROBE = os.path.join(BASE, "tests", "preferences_probe.js")


def _probe():
    node = shutil.which("node")
    if not node:
        pytest.skip("未找到 node, 跳过偏好链路门禁 (CI 已通过 actions/setup-node 安装)")
    proc = subprocess.run([node, PROBE], capture_output=True, text=True, timeout=60)
    assert proc.returncode == 0, "preferences_probe.js 执行失败: %s" % proc.stderr[:400]
    return json.loads(proc.stdout)


def test_theme_hue_validity_includes_zero_and_neutral():
    """色相 0(红) 与 -1(中性) 必须合法; 越界/非数字必须拒绝。"""
    v = _probe()["validHue"]
    assert v["0"] is True, "色相 0 (红) 必须合法 —— 否则红色无法保存"
    assert v["-1"] is True, "色相 -1 (中性无色相) 必须合法 —— 否则中性档无法持久化"
    assert v["45"] is True
    assert v["360"] is True
    for bad in ("361", "-2", "x", "null"):
        assert v[bad] is False, "非法色相 %s 应被拒绝" % bad


def test_local_persistence_keeps_zero_and_neutral():
    """setPreference('theme_hue', 0 / -1) 必须真的写入 localStorage (不得被 falsy 判断丢弃)。"""
    p = _probe()["persist"]
    assert p["0"] == 0, "色相 0 未正确持久化: %r" % (p["0"],)
    assert p["-1"] == -1, "色相 -1 (中性) 未正确持久化: %r" % (p["-1"],)
    assert p["220"] == 220


def test_server_preferences_merge_all_keys():
    """服务端偏好必须逐键生效, 不得因某个键异常而中断后续键 (R2-01 回归)。"""
    merged = _probe()["merged"]
    expected = {
        "default_view": "calendar",
        "theme": "dark",
        "theme_hue": 0,
        "chart_period": "weekly",
        "language": "en",
        "info_density": "compact",
        "kline_show_minutes": "show",
    }
    wrong = {k: (merged.get(k), v) for k, v in expected.items() if merged.get(k) != v}
    assert not wrong, "服务端偏好未全部生效 (键: 实际 vs 期望): %s" % wrong
