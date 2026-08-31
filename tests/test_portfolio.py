# -*- coding: utf-8 -*-
"""
v3.17.8 (FR-3.17.5): 组合/模拟持仓 — 后端数据层/API + 前端一致性回归 (TDD)
- 持仓 CRUD / 同股累加 / 加权平均成本
- 买卖调仓 (买入加权 / 卖出减仓 / 数量 ≤0 自动删除)
- 按用户隔离 (A 看不到 B)
- 实时盈亏计算 (fake close/pct_chg) 与数据不可达优雅降级
- 收益曲线组装 (历史 close × 数量)
- 前端: portfolio.js 含 /api/portfolio 与「组合」文案, 无内联 style
"""
import os
import sys
import tempfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

FRONTEND_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'frontend')


@pytest.fixture
def pf_db():
    """隔离的 SQLite 环境 (临时目录)"""
    import db
    old_data = db.DATA_DIR
    old_file = db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    yield db
    db.DATA_DIR = old_data
    db.DB_FILE = old_file


@pytest.fixture
def pf(pf_db):
    import api.v1.portfolio as pfmod
    yield pfmod


# ─── 数据层: 持仓 CRUD / 累加 / 隔离 ─────────────────────────────

class TestPositionDb:
    def test_db_upsert_new_position(self, pf_db):
        pf_db.portfolio_upsert_position('alice', '000001.SZ', '平安银行', 10, 100)
        rows = pf_db.portfolio_get_positions('alice')
        assert len(rows) == 1
        assert rows[0]['stock_code'] == '000001.SZ'
        assert rows[0]['quantity'] == 100
        assert rows[0]['cost_price'] == 10

    def test_db_same_code_accumulates_weighted_cost(self, pf_db):
        pf_db.portfolio_upsert_position('alice', '000001.SZ', '平安银行', 10, 100)
        pf_db.portfolio_upsert_position('alice', '000001.SZ', '平安银行', 20, 100)
        rows = pf_db.portfolio_get_positions('alice')
        assert len(rows) == 1
        # 数量累加 200, 加权成本 (10*100+20*100)/200 = 15
        assert rows[0]['quantity'] == 200
        assert abs(rows[0]['cost_price'] - 15) < 1e-6

    def test_db_delete_position(self, pf_db):
        pf_db.portfolio_upsert_position('alice', '000001.SZ', '', 10, 100)
        assert pf_db.portfolio_delete_position('alice', '000001.SZ') is True
        assert pf_db.portfolio_get_positions('alice') == []
        assert pf_db.portfolio_delete_position('alice', '000001.SZ') is False

    def test_db_isolation(self, pf_db):
        pf_db.portfolio_upsert_position('alice', '000001.SZ', '平安银行', 10, 100)
        pf_db.portfolio_upsert_position('bob', '600036.SH', '招商银行', 30, 50)
        alice = pf_db.portfolio_get_positions('alice')
        bob = pf_db.portfolio_get_positions('bob')
        assert [p['stock_code'] for p in alice] == ['000001.SZ']
        assert [p['stock_code'] for p in bob] == ['600036.SH']


# ─── 数据层: 调仓 ────────────────────────────────────────────────

class TestTradeDb:
    def test_db_trade_buy_weighted_cost(self, pf_db):
        pf_db.portfolio_apply_trade('alice', '000001.SZ', '平安银行', 'buy', 10, 100)
        pf_db.portfolio_apply_trade('alice', '000001.SZ', '平安银行', 'buy', 30, 100)
        rows = pf_db.portfolio_get_positions('alice')
        assert rows[0]['quantity'] == 200
        assert abs(rows[0]['cost_price'] - 20) < 1e-6  # (10*100+30*100)/200

    def test_db_trade_sell_reduces(self, pf_db):
        pf_db.portfolio_apply_trade('alice', '000001.SZ', '', 'buy', 10, 200)
        effect = pf_db.portfolio_apply_trade('alice', '000001.SZ', '', 'sell', 12, 80)
        assert effect == 'sell'
        rows = pf_db.portfolio_get_positions('alice')
        assert rows[0]['quantity'] == 120
        assert rows[0]['cost_price'] == 10  # 卖出不改成本

    def test_db_trade_sell_to_zero_auto_delete(self, pf_db):
        pf_db.portfolio_apply_trade('alice', '000001.SZ', '', 'buy', 10, 100)
        effect = pf_db.portfolio_apply_trade('alice', '000001.SZ', '', 'sell', 12, 100)
        assert effect == 'sold_out'
        assert pf_db.portfolio_get_positions('alice') == []

    def test_db_trade_sell_more_than_held_auto_delete(self, pf_db):
        pf_db.portfolio_apply_trade('alice', '000001.SZ', '', 'buy', 10, 50)
        effect = pf_db.portfolio_apply_trade('alice', '000001.SZ', '', 'sell', 12, 200)
        assert effect == 'sold_out'
        assert pf_db.portfolio_get_positions('alice') == []

    def test_db_trade_record_desc_order(self, pf_db):
        pf_db.portfolio_add_trade('alice', '000001.SZ', '平安银行', 'buy', 10, 100, '2026-08-01', '建仓')
        pf_db.portfolio_add_trade('alice', '000001.SZ', '平安银行', 'sell', 12, 50, '2026-08-02', '减仓')
        trades = pf_db.portfolio_list_trades('alice')
        assert len(trades) == 2
        assert trades[0]['action'] == 'sell'  # 倒序
        assert trades[0]['trade_date'] == '2026-08-02'
        assert trades[1]['note'] == '建仓'

    def test_db_trade_default_date(self, pf_db):
        from datetime import datetime
        pf_db.portfolio_add_trade('alice', '000001.SZ', '', 'buy', 10, 100, '')
        trades = pf_db.portfolio_list_trades('alice')
        assert trades[0]['trade_date'] == datetime.now().strftime('%Y-%m-%d')


# ─── API: 端点 + 鉴权 + 盈亏 + 降级 ─────────────────────────────

@pytest.fixture
def app(pf, monkeypatch):
    """独立 FastAPI app + 默认数据可达 mock (不触网)"""
    from auth import get_current_active_user
    from fastapi import FastAPI
    from fastapi.testclient import TestClient

    def _daily_basic(ts_code):
        return {'close': 12.8, 'pct_chg': 2.4}

    def _kline(ts_code, period='daily', limit=2):
        return {'data': [['2026-08-14', 12.5, 12.5], ['2026-08-15', 12.5, 12.8]]}

    monkeypatch.setattr(pf.data_source_manager, 'get_daily_basic', _daily_basic)
    monkeypatch.setattr(pf.data_source_manager, 'get_kline_data', _kline)

    fast = FastAPI()
    fast.include_router(pf.router)
    fast.dependency_overrides[get_current_active_user] = lambda: {"username": "alice"}
    return fast


@pytest.fixture
def client(app):
    from fastapi.testclient import TestClient
    return TestClient(app)


class TestPortfolioApi:
    def test_api_requires_auth(self, app):
        from auth import get_current_active_user
        from fastapi.testclient import TestClient
        app.dependency_overrides.pop(get_current_active_user, None)
        c = TestClient(app)
        assert c.get('/portfolio').status_code in (401, 403)
        assert c.post('/portfolio/positions', json={}).status_code in (401, 403)

    def test_api_add_and_list_position(self, client):
        r = client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        assert r.json()['success'] is True
        r = client.get('/portfolio')
        data = r.json()
        assert data['success'] is True
        assert data['count'] == 1
        assert data['positions'][0]['stock_code'] == '000001.SZ'

    def test_api_same_code_accumulates(self, client):
        client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 20, 'quantity': 100})
        data = client.get('/portfolio').json()
        assert data['count'] == 1
        assert data['positions'][0]['quantity'] == 200
        assert abs(data['positions'][0]['cost_price'] - 15) < 1e-6

    def test_api_delete_position(self, client):
        client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        r = client.delete('/portfolio/positions/000001.SZ')
        assert r.json()['success'] is True
        assert client.get('/portfolio').json()['count'] == 0

    def test_api_validation_errors(self, client):
        r = client.post('/portfolio/positions', json={'stock_code': '', 'cost_price': 10, 'quantity': 1})
        assert r.status_code == 400
        r = client.post('/portfolio/positions', json={'stock_code': '000001.SZ', 'cost_price': -1, 'quantity': 1})
        assert r.status_code == 400
        r = client.post('/portfolio/trades', json={'stock_code': '000001.SZ', 'action': 'hold', 'price': 10, 'quantity': 1})
        assert r.status_code == 400

    def test_api_pnl_with_fake_quote(self, client):
        client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        data = client.get('/portfolio').json()
        p = data['positions'][0]
        # close=12.8, pct_chg=2.4
        assert p['close'] == 12.8
        assert p['market_value'] == 1280.0
        assert abs(p['float_profit'] - 280.0) < 0.01
        assert abs(p['float_profit_pct'] - 28.0) < 0.01
        assert abs(p['day_profit'] - 30.0) < 0.01
        assert p['data_available'] is True
        s = data['summary']
        assert s['total_cost'] == 1000.0
        assert s['total_market_value'] == 1280.0
        assert abs(s['float_profit'] - 280.0) < 0.01
        assert abs(s['day_profit'] - 30.0) < 0.01
        assert abs(s['cumulative_profit'] - 280.0) < 0.01
        assert s['note'] == ''

    def test_api_data_unavailable_graceful(self, app, pf, monkeypatch):
        from fastapi.testclient import TestClient
        monkeypatch.setattr(pf.data_source_manager, 'get_daily_basic', lambda ts_code: None)
        monkeypatch.setattr(pf.data_source_manager, 'get_kline_data',
                            lambda ts_code, period='daily', limit=2: None)
        c = TestClient(app)
        c.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        data = c.get('/portfolio').json()
        p = data['positions'][0]
        assert p['close'] is None
        assert p['market_value'] is None
        assert p['float_profit'] is None
        assert p['data_available'] is False
        s = data['summary']
        assert s['total_market_value'] is None
        assert s['note'] == '数据暂不可用'

    def test_api_trade_buy_accumulate_and_sell(self, client):
        client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        r = client.post('/portfolio/trades', json={
            'stock_code': '000001.SZ', 'action': 'buy', 'price': 20, 'quantity': 100})
        assert r.json()['effect'] == 'buy'
        pos = client.get('/portfolio').json()['positions'][0]
        assert pos['quantity'] == 200
        assert abs(pos['cost_price'] - 15) < 1e-6
        r = client.post('/portfolio/trades', json={
            'stock_code': '000001.SZ', 'action': 'sell', 'price': 22, 'quantity': 80})
        assert r.json()['effect'] == 'sell'
        pos = client.get('/portfolio').json()['positions'][0]
        assert pos['quantity'] == 120
        assert abs(pos['cost_price'] - 15) < 1e-6

    def test_api_trade_sell_to_zero_deletes(self, client):
        client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        r = client.post('/portfolio/trades', json={
            'stock_code': '000001.SZ', 'action': 'sell', 'price': 12, 'quantity': 100})
        assert r.json()['effect'] == 'sold_out'
        assert client.get('/portfolio').json()['count'] == 0

    def test_api_trades_listing(self, client):
        client.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        client.post('/portfolio/trades', json={
            'stock_code': '000001.SZ', 'action': 'buy', 'price': 10, 'quantity': 100,
            'trade_date': '2026-08-01', 'note': '建仓'})
        client.post('/portfolio/trades', json={
            'stock_code': '000001.SZ', 'action': 'sell', 'price': 12, 'quantity': 20,
            'trade_date': '2026-08-02', 'note': '止盈'})
        data = client.get('/portfolio/trades').json()
        assert data['count'] == 2
        assert data['trades'][0]['action'] == 'sell'
        assert data['trades'][0]['note'] == '止盈'

    def test_api_user_isolation(self, app):
        from auth import get_current_active_user
        from fastapi.testclient import TestClient
        c = TestClient(app)
        # alice 建仓
        c.post('/portfolio/positions', json={
            'stock_code': '000001.SZ', 'stock_name': '平安银行', 'cost_price': 10, 'quantity': 100})
        # bob 看不到 alice
        app.dependency_overrides[get_current_active_user] = lambda: {"username": "bob"}
        data = c.get('/portfolio').json()
        assert data['count'] == 0
        # bob 建自己的仓
        c.post('/portfolio/positions', json={
            'stock_code': '600036.SH', 'stock_name': '招商银行', 'cost_price': 30, 'quantity': 50})
        app.dependency_overrides[get_current_active_user] = lambda: {"username": "alice"}
        assert c.get('/portfolio').json()['count'] == 1

    def test_api_equity_curve_builds(self, app, pf, monkeypatch):
        from fastapi.testclient import TestClient

        def _kline(ts_code, period='daily', limit=30):
            if ts_code == '000001.SZ':
                bars = [['2026-08-01', 9, 10], ['2026-08-02', 10, 11], ['2026-08-03', 11, 12]]
            else:
                bars = [['2026-08-01', 5, 5], ['2026-08-02', 5, 5], ['2026-08-03', 5, 6]]
            return {'data': bars}

        monkeypatch.setattr(pf.data_source_manager, 'get_kline_data', _kline)
        c = TestClient(app)
        c.post('/portfolio/positions', json={'stock_code': '000001.SZ', 'stock_name': 'A', 'cost_price': 10, 'quantity': 100})
        c.post('/portfolio/positions', json={'stock_code': '600036.SH', 'stock_name': 'B', 'cost_price': 30, 'quantity': 200})
        r = c.get('/portfolio/equity_curve?days=30')
        data = r.json()
        assert data['success'] is True
        assert data['dates'] == ['2026-08-01', '2026-08-02', '2026-08-03']
        # 100*10+200*5=2000 ; 100*11+200*5=2100 ; 100*12+200*6=2400
        assert data['values'] == [2000.0, 2100.0, 2400.0]
        assert data['equity'] == [100.0, 105.0, 120.0]
        assert data['note'] == ''

    def test_api_equity_curve_unavailable(self, app, pf, monkeypatch):
        from fastapi.testclient import TestClient
        monkeypatch.setattr(pf.data_source_manager, 'get_kline_data',
                            lambda ts_code, period='daily', limit=30: None)
        c = TestClient(app)
        c.post('/portfolio/positions', json={'stock_code': '000001.SZ', 'stock_name': 'A', 'cost_price': 10, 'quantity': 100})
        data = c.get('/portfolio/equity_curve?days=30').json()
        assert data['dates'] == []
        assert data['values'] == []
        assert data['equity'] == []
        assert data['note'] == '数据暂不可用'

    def test_api_empty_portfolio(self, client):
        data = client.get('/portfolio').json()
        assert data['count'] == 0
        assert data['positions'] == []
        s = data['summary']
        assert s['total_cost'] == 0.0
        assert s['note'] == ''
        curve = client.get('/portfolio/equity_curve?days=30').json()
        assert curve['count'] == 0


# ─── 前端一致性 ─────────────────────────────────────────────────

def _read_frontend(rel: str) -> str:
    with open(os.path.join(FRONTEND_ROOT, rel.replace('/', os.sep)), encoding='utf-8') as f:
        return f.read()


def test_frontend_portfolio_module_endpoint_and_text():
    """FR-3.17.5: portfolio.js 应注册 __quantModules.portfolio 域, 含 /api/portfolio 与「组合」文案"""
    src = _read_frontend('js/portfolio.js')
    assert 'window.__quantModules.portfolio' in src, "应注册 portfolio 域模块"
    assert 'create(deps)' in src, "应遵循 create(deps) 工厂模式"
    assert '/api/portfolio' in src, "应调用 /api/portfolio 端点"
    assert '组合' in src, "应含「组合」文案"


def test_frontend_portfolio_no_inline_style():
    """FR-3.17.5: portfolio.js 不得使用内联 style（走 CSS 类 + tokens 变量）"""
    src = _read_frontend('js/portfolio.js')
    assert 'style="' not in src, "portfolio.js 不应含内联 style 属性"
    assert 'style={' not in src, "portfolio.js 不应含绑定式内联 style"


def test_frontend_portfolio_page_entry():
    """FR-3.17.5: ai-page 应含「组合」入口/子页, 新增组合视图片段无内联 style"""
    page = _read_frontend('js/components/ai-page.js')
    assert "currentSubPage === 'portfolio'" in page, "应支持 portfolio 子页"
    assert '组合持仓' in page, "应含「组合持仓」入口文案"
    assert '暂无持仓，添加一只股票开始跟踪' in page, "应含持仓空态文案"
    # 组合视图代码段 (标记起点 → 模板结尾) 无内联 style
    seg = page[page.index('v3.17.8 (FR-3.17.5): 组合/模拟持仓视图 代码起点'):]
    assert 'style="' not in seg, "组合视图模板不应含内联 style 属性"
    assert 'style={' not in seg, "组合视图模板不应含绑定式内联 style"
    assert 'portfolioEquityChart' in seg, "应含收益曲线容器"


def test_frontend_portfolio_loaded_in_html():
    """FR-3.17.5: index.html 应加载 portfolio.js 且早于 app-logic.js"""
    idx = _read_frontend('index.html')
    assert 'js/portfolio.js' in idx, "index.html 应加载 portfolio.js"
    assert idx.index('portfolio.js') < idx.index('app-logic.js'), "portfolio.js 应早于 app-logic.js 加载"


def test_frontend_portfolio_css_classes():
    """FR-3.17.5: themes.css 应定义 portfolio-* 类"""
    css = _read_frontend('css/themes.css')
    for cls in ('.portfolio-summary-row', '.portfolio-summary-item', '.portfolio-table',
                '.portfolio-equity-chart', '.portfolio-trade-item', '.portfolio-empty'):
        assert cls in css, f"themes.css 应定义 {cls}"


def test_frontend_portfolio_chart_renderer():
    """FR-3.17.5: charts.js 应提供组合折线渲染 (复用回测渲染模式)"""
    charts = _read_frontend('js/charts.js')
    for fn in ('renderPortfolioTo', 'redrawPortfolio', 'disposePortfolio'):
        assert fn in charts, f"charts.js 应提供 {fn}"
