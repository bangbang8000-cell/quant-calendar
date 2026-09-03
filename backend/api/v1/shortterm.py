#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.08): 短线复盘 API (/api/shortterm)

- GET  /api/shortterm/latest-session : 最近已收盘交易日
- GET  /api/shortterm/pools?date=    : 三池 + 连板梯队 (store 优先, 实时兜底并入库)
- GET  /api/shortterm/lhb?date=      : 龙虎榜
- GET  /api/shortterm/sector-flow?   : 板块资金流(实时口径)
- GET  /api/shortterm/dates          : 已抓取日期列表
- POST /api/shortterm/capture?date=  : 抓取三池+龙虎榜+昨日涨停表现入库(调度/手动)
- V5.2.1:
- GET  /api/shortterm/emotion?date=        : 派生情绪指标(赚钱效应/晋级率/连板溢价/情绪周期)
- GET  /api/shortterm/market-facts?date=   : 市场事实(封板质量/亏钱效应/反馈矩阵/题材结构)
- GET  /api/shortterm/verification?date=   : 明日验证条件(三态核验+基准发生率)
- GET  /api/shortterm/weekly?end=          : 近5日热度 + 龙头谱系
- GET  /api/shortterm/overview?date=       : 复盘看板聚合(硬指标卡+事实+验证条件)

数据诚实性: 失败字段为 None(前端标不可用), 空池是合法结果(空数组)。
"""
import logging

from fastapi import APIRouter, Depends

from auth import get_current_active_user
from shortterm import fetchers, ladder, lhb, sector_flow, store
from shortterm import emotion_metrics, market_facts, verification, weekly
from shortterm import analysts, archive, backtest, intraday, reflection, synthesizer
from shortterm.trade_calendar import latest_session, is_settled, is_trade_day, last_trade_dates

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/shortterm", tags=["短线复盘"])


def _load_or_fetch(date: str, pool_type: str, fetch_fn):
    """store 优先; 无则实时抓取并入库; 失败返回 None(前端标不可用)"""
    cached = store.load_pool(date, pool_type)
    if cached is not None:
        return cached
    out = fetch_fn(date)
    if out.get('available'):
        store.save_pool(date, pool_type, out['rows'])
        return out['rows']
    return None


@router.get("/latest-session")
async def get_latest_session(user: dict = Depends(get_current_active_user)):
    return {'success': True, 'date': latest_session()}


@router.get("/pools")
async def get_pools(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    zt = _load_or_fetch(d, 'zt', fetchers.fetch_zt_pool)
    zb = _load_or_fetch(d, 'zb', fetchers.fetch_zb_pool)
    dt = _load_or_fetch(d, 'dt', fetchers.fetch_dt_pool)
    return {'success': True, 'date': d, 'settled': is_settled(d),
            'zt': zt, 'zb': zb, 'dt': dt,
            'ladder': ladder.ladder_gap(zt or [])}


@router.get("/lhb")
async def get_lhb(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    rows = _load_or_fetch(d, 'lhb', lambda x: lhb.fetch_lhb(x, x))
    return {'success': True, 'date': d, 'settled': is_settled(d), 'rows': rows}


@router.get("/sector-flow")
async def get_sector_flow(indicator: str = '今日', sector_type: str = '行业资金流',
                          user: dict = Depends(get_current_active_user)):
    """板块资金流。V5.2.3: 先读 store 缓存(今日 10min / 5日10日 1h 新鲜度), 命中则秒开;
    未命中才实时抓(东财→同花顺兜底)并落盘。"""
    import time
    _FRESH = {'今日': 600, '5日': 3600, '10日': 3600}
    cached = store.latest_sector_flow(sector_type, indicator)
    if cached and cached.get('captured_at'):
        try:
            age = time.time() - time.mktime(time.strptime(cached['captured_at'][:19], '%Y-%m-%dT%H:%M:%S'))
            if age < _FRESH.get(indicator, 600):
                return {'success': True, 'available': True, 'source': 'cache',
                        'indicator': indicator, 'sector_type': sector_type,
                        'rows': cached.get('rows') or []}
        except Exception:  # noqa: BLE001 — 时间解析失败走实时
            pass
    out = sector_flow.fetch_sector_flow(indicator, sector_type)
    if out.get('available'):
        store.save_sector_flow(sector_type, indicator, out['rows'])
    return {'success': True, **out}


@router.get("/dates")
async def get_dates(user: dict = Depends(get_current_active_user)):
    return {'success': True, 'dates': store.list_dates()}


@router.post("/capture")
async def capture(date: str = None, user: dict = Depends(get_current_active_user)):
    """抓取三池 + 龙虎榜 + 昨日涨停表现(定稿记录)并入库(调度/手动触发)"""
    d = date or latest_session()
    results = {}
    for pool_type, fn in [('zt', fetchers.fetch_zt_pool),
                          ('zb', fetchers.fetch_zb_pool),
                          ('dt', fetchers.fetch_dt_pool),
                          ('lhb', lambda x: lhb.fetch_lhb(x, x)),
                          ('prev_zt', emotion_metrics.fetch_prev_pool)]:
        out = fn(d)
        if out.get('available'):
            store.save_pool(d, pool_type, out['rows'])
            results[pool_type] = len(out['rows'])
        else:
            results[pool_type] = None
    return {'success': True, 'date': d, 'captured': results}


# ---------- V5.2.1: 派生情绪指标与盘面 ----------

def _baselines_from_history(date: str, days: int = 10) -> dict:
    """从缓存池子算近 N 日各指标历史(不现抓网络), 供验证条件基准。

    仅用缓存数据; 某指标无历史 → threshold None → 数据不足(不算判错)。
    """
    from statistics import median as _median
    dates = last_trade_dates(days, date) or []
    hist = {'limit_up_count': [], 'highest_board': [], 'broken_rate': [],
            'limit_down_count': [], 'promotion_1to2': [], 'money_median': []}
    for d in dates:
        zt = store.load_pool(d, 'zt')
        zb = store.load_pool(d, 'zb')
        dt = store.load_pool(d, 'dt')
        if zt is not None:
            hist['limit_up_count'].append(len(zt))
            boards = [r['boards'] for r in zt if r.get('boards') is not None]
            hist['highest_board'].append(max(boards) if boards else 0)
            zb_n = len(zb) if zb is not None else 0
            denom = len(zt) + zb_n
            hist['broken_rate'].append(round(zb_n / denom, 3) if denom else None)
        if dt is not None:
            hist['limit_down_count'].append(len(dt))
        prev = store.load_pool(emotion_metrics.prev_trade_date(d), 'zt')
        if zt is not None and prev is not None:
            today_codes = {r['ts_code'] for r in zt}
            bucket = [r['ts_code'] in today_codes for r in prev if r.get('boards') == 1]
            if bucket:
                hist['promotion_1to2'].append(round(sum(bucket) / len(bucket), 3))
        pv = store.load_pool(d, 'prev_zt')
        if pv:
            vals = [r['ret'] for r in pv if r.get('ret') is not None]
            if vals:
                hist['money_median'].append(round(_median(vals), 2))
    out = {}
    for k, vals in hist.items():
        if not vals:
            out[k] = {'threshold': None, 'base_rate': None, 'sample': 0}
        else:
            direction = '<=' if k in ('broken_rate', 'limit_down_count') else '>='
            out[k] = verification.direction_baseline(
                [{'v': v} for v in vals if v is not None], 'v', direction)
    return out


@router.get("/emotion")
async def get_emotion(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    metrics = emotion_metrics.build_metrics(d)
    zt = store.load_pool(d, 'zt')
    metrics['ladder'] = ladder.ladder_gap(zt or [])
    return {'success': True, **metrics}


@router.get("/market-facts")
async def get_market_facts(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    return {'success': True, **market_facts.build_facts(d)}


def _parse_custom(custom: str):
    """用户自设条件: '{"limit_up_count":70}' → dict; 非法 → None(忽略)"""
    if not custom:
        return None
    try:
        import json
        obj = json.loads(custom)
        return obj if isinstance(obj, dict) else None
    except Exception:  # noqa: BLE001
        return None


def _build_conditions(date: str, custom: str = None) -> list:
    """生成验证条件(用户自设覆盖基线阈值) + 落盘供次日核验。"""
    bundle = _overview_bundle(date)
    baselines = _baselines_from_history(date)
    overrides = _parse_custom(custom)
    if overrides:
        for k, v in overrides.items():
            if isinstance(v, (int, float)):
                baselines[k] = {**baselines.get(k, {}), 'threshold': v}
    conds = verification.build_conditions(bundle, baselines)
    store.save_pool(date, 'conditions', conds)
    return conds


@router.get("/verification")
async def get_verification(date: str = None, custom: str = None,
                           user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    conds = _build_conditions(d, custom)
    return {'success': True, 'date': d,
            'conditions': conds, 'summary': verification.summarize(conds)}


@router.get("/verification/history")
async def get_verification_history(date: str = None,
                                   user: dict = Depends(get_current_active_user)):
    """读取某日已落盘的验证条件(供次日核验回看)"""
    d = date or latest_session()
    conds = store.load_pool(d, 'conditions') or []
    return {'success': True, 'date': d, 'conditions': conds}


@router.get("/weekly")
async def get_weekly(end: str = None, user: dict = Depends(get_current_active_user)):
    return {'success': True, **weekly.industry_heat(end=end)}


def _overview_bundle(date: str) -> dict:
    """复盘看板聚合: 情绪指标 + 市场事实 + 梯队(供前端与验证条件共用)"""
    metrics = emotion_metrics.build_metrics(date)
    facts = market_facts.build_facts(date)
    zt = store.load_pool(date, 'zt')
    metrics['ladder'] = ladder.ladder_gap(zt or [])
    return {**metrics, **facts}


@router.get("/overview")
async def get_overview(date: str = None, custom: str = None,
                       user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    bundle = _overview_bundle(d)
    conditions = _build_conditions(d, custom)
    return {'success': True, 'date': d,
            'emotion': {k: bundle[k] for k in ('money_effect', 'promotion',
                                               'consec_premium', 'sentiment_cycle')},
            'facts': {k: bundle[k] for k in ('seal_quality', 'loss_effect',
                                             'feedback_matrix', 'theme_structure')},
            'ladder': bundle['ladder'],
            'conditions': conditions,
            'summary': verification.summarize(conditions),
            'weekly': weekly.industry_heat(end=d)}


# ---------- V5.2.2: AI 多视角复盘与闭环 ----------

def _build_llm_invoke():
    """生产接线: ai_eval.generate_review(多模型 fallback); 未配置 → None"""
    try:
        from ai_eval import AIEvalMixin
        ai = AIEvalMixin()

        def invoke(prompt):
            text = ai.generate_review(prompt, system_prompt=None, max_tokens=1500)
            if not text:
                raise RuntimeError('AI 返回为空')
            return text
        return invoke
    except Exception as e:  # noqa: BLE001
        logger.warning('AI 未配置, 复盘生成不可用: %s', e)
        return None


def _review_bundle(date: str) -> dict:
    """分析师数据包: 情绪/事实/梯队 + 板块资金 + 龙虎榜 + 近5日热度"""
    bundle = _overview_bundle(date)
    bundle['sector_flow'] = sector_flow.fetch_sector_flow('今日', '行业资金流')
    bundle['lhb_rows'] = store.load_pool(date, 'lhb') or []
    bundle['weekly'] = weekly.industry_heat(end=date)
    return bundle


@router.post("/review")
async def run_review(date: str = None, user: dict = Depends(get_current_active_user)):
    """运行多分析师 + 裁判, 产出结构化盘面研判并落盘"""
    d = date or latest_session()
    invoke = _build_llm_invoke()
    if invoke is None:
        return {'success': True, 'date': d, 'available': False,
                'reason': '[⚠️ AI 未配置, 复盘生成不可用]', 'reports': {}, 'markdown': ''}
    bundle = _review_bundle(d)
    reports = analysts.run_analysts(bundle, invoke)
    verdict = synthesizer.judge_review(reports, invoke)
    result = {'date': d, 'reports': reports, **verdict}
    store.save_pool(d, 'review', [result])
    return {'success': True, 'date': d, **verdict, 'reports': reports}


@router.get("/review")
async def get_review(date: str = None, user: dict = Depends(get_current_active_user)):
    """读取已落盘复盘; 无 → None"""
    d = date or latest_session()
    rows = store.load_pool(d, 'review')
    return {'success': True, 'date': d, 'review': rows[0] if rows else None}


@router.get("/review/dates")
async def get_review_dates(user: dict = Depends(get_current_active_user)):
    """复盘历史检索: 已落盘复盘日期列表"""
    dates = [d for d in store.list_dates() if store.load_pool(d, 'review')]
    return {'success': True, 'dates': dates}


@router.post("/review/chat")
async def review_chat(payload: dict, user: dict = Depends(get_current_active_user)):
    """追问聊天: 基于已落盘复盘上下文回答(不脑补)"""
    d = payload.get('date') or latest_session()
    question = (payload.get('question') or '').strip()
    if not question:
        return {'success': True, 'date': d, 'answer': '请输入问题。'}
    rows = store.load_pool(d, 'review')
    if not rows:
        return {'success': True, 'date': d, 'answer': '该日尚无复盘, 请先生成。'}
    review = rows[0]
    invoke = _build_llm_invoke()
    if invoke is None:
        return {'success': True, 'date': d, 'answer': '[⚠️ AI 未配置, 追问不可用]'}
    context = (f"复盘({d}): 情绪档位={review.get('emotion_level')}\n"
               f"一句话={review.get('summary')}\n"
               f"活跃方向={review.get('active_directions')}\n"
               f"风险={review.get('risks')}")
    prompt = (f"基于下列短线复盘上下文回答用户追问, 只陈述上下文里的事实, 不脑补、不推荐个股:\n"
              f"{context}\n\n用户问题: {question}")
    try:
        answer = invoke(prompt)
        return {'success': True, 'date': d, 'answer': answer}
    except Exception as e:  # noqa: BLE001
        return {'success': True, 'date': d, 'answer': f'[⚠️ 回答失败: {type(e).__name__}]'}


@router.get("/reflection")
async def get_reflection(date: str = None, user: dict = Depends(get_current_active_user)):
    """反思与战绩记分板(昨日 vs 今日三路投票 + 记分)"""
    d = date or latest_session()
    out = {'success': True, 'date': d}
    prev = emotion_metrics.prev_trade_date(d)
    bundle = _overview_bundle(d)
    prev_bundle = _overview_bundle(prev) if prev else {}
    out['vote'] = reflection.vote_direction(prev_bundle, bundle)
    stored = reflection.load_reflection(d)
    out['stored'] = stored
    return out


@router.post("/intraday/snapshot")
async def post_intraday_snapshot(date: str = None,
                                 user: dict = Depends(get_current_active_user)):
    """盘中核验快照: 接受判据(过点拒绝/历史不现抓) + 三池情绪快照 + 落盘"""
    from datetime import datetime
    d = date or datetime.now().strftime('%Y-%m-%d')
    ok, reason = intraday.accept_snapshot(d, is_trade_day=is_trade_day(d),
                                          today=datetime.now().strftime('%Y-%m-%d'))
    if not ok:
        return {'success': True, 'date': d, 'accepted': False, 'reason': reason}
    slot = reason.replace('快照时点 ', '')
    # V5.2.2-fix: 抓实时池子(源链 fallback), 而非读收盘 store — 盘中才有意义
    zt = fetchers.fetch_zt_pool(d)
    zb = fetchers.fetch_zb_pool(d)
    dt = fetchers.fetch_dt_pool(d)
    mood = intraday.snapshot_mood(zt['rows'] if zt.get('available') else None,
                                  zb['rows'] if zb.get('available') else None,
                                  dt['rows'] if dt.get('available') else None)
    mood['pools_available'] = {'zt': zt.get('available'), 'zb': zb.get('available'),
                               'dt': dt.get('available')}
    store.save_pool(d, 'intraday_' + slot, [mood])   # 落盘供回看
    return {'success': True, 'date': d, 'accepted': True, 'slot': slot, **mood}


@router.get("/intraday")
async def get_intraday(date: str = None, user: dict = Depends(get_current_active_user)):
    """某日已采集的盘中快照列表(按时点排序)"""
    from datetime import datetime
    d = date or datetime.now().strftime('%Y-%m-%d')
    snapshots = []
    for slot in intraday.SNAPSHOT_TIMES:
        rows = store.load_pool(d, 'intraday_' + slot)
        if rows and rows[0]:
            snapshots.append({'slot': slot, **rows[0]})
    return {'success': True, 'date': d, 'snapshots': snapshots}


@router.get("/backtest")
async def get_backtest(date: str = None, user: dict = Depends(get_current_active_user)):
    """涨停样本统计(分情绪环境, 窗口 20/30/60/90)"""
    d = date or latest_session()
    return {'success': True, **backtest.sample_stats(d)}


@router.get("/drift")
async def get_drift(date: str = None, user: dict = Depends(get_current_active_user)):
    """结构漂移(近10天 vs 前20天 中位数)"""
    d = date or latest_session()
    return {'success': True, **archive.detect_structure_drift(d)}
