#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""口径词表与强制尾注 (v7.1.0 / B5.2, PRD FR-7.1.3)

来源：`EVAL-FUYAO-BEST-PRACTICES.md` §4.2 —— 官方每个看板都强制标注
「数据时间 / 真实或模拟 / 来源 endpoint / 计算口径 / 非投资建议」，并列出**禁称清单**。

本模块提供两件东西：
1. ``FORBIDDEN_TERMS``：禁称 → 正确说法（命中即视为口径违规）
2. ``build_footer()``：统一尾注生成器（所有新看板与导出物都必须调用，禁止各页面自拼文案）
"""

import re

#: 禁称 → (正确说法, 原因)
FORBIDDEN_TERMS = {
    '指数贡献': ('等权涨跌代理',
                '当前成分的等权涨跌不等于指数权重贡献'),
    '全市场晋级率': ('样本内晋级率',
                  '天梯只返回有限样本，不能外推为全市场'),
    '盘口成交': ('日线级近似成交',
              '日 K 无法还原盘口撮合'),
    '精确复权': ('复权（口径已标注）',
              '仅当复权推导可靠时才可称复权后价格，否则须标未复权'),
    '买入信号': ('数据观察',
              '本产品不提供交易信号'),
    '推荐买入': ('数据观察',
              '本产品不提供投资建议'),
    '必涨': ('数据观察',
            '不得对价格方向作承诺'),
}

#: 尾注必备字段（缺一即视为不合格导出）
FOOTER_REQUIRED_FIELDS = ('data_time', 'source', 'caliber', 'disclaimer')

DISCLAIMER = '仅供数据观察，不构成投资建议'
MODE_REAL = '真实数据'
MODE_NO_DATA = '未取到数据（非模拟）'


def find_violations(text):
    """返回文本命中的禁称列表 [{term, suggestion, reason}]（不改写原文）。"""
    if not text:
        return []
    hits = []
    for term, (suggestion, reason) in FORBIDDEN_TERMS.items():
        if term in text:
            hits.append({'term': term, 'suggestion': suggestion, 'reason': reason})
    return hits


def sanitize(text):
    """把禁称替换为正确说法；返回 (新文本, 替换记录)。用于自动生成的研究页文案。"""
    if not text:
        return text, []
    replaced = []
    out = text
    for term, (suggestion, _reason) in FORBIDDEN_TERMS.items():
        if term in out:
            out = out.replace(term, suggestion)
            replaced.append({'from': term, 'to': suggestion})
    return out, replaced


def assert_clean(text, where='文本'):
    """口径守护：命中禁称即抛错（用于导出/发布前的强制检查）。"""
    hits = find_violations(text)
    if hits:
        terms = '、'.join(h['term'] for h in hits)
        raise ValueError('%s 出现禁称：%s（请改用：%s）' % (
            where, terms, '、'.join(h['suggestion'] for h in hits)))
    return True


def build_footer(data_time, source, caliber, mode=MODE_REAL, disclaimer=DISCLAIMER):
    """统一尾注（四要素齐备）。source 可为 str 或 endpoint 列表。"""
    if isinstance(source, (list, tuple)):
        source = ' · '.join(str(s) for s in source if s)
    footer = {
        'data_time': str(data_time or ''),
        'source': str(source or ''),
        'caliber': str(caliber or ''),
        'mode': str(mode or ''),
        'disclaimer': str(disclaimer or DISCLAIMER),
    }
    footer['text'] = render_footer(footer)
    footer['complete'] = all(footer.get(k) for k in FOOTER_REQUIRED_FIELDS)
    return footer


def render_footer(footer):
    return ('数据时间：%s ｜ 来源：%s ｜ 口径：%s ｜ 模式：%s ｜ %s'
            % (footer.get('data_time'), footer.get('source'),
               footer.get('caliber'), footer.get('mode'), footer.get('disclaimer')))


def footer_html(footer):
    """HTML 版尾注（供离线导出使用；已转义，可直接内联）。"""
    def esc(v):
        return (str(v or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))
    return '<footer class="qc-footer-meta">%s</footer>' % esc(render_footer(footer))


def check_export_text(text):
    """导出物总体检查：禁称 + 必须含尾注三要素文案。返回 {ok, violations, missing}。"""
    violations = find_violations(text)
    missing = []
    if '数据时间' not in (text or ''):
        missing.append('data_time')
    if '来源' not in (text or ''):
        missing.append('source')
    if '口径' not in (text or ''):
        missing.append('caliber')
    if DISCLAIMER not in (text or '') and '不构成投资建议' not in (text or ''):
        missing.append('disclaimer')
    return {'ok': not violations and not missing,
            'violations': violations, 'missing': missing}


_ZW = re.compile(r'[\u200b-\u200f\ufeff]')


def strip_invisibles(text):
    """去掉零宽字符，避免"指数贡\u200b献"这类绕过。"""
    return _ZW.sub('', text or '')
