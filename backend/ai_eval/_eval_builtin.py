#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.4): AIEvaluator 内置评分引擎 Mixin(_eval) — 自 _eval.py 拆分。

行为与拆分前一致，由 ai_eval/_eval.py 聚合为 AIEvalMixin。
"""
from typing import Dict


class AIEvalBuiltinMixin:
    """AIEvaluator 内置评分引擎 Mixin(_eval) — 自 _eval.py 拆分"""
    def _builtin_evaluate(self, stock_code: str, stock_name: str, market_data: Dict) -> Dict:
        """
        内置股票评估算法 — 基于真实技术指标打分，不再使用随机数
        """
        dims = [
            {"name": "趋势强度", "weight": 0.15},
            {"name": "均线排列", "weight": 0.10},
            {"name": "成交量", "weight": 0.15},
            {"name": "动能风险", "weight": 0.10},
            {"name": "量价关系", "weight": 0.12},
            {"name": "中期趋势", "weight": 0.10},
            {"name": "指标共振", "weight": 0.12},
            {"name": "持仓稳定性", "weight": 0.08},
            {"name": "价格位置", "weight": 0.08},
        ]

        has_data = market_data.get("has_kline", False)
        scores = {}

        # ── 趋势强度 ──
        trend_score = 50  # 基准中性
        if has_data:
            latest_data = market_data.get("latest", {})
            pct_5d = market_data.get("pct_5d", 0)
            pct_20d = market_data.get("pct_20d", 0)
            ma = market_data.get("ma_alignment", "")

            # 均线排列加分
            if ma == "多头排列":
                trend_score += 20
            elif "偏多" in str(ma):
                trend_score += 10
            elif ma == "空头排列":
                trend_score -= 20
            elif "偏空" in str(ma):
                trend_score -= 10

            # 涨跌幅加分
            if pct_5d and pct_5d > 3:
                trend_score += 10
            elif pct_5d and pct_5d > 0:
                trend_score += 5
            elif pct_5d and pct_5d < -5:
                trend_score -= 15
            elif pct_5d and pct_5d < 0:
                trend_score -= 5

            if pct_20d and pct_20d > 10:
                trend_score += 10
            elif pct_20d and pct_20d > 0:
                trend_score += 3
            elif pct_20d and pct_20d < -10:
                trend_score -= 10

        scores["趋势强度"] = max(10, min(95, trend_score))

        # ── 均线排列 ──
        ma_score = 50
        if has_data:
            ma = market_data.get("ma_alignment", "")
            latest_data = market_data.get("latest", {})
            close = latest_data.get("close", 0)
            ma5 = latest_data.get("ma5")
            ma20 = latest_data.get("ma20")

            if ma == "多头排列":
                ma_score = 85
            elif ma == "空头排列":
                ma_score = 15
            elif ma == "均线缠绕（偏多）":
                ma_score = 65
            elif ma == "均线缠绕（偏空）":
                ma_score = 35
            elif ma == "均线交叉":
                ma_score = 50

            # 价格相对于均线位置微调
            if close and ma5 and ma20 and ma5 != ma20:
                if close > ma5:
                    ma_score = min(95, ma_score + 5)
                if close > ma20:
                    ma_score = min(95, ma_score + 3)
                if close < ma20:
                    ma_score = max(10, ma_score - 5)
        scores["均线排列"] = max(10, min(95, ma_score))

        # ── 成交量 ──
        vol_score = 50
        if has_data and market_data.get("volume_analysis"):
            v = market_data["volume_analysis"]
            vol_ratio = v.get("vol_ratio", 1.0)
            pct = market_data.get("latest", {}).get("pct_chg", 0)

            if 1.2 <= vol_ratio <= 3.0:
                vol_score = 70  # 温和放量
            elif vol_ratio > 3.0:
                vol_score = 55  # 异常放量
            elif 0.8 <= vol_ratio < 1.2:
                vol_score = 50  # 平量
            elif vol_ratio < 0.5:
                vol_score = 30  # 缩量严重

            # 量价配合
            if pct and pct > 0 and vol_ratio > 1.2:
                vol_score = min(95, vol_score + 15)  # 放量上涨好
            elif pct and pct < 0 and vol_ratio > 1.5:
                vol_score = max(15, vol_score - 10)  # 放量下跌差

            # 换手率
            f = market_data.get("fundamentals", {})
            tr = f.get("turnover_rate")
            if tr is not None:
                if 2 <= tr <= 8:
                    vol_score = min(95, vol_score + 5)  # 适中
                elif tr > 15:
                    vol_score = max(15, vol_score - 10)  # 过高
                elif tr < 0.5:
                    vol_score = max(15, vol_score - 5)  # 过低
        scores["成交量"] = max(10, min(95, vol_score))

        # ── 动能风险（RSI动量 + 日内振幅） ──
        vola_score = 50
        if has_data:
            rsi = market_data.get("rsi", 50)
            if rsi >= 80:
                vola_score = 25  # 超买风险
            elif rsi >= 70:
                vola_score = 40
            elif 40 <= rsi <= 60:
                vola_score = 70  # 健康区间
            elif rsi <= 20:
                vola_score = 30  # 超卖
            elif rsi <= 30:
                vola_score = 45

            # 近期振幅
            latest_data = market_data.get("latest", {})
            high = latest_data.get("high", 0)
            low = latest_data.get("low", 0)
            close = latest_data.get("close", 1)
            if high and low and close and close > 0:
                amplitude = (high - low) / close * 100
                if amplitude > 7:
                    vola_score = max(15, vola_score - 15)
                elif amplitude > 4:
                    vola_score = max(20, vola_score - 8)
        scores["动能风险"] = max(10, min(95, vola_score))

        # ── 量价关系 ──
        fund_score = 50
        if has_data and market_data.get("volume_analysis"):
            v = market_data["volume_analysis"]
            vol_ratio = v.get("vol_ratio", 1.0)
            pct = market_data.get("latest", {}).get("pct_chg", 0)
            if pct and pct > 0 and vol_ratio > 1.3:
                fund_score = 75
            elif pct and pct > 0:
                fund_score = 60
            elif pct and pct < -2 and vol_ratio > 1.3:
                fund_score = 25
            elif pct and pct < 0:
                fund_score = 40
        scores["量价关系"] = max(10, min(95, fund_score))

        # ── 中期趋势 ──
        # 基于中短期涨跌幅评估趋势持续性
        industry_score = 50
        if has_data:
            pct_5d = market_data.get("pct_5d", 0)
            pct_20d = market_data.get("pct_20d", 0)
            if pct_5d and pct_20d:
                if pct_5d > 3 and pct_20d > 5:
                    industry_score = 70
                elif pct_5d > 0 and pct_20d > 0:
                    industry_score = 60
                elif pct_5d < -3 and pct_20d < -5:
                    industry_score = 30
                elif pct_5d < 0:
                    industry_score = 40
        scores["中期趋势"] = max(10, min(95, industry_score))

        # ── 指标共振 ──
        # 多技术指标的方向一致性
        consensus_score = 50  # default neutral when <3 signals
        if has_data:
            ma = market_data.get("ma_alignment", "")
            rsi = market_data.get("rsi", 50)
            macd = market_data.get("macd", {})
            pct = market_data.get("latest", {}).get("pct_chg", 0)

            bullish_signals = 0
            bearish_signals = 0

            if ma in ("多头排列", "均线缠绕（偏多）"):
                bullish_signals += 1
            elif ma in ("空头排列", "均线缠绕（偏空）"):
                bearish_signals += 1

            if rsi and 40 <= rsi <= 70:
                bullish_signals += 1
            elif rsi and rsi < 30:
                bearish_signals += 1

            if macd.get("hist", 0) > 0:
                bullish_signals += 1
            elif macd.get("hist", 0) < 0:
                bearish_signals += 1

            if pct and pct > 0:
                bullish_signals += 1
            elif pct and pct < 0:
                bearish_signals += 1

            total = bullish_signals + bearish_signals
            if total >= 3:
                if bullish_signals >= 3:
                    consensus_score = 85
                elif bearish_signals >= 3:
                    consensus_score = 15
                elif bullish_signals > bearish_signals:
                    consensus_score = 65
                else:
                    consensus_score = 35
        scores["指标共振"] = max(10, min(95, consensus_score))

        # ── 持仓稳定性 ──
        stability_score = 50
        if has_data:
            rsi = market_data.get("rsi", 50)
            ma = market_data.get("ma_alignment", "")
            macd = market_data.get("macd", {})

            if 40 <= rsi <= 60:
                stability_score += 15
            elif 30 <= rsi <= 70:
                stability_score += 5
            else:
                stability_score -= 10

            if ma in ("多头排列", "空头排列"):
                stability_score += 10  # 趋势明确
            else:
                stability_score -= 5  # 震荡

            if abs(macd.get("hist", 0)) < 0.1:
                stability_score += 5  # MACD 走平
        scores["持仓稳定性"] = max(10, min(95, stability_score))

        # ── 价格位置 ──
        position_score = 50
        if has_data and market_data.get("price_range"):
            pr = market_data["price_range"]
            close = pr.get("close", 0)
            max60 = pr.get("max60", 0)
            min60 = pr.get("min60", 0)
            if max60 > min60:
                pos_pct = (close - min60) / (max60 - min60) * 100
                if pos_pct > 90:
                    position_score = 25  # 高位风险
                elif pos_pct > 70:
                    position_score = 40
                elif 30 <= pos_pct <= 70:
                    position_score = 70  # 中等位置较安全
                elif pos_pct < 10:
                    position_score = 30  # 底部但不确定
                elif pos_pct < 30:
                    position_score = 55
                # 附加数据注解
                scores["_price_position_pct"] = round(pos_pct, 2)
        scores["价格位置"] = max(10, min(95, position_score))

        # ── 加权总分 ──
        total_score = 0
        for dim in dims:
            s = scores.get(dim["name"], 50)
            total_score += s * dim["weight"]

        total_score = round(total_score, 2)

        # ── 评级 ──
        if total_score >= 85:
            level = "强烈推荐"
            color = "#67c23a"
        elif total_score >= 75:
            level = "推荐"
            color = "#85ce61"
        elif total_score >= 65:
            level = "谨慎推荐"
            color = "#e6a23c"
        elif total_score >= 55:
            level = "中性"
            color = "#909399"
        else:
            level = "观望"
            color = "#f56c6c"

        # ── 分析报告 ──
        strengths = []
        weaknesses = []
        suggestions = []

        if scores["趋势强度"] >= 70:
            strengths.append(f"趋势向上动能较强（近5日涨幅 {market_data.get('pct_5d', 'N/A')}%）")
        elif scores["趋势强度"] <= 35:
            weaknesses.append(f"趋势走弱（近20日跌幅 {market_data.get('pct_20d', 'N/A')}%）")

        if scores["均线排列"] >= 70:
            strengths.append(f"均线{market_data.get('ma_alignment', '结构良好')}")
        elif scores["均线排列"] <= 40:
            weaknesses.append(f"均线{market_data.get('ma_alignment', '结构偏弱')}")

        rsi_val = market_data.get("rsi")
        if rsi_val is not None:
            if rsi_val >= 70:
                weaknesses.append(f"RSI={rsi_val}，短期超买需注意回调")
            elif rsi_val <= 30:
                weaknesses.append(f"RSI={rsi_val}，短期超卖但反弹不确定")

        if scores["成交量"] >= 65:
            strengths.append("成交量配合良好，资金关注度较高")
        elif scores["成交量"] <= 35:
            weaknesses.append("成交量萎缩，市场关注度不足")

        f = market_data.get("fundamentals", {})
        if f.get("pe") and f["pe"] < 0:
            weaknesses.append(f"PE为负（{f['pe']:.1f}），公司处于亏损状态")
        elif f.get("pe") and f["pe"] > 100:
            weaknesses.append(f"PE高达{f['pe']:.1f}，估值偏高")

        if f.get("pb") and f["pb"] < 1:
            strengths.append(f"PB={f['pb']:.2f}，破净状态具有一定安全边际")

        suggestions.append("建议结合自身风险偏好控制仓位")
        if total_score >= 75:
            suggestions.append("可考虑分批建仓，设置止损位")
        elif total_score >= 60:
            suggestions.append("建议小仓位试探，等待趋势明朗")
        elif total_score < 50:
            suggestions.append("短期建议观望，等待更好的入场时机")
        if market_data.get("rsi") and market_data["rsi"] >= 75:
            suggestions.append("RSI 高位，不建议追高")

        # 数据源标注
        data_source = "📡 Tushare 实时数据" if has_data else "⚠️ 离线模式（无实时数据）"
        if market_data.get("has_fundamentals"):
            data_source += " + 基本面"

        return {
            "total_score": total_score,
            "level": level,
            "level_color": color,
            "dimensions": {d["name"]: scores[d["name"]] for d in dims},
            "analysis": {
                "strengths": strengths[:4],
                "weaknesses": weaknesses[:4],
                "suggestions": suggestions[:4]
            },
            "detailed_report": f"基于{data_source}的综合评估：{stock_name}({stock_code}) 综合得分 {total_score}，评级「{level}」。"
                               f"趋势{market_data.get('ma_alignment', '不明')}，"
                               f"RSI={market_data.get('rsi', 'N/A')}。"
                               f"{'; '.join(strengths[:2]) if strengths else ''}",
            "provider": f"内置引擎 ({data_source})"
        }
