"""v6.6 T-6.6.1/T-6.6.3: 自选列表渲染策略纯函数门禁 (Node 行为测试)

守护 PRD FR-6.6.1 的三条不变量：
  1. 小数据量（≤50）必须普通渲染 —— 保证「13 只 = 13 个 DOM 行」，可计数/可搜索；
  2. 「有计数无行」必须触发降级面板 —— 绝不允许静默空白（P0-1b 兜底）；
  3. 必需组件缺失必须能被检出 —— 启动横幅的依据。

对应文档: docs/PRD-v6.6.md FR-6.6.1 / AC-14, AC-15, AC-16
          docs/DEV&TEST-PLAN-6.6.md TC-6.6.1.3 / TC-6.6.1.4 / TC-6.6.1.5
"""
import os
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEST_JS = os.path.join(BASE, "tests", "watchlist_render_core.test.js")
CORE_JS = os.path.join(BASE, "frontend", "js", "watchlist-render-core.js")


def test_core_module_exists():
    """纯函数模块必须存在（UMD，Node 可 require）"""
    assert os.path.isfile(CORE_JS), f"缺少 {CORE_JS}"


def test_watchlist_render_core_node():
    """运行 Node 行为测试；任一断言失败即红"""
    assert os.path.isfile(TEST_JS), f"缺少 {TEST_JS}"
    proc = subprocess.run(
        ["node", TEST_JS],
        capture_output=True,
        text=True,
        timeout=30,
        cwd=BASE,
    )
    assert proc.returncode == 0, (
        "watchlist_render_core.test.js 失败：\n"
        f"--- stdout ---\n{proc.stdout}\n--- stderr ---\n{proc.stderr}"
    )


@pytest.mark.parametrize("threshold,count,expected", [
    (50, 13, True),
    (50, 50, True),
    (50, 51, False),
    (0, 13, False),
])
def test_plain_threshold_matrix(threshold, count, expected):
    """阈值矩阵：13/50/51 与禁用阈值 0 的退化判定"""
    code = (
        "const c=require(process.argv[1]);"
        f"process.stdout.write(String(c.shouldRenderPlain({count},{threshold})));"
    )
    proc = subprocess.run(
        ["node", "-e", code, CORE_JS],
        capture_output=True,
        text=True,
        timeout=15,
    )
    assert proc.returncode == 0, proc.stderr
    assert proc.stdout.strip() == str(expected).lower()


def test_source_uses_plain_threshold_prop():
    """自选页必须显式声明 plain-threshold（否则退化不生效，13 只仍走虚拟化）"""
    src = open(
        os.path.join(BASE, "frontend", "js", "components", "ai", "view-part2.js"),
        encoding="utf-8",
    ).read()
    assert "plain-threshold" in src, "自选列表未声明 plain-threshold"


def _read(rel):
    return open(os.path.join(BASE, rel), encoding="utf-8").read()


def test_guard_panel_wired_in_template():
    """AC-15: 模板必须渲染降级面板（含导出按钮），且与守卫状态绑定"""
    src = _read("frontend/js/components/ai/view-part2.js")
    assert 'v-if="watchlistRenderGuard"' in src, "模板缺少守卫面板"
    assert "watchlist-render-guard" in src, "缺少守卫面板样式类"
    assert "exportPageDiagnostics()" in src, "面板缺少导出诊断入口"
    assert "未生成任何列表行" in src or "未能渲染" in src, "面板缺少可解释文案"


def test_guard_audit_hooked_after_load():
    """AC-15: 加载完成后必须执行自检（否则守卫永不触发）"""
    src = _read("frontend/js/watchlist/list.js")
    assert "auditWatchlistRender()" in src, "loadWatchlist 未接入渲染自检"


def test_guard_exports_and_diag_hooks():
    """AC-15/AC-16: 三个能力必须导出到 qcState，并提供诊断句柄"""
    src = _read("frontend/js/watchlist.js")
    for name in ("watchlistRenderGuard", "auditWatchlistRender", "exportPageDiagnostics"):
        assert name in src, f"watchlist.js 缺少 {name}"
    assert "__qcWatchlistAudit" in src, "缺少诊断句柄 __qcWatchlistAudit"
    assert "__qcExportDiagnostics" in src, "缺少诊断句柄 __qcExportDiagnostics"


def test_virtual_list_plain_branch_present():
    """T-6.6.1: 组件必须有小数据量普通渲染分支，且默认不启用（其它页不受影响）"""
    src = _read("frontend/js/components/virtual-list.js")
    assert "plainThreshold" in src, "缺少 plainThreshold 属性"
    assert "v-if=\"plainMode\"" in src, "缺少普通渲染分支"
    assert "qc-vrow-plain" in src, "缺少普通行样式类"
    assert "default: 0" in src or "default:0" in src, "plainThreshold 默认必须为 0（禁用）"


def test_plain_css_present():
    """普通渲染分支必须有流式布局覆盖（否则仍被绝对定位裁切）"""
    css = _read("frontend/css/themes-pages.css")
    assert ".qc-vrow-plain" in css
    assert "position: static" in css
    assert ".watchlist-render-guard" in css


def test_guard_keys_wired_into_qcstate():
    """回归护栏: 守卫/诊断键必须同时出现在
       ① 域解构 (__watchlistDomain) ② qcState 解构 —— 否则模板里永远是 undefined。
       这类「新键未接线」是真实踩过的坑（面板不显示且无报错）。"""
    src = _read("frontend/js/app-logic.js")
    for name in ("watchlistRenderGuard", "auditWatchlistRender",
                 "exportPageDiagnostics", "reloadPage"):
        assert src.count(name) >= 2, f"{name} 未同时接进域解构与 qcState 解构（出现 {src.count(name)} 次）"
