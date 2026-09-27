#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.4): 调度器健康检查/告警类任务 Mixin — 自 scheduler/_core.py 拆分。

行为与拆分前一致；由 scheduler/_core.py 聚合为 SchedulerCoreMixin。
"""
import asyncio
import logging
import os
from datetime import datetime

logger = logging.getLogger(__name__)

import scheduler as _m  # 共享状态经包级解析 (测试 patch("scheduler.X") 有效)  # noqa: E402


class SchedulerHealthMixin:
    """健康检查/告警类定时任务 (_core 拆分)"""
    async def freshness_alert_task(self):
        """6.3.2 (T-6.3.2.3): 健康与新鲜度联动告警 — 数据过期与任务连续失败入面板告警

        每 10 分钟扫描:
        - reliability.freshness.status_summary(): 过期/缺失资产 → 告警记录
        - 调度任务连续失败达阈值 (PULL_ALERT_THRESHOLD) → 告警记录
        告警写入 data_sources._health 告警队列 (面板经 /api/system/alerts 可见);
        同源每日最多一条, 防轰炸; best-effort 不阻断调度循环。
        """
        while self.running:
            await asyncio.sleep(600)
            try:
                today = datetime.now().strftime('%Y-%m-%d')
                self._scan_freshness_alerts(today)
                self._scan_task_failure_alerts(today)
                self._record_task_run("freshness_alert", True, today)
            except Exception as e:
                logger.error("新鲜度告警任务异常: %s", e)
                self._record_task_run("freshness_alert", False, str(e)[:120])
    def _scan_freshness_alerts(self, today):
        """数据资产过期/缺失 → 面板告警 (同资产每日一条)"""
        try:
            from reliability import freshness
            summary = freshness.status_summary()
        except Exception as e:
            logger.warning("新鲜度状态读取失败 (降级): %s", e)
            return
        try:
            from data_sources._health import enqueue_alert
        except Exception:
            logger.warning("告警队列不可用 (降级)")
            return
        for item in summary.get("items") or []:
            if item.get("status") not in ("stale", "missing"):
                continue
            aid = item.get("asset_id", "")
            if self._freshness_alert_date.get(aid) == today:
                continue  # 每日节流
            self._freshness_alert_date[aid] = today
            level = "error" if item.get("status") == "missing" else "warning"
            message = ("数据资产 %s %s: 期望最近交易日 %s, 最近数据 %s, 最后更新 %s"
                       % (item.get("name", aid),
                          "缺失" if item.get("status") == "missing" else "过期",
                          item.get("expected_latest") or "-",
                          item.get("latest_date") or "-",
                          item.get("last_update") or "-"))
            enqueue_alert(level, "freshness", message)
            logger.warning("[新鲜度告警] %s", message)
    def _scan_task_failure_alerts(self, today):
        """调度任务连续失败达阈值 → 面板告警 (同任务每日一条)"""
        try:
            from data_sources._health import enqueue_alert
        except Exception:
            logger.warning("告警队列不可用 (降级)")
            return
        for task, slot in (self.get_task_status() or {}).items():
            fails = int((slot or {}).get("consecutive_failures", 0) or 0)
            if fails < _m.PULL_ALERT_THRESHOLD:
                continue
            if self._task_alert_date.get(task) == today:
                continue  # 每日节流
            self._task_alert_date[task] = today
            enqueue_alert("error", "scheduler",
                          "任务 %s 连续失败 %d 次 (最近: %s)"
                          % (task, fails, (slot or {}).get("detail", "") or ""))
            logger.warning("[任务告警] %s 连续失败 %d 次", task, fails)
    def _verify_backup_after_backup(self, name: str):
        """6.3.2 (T-6.3.2.2): 备份产出后自动校验 — 结果写入健康指标 + 失败告警

        首期只告警不阻断: 校验失败不取消备份本身, 但把结果写入
        self._backup_verify (供 /api/system/health-detail 展示) 并触发飞书告警。
        """
        try:
            from backup_verify import verify_sqlite_backup
            backup_path = os.path.join(_m.DATA_DIR, "backups", name)
            result = verify_sqlite_backup(backup_path)
            self._backup_verify = {
                "time": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                "file": name,
                "ok": bool(result["ok"]),
                "errors": result["errors"],
                "integrity": result.get("integrity"),
                "row_count": result.get("row_count"),
            }
            self._record_task_run("backup_verify", result["ok"],
                                  "ok" if result["ok"] else "; ".join(result["errors"])[:120])
            if result["ok"]:
                logger.info("✅ 备份校验通过: %s (%d 行)", name, result.get("row_count", 0))
            else:
                logger.warning("⚠️ 备份校验失败: %s — %s", name, "; ".join(result["errors"]))
                self._send_feishu_alert(
                    "备份校验失败",
                    f"备份 {name} 校验未通过: {'; '.join(result['errors'])[:200]}"
                )
        except Exception as e:
            logger.error("备份校验执行异常: %s", e)
            self._backup_verify = {
                "time": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                "file": name, "ok": False, "errors": ["校验执行异常: %s" % e],
                "integrity": "unknown", "row_count": None,
            }
            self._record_task_run("backup_verify", False, ("校验异常: %s" % e)[:120])
    async def health_check_task(self):
        """v3.4.0-T9 + V5.0 T-5.0.2: 健康巡检(数据新鲜度/db/数据) + 幂等自愈 + 连续3次失败→飞书告警"""
        consecutive_failures = 0
        while self.running:
            await asyncio.sleep(300)  # 5 分钟
            try:
                from reliability import heal
                cycle = heal.run_cycle()
                detail = (f"findings={cycle['findings_count']} heal={cycle['heal_ok']}/{cycle['heal_attempted']} "
                          f"resolved={cycle['resolved']} still={len(cycle['still_affected'])}")
                # v3.17.12 (FR-3.17.12): 记录健康检查任务状态
                self._record_task_run("health_check", cycle["healthy"], detail)
                if cycle["healthy"]:
                    consecutive_failures = 0
                    logger.info("💚 健康检查通过: %s", detail)
                else:
                    consecutive_failures += 1
                    logger.warning("⚠️ 健康检查异常 (%s/3): %s", consecutive_failures, detail)
                    if consecutive_failures >= 3:
                        self._send_health_alert(cycle, detail)
                # V4.9.2 (F1.3): 聚合器自愈 — 持仓最新日期>聚合器最新日期时自动刷新
                self._self_heal_aggregator()
                # v3.17.12 (FR-3.17.12): 磁盘剩余空间不足 → 飞书告警
                self._check_disk_alert()
            except Exception as e:
                logger.error("健康检查任务异常: %s", e)
                self._record_task_run("health_check", False, str(e)[:120])
    def _send_health_alert(self, cycle, detail):
        """V5.0 T-5.0.7: 健康检查连续失败 → 分级告警送达 (reliability/alerts.py)

        分级: db_schema 错误=critical / 资产过期·数据为空·自愈未解决=warning / 自愈已执行=info;
        防抖: 同源同标题 1 小时冷却; best-effort 不阻断健康检查循环。
        """
        try:
            from reliability import alerts
            sent = alerts.dispatch_health_cycle(cycle, detail)
            if sent:
                logger.info("📮 健康检查告警已送达 %d 条飞书", sent)
        except Exception as e:
            logger.error("健康检查告警发送失败: %s", e)
    async def error_alert_task(self):
        """v3.4.0-T5: 异常告警 → 飞书 (监控错误率)"""
        while self.running:
            await asyncio.sleep(600)  # 每 10 分钟
            try:
                from api.v1.system import get_metrics
                m = get_metrics()
                if m["requests"] >= 20 and m["error_rate"] > 10:
                    logger.warning(f"⚠️ 错误率超阈值: {m['error_rate']}% ({m['requests']} 请求)")
                    self._record_task_run("error_alert", True, f"错误率 {m['error_rate']}%")
                    try:
                        import json
                        import os
                        cfg_path = os.path.join(_m.DATA_DIR, "feishu_config.json")
                        webhook = ""
                        if os.path.exists(cfg_path):
                            with open(cfg_path, 'r', encoding='utf-8') as f:
                                webhook = json.load(f).get('webhook_url', '')
                        if webhook:
                            from feishu_push import FeishuPusher
                            pusher = FeishuPusher(webhook)
                            pusher.send_text(
                                f"🚨 API 错误率告警!\n错误率: {m['error_rate']}%\n"
                                f"请求数: {m['requests']} | 平均延迟: {m['avg_ms']}ms | p95: {m['p95_ms']}ms"
                            )
                            logger.info("📮 错误率告警已发送飞书")
                    except Exception as e:
                        logger.error(f"错误率告警发送失败: {e}")
                else:
                    self._record_task_run("error_alert", True, f"错误率 {m['error_rate']}% 正常")
            except Exception as e:
                logger.error(f"错误率监控异常: {e}")
                self._record_task_run("error_alert", False, str(e)[:120])
    async def _sleep_until(self, hour, minute):
        """休眠到当日指定时刻 (跨日则等次日)"""
        now = datetime.now()
        target = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
        if target <= now:
            target += timedelta(days=1)
        await asyncio.sleep(max((target - now).total_seconds(), 1))
