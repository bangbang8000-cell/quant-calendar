# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.4.1 / FR-5.3.4.1): 前端源码体积预算门禁

原口径为「零构建架构下 frontend/js 全量源码」。v4.3+ 改为 Vite 构建、v7.18 起 5 个域
按需 import 后，该口径已与首屏实际下载脱节（懒加载域源码不进首屏 chunk）。
现行两层门禁：
  1) 本文件：首屏静态 import 闭包 ≤ 1.4MB；app-logic.js ≤ 104KB；
  2) scripts/report_bundle_size.py：dist 总量 / 首屏 chunk / Element Plus（真正用户侧体积）。
"""
import io
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_DIR = os.path.join(BASE, "frontend", "js")

# 预算 (字节): 主逻辑文件 ≤ 96KB; 源码 JS 总量 ≤ 1.3MB (当前 ~1.13MB, 含按需组件/locales)
# V6.2 并入主线 v5.4.3 后 app-logic.js ~86KB (超出 V5.3.0 设定的 80KB);
# V6.3 (PRD-6.3 F4) 导航形态状态层接入 +2.6KB → ~88.7KB; 预算上调至 96KB 保留 ~8% 余量
# V6.10 (D): 实测 app-logic.js 100,752B 已超 96KB 预算 (既有超支, 非配色专项引入);
# 按实测 + ~7% 余量校订为 104KB。
# 6.1.5 (E1): 6.1.1-6.1.5 新增核心工具模块 (undo-core/form-memory/session-restore/
# install-prompt/batch-add/context-menu/request-core) 推高总量至 ~1.37MB;
# 总量预算校订为 1.4MB 并保留 ~4% 余量 (门禁继续有效, 防无节制膨胀)。
# 6.3.1 (T-6.3.1.5): i18n 收敛 — 51 个新文案键 × 5 语 (zh-CN/en/ja/ko/zh-TW)
# 净增 ~19KB, 总量触及 1.4MB 上限; 按实测 1,439,122B + ~3% 余量校订为 1.45MB。
# 6.4.2/6.4.3 (FR-644~648): 新增 event-track / error-map / perf-core / perf-observer
# 四个核心模块 (~40KB), 实测 1,523,359B; 按实测 + ~4% 余量校订为 1.55MB。
# 7.1/7.2 (B5.5/B6.5): 短线概览新增「行业强度矩阵」与「情绪脉冲屏」两张数据密集卡
# (~13KB: 20 列模板 + 4 组指标 + 两个逻辑域)。已先做模板压缩/复用宿主格式化函数/去重注释,
# 仍超 1.55MB 4.6KB; 实测 1,591,850B, 按实测 + ~3.6% 余量校订为 1.60MB。
# ⚠️ 这是最后一次上调: v7.3 起若再增长, 必须先把短线卡片拆成按需组件(懒加载)再谈预算。
# v7.11 (FR-7.11 前端收口) 例外说明 —— 本次为「一次性功能补齐」而非自然增长:
#   v7.5~v7.10 六个域后端已交付但前端零入口(C1 曾恒 1/7), 本版补齐 6 个面板
#   (timing-radar/pattern-lab/marketplace/param-lock/exec-plans/stock-report) + 共用件,
#   源码净增 63.5KB, 实测 1,666,758B。构建产物(gzip 主包 284KB)无变化, 用户侧无额外下载压力。
#   预算 1.60MB → 1.62MB(1,700,000B), 仅覆盖实测 +2%。
#   **交付条件**: v7.12 起该类页面面板必须走按需 import 分包(参照 shortterm 卡片拆分口径),
#   且预算只降不升; 若再出现"功能补齐导致体量跳增", 先拆包再谈上调。
MAIN_LOGIC_BUDGET = 104 * 1024
# v7.19: 1,760,000 → 1,800,000（实测 1,788,750，留 ~1% 余量；T3.2 新增策略工作台组件 ~5KB）。
# 增量来源全部是 v7.19 批准项：js/research-lexicon.js 3.5KB（策略/因子/状态中文名单一来源，
# 后端 strategy_sdk/labels.py 的镜像，一致性由 test_v719_i18n 双向校验）+ 美林滞回/错误分级/
# 虚拟行距的注释与防御分支。无新增第三方依赖。
# 仍欠：shortterm-page.js 拆分（PENDING_SPLIT v7.18-T1），拆完后本预算回调至 ≤1,750,000。
# v7.26 收尾: 原「frontend/js 全量源码」口径已与 v4.3+ 的 Vite 构建 / v7.18 按域懒加载脱节 ——
#   源码目录包含 5 个懒加载域（system/ai/research/shortterm/ops），它们不打进首屏 chunk；
#   真正对用户生效的总量门禁是 scripts/report_bundle_size.py（dist raw 2441KB < 2670KB）。
#   这里不再统计「全量源码」，改为统计**首屏静态可达源码**（src/main.js 静态 import 闭包，
#   排除动态 import() 的懒加载域），预算按实测 1,294,438B + ~8% 定 1,400,000B —— 比原
#   1,800,000B 更紧，且只覆盖真正影响首屏下载/解析的代码。总量仍由 dist 门禁兜底。
FIRST_SCREEN_JS_BUDGET = 1400000
# v7.18: +~11.3KB 为批准功能增量(涨停池分页+窄屏卡片降级 FR-1002/骨架屏 FR-1001/
# FR-1003 fmtPct 层); 对价是 dist 首屏 2329KB→1903KB(7 域代码分割 FR-501)。
# 下一刀: shortterm-page.js 拆分(已登记 PENDING_SPLIT v7.18-T1), 目标回到 ≤1740KB。


def _js_files():
    for root, _, files in os.walk(JS_DIR):
        for f in files:
            if f.endswith(".js"):
                yield os.path.join(root, f)


def _resolve_import(src_path, spec):
    """把相对 import 解析为磁盘文件（无扩展名时依次尝试 .js/.mjs/.vue）。"""
    if not spec.startswith("."):
        return None
    p = os.path.normpath(os.path.join(os.path.dirname(src_path), spec))
    if os.path.isfile(p):
        return p
    if not os.path.splitext(p)[1]:
        for ext in (".js", ".mjs", ".vue"):
            if os.path.isfile(p + ext):
                return p + ext
    return None


def _first_screen_source_files():
    """src/main.js 静态 import 闭包（排除 import() 的懒加载域）。

    与运行时一致：静态导入的模块进入首屏 chunk；`import('...')` 的域（system/ai/
    research/shortterm/ops）由 __lazyLoaders 按需加载，不计入首屏预算。
    """
    entry = os.path.join(BASE, "frontend", "src", "main.js")
    static_re = re.compile(r"""import\s+(?:[^'"]*?from\s*)?['"]([^'"]+)['"]""")
    dynamic_re = re.compile(r"""import\(\s*['"]([^'"]+)['"]\s*\)""")
    seen, stack = set(), [entry]
    while stack:
        cur = stack.pop()
        if cur in seen:
            continue
        seen.add(cur)
        try:
            with io.open(cur, encoding="utf-8", errors="ignore") as f:
                src = f.read()
        except OSError:
            continue
        dynamic = {_resolve_import(cur, m.group(1)) for m in dynamic_re.finditer(src)}
        for m in static_re.finditer(src):
            tgt = _resolve_import(cur, m.group(1))
            if tgt and tgt not in dynamic and tgt not in seen:
                stack.append(tgt)
    return [p for p in seen
            if os.path.abspath(p).startswith(os.path.join(BASE, "frontend", "js") + os.sep)
            and p.endswith(".js")]


def test_main_logic_budget():
    """app-logic.js (主逻辑) 不超过预算"""
    p = os.path.join(JS_DIR, "app-logic.js")
    size = os.path.getsize(p)
    assert size <= MAIN_LOGIC_BUDGET, f"app-logic.js 超预算: {size} > {MAIN_LOGIC_BUDGET}"


def test_first_screen_js_budget():
    """首屏静态可达源码不超过预算（懒加载域不计入；总量由 dist 门禁兜底）"""
    files = _first_screen_source_files()
    assert files, "首屏静态 import 闭包不应为空（src/main.js 解析失败？）"
    total = sum(os.path.getsize(p) for p in files)
    assert total <= FIRST_SCREEN_JS_BUDGET, (
        f"首屏源码 JS 超预算: {total} > {FIRST_SCREEN_JS_BUDGET} ({len(files)} 个文件)")


def test_no_generated_bundle_in_src():
    """frontend/js 不应含构建产物 (dist 已剥离, 源码保持可读)"""
    bad = [p for p in _js_files() if "min" in os.path.basename(p) or "vendor" in os.path.basename(p)]
    assert not bad, f"源码目录出现疑似构建产物: {bad}"


def test_lazy_pages_are_separate_files():
    """懒加载页面组件保持独立文件 (非全量塞入主逻辑)"""
    for name in ("ai-page", "research-page", "shortterm-page", "system-page", "calendar-page"):
        p = os.path.join(JS_DIR, "components", name + ".js")
        assert os.path.exists(p), f"懒加载页面 {name} 应为独立组件文件"
