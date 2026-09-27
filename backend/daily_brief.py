#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.6 (F3): 智能晨晚报 — 内容生成纯函数 (模板拼接, 可测)

- build_morning_brief: 盘前早报 (阶段/关注/持仓提醒/待验证条件)
- build_evening_brief: 盘后晚报 (复盘摘要/明日验证/持仓变动)
数据缺失时段落降级 (模板兜底文案), 由调用方 (scheduler) 注入上下文。
"""
import datetime


def _date_str(now=None):
    return (now or datetime.datetime.now()).strftime("%Y-%m-%d")


def build_morning_brief(ctx, now=None):
    """ctx: {stage, stage_hint, holdings: [code name], watch_count, notes[]}
    返回 (markdown 文本, has_issues: bool)"""
    ctx = ctx or {}
    lines = ["## 盘前早报 " + _date_str(now), ""]
    issues = 0
    stage = ctx.get("stage") or ""
    if stage:
        lines.append("**宏观阶段**: " + stage + ((" · " + str(ctx.get("stage_hint"))) if ctx.get("stage_hint") else "") + "")
    else:
        issues += 1
        lines.append("**宏观阶段**: 数据暂不可用（数据源降级）")
    holdings = ctx.get("holdings") or []
    if holdings:
        names = "、".join(h if isinstance(h, str) else (h.get("name") or h.get("code") or "") for h in holdings[:5])
        lines.append("**持仓提醒**: " + names + (f" 等 {len(holdings)} 只" if len(holdings) > 5 else ""))
    else:
        lines.append("**持仓提醒**: 当前无持仓")
    watch = int(ctx.get("watch_count") or 0)
    if watch:
        lines.append(f"**自选关注**: {watch} 只自选股今日需留意")
    notes = ctx.get("notes") or []
    if notes:
        lines.append("**待验证条件**: " + "；".join(str(n) for n in notes))
    lines.append("")
    lines.append("> 早报由系统自动生成，数据仅供参考，不构成投资建议。")
    return "\n".join(lines), issues == 0


def build_evening_brief(ctx, now=None):
    """ctx: {review_summary, verify_items[], holdings_changed: int}
    返回 (markdown 文本, ok) — ok 与早报口径一致: 关键内容缺失 (复盘摘要) 时 False"""
    ctx = ctx or {}
    lines = ["## 盘后晚报 " + _date_str(now), ""]
    summary = str(ctx.get("review_summary") or "").strip()
    ok = True
    if summary:
        lines.append("**复盘摘要**: " + summary)
    else:
        ok = False  # 6.3.3 (T-6.3.3.1): 与早报口径统一 — 关键内容缺失标记降级
        lines.append("**复盘摘要**: 复盘数据暂不可用（生成失败已重试）")
    verify = ctx.get("verify_items") or []
    if verify:
        lines.append("**明日验证条件**:")
        for v in verify[:5]:
            lines.append("- " + str(v))
    changed = int(ctx.get("holdings_changed") or 0)
    if changed:
        lines.append(f"**持仓变动**: 今日 {changed} 只持仓有变动")
    lines.append("")
    lines.append("> 晚报由系统自动生成，数据仅供参考，不构成投资建议。")
    return "\n".join(lines), ok
