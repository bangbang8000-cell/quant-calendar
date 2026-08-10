"""
美林时钟引擎单元测试 (v3.10.0)

覆盖 FR-3.10.1:
- 四象限阶段判定（复苏/过热/滞涨/衰退）
- 多维度评分结构
- 信心度三档（高/中/低）
- 下一阶段预测
- 早期预警（边界/流动性/通胀/外部）
- 归一化函数
- determine_stage 端到端字段完整性

约定:
- 所有测试通过 monkeypatch 将 merrill_clock 的 CACHE/HISTORY/SNAPSHOT
  重定向到临时文件，禁止污染 data/ 运行时数据
- 不触发 AKShare 网络调用（始终显式传入 indicators）
"""
import json
import os
from datetime import datetime, timedelta

import pytest

import merrill_clock as mc


# ===== 测试数据构造 =====

def _base_indicators(**overrides):
    """中性指标（growth=0, inflation=0），可按需覆盖"""
    ind = {
        'pmi': 50.0,
        'gdp_growth': 5.0,
        'industrial_added': 5.5,
        'cpi': 1.5,
        'ppi': 1.0,
        'm2_growth': 8.5,
        'social_financing': 10.0,
        'lpr_1y': 3.5,
        'surveyed_unemployment': 5.0,
        'exports_growth': 5.0,
        'imports_growth': 3.0,
    }
    ind.update(overrides)
    return ind


def _recovery_indicators():
    """growth>0, inflation<0 → 复苏"""
    return _base_indicators(pmi=56.0, gdp_growth=6.5, industrial_added=7.5,
                            cpi=1.0, ppi=0.0)


def _overheat_indicators():
    """growth>0, inflation>0 → 过热"""
    return _base_indicators(pmi=56.0, gdp_growth=6.5, industrial_added=7.5,
                            cpi=2.5, ppi=3.0)


def _stagflation_indicators():
    """growth<0, inflation>0 → 滞胀"""
    return _base_indicators(pmi=44.0, gdp_growth=3.5, industrial_added=3.5,
                            cpi=2.5, ppi=3.0)


def _recession_indicators():
    """growth<0, inflation<0 → 衰退"""
    return _base_indicators(pmi=44.0, gdp_growth=3.5, industrial_added=3.5,
                            cpi=1.0, ppi=0.0)


def _dims(growth=0.0, inflation=0.0, liquidity=0.0, external=0.0):
    """构造维度得分字典（用于直接测试预测/预警等）"""
    return {
        'growth': {'score': growth, 'level': '中位', 'details': {}},
        'inflation': {'score': inflation, 'level': '适中', 'details': {}},
        'liquidity': {'score': liquidity, 'level': '中性', 'details': {}},
        'employment': {'score': 0.0, 'level': '中性', 'details': {}},
        'external': {'score': external, 'level': '中性', 'details': {}},
    }


# ===== 固定装置 =====

@pytest.fixture
def clock(tmp_path, monkeypatch):
    """将美林时钟三份数据文件重定向到临时目录，返回干净的时钟实例"""
    monkeypatch.setattr(mc, 'CACHE_FILE', str(tmp_path / 'cache.json'))
    monkeypatch.setattr(mc, 'HISTORY_FILE', str(tmp_path / 'history.json'))
    monkeypatch.setattr(mc, 'SNAPSHOT_FILE', str(tmp_path / 'snapshot.json'))
    c = mc.MerrillClock()
    # 确定性历史：近期开始 + 无既有阶段，避免时间驱动/意外切换干扰
    c.history['current_stage'] = None
    c.history['current_stage_start'] = (datetime.now() - timedelta(days=5)).isoformat()
    c.history['transitions'] = []
    return c


# ===== TC-10.1 四象限判定 =====

@pytest.mark.parametrize('indicators,expected', [
    (_recovery_indicators(), 'recovery'),
    (_overheat_indicators(), 'overheat'),
    (_stagflation_indicators(), 'stagflation'),
    (_recession_indicators(), 'recession'),
])
def test_four_quadrant_stage_detection(clock, indicators, expected):
    """四象限各自判定为正确阶段"""
    dims = clock._compute_dimension_scores(indicators)
    stage, _, _ = clock._determine_stage_from_scores(dims)
    assert stage == expected


@pytest.mark.parametrize('indicators,expected', [
    (_recovery_indicators(), 'recovery'),
    (_overheat_indicators(), 'overheat'),
    (_stagflation_indicators(), 'stagflation'),
    (_recession_indicators(), 'recession'),
])
def test_determine_stage_end_to_end(clock, indicators, expected):
    """determine_stage 端到端返回正确阶段并记录 transition"""
    info = clock.determine_stage(indicators)
    assert info['stage'] == expected
    assert info['name'] == mc.STAGES[expected]['name']
    # 阶段切换被记录
    assert info['recent_transitions'][0]['to_stage'] == expected
    assert info['recent_transitions'][0]['trigger'] in ('boundary', 'time_driven')


def test_determine_stage_default_indicators(clock, monkeypatch):
    """indicators=None 时走 get_economic_indicators（不触发网络）"""
    monkeypatch.setattr(clock, 'get_economic_indicators',
                        lambda: _overheat_indicators())
    info = clock.determine_stage()
    assert info['stage'] == 'overheat'


# ===== 多维度评分结构 =====

def test_dimension_scores_structure(clock):
    dims = clock._compute_dimension_scores(_overheat_indicators())
    assert set(dims.keys()) == {'growth', 'inflation', 'liquidity', 'employment', 'external'}
    for name, d in dims.items():
        assert 'score' in d and 'level' in d and 'details' in d
    # 过热: growth 与 inflation 均为正
    assert dims['growth']['score'] > 0
    assert dims['inflation']['score'] > 0


def test_dimension_scores_neutral(clock):
    dims = clock._compute_dimension_scores(_base_indicators())
    assert dims['growth']['score'] == 0.0
    assert dims['inflation']['score'] == 0.0


def test_weighted_score_matches_weights(clock):
    """综合得分 = Σ SCORING_WEIGHTS[k] * dims[k]['score']"""
    ind = _overheat_indicators()
    info = clock.determine_stage(ind)
    dims = clock._compute_dimension_scores(ind)
    expected = round(sum(mc.SCORING_WEIGHTS[k] * dims[k]['score'] for k in mc.SCORING_WEIGHTS), 2)
    assert info['confidence']['weighted_score'] == expected


# ===== 信心度三档 =====

def test_confidence_high_tier(clock):
    """distance>1.2 → 高信心（强过热）"""
    info = clock.determine_stage(_overheat_indicators())
    assert info['confidence']['distance_from_center'] > 1.2
    assert info['confidence']['level'] == '高'


def test_confidence_mid_tier(clock):
    """0.5<distance<=1.2 → 中信心（中强度）"""
    ind = _base_indicators(pmi=53.0, gdp_growth=6.0, industrial_added=6.5,
                           cpi=1.7, ppi=1.5)
    info = clock.determine_stage(ind)
    d = info['confidence']['distance_from_center']
    assert 0.5 < d <= 1.2
    assert info['confidence']['level'] == '中'


def test_confidence_low_tier(clock):
    """distance<=0.5 → 低信心（近中性）"""
    ind = _base_indicators(pmi=50.5, gdp_growth=5.2, industrial_added=5.7,
                           cpi=1.55, ppi=1.1)
    info = clock.determine_stage(ind)
    d = info['confidence']['distance_from_center']
    assert d <= 0.5
    assert info['confidence']['level'] == '低'


# ===== 下一阶段预测 =====

@pytest.mark.parametrize('stage,expected_next', [
    ('recovery', 'overheat'),
    ('overheat', 'stagflation'),
    ('stagflation', 'recession'),
    ('recession', 'recovery'),
])
def test_next_stage_prediction(clock, stage, expected_next):
    """预测的下一阶段 = STAGES[stage] 定义的 next_stage"""
    pred = clock._compute_next_stage_prediction(_dims(), stage)
    assert pred['next_stage'] == expected_next
    assert pred['next_stage_name'] == mc.STAGES[expected_next]['name']
    assert 0 <= pred['transition_probability'] <= 1
    assert 'boundary_distance' in pred
    assert len(pred['transition_signals']) > 0


def test_next_stage_probability_bounds(clock):
    """转移概率被限制在 [0,1]，boundary_distance 方向正确"""
    # 复苏→过热：通胀越高概率越大
    pred = clock._compute_next_stage_prediction(_dims(inflation=1.5), 'recovery')
    assert pred['transition_probability'] == 1.0
    pred = clock._compute_next_stage_prediction(_dims(inflation=-2.0), 'recovery')
    assert pred['transition_probability'] == 0.0


# ===== 早期预警 =====

def test_early_warning_boundary_proximity(clock):
    warnings = clock._compute_early_warnings(_dims(), 'recovery', boundary_proximity=0.1)
    types = {w['type'] for w in warnings}
    assert 'boundary_proximity' in types
    assert types <= {'boundary_proximity'}


def test_early_warning_no_boundary_when_far(clock):
    warnings = clock._compute_early_warnings(_dims(), 'recovery', boundary_proximity=0.5)
    assert 'boundary_proximity' not in {w['type'] for w in warnings}


def test_early_warning_liquidity_tightening(clock):
    warnings = clock._compute_early_warnings(
        _dims(liquidity=-1.5), 'recovery', boundary_proximity=0.9)
    assert 'liquidity_tightening' in {w['type'] for w in warnings}


def test_early_warning_inflation_surge(clock):
    warnings = clock._compute_early_warnings(
        _dims(inflation=2.0), 'recovery', boundary_proximity=0.9)
    assert 'inflation_surge' in {w['type'] for w in warnings}


def test_early_warning_external_headwind(clock):
    warnings = clock._compute_early_warnings(
        _dims(external=-1.5), 'recovery', boundary_proximity=0.9)
    assert 'external_headwind' in {w['type'] for w in warnings}


def test_early_warnings_empty_when_calm(clock):
    warnings = clock._compute_early_warnings(_dims(), 'recovery', boundary_proximity=0.9)
    assert warnings == []


# ===== 归一化函数 =====

@pytest.mark.parametrize('raw,center,scale,invert,expected', [
    (53, 50, 3, False, 1.0),
    (47, 50, 3, False, -1.0),
    (6.0, 5.0, 1.0, True, -1.0),   # invert: 6.0(高失业) → -1
    (4.0, 5.0, 1.0, True, 1.0),    # invert: 4.0(低失业) → +1
    (50, 50, 3, False, 0.0),
])
def test_normalize_score(raw, center, scale, invert, expected):
    assert mc._normalize_score(raw, center, scale, invert) == expected


# ===== determine_stage 字段完整性 =====

def test_stage_info_fields_complete(clock):
    info = clock.determine_stage(_recovery_indicators())
    for key in ['stage', 'name', 'description', 'dimension_scores',
                'confidence', 'next_stage_prediction', 'early_warnings',
                'recent_transitions', 'timing', 'indicators']:
        assert key in info, f'缺少字段 {key}'
    assert 'level' in info['confidence']
    assert 'duration_days' in info['timing']
    assert 'progress_percent' in info['timing']
    assert 'maturity' in info['timing']
    assert 'predicted_end' in info['timing']


def test_no_transition_when_stage_unchanged(clock):
    """阶段未变化时不产生新 transition"""
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=5)).isoformat()
    clock.history['transitions'] = []
    info = clock.determine_stage(_recovery_indicators())
    assert info['recent_transitions'] == []


# ===== TC-10.2 时间驱动 / 边界切换 =====

def test_time_driven_switch_trigger(clock, monkeypatch):
    """超期(≥95%) + 临边界(<0.3σ) → 时间驱动切换到 next_stage"""
    clock.history['current_stage'] = 'recession'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=1200)).isoformat()
    clock.history['transitions'] = []
    # 计算阶段=recession，边界距离 0.1
    monkeypatch.setattr(clock, '_determine_stage_from_scores',
                        lambda dims: ('recession', 0.8, 0.1))
    info = clock.determine_stage(_recession_indicators())
    # 强制切换到 recession 的 next_stage = recovery
    assert info['stage'] == 'recovery'
    # 下游字段必须与切换后阶段一致（防止 stage_info/预测/预警引用切换前阶段）
    assert info['name'] == mc.STAGES['recovery']['name']
    assert info['next_stage_prediction']['next_stage'] == mc.STAGES['recovery']['historical_stats']['next_stage']
    assert info['confidence']['boundary_proximity'] == 0.5  # 刚进入新阶段，边界距离重置
    t = info['recent_transitions'][0]
    assert t['trigger'] == 'time_driven'
    assert '时间驱动' in t['reason']
    assert t['from_stage'] == 'recession'
    assert t['to_stage'] == 'recovery'
    assert 'duration_days' in t and 'duration_months' in t


def test_boundary_switch_trigger(clock, monkeypatch):
    """近期开始 + 正常边界 → trigger=boundary，非时间驱动"""
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=5)).isoformat()
    clock.history['transitions'] = []
    monkeypatch.setattr(clock, '_determine_stage_from_scores',
                        lambda dims: ('recession', 0.8, 0.5))
    info = clock.determine_stage(_recession_indicators())
    assert info['stage'] == 'recession'  # 未被强制切换
    t = info['recent_transitions'][0]
    assert t['trigger'] == 'boundary'
    assert t['reason'] == '边界/数据驱动切换'


def test_time_driven_not_fired_when_not_overdue(clock, monkeypatch):
    """临边界但未超期 → 不触发时间驱动"""
    clock.history['current_stage'] = 'overheat'  # 与计算阶段不同，记录 boundary 切换
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=5)).isoformat()
    clock.history['transitions'] = []
    monkeypatch.setattr(clock, '_determine_stage_from_scores',
                        lambda dims: ('recession', 0.8, 0.1))
    info = clock.determine_stage(_recession_indicators())
    assert info['stage'] == 'recession'
    assert info['recent_transitions'][0]['trigger'] == 'boundary'


def test_time_driven_not_fired_when_far_from_boundary(clock, monkeypatch):
    """超期但远离边界 → 不触发时间驱动"""
    clock.history['current_stage'] = 'overheat'  # 与计算阶段不同，记录 boundary 切换
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=1200)).isoformat()
    clock.history['transitions'] = []
    monkeypatch.setattr(clock, '_determine_stage_from_scores',
                        lambda dims: ('recession', 0.8, 0.9))
    info = clock.determine_stage(_recession_indicators())
    assert info['stage'] == 'recession'
    assert info['recent_transitions'][0]['trigger'] == 'boundary'


def test_transition_history_capped_at_20(clock, monkeypatch):
    """切换记录最多保留 20 条"""
    clock.history['transitions'] = [{'to_stage': 'recovery'} for _ in range(25)]
    clock.history['current_stage'] = 'overheat'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=5)).isoformat()
    monkeypatch.setattr(clock, '_determine_stage_from_scores',
                        lambda dims: ('recession', 0.8, 0.5))
    info = clock.determine_stage(_recession_indicators())
    assert len(clock.history['transitions']) <= 20
    assert len(info['recent_transitions']) <= 5  # API 只暴露前 5


def test_transition_without_previous_stage(clock, monkeypatch):
    """无既有阶段时切换：from_stage=None，不计算 duration"""
    clock.history['current_stage'] = None
    clock.history['current_stage_start'] = None
    clock.history['transitions'] = []
    monkeypatch.setattr(clock, '_determine_stage_from_scores',
                        lambda dims: ('overheat', 0.8, 0.5))
    info = clock.determine_stage(_overheat_indicators())
    t = info['recent_transitions'][0]
    assert t['from_stage'] is None
    assert 'duration_days' not in t


def test_elif_no_start_sets_default(clock, monkeypatch):
    """阶段不变但 start 为空（极端）→ 设置默认起始日期"""
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = None
    clock.history['transitions'] = []
    clock.determine_stage(_recovery_indicators())
    assert clock.history['current_stage_start'] == datetime(2024, 9, 24).isoformat()


def test_maturity_early(clock):
    """阶段进度 <33% → 早期"""
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=5)).isoformat()
    info = clock.determine_stage(_recovery_indicators())
    assert info['timing']['maturity'] == '早期'


def test_maturity_mid(clock):
    """阶段进度 33%~66% → 中期"""
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=270)).isoformat()
    info = clock.determine_stage(_recovery_indicators())
    assert info['timing']['maturity'] == '中期'


def test_maturity_late(clock):
    """阶段进度 ≥66% → 后期"""
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=2000)).isoformat()
    info = clock.determine_stage(_recovery_indicators())
    assert info['timing']['maturity'] == '后期'


# ===== TC-10.3 快照持久化 / 数据隔离 =====

def test_snapshot_written_on_determine_stage(clock):
    """determine_stage 后 SNAPSHOT_FILE 写入一条快照，字段完整"""
    info = clock.determine_stage(_recovery_indicators())
    assert os.path.exists(mc.SNAPSHOT_FILE)
    snapshots = json.load(open(mc.SNAPSHOT_FILE, encoding='utf-8'))
    assert len(snapshots) == 1
    s = snapshots[0]
    for key in ('timestamp', 'stage', 'stage_name', 'confidence', 'dimension_scores', 'timing'):
        assert key in s, f'快照缺少字段 {key}'
    assert s['stage'] == info['stage']
    assert s['stage_name'] == info['name']
    assert s['confidence'] == info['confidence']


def test_snapshot_capped_at_100(clock):
    """快照文件最多保留 100 条，新快照插在最前"""
    with open(mc.SNAPSHOT_FILE, 'w', encoding='utf-8') as f:
        json.dump([{'timestamp': f'2025-01-01T00:00:0{i:02d}', 'stage': 'recovery'}
                   for i in range(100)], f)
    clock.determine_stage(_recovery_indicators())
    snapshots = json.load(open(mc.SNAPSHOT_FILE, encoding='utf-8'))
    assert len(snapshots) == 100
    assert snapshots[0]['stage'] == 'recovery'  # 最新快照在最前


def test_snapshot_failure_tolerant(clock, tmp_path, monkeypatch):
    """快照写入失败（目标为目录）不中断 determine_stage"""
    monkeypatch.setattr(mc, 'SNAPSHOT_FILE', str(tmp_path))  # 目录，open 失败
    info = clock.determine_stage(_recovery_indicators())
    assert info['stage'] == 'recovery'


def test_no_data_pollution(clock):
    """TC-10.8: 测试期间真实 data/ 运行文件 mtime/大小不变"""
    import paths
    real_files = [os.path.join(paths.BASE_DIR, 'data', f'merrill_{n}.json')
                  for n in ('cache', 'history', 'snapshots')]

    def state():
        return {p: (os.path.getmtime(p), os.path.getsize(p)) if os.path.exists(p) else None
                for p in real_files}

    before = state()
    info = clock.determine_stage(_recovery_indicators())
    clock._save_cache()
    clock._save_history()
    clock._save_snapshot(info)
    assert state() == before


def test_init_tolerates_corrupt_files(monkeypatch, tmp_path):
    """损坏的缓存/历史文件 → 回退默认结构，不抛异常"""
    (tmp_path / 'cache.json').write_text('{corrupt', encoding='utf-8')
    (tmp_path / 'history.json').write_text('not json at all', encoding='utf-8')
    monkeypatch.setattr(mc, 'CACHE_FILE', str(tmp_path / 'cache.json'))
    monkeypatch.setattr(mc, 'HISTORY_FILE', str(tmp_path / 'history.json'))
    monkeypatch.setattr(mc, 'SNAPSHOT_FILE', str(tmp_path / 'snapshots.json'))
    c = mc.MerrillClock()
    assert c.cache == {}
    # 损坏 history → 默认结构 → 自动补默认复苏起点
    assert c.history['current_stage'] == 'recovery'
    assert c.history['current_stage_start']


def test_save_cache_round_trip(clock):
    """_save_cache 后重新加载内容一致"""
    clock.cache['probe'] = {'k': 1}
    clock._save_cache()
    loaded = json.load(open(mc.CACHE_FILE, encoding='utf-8'))
    assert loaded['probe'] == {'k': 1}


# ===== TC-10.3 指标采集 / 缓存 =====

def test_indicators_cached_within_day(clock, monkeypatch):
    """当日缓存命中时不再重新采集（fetch 只调一次）"""
    calls = []
    monkeypatch.setattr(clock, '_fetch_real_macro_data',
                        lambda: (calls.append(1), {'cpi': 7.7})[1])
    ind1 = clock.get_economic_indicators()
    ind2 = clock.get_economic_indicators()
    assert len(calls) == 1
    assert ind1 is ind2  # 同一缓存对象
    assert ind1['cpi'] == 7.7


def test_indicators_fallback_drift(clock, monkeypatch):
    """AKShare 无数据时使用默认值 + 时间漂移"""
    monkeypatch.setattr(clock, '_fetch_real_macro_data', lambda: None)
    ind = clock.get_economic_indicators()
    assert ind['pmi'] > 50.8          # 正向漂移（自 2024-09-24 已 22 个月）
    assert ind['m2_growth'] < 9.8     # 负向漂移


def test_indicators_real_data_merge(clock, monkeypatch):
    """AKShare 有数据时合并覆盖，默认字段保留"""
    monkeypatch.setattr(clock, '_fetch_real_macro_data', lambda: {'cpi': 9.9})
    ind = clock.get_economic_indicators()
    assert ind['cpi'] == 9.9
    assert ind['pmi'] == 50.8  # 默认保留


def test_indicator_drift_direction(clock):
    """漂移方向：cpi/ppi 上行，m2/社融下行；不在漂移表的不变"""
    base = {'cpi': 1.0, 'ppi': 1.0, 'm2_growth': 10.0, 'social_financing': 10.0,
            'unrelated': 5.0}
    out = clock._apply_indicator_drift(dict(base))
    assert out['cpi'] > base['cpi']
    assert out['ppi'] > base['ppi']
    assert out['m2_growth'] < base['m2_growth']
    assert out['social_financing'] < base['social_financing']
    assert out['unrelated'] == 5.0


# ===== TC-10.3 阶段维护 / 重评估 / 阶段详情 =====

def test_set_stage_start_valid(clock):
    res = clock.set_stage_start('2024-09-24', stage='recovery')
    assert res['current_stage'] == 'recovery'
    assert res['current_stage_start'] == '2024-09-24T00:00:00'
    assert clock.history['current_stage'] == 'recovery'
    assert clock.history['current_stage_start'] == '2024-09-24T00:00:00'


def test_set_stage_start_invalid_stage(clock):
    res = clock.set_stage_start('2024-09-24', stage='nonsense')
    assert 'error' in res
    assert clock.history['current_stage'] is None  # 未修改


def test_set_stage_start_only_date(clock):
    clock.history['current_stage'] = 'recovery'
    res = clock.set_stage_start('2025-01-01')
    assert res['current_stage'] == 'recovery'  # 阶段不变
    assert res['current_stage_start'] == '2025-01-01T00:00:00'


def test_seed_history_sets_current_stage(clock):
    transitions = [
        {'from_stage': 'stagflation', 'to_stage': 'recession', 'transition_date': '2024-01-15',
         'from_name': '滞胀期', 'to_name': '衰退期'},
        {'from_stage': 'recession', 'to_stage': 'recovery', 'transition_date': '2024-09-24',
         'from_name': '衰退期', 'to_name': '复苏期'},
    ]
    clock.seed_history(transitions)
    assert clock.history['current_stage'] == 'recession'  # 第一条的 to_stage
    assert len(clock.history['transitions']) == 2
    loaded = json.load(open(mc.HISTORY_FILE, encoding='utf-8'))
    assert loaded['current_stage'] == 'recession'


def test_seed_history_empty(clock):
    clock.history['current_stage'] = 'overheat'
    clock.seed_history([])
    assert clock.history['current_stage'] == 'overheat'  # 空列表不改阶段


def test_reevaluate_force_clears_cache(clock, monkeypatch):
    today_key = f"indicators_{datetime.now().strftime('%Y%m%d')}"
    clock.cache[today_key] = {'fetch_time': datetime.now().isoformat(), 'data': {'pmi': 1.0}}
    calls = []
    monkeypatch.setattr(clock, '_fetch_real_macro_data',
                        lambda: (calls.append(1), {'cpi': 6.6})[1])
    info = clock.reevaluate(force=True)
    assert len(calls) == 1  # force 清缓存后触发重新采集
    assert clock.cache[today_key]['data']['cpi'] == 6.6
    assert info['stage']


def test_reevaluate_no_force(clock, monkeypatch):
    monkeypatch.setattr(clock, 'determine_stage', lambda indicators=None: {'stage': 'sentinel'})
    assert clock.reevaluate(force=False) == {'stage': 'sentinel'}


def test_get_stage_detail_invalid(clock):
    assert clock.get_stage_detail('unknown') is None


def test_get_stage_detail_known(clock):
    info = clock.get_stage_detail('recovery')
    assert info['criteria']['growth'] == '经济增长上行'
    assert info['criteria']['inflation'] == '通胀水平下行'
    assert len(info['case_studies']) > 0
    assert info['_is_current'] is False  # fixture 中无当前阶段
    assert info['_lastPeriod']['note'] == '暂无历史记录'


def test_get_stage_detail_current_timing(clock):
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=100)).isoformat()
    info = clock.get_stage_detail('recovery')
    assert info['_is_current'] is True
    t = info['_current_timing']
    assert 95 <= t['duration_days'] <= 101
    assert t['maturity'] in ('早期', '中期', '晚期')
    assert 'predicted_end' in t


def test_get_stage_detail_noncurrent_history(clock):
    clock.history['transitions'] = [
        {'from_stage': 'overheat', 'to_stage': 'stagflation', 'transition_date': '2022-01-01',
         'from_name': '过热期', 'to_name': '滞胀期', 'duration_days': 365, 'duration_months': 12.0},
        {'from_stage': 'stagflation', 'to_stage': 'recession', 'transition_date': '2023-01-01',
         'from_name': '滞胀期', 'to_name': '衰退期', 'duration_days': 365, 'duration_months': 12.0},
    ]
    clock.history['current_stage'] = 'recession'
    info = clock.get_stage_detail('stagflation')
    assert info['_is_current'] is False
    assert len(info['_history']) == 1
    h = info['_history'][0]
    assert h['start'] == '2022-01-01'
    assert h['end'] == '2023-01-01'
    assert h['note'] == '过热期→滞胀期'
    assert info['_lastPeriod'] == info['_history'][0]
