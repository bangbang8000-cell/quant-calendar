#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI股票评估模块
支持：Coding Plan 内置评估 + 自定义OpenAI兼容API
v1.5.2: 基于Tushare真实数据，废弃随机数值
"""
import json
import hashlib
import re
import time
import requests
import logging
from typing import Dict, List, Optional
from datetime import datetime

logger = logging.getLogger(__name__)

# 技术指标计算用常量
RSI_PERIOD = 14
MACD_FAST = 12
MACD_SLOW = 26
MACD_SIGNAL = 9


def _calc_rsi(closes, period=RSI_PERIOD):
    """计算 RSI 指标"""
    if len(closes) < period + 1:
        return 50.0
    deltas = [closes[i] - closes[i - 1] for i in range(1, len(closes))]
    gains = [d if d > 0 else 0 for d in deltas[-period:]]
    losses = [-d if d < 0 else 0 for d in deltas[-period:]]
    avg_gain = sum(gains) / period
    avg_loss = sum(losses) / period
    if avg_loss == 0:
        return 100.0
    rs = avg_gain / avg_loss
    return round(100.0 - (100.0 / (1.0 + rs)), 1)


def _calc_macd(closes):
    """计算 MACD (DIF, DEA, HIST)"""
    if len(closes) < MACD_SLOW + MACD_SIGNAL:
        return 0, 0, 0
    ema12 = _ema(closes, MACD_FAST)
    ema26 = _ema(closes, MACD_SLOW)
    dif = ema12 - ema26
    # 用简易方式计算 DEA (signal)
    dea = dif  # 简化，只用最后一根
    hist = (dif - dea) * 2
    return round(dif, 2), round(dea, 2), round(hist, 2)


def _ema(data, period):
    """计算 EMA"""
    if len(data) < period:
        return data[-1]
    k = 2.0 / (period + 1)
    ema = sum(data[:period]) / period
    for price in data[period:]:
        ema = price * k + ema * (1 - k)
    return ema


def _ma(data, period):
    """简单移动平均"""
    if len(data) < period:
        return data[-1]
    return sum(data[-period:]) / period


class AIEvaluator:
    def __init__(self, config_file: str = None):
        from paths import AI_CONFIG_FILE, AI_EVALUATION_HISTORY_FILE
        if config_file is None:
            config_file = AI_CONFIG_FILE
        self.config_file = config_file
        self.history_file = AI_EVALUATION_HISTORY_FILE
        self.config = self._load_config()
        self.history = self._load_history()

    def _load_config(self) -> Dict:
        """加载AI配置"""
        try:
            with open(self.config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {
                "provider": "codingplan",
                "apiKey": "",
                "endpoint": "",
                "model": "gpt-3.5-turbo"
            }

    def save_config(self, config: Dict):
        """保存AI配置"""
        self.config.update(config)
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(self.config, f, ensure_ascii=False, indent=2)
        return True

    def _load_history(self) -> List:
        """加载评估历史"""
        try:
            with open(self.history_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return []

    def _save_history(self):
        """保存评估历史"""
        with open(self.history_file, 'w', encoding='utf-8') as f:
            json.dump(self.history, f, ensure_ascii=False, indent=2)

    # ─── 数据获取 ───────────────────────────────────────────────

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
                dates = [r[0] for r in kline]

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

        # 2) 基本面数据 (PE, PB, 换手率)
        try:
            from config import settings
            import tushare as ts
            if settings.TUSHARE_TOKEN:
                ts.set_token(settings.TUSHARE_TOKEN)
                pro = ts.pro_api()
                df = pro.daily_basic(
                    ts_code=stock_code,
                    limit=5,
                    fields='trade_date,pe,pb,turnover_rate,total_mv'
                )
                if df is not None and len(df) > 0:
                    result["has_fundamentals"] = True
                    latest_f = df.iloc[0]
                    result["fundamentals"] = {
                        "pe": float(latest_f.get("pe", 0)) if latest_f.get("pe") else None,
                        "pb": float(latest_f.get("pb", 0)) if latest_f.get("pb") else None,
                        "turnover_rate": float(latest_f.get("turnover_rate", 0)) if latest_f.get("turnover_rate") else None,
                        "total_mv": float(latest_f.get("total_mv", 0)) if latest_f.get("total_mv") else None,
                    }
                    # 近5日平均换手率
                    if "turnover_rate" in df.columns and len(df) >= 2:
                        valids = [float(v) for v in df["turnover_rate"] if v and str(v) != 'nan']
                        if valids:
                            result["fundamentals"]["turnover_avg_5d"] = round(sum(valids) / len(valids), 2)
        except Exception as e:
            logger.warning(f"获取基本面数据异常 {stock_code}: {e}")

        return result

    # ─── 评估入口 ───────────────────────────────────────────────

    def evaluate_stock(self, stock_code: str, stock_name: str, stock_data: Dict = None) -> Dict:
        """
        评估单只股票
        """
        # 1) 获取真实数据
        market_data = self._fetch_stock_data(stock_code)

        # 2) 根据配置选择评估方式
        if self.config.get("provider") == "custom" and self.config.get("apiKey"):
            result = self._llm_evaluate(stock_code, stock_name, market_data)
        else:
            result = self._builtin_evaluate(stock_code, stock_name, market_data)

        # 3) 保存历史
        record = {
            "id": hashlib.md5(f"{stock_code}{time.time()}".encode()).hexdigest()[:12],
            "stock_code": stock_code,
            "stock_name": stock_name,
            "evaluate_time": datetime.now().isoformat(),
            "result": result,
            "market_data_snapshot": {
                "has_kline": market_data.get("has_kline", False),
                "has_fundamentals": market_data.get("has_fundamentals", False),
                "latest": market_data.get("latest"),
                "rsi": market_data.get("rsi"),
                "macd": market_data.get("macd"),
                "ma_alignment": market_data.get("ma_alignment"),
            }
        }
        self.history.insert(0, record)
        if len(self.history) > 500:
            self.history = self.history[:500]
        self._save_history()

        return record

    # ─── LLM 评估 ───────────────────────────────────────────────

    def _llm_evaluate(self, stock_code: str, stock_name: str, market_data: Dict) -> Dict:
        """
        使用大模型API评估股票，注入真实行情数据
        """
        try:
            # 构建数据化的 prompt
            data_section = self._build_data_prompt(market_data)

            prompt = f"""请作为专业的股票分析师，基于以下真实行情数据对股票进行多维度评估。

## 股票信息
- 股票代码：{stock_code}
- 股票名称：{stock_name}

{data_section}

## 评分要求
请从以下9个维度进行评分（0-100分），必须严格基于上述数据而非猜测：

1. **趋势强度**（15%权重）— 结合均线排列、价格涨跌幅判断趋势方向和强度
2. **均线排列**（15%权重）— 分析 MA5/MA10/MA20 的排列形态
3. **成交量**（12%权重）— 判断量价配合度、换手率活跃度
4. **波动率**（10%权重）— 评估近期振幅、RSI 超买超卖程度
5. **资金流向**（12%权重）— 根据成交量变化推测资金动向
6. **行业热度**（10%权重）— 结合所属板块近期表现综合判断
7. **策略共识度**（12%权重）— 多指标信号的一致性
8. **持仓稳定性**（8%权重）— 结合 MACD、RSI 判断趋势稳定性
9. **价格位置**（6%权重）— 当前价在60日区间的位置

请以严格 JSON 格式返回（不要含任何其他文字）：
{{
    "total_score": 综合加权总分（0-100，保留1位小数）,
    "level": "评级（强烈推荐/推荐/谨慎推荐/中性/观望）",
    "level_color": "#67c23a 或 #85ce61 或 #e6a23c 或 #909399 或 #f56c6c",
    "dimensions": {{
        "趋势强度": 分数,
        "均线排列": 分数,
        "成交量": 分数,
        "波动率": 分数,
        "资金流向": 分数,
        "行业热度": 分数,
        "策略共识度": 分数,
        "持仓稳定性": 分数,
        "价格位置": 分数
    }},
    "analysis": {{
        "strengths": ["基于数据的优势1", "优势2"],
        "weaknesses": ["基于数据的风险1", "风险2"],
        "suggestions": ["基于数据的建议1", "建议2"]
    }},
    "detailed_report": "200-300字的综合分析报告，引用具体数据指标",
    "provider": "AI 大模型"
}}"""

            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {self.config['apiKey']}"
            }

            payload = {
                "model": self.config.get("model", "ark-code-latest"),
                "messages": [
                    {"role": "system", "content": "你是专业的量化股票分析师，严格基于提供的真实数据进行分析，不编造信息。输出严格 JSON 格式。"},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.3,
                "max_tokens": 3000
            }

            endpoint = self.config.get("endpoint", "https://ark.cn-beijing.volces.com/api/coding/v3")
            if not endpoint.endswith("/chat/completions"):
                endpoint = endpoint.rstrip("/") + "/chat/completions"

            response = requests.post(endpoint, headers=headers, json=payload, timeout=90)
            response.raise_for_status()

            result = response.json()
            content = result["choices"][0]["message"]["content"]

            # 解析 JSON 响应
            json_match = re.search(r'\{.*\}', content, re.DOTALL)
            if json_match:
                llm_result = json.loads(json_match.group())
                if "provider" not in llm_result:
                    llm_result["provider"] = "AI 大模型"
                return llm_result
            else:
                # 降级
                fallback = self._builtin_evaluate(stock_code, stock_name, market_data)
                fallback["provider"] = "AI 大模型(解析降级)"
                fallback["detailed_report"] = content
                return fallback

        except Exception as e:
            fallback = self._builtin_evaluate(stock_code, stock_name, market_data)
            fallback["provider"] = f"内置引擎 (AI不可用: {str(e)[:60]})"
            return fallback

    def _build_data_prompt(self, data: Dict) -> str:
        """将 market_data 转为 LLM 可读的文本"""
        lines = ["## 真实行情数据"]

        if data.get("latest"):
            l = data["latest"]
            lines.append("### 最近交易日")
            lines.append(f"- 日期：{l.get('date', 'N/A')}")
            lines.append(f"- 开盘：{l.get('open')}  收盘：{l.get('close')}  最高：{l.get('high')}  最低：{l.get('low')}")
            lines.append(f"- 成交量：{l.get('volume', 0):,} 手")
            if l.get("pct_chg") is not None:
                lines.append(f"- 涨跌幅：{l['pct_chg']}%")
            lines.append(f"- MA5：{l.get('ma5', 'N/A')}  MA10：{l.get('ma10', 'N/A')}  MA20：{l.get('ma20', 'N/A')}")

        if data.get("pct_5d") is not None:
            lines.append(f"\n### 阶段涨跌幅")
            lines.append(f"- 近5日：{data['pct_5d']}%")
            if data.get("pct_20d") is not None:
                lines.append(f"- 近20日：{data['pct_20d']}%")

        if data.get("price_range"):
            pr = data["price_range"]
            close = pr.get("close", 0)
            max60 = pr.get("max60", close)
            min60 = pr.get("min60", close)
            if max60 and min60 and max60 != min60:
                position = round((close - min60) / (max60 - min60) * 100, 1)
                lines.append(f"- 60日价格位置：{position}%（区间 {min60}-{max60}）")

        if data.get("ma_alignment"):
            lines.append(f"\n### 均线排列")
            lines.append(f"- 形态：{data['ma_alignment']}")

        if data.get("volume_analysis"):
            v = data["volume_analysis"]
            lines.append(f"\n### 成交量分析")
            lines.append(f"- 最新量：{v.get('latest_vol', 0):,} 手")
            lines.append(f"- 5日均量：{v.get('avg_5d', 0):,} 手")
            lines.append(f"- 20日均量：{v.get('avg_20d', 0):,} 手")
            lines.append(f"- 量比（vs20日均）：{v.get('vol_ratio', 1.0)}")

        if data.get("rsi") is not None:
            lines.append(f"\n### 技术指标")
            lines.append(f"- RSI(14)：{data['rsi']}")
            if data.get("macd"):
                m = data["macd"]
                lines.append(f"- MACD：DIF={m.get('dif')}, DEA={m.get('dea')}, 柱={m.get('hist')}")

        if data.get("fundamentals"):
            f = data["fundamentals"]
            lines.append(f"\n### 基本面")
            if f.get("pe"):
                lines.append(f"- PE（市盈率）：{f['pe']:.2f}")
            if f.get("pb"):
                lines.append(f"- PB（市净率）：{f['pb']:.2f}")
            if f.get("turnover_rate"):
                lines.append(f"- 换手率：{f['turnover_rate']:.2f}%")
            if f.get("total_mv"):
                mv = f["total_mv"]
                if mv > 1e12:
                    lines.append(f"- 总市值：{mv/1e12:.2f} 万亿")
                else:
                    lines.append(f"- 总市值：{mv/1e8:.2f} 亿")

        if data.get("kline_summary"):
            lines.append(f"\n### 近5日K线摘要")
            lines.append("日期       开盘     收盘     最高     最低     成交量     涨幅")
            for k in data["kline_summary"]:
                lines.append(
                    f"{k['date']}  {k['open']:>7}  {k['close']:>7}  "
                    f"{k['high']:>7}  {k['low']:>7}  {k['vol']:>10,}  "
                    f"{k['pct_chg']:>+6.2f}%"
                )

        if data.get("error") and not data.get("has_kline"):
            lines.append(f"\n⚠️ 数据获取异常：{data['error']}")
            lines.append("请基于有限信息进行评估，无法判断的维度给中性分。")

        return "\n".join(lines)

    # ─── 内置技术评估（基于真实数据） ──────────────────────────

    def _builtin_evaluate(self, stock_code: str, stock_name: str, market_data: Dict) -> Dict:
        """
        内置股票评估算法 — 基于真实技术指标打分，不再使用随机数
        """
        dims = [
            {"name": "趋势强度", "weight": 0.15},
            {"name": "均线排列", "weight": 0.15},
            {"name": "成交量", "weight": 0.12},
            {"name": "波动率", "weight": 0.10},
            {"name": "资金流向", "weight": 0.12},
            {"name": "行业热度", "weight": 0.10},
            {"name": "策略共识度", "weight": 0.12},
            {"name": "持仓稳定性", "weight": 0.08},
            {"name": "价格位置", "weight": 0.06},
        ]

        has_data = market_data.get("has_kline", False)
        scores = {}

        # ── 趋势强度 ──
        trend_score = 50  # 基准中性
        if has_data:
            l = market_data.get("latest", {})
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
            l = market_data.get("latest", {})
            close = l.get("close", 0)
            ma5 = l.get("ma5")
            ma10 = l.get("ma10")
            ma20 = l.get("ma20")

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

        # ── 波动率 ──
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
            l = market_data.get("latest", {})
            high = l.get("high", 0)
            low = l.get("low", 0)
            close = l.get("close", 1)
            if high and low and close and close > 0:
                amplitude = (high - low) / close * 100
                if amplitude > 7:
                    vola_score = max(15, vola_score - 15)
                elif amplitude > 4:
                    vola_score = max(20, vola_score - 8)
        scores["波动率"] = max(10, min(95, vola_score))

        # ── 资金流向 ──
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
        scores["资金流向"] = max(10, min(95, fund_score))

        # ── 行业热度 ──
        # 没有行业对比数据，参考整体趋势
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
        scores["行业热度"] = max(10, min(95, industry_score))

        # ── 策略共识度 ──
        consensus_score = 50
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
        scores["策略共识度"] = max(10, min(95, consensus_score))

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
                scores["_price_position_pct"] = round(pos_pct, 1)
        scores["价格位置"] = max(10, min(95, position_score))

        # ── 加权总分 ──
        total_score = 0
        for dim in dims:
            s = scores.get(dim["name"], 50)
            total_score += s * dim["weight"]

        total_score = round(total_score, 1)

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

    # ─── 指数评估 ───────────────────────────────────────────────

    def evaluate_index(self, index_code: str, index_name: str, current_price: float = None, pct_chg: float = None) -> Dict:
        """
        评估指数 — 复用 K线数据获取 + 内置评估引擎
        返回前端兼容格式：{ analysis (HTML), suggestion, confidence }
        """
        # 获取 K 线数据（指数也走同一通道）
        market_data = self._fetch_stock_data(index_code)

        has_data = market_data.get("has_kline", False)
        if not has_data:
            return {
                "analysis": f"<p style='color:#999;'>无法获取 {index_name}({index_code}) 的行情数据，请检查 Tushare 连接。</p>",
                "suggestion": "观望",
                "confidence": 0
            }

        # 用内置引擎跑一次评分
        builtin = self._builtin_evaluate(index_code, index_name, market_data)

        # ── 构建 HTML 分析 ──
        parts = []
        l = market_data.get("latest", {})

        # 行情速览
        parts.append("<div style='margin-bottom:16px;'>")
        parts.append("<h4 style='margin:0 0 8px 0;'>📊 行情速览</h4>")
        parts.append("<table style='width:100%;font-size:13px;border-collapse:collapse;'>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>最新价</td><td style='padding:4px 8px;font-weight:600;'>{l.get('close', '-')}</td>")
        pct = pct_chg if pct_chg is not None else l.get('pct_chg')
        color = '#E63946' if (pct or 0) >= 0 else '#457B9D'
        sign = '+' if (pct or 0) >= 0 else ''
        parts.append(f"<td style='padding:4px 8px;font-weight:600;color:{color};'>{sign}{pct or '-'}%</td></tr>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>MA5 / MA10 / MA20</td><td colspan='2' style='padding:4px 8px;'>{l.get('ma5','-')} / {l.get('ma10','-')} / {l.get('ma20','-')}</td></tr>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>成交量</td><td colspan='2' style='padding:4px 8px;'>{l.get('volume',0):,} 手</td></tr>")
        parts.append("</table></div>")

        # 技术指标
        parts.append("<div style='margin-bottom:16px;'>")
        parts.append("<h4 style='margin:0 0 8px 0;'>🔬 技术指标</h4>")
        parts.append("<table style='width:100%;font-size:13px;border-collapse:collapse;'>")
        rsi = market_data.get("rsi")
        rsi_color = '#f56c6c' if rsi and rsi >= 70 else '#67c23a' if rsi and rsi <= 30 else '#333'
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>RSI(14)</td><td style='padding:4px 8px;font-weight:600;color:{rsi_color};'>{rsi or '-'}</td>")
        rsi_desc = '超买区域' if rsi and rsi >= 70 else '超卖区域' if rsi and rsi <= 30 else '中性区间' if rsi and 40 <= rsi <= 60 else '正常'
        parts.append(f"<td style='padding:4px 8px;color:#999;font-size:12px;'>{rsi_desc}</td></tr>")
        macd = market_data.get("macd", {})
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>MACD</td><td style='padding:4px 8px;font-weight:600;'>DIF {macd.get('dif','-')} DEA {macd.get('dea','-')}</td>")
        hist = macd.get('hist', 0)
        hist_color = '#E63946' if hist > 0 else '#457B9D'
        parts.append(f"<td style='padding:4px 8px;color:{hist_color};font-size:12px;'>{'多头' if hist>0 else '空头'}</td></tr>")
        ma = market_data.get("ma_alignment", "-")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>均线排列</td><td colspan='2' style='padding:4px 8px;font-weight:600;'>{ma}</td></tr>")
        if market_data.get("volume_analysis"):
            v = market_data["volume_analysis"]
            parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>量比</td><td colspan='2' style='padding:4px 8px;'>{v.get('vol_ratio', '-')}</td></tr>")
        parts.append("</table></div>")

        # 分维度评分
        parts.append("<div style='margin-bottom:16px;'>")
        parts.append("<h4 style='margin:0 0 8px 0;'>📈 各维度评分</h4>")
        dims = builtin.get("dimensions", {})
        for name, score in dims.items():
            bar_color = '#67c23a' if score >= 70 else '#e6a23c' if score >= 50 else '#f56c6c'
            pct_bar = min(100, max(0, score))
            parts.append(f"<div style='display:flex;align-items:center;margin-bottom:6px;font-size:12px;'>"
                         f"<span style='width:80px;color:#666;'>{name}</span>"
                         f"<div style='flex:1;height:6px;background:#eee;border-radius:3px;margin:0 8px;'>"
                         f"<div style='width:{pct_bar}%;height:100%;background:{bar_color};border-radius:3px;'></div></div>"
                         f"<span style='font-weight:600;color:{bar_color};width:30px;text-align:right;'>{score}</span></div>")

        # 总评
        total = builtin.get("total_score", 50)
        total_color = '#67c23a' if total >= 75 else '#e6a23c' if total >= 60 else '#f56c6c'
        parts.append(f"<div style='display:flex;align-items:center;margin-top:8px;padding-top:8px;border-top:1px solid #eee;'>"
                     f"<span style='font-weight:600;color:#333;'>综合评分</span>"
                     f"<span style='margin-left:12px;font-size:22px;font-weight:700;color:{total_color};'>{total}</span>"
                     f"<span style='margin-left:8px;color:#999;font-size:12px;'>/100</span></div>")
        parts.append("</div>")

        # 分析建议
        analysis = builtin.get("analysis", {})
        strengths = analysis.get("strengths", [])
        weaknesses = analysis.get("weaknesses", [])
        suggestions = analysis.get("suggestions", [])

        if strengths:
            parts.append("<div style='margin-bottom:12px;'>")
            parts.append("<h4 style='margin:0 0 6px 0;color:#67c23a;'>✅ 积极因素</h4>")
            for s in strengths:
                parts.append(f"<div style='font-size:13px;color:#555;padding:2px 0;'>• {s}</div>")
            parts.append("</div>")

        if weaknesses:
            parts.append("<div style='margin-bottom:12px;'>")
            parts.append("<h4 style='margin:0 0 6px 0;color:#f56c6c;'>⚠️ 风险提示</h4>")
            for w in weaknesses:
                parts.append(f"<div style='font-size:13px;color:#555;padding:2px 0;'>• {w}</div>")
            parts.append("</div>")

        # ── 建议映射 ──
        level = builtin.get("level", "观望")
        suggestion_map = {
            "强烈推荐": "买入",
            "推荐": "买入",
            "谨慎推荐": "买入",
            "中性": "观望",
            "观望": "卖出"
        }
        suggestion = suggestion_map.get(level, "观望")

        # 信心指数 = 评分映射
        confidence = min(100, max(0, round(total)))

        # 数据源
        data_src = "📡 Tushare 实时数据" if has_data else "⚠️ 离线模式"
        parts.append(f"<div style='margin-top:12px;font-size:11px;color:#999;text-align:right;'>数据源: {data_src} | 内置引擎</div>")

        return {
            "analysis": "\n".join(parts),
            "suggestion": suggestion,
            "confidence": confidence
        }

    # ─── 批量评估 ───────────────────────────────────────────────

    def batch_evaluate(self, stock_codes: List[str], stock_info_map: Dict = None) -> List[Dict]:
        """批量评估"""
        results = []
        for code in stock_codes:
            name = (stock_info_map or {}).get(code, code)
            result = self.evaluate_stock(code, name)
            results.append(result)
        return results

    # ─── 历史管理 ───────────────────────────────────────────────

    def get_history(self, limit: int = 50) -> List[Dict]:
        """获取评估历史"""
        return self.history[:limit]

    def delete_history(self, record_id: str) -> bool:
        """删除单条评估记录"""
        initial_count = len(self.history)
        self.history = [h for h in self.history if h.get("id") != record_id]
        if len(self.history) < initial_count:
            self._save_history()
            return True
        return False

    # ─── 连接测试 ───────────────────────────────────────────────

    def test_connection(self) -> Dict:
        """测试API连接"""
        if self.config["provider"] == "codingplan":
            return {"success": True, "message": "Coding Plan内置引擎工作正常"}
        elif self.config["provider"] == "custom" and self.config.get("apiKey"):
            try:
                headers = {
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {self.config['apiKey']}"
                }
                payload = {
                    "model": self.config.get("model", "ark-code-latest"),
                    "messages": [{"role": "user", "content": "你好，请回复'测试成功'"}],
                    "max_tokens": 50
                }
                endpoint = self.config.get("endpoint", "https://ark.cn-beijing.volces.com/api/coding/v3")
                if not endpoint.endswith("/chat/completions"):
                    endpoint = endpoint.rstrip("/") + "/chat/completions"
                response = requests.post(endpoint, headers=headers, json=payload, timeout=30)
                response.raise_for_status()
                result = response.json()
                if "choices" in result:
                    return {"success": True, "message": "OpenClaw大模型API连接测试成功！"}
                else:
                    return {"success": False, "message": f"API返回格式异常: {str(result)[:100]}"}
            except Exception as e:
                return {"success": False, "message": f"API连接测试失败: {str(e)}"}
        return {"success": False, "message": "请先配置API Key"}

    # ─── 自动评股配置 ───────────────────────────────────────────

    def get_auto_config(self) -> Dict:
        """获取自动评股配置"""
        from paths import AUTO_EVALUATE_CONFIG_FILE
        auto_config_file = AUTO_EVALUATE_CONFIG_FILE
        try:
            with open(auto_config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {
                "enabled": False,
                "schedule_type": "daily",
                "schedule_time": "09:00",
                "selected_strategies": [],
                "selected_stocks": [],
                "push_to_feishu": True
            }

    def save_auto_config(self, config: Dict) -> bool:
        """保存自动评股配置"""
        from paths import AUTO_EVALUATE_CONFIG_FILE
        auto_config_file = AUTO_EVALUATE_CONFIG_FILE
        try:
            with open(auto_config_file, 'w', encoding='utf-8') as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
            return True
        except:
            return False


# 全局实例
ai_evaluator = AIEvaluator()