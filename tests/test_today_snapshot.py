"""
智能首页"今日一屏"测试 (TC-11.10, FR-3.11.7)

覆盖:
- API: /api/system/metrics 的数据源健康指标字段完整
      （成功率 success_rate / degraded / 平均延迟 / 调用次数）
- 静态: 前端今日一屏聚合接线完整（美林/情绪/池变动/健康/重点）
       + app-logic 消费 v3.10 metrics（fetch /api/system/metrics 并暴露 healthMetrics）
"""
import os
import re

import pytest

from data_sources import record_call, get_health_metrics, reset_health
from api.v1.system import get_metrics

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REQUIRED_HEALTH_FIELDS = [
    'name', 'calls', 'successes', 'failures',
    'success_rate', 'avg_latency_ms', 'degraded',
]


@pytest.fixture(autouse=True)
def _clean_health():
    """每个用例前清空数据源健康记录，避免跨用例污染"""
    reset_health()
    yield
    reset_health()


def test_metrics_data_sources_fields_complete():
    """数据源健康指标字段完整（成功率/degraded/延迟/次数）"""
    record_call('sxsc_tushare', True, 120)
    record_call('sxsc_tushare', True, 180)
    # tushare 连续 3 次失败 → degraded
    record_call('tushare', False, 300)
    record_call('tushare', False, 310)
    record_call('tushare', False, 290)

    metrics = get_metrics()
    sources = metrics['data_sources']
    assert len(sources) == 2, f'应含 2 个数据源健康记录: {sources}'

    by_name = {s['name']: s for s in sources}
    for s in sources:
        for f in REQUIRED_HEALTH_FIELDS:
            assert f in s, f'数据源 {s["name"]} 缺少字段 {f}: {s}'

    t = by_name['tushare']
    assert t['calls'] == 3 and t['failures'] == 3
    assert t['success_rate'] == 0.0
    assert t['degraded'] is True, '连续 3 次失败应标记 degraded'
    assert t['avg_latency_ms'] == 300.0

    x = by_name['sxsc_tushare']
    assert x['calls'] == 2 and x['successes'] == 2
    assert x['success_rate'] == 100.0
    assert x['degraded'] is False
    assert x['avg_latency_ms'] == 150.0


def test_metrics_no_calls_returns_empty_sources():
    """无任何数据源调用时返回空列表（前端显示暂无记录）"""
    metrics = get_metrics()
    assert metrics['data_sources'] == []


def test_today_snapshot_wiring_frontend():
    """今日一屏前端接线完整：策略总览含美林/情绪/池变动/重点/健康卡，且数据健康已消费"""
    sp = open(os.path.join(BASE, 'frontend/js/components/strategies-page.js'), encoding='utf-8').read()
    # 四个决策要素 + 健康卡 + 重点，均在"今日一屏"内
    assert 'today-hero' in sp
    for marker in ['美林时钟', '市场情绪', '池变动', '今日重点']:
        assert marker in sp, f'今日一屏缺少聚合要素: {marker}'
    assert 'merrillNext' in sp and 'todayFocus' in sp
    # v3.17.5: 数据健康度/healthRows 已自策略总览移入系统页 (用量统计子页)
    sysp = open(os.path.join(BASE, 'frontend/js/components/system-page.js'), encoding='utf-8').read()
    assert '数据健康度' in sysp, '数据健康度应位于系统页'
    assert 'healthRows' in sysp, '数据健康度(healthRows)应位于系统页'
    assert '/api/system/metrics' in open(os.path.join(BASE, 'frontend/js/app-logic.js'), encoding='utf-8').read() \
        or '/api/system/metrics' in sp, 'app-logic 应消费 /api/system/metrics'

    al = open(os.path.join(BASE, 'frontend/js/app-logic.js'), encoding='utf-8').read()
    assert 'healthMetrics' in al, 'app-logic 应暴露 healthMetrics 状态'
    assert 'loadHealthMetrics' in al, 'app-logic 应实现 loadHealthMetrics'
    # 前端应按 degraded/success_rate 渲染健康状态 (位于系统页数据健康度)
    assert 'degraded' in sysp and 'success_rate' in sysp


def test_today_snapshot_css_uses_tokens():
    """今日一屏新增 CSS 不得引入硬编码色值（TC-11.9 白名单约束延续）"""
    css = open(os.path.join(BASE, 'frontend/css/themes.css'), encoding='utf-8').read()
    # 定位今日一屏区块
    m = re.search(r'/\* =+ v3\.11 \(FR-3\.11\.7\) 今日一屏.*?\*/', css)
    assert m, 'themes.css 应含今日一屏区块'
    start = m.end()
    # 到文件尾部即该区块（追加式新增），检查区块内无 #hex / rgba(数值) 硬编码
    block = css[start:]
    for ln, line in enumerate(block.splitlines(), 1):
        s = line.strip()
        if re.match(r'^--', s):
            continue
        assert not re.search(r'#[0-9a-fA-F]{3,8}\b|rgba?\(\s*\d', s), \
            f'今日一屏 CSS 第 {ln} 行含硬编码色值: {s}'
