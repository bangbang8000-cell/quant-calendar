# -*- coding: utf-8 -*-
"""
V6.10 (配色专项·D): 配色门禁公共设施

门禁的核心原则: **校验运行期真实生成的令牌**, 而不是 CSS 里的静态兜底值。
- 令牌来源 A: frontend/js/themes.js 通过 applyTheme() 写入 <html> 的内联变量 (运行期唯一权威)
              —— 由 tests/color_probe.js 在 Node 中以最小 DOM shim 执行后输出 JSON
- 令牌来源 B: frontend/css/tokens.css 与 themes.css 中的 :root / [data-theme="dark-pro"] 定义
              (明暗兜底与语义别名, 例如 --state-success-text: var(--badge-success-text))
最终值 = CSS 兜底 ← 运行期内联覆盖 (与浏览器级联一致), 并递归解析 var() 引用。
"""
import json
import os
import re
import shutil
import subprocess
import colorsys
import functools

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
PROBE = os.path.join(BASE, "tests", "color_probe.js")

MODES = ("light", "dark")
HUES = (45, 220, 0, 140, 270, 320, -1)          # 6 品牌色相 + 中性无色相
CONFIGS = tuple((m, h) for m in MODES for h in HUES)
CONFIG_NAMES = {"%s:%s" % (m, h): "%s-%s" % (m, h) for m, h in CONFIGS}


# ───────────────────────── 运行期令牌探针 ─────────────────────────

@functools.lru_cache(maxsize=1)
def runtime_tokens():
    """执行 tests/color_probe.js, 返回 {'light:45': {token: value}, ...}。"""
    node = shutil.which("node")
    if not node:
        import pytest
        pytest.skip("未找到 node, 跳过运行期配色门禁 (CI 已通过 actions/setup-node 安装)")
    proc = subprocess.run([node, PROBE], capture_output=True, text=True, timeout=120)
    if proc.returncode != 0:
        raise AssertionError("color_probe.js 执行失败: %s" % (proc.stderr[:500],))
    return json.loads(proc.stdout)


# ───────────────────────── CSS 兜底解析 ─────────────────────────

def _css_var_defs(path, selector_re):
    """提取指定选择器块内的 --token: value; 定义 (仅顶层块)。"""
    src = open(path, encoding="utf-8").read()
    out = {}
    for m in re.finditer(selector_re + r"\s*\{", src):
        i = m.end()
        depth = 1
        while i < len(src) and depth:
            if src[i] == "{":
                depth += 1
            elif src[i] == "}":
                depth -= 1
            i += 1
        body = src[m.end():i - 1]
        for name, val in re.findall(r"(?<![\w-])(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);", body):
            out.setdefault(name, val.strip())
    return out


@functools.lru_cache(maxsize=1)
def css_load_order():
    """按 index.html 的 <link> 顺序返回 CSS 文件路径 — 级联优先级取决于加载顺序。"""
    html = open(os.path.join(FRONTEND, "index.html"), encoding="utf-8").read()
    paths = re.findall(r'href="/static/(css/[a-z0-9_.-]+\.css)', html)
    out = [os.path.join(FRONTEND, p) for p in paths]
    return [p for p in out if os.path.exists(p)]


@functools.lru_cache(maxsize=1)
def css_defs():
    """按加载顺序合并 :root 与两个主题块 (data-theme=gold|dark-pro) —— 与运行期属性一致。"""
    root, gold, dark = {}, {}, {}
    for p in css_load_order():
        root.update(_css_var_defs(p, r":root"))
        gold.update(_css_var_defs(p, r'\[data-theme="gold"\]'))
        dark.update(_css_var_defs(p, r'\[data-theme="dark-pro"\]'))
    return {"root": root, "gold": gold, "dark": dark}


# ───────────────────────── 解析与对比度 ─────────────────────────

_HEX = re.compile(r"^#([0-9a-fA-F]{3,8})$")
_RGB = re.compile(r"^rgba?\(([^)]+)\)$")
_HSL = re.compile(r"^hsla?\(([^)]+)\)$")
_VAR = re.compile(r"var\(\s*(--[a-zA-Z0-9-]+)\s*(?:,\s*([^)]*))?\)")


def parse_color(value):
    """解析 hex/rgb/rgba/hsl/hsla → (r, g, b, a); 不可解析返回 None。"""
    if value is None:
        return None
    c = str(value).strip()
    m = _HEX.match(c)
    if m:
        h = m.group(1)
        if len(h) == 3:
            h = "".join(x * 2 for x in h)
        if len(h) == 4:
            h = "".join(x * 2 for x in h)
        if len(h) == 6:
            return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), 1.0)
        if len(h) == 8:
            return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), int(h[6:8], 16) / 255.0)
        return None
    m = _RGB.match(c)
    if m:
        parts = [p.strip() for p in m.group(1).replace("/", " ").replace(",", " ").split()]
        vals = []
        for p in parts:
            vals.append(float(p[:-1]) / 100.0 if p.endswith("%") else float(p))
        if len(vals) == 3:
            return (vals[0], vals[1], vals[2], 1.0)
        if len(vals) == 4:
            return (vals[0], vals[1], vals[2], vals[3])
        return None
    m = _HSL.match(c)
    if m:
        parts = [p for p in re.split(r"[,\s/]+", m.group(1).strip()) if p]
        if len(parts) < 3:
            return None
        h = float(re.sub(r"(deg|turn|rad)$", "", parts[0]))
        s = float(parts[1].rstrip("%")) / 100.0
        l = float(parts[2].rstrip("%")) / 100.0
        a = float(parts[3]) if len(parts) > 3 else 1.0
        r, g, b = colorsys.hls_to_rgb((h % 360) / 360.0, l, s)
        return (r * 255, g * 255, b * 255, a)
    return None


def luminance(rgb):
    def f(c):
        c = c / 255.0
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2])


def contrast(a, b):
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def blend(fg, bg):
    """把带 alpha 的前景合成到不透明背景上。"""
    if fg[3] >= 0.999:
        return fg[:3]
    return tuple(fg[i] * fg[3] + bg[i] * (1 - fg[3]) for i in range(3))


# ───────────────────────── 级联解析 ─────────────────────────

def _resolve_all(merged):
    """解析字典中所有 var() 引用 (含 var(--x, fallback) 与循环引用保护)。"""

    def resolve_one(value, chain):
        if not isinstance(value, str):
            return value

        def rep(m):
            name, fb = m.group(1), m.group(2)
            if name in chain:                      # 循环引用 → 用 fallback
                return (fb or "").strip() or "transparent"
            nxt = merged.get(name)
            if nxt is None:
                return (fb or "").strip() or "transparent"
            return resolve_one(nxt, chain | {name})

        out, prev = value, None
        for _ in range(12):
            if prev == out and prev is not None:
                break
            prev = out
            out = _VAR.sub(rep, out)
        return out

    return {k: resolve_one(v, frozenset([k])) for k, v in merged.items()}


@functools.lru_cache(maxsize=None)
def resolved(mode, hue):
    """返回该 (mode, hue) 配置下已解析 var() 的令牌字典。"""
    rt = runtime_tokens()
    key = "%s:%s" % (mode, hue)
    if key not in rt:
        raise AssertionError("color_probe.js 缺少配置 %s" % key)
    css = css_defs()
    merged = {}
    merged.update(css["root"])
    merged.update(css["gold"] if mode == "light" else css["dark"])
    merged.update(rt[key])                      # 运行期内联变量优先级最高
    return _resolve_all(merged)


def color(mode, hue, token):
    """取某配置下令牌的解析后颜色 (解析失败返回 None)。"""
    return parse_color(resolved(mode, hue).get(token))


def pair(mode, hue, fg_token, bg_token, bg_base_token=None):
    """fg 与 bg 的对比度; bg 带 alpha 时可先叠加到 bg_base_token 上。"""
    fg = color(mode, hue, fg_token)
    bg = color(mode, hue, bg_token)
    if fg is None or bg is None:
        return None
    base = [255, 255, 255]
    if bg[3] < 0.999:
        b = color(mode, hue, bg_base_token or "--surface-card")
        if b is not None:
            base = b[:3]
        bg = tuple(blend(bg, base)) + (1.0,)
    return contrast(blend(fg, bg[:3]), bg[:3])
