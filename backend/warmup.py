#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""研究接口预热 (v7.3.2)

背景：`/api/research/backtest-lab` 首次计算实测 **9.6–10.4 秒**（110 万行面板 walkforward）。
加了服务端缓存后，第二次起是毫秒级，但**用户当天第一次打开**仍要等 10 秒。

做法：进程启动后延迟一段时间，在**后台线程**里把默认参数的结果算一遍写进 TTL 缓存，
用户点进来时就是命中。绝不阻塞启动、绝不因预热失败影响服务。
"""

import logging
import os
import threading

logger = logging.getLogger(__name__)

#: 启动后延迟（秒）——给数据源初始化/调度让路
DEFAULT_DELAY = float(os.environ.get('QC_WARMUP_DELAY', '25'))
#: 预热参数（与前端概览卡默认参数一致）
DEFAULT_LOOKBACK = 20
DEFAULT_TOP_K = 10
DEFAULT_START = '2026-01-01'
DEFAULT_FRAC = 0.7

_started = False


def warm_backtest_lab(lookback=DEFAULT_LOOKBACK, top_k=DEFAULT_TOP_K,
                      start=DEFAULT_START, in_sample_frac=DEFAULT_FRAC):
    """同步计算一次并写入缓存；DWH 不可用时静默跳过。返回是否写入。"""
    import ttl_cache
    try:
        from dwh import get_backend
        backend = get_backend()
        st = backend.status()
        if not st.get('available'):
            logger.info('[warmup] DWH 不可用（%s），跳过回测预热', st.get('reason'))
            return False
        key = ('backtest-lab', int(lookback), int(top_k), start,
               round(float(in_sample_frac), 4), st.get('latest_date'), st.get('rows'))
        if ttl_cache.get(key) is not None:
            logger.info('[warmup] 回测结果已在缓存，跳过')
            return True

        import backtest_lab as bl  # noqa: PLC0415

        def _compute():
            res = backend.query(
                'SELECT thscode AS ts_code, CAST(date AS VARCHAR) AS trade_date, close '
                'FROM v_daily_qfq WHERE date >= CAST(? AS DATE) ORDER BY date', [start])
            panel = [{'ts_code': r[0], 'trade_date': r[1], 'close': r[2]}
                     for r in res.get('rows') or []]
            return {'panel_rows': len(panel), 'start': start,
                    **bl.walkforward(panel, lookback=int(lookback), top_k=int(top_k),
                                     in_sample_frac=float(in_sample_frac))}

        out = ttl_cache.cached(key, 1800, _compute)
        logger.info('[warmup] 回测预热完成：面板 %s 行，总收益 %s',
                    out.get('panel_rows'), (out.get('full') or {}).get('total_return'))
        return True
    except Exception as e:  # noqa: BLE001 — 预热失败绝不影响服务
        logger.info('[warmup] 回测预热失败（忽略）: %s', e)
        return False


def warm_industry_matrix(max_age_hours=20):
    """行业强度矩阵预热：缓存缺失或过旧时后台刷新（首次全量约 68s）。"""
    try:
        import industry_strength as ist
        cached = ist.load_cache(max_age=max_age_hours * 3600)
        if cached and not cached.get('stale'):
            logger.info('[warmup] 行业矩阵缓存仍新鲜，跳过')
            return False
        started = ist.start_background_refresh()
        logger.info('[warmup] 行业矩阵后台刷新已启动: %s', started)
        return started
    except Exception as e:  # noqa: BLE001 — 预热失败不影响服务
        logger.info('[warmup] 行业矩阵预热失败（忽略）: %s', e)
        return False


def start_background(delay=None):
    """启动后台预热线程（幂等）。"""
    global _started
    if _started:
        return False
    _started = True
    d = DEFAULT_DELAY if delay is None else float(delay)

    def _run():
        import time
        time.sleep(max(0.0, d))
        warm_backtest_lab()
        warm_industry_matrix()

    t = threading.Thread(target=_run, name='qc-warmup', daemon=True)
    t.start()
    logger.info('[warmup] 后台预热线程已启动（延迟 %.0fs）', d)
    return True


def reset():
    """测试用：允许重复启动。"""
    global _started
    _started = False
