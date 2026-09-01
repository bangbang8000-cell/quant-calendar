#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.7 (T-5.7.3): 批量任务接入任务队列 (job_tasks.py)

服务启动时 import 本模块触发 jobs.register 注册 4 类任务:
- batch_evaluate: 批量股票评估 (ai_evaluator.batch_evaluate, 异步经 asyncio.run 包)
- backtest_run: 单策略回测 (backtest_engine.run_backtest)
- data_sync: 每日数据同步 (data_pipeline.run_daily_pull)
- report_generate: 日报生成 (report_center.collect_highlights + render_report)

任务函数签名 fn(payload, ctx); ctx.progress 报告进度, ctx.check_cancelled 协作取消。
昂贵业务调用由调用方在测试中 mock; 本模块只负责接线与进度/结果摘要。
"""
import asyncio
import logging

import jobs

logger = logging.getLogger(__name__)


@jobs.register('batch_evaluate')
def batch_evaluate_job(payload, ctx):
    import ai_evaluator as _ae
    engine = _ae.ai_evaluator  # 单例 AIEvaluator (batch_evaluate 为实例方法)
    codes = payload.get('stock_codes') or []
    info = payload.get('stock_info_map') or {}
    username = payload.get('username', 'default')
    max_workers = int(payload.get('max_workers', 5))
    ctx.progress(5, '开始批量评估 (%d 只)' % len(codes))
    if not codes:
        return {'count': 0, 'ok': 0, 'skipped': 'empty stock_codes'}
    results = asyncio.run(engine.batch_evaluate(
        codes, info, max_workers=max_workers, username=username))
    ok = sum(1 for r in results if r.get('success'))
    ctx.progress(100, '批量评估完成: %d/%d 成功' % (ok, len(results)))
    return {'count': len(results), 'ok': ok}


@jobs.register('backtest_run')
def backtest_run_job(payload, ctx):
    from backtest import backtest_engine
    sid = payload.get('strategy_id') or ''
    ctx.progress(10, '开始回测 %s' % sid)
    result = backtest_engine.run_backtest(
        sid,
        start_date=payload.get('start_date'),
        end_date=payload.get('end_date'),
        initial_capital=float(payload.get('initial_capital', 100000.0)),
        commission_rate=float(payload.get('commission_rate', 0.0003)),
        slippage=float(payload.get('slippage', 0.001)),
    )
    ctx.progress(100, '回测完成: 年化 %.2f%%' % (getattr(result, 'annual_return', 0) * 100))
    return {
        'strategy_id': sid,
        'total_return': getattr(result, 'total_return', 0),
        'annual_return': getattr(result, 'annual_return', 0),
        'max_drawdown': getattr(result, 'max_drawdown', 0),
        'sharpe_ratio': getattr(result, 'sharpe_ratio', 0),
        'total_trades': getattr(result, 'total_trades', 0),
    }


@jobs.register('data_sync')
def data_sync_job(payload, ctx):
    import data_pipeline
    pool = payload.get('pool') or None
    date = payload.get('date') or None
    ctx.progress(10, '开始每日数据同步')
    stats = data_pipeline.run_daily_pull(pool=pool, date=date)
    ctx.progress(100, '数据同步完成')
    return dict(stats) if isinstance(stats, dict) else {'rows': stats}


@jobs.register('report_generate')
def report_generate_job(payload, ctx):
    import report_center
    from datetime import date as _date
    d = payload.get('date') or _date.today().isoformat()
    ctx.progress(10, '开始生成日报 %s' % d)
    highlights = report_center.collect_highlights(d)  # 返回 [{type,title,content,level}, ...] 列表
    report = report_center.render_report('量化日报', highlights, d)
    ctx.progress(100, '日报生成完成')
    return {'date': d, 'blocks': len(highlights), 'report_len': len(report.get('content', ''))}
