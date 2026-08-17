# -*- coding: utf-8 -*-
"""
盘中增强实时化（FR-3.17.7 实时化，可选）— WS 实时报价后端单测

覆盖:
- build_quote_payload 纯函数: 字段完整性 / 涨速·量比·涨跌幅计算 / 空数据 / degraded 降级
- parse_subscribe 订阅校验: 规范化 / 非法代码 / 超限 / 空订阅 / 非列表
- WS 端点鉴权: 无 token / 坏 token 拒绝
- WS 端点: mock 数据源不可达 → degraded 空数据推送；mock 可达 → 报价推送；空订阅错误帧
"""
import os
import sys
import time

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import config
config.settings.SECRET_KEY = 'test-secret-ws'
config.settings.ALGORITHM = 'HS256'

from auth import create_access_token  # noqa: E402
from api.v1 import market_ws  # noqa: E402
from realtime_quotes import (  # noqa: E402
    RealtimeQuoteSource,
    WARN_RISE_SPEED_THRESHOLD,
    WARN_VOLUME_RATIO_THRESHOLD,
    build_quote_payload,
    parse_subscribe,
)

STOCKS = [
    {'code': '600519.SH', 'name': '贵州茅台'},
    {'code': '000001.SZ', 'name': '平安银行'},
]


def _raw_quote(price=1500.0, pre_close=1480.0, prev_price=1490.0,
               volume=1_500_000, avg_volume_5d=500_000):
    return {
        'price': price,
        'pre_close': pre_close,
        'prev_price': prev_price,
        'volume': volume,
        'avg_volume_5d': avg_volume_5d,
    }


# ─── build_quote_payload: 字段完整性 + 计算 ────────────────────────────

def test_build_quote_payload_fields_complete():
    """字段完整性: 每条报价含 code/name/price/change_pct/volume_ratio/rise_speed"""
    quotes = {'600519.SH': _raw_quote()}
    payload = build_quote_payload(STOCKS, quotes)
    assert payload['type'] == 'quotes'
    assert payload['degraded'] is False
    assert len(payload['data']) == 1
    item = payload['data'][0]
    for field in ('code', 'name', 'price', 'change_pct', 'volume_ratio', 'rise_speed'):
        assert field in item, f'缺少字段 {field}'


def test_build_quote_payload_change_pct_computed():
    """涨跌幅由 price/pre_close 推算: (1500-1480)/1480*100 ≈ 1.35"""
    quotes = {'600519.SH': _raw_quote(price=1500.0, pre_close=1480.0)}
    item = build_quote_payload(STOCKS, quotes)['data'][0]
    assert item['change_pct'] == pytest.approx(1.35, abs=0.01)


def test_build_quote_payload_rise_speed_computed():
    """涨速 = (price-prev_price)/prev_price*100: (1500-1490)/1490*100 ≈ 0.67"""
    quotes = {'600519.SH': _raw_quote(price=1500.0, prev_price=1490.0)}
    item = build_quote_payload(STOCKS, quotes)['data'][0]
    assert item['rise_speed'] == pytest.approx(0.67, abs=0.01)


def test_build_quote_payload_volume_ratio_computed():
    """量比 = volume/avg_volume_5d: 1500000/500000 = 3.0"""
    quotes = {'600519.SH': _raw_quote(volume=1_500_000, avg_volume_5d=500_000)}
    item = build_quote_payload(STOCKS, quotes)['data'][0]
    assert item['volume_ratio'] == pytest.approx(3.0)


def test_build_quote_payload_missing_metric_is_none():
    """缺 pre_close/prev_price/avg 时对应字段为 None（不报错）"""
    quotes = {'600519.SH': {'price': 1500.0}}
    item = build_quote_payload(STOCKS, quotes)['data'][0]
    assert item['price'] == 1500.0
    assert item['change_pct'] is None
    assert item['rise_speed'] is None
    assert item['volume_ratio'] is None


# ─── build_quote_payload: 空数据 / 降级 ────────────────────────────────

def test_build_quote_payload_empty_map_degraded():
    """quotes_map 为空 → degraded=True + 空 data"""
    payload = build_quote_payload(STOCKS, {})
    assert payload['degraded'] is True
    assert payload['data'] == []


def test_build_quote_payload_degraded_flag_drops_data():
    """degraded=True 即使有报价也返回空 data"""
    quotes = {'600519.SH': _raw_quote()}
    payload = build_quote_payload(STOCKS, quotes, degraded=True)
    assert payload['degraded'] is True
    assert payload['data'] == []


def test_build_quote_payload_partial_match():
    """仅部分股票有报价 → 只纳入有报价的"""
    quotes = {'600519.SH': _raw_quote()}
    payload = build_quote_payload(STOCKS, quotes)
    assert [d['code'] for d in payload['data']] == ['600519.SH']


# ─── parse_subscribe 订阅校验 ─────────────────────────────────────────

def test_parse_subscribe_valid_normalization():
    """'600519'→600519.SH, '000001'→000001.SZ；去重"""
    stocks, err = parse_subscribe({'subscribe': ['600519', '000001', '600519']})
    assert err is None
    assert [s['code'] for s in stocks] == ['600519.SH', '000001.SZ']


def test_parse_subscribe_suffix_code_kept():
    """已带后缀代码原样保留"""
    stocks, err = parse_subscribe({'subscribe': ['300750.SZ']})
    assert err is None
    assert stocks[0]['code'] == '300750.SZ'


def test_parse_subscribe_all_illegal_rejected():
    """全部非法代码 → 错误"""
    stocks, err = parse_subscribe({'subscribe': ['abc', '12345']})
    assert stocks == []
    assert err and '非法代码' in err


def test_parse_subscribe_empty_rejected():
    """空订阅 → 错误"""
    stocks, err = parse_subscribe({'subscribe': []})
    assert stocks == []
    assert err and '为空' in err


def test_parse_subscribe_not_list_rejected():
    """subscribe 非列表 → 错误"""
    _, err = parse_subscribe({'subscribe': '600519'})
    assert err and 'subscribe' in err
    _, err2 = parse_subscribe('not-a-dict')
    assert err2 and '格式' in err2


def test_parse_subscribe_over_limit_rejected():
    """超过订阅上限 → 错误"""
    codes = [f'{i:06d}' for i in range(51)]
    _, err = parse_subscribe({'subscribe': codes})
    assert err and '上限' in err


# ─── 预警阈值常量（前后端一致） ───────────────────────────────────────

def test_warn_thresholds_constants():
    """预警阈值: |涨速|>1%、量比>2.5（与前端 core.js 一致）"""
    assert WARN_RISE_SPEED_THRESHOLD == 1.0
    assert WARN_VOLUME_RATIO_THRESHOLD == 2.5


# ─── WS 端点（TestClient websocket_connect）───────────────────────────

@pytest.fixture
def ws_app():
    """独立 FastAPI app（仅挂载 market_ws 路由，镜像生产 /api 前缀）"""
    from fastapi import FastAPI
    from starlette.testclient import TestClient

    app = FastAPI()
    app.include_router(market_ws.router, prefix="/api")
    market_ws.QUOTE_PUSH_INTERVAL = 0.05
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: ({}, True))
    with TestClient(app) as c:
        yield c
    market_ws.QUOTE_PUSH_INTERVAL = 15.0
    market_ws._quote_source = RealtimeQuoteSource()


def _token():
    return create_access_token({'sub': 'admin', 'role': 'admin'})


def _ws_url(token=''):
    return f'/api/market/ws/quotes?token={token}' if token else '/api/market/ws/quotes'


def test_ws_rejects_no_token(ws_app):
    """无 token → 拒绝连接（close 4401）"""
    from starlette.websockets import WebSocketDisconnect
    with pytest.raises(WebSocketDisconnect) as exc:
        with ws_app.websocket_connect(_ws_url()) as ws:
            ws.receive_json()
    assert exc.value.code == 4401


def test_ws_rejects_bad_token(ws_app):
    """坏 token → 拒绝连接（close 4401）"""
    from starlette.websockets import WebSocketDisconnect
    with pytest.raises(WebSocketDisconnect) as exc:
        with ws_app.websocket_connect(_ws_url('not-a-real-token')) as ws:
            ws.receive_json()
    assert exc.value.code == 4401


def test_ws_degraded_push_empty_data(ws_app):
    """mock 源不可达 → 推送 degraded=True + 空 data（不抛错）"""
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: ({}, True))
    with ws_app.websocket_connect(_ws_url(_token())) as ws:
        ws.send_json({'subscribe': ['600519', '000001']})
        msg = ws.receive_json()
        assert msg['type'] == 'quotes'
        assert msg['degraded'] is True
        assert msg['data'] == []


def test_ws_quotes_push_with_data(ws_app):
    """mock 源可达 → 推送含报价 data（涨速/量比计算）"""
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: ({
        '600519.SH': {'price': 1500.0, 'pre_close': 1480.0,
                      'volume': 1_500_000, 'avg_volume_5d': 500_000},
        '000001.SZ': {'price': 12.0, 'pre_close': 12.0},
    }, False))
    with ws_app.websocket_connect(_ws_url(_token())) as ws:
        ws.send_json({'subscribe': ['600519', '000001']})
        msg = ws.receive_json()
        assert msg['degraded'] is False
        codes = [d['code'] for d in msg['data']]
        assert '600519.SH' in codes and '000001.SZ' in codes
        item = next(d for d in msg['data'] if d['code'] == '600519.SH')
        assert item['change_pct'] == pytest.approx(1.35, abs=0.01)
        assert item['volume_ratio'] == pytest.approx(3.0)


def test_ws_empty_subscription_error_frame(ws_app):
    """空订阅 → 错误帧（不推送报价）"""
    with ws_app.websocket_connect(_ws_url(_token())) as ws:
        ws.send_json({'subscribe': []})
        msg = ws.receive_json()
        assert msg['type'] == 'error'
        assert '为空' in msg['message']
