#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.21~23): 多分析师 / 复盘裁判 / 反思闭环测试 (mock LLM, 零真实调用)"""
import pytest

from shortterm import analysts, reflection, roles, synthesizer, store


# ---------- 分析师编排 ----------

def test_run_analysts_all_roles():
    bundle = {}
    def fake_llm(prompt):
        assert prompt  # 有 prompt
        return '这是一份报告。'
    out = analysts.run_analysts(bundle, fake_llm)
    assert set(out) == {r.report_field for r in roles.ROLES}
    assert all(v == '这是一份报告。' for v in out.values())


def test_analyst_failure_degrades_not_breaks_chain():
    bundle = {}
    calls = []
    def fake_llm(prompt):
        calls.append(1)
        if len(calls) == 1:
            raise RuntimeError('模型超时')
        return 'ok'
    out = analysts.run_analysts(bundle, fake_llm)
    # 第一个失败 → [⚠️] 信封, 其余照常
    first = roles.ROLES[0].report_field
    assert out[first].startswith('[⚠️')
    assert '已跳过' in out[first]
    other = roles.ROLES[1].report_field
    assert out[other] == 'ok'
    assert len(out) == len(roles.ROLES)   # 不炸链, 全角色字段都在


def test_sentiment_prompt_has_levels_and_no_recommendation():
    bundle = {'money_effect': {'avg': 2.5, 'median': 1.0, 'positive_rate': 0.6,
                               'limit_up_again_rate': 0.2, 'source': 'settled'},
              'promotion': {'overall': {'rate': 0.5},
                            'tiers': {'1进2': {'rate': 0.5}, '2进3': {'rate': 0.3}}},
              'sentiment_cycle': {'trend': '今日走强', 'current_score': 0.7,
                                  'day_n': 3, 'trough_date': '2026-08-25'},
              'seal_quality': {'broken_rate': 0.3, 'early_seal_rate': 0.5}}
    p = analysts.build_analyst_prompt(roles.ROLES[0], bundle)
    assert '情绪档位' in p and '冰点' in p and '退潮' in p
    assert '不推荐个股' in p


# ---------- 复盘裁判 ----------

def test_parse_verdict_valid_json():
    v = synthesizer.parse_verdict(
        '{"emotion_level": "发酵", "summary": "题材活跃", '
        '"active_directions": ["存储"], "risks": ["炸板率高"], "verify_conditions": ["看1进2"]}')
    assert v is not None
    assert v.emotion_level == '发酵'
    assert v.active_directions == ['存储']


def test_parse_verdict_extracts_fragment_from_codeblock():
    text = '```json\n{"emotion_level": "修复", "summary": "x", "active_directions": [], "risks": [], "verify_conditions": []}\n```'
    v = synthesizer.parse_verdict(text)
    assert v is not None and v.emotion_level == '修复'


def test_parse_verdict_invalid_returns_none():
    assert synthesizer.parse_verdict('完全没有 JSON') is None
    assert synthesizer.parse_verdict('') is None
    assert synthesizer.parse_verdict('{"emotion_level": "好")') is None  # 残缺


def test_normalize_level():
    assert synthesizer.normalize_level('发酵') == '发酵'
    assert synthesizer.normalize_level('随便写的') == ''


def test_render_markdown_structure():
    v = synthesizer.ReviewVerdict(emotion_level='亢奋', summary='强',
                                  active_directions=['a'], risks=['r'], verify_conditions=['c'])
    md = synthesizer.render_markdown(v)
    assert '# 盘面研判 (亢奋)' in md
    assert '## 活跃方向' in md and '- a' in md
    assert '## 风险提示' in md and '## 明日验证条件' in md


def test_judge_review_ok():
    reports = {'sentiment_report': '情绪强'}
    def fake_llm(prompt):
        return ('{"emotion_level": "发酵", "summary": "主线清晰", '
                '"active_directions": ["AI"], "risks": [], "verify_conditions": []}')
    out = synthesizer.judge_review(reports, fake_llm)
    assert out['available'] is True
    assert out['emotion_level'] == '发酵'
    assert out['markdown'].startswith('# 盘面研判')


def test_judge_review_invalid_safe_placeholder():
    def fake_llm(prompt):
        return '模型输出乱码'
    out = synthesizer.judge_review({'sentiment_report': 'x'}, fake_llm)
    assert out['available'] is False
    assert '[⚠️' in out['reason']


def test_judge_review_llm_raises_safe():
    def fake_llm(prompt):
        raise RuntimeError('API 挂了')
    out = synthesizer.judge_review({'sentiment_report': 'x'}, fake_llm)
    assert out['available'] is False and '[⚠️' in out['reason']


# ---------- 反思闭环 ----------

def _bundle(p1, med, count):
    return {'promotion': {'tiers': {'1进2': {'rate': p1}}, 'limit_up_count': count},
            'money_effect': {'median': med}}


def test_vote_direction_up():
    prev, cur = _bundle(0.3, 1.0, 50), _bundle(0.5, 2.0, 70)
    out = reflection.vote_direction(prev, cur)
    assert out['direction'] == 'up'
    assert out['votes']['promotion_1to2'] == 'up'


def test_vote_direction_down():
    prev, cur = _bundle(0.5, 2.0, 70), _bundle(0.3, 1.0, 50)
    out = reflection.vote_direction(prev, cur)
    assert out['direction'] == 'down'


def test_vote_direction_insufficient_flat():
    out = reflection.vote_direction({}, {})
    assert out['direction'] == 'flat'
    assert all(v is None for v in out['votes'].values())


def test_score_results():
    results = [{'verdict': '成立'}, {'verdict': '成立'}, {'verdict': '证伪'},
               {'verdict': '数据不足'}]
    s = reflection.score_results(results)
    assert s['hit'] == 2 and s['miss'] == 1 and s['unknown'] == 1
    assert s['hit_rate'] == round(2 / 3, 3)


def test_save_load_reflection():
    import db as _db
    try:
        with _db._db_lock:
            conn = _db.get_conn()
            conn.execute("DELETE FROM shortterm_pools WHERE pool_type='reflection'")
            conn.commit()
            conn.close()
    except Exception:
        pass
    reflection.save_reflection('2026-09-02', {'direction': 'up'})
    loaded = reflection.load_reflection('2026-09-02')
    assert loaded == {'direction': 'up'}
    assert reflection.load_reflection('2026-09-09') is None
