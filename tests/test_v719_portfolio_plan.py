# -*- coding: utf-8 -*-
"""v7.19 (FR-6): 组合自选等权均分建仓 — 纯计算 / 持久化 / API / 前端结构

覆盖:
- 整手取整 (主板 100 股, 科创板 688 按 200 股)、尾差留现金且不超本金
- 资金不足一手 / 现价不可用 / 重复代码 → skipped 且不参与建仓
- 计划指纹稳定 (顺序无关) 与幂等 (同计划重复确认不重复加仓)
- 覆盖模式清空后重建、追加模式与既有持仓加权合并
- 用户隔离 (A 的计划 B 看不到)
- 前端: portfolio.js 暴露均分建仓入口与接口路径, 组合页有按钮
"""
import os
import sys
import tempfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, 'frontend')


@pytest.fixture
def pp_db():
    """隔离 SQLite 环境 (临时目录, 走真实 init_db + 迁移)"""
    import db
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, 'app.db')
    assert db.init_db() is True
    yield db
    db.DATA_DIR = old_data
    db.DB_FILE = old_file


@pytest.fixture
def pp(pp_db):
    import portfolio_plan
    return portfolio_plan


def _items(*triples):
    return [{'stock_code': c, 'stock_name': n, 'price': p} for c, n, p in triples]


# ─── 1. 纯计算: 整手 / 尾差 / 边界 ──────────────────────────────

class TestBuildPlan:

    def test_equal_split_uses_whole_lots(self, pp):
        plan = pp.build_plan(_items(
            ('000001.SZ', '平安银行', 10.0),
            ('600519.SH', '贵州茅台', 1500.0),
        ), 1000000)
        assert plan['mode'] == 'equal'
        assert plan['position_count'] == 2
        for row in plan['items']:
            assert row['quantity'] % row['lot_size'] == 0
            # 每只不超过等权额度
            assert row['amount'] <= 500000 + 1e-6
        assert plan['total_capital'] == 1000000

    def test_cash_reserve_is_tail_difference(self, pp):
        plan = pp.build_plan(_items(('000001.SZ', '平安银行', 7.77)), 100000)
        row = plan['items'][0]
        # 100000/7.77 = 12870 股 → 128 手 12800 股
        assert row['quantity'] == 12800
        assert plan['invested'] == pytest.approx(12800 * 7.77, abs=0.01)
        assert plan['cash_reserve'] == pytest.approx(100000 - plan['invested'], abs=0.01)
        assert 0 <= plan['cash_reserve'] < row['lot_size'] * 7.77

    def test_never_exceeds_capital(self, pp):
        plan = pp.build_plan(_items(
            ('000001.SZ', '平安银行', 13.33),
            ('300750.SZ', '宁德时代', 188.88),
            ('688111.SH', '金山办公', 301.5),
        ), 300000)
        assert plan['invested'] <= plan['total_capital']
        assert plan['cash_reserve'] >= 0
        # 各只金额之和 == 投入
        assert sum(r['amount'] for r in plan['items']) == pytest.approx(plan['invested'], abs=0.02)

    def test_star_market_lot_is_200(self, pp):
        assert pp.lot_size('688111.SH') == 200
        assert pp.lot_size('689009.SH') == 200
        assert pp.lot_size('600519.SH') == 100
        plan = pp.build_plan(_items(('688111.SH', '金山办公', 300.0)), 100000)
        row = plan['items'][0]
        assert row['lot_size'] == 200
        assert row['quantity'] % 200 == 0

    def test_insufficient_cash_for_one_lot(self, pp):
        plan = pp.build_plan(_items(
            ('600519.SH', '贵州茅台', 1500.0),
            ('000001.SZ', '平安银行', 10.0),
        ), 100000)
        moutai = [r for r in plan['items'] if r['stock_code'] == '600519.SH'][0]
        # 均分 50000, 一手 150000 → 0 手
        assert moutai['lots'] == 0 and moutai['quantity'] == 0
        assert '不足一手' in moutai['note']
        assert plan['position_count'] == 1
        assert any('不足一手' in w for w in plan['warnings'])

    def test_missing_price_goes_to_skipped(self, pp):
        plan = pp.build_plan([
            {'stock_code': '000001.SZ', 'stock_name': '平安银行', 'price': None},
            {'stock_code': '600519.SH', 'stock_name': '贵州茅台', 'price': 0},
            {'stock_code': '300750.SZ', 'stock_name': '宁德时代', 'price': 188.0},
        ], 200000)
        assert [s['stock_code'] for s in plan['skipped']] == ['000001.SZ', '600519.SH']
        assert plan['position_count'] == 1

    def test_duplicate_code_kept_once(self, pp):
        plan = pp.build_plan(_items(
            ('000001.SZ', '平安银行', 10.0),
            ('000001.SZ', '平安银行', 11.0),
        ), 100000)
        assert plan['position_count'] == 1
        assert plan['skipped'][0]['reason'].startswith('重复代码')

    def test_row_weight_contract(self, pp):
        """每行必须同时给出目标权重与**实际权重字段名 weight_actual**。

        v7.19 实机曾出现「占比列全是 —」: 后端叫 actual_weight、前端读 weight_actual,
        字段名不一致时前端只得到 undefined, 不会报错但整列空掉 —— 用契约锁住。
        """
        plan = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0),
                                    ('600519.SH', '贵州茅台', 1500.0)), 1000000)
        for row in plan['items']:
            assert 'weight_actual' in row and 'target_weight' in row
            assert 'actual_weight' not in row
        invested_w = sum(r['weight_actual'] for r in plan['items'])
        assert invested_w == pytest.approx(plan['invested'] / plan['total_capital'], abs=1e-4)

    def test_empty_items_warns(self, pp):
        plan = pp.build_plan([], 1000000)
        assert plan['items'] == [] and plan['position_count'] == 0
        assert plan['warnings'] and '无可建仓标的' in plan['warnings'][0]

    def test_invalid_params_rejected(self, pp):
        with pytest.raises(ValueError):
            pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), 0)
        with pytest.raises(ValueError):
            pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), -5)
        with pytest.raises(ValueError):
            pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), 100000, mode='mcap')

    def test_fingerprint_stable_and_order_independent(self, pp):
        a = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0),
                                 ('600519.SH', '贵州茅台', 1500.0)), 1000000)
        b = pp.build_plan(_items(('600519.SH', '贵州茅台', 1500.0),
                                 ('000001.SZ', '平安银行', 10.0)), 1000000)
        assert pp.plan_fingerprint(a) == pp.plan_fingerprint(b)
        c = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0),
                                 ('600519.SH', '贵州茅台', 1500.0)), 2000000)
        assert pp.plan_fingerprint(c) != pp.plan_fingerprint(a)


# ─── 2. 持久化: 保存 / 应用 / 幂等 / 隔离 ───────────────────────

class TestPlanStore:

    def test_save_and_get_plan(self, pp_db):
        import portfolio_plan as pp
        plan = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), 100000)
        plan_id = pp.save_plan('alice', plan)
        got = pp.get_plan('alice', plan_id)
        assert got['id'] == plan_id and got['status'] == 'preview'
        assert len(got['items']) == 1
        assert got['items'][0]['stock_code'] == '000001.SZ'
        assert got['items'][0]['quantity'] == 10000

    def test_plan_isolated_between_users(self, pp_db):
        import portfolio_plan as pp
        plan = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), 100000)
        plan_id = pp.save_plan('alice', plan)
        assert pp.get_plan('bob', plan_id) is None
        assert pp.list_plans('bob') == []

    def test_apply_append_merges_existing(self, pp_db):
        import portfolio_plan as pp
        pp_db.portfolio_upsert_position('alice', '600519.SH', '贵州茅台', 1000.0, 100)
        plan = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), 50000)
        res = pp.apply_plan('alice', plan, overwrite=False)
        assert res == {'updated': 1, 'cleared': 0, 'write_mode': 'append'}
        rows = {p['stock_code']: p for p in pp_db.portfolio_get_positions('alice')}
        assert set(rows) == {'000001.SZ', '600519.SH'}  # 既有持仓保留
        assert rows['000001.SZ']['quantity'] == 5000

    def test_apply_overwrite_clears_first(self, pp_db):
        import portfolio_plan as pp
        pp_db.portfolio_upsert_position('alice', '600519.SH', '贵州茅台', 1000.0, 100)
        plan = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), 50000)
        res = pp.apply_plan('alice', plan, overwrite=True)
        assert res['cleared'] == 1 and res['write_mode'] == 'replace'
        rows = pp_db.portfolio_get_positions('alice')
        assert [p['stock_code'] for p in rows] == ['000001.SZ']

    def test_find_applied_plan(self, pp_db):
        import portfolio_plan as pp
        plan = pp.build_plan(_items(('000001.SZ', '平安银行', 10.0)), 100000)
        plan_id = pp.save_plan('alice', plan)
        fp = pp.plan_fingerprint(plan)
        assert pp.find_applied_plan('alice', fp) is None      # 仅 preview 不算已建仓
        pp.mark_applied('alice', plan_id)
        assert pp.find_applied_plan('alice', fp) == plan_id
        assert pp.find_applied_plan('bob', fp) is None


# ─── 3. API: 预览 / 确认 / 幂等 / 覆盖 ──────────────────────────

@pytest.fixture
def plan_app(pp_db, monkeypatch):
    """独立 FastAPI app; 行情与股票名全部 mock (不触网)"""
    from auth import get_current_active_user
    from fastapi import FastAPI
    import api.v1.portfolio as api_pf
    import realtime_quotes
    import stock_info

    prices = {
        '000001.SZ': 10.0,
        '600519.SH': 1500.0,
        '688111.SH': 300.0,
    }

    def _fetch(self, codes):
        return ({c: {'price': prices[c], 'pre_close': prices[c], 'change_pct': 0.0}
                 for c in codes if c in prices}, False)

    monkeypatch.setattr(realtime_quotes.RealtimeQuoteSource, 'fetch_quotes', _fetch, raising=True)
    # 股票名服务在别的用例里可能被替换成精简假对象 → raising=False 保证可注入
    monkeypatch.setattr(stock_info.stock_manager, 'get_name', lambda code: '', raising=False)

    fast = FastAPI()
    fast.include_router(api_pf.router)
    fast.dependency_overrides[get_current_active_user] = lambda: {'username': 'alice'}
    return fast


@pytest.fixture
def plan_client(plan_app):
    from fastapi.testclient import TestClient
    return TestClient(plan_app)


class TestPlanApi:

    def test_preview_uses_batch_quotes(self, plan_client):
        r = plan_client.post('/portfolio/plans/preview', json={
            'codes': [{'stock_code': '000001.SZ', 'stock_name': '平安银行'},
                      {'stock_code': '600519.SH', 'stock_name': '贵州茅台'}],
            'total_capital': 1000000,
        })
        data = r.json()
        assert r.status_code == 200 and data['success'] is True
        plan = data['plan']
        assert plan['position_count'] == 2
        assert data['degraded'] is False
        # 两只各 50 万: 平安 10 元 → 500 手; 茅台 1500 元 → 3 手
        qty = {r['stock_code']: r['quantity'] for r in plan['items']}
        assert qty['000001.SZ'] == 50000
        assert qty['600519.SH'] == 300
        assert plan['cash_reserve'] > 0

    def test_preview_reads_watchlist_by_default(self, plan_client, pp_db):
        pp_db.watchlist_set('alice', '000001.SZ', '平安银行')
        pp_db.watchlist_set('alice', '688111.SH', '金山办公')
        data = plan_client.post('/portfolio/plans/preview',
                                json={'total_capital': 400000}).json()
        codes = sorted(r['stock_code'] for r in data['plan']['items'])
        assert codes == ['000001.SZ', '688111.SH']
        star = [r for r in data['plan']['items'] if r['stock_code'] == '688111.SH'][0]
        assert star['quantity'] % 200 == 0

    def test_preview_rejects_bad_capital(self, plan_client):
        r = plan_client.post('/portfolio/plans/preview', json={
            'codes': [{'stock_code': '000001.SZ'}], 'total_capital': 0})
        assert r.status_code == 400
        r = plan_client.post('/portfolio/plans/preview', json={
            'codes': [{'stock_code': '000001.SZ'}], 'total_capital': -1})
        assert r.status_code == 400

    def test_create_writes_positions(self, plan_client, pp_db):
        r = plan_client.post('/portfolio/plans', json={
            'codes': [{'stock_code': '000001.SZ', 'stock_name': '平安银行'}],
            'total_capital': 100000,
        })
        data = r.json()
        assert r.status_code == 200 and data['success'] is True
        assert data['written'] == 1
        pos = pp_db.portfolio_get_positions('alice')
        assert len(pos) == 1 and pos[0]['quantity'] == 10000
        assert pos[0]['cost_price'] == 10.0
        assert data['plan_id'] > 0
        # 计划快照已置 applied
        import portfolio_plan as pp
        assert pp.get_plan('alice', data['plan_id'])['status'] == 'applied'

    def test_create_is_idempotent(self, plan_client, pp_db):
        body = {'codes': [{'stock_code': '000001.SZ', 'stock_name': '平安银行'}],
                'total_capital': 100000}
        plan_client.post('/portfolio/plans', json=body)
        second = plan_client.post('/portfolio/plans', json=body).json()
        assert second['already_applied'] is True and second['written'] == 0
        pos = pp_db.portfolio_get_positions('alice')
        assert pos[0]['quantity'] == 10000  # 未翻倍

    def test_create_overwrite_replaces(self, plan_client, pp_db):
        pp_db.portfolio_upsert_position('alice', '600519.SH', '贵州茅台', 1000.0, 100)
        plan_client.post('/portfolio/plans', json={
            'codes': [{'stock_code': '000001.SZ', 'stock_name': '平安银行'}],
            'total_capital': 100000, 'overwrite': True,
        })
        pos = pp_db.portfolio_get_positions('alice')
        assert [p['stock_code'] for p in pos] == ['000001.SZ']

    def test_create_rejects_no_position(self, plan_client):
        r = plan_client.post('/portfolio/plans', json={
            'codes': [{'stock_code': '600519.SH', 'stock_name': '贵州茅台'}],
            'total_capital': 1000,
        })
        assert r.status_code == 400

    def test_plans_listing(self, plan_client):
        plan_client.post('/portfolio/plans', json={
            'codes': [{'stock_code': '000001.SZ', 'stock_name': '平安银行'}],
            'total_capital': 100000,
        })
        data = plan_client.get('/portfolio/plans').json()
        assert data['success'] is True and data['count'] == 1
        assert data['plans'][0]['status'] == 'applied'
        assert data['plans'][0]['position_count'] == 1


# ─── 4. 前端接线 (结构断言) ─────────────────────────────────────

class TestPlanFrontend:

    def _read(self, *parts):
        with open(os.path.join(FRONTEND, *parts), encoding='utf-8') as f:
            return f.read()

    def test_portfolio_js_has_plan_entry(self):
        src = self._read('js', 'portfolio.js')
        assert '/api/portfolio/plans/preview' in src
        assert "'/api/portfolio/plans'" in src
        assert 'openPlanDialog' in src and 'previewPlan' in src and 'applyPlan' in src
        assert '均分建仓' in src
        assert 'style="' not in src  # 无内联 style

    def test_portfolio_page_has_button_and_table(self):
        src = self._read('js', 'components', 'ai', 'view-part2.js')
        assert '均分建仓' in src
        assert 'planVisible' in src
        assert 'row.weight_actual' in src   # 与后端字段名一致 (见 test_row_weight_contract)
        assert '留作现金' in src
