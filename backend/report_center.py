#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.5 T-5.0.51: 报表模板化 (report_center.py)

区块编排 (周期/策略/异动/评估/风控/组合) + 渲染快照:
- BLOCK_TYPES: 6 类区块
- collect_block_data(block_type, date, providers): 取数 (缺 provider/异常 → 空 dict, 优雅降级)
- render_block(block_type, data, date): 纯渲染 → Markdown 小节
- render_report(title, blocks, date, providers): 按序编排 → {content, stats, blocks}
- render_report_snapshot(blocks, date, providers): 结构化快照 {rendered, content_hash}
  (快照对比, 内容变更即红 — TEST-PLAN 6.2)

providers: {block_type: callable(date) -> dict}; 默认从 report_generator/risk 等真实模块取数,
测试可整体注入 mock。
"""
import hashlib
import logging

logger = logging.getLogger(__name__)

BLOCK_TYPES = ("period", "strategy", "anomaly", "evaluate", "risk", "portfolio")

_BLOCK_TITLES = {
    "period": "一、周期概览",
    "strategy": "二、策略持仓",
    "anomaly": "三、异动关注",
    "evaluate": "四、AI 评估命中率",
    "risk": "五、组合风险",
    "portfolio": "六、组合表现",
}


# ─── 区块渲染 (纯函数) ────────────────────────────────────────────

def _render_period(data):
    d = data or {}
    lines = [
        f"- 统计日期: **{d.get('date', '-')}**",
        f"- 交易日数: {d.get('trading_days', 0)}",
        f"- 策略数: {d.get('strategies', 0)} · 股票数: {d.get('stocks', 0)}",
    ]
    return lines


def _render_strategy(data):
    d = data or {}
    strategies = d.get("strategies") or []
    if not strategies:
        return ["_暂无策略数据_"]
    lines = []
    for s in strategies:
        stocks = s.get("stocks") or []
        lines.append(f"- **{s.get('name', '?')}** ({len(stocks)} 只): "
                     + ("、".join(stocks) if stocks else "空"))
    return lines


def _render_anomaly(data):
    d = data or {}
    items = d.get("items") or []
    if not items:
        return ["_今日无异动_"]
    lines = ["| 代码 | 涨跌幅% | 量比 |", "|------|--------|------|"]
    for it in items:
        lines.append(f"| {it.get('code', '-')} | {it.get('change_pct', '-')} "
                     f"| {it.get('volume_ratio', '-')} |")
    return lines


def _render_evaluate(data):
    d = data or {}
    if not d:
        return ["_暂无 AI 评估记录_"]
    lines = [
        f"- 本周评估数: **{d.get('evaluations', 0)}** 条",
        f"- 命中率: **{d.get('rate', '-')}** ({d.get('hit', 0)}/{d.get('total', 0)})",
    ]
    return lines


def _render_risk(data):
    d = data or {}
    if not d:
        return ["_暂无风险指标_"]
    lines = [
        f"- 年化波动率: {d.get('volatility', '-')}",
        f"- 最大回撤: {d.get('max_drawdown', '-')}",
        f"- 夏普比率: {d.get('sharpe', '-')}",
        f"- VaR(95%): {d.get('var', '-')}",
    ]
    return lines


def _render_portfolio(data):
    d = data or {}
    if not d:
        return ["_暂无组合数据_"]
    lines = [
        f"- 组合市值: {d.get('value', '-')}",
        f"- 当日收益: {d.get('day_profit', '-')}%",
        f"- 持仓数: {d.get('positions', 0)}",
    ]
    return lines


_RENDERERS = {
    "period": _render_period,
    "strategy": _render_strategy,
    "anomaly": _render_anomaly,
    "evaluate": _render_evaluate,
    "risk": _render_risk,
    "portfolio": _render_portfolio,
}


def render_block(block_type, data, date):
    """渲染单区块 → Markdown 小节 (未知类型 → 提示小节)。"""
    renderer = _RENDERERS.get(block_type)
    title = _BLOCK_TITLES.get(block_type, f"区块 {block_type}")
    if renderer is None:
        return "\n## " + title + "\n\n_" + block_type + " 未定义_\n"
    lines = renderer(data or {})
    return "\n## " + title + "\n" + "\n".join(lines) + "\n"


# ─── 取数 (可注入 providers) ──────────────────────────────────────

def _default_provider(block_type):
    """默认取数: 从真实模块拉取 (失败 → 空 dict, 优雅降级)。"""
    def provider(date):
        try:
            if block_type == "period":
                from report_generator import _get_day_stocks
                holdings = _get_day_stocks(date) or {}
                stocks = sum(len(d.get("stocks") or []) for d in holdings.values())
                return {"date": date, "trading_days": 5,
                        "strategies": len(holdings), "stocks": stocks}
            if block_type == "strategy":
                from report_generator import _get_day_stocks
                holdings = _get_day_stocks(date) or {}
                strategies = [{"name": d.get("strategy_name", sid),
                               "stocks": [s.get("code") if isinstance(s, dict) else s
                                          for s in (d.get("stocks") or [])]}
                              for sid, d in holdings.items()]
                return {"strategies": strategies}
            if block_type == "evaluate":
                from eval_track import get_track_summary
                summary = get_track_summary(username="default") or {}
                samples = summary.get("samples") or []
                return {"evaluations": len(samples),
                        "hit": summary.get("overall", {}).get("n5", {}).get("hit", 0),
                        "total": summary.get("overall", {}).get("n5", {}).get("total", 0),
                        "rate": summary.get("overall", {}).get("n5", {}).get("rate")}
            if block_type == "risk":
                return {}  # 组合风险需持仓上下文, 默认空
            if block_type == "portfolio":
                return {}
            if block_type == "anomaly":
                return {}
            return {}
        except Exception as e:
            logger.warning("报表区块 %s 取数失败 (降级): %s", block_type, e)
            return {}
    return provider


def collect_block_data(block_type, date, providers):
    """取某区块数据: 优先注入 provider, 缺省用默认。失败 → 空 dict。"""
    provider = providers.get(block_type) or _default_provider(block_type)
    try:
        data = provider(date)
        return data or {}
    except Exception as e:
        logger.warning("报表区块 %s 数据源异常 (降级为空): %s", block_type, e)
        return {}


# ─── 报表编排 ─────────────────────────────────────────────────────

def render_report(title, blocks, date, providers=None):
    """按序编排区块 → Markdown 报表。返回 {content, stats, blocks}。"""
    providers = providers or {}
    lines = [f"# {title}\n", f"> 统计日期: {date}", f"> 区块数: {len(blocks)}\n"]
    rendered_blocks = []
    for b in blocks:
        data = collect_block_data(b, date, providers)
        md = render_block(b, data, date)
        lines.append(md)
        rendered_blocks.append({"type": b, "has_data": bool(data)})
    content = "\n".join(lines)
    return {"content": content, "stats": {"blocks": len(blocks),
                                          "with_data": sum(1 for r in rendered_blocks if r["has_data"])},
            "blocks": rendered_blocks}


def render_report_snapshot(blocks, date, providers=None):
    """结构化快照: {rendered: {block: md}, content_hash} — 内容变更即红。"""
    providers = providers or {}
    rendered = {}
    for b in blocks:
        data = collect_block_data(b, date, providers)
        rendered[b] = render_block(b, data, date)
    raw = "\n".join(f"=={k}==" + v for k, v in rendered.items())
    return {"rendered": rendered,
            "content_hash": hashlib.sha256(raw.encode("utf-8")).hexdigest()}


# ─── V5.0.5 T-5.0.55: 今日要点聚合 (首页) ─────────────────────────────

_HL_BUILDERS = {}


def _hl_period(data, date):
    d = data or {}
    return {"type": "period", "title": "周期概览",
            "content": f"{d.get('trading_days', 0)} 个交易日 · "
                       f"{d.get('strategies', 0)} 策略 · {d.get('stocks', 0)} 只持仓",
            "level": "neutral"}


def _hl_strategy(data, date):
    d = data or {}
    strategies = d.get("strategies") or []
    if not strategies:
        return None
    picks = []
    for s in strategies:
        stocks = s.get("stocks") or []
        if stocks:
            picks.append(f"{s.get('name', '?')}: {'、'.join(stocks[:3])}"
                         + ("…" if len(stocks) > 3 else ""))
    if not picks:
        return None
    return {"type": "strategy", "title": "策略持仓",
            "content": "；".join(picks), "level": "neutral"}


def _hl_anomaly(data, date):
    d = data or {}
    items = d.get("items") or []
    if not items:
        return None
    top = items[0]
    pct = top.get("pct") or 0
    return {"type": "anomaly", "title": "异动关注",
            "content": f"{top.get('code', '?')} {pct:+.1f}% "
                       f"{top.get('note', '')}".strip(),
            "level": "up" if pct > 0 else "down"}


def _hl_evaluate(data, date):
    d = data or {}
    total = d.get("total") or 0
    hits = d.get("hits") or 0
    rate = (hits / total) if total else 0
    if not total:
        return None
    level = "up" if rate >= 0.6 else ("warn" if rate >= 0.4 else "risk")
    return {"type": "evaluate", "title": "AI 评估命中率",
            "content": f"{rate:.0%} ({hits}/{total})", "level": level}


def _hl_risk(data, date):
    d = data or {}
    vol = d.get("volatility") or 0
    dd = d.get("max_drawdown") or 0
    if not vol and not dd:
        return None
    level = "risk" if vol > 0.3 or abs(dd) > 0.12 else "warn"
    return {"type": "risk", "title": "组合风险",
            "content": f"年化波动 {vol:.1%} · 最大回撤 {dd:.1%}",
            "level": level}


for _t, _b in (("period", _hl_period), ("strategy", _hl_strategy),
               ("anomaly", _hl_anomaly), ("evaluate", _hl_evaluate),
               ("risk", _hl_risk)):
    _HL_BUILDERS[_t] = _b


def collect_highlights(date, providers=None):
    """按固定区块序聚合今日要点: [{type,title,content,level}]。失败区块跳过。"""
    providers = providers or {}
    items = []
    for block_type in ("period", "strategy", "anomaly", "evaluate", "risk"):
        try:
            data = collect_block_data(block_type, date, providers)
            item = _HL_BUILDERS[block_type](data, date)
            if item:
                items.append(item)
        except Exception as e:
            logger.warning("今日要点 %s 聚合失败 (跳过): %s", block_type, e)
    return items
