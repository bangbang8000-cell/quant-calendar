#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生产插件: 市场复盘简报推送 (V4.7.4, P3-5)

功能: 启动时向应用注册一个每日定时任务(交易日 18:30), 生成市场复盘简报,
      经 webhook.dispatch("market_brief", ...) 推送给订阅了该事件的 Webhook 端点。

事件名: market_review_ready (webhook.WEBHOOK_EVENTS 内置, 见 backend/webhook.py)
"""
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

PLUGIN_META = {
    "name": "market-brief",
    "description": "每日市场复盘简报 Webhook 推送 (交易日 18:30)",
    "version": "0.1.0",
}

BRIEF_EVENT = "market_review_ready"  # 复用已有 webhook 事件 (webhook.WEBHOOK_EVENTS)


def _build_brief() -> dict:
    """生成市场复盘简报 (数据不可达时含 degraded 标记)"""
    try:
        from market_review import get_review
        review = get_review() or {}
        return {
            "date": review.get("date") or datetime.now().strftime("%Y-%m-%d"),
            "summary": review.get("summary") or "今日无复盘数据",
            "degraded": bool(review.get("degraded", not review)),
        }
    except Exception as e:
        logger.warning("[market-brief] 复盘数据获取失败: %s", e)
        return {"date": datetime.now().strftime("%Y-%m-%d"),
                "summary": "复盘数据不可达", "degraded": True}


async def _push_brief() -> None:
    """生成并推送简报"""
    try:
        from webhook import dispatch
        brief = _build_brief()
        result = dispatch(BRIEF_EVENT, brief)
        logger.info("[market-brief] 简报推送完成: %s 订阅 %s 成功 %s",
                    BRIEF_EVENT, result.get("total"), result.get("ok"))
    except Exception as e:
        logger.warning("[market-brief] 简报推送失败: %s", e)


def _install_brief_task(scheduler) -> None:
    """给 scheduler 注入 market_brief 任务 (随现有 start 一起启动)

    scheduler.start 硬编码任务列表, 插件通过包装 start 注入新任务,
    保持与内置任务同款生命周期 (running 标志 + asyncio 后台任务)。
    """
    original_start = scheduler.start

    async def _daily_brief_task():
        """每日生成并推送市场简报 (交易日 16:30 后, 与复盘任务错峰)"""
        from datetime import timedelta
        while getattr(scheduler, "running", False):
            now = datetime.now()
            target = now.replace(hour=16, minute=30, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            import asyncio
            await asyncio.sleep(max(wait, 10))
            try:
                await _push_brief()
            except Exception as e:
                logger.warning("[market-brief] 简报任务异常: %s", e)

    async def _patched_start():
        await original_start()
        import asyncio
        asyncio.create_task(_daily_brief_task())
        logger.info("[market-brief] 市场简报任务已随调度器启动 (每日 16:30)")

    scheduler.start = _patched_start


def register(ctx: dict) -> None:
    """启动时向 scheduler 注入市场简报任务 (复用复盘数据, webhook 推送)"""
    try:
        from scheduler import scheduler
        _install_brief_task(scheduler)
        logger.info("[market-brief] 已注册 (复用 market_review_ready 事件, 每日 16:30 简报)")
    except Exception as e:
        logger.warning("[market-brief] 任务注册失败(不影响主程序): %s", e)

