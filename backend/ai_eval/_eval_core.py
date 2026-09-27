#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.4): AIEvaluator 评估主流程 Mixin(_eval) — 自 _eval.py 拆分。

行为与拆分前一致，由 ai_eval/_eval.py 聚合为 AIEvalMixin。
"""
import asyncio
import hashlib
import logging
import time
from typing import Dict, List
from datetime import datetime

from ._eval_retry import _post_with_retry

logger = logging.getLogger(__name__)


class AIEvalCoreMixin:
    """AIEvaluator 评估主流程 Mixin(_eval) — 自 _eval.py 拆分"""
    @staticmethod
    def _build_data_gaps(market_data: Dict) -> list:
        """6.3.3 (T-6.3.3.1): 无数据时说明缺什么 — 输出数据缺口清单 (供前端展示降级原因)

        market_data 为真实数据时返回空表; 缺口逐项标注 (K线/基本面/最近交易日/阶段涨跌幅)。
        """
        md = market_data or {}
        gaps = []
        if not md.get("has_kline"):
            gaps.append("K线数据")
        if not md.get("has_fundamentals"):
            gaps.append("基本面数据")
        if not (md.get("latest") or {}):
            gaps.append("最近交易日数据")
        if md.get("pct_5d") is None and md.get("pct_20d") is None:
            gaps.append("阶段涨跌幅")
        return gaps
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
            resp = _post_with_retry(endpoint, {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {model.api_key}"
            }, {
                "model": model.model,
                "messages": [
                    {"role": "system", "content": "你是量化分析师，只用一句话（≤20字）简要解释股票入池或出池的原因。"},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.3,
                "max_tokens": 80,
            }, 15)
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
                resp = _post_with_retry(endpoint, {
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {model.api_key}"
                }, {
                    "model": model.model,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": prompt}
                    ],
                    "temperature": 0.3,
                    "max_tokens": max_tokens,
                }, model.timeout)
                resp.raise_for_status()
                content = (resp.json()["choices"][0]["message"]["content"] or "").strip()
                if content:
                    return content
            except Exception as e:
                logger.warning(f"生成市场复盘失败 ({model.id}): {e}")
        return ''
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
            },
            # V5.3.0 (T-5.3.5.1 / FR-5.3.5.1): AI 评估归因 — 命中/未命中因子清单 + 模型一致性提示
            "attribution": self._build_attribution(market_data, result),
            # 6.3.3 (T-6.3.3.1): 数据缺口说明 + 降级标记 (无数据时说明缺什么)
            "data_gaps": self._build_data_gaps(market_data),
            "degraded": result.get("level") in ("评估失败", "无可用模型"),
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
