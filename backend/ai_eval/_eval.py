#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI股票评估模块
v1.7.0: 纯大模型体系，支持多 provider fallback
- 移除内置引擎，所有评估通过 LLM API
- 多模型管理：启用/禁用/优先级/探测
- 评估历史增强：原始数据 + 原始 LLM 响应
"""
import json
import hashlib
import re
import time
import asyncio
import requests
import logging
from typing import Dict, List
from datetime import datetime
from ai_indicators import calc_rsi as _calc_rsi, calc_macd as _calc_macd
from ai_models import ModelProvider  # V4.5 (FR-4.5.4): 拆分

logger = logging.getLogger(__name__)

# ─── 模型配置管理 ──────────────────────────────────────────────

import logging  # noqa: E402

logger = logging.getLogger(__name__)

class AIEvalMixin:
    """V5.9 (T-5.9.1): AIEvaluator 拆分 Mixin (_eval)"""
    def recommend_strategies(self, watchlist: list = None, username: str = 'default') -> Dict:
        """
        基于自选股风格推荐策略
        分析自选股的市值/行业分布, 匹配策略特征
        """
        try:
            import db
            if watchlist is None:
                wl = db.watchlist_get(username)
                watchlist = [r['stock_code'] for r in wl]
            if not watchlist:
                return {"success": False, "message": "自选股为空, 无法推荐", "recommendations": []}

            # 策略特征定义
            strategy_profiles = {
                "multifactor": {"name": "多因子策略", "desc": "综合基本面+技术面多因子打分", "tags": ["稳健", "均衡"]},
                "industry_rotation": {"name": "行业轮动", "desc": "捕捉行业景气度轮动机会", "tags": ["景气", "轮动"]},
                "index_enhance": {"name": "指数增强", "desc": "跟踪指数并增强收益", "tags": ["被动", "稳定"]},
                "money_flow": {"name": "资金流向", "desc": "跟随主力资金动向", "tags": ["资金", "短线"]},
            }

            # 简单评分: 自选数量越多 → 多因子; 行业分散 → 轮动; 大盘股多 → 指数增强
            big_cap = 0
            for code in watchlist[:50]:
                try:
                    num = code.split('.')[0]
                    if num.startswith('60') or num.startswith('00'):
                        big_cap += 1
                except Exception:
                    logger.warning('ai_evaluator:148 静默异常 (Exception)')
            ratio = big_cap / len(watchlist) if watchlist else 0

            scores = {
                "multifactor": 60 + min(len(watchlist), 20),
                "industry_rotation": 50 + int((1 - ratio) * 30),
                "index_enhance": 40 + int(ratio * 40),
                "money_flow": 50,
            }
            ranked = sorted(scores.items(), key=lambda x: -x[1])

            recommendations = []
            for sid, score in ranked[:3]:
                p = strategy_profiles.get(sid, {})
                recommendations.append({
                    "strategy_id": sid,
                    "name": p.get("name", sid),
                    "desc": p.get("desc", ""),
                    "tags": p.get("tags", []),
                    "score": score,
                    "reason": f"匹配度 {score}% — 自选 {len(watchlist)} 只, 大盘股占比 {int(ratio*100)}%",
                })
            return {"success": True, "recommendations": recommendations, "watchlist_count": len(watchlist)}
        except Exception as e:
            return {"success": False, "message": f"策略推荐失败: {e}", "recommendations": []}
    def generate_pool_signal(self, stock_code: str, stock_name: str, event_type: str, market_snapshot: Dict = None) -> str:
        """生成入池/出池简短语解读（≤20字）"""
        models = self.get_enabled_models()
        if not models:
            return ''  # 无可用模型时跳过
        model = models[0]  # 使用最高优先级模型

        event_label = '入池' if event_type == 'enter' else '出池'
        snapshot_text = ''
        if market_snapshot:
            snapshot_text = f'\n行情快照: 收盘{market_snapshot.get("close","?")}, 涨跌{market_snapshot.get("pct_chg","?")}%'

        prompt = f'用一句话（≤20字）解释{stock_name}({stock_code}){event_label}的原因：{snapshot_text}'
        try:
            endpoint = model.base_url.rstrip("/") + "/chat/completions"
            resp = requests.post(endpoint, headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {model.api_key}"
            }, json={
                "model": model.model,
                "messages": [
                    {"role": "system", "content": "你是量化分析师，只用一句话（≤20字）简要解释股票入池或出池的原因。"},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.3,
                "max_tokens": 80,
            }, timeout=15)
            resp.raise_for_status()
            content = resp.json()["choices"][0]["message"]["content"]
            return content.strip()[:30]
        except Exception as e:
            logger.warning(f"生成入池信号失败 ({stock_code}): {e}")
            return ''
    def generate_review(self, prompt: str, system_prompt: str = None, max_tokens: int = 1024) -> str:
        """生成市场复盘解读正文 (FR-3.17.2) — 遍历启用模型, 首个非空内容即返回

        复用 OpenAI 兼容 /chat/completions 调用; 全部失败返回空串 (调用方自行兜底)。
        """
        models = self.get_enabled_models()
        if not models:
            logger.warning("生成市场复盘: 无可用模型")
            return ''
        system_prompt = system_prompt or "你是专业的A股市场复盘分析师，严格基于给定数据解读，不编造任何数字。"
        for model in models:
            try:
                endpoint = model.base_url.rstrip("/") + "/chat/completions"
                resp = requests.post(endpoint, headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {model.api_key}"
                }, json={
                    "model": model.model,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": prompt}
                    ],
                    "temperature": 0.3,
                    "max_tokens": max_tokens,
                }, timeout=model.timeout)
                resp.raise_for_status()
                content = (resp.json()["choices"][0]["message"]["content"] or "").strip()
                if content:
                    return content
            except Exception as e:
                logger.warning(f"生成市场复盘失败 ({model.id}): {e}")
        return ''
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
            # V5.9 (T-5.9.1): 文件已移至 ai_eval/, 模板目录在 backend/prompts/ (上移一级)
            template_path = _os.path.join(_os.path.dirname(_os.path.dirname(__file__)), 'prompts', 'evaluate_stock.txt')
            with open(template_path, 'r', encoding='utf-8') as f:
                self._prompt_template = f.read()
        return self._prompt_template
    def _call_llm(self, model: ModelProvider, stock_code: str, stock_name: str, market_data: Dict, strategy: str = 'default'):
        """
        调用指定模型进行评估，返回 (parsed_result, raw_response_text)

        strategy: 'default' | 'trend' | 'value' | 'short_term'
        """
        data_section = self._build_data_prompt(market_data)

        # 策略特定的权重调整提示
        strategy_hints = {
            'default': '',
            'trend': '\n## 策略偏好：趋势跟踪\n- 趋势强度和均线排列权重加倍（各30%）\n- 重点关注均线多头排列和趋势延续性\n- 忽略短期波动，关注中期趋势方向',
            'value': '\n## 策略偏好：价值挖掘\n- 基本面指标权重加倍（PE/PB/ROE等）\n- 重点关注估值合理性和安全边际\n- 趋势指标仅作参考，不作为主要判断依据',
            'short_term': '\n## 策略偏好：短线狙击\n- RSI和量比权重加倍\n- 重点关注量价关系和短期动能\n- 忽略长期趋势，关注1-3日内的买卖点',
        }
        strategy_hint = strategy_hints.get(strategy, '')

        # 市场阶段感知
        now = datetime.now()
        hour = now.hour
        weekday = now.weekday()
        if weekday >= 5:
            phase_note = '\n## 市场阶段：非交易日\n- 数据为最近交易日收盘数据\n- 给出盘前计划，不要伪造盘中走势\n- 置信度适度降低'
        elif hour < 9:
            phase_note = '\n## 市场阶段：盘前\n- 数据为上一交易日收盘数据\n- 给出盘前交易计划\n- 关注隔夜消息和开盘预期'
        elif 9 <= hour < 11 or 13 <= hour < 15:
            phase_note = '\n## 市场阶段：盘中交易\n- 基于实时数据评估\n- 可给出立即行动/等待确认建议\n- 关注盘中量价变化'
        else:
            phase_note = '\n## 市场阶段：盘后\n- 复盘今日走势\n- 给出明日交易计划\n- 关注收盘形态和量能'

        # v3.7.12: 从模板文件加载 prompt
        template = self._load_prompt_template()
        prompt = template.format(
            stock_name=stock_name,
            stock_code=stock_code,
            strategy_hint=strategy_hint,
            phase_note=phase_note,
            data_section=data_section,
        )

        endpoint = model.base_url.rstrip("/") + "/chat/completions"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {model.api_key}"
        }
        payload = {
            "model": model.model,
            "messages": [
                {"role": "system", "content": "你是专业量化分析师。严格基于数据评估，输出凝练。只返回JSON。"},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.3,
            "max_tokens": model.max_tokens,
        }

        resp = requests.post(endpoint, headers=headers, json=payload, timeout=model.timeout)
        resp.raise_for_status()
        result = resp.json()
        message = result["choices"][0]["message"]
        content = message.get("content") or ""
        raw_response = content

        # v3.14.2: 推理型模型 (deepseek-v4-flash/pro 等) 的最终答案可能不在 content 而在 reasoning_content,
        # 且 max_tokens 偏小时 content 常为空 → 从 reasoning_content 提取 JSON 兜底
        if not content.strip():
            reasoning = message.get("reasoning_content") or ""
            raw_response = reasoning
            json_match = re.search(r'\{.*\}', reasoning, re.DOTALL)
            if json_match:
                try:
                    llm_result = json.loads(json_match.group())
                    if "provider" not in llm_result:
                        llm_result["provider"] = model.provider
                    return llm_result, raw_response
                except json.JSONDecodeError:
                    logger.warning('ai_evaluator:1013 静默异常 (json.JSONDecodeError)')
            raise ValueError(f"LLM 返回无法解析为 JSON: {reasoning[:200]}")

        # 解析 JSON 响应
        json_match = re.search(r'\{.*\}', content, re.DOTALL)
        if json_match:
            llm_result = json.loads(json_match.group())
            if "provider" not in llm_result:
                llm_result["provider"] = model.provider
            return llm_result, raw_response
        else:
            raise ValueError(f"LLM 返回无法解析为 JSON: {content[:200]}")
    def _calibrate_decision(self, llm_result: Dict, market_data: Dict, stock_code: str, username: str = 'default') -> Dict:
        """对 LLM 评估结果进行后处理校准，防止单日涨跌导致的过度切换。

        规则：
        1. 高分 + 高位 + 无量 → 降级
        2. 高分 + RSI过热 → 降级
        3. 中性 + 多头排列 + 正常RSI → 升级
        4. 同一股票连续评估分数波动>20 → 标记稳定性警告
        """
        result = dict(llm_result)  # 不修改原始
        level = result.get("level", "")
        total_score = result.get("total_score", 50)
        calibrations = []

        # 获取价格位置
        price_range = market_data.get("price_range", {})
        close = price_range.get("close", 0)
        max60 = price_range.get("max60", close)
        min60 = price_range.get("min60", close)
        if max60 and min60 and max60 != min60:
            price_position = round((close - min60) / (max60 - min60) * 100, 1)
        else:
            price_position = 50

        rsi = market_data.get("rsi", 50)
        ma_align = market_data.get("ma_alignment", "")
        vol_analysis = market_data.get("volume_analysis", {})
        vol_ratio = vol_analysis.get("vol_ratio", 1.0)

        # 规则1: 高分 + 高位(>90%) + 缩量 → 降级
        if level in ("强烈推荐", "推荐") and price_position > 90 and vol_ratio < 1.0:
            old_level = level
            level_map = {"强烈推荐": "推荐", "推荐": "谨慎推荐"}
            result["level"] = level_map.get(level, level)
            result["level_color"] = {"强烈推荐": "#67c23a", "推荐": "#67c23a", "谨慎推荐": "#e6a23c"}.get(result["level"], result.get("level_color"))
            calibrations.append(f"价格处于60日高位({price_position}%)+缩量，{old_level}→{result['level']}")

        # 规则2: 高分 + RSI>70 → 降级
        if level in ("强烈推荐", "推荐") and rsi > 70:
            old_level = level
            level_map = {"强烈推荐": "推荐", "推荐": "谨慎推荐"}
            result["level"] = level_map.get(level, level)
            result["level_color"] = {"强烈推荐": "#67c23a", "推荐": "#67c23a", "谨慎推荐": "#e6a23c"}.get(result["level"], result.get("level_color"))
            calibrations.append(f"RSI过热({rsi})，{old_level}→{result['level']}")

        # 规则3: 观望/中性 + 多头排列 + RSI正常(30-70) + 量正常 → 升级
        if level in ("中性", "观望") and "多头" in ma_align and 30 <= rsi <= 70 and vol_ratio >= 0.8:
            result["level"] = "谨慎推荐"
            result["level_color"] = "#e6a23c"
            calibrations.append(f"多头排列+RSI正常({rsi})+量正常，{level}→谨慎推荐")

        # 规则4: 连续评估波动检测
        try:
            history = self._load_history_for(username)
            prev_eval = None
            for h in history:
                if h.get("stock_code") == stock_code:
                    prev_eval = h
                    break
            if prev_eval:
                prev_score = prev_eval.get("result", {}).get("total_score", 0)
                if prev_score > 0 and abs(total_score - prev_score) > 20:
                    calibrations.append(f"评分波动较大: 上次{prev_score}→本次{total_score} (差{abs(total_score-prev_score)})")
        except Exception:
            logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
            pass

        if calibrations:
            result["_calibration_notes"] = calibrations
            # 合并到 detailed_report
            if "detailed_report" in result:
                result["detailed_report"] += f" [校准: {'; '.join(calibrations)}]"
            logger.info(f"决策校准 {stock_code}: {'; '.join(calibrations)}")

        return result
    def _build_data_prompt(self, data: Dict) -> str:
        """将 market_data 转为 LLM 可读的文本"""
        lines = ["## 真实行情数据"]

        if data.get("latest"):
            latest_data = data["latest"]
            lines.append("### 最近交易日")
            lines.append(f"- 日期：{latest_data.get('date', 'N/A')}")
            lines.append(f"- 开盘：{latest_data.get('open')}  收盘：{latest_data.get('close')}  最高：{latest_data.get('high')}  最低：{latest_data.get('low')}")
            lines.append(f"- 成交量：{latest_data.get('volume', 0):,} 手")
            if latest_data.get("pct_chg") is not None:
                lines.append(f"- 涨跌幅：{latest_data['pct_chg']}%")
            lines.append(f"- MA5：{latest_data.get('ma5', 'N/A')}  MA10：{latest_data.get('ma10', 'N/A')}  MA20：{latest_data.get('ma20', 'N/A')}")

        if data.get("pct_5d") is not None:
            lines.append("\n### 阶段涨跌幅")
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
            lines.append("\n### 均线排列")
            lines.append(f"- 形态：{data['ma_alignment']}")

        if data.get("volume_analysis"):
            v = data["volume_analysis"]
            lines.append("\n### 成交量分析")
            lines.append(f"- 最新量：{v.get('latest_vol', 0):,} 手")
            lines.append(f"- 5日均量：{v.get('avg_5d', 0):,} 手")
            lines.append(f"- 20日均量：{v.get('avg_20d', 0):,} 手")
            lines.append(f"- 量比（vs20日均）：{v.get('vol_ratio', 1.0)}")

        if data.get("rsi") is not None:
            lines.append("\n### 技术指标")
            lines.append(f"- RSI(14)：{data['rsi']}")
            if data.get("macd"):
                m = data["macd"]
                lines.append(f"- MACD：DIF={m.get('dif')}, DEA={m.get('dea')}, 柱={m.get('hist')}")

        if data.get("fundamentals"):
            f = data["fundamentals"]
            lines.append("\n### 基本面")
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
            lines.append("\n### 近5日K线摘要")
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

        # 数据质量标记
        quality_notes = []
        if data.get("has_kline"):
            quality_notes.append("K线：实时数据")
        else:
            quality_notes.append("K线：不可用，评估受限")
        if data.get("has_fundamentals"):
            fund_src = data.get("fundamentals", {}).get("data_source", "未知")
            if fund_src in ("cache", "tushare_cache"):
                quality_notes.append(f"基本面：{fund_src}(可能略有延迟)")
            else:
                quality_notes.append(f"基本面：{fund_src}")
        else:
            quality_notes.append("基本面：不可用")
        if data.get("rsi") is not None:
            quality_notes.append("技术指标：已计算")
        if quality_notes:
            lines.append("\n### 📊 数据质量\n" + "\n".join(f"- {n}" for n in quality_notes))
            if not data.get("has_kline") or not data.get("has_fundamentals"):
                lines.append("- ⚠️ 部分数据缺失，请适度降低置信度")

        return "\n".join(lines)
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
    async def evaluate_stock(self, stock_code: str, stock_name: str, stock_data: Dict = None, username: str = 'default', strategy: str = 'default') -> Dict:
        """
        评估单只股票 — 串行遍历启用模型，成功即返回；全部失败报错
        异步版本：不阻塞事件循环，run_in_executor 处理同步 I/O

        strategy: 'default' | 'trend' | 'value' | 'short_term'
        """
        loop = asyncio.get_event_loop()
        # v3.14.2: 名称兜底 — 传入空/代码时解析真实中文名 (自选/批量常见)
        stock_name = self._resolve_stock_name(stock_code, stock_name)

        # 1) 获取真实数据 (v3.3.0: 支持外部传入 stock_data 跳过数据获取, 便于测试)
        if stock_data is not None:
            market_data = stock_data
        else:
            market_data = await loop.run_in_executor(None, self._fetch_stock_data, stock_code)

        # v3.5.0-T6: 同题缓存 — 同日同策略直接返回缓存结果 (省 LLM 调用)
        # v3.14fix: 缓存命中统一返回 record 形状 (与全新评估一致), 修复前端读 result.result 落空
        cached = self._get_cached(stock_code, strategy)
        if cached:
            cached = dict(cached)
            cached["from_cache"] = True
            return {
                "id": hashlib.md5(f"{stock_code}{strategy}cached".encode()).hexdigest()[:12],
                "stock_code": stock_code,
                "stock_name": stock_name,
                "evaluate_time": datetime.now().isoformat(),
                "result": cached,
                "model_used": None,
                "model_provider": cached.get("provider", ""),
                "llm_latency_ms": 0,
                "llm_raw_response": None,
                "market_data_snapshot": None,
                "from_cache": True,
            }

        # 2) 遍历启用模型，按优先级尝试
        enabled_models = self.get_enabled_models()
        if not enabled_models:
            result = {
                "total_score": 0,
                "level": "无可用模型",
                "level_color": "#f56c6c",
                "dimensions": {},
                "analysis": {"strengths": [], "weaknesses": [], "suggestions": []},
                "detailed_report": "未配置任何启用的AI模型，请在系统配置中启用至少一个模型。",
                "provider": "无"
            }
            model_used = None
            model_provider = "无"
            llm_latency_ms = 0
            llm_raw = None
        else:
            result = None
            model_used = None
            model_provider = ""
            llm_latency_ms = 0
            llm_raw = None
            errors = []

            for model in enabled_models:
                try:
                    t0 = time.time()
                    result, raw_response = await loop.run_in_executor(
                        None, self._call_llm, model, stock_code, stock_name, market_data, strategy
                    )
                    result = self._calibrate_decision(result, market_data, stock_code, username)
                    llm_latency_ms = round((time.time() - t0) * 1000)
                    model_used = model.id
                    model_provider = model.provider
                    llm_raw = raw_response
                    logger.info(f"评估 {stock_code} 成功: {model.id} ({llm_latency_ms}ms)")
                    break
                except Exception as e:
                    err_msg = f"{model.id}: {str(e)[:100]}"
                    errors.append(err_msg)
                    logger.warning(f"评估 {stock_code} 失败: {err_msg}")

            if result is None:
                # 全部模型失败
                result = {
                    "total_score": 0,
                    "level": "评估失败",
                    "level_color": "#f56c6c",
                    "dimensions": {},
                    "analysis": {"strengths": [], "weaknesses": [], "suggestions": []},
                    "detailed_report": f"所有模型均评估失败: {'; '.join(errors[:3])}",
                    "provider": "评估失败"
                }
                model_used = None
                model_provider = "评估失败"

        # 3) 保存历史
        # v3.5.0-T6: 记录用量 + 写入缓存 (仅真实 LLM 调用, 非缓存命中)
        if model_used:
            try:
                self._record_usage(model_used)
                self._set_cached(stock_code, strategy, result)
            except Exception:
                logger.warning('ai_evaluator:897 静默异常 (Exception)')
        record = {
            "id": hashlib.md5(f"{stock_code}{time.time()}".encode()).hexdigest()[:12],
            "stock_code": stock_code,
            "stock_name": stock_name,
            "evaluate_time": datetime.now().isoformat(),
            "result": result,
            "model_used": model_used,
            "model_provider": model_provider,
            "llm_latency_ms": llm_latency_ms,
            "llm_raw_response": llm_raw,
            "market_data_snapshot": {
                "has_kline": market_data.get("has_kline", False),
                "has_fundamentals": market_data.get("has_fundamentals", False),
                "latest": market_data.get("latest"),
                "rsi": market_data.get("rsi"),
                "macd": market_data.get("macd"),
                "ma_alignment": market_data.get("ma_alignment"),
            }
        }
        history = self._load_history_for(username)
        history.insert(0, record)
        if len(history) > 500:
            history = history[:500]
        self._save_history_for(username, history)

        return record
    async def batch_evaluate(self, stock_codes: List[str], stock_info_map: Dict = None, max_workers: int = 5, username: str = 'default') -> List[Dict]:
        """批量并行评估 — 异步版，使用 asyncio.gather 替代 ThreadPoolExecutor
        v3.14fix: 统一返回 {stock_code, success, result, ...} 形状 — 前端批量弹窗依赖
        r.success / r.stock_code / r.result (缓存命中/全新评估/失败三态一致)"""
        semaphore = asyncio.Semaphore(max_workers)

        async def _evaluate_one(code: str) -> Dict:
            async with semaphore:
                try:
                    # v3.14.2: 名称兜底 — stock_info_map 缺失/无名字时经 stock_manager 解析
                    name = self._resolve_stock_name(code, (stock_info_map or {}).get(code, ""))
                    rec = await self.evaluate_stock(code, name, None, username)
                    rec = rec if isinstance(rec, dict) else {}
                    result = rec.get("result", {})
                    success = result.get("level") not in ("评估失败", "无可用模型")
                    return {
                        "stock_code": rec.get("stock_code", code),
                        "success": success,
                        "result": result,
                        "model_used": rec.get("model_used"),
                        "model_provider": rec.get("model_provider"),
                        "llm_latency_ms": rec.get("llm_latency_ms"),
                        "from_cache": bool(rec.get("from_cache")),
                    }
                except Exception as e:
                    logger.warning(f"批量评估 {code} 失败: {e}")
                    return {"stock_code": code, "success": False, "error": str(e)}

        tasks = [_evaluate_one(code) for code in stock_codes]
        return await asyncio.gather(*tasks)
    async def batch_evaluate_stream(self, stock_codes: List[str], stock_info_map: Dict = None,
                                    max_workers: int = 5, username: str = 'default'):
        """批量并行评估 — SSE 流式 (v3.15: 逐只完成后 yield 事件, 修复前端进度 0→N 瞬跳)

        事件形状:
          {"type": "start", "total": n}
          {"type": "item", "stock_code", "stock_name", "success", "result",
           "model_used", "model_provider", "llm_latency_ms", "from_cache", "error"?}
          {"type": "done", "success": n, "fail": m, "total": n}
        """
        codes = [c for c in (stock_codes or []) if c]
        total = len(codes)
        if total == 0:
            yield {"type": "done", "total": 0, "success": 0, "fail": 0}
            return
        yield {"type": "start", "total": total}
        semaphore = asyncio.Semaphore(max_workers)

        async def _run_one(code: str):
            async with semaphore:
                try:
                    # v3.14.2: 名称兜底 — stock_info_map 缺失/无名字时经 stock_manager 解析
                    name = self._resolve_stock_name(code, (stock_info_map or {}).get(code, ""))
                    rec = await self.evaluate_stock(code, name, None, username)
                    rec = rec if isinstance(rec, dict) else {}
                    result = rec.get("result", {})
                    success = result.get("level") not in ("评估失败", "无可用模型")
                    return (code, {
                        "stock_code": rec.get("stock_code", code),
                        "stock_name": name or code,
                        "success": success,
                        "result": result,
                        "model_used": rec.get("model_used"),
                        "model_provider": rec.get("model_provider"),
                        "llm_latency_ms": rec.get("llm_latency_ms"),
                        "from_cache": bool(rec.get("from_cache")),
                    })
                except Exception as e:
                    logger.warning(f"批量评估 {code} 失败: {e}")
                    return (code, {"stock_code": code, "stock_name": code, "success": False, "error": str(e)})

        tasks = [asyncio.create_task(_run_one(code)) for code in codes]
        success = fail = 0
        try:
            for task in asyncio.as_completed(tasks):
                code, item = await task
                if item.get("success"):
                    success += 1
                else:
                    fail += 1
                yield {"type": "item", **item}
        finally:
            # 客户端断开 (GeneratorExit) 时取消未完成任务, 避免后台泄漏
            for task in tasks:
                if not task.done():
                    task.cancel()
        yield {"type": "done", "total": total, "success": success, "fail": fail}
