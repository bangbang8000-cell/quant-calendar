# -*- coding: utf-8 -*-
"""美林时钟周期板契约 (原 V5.15 时间轴美化 TC-5.15.21~.25)。

V6.11 (需求轮2·批次3) 口径变更: 旧「历史周期时间轴」(.tl-* 蛇形连线 + 带外 chip 行) 已整体退役,
改由「周期演进板」(.mc-*) 承载 —— 本文件保留原测试编号, 断言已改为新契约:
- 带高: 本轮 32px / 历史 28px (文字收进色轴内)
- 排版: 段内标签 12px 加粗 + 正文色; 月数弱化
- 当前段强化 + 阶段色标识 (左侧色条) + 预测段斜纹 + 主题原生合成底
- 响应式: 百分比宽度自适应 (旧 .tl-* 适配块已删除)
- 交互 (V5.21 起的契约): 阶段块点击 → 阶段详情; 周期带/阶段矩阵切换; 评估轨迹; 实时进度
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _css_block(css, selector):
    # 精确匹配该选择器直接跟 { (排除 .tl-cycle.is-collapsed .tl-gantt 等复合选择器)
    m = re.search(re.escape(selector) + r"\s*\{([^}]*)\}", css)
    return m.group(1) if m else None


def _css_block_exact(css, selector):
    # 行首锚定: ^selector { — 匹配基础规则而非复合选择器
    m = re.search(r"^" + re.escape(selector) + r"\s*\{([^}]*)\}", css, re.M)
    return m.group(1) if m else None


def test_timeline_band_heights():
    """V6.11 (需求轮2·批次3) 契约: 本轮演进带 32px / 历史周期带 28px。

    旧实现历史带仅 24px, 塞不下「名称 + 月数」带内文字 (文字被迫外移到 .mc-time-chip 行);
    V6.11 起统一为「文字在色轴内」, 历史带抬到 28px。
    """
    css = _read_f("css/layout.css")
    b = _css_block_exact(css, ".mc-band")
    assert b and "height: 32px" in b, "本轮演进带应为 32px"
    sm = _css_block_exact(css, ".mc-band-sm")
    assert sm and "height: 28px" in sm, "历史周期带应为 28px (V6.11 由 24px 抬升)"


def test_timeline_inband_label_typography():
    """TC-5.15.22 (V6.11 口径): 段内标签 xs(12px) + semibold + 正文色; 月数弱化; 无带外 chip 行"""
    css = _read_f("css/layout.css")
    seg = _css_block_exact(css, ".mc-seg")
    assert seg, ".mc-seg 规则应存在"
    assert "font-size: var(--qc-font-size-xs)" in seg, "段内标签字号应为 xs (12px)"
    assert "font-weight: var(--font-semibold)" in seg, "段内标签应加粗"
    assert "color: var(--text-primary)" in seg, "段内文字应用正文色 (随明暗自适应, 原为固定深字令牌)"
    months = _css_block(css, ".mc-seg-months")
    assert months and "opacity" in months, "月数应弱化 (opacity)"
    js = _read_f("js/components/strategies-page.js")
    tpl = js.split("setup()")[0]          # 只看模板区 (注释中的历史说明不计)
    assert 'class="mc-time-chip"' not in tpl, "带外阶段标签行应已移除 (文字收进色带)"


def test_timeline_current_emphasis_and_stage_identity():
    """TC-5.15.23 (V6.11 口径): 当前段 inset 强化 + 阶段色标识 (左侧 3px 色条) + 预测段斜纹 + 主题原生底"""
    css = _read_f("css/layout.css")
    cur = _css_block(css, ".mc-seg.is-cur")
    assert cur and "inset" in cur, "当前段应有 inset 强化"
    js = _read_f("js/components/strategies-page.js")
    assert "borderLeft: '3px solid '" in js, "阶段段应带左侧阶段色条 (保留阶段身份)"
    assert "repeating-linear-gradient" in js, "预测段应保留斜纹样式"
    assert "color-mix(in srgb, " in js, "阶段底应为主题原生合成色 (阶段色 22% + 卡片表面)"
    assert "var(--text-primary)" in js, "段内文字应走正文色令牌"


def test_timeline_responsive_fluid():
    """TC-5.15.25 (V6.11 口径): 阶段带按百分比宽度自适应 → 旧时间轴的 768px 适配块应已删除"""
    resp = _read_f("css/responsive.css")
    assert ".tl-" not in resp, "旧时间轴 (.tl-*) 响应式规则应已删除"
    assert "merrill-stage-chip" not in resp, "旧阶段 chip 响应式规则应已删除"
    js = _read_f("js/components/strategies-page.js")
    assert "left: g.left + '%', width: g.width + '%'" in js, \
        "阶段带应按百分比宽度自适应 (无需移动端专用规则)"


def test_timeline_interactions():
    """TC-5.15.24 — V5.21 契约变更 (用户反馈"绘制不美观")。

    旧「蛇形时间轴」的交互 (轮次折叠 / 阶段色图例 / 回到最新) 已随模板整体退役,
    由新「周期演进板」替代。新交互契约:
      ① 阶段块点击 → 打开阶段详情报告 (showTimelineStage)
      ② 周期带 / 阶段矩阵 视图切换 (mcHistView)
      ③ 评估轨迹: 随大模型评估与时间演进更新 (mcTrailRuns)
      ④ 当前阶段实时进度/剩余/成熟度 (mcProgStyle / mcEndRange)
    """
    src = _read_f("js/components/strategies-page.js")
    assert "mc-board" in src, "应含新「周期演进板」"
    assert "showTimelineStage" in src, "阶段块应可点击查看阶段详情"
    assert "mcHistView" in src, "应支持 周期带 / 阶段矩阵 视图切换"
    assert "mcTrailRuns" in src, "应含评估轨迹 (随大模型评估与时间演进更新)"
    assert "mcProgStyle" in src and "mcCurrentBand" in src, "应含实时进度与本轮演进带"
