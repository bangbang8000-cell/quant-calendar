"""
周报附胜率追踪测试 (FR-3.18.5 / T3)

覆盖:
- _winrate_week_stats: 按周区间过滤样本 + 命中率汇总
- build_winrate_section: 小节内容(评估数/窗口/分模型/分评级/评估中/免责) + 数字与 eval_track 一致
- 无样本 → 占位文案
- generate_weekly_report 集成: 周报含胜率小节 (mock 数据获取, 不触网)
"""
import pytest

import report_generator as rg


def _sample(eval_date, level='推荐', provider='deepseek', hits=('n5', 'n10', 'n20')):
    s = {
        'stock_code': '000001.SZ', 'stock_name': '平安银行', 'evaluate_date': eval_date,
        'level': level, 'provider': provider, 'direction': 1, 'available': True,
        'hit_n5': None, 'hit_n10': None, 'hit_n20': None,
    }
    for w in hits:
        s['hit_' + w] = True
    return s


IN_WEEK = [
    _sample('2026-08-10', level='推荐', provider='deepseek'),
    _sample('2026-08-11', level='中性', provider='deepseek', hits=()),  # 中性/未满窗口
    _sample('2026-08-12', level='强烈推荐', provider='openai'),
    _sample('2026-08-13', level='看空', provider='openai'),
]
OUT_WEEK = [_sample('2026-08-03', level='推荐', provider='deepseek')]

START, END = '2026-08-10', '2026-08-14'


# ==================== _winrate_week_stats ====================


def test_winrate_week_stats_filters_by_range():
    week, stats = rg._winrate_week_stats(IN_WEEK + OUT_WEEK, START, END)
    assert len(week) == 4
    # n5: 3 条命中 / 1 条中性不计 → 3/3 = 100%
    agg = stats['overall']['n5']
    assert agg == {'hit': 3, 'total': 3, 'rate': 100.0}


def test_winrate_week_stats_empty():
    week, stats = rg._winrate_week_stats([], START, END)
    assert week == []
    assert stats == {}


# ==================== build_winrate_section ====================


def test_build_winrate_section_content():
    lines, meta = rg.build_winrate_section(IN_WEEK, START, END)
    text = "\n".join(lines)
    assert "本周 AI 评估命中率" in text
    assert "本周评估数: **4**" in text
    assert "| 5日 | 3 / 3 | 100.0% |" in text
    assert "deepseek" in text and "openai" in text      # 分模型
    assert "强烈推荐" in text and "看空" in text          # 分评级
    assert "历史命中率不代表未来收益" in text             # 免责
    assert meta['evaluations'] == 4


def test_build_winrate_section_matches_eval_track():
    import eval_track
    week, stats = rg._winrate_week_stats(IN_WEEK, START, END)
    # 数字与 eval_track.compute_stats 一致
    ref = eval_track.compute_stats(week)
    assert stats == ref
    lines, _ = rg.build_winrate_section(IN_WEEK, START, END)
    for w in eval_track.TRACK_WINDOWS:
        agg = ref['overall'][w]
        rate_txt = f"{agg['rate']}%" if agg['rate'] is not None else "评估中"
        assert f"{eval_track.WINDOW_DAYS[w]}日 | {agg['hit']} / {agg['total']} | {rate_txt} |" in "\n".join(lines)


def test_build_winrate_section_evaluating_marker():
    # 全部样本未满窗口(全中性) → 命中率标注"评估中"
    lines, _ = rg.build_winrate_section([_sample('2026-08-12', hits=())], START, END)
    text = "\n".join(lines)
    assert "评估中" in text
    assert "0 / 0" in text


def test_build_winrate_section_no_samples():
    lines, meta = rg.build_winrate_section([], START, END)
    text = "\n".join(lines)
    assert "本周暂无 AI 评估记录" in text
    assert meta['evaluations'] == 0


# ==================== generate_weekly_report 集成 ====================


def test_weekly_report_includes_winrate(monkeypatch, tmp_path):
    class FakeParser:
        def get_available_dates(self):
            return ['2026-08-10', '2026-08-11', '2026-08-12', '2026-08-13', '2026-08-14']

        def get_holdings_by_date(self, date_str):
            return {'s1': {'strategy_name': '多因子', 'stocks': [{'code': '000001.SZ'}]}}

    monkeypatch.setattr(rg, 'parser', FakeParser())
    monkeypatch.setattr(rg, 'REPORT_DIR', str(tmp_path))
    import eval_track as et
    monkeypatch.setattr(et, 'get_track_summary',
                        lambda username='default', window=None, kline_getter=None: {'samples': IN_WEEK})
    from ai_evaluator import ai_evaluator
    monkeypatch.setattr(ai_evaluator, 'get_enabled_models', lambda: [])
    res = rg.generate_weekly_report('2026-08-14')
    assert res['success']
    assert "本周 AI 评估命中率" in res['content']
    assert "本周评估数" in res['content']
    assert "历史命中率不代表未来收益" in res['content']
