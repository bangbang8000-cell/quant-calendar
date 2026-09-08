# -*- coding: utf-8 -*-
"""
v3.22 (I3A): 策略变体测试 — clone / SelectionSpec / AI 交易码 + 矩阵内硬约束
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope='module')
def admin_client():
    from main_new import app
    from auth import create_access_token
    token = create_access_token({'sub': 'admin', 'role': 'admin'})
    client = TestClient(app)
    client.headers.update({'Authorization': 'Bearer ' + token})
    return client


def test_clone_creates_variant(admin_client):
    """clone 复制内置策略为 variant(独立 sid + type=母本)"""
    r = admin_client.post('/api/strategies/multi_factor/clone',
                          json={'name': '多因子-测试变体'})
    assert r.status_code == 200, r.text
    data = (r.json().get('data') or {})
    assert data.get('sid', '').startswith('multi_factor_')
    assert data.get('type') == 'multi_factor'
    assert data.get('name') == '多因子-测试变体'


def test_variants_list(admin_client):
    """variants 列表包含已建 variant"""
    r = admin_client.get('/api/strategies/variants')
    assert r.status_code == 200, r.text
    variants = (r.json().get('data') or {}).get('variants') or []
    assert any(v.get('id', '').startswith('multi_factor_') for v in variants)


def test_selection_spec_get_defaults(admin_client):
    """selection-spec 默认值: stock_count=10, exclude_st=True"""
    r = admin_client.get('/api/strategies/multi_factor/selection-spec')
    assert r.status_code == 200, r.text
    spec = (r.json().get('data') or {}).get('spec') or {}
    assert spec.get('stock_count') == 10
    assert spec.get('exclude_st') is True


def test_selection_spec_put_roundtrip(admin_client):
    """selection-spec 保存后读回一致(非法键被清理)"""
    r = admin_client.put('/api/strategies/multi_factor/selection-spec',
                         json={'spec': {'stock_count': 8, 'industry_scope': ['电子'],
                                        'exclude_st': False, 'bogus_key': 1}})
    assert r.status_code == 200, r.text
    spec = (r.json().get('data') or {}).get('spec') or {}
    assert spec.get('stock_count') == 8
    assert spec.get('industry_scope') == ['电子']
    assert 'bogus_key' not in spec


def test_check_matrix_subset_pure():
    """硬约束纯函数: 矩阵内通过, 矩阵外拦截"""
    import strategy_variant as sv
    matrix = ['600001.SH', '000002.SZ', '300003.SZ']
    assert sv._check_matrix_subset(['600001.SH'], matrix) == []
    assert sv._check_matrix_subset(['600001.SH', '999999.SZ'], matrix) == ['999999.SZ']


def test_extract_order_symbols_pure():
    """从代码提取交易标的(字符串字面量含 .SH/.SZ)"""
    import strategy_variant as sv
    code = """
def handle_data(context, data):
    order_target_value('600001.SH', 10000)
    order_target_value('000002.SZ', 20000)
    print('no symbol')
"""
    syms = sv._extract_order_symbols(code)
    assert '600001.SH' in syms and '000002.SZ' in syms
    assert len(syms) == 2


def test_generate_ai_trade_code_empty_matrix(admin_client):
    """无持仓矩阵时返回 400"""
    import strategy_variant as sv
    sv._save_all({})  # 清空 spec 不影响
    # 直接调函数(无 holdings 文件) 应抛 ValueError
    with pytest.raises(ValueError):
        sv.generate_ai_trade_code('multi_factor_zz')


def test_generate_ai_trade_code_matrix_subset_violation(admin_client, monkeypatch):
    """AI 生成代码含矩阵外股票 -> 硬约束拦截 400"""
    import strategy_variant as sv
    matrix = ['600001.SH', '000002.SZ', '300003.SZ']

    def fake_generate_review(prompt, system_prompt=None, max_tokens=1024):
        return """
def initialize(context):
    pass
def handle_data(context, data):
    order_target_value('600001.SH', 10000)
    order_target_value('999999.SZ', 5000)
"""

    monkeypatch.setattr('ai_evaluator.ai_evaluator.generate_review', fake_generate_review)
    with pytest.raises(ValueError) as excinfo:
        sv.generate_ai_trade_code('multi_factor_x', matrix=matrix)
    assert '矩阵外' in str(excinfo.value)


def test_generate_ai_trade_code_ok(admin_client, monkeypatch):
    """矩阵内标的通过生成(校验无违规)"""
    import strategy_variant as sv
    matrix = ['600001.SH', '000002.SZ', '300003.SZ']

    def fake_generate_review(prompt, system_prompt=None, max_tokens=1024):
        return """
def initialize(context):
    pass
def handle_data(context, data):
    order_target_value('600001.SH', 10000)
    order_target_value('000002.SZ', 20000)
    order_target_value('300003.SZ', 30000)
"""

    monkeypatch.setattr('ai_evaluator.ai_evaluator.generate_review', fake_generate_review)
    result = sv.generate_ai_trade_code('multi_factor_y', matrix=matrix)
    assert result.get('violations') == []
    assert 'order_target_value' in result.get('code', '')
    assert len(result.get('matrix', [])) <= 10


def test_ai_trade_code_endpoint_no_matrix(admin_client):
    """API: 无矩阵时 ai-trade-code 返回 400"""
    r = admin_client.post('/api/strategies/nonexistent_sid/ai-trade-code', json={})
    assert r.status_code == 400, r.text
