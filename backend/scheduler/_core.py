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
from ai_evaluator import ai_evaluator
from db import backup_db
from report_generator import generate_weekly_report

logger = logging.getLogger(__name__)

import scheduler as _m  # 共享状态经包级解析 (测试 patch("scheduler.X") 有效)  # noqa: E402

# v3.17.12 (FR-3.17.12): 数据拉取任务连续失败飞书告警阈值
PULL_ALERT_THRESHOLD = 3

# V4.9 (P1): 调度执行历史持久化 — 记录每次任务运行详情
HISTORY_FILE = os.path.join(_m.DATA_DIR, "scheduler_history.json")
_HISTORY_MAX = 5000  # 最多保留 5000 条记录

class SchedulerCoreMixin:
    """V5.0.9 (T-5.0.92): Scheduler 拆分 Mixin (_core)"""
    def _should_execute_today(self) -> bool:
        """判断今天是否应该执行（避免重复执行）"""
        today = datetime.now().strftime('%Y-%m-%d')
        if self.last_exec_date == today:
            return False
        self.last_exec_date = today
        return True
    async def daily_report_task(self):
        """每日报告任务 (v3.5.0-T2: 用批量日报生成器 + 飞书推送)"""
        while self.running:
            now = datetime.now()
            # 计算到下一个 9:00 的秒数
            target = now.replace(hour=9, minute=0, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break
            dates = parser.get_available_dates()
            if dates:
                logger.info(f"📤 执行每日推送任务: {dates[-1]}")
                try:
                    # v3.5.0-T1: 生成批量日报
                    from report_generator import generate_daily_report
                    report = generate_daily_report(dates[-1])
                    if report.get("success"):
                        logger.info(f"✅ 批量日报生成: {report['stats']['strategies']} 策略 / {report['stats']['stocks']} 只")
                        # v3.17.15 (FR-3.17.15): Webhook — review_ready 事件
                        try:
                            from webhook import dispatch as webhook_dispatch
                            webhook_dispatch("review_ready", {"date": dates[-1], "type": "daily_report"})
                        except Exception as we:
                            logger.warning("webhook review_ready 投递失败 (忽略): %s", we)
                        # 飞书推送 (Markdown 文本)
                        self.pusher.send_text(report["content"][:3500])
                        logger.info("📮 日报已推送飞书")
                        self._record_task_run("daily_report", True, f"日报 {dates[-1]}")
                        self._record_freshness("daily_report", latest_date=dates[-1], detail="daily_report")
                    else:
                        # 回退旧版推送
                        self.pusher.send_daily_report(dates[-1])
                        self._record_task_run("daily_report", True, "日报回退旧版推送")
                except Exception as e:
                    logger.error(f"日报推送失败, 回退旧版: {e}")
                    self._record_task_run("daily_report", False, str(e)[:120])
                    try:
                        self.pusher.send_daily_report(dates[-1])
                    except Exception:
                        logger.warning('scheduler:215 静默异常 (Exception)')
            await asyncio.sleep(60)  # 避开重复触发
    async def report_subscription_task(self):
        """V5.0.5 T-5.0.53: 报表订阅任务 — 每 10 分钟检查到期订阅并投递。"""
        while self.running:
            try:
                from report_subscribe import run_due_subscriptions
                result = run_due_subscriptions()
                if result.get("dispatched", 0) > 0:
                    logger.info("📮 报表订阅投递: %d 条 (%d 个到期)",
                                result.get("dispatched"), result.get("total"))
            except Exception as e:
                logger.warning("报表订阅任务异常 (忽略): %s", e)
            await asyncio.sleep(600)
    async def auto_evaluate_task(self):
        """自动评估任务"""
        while self.running:
            now = datetime.now()
            config = ai_evaluator.get_auto_config()

            if not config.get('enabled', False):
                # 未启用时每小时检查一次（而非每60秒空转）
                await asyncio.sleep(3600)
                continue

            schedule_time = config.get('schedule_time', '09:00')
            target_hour, target_minute = map(int, schedule_time.split(':'))

            # 计算到目标时间的秒数
            target = now.replace(hour=target_hour, minute=target_minute, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break

            if self._should_execute_today():
                logger.info(f"🤖 开始自动评估任务: {datetime.now()}")

                try:
                    # 获取要评估的股票列表
                    selected_stocks = config.get('selected_stocks', [])
                    selected_strategies = config.get('selected_strategies', [])

                    # 如果选择了策略，从策略中获取股票池
                    strategy_stocks = set()
                    if selected_strategies:
                        dates = parser.get_available_dates()
                        if dates:
                            for strategy in selected_strategies:
                                holdings = parser.get_strategy_holdings(strategy, dates[-1])
                                for stock in holdings:
                                    strategy_stocks.add(stock['code'])

                    # 合并股票列表
                    all_stocks = list(set(selected_stocks) | strategy_stocks)

                    if not all_stocks:
                        logger.warning(" 自动评估: 没有要评估的股票")
                        await asyncio.sleep(60)
                        continue

                    logger.info(f"📊 自动评估: 评估 {len(all_stocks)} 只股票")

                    # 批量评估
                    results = await ai_evaluator.batch_evaluate(all_stocks, username='auto_scheduler')

                    # 推送到飞书
                    if config.get('push_to_feishu', True):
                        await self._push_ai_evaluation_report(results)

                    logger.info(f"✅ 自动评估完成: {len(results)} 条记录")
                    self._record_task_run("auto_evaluate", True, f"评估 {len(results)} 只")
                    # v3.17.15 (FR-3.17.15): Webhook — evaluate_done 事件
                    try:
                        from webhook import dispatch as webhook_dispatch
                        webhook_dispatch("evaluate_done", {
                            "username": "auto_scheduler",
                            "count": len(results),
                            "at": datetime.now().isoformat(),
                        })
                    except Exception as we:
                        logger.warning("webhook evaluate_done 投递失败 (忽略): %s", we)

                except Exception as e:
                    logger.error(f" 自动评估失败: {e}")
                    self._record_task_run("auto_evaluate", False, str(e)[:120])

                # 等待1分钟避免重复执行
                await asyncio.sleep(60)
    async def _push_ai_evaluation_report(self, results):
        """推送AI评估报告到飞书"""
        try:
            if not results:
                return

            # 从自动评估配置中获取 webhook URL
            config = ai_evaluator.get_auto_config()
            webhook = config.get('feishu_webhook', '')
            if not webhook:
                # 回退到全局飞书配置的 webhook
                try:
                    import json
                    import os
                    feishu_config_file = os.path.join(_m.DATA_DIR, "feishu_config.json")
                    if os.path.exists(feishu_config_file):
                        with open(feishu_config_file) as f:
                            fc = json.load(f)
                        webhook = fc.get('webhook_url', '')
                except Exception:
                    logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
                    pass

            if not webhook:
                logger.warning(" 自动评估推送: 未配置飞书 Webhook")
                return

            self.pusher.set_webhook(webhook)

            # 生成报告
            total_count = len(results)
            avg_score = sum(r['result']['total_score'] for r in results) / total_count

            # 按评级分类
            level_counts = {}
            for r in results:
                level = r['result']['level']
                level_counts[level] = level_counts.get(level, 0) + 1

            # 找出高分股票
            high_score = sorted(results, key=lambda x: x['result']['total_score'], reverse=True)[:5]

            report = "🤖 自动AI评估报告\n\n"
            report += f"📊 评估总数: {total_count} 只\n"
            report += f"📈 平均评分: {avg_score:.1f} 分\n\n"

            report += "🏆 评级分布:\n"
            for level, count in sorted(level_counts.items(), key=lambda x: -x[1]):
                report += f"  • {level}: {count} 只\n"

            report += "\n⭐ 高分推荐 (Top 5):\n"
            for stock in high_score:
                report += f"  • {stock['stock_name']} ({stock['stock_code']}): {stock['result']['total_score']}分 - {stock['result']['level']}\n"

            report += f"\n⏰ 评估时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"

            self.pusher.send_text(report)
            logger.info("✅ AI评估报告已推送到飞书")
        except Exception as e:
            logger.error(f" 推送AI报告失败: {e}")
    async def weekly_report_task(self):
        """每周报告任务"""
        while self.running:
            now = datetime.now()
            # 计算到下一个周六 10:00 的秒数
            days_until_saturday = (5 - now.weekday()) % 7
            if days_until_saturday == 0 and now.hour >= 10:
                days_until_saturday = 7  # 本周六已过，等下周六
            target = now.replace(hour=10, minute=0, second=0, microsecond=0) + timedelta(days=days_until_saturday)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break
            logger.info("📤 执行每周报告任务")
            try:
                result = generate_weekly_report()
                if result.get('success'):
                    logger.info(f"✅ 周报生成成功: {result.get('path', '')}")
                    self._record_task_run("weekly_report", True, result.get('path', ''))
                    # 飞书推送周报摘要
                    try:
                        content = result.get('content', '')
                        preview = content[:1500] + ('...' if len(content) > 1500 else '')
                        self.pusher.send_text(f"📈 量化选股周报\n\n{preview}")
                        logger.info("✅ 周报已推送到飞书")
                    except Exception as e:
                        logger.warning(f"周报飞书推送失败: {e}")
                else:
                    logger.warning(f"周报生成失败: {result.get('message', '')}")
                    self._record_task_run("weekly_report", False, result.get('message', '')[:120])
            except Exception as e:
                logger.error(f"每周报告任务异常: {e}")
                self._record_task_run("weekly_report", False, str(e)[:120])
            await asyncio.sleep(60)  # 避开重复触发
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
        return result

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
        asyncio.create_task(self.error_alert_task())
        asyncio.create_task(self.daily_market_review_task())
        # V5.2.0 T-5.2.10: 每日 16:05 短线三池/龙虎榜抓取入库
        asyncio.create_task(self.daily_shortterm_capture_task())
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
