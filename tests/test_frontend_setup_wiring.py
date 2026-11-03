#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""前端「setup 作用域接线」门禁 (v7.3.1)

真实事故：v6.9.0 起，短线复盘页的逻辑域装配块（`const {...} = ...create({...})`）
被误插进 `renderLadderChart()` 的图表回调里（缩进仍是 6 空格，看起来没问题），
而 setup 顶层 `return { sentiment, ... }` 引用了这些变量 → setup 抛
`ReferenceError: sentiment is not defined` → **整个页面组件挂载失败 → 所有二级菜单空白**，
连续 3 个版本没人发现（没有组件挂载测试，浏览器也跑不了）。

本门禁做**花括号深度作用域分析**（不是缩进！）：
setup `return {...}` 里列出的每个标识符，必须有一个**声明深度 ≤ return 深度**的声明。
声明在更深的嵌套函数里 → 报错。

另附两个辅助检查：
- 模板引用的标识符必须在 setup return / 模板局部 / 白名单内（限本项目改动过的两个页）
- 导航里存在的短线子页必须有对应模板渲染块（否则点进去空白）
"""
import os
import re

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.path.join(ROOT, 'frontend', 'js')

PAGES = [
    'components/shortterm-page.js',
    'components/research-page.js',
    'components/strategies-page.js',
    'components/calendar-page.js',
    'components/ai-page.js',
    'components/system-page.js',
]

#: 模板里允许出现、无需 setup 返回的名字
TEMPLATE_GLOBALS = {
    'true', 'false', 'null', 'undefined', 'this', 'new', 'typeof', 'in', 'of', 'void',
    'Math', 'JSON', 'Number', 'String', 'Boolean', 'Array', 'Object', 'Date',
    'parseInt', 'parseFloat', 'isNaN', 'NaN', 'Infinity',
    '$event', '$refs', '$el', '$emit', '$props', '$attrs', '$slots', '$options',
    'item', 'index', 'row', 'scope', 'props', 'slot', 'key', 'value', 'name', 'type',
    'i', 'j', 'k', 'n', 'v', 's', 'd', 'p', 'e', 'x', 'c', 'a', 'b', 'g', 'f',
}

_STR_OR_COMMENT = re.compile(r"""
    '(?:\\.|[^'\\])*'      |
    "(?:\\.|[^"\\])*"      |
    `(?:\\.|[^`\\])*`      |
    /\*.*?\*/              |
    //[^\n]*
""", re.S | re.X)


def strip_noise(src):
    """去掉字符串与注释，避免括号/关键字误判（保留换行以维持行号无关的深度语义）。"""
    def _sub(m):
        return re.sub(r'[^\n]', ' ', m.group(0))
    return _STR_OR_COMMENT.sub(_sub, src or '')


def brace_depths(src):
    """返回 (字符偏移 → 深度) 的扫描函数所需的数据。深度从 0 开始。"""
    clean = strip_noise(src)
    depths = [0] * (len(clean) + 1)
    depth = 0
    for i, ch in enumerate(clean):
        if ch == '{':
            depth += 1
            depths[i] = depth
        elif ch == '}':
            depths[i] = depth
            depth -= 1
        else:
            depths[i] = depth
    return clean, depths


_IDENT = r'[A-Za-z_$][\w$]*'


def declarations_with_depth(src):
    """收集 {名字: 最小声明深度}。"""
    clean, depths = brace_depths(src)
    decl = {}

    def add(name, pos):
        d = depths[pos]
        if name not in decl or d < decl[name]:
            decl[name] = d

    for m in re.finditer(r'\b(?:const|let|var)\s+(%s)' % _IDENT, clean):
        add(m.group(1), m.start(1))
    for m in re.finditer(r'\bfunction\s+(%s)' % _IDENT, clean):
        add(m.group(1), m.start(1))
    # 解构声明：const { a, b: c } = ...
    for m in re.finditer(r'\b(?:const|let|var)\s*\{([^}]*)\}\s*=', clean, re.S):
        # 深度必须取「声明语句起点」而不是花括号内部（否则会多算一层）
        base = m.start()
        for part in m.group(1).split(','):
            part = part.strip()
            if not part:
                continue
            name = part.split(':')[-1].strip()
            mm = re.match(_IDENT + r'$', name)
            if mm:
                add(name, base)
    # 形参
    for m in re.finditer(r'function\s*\w*\s*\(([^)]*)\)', clean):
        for part in m.group(1).split(','):
            name = part.strip().split('=')[0].strip()
            if re.fullmatch(_IDENT, name or ''):
                add(name, m.start(1))
    return decl


def _match_brace(clean, open_pos):
    """从 `{` 的位置起配对，返回配对 `}` 的位置；失败返回 None。"""
    depth = 0
    for i in range(open_pos, len(clean)):
        if clean[i] == '{':
            depth += 1
        elif clean[i] == '}':
            depth -= 1
            if depth == 0:
                return i
    return None


def find_setup_return(src):
    """定位 setup 顶层 `return {...}`。

    策略：找出所有 `return {` 候选，用**花括号配对**判闭合，最后取
    「大括号里标识符最多」的那个 —— setup return 通常有几十个键，
    而回调里的 `return {...}`（图表配置、单行对象）只有极少几个。
    """
    clean = strip_noise(src)
    best, best_count = None, -1
    for m in re.finditer(r'\breturn\s*\{', clean):
        open_pos = clean.index('{', m.start())
        close_pos = _match_brace(clean, open_pos)
        if close_pos is None:
            continue
        names = returned_names(src[open_pos:close_pos + 1])
        if len(names) > best_count:
            best, best_count = (m.start(), close_pos + 1), len(names)
    if best is None:
        return None, None
    return best[0], best[1]


def returned_names(block):
    names = set()
    for line in block.split('\n')[1:]:
        line = line.strip()
        if not line or line.startswith('//') or line.startswith('/*'):
            continue
        for part in line.split(','):
            part = part.strip()
            if not part:
                continue
            if ':' in part:
                names.add(part.split(':')[0].strip())
            elif re.fullmatch(_IDENT, part):
                names.add(part)
    return names


def check_scope(src):
    """返回 (missing, return_depth, decl_depths)。missing = 声明深度过深或未声明的名字。"""
    start, end = find_setup_return(src)
    if start is None:
        return None
    clean_src, depths = brace_depths(src)
    ret_depth = depths[clean_src.find('return', start)]
    names = returned_names(src[start:end])
    decl = declarations_with_depth(src)
    missing = sorted(n for n in names
                     if n not in decl or decl[n] > ret_depth)
    return {'missing': missing, 'return_depth': ret_depth,
            'declared': len(decl), 'returned': len(names)}


# ==================== A. setup 作用域 ====================

@pytest.mark.parametrize('page', PAGES)
def test_setup_return_names_declared_at_setup_scope(page):
    path = os.path.join(JS, page)
    if not os.path.exists(path):
        pytest.skip('页组件不存在: %s' % page)
    src = open(path, encoding='utf-8').read()
    res = check_scope(src)
    if res is None:
        pytest.skip('该页没有约定的 setup return {...} 形态')
    assert not res['missing'], (
        '%s: setup return 引用了「未声明」或「声明在更深嵌套函数内」的标识符 → '
        '运行到 return 必然 ReferenceError，整页空白: %r\n'
        '（历史事故：v6.9 把逻辑域装配块误插进 renderLadderChart 的图表回调）'
        % (page, res['missing']))


def test_checker_catches_the_historical_bug():
    """门禁自检：喂给它事故当时的形态，必须能报出来"""
    broken = '''
(function () {
  const currentPage = 1;
  function chart() {
    const render = function () {
      const _x = make({});
      const { alpha, beta } = _x;
      return { series: [] };
    };
    return render;
  }
  return {
    currentPage, alpha, beta,
  };
})();
'''
    res = check_scope(broken)
    assert res is not None
    assert set(res['missing']) == {'alpha', 'beta'}, res

    fixed = '''
(function () {
  const currentPage = 1;
  const _x = make({});
  const { alpha, beta } = _x;
  return {
    currentPage, alpha, beta,
  };
})();
'''
    assert check_scope(fixed)['missing'] == []


# ==================== B. 模板标识符（限本项目改动过的页） ====================

def _template_of(page_rel):
    base = os.path.splitext(page_rel)[0]
    directory = os.path.join(JS, os.path.dirname(base),
                             os.path.basename(base).replace('-page', ''))
    texts = []
    for suf in ('view-part1.js', 'view-part2.js', 'view-part3.js'):
        p = os.path.join(directory, suf)
        if not os.path.exists(p):
            continue
        src = open(p, encoding='utf-8').read()
        i, j = src.find('`'), src.rfind('`')
        if i < 0 or j <= i:
            continue
        texts.append(src[i + 1:j])
    return ''.join(texts)


def _template_locals(tpl):
    names = set()
    for m in re.finditer(r'v-for="\(?([^)"]*?)\)?\s+in\s', tpl):
        for n in re.split(r'[,\s]+', m.group(1).strip()):
            if n:
                names.add(n)
    for m in re.finditer(r'#default="([\w$]+)"', tpl):
        names.add(m.group(1))
    for m in re.finditer(r'(?:#default|v-slot):?[\w-]*="\{([^}]*)\}"', tpl):
        for n in re.split(r'[,\s]+', m.group(1)):
            n = n.strip()
            if n:
                names.add(n.split(':')[-1].strip())
    return names


def _template_idents(tpl):
    """模板里引用的「顶层标识符」（排除对象字面量的键）。"""
    exprs = re.findall(r'\{\{(.*?)\}\}', tpl, re.S)
    exprs += re.findall(r'(?:v-if|v-else-if|v-show|:[\w.-]+|@[\w.-]+)="([^"]*)"', tpl)
    ids = set()
    for e in exprs:
        cleaned = strip_noise(e)
        cleaned = re.sub(r'([{,]\s*)' + _IDENT + r'(\s*:)', r'\1\2', cleaned)
        for m in re.finditer(r'(?<![.\w$])(' + _IDENT + r')', cleaned):
            ids.add(m.group(1))
    return ids


def _qcstate_names():
    """app-logic 里 qcState 暴露的名字（页面 setup return 用 `...state` 展开的那批）。"""
    path = os.path.join(JS, 'app-logic.js')
    if not os.path.exists(path):
        return set()
    src = open(path, encoding='utf-8').read()
    m = re.search(r'const qcState = \{(.*?)\n\s*\};', src, re.S)
    if not m:
        return set()
    names = set()
    for line in m.group(1).split('\n'):
        line = line.strip().rstrip(',')
        if not line or line.startswith('//') or line.startswith('...'):
            continue
        for part in line.split(','):
            part = part.strip()
            if not part or part.startswith('...'):
                continue
            names.add(part.split(':')[0].strip())
    return names


@pytest.mark.parametrize('page', ['components/shortterm-page.js',
                                  'components/research-page.js'])
def test_template_idents_exposed_by_setup(page):
    src = open(os.path.join(JS, page), encoding='utf-8').read()
    start, end = find_setup_return(src)
    assert start is not None, '%s 未找到 setup return' % page
    exposed = returned_names(src[start:end])
    tpl = _template_of(page)
    assert tpl, '%s 未找到模板片段' % page
    allowed = exposed | _template_locals(tpl) | TEMPLATE_GLOBALS | _qcstate_names()
    missing = sorted(_template_idents(tpl) - allowed)
    assert not missing, '%s 模板引用了 setup 未暴露的标识符（表现为空白/无反应）: %r' % (page, missing)


# ==================== C. 短线导航子页都有渲染块 ====================

def test_shortterm_nav_subpages_all_rendered():
    nav = open(os.path.join(JS, 'nav-merge-core.js'), encoding='utf-8').read()
    m = re.search(r"key: 'shortterm'.*?members: \[(.*?)\n\s*\],", nav, re.S)
    assert m, '未找到 shortterm 菜单定义'
    subs = re.findall(r"sub: '([\w-]+)'", m.group(1))
    assert subs, '未解析到短线子页'

    rendered = set(re.findall(r"currentSubPage === '([\w-]+)'",
                              _template_of('components/shortterm-page.js')))
    rendered |= set(re.findall(r"currentSubPage === '([\w-]+)'",
                               _template_of('components/research-page.js')))
    missing = [s for s in subs if s not in rendered]
    assert not missing, '这些短线子页没有模板渲染块（点进去空白）: %r' % missing
