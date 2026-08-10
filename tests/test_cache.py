"""
数据缓存与静默刷新核心逻辑测试 (v3.11 / FR-3.11.4, TC-11.7)

缓存/静默刷新逻辑位于 frontend/js/core.js（UMD 导出，v1.11 新增纯函数段），
测试通过 subprocess 调 node require 该模块并断言 JSON 输出。
覆盖：
- TC-11.7 同参数请求命中缓存；后台刷新后数据更新且触发提示
"""
import json
import os
import shutil
import subprocess

import pytest

FRONTEND_JS = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    'frontend', 'js', 'core.js',
)

NEEDS_NODE = pytest.mark.skipif(shutil.which('node') is None, reason='node 不可用')


def _run_js(script: str):
    """在 node 中 require core 模块并执行脚本，返回 JSON 结果（支持 async 脚本）"""
    code = (
        "const core = require(process.argv[1]);\n"
        "Promise.resolve((function(){\n" + script + "\n})())\n"
        "  .then(o => process.stdout.write(JSON.stringify(o)))\n"
        "  .catch(e => { process.stderr.write(String(e && e.stack || e)); process.exit(1); });\n"
    )
    proc = subprocess.run(
        ['node', '-e', code, FRONTEND_JS],
        capture_output=True, text=True, timeout=20,
    )
    assert proc.returncode == 0, f'node 执行失败: {proc.stderr}'
    return json.loads(proc.stdout)


def _sleep_blocking(ms: int):
    """node 内同步阻塞等待（Atomics.wait），用于驱动 TTL 过期"""
    return f"Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, {ms});"


# ─── 缓存键生成 ───────────────────────────────────

@NEEDS_NODE
def test_cache_make_key_deterministic():
    """同 method+url+params 生成相同键；与传参顺序无关；method/url/params 变化则键变化"""
    out = _run_js("""
        return {
            k1: core.makeCacheKey('get', '/api/view/day/2026-08-11', {status: 'all'}),
            k2: core.makeCacheKey('GET', '/api/view/day/2026-08-11', {status: 'all'}),
            k3: core.makeCacheKey('GET', '/api/view/day/2026-08-11', {status: 'all', x: 1}),
            k4: core.makeCacheKey('GET', '/api/view/day/2026-08-11', {x: 1, status: 'all'}),
            k5: core.makeCacheKey('POST', '/api/view/day/2026-08-11', {status: 'all'}),
            k6: core.makeCacheKey('GET', '/api/view/week/2026-08-11', {status: 'all'}),
            k7: core.makeCacheKey('GET', '/api/view/day/2026-08-11', {status: 'current'}),
        };
    """)
    assert out['k1'] == out['k2']                 # method 大小写不敏感
    assert out['k3'] != out['k1']                 # params 增项 → 键变
    assert out['k3'] == out['k4']                 # params 顺序无关
    assert out['k5'] != out['k1']                 # method 不同 → 键变
    assert out['k6'] != out['k1']                 # url 不同 → 键变
    assert out['k7'] != out['k1']                 # params 值不同 → 键变


# ─── 缓存桶（TTL 生命周期） ─────────────────────

@NEEDS_NODE
def test_cache_store_ttl_hit_and_expire():
    """TTL 内命中；过期后 miss 并清理"""
    out = _run_js("""
        const c = core.createTtlCache(100);
        c.set('k', { stocks: [1] });
        const before = c.get('k');          // 未过期 → 命中
        const sizeBefore = c.size();
        """ + _sleep_blocking(150) + """
        const after = c.get('k');           // 已过期 → miss
        return { hit: before, sizeBefore, after: after === undefined ? null : after, sizeAfter: c.size() };
    """)
    assert out['hit'] == {'stocks': [1]}
    assert out['sizeBefore'] == 1
    assert out['after'] is None               # 过期 miss
    assert out['sizeAfter'] == 0              # 已清理


@NEEDS_NODE
def test_cache_store_default_ttl():
    """未显式传 ttl 时使用默认 TTL；显式传 0 则立即失效"""
    out = _run_js("""
        const c = core.createTtlCache(60000);
        c.set('a', 1);                        // 用默认 TTL
        c.set('b', 2, 0);                     // 0 → 立即过期
        const b = c.get('b');
        return { defTtl: c.defaultTtl, a: c.get('a'), b: b === undefined ? null : b, size: c.size() };
    """)
    assert out['defTtl'] == 60000
    assert out['a'] == 1
    assert out['b'] is None                   # ttl=0 立即失效
    assert out['size'] == 1                   # b 已被 get 清理


@NEEDS_NODE
def test_cache_store_delete_and_clear():
    """delete 单项；clear 清空"""
    out = _run_js("""
        const c = core.createTtlCache(60000);
        c.set('a', 1); c.set('b', 2);
        c.delete('a');
        const a = c.get('a');
        const afterDel = { a: a === undefined ? null : a, b: c.get('b'), size: c.size() };
        c.clear();
        return { afterDel, sizeAfterClear: c.size() };
    """)
    assert out['afterDel'] == {'a': None, 'b': 2, 'size': 1}
    assert out['afterDel']['size'] == 1
    assert out['sizeAfterClear'] == 0


# ─── 后台静默刷新 ──────────────────────────────

@NEEDS_NODE
def test_silent_refresh_first_time():
    """首次无基线：应用数据、写入缓存，但不触发变更提示"""
    out = _run_js("""
        return (async () => {
            const c = core.createTtlCache(60000);
            const events = [];
            const r = await core.silentRefresh({
                cache: c, key: 'k',
                fetchFn: async () => ({ stocks: [{ code: '1' }] }),
                apply: () => events.push('apply'),
                onChanged: () => events.push('onChanged'),
                onUnchanged: () => events.push('onUnchanged'),
            });
            return { r, events, cached: c.get('k') };
        })()
    """)
    assert out['r']['ok'] is True
    assert out['r']['changed'] is False        # 无基线不算变更
    assert out['events'] == ['apply']
    assert out['cached'] == {'stocks': [{'code': '1'}]}


@NEEDS_NODE
def test_silent_refresh_unchanged():
    """后台拉到相同数据：不提示，仅续期缓存"""
    out = _run_js("""
        return (async () => {
            const c = core.createTtlCache(60000);
            c.set('k', { stocks: [{ code: '1' }] });
            const events = [];
            const r = await core.silentRefresh({
                cache: c, key: 'k',
                fetchFn: async () => ({ stocks: [{ code: '1' }] }),
                apply: () => events.push('apply'),
                onChanged: () => events.push('onChanged'),
                onUnchanged: () => events.push('onUnchanged'),
            });
            return { r, events };
        })()
    """)
    assert out['r']['changed'] is False
    assert out['events'] == ['apply', 'onUnchanged']
    assert 'onChanged' not in out['events']


@NEEDS_NODE
def test_silent_refresh_changed():
    """后台拉到新数据：更新缓存、应用界面、触发变更提示"""
    out = _run_js("""
        return (async () => {
            const c = core.createTtlCache(60000);
            c.set('k', { stocks: [{ code: '1' }] });
            const events = [];
            const r = await core.silentRefresh({
                cache: c, key: 'k',
                fetchFn: async () => ({ stocks: [{ code: '1' }, { code: '2' }] }),
                apply: () => events.push('apply'),
                onChanged: () => events.push('onChanged'),
            });
            return { r, events, cached: c.get('k') };
        })()
    """)
    assert out['r']['changed'] is True
    assert out['events'] == ['apply', 'onChanged']
    assert out['cached'] == {'stocks': [{'code': '1'}, {'code': '2'}]}


@NEEDS_NODE
def test_silent_refresh_error():
    """后台拉取失败：静默忽略，缓存保留，不提示"""
    out = _run_js("""
        return (async () => {
            const c = core.createTtlCache(60000);
            c.set('k', { stocks: [{ code: '1' }] });
            const events = [];
            const r = await core.silentRefresh({
                cache: c, key: 'k',
                fetchFn: async () => { throw new Error('net'); },
                apply: () => events.push('apply'),
                onChanged: () => events.push('onChanged'),
                onError: () => events.push('onError'),
            });
            return { r, events, cached: c.get('k') };
        })()
    """)
    assert out['r']['ok'] is False
    assert out['r']['changed'] is False
    assert out['events'] == ['onError']
    assert out['cached'] == {'stocks': [{'code': '1'}]}    # 旧缓存保留


@NEEDS_NODE
def test_silent_refresh_inflight_dedup():
    """同一 key 并发静默刷新去重：后到请求跳过，fetch 只执行一次"""
    out = _run_js("""
        return (async () => {
            const c = core.createTtlCache(60000);
            let calls = 0;
            let resolveGate;
            const gate = new Promise(r => { resolveGate = r; });
            const p1 = core.silentRefresh({
                cache: c, key: 'k',
                fetchFn: async () => { calls++; await gate; return { v: 1 }; },
            });
            const p2 = core.silentRefresh({
                cache: c, key: 'k',
                fetchFn: async () => { calls++; return { v: 2 }; },
            });
            const r2 = await p2;          // 先返回：in-flight 跳过
            resolveGate();
            const r1 = await p1;
            return { r1, r2, calls, cached: c.get('k') };
        })()
    """)
    assert out['r2']['skipped'] is True
    assert out['r1']['ok'] is True
    assert out['calls'] == 1                # 只真正 fetch 一次
    assert out['cached'] == {'v': 1}
