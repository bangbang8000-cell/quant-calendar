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
import re
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


# ─── 6.3.0 (T-6.3.0.9): 短线复盘引导域 ─────────────────────────────────────
# 常量即拆分前 shortterm-page.js setup 对该域的导出面（同名单一来源，无需另存基线文件）
SHORTTERM_TOUR_FRAGMENT = "components/shortterm/logic-tour.js"
SHORTTERM_TOUR_SURFACE = {
    "maybeShowShorttermTour": "function",
    "shorttermTourFinish": "function",
    "shorttermTourIsLast": "computed",
    "shorttermTourNext": "function",
    "shorttermTourProg": "computed",
    "shorttermTourSkip": "function",
    "shorttermTourState": "ref",
    "shorttermTourStep": "computed",
    "shorttermTourVisible": "ref",
}

TOUR_PROBE = r"""
eval(fs.readFileSync(process.argv[1], 'utf8'));
const mod = global.window.__quantModules && global.window.__quantModules.shorttermPage
  && global.window.__quantModules.shorttermPage.tour;
if (!mod || typeof mod.create !== 'function') { console.error('FAIL: tour.create 未注册'); process.exit(3); }
let out;
try {
  out = mod.create({ ref, computed, currentSubPage: ref('overview') });
} catch (e) {
  console.error('THROW: ' + (e && e.stack ? e.stack.split('\n').slice(0, 4).join(' | ') : e));
  process.exit(2);
}
const types = {};
for (const k of Object.keys(out).sort()) {
  const v = out[k];
  if (v && typeof v === 'object' && Object.getOwnPropertyDescriptor(v, 'value')) {
    types[k] = Object.getOwnPropertyDescriptor(v, 'value').get ? 'computed' : 'ref';
  } else { types[k] = typeof v; }
}
process.stdout.write(JSON.stringify(types));
"""


def test_shortterm_tour_domain_surface_parity():
    """短线引导域返回面与拆分前一致（键集合 + 值类型 + 装配零异常）"""
    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    frag = os.path.join(FRONTEND, "js", *SHORTTERM_TOUR_FRAGMENT.split("/"))
    proc = subprocess.run(["node", "-e", PRELUDE + TOUR_PROBE, frag],
                          capture_output=True, text=True, timeout=60)
    assert proc.returncode == 0, "node 装配失败(疑似缺失 ctx 依赖): %s" % proc.stderr
    live = json.loads(proc.stdout)
    assert live == SHORTTERM_TOUR_SURFACE, "短线引导域返回面漂移: %s" % live


# ─── 6.3.0 (T-6.3.0.10): App 逻辑编排层按域下沉后的装配契约 ─────────────────
# app-logic.js 的 setup body 按域下沉到 js/app-logic/{shell,workspace,detail,runtime}.js，
# 由 __quantAppLogic.<域>.create(ctx) 工厂装配。此处对拍两处「公开面」契约：
#   1. 片段 ctx 解构键 ⊆ 装配处传入键  —— 漏传 → 运行期 undefined/TypeError（静默转圈同类）
#   2. 片段 return 键 == 装配处解构键  —— 漏挂/多挂 → 域输出丢失或未登记
# 不做 Node 执行（域体装配期含大量真实模块调用），改为确定性源码契约对拍。
APP_LOGIC_DOMAINS = ["shell", "workspace", "detail", "runtime"]
_REG_SRC = open(os.path.join(FRONTEND, "js", "app-logic.js"), encoding="utf-8").read()


def _keys(block):
    keys = []
    for part in block.split(","):
        part = part.strip()
        if not part or part.startswith("//"):
            continue
        name = part.split(":")[0].strip()  # 别名/默认值取左侧名
        if re.match(r"^[A-Za-z_$][\w$]*$", name):
            keys.append(name)
    return keys


def _fragment_surface(domain):
    path = os.path.join(FRONTEND, "js", "app-logic", domain + ".js")
    src = open(path, encoding="utf-8").read()
    m = re.search(r"const\s*\{([^}]*)\}\s*=\s*ctx;", src)
    assert m, "%s.js 未见 ctx 解构" % domain
    ctx_keys = _keys(m.group(1))
    # 工厂 return 块位于片段末尾（锚定尾部，避免命中域体内的局部 return {...}）
    r = re.search(r"return\s*\{([\s\S]*?)\}\s*;\s*\},\s*\};\s*\}\)\(\);\s*$", src)
    ret_keys = _keys(r.group(1)) if r else []
    return ctx_keys, ret_keys


def _assembly_surface(domain):
    m = re.search(r"window\.__quantAppLogic\.%s\.create\(\{([\s\S]*?)\}\);" % domain, _REG_SRC)
    assert m, "app-logic.js 未见 %s 域装配调用" % domain
    passed = _keys(m.group(1))
    d = re.search(r"const\s*\{([^}]*)\}\s*=\s*__%s;" % domain, _REG_SRC)
    consumed = _keys(d.group(1)) if d else []
    return passed, consumed


@pytest.mark.parametrize("domain", APP_LOGIC_DOMAINS)
def test_app_logic_domain_ctx_contract(domain):
    """片段 ctx 解构键必须由装配处传入（漏传 → 运行期 ReferenceError/undefined）"""
    ctx_keys, _ = _fragment_surface(domain)
    passed, _ = _assembly_surface(domain)
    missing = sorted(set(ctx_keys) - set(passed))
    assert not missing, "%s.js ctx 依赖未由 app-logic.js 装配传入: %s" % (domain, missing)


@pytest.mark.parametrize("domain", APP_LOGIC_DOMAINS)
def test_app_logic_domain_surface_contract(domain):
    """片段 return 键与装配处解构键一一对应（漏挂/多挂 → 域输出丢失或未登记）"""
    _, ret_keys = _fragment_surface(domain)
    _, consumed = _assembly_surface(domain)
    missing = sorted(set(ret_keys) - set(consumed))
    extra = sorted(set(consumed) - set(ret_keys))
    assert not missing, "%s.js 返回面成员未被 app-logic.js 解构: %s" % (domain, missing)
    assert not extra, "%s.js 装配解构了未返回成员: %s" % (domain, extra)
    assert len(ret_keys) == len(set(ret_keys)), "%s.js 返回面存在重复键" % domain