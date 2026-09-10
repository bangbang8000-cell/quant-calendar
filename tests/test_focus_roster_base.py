# -*- coding: utf-8 -*-
"""V5.4.3 (FR-5.4.3): 重点跟踪评估范围(基准日)解析 + 盘后池就绪等待

用户需求:
  1) 昨晚算好的新入池 → 次日早上 9 点(pre_open)评分时必须纳入 (新入池范围 = 动态);
  2) 晚上 8 点(after_close) 必须纳入当天新入池 (当日收盘信息)。

根因 (2026-09-10 实测): 当日持仓矩阵由 20:00 策略任务生成, 20:00 之前当日为
"继承日"(daily_data 与上一交易日相同) → load_new_pool_codes(当日) 恒为 0 →
盘前评估只算了自选, 完全漏掉昨晚 20:00 算好的新入池。

覆盖: resolve_base_date 基准日解析(盘前/盘后/继承日回退/无数据) /
      is_pool_ready 就绪判定 / load_focus_list_for_session 清单基准 /
      decide_session_with_readiness 盘后等待 / run_session 落库 base_date。
"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import focus_list as fl
import focus_scheduler as fs


# ─── 轻量假聚合器 (可注入, 不依赖真实数据) ──────────────────────

class FakeAgg:
    """all_dates + daily_data + is_inherited_day, 复刻 ViewsAggregator 语义。"""

    def __init__(self, dates, pools):
        self.all_dates = list(dates)
        self.daily_data = {d: [{'stock': c} for c in (pools.get(d) or [])]
                           for d in dates}

    def is_inherited_day(self, date):
        try:
            idx = self.all_dates.index(date)
        except ValueError:
            return False
        if idx == 0:
            return False
        prev = self.all_dates[idx - 1]
        cur = {s['stock'] for s in self.daily_data.get(date, [])}
        prv = {s['stock'] for s in self.daily_data.get(prev, [])}
        return bool(cur) and cur == prv

    def get_prev_trading_date(self, date):
        try:
            idx = self.all_dates.index(date)
        except ValueError:
            return None
        return self.all_dates[idx - 1] if idx > 0 else None

    # 供真实 load_new_pool_codes 使用 (复刻日历视图 + status=new 语义)
    def get_day_view(self, date):
        return {'stocks': [{'code': s['stock']} for s in self.daily_data.get(date, [])]}

    def calculate_status(self, code, date, view='day'):
        """新入池 = 当日池内且不在上一交易日池内 (与真实 calculate_status 同义)。"""
        try:
            idx = self.all_dates.index(date)
        except ValueError:
            return 'unknown'
        prev = self.all_dates[idx - 1] if idx > 0 else None
        cur = {s['stock'] for s in self.daily_data.get(date, [])}
        prv = {s['stock'] for s in self.daily_data.get(prev, [])} if prev else set()
        if code not in cur:
            return 'exited'
        return 'holding' if code in prv else 'new'


def _agg_typical():
    """09-08 生成 09-09 生成; 09-10 当日尚未生成 (继承 09-09) — 复刻线上实测。"""
    return FakeAgg(
        ['2026-09-08', '2026-09-09', '2026-09-10'],
        {
            '2026-09-08': ['A', 'B'],
            '2026-09-09': ['B', 'C'],           # 真矩阵: 新入池 C
            '2026-09-10': ['B', 'C'],           # 继承 09-09 → 未生成
        },
    )


# ─── resolve_base_date: 盘前取"昨晚算好" ────────────────────────

def test_pre_open_base_is_last_completed_trading_day():
    """盘前基准日 = 上一交易日 (昨晚 20:00 算好的池), 而非当日。"""
    agg = _agg_typical()
    base, reason = fl.resolve_base_date('2026-09-10', 'pre_open', agg=agg)
    assert base == '2026-09-09'
    assert reason == 'last_completed'


def test_pre_open_base_skips_inherited_days():
    """往前回溯跳过继承日 (节假日/策略未跑), 取最近一个真矩阵日。"""
    agg = FakeAgg(
        ['2026-09-08', '2026-09-09', '2026-09-10'],
        {
            '2026-09-08': ['A', 'B'],
            '2026-09-09': ['A', 'B'],   # 也继承 → 未生成
            '2026-09-10': ['A', 'B'],
        },
    )
    base, reason = fl.resolve_base_date('2026-09-10', 'pre_open', agg=agg)
    assert base == '2026-09-08'
    assert reason == 'last_completed'


@pytest.mark.parametrize('session', ['intraday_1', 'intraday_2'])
def test_intraday_base_is_last_completed(session):
    """盘中同样取最近已完成池 (当日矩阵 20:00 才生成)。"""
    agg = _agg_typical()
    base, reason = fl.resolve_base_date('2026-09-10', session, agg=agg)
    assert base == '2026-09-09'
    assert reason == 'last_completed'


# ─── resolve_base_date: 盘后取"当天" ───────────────────────────

def test_after_close_base_is_today_when_pool_ready():
    """盘后: 当日矩阵已生成 → 基准日 = 当日 (当天新入池)。"""
    agg = FakeAgg(
        ['2026-09-09', '2026-09-10'],
        {'2026-09-09': ['A', 'B'], '2026-09-10': ['B', 'C']},
    )
    base, reason = fl.resolve_base_date('2026-09-10', 'after_close', agg=agg)
    assert base == '2026-09-10'
    assert reason == 'today'


def test_after_close_falls_back_when_pool_not_ready():
    """盘后但当日矩阵未生成 (策略任务未完) → 回退最近已完成日并标记。"""
    agg = _agg_typical()
    base, reason = fl.resolve_base_date('2026-09-10', 'after_close', agg=agg)
    assert base == '2026-09-09'
    assert reason == 'last_completed'


def test_base_date_no_data_returns_date_itself():
    """完全无可用数据 → 回退 date 本身 (reason=none), 不抛错。"""
    agg = FakeAgg([], {})
    base, reason = fl.resolve_base_date('2026-09-10', 'pre_open', agg=agg)
    assert base == '2026-09-10'
    assert reason == 'none'


# ─── is_pool_ready ────────────────────────────────────────────

def test_is_pool_ready_true_for_generated_day():
    assert fl.is_pool_ready('2026-09-09', agg=_agg_typical()) is True


def test_is_pool_ready_false_for_inherited_day():
    assert fl.is_pool_ready('2026-09-10', agg=_agg_typical()) is False


def test_is_pool_ready_false_for_unknown_date():
    assert fl.is_pool_ready('2026-12-31', agg=_agg_typical()) is False


# ─── load_focus_list_for_session: 清单基准接线 ───────────────────

def test_session_list_pre_open_uses_last_night_pool():
    """盘前清单 = 自选 ∪ 昨晚算好的新入池 (基准日 09-09 的新入池 = C)。"""
    agg = _agg_typical()
    lst = fl.load_focus_list_for_session(
        None, '2026-09-10', 'pre_open', scope='all',
        agg=agg, watchlist_fn=lambda: ['A'])
    codes = sorted(m['code'] for m in lst['members'])
    assert codes == ['A', 'C'], '盘前应纳入昨晚算好的新入池 C, 实际 %s' % codes
    assert lst['base_date'] == '2026-09-09'


def test_session_list_after_close_uses_today_pool():
    """盘后清单 = 自选 ∪ 当天新入池 (当日矩阵已生成: 新入池 = C)。"""
    agg = FakeAgg(
        ['2026-09-09', '2026-09-10'],
        {'2026-09-09': ['A', 'B'], '2026-09-10': ['B', 'C']},
    )
    lst = fl.load_focus_list_for_session(
        None, '2026-09-10', 'after_close', scope='all',
        agg=agg, watchlist_fn=lambda: ['A'])
    assert sorted(m['code'] for m in lst['members']) == ['A', 'C']
    assert lst['base_date'] == '2026-09-10'


# ─── decide_session_with_readiness: 盘后等待池就绪 ───────────────

def test_after_close_waits_when_pool_not_ready():
    """盘后窗口内但当日池未就绪 → 不抢跑 (返回 None, pool_not_ready)。"""
    s, r = fs.decide_session_with_readiness('20:01', pool_ready=False)
    assert s is None
    assert r == 'pool_not_ready'


def test_after_close_runs_when_pool_ready():
    s, r = fs.decide_session_with_readiness('20:05', pool_ready=True)
    assert s == 'after_close'


def test_after_close_late_catchup_within_wait_window():
    """窗口(8min)已过但在等待期内且池已就绪 → 补做盘后评估。"""
    s, r = fs.decide_session_with_readiness('20:30', pool_ready=True)
    assert s == 'after_close'
    assert r == 'pool_ready_late'


def test_after_close_timeout_beyond_wait_window():
    """超出等待上限且未就绪 → 明确超时原因。"""
    s, r = fs.decide_session_with_readiness('21:30', pool_ready=False)
    assert s is None
    assert r in ('outside_window', 'pool_not_ready_timeout')


def test_other_sessions_unaffected_by_pool_readiness():
    """盘前/盘中语义不受池就绪影响 (窗口 8 分钟不变)。"""
    assert fs.decide_session_with_readiness('09:02', pool_ready=False)[0] == 'pre_open'
    assert fs.decide_session_with_readiness('09:02', pool_ready=True)[0] == 'pre_open'
    assert fs.decide_session_with_readiness('09:30', pool_ready=True)[0] is None


def test_non_trading_day_rejected():
    s, r = fs.decide_session_with_readiness('20:05', trading_day=False, pool_ready=True)
    assert s is None
    assert r == 'not_trading_day'


# ─── 落库与 run_session 接线 (V5.4.3) ────────────────────────────

import asyncio                                            # noqa: E402

import db                                                 # noqa: E402
import focus_store                                        # noqa: E402
import focus_eval as fe                                   # noqa: E402


@pytest.fixture(scope="module", autouse=True)
def _db_schema():
    db.init_db()
    yield


@pytest.fixture(autouse=True)
def _clean_evals():
    focus_store.delete_by_date("2026-09-10")
    focus_store.delete_by_date("2026-09-11")
    yield
    focus_store.delete_by_date("2026-09-10")
    focus_store.delete_by_date("2026-09-11")


def test_evaluate_codes_records_base_date(monkeypatch):
    """基准日随评估落库 (raw_json.base_date) — 可审计"这次评分用的是哪天的池"。"""
    import json
    monkeypatch.setattr(fe, "_load_kline", lambda code, limit=30: [])
    asyncio.run(fe.evaluate_codes("2026-09-10", "pre_open", ["600000.SH"],
                                  stock_names={"600000.SH": "浦发银行"},
                                  ai_available=False, base_date="2026-09-09"))
    rows = focus_store.query_by_date("2026-09-10", session="pre_open")
    assert rows, "应落库 1 条"
    raw = json.loads(rows[0]["raw_json"])
    assert raw.get("base_date") == "2026-09-09"


def test_run_session_uses_session_aware_list(monkeypatch):
    """run_session 走"按时点解析基准日"的清单, 并把基准日/范围统计带回。"""
    captured = {}

    def _fake_list(username, date, session, scope="all", **kw):
        captured["session"] = session
        return {"members": [{"code": "A", "name": "甲"}], "base_date": "2026-09-09",
                "base_reason": "last_completed", "watchlist_count": 0,
                "new_pool_count": 1}

    async def _fake_eval(date, session, codes, stock_names=None,
                         ai_available=True, base_date=None):
        captured["base_date"] = base_date
        captured["codes"] = list(codes)
        return {"session": session, "date": date, "evaluated": len(codes),
                "ai_count": 0, "rule_count": len(codes), "degraded": False, "reason": ""}

    monkeypatch.setattr(fl, "load_focus_list_for_session", _fake_list)
    monkeypatch.setattr(fe, "evaluate_codes", _fake_eval)
    import focus_scheduler as _fs
    monkeypatch.setattr(_fs, "is_eligible_date", lambda d, today=None: True)
    out = asyncio.run(fe.run_session("2026-09-10", "pre_open"))
    assert captured["session"] == "pre_open"
    assert captured["base_date"] == "2026-09-09", "应把基准日传给评估落库"
    assert captured["codes"] == ["A"]
    assert out["base_date"] == "2026-09-09"
    assert out["base_reason"] == "last_completed"
    assert out["roster"]["new_pool_count"] == 1

