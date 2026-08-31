#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Agent 分析工具函数 — 为 AI 问股 Prompt 提供结构化数据
"""

import logging

logger = logging.getLogger(__name__)


def get_trend_analysis(stock_code: str) -> dict:
    """获取股票技术趋势分析数据 — K线为 [date, open, close, low, high, vol, ma5, ma10, ma20, ma60, vol_ma5]"""
    try:
        from market_data import get_kline_data

        kline = get_kline_data(stock_code, period='daily', limit=60)
        if not kline or not isinstance(kline, list) or len(kline) < 5:
            return {"error": f"无 {stock_code} 的K线数据或数据不足"}

        # 最新一条
        latest = kline[-1]
        close = float(latest[2])
        vol = float(latest[5]) if latest[5] else 0

        # 上一条
        prev_close = float(kline[-2][2]) if len(kline) > 1 else close

        # 均线(已预计算)
        ma5 = latest[6] if len(latest) > 6 else None
        ma10 = latest[7] if len(latest) > 7 else None
        ma20 = latest[8] if len(latest) > 8 else None
        ma60 = latest[9] if len(latest) > 9 else None
        vol_ma5 = latest[10] if len(latest) > 10 else None

        # 趋势判断
        if ma5 and ma10 and ma20:
            if ma5 > ma10 > ma20:
                trend = "多头排列(MA5>MA10>MA20)"
            elif ma5 < ma10 < ma20:
                trend = "空头排列(MA5<MA10<MA20)"
            else:
                trend = "均线纠缠整理"
        else:
            trend = "数据不足"

        # 乖离率
        bias_ma5 = round((close - ma5) / ma5 * 100, 2) if ma5 and ma5 > 0 else None
        bias_ma20 = round((close - ma20) / ma20 * 100, 2) if ma20 and ma20 > 0 else None

        # 量比
        vol_ratio = round(vol / vol_ma5, 2) if vol_ma5 and vol_ma5 > 0 else 1.0
        pct_chg = round((close - prev_close) / prev_close * 100, 2) if prev_close else 0

        # 量能状态
        if vol_ratio > 1.5 and pct_chg > 0:
            vol_status = "放量上涨"
        elif vol_ratio > 1.5 and pct_chg < 0:
            vol_status = "放量下跌"
        elif vol_ratio < 0.5:
            vol_status = "极度缩量"
        elif vol_ratio < 0.7:
            vol_status = "缩量"
        else:
            vol_status = "正常"

        # 近期高低点
        highs = [float(r[4]) for r in kline[-20:] if r[4]]
        lows = [float(r[3]) for r in kline[-20:] if r[3]]
        high_20 = max(highs) if highs else None
        low_20 = min(lows) if lows else None

        return {
            "code": stock_code,
            "date": str(latest[0]),
            "close": close,
            "open": float(latest[1]),
            "high": float(latest[4]) if latest[4] else None,
            "low": float(latest[3]) if latest[3] else None,
            "pre_close": prev_close,
            "pct_chg": pct_chg,
            "volume": int(vol),
            "ma5": round(float(ma5), 2) if ma5 else None,
            "ma10": round(float(ma10), 2) if ma10 else None,
            "ma20": round(float(ma20), 2) if ma20 else None,
            "ma60": round(float(ma60), 2) if ma60 else None,
            "trend": trend,
            "bias_ma5": bias_ma5,
            "bias_ma20": bias_ma20,
            "volume_ratio": vol_ratio,
            "volume_status": vol_status,
            "resistance": round(high_20, 2) if high_20 else None,
            "support": round(low_20, 2) if low_20 else None,
        }

    except Exception as e:
        logger.warning(f"get_trend_analysis({stock_code}) failed: {e}")
        return {"error": str(e)}


def get_fundamental_snapshot(stock_code: str) -> dict:
    """获取股票基本面信息"""
    try:
        from stock_info import stock_manager
        name = stock_manager.get_name(stock_code)
        return {"code": stock_code, "name": name if name != stock_code else "未知"}
    except Exception as e:
        return {"error": str(e)}


def get_consensus_snapshot(stock_code: str) -> dict:
    """获取策略共识数据"""
    try:
        from data_parser import parser
        dates = parser.get_available_dates()
        if not dates:
            return {"error": "无可用数据"}

        latest = dates[-1]
        holdings = parser.get_holdings_by_date(latest)

        strategies_hit = []
        for strategy_name, stocks in holdings.items():
            if isinstance(stocks, list):
                for s in stocks:
                    if isinstance(s, dict) and s.get("code", "") == stock_code:
                        strategies_hit.append(strategy_name)
                        break

        count = len(strategies_hit)
        return {
            "code": stock_code,
            "strategy_count": count,
            "strategies": strategies_hit,
            "consensus_level": (
                "极高(4+策略)" if count >= 4
                else "高(3策略)" if count >= 3
                else "中(2策略)" if count >= 2
                else "低(1策略)" if count == 1
                else "未选中"
            ),
        }
    except Exception as e:
        return {"error": str(e)}


def get_market_context() -> dict:
    """获取大盘环境"""
    try:
        from merrill_clock import merrill_clock
        stage = merrill_clock.determine_stage()
        return {
            "merrill_stage": stage.get("stage", ""),
            "merrill_name": stage.get("name", ""),
            "merrill_description": stage.get("description", ""),
        }
    except Exception as e:
        return {"error": str(e)}
