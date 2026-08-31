#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V4.5 (FR-4.5.4): AI 模型配置数据类 — 从 ai_evaluator.py 拆分(巨型文件瘦身)
ModelProvider / VendorModel / VendorConfig
"""
from typing import Dict, List
from dataclasses import dataclass, asdict, field
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

