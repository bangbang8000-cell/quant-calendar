"""v3.14: /api/ai 模型管理路由测试 (GET/POST /models, /models/test, /models/list, /catalog)

路由处理函数无 auth 依赖, 直接调用; 通过重绑 ai_router.ai_evaluator 到
指向 tmp_path 的独立实例实现隔离, 不污染会话级 DATA_DIR。
"""
import asyncio
import os
import sys
from unittest.mock import patch, MagicMock

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import paths
import api.v1.ai as ai_router
from ai_evaluator import VENDOR_CATALOG


@pytest.fixture
def isolated_evaluator(tmp_path):
    """独立 AIEvaluator 指向 tmp_path, 替换路由模块绑定的单例 (用完恢复)"""
    import ai_evaluator
    old_data_dir = paths.DATA_DIR
    old_router_evaluator = ai_router.ai_evaluator
    paths.DATA_DIR = str(tmp_path)
    e = ai_evaluator.AIEvaluator()
    ai_router.ai_evaluator = e
    yield e
    ai_router.ai_evaluator = old_router_evaluator
    paths.DATA_DIR = old_data_dir


class TestModelsRoutes:
    """GET/POST /models"""

    def test_get_models_roundtrip(self, isolated_evaluator):
        r = asyncio.run(ai_router.get_models())
        assert r["success"] is True
        vendors = r["data"]["vendors"]
        assert len(vendors) == len(VENDOR_CATALOG)
        # 国内优先: 首个厂商 DeepSeek
        assert vendors[0]["vendor_key"] == "deepseek"

    def test_post_models_preserves_locked(self, isolated_evaluator):
        """目录厂商 locked 不可被客户端关掉 (厂商级 locked 保留)"""
        data = ai_router.ai_evaluator.get_models()
        vendors = data["vendors"]
        for v in vendors:
            v["locked"] = False
        r = asyncio.run(ai_router.save_models({"vendors": vendors}))
        assert r["success"] is True
        out = r["data"]["vendors"]
        deepseek = next(v for v in out if v["vendor_key"] == "deepseek")
        assert deepseek["locked"] is True

    def test_post_models_preserves_model_locked(self, isolated_evaluator):
        """模型级 locked 保留: 已锁定模型客户端置 False 无效 (locked 冻结到磁盘状态)"""
        from ai_evaluator import VendorConfig
        e = ai_router.ai_evaluator
        # 直接落盘 locked=True 的模型状态 (模拟迁移/手工编辑产物), 绕过 update_models
        vendors = [VendorConfig.from_dict(v) for v in e.get_models()["vendors"]]
        vendors[0].models[0].locked = True
        e._save_models(vendors)
        # 客户端试图解锁 → 应被保留为 True
        again = e.get_models()["vendors"]
        for v in again:
            for m in v["models"]:
                m["locked"] = False
        r = asyncio.run(ai_router.save_models({"vendors": again}))
        assert r["success"] is True
        ds = next(v for v in r["data"]["vendors"] if v["vendor_key"] == vendors[0].vendor_key)
        assert ds["models"][0]["locked"] is True

    def test_post_models_plaintext_key_roundtrip(self, isolated_evaluator):
        """明文 api_key 保存; GET 返回掩码 (V4.0 需求2: 完整值仅经 reveal-secret 验密获取)"""
        data = ai_router.ai_evaluator.get_models()
        vendors = data["vendors"]
        vendors[0]["api_key"] = "sk-plain-456"
        r = asyncio.run(ai_router.save_models({"vendors": vendors}))
        assert r["success"] is True
        # POST 响应回显客户端提交值 (明文)
        assert r["data"]["vendors"][0]["api_key"] == "sk-plain-456"
        # GET 一律掩码展示
        r2 = asyncio.run(ai_router.get_models())
        assert "sk-plain-456" not in r2["data"]["vendors"][0]["api_key"]
        assert "*" in r2["data"]["vendors"][0]["api_key"]
        # 内部存储仍为明文 (消费点可用)
        stored = {v.vendor_key: v.api_key for v in isolated_evaluator.get_vendors()}
        assert stored[vendors[0]["vendor_key"]] == "sk-plain-456"

    def test_unknown_vendor_key_saved(self, isolated_evaluator):
        """新增自定义厂商 (vendor_key 不在目录) 可保存"""
        data = ai_router.ai_evaluator.get_models()
        vendors = data["vendors"]
        vendors.append({
            "vendor_key": "custom-xyz", "name": "自建网关", "kind": "自定义",
            "base_url": "https://gateway.example.com/v1", "api_key": "sk-x",
            "timeout": 60, "tier": "", "website": "", "locked": False,
            "models": [{"name": "my-model", "enabled": True, "locked": False, "max_tokens": 4096}],
        })
        r = asyncio.run(ai_router.save_models({"vendors": vendors}))
        assert r["success"] is True
        keys = [v["vendor_key"] for v in r["data"]["vendors"]]
        assert "custom-xyz" in keys


class TestTestRoute:
    """POST /models/test — body 传参 (模型名可含 /)"""

    def test_body_param_slash_model_name(self, isolated_evaluator):
        """openrouter 模型名含 /, body 传参不 404; 未配 key → 快速失败"""
        r = asyncio.run(ai_router.test_vendor_model(
            {"vendor_key": "openrouter", "model": "anthropic/claude-sonnet-5"}))
        assert r["success"] is False
        assert "API Key" in r["message"]

    def test_unknown_vendor(self, isolated_evaluator):
        r = asyncio.run(ai_router.test_vendor_model({"vendor_key": "nope", "model": "x"}))
        assert r["success"] is False
        assert "不存在" in r["message"]

    def test_model_not_in_vendor(self, isolated_evaluator):
        r = asyncio.run(ai_router.test_vendor_model({"vendor_key": "deepseek", "model": "ghost-model"}))
        assert r["success"] is False
        assert "不在厂商" in r["message"]


    def test_unsaved_vendor_inline_test(self, isolated_evaluator):
        """未保存的新厂商: 内联 base_url/api_key 直接探测 (跳过模型归属校验)"""
        import ai_evaluator
        mock_post = MagicMock()
        mock_post.status_code = 200
        mock_post.text = ""
        with patch("ai_evaluator.requests.post", return_value=mock_post) as mock_requests_post:
            r = asyncio.run(ai_router.test_vendor_model({
                "vendor_key": "custom-new",
                "model": "brand-new-model",
                "base_url": "https://mock.example.com/v1",
                "api_key": "sk-inline",
            }))
        assert r["success"] is True
        # 探测请求打到内联 base_url
        mock_requests_post.assert_called_once()
        url = mock_requests_post.call_args[0][0]
        assert url == "https://mock.example.com/v1/chat/completions"
        # Bearer 用内联 key
        headers = mock_requests_post.call_args[1].get("headers", {})
        assert headers.get("Authorization") == "Bearer sk-inline"


class TestListRoute:
    """POST /models/list — 拉取厂商可用模型"""

    def test_unsaved_vendor_inline_list(self, isolated_evaluator):
        """未保存的新厂商: 内联 base_url/api_key 直接拉模型列表 (无需先保存)"""
        import ai_evaluator
        mock_get = MagicMock()
        mock_get.status_code = 200
        mock_get.json.return_value = {"data": [{"id": "model-x"}, {"id": "model-y"}]}
        with patch("ai_evaluator.requests.get", return_value=mock_get) as mock_requests_get:
            r = asyncio.run(ai_router.list_vendor_models({
                "vendor_key": "custom-new",
                "base_url": "https://mock.example.com/v1",
                "api_key": "sk-inline",
            }))
        assert r["success"] is True
        assert r["models"] == ["model-x", "model-y"]
        mock_requests_get.assert_called_once()
        assert mock_requests_get.call_args[0][0] == "https://mock.example.com/v1/models"

    def test_fetch_and_parse(self, isolated_evaluator):
        import ai_evaluator
        # 给 deepseek 配 key
        e = ai_router.ai_evaluator
        data = e.get_models()
        vendors = data["vendors"]
        for v in vendors:
            if v["vendor_key"] == "deepseek":
                v["api_key"] = "sk-deepseek"
        e.update_models({"vendors": vendors})

        mock_get = MagicMock()
        mock_get.status_code = 200
        mock_get.json.return_value = {
            "data": [{"id": "deepseek-v4-flash"}, {"id": "Qwen/Qwen3.5-72B"}, {"id": "deepseek-v4-pro"}]
        }
        with patch("ai_evaluator.requests.get", return_value=mock_get) as mock_requests_get:
            r = asyncio.run(ai_router.list_vendor_models({"vendor_key": "deepseek"}))
        assert r["success"] is True
        # 去重排序
        assert r["models"] == ["Qwen/Qwen3.5-72B", "deepseek-v4-flash", "deepseek-v4-pro"]
        # 请求了正确端点
        mock_requests_get.assert_called_once()
        assert "/models" in mock_requests_get.call_args[0][0]

    def test_fetch_error_response(self, isolated_evaluator):
        import ai_evaluator
        e = ai_router.ai_evaluator
        data = e.get_models()
        vendors = data["vendors"]
        for v in vendors:
            if v["vendor_key"] == "deepseek":
                v["api_key"] = "sk-deepseek"
        e.update_models({"vendors": vendors})

        mock_get = MagicMock()
        mock_get.status_code = 401
        mock_get.text = "invalid key"
        with patch("ai_evaluator.requests.get", return_value=mock_get):
            r = asyncio.run(ai_router.list_vendor_models({"vendor_key": "deepseek"}))
        assert r["success"] is False
        assert "401" in r["message"]

    def test_empty_vendor_key_shortcircuit(self, isolated_evaluator):
        """空 vendor_key 短路, 不发网络请求"""
        import ai_evaluator
        with patch("ai_evaluator.requests.get") as mock_get:
            r = asyncio.run(ai_router.list_vendor_models({"vendor_key": ""}))
        mock_get.assert_not_called()
        assert r["success"] is False

    def test_missing_key_shortcircuit(self, isolated_evaluator):
        """未配 key 短路, 不发网络请求"""
        import ai_evaluator
        with patch("ai_evaluator.requests.get") as mock_get:
            r = asyncio.run(ai_router.list_vendor_models({"vendor_key": "deepseek"}))
        mock_get.assert_not_called()
        assert r["success"] is False
        assert "API Key" in r["message"]


class TestCatalogRoute:
    """GET /catalog"""

    def test_catalog_route(self):
        r = asyncio.run(ai_router.get_vendor_catalog())
        assert r["success"] is True
        assert r["data"]["vendors"] == VENDOR_CATALOG


class TestHttpRequestValidation:
    """FastAPI 请求层校验: body 里 timeout 为 JSON 数字(前端真实发送)不 422
    (回归: req 曾声明 Dict[str,str], 数字 timeout 直接 422 → 前端永远拿不到 success)"""

    def test_list_numeric_timeout_via_http(self, isolated_evaluator):
        import ai_evaluator
        from unittest.mock import patch, MagicMock
        from fastapi import FastAPI
        from starlette.testclient import TestClient

        app = FastAPI()
        app.include_router(ai_router.router)
        mock_get = MagicMock()
        mock_get.status_code = 200
        mock_get.json.return_value = {"data": [{"id": "model-x"}, {"id": "model-y"}]}
        with patch("ai_evaluator.requests.get", return_value=mock_get):
            with TestClient(app) as c:
                r = c.post("/ai/models/list", json={
                    "vendor_key": "custom-new",
                    "base_url": "https://mock.example.com/v1",
                    "api_key": "sk-inline",
                    "timeout": 60,  # JSON 数字, 前端 v.timeout 真实发送形态
                })
        assert r.status_code == 200, r.text
        assert r.json()["success"] is True
        assert r.json()["models"] == ["model-x", "model-y"]

    def test_test_numeric_timeout_via_http(self, isolated_evaluator):
        import ai_evaluator
        from unittest.mock import patch, MagicMock
        from fastapi import FastAPI
        from starlette.testclient import TestClient

        app = FastAPI()
        app.include_router(ai_router.router)
        mock_post = MagicMock()
        mock_post.status_code = 200
        mock_post.text = ""
        with patch("ai_evaluator.requests.post", return_value=mock_post):
            with TestClient(app) as c:
                r = c.post("/ai/models/test", json={
                    "vendor_key": "custom-new",
                    "model": "brand-new-model",
                    "base_url": "https://mock.example.com/v1",
                    "api_key": "sk-inline",
                    "timeout": 60,
                })
        assert r.status_code == 200, r.text
        assert r.json()["success"] is True
