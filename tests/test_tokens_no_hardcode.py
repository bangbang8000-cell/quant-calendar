"""
设计令牌落地测试 (TC-11.9, FR-3.11.6) — 硬编码色值消除

对「模板 + CSS 使用区」执行 grep 校验:
- #hex / rgba(数值) 硬编码色值出现次数为 0（白名单除外）

白名单（架构允许的固定值, 非硬编码遗漏）:
1. CSS 令牌定义行  --token: 值        —— tokens.css 为唯一原始色值来源
2. [data-theme] 主题块内部            —— 每主题调色板定义（themes.css）
3. rgba(var(--token), X)              —— 令牌派生半透明色
4. /* qc-allow-hardcode: ... */ 标注行 —— 显式声明的运行时兜底字面量

已排除的运行时模块（非模板/CSS 表面）:
  frontend/js/charts.js / echarts-theme.js / merrill.js / themes.js / watchlist.js / app-logic.js
  —— ECharts canvas 无法解析 CSS var()，这些模块以 getCSSVar()||'#hex' 运行时解析，
     #hex 为必要运行时兜底，不属于模板/CSS 静态硬编码。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

HEX_RE = re.compile(r'#[0-9a-fA-F]{3,8}\b')
NUM_RGBA_RE = re.compile(r'rgba?\(\s*\d')
TOKEN_RGBA_RE = re.compile(r'rgba?\(\s*var\(--')
TOKEN_DEF_RE = re.compile(r'^--[a-zA-Z0-9-]+\s*:')


def _template_files():
    """模板表面: 组件模板 JS（components/ 下全部）+ 入口 HTML"""
    files = []
    comp = os.path.join(BASE, 'frontend', 'js', 'components')
    for root, _, names in os.walk(comp):
        for n in sorted(names):
            if n.endswith('.js'):
                files.append(os.path.join(root, n))
    for rel in ('frontend/index.html', 'index.html'):
        p = os.path.join(BASE, rel)
        if os.path.exists(p):
            files.append(p)
    return files


def _css_files():
    """CSS 表面: frontend/css/*.css"""
    css = os.path.join(BASE, 'frontend', 'css')
    return sorted(os.path.join(css, n) for n in os.listdir(css) if n.endswith('.css'))


def _has_literal(s):
    """行内是否含硬编码色值（令牌派生 rgba(var(--...) 除外）"""
    if TOKEN_RGBA_RE.search(s):
        return False
    return bool(HEX_RE.search(s) or NUM_RGBA_RE.search(s))


def _scan_css(path):
    """CSS 使用区扫描: 跳过令牌定义 / [data-theme] 主题块 / qc-allow-hardcode 标注"""
    bad = []
    sel = ''
    for ln, raw in enumerate(open(path, encoding='utf-8'), 1):
        s = re.sub(r'/\*.*?\*/', '', raw).strip()
        if not s:
            continue
        if TOKEN_DEF_RE.match(s) or 'qc-allow-hardcode' in s:
            continue
        if _has_literal(s):
            if 'data-theme' in sel:
                continue  # 主题块内 → 白名单
            bad.append((ln, raw.strip()))
        elif s.endswith('{'):
            sel = s
    return bad


def _scan_template(path):
    """模板表面扫描"""
    bad = []
    for ln, raw in enumerate(open(path, encoding='utf-8'), 1):
        s = raw.strip()
        if not s or 'qc-allow-hardcode' in s:
            continue
        if _has_literal(s):
            bad.append((ln, s))
    return bad


def test_template_surface_no_hardcoded_colors():
    """模板表面无硬编码色值"""
    violations = []
    for path in _template_files():
        violations += [(path, ln, line) for ln, line in _scan_template(path)]
    assert not violations, '模板表面存在硬编码色值:\n' + '\n'.join(
        f'  {p}:{ln}  {s[:100]}' for p, ln, s in violations)


def test_css_usage_surface_no_hardcoded_colors():
    """CSS 使用区无硬编码色值（令牌定义/主题块/令牌派生/runtime 标注除外）"""
    violations = []
    for path in _css_files():
        violations += [(path, ln, line) for ln, line in _scan_css(path)]
    assert not violations, 'CSS 使用区存在硬编码色值:\n' + '\n'.join(
        f'  {p}:{ln}  {s[:100]}' for p, ln, s in violations)
