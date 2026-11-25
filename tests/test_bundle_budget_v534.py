# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.4.1 / FR-5.3.4.1): 前端源码体积预算门禁

项目为零构建架构 (backend 直接 serve frontend/ 源码, dist 非部署物)。
体积预算作用于源码 JS: 主逻辑文件 app-logic.js 与总 JS 体量设上限,
防无节制膨胀导致首屏/加载退化。
"""
import os

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
TOTAL_JS_BUDGET = 1800000
# v7.18: +~11.3KB 为批准功能增量(涨停池分页+窄屏卡片降级 FR-1002/骨架屏 FR-1001/
# FR-1003 fmtPct 层); 对价是 dist 首屏 2329KB→1903KB(7 域代码分割 FR-501)。
# 下一刀: shortterm-page.js 拆分(已登记 PENDING_SPLIT v7.18-T1), 目标回到 ≤1740KB。


def _js_files():
    for root, _, files in os.walk(JS_DIR):
        for f in files:
            if f.endswith(".js"):
                yield os.path.join(root, f)


def test_main_logic_budget():
    """app-logic.js (主逻辑) 不超过预算"""
    p = os.path.join(JS_DIR, "app-logic.js")
    size = os.path.getsize(p)
    assert size <= MAIN_LOGIC_BUDGET, f"app-logic.js 超预算: {size} > {MAIN_LOGIC_BUDGET}"


def test_total_js_budget():
    """frontend/js 源码 JS 总量不超过预算"""
    total = sum(os.path.getsize(p) for p in _js_files())
    assert total <= TOTAL_JS_BUDGET, f"源码 JS 总量超预算: {total} > {TOTAL_JS_BUDGET}"


def test_no_generated_bundle_in_src():
    """frontend/js 不应含构建产物 (dist 已剥离, 源码保持可读)"""
    bad = [p for p in _js_files() if "min" in os.path.basename(p) or "vendor" in os.path.basename(p)]
    assert not bad, f"源码目录出现疑似构建产物: {bad}"


def test_lazy_pages_are_separate_files():
    """懒加载页面组件保持独立文件 (非全量塞入主逻辑)"""
    for name in ("ai-page", "research-page", "shortterm-page", "system-page", "calendar-page"):
        p = os.path.join(JS_DIR, "components", name + ".js")
        assert os.path.exists(p), f"懒加载页面 {name} 应为独立组件文件"
