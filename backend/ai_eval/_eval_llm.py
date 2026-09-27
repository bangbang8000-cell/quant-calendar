#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.4): AIEvaluator LLM 调用与提示词构造 Mixin(_eval) — 自 _eval.py 拆分。

行为与拆分前一致，由 ai_eval/_eval.py 聚合为 AIEvalMixin。
"""
import json
import re
import logging
import time
from typing import Dict
from datetime import datetime
from ai_models import ModelProvider

from ._eval_retry import _post_with_retry

logger = logging.getLogger(__name__)


class AIEvalLLMMixin:
    """AIEvaluator LLM 调用与提示词构造 Mixin(_eval) — 自 _eval.py 拆分"""
    @staticmethod
    def _emit_ai_event(stock_code, vendor, model_name, ok, latency_ms, note=''):
        """6.3.2 (T-6.3.2.1): AI 调用路径结构化字段 — 单行 JSON 事件 (best-effort)

        字段: stock_code/vendor/model/ok/latency_ms/note, 供调用次数/耗时/失败率统计。
        """
        try:
            import logging as _lg
            import structured_log
            structured_log.log_event(
                logging.getLogger(__name__), _lg.INFO, "ai_call",
                stock_code=stock_code, vendor=vendor, model=model_name,
                ok=bool(ok), latency_ms=round(latency_ms, 2), note=note)
        except Exception as _e:
            logging.getLogger(__name__).warning("AI 结构化事件写入失败 (忽略): %s", _e)

    def _call_llm(self, model: ModelProvider, stock_code: str, stock_name: str, market_data: Dict, strategy: str = 'default'):
        """
        调用指定模型进行评估，返回 (parsed_result, raw_response_text)

        strategy: 'default' | 'trend' | 'value' | 'short_term'
        """
        _t0 = time.monotonic()
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

        resp = _post_with_retry(endpoint, headers, payload, model.timeout)
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
                    self._emit_ai_event(stock_code, getattr(model, "provider", ""),
                                        getattr(model, "model", ""), True,
                                        (time.monotonic() - _t0) * 1000, note="reasoning 兜底")
                    return llm_result, raw_response
                except json.JSONDecodeError:
                    logger.warning('ai_evaluator:1013 静默异常 (json.JSONDecodeError)')
            self._emit_ai_event(stock_code, getattr(model, "provider", ""),
                                getattr(model, "model", ""), False,
                                (time.monotonic() - _t0) * 1000, note="reasoning 无法解析")
            raise ValueError(f"LLM 返回无法解析为 JSON: {reasoning[:200]}")

        # 解析 JSON 响应
        json_match = re.search(r'\{.*\}', content, re.DOTALL)
        if json_match:
            llm_result = json.loads(json_match.group())
            if "provider" not in llm_result:
                llm_result["provider"] = model.provider
            self._emit_ai_event(stock_code, getattr(model, "provider", ""),
                                getattr(model, "model", ""), True,
                                (time.monotonic() - _t0) * 1000)
            return llm_result, raw_response
        else:
            self._emit_ai_event(stock_code, getattr(model, "provider", ""),
                                getattr(model, "model", ""), False,
                                (time.monotonic() - _t0) * 1000, note="content 无法解析")
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

    # V5.3.0 (T-5.3.5.1 / FR-5.3.5.1): AI 评估归因 — 纯计算因子归因
    # 基于 market_data 计算命中/未命中因子清单 + 模型一致性提示; 不经过 LLM, 空数据诚实降级
    @staticmethod
    def _build_attribution(market_data: Dict, result: Dict) -> Dict:
        hits, misses = [], []
        if not market_data:
            return {"hits": [], "misses": [], "consistency_note": "数据不足, 归因不可用 [⚠️]", "available": False}
        md = market_data or {}
        latest = md.get("latest") or {}
        price_position = None
        pr = md.get("price_range") or {}
        close = pr.get("close") or latest.get("close") or 0
        mx, mn = pr.get("max60"), pr.get("min60")
        if mx and mn and mx != mn and close:
            price_position = round((close - mn) / (mx - mn) * 100, 1)

        def _add(flag: str, label: str, note: str):
            # flag: 'bull' | 'bear' | 'neutral' → 机会/风险/中性因子
            if flag == "bull":
                hits.append({"factor": label, "signal": "opportunity", "note": note})
            elif flag == "bear":
                misses.append({"factor": label, "signal": "risk", "note": note})
            else:
                hits.append({"factor": label, "signal": "neutral", "note": note})

        # 因子: 均线排列
        align = md.get("ma_alignment")
        if align == "多头排列":
            _add("bull", "均线多头排列", "MA5>MA10>MA20, 趋势向上")
        elif align == "空头排列":
            _add("bear", "均线空头排列", "MA5<MA10<MA20, 趋势向下")
        elif align:
            _add("neutral", "均线缠绕", align)

        # 因子: RSI
        rsi = md.get("rsi")
        if rsi is not None:
            if rsi >= 70:
                _add("bear", "RSI过热", f"RSI={rsi:.1f} ≥70, 短期超买风险")
            elif rsi <= 30:
                _add("bull", "RSI超卖", f"RSI={rsi:.1f} ≤30, 短期超卖机会")
            else:
                _add("neutral", "RSI健康", f"RSI={rsi:.1f} 中性区间")

        # 因子: MACD
        macd = md.get("macd") or {}
        if macd.get("dif") is not None and macd.get("dea") is not None:
            if macd["dif"] > macd["dea"]:
                _add("bull", "MACD金叉", f"DIF {macd['dif']:.2f} > DEA {macd['dea']:.2f}")
            else:
                _add("bear", "MACD死叉", f"DIF {macd['dif']:.2f} < DEA {macd['dea']:.2f}")

        # 因子: 涨跌幅
        pct = latest.get("pct_chg")
        if pct is not None:
            if pct >= 3:
                _add("bull", "当日强势", f"涨 {pct}%")
            elif pct <= -3:
                _add("bear", "当日弱势", f"跌 {pct}%")

        # 因子: 价格位置 (60日区间)
        if price_position is not None:
            if price_position >= 80:
                _add("bear", "高位", f"位于60日区间 {price_position:.0f}% 高位")
            elif price_position <= 20:
                _add("bull", "低位", f"位于60日区间 {price_position:.0f}% 低位")

        # 因子: 量能
        va = md.get("volume_analysis") or {}
        vr = va.get("vol_ratio")
        if vr is not None and pct is not None and pct > 0:
            if vr >= 1.5:
                _add("bull", "放量上涨", f"量比 {vr:.1f}")
            elif vr <= 0.7:
                _add("neutral", "缩量", f"量比 {vr:.1f}")

        # 模型一致性提示: 对比 AI 结论与因子倾向
        consistency_note = None
        level = (result or {}).get("level", "")
        bull_n, bear_n = len([h for h in hits if h["signal"] == "opportunity"]),                          len([m for m in misses if m["signal"] == "risk"])
        if not hits and not misses:
            consistency_note = "数据不足, 无法归因 [⚠️]"
        else:
            if "看涨" in level or "买入" in level or "机会" in level:
                consistency_note = f"AI 看多, 因子归因 {bull_n} 多 / {bear_n} 空" + (
                    " — 一致" if bull_n >= bear_n else " — 因子偏空, 注意分歧")
            elif "看跌" in level or "卖出" in level or "风险" in level:
                consistency_note = f"AI 看空, 因子归因 {bull_n} 多 / {bear_n} 空" + (
                    " — 一致" if bear_n >= bull_n else " — 因子偏多, 注意分歧")
            else:
                consistency_note = f"因子归因 {bull_n} 多 / {bear_n} 空 (中性观望)"
        return {"hits": hits, "misses": misses, "consistency_note": consistency_note, "available": True}

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
