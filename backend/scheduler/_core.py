#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
定时任务调度器
"""

import asyncio
import logging
import os
from datetime import datetime, timedelta
from data_parser import parser
from ai_evaluator import ai_evaluator  # noqa: F401  # 原模块级公开名(报告类任务已移至 _core_reports)
from db import backup_db
from report_generator import generate_weekly_report  # noqa: F401  # 原模块级公开名(报告类任务已移至 _core_reports)

logger = logging.getLogger(__name__)

import scheduler as _m  # 共享状态经包级解析 (测试 patch("scheduler.X") 有效)  # noqa: E402

# v3.17.12 (FR-3.17.12): 数据拉取任务连续失败飞书告警阈值
PULL_ALERT_THRESHOLD = 3

# V4.9 (P1): 调度执行历史持久化 — 记录每次任务运行详情
HISTORY_FILE = os.path.join(_m.DATA_DIR, "scheduler_history.json")
_HISTORY_MAX = 5000  # 最多保留 5000 条记录

# 6.3.0 (T-6.3.0.4): 报告类与健康告警类任务按职责拆至同级子模块, 此处聚合
from ._core_reports import SchedulerReportsMixin  # noqa: E402
from ._core_health import SchedulerHealthMixin  # noqa: E402


class SchedulerCoreMixin(SchedulerReportsMixin, SchedulerHealthMixin):
    """V5.0.9 (T-5.0.92): Scheduler 拆分 Mixin (_core) — 6.3.0 按职责二次拆分后聚合"""
    def _refresh_after_strategy_run(self, today):
        """V4.9.2 (F1.1/F1.2): 持仓生成后刷新 parser+_m.views_aggregator 并校验日视图可见性.

        四视图(日/周/月/年)共享聚合器 daily_data, 一次 reload() 全覆盖;
        校验失败返回 (False, 原因), 由调用方据实记录, 不再报假成功.
        """
        try:
            from data_parser import parser as _dp_parser
            _dp_parser.reload()
            _m.views_aggregator.reload()
            logger.info("📊 策略持仓已热刷新进日历数据(parser+_m.views_aggregator)")
        except Exception as _e:
            logger.warning("策略持仓热刷新失败: %s", _e)
            return False, f"策略持仓热刷新失败: {str(_e)[:120]}"
        return _m.verify_day_ingest(today)
    def _self_heal_aggregator(self) -> bool:
        """V4.9.3 (F1.3 强化): 聚合器自愈 — parser + views 一并刷新.

        修复 V4.9.2 仅刷 _m.views_aggregator 的缺陷: parser 单例若陈旧(文件监听漏事件等),
        新持仓永远进不了日历(实测 8/29、8/30 目录存在但聚合器停留在 8/28).
        触发条件: 持仓目录最新日期 > 聚合器最新日期 → 先 parser.reload() 再 _m.views_aggregator.reload().
        """
        try:
            holdings_root = os.path.join(_m.DATA_DIR, "holdings")
            if not os.path.isdir(holdings_root):
                return False
            dates = sorted(d for d in os.listdir(holdings_root)
                           if os.path.isdir(os.path.join(holdings_root, d)))
            if not dates:
                return False
            latest_holdings = dates[-1]
            agg_latest = _m.views_aggregator.all_dates[-1] if _m.views_aggregator.all_dates else None
            if latest_holdings > (agg_latest or ""):
                try:
                    from data_parser import parser as _dp_parser
                    _dp_parser.reload()
                except Exception as _e:
                    logger.warning("聚合器自愈 parser 刷新失败: %s", _e)
                stats = _m.views_aggregator.reload()
                new_latest = (stats or {}).get("latest_date") or latest_holdings
                self._record_task_run(
                    "self_heal", True,
                    f"聚合器滞后 {agg_latest}→{latest_holdings}, 已自动刷新至 {new_latest} (parser+views 一并刷新)")
                logger.warning("🛠 聚合器自愈: 刷新至 %s", new_latest)
                return True
            return False
        except Exception as _e:
            logger.warning("聚合器自愈检查失败: %s", _e)
            return False
    async def strategy_run_task(self):
        """每日收盘后按 governance 纳管状态定时运行启用策略 → 持仓文件"""
        last_date = None
        while self.running:
            try:
                import strategy_governance as gov
                state = gov.get_state()
                # 用第一个启用策略的 schedule(全局默认), 单任务统一调度
                schedule_time = gov.DEFAULT_SCHEDULE
                for _sid, _s in state.items():
                    if _s.get("enabled"):
                        schedule_time = _s.get("schedule") or gov.DEFAULT_SCHEDULE
                        break
                now = datetime.now()
                th, tm = map(int, schedule_time.split(":"))
                target = now.replace(hour=th, minute=tm, second=0, microsecond=0)
                if target <= now:
                    target += timedelta(days=1)
                await asyncio.sleep(max((target - now).total_seconds(), 10))
                if not self.running:
                    break
                today = datetime.now().strftime("%Y-%m-%d")
                if last_date == today:
                    await asyncio.sleep(60)
                    continue
                last_date = today
                logger.info("⏰ 策略定期运行: %s", today)
                try:
                    # V4.7.1 (并发安全): 引擎取数/因子计算同步阻塞事件循环(全市场每策略 60-120s) → 移入后台线程
                    started = datetime.now()
                    self.execution_progress = {
                        "phase": "running", "current_sid": None, "stage": "generating",
                        "started_at": started.strftime("%Y-%m-%d %H:%M:%S"),
                        "updated_at": started.strftime("%H:%M:%S"),
                        "detail": f"策略持仓生成中 {today}",
                    }

                    def _progress_cb(sid, stage):
                        self.execution_progress.update({
                            "current_sid": sid, "stage": stage,
                            "updated_at": datetime.now().strftime("%H:%M:%S"),
                        })

                    run_ok, executed, errors = await asyncio.to_thread(_m.run_strategy_once, _progress_cb)
                    # V4.9.2 (F1.1/F1.2): 刷新 parser+聚合器并校验当日已进日视图
                    _ok, _detail = self._refresh_after_strategy_run(today)
                    ok = run_ok and _ok and not errors
                    detail = f"策略持仓已生成 {today}; {_detail}; 策略:{','.join(executed or []) or '无'}"
                    if errors:
                        detail += "; 失败:" + ";".join(e["sid"] + ":" + e["error"] for e in errors)[:100]
                    self.execution_progress = {
                        "phase": "done" if ok else "failed", "current_sid": None,
                        "stage": "reloaded", "started_at": started.strftime("%Y-%m-%d %H:%M:%S"),
                        "updated_at": datetime.now().strftime("%H:%M:%S"),
                        "detail": detail[:200],
                    }
                    self._record_task_run("strategy_run", ok, detail[:200])
                    if ok:
                        self._record_freshness("strategy_holdings", latest_date=today,
                                               count=len(executed or []), detail="strategy_run ok")
                except Exception as e:
                    logger.error("策略定期运行失败: %s", e)
                    if self.execution_progress:
                        self.execution_progress["phase"] = "failed"
                        self.execution_progress["updated_at"] = datetime.now().strftime("%H:%M:%S")
                    self._record_task_run("strategy_run", False, str(e)[:120])
                await asyncio.sleep(60)
            except Exception as e:
                logger.info("策略定时任务异常: %s", e)
                await asyncio.sleep(60)
    async def data_refresh_task(self):
        """定时刷新策略数据任务"""
        last_refresh_date = None
        while self.running:
            try:
                from data_refresh_config import load_config
                config = load_config()

                if not config.get('scheduled_enabled', False):
                    await asyncio.sleep(3600)  # 未启用时每小时检查
                    continue

                now = datetime.now()
                schedule_time = config.get('scheduled_time', '22:00')
                target_hour, target_minute = map(int, schedule_time.split(':'))

                # 计算到目标时间的秒数
                target = now.replace(hour=target_hour, minute=target_minute, second=0, microsecond=0)
                if target <= now:
                    target += timedelta(days=1)
                wait = (target - now).total_seconds()
                await asyncio.sleep(max(wait, 10))

                if not self.running:
                    break

                today = datetime.now().strftime('%Y-%m-%d')
                if last_refresh_date != today:
                    last_refresh_date = today
                    logger.info(f"⏰ 定时刷新: {today}")
                    try:
                        parser.reload()
                        _m.views_aggregator.reload()
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(True, f"定时刷新成功 {today}")
                        logger.info("✅ 定时刷新完成")
                        self._record_task_run("data_refresh", True, f"刷新成功 {today}")
                        self._record_freshness("market_daily", latest_date=today, detail="data_refresh")
                    except Exception as e:
                        logger.error(f" 定时刷新失败: {e}")
                        self._record_task_run("data_refresh", False, str(e)[:120])
                await asyncio.sleep(60)
            except Exception as e:
                logger.info(f"定时刷新任务异常: {e}")
                await asyncio.sleep(60)
    async def tushare_pull_task(self):
        """定时 Tushare 日线拉取任务 (FR-3.12.1)

        依据 data_refresh_config 的 pull_enabled/pull_time/pull_frequency
        定时拉取日线快照 → 触发解析器刷新 (自动入库)。
        """
        last_pull_date = None
        consecutive_failures = 0  # v3.12 (FR-3.12.3): 连续失败计数, 达阈值告警入队
        while self.running:
            try:
                from data_refresh_config import load_config, pull_should_run
                config = load_config()
                if not config.get('pull_enabled', False):
                    await asyncio.sleep(3600)
                    continue

                now = datetime.now()
                pull_time = config.get('pull_time', '22:30')
                target_hour, target_minute = map(int, pull_time.split(':'))
                target = now.replace(hour=target_hour, minute=target_minute, second=0, microsecond=0)
                if target <= now:
                    target += timedelta(days=1)
                await asyncio.sleep(max((target - now).total_seconds(), 10))
                if not self.running:
                    break

                today = datetime.now().strftime('%Y-%m-%d')
                if last_pull_date != today and pull_should_run(config, datetime.now()):
                    last_pull_date = today
                    logger.info(f"📥 定时拉取启动: {today}")
                    try:
                        from data_pipeline import run_daily_pull
                        # 阻塞式拉取放线程, 不阻塞事件循环
                        result = await asyncio.to_thread(run_daily_pull)
                        from data_refresh_config import update_refresh_status
                        ok = result.get("failed", 1) == 0
                        update_refresh_status(ok, (
                            f"日线拉取 {result.get('pulled', 0)}/{result.get('total', 0)} 成功, "
                            f"最新日期 {result.get('latest_date')}"
                        ))
                        # v3.12 (FR-3.12.3): 连续失败计数 → 达阈值告警入队
                        if ok:
                            consecutive_failures = 0
                            # 拉取成功后刷新解析器/视图 (自动入库)
                            parser.reload()
                            _m.views_aggregator.reload()
                            self._record_task_run("tushare_pull", True, f"拉取 {result.get('pulled', 0)}/{result.get('total', 0)}")
                        else:
                            consecutive_failures += 1
                            from data_sources import record_batch_failure
                            record_batch_failure(
                                'data_pipeline', consecutive_failures,
                                f"日线拉取 {result.get('pulled', 0)}/{result.get('total', 0)} 成功, "
                                f"失败 {result.get('failed', 0)}"
                            )
                            self._record_task_run("tushare_pull", False, f"拉取 {result.get('pulled', 0)}/{result.get('total', 0)}")
                            # v3.17.12 (FR-3.17.12): 连续失败达阈值 → 飞书告警
                            if consecutive_failures >= PULL_ALERT_THRESHOLD:
                                self._send_feishu_alert(
                                    "数据拉取任务连续失败",
                                    f"连续失败 {consecutive_failures} 次\n"
                                    f"拉取 {result.get('pulled', 0)}/{result.get('total', 0)} 成功, 失败 {result.get('failed', 0)}"
                                )
                        logger.info(f"✅ 定时拉取完成: {result}")
                    except Exception as e:
                        consecutive_failures += 1
                        from data_sources import record_batch_failure
                        record_batch_failure('data_pipeline', consecutive_failures, f"定时拉取异常: {e}")
                        logger.error(f"定时拉取失败: {e}")
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(False, f"定时拉取失败: {e}")
                        self._record_task_run("tushare_pull", False, str(e)[:120])
                        if consecutive_failures >= PULL_ALERT_THRESHOLD:
                            self._send_feishu_alert("数据拉取任务连续失败", f"连续失败 {consecutive_failures} 次\n异常: {e}")
                await asyncio.sleep(60)
            except Exception as e:
                logger.info(f"定时拉取任务异常: {e}")
                await asyncio.sleep(60)
    async def file_watch_task(self):
        """文件变动监听任务（轮询 CSV 文件 mtime）"""
        import os

        # 建立初始 mtime 快照
        file_mtimes = {}

        def scan_files():
            """V4.9.2 (F1.4): 扫描 qresult + data/holdings(递归) 下的 CSV mtime"""
            return _m.scan_csv_files([_m.EXTERNAL_DATA_DIR, os.path.join(_m.DATA_DIR, "holdings")],
                                  recursive=True)

        # 建立基线
        file_mtimes = scan_files()

        while self.running:
            try:
                from data_refresh_config import load_config
                config = load_config()

                if not config.get('watch_enabled', False):
                    await asyncio.sleep(60)
                    continue

                current_mtimes = scan_files()

                # 检测变动 (纯函数)
                changed, change_desc = _m.detect_csv_changes(file_mtimes, current_mtimes)
                if changed:
                    logger.info(f"📁 检测到{change_desc}")
                    logger.info("🔄 触发文件变动刷新...")
                    try:
                        parser.reload()
                        _m.views_aggregator.reload()
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(True, "文件变动触发刷新")
                        logger.info("✅ 文件变动刷新完成")
                        self._record_task_run("file_watch", True, change_desc)
                        self._record_freshness("strategy_holdings", detail=change_desc)
                    except Exception as e:
                        logger.error(f" 文件变动刷新失败: {e}")
                        self._record_task_run("file_watch", False, str(e)[:120])

                # 更新快照
                file_mtimes = current_mtimes
                await asyncio.sleep(60)  # 每60秒检查一次

            except Exception as e:
                logger.info(f"文件监听任务异常: {e}")
                await asyncio.sleep(60)
    async def daily_backup_task(self):
        """v3.3.0-T7: 每日自动备份数据库 (凌晨 3:05)
        v3.17.12 (FR-3.17.12): 失败 → 飞书告警 + 任务状态/指标记录
        6.3.2 (T-6.3.2.2): 备份产出后自动校验 (verify_sqlite_backup), 校验失败也告警
        """
        while self.running:
            now = datetime.now()
            # 3:05-3:10 窗口内执行
            if now.hour == 3 and 5 <= now.minute < 10:
                try:
                    name = backup_db()
                    if name:
                        logger.info(f"💾 每日自动备份成功: {name}")
                        self._record_task_run("daily_backup", True, name)
                        self._record_freshness("backup", detail=name)
                        self._backup_failures = 0
                        # 6.3.2 (T-6.3.2.2): 备份后自动校验 (首期只告警不阻断后续任务)
                        self._verify_backup_after_backup(name)
                    else:
                        logger.warning("💾 每日自动备份失败")
                        self._record_task_run("daily_backup", False, "backup_db 返回空")
                        self._backup_failures += 1
                        self._send_feishu_alert(
                            "数据库备份失败",
                            f"连续失败 {self._backup_failures} 次, 请检查磁盘空间与数据库状态"
                        )
                except Exception as e:
                    logger.error(f"💾 每日自动备份异常: {e}")
                    self._record_task_run("daily_backup", False, str(e)[:120])
                    self._backup_failures += 1
                    self._send_feishu_alert("数据库备份失败", f"连续失败 {self._backup_failures} 次, 异常: {e}")
                # 执行后休眠 1 小时避免重复
                await asyncio.sleep(3600)
            else:
                await asyncio.sleep(60)
    async def _run_market_review_with_retry(self, today):
        """16:00 主跑 → 降级则 16:30 重试一次 → 失败可见 (FR-3.18.1)"""
        outcome = self.run_daily_review(today)
        if self._handle_review_outcome(today, outcome, stage="16:00"):
            return
        # 降级 → 16:30 自动重试一次 (不再静默)
        if self._should_retry_review():
            await self._sleep_until(hour=16, minute=30)
            if not self.running:
                return
            retry = self.run_daily_review(today)
            self._handle_review_outcome(today, retry, stage="16:30 重试")
    async def _catchup_market_review(self):
        """FR-3.18.1 错过补偿: 服务启动时若 16:00 已过且当日未产出 → 补跑一次"""
        await asyncio.sleep(3)  # 等调度器就绪
        try:
            now = datetime.now()
            today = now.strftime('%Y-%m-%d')
            if now.hour >= 16 and not self.review_produced_today(today):
                logger.info(f"[复盘错过补偿] {today} 已过 16:00 未产出, 补跑")
                await self._run_market_review_with_retry(today)
        except Exception as e:
            logger.error(f"复盘错过补偿异常: {e}")
    async def event_alert_scan_task(self):
        """每日事件提醒扫描 (FR-3.18.2): 09:30 扫描关注股票事件 + 24h 去重 + 飞书推送"""
        while self.running:
            now = datetime.now()
            target = now.replace(hour=9, minute=30, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            await asyncio.sleep(max((target - now).total_seconds(), 10))
            if not self.running:
                break
            try:
                from event_alert import run_event_scan
                res = run_event_scan(username='default', scope='watchlist')
                self._record_task_run("event_alert_scan", True,
                                      f"新事件 {res.get('new_count', 0)} 条 | {res.get('note') or ''}")
                logger.info("事件提醒扫描完成: %s", res.get('note'))
            except Exception as e:
                logger.error(f"事件提醒扫描失败: {e}")
                self._record_task_run("event_alert_scan", False, str(e)[:120])
            await asyncio.sleep(60)
    async def fact_check_audit_task(self):
        """每日 AI 事实护栏抽查 (FR-3.18.9): 17:30 抽查历史回复数值与数据卡一致性, 产出审计报告"""
        while self.running:
            now = datetime.now()
            target = now.replace(hour=17, minute=30, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            await asyncio.sleep(max((target - now).total_seconds(), 10))
            if not self.running:
                break
            try:
                from fact_check import run_daily_audit, save_audit_report
                report = run_daily_audit()
                save_audit_report(report)
                self._record_task_run("fact_check_audit", True,
                                      f"抽查 {report.get('checked', 0)} 数字, 通过率 {report.get('pass_rate')}%")
                logger.info("事实护栏抽查完成: %s", report.get('pass_rate'))
            except Exception as e:
                logger.error(f"事实护栏抽查失败: {e}")
                self._record_task_run("fact_check_audit", False, str(e)[:120])
            await asyncio.sleep(60)
    async def daily_market_review_task(self):
        """每日收盘后自动生成《市场复盘》 (FR-3.17.2, 16:00 执行; FR-3.18.1 激活)

        失败仅打日志, 不中断其他定时任务; 产出判定/16:30 重试/错过补偿见 FR-3.18.1。
        """
        while self.running:
            now = datetime.now()
            target = now.replace(hour=16, minute=0, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break
            today = datetime.now().strftime('%Y-%m-%d')
            logger.info(f"生成每日市场复盘: {today}")
            await self._run_market_review_with_retry(today)
            await asyncio.sleep(60)  # 避开重复触发

    async def _run_shortterm_capture(self, trade_date):
        """抓取三池+龙虎榜入库; 未收盘不抓(数据诚实性); 单池失败不覆盖已有缓存。
        返回 {'ok','total','skipped'} 供重试/错过补偿判定。"""
        from shortterm import emotion_metrics, fetchers, lhb, store
        from shortterm.trade_calendar import is_settled
        if not is_settled(trade_date):
            logger.info("短线抓取跳过: %s 未收盘", trade_date)
            self._record_task_run("shortterm_capture", False, f"{trade_date} 未收盘")
            return {'ok': 0, 'total': 5, 'skipped': True}
        ok = 0
        total = 5
        for pool_type, fn in [('zt', fetchers.fetch_zt_pool),
                              ('zb', fetchers.fetch_zb_pool),
                              ('dt', fetchers.fetch_dt_pool),
                              ('lhb', lambda x: lhb.fetch_lhb(x, x)),
                              # V5.2.1: 昨日涨停股当日表现(定稿记录), 16:05 收盘后抓 → 赚钱效应可落盘
                              ('prev_zt', emotion_metrics.fetch_prev_pool)]:
            try:
                out = fn(trade_date)
            except Exception as e:  # noqa: BLE001
                logger.error("短线 %s 抓取异常(%s): %s", pool_type, trade_date, e)
                continue
            if out.get('available'):
                rows = out['rows']
                if pool_type == 'zt':
                    # V5.2.0 (FR-5.2.0.7): 涨停原因/题材串(问财可选, 无则如实不附)
                    try:
                        from shortterm import themes
                        rows, _avail, _err = themes.attach_reasons(rows, trade_date)
                    except Exception as e:  # noqa: BLE001
                        logger.warning("短线 涨停原因 附加失败(%s): %s", trade_date, e)
                store.save_pool(trade_date, pool_type, rows)
                ok += 1
            else:
                logger.warning("短线 %s 不可用(%s): %s", pool_type, trade_date,
                               out.get('reason'))
        self._record_task_run("shortterm_capture", ok >= 2,
                              f"{trade_date} 入库 {ok}/{total}")
        return {'ok': ok, 'total': total, 'skipped': False}

    async def _shortterm_capture_with_retry(self, today):
        """主跑 → 部分失败(ok<total)则 30 分钟后重试一次 (V5.2.0 T-5.2.10 降级重试)"""
        result = await self._run_shortterm_capture(today)
        if result and not result.get('skipped') and result.get('ok', 0) < result.get('total', 4):
            logger.warning("短线抓取部分失败(%s %s/%s), 30 分钟后重试", today,
                           result.get('ok'), result.get('total'))
            await asyncio.sleep(30 * 60)
            if self.running:
                await self._run_shortterm_capture(today)
        # V5.2.2 (T-5.2.29): 盘后自动跑 AI 复盘(失败不中断, 复盘可选)
        if result and not result.get('skipped') and result.get('ok', 0) >= 2:
            try:
                await self._run_shortterm_review(today)
            except Exception as e:  # noqa: BLE001
                logger.error("短线 AI 复盘生成失败(%s): %s", today, e)
        return result

    async def _run_shortterm_review(self, today):
        """多分析师 + 裁判 → 结构化盘面研判落盘 (AI 未配置则跳过)"""
        try:
            from api.v1 import shortterm as shortterm_api
            invoke = shortterm_api._build_llm_invoke()
            if invoke is None:
                logger.info("短线 AI 复盘跳过: AI 未配置")
                return
            bundle = shortterm_api._review_bundle(today)
            from shortterm import analysts, synthesizer
            reports = analysts.run_analysts(bundle, invoke)
            verdict = synthesizer.judge_review(reports, invoke)
            from shortterm import store as _store
            _store.save_pool(today, 'review', [{'date': today, 'reports': reports, **verdict}])
            self._record_task_run("shortterm_review", verdict.get('available', False),
                                  f"{today} 情绪档位={verdict.get('emotion_level') or '?'}")
            # V5.2.2 (T-5.2.29): webhook 事件(shortterm_review_ready)
            try:
                from webhook import dispatch as webhook_dispatch
                webhook_dispatch("shortterm_review_ready", {
                    "date": today, "emotion_level": verdict.get('emotion_level'),
                    "available": verdict.get('available', False)})
            except Exception as we:  # noqa: BLE001
                logger.warning("webhook shortterm_review_ready 投递失败 (忽略): %s", we)
            logger.info("短线 AI 复盘完成(%s): %s", today, verdict.get('emotion_level'))
        except Exception as e:  # noqa: BLE001
            logger.error("短线 AI 复盘异常(%s): %s", today, e)

    async def daily_shortterm_capture_task(self):
        """每日 16:05 抓取短线三池/龙虎榜入库 (V5.2.0 T-5.2.10)
        失败仅打日志, 不中断其他定时任务。"""
        while self.running:
            now = datetime.now()
            target = now.replace(hour=16, minute=5, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break
            today = datetime.now().strftime('%Y-%m-%d')
            logger.info("抓取短线复盘数据: %s", today)
            await self._shortterm_capture_with_retry(today)
            await asyncio.sleep(60)  # 避开重复触发

    async def intraday_snapshot_task(self):
        """盘中核验自动采集 (BUG-FIX-2): 交易日在快照时点窗口内自动采三池情绪.
        每 60s 轮询 intraday.current_snapshot_slot; 已采时点跳过; 非交易日跳过;
        异常仅打日志不中断其他定时任务。"""
        while self.running:
            try:
                await self._run_intraday_snapshot()
            except Exception as e:  # noqa: BLE001
                logger.error("盘中快照自动采集异常: %s", e)
            await asyncio.sleep(60)

    # ─── V5.4.0 (FR-5.4.2): 重点跟踪多时点评估 ─────────────────────────
    async def focus_eval_task(self):
        """重点跟踪多时点评估 (盘前09:00/盘后20:00 必做; 盘中10:30/14:00 可选默认关).

        每 60s 轮询: decide_session 门禁 (交易日+窗口+可选开关) → 已评估
        (当日该时段已有落库) 跳过 (重启幂等, 不重复消耗 AI); 异常仅打日志。
        """
        while self.running:
            try:
                from focus_scheduler import (
                    decide_session_with_readiness, load_intraday_enabled, load_pool_ready)
                from focus_eval import run_session
                from focus_store import query_by_date
                from market_data import is_trading_day
                now = datetime.now()
                today = now.strftime('%Y-%m-%d')
                # V5.4.3 (FR-5.4.3): 盘后必须等当日持仓矩阵生成完成 (20:00 策略任务),
                # 否则当天新入池为空 → 漏算当天新入池; 就绪后即执行 (窗口后可补做)。
                session, reason = decide_session_with_readiness(
                    now.strftime('%H:%M'),
                    trading_day=is_trading_day(now),  # 期望 date/datetime 对象
                    intraday_enabled=load_intraday_enabled(),
                    pool_ready=load_pool_ready(today),
                )
                if session and not query_by_date(today, session):
                    logger.info("🎯 重点跟踪评估触发: %s %s (%s)", today, session, reason)
                    try:
                        out = await run_session(today, session)
                        logger.info(
                            "重点跟踪评估完成: %s %s 评估 %s 只 (ai=%s rule=%s degraded=%s) "
                            "新入池基准=%s(%s) 自选=%s 新入池=%s",
                            today, session, out.get('evaluated'), out.get('ai_count'),
                            out.get('rule_count'), out.get('degraded'),
                            out.get('base_date'), out.get('base_reason'),
                            (out.get('roster') or {}).get('watchlist_count'),
                            (out.get('roster') or {}).get('new_pool_count'),
                        )
                    except Exception as e:  # noqa: BLE001
                        logger.error("重点跟踪评估执行异常: %s", e)
                elif reason == 'pool_not_ready':
                    logger.info("⏳ 重点跟踪盘后等待当日持仓矩阵生成: %s", today)
            except Exception as e:  # noqa: BLE001
                logger.error("重点跟踪调度异常: %s", e)
            await asyncio.sleep(60)

    async def _run_intraday_snapshot(self):
        """单个轮询周期: 判定是否应采 + 采集落盘。返回 slot 或 None。"""
        from datetime import datetime
        from shortterm import intraday, fetchers, store
        from shortterm.trade_calendar import is_trade_day
        now = datetime.now()
        today = now.strftime('%Y-%m-%d')
        if not is_trade_day(today):
            return None
        slot = intraday.current_snapshot_slot(now)
        if not slot:
            return None
        # 已采时点不重复采集
        if store.load_pool(today, 'intraday_' + slot):
            return None
        logger.info("盘中快照自动采集: %s %s", today, slot)
        zt = fetchers.fetch_zt_pool(today)
        zb = fetchers.fetch_zb_pool(today)
        dt_p = fetchers.fetch_dt_pool(today)
        mood = intraday.snapshot_mood(
            zt['rows'] if zt.get('available') else None,
            zb['rows'] if zb.get('available') else None,
            dt_p['rows'] if dt_p.get('available') else None)
        mood['pools_available'] = {'zt': zt.get('available'), 'zb': zb.get('available'),
                                   'dt': dt_p.get('available')}
        store.save_pool(today, 'intraday_' + slot, [mood])
        logger.info("盘中快照已落盘: %s %s", today, slot)
        return slot
    async def _catchup_shortterm(self):

        """V5.2.0 (T-5.2.10) 错过补偿: 启动时若 16:05 已过且当日未抓短线 → 补跑一次"""
        await asyncio.sleep(3)  # 等调度器就绪
        try:
            from shortterm import store
            from shortterm.trade_calendar import is_settled
            now = datetime.now()
            today = now.strftime('%Y-%m-%d')
            if now.hour >= 16 and is_settled(today) and store.load_pool(today, 'zt') is None:
                logger.info("[短线错过补偿] %s 已过 16:05 未抓取, 补跑", today)
                await self._run_shortterm_capture(today)
        except Exception as e:  # noqa: BLE001
            logger.error("短线错过补偿异常: %s", e)
    async def start(self):
        """启动调度器"""
        self.running = True
        logger.info("⏰ 定时任务调度器已启动")

        # 启动所有任务
        asyncio.create_task(self.daily_report_task())
        asyncio.create_task(self.weekly_report_task())
        asyncio.create_task(self.auto_evaluate_task())
        asyncio.create_task(self.strategy_run_task())
        asyncio.create_task(self.data_refresh_task())
        asyncio.create_task(self.tushare_pull_task())
        asyncio.create_task(self.file_watch_task())
        asyncio.create_task(self.daily_backup_task())
        asyncio.create_task(self.health_check_task())
        asyncio.create_task(self.freshness_alert_task())  # 6.3.2 (T-6.3.2.3): 健康与新鲜度联动告警
        asyncio.create_task(self.error_alert_task())
        asyncio.create_task(self.daily_market_review_task())
        # V5.2.0 T-5.2.10: 每日 16:05 短线三池/龙虎榜抓取入库
        asyncio.create_task(self.daily_shortterm_capture_task())
        # BUG-FIX-2: 盘中核验自动采集 (交易日快照时点窗口内)
        asyncio.create_task(self.intraday_snapshot_task())
        # V5.4.0 (FR-5.4.2): 重点跟踪多时点评估 (盘前/盘后必做, 盘中可选)
        asyncio.create_task(self.focus_eval_task())

        # V5.2.0 T-5.2.10: 短线错过补偿(启动时已过 16:05 且当日未抓 → 补跑)
        asyncio.create_task(self._catchup_shortterm())
        # v3.18 (FR-3.18.1): 错过补偿 — 启动时若 16:00 已过且当日未产出则补跑
        asyncio.create_task(self._catchup_market_review())
        # v3.18 (FR-3.18.2): 每日事件提醒扫描
        asyncio.create_task(self.event_alert_scan_task())
        # v3.18 (FR-3.18.9): 每日 AI 事实护栏抽查
        asyncio.create_task(self.fact_check_audit_task())
        # V5.0.5 T-5.0.53: 报表订阅 — 定时生成 + 通知中心投递
        asyncio.create_task(self.report_subscription_task())
    async def stop(self):
        """停止调度器"""
        self.running = False
        logger.info("⏰ 定时任务调度器已停止")
