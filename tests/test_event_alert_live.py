"""
事件提醒接入真实数据源测试 (FR-3.18.2 / T5)

覆盖:
- 24h 去重: dedup_key 稳定性 / mark_pushed 后判重 / 超 24h 过期 / reset
- filter_new_events: 保留新事件, 过滤重复
- DataSourceEventProvider: akshare 可达 → 事件; akshare 失败 → tushare 回退; 双源失败 → 抛错(降级)
- build_events(providers=): 可达/全不可达/部分不可达 三种 note
- run_event_scan: 新事件推送 + 二次扫描去重 (new_count=0)
"""
import time

import pytest

import event_alert as ea


@pytest.fixture(autouse=True)
def _clean_dedup():
    ea.reset_dedup()
    yield
    ea.reset_dedup()


def _ev(code='600519.SH', type_='业绩预告', title='预计净利润增长50%', date='2026-08-18'):
    return {'code': code, 'type': type_, 'title': title, 'date': date}


# ==================== 24h 去重 ====================


def test_dedup_key_stable():
    assert ea.dedup_key(_ev()) == ea.dedup_key(_ev())
    assert ea.dedup_key(_ev(title='A')) != ea.dedup_key(_ev(title='B'))
    assert ea.dedup_key(_ev(code='000001.SZ')) != ea.dedup_key(_ev(code='600519.SH'))


def test_is_duplicate_after_mark_pushed():
    ev = _ev()
    assert ea.is_duplicate(ev) is False
    ea.mark_pushed([ev])
    assert ea.is_duplicate(ev) is True


def test_dedup_expiry_after_24h():
    ev = _ev()
    now = time.time()
    ea.mark_pushed([ev])
    assert ea.is_duplicate(ev, now=now + 23 * 3600) is True
    assert ea.is_duplicate(ev, now=now + 25 * 3600) is False


def test_reset_dedup():
    ev = _ev()
    ea.mark_pushed([ev])
    ea.reset_dedup()
    assert ea.is_duplicate(ev) is False


def test_filter_new_events():
    dup = _ev()
    ea.mark_pushed([dup])
    fresh = _ev(type_='解禁', title='限售解禁')
    out = ea.filter_new_events([dup, fresh, dup])
    assert [e['title'] for e in out] == ['限售解禁']


# ==================== DataSourceEventProvider 回退链 ====================


def test_provider_akshare_reachable():
    prov = ea.DataSourceEventProvider(
        akshare_fetcher=lambda code: [_ev(type_='分红', title='10派30元')],
        tushare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('不应调用')),
    )
    assert prov.fetch_events('600519.SH')[0]['title'] == '10派30元'


def test_provider_akshare_fails_then_tushare():
    prov = ea.DataSourceEventProvider(
        akshare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('ak down')),
        tushare_fetcher=lambda code: [_ev(type_='龙虎榜', title='日涨幅偏离值达7%')],
    )
    events = prov.fetch_events('600519.SH')
    assert events[0]['type'] == '龙虎榜'


def test_provider_both_fail_raises():
    prov = ea.DataSourceEventProvider(
        akshare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('ak')),
        tushare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('ts')),
    )
    with pytest.raises(RuntimeError):
        prov.fetch_events('600519.SH')


# ==================== build_events(providers=) 降级 ====================


def test_build_events_reachable(monkeypatch):
    prov = ea.DataSourceEventProvider(
        akshare_fetcher=lambda code: [_ev(type_='解禁', title='限售解禁')],
        tushare_fetcher=lambda code: [],
    )
    res = ea.build_events(['600519.SH'], today='2026-08-18', providers=[prov])
    assert len(res['events']) == 1
    assert res['events'][0]['code'] == '600519.SH'
    assert res['events'][0]['source'] == 'tushare_akshare'
    assert res['note'] is None


def test_build_events_all_unavailable():
    prov = ea.DataSourceEventProvider(
        akshare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('down')),
        tushare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('down')),
    )
    res = ea.build_events(['600519.SH'], today='2026-08-18', providers=[prov])
    assert res['events'] == []
    assert res['note'] and '不可达' in res['note']


# ==================== run_event_scan 编排 + 去重 ====================


def test_run_event_scan_pushes_and_dedup(monkeypatch):
    prov = ea.DataSourceEventProvider(
        akshare_fetcher=lambda code: [_ev(type_='业绩预告', title='预计净利润增长50%')],
        tushare_fetcher=lambda code: [],
    )
    monkeypatch.setattr(ea, 'get_alertable_codes',
                        lambda username, scope: [{'code': '600519.SH', 'name': '贵州茅台'}])
    pushed = []
    monkeypatch.setattr(ea, 'push_events_feishu', lambda username, events: pushed.append(events) or len(events))

    r1 = ea.run_event_scan(username='admin', scope='watchlist', providers=[prov])
    assert r1['new_count'] == 1
    assert r1['events'][0]['type'] == '业绩预告'
    assert pushed, '新事件应触发飞书推送'

    # 二次扫描: 24h 内同事件 → 去重, new_count=0, 不推送
    r2 = ea.run_event_scan(username='admin', scope='watchlist', providers=[prov])
    assert r2['new_count'] == 0
    assert r2['events'] == []
    assert len(pushed) == 1, '去重后不应重复推送'


def test_run_event_scan_unavailable(monkeypatch):
    prov = ea.DataSourceEventProvider(
        akshare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('down')),
        tushare_fetcher=lambda code: (_ for _ in ()).throw(RuntimeError('down')),
    )
    monkeypatch.setattr(ea, 'get_alertable_codes',
                        lambda username, scope: [{'code': '600519.SH', 'name': '贵州茅台'}])
    r = ea.run_event_scan(username='admin', scope='watchlist', providers=[prov])
    assert r['new_count'] == 0
    assert r['events'] == []
    assert r['note'] and '不可达' in r['note']
