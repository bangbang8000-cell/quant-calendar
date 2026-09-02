#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
定时任务调度器
"""

import logging
import os
from datetime import datetime
from feishu_push import FeishuPusher

logger = logging.getLogger(__name__)

import scheduler as _m  # 共享状态经包级解析 (测试 patch("scheduler.X") 有效)  # noqa: E402

# v3.17.12 (FR-3.17.12): 数据拉取任务连续失败飞书告警阈值
PULL_ALERT_THRESHOLD = 3

# V4.9 (P1): 调度执行历史持久化 — 记录每次任务运行详情
HISTORY_FILE = os.path.join(_m.DATA_DIR, "scheduler_history.json")
_HISTORY_MAX = 5000  # 最多保留 5000 条记录

class SchedulerAlertsMixin:
    """V5.9 (T-5.9.2): Scheduler 拆分 Mixin (_alerts)"""
    @staticmethod
    def _read_feishu_webhook() -> str:
        """读取飞书 Webhook (data/feishu_config.json), 未配置/读取失败返回空串"""
        try:
            import json
            cfg_path = os.path.join(_m.DATA_DIR, "feishu_config.json")
            if os.path.exists(cfg_path):
                with open(cfg_path, 'r', encoding='utf-8') as f:
                    return json.load(f).get('webhook_url', '')
        except Exception:
            logger.warning("读取飞书配置失败", exc_info=True)
        return ''
    def _send_feishu_alert(self, title: str, body: str) -> bool:
        """发送飞书告警; 未配置/不可达仅记录日志不崩溃 (FR-3.17.12)"""
        webhook = self._read_feishu_webhook()
        if not webhook:
            logger.warning(f"飞书告警未发送 (未配置 webhook): {title}")
            return False
        try:
            pusher = FeishuPusher(webhook)
            ok = pusher.send_text(f"🚨 {title}\n{body}")
            if ok:
                logger.info(f"📮 告警已发送飞书: {title}")
            else:
                logger.warning(f"飞书告警发送失败: {title}")
            return ok
        except Exception as e:
            logger.error(f"飞书告警发送异常: {e}")
            return False
    def _check_disk_alert(self, threshold_percent: float = 10.0):
        """磁盘剩余空间 < 阈值 → 飞书告警 (每日最多一次, FR-3.17.12)"""
        try:
            st = os.statvfs(_m.DATA_DIR)
            total = st.f_blocks * st.f_frsize
            free = st.f_bavail * st.f_frsize
            if total <= 0:
                return
            percent = round(free / total * 100, 2)
            today = datetime.now().strftime('%Y-%m-%d')
            if percent < threshold_percent and self._disk_alert_date != today:
                self._disk_alert_date = today
                self._send_feishu_alert(
                    "磁盘剩余空间不足",
                    f"剩余 {percent}% (可用 {free / (1024 ** 3):.1f} GB / 共 {total / (1024 ** 3):.1f} GB)\n"
                    f"阈值: {threshold_percent}%"
                )
        except (AttributeError, OSError):
            # 平台不支持 os.statvfs (Windows) → 忽略
            logger.debug("磁盘检测不可用 (平台不支持 os.statvfs)")
        except Exception as e:
            logger.warning(f"磁盘告警检测异常: {e}")
    def set_webhook(self, url: str):
        """设置飞书Webhook"""
        self.pusher.set_webhook(url)
