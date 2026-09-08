# -*- coding: utf-8 -*-
"""FR-3.17.1: 智能投顾助手 — 数据卡/多股对比/多轮上下文 单测

覆盖（TDD）：
- build_stock_fact_card 各字段取值与来源标注
- 数据不可达 → 字段 None + source=unavailable 优雅降级
- parse_compare_request / extract_stock_codes 多代码识别（>=2）
- build_conversation_context 多轮组装（含前几轮/截断/空）
- build_compare_table 对比表结构生成（含降级）
- prompt 注入（ask_stock_user_prompt 含数据卡 + 事实护栏）
全部使用 fake 数据源，不触网。
"""
import pytest

from prompt_facts import (
    METRICS,
    normalize_stock_code,
    extract_stock_codes,
    parse_compare_request,
    build_stock_fact_card,
    build_fact_card_markdown,
    build_compare_table,
    build_compare_table_markdown,
    build_conversation_context,
)


# ─── 测试用 fake 数据源（不触网）────────────────────────────

class _FakeDS:
    """可注入 basic / kline / moneyflow 的假数据源"""
    def __init__(self, basic=None, kline=None, moneyflow=None):
        self.basic = basic
        self.kline = kline
        self.moneyflow = moneyflow

    def get_daily_basic(self, ts_code, limit=5):
        return self.basic

    def get_kline_data(self, ts_code, period='daily', limit=60):
        return self.kline

    def get_moneyflow(self, ts_code, limit=10):
        return self.moneyflow


class _FakeSI:
    """假股票信息管理器"""
    def __init__(self, names=None):
        self.names = names or {}

    def get_name(self, code):
        return self.names.get(code, code)


def _kline_from_closes(closes, prefix='202608'):
    """收盘价序列 → K线行列表 [date, open, close, low, high, vol, ...]"""
    rows = []
    for i, c in enumerate(closes):
        rows.append([f"{prefix}{10 + (i % 19):02d}", 10.0, float(c), 9.0, 11.0, 100000])
    return rows


_FULL_BASIC = {'trade_date': '20260815', 'pe': 30.2, 'pb': 5.1, 'ps': 6.0,
               'data_source': 'tushare'}
_FULL_KLINE = {'data': _kline_from_closes([100 + (i % 3) * 10 for i in range(60)]),
               'data_source': 'sxsc_tushare'}
_FULL_MF = [{'trade_date': f'd{i}', 'net_mf_amount': 1000.0} for i in range(5)]


# ─── 代码解析 ───────────────────────────────────────────────

def test_normalize_stock_code():
    assert normalize_stock_code('600519') == '600519.SH'
    assert normalize_stock_code('000858') == '000858.SZ'
    assert normalize_stock_code('300750') == '300750.SZ'
    assert normalize_stock_code('832000') == '832000.BJ'
    assert normalize_stock_code('600519.SH') == '600519.SH'
    assert normalize_stock_code(' 000001.sz ') == '000001.SZ'
    assert normalize_stock_code('') is None
    assert normalize_stock_code('abc') is None
    assert normalize_stock_code('12345') is None


def test_extract_stock_codes_multi():
    codes = extract_stock_codes('600519 与 000858 对比，看看哪个好')
    assert codes == ['600519.SH', '000858.SZ']


def test_extract_stock_codes_dedup_and_invalid():
    # 重复代码去重保序；非 6 位数字不识别
    codes = extract_stock_codes('600519 600519 000858 对比 12.5 元')
    assert codes == ['600519.SH', '000858.SZ']
    assert extract_stock_codes('') == []
    assert extract_stock_codes(None) == []


def test_parse_compare_request_multi():
    r = parse_compare_request('600519 与 000858 对比')
    assert r['is_compare'] is True
    assert r['codes'] == ['600519.SH', '000858.SZ']


def test_parse_compare_request_single():
    r = parse_compare_request('600519 趋势怎么看')
    assert r['is_compare'] is False
    assert r['codes'] == ['600519.SH']


# ─── 个股数据卡（C. 事实护栏）───────────────────────────────

def test_build_card_full_fields_and_sources():
    card = build_stock_fact_card('600519.SH', data_source=_FakeDS(_FULL_BASIC, _FULL_KLINE, _FULL_MF),
                                 stock_info=_FakeSI({'600519.SH': '贵州茅台'}))
    assert card['code'] == '600519.SH'
    assert card['name'] == '贵州茅台'
    f = card['fields']
    assert f['pe'] == 30.2
    assert f['pb'] == 5.1
    assert f['ps'] == 6.0
    assert f['close'] == 100 + (59 % 3) * 10  # 最后一行收盘价
    assert f['net_mf_5d'] == 5000.0
    # 技术/风险字段在有足够K线时均产出
    assert f['rsi'] is not None
    assert f['volatility'] is not None
    assert f['max_drawdown'] is not None
    # 来源标注
    assert card['field_sources']['pe'] == 'tushare'
    assert card['field_sources']['close'] == 'sxsc_tushare'
    assert card['field_sources']['net_mf_5d'] == 'moneyflow'
    assert card['source'] == 'data_source_manager'
    assert card['date'] == '20260815'
    assert card['generated_at']


def test_build_card_all_unavailable():
    card = build_stock_fact_card('600519.SH', data_source=_FakeDS(), stock_info=_FakeSI())
    assert card['code'] == '600519.SH'
    # 所有字段置 None
    for key, _label, _unit in METRICS:
        assert card['fields'][key] is None, f"{key} 应降级为 None"
        assert card['field_sources'][key] == 'unavailable', f"{key} 来源应标 unavailable"
    assert card['source'] == 'unavailable'
    assert card['name'] == '600519.SH'


def test_build_card_partial_moneyflow_unavailable():
    # 行情/估值可用，资金不可达 → 仅 net_mf_5d 降级
    card = build_stock_fact_card('600519.SH', data_source=_FakeDS(_FULL_BASIC, _FULL_KLINE, None),
                                 stock_info=_FakeSI())
    assert card['fields']['pe'] == 30.2
    assert card['fields']['net_mf_5d'] is None
    assert card['field_sources']['net_mf_5d'] == 'unavailable'
    assert card['source'] == 'data_source_manager'  # 部分可用不算整体 unavailable


def test_build_card_insufficient_kline():
    # K线不足 2 根 → 技术字段整体降级
    kline = {'data': _kline_from_closes([100.0])}
    card = build_stock_fact_card('600519.SH', data_source=_FakeDS(_FULL_BASIC, kline, _FULL_MF),
                                 stock_info=_FakeSI())
    assert card['fields']['close'] is None
    assert card['fields']['pct_chg'] is None
    assert card['field_sources']['close'] == 'unavailable'
    # 估值不受影响
    assert card['fields']['pe'] == 30.2


def test_fact_card_markdown_marks_unavailable():
    card = build_stock_fact_card('600519.SH', data_source=_FakeDS(), stock_info=_FakeSI())
    md = build_fact_card_markdown(card)
    assert '数据卡' in md
    assert '数据暂不可用' in md
    assert '600519.SH' in md
    # 全 unavailable 时每行都应标注数据暂不可用
    assert md.count('数据暂不可用') >= len(METRICS)


def test_fact_card_markdown_full_values():
    card = build_stock_fact_card('600519.SH', data_source=_FakeDS(_FULL_BASIC, _FULL_KLINE, _FULL_MF),
                                 stock_info=_FakeSI({'600519.SH': '贵州茅台'}))
    md = build_fact_card_markdown(card)
    assert '贵州茅台' in md
    assert '30.2倍' in md      # PE 值+单位
    assert '5000.0万' in md    # 近5日主力净流入
    assert 'tushare' in md


# ─── 多股对比表（B. 多股票对比）────────────────────────────

def test_compare_table_two_codes():
    table = build_compare_table(['600519.SH', '000858.SZ'],
                                data_source=_FakeDS(_FULL_BASIC, _FULL_KLINE, _FULL_MF),
                                stock_info=_FakeSI({'600519.SH': '贵州茅台', '000858.SZ': '五粮液'}))
    assert table['codes'] == ['600519.SH', '000858.SZ']
    assert len(table['cards']) == 2
    assert table['header'][0] == '指标'
    assert '贵州茅台(600519.SH)' in table['header']
    assert '五粮液(000858.SZ)' in table['header']
    # 行数与指标数一致，每行宽度 = header 宽度
    assert len(table['rows']) == len(METRICS)
    for row in table['rows']:
        assert len(row) == len(table['header'])
    # 估值行有具体数值
    pe_row = next(r for r in table['rows'] if r[0] == 'PE(市盈率)')
    assert pe_row[1] == '30.2倍'
    assert pe_row[2] == '30.2倍'
    assert table['available'] is True
    md = build_compare_table_markdown(table)
    assert '多股对比数据卡' in md
    assert '| 指标 |' in md


def test_compare_table_degraded():
    # 数据全部不可达 → 仍返回完整结构，格子标「数据暂不可用」
    table = build_compare_table(['600519.SH', '000858.SZ'],
                                data_source=_FakeDS(), stock_info=_FakeSI())
    assert len(table['cards']) == 2
    assert len(table['rows']) == len(METRICS)
    assert table['available'] is False
    pe_row = next(r for r in table['rows'] if r[0] == 'PE(市盈率)')
    assert '数据暂不可用' in pe_row[1]
    assert '数据暂不可用' in pe_row[2]


def test_compare_table_dedup_and_single():
    # 重复代码去重；单只也返回结构（不抛错）
    table = build_compare_table(['600519.SH', '600519.SH'], data_source=_FakeDS(), stock_info=_FakeSI())
    assert table['codes'] == ['600519.SH']
    assert len(table['cards']) == 1


# ─── 多轮上下文（A. 多轮对话）───────────────────────────────

def test_conversation_context_keeps_recent_rounds():
    msgs = [
        {'role': 'user', 'content': 'Q1', 'time': 't1'},
        {'role': 'assistant', 'content': 'A1', 'time': 't2'},
        {'role': 'user', 'content': 'Q2', 'time': 't3'},
        {'role': 'assistant', 'content': 'A2', 'time': 't4'},
        {'role': 'user', 'content': 'Q3', 'time': 't5'},
        {'role': 'assistant', 'content': 'A3', 'time': 't6'},
    ]
    ctx = build_conversation_context(msgs, max_rounds=1)
    # 仅保留最近 1 轮（2 条）
    assert 'Q1' not in ctx and 'A1' not in ctx
    assert 'Q3' in ctx and 'A3' in ctx
    assert '用户: Q3' in ctx and '助手: A3' in ctx


def test_conversation_context_ordering_and_labels():
    msgs = [
        {'role': 'assistant', 'content': 'A0', 'time': 't0'},
        {'role': 'user', 'content': 'Q1', 'time': 't1'},
        {'role': 'assistant', 'content': 'A1', 'time': 't2'},
    ]
    ctx = build_conversation_context(msgs, max_rounds=2)
    assert ctx.index('助手: A0') < ctx.index('用户: Q1') < ctx.index('助手: A1')


def test_conversation_context_truncation():
    long_txt = 'x' * 500
    ctx = build_conversation_context([{'role': 'user', 'content': long_txt}], max_rounds=1, max_chars=100)
    assert len('x' * 100) == 100
    # 长内容截断到 max_chars + 省略号
    body = ctx.split('用户: ', 1)[1]
    assert 'x' * 100 in body
    assert 'x' * 101 not in body
    assert '…' in body


def test_conversation_context_empty():
    assert build_conversation_context([]) == ''
    assert build_conversation_context(None) == ''
    assert build_conversation_context([{'role': 'user', 'content': ''}]) == ''


# ─── prompt 注入（数据卡 + 事实护栏）────────────────────────

def test_ask_stock_user_prompt_injects_fact_card_and_guard():
    from prompts.ask_stock import build_ask_stock_user_prompt, FACT_GUARD_RULE
    card = build_stock_fact_card('600519.SH', data_source=_FakeDS(), stock_info=_FakeSI())
    prompt = build_ask_stock_user_prompt(
        '600519.SH', '贵州茅台', '600519 估值如何',
        {}, {}, {},
        fact_card=card,
        fact_instruction=FACT_GUARD_RULE,
    )
    assert '数据卡' in prompt
    assert '数据暂不可用' in prompt
    assert '事实护栏' in prompt          # 护栏规则注入
    assert '不得猜测' in prompt          # 禁止编造数字
    assert '仅供参考' in prompt          # 风险提示在护栏规则中
