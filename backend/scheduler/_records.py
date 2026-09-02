#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
定时任务调度器
"""

import json
import logging
import os
from datetime import datetime, timedelta
from feishu_push import FeishuPusher

logger = logging.getLogger(__name__)

import scheduler as _sched_mod  # 调用期读包级 _sched_mod.HISTORY_FILE  # noqa: E402

# v3.17.12 (FR-3.17.12): 数据拉取任务连续失败飞书告警阈值
PULL_ALERT_THRESHOLD = 3

# V4.9 (P1): 调度执行历史持久化 — 记录每次任务运行详情
_HISTORY_MAX = 5000  # 最多保留 5000 条记录

class SchedulerRecordsMixin:
    """V5.9 (T-5.9.2): Scheduler 拆分 Mixin (_records)"""
    def __init__(self):
        self.pusher = FeishuPusher()
        self.tasks = {}
        self.running = False
        self.last_exec_date = None  # 记录最后执行日期，避免重复
        # v3.17.12 (FR-3.17.12): 各调度任务运行状态 (供 /api/system/health-detail + Prometheus)
        self.task_status = {}
        self._disk_alert_date = None  # 磁盘告警每日节流
        self._backup_failures = 0  # 备份连续失败计数
        # V4.9.2 (P1): 策略自动执行进度快照 (供 /api/strategies/execution/status)
        self.execution_progress = None
    def _record_task_run(self, task: str, success: bool, detail: str = ''):
        """记录一次调度任务运行结果 (状态聚合 + Prometheus 埋点 + 持久化历史)"""
        now = datetime.now()
        slot = self.task_status.setdefault(task, {
            'name': task, 'last_run': None, 'last_success': None,
            'last_status': None, 'detail': '',
            'success_count': 0, 'failure_count': 0, 'consecutive_failures': 0,
        })
        slot['last_run'] = now.strftime('%Y-%m-%d %H:%M:%S')
        slot['detail'] = detail or ''
        if success:
            slot['last_success'] = now.strftime('%Y-%m-%d %H:%M:%S')
            slot['last_status'] = 'success'
            slot['success_count'] += 1
            slot['consecutive_failures'] = 0
        else:
            slot['last_status'] = 'failed'
            slot['failure_count'] += 1
            slot['consecutive_failures'] += 1
        try:
            import metrics
            metrics.record_scheduler_run(task, success)
        except Exception:
            logger.warning("指标埋点失败 (忽略)", exc_info=True)
        # V4.9 (P1): 持久化每条历史记录
        self._persist_history(task, success, detail)
        return slot
    def _record_freshness(self, asset_id: str, **kwargs):
        """V5.0 T-5.0.1: 记录数据资产新鲜度 (best-effort, 不中断业务链路)"""
        try:
            from reliability.freshness import record_update
            record_update(asset_id, **kwargs)
        except Exception as e:
            logger.warning("新鲜度记录失败 %s: %s", asset_id, e)
    def _persist_history(self, task: str, success: bool, detail: str):
        """将单次执行记录追加到 scheduler_history.json"""
        try:
            record = {
                'task': task,
                'success': success,
                'detail': detail[:200] if detail else '',
                'ts': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            }
            history = []
            if os.path.exists(_sched_mod.HISTORY_FILE):
                try:
                    with open(_sched_mod.HISTORY_FILE, 'r', encoding='utf-8') as f:
                        history = json.load(f)
                except (json.JSONDecodeError, OSError):
                    history = []
            # V5.0 T-5.0.5: 读-改-写整段加锁 + 原子写 (tmp+replace), 防崩溃半写/并发丢记录
            from reliability.atomic import atomic_write_json, file_lock
            with file_lock(_sched_mod.HISTORY_FILE):
                history = []
                if os.path.exists(_sched_mod.HISTORY_FILE):
                    try:
                        with open(_sched_mod.HISTORY_FILE, 'r', encoding='utf-8') as f:
                            history = json.load(f)
                    except (json.JSONDecodeError, OSError):
                        history = []
                history.append(record)
                if len(history) > _HISTORY_MAX:
                    history = history[-_HISTORY_MAX:]
                atomic_write_json(_sched_mod.HISTORY_FILE, history)
        except Exception as e:
            logger.warning("调度历史持久化失败 (忽略): %s", e)
    def get_execution_history(self, days: int = 7, task: str = '', status: str = '', limit: int = 200) -> list:
        """从持久化文件读取执行历史，支持按天/任务名/状态筛选"""
        try:
            if not os.path.exists(_sched_mod.HISTORY_FILE):
                return []
            with open(_sched_mod.HISTORY_FILE, 'r', encoding='utf-8') as f:
                history = json.load(f)
        except (json.JSONDecodeError, OSError):
            return []
        if not isinstance(history, list):
            return []
        # 按时间倒序（最新在前）；同秒记录按写入顺序倒序（后写在前）
        history = list(enumerate(history))
        history.sort(key=lambda i_r: (i_r[1].get('ts', ''), i_r[0]), reverse=True)
        history = [r for _, r in history]
        # 按天数筛选
        if days > 0:
            cutoff = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
            history = [r for r in history if r.get('ts', '')[:10] >= cutoff]
        # 按任务名筛选
        if task:
            history = [r for r in history if r.get('task', '') == task]
        # 按状态筛选
        if status == 'success':
            history = [r for r in history if r.get('success')]
        elif status == 'failed':
            history = [r for r in history if not r.get('success')]
        return history[:limit]
    def get_execution_summary(self, days: int = 30) -> dict:
        """聚合统计：各任务执行次数/成功率/趋势"""
        history = self.get_execution_history(days=days, limit=_HISTORY_MAX)
        total = len(history)
        success_count = sum(1 for r in history if r.get('success'))
        by_task = {}
        for r in history:
            t = r.get('task', 'unknown')
            if t not in by_task:
                by_task[t] = {'total': 0, 'success': 0, 'failed': 0, 'last_run': '', 'last_status': ''}
            by_task[t]['total'] += 1
            if r.get('success'):
                by_task[t]['success'] += 1
            else:
                by_task[t]['failed'] += 1
            if r.get('ts', '') > by_task[t]['last_run']:
                by_task[t]['last_run'] = r['ts']
                by_task[t]['last_status'] = 'success' if r.get('success') else 'failed'
        # 每日趋势
        daily = {}
        for r in history:
            day = r.get('ts', '')[:10]
            if day not in daily:
                daily[day] = {'total': 0, 'success': 0, 'failed': 0}
            daily[day]['total'] += 1
            if r.get('success'):
                daily[day]['success'] += 1
            else:
                daily[day]['failed'] += 1
        return {
            'total': total,
            'success_count': success_count,
            'success_rate': round(success_count / total * 100, 1) if total > 0 else 0,
            'by_task': by_task,
            'daily_trend': daily,
        }
    def get_task_status(self) -> dict:
        """返回各调度任务运行状态快照 (FR-3.17.12)"""
        return dict(self.task_status)
