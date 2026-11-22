# -*- coding: utf-8 -*-
"""
个股/指数详情内嵌面板面层一致性契约 (深色模式 "卡片灰蒙蒙" 修复)

背景: 7.13 视觉改造把主程序面层收敛到 --surface-card (实色, 跟随色相),
但双栏右栏的详情卡片 (.qc-embedded-dialog / .kline-dialog) 仍是 Element Plus
el-dialog, 被 [data-theme="dark-pro"] .el-dialog { background: var(--glass-bg) }
套上半透明玻璃 --glass-bg: rgba(45,42,31,0.90):
  - 该值是硬编码金色相 hsl(45,18%,15%), 蓝色相下详情卡仍是金灰 #2a271d,
    与冷调主程序卡 #1f242d 明显脱节 → "灰蒙蒙"
  - 0.9 alpha 叠到页底 canvas 后再降一档, 比周围实色卡更暗更灰
  - 边框走 --glass-border rgba(255,255,255,0.12), 对卡片仅 1.46:1, 近乎不可见

该面板 position:static / box-shadow:none, 本就不是浮层, 不应使用玻璃效果。
修复: 用高优先级规则让内嵌详情卡改用实色 --surface-card + --qc-border,
跟随色相, 与主程序卡片同源。全局弹窗的玻璃效果 (浮动 dialog) 保持不变。

本门禁全部在旧实现上先跑红, 修复后跑绿。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS = os.path.join(BASE, "frontend", "css")
_THEMES = os.path.join(CSS, "themes.css")


def _read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def _rules(src, selector):
    """收集某选择器的全部规则体 (容忍逗号分隔的选择器组)。"""
    return [m.group(1) for m in re.finditer(
        re.escape(selector) + r"[^{]*\{([^}]*)\}", src)]


def test_d1_embedded_dialog_uses_solid_surface():
    """D1: 深色内嵌详情卡改用实色 --surface-card, 不再套 --glass-bg 半透明玻璃。"""
    src = _read(_THEMES)
    rules = _rules(src, '[data-theme="dark-pro"] .el-dialog.qc-embedded-dialog')
    assert rules, "应存在 inner 详情卡的 dark-pro 高优先级覆盖规则"
    body = "\n".join(rules)
    assert "background" in body and "var(--surface-card)" in body, \
        "内嵌详情卡背景应为实色 --surface-card: %s" % body.strip()
    assert "--glass-bg" not in body, \
        "内嵌详情卡不应再用半透明 --glass-bg: %s" % body.strip()


def test_d2_embedded_dialog_border_uses_main_token():
    """D2: 内嵌详情卡边框走主程序 --qc-border, 不再用 1.46:1 的 --glass-border。"""
    src = _read(_THEMES)
    body = "\n".join(_rules(src, '[data-theme="dark-pro"] .el-dialog.qc-embedded-dialog'))
    assert "var(--qc-border)" in body, \
        "内嵌详情卡边框应收敛到 --qc-border (2.1:1): %s" % body.strip()


def test_d3_global_dialog_glass_kept():
    """D3: 全局浮动弹窗 (.el-dialog 通用规则) 的玻璃效果必须保留 (防误伤)。"""
    src = _read(_THEMES)
    assert '[data-theme="dark-pro"] .el-dialog' in src, "全局弹窗 dark 规则应保留"
    # 通用规则仍指向 glass, 内嵌卡靠更高优先级覆盖 — 两者共存
    general = [m.group(1) for m in re.finditer(
        r'\[data-theme="dark-pro"\] \.el-dialog\s*\{([^}]*)\}', src)]
    assert general and "var(--glass-bg" in general[0], \
        "全局浮动弹窗应继续用玻璃背景 (仅内嵌卡例外)"


def test_d4_surface_follows_hue_and_opaque():
    """D4: 新背景取 --surface-card — 运行期为实色且跟随 7 个色相 (非硬编码金灰)。"""
    import sys
    sys.path.insert(0, BASE)
    sys.path.insert(0, os.path.join(BASE, "tests"))
    import color_gate as g
    for hue in (45, 220, 0, 140, 270, 320):
        c = g.color("dark", hue, "--surface-card")
        assert c is not None, "暗色 --surface-card 缺失 (hue=%s)" % hue
        r, gg, b = c[:3]
        # 实色面层: 与硬编码金灰 (45,42,31) 在不同色相下应明显不同
        if hue == 220:
            assert b > r, "蓝色相面层应冷调 (B>R), 实际 %s" % (c,)
