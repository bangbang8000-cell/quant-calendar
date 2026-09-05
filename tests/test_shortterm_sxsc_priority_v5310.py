#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.10 (FEATURE): sxsc 券商版优先调度守护

用户提供山证Tushare文档(官网221.204.19.233:7173), 要求龙虎榜/涨停池/复盘/指数/个股
优先走 sxsc(功能和实效性更高)。实测网关能力: top_list(龙虎榜含reason)/limit_list_d
(涨停含industry)/top_inst(机构席位)/moneyflow(资金流)/daily/index_daily 均可用。

守护: ①涨停/跌停池源链 sxsc 首位 ②龙虎榜源链 sxsc 首位 ③sxsc 客户端缺失时回落 akshare
④sxsc 列映射复用 tushare 映射(同协议)。
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))


def test_zt_dt_source_chain_sxsc_first():
    """涨停/跌停池源链 sxsc 首位 (akshare 东财 → tushare 兜底保留)"""
    from shortterm import fetchers
    for pt in ('zt', 'dt'):
        chain = fetchers._SOURCE_CHAINS[pt]
        assert chain[0] == 'sxsc_tushare', f'{pt} 源链首位应为 sxsc_tushare: {chain}'
        assert 'akshare.eastmoney' in chain and 'tushare' in chain, '应保留 akshare/tushare 兜底'


def test_fetchers_has_sxsc_fetch():
    """fetchers 提供 _fetch_sxsc_limit_list"""
    from shortterm import fetchers
    assert hasattr(fetchers, '_fetch_sxsc_limit_list'), '应新增 sxsc 涨停池抓取函数'


def test_lhb_source_chain_sxsc_first():
    """龙虎榜 sxsc top_list 优先 (akshare 东财 → tushare 兜底保留)"""
    src = open(os.path.join(BASE, 'backend', 'shortterm', 'lhb.py'), encoding='utf-8').read()
    assert '_fetch_sxsc_lhb' in src, '应新增 sxsc 龙虎榜抓取函数'
    # fetch_lhb 内应先试 sxsc
    assert src.split('def fetch_lhb')[1].find('_fetch_sxsc_lhb') < src.split('def fetch_lhb')[1].find('_fetch_tushare_lhb'), 'sxsc 应在 tushare 之前尝试'


def test_sxsc_client_missing_falls_back(monkeypatch):
    """sxsc 客户端不存在(dev 无 token) → 回落 akshare, 不崩溃"""
    import pandas as pd
    from shortterm import fetchers
    # 模拟 sxsc 客户端缺失: _fetch_sxsc_limit_list 抛错/返回不可用
    def fake_no_sxsc(pool_type, compact, date_str):
        raise RuntimeError('sxsc 客户端未初始化')
    monkeypatch.setattr(fetchers, '_fetch_sxsc_limit_list', fake_no_sxsc)
    # akshare 可用 → 返回东财数据
    class _FakeAk:
        def stock_zt_pool_em(self, *a, **k):
            import pandas as pd
            return pd.DataFrame([{'代码': '600000', '名称': '浦发银行', '最新价': 9.4, '涨跌幅': 10.0}])
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk())
    out = fetchers.fetch_zt_pool('2026-09-04')
    assert out.get('available') is True, 'sxsc 缺失应回落 akshare'
    assert out.get('source', '').startswith('akshare'), '回落源应为 akshare'