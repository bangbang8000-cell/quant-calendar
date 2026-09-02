#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
定时任务调度器
"""

import asyncio
import json
import logging
import os
from datetime import datetime, timedelta
from data_parser import parser
from feishu_push import FeishuPusher
from ai_evaluator import ai_evaluator
from views_aggregator import views_aggregator
from paths import EXTERNAL_DATA_DIR, DATA_DIR
from db import backup_db
from report_generator import generate_weekly_report

logger = logging.getLogger(__name__)

import scheduler as _m  # 共享状态经包级解析 (测试 patch("scheduler.X") 有效)

# v3.17.12 (FR-3.17.12): 数据拉取任务连续失败飞书告警阈值
PULL_ALERT_THRESHOLD = 3

# V4.9 (P1): 调度执行历史持久化 — 记录每次任务运行详情
HISTORY_FILE = os.path.join(_m.DATA_DIR, "scheduler_history.json")
_HISTORY_MAX = 5000  # 最多保留 5000 条记录

class SchedulerReviewMixin:
    """V5.9 (T-5.9.2): Scheduler 拆分 Mixin (_review)"""
    def run_daily_review(self, today=None):
        """产出当日复盘并判定 (FR-3.18.1): 返回 {report, degraded, reason}。

        - 异常 → 视为失败 (degraded=True, report=None)
        - 数据卡关键字段全不可达 → degraded=True (降级产出, 记失败 + 触发 16:30 重试)
        """
        from market_review import generate_review, is_review_degraded
        try:
            review = generate_review(today)
        except Exception as e:
            logger.error(f"市场复盘生成异常: {e}")
            return {"report": None, "degraded": True, "reason": f"生成异常: {e}"}
        degraded = is_review_degraded(review)
        reason = "数据卡关键字段全不可达(降级产出)" if degraded else "正常产出"
        return {"report": review, "degraded": degraded, "reason": reason}
    def _handle_review_outcome(self, today, outcome, stage="16:00"):
        """按产出判定记录任务状态 + 失败飞书告警 (FR-3.18.1, 不再静默)。

        返回 True = 本次产出成功; False = 失败(已告警)。
        """
        if not outcome.get("degraded"):
            self._record_task_run("daily_market_review", True, f"{today}({stage})")
            self._record_freshness("market_review", latest_date=today, detail=f"{stage} ok")
            # v3.17.15: Webhook — market_review_ready 事件
            try:
                from webhook import dispatch as webhook_dispatch
                webhook_dispatch("market_review_ready", {"date": today})
            except Exception as we:
                logger.warning("webhook market_review_ready 投递失败 (忽略): %s", we)
            return True
        self._record_task_run("daily_market_review", False, f"{today}({stage}) {outcome.get('reason', '')}")
        consecutive = self.task_status.get("daily_market_review", {}).get("consecutive_failures", 1)
        self._send_feishu_alert(
            "AI 每日复盘产出失败(数据不可达)",
            f"{today} ({stage}) {outcome.get('reason', '')} (连续失败 {consecutive} 次)",
        )
        return False
    def _should_retry_review(self, now_hm=None):
        """16:30 前允许重试 (FR-3.18.1); now_hm 可注入便于测试"""
        now_hm = now_hm or datetime.now().strftime('%H:%M')
        return now_hm < '16:30'
    def review_produced_today(self, today=None):
        """今日是否已有"非降级"复盘归档 (FR-3.18.1 错过补偿门控)"""
        from market_review import get_review, is_review_degraded
        today = today or datetime.now().strftime('%Y-%m-%d')
        r = get_review(date=today)
        return bool(r) and not is_review_degraded(r)
