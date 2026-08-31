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
import os
import time
import asyncio
import requests
import logging
from typing import Dict, List, Optional
from datetime import datetime
from dataclasses import dataclass, asdict, field
from ai_indicators import calc_rsi as _calc_rsi, calc_macd as _calc_macd

logger = logging.getLogger(__name__)

# ─── 模型配置管理 ──────────────────────────────────────────────

@dataclass
class ModelProvider:
    """单个 AI 模型配置"""
    id: str                          # 唯一标识，如 "ark-code-latest"
    provider: str                    # 提供商名称，如 "字节Coding Plan"
    model: str                       # 模型名，如 "ark-code-latest"
    base_url: str                    # API 端点
    api_key: str                     # API Key
    enabled: bool = True             # 是否启用
    priority: int = 0                # 优先级（越小越优先）
    timeout: int = 60                # 超时秒数
    max_tokens: int = 4096           # 最大 token
    locked: bool = False             # 预置模型锁定，不可删除

    def to_dict(self) -> Dict:
        return asdict(self)

    @classmethod
    def from_dict(cls, d: Dict) -> "ModelProvider":
        return cls(
            id=d.get("id", ""),
            provider=d.get("provider", ""),
            model=d.get("model", ""),
            base_url=d.get("base_url", ""),
            api_key=d.get("api_key", ""),
            enabled=d.get("enabled", True),
            priority=d.get("priority", 0),
            timeout=d.get("timeout", 60),
            max_tokens=d.get("max_tokens", 4096),
            locked=d.get("locked", False),
        )


@dataclass
class VendorModel:
    """厂商卡片下的单个模型 (v3.14 厂商化重构)"""
    name: str                        # 模型名（可含 "/"，如 Qwen/Qwen3.5-72B-Instruct）
    enabled: bool = True             # 是否启用（参与全局评估链）
    locked: bool = False             # 目录预置模型，前端禁删
    max_tokens: int = 4096           # 消费点仍读 model.max_tokens

    def to_dict(self) -> Dict:
        return asdict(self)

    @classmethod
    def from_dict(cls, d) -> "VendorModel":
        if isinstance(d, str):  # 兼容纯模型名字符串
            return cls(name=d)
        return cls(
            name=d.get("name", ""),
            enabled=d.get("enabled", True),
            locked=d.get("locked", False),
            max_tokens=d.get("max_tokens", 4096),
        )


@dataclass
class VendorConfig:
    """模型厂商配置卡 (v3.14: 厂商为主配置粒度, 卡内配 API 后管理多个模型名)"""
    vendor_key: str                  # 稳定 slug，如 "deepseek" / "bytedance-coding" / "custom-..."
    name: str                        # 显示名，如 "DeepSeek"
    kind: str                        # "国内" | "国外" | "CodingPlan" | "自定义"
    base_url: str                    # API 端点
    api_key: str = ""                # API Key（厂商级，卡内所有模型共用）
    timeout: int = 60                # 超时秒数（厂商级）
    tier: str = ""                   # 套餐信息（CodingPlan: Lite/Pro，展示用）
    website: str = ""                # 官网/控制台链接
    locked: bool = False             # 目录预置厂商，禁删
    models: List[VendorModel] = field(default_factory=list)   # 卡内模型列表（数组顺序 = 全局优先级）

    def to_dict(self) -> Dict:
        d = asdict(self)
        d["models"] = [m.to_dict() for m in self.models]
        return d

    @classmethod
    def from_dict(cls, d: Dict) -> "VendorConfig":
        return cls(
            vendor_key=d.get("vendor_key", ""),
            name=d.get("name", ""),
            kind=d.get("kind", "自定义"),
            base_url=d.get("base_url", ""),
            api_key=d.get("api_key", ""),
            timeout=d.get("timeout", 60),
            tier=d.get("tier", ""),
            website=d.get("website", ""),
            locked=d.get("locked", False),
            models=[VendorModel.from_dict(m) for m in d.get("models", [])],
        )

# v3.14: 预置厂商目录（国内优先 + CodingPlan 套餐 + 国外辅助）。
# 唯一事实源: 经 GET /api/ai/catalog 供前端「新增厂商」下拉与模型名建议。
# 不含 api_key（密钥只存 data/ai_models.json）；locked=True 的卡片禁删。
# 模型名以 2026-08 当前命名为准；deepseek-chat/reasoner 已于 2026-07-24 弃用。
VENDOR_CATALOG = [
    # ── 国内 ──────────────────────────────────────────────
    {
        "vendor_key": "deepseek",
        "name": "DeepSeek",
        "kind": "国内",
        "base_url": "https://api.deepseek.com/v1",
        "tier": "",
        "tier_options": [],
        "website": "https://platform.deepseek.com",
        "locked": True,
        "models": ["deepseek-v4-flash", "deepseek-v4-pro"],
    },
    {
        "vendor_key": "qwen",
        "name": "通义千问",
        "kind": "国内",
        "base_url": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "tier": "",
        "tier_options": [],
        "website": "https://help.aliyun.com/zh/dashscope",
        "locked": True,
        "models": ["qwen-plus", "qwen3.7-plus", "qwen3.7-max", "qwen3-coder-plus"],
    },
    {
        "vendor_key": "zhipu",
        "name": "智谱GLM",
        "kind": "国内",
        "base_url": "https://open.bigmodel.cn/api/paas/v4",
        "tier": "",
        "tier_options": [],
        "website": "https://open.bigmodel.cn",
        "locked": True,
        "models": ["glm-5.1", "glm-5-turbo", "glm-4.7-flash"],
    },
    {
        "vendor_key": "moonshot",
        "name": "Kimi",
        "kind": "国内",
        "base_url": "https://api.moonshot.cn/v1",
        "tier": "",
        "tier_options": [],
        "website": "https://platform.moonshot.cn",
        "locked": True,
        "models": ["kimi-k2.6", "kimi-k2.7-code"],
    },
    {
        "vendor_key": "doubao-ark",
        "name": "豆包(火山方舟)",
        "kind": "国内",
        "base_url": "https://ark.cn-beijing.volces.com/api/v3",
        "tier": "",
        "tier_options": [],
        "website": "https://console.volcengine.com/ark",
        "locked": True,
        "models": ["doubao-seed-2.0-lite", "doubao-seed-1.8"],
    },
    {
        "vendor_key": "ernie",
        "name": "百度千帆",
        "kind": "国内",
        "base_url": "https://qianfan.baidubce.com/v2",
        "tier": "",
        "tier_options": [],
        "website": "https://console.bce.baidu.com/qianfan",
        "locked": True,
        "models": ["ernie-4.5-turbo-128k", "ernie-5.0"],
    },
    {
        "vendor_key": "siliconflow",
        "name": "硅基流动",
        "kind": "国内",
        "base_url": "https://api.siliconflow.cn/v1",
        "tier": "",
        "tier_options": [],
        "website": "https://siliconflow.cn",
        "locked": True,
        "models": ["deepseek-ai/DeepSeek-V4", "Qwen/Qwen3.5-72B-Instruct"],
    },
    # ── CodingPlan 套餐（独立卡片, 含套餐档位与聚合模型）────
    {
        "vendor_key": "bytedance-coding",
        "name": "字节CodingPlan",
        "kind": "CodingPlan",
        "base_url": "https://ark.cn-beijing.volces.com/api/coding/v3",
        "tier": "Lite/Pro",
        "tier_options": ["Lite", "Pro"],
        "website": "https://console.volcengine.com/ark",
        "locked": True,
        # 注: ark-code-latest 为 Auto 自动匹配; 勿用 /api/v3 在线推理(不消耗套餐额度)
        "models": ["ark-code-latest", "deepseek-v3.2", "glm-4.7", "kimi-k2.5"],
    },
    {
        "vendor_key": "qianfan-coding",
        "name": "百度千帆CodingPlan",
        "kind": "CodingPlan",
        "base_url": "https://qianfan.baidubce.com/v2/coding",
        "tier": "Lite/Pro",
        "tier_options": ["Lite", "Pro"],
        "website": "https://console.bce.baidu.com/qianfan",
        "locked": True,
        # qianfan-code-latest 自动路由; key 需以 bce-v3/ 开头
        "models": ["qianfan-code-latest", "deepseek-v3.2", "kimi-k2.5", "glm-5"],
    },
    {
        "vendor_key": "zhipu-coding",
        "name": "智谱CodingPlan",
        "kind": "CodingPlan",
        "base_url": "https://open.bigmodel.cn/api/paas/v4",
        "tier": "Lite/Pro",
        "tier_options": ["Lite", "Pro"],
        "website": "https://open.bigmodel.cn",
        "locked": True,
        # 端点实现时核对: 国内 open.bigmodel.cn / 国际 z.ai 的 /api/coding/paas/v4
        "models": ["glm-coding-latest", "glm-5.1"],
    },
    # ── 国外（辅助, OpenAI 兼容）──────────────────────────
    {
        "vendor_key": "openai",
        "name": "OpenAI",
        "kind": "国外",
        "base_url": "https://api.openai.com/v1",
        "tier": "",
        "tier_options": [],
        "website": "https://platform.openai.com",
        "locked": True,
        "models": ["gpt-5.6-terra", "gpt-5.6-sol", "gpt-5.6-luna"],
    },
    {
        "vendor_key": "openrouter",
        "name": "OpenRouter (Claude/Gemini)",
        "kind": "国外",
        "base_url": "https://openrouter.ai/api/v1",
        "tier": "",
        "tier_options": [],
        "website": "https://openrouter.ai",
        "locked": True,
        # Claude/Gemini 原生非 OpenAI 兼容, 统一经 OpenRouter 以兼容协议接入
        "models": ["anthropic/claude-sonnet-5", "anthropic/claude-opus-5", "google/gemini-3.6-flash"],
    },
]

# 技术指标计算用常量
RSI_PERIOD = 14
MACD_FAST = 12
MACD_SLOW = 26
MACD_SIGNAL = 9

class AIEvaluator:
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
            pass

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
            pass

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

    # ─── 策略推荐 (v3.5.0-T5) ───────────────────────────────

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
                    pass
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

    def save_config(self, config: Dict):
        """保存AI配置"""
        self.config.update(config)
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(self.config, f, ensure_ascii=False, indent=2)
        return True

    # ─── 模型管理 (v3.14 厂商化) ─────────────────────────────────

    def _seed_default_vendors(self) -> List[VendorConfig]:
        """首次加载：从 VENDOR_CATALOG 生成默认厂商。
        默认启用链 = 字节CodingPlan/ark-code-latest + DeepSeek/deepseek-v4-pro（两厂商各一模型）。
        """
        SEED_ENABLED = {"bytedance-coding": "ark-code-latest", "deepseek": "deepseek-v4-pro"}
        vendors = []
        for entry in VENDOR_CATALOG:
            models = [
                VendorModel(name=m, enabled=(SEED_ENABLED.get(entry["vendor_key"]) == m), locked=False, max_tokens=4096)
                for m in entry["models"]
            ]
            vendors.append(VendorConfig(
                vendor_key=entry["vendor_key"],
                name=entry["name"],
                kind=entry["kind"],
                base_url=entry["base_url"],
                api_key="",
                timeout=60,
                tier=entry.get("tier", ""),
                website=entry.get("website", ""),
                locked=entry.get("locked", False),
                models=models,
            ))
        return vendors

    def _load_models(self) -> List[VendorConfig]:
        """加载厂商模型配置 (v3.14: {"version":2,"vendors":[...]}；兼容 legacy v1 平铺格式自动迁移)"""
        if self._models_cache is not None:
            return self._models_cache
        try:
            with open(self._models_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            if data.get("version") == 2 or "vendors" in data:
                vendors = [VendorConfig.from_dict(v) for v in data.get("vendors", [])]
                if vendors:
                    self._models_cache = vendors
                    return vendors
            if "models" in data:
                # legacy v1 平铺格式 → 一次性迁移到 v2（幂等: 迁移成功即写 version:2）
                legacy = [ModelProvider.from_dict(m) for m in data.get("models", [])]
                vendors = self._migrate_v1_to_v2(legacy)
                self._save_models(vendors)
                return vendors
        except (FileNotFoundError, json.JSONDecodeError):
            pass
        # 首次加载/文件损坏：写入默认厂商
        vendors = self._seed_default_vendors()
        self._save_models(vendors)
        return vendors

    def _save_models(self, vendors: List[VendorConfig]):
        """保存厂商模型配置 (v3.14: version 2 格式)"""
        os.makedirs(os.path.dirname(self._models_file), exist_ok=True)
        data = {
            "version": 2,
            "vendors": [v.to_dict() for v in vendors],
            "updated_at": datetime.now().isoformat(),
        }
        with open(self._models_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        self._models_cache = vendors

    @staticmethod
    def _normalize_name(s: str) -> str:
        """目录名归一化：去所有空白 + 小写（兼容 legacy provider 名如「字节Coding Plan」）"""
        return re.sub(r'\s+', '', s or '').lower()

    @staticmethod
    def _match_catalog(name: str, base_url: str) -> Optional[Dict]:
        """目录匹配：先按去空白名，再按 base_url 唯一命中（避免共享端点误配）"""
        norm = AIEvaluator._normalize_name(name)
        for c in VENDOR_CATALOG:
            if AIEvaluator._normalize_name(c["name"]) == norm:
                return c
        matches = [c for c in VENDOR_CATALOG if c["base_url"] == base_url]
        return matches[0] if len(matches) == 1 else None

    @staticmethod
    def _vendor_key_for_provider(name: str, base_url: str) -> str:
        """provider 名 → 厂商 key：命中目录用目录 key，否则生成 slug"""
        entry = AIEvaluator._match_catalog(name, base_url)
        if entry:
            return entry["vendor_key"]
        base = name or base_url or "custom"
        slug = re.sub(r'[^\w-]+', '-', base.strip()).strip('-').lower()
        return slug or 'custom'

    def _migrate_v1_to_v2(self, legacy: List[ModelProvider]) -> List[VendorConfig]:
        """legacy v1 平铺模型 → v2 厂商结构（按 provider 分组, 保留启用/优先级/api_key/locked）"""
        from crypto_utils import decrypt_value
        # 先解密 legacy Fernet 密文（同原 v1 逻辑: gAAAA 前缀, 解密失败置空）
        for m in legacy:
            if m.api_key and m.api_key.startswith("gAAAA"):
                decrypted = decrypt_value(m.api_key)
                if decrypted.startswith("gAAAA"):
                    logger.warning(f"模型 {m.id} 的 API Key 无法解密 (FERNET_KEY 不匹配), 已置空, 请重新填写")
                    m.api_key = ""
                else:
                    m.api_key = decrypted
        # 按 provider 名分组（空则回退 base_url），组内按 legacy priority 升序
        groups = {}
        for m in sorted(legacy, key=lambda x: x.priority):
            key = m.provider or m.base_url or "自定义"
            groups.setdefault(key, []).append(m)
        # 组间按组内最小 priority 升序 → 完整保留原全局链顺序
        vendors = []
        used_keys = set()  # 防目录 key 碰撞: 同名共享 base_url 的独立 provider 不得复占同一 key
        for key, ms in sorted(groups.items(), key=lambda kv: min(x.priority for x in kv[1])):
            # 目录匹配: 名(去空白)优先, base_url 唯一命中兜底; 用户已有模型名一律原样保留（风险#6）
            entry = self._match_catalog(key, ms[0].base_url)
            # 名匹配(或 base_url 命中且 key 未被占用)才算"真是该目录厂商"; 碰撞则视为独立自定义厂商
            name_match = entry is not None and any(
                self._normalize_name(c["name"]) == self._normalize_name(key) for c in VENDOR_CATALOG
            )
            adopt_catalog = entry is not None and (name_match or entry["vendor_key"] not in used_keys)
            if adopt_catalog:
                desired = entry["vendor_key"]
            else:
                # 纯 name slug（不复用 _vendor_key_for_provider, 避免再次命中 base_url 撞回已占 key）
                base = key or ms[0].base_url or "custom"
                desired = re.sub(r'[^\w-]+', '-', base.strip()).strip('-').lower() or 'custom'
            vk = desired
            if vk in used_keys:  # slug 同样可能碰撞（如 "DeepSeek-R1" 与 "DeepSeek R1"）→ 追加序号
                n = 2
                while f"{vk}-{n}" in used_keys:
                    n += 1
                vk = f"{vk}-{n}"
            used_keys.add(vk)
            models = [
                VendorModel(name=x.model, enabled=x.enabled, locked=x.locked, max_tokens=x.max_tokens)
                for x in ms
            ]
            vendors.append(VendorConfig(
                vendor_key=vk,
                name=key,
                kind=entry["kind"] if adopt_catalog else "自定义",
                base_url=ms[0].base_url,
                api_key=ms[0].api_key,
                timeout=ms[0].timeout,
                tier=entry.get("tier", "") if adopt_catalog else "",
                website=entry.get("website", "") if adopt_catalog else "",
                locked=entry.get("locked", False) if adopt_catalog else False,
                models=models,
            ))
        return vendors

    def get_models(self) -> Dict:
        """获取厂商模型配置 (v3.14: {"vendors":[...]})"""
        vendors = self._load_models()
        return {"vendors": [v.to_dict() for v in vendors]}

    def update_models(self, payload: Dict) -> Dict:
        """批量保存厂商配置（保留厂商/模型两级 locked；api_key 原样透传）"""
        vendors_data = payload.get("vendors", []) if isinstance(payload, dict) else []
        existing = {v.vendor_key: v for v in self._load_models()}
        vendors = []
        for vd in vendors_data:
            v = VendorConfig.from_dict(vd)
            # 厂商级 locked 保留
            if v.vendor_key in existing:
                v.locked = existing[v.vendor_key].locked
            # 模型级 locked 保留（按 name；新厂商无既有状态则用客户端值）
            existing_vendor = existing.get(v.vendor_key)
            existing_models = {m.name: m.locked for m in existing_vendor.models} if existing_vendor else {}
            for m in v.models:
                if m.name in existing_models:
                    m.locked = existing_models[m.name]
            vendors.append(v)
        self._save_models(vendors)
        return {"vendors": [v.to_dict() for v in vendors]}

    def get_vendors(self) -> List[VendorConfig]:
        """获取厂商配置列表（内部）"""
        return self._load_models()

    def get_enabled_models(self) -> List[ModelProvider]:
        """获取所有已启用的模型（消费点兼容 shim, 签名不变）
        评估链 = 厂商列表顺序 → 厂商内模型列表顺序；只取 enabled，扁平化为 ModelProvider。
        """
        vendors = self._load_models()
        resolved = []
        for v in vendors:
            for m in v.models:
                if m.enabled:
                    resolved.append(self._resolve_provider(v, m))
        return resolved

    def _resolve_provider(self, v: VendorConfig, m: VendorModel) -> ModelProvider:
        """厂商+模型 → 扁平 ModelProvider（消费点只用 .base_url/.api_key/.model/.max_tokens）"""
        return ModelProvider(
            id=m.name,               # 用量统计键（按模型名聚合）
            provider=v.name,
            model=m.name,
            base_url=v.base_url,
            api_key=v.api_key,
            enabled=True,
            priority=0,
            timeout=v.timeout,
            max_tokens=m.max_tokens,
            locked=m.locked,
        )

    def _resolve_vendor(self, vendor_key: str, base_url: str = None, api_key: str = None, timeout: int = None) -> VendorConfig:
        """按 vendor_key 取厂商；未保存的新厂商可经 base_url/api_key/timeout 内联覆盖（探测/拉取模型列表前无需先保存）"""
        vendor = next((v for v in self._load_models() if v.vendor_key == vendor_key), None)
        if base_url:
            if vendor is None:
                vendor = VendorConfig(vendor_key=vendor_key, name=vendor_key, kind="自定义", base_url=base_url)
            else:
                vendor.base_url = base_url
        if api_key is not None and vendor is not None:
            vendor.api_key = api_key
        if timeout is not None and vendor is not None:
            vendor.timeout = timeout
        return vendor

    def test_vendor_model(self, vendor_key: str, model_name: str, base_url: str = None, api_key: str = None, timeout: int = None) -> Dict:
        """探测厂商下指定模型连接（v3.14: body 传参, 模型名可含 /; 未保存厂商支持内联 base_url/api_key）"""
        vendor = self._resolve_vendor(vendor_key, base_url, api_key, timeout)
        if not vendor:
            return {"success": False, "message": f"厂商 {vendor_key} 不存在"}
        # 内联覆盖（未保存新厂商）时模型名尚未落盘, 跳过归属校验, 直接按名探测
        if not base_url:
            model = next((m for m in vendor.models if m.name == model_name), None)
            if not model:
                return {"success": False, "message": f"模型 {model_name} 不在厂商 {vendor.name} 下"}
        if not vendor.api_key:
            return {"success": False, "message": "未配置 API Key"}

        start = time.time()
        try:
            endpoint = vendor.base_url.rstrip("/") + "/chat/completions"
            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {vendor.api_key}"
            }
            payload = {
                "model": model_name,
                "messages": [{"role": "user", "content": "ping"}],
                "max_tokens": 5,
            }
            resp = requests.post(endpoint, headers=headers, json=payload, timeout=15)
            latency = round((time.time() - start) * 1000)
            if resp.status_code == 200:
                return {"success": True, "message": f"连接正常 ({latency}ms)", "latency_ms": latency}
            return {"success": False, "message": f"HTTP {resp.status_code}: {resp.text[:200]}", "latency_ms": latency}
        except requests.Timeout:
            return {"success": False, "message": "连接超时 (15s)", "latency_ms": 15000}
        except Exception as e:
            return {"success": False, "message": str(e)[:200], "latency_ms": round((time.time() - start) * 1000)}

    def test_model_connection(self, model_id: str) -> Dict:
        """兼容别名：按模型名定位厂商+模型后探测（旧路由 /models/test/{id} 已删除）"""
        vendors = self._load_models()
        for v in vendors:
            for m in v.models:
                if m.name == model_id:
                    return self.test_vendor_model(v.vendor_key, m.name)
        return {"success": False, "message": f"模型 {model_id} 不存在"}

    def list_vendor_models(self, vendor_key: str, base_url: str = None, api_key: str = None, timeout: int = None) -> Dict:
        """调 {base_url}/models 获取厂商可用模型名列表（OpenAI 兼容, 供前端「获取模型列表」）"""
        vendor = self._resolve_vendor(vendor_key, base_url, api_key, timeout)
        if not vendor:
            return {"success": False, "message": f"厂商 {vendor_key} 不存在"}
        if not vendor.api_key:
            return {"success": False, "message": "未配置 API Key"}
        try:
            endpoint = vendor.base_url.rstrip("/") + "/models"
            headers = {"Authorization": f"Bearer {vendor.api_key}"}
            resp = requests.get(endpoint, headers=headers, timeout=min(vendor.timeout, 30))
            if resp.status_code != 200:
                return {"success": False, "message": f"HTTP {resp.status_code}: {resp.text[:200]}"}
            body = resp.json()
            raw = body.get("data", []) if isinstance(body, dict) else body
            if not isinstance(raw, list):
                return {"success": False, "message": "响应格式异常 (缺少 data 列表)"}
            names = []
            for item in raw:
                if isinstance(item, dict) and item.get("id"):
                    names.append(item["id"])
                elif isinstance(item, str):
                    names.append(item)
            names = sorted(set(names))
            if not names:
                return {"success": False, "message": "未获取到模型（返回空列表）"}
            return {"success": True, "models": names}
        except requests.Timeout:
            return {"success": False, "message": "请求超时"}
        except Exception as e:
            return {"success": False, "message": str(e)[:200]}

    def get_catalog(self) -> Dict:
        """预置厂商目录（唯一事实源, 供前端「新增厂商」下拉 + 模型名建议）"""
        return {"vendors": VENDOR_CATALOG}

    # ─── v3.7.11: 入池信号解读 ──────────────────────────────────

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

    def _load_history(self) -> List:
        """加载评估历史（已废弃，保留向后兼容）"""
        return self._load_history_for('default')

    def _load_history_for(self, username: str) -> List:
        """加载指定用户的评估历史"""
        try:
            path = self._history_path(username)
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            logger.exception("加载评估历史失败")
            return []

    def _save_history_for(self, username: str, history: List):
        """保存指定用户的评估历史"""
        path = self._history_path(username)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(history, f, ensure_ascii=False, indent=2)

    def _history_path(self, username: str) -> str:
        from paths import DATA_DIR
        return os.path.join(DATA_DIR, "users", username, "ai_evaluation_history.json")

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

    # ─── 评估入口 ───────────────────────────────────────────────

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
                pass
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

    # ─── Prompt 模板 (v3.7.12) ──────────────────────────────────

    def _load_prompt_template(self) -> str:
        """加载评估 prompt 模板 (带缓存)"""
        if not hasattr(self, '_prompt_template') or self._prompt_template is None:
            import os as _os
            template_path = _os.path.join(_os.path.dirname(__file__), 'prompts', 'evaluate_stock.txt')
            with open(template_path, 'r', encoding='utf-8') as f:
                self._prompt_template = f.read()
        return self._prompt_template

    # ─── LLM 调用 ───────────────────────────────────────────────

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
                    pass
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

    # ─── 决策稳定性校准 ─────────────────────────────────────────

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

    # ─── 内置评估（已废弃，保留供 evaluate_index 使用）─────────

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

    # ─── 内置技术评估（基于真实数据） ──────────────────────────

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

            consensus_score = 50  # default neutral when <3 signals
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

    def evaluate_index(self, index_code: str, index_name: str, current_price: float = None, pct_chg: float = None, force: bool = False) -> Dict:
        """
        评估指数 — 复用 K线数据获取 + 内置评估引擎
        返回前端兼容格式：{ analysis (HTML), suggestion, confidence }
        同日同指数自动缓存，force=True 强制刷新
        """
        # ── 检查缓存 ──
        today = datetime.now().strftime('%Y-%m-%d')
        cache_key = f"{index_code}_{today}"
        if not force and cache_key in self._index_eval_cache:
            cached = self._index_eval_cache[cache_key]
            logger.info(f"📋 指数评估缓存命中: {index_code} ({today})")
            return cached

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
        latest_data = market_data.get("latest", {})

        # 行情速览
        parts.append("<div style='margin-bottom:16px;'>")
        parts.append("<h4 style='margin:0 0 8px 0;'>📊 行情速览</h4>")
        parts.append("<table style='width:100%;font-size:13px;border-collapse:collapse;'>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>最新价</td><td style='padding:4px 8px;font-weight:600;'>{latest_data.get('close', '-')}</td>")
        pct = pct_chg if pct_chg is not None else latest_data.get('pct_chg')
        color = '#E63946' if (pct or 0) >= 0 else '#457B9D'
        sign = '+' if (pct or 0) >= 0 else ''
        parts.append(f"<td style='padding:4px 8px;font-weight:600;color:{color};'>{sign}{pct or '-'}%</td></tr>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>MA5 / MA10 / MA20</td><td colspan='2' style='padding:4px 8px;'>{latest_data.get('ma5','-')} / {latest_data.get('ma10','-')} / {latest_data.get('ma20','-')}</td></tr>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>成交量</td><td colspan='2' style='padding:4px 8px;'>{latest_data.get('volume',0):,} 手</td></tr>")
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

        # ── 建议映射（5级精确映射）──
        level = builtin.get("level", "观望")
        suggestion_map = {
            "强烈推荐": "买入",
            "推荐": "增持",
            "谨慎推荐": "观望",
            "中性": "减持",
            "观望": "卖出"
        }
        suggestion = suggestion_map.get(level, "观望")

        # 信心指数 = 评分映射
        confidence = min(100, max(0, round(total)))

        # 数据源
        data_src = "📡 Tushare 实时数据" if has_data else "⚠️ 离线模式"
        parts.append(f"<div style='margin-top:12px;font-size:11px;color:#999;text-align:right;'>数据源: {data_src} | 技术指标引擎</div>")

        result = {
            "analysis": "\n".join(parts),
            "suggestion": suggestion,
            "confidence": confidence,
            "eval_date": today
        }
        # ── 写入缓存 ──
        self._index_eval_cache[cache_key] = result
        self._save_index_eval_cache()
        return result

    # ─── 批量评估 ───────────────────────────────────────────────

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

    # ─── 历史管理 ───────────────────────────────────────────────

    def get_history(self, username: str = 'default', limit: int = 50, offset: int = 0) -> List[Dict]:
        """获取评估历史 (v3.17.9 FR-3.17.9: 支持 limit/offset 分页; offset 默认 0 兼容旧调用)"""
        history = self._load_history_for(username)
        return history[offset:offset + limit]

    def count_history(self, username: str = 'default') -> int:
        """评估历史总数 (分页 total 用)"""
        return len(self._load_history_for(username))
    def delete_history(self, username: str, record_id: str) -> bool:
        """删除单条评估记录"""
        history = self._load_history_for(username)
        before = len(history)
        history = [r for r in history if r.get("id") != record_id]
        if len(history) < before:
            self._save_history_for(username, history)
            return True
        return False

    def get_last_evaluation(self, username: str, stock_code: str) -> Optional[Dict]:
        """获取某只股票的最近一次评估"""
        history = self._load_history_for(username)
        for r in history:
            if r.get("stock_code") == stock_code:
                return r
        return None

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

    # ─── 自动评估配置 ───────────────────────────────────────────

    def get_auto_config(self) -> Dict:
        """获取自动评估配置"""
        from paths import AUTO_EVALUATE_CONFIG_FILE
        auto_config_file = AUTO_EVALUATE_CONFIG_FILE
        try:
            with open(auto_config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            logger.exception("加载自动评估配置失败")
            return {
                "enabled": False,
                "schedule_type": "daily",
                "schedule_time": "09:00",
                "selected_strategies": [],
                "selected_stocks": [],
                "push_to_feishu": True
            }

    def save_auto_config(self, config: Dict) -> bool:
        """保存自动评估配置"""
        from paths import AUTO_EVALUATE_CONFIG_FILE
        auto_config_file = AUTO_EVALUATE_CONFIG_FILE
        try:
            with open(auto_config_file, 'w', encoding='utf-8') as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
            return True
        except Exception:
            logger.exception("保存自动评估配置失败")
            return False


# 全局实例
ai_evaluator = AIEvaluator()
