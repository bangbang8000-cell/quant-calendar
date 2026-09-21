# -*- coding: utf-8 -*-
"""V6.12 (需求轮3·item3): 细长条填充柔度门禁

背景: 进度条/占比条在 3-18px 高度上原本用「饱和实底 / 品牌渐变」填充 (var(--gradient)、
var(--color-primary)、var(--state-*-solid)、甚至把「文字色」令牌当填充), 用户反馈
「所有涉及到细长条的进度条/占比条颜色太深了」。现统一改走 --bar-fill* 令牌族
(语义实底 62% + 卡片底混色, 随明暗主题自适应)。

本门禁守护三件事:
  ① 令牌族存在且柔度在合理区间 (--bar-mix 45%~80%), 每个 --bar-fill* 都由 --bar-mix 混出;
  ② 已登记的条/计选择器不得回退到深色填充 (渐变 / 语义实底 / 文字色令牌);
  ③ 内联动态条填充 (阶段色 / 评分色 / EP 进度条) 必须走 --bar-fill* 或 --bar-mix 混色。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_DIR = os.path.join(BASE, "frontend", "css")
JS_DIR = os.path.join(BASE, "frontend", "js")

# 深色填充令牌 (条填充禁止使用): 饱和实底 / 品牌渐变 / 文字色令牌
DEEP_FILL = re.compile(
    r"var\(--(?:gradient|gradient-brand|color-primary|primary-color|color-success|color-warning|"
    r"color-danger|color-info|el-success|el-warning|el-danger|el-info|success-text|warning-text|"
    r"danger-text|info-text|state-[a-z]+-solid)\b"
)

# 条/计类选择器 -> 期望的条填充令牌 (背景声明必须命中)
BAR_SELECTORS = {
    "themes.css": {
        ".time-bar-fill": "--bar-fill",
        ".progress-bar": "--bar-fill",
        ".progress-bar.status-ok": "--bar-fill-ok",
        ".progress-bar.status-warn": "--bar-fill-warn",
        ".progress-bar.status-bad": "--bar-fill-bad",
        ".meter-fill": "--bar-fill",
        ".rank-bar-fill": "--bar-fill",
        ".mini-bar": "--bar-fill",
        ".usage-ai-model-fill": "--bar-fill",
        ".usage-ai-bar": "--bar-fill",
        ".usage-ai-bar-today": "--bar-fill",
        ".onboarding-progress-fill": "--bar-fill",
        ".ai-stage-line.done": "--bar-fill-ok",
        ".login-brand-bar": "--bar-fill",
    },
    "layout.css": {
        ".focus-action-买入": "--bar-fill-ok",
        ".focus-action-持有": "--bar-fill-warn",
        ".focus-action-观望": "--bar-fill-info",
        ".focus-action-减仓": "--bar-fill-bad",
        ".focus-action-卖出": "--bar-fill-bad",
    },
}


def _read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def _block(src, selector):
    """取选择器对应的规则体 (第一个匹配; 允许前导缩进)"""
    m = re.search(r"(?:^|\n)[ \t]*" + re.escape(selector) + r"[ \t]*\{([^}]*)\}", src)
    return m.group(1) if m else None


def test_bar_fill_tokens_defined_and_soft():
    """① --bar-mix 与 --bar-fill* 令牌族存在, 柔度在 45%~80% 且由卡片底混出"""
    css = _read(os.path.join(CSS_DIR, "tokens.css"))
    m = re.search(r"--bar-mix:\s*(\d+)%\s*;", css)
    assert m, "tokens.css 应定义 --bar-mix 柔度百分比"
    mix = int(m.group(1))
    assert 45 <= mix <= 80, f"--bar-mix={mix}% 超出柔和区间 45%~80% (过小仍太深 / 过大过淡)"
    for name in ("--bar-fill", "--bar-fill-ok", "--bar-fill-warn", "--bar-fill-info", "--bar-fill-bad"):
        decl = re.search(re.escape(name) + r":\s*([^;]+);", css)
        assert decl, f"tokens.css 缺条填充令牌 {name}"
        val = decl.group(1)
        assert "color-mix(" in val and "var(--bar-mix)" in val and "var(--surface-card)" in val, \
            f"{name} 应为 color-mix(<语义色> var(--bar-mix), var(--surface-card)): {val}"


def test_bar_selectors_use_bar_fill_tokens():
    """② 登记的条选择器必须用对应 --bar-fill* 令牌, 且不得含深色填充"""
    for fname, mapping in BAR_SELECTORS.items():
        src = _read(os.path.join(CSS_DIR, fname))
        for sel, token in mapping.items():
            body = _block(src, sel)
            assert body is not None, f"{fname}: 未找到条规则 {sel}"
            bg = re.search(r"background(?:-color)?:\s*([^;]+)", body)
            assert bg, f"{fname} {sel}: 应显式声明 background"
            val = bg.group(1)
            assert token in val, f"{fname} {sel}: 条填充应使用 {token}, 实际 {val.strip()}"
            assert not DEEP_FILL.search(val), f"{fname} {sel}: 条填充回退到深色令牌 -> {val.strip()}"


def test_ep_progress_follows_bar_fill():
    """③a Element Plus 进度条 (执行看板任务) 的变量桥必须指向条填充档"""
    src = _read(os.path.join(CSS_DIR, "components.css"))
    body = _block(src, ".el-progress")
    assert body, "components.css 应含 .el-progress 变量桥"
    for var, token in (("--el-color-primary", "--bar-fill"),
                       ("--el-color-success", "--bar-fill-ok"),
                       ("--el-color-danger", "--bar-fill-bad")):
        assert re.search(re.escape(var) + r":\s*var\(" + re.escape(token) + r"\)", body), \
            f".el-progress 应把 {var} 桥接到 {token}"


def test_inline_bar_fills_are_soft():
    """③b 内联动态条填充 (阶段色/评分色/评分分布) 必须走 --bar-fill* 或 --bar-mix 混色"""
    merrill = _read(os.path.join(JS_DIR, "merrill.js"))
    m = re.search(r"const barColor = ([^\n]+)", merrill)
    assert m, "merrill.js 应定义维度条填充 barColor"
    assert DEEP_FILL.search(m.group(1)) is None, f"merrill.js 维度条仍用深色填充: {m.group(1).strip()}"
    assert "--bar-fill" in m.group(1), "merrill.js 维度条应使用 --bar-fill* 令牌"

    wl = _read(os.path.join(JS_DIR, "watchlist.js"))
    bins = re.search(r"const bins = \[(.*?)\];", wl, re.S)
    assert bins, "watchlist.js 应定义评分分布 bins"
    body = bins.group(1)
    # 每个档位的填充色: 要么是 --bar-fill* 令牌, 要么是「实底 <=62% 与卡片底混色」
    soft_mix = re.compile(r"color-mix\(in srgb, var\(--state-[a-z]+-solid\) (\d+)%, var\(--surface-card\)\)")
    fills = re.findall(r"color:\s*'([^']+)'", body)
    assert len(fills) >= 5, f"评分分布应有 5 档填充, 实际 {fills}"
    for f in fills:
        if f.startswith("var(--bar-fill"):
            continue
        mm = soft_mix.fullmatch(f)
        assert mm and int(mm.group(1)) <= 62, \
            f"评分分布条填充应使用 --bar-fill* 或 <=62% 的柔和混色, 实际 {f}"

    for rel, needle in (("components/strategies-page.js", "--bar-mix"),
                        ("components/dialogs/batch-evaluate.js", "var(--bar-fill)"),
                        ("components/dialogs/stock-detail.js", "var(--bar-fill")):
        src = _read(os.path.join(JS_DIR, *rel.split("/")))
        assert needle in src, f"{rel} 的条填充应使用 {needle}"


def test_no_deep_fill_left_in_bar_rules():
    """② (全局兜底) 所有 css 中「条/计类选择器 + 深色背景」应为 0 处"""
    bad = []
    # 词段边界: 防止 sidebar 里的 "bar" 被误判为进度条
    bar_sel = re.compile(r"\.(?:[a-z0-9]+-)*(?:bar|meter|progress|track|fill|seg)(?:-[a-z0-9]+)*")
    for fname in sorted(os.listdir(CSS_DIR)):
        if not fname.endswith(".css"):
            continue
        src = _read(os.path.join(CSS_DIR, fname))
        for m in re.finditer(r"(?:^|\n)([ \t]*)([^{}\n]+)\{([^}]*)\}", src):
            selector, body = m.group(2).strip(), m.group(3)
            if "sidebar" in selector.lower():
                continue
            if not bar_sel.search(selector):
                continue
            if selector.startswith(".focus-action-dot") or "::" in selector:
                continue          # 8px 状态圆点 / 伪元素装饰不在「细长条」范围
            bg = re.search(r"background(?:-color)?:\s*([^;]+)", body)
            if bg and DEEP_FILL.search(bg.group(1)):
                bad.append(f"{fname}: {selector} -> {bg.group(1).strip()[:60]}")
    assert not bad, "以下条规则仍用深色填充:\n  " + "\n  ".join(bad)
