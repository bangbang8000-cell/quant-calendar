#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.4 / FR-5.4.2): 重点跟踪评估执行 (focus_eval)

- run_session(date, session, ...) → 清单 → 批量 AI 评估 → 落库 focus_evals
- 降级 (如实标注 method=rule, 不冒充 AI):
    * AI 整体失败 (异常) → 全部规则因子快评 (reason=rule_ai_error)
    * 单只评估失败 → 该只规则快评
    * 清单超限 (> MAX_AI_LIST) → 全部规则快评 (成本控制, 不耗尽 AI 配额)
    * ai_available=False → 全部规则快评
- 幂等: focus_store 复合主键 INSERT OR REPLACE (同 日期+时段+股票 不重复)
"""
import logging

import focus_store

logger = logging.getLogger(__name__)

MAX_AI_LIST = 80  # 清单超过该数走规则快评 (成本控制)

# score → level 分档 (与 evaluate_stock.txt 五档一致)
SCORE_LEVEL_MAP = (
    (80, "强烈推荐"),
    (60, "推荐"),
    (40, "谨慎推荐"),
    (30, "中性"),
    (0, "观望"),
)


def score_to_level(score):
    """score → level 五档 (None → 中性)。"""
    if score is None:
        return "中性"
    for threshold, level in SCORE_LEVEL_MAP:
        if score >= threshold:
            return level
    return "观望"


def _bar_close(b):
    """从行情行提取收盘价 (兼容 dict 行与 list/tuple 行)。"""
    if isinstance(b, dict):
        v = b.get("close")
        if v is None:
            v = b.get("收") or b.get("close_price")
    elif isinstance(b, (list, tuple)):
        # 常见列序: date, open, close, high, low, volume
        v = b[2] if len(b) > 2 else None
    else:
        v = None
    try:
        return float(v) if v is not None else None
    except (TypeError, ValueError):
        return None


def rule_quick_eval(stock_code, kline=None, stock_name=""):
    """规则因子快评 (method=rule): 均线多头/空头 + 收盘位置 → score/level。

    无足够行情时返回中性 50 (诚实兜底, 不臆造方向)。
    """
    base = {"stock_code": stock_code, "stock_name": stock_name or stock_code,
            "method": "rule"}
    bars = [b for b in (kline or []) if b]
    closes = []
    for b in bars:
        v = _bar_close(b)
        if v and v > 0:
            closes.append(v)
    if len(closes) < 5:
        return dict(base, total_score=50, level="中性", direction="震荡",
                    data_quality_note="行情数据不足, 规则快评中性")
    win = closes[-20:]

    def _ma(n: int) -> float:
        return sum(win[-n:]) / n

    ma5, ma10, ma20 = _ma(5), _ma(10), _ma(20)
    last = closes[-1]
    if ma5 > ma10 > ma20:
        score = 70 if last >= ma5 else 62
    elif ma5 < ma10 < ma20:
        score = 30 if last <= ma5 else 38
    elif ma5 > ma20:
        score = 55
    else:
        score = 45
    level = score_to_level(score)
    from focus_action_map import direction_from_level
    return dict(base, total_score=round(score, 1), level=level,
                direction=direction_from_level(level),
                ma5=round(ma5, 2), ma10=round(ma10, 2), ma20=round(ma20, 2))


def _load_kline(stock_code, limit=30):
    """加载日线 (market_data), 失败返回空 (规则快评中性兜底)。"""
    try:
        from market_data import get_kline_data
        data = get_kline_data(stock_code, period="daily", limit=limit)
        if isinstance(data, dict):
            return data.get("kline") or data.get("items") or []
        return data or []
    except Exception as e:
        logger.warning("[focus] kline 加载失败 %s: %s", stock_code, e)
        return []


async def _rule_eval_one(date, session, code, name=""):
    """单只规则快评并落库。返回评估 dict。"""
    kline = _load_kline(code)
    r = rule_quick_eval(code, kline=kline, stock_name=name)
    record = focus_store.build_record(
        trade_date=date, session=session, stock_code=code,
        stock_name=name or code, total_score=r["total_score"], level=r["level"],
        direction=r["direction"], model_provider="rule", model_used="rule-quick",
        raw_json=r)
    focus_store.upsert_eval(record)
    return r


async def evaluate_codes(date, session, codes, stock_names=None,
                         ai_available=True):
    """对清单评估并落库。返回统计 {evaluated, ai_count, rule_count, degraded, reason}。"""
    codes = [c for c in (codes or []) if c]
    out = {"session": session, "date": date, "evaluated": len(codes),
           "ai_count": 0, "rule_count": 0, "degraded": False, "reason": ""}
    if not codes:
        return out
    names = stock_names or {}
    use_ai = ai_available and len(codes) <= MAX_AI_LIST
    if not use_ai:
        out["degraded"] = True
        out["reason"] = "rule_oversize" if len(codes) > MAX_AI_LIST else "rule_no_ai"
        for c in codes:
            await _rule_eval_one(date, session, c, names.get(c, ""))
        out["rule_count"] = len(codes)
        return out
    try:
        from ai_evaluator import ai_evaluator
        results = await ai_evaluator.batch_evaluate(codes, names or None, 5, "focus")
    except Exception as e:
        logger.warning("[focus] AI 批量评估失败, 全部规则快评: %s", e)
        out["degraded"] = True
        out["reason"] = "rule_ai_error"
        for c in codes:
            await _rule_eval_one(date, session, c, names.get(c, ""))
        out["rule_count"] = len(codes)
        return out
    for r in results or []:
        code = r.get("stock_code") or ""
        if r.get("success") and r.get("result"):
            res = r["result"]
            record = focus_store.build_record(
                trade_date=date, session=session, stock_code=code,
                stock_name=res.get("stock_name") or names.get(code, "") or "",
                total_score=res.get("total_score"), level=res.get("level", ""),
                model_provider=r.get("model_provider") or "ai",
                model_used=r.get("model_used") or "",
                raw_json=res)
            focus_store.upsert_eval(record)
            out["ai_count"] += 1
        else:
            await _rule_eval_one(date, session, code, names.get(code, ""))
            out["rule_count"] += 1
    return out


async def run_session(date, session, scope="all", username=None,
                      intraday_enabled=False, ai_available=True):
    """执行一个时点评估: 清单 → 评估 → 落库。历史日拒绝 (绝不现抓)。"""
    from focus_scheduler import is_eligible_date
    if not is_eligible_date(date):
        return {"session": session, "date": date, "evaluated": 0,
                "ai_count": 0, "rule_count": 0, "degraded": True,
                "reason": "not_today"}
    import focus_list as fl
    if username:
        lst = fl.load_focus_list(username, date, scope)
    else:
        lst = fl.load_focus_list_anonymous(date, scope)
    members = lst.get("members", []) or []
    names = {m["code"]: m.get("name", "") for m in members}
    codes = [m["code"] for m in members]
    return await evaluate_codes(date, session, codes, stock_names=names,
                                ai_available=ai_available)
