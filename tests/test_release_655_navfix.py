#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.5.5 回归修复门禁 (FR-655)

用户反馈四项:
  1. 策略概览与一级命名重复 → 一级收敛为业务域名词, 各域首成员统一「概览」
  2. 中栏二级菜单仍不可见 → 根因: SubNav.vue 组件 name 被改成 'SubNav',
     而 index.html 用 <qc-subnav> 标签 + app.component(comp.name) 注册 → 标签无法解析
  3. 部分二级菜单显示英文 → 已收敛为 MEMBER_LABELS 单一来源 (中文兜底)
  4. 数据资产过期 / 实时报价降级 → stock_info 加载路径未记录新鲜度; 周报只在
     启动后首个周六生成; 实时源只有 akshare 全市场快照 (易被上游断连)

本文件锁死上述四处修复。
"""
import os
import re
import sys

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FE = os.path.join(ROOT, "frontend")
BACKEND = os.path.join(ROOT, "backend")
if BACKEND not in sys.path:
    sys.path.insert(0, BACKEND)


def _read_fe(rel):
    with open(os.path.join(FE, *rel.split("/")), encoding="utf-8") as f:
        return f.read()


def _read_be(rel):
    with open(os.path.join(BACKEND, *rel.split("/")), encoding="utf-8") as f:
        return f.read()


# ── TC-655-01: SubNav 组件注册名必须与 index.html 标签一致 ──
def test_subnav_component_name_matches_tag():
    idx = _read_fe("index.html")
    assert "<qc-subnav>" in idx, "index.html 应以 <qc-subnav> 使用组件"
    assert "app.component(comp.name, comp)" in idx, "全局注册依赖 comp.name"
    subnav = _read_fe("src/components/SubNav.vue")
    m = re.search(r"name:\s*'([^']+)'", subnav)
    assert m and m.group(1) == "qc-subnav", \
        "SubNav.name 必须为 qc-subnav, 否则 <qc-subnav> 无法解析 → 中栏整体不渲染"
    assert "qc-subnav-column" in subnav


# ── TC-655-02: 数据陈旧/实时降级提示只出现在通知铃铛面板内 ──
def test_stale_banner_inside_bell_panel():
    header = _read_fe("src/components/Header.vue")
    assert "qc-bell-panel" in header, "通知铃铛面板应存在"
    bell_pos = header.index("qc-bell-panel")
    banner_pos = header.index("<qc-data-stale-banner>")
    assert banner_pos > bell_pos, "陈旧横幅必须渲染在铃铛面板内 (顶栏不再常驻占位)"
    # 顶栏区 (header-wrap 开始 ~ 铃铛面板) 之间不应再有横幅
    wrap_pos = header.index("qc-header-wrap")
    assert not (wrap_pos < banner_pos < bell_pos), "顶栏主体不应再放陈旧横幅"


# ── TC-655-03: 一级命名收敛 — 一级为业务域名词, 首成员不再与一级同名 ──
def test_primary_names_are_domain_nouns():
    core = _read_fe("js/nav-merge-core.js")
    assert "name: '策略', iconName: 'pie-chart'" in core, "一级应为「策略」而非「策略总览」"
    assert "'strategies.overview': '概览'" in core
    assert "'shortterm.overview': '概览'" in core
    assert "'ai.overview': '概览'" in core
    assert "'calendar.calendar': '日历视图'" in core, "量化日历首成员应为「日历视图」, 不与一级同名"


# ── TC-655-04: 实时报价腾讯直连源 (批量 + 停牌回退昨收 + 只返回订阅代码) ──
class _FakeResp:
    encoding = None

    def __init__(self, text):
        self.text = text


def _tencent_body():
    # 真实字段位: 2=代码 3=现价 4=昨收 32=涨跌幅 49=量比 (GBK)
    def row(code, name, price, pre, pct, vr):
        fields = ['0'] * 50
        fields[1], fields[2], fields[3], fields[4], fields[32], fields[49] = \
            name, code, price, pre, pct, vr
        return 'v_%s="%s";' % (code, '~'.join(fields))
    return ''.join([
        row('600519', '贵州茅台', '1355.95', '1349.98', '0.44', '0.83'),
        row('000001', '平安银行', '0.00', '11.30', '0.00', '0.00'),  # 停牌: 回退昨收
        row('300750', '宁德时代', '250.10', '245.00', '2.08', '1.10'),  # 未订阅 → 丢弃
    ])


def test_tencent_source_parsing(monkeypatch):
    import realtime_quotes as rq

    captured = {}

    def fake_get(url, headers=None, timeout=None):
        captured['url'] = url
        return _FakeResp(_tencent_body())

    monkeypatch.setattr('requests.get', fake_get)
    src = rq.RealtimeQuoteSource(timeout=3)
    quotes, degraded = src._fetch_from_tencent(['600519.SH', '000001.SZ'])

    assert degraded is False
    assert set(quotes) == {'600519.SH', '000001.SZ'}, "只返回订阅代码, 不夹带未订阅标的"
    assert quotes['600519.SH']['price'] == pytest.approx(1355.95)
    assert quotes['600519.SH']['pre_close'] == pytest.approx(1349.98)
    assert quotes['600519.SH']['volume_ratio'] == pytest.approx(0.83)
    # 停牌 (现价 0) → 回退昨收, 不得把 0.00 当真实报价
    assert quotes['000001.SZ']['price'] == pytest.approx(11.30)
    assert 'sh600519' in captured['url'] and 'sz000001' in captured['url'], "批量请求符号格式应为 sh/sz+代码"


def test_tencent_source_is_primary(monkeypatch):
    """腾讯源优先: 可达时不再触碰 akshare 全市场快照 (避免上游断连导致降级)"""
    import realtime_quotes as rq

    monkeypatch.setattr('requests.get',
                        lambda url, headers=None, timeout=None: _FakeResp(_tencent_body()))
    src = rq.RealtimeQuoteSource(timeout=3)
    called = {'ak': 0}

    def boom(codes):
        called['ak'] += 1
        raise RuntimeError('akshare disabled in test')

    monkeypatch.setattr(src, '_fetch_from_akshare', boom)
    quotes, degraded = src.fetch_quotes(['600519.SH'])
    assert degraded is False and '600519.SH' in quotes
    assert called['ak'] == 0, "腾讯源命中时不应回退到 akshare"


# ── TC-655-05: stock_info 加载即记录新鲜度 (此前恒报 missing) ──
def test_stock_info_records_freshness_on_load(tmp_path, monkeypatch):
    import json
    import stock_info as si
    from reliability import freshness

    p = tmp_path / "stock_info.json"
    p.write_text(json.dumps({"600519.SH": "贵州茅台"}), encoding="utf-8")
    monkeypatch.setattr(si, "STOCK_INFO_FILE", str(p))

    seen = {}
    monkeypatch.setattr(freshness, "record_update",
                        lambda asset_id, **kw: seen.update(asset_id=asset_id, **kw))
    mgr = si.StockInfoManager()
    assert mgr.stock_map == {"600519.SH": "贵州茅台"}
    assert seen.get("asset_id") == "stock_info", "加载路径必须记录新鲜度, 否则横幅恒报 missing"
    assert seen.get("count") == 1
    assert seen.get("now") is not None, "last_update 应取文件 mtime, 不伪造为刚刚更新"


# ── TC-655-06: 周报错过补偿 (仅在启动后首个周六生成的缺陷) ──
def test_weekly_report_catchup_wired():
    core = _read_be("scheduler/_core.py")
    assert "_catchup_weekly_report()" in core, "start() 应启动周报错过补偿"
    reports = _read_be("scheduler/_core_reports.py")
    assert "async def _catchup_weekly_report" in reports
    assert 'record_update("weekly_report"' in reports
    assert "timedelta(days=6)" in reports, "补偿阈值: 距上次周报超 6 天才补跑"


# ── TC-655-07: 股票基础信息定时刷新 (stock_info 长期无生产者) ──
def test_stock_info_refresh_task_wired():
    core = _read_be("scheduler/_core.py")
    assert "async def stock_info_refresh_task" in core
    assert "self.stock_info_refresh_task()" in core, "start() 应启动股票基础信息刷新任务"
    assert "stock_manager.fetch_from_tushare" in core
    assert "timedelta(days=3)" in core, "刷新阈值应与 72h 新鲜度阈值一致"
