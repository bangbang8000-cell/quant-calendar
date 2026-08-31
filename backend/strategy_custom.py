#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""自定义策略 (I3B / v3.22): AI 代写 + PTrade 兼容回测执行层 + AI 优化"""
import json
import logging
import re
from datetime import datetime, timedelta

logger = logging.getLogger(__name__)

CODE_KEY = "_code"

def _code_from_def(d):
    return (d or {}).get("params", {}).get(CODE_KEY) or ""

def create_custom(sid, name, code=None, prompt=None):
    """AI 代写: prompt -> LLM -> 校验 -> 存 strategy_defs(type=custom)"""
    from strategy_db import upsert_def
    from ai_evaluator import ai_evaluator
    if not code:
        if not prompt:
            raise ValueError("需提供 code 或 prompt")
        sys_prompt = "你是 PTrade 量化策略工程师, 输出可直接运行的 Python 策略代码(仅代码, 无 markdown 标记)。"
        user_prompt = ("编写一个 A 股 PTrade 量化策略, 包含 initialize() 和 handle_data(context, data)。"
                       "选股+交易+风控完整, 使用 PTrade 内建 API(order_target_value/get_history 等), 禁止 import 第三方库。\n"
                       "重要: 交易必须用字面股票代码调用 order_target_value('600000.SH', 金额), 不要用变量/列表循环下单(否则无法回测)。\n"
                       "策略思路: " + prompt)
        code = ai_evaluator.generate_review(user_prompt, system_prompt=sys_prompt, max_tokens=4096)
        if not code:
            raise ValueError("AI 生成失败: 无可用模型")
        code = re.sub("^```python\\s*", "", code.strip(), flags=re.M)
        code = re.sub("^```\\s*$", "", code.strip(), flags=re.M)
    from strategy_sdk.ptrade import validate_ptrade_code
    errors = validate_ptrade_code(code)
    upsert_def(sid, {"name": name, "version": "0.1.0", "type": "custom",
                      "params": {CODE_KEY: code}, "enabled": True})
    return {"sid": sid, "name": name, "code": code, "api_errors": errors}

def list_custom():
    from strategy_db import list_defs
    out = []
    for d in list_defs():
        if d.get("type") == "custom":
            out.append({"id": d.get("id"), "name": d.get("name"),
                        "version": d.get("version"), "enabled": d.get("enabled")})
    return out

def _extract_holdings_from_code(code, capital=100000.0):
    """提取持仓标的: 优先 order_target_value 字面量, 回退全部字面代码"""
    holdings = {}
    q = chr(34)
    a = chr(39)
    pat = re.compile("order_target_value\\s*\\" + chr(40) + "\\s*[" + a + q + "]([0-9]{6}\\.[A-Z]{2})[" + a + q + "]\\s*,\\s*([0-9.]+)")
    for m in pat.finditer(code):
        sym, val = m.group(1), float(m.group(2))
        holdings[sym] = val
    if not holdings:
        # 回退: 提取代码中出现的全部字面代码标的 (含变量循环场景, 如 get_history('600000.SH'))
        # 常见基准指数(非交易标的)排除
        bench = {"000001.SH", "000300.SH", "000905.SH", "000016.SH", "000852.SH"}
        pat2 = re.compile("[" + a + q + "]([0-9]{6}\\.[A-Z]{2})[" + a + q + "]")
        syms = [s for s in dict.fromkeys(m.group(1) for m in pat2.finditer(code)) if s not in bench]
        if syms:
            per = capital / len(syms)
            holdings = {s: per for s in syms}
    return holdings

def backtest_custom(sid, start_date=None, end_date=None, capital=100000.0):
    """轻量 PTrade 兼容回测: 解析持仓 -> 行情面板 -> 逐日净值"""
    from strategy_db import get_def
    from strategy_sdk.data_portal import RealDataPortal
    from backtest import compute_period_metrics
    d = get_def(sid)
    if not d or d.get("type") != "custom":
        raise ValueError("策略不存在或非 custom: " + sid)
    code = _code_from_def(d)
    if not code:
        raise ValueError("策略无代码")
    holdings = _extract_holdings_from_code(code, capital)
    if not holdings:
        raise ValueError("代码中未解析到 order_target_value 标的(无法执行回测)")
    symbols = list(holdings.keys())
    end_date = end_date or datetime.now().strftime("%Y-%m-%d")
    start_date = start_date or (datetime.now() - timedelta(days=180)).strftime("%Y-%m-%d")
    panel = None
    try:
        portal = RealDataPortal()
        panel = portal.get_panel(["close"], start_date, end_date, universe=symbols)
    except Exception as e:
        logger.info("真实行情不可用, 降级模拟: %s", e)
        panel = None
    if panel is None or (hasattr(panel, "empty") and panel.empty):
        from strategy_sdk.testsupport import FakePortal
        dates = [(datetime.now() - timedelta(days=i)).strftime("%Y-%m-%d") for i in range(120, 0, -1)]
        fake = FakePortal(dates=dates, symbols=symbols)
        panel = fake.get_panel(["close"], start_date, end_date, universe=symbols)
    closes = _normalize_panel(panel, symbols)
    all_dates = sorted(closes[symbols[0]].keys()) if symbols and closes.get(symbols[0]) else []
    if not all_dates:
        raise ValueError("无行情数据")
    equity_curve = []
    for dt in all_dates:
        total = 0.0
        for sym, val in holdings.items():
            px = closes.get(sym, {}).get(dt)
            total += px * (val / 10.0) if px else val
        equity_curve.append({"date": dt, "value": round(total, 2)})
    daily_returns = []
    for i in range(1, len(equity_curve)):
        prev = equity_curve[i - 1]["value"]
        cur = equity_curve[i]["value"]
        daily_returns.append((cur - prev) / prev if prev else 0.0)
    metrics = compute_period_metrics(daily_returns)
    return {"sid": sid, "symbols": symbols, "dates": [all_dates[0], all_dates[-1]],
            "metrics": metrics, "equity_curve": equity_curve[-60:],
            "trades": [{"symbol": s, "amount": v} for s, v in holdings.items()]}

def _normalize_panel(panel, symbols):
    """面板 -> {symbol: {date: close}} (支持 DataFrame MultiIndex 与 dict)"""
    closes = {}
    if panel is None:
        return closes
    if hasattr(panel, "index"):
        try:
            df = panel
            idx_names = [str(n) for n in (df.index.names or [])]
            if "symbol" in idx_names and "date" in idx_names:
                for (date, sym), row in df.iterrows():
                    v = row.get("close") if hasattr(row, "get") else None
                    if v is not None and not (hasattr(v, "size") and v.size == 0):
                        closes.setdefault(sym, {})[str(date)[:10]] = float(v)
            return closes
        except Exception:
            pass
    if not panel:
        return closes
    for sym in symbols:
        data = panel.get(sym) or {}
        rows = data.get("rows") if isinstance(data, dict) and "rows" in data else data
        closes[sym] = {}
        if isinstance(rows, dict):
            for dt, vals in rows.items():
                if isinstance(vals, dict):
                    v = vals.get("close")
                else:
                    v = vals
                if v is not None:
                    closes[sym][str(dt)[:10]] = float(v)
        elif isinstance(rows, list):
            for r in rows:
                if isinstance(r, dict) and r.get("date") is not None and r.get("close") is not None:
                    closes[sym][str(r["date"])[:10]] = float(r["close"])
    return closes

def ai_optimize(sid, backtest=None):
    """AI 优化: 分析代码+回测 -> 改进代码"""
    from strategy_db import get_def
    from strategy_sdk.ptrade import validate_ptrade_code
    from ai_evaluator import ai_evaluator
    d = get_def(sid)
    if not d or d.get("type") != "custom":
        raise ValueError("策略不存在或非 custom")
    code = _code_from_def(d)
    bt_text = json.dumps((backtest or {}).get("metrics", {}), ensure_ascii=False) if backtest else "无回测数据"
    sys_prompt = "你是量化策略优化专家, 输出改进后的完整 PTrade Python 代码(仅代码)。"
    user_prompt = ("分析以下策略代码与回测表现, 针对性优化(参数/风控/选股逻辑), 输出完整改进版代码。\n"
                   "改进原则: 保持 PTrade 兼容, 只调仓代码中出现的标的(不新增矩阵外), 增强风控。\n"
                   "回测表现: " + bt_text + "\n原代码:\n" + code)
    new_code = ai_evaluator.generate_review(user_prompt, system_prompt=sys_prompt, max_tokens=4096)
    if not new_code:
        raise ValueError("AI 优化失败: 无可用模型")
    new_code = re.sub("^```python\\s*", "", new_code.strip(), flags=re.M)
    new_code = re.sub("^```\\s*$", "", new_code.strip(), flags=re.M)
    errors = validate_ptrade_code(new_code)
    return {"code": new_code, "api_errors": errors}
