# -*- coding: utf-8 -*-
"""V4.0 需求2: 密钥展示安全 — 部分掩码 + 密码验证查看完整 key"""
import asyncio
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import paths
import api.v1.ai as ai_router
import api.v1.market as market_router
import api.v1.system as system_router
from ai_evaluator import AIEvaluator


# ─── A. mask_secret / is_masked_form 单元 ──────────────────────

class TestMaskSecret:
    def test_empty(self):
        from secret_utils import mask_secret
        assert mask_secret("") == ""
        assert mask_secret(None) == ""

    def test_short(self):
        from secret_utils import mask_secret
        assert mask_secret("ab") == "a*"
        assert mask_secret("abcd") == "a***"

    def test_medium(self):
        from secret_utils import mask_secret
        assert mask_secret("12345678") == "12****78"

    def test_long(self):
        from secret_utils import mask_secret
        assert mask_secret("sk-1234567890abcdef") == "sk-1***********cdef"
        # 掩码不含完整明文
        assert "1234567890" not in mask_secret("sk-1234567890abcdef")

    def test_is_masked_form(self):
        from secret_utils import is_masked_form, mask_secret
        stored = "sk-1234567890abcdef"
        assert is_masked_form(mask_secret(stored), stored) is True
        assert is_masked_form("", stored) is False        # 空提交 ≠ 掩码(允许清空)
        assert is_masked_form("brand-new-key", stored) is False
        assert is_masked_form("", "") is True

    def test_verify_password(self, monkeypatch):
        from secret_utils import verify_key_view_password
        from config import settings
        monkeypatch.setattr(settings, "KEY_VIEW_PASSWORD", "secret-123")
        assert verify_key_view_password("secret-123") is True
        assert verify_key_view_password("wrong") is False
        assert verify_key_view_password("") is False


# ─── B. AI 厂商 api_key 掩码 (GET /models) + 保存守卫 ───────────

@pytest.fixture
def isolated_evaluator(tmp_path):
    """独立 AIEvaluator 指向 tmp_path, 替换路由模块绑定的单例 + 模块级单例 (用完恢复)"""
    import ai_evaluator as evmod
    old_data_dir = paths.DATA_DIR
    old_router_evaluator = ai_router.ai_evaluator
    old_module_singleton = evmod.ai_evaluator
    paths.DATA_DIR = str(tmp_path)
    e = evmod.AIEvaluator()
    ai_router.ai_evaluator = e
    evmod.ai_evaluator = e
    yield e
    ai_router.ai_evaluator = old_router_evaluator
    evmod.ai_evaluator = old_module_singleton
    paths.DATA_DIR = old_data_dir


class TestAiModelsMasking:
    def test_get_models_masks_api_key(self, isolated_evaluator):
        e = isolated_evaluator
        e.update_models({"vendors": [{
            "vendor_key": "test-vendor", "name": "测试", "kind": "自定义",
            "base_url": "https://x/v1", "api_key": "real-key-1234567890", "models": [],
        }]})
        r = asyncio.run(ai_router.get_models())
        assert r["success"] is True
        vendor = r["data"]["vendors"][0]
        assert "real-key-1234567890" not in vendor["api_key"]
        assert "*" in vendor["api_key"]

    def test_save_masked_key_keeps_existing(self, isolated_evaluator):
        e = isolated_evaluator
        from secret_utils import mask_secret
        e.update_models({"vendors": [{
            "vendor_key": "test-vendor", "name": "测试", "kind": "自定义",
            "base_url": "https://x/v1", "api_key": "real-key-1234567890", "models": [],
        }]})
        # 前端未查看 → 提交掩码 → 保留真实 key
        masked = mask_secret("real-key-1234567890")
        e.update_models({"vendors": [{
            "vendor_key": "test-vendor", "name": "测试", "kind": "自定义",
            "base_url": "https://x/v1", "api_key": masked, "models": [],
        }]})
        stored = {v.vendor_key: v.api_key for v in e.get_vendors()}
        assert stored["test-vendor"] == "real-key-1234567890"

    def test_save_new_key_updates(self, isolated_evaluator):
        e = isolated_evaluator
        e.update_models({"vendors": [{
            "vendor_key": "test-vendor", "name": "测试", "kind": "自定义",
            "base_url": "https://x/v1", "api_key": "old-key-1234567890", "models": [],
        }]})
        e.update_models({"vendors": [{
            "vendor_key": "test-vendor", "name": "测试", "kind": "自定义",
            "base_url": "https://x/v1", "api_key": "brand-new-key-abc", "models": [],
        }]})
        stored = {v.vendor_key: v.api_key for v in e.get_vendors()}
        assert stored["test-vendor"] == "brand-new-key-abc"

    def test_resolve_vendor_masked_does_not_override(self, isolated_evaluator):
        e = isolated_evaluator
        from secret_utils import mask_secret
        e.update_models({"vendors": [{
            "vendor_key": "test-vendor", "name": "测试", "kind": "自定义",
            "base_url": "https://x/v1", "api_key": "real-key-1234567890", "models": [],
        }]})
        # 探测时前端内联掩码 → 应使用存储的真实 key
        v = e._resolve_vendor("test-vendor", api_key=mask_secret("real-key-1234567890"))
        assert v.api_key == "real-key-1234567890"
        # 内联真实新 key → 覆盖
        v2 = e._resolve_vendor("test-vendor", api_key="inline-new-key")
        assert v2.api_key == "inline-new-key"


# ─── C. 数据源 token 掩码 (GET/POST /datasource/config) ────────

class TestDatasourceMasking:
    def _manager(self):
        from data_sources import data_source_manager
        return data_source_manager

    def test_get_config_masks_token(self):
        m = self._manager()
        m.config.setdefault("sources", {})
        m.config["sources"]["tushare"] = {**m.config["sources"].get("tushare", {}), "token": "tushare-real-token-123", "enabled": True}
        m.config["sources"]["sxsc_tushare"] = {**m.config["sources"].get("sxsc_tushare", {}), "token": "sxsc-real-token-456", "enabled": True}
        r = asyncio.run(market_router.get_datasource_config({"role": "admin"}))
        assert r["success"] is True
        cfg = r["config"]["sources"]
        assert "tushare-real-token-123" not in cfg["tushare"]["token"]
        assert "*" in cfg["tushare"]["token"]
        assert "sxsc-real-token-456" not in cfg["sxsc_tushare"]["token"]

    def test_save_masked_token_keeps_existing(self):
        m = self._manager()
        m.config.setdefault("sources", {})
        from secret_utils import mask_secret
        real = "tushare-real-token-123"
        m.config["sources"]["tushare"] = {"token": real, "enabled": True}
        masked = mask_secret(real)
        # 前端未查看 → 提交掩码 → 保留真实值
        r = asyncio.run(market_router.save_datasource_config(
            {"sources": {"tushare": {"token": masked, "enabled": True}, "sxsc_tushare": {"token": "", "enabled": True}}},
            {"role": "admin"}))
        assert r["success"] is True
        assert m.config["sources"]["tushare"]["token"] == real

    def test_save_new_token_updates(self):
        m = self._manager()
        m.config.setdefault("sources", {})
        m.config["sources"]["tushare"] = {"token": "old-token", "enabled": True}
        r = asyncio.run(market_router.save_datasource_config(
            {"sources": {"tushare": {"token": "new-token-zzz", "enabled": True}, "sxsc_tushare": {"token": "", "enabled": True}}},
            {"role": "admin"}))
        assert r["success"] is True
        assert m.config["sources"]["tushare"]["token"] == "new-token-zzz"


# ─── D. reveal-secret 端点 ─────────────────────────────────────

class TestRevealSecret:
    def test_wrong_password(self):
        r = asyncio.run(system_router.reveal_secret({"password": "wrong", "target": "tushare"}, {"role": "admin"}))
        assert r["success"] is False
        assert "密码" in r["message"]

    def test_unknown_target(self):
        r = asyncio.run(system_router.reveal_secret({"password": "admin123", "target": "nope"}, {"role": "admin"}))
        assert r["success"] is False

    def test_reveal_denied_without_explicit_config(self, monkeypatch):
        """V4.1: 未显式配置 KEY_VIEW_PASSWORD 时一律拒绝查看(默认 admin123 视为未配置)"""
        monkeypatch.delenv("KEY_VIEW_PASSWORD", raising=False)
        from config import settings
        monkeypatch.setattr(settings, "KEY_VIEW_PASSWORD", "admin123")
        m = self._manager()
        m.config.setdefault("sources", {})
        m.config["sources"]["tushare"] = {"token": "tushare-real-token-123", "enabled": True}
        r = asyncio.run(system_router.reveal_secret({"password": "admin123", "target": "tushare"}, {"role": "admin"}))
        assert r["success"] is False

    def test_reveal_datasource_token(self, monkeypatch):
        monkeypatch.setenv("KEY_VIEW_PASSWORD", "test-view-pw")
        from config import settings
        monkeypatch.setattr(settings, "KEY_VIEW_PASSWORD", "test-view-pw")
        m = self._manager()
        m.config.setdefault("sources", {})
        m.config["sources"]["tushare"] = {"token": "tushare-real-token-123", "enabled": True}
        r = asyncio.run(system_router.reveal_secret({"password": "test-view-pw", "target": "tushare"}, {"role": "admin"}))
        assert r["success"] is True
        assert r["secret"] == "tushare-real-token-123"

    def test_reveal_ai_key(self, monkeypatch, isolated_evaluator):
        monkeypatch.setenv("KEY_VIEW_PASSWORD", "test-view-pw")
        from config import settings
        monkeypatch.setattr(settings, "KEY_VIEW_PASSWORD", "test-view-pw")
        isolated_evaluator.update_models({"vendors": [{
            "vendor_key": "test-vendor", "name": "测试", "kind": "自定义",
            "base_url": "https://x/v1", "api_key": "ai-real-key-9876543210", "models": [],
        }]})
        r = asyncio.run(system_router.reveal_secret({"password": "test-view-pw", "target": "ai:test-vendor"}, {"role": "admin"}))
        assert r["success"] is True
        assert r["secret"] == "ai-real-key-9876543210"

    def _manager(self):
        from data_sources import data_source_manager
        return data_source_manager
