# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.3): 四态一致巡检门禁 — 全站子页必须有空态与错误态

背景（PRD-6.3.X L3）：站内已有统一状态面板 ``qc-state-panel``（空/加载/错误/离线四态），
但部分子页仍自行拼装文案，甚至只有正常态 —— 取数失败时页面一片空白，用户无从判断。

口径：按「页面 → 子页」两级巡检。
  1. 页面级：每个页面（``PAGES``）的装配模板必须至少引用一次 ``qc-state-panel``，
     即四态收敛到统一组件，不存在「只有正常态」的页面。
  2. 子页级：页面模板按 ``currentSubPage === '<x>'`` 分支切分，每个非静态子页区间必须
     同时具备空态标记与错误态标记（至少其一为统一组件用法）。
     仅展示静态内容/本地表单的子页在 ``STATIC_SUBPAGES`` 登记并注明原因。

装配模板自片段重建（6.3.0 结构分治后页面模板下沉 ``components/<域>/view-partN.js``），
故直接读取片段内容拼接，切片边界即真实模板边界，不会被后续 setup 代码污染。
"""
import io
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 页面 → 声明的子页清单（顺序与模板分支顺序一致，便于定位）
PAGES = [
    ("frontend/js/components/ai-page.js", "AI 智能",
     ["overview", "evaluation-analysis", "history", "chat_history", "watchlist", "focus", "portfolio"]),
    ("frontend/js/components/research-page.js", "策略研究",
     ["research-overview", "quant-research", "strategy-manage", "backtest",
      "backtest-history", "research-history", "market-review"]),
    ("frontend/js/components/shortterm-page.js", "短线复盘",
     ["overview", "ztpool", "lhb", "sector", "intraday"]),
    ("frontend/js/components/strategies-page.js", "策略总览",
     ["overview", "merrill", "market", "consensus", "backtest", "execution"]),
    ("frontend/js/components/system-page.js", "系统配置",
     ["status", "config", "health", "schedule", "guard", "autoeval", "notification",
      "datasource", "feature", "datadict", "user", "usage", "about"]),
]

# 静态子页豁免：无远端取数，不存在「加载/空/错误」三态
STATIC_SUBPAGES = {
    ("frontend/js/components/system-page.js", "config"): "纯本地配置表单（读写设置项），无远端列表取数",
    ("frontend/js/components/system-page.js", "about"): "静态版本与许可说明，无取数",
}

# 子页分支标记：currentSubPage === '<x>' / activeSubPage / subPage
_BRANCH_RE = re.compile(
    r"(?:v-if|v-else-if)=\"(?:currentSubPage|activeSubPage|subPage)\s*===?\s*'([^']+)'"
)

# 空态标记：统一组件 / 旧空态组件 / 显式空分支 / 空态文案
_EMPTY_PATTERNS = [
    re.compile(r'qc-state-panel[^>]*type="empty"'),
    re.compile(r"qc-state-panel[^>]*:type=\"[^\"]*empty"),
    re.compile(r"qc-empty"),
    re.compile(r"length\s*===?\s*0"),
    re.compile(r"![\w.]+\.length"),
    re.compile(r"暂无|无数据|无记录|没有可"),
]

# 错误态标记：统一组件 / 旧错误组件 / 错误文案
_ERROR_PATTERNS = [
    re.compile(r'qc-state-panel[^>]*type="error"'),
    re.compile(r"qc-state-panel[^>]*:type=\"[^\"]*error"),
    re.compile(r"qc-error"),
    re.compile(r"加载失败|获取失败|取数失败|出错|不可达"),
]


def _read(rel):
    path = os.path.join(BASE, rel.replace("/", os.sep))
    with io.open(path, encoding="utf-8") as f:
        return f.read()


def _assembled_template(page_rel):
    """页面装配模板：拼接 components/<域>/view-partN.js 的模板主体

    分片装配见同目录 ``view.js``（``part1 + part2``），按其中的出现顺序拼接。
    片段文件为纯模板模块（``partN = `...`;``），故取首个反引号到末个反引号之间即模板主体。
    """
    page_dir = os.path.dirname(page_rel)
    domain = os.path.basename(page_rel).replace("-page.js", "")
    frag_dir = os.path.join(page_dir, domain)
    view_src = _read(os.path.join(frag_dir, "view.js"))
    # 装配表达式属性为 ``partN``（如 aiPage.part1），对应文件 ``view-partN.js``
    parts = re.findall(r"\.(part\d+)\b", view_src)
    assert parts, "未在 %s/view.js 中解析到模板片段装配表达式" % frag_dir
    out = []
    for name in parts:
        src = _read(os.path.join(frag_dir, "view-" + name + ".js"))
        i, j = src.index("`"), src.rindex("`")
        assert j > i, "%s.js 模板反引号不配对" % name
        out.append(src[i + 1:j])
    return "".join(out), [name for name in parts]


def _slices(template, subpages):
    """按子页分支标记切分模板 → {子页名: 区间文本}

    末个分支切到模板末尾（装配模板的真实边界，不含 setup 代码）。
    """
    marks = list(_BRANCH_RE.finditer(template))
    found = [m.group(1) for m in marks]
    out = {}
    for i, m in enumerate(marks):
        end = marks[i + 1].start() if i + 1 < len(marks) else len(template)
        out.setdefault(m.group(1), template[m.start():end])
    return out, found


def _has(seg, patterns):
    return any(p.search(seg) for p in patterns)


def test_subpages_have_empty_and_error_state():
    """每个非静态子页：空态与错误态标记齐备"""
    failures = []
    for rel, label, subpages in PAGES:
        template, _ = _assembled_template(rel)
        slices, _ = _slices(template, subpages)
        for sub in subpages:
            if (rel, sub) in STATIC_SUBPAGES:
                continue
            seg = slices.get(sub)
            if seg is None:
                failures.append("%s(%s) 子页 %s: 模板中未找到该子页分支" % (label, rel, sub))
                continue
            miss = []
            if not _has(seg, _EMPTY_PATTERNS):
                miss.append("空态")
            if not _has(seg, _ERROR_PATTERNS):
                miss.append("错误态")
            if miss:
                failures.append("%s(%s) 子页 %s: 缺 %s" % (label, rel, sub, " / ".join(miss)))
    assert not failures, (
        "以下子页四态不齐（取数失败/无数据时用户看不到任何反馈）:\n  " + "\n  ".join(failures))


def test_pages_use_unified_state_panel():
    """每个页面至少引用一次 qc-state-panel（四态收敛到统一组件，无「只有正常态」页面）"""
    bare = []
    for rel, label, _ in PAGES:
        template, _ = _assembled_template(rel)
        if "qc-state-panel" not in template:
            bare.append("%s(%s)" % (label, rel))
    assert not bare, "以下页面未使用统一状态面板 qc-state-panel:\n  " + "\n  ".join(bare)


def test_inventory_matches_template_branches():
    """清单守卫：PAGES 中声明的子页与模板实际分支一一对应（新增子页必须登记）"""
    problems = []
    for rel, label, subpages in PAGES:
        template, _ = _assembled_template(rel)
        _, found = _slices(template, subpages)
        declared = set(subpages)
        actual = set(found)
        missing = sorted(declared - actual)
        extra = sorted(actual - declared)
        if missing:
            problems.append("%s: 清单声明但模板中不存在 -> %s" % (label, missing))
        if extra:
            problems.append("%s: 模板新增分支未登记 -> %s" % (label, extra))
    assert not problems, "子页清单与模板分支不一致:\n  " + "\n  ".join(problems)


def test_static_subpages_are_registered():
    """豁免子页必须登记原因，且确实不含取数（无 loading/error 标记）"""
    for (rel, sub), reason in STATIC_SUBPAGES.items():
        assert reason.strip(), "静态子页 %s/%s 缺少豁免原因" % (rel, sub)
        template, _ = _assembled_template(rel)
        slices, _ = _slices(template, [sub])
        seg = slices.get(sub) or ""
        assert not re.search(r"Loading|v-loading|loadError", seg), (
            "子页 %s/%s 登记为静态但疑似含取数状态" % (rel, sub))