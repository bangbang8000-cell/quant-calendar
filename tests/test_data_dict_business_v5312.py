#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.12 (FEATURE): 数据字典业务字段补全守护

v5.3.12 将数据字典从 5 类 26 字段扩展至 11 类 71 字段, 覆盖 v5.2/v5.3 新增业务
(短线三池/龙虎榜/板块资金流/个股资金流/业绩预告快报/盘中情绪快照)。

守护: ①新增分类合法 ②新增字段与真实模块键对拍(防字典与代码脱节) ③字段完整性
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))

from data_dict import load_dict, list_fields, FIELD_CATEGORIES  # noqa: E402


def test_business_categories_present():
    """新增 6 类业务分类在 FIELD_CATEGORIES 与字典中"""
    for cat in ('shortterm', 'lhb', 'sector_flow', 'moneyflow', 'performance', 'snapshot'):
        assert cat in FIELD_CATEGORIES, f'FIELD_CATEGORIES 缺 {cat}'
        keys = [f['key'] for f in list_fields() if f['category'] == cat]
        assert keys, f'字典无 {cat} 字段'


def test_business_fields_match_modules():
    """字典字段与真实业务模块输出键一致 (防字典与代码脱节)"""
    all_keys = {f['key'] for f in list_fields()}
    # 短线三池 (fetchers 统一键)
    from shortterm import fetchers
    for k in ('boards', 'break_times', 'seal_amount', 'first_seal_time', 'last_seal_time', 'industry'):
        assert k in all_keys, f'字典缺短线字段 {k}'
    assert 'boards' in fetchers._TUSHARE_MAP['zt'].values(), 'fetchers boards 键变化?'
    # 龙虎榜
    from shortterm import lhb
    for k in ('net_buy', 'buy_amount', 'sell_amount', 'reason'):
        assert k in all_keys, f'字典缺龙虎榜字段 {k}'
    assert 'net_buy' in lhb._TUSHARE_LHB_MAP.values(), 'lhb net_buy 键变化?'
    # 板块资金流
    from shortterm import sector_flow
    assert 'main_net_inflow' in all_keys, '字典缺板块资金流字段'
    # 盘中快照
    from shortterm import intraday
    src = open(os.path.join(BASE, 'backend', 'shortterm', 'intraday.py'), encoding='utf-8').read()
    for k in ('zt_count', 'zb_count', 'dt_count', 'broken_rate'):
        assert k in all_keys, f'字典缺快照字段 {k}'
        assert k in src, f'intraday.py 无 {k}?'


def test_optional_fields_have_all_keys():
    """新增字段满足完整性 (key/label/category/type/unit/frequency/source/aliases/description)"""
    required = {'key', 'label', 'category', 'type', 'unit', 'frequency', 'source', 'aliases', 'description'}
    for f in list_fields():
        assert required <= set(f), f"字段缺键: {f.get('key')} 缺 {required - set(f)}"


def test_api_category_filter_all_categories():
    """API 按 11 类过滤均返回非空"""
    for cat in FIELD_CATEGORIES:
        n = len([f for f in list_fields() if f['category'] == cat])
        assert n > 0, f'分类 {cat} 无字段'