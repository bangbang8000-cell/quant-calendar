# -*- coding: utf-8 -*-
"""
6.5.8 (批次 C): 字体栈可加载性门禁

背景 (EVAL-VISUAL-TOKENS-6.5.5.md / C1 勘误):
- Inter 已通过 @fontsource 自托管 (frontend/src/main.js 的 import), 构建产物 dist/assets/*.css
  内含 @font-face + font-display: swap → 不需要再引入外部字体;
- 真实问题是「字体栈里声明了不可加载的字族」(SF Pro Display / Hiragino Sans GB 等只在
  特定 macOS 版本存在, Windows/Linux 上静默落到下一档), 以及中文回退序不固定导致
  Windows(雅黑) 与 macOS(苹方) 的汉字字宽/换行位置不同。

断言:
F1 字体栈中的每个具名字族要么存在 @font-face, 要么在本机系统字体白名单内
F2 Inter 必须有 @font-face 且 font-display: swap
F3 index.html 不得引入外部字体 (无 preconnect 需求)
F4 中文回退序同时包含 PingFang SC 与 Microsoft YaHei
"""
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

FRONTEND = g.FRONTEND
DIST_CSS = os.path.join(FRONTEND, "dist", "assets", "*.css")
TOKENS = os.path.join(FRONTEND, "css", "tokens.css")

# 系统字体白名单: 各平台预置, 无需 @font-face
SYSTEM_FAMILIES = {
    "-apple-system", "blinkmacsystemfont", "system-ui", "sans-serif", "serif",
    "monospace", "ui-sans-serif", "ui-monospace",
    "pingfang sc", "microsoft yahei", "noto sans sc", "hiragino sans gb",
}

STACK_TOKENS = ("--qc-font-sans", "--qc-font-display")
CJK_FALLBACKS = ("pingfang sc", "microsoft yahei")


def _families(stack):
    """从字体栈值中拆出具名字族 (去掉引号/通用族)。"""
    raw = re.sub(r"var\([^)]*\)", "", stack)
    out = []
    for part in raw.split(","):
        name = part.strip().strip("'\"").strip()
        if not name:
            continue
        if name.lower() in ("sans-serif", "serif", "monospace", "system-ui", "ui-sans-serif"):
            continue
        out.append(name)
    return out


def _stack_values():
    defs = g.css_defs()["root"]
    return {t: defs.get(t, "") for t in STACK_TOKENS if defs.get(t)}


def _font_face_families():
    """收集 @font-face 声明过的字族 (dist 构建产物 + 源 CSS)。"""
    names = set()
    files = glob.glob(DIST_CSS) + glob.glob(os.path.join(FRONTEND, "css", "*.css"))
    for path in files:
        src = open(path, encoding="utf-8", errors="ignore").read()
        for m in re.finditer(r"@font-face\s*\{([^}]*)\}", src):
            for fam in re.findall(r"font-family\s*:\s*([^;]+);", m.group(1)):
                names.add(fam.strip().strip("'\"").lower())
    return names


def _imported_font_packages():
    """收集 frontend/src/** 中的 @fontsource 导入。"""
    out = set()
    for path in glob.glob(os.path.join(FRONTEND, "src", "**", "*.js"), recursive=True):
        src = open(path, encoding="utf-8", errors="ignore").read()
        out.update(re.findall(r"@fontsource/([a-z0-9-]+)/", src))
    return out


def test_f1_stack_families_loadable():
    stacks = _stack_values()
    assert stacks, "未找到字体栈令牌 (--qc-font-sans / --qc-font-display)"
    faces = _font_face_families()
    pkgs = _imported_font_packages()
    bad = []
    for token, stack in stacks.items():
        for fam in _families(stack):
            low = fam.lower()
            if low in SYSTEM_FAMILIES or low in faces or low.replace(" ", "") in pkgs:
                continue
            bad.append("%s → %s" % (token, fam))
    assert not bad, "字体栈声明了不可加载的字族 (无 @font-face 且非系统字体): %s" % bad


def test_f2_inter_self_hosted_with_swap():
    assert "inter" in _imported_font_packages() or "inter" in _font_face_families(), \
        "Inter 必须由 @fontsource 自托管 (frontend/src/main.js 导入)"
    dist = glob.glob(DIST_CSS)
    assert dist, "缺少构建产物 dist/assets/*.css, 无法校验 @font-face"
    ok = False
    for path in dist:
        src = open(path, encoding="utf-8", errors="ignore").read()
        for m in re.finditer(r"@font-face\s*\{([^}]*)\}", src):
            block = m.group(1)
            if "inter" in block.lower() and "font-display" in block and "swap" in block:
                ok = True
    assert ok, "构建产物中 Inter 的 @font-face 必须带 font-display: swap"


def test_f3_no_external_font_links():
    html = open(os.path.join(FRONTEND, "index.html"), encoding="utf-8").read()
    external = re.findall(r"https?://[^\"']*(?:fonts\.|font)", html)
    assert not external, "index.html 不得引入外部字体资源: %s" % external


def test_f4_cjk_fallback_pair():
    stacks = _stack_values()
    for token in ("--qc-font-sans", "--qc-font-display"):
        value = stacks.get(token)
        if not value:
            continue
        lows = [f.lower() for f in _families(value)]
        for need in CJK_FALLBACKS:
            assert need in lows, "%s 的中文回退序必须包含 %s" % (token, need)
        assert lows.index("pingfang sc") < lows.index("microsoft yahei"), \
            "%s 的中文回退序应为 PingFang SC → Microsoft YaHei (macOS → Windows)" % token
