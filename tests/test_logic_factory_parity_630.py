# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.8): 逻辑域模块对拍 — 自选域 create(deps) 公开面与拆分前一致

结构分治把 watchlist.js 的 setup body 按域下沉为 js/watchlist/*.js（create(ctx) 工厂
经注册文件装配）。本用例在 Node 桩环境中依装配顺序执行片段并调用
``window.__quantModules.watchlist.create(deps)``，把返回面（键集合 + 值类型）与
拆分前冻结的基线 ``parity_golden/watchlist_surface_630.json`` 逐项对拍：

  - 键集合漂移（漏挂/多挂/改名）→ 直接断言失败
  - 值类型漂移（ref/computed/function 变化）→ 直接断言失败
  - 装配期 ReferenceError（缺失 ctx 依赖）→ node 非零退出 + stderr 断言失败

基线来源：拆分前的 frontend/js/watchlist.js（同一探针采集），故基线语义与现网一致。
"""
import json
import os
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
GOLDEN = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                      "parity_golden", "watchlist_surface_630.json")

# 装配顺序: 片段先于注册文件（见 frontend/src/main.js）
FRAGMENTS = ["watchlist/history.js", "watchlist/list.js",
             "watchlist/analytics.js", "watchlist/realtime.js"]
REGISTRATION = "watchlist.js"

# Node 桩环境: 浏览器全局 + Vue/ElementPlus 最小面（create 阶段不触发网络/定时器）
PRELUDE = r"""
const fs = require('fs');
const ref = (v) => ({ value: v });
const computed = (fn) => ({ get value() { return fn(); } });
const watch = () => ({});
global.window = {};
global.document = { documentElement: {} };
global.getComputedStyle = () => ({ getPropertyValue: () => '' });
global.localStorage = { getItem: () => '', setItem: () => {}, removeItem: () => {} };
global.fetch = () => Promise.reject(new Error('stub'));
global.nextTick = (fn) => Promise.resolve().then(() => fn && fn());
global.Vue = { ref, computed, watch, nextTick: global.nextTick, h: () => ({}) };
global.ElementPlus = {
  ElMessage: Object.assign(() => {}, {
    success: () => {}, error: () => {}, info: () => {}, warning: () => {},
  }),
  ElMessageBox: { confirm: () => Promise.resolve() },
};
global.WebSocket = function () { this.readyState = 0; this.close = () => {}; };
"""

PROBE = r"""
const REG = process.argv[1];
const regText = fs.readFileSync(REG, 'utf8');
const m = /create\(deps\)\s*\{[\s\S]*?\{([^{}]*)\}\s*=\s*deps;/.exec(regText);
if (!m) { console.error('FAIL: 未解析到 deps 解构'); process.exit(3); }
const deps = {};
for (const n of m[1].replace(/\n/g, ' ').split(',').map((s) => s.trim()).filter(Boolean)) deps[n] = ref(null);
deps.viewCache = { clear: () => {} };
const mod = global.window.__quantModules && global.window.__quantModules.watchlist;
if (!mod || typeof mod.create !== 'function') { console.error('FAIL: watchlist.create 未注册'); process.exit(3); }
let out;
try {
  out = mod.create(deps);
} catch (e) {
  console.error('THROW: ' + (e && e.stack ? e.stack.split('\n').slice(0, 4).join(' | ') : e));
  process.exit(2);
}
const keys = Object.keys(out).sort();
const types = {};
for (const k of keys) {
  const v = out[k];
  if (v && typeof v === 'object' && Object.getOwnPropertyDescriptor(v, 'value')) {
    types[k] = Object.getOwnPropertyDescriptor(v, 'value').get ? 'computed' : 'ref';
  } else {
    types[k] = typeof v;
  }
}
process.stdout.write(JSON.stringify({ count: keys.length, keys, types }));
"""


def _load(sources):
    """在 Node 中依序 eval 源文件并采集 create() 返回面"""
    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    evals = "".join("eval(fs.readFileSync(%r, 'utf8'));\n" % p for p in sources)
    code = PRELUDE + evals + PROBE
    reg = os.path.join(FRONTEND, "js", REGISTRATION)
    proc = subprocess.run(["node", "-e", code, reg],
                          capture_output=True, text=True, timeout=60)
    assert proc.returncode == 0, "node 装配失败(疑似缺失 ctx 依赖): %s" % proc.stderr
    return json.loads(proc.stdout)


def test_watchlist_domain_surface_parity():
    """自选域返回面与拆分前基线一致（键集合 + 值类型 + 装配零异常）"""
    sources = [os.path.join(FRONTEND, "js", f) for f in FRAGMENTS]
    sources.append(os.path.join(FRONTEND, "js", REGISTRATION))
    live = _load(sources)
    with open(GOLDEN, encoding="utf-8") as f:
        golden = json.load(f)

    missing = sorted(set(golden["keys"]) - set(live["keys"]))
    extra = sorted(set(live["keys"]) - set(golden["keys"]))
    assert not missing, "自选域返回面丢失成员: %s" % missing
    assert not extra, "自选域返回面新增未登记成员: %s" % extra
    drift = {k: [golden["types"][k], live["types"][k]]
             for k in golden["keys"] if golden["types"][k] != live["types"][k]}
    assert not drift, "自选域返回面类型漂移 (基线→现网): %s" % drift
    assert live["count"] == golden["count"]