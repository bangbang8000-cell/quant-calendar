# -*- coding: utf-8 -*-
"""
V6.10 (配色专项·D): token 治理门禁

守住四件事 (均为本次配色专项的目标, 并有明确口径):
1. 悬空引用 = 0        —— `var(--x)` / `getCSSVar('--x')` / `getPropertyValue('--x')` 引用的令牌必须有定义
2. 死 token <= 白名单  —— 定义后全树无引用 (白名单只放设计资产: 色阶/布局/间距)
3. 语义层明暗对称       —— L2 语义令牌 (surface/text/border/state/market/nav/btn/chart) 两侧都要有定义
4. 非源文件硬编码色 = 0 —— 字面量只允许出现在 token 源文件 (tokens.css/themes.css/themes.js)
                          与「局部 token 定义」; getCSSVar 的运行时兜底与 `qc-allow-hardcode` 标注豁免

口径说明 (与 docs/EVAL-UI-COLOR-SYSTEM.md §2.9 一致):
- 只扫描 git 版本化源码 (排除 node_modules / dist / lib 等 vendor 与本地未跟踪文件)
- CSS 定义按 index.html 的 <link> 顺序合并, 与浏览器级联一致
"""
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

BASE = g.BASE
FRONTEND = g.FRONTEND

# 设计资产白名单: 定义后暂无引用但必须保留 (色阶补全 / 布局 / 间距)
# 6.1.0 (T-6.1.0.2) 审计结论: 逐项复核, 全部为有意保留的设计资产/兼容契约, 无「无保留价值」项;
#   ① 色阶补全 (neutral-500/700/800, primary-900) —— 运行期按色相发射的前置档位, 语义层引用可能随时接入
#   ② 布局/间距契约 (content-max-width, space-12) —— 4px 网格标尺完整度
#   ③ V6.6 M2 兼容层 (sp-*/r-*/easing-exit) —— test_v66_m2_tokens.py 契约固定
#   ④ V6.11 实底档家族 (btn-primary-*) —— 浅底彩字改版后作为同一契约保留, 改回实底按钮时可整族复用
DEAD_TOKEN_WHITELIST = {
    "--qc-neutral-500",      # 中性色阶补全 (运行期按色相发射)
    "--qc-neutral-700",      # 中性色阶补全
    "--qc-neutral-800",      # 中性色阶补全
    "--qc-primary-900",      # 品牌色阶补全
    "--qc-content-max-width",  # 布局契约
    "--qc-space-12",         # 间距标尺补全
    # 6.2.1 (F4): 弹窗宽度标尺 — el-dialog width 为属性值, 变量作设计标尺/文档契约 (由 test_dialog_width_scale_621 约束)
    "--qc-dialog-width-sm", "--qc-dialog-width-md", "--qc-dialog-width-lg", "--qc-dialog-width-xl",
    # V6.6 M2 兼容层 (旧组件/外部脚本仍可能引用, 由 test_v66_m2_tokens.py 作为契约固定)
    "--sp-1", "--sp-2", "--sp-3", "--sp-4",
    "--r-sm", "--r-md", "--r-lg", "--r-xl", "--r-full",
    "--easing-exit",
    # 6.5.8 (C3): 排版角色层 —— 定义给「页面层新代码」引用 (page-title/card-title 已消费),
    # 老代码按渐进迁移策略不动, 故 data-value/label/caption 暂为无人消费的设计契约。
    "--font-role-data-value", "--font-role-label", "--font-role-caption",
    # V6.11 (需求轮4): 主按钮改「浅底彩字」后, 实心组已于 6.5.7 (B1) 收敛为单一 --primary-solid,
    # 原 --btn-primary-border/color/hover-*/active-* 已删除; 仅 plain/text 两个变体族仍在使用。
    # v6.4 (FR-6.4.4): 「重色面板」原语 (渐变底 + 其上前景) —— 唯一消费点 .detail-header
    # 已改为卡片底 + 描边, 这对令牌保留定义供暗色浮层/强调面板复用; 生产消费点归零属预期,
    # 不删除是为了保持主题令牌面稳定 (删除会波及明/暗/中性三分支的定义与色相求解)。
    "--gradient-panel", "--panel-fg",
    # 6.5.1 (FR-655.5): 动效令牌 qc 别名层 — PRD 口径命名契约, 实际档位经 --duration-*/--easing-* 消费
    "--qc-duration-fast", "--qc-duration-base", "--qc-duration-slow",
    "--qc-ease-standard", "--qc-ease-enter",
    # 6.5.1 (FR-655.2): h2/h3 层级标尺 — h1 已由 .qc-page-h1 消费, h2/h3 供内容标题逐步迁移
    "--qc-h2-size", "--qc-h2-line", "--qc-h2-weight",
    "--qc-h3-size", "--qc-h3-line", "--qc-h3-weight",
    # 6.5.1 (FR-656.1): 表面三档层级标尺 (canvas/card/raised) — 暗色档由 dark-pro 覆盖,
    # 消费点为层级门禁与暗色浮层迁移; light 档经 --qc-background/--qc-card/--surface-raised 级联
    "--qc-surface-canvas", "--qc-surface-card", "--qc-surface-raised",
}

# 语义层前缀 —— 这些令牌在明暗两侧必须同时存在 (L1 原始色阶不在此列)
SEMANTIC_PREFIXES = (
    "--surface-", "--text-", "--border-", "--state-", "--market-",
    "--qc-nav-", "--qc-muted", "--qc-card", "--qc-background", "--qc-foreground",
    "--qc-border", "--qc-overlay", "--chart-", "--btn-primary-", "--primary-",
    "--bg-", "--card-border", "--panel-fg",
)
# 语义层允许单侧存在的例外 (均为 EP 变量或明暗语义本身不同)
SEMANTIC_ASYMMETRY_WHITELIST = {
    "--el-dropdown-bg-color",
    "--bg-page-rgb",          # 仅暗色需要 (loading 遮罩底色)
    "--scrollbar-thumb",      # 运行期两侧都发, CSS 兜底仅暗色
}

# 双源白名单: CSS 兜底 + 运行期覆盖 (既定架构模式 —— 运行期权威, CSS 兜底)
# 新增双源令牌必须在此登记, 避免出现「两个真相源」而不自知。
# V6.11 (需求轮4): --brand-soft-text 走同一模式 (CSS 静态兜底 + themes.js 按 soft 底求解覆盖) → 96 -> 98。
DUAL_SOURCE_COUNT_LIMIT = 98

_SRC_OK = {"css/tokens.css", "css/themes.css", "js/themes.js"}
_HEX = re.compile(r"#[0-9a-fA-F]{3,8}\b")
_VARREF = re.compile(r"var\(\s*(--[a-zA-Z0-9-]+)"
                     r"|getCSSVar\(\s*['\"](--[a-zA-Z0-9-]+)"
                     r"|getPropertyValue\(\s*['\"](--[a-zA-Z0-9-]+)")


def _tracked_frontend_files():
    """6.5.1: 改为文件系统遍历 (git ls-files 依赖暂存状态, 新增 css 拆分文件未 add 时会漏扫)。"""
    out = []
    for root_dir, dirs, names in os.walk(os.path.join(BASE, "frontend")):
        rel_root = os.path.relpath(root_dir, BASE)
        parts = rel_root.replace(os.sep, "/").split("/")
        if any(p in ("node_modules", "dist", "lib", ".git") for p in parts):
            dirs[:] = []
            continue
        for name in names:
            if name.endswith((".css", ".js", ".html", ".vue")):
                out.append(os.path.join(root_dir, name))
    return out


def _all_defined_tokens():
    css = g.css_defs()
    rt = g.runtime_tokens()
    defined = set(css["root"]) | set(css["gold"]) | set(css["dark"])
    for cfg in rt.values():
        defined |= set(cfg)
    return defined


def test_no_dangling_token_references():
    """悬空引用 = 0 (theme.js 运行期注入的令牌也算已定义)。"""
    defined = _all_defined_tokens()
    dangling = {}
    for path in _tracked_frontend_files():
        rel = os.path.relpath(path, BASE)
        for i, line in enumerate(open(path, encoding="utf-8", errors="ignore"), 1):
            st = line.strip()
            if st.startswith(("/*", "*", "//", "<!--")):
                continue
            for m in _VARREF.finditer(line):
                name = m.group(1) or m.group(2) or m.group(3)
                if name and name not in defined:
                    dangling.setdefault(name, []).append("%s:%d" % (rel, i))
    assert not dangling, "存在悬空令牌引用: %s" % {k: v[:3] for k, v in list(dangling.items())[:10]}


def test_dead_tokens_within_whitelist():
    """死 token 只允许白名单内的设计资产。"""
    defined = _all_defined_tokens()
    used = set()
    for path in _tracked_frontend_files():
        src = open(path, encoding="utf-8", errors="ignore").read()
        for m in _VARREF.finditer(src):
            name = m.group(1) or m.group(2) or m.group(3)
            if name:
                used.add(name)
    dead = {t for t in defined - used if not t.startswith("--el-")}
    unexpected = sorted(dead - DEAD_TOKEN_WHITELIST)
    assert not unexpected, (
        "出现未登记的死 token (%d 个): %s\n"
        "→ 删除它, 或加入 DEAD_TOKEN_WHITELIST 并说明其为设计资产" % (len(unexpected), unexpected[:20]))


def test_semantic_tokens_symmetric_between_modes():
    """L2 语义令牌必须在明/暗两侧都有定义 (L1 色阶不在此列)。"""
    css = g.css_defs()
    rt = g.runtime_tokens()
    light = set(css["root"]) | set(css["gold"]) | set(rt["light:45"])
    dark = set(css["root"]) | set(css["dark"]) | set(rt["dark:45"])

    def sem(s):
        return {t for t in s if t.startswith(SEMANTIC_PREFIXES)}

    only_light = sorted(sem(light) - sem(dark) - SEMANTIC_ASYMMETRY_WHITELIST)
    only_dark = sorted(sem(dark) - sem(light) - SEMANTIC_ASYMMETRY_WHITELIST)
    assert not only_light and not only_dark, (
        "语义令牌明暗不对称: 仅亮色 %s / 仅暗色 %s" % (only_light, only_dark))


def test_dual_source_tokens_within_limit():
    """双源令牌 (CSS 兜底 + 运行期覆盖) 不得继续膨胀。"""
    css = g.css_defs()
    rt = g.runtime_tokens()
    css_all = set(css["root"]) | set(css["gold"]) | set(css["dark"])
    dual = (set(rt["light:45"]) & css_all) | (set(rt["dark:45"]) & css_all)
    assert len(dual) <= DUAL_SOURCE_COUNT_LIMIT, (
        "双源令牌数 %d 超过上限 %d —— 新增的双源令牌应改为单一来源, "
        "或显式上调 DUAL_SOURCE_COUNT_LIMIT 并说明理由" % (len(dual), DUAL_SOURCE_COUNT_LIMIT))


def test_no_hardcoded_colors_outside_token_sources():
    """非 token 源文件不得散落字面量颜色 (运行时兜底与显式豁免除外)。"""
    offenders = []
    for path in _tracked_frontend_files():
        rel = os.path.relpath(path, FRONTEND).replace("\\", "/")  # Windows 反斜杠归一, 保证 _SRC_OK 匹配
        if rel in _SRC_OK:
            continue
        in_block = False
        for i, line in enumerate(open(path, encoding="utf-8", errors="ignore"), 1):
            st = line.strip()
            if in_block:
                if "*/" in st:
                    in_block = False
                continue
            if st.startswith("/*") and "*/" not in st:
                in_block = True
                continue
            if st.startswith(("/*", "*", "//", "<!--")):
                continue
            if ("getCSSVar(" in line or "getPropertyValue(" in line
                    or "var(--" in line or "qc-allow-hardcode" in line):
                continue
            # 局部 token 定义 (如独立文档页的 :root 调色板) 允许
            stripped = re.sub(r"--[a-zA-Z0-9-]+\s*:\s*[^;]*", "", line)
            hits = _HEX.findall(stripped)
            if hits:
                offenders.append("%s:%d %s" % (rel, i, ",".join(hits)))
    assert not offenders, (
        "发现 %d 处散落硬编码色:\n  %s" % (len(offenders), "\n  ".join(offenders[:15])))
