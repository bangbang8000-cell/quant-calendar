#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.4.4 (FR-649): AI 评估口径与可信化元数据 — 纯函数

职责:
- RUBRIC_VERSION: 评估口径版本 (prompt / 指标定义变更时必须 bump)
- build_meta: 生成评估元数据 {model, provider, rubric_version, data_date, sample_size, confidence, confidence_note}
- build_fact_sources: 事实类结论 → 数据列来源 (claim/field/value), 禁止无来源断言
- group_hit_rate: 命中率按策略/标的/时段分组, 样本 <30 不显示百分比

零外部依赖, 不做 I/O; 供 ai_eval 落库与 API 复用。
"""
from datetime import datetime
from typing import Dict, List, Optional

# 口径版本: prompt 模板或指标定义变更 → 递增 (旧记录保留原版本号, 便于对比)
RUBRIC_VERSION = "2026.10.1"

RUBRIC_CHANGELOG = [
    {"version": "2026.10.1", "date": "2026-10-26",
     "changes": "6.4.4 (FR-649) 可信化: 评估结果随附模型/口径/数据日期/样本量/置信度; 事实结论须带来源字段"},
    {"version": "2026.9.1", "date": "2026-09-01",
     "changes": "追加数据缺口与降级标记 (6.3.3)"},
    {"version": "2026.5.3", "date": "2026-05-03",
     "changes": "评估归因: 命中/未命中因子 + 模型一致性提示"},
]

MIN_GROUP_SAMPLE = 30
LEGACY_VERSION = "legacy"


def current_version() -> str:
    """当前口径版本 (落库用)"""
    return RUBRIC_VERSION


def build_meta(market_data: Optional[Dict], result: Optional[Dict] = None,
               model_used: Optional[str] = None, model_provider: str = "",
               rubric_version: Optional[str] = None) -> Dict:
    """评估元数据 — 任一历史评估可回溯到模型/口径/数据日期/样本量/置信度。

    置信度口径 (0-100, 确定性规则, 不引入新模型):
    - 基线 55
    - 有 K 线 (≥20 根) +20
    - 有基本面 +10
    - 维度评分 ≥4 项 +10
    - 数据缺口 (data_gaps 非空) 每条 -5 (最多 -15)
    - 封顶 95, 无行情时封顶 40
    """
    md = market_data or {}
    res = result or {}
    latest = md.get("latest") or {}
    data_date = str(latest.get("date") or "")[:10]
    if not data_date:
        note = md.get("data_stale_note") or {}
        data_date = str(note.get("latest_date") or "")[:10] if isinstance(note, dict) else ""
    if not data_date:
        data_date = datetime.now().strftime("%Y-%m-%d")

    kline_rows = md.get("kline_summary") or []
    sample_size = len(kline_rows) if kline_rows else (60 if md.get("has_kline") else 0)

    score = 55
    reasons: List[str] = []
    if md.get("has_kline"):
        score += 20
        reasons.append("行情数据完整")
    else:
        reasons.append("缺少行情数据")
    if md.get("has_fundamentals"):
        score += 10
        reasons.append("含基本面")
    dims = res.get("dimensions") or {}
    if isinstance(dims, dict) and len(dims) >= 4:
        score += 10
        reasons.append("维度评分齐全")
    gaps = res.get("data_gaps") or []
    if gaps:
        score -= min(15, 5 * len(gaps))
        reasons.append("存在 %d 处数据缺口" % len(gaps))
    if not md.get("has_kline"):
        score = min(score, 40)
    confidence = max(0, min(95, int(score)))

    return {
        "model": model_used or "unknown",
        "provider": model_provider or "",
        "rubric_version": rubric_version or RUBRIC_VERSION,
        "data_date": data_date,
        "sample_size": int(sample_size),
        "confidence": confidence,
        "confidence_note": "、".join(reasons) if reasons else "常规数据完整度",
    }


def _num(v) -> bool:
    return isinstance(v, (int, float)) and not isinstance(v, bool)


def build_fact_sources(market_data: Optional[Dict]) -> List[Dict]:
    """事实类结论 → 来源数据列 (claim 断言 / field 字段名 / value 实际值)。

    只输出真实存在的字段, 缺失即不出现 —— 前端"无来源不展示数值"由此兜底。
    """
    md = market_data or {}
    latest = md.get("latest") or {}
    macd = md.get("macd") or {}
    out: List[Dict] = []

    def _add(claim: str, field: str, value):
        if value is None or value == "":
            return
        out.append({"claim": claim, "field": field, "value": value})

    _add("最新收盘价", "kline.close", latest.get("close"))
    _add("当日涨跌幅", "kline.pct_chg", latest.get("pct_chg"))
    _add("近 5 日涨跌幅", "pct_5d", md.get("pct_5d"))
    _add("近 20 日涨跌幅", "pct_20d", md.get("pct_20d"))
    _add("RSI(14)", "rsi", md.get("rsi"))
    if _num(macd.get("hist")):
        _add("MACD 柱", "macd.hist", macd.get("hist"))
    _add("均线形态", "ma_alignment", md.get("ma_alignment"))
    fund = md.get("fundamentals") or {}
    if isinstance(fund, dict) and fund:
        out.append({"claim": "基本面快照", "field": "fundamentals",
                    "value": "已获取 %d 项" % len(fund)})
    return out


def group_hit_rate(records: List[Dict], by: str = "strategy", window: str = "n5",
                   min_sample: int = MIN_GROUP_SAMPLE) -> List[Dict]:
    """命中率分组统计 (策略 / 标的 / 时段)。

    - 样本 < min_sample 的组不输出百分比, 仅给 "样本不足（N 条）"
    - 返回按样本量倒序的组列表
    """
    win = window if window in ("n5", "n10", "n20") else "n5"
    key_map = {
        "strategy": lambda r: str(r.get("strategy") or "未标注"),
        "stock": lambda r: str(r.get("stock_code") or "未标注"),
        "period": lambda r: _period_of(r),
    }
    key_fn = key_map.get(by)
    if key_fn is None:
        raise ValueError("不支持的维度: %s (可选 strategy/stock/period)" % by)

    groups: Dict[str, List[Dict]] = {}
    for r in records or []:
        if r.get("hit_" + win) is None:
            continue
        groups.setdefault(key_fn(r), []).append(r)

    out = []
    for key, items in groups.items():
        total = len(items)
        hits = sum(1 for r in items if r.get("hit_" + win))
        row = {
            "key": key,
            "label": key,
            "total": total,
            "show_rate": total >= min_sample,
            "hit_rate": round(hits / total * 100, 1) if total >= min_sample else None,
            "note": None if total >= min_sample else "样本不足（%d 条）" % total,
            "window": win,
        }
        out.append(row)
    out.sort(key=lambda x: (-x["total"], x["key"]))
    return out


def _period_of(record: Dict) -> str:
    """时段分组: 按评估日期归入月份 (YYYY-MM), 便于看趋势。"""
    d = str(record.get("evaluate_date") or record.get("date") or "")[:7]
    return d or "未标注"


def group_hit_rate_all(records: List[Dict], window: str = "n5",
                       min_sample: int = MIN_GROUP_SAMPLE) -> Dict[str, List[Dict]]:
    """三视角分组 (策略/标的/时段) 一次返回, 供看板使用。"""
    return {by: group_hit_rate(records, by, window, min_sample)
            for by in ("strategy", "stock", "period")}
