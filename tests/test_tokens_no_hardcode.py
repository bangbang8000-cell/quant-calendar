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

# V4.8.1 (DEV-PLAN 2.1): dark-pro 主题块内「使用处」硬编码审计
# 原白名单对整个 [data-theme] 块豁免; 本测试收窄: 令牌定义行(--xxx:)与
# var(--token, ...) 派生/fallback 行豁免, 其余 #hex / rgba(数值) 必须令牌化
DARKPRO_SEL_RE = re.compile(r'\[data-theme="dark-pro"\]')
THEME_USE_IGNORE_RE = re.compile(r'^\s*--[a-zA-Z0-9-]+\s*:|var\(--')


def _scan_darkpro_usage(path):
    """按括号深度跟踪所有 [data-theme="dark-pro"] 规则块, 扫描使用处硬编码"""
    lines = open(path, encoding='utf-8').read().split('\n')
    bad, depth, in_dark = [], 0, False
    for ln, raw in enumerate(lines, 1):
        s = re.sub(r'/\*.*?\*/', '', raw).strip()
        if not s:
            continue
        # 进入 dark-pro 规则块: 选择器行含 [data-theme="dark-pro"] 且本行开括号
        if DARKPRO_SEL_RE.search(raw) and '{' in raw:
            in_dark = True
            depth += raw.count('{') - raw.count('}')
        elif in_dark:
            depth += raw.count('{') - raw.count('}')
        if in_dark and depth <= 0 and '}' in raw:
            # 本行已闭合(如单行规则), 先做使用处判断再退出
            pass
        if in_dark:
            if THEME_USE_IGNORE_RE.search(s):
                pass
            elif _has_literal(s):
                bad.append((ln, raw.strip()))
        if in_dark and depth <= 0 and '}' in raw:
            in_dark = False
            depth = 0
    return bad


def test_darkpro_usage_no_hardcoded_colors():
    """dark-pro 主题块使用区无硬编码色值（V4.8.1 D1 审计）"""
    violations = []
    for path in _css_files():
        violations += [(path, ln, line) for ln, line in _scan_darkpro_usage(path)]
    assert not violations, 'dark-pro 使用区存在硬编码色值:\n' + '\n'.join(
        f'  {p}:{ln}  {s[:100]}' for p, ln, s in violations)
