#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.6 / FR-5.4.5): 重点跟踪 digest 渲染 (focus_digest)

统一口径 (PRD §3): 5 档动作 + emoji + 6 位码带后缀 + 计数与行内动作一致 +
动作档位降序 + 组内评分降序 + 行数上限 (默认 20, 摘要 N 保持真实总数) + 免责声明。
动作派生单一实现 focus_action_map; 持仓感知: 已持仓→持有/减仓/卖出系, 未持仓→买入/观望系。
"""
from focus_action_map import (EMOJI, ACTION_ORDER, derive_action,
                              action_bucket_key)

DISCLAIMER = "⚠️ 历史命中率不代表未来收益，仅供参考，不构成投资建议。"
DEFAULT_MAX_ROWS = 20

SESSION_LABELS = {
    "pre_open": "盘前",
    "intraday_1": "盘中",
    "intraday_2": "盘中",
    "after_close": "盘后",
}


def market_state_text(date, session=None):
    """市场状态文案: A股 · 盘前/盘中/盘后/已收盘。"""
    label = SESSION_LABELS.get(session or "")
    if not label:
        return "A股 · 已收盘"
    return "A股 · " + label


def enrich_actions(rows, holdings=None):
    """rows(focus_evals dicts) → 派生 action/holding 字段 (单一实现)。"""
    holdings = set(holdings or [])
    out = []
    for r in rows:
        code = r.get("stock_code", "")
        holding = code in holdings
        item = dict(r)
        item["holding"] = holding
        item["action"] = derive_action(r.get("total_score"), r.get("level"), holding)
        out.append(item)
    return out


def sort_rows(rows):
    """动作档位降序 (买入>持有>观望>减仓>卖出) + 组内评分降序。"""
    return sorted(rows, key=lambda r: (action_bucket_key(r.get("action")),
                                       -(r.get("total_score") or 0)))


def _fmt_score(score):
    if score is None:
        return "—"
    f = float(score)
    return str(int(f)) if f == int(f) else str(round(f, 1))


def build_digest_text(date, session, rows, market_state=None, max_rows=DEFAULT_MAX_ROWS):
    """rows 需已含 action (enrich_actions)。返回与 PRD §3 模板一致的文本。"""
    rows = sort_rows(rows)
    shown = rows[:max_rows]
    counts = {a: 0 for a in ACTION_ORDER}
    for r in rows:
        counts[r.get("action")] = counts.get(r.get("action"), 0) + 1
    ms = market_state if market_state else market_state_text(date, session)
    lines = [
        "股票智能分析报告",
        "🎯 %s 决策仪表盘" % date,
        "",
        "💬 共分析 %d 只 | 🟢买入:%d 🟡持有:%d ⚪观望:%d 🟠减仓:%d 🔴卖出:%d" % (
            len(rows), counts.get("买入", 0), counts.get("持有", 0),
            counts.get("观望", 0), counts.get("减仓", 0), counts.get("卖出", 0)),
        "市场状态：%s" % ms,
        "",
        "📊 分析结果摘要",
        "",
    ]
    for r in shown:
        emoji = EMOJI.get(r.get("action"), "·")
        name = r.get("stock_name") or r.get("stock_code")
        lines.append("%s %s(%s): %s | 评分 %s | %s" % (
            emoji, name, r.get("stock_code"), r.get("action"),
            _fmt_score(r.get("total_score")), r.get("direction") or "震荡"))
    lines.append("")
    lines.append(DISCLAIMER)
    return chr(10).join(lines)


def build_focus_card(date, session, rows, market_state=None, max_rows=DEFAULT_MAX_ROWS):
    """飞书 interactive 卡片 (与 text 同源同口径)。"""
    rows = sort_rows(rows)
    shown = rows[:max_rows]
    counts = {a: 0 for a in ACTION_ORDER}
    for r in rows:
        counts[r.get("action")] = counts.get(r.get("action"), 0) + 1
    ms = market_state if market_state else market_state_text(date, session)
    summary = "共分析 %d 只 | 🟢买入:%d 🟡持有:%d ⚪观望:%d 🟠减仓:%d 🔴卖出:%d" % (
        len(rows), counts.get("买入", 0), counts.get("持有", 0),
        counts.get("观望", 0), counts.get("减仓", 0), counts.get("卖出", 0))
    stock_lines = []
    for r in shown:
        emoji = EMOJI.get(r.get("action"), "·")
        name = r.get("stock_name") or r.get("stock_code")
        stock_lines.append("%s %s(%s): %s | 评分 %s | %s" % (
            emoji, name, r.get("stock_code"), r.get("action"),
            _fmt_score(r.get("total_score")), r.get("direction") or "震荡"))
    content = "\n".join([summary, "市场状态：" + ms, "", "📊 分析结果摘要", ""] + stock_lines + ["", DISCLAIMER])
    return {
        "msg_type": "interactive",
        "card": {
            "header": {
                "title": {"tag": "plain_text",
                          "content": "🎯 %s 决策仪表盘" % date},
                "template": "blue",
            },
            "elements": [{"tag": "div",
                          "text": {"tag": "lark_md", "content": content}}],
        },
    }
