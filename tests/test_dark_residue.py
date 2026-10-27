# -*- coding: utf-8 -*-
"""
6.5.6 (视觉原子层·批次A): 暗色残留与容器描边门禁

背景 (评估实测):
- 运行期 generateDarkTokens() 未提供 --card-border / --surface / --bg-code / --text-disabled,
  这些令牌回落到 themes.css 的海军蓝硬编码值 (#1a2a44 / #111827 / #0f172a / #64748b)。
  而暗色表面已改为"色相联动的暖中性"→ 冷色残留压在暖底上: 实测 1.16 / 1.06 / 1.07:1, 边界不可见。
- 同时 --qc-border 亮色 1.90:1 / 暗色 2.14:1, 是容器唯一的分层载体却低于可辨阈值。

阈值说明:
- 容器描边 `--qc-border` 取 2.8:1 (视觉强度上限, 再深会形成"廉价描边框"观感);
  交互控件的边界走 `--border-control` 的 3:1 (WCAG 1.4.11), 由 test_theme_contrast.py 负责。
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

# 必须由运行期提供 (不得回落 CSS 硬编码) 的暗色令牌
DARK_RUNTIME_REQUIRED = ("--card-border", "--surface", "--bg-code", "--text-disabled")

# 色相偏离容忍: 暖中性族内部允许的色相角偏差
MAX_HUE_DRIFT = 25

BORDER_MIN = 2.8


def _fmt(mode, hue):
    return "%s/%s" % (mode, "中性" if hue < 0 else hue)


def test_dark_runtime_provides_residual_tokens():
    """暗色运行期必须显式提供 4 个曾回落的令牌, 不允许依赖 CSS 兜底。"""
    rt = g.runtime_tokens()
    for hue in g.HUES:
        key = "dark:%s" % hue
        assert key in rt, "color_probe 缺少配置 %s" % key
        for token in DARK_RUNTIME_REQUIRED:
            assert token in rt[key] and rt[key][token], \
                "dark/%s: %s 未由运行期提供 (会回落到 CSS 硬编码值)" % (
                    "中性" if hue < 0 else hue, token)


def test_dark_residual_tokens_follow_hue():
    """上述令牌若为 hsl 值, 其色相角必须与该配置 hue 偏差 <= 25° (防冷色压在暖底上)。"""
    failures = []
    for hue in g.HUES:
        if hue < 0:
            continue                                    # 中性无色相档不校验色相角
        r = g.resolved("dark", hue)
        for token in DARK_RUNTIME_REQUIRED:
            val = r.get(token, "")
            m = re.match(r"hsla?\(\s*([\d.]+)\s*,", val or "")
            if not m:
                continue                                # rgba/hex 档跳过 (色相不可直接读出)
            h = float(m.group(1))
            drift = abs(h - hue)
            drift = min(drift, 360 - drift)
            if drift > MAX_HUE_DRIFT:
                failures.append("dark/%s: %s 色相 %s 偏离 %s (%.0f°)"
                                % (hue, token, h, hue, drift))
    assert not failures, "暗色残留冷色调:\n  %s" % "\n  ".join(failures[:20])


def test_container_border_contrast():
    """容器描边 --qc-border 对卡片 >= 2.8:1 (明暗 14 套)。"""
    failures = []
    for mode, hue in g.CONFIGS:
        v = g.pair(mode, hue, "--qc-border", "--surface-card")
        if v is None:
            failures.append("%s: 令牌缺失" % _fmt(mode, hue))
        elif v < BORDER_MIN:
            failures.append("%s: %.2f < %.1f" % (_fmt(mode, hue), v, BORDER_MIN))
    assert not failures, "容器描边对比度不足 (%d 项):\n  %s" % (len(failures), "\n  ".join(failures[:20]))


def test_dark_block_has_no_navy_literals():
    """themes.css 的暗色块不得再出现海军蓝硬编码面值 (已改为色相联动暖中性)。"""
    path = os.path.join(g.FRONTEND, "css", "themes.css")
    src = open(path, encoding="utf-8").read()
    m = re.search(r'\[data-theme="dark-pro"\]\s*\{', src)
    assert m, "未找到 [data-theme=\"dark-pro\"] 块"
    i, depth = m.end(), 1
    while i < len(src) and depth:
        if src[i] == "{":
            depth += 1
        elif src[i] == "}":
            depth -= 1
        i += 1
    block = src[m.end():i - 1]
    # 只检查「值」中的字面色, 注释里提到历史值不算违规
    code = re.sub(r"/\*.*?\*/", "", block, flags=re.S)
    navy = ("#0b1220", "#101a2e", "#16233b", "#0d1526", "#111827", "#0f172a",
            "#1a2a44", "#23344f", "#1d2c47", "#2c4060", "#3a4a6a")
    hits = [c for c in navy if c in code.lower()]
    assert not hits, "暗色块仍含海军蓝硬编码: %s" % hits
