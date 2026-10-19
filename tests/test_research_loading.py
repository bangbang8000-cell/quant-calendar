# -*- coding: utf-8 -*-
"""v6.4 (FR-6.4.1): 研究概览永久骨架屏 —— 加载器序号隔离与加载态复位契约。

事故
----
进入「策略研究 → 研究概览」后，25 秒仍有 9 个骨架屏节点，4 个策略全部不可选。
三个接口全部 200、耗时 7/13/14ms —— 后端没问题。

根因
----
全页共用 `const _seq = { n: 0 }`，被 13 个加载器共享：

    const seq = ++_seq.n;          // 任一加载器递增
    ...
    if (seq === _seq.n) loading = false;   // 别人递增后恒不成立 → 永不复位

连带的第二个 bug：`if (seq !== _seq.n) return;` 会把"已返回但序号过期"的数据丢掉，
即同页多数据源互相踩。"最后一次请求胜出"只应作用于同一数据源。

说明
----
前端加载态属浏览器运行时行为，最终以 E2E（TEST-PLAN E-01 / E-02）判定。
本文件锁的是**源码结构不变量**：一旦有人把序号改回共享、或把复位重新挂到
序号守卫上，立刻失败 —— 这正是事故代码的形态。
"""
import os
import re

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, 'frontend')

# 每个文件里必须各自持有独立计数器的加载器
LOADERS = {
    'js/components/research-page.js': [
        'loadStrategies', 'loadRuns', 'loadVariants', 'loadCustoms', 'loadBtHistory',
    ],
    'js/components/research/logic-factor.js': [
        'runFactorIc', 'runFactorLayer', 'runFactorDetail',
    ],
    'js/components/research/logic-history.js': [
        'loadResearchHistory', 'exportResearchHistory', 'runResearchCompare',
    ],
    'js/components/research/logic-market-review.js': [
        'loadMarketReviews', 'loadMarketReviewDetail',
    ],
}


def _read(rel):
    with open(os.path.join(FRONTEND, *rel.split('/')), encoding='utf-8') as f:
        return f.read()


def _strip_comments(src):
    """去掉注释，避免把说明文字里的旧写法误判为代码。"""
    src = re.sub(r'/\*.*?\*/', '', src, flags=re.S)
    return re.sub(r'(?m)^\s*//.*$', '', src)


def _func_body(src, name):
    """截取 `async function <name>(` 到下一个函数声明之间的源码。"""
    src = _strip_comments(src)
    m = re.search(r'\n\s*(?:async\s+)?function\s+' + re.escape(name) + r'\s*\(', src)
    assert m, '未找到函数 %s' % name
    start = m.start()
    nxt = re.search(r'\n\s*(?:async\s+)?function\s+\w+\s*\(', src[m.end():])
    end = m.end() + nxt.start() if nxt else len(src)
    return src[start:end]


@pytest.mark.parametrize('rel,loaders', sorted(LOADERS.items()))
def test_each_loader_owns_its_counter(rel, loaders):
    """U-102（源码不变量）：每个加载器都必须有自己的 seqOf(key)。"""
    src = _strip_comments(_read(rel))
    assert '_seq.n' not in src, '%s 仍引用共享计数器 _seq.n' % rel
    assert '_seqPool' not in src or rel.endswith('research-page.js'), \
        '%s 不应持有页面级共享池' % rel
    for fn in loaders:
        body = _func_body(src, fn)
        assert 'seqOf(' in body, '%s 必须使用自己的 seqOf(key) 计数器' % fn


def test_page_provides_seq_factory():
    """seqOf 工厂存在，且按 key 复用同一计数器（同数据源仍能"后发胜出"）。"""
    src = _strip_comments(_read('js/components/research-page.js'))
    assert 'function seqOf(' in src
    assert "const _seqPool = Object.create(null)" in src
    assert "if (!_seqPool[key]) _seqPool[key] = { n: 0 }" in src
    assert 'const _seq = { n: 0 }' not in src, '不得再共享单一计数器'


@pytest.mark.parametrize('rel,loaders', sorted(LOADERS.items()))
def test_loading_reset_is_unconditional(rel, loaders):
    """U-102：加载态复位不得挂在 `if (seq === …)` 上。

    事故代码正是 `finally { if (seq === _seq.n) loading = false }`。
    """
    src = _strip_comments(_read(rel))
    bad = re.findall(r'finally\s*\{[^}]*if\s*\(\s*seq\s*===\s*[^)]*\)\s*\w+\.value\s*=\s*false', src)
    assert not bad, '%s 的 finally 仍在用序号守卫加载态复位: %s' % (rel, bad)


def test_strategies_has_timeout_and_error_state():
    """U-104：15s 超时兜底 + 显式错误态（不得停留在骨架屏）。"""
    src = _strip_comments(_read('js/components/research-page.js'))
    assert 'LOADER_TIMEOUT_MS = 15000' in src, '应有 15s 超时兜底'
    assert 'fetchJsonWithTimeout' in src
    assert 'AbortController' in src
    body = _func_body(src, 'loadStrategies')
    assert 'fetchJsonWithTimeout' in body, 'loadStrategies 必须走带超时的 fetch'
    assert 'strategiesError.value = true' in body, '失败必须落显式错误态'
    assert 'strategiesLoading.value = false' in body, '加载态必须复位'
    assert '请求超时' in body, '超时文案应可区分于普通失败'
    # 错误态在模板中有重试入口
    tpl = _strip_comments(_read('js/components/research/view-part1.js'))
    assert 'strategiesError' in tpl and '@retry="loadStrategies"' in tpl


def test_no_data_write_from_stale_request():
    """数据写入仍受"本加载器最新请求"保护（序号语义未被一并删掉）。"""
    src = _strip_comments(_read('js/components/research-page.js'))
    body = _func_body(src, 'loadStrategies')
    assert re.search(r'if\s*\(\s*seq\s*!==\s*_s\.n\s*\)\s*return', body), \
        '过期响应不得覆盖新数据'


def test_research_fragments_wired_with_seqof():
    """装配处必须传 seqOf，而不是旧的 seq 持有者对象。"""
    src = _strip_comments(_read('js/components/research-page.js'))
    assert src.count('seqOf: seqOf') >= 3, '三个逻辑域均应注入 seqOf'
    assert 'seq: _seq' not in src
