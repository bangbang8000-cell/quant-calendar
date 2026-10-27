# -*- coding: utf-8 -*-
"""6.5.1 (FR-655/656/657): 设计系统与视觉收敛 — 令牌补全 / 弹窗四档 / 资产收敛

静态门禁 (可 CI 复验):
  TC-655-02/03 标题层级令牌 + 大字号留白 (h1/h2/h3 单一来源)
  TC-655-04 静态内联 style 治理 (每文件 ≤5, 排除 lib/动态 :style)
  TC-655-05 动效令牌门禁 — animation-duration 禁硬编码 (reduced-motion 豁免)
  TC-656-02 弹窗宽度四档 (440/520/640/800) + label-width 非弹窗豁免
  TC-656-03 CSS 资产拆域 ≤1,200 行 + link 链挂载
  TC-656-01 暗色表面三档 (canvas < card < raised, 亮度可辨)
  TC-657-01 移动端旧类清零 (sidebar/card-grid/mobile-nav)
浏览器视觉项 (人工走查, 不可静态化): TC-655-01 断网复现 / TC-656-01 密度实测 /
TC-657-01 移动实机 / 弹窗三主题实机。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

THEME_FILES = ("themes.css", "themes-market.css", "themes-features.css",
               "themes-components.css", "themes-pages.css")


def _read(rel):
    with open(os.path.join(FRONTEND, *rel.split("/")), encoding="utf-8") as f:
        return f.read()


# ─── FR-655.2: 标题层级令牌 ───────────────────────────────────

def test_type_scale_tokens_defined_and_consumed():
    """TC-655-02/03: tokens.css 定义 --qc-h1/h2/h3 字号/行高/字重 + 字体栈;
    .qc-page-h1 经令牌消费 (大字号 18px 保留留白); h2/h3 白名单登记 (FR-655.2 层级标尺)"""
    tokens = _read("css/tokens.css")
    for tier in ("h1", "h2", "h3"):
        for kind in ("size", "line", "weight"):
            assert "--qc-%s-%s:" % (tier, kind) in tokens, "缺 --qc-%s-%s 令牌" % (tier, kind)
    assert "--qc-font-display:" in tokens, "缺标题字体栈令牌"
    assert "'Inter'" in tokens and "PingFang SC" in tokens, "字体栈应含西文/中文回退"
    layout = _read("css/layout.css")
    h1 = re.search(r"\.qc-page-h1\s*\{([^}]*)\}", layout)
    assert h1, "layout.css 应含 .qc-page-h1"
    block = h1.group(1)
    assert "var(--qc-h1-size)" in block and "var(--qc-h1-weight)" in block \
        and "var(--qc-font-display)" in block, ".qc-page-h1 应经标题令牌消费"


# ─── FR-655.5: 动效令牌门禁 ───────────────────────────────────

# 豁免: reduced-motion 块内 (prefers-reduced-motion) 的动画归零不计数
_REDUCED_RE = re.compile(r"@media[^{]*prefers-reduced-motion[^{]*\{", re.M)


def _strip_reduced_motion(css):
    out, pos, open_blocks = [], 0, 0
    for m in _REDUCED_RE.finditer(css):
        depth, i = 1, m.end()
        while i < len(css) and depth:
            if css[i] == "{":
                depth += 1
            elif css[i] == "}":
                depth -= 1
            i += 1
        out.append(css[pos:m.start()])
        pos = i
    out.append(css[pos:])
    return "".join(out)


def test_animation_duration_tokenized():
    """TC-655-05 (FR-655.5): 全 css 的 animation-duration 禁止硬编码,
    必须经 --duration-* 令牌 (reduced-motion 块豁免)"""
    offenders = []
    for fname in os.listdir(os.path.join(FRONTEND, "css")):
        if not fname.endswith(".css"):
            continue
        css = _strip_reduced_motion(_read("css/" + fname))
        for m in re.finditer(r"animation(?:-duration)?:\s*([^;]+);", css):
            val = m.group(1)
            if re.search(r"\d*\.?\d+m?s\b", val) and "--duration-" not in val:
                line = css[:m.start()].count("\n") + 1
                offenders.append("%s:%d: %s" % (fname, line, val.strip()[:60]))
    assert not offenders, "animation-duration 硬编码 (应改用 --duration-* 令牌): %s" % offenders


def test_motion_tokens_defined():
    """TC-655-05: 动效语义档齐备 (pulse/spin/page/fade) + qc 别名层 (PRD 口径)"""
    tokens = _read("css/tokens.css")
    for name in ("--duration-fast", "--duration-base", "--duration-slow",
                 "--duration-pulse", "--duration-spin", "--duration-page", "--duration-fade",
                 "--qc-duration-fast", "--qc-duration-base", "--qc-duration-slow",
                 "--qc-ease-standard", "--qc-ease-enter"):
        assert name + ":" in tokens, "tokens.css 缺动效令牌 %s" % name


# ─── FR-655.4: 内联 style 治理 ────────────────────────────────

def test_static_inline_style_budget():
    """TC-655-04 (FR-655.4): 静态内联 style 每文件 ≤5 (排除 lib/node_modules/dist 与动态 :style)"""
    offenders = []
    for root_dir, dirs, names in os.walk(FRONTEND):
        rel = os.path.relpath(root_dir, FRONTEND).replace(os.sep, "/")
        if any(p in ("node_modules", "dist", "lib") for p in rel.split("/")):
            dirs[:] = []
            continue
        for name in names:
            if not name.endswith((".js", ".vue", ".html")):
                continue
            path = os.path.join(root_dir, name)
            with open(path, encoding="utf-8") as f:
                src = f.read()
            count = len(re.findall(r"(?<![:\w-])style=\"", src))
            if count > 5:
                offenders.append("%s: %d" % (os.path.relpath(path, FRONTEND), count))
    assert not offenders, "静态内联 style 超预算 (≤5/文件): %s" % offenders


# ─── FR-656.1: 弹窗四档 + 暗色表面三档 ─────────────────────────

_DIALOG_ALLOW = {"120", "100"}  # el-form label-width (非弹窗宽度)


def test_dialog_width_four_tiers():
    """TC-656-02 (FR-656.1): 组件弹窗 width 仅允许四档 440/520/640/800 (label-width 豁免)"""
    allowed = {"440", "520", "640", "800"} | _DIALOG_ALLOW
    offenders = []
    for root_dir, dirs, names in os.walk(os.path.join(FRONTEND, "js", "components", "dialogs")):
        for name in names:
            if not name.endswith((".js", ".vue")):
                continue
            path = os.path.join(root_dir, name)
            with open(path, encoding="utf-8") as f:
                src = f.read()
            for m in re.finditer(r"width[:=]\s*'?\"?(\d{3,4})px", src):
                w = m.group(1)
                if w not in allowed:
                    line = src[:m.start()].count("\n") + 1
                    offenders.append("%s:%d: %spx" % (os.path.relpath(path, FRONTEND), line, w))
    assert not offenders, "弹窗宽度超四档 (440/520/640/800): %s" % offenders


def test_dialog_width_tokens_defined():
    """TC-656-02: tokens.css 定义 --qc-dialog-width-{sm,md,lg,xl} = 四档"""
    tokens = _read("css/tokens.css")
    for name, val in (("--qc-dialog-width-sm", "440px"), ("--qc-dialog-width-md", "520px"),
                      ("--qc-dialog-width-lg", "640px"), ("--qc-dialog-width-xl", "800px")):
        assert re.search(re.escape(name) + r":\s*" + re.escape(val), tokens), \
            "tokens.css 应定义 %s: %s" % (name, val)


def _lum(hex_color):
    c = hex_color.lstrip("#")
    if len(c) == 3:
        c = "".join(ch * 2 for ch in c)
    r, g, b = (int(c[i:i + 2], 16) / 255 for i in (0, 2, 4))
    lin = lambda v: v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)


def test_dark_surface_three_tiers_distinguishable():
    """TC-656-01 (FR-656.1): dark-pro 表面三档 canvas < card < raised (相对亮度严格递增, 相邻可辨)"""
    themes = "\n".join(_read("css/" + f) for f in THEME_FILES)
    m = re.search(r"--qc-surface-canvas:\s*(#[0-9a-fA-F]{6})", themes)
    assert m, "缺暗色 --qc-surface-canvas"
    canvas = m.group(1)
    card_m = re.search(r"--qc-surface-card:\s*(#[0-9a-fA-F]{6})", themes)
    assert card_m, "缺暗色 --qc-surface-card"
    raised_m = re.search(r"--qc-surface-raised:\s*(#[0-9a-fA-F]{6})", themes)
    assert raised_m, "缺暗色 --qc-surface-raised"
    l_canvas, l_card, l_raised = (_lum(x) for x in (canvas, card_m.group(1), raised_m.group(1)))
    assert l_canvas < l_card < l_raised, \
        "暗色三档亮度应严格递增: canvas=%s(%f) card=%s(%f) raised=%s(%f)" % (
            canvas, l_canvas, card_m.group(1), l_card, raised_m.group(1), l_raised)
    assert (l_card - l_canvas) > 0.002 and (l_raised - l_card) > 0.002, \
        "相邻表面档亮度差应可辨 (>0.002)"


# ─── FR-655.7 / FR-657.1: CSS 资产拆域 + 旧类清零 ──────────────

def test_themes_css_split_and_linked():
    """TC-656-03 (FR-655.7): themes 拆 5 文件各 ≤1,200 行, index.html link 链按序挂载"""
    for fname in THEME_FILES:
        lines = _read("css/" + fname).count("\n") + 1
        assert lines <= 1200, "%s %d 行超上限 1200" % (fname, lines)
    idx = _read("index.html")
    pos = -1
    for fname in THEME_FILES:
        p = idx.find("/static/css/" + fname)
        assert p >= 0, "index.html 缺 %s link" % fname
        assert p > pos, "%s 应按拆分顺序挂载" % fname
        pos = p


def test_legacy_mobile_classes_removed():
    """TC-657-01 (FR-657.1): V5 旧类 .sidebar/.card-grid/.mobile-nav 规则清零
    (SFC 接管: qc-sidebar/qc-mobile-nav 承接, 旧 DOM 不再渲染)"""
    offenders = []
    for fname in os.listdir(os.path.join(FRONTEND, "css")):
        if not fname.endswith(".css"):
            continue
        css = _read("css/" + fname)
        for m in re.finditer(r"(?:^|\n)[ \t]*\.(sidebar|card-grid|mobile-nav)(?!-)[\s,.{#:]", css):
            offenders.append("%s: .%s" % (fname, m.group(1)))
    assert not offenders, "旧移动类规则应清零 (qc- 前缀承接): %s" % offenders


def test_mobile_nav_members_based():
    """TC-657-01: MobileNav 抽屉二级 members 化 + 7 业务域 Tab (6.5.4 FR-654 摊平)"""
    src = _read("src/components/MobileNav.vue")
    for key in ("'strategies'", "'calendar'", "'shortterm'", "'ai'", "'research'", "'ops'", "'system'"):
        assert key in src, "MobileNav Tab 应含业务域键 %s" % key
    assert "'workbench'" not in src, "MobileNav 不应再含合并期一级键 workbench"
    assert "menu.members" in src and "memberLabel" in src, \
        "抽屉二级应遍历 members 成员并经 core 兜底显示名"
