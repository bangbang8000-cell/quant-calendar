# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.7): 拆分产物覆盖率门禁

结构分治（6.3.0）把大页面拆成同目录片段（view-partN.js / logic-*.js）并把
app-logic 按域下沉。拆分后文件变多，容易出现「拆出来的新文件没测到」——
本门禁把拆分产物纳入覆盖率统计，确保每个产物都有消费方：

- 模板片段须被同目录 ``view.js`` 装配（否则页面少一段且无人发现）
- 逻辑片段须在 ``page_source`` 登记（否则历史单文件源码断言失效）
- 其余产物须被至少一个测试文件直接引用

清单与消费方判定见 ``conftest.SPLIT_PRODUCTS_630`` / ``split_product_consumers``。
"""
import io
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import conftest  # noqa: E402


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_no_orphan_split_product(split_product_coverage):
    """每个拆分产物至少有一个消费方（装配 / 注册 / 引用），否则为孤儿产物"""
    orphans = []
    for rel, consumers in sorted(split_product_coverage.items()):
        if consumers or rel in conftest.SPLIT_PRODUCT_EXEMPT:
            continue
        orphans.append(rel)
    assert not orphans, (
        "以下拆分产物无任何消费方（未装配 / 未注册 / 无测试引用）——\n"
        "拆分后无人使用，属遗漏或残留，需接线或删除：\n  " + "\n  ".join(orphans)
    )


def test_exempt_entries_carry_reason(split_product_coverage):
    """豁免清单须带成立的理由，且豁免项确实登记在产物清单内"""
    blank = sorted(k for k, v in conftest.SPLIT_PRODUCT_EXEMPT.items() if not (v or "").strip())
    assert not blank, "拆分产物豁免项未写理由：\n  " + "\n  ".join(blank)

    unknown = sorted(k for k in conftest.SPLIT_PRODUCT_EXEMPT if k not in conftest.SPLIT_PRODUCTS_630)
    assert not unknown, (
        "豁免项不在拆分产物清单内（清单已变更，需同步）：\n  " + "\n  ".join(unknown)
    )


def test_view_assembly_wires_all_parts():
    """页面装配文件 view.js 引用的片段必须存在（防漏装 / 命名漂移）"""
    checked = 0
    for rel in conftest.SPLIT_PRODUCTS_630:
        if not rel.endswith("/view.js"):
            continue
        src = _read(rel)
        ns = re.search(r"window\.__quantModules\.(\w+)\.view\s*=", src)
        assert ns, "%s: 未找到装配赋值（view = part1 + part2）" % rel
        names = re.findall(r"window\.__quantModules\.\w+\.(\w+)\s*\+", src)
        assert names, "%s: 装配未引用任何片段" % rel
        d = os.path.dirname(os.path.join(BASE, rel.replace("/", os.sep)))
        for name in names:
            # 片段模块命名约定: 模板片段文件为 view-<name>.js（模块键 part1/part2）
            part = os.path.join(d, "view-%s.js" % name)
            assert os.path.exists(part), (
                "%s: 装配引用了不存在的片段 %s" % (rel, os.path.basename(part)))
            assert os.path.getsize(part) > 0, "%s: 片段 %s 为空" % (rel, os.path.basename(part))
        checked += 1
    assert checked == 5, "应校验 5 个页面装配文件（ai/research/shortterm/strategies/system），实际 %d" % checked


def test_ci_runs_split_product_coverage_gate():
    """CI 需在覆盖率门禁块内运行本门禁（拆分产物纳入覆盖率统计）"""
    ci = _read(".github/workflows/ci.yml")
    assert "tests/test_coverage_gate_631.py" in ci, (
        "ci.yml 未运行拆分产物覆盖率门禁 —— 拆分后新模块无人统计")
    assert "--ignore=tests" not in ci, "CI 覆盖率步骤不得忽略 tests/ 目录"