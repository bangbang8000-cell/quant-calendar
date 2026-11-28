#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.18 UI 改进门禁 (FR-801 / FR-802 / FR-803)

三个"改了源文件但忘了跑生成脚本"的场景，构建不会报错，只会在线上静默出问题：
  1. 改了 css/*.css 但没重新生成 app.css → 线上样式是旧的（且没人会发现）
  2. 模板里加了 el-* 组件但没重新生成 el-registry.js → 该组件不注册，渲染成空元素
  3. 把 12 个 <link> 加回来 / 缓存头被回退 → 首屏体积与缓存策略悄悄劣化

本文件把这三件事变成可失败的断言。
"""
import io
import json
import os
import re
import subprocess
import sys

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FE = os.path.join(ROOT, "frontend")


def _read(rel):
    with open(os.path.join(FE, rel), "r", encoding="utf-8") as f:
        return f.read()


def test_app_css_in_sync_with_sources():
    """app.css 必须等于按 manifest 顺序拼接的结果（否则线上样式与源码不一致）"""
    order = json.load(io.open(os.path.join(FE, "css", "app.manifest.json"), encoding="utf-8"))
    parts = [
        "/*! app.css — 由 scripts/build_css.py 从 css/app.manifest.json 拼接生成，请勿手改。",
        " *  源文件顺序即层叠顺序，改动必须同步 app.manifest.json。",
        " *  条数: %d" % len(order),
        " */",
        "",
    ]
    for name in order:
        body = io.open(os.path.join(FE, "css", name), encoding="utf-8").read()
        parts.append("/* ===== %s ===== */" % name)
        parts.append(body.rstrip("\n"))
        parts.append("")
    expected = "\n".join(parts)
    actual = io.open(os.path.join(FE, "css", "app.css"), encoding="utf-8").read()
    assert actual == expected, (
        "css/app.css 与源文件不一致 —— 改过 css/*.css 后必须重新生成：\n"
        "  cd frontend && python3 scripts/build_css.py"
    )


def test_manifest_covers_every_css_file():
    """manifest 必须覆盖 css/ 下所有业务样式文件，避免新增文件被漏合"""
    order = json.load(io.open(os.path.join(FE, "css", "app.manifest.json"), encoding="utf-8"))
    on_disk = sorted(
        f for f in os.listdir(os.path.join(FE, "css"))
        if f.endswith(".css") and f not in ("app.css",)
    )
    assert sorted(order) == on_disk, (
        "app.manifest.json 与 css/ 实际文件不一致\n  清单: %s\n  实际: %s" % (sorted(order), on_disk)
    )
    assert len(order) == len(set(order)), "manifest 存在重复条目（重复展开会让后段规则被覆盖两次）"


def test_index_html_has_single_business_css_link():
    """index.html 只允许 2 个样式表：element-plus.css（随库版本）+ app.css（业务合并）"""
    html = _read("index.html")
    links = re.findall(r'<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"', html)
    assert len(links) == 2, "样式表链接数 %d != 2: %s" % (len(links), links)
    assert any("/static/css/app.css" in l for l in links), "缺少 app.css 链接"
    # 不允许再逐个引用业务 css（会导致重复下载同一批规则）
    singles = [l for l in links if re.search(r"/static/css/(?!app\.css)", l)]
    assert not singles, "仍逐个引用业务 css: %s" % singles


def test_el_registry_in_sync_with_sources():
    """el-registry.js 必须与源码中出现的 el-* 标签一致（漏注册会渲染成空元素）"""
    r = subprocess.run(
        [sys.executable, os.path.join(FE, "scripts", "gen_el_registry.py"), "--check"],
        capture_output=True, text=True, timeout=90, cwd=FE,
    )
    assert r.returncode == 0, (
        "el-registry.js 与源码不一致 —— 模板里新增/删除了 el-* 组件：\n"
        "  cd frontend && python3 scripts/gen_el_registry.py\n"
        + (r.stdout or "") + (r.stderr or "")
    )


def test_globals_does_not_full_install_element_plus():
    """禁止回退到 app.use(ElementPlus) 全量安装（vendor-ep 907KB 的来源）"""
    globals_js = _read("src/globals.js")
    # v7.18: 断言前剥掉行注释 — 注释里提及旧写法不算违规
    globals_nc = re.sub(r"//[^\n]*", "", globals_js)
    assert "app.use(ElementPlus" not in globals_nc
    assert "installEl" in globals_js, "globals.js 未接入按需注册表"
    index = _read("index.html")
    index_nc = re.sub(r"//[^\n]*", "", index)
    assert "app.use(ElementPlus" not in index_nc, "index.html 仍在使用全量安装"


def test_html_cache_header_prevents_heuristic_caching():
    """首页必须显式 no-store：原实现无任何 Cache-Control，浏览器启发式缓存会让发布后拿到旧 HTML"""
    src = io.open(os.path.join(ROOT, "backend", "main_new.py"), encoding="utf-8").read()
    assert '"Cache-Control": "no-store, no-cache, must-revalidate"' in src, "首页缺少显式 no-store"
    assert '"Pragma": "no-cache"' in src, "首页缺少 Pragma: no-cache（HTTP/1.0 兼容）"


def test_assets_cache_header_guarded_by_status():
    """immutable 只能作用于 200：404 一旦被长缓存，该 URL 一年内无法自愈"""
    src = io.open(os.path.join(ROOT, "backend", "main_new.py"), encoding="utf-8").read()
    m = re.search(r'if path\.startswith\("/assets/"\)([^\n]*):\s*\n\s*response\.headers\["Cache-Control"\]', src)
    assert m, "未找到 /assets/ 缓存头设置"
    assert "status_code == 200" in m.group(1), (
        "/assets/ immutable 必须限定 response.status_code == 200，当前条件: %s" % m.group(1)
    )


def test_mobile_card_degradation_wired():
    """涨停池必须同时具备：分页 + 窄屏卡片（缺一则在 390px 下仍不可用）"""
    page = _read("js/components/shortterm-page.js")
    view = _read("js/components/shortterm/view-part2.js")
    assert "ztPageRows" in page and "ztPage" in page, "缺少涨停池分页状态"
    assert "PAGE_SIZE" in page, "缺少分页尺寸常量"
    assert "ztCards" in page, "缺少窄屏卡片数据映射"
    assert ":data=\"ztPageRows\"" in view, "涨停表格未接分页数据"
    assert "qc-card-list" in view, "涨停池未接入卡片降级"
    assert "qc-desktop-only" in view, "表格未标记桌面可见"


def test_card_list_uses_defined_tokens():
    """新增样式只能用已定义的设计令牌（避免 --border-subtle 这类臆造令牌静默失效）"""
    css = "".join(
        io.open(os.path.join(FE, "css", f), encoding="utf-8").read()
        for f in os.listdir(os.path.join(FE, "css")) if f.endswith(".css")
    )
    defined = set(re.findall(r"^\s*(--[a-z0-9-]+)\s*:", css, re.M))
    used = set(re.findall(r"var\((--[a-z0-9-]+)", css))
    # 允许"仅作为 var() 兜底默认值出现"的令牌（如 var(--x, var(--y)) 的 y 必须已定义）
    undefined = sorted(used - defined)
    # v7.18 棘轮: 存量未定义令牌是 v7.18 之前的历史债务 (HEAD 已含, 本轮 0 新增),
    # 冻结为基线只拦截新增 —— 清偿基线后应同步缩小此集合。
    BASELINE = {
        "--avatar-dark-text", "--badge-danger-text", "--badge-info-text",
        "--badge-success-text", "--badge-warning-text", "--btn-primary-plain-border",
        "--btn-primary-plain-color", "--btn-primary-plain-hover-border",
        "--danger-text", "--el-info", "--el-warning", "--font-bold", "--font-hero",
        "--font-icon", "--font-md", "--font-medium", "--gold-bg", "--info-text",
        "--lh-relaxed", "--market-down-text", "--qc-h1-line", "--qc-h1-weight",
        "--r-md", "--sp-2", "--sp-3", "--sp-4", "--warning-text",
    }
    new_bad = sorted(set(undefined) - BASELINE)
    assert not new_bad, "新增未定义令牌: %s" % new_bad

def test_fr1003_no_stuck_units():
    """FR-1003 棘轮: 模板不得出现 `fmtNum(x) }}%` 硬编码单位（缺失时渲染 '—%'）
    以及 fmtNum 占位符必须为 '—' 而非 '--'。只允许下降, 新增即失败。"""
    pat = re.compile(r"\{\{\s*fmtNum\([^(){}]*\)\s*\}\}\s*[%万元亿]")
    offenders = []
    for dirpath, _dirs, names in os.walk(os.path.join(FE, "js")):
        for n in names:
            if not n.endswith(".js"):
                continue
            p = os.path.join(dirpath, n)
            src = io.open(p, encoding="utf-8").read()
            for m in pat.finditer(src):
                line = src.count("\n", 0, m.start()) + 1
                offenders.append(f"{p}:{line}")
    assert not offenders, "fmtNum 粘单位位点回归: %s" % offenders
    app_logic = _read("js/app-logic.js")
    assert "isNaN(Number(v))) return '--'" not in app_logic, "fmtNum 仍输出 '--' (应为 '—')"
    assert "function fmtPct(" in app_logic, "fmtPct 未定义"
    assert "fmtNum, fmtPct," in app_logic, "qcState 未导出 fmtPct"


def test_fr1003_placeholder_no_nan_render():
    """FR-1003: 高风险数值插值 (toFixed/除法) 必须有 null 守卫, 缺失渲染 '—' 而非 NaN/崩溃"""
    risky = re.compile(r"\{\{\s*\(?[\w.$]+[^{}]*?\.toFixed\([^)]*\)[^{}]*?\}\}\s*[%万亿]")
    offenders = []
    for dirpath, _dirs, names in os.walk(os.path.join(FE, "js", "components")):
        for n in names:
            if not n.endswith(".js"):
                continue
            p = os.path.join(dirpath, n)
            src = io.open(p, encoding="utf-8").read()
            for m in risky.finditer(src):
                line = src.count("\n", 0, m.start()) + 1
                # 判定范围: 匹配片段 + 所在行 + 前一行 (v-if 守卫常写在上一行)
                lines = src.split("\n")
                ctx = lines[line - 1] + (lines[line - 2] if line >= 2 else "")
                # 已带守卫(三元 '—' / null 检查 / v-if / ||0 / ??0) 的不算
                guard = ("'—'" in ctx or "!= null" in ctx or "== null" in ctx
                         or "v-if" in ctx or "|| 0" in ctx or "?? 0" in ctx)
                if not guard:
                    frag = src[m.start():m.end()]
                    offenders.append(f"{p}:{line}: {frag[:60]}")
    assert not offenders, "toFixed 粘单位且无守卫: %s" % offenders


# ===== v7.18 (FR-1101): 个股列表展示形态统一 (量化日历/策略概览/共识榜) =====

def test_fr1101_stocklist_builtin_row_ops():
    """StockList 内建 row-ops — 图标单一来源, N 策略徽章有 strategy_names.length 兜底"""
    src = _read("src/components/common/StockList.vue")
    assert "ops: { type: Object, default: null }" in src, "应声明 ops prop"
    assert "toggleWatchlist" in src, "收藏动作应由组件内建 (qcState 接线)"
    assert src.count('name="star"') == 2, "star 仅允许内建 (虚拟/非虚拟两分支各一), 实际 %d" % src.count('name="star"')
    assert src.count('name="bot"') == 2, "bot 仅允许内建, 实际 %d" % src.count('name="bot"')
    assert "strategyCountOf" in src, "N 策略徽章应有 strategy_names.length 兜底"
    assert "tagCells" in src, "2行2列 tags 网格应有 tagCells 单一来源"
    assert "is-count" in src, "「N 策略」徽章应有独立前置渲染"
    assert "showTagsCount" in src, "计数徽章应经 showTagsCount 前置 (而非网格首格)"
    assert "countTitle" in src, "计数徽章悬浮应含全量策略名 (countTitle)"
    # v7.26 (FR-11): 填充规则移到 stock-list-core.mjs —— 0/1 个策略保留 is-empty 提示格, ≥2 不再补空框
    core = _read("src/components/common/stock-list-core.mjs")
    assert "is-empty" in core, "空策略位应由 tagCellsOf 输出 is-empty 提示格"
    assert "qc-stock-badge-wrap" not in src, "独立徽章列应已并入 tags 网格 (窄栏容量)"


def test_fr1101_stock_actions_css_fixed_width():
    """操作区 CSS: flex + 定宽(读令牌) + 热区走令牌 + manual-check 旧 margin 覆盖"""
    css = _read("css/components.css")
    idx = css.find(".qc-stock-actions {")
    assert idx > 0, ".qc-stock-actions 必须有样式定义 (缺失是本轮「不齐」根因)"
    block = css[idx:idx + 900]
    assert "display: flex" in block, "操作区应为 flex"
    # v7.19 (FR-1): 宽度改读令牌 —— 与 StockList.vue 的 getComputedStyle 同源，消灭双写
    assert "width: var(--qc-stock-ops-w)" in block, \
        "操作区宽度应读 --qc-stock-ops-w 令牌 (标准 92 = 4 槽 × 20px + 3 × 4px)"
    assert ".qc-stock-actions .manual-check { margin-left: 0; }" in css, "旧全局 margin-left: 8px 必须覆盖"
    assert ".is-off { visibility: hidden" in css.replace("  ", " "), \
        "AI/K线 缺席应占位隐藏 (visibility) 而非移除, 否则列宽逐行浮动"


def test_v719_row_size_tokens_three_tiers():
    """v7.19 (FR-1/FR-2): 行高/行距/列宽/图标/热区收敛到 tokens.css，且三档密度各覆盖一套

    只断言「令牌存在 + 三档单调递增」，不锁死像素值 —— 尺寸微调不应触发门禁失败，
    但「只改一档 / 少一个令牌」必须失败（那正是 StockList 与 CSS 双写的回归入口）。
    """
    tokens = _read("css/tokens.css")
    need = ("--qc-row-h", "--qc-row-gap", "--qc-stock-info-w", "--qc-stock-ops-w",
            "--qc-op-hit", "--qc-stock-badge-w", "--qc-stock-icon", "--qc-stock-tag-font")
    for tok in need:
        assert (tok + ":") in tokens, "tokens.css 应声明 " + tok

    # tokens.css 里 html[data-density="compact"] 有多处（控件/图标等其它组令牌也各有一套密度档），
    # 必须把搜索区间限定在本组令牌自己的区段内，否则会误取到别组规则。
    sect = tokens.find("个股行尺寸三档")
    assert sect > 0, "tokens.css 应有「个股行尺寸三档」注释区块"
    region = tokens[sect:]

    def block_of(selector):
        k = region.find(selector)
        assert k > 0, "个股行尺寸区段缺少密度档选择器 " + selector
        return region[k:region.find("}", k)]

    root_at = region.find(":root")
    assert root_at > 0, "个股行尺寸区段应有标准档 :root 块"
    tiers = {
        "base": region[root_at:region.find("}", root_at)],
        "compact": block_of('html[data-density="compact"]'),
        "spacious": block_of('html[data-density="spacious"]'),
    }
    # 纵向量（行高/行距/图标/热区）三档严格递增；
    # 横向量（信息列/操作区/徽章）只要求不小于 —— 策略区是唯一弹性列，
    # 放宽档把 info/ops/badge 也做大，格子就掉到 78px < 6 字中文名 80px，必截断（实测 20 处）。
    VERTICAL = ("--qc-row-h", "--qc-row-gap", "--qc-stock-icon", "--qc-op-hit")
    HORIZONTAL = ("--qc-stock-info-w", "--qc-stock-ops-w", "--qc-stock-badge-w")
    keys = VERTICAL + HORIZONTAL

    def px(block, tok):
        m = re.search(re.escape(tok) + r":\s*(\d+)px", block)
        return int(m.group(1)) if m else None

    for name, blk in tiers.items():
        for tok in keys:
            assert px(blk, tok) is not None, "%s 档缺少 %s 的像素值 (三档必须各给一套)" % (name, tok)

    for tok in VERTICAL:
        c, b, sp = (px(tiers["compact"], tok), px(tiers["base"], tok), px(tiers["spacious"], tok))
        assert c < b < sp, "%s 三档应严格递增, 实际 %s/%s/%s" % (tok, c, b, sp)
    for tok in HORIZONTAL:
        c, b, sp = (px(tiers["compact"], tok), px(tiers["base"], tok), px(tiers["spacious"], tok))
        assert c <= b <= sp, "%s 三档应单调不减 (紧凑档必须更窄才装得下代码), 实际 %s/%s/%s" % (tok, c, b, sp)
    # 横向预算守恒：strategy 区在高密度档也不得被压到 6 字中文名放不下
    assert px(tiers["spacious"], "--qc-stock-info-w") <= px(tiers["base"], "--qc-stock-info-w"), \
        "spacious 的信息列不得比标准档更宽 (会挤掉策略区)"

    # 策略 tag 字号三档：紧凑档必须比标准档更小（1366 屏不截断的唯一手段）
    assert "var(--qc-font-size-2xs)" in tiers["compact"], "compact 档策略 tag 应降一档字号 (11px)"
    assert "var(--qc-font-size-xs)" in tiers["base"], "标准档策略 tag 应为 --qc-font-size-xs (12px)"


def test_v719_stock_row_grid_structure():
    """个股行栅格 = [序号 16px][信息列·定宽令牌][策略区·上限令牌][操作区·定宽下限]"""
    css = _read("css/components.css")
    row_idx = css.find(".qc-stock-row {")
    assert row_idx > 0, ".qc-stock-row 必须有样式定义"
    row_block = css[row_idx:row_idx + 2200]
    # v7.26 (FR-11): 策略区由无限 1fr 改为有上限的 --qc-stock-strat-w，操作区吃余量并右对齐
    assert ("grid-template-columns: 16px var(--qc-stock-info-w) "
            "minmax(0, var(--qc-stock-strat-w)) minmax(var(--qc-stock-ops-w), 1fr)"
            in row_block), ("四列栅格应 = 序号 + 信息列令牌 + 策略区上限令牌 + 操作区令牌；"
                            "策略区不得再是无限 1fr (会随屏幕拉伸)")
    assert "height: var(--qc-row-h)" in row_block, "行高应读 --qc-row-h 令牌 (三档密度生效的前提)"
    assert "overflow: hidden" in row_block, "行走 overflow:hidden (策略 tag 不得撑破行)"

    list_idx = css.find(".qc-stock-list {")
    assert list_idx > 0
    list_block = css[list_idx:list_idx + 400]
    assert "gap: var(--qc-row-gap)" in list_block, \
        "非虚拟分支行距应读 --qc-row-gap (内联 gap 会与虚拟分支错位)"

    tags_idx = css.find(".qc-stock-tags {")
    assert tags_idx > 0
    tags_block = css[tags_idx:tags_idx + 400]
    assert "display: flex" in tags_block, "tags 区应为 flex (计数徽章前置 + 策略网格并排)"
    assert "width: 100%" in tags_block, "tags 区应吃满策略列 (定宽会让右列漂移)"

    grid_idx = css.find(".qc-strat-grid {")
    assert grid_idx > 0, "策略 2行2列网格 .qc-strat-grid 必须有样式定义"
    grid_block = css[grid_idx:grid_idx + 500]
    assert "grid-auto-flow: column" in grid_block, "策略网格应列优先 (1-2 个靠左, 右列留空)"
    assert "minmax(0, 1fr)" in grid_block, "策略网格列/行应 minmax(0,1fr) 防溢出"
    assert ".qc-stock-tag.is-empty" in css, "空策略位应有虚线占位样式 (is-empty)"
    assert css.find(".qc-stock-tag.is-count", tags_idx) > tags_idx, "「N 策略」徽章应有前置定宽样式"
    count_idx = css.find(".qc-stock-tag.is-count", tags_idx)
    assert "var(--qc-stock-badge-w)" in css[count_idx:count_idx + 400], \
        "徽章宽度应读 --qc-stock-badge-w 令牌"


def test_fr1101_call_sites_migrated():
    """三处调用点全部迁移到 :ops=, 不再手写收藏/AI 图标 span"""
    rels = [
        "js/components/calendar-page.js",
        "js/components/strategies/view-part1.js",
        "js/components/strategies/view-part2.js",
    ]
    for rel in rels:
        src = _read(rel)
        assert ":ops=\"" in src, rel + " 应使用内建 :ops"
    # bot 图标仅允许: StockList 内建 (状态注记) + calendar footer 信号解读 (内容图标, 合理保留)
    for rel in rels[1:]:
        assert 'name="bot"' not in _read(rel), rel + " 不应再手写 AI 图标 span"
    # calendar 例外: 「策略分布」inline-tag 行内注记 (chips, 非列表行) 维持现状 — 不在本方案 scope
    cal = _read(rels[0])
    assert 'template #name-suffix' not in cal, "calendar 列表不应再用 name-suffix 槽挂图标"
    idx = cal.find("watch-star")
    if idx >= 0:
        assert "inline-tag" in cal[max(0, idx - 400):idx], "calendar 仅允许 inline-tag 上下文残留 watch-star"
