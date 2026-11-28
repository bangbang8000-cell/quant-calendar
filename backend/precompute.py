# -*- coding: utf-8 -*-
"""收盘后分批预计算流水线 (v7.25 FR-8)

用户已确认分批口径：
- 15:30 行情类：大盘指数终值、日历日视图
- 18:00 研究类：共识 TopN / 策略概览 / 择时矩阵（部分待接入）
- 20:00 策略类：默认因子 IC / 形态基线（待接入）

每项结果写入 ``ttl_cache``，key 带数据版本；数据版本变化后旧 key 自然失效。
状态由 ``/api/system/precompute/status`` 暴露。
"""
import copy
import logging
import threading
import time
from datetime import datetime

import ttl_cache

logger = logging.getLogger(__name__)

ITEM_TTL = 12 * 3600  # 预计算结果当日有效

# 批次定义（时间点为触发窗口起点）
PHASES = [
    {'key': 'market', 'label': '行情类', 'at': '15:30',
     'items': ['market_overview', 'calendar_day_view']},
    {'key': 'research', 'label': '研究类', 'at': '18:00',
     'items': ['consensus_topn', 'strategy_overview', 'timing_matrix']},
    {'key': 'strategy', 'label': '策略类', 'at': '20:00',
     'items': ['factor_ic', 'pattern_baseline']},
]

_lock = threading.Lock()
_state = {'data_version': '', 'last_run_at': '', 'phases': {}}


def data_version(now=None):
    """数据版本：按交易日切分（当日数据变化即换版本，旧缓存失效）。"""
    now = now or datetime.now()
    return now.strftime('%Y%m%d')


def cache_key(item, version):
    return 'precompute:%s:%s' % (version, item)


def _produce(item):
    """返回预计算值；None 表示该 producer 尚未接入（如实标记 pending）。"""
    if item == 'market_overview':
        from market_data import market_data
        return market_data.get_market_overview()
    if item == 'calendar_day_view':
        from views_aggregator import views_aggregator
        return views_aggregator.get_day_view(datetime.now().strftime('%Y-%m-%d'))
    return None


def run_phase(phase_key, version=None):
    """执行一个批次，返回该批次状态。异常按项隔离，不中断其它项。"""
    phase = next((p for p in PHASES if p['key'] == phase_key), None)
    if phase is None:
        raise ValueError('unknown precompute phase: %s' % phase_key)
    version = version or data_version()
    started = time.time()
    items_status = {}
    for item in phase['items']:
        t0 = time.time()
        try:
            value = _produce(item)
            if value is None:
                items_status[item] = {'status': 'pending', 'reason': 'producer 待接入',
                                      'duration_ms': 0}
                continue
            ttl_cache.put(cache_key(item, version), value, ttl=ITEM_TTL)
            items_status[item] = {'status': 'ok',
                                  'duration_ms': int((time.time() - t0) * 1000)}
        except Exception as e:  # noqa: BLE001 — 单项失败不影响批次
            logger.warning('预计算项 %s 失败: %s', item, e)
            items_status[item] = {'status': 'error', 'reason': str(e),
                                  'duration_ms': int((time.time() - t0) * 1000)}
    ok = sum(1 for v in items_status.values() if v['status'] == 'ok')
    result = {
        'label': phase['label'], 'at': phase['at'],
        'finished_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'ok': ok, 'total': len(phase['items']), 'items': items_status,
        'duration_ms': int((time.time() - started) * 1000),
    }
    with _lock:
        _state['data_version'] = version
        _state['last_run_at'] = result['finished_at']
        _state['phases'][phase_key] = result
    return result


def get_cached(item, version=None):
    """读取预计算结果（版本不符/过期返回 None）。"""
    return ttl_cache.get(cache_key(item, version or data_version()))


def summary():
    parts = []
    for key in ('market', 'research', 'strategy'):
        p = _state['phases'].get(key)
        if p:
            parts.append('%s %s(%d/%d)' % (p['at'], p['label'], p['ok'], p['total']))
    return ' / '.join(parts)


def status():
    with _lock:
        data = copy.deepcopy(_state)
    data['summary'] = summary()
    data['phases_config'] = [{'key': p['key'], 'label': p['label'], 'at': p['at'],
                              'items': list(p['items'])} for p in PHASES]
    return data


def reset():
    """测试/运维用：清空状态。"""
    with _lock:
        _state['data_version'] = ''
        _state['last_run_at'] = ''
        _state['phases'] = {}
