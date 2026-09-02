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
import os
import logging
from typing import Dict, List, Optional
from datetime import datetime
from ai_models import ModelProvider  # V4.5 (FR-4.5.4): 拆分

logger = logging.getLogger(__name__)

# ─── 模型配置管理 ──────────────────────────────────────────────

logger = logging.getLogger(__name__)

class AIEvalBase:
    """V5.9 (T-5.9.1): AIEvaluator 拆分 Mixin (_base)"""
    def __init__(self, config_file: str = None):
        from paths import AI_CONFIG_FILE, AI_EVALUATION_HISTORY_FILE, DATA_DIR
        if config_file is None:
            config_file = AI_CONFIG_FILE
        self.config_file = config_file
        self.history_file = AI_EVALUATION_HISTORY_FILE
        self._data_dir = DATA_DIR
        self._models_file = os.path.join(DATA_DIR, "ai_models.json")
        self.config = self._load_config()
        self.history = self._load_history()
        self._models_cache: Optional[List[ModelProvider]] = None
        self._index_eval_file = os.path.join(DATA_DIR, "index_eval_cache.json")
        self._index_eval_cache: Dict = self._load_index_eval_cache()
        # v3.5.0-T6: 成本控制 — 同题缓存 + 用量统计
        self._cache_file = os.path.join(DATA_DIR, "ai_cache.json")
        self._usage_file = os.path.join(DATA_DIR, "ai_usage.json")
        self._response_cache: Dict = self._load_response_cache()
        self._usage: Dict = self._load_usage()
    def _load_config(self) -> Dict:
        """加载AI配置"""
        try:
            with open(self.config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            logger.exception("加载AI配置失败")
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
    def _load_response_cache(self) -> Dict:
        """加载同题缓存 (key: stock+strategy+date, 24h 有效)"""
        try:
            with open(self._cache_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    def _save_response_cache(self):
        try:
            with open(self._cache_file, 'w', encoding='utf-8') as f:
                json.dump(self._response_cache, f, ensure_ascii=False, indent=2)
        except Exception:
            logger.warning('ai_evaluator:61 静默异常 (Exception)')
    def _load_usage(self) -> Dict:
        """加载用量统计"""
        try:
            with open(self._usage_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {"total_calls": 0, "by_model": {}, "by_day": {}}
    def _save_usage(self):
        try:
            with open(self._usage_file, 'w', encoding='utf-8') as f:
                json.dump(self._usage, f, ensure_ascii=False, indent=2)
        except Exception:
            logger.warning('ai_evaluator:76 静默异常 (Exception)')
    def _get_cache_key(self, stock_code: str, strategy: str) -> str:
        """缓存 key: 股票+策略+日期 (同日同策略不重复调用)"""
        today = datetime.now().strftime('%Y-%m-%d')
        return f"{stock_code}|{strategy}|{today}"
    def _get_cached(self, stock_code: str, strategy: str) -> Dict | None:
        key = self._get_cache_key(stock_code, strategy)
        entry = self._response_cache.get(key)
        if entry and entry.get("result"):
            return entry["result"]
        return None
    def _set_cached(self, stock_code: str, strategy: str, result: Dict):
        key = self._get_cache_key(stock_code, strategy)
        self._response_cache[key] = {"result": result, "ts": datetime.now().isoformat()}
        # 只保留最近 500 条
        if len(self._response_cache) > 500:
            for k in list(self._response_cache.keys())[:100]:
                self._response_cache.pop(k, None)
        self._save_response_cache()
    def _record_usage(self, model_id: str):
        """记录模型调用用量"""
        today = datetime.now().strftime('%Y-%m-%d')
        self._usage["total_calls"] = self._usage.get("total_calls", 0) + 1
        self._usage.setdefault("by_model", {})
        self._usage["by_model"][model_id] = self._usage["by_model"].get(model_id, 0) + 1
        self._usage.setdefault("by_day", {})
        self._usage["by_day"][today] = self._usage["by_day"].get(today, 0) + 1
        self._save_usage()
    def get_usage_stats(self) -> Dict:
        """用量统计 (前端展示)"""
        return {
            "total_calls": self._usage.get("total_calls", 0),
            "by_model": self._usage.get("by_model", {}),
            "by_day": dict(sorted(self._usage.get("by_day", {}).items())[-30:]),
        }
    def _load_index_eval_cache(self) -> Dict:
        """加载指数评估缓存，清理超过30天的条目"""
        try:
            with open(self._index_eval_file, 'r', encoding='utf-8') as f:
                cache = json.load(f)
            # 清理30天前的记录
            today = datetime.now().strftime('%Y-%m-%d')
            for key in list(cache.keys()):
                parts = key.rsplit('_', 1)
                if len(parts) == 2 and parts[1] < today:
                    # 日期格式为 YYYY-MM-DD，简单字符串比较
                    pass
            # 保留最近30天
            from datetime import timedelta
            thirty_days_ago = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
            cleaned = {k: v for k, v in cache.items() if k.rsplit('_', 1)[-1] >= thirty_days_ago}
            if len(cleaned) != len(cache):
                self._save_index_eval_cache(cleaned)
            return cleaned
        except Exception:
            logger.exception("加载指数评估缓存失败")
            return {}
    def _save_index_eval_cache(self, cache: Dict = None):
        """保存指数评估缓存"""
        try:
            data = cache if cache is not None else self._index_eval_cache
            with open(self._index_eval_file, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
        except Exception as e:
            logger.warning(f"保存指数评估缓存失败: {e}")
