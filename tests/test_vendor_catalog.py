"""v3.14: 厂商目录 (VENDOR_CATALOG) 与厂商化数据模型测试"""
import pytest
from ai_evaluator import AIEvaluator, VENDOR_CATALOG, VendorConfig, VendorModel, ModelProvider


class TestVendorCatalog:
    """VENDOR_CATALOG 目录完整性"""

    def test_catalog_nonempty_and_unique(self):
        """目录非空, vendor_key/name 全唯一"""
        assert len(VENDOR_CATALOG) > 0
        keys = [v["vendor_key"] for v in VENDOR_CATALOG]
        names = [v["name"] for v in VENDOR_CATALOG]
        assert len(keys) == len(set(keys)), "vendor_key 必须唯一"
        assert len(names) == len(set(names)), "name 必须唯一"

    def test_catalog_fields_valid(self):
        """每项 kind/base_url/models/website 有效, kind 枚举合法"""
        for v in VENDOR_CATALOG:
            assert v["kind"] in ("国内", "国外", "CodingPlan"), f"{v['vendor_key']} kind 非法"
            assert v["base_url"].startswith("https://"), f"{v['vendor_key']} base_url 非 https"
            assert len(v["models"]) > 0, f"{v['vendor_key']} 无模型"
            assert v.get("website", "").startswith("https://"), f"{v['vendor_key']} 缺官网"
            assert isinstance(v.get("locked", False), bool)
            assert isinstance(v.get("tier_options", []), list)

    def test_catalog_no_api_key(self):
        """目录不得含 api_key (密钥只存 data/ai_models.json)"""
        for v in VENDOR_CATALOG:
            assert "api_key" not in v, f"{v['vendor_key']} 目录含 api_key"

    def test_catalog_domestic_first_coding_foreign(self):
        """国内优先: 首个厂商是国内, CodingPlan 独立卡片, 国外靠后"""
        kinds = [v["kind"] for v in VENDOR_CATALOG]
        assert kinds[0] == "国内"
        assert "CodingPlan" in kinds
        assert "国外" in kinds
        # 国内全部排在 CodingPlan/国外 之前
        first_non_domestic = next(i for i, k in enumerate(kinds) if k != "国内")
        assert all(k == "国内" for k in kinds[:first_non_domestic])

    def test_catalog_matches_get_catalog(self):
        """get_catalog() 与 VENDOR_CATALOG 一致 (唯一事实源)"""
        e = AIEvaluator()
        assert e.get_catalog() == {"vendors": VENDOR_CATALOG}


class TestVendorDataclass:
    """VendorModel / VendorConfig dataclass"""

    def test_vendor_model_roundtrip(self):
        m = VendorModel(name="Qwen/Qwen3.5-72B-Instruct", enabled=False, locked=True, max_tokens=8192)
        d = m.to_dict()
        m2 = VendorModel.from_dict(d)
        assert m2.name == "Qwen/Qwen3.5-72B-Instruct"
        assert m2.enabled is False and m2.locked is True and m2.max_tokens == 8192

    def test_vendor_model_from_string(self):
        """纯字符串模型名兼容"""
        m = VendorModel.from_dict("deepseek-v4-flash")
        assert m.name == "deepseek-v4-flash" and m.enabled is True

    def test_vendor_config_roundtrip(self):
        v = VendorConfig(
            vendor_key="custom-x", name="自定义", kind="自定义",
            base_url="https://x.example.com/v1", api_key="sk-x", timeout=120,
            models=[VendorModel(name="m1"), VendorModel(name="m2", enabled=False)],
        )
        d = v.to_dict()
        v2 = VendorConfig.from_dict(d)
        assert v2.vendor_key == "custom-x"
        assert v2.api_key == "sk-x"
        assert [m.name for m in v2.models] == ["m1", "m2"]
        assert v2.models[1].enabled is False

    def test_vendor_config_defaults(self):
        v = VendorConfig.from_dict({"vendor_key": "k", "name": "n", "base_url": "https://b/v1"})
        assert v.kind == "自定义" and v.timeout == 60 and v.locked is False
        assert v.models == []


class TestSeedDefaultVendors:
    """_seed_default_vendors 默认启用链"""

    def test_seed_default_enables(self):
        e = AIEvaluator()
        seed = e._seed_default_vendors()
        enabled = {v.vendor_key: [m.name for m in v.models if m.enabled] for v in seed}
        # 默认启用 = DeepSeek/deepseek-v4-pro + 字节CodingPlan/ark-code-latest
        assert enabled["deepseek"] == ["deepseek-v4-pro"]
        assert enabled["bytedance-coding"] == ["ark-code-latest"]
        # 其余厂商无启用模型
        assert all(len(v) == 0 for k, v in enabled.items() if k not in ("deepseek", "bytedance-coding"))

    def test_seed_catalog_aligned(self):
        e = AIEvaluator()
        seed = {v.vendor_key: v for v in e._seed_default_vendors()}
        assert len(seed) == len(VENDOR_CATALOG)
        for entry in VENDOR_CATALOG:
            v = seed[entry["vendor_key"]]
            assert v.kind == entry["kind"] and v.base_url == entry["base_url"]
            assert v.locked is True and v.api_key == ""
            assert [m.name for m in v.models] == entry["models"]


class TestV1Migration:
    """legacy v1 平铺模型 → v2 厂商迁移（含 base_url 共享 key 碰撞）"""

    def _mk(self, model, provider, base_url, enabled=True, priority=0):
        return ModelProvider(
            id=model, provider=provider, model=model, base_url=base_url,
            api_key="", enabled=enabled, priority=priority,
        )

    def test_migrate_groups_by_provider_preserves_order(self):
        """按 provider 分组 + 组间最小 priority 升序（保留原全局链）"""
        e = AIEvaluator()
        legacy = [
            self._mk("deepseek-chat", "DeepSeek", "https://api.deepseek.com/v1", priority=0),
            self._mk("glm-4", "智谱GLM", "https://open.bigmodel.cn/api/paas/v4", priority=1),
            self._mk("deepseek-v4-pro", "DeepSeek", "https://api.deepseek.com/v1", priority=2),
        ]
        vendors = e._migrate_v1_to_v2(legacy)
        assert [v.vendor_key for v in vendors] == ["deepseek", "zhipu"]
        ds = vendors[0]
        assert [m.name for m in ds.models] == ["deepseek-chat", "deepseek-v4-pro"]
        assert ds.kind == "国内" and ds.locked is True and ds.website != ""

    def test_migrate_base_url_shared_key_collision(self):
        """同名 base_url 的独立 provider 不得复占目录 key（回归: DeepSeek vs DeepSeek R1）"""
        e = AIEvaluator()
        legacy = [
            self._mk("deepseek-v4-pro", "DeepSeek", "https://api.deepseek.com/v1", priority=0),
            self._mk("deepseek-reasoner", "DeepSeek R1", "https://api.deepseek.com/v1", priority=1),
        ]
        vendors = e._migrate_v1_to_v2(legacy)
        keys = [v.vendor_key for v in vendors]
        assert len(keys) == len(set(keys)), f"迁移后 vendor_key 重复: {keys}"
        by_name = {v.name: v for v in vendors}
        assert by_name["DeepSeek"].vendor_key == "deepseek"
        r1 = by_name["DeepSeek R1"]
        # 碰撞方回退为独立自定义厂商（可删，非目录锁定）
        assert r1.vendor_key == "deepseek-r1"
        assert r1.locked is False and r1.kind == "自定义"
        assert [m.name for m in r1.models] == ["deepseek-reasoner"]

    def test_migrate_slug_collision_gets_suffix(self):
        """slug 碰撞（同名不同写法、非目录 base_url）追加序号"""
        e = AIEvaluator()
        legacy = [
            self._mk("m1", "DeepSeek-R1", "https://api.example.com/v1", priority=0),
            self._mk("m2", "DeepSeek R1", "https://api.example.com/v1", priority=1),
        ]
        vendors = e._migrate_v1_to_v2(legacy)
        keys = [v.vendor_key for v in vendors]
        assert len(keys) == len(set(keys)) == 2
        assert "deepseek-r1" in keys and "deepseek-r1-2" in keys

    def test_migrate_idempotent_version2(self):
        """v2 哨兵: 二次加载直接解析不再迁移"""
        import json, os
        from paths import DATA_DIR
        e = AIEvaluator()
        vendors = e._migrate_v1_to_v2([self._mk("m", "DeepSeek", "https://api.deepseek.com/v1")])
        payload = {"version": 2, "vendors": [v.to_dict() for v in vendors]}
        tmp = os.path.join(DATA_DIR, "ai_models_migrate_test.json")
        try:
            with open(tmp, "w", encoding="utf-8") as f:
                json.dump(payload, f)
            e._models_file = tmp
            loaded = e._load_models()
            assert [v.vendor_key for v in loaded] == ["deepseek"]
            assert os.path.exists(tmp)  # 不重写盘（v2 哨兵直接解析）
        finally:
            os.remove(tmp)
