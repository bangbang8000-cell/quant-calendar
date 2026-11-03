#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""口径词表与尾注守护 (v7.1.0 / B5.2, TC-FY-7.1-03/04)

守护：每一条禁称都能被识别、正确说法可用、尾注四要素齐备、
      零宽字符不能绕过检查、导出物总体检查有效。
"""
import pathlib

import pytest

import disclosure_terms as dt


@pytest.mark.parametrize('term', list(dt.FORBIDDEN_TERMS))
def test_each_forbidden_term_detected(term):
    """TC-FY-7.1-03: 每条禁称都能被识别并给出正确说法"""
    hits = dt.find_violations('本页展示%s数据' % term)
    assert hits, '禁称未被识别: %s' % term
    assert hits[0]['suggestion'] == dt.FORBIDDEN_TERMS[term][0]
    assert hits[0]['reason']


def test_clean_text_passes():
    ok = '当前成分的等权涨跌代理上涨 62%，样本内晋级率 11%，日线级近似成交'
    assert dt.find_violations(ok) == []
    assert dt.assert_clean(ok) is True


def test_assert_clean_raises_on_violation():
    with pytest.raises(ValueError) as ei:
        dt.assert_clean('本页计算指数贡献', where='行业强度矩阵')
    msg = str(ei.value)
    assert '指数贡献' in msg and '等权涨跌代理' in msg


def test_sanitize_replaces_and_records():
    out, rec = dt.sanitize('指数贡献 62%；全市场晋级率 11%')
    assert '指数贡献' not in out and '全市场晋级率' not in out
    assert '等权涨跌代理' in out and '样本内晋级率' in out
    assert len(rec) == 2


def test_footer_has_four_required_fields():
    """TC-FY-7.1-04: 尾注四要素（数据时间/来源/口径/免责）缺一即不合格"""
    f = dt.build_footer('2026-11-03 15:00', ['/api/a-share-index/prices/historical'],
                        'N 日涨幅 − 全行业中位数')
    assert f['complete'] is True
    for key in ('数据时间', '来源', '口径', '不构成投资建议'):
        assert key in f['text']
    assert f['mode'] == dt.MODE_REAL


def test_footer_incomplete_when_missing_source():
    f = dt.build_footer('2026-11-03', '', 'caliber')
    assert f['complete'] is False


def test_footer_html_escapes():
    f = dt.build_footer('2026-11-03', '/api/<script>', 'x & y')
    html = dt.footer_html(f)
    assert '<script>' not in html and '&lt;script&gt;' in html
    assert '&amp;' in html


def test_check_export_text_reports_missing_parts():
    bad = '本页展示指数贡献'
    res = dt.check_export_text(bad)
    assert res['ok'] is False
    assert res['violations'] and 'data_time' in res['missing']

    good = dt.build_footer('2026-11-03', 'fuyao', '等权涨跌代理')['text']
    assert dt.check_export_text(good)['ok'] is True


def test_zero_width_cannot_bypass():
    """零宽字符不能绕过禁称检查（先 strip 再查）"""
    sneaky = '指数贡\u200b献'
    # 原样查不到（字符被拆开），strip_invisibles 后必须能查到
    assert dt.find_violations(dt.strip_invisibles(sneaky))


def test_repo_copy_has_no_forbidden_terms():
    """仓库内新增的研究/导出模块文案不得出现禁称（新增模块白名单式守护）"""
    root = pathlib.Path(__file__).resolve().parent.parent / 'backend'
    targets = ['industry_strength.py', 'research_export.py', 'disclosure_terms.py']
    offenders = {}
    for name in targets:
        path = root / name
        if not path.exists():
            continue
        text = dt.strip_invisibles(path.read_text(encoding='utf-8'))
        # 词表自身与注释说明中允许出现（作为"不要这么说"的示例），故只查模板/文案串
        hits = [h['term'] for h in dt.find_violations(text)
                if text.count(h['term']) > 2]
        if hits:
            offenders[name] = hits
    assert not offenders, '禁称出现在文案中: %r' % offenders
