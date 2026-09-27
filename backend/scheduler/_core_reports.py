#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.4): 调度器报告/评估类任务 Mixin — 自 scheduler/_core.py 拆分。

行为与拆分前一致；由 scheduler/_core.py 聚合为 SchedulerCoreMixin。
"""
import asyncio
import logging
import os
from datetime import datetime, timedelta

from data_parser import parser
from ai_evaluator import ai_evaluator
from report_generator import generate_weekly_report

logger = logging.getLogger(__name__)

import scheduler as _m  # 共享状态经包级解析 (测试 patch("scheduler.X") 有效)  # noqa: E402


class SchedulerReportsMixin:
    """报告/评估类定时任务 (_core 拆分)"""
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
