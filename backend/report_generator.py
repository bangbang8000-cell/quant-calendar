#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量日报/AI周报生成器 (v3.5.0-T1/T3 / FR-3.5.1, FR-3.5.2)
- 日报: 每日全策略选股报告 (Markdown), 支持飞书推送
- 周报: 组合表现 + 归因 + 下周展望 (AI 增强)
"""
import logging
import os
from datetime import datetime

from data_parser import parser

logger = logging.getLogger(__name__)

REPORT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "reports")


def _ensure_report_dir():
    os.makedirs(REPORT_DIR, exist_ok=True)


def _get_day_stocks(date_str: str, strategy_id: str = None) -> dict:
    """获取某日某策略的持仓股票"""
    try:
        holdings = parser.get_holdings_by_date(date_str)
        if strategy_id:
            for sid, data in holdings.items():
                if strategy_id in sid or sid in strategy_id:
                    stocks = data.get("stocks", [])
                    return {"name": data.get("strategy_name", strategy_id), "stocks": stocks}
            return None
        return holdings
    except Exception as e:
        logger.error(f"获取 {date_str} 持仓失败: {e}")
        return {}


def generate_daily_report(date_str: str = None) -> dict:
    """生成批量日报 (全策略) — 返回 {path, content, stats}"""
    _ensure_report_dir()
    date_str = date_str or (parser.get_available_dates() or [datetime.now().strftime('%Y-%m-%d')])[-1]
    holdings = _get_day_stocks(date_str)
    if not holdings:
        return {"success": False, "message": f"{date_str} 无持仓数据"}

    lines = [
        f"# 📊 量化选股日报 {date_str}\n",
        f"> 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        f"> 策略数: {len(holdings)}\n",
    ]

    total_stocks = 0
    for sid, data in holdings.items():
        stocks = data.get("stocks", [])
        if isinstance(stocks, list):
            codes = [s.get("code") if isinstance(s, dict) else s for s in stocks]
        else:
            codes = []
        total_stocks += len(codes)
        lines.append(f"\n## 🎯 {data.get('strategy_name', sid)} ({len(codes)} 只)\n")
        if codes:
            for i in range(0, len(codes), 8):
                lines.append("`" + " ".join(codes[i:i+8]) + "`")
        else:
            lines.append("_今日无持仓_")

    lines.append(f"\n---\n📈 合计: {total_stocks} 只股票 / {len(holdings)} 个策略")
    content = "\n".join(lines)

    fname = f"daily_report_{date_str}.md"
    fpath = os.path.join(REPORT_DIR, fname)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    logger.info(f"📝 日报已生成: {fpath}")
    return {"success": True, "path": fpath, "content": content, "stats": {"date": date_str, "strategies": len(holdings), "stocks": total_stocks}}


def generate_weekly_report(end_date: str = None) -> dict:
    """生成 AI 周报 — 组合表现 + 归因 + 下周展望"""
    _ensure_report_dir()
    end_date = end_date or (parser.get_available_dates() or [datetime.now().strftime('%Y-%m-%d')])[-1]
    try:
        end_idx = parser.get_available_dates().index(end_date)
    except ValueError:
        return {"success": False, "message": f"日期 {end_date} 不在数据中"}

    dates = parser.get_available_dates()
    start_idx = max(0, end_idx - 4)  # 近 5 个交易日
    week_dates = dates[start_idx:end_idx + 1]
    start_date = week_dates[0]

    # 统计每周策略进出池
    strategy_stats = {}
    for d in week_dates:
        holdings = _get_day_stocks(d)
        for sid, data in holdings.items():
            key = data.get('strategy_name', sid)
            stocks = data.get("stocks", [])
            codes = [s.get("code") if isinstance(s, dict) else s for s in stocks] if isinstance(stocks, list) else []
            strategy_stats.setdefault(key, {"days": 0, "latest_count": len(codes), "codes": set()})
            strategy_stats[key]["days"] += 1
            strategy_stats[key]["codes"].update(codes)

    lines = [
        f"# 📈 量化选股周报 ({start_date} ~ {end_date})\n",
        f"> 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        f"> 统计区间: {len(week_dates)} 个交易日\n",
        "## 一、策略表现概览\n",
        "| 策略 | 覆盖天数 | 最新持仓数 | 累计入选 |",
        "|------|---------|-----------|---------|",
    ]
    for name, s in strategy_stats.items():
        lines.append(f"| {name} | {s['days']} | {s['latest_count']} | {len(s['codes'])} |")

    # 归因分析 (简单统计)
    all_codes = set()
    for s in strategy_stats.values():
        all_codes.update(s["codes"])
    lines.extend([
        "\n## 二、归因分析\n",
        f"- 本周共 **{len(all_codes)}** 只股票入选策略池",
        f"- 覆盖策略: **{len(strategy_stats)}** 个",
    ])

    # AI 下周展望 (复用 ai_evaluator, 失败则静态)
    try:
        from ai_evaluator import ai_evaluator
        models = ai_evaluator.get_enabled_models()
        if models:
            prompt = (
                f"基于本周量化选股数据生成简短下周展望 (3-5条要点): "
                f"{len(week_dates)}个交易日, {len(all_codes)}只股票, {len(strategy_stats)}个策略。"
                f"请用中文, 每条约20字。"
            )
            # 用第一个模型调用
            import requests
            model = models[0]
            resp = requests.post(
                f"{model.base_url}/chat/completions",
                headers={"Authorization": f"Bearer {model.api_key}"},
                json={"model": model.model, "messages": [{"role": "user", "content": prompt}], "max_tokens": 500},
                timeout=30,
            )
            if resp.ok:
                outlook = resp.json()["choices"][0]["message"]["content"]
                lines.append(f"\n## 三、AI 下周展望\n\n{outlook}")
    except Exception as e:
        logger.warning(f"AI 周报展望失败 (使用静态内容): {e}")
        lines.append("\n## 三、下周展望\n\n- 关注本周入选股票池的持续性\n- 留意策略共识度变化")

    content = "\n".join(lines)
    fname = f"weekly_report_{end_date}.md"
    fpath = os.path.join(REPORT_DIR, fname)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    logger.info(f"📝 周报已生成: {fpath}")
    return {"success": True, "path": fpath, "content": content, "stats": {"range": f"{start_date}~{end_date}", "stocks": len(all_codes), "strategies": len(strategy_stats)}}
