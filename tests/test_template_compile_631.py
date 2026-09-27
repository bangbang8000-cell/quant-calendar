# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.3 配套门禁): 全部组件模板语法可编译

背景: 结构分治后页面模板由 ``view-partN.js`` 片段拼接装配, Python 侧门禁
(指纹/四态/空错态巡检) 全部走正则, 无法发现标签不配平 —— 本轮整改中
``system/view-part2.js`` 的 ``<template v-else>`` 收口少一行, 30 个组件的
Python 门禁全绿但运行期编译必然白屏。故补此门禁: 用与浏览器同一条编译路径
(``@vue/compiler-dom`` 的 ``compile``) 逐组件编译装配后模板, 编译报错即失败。

node 或前端 node_modules 不可用时跳过 (与 test_logic_factory_parity_630 同口径)。
"""
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TESTS = os.path.dirname(os.path.abspath(__file__))
FRONTEND = os.path.join(BASE, "frontend")
if TESTS not in sys.path:
    sys.path.insert(0, TESTS)

import behavior_parity as bp  # noqa: E402

# 装配后必须存在的页面模板 (注册名; 缺失 = 提取逻辑失效, 不能静默通过)
REQUIRED_PAGES = (
    "AiPage", "CalendarPage", "ResearchPage",
    "ShorttermPage", "StrategiesPage", "SystemPage",
)

# 与浏览器一致: 运行期模板编译 (base mode), 报错含位置
NODE_PROBE = r"""
const path = require('path');
const data = JSON.parse(require('fs').readFileSync(process.argv[1], 'utf8'));
const compilerPath = path.join(process.argv[2], 'node_modules/@vue/compiler-dom');
let compile;
try { ({ compile } = require(compilerPath)); }
catch (e) { process.stdout.write(JSON.stringify({ unavailable: String(e.message) })); process.exit(0); }
const failures = [];
for (const name of Object.keys(data)) {
  let errors = [];
  try {
    compile(data[name], {
      onError: (e) => errors.push(String(e.message) + (e.loc ? (' @L' + e.loc.start.line) : '')),
      onWarn: () => {},
    });
  } catch (e) { errors.push('THROW: ' + e.message); }
  if (errors.length) failures.push({ name: name, errors: errors.slice(0, 5) });
}
process.stdout.write(JSON.stringify({ checked: Object.keys(data).length, failures: failures }));
"""


def _assembled_templates():
    """递归取全部组件装配后模板 (与 behavior_parity 指纹用同一条解析路径)"""
    texts = {}
    for dirpath, dirnames, filenames in os.walk(FRONTEND):
        dirnames[:] = [d for d in dirnames if d not in ("node_modules", "dist", ".git")]
        for fn in filenames:
            if fn.endswith(".js"):
                p = os.path.join(dirpath, fn)
                try:
                    with io.open(p, encoding="utf-8") as f:
                        texts[p] = f.read()
                except (OSError, UnicodeDecodeError):
                    continue
    resolver = bp.TemplateResolver(texts)
    out = {}
    for path in sorted(texts):
        text = texts[path]
        for m in bp._COMPONENT_RE.finditer(text):
            name = m.group(1)
            if name in out:
                continue
            tpl_pos = text.find("template:")
            if tpl_pos < 0:
                continue
            expr_m = bp._TPL_EXPR_RE.search(text, tpl_pos)
            is_literal = (not expr_m) or expr_m.group(1).strip().startswith("`")
            tpl = None
            if not is_literal:
                tpl = resolver.resolve(expr_m.group(1), path)
            if tpl is None:
                tpl = bp._template_literal(text, tpl_pos)
            if tpl:
                out[name] = tpl
    return out


def _compile_all(templates):
    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    dst = os.path.join(tempfile.mkdtemp(prefix="qc-tpl-"), "templates.json")
    with io.open(dst, "w", encoding="utf-8") as f:
        json.dump(templates, f, ensure_ascii=False)
    proc = subprocess.run(["node", "-e", NODE_PROBE, dst, FRONTEND],
                          capture_output=True, text=True, timeout=120)
    assert proc.returncode == 0, "node 编译探针失败: %s" % proc.stderr
    out = json.loads(proc.stdout)
    if out.get("unavailable"):
        pytest.skip("@vue/compiler-dom 不可用: %s" % out["unavailable"])
    return out


def test_all_component_templates_compile():
    """全部组件模板经 @vue/compiler-dom 编译零报错 (标签配平/指令合法)"""
    tpls = _assembled_templates()
    out = _compile_all(tpls)
    assert out["checked"] == len(tpls) and out["checked"] >= 20, \
        "编译覆盖数异常: %s (提取到 %s)" % (out["checked"], len(tpls))
    assert not out["failures"], "模板编译报错: %s" % json.dumps(
        out["failures"], ensure_ascii=False)


def test_page_templates_present_and_compile():
    """五个页面模板必须装配成功且各自可编译 (防提取失效导致空跑)"""
    tpls = _assembled_templates()
    missing = [n for n in REQUIRED_PAGES if n not in tpls]
    assert not missing, "页面模板未提取到: %s" % missing
    out = _compile_all({n: tpls[n] for n in REQUIRED_PAGES})
    assert not out["failures"], "页面模板编译报错: %s" % json.dumps(
        out["failures"], ensure_ascii=False)


def test_v_else_has_adjacent_v_if_in_pages():
    """页面模板中 v-else/v-else-if 不得悬空 (上一兄弟须为 v-if/v-else-if)

    编译器的相邻性检查依赖空白/注释分隔, 这里用同一编译器兜底: 若有悬空
    v-else, compile 会产出 "v-else/v-else-if has no adjacent v-if" 报错。
    """
    tpls = _assembled_templates()
    pages = {n: t for n, t in tpls.items() if n in REQUIRED_PAGES}
    assert pages
    out = _compile_all(pages)
    dangling = [f for f in out["failures"]
                if any("adjacent" in e for e in f["errors"])]
    assert not dangling, "存在悬空 v-else: %s" % json.dumps(dangling, ensure_ascii=False)