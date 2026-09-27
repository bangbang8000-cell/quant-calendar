#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.4): AIEvaluator 行情/基本面取数 Mixin(_eval) — 自 _eval.py 拆分。

行为与拆分前一致，由 ai_eval/_eval.py 聚合为 AIEvalMixin。
"""
import logging
from typing import Dict
from ai_indicators import calc_rsi as _calc_rsi, calc_macd as _calc_macd

logger = logging.getLogger(__name__)


class AIEvalFetchMixin:
    """AIEvaluator 行情/基本面取数 Mixin(_eval) — 自 _eval.py 拆分"""
    def _fetch_stock_data(self, stock_code: str) -> Dict:
        """
        从 Tushare 获取股票的真实行情数据和技术指标
        返回打包好的结构化数据，供 LLM 和内置评估使用
        """
        result = {
            "stock_code": stock_code,
            "has_kline": False,
            "has_fundamentals": False,
            "error": None,
        }

        # 1) K 线数据 + 均线
        try:
            from market_data import get_kline_data
            kline = get_kline_data(stock_code, period='daily', limit=60)
            if kline and len(kline) >= 20:
                result["has_kline"] = True
                # kline format: [trade_date, open, close, low, high, vol, ma5, ma10, ma20]
                closes = [r[2] for r in kline if r[2] is not None]
                volumes = [r[5] for r in kline if r[5] is not None]
                highs = [r[4] for r in kline if r[4] is not None]
                lows = [r[3] for r in kline if r[3] is not None]

                # 最近一日
                latest = kline[-1]
                prev = kline[-2] if len(kline) >= 2 else latest
                result["latest"] = {
                    "date": str(latest[0]),
                    "open": round(float(latest[1]), 2),
                    "close": round(float(latest[2]), 2),
                    "low": round(float(latest[3]), 2),
                    "high": round(float(latest[4]), 2),
                    "volume": int(latest[5]),
                    "ma5": round(float(latest[6]), 2) if latest[6] else None,
                    "ma10": round(float(latest[7]), 2) if latest[7] else None,
                    "ma20": round(float(latest[8]), 2) if latest[8] else None,
                }
                result["prev_day"] = {
                    "close": round(float(prev[2]), 2),
                    "volume": int(prev[5]),
                }

                # 涨跌幅
                if closes and len(closes) >= 2:
                    pct = (closes[-1] - closes[-2]) / closes[-2] * 100
                    result["latest"]["pct_chg"] = round(pct, 2)

                # 5日涨跌幅
                if len(closes) >= 5:
                    pct5 = (closes[-1] - closes[-5]) / closes[-5] * 100
                    result["pct_5d"] = round(pct5, 2)

                # 20日涨跌幅
                if len(closes) >= 20:
                    pct20 = (closes[-1] - closes[-20]) / closes[-20] * 100
                    result["pct_20d"] = round(pct20, 2)

                # 价格区间
                if closes:
                    result["price_range"] = {
                        "max60": round(max(highs), 2) if highs else None,
                        "min60": round(min(lows), 2) if lows else None,
                        "close": round(closes[-1], 2),
                    }

                # 成交量趋势
                if volumes and len(volumes) >= 5:
                    vol_5d_avg = sum(volumes[-5:]) / 5
                    vol_20d_avg = sum(volumes[-20:]) / 20 if len(volumes) >= 20 else vol_5d_avg
                    result["volume_analysis"] = {
                        "latest_vol": int(volumes[-1]),
                        "avg_5d": round(vol_5d_avg),
                        "avg_20d": round(vol_20d_avg),
                        "vol_ratio": round(volumes[-1] / vol_20d_avg, 2) if vol_20d_avg > 0 else 1.0,
                    }

                # 技术指标: RSI
                if closes:
                    result["rsi"] = _calc_rsi(closes)

                # 技术指标: MACD
                if closes:
                    dif, dea, hist = _calc_macd(closes)
                    result["macd"] = {"dif": dif, "dea": dea, "hist": hist}

                # 均线排列
                ma5 = result["latest"].get("ma5")
                ma10 = result["latest"].get("ma10")
                ma20 = result["latest"].get("ma20")
                if ma5 and ma10 and ma20:
                    if ma5 > ma10 > ma20:
                        result["ma_alignment"] = "多头排列"
                    elif ma5 < ma10 < ma20:
                        result["ma_alignment"] = "空头排列"
                    elif ma5 > ma10 and ma10 < ma20:
                        result["ma_alignment"] = "均线缠绕（偏多）"
                    elif ma5 < ma10 and ma10 > ma20:
                        result["ma_alignment"] = "均线缠绕（偏空）"
                    else:
                        result["ma_alignment"] = "均线交叉"
                else:
                    result["ma_alignment"] = "数据不足"

                # 最近5日 K线摘要（供 LLM 参考）
                result["kline_summary"] = []
                for r in kline[-5:]:
                    result["kline_summary"].append({
                        "date": str(r[0]),
                        "open": round(float(r[1]), 2),
                        "close": round(float(r[2]), 2),
                        "low": round(float(r[3]), 2),
                        "high": round(float(r[4]), 2),
                        "vol": int(r[5]),
                        "pct_chg": round((float(r[2]) - float(r[1])) / float(r[1]) * 100, 2),
                    })

            else:
                result["error"] = "Tushare 未返回足够的 K 线数据"
                logger.warning(f"K线数据不足 {stock_code}: {len(kline) if kline else 0} 条")

        except Exception as e:
            result["error"] = f"获取 K 线失败: {str(e)}"
            logger.error(f"获取K线数据异常 {stock_code}: {e}")

        # 2) 基本面数据 (PE, PB, 换手率) — 使用统一数据源管理器
        try:
            from data_sources import data_source_manager
            fund = data_source_manager.get_daily_basic(stock_code, limit=5)
            if fund:
                result["has_fundamentals"] = True
                result["fundamentals"] = {
                    "pe": float(fund.get("pe", 0)) if fund.get("pe") else None,
                    "pb": float(fund.get("pb", 0)) if fund.get("pb") else None,
                    "turnover_rate": float(fund.get("turnover_rate", 0)) if fund.get("turnover_rate") else None,
                    "total_mv": float(fund.get("total_mv", 0)) if fund.get("total_mv") else None,
                    "data_source": fund.get("data_source", "unknown"),
                }
        except Exception as e:
            logger.warning(f"获取基本面数据异常 {stock_code}: {e}")

        return result
    @staticmethod
    def _resolve_stock_name(stock_code: str, stock_name: str = "") -> str:
        """解析股票中文名 — 传入名缺失或 == 代码时, 用 stock_manager 解析 (v3.14.2)

        修复"评估历史只有代码没名字": 批量/自选只传代码时也能落真实名称。
        裸代码(无 .SZ/.SH 后缀)时尝试补后缀解析 (旧历史数据常见)。
        """
        if stock_name and stock_name.strip() and stock_name.strip() != stock_code:
            return stock_name.strip()
        try:
            from stock_info import stock_manager
            resolved = stock_manager.get_name(stock_code)
            if resolved and resolved != stock_code:
                return resolved
            if "." not in stock_code:
                for suffix in (".SZ", ".SH"):
                    cand = stock_code + suffix
                    resolved = stock_manager.get_name(cand)
                    if resolved and resolved != cand:
                        return resolved
        except Exception:
            logger.debug(f"stock_manager 解析 {stock_code} 名称失败", exc_info=True)
        return stock_name or stock_code
    def _load_prompt_template(self) -> str:
        """加载评估 prompt 模板 (带缓存)"""
        if not hasattr(self, '_prompt_template') or self._prompt_template is None:
            import os as _os
            # V5.0.9 (T-5.0.91): 文件已移至 ai_eval/, 模板目录在 backend/prompts/ (上移一级)
            template_path = _os.path.join(_os.path.dirname(_os.path.dirname(__file__)), 'prompts', 'evaluate_stock.txt')
            with open(template_path, 'r', encoding='utf-8') as f:
                self._prompt_template = f.read()
        return self._prompt_template
