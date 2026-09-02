"""Tests for ai_evaluator.py — AI evaluation engine (mock LLM)"""
import asyncio
import pytest
import json
from unittest.mock import patch, MagicMock
from ai_evaluator import AIEvaluator, ModelProvider


@pytest.fixture
def isolated_data_dir(tmp_path):
    """隔离 DATA_DIR 到独立临时目录, 用完恢复 (避免缓存/配置写入污染会话级数据)"""
    import paths
    old = paths.DATA_DIR
    paths.DATA_DIR = str(tmp_path)
    yield
    paths.DATA_DIR = old


@pytest.fixture(autouse=True)
def _stub_fetch_stock_data():
    """v3.15 (15.5): 环境兜底 — 外部行情源不可达时单测不触网.

    evaluate_stock 在缓存命中检查之前就调用 _fetch_stock_data (L1013),
    数据源 sxsc-tushare/tushare/akshare 不可达时每个调用会挂 30s×3 超时。
    无模型/缓存命中/批量等路径只用 stock_data={} 即可覆盖, 语义不变。
    """
    import ai_evaluator
    with patch.object(ai_evaluator.AIEvaluator, '_fetch_stock_data', lambda self, code: {}):
        yield


class TestModelProvider:
    """ModelProvider dataclass tests"""

    def test_from_dict_basic(self):
        """Basic from_dict works"""
        d = {"id": "test", "provider": "Test", "model": "gpt-4", "base_url": "https://api.test.com", "api_key": "sk-test"}
        m = ModelProvider.from_dict(d)
        assert m.id == "test"
        assert m.provider == "Test"
        assert m.api_key == "sk-test"
        assert m.enabled is True

    def test_from_dict_defaults(self):
        """Missing fields get defaults"""
        m = ModelProvider.from_dict({"id": "minimal"})
        assert m.enabled is True
        assert m.priority == 0
        assert m.timeout == 60
        assert m.max_tokens == 4096
        assert m.locked is False

    def test_to_dict_roundtrip(self):
        """to_dict → from_dict roundtrip"""
        m = ModelProvider(id="test", provider="P", model="M", base_url="https://x.com", api_key="k")
        d = m.to_dict()
        m2 = ModelProvider.from_dict(d)
        assert m2.id == m.id
        assert m2.api_key == m.api_key
        assert m2.enabled == m.enabled

    def test_disabled_model(self):
        """Disabled model flag preserved"""
        m = ModelProvider.from_dict({"id": "x", "enabled": False})
        assert m.enabled is False


class TestAIEvaluatorInit:
    """AIEvaluator initialization"""

    def test_init_creates_default_models(self):
        """First init writes default vendors (v3.14: {"vendors":[...]})"""
        evaluator = AIEvaluator()
        data = evaluator.get_models()
        vendors = data["vendors"]
        assert len(vendors) > 0
        assert any("deepseek-v4-pro" in [m["name"] for m in v["models"]] for v in vendors)
        # 国内优先: 首个厂商是 DeepSeek 且默认启用链为 deepseek-v4-pro + ark-code-latest
        assert vendors[0]["vendor_key"] == "deepseek"

    def test_get_enabled_models(self):
        """get_enabled_models filters disabled"""
        evaluator = AIEvaluator()
        enabled = evaluator.get_enabled_models()
        for m in enabled:
            assert m.enabled is True


class TestKeyStorage:
    """API Key 明文存储 (v3.6.0 取消加密, 兼容历史 Fernet 密文迁移)"""

    def test_plaintext_stored_as_is(self):
        """明文 key 原样保存并读回 (取消加密后)"""
        from crypto_utils import encrypt_value, decrypt_value
        # crypto_utils 仍保留(兼容迁移), 但模型存储不再调用
        original = "«redacted:sk-…»"
        encrypted = encrypt_value(original)
        decrypted = decrypt_value(encrypted)
        assert decrypted == original

    def test_empty_key_passthrough(self):
        """空 key 原样透传"""
        from crypto_utils import encrypt_value, decrypt_value
        assert encrypt_value("") == ""
        assert decrypt_value("") == ""

    def test_plaintext_backward_compat(self):
        """明文 key 经 decrypt_value 原样返回 (向后兼容)"""
        from crypto_utils import decrypt_value
        assert decrypt_value("plain-key") == "plain-key"

    def test_save_load_plaintext_roundtrip(self):
        """update_models/_load_models 明文 roundtrip (取消加密后, v3.14 厂商载荷)"""
        evaluator = AIEvaluator()
        data = evaluator.get_models()
        vendors = data["vendors"]
        if not vendors:
            return
        # 设置明文 key 保存
        vendors[0]["api_key"] = "test-plain-key-123"
        evaluator.update_models({"vendors": vendors})
        loaded = evaluator.get_models()
        assert loaded["vendors"][0]["api_key"] == "test-plain-key-123"


class TestAIModelManagement:
    """Model CRUD operations"""

    def test_update_models(self):
        """update_models preserves locked state (厂商级, v3.14)"""
        evaluator = AIEvaluator()
        data = evaluator.get_models()
        vendors = data["vendors"]
        # 命中目录的厂商 locked=True
        locked_vendor = next((v for v in vendors if v.get("locked")), None)
        updated = evaluator.update_models({"vendors": [dict(v) for v in vendors]})
        assert updated["vendors"][0]["vendor_key"] == vendors[0]["vendor_key"]
        if locked_vendor:
            still_locked = next(
                (v for v in updated["vendors"] if v["vendor_key"] == locked_vendor["vendor_key"]), None)
            assert still_locked is not None and still_locked["locked"] is True

    def test_test_model_missing_key(self):
        """Test connection without API key returns error (compat alias)"""
        evaluator = AIEvaluator()
        result = evaluator.test_model_connection("deepseek-v4-pro")
        assert result["success"] is False


class TestAIEvaluation:
    """AI evaluation with mocked LLM"""

    def test_evaluate_no_models(self):
        """Evaluation with no enabled models (v3.14 厂商载荷)"""
        evaluator = AIEvaluator()
        # 快照当前状态作为基线
        data = evaluator.get_models()
        baseline_vendors = data["vendors"]
        disabled = []
        for v in baseline_vendors:
            vv = dict(v)
            vv["models"] = [{**m, "enabled": False} for m in v["models"]]
            disabled.append(vv)
        evaluator.update_models({"vendors": disabled})
        try:
            result = asyncio.run(evaluator.evaluate_stock('000001.SZ', 'test'))
            assert result['result']['level'] == '无可用模型'
        finally:
            # 恢复基线, 避免会话级 DATA_DIR 文件污染后续用例
            evaluator.update_models({"vendors": baseline_vendors})

    @patch('ai_evaluator.requests.post')
    def test_evaluate_with_mock_llm(self, mock_post, sample_stock_data):
        """Full evaluation with mocked LLM response"""
        # Mock successful LLM response
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps({
                "total_score": 85.2,
                "level": "推荐",
                "level_color": "#67c23a",
                "dimensions": {"趋势强度": 90, "均线排列": 85},
                "analysis": {
                    "strengths": ["量价配合好"],
                    "weaknesses": ["RSI偏高"],
                    "suggestions": ["回踩5日线介入"],
                    "sniper_points": {"ideal_buy": "32.50", "stop_loss": "30.80", "take_profit": "36.00"},
                    "position_advice": {"no_position": "建仓3成", "has_position": "持有"},
                },
                "signal_attribution": {
                    "technical": 60, "fundamentals": 25, "market_sentiment": 15,
                    "strongest_bullish": "均线多头排列", "strongest_bearish": "成交量萎缩"
                },
                "data_quality_note": "实时数据",
                "detailed_report": "测试评估结果"
            })}}]
        }
        mock_post.return_value = mock_response

        evaluator = AIEvaluator()
        # v3.2.0 fix: 传 stock_data 绕过真实行情获取 (_fetch_stock_data 会阻塞等待数据源)
        sample_data = {
            'code': '000001.SZ', 'name': '平安银行',
            'has_kline': True, 'has_fundamentals': True,
            'latest': {'date': '2026-07-14', 'close': 12.8, 'open': 12.5, 'high': 12.9, 'low': 12.3, 'pct_chg': 2.4},
            'rsi': 58.5, 'macd': {'dif': 0.15, 'dea': 0.10, 'hist': 0.05},
            'ma_alignment': '多头排列', 'pct_5d': 3.2, 'pct_20d': 5.1,
            'price_range': {'high': 13.2, 'low': 11.8},
            'volume_analysis': {'trend': '温和放量', 'detail': '近5日量能递增'},
            'fundamentals': {'pe': 6.5, 'pb': 0.85, 'total_mv': 250000000000, 'data_source': 'mock'},
        }
        result = asyncio.run(evaluator.evaluate_stock('000001.SZ', '平安银行', stock_data=sample_data))
        assert 'result' in result
        assert 'total_score' in result['result']

    def test_cache_hit_returns_record_shape(self, isolated_data_dir):
        """v3.14fix 回归: 缓存命中统一返回 record 形状 (含 result 包装 + stock_code),
        不再返回扁平 result — 前端弹窗读 aiResult.result.total_score 不再落空"""
        evaluator = AIEvaluator()
        evaluator._set_cached('000001.SZ', 'default', {'total_score': 88, 'level': '推荐', 'provider': 'DeepSeek'})
        rec = asyncio.run(evaluator.evaluate_stock('000001.SZ', '平安银行'))
        # record 形状
        assert rec['stock_code'] == '000001.SZ'
        assert rec['from_cache'] is True
        assert 'result' in rec
        assert rec['result']['total_score'] == 88
        assert rec['result']['level'] == '推荐'
        assert rec['result']['provider'] == 'DeepSeek'
        assert rec['model_provider'] == 'DeepSeek'

    def test_batch_evaluate_uniform_shape(self, isolated_data_dir):
        """v3.14fix 回归: 批量评估统一返回 {stock_code, success, result} —
        前端批量弹窗依赖 r.success / r.stock_code / r.result, 缓存命中/失败两态一致"""
        evaluator = AIEvaluator()
        evaluator._set_cached('000001.SZ', 'default', {'total_score': 88, 'level': '推荐'})
        evaluator._set_cached('000002.SZ', 'default', {'total_score': 0, 'level': '评估失败'})
        results = asyncio.run(evaluator.batch_evaluate(['000001.SZ', '000002.SZ'], None, 2, 'default'))
        assert len(results) == 2
        # 缓存命中成功项: stock_code + success=True + result 嵌套
        ok = results[0]
        assert ok['stock_code'] == '000001.SZ'
        assert ok['success'] is True
        assert ok['result']['total_score'] == 88
        assert ok['from_cache'] is True
        # 失败项: success=False
        fail = results[1]
        assert fail['stock_code'] == '000002.SZ'
        assert fail['success'] is False


class TestV3142Regression:
    """v3.14.2 回归测试: 推理模型 reasoning_content 兜底 + 股票名解析"""

    @patch('ai_evaluator.requests.post')
    def test_call_llm_reasoning_content_fallback(self, mock_post, sample_stock_data):
        """推理模型 (deepseek-v4-flash/pro) content 为空时, 从 reasoning_content 提取 JSON"""
        reasoning_json = json.dumps({"total_score": 82, "level": "推荐"})
        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.json.return_value = {
            "choices": [{"message": {"content": "", "reasoning_content": f"先思考… {reasoning_json}"}}]
        }
        mock_post.return_value = mock_resp
        model = ModelProvider(id='m', provider='DeepSeek', model='deepseek-v4-flash',
                              base_url='https://api.deepseek.com/v1', api_key='sk-test')
        evaluator = AIEvaluator()
        parsed, raw = evaluator._call_llm(model, '000001.SZ', '平安银行', sample_stock_data)
        assert parsed['total_score'] == 82
        assert parsed['level'] == '推荐'
        assert parsed['provider'] == 'DeepSeek'  # provider 注入
        assert reasoning_json in raw

    @patch('ai_evaluator.requests.post')
    def test_call_llm_reasoning_content_no_json_raises(self, mock_post, sample_stock_data):
        """content 空且 reasoning_content 无 JSON → 明确报错 (不再静默返回空串)"""
        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.json.return_value = {
            "choices": [{"message": {"content": "", "reasoning_content": "我无法给出答案"}}]
        }
        mock_post.return_value = mock_resp
        model = ModelProvider(id='m', provider='DeepSeek', model='deepseek-v4-flash',
                              base_url='https://api.deepseek.com/v1', api_key='sk-test')
        evaluator = AIEvaluator()
        with pytest.raises(ValueError, match="无法解析为 JSON"):
            evaluator._call_llm(model, '000001.SZ', '平安银行', sample_stock_data)

    def test_resolve_stock_name(self):
        """_resolve_stock_name: 真实名保留 / 空名解析 / ==代码解析 / 裸代码后缀推断"""
        from stock_info import stock_manager
        _orig = dict(stock_manager.stock_map)
        stock_manager.stock_map = {'600085.SH': '同仁堂', '000002.SZ': '万科A'}
        try:
            evaluator = AIEvaluator()
            # 传入真实中文名 → 保留
            assert evaluator._resolve_stock_name('600085.SH', '同仁堂') == '同仁堂'
            # 空名 → stock_manager 解析
            assert evaluator._resolve_stock_name('600085.SH', '') == '同仁堂'
            # 传入名 == 代码 → 解析
            assert evaluator._resolve_stock_name('600085.SH', '600085.SH') == '同仁堂'
            # 裸代码(无后缀) → 补 .SZ/.SH 解析
            assert evaluator._resolve_stock_name('000002', '') == '万科A'
            # 无法解析 → 返回原代码
            assert evaluator._resolve_stock_name('999999.XY', '') == '999999.XY'
        finally:
            stock_manager.stock_map = _orig

    def test_batch_evaluate_resolves_names(self, isolated_data_dir):
        """批量评估: 缺失名称经 _resolve_stock_name 解析 (含裸代码) 后传给 evaluate_stock"""
        from stock_info import stock_manager
        _orig = dict(stock_manager.stock_map)
        stock_manager.stock_map = {'600085.SH': '同仁堂', '000002.SZ': '万科A'}
        try:
            evaluator = AIEvaluator()
            seen = {}

            async def fake_evaluate(code, name, stock_data, username, strategy='default'):
                seen[code] = name
                return {"stock_code": code, "result": {"level": "推荐", "total_score": 88}}

            with patch.object(AIEvaluator, 'evaluate_stock', side_effect=fake_evaluate):
                results = asyncio.run(evaluator.batch_evaluate(['600085.SH', '000002'], None, 2, 'default'))

            assert seen['600085.SH'] == '同仁堂'
            assert seen['000002'] == '万科A'
            assert results[0]['success'] is True
            assert results[0]['result']['total_score'] == 88
        finally:
            stock_manager.stock_map = _orig


class TestBuiltinEvaluateCoverage:
    """V5.9 T-5.9.1: _builtin_evaluate 纯函数全覆盖 (覆盖率门禁 ai_eval >=50%)"""

    @staticmethod
    def _full_market_data(**over):
        d = {
            "stock_code": "000001.SZ", "stock_name": "平安银行",
            "has_kline": True, "has_fundamentals": True,
            "latest": {"close": 12.8, "high": 12.9, "low": 12.3, "pct_chg": 2.4, "ma5": 12.6, "ma20": 12.2},
            "rsi": 58.5, "macd": {"dif": 0.15, "dea": 0.10, "hist": 0.05},
            "ma_alignment": "多头排列", "pct_5d": 3.2, "pct_20d": 5.1,
            "price_range": {"close": 12.8, "max60": 14.0, "min60": 10.0},
            "volume_analysis": {"vol_ratio": 1.5, "detail": "温和放量"},
            "fundamentals": {"pe": 6.5, "pb": 0.85, "turnover_rate": 3.0, "total_mv": 2.5e11},
        }
        d.update(over)
        return d

    def test_builtin_bullish_full(self):
        evaluator = AIEvaluator()
        r = evaluator._builtin_evaluate('000001.SZ', '平安银行', self._full_market_data())
        assert r["total_score"] >= 55
        assert r["level"] in ("推荐", "谨慎推荐", "中性", "强烈推荐")
        assert "strengths" in r["analysis"]
        assert r["provider"].startswith("内置引擎")

    def test_builtin_bearish(self):
        md = self._full_market_data(
            ma_alignment="空头排列", pct_5d=-4.0, pct_20d=-8.0,
            rsi=25, macd={"dif": -0.2, "dea": -0.1, "hist": -0.3},
            latest={"close": 10.0, "high": 10.3, "low": 9.8, "pct_chg": -3.0, "ma5": 10.5, "ma20": 11.0},
            volume_analysis={"vol_ratio": 0.4, "detail": "缩量"},
            fundamentals={"pe": -5.0, "pb": 0.6},
        )
        evaluator = AIEvaluator()
        r = evaluator._builtin_evaluate('000001.SZ', '平安银行', md)
        assert r["total_score"] < 55
        assert r["level"] == "观望"

    def test_builtin_no_data(self):
        evaluator = AIEvaluator()
        r = evaluator._builtin_evaluate('000001.SZ', '平安银行', {"has_kline": False})
        assert r["total_score"] >= 40
        assert r["level"] in ("中性", "观望", "谨慎推荐")
        assert "离线模式" in r["provider"]
        assert r["dimensions"]["指标共振"] == 50  # 无数据中性兜底 (回归: 曾 UnboundLocalError)

    def test_builtin_extreme_rsi_and_position(self):
        md = self._full_market_data(rsi=85, price_range={"close": 13.5, "max60": 13.8, "min60": 9.0})
        evaluator = AIEvaluator()
        r = evaluator._builtin_evaluate('000001.SZ', '平安银行', md)
        # 高位价格 → 价格位置低分 (score dict 含内部注解 _price_position_pct)
        assert r["dimensions"]["价格位置"] <= 40
        assert "RSI" in r["detailed_report"]

    def test_builtin_high_pe(self):
        md = self._full_market_data(fundamentals={"pe": 150.0, "pb": 2.0})
        evaluator = AIEvaluator()
        r = evaluator._builtin_evaluate('000001.SZ', '平安银行', md)
        assert any("PE" in w for w in r["analysis"]["weaknesses"])

    def test_builtin_volume_ratio_variants(self):
        evaluator = AIEvaluator()
        r1 = evaluator._builtin_evaluate('000001.SZ', 'x', self._full_market_data(volume_analysis={"vol_ratio": 5.0}, latest={"close": 12, "pct_chg": 2.0}))
        r2 = evaluator._builtin_evaluate('000001.SZ', 'x', self._full_market_data(volume_analysis={"vol_ratio": 1.0}, latest={"close": 12, "pct_chg": 0.5}))
        r3 = evaluator._builtin_evaluate('000001.SZ', 'x', self._full_market_data(volume_analysis={"vol_ratio": 2.0}, latest={"close": 12, "pct_chg": -3.0}))
        assert r1["total_score"] >= 10 and r2["total_score"] >= 10 and r3["total_score"] >= 10

    def test_builtin_turnover_variants(self):
        evaluator = AIEvaluator()
        r1 = evaluator._builtin_evaluate('000001.SZ', 'x', self._full_market_data(fundamentals={"turnover_rate": 20.0, "pe": 10}))
        r2 = evaluator._builtin_evaluate('000001.SZ', 'x', self._full_market_data(fundamentals={"turnover_rate": 0.2, "pe": 10}))
        assert r1["total_score"] >= 10 and r2["total_score"] >= 10

    def test_builtin_consensus_neutral(self):
        md = self._full_market_data(rsi=90, macd={"hist": 0.0}, latest={"close": 12, "pct_chg": 0.0})
        evaluator = AIEvaluator()
        r = evaluator._builtin_evaluate('000001.SZ', 'x', md)
        assert r["dimensions"]["指标共振"] == 50

    def test_evaluate_index_cache_hit(self, isolated_data_dir):
        from datetime import datetime as _dt
        evaluator = AIEvaluator()
        today = _dt.now().strftime('%Y-%m-%d')
        evaluator._index_eval_cache["600000_" + today] = {"analysis": "<p>缓存</p>", "suggestion": "观望", "confidence": 50}
        r = evaluator.evaluate_index("600000", "浦发", current_price=10.0, pct_chg=1.0)
        assert r["analysis"] == "<p>缓存</p>"

    def test_evaluate_index_no_data(self, isolated_data_dir):
        evaluator = AIEvaluator()
        with patch.object(AIEvaluator, '_fetch_stock_data', lambda self, code: {"has_kline": False}):
            r = evaluator.evaluate_index("600000", "浦发")
            assert "无法获取" in r["analysis"]
            assert r["suggestion"] == "观望"
            assert r["confidence"] == 0

    def test_evaluate_index_with_data(self, isolated_data_dir):
        evaluator = AIEvaluator()
        md = self._full_market_data()
        with patch.object(AIEvaluator, '_fetch_stock_data', lambda self, code: dict(md)):
            r = evaluator.evaluate_index("600000", "浦发")
            assert "analysis" in r and r["analysis"]
            assert r["confidence"] >= 0


class TestHistoryMixinCoverage:
    """V5.9 T-5.9.1: _history mixin 方法覆盖 (覆盖率门禁 ai_eval >=50%)"""

    def test_history_get_count_delete(self, isolated_data_dir):
        evaluator = AIEvaluator()
        recs = [
            {"id": "1", "stock_code": "600000.SH", "result": {"level": "推荐"}},
            {"id": "2", "stock_code": "000001.SZ", "result": {"level": "中性"}},
        ]
        evaluator._save_history_for("alice", recs)
        assert evaluator.count_history("alice") == 2
        h = evaluator.get_history("alice", limit=1, offset=0)
        assert len(h) == 1
        last = evaluator.get_last_evaluation("alice", "000001.SZ")
        assert last is not None and last["id"] == "2"
        assert evaluator.get_last_evaluation("alice", "999999.SZ") is None
        assert evaluator.delete_history("alice", "1") is True
        assert evaluator.count_history("alice") == 1
        assert evaluator.delete_history("alice", "no-such") is False

    def test_history_load_missing_file(self, isolated_data_dir):
        evaluator = AIEvaluator()
        assert evaluator._load_history_for("ghost") == []

    def test_history_legacy_load(self, isolated_data_dir):
        evaluator = AIEvaluator()
        evaluator._save_history_for("default", [{"id": "1", "stock_code": "600000.SH"}])
        assert evaluator._load_history() == [{"id": "1", "stock_code": "600000.SH"}]

    def test_test_connection_missing_key(self, isolated_data_dir):
        evaluator = AIEvaluator()
        evaluator.config = {"provider": "codingplan"}
        r = evaluator.test_connection()
        assert r["success"] is True
        evaluator.config = {"provider": "custom", "apiKey": ""}
        r = evaluator.test_connection()
        assert r["success"] is False
        assert "请先配置API Key" in r["message"]

    def test_auto_config_roundtrip(self, isolated_data_dir):
        evaluator = AIEvaluator()
        cfg = {"enabled": True, "schedule_type": "daily", "schedule_time": "09:00",
               "selected_strategies": ["multifactor"], "selected_stocks": ["600000.SH"], "push_to_feishu": True}
        assert evaluator.save_auto_config(cfg) is True
        loaded = evaluator.get_auto_config()
        assert loaded["enabled"] is True
        assert loaded["selected_strategies"] == ["multifactor"]
