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
import re
import os
import time
import requests
import logging
from typing import Dict, List, Optional
from datetime import datetime
from ai_models import ModelProvider, VendorModel, VendorConfig, VENDOR_CATALOG  # V4.5 (FR-4.5.4): 拆分

logger = logging.getLogger(__name__)

# ─── 模型配置管理 ──────────────────────────────────────────────

import logging  # noqa: E402

logger = logging.getLogger(__name__)

class AIModelsMixin:
    """V5.9 (T-5.9.1): AIEvaluator 拆分 Mixin (_models)"""
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
            logger.warning('ai_evaluator:273 静默异常 ((FileNotFoundError, json.JSONDecodeError))')
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
        norm = AIModelsMixin._normalize_name(name)
        for c in VENDOR_CATALOG:
            if AIModelsMixin._normalize_name(c["name"]) == norm:
                return c
        matches = [c for c in VENDOR_CATALOG if c["base_url"] == base_url]
        return matches[0] if len(matches) == 1 else None
    @staticmethod
    def _vendor_key_for_provider(name: str, base_url: str) -> str:
        """provider 名 → 厂商 key：命中目录用目录 key，否则生成 slug"""
        entry = AIModelsMixin._match_catalog(name, base_url)
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
        """批量保存厂商配置（保留厂商/模型两级 locked；api_key 掩码形式提交 → 保留既有值, 防掩码覆盖真实 key）"""
        from secret_utils import is_masked_form
        vendors_data = payload.get("vendors", []) if isinstance(payload, dict) else []
        existing = {v.vendor_key: v for v in self._load_models()}
        vendors = []
        for vd in vendors_data:
            v = VendorConfig.from_dict(vd)
            # 厂商级 locked 保留
            if v.vendor_key in existing:
                v.locked = existing[v.vendor_key].locked
                # V4.0 需求2: 掩码/空值提交 → 保留既有 api_key（前端未点眼睛查看时发回的是掩码）
                if is_masked_form(v.api_key, existing[v.vendor_key].api_key) or not v.api_key:
                    v.api_key = existing[v.vendor_key].api_key
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
            # V4.0 需求2: 前端未查看时内联发回的是掩码, 视为不覆盖 → 用存储的真实 key 探测
            from secret_utils import is_masked_form
            if not is_masked_form(api_key, vendor.api_key):
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
