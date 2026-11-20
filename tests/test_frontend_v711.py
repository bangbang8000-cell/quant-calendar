# -*- coding: utf-8 -*-
"""v7.11 前端收口验收测试 (FR-7.11-1~7)

覆盖四件事:
  TC-711-01 导航注册: 三个新二级在 NEW_NAV 内, 且仍满足「一级 7 / 单域 ≤7」
  TC-711-02 模板可编译: 六个新组件 + 三个被改页面模板经 Vue compiler-dom 编译通过
  TC-711-03 接线完整: main.js 静态导入 6 个组件, nav 中文兜底不缺词, 五语包齐备
  TC-711-04 端点可达: C1 审计的 7 个标记全部能在 frontend/js 源码中命中
  TC-711-05 样式令牌化: v7.11 样式块无裸色值(明暗主题自动跟随)

模板检查靠 node + @vue/compiler-dom (与构建同源), node 缺失时 skip 而非失败。
"""
import os
import re
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
JS = os.path.join(FRONTEND, "js")

NEW_MAIN = [
    "js/components/overlay-radar.js",
    "js/components/pattern-lab.js",
    "js/components/marketplace-panel.js",
    "js/components/param-lock-panel.js",
    "js/components/exec-plans-panel.js",
    "js/components/stock-report-panel.js",
]

# C1「新功能前端可达性」的标记 → 本版必须在源码中出现
REACH_MARKERS = {
    "择时 v7.5": "/api/timing/",
    "形态匹配 v7.6": "/api/pattern/",
    "参数锁定 v7.7": "/lock/audit",
    "执行计划 v7.8": "/api/execution/",
    "五维报告 v7.9": "/api/reports/stock/",
    "策略市场 v7.10": "/api/marketplace/",
}


def _read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def _js_text():
    chunks = []
    for root, _dirs, files in os.walk(JS):
        for name in files:
            if name.endswith(".js"):
                chunks.append(_read(os.path.join(root, name)))
    return "".join(chunks)


def _node(script, *args):
    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    proc = subprocess.run(["node", script] + list(args), capture_output=True,
                          text=True, timeout=180)
    return proc


# ─── TC-711-01 导航注册 ──────────────────────────────────────

_NAV_SUITE = r"""
const NC = require(process.argv[1]);
const out = {};
function grab(primary, key) {
  const p = NC.primaryByKey(primary);
  if (!p) return null;
  return p.members.filter(function (m) { return m.key === key; })[0] || null;
}
out.primaryCount = NC.NEW_NAV.length;
out.maxMembers = Math.max.apply(null, NC.NEW_NAV.map(function (p) { return p.members.length; }));
out.strategiesHasTiming = !!grab('strategies', 'timing');
out.researchHasPattern = !!grab('research', 'pattern-lab');
out.researchHasMarket = !!grab('research', 'marketplace');
const t = NC.toInternal('strategies', 'timing');
out.timingInternal = t ? (t.page + '/' + t.sub) : 'null';
const p = NC.toInternal('research', 'pattern-lab');
out.patternInternal = p ? (p.page + '/' + p.sub) : 'null';
const m = NC.toInternal('research', 'marketplace');
out.marketInternal = m ? (m.page + '/' + m.sub) : 'null';
// 旧坐标深链仍应解析到同一坐标(成员 page/sub 与历史子页键同名)
const legacy = NC.legacyToNew('strategies', 'timing');
out.legacyTiming = legacy ? (legacy.primary + '/' + legacy.subKey) : 'null';
// 中文兜底: i18n 缺词时不允许露 raw key
out.labelTiming = NC.memberLabel({ key: 'timing', page: 'strategies', sub: 'timing' });
out.labelPattern = NC.memberLabel({ key: 'pattern-lab', page: 'research', sub: 'pattern-lab' });
out.labelMarket = NC.memberLabel({ key: 'marketplace', page: 'research', sub: 'marketplace' });
console.log(JSON.stringify(out));
"""


def test_nav_registers_three_new_members():
    proc = _node("-e", _NAV_SUITE, os.path.join(JS, "nav-merge-core.js"))
    assert proc.returncode == 0, proc.stderr
    import json
    out = json.loads(proc.stdout.strip().splitlines()[-1])

    # 结构约束未被破坏
    assert out["primaryCount"] == 7, "一级仍应恰为 7 业务域"
    assert out["maxMembers"] <= 7, "单个业务域二级仍应 ≤7, 实际 %s" % out["maxMembers"]

    # 三个新入口就位
    assert out["strategiesHasTiming"] is True
    assert out["researchHasPattern"] is True
    assert out["researchHasMarket"] is True

    # 坐标解析正确(渲染层按 page/sub 取组件)
    assert out["timingInternal"] == "strategies/timing"
    assert out["patternInternal"] == "research/pattern-lab"
    assert out["marketInternal"] == "research/marketplace"
    assert out["legacyTiming"] == "strategies/timing"

    # 中文兜底: 不能把 raw key 直接显示给用户
    assert out["labelTiming"] == "择时雷达"
    assert out["labelPattern"] == "形态匹配"
    assert out["labelMarket"] == "策略市场"


# ─── TC-711-02 模板可编译 ───────────────────────────────────

def test_component_templates_compile():
    script = os.path.join(FRONTEND, "scripts", "check-templates.js")
    assert os.path.isfile(script), "模板检查脚本缺失"
    proc = _node(script)
    assert proc.returncode == 0, "模板编译失败:\n%s\n%s" % (proc.stdout[-2000:], proc.stderr[-2000:])
    assert "failed=0" in proc.stdout


# ─── TC-711-03 接线完整 ─────────────────────────────────────

def test_main_imports_all_new_components():
    main = _read(os.path.join(FRONTEND, "src", "main.js"))
    for rel in NEW_MAIN:
        assert rel in main, "main.js 未静态导入 %s (会导致组件未注册→页面空白)" % rel
    assert "js/v711-shared.js" in main, "共用件未导入"


def test_each_component_registers_component():
    for rel in NEW_MAIN:
        text = _read(os.path.join(JS, *rel.split("/")[1:]))
        assert "__quantComponents" in text, "%s 未写入 __quantComponents" % rel
        assert re.search(r"name:\s*'qc-[a-z0-9-]+'", text), "%s 缺少 qc-* 组件名" % rel


def test_locales_cover_new_sub_pages():
    keys = ("sub.timing", "sub.pattern-lab", "sub.marketplace")
    for lang in ("zh-CN", "zh-TW", "en", "ja", "ko"):
        path = os.path.join(JS, "locales", "%s.js" % lang)
        text = _read(path)
        for k in keys:
            assert "'%s'" % k in text, "%s 缺词条 %s (菜单会露 raw key)" % (lang, k)


# ─── TC-711-04 端点可达 (与 C1 审计同口径) ──────────────────

def test_frontend_consumes_new_domains():
    text = _js_text()
    missing = [name for name, marker in REACH_MARKERS.items() if marker not in text]
    assert not missing, "前端仍未消费: %s" % "、".join(missing)


# ─── TC-711-05 样式令牌化 ───────────────────────────────────

def test_v711_css_uses_tokens_only():
    css = _read(os.path.join(FRONTEND, "css", "themes-pages.css"))
    idx = css.find("v7.11 (FR-7.11 前端收口)")
    assert idx > 0, "未找到 v7.11 样式块"
    block = css[idx:]
    assert ".qc711-panel" in block
    bare = re.findall(r"#[0-9a-fA-F]{3,8}\b", block)
    assert not bare, "v7.11 样式块出现裸色值 %s (明暗主题会失配)" % bare[:5]
    assert block.count("var(--") >= 30, "令牌使用过少, 检查是否退化为硬编码样式"
