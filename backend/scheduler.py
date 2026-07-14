#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
定时任务调度器
"""

import asyncio
import os
import logging
from datetime import datetime, timedelta
from typing import Optional, Callable
from data_parser import parser
from feishu_push import FeishuPusher
from ai_evaluator import ai_evaluator
from views_aggregator import views_aggregator
from paths import EXTERNAL_DATA_DIR

logger = logging.getLogger(__name__)


class Scheduler:
    def __init__(self):
        self.pusher = FeishuPusher()
        self.tasks = {}
        self.running = False
        self.last_exec_date = None  # 记录最后执行日期，避免重复
    
    def set_webhook(self, url: str):
        """设置飞书Webhook"""
        self.pusher.set_webhook(url)
    
    def _should_execute_today(self) -> bool:
        """判断今天是否应该执行（避免重复执行）"""
        today = datetime.now().strftime('%Y-%m-%d')
        if self.last_exec_date == today:
            return False
        self.last_exec_date = today
        return True
    
    async def daily_report_task(self):
        """每日报告任务"""
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
                self.pusher.send_daily_report(dates[-1])
            await asyncio.sleep(60)  # 避开重复触发
    
    async def auto_evaluate_task(self):
        """自动评股任务"""
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
                logger.info(f"🤖 开始自动评股任务: {datetime.now()}")
                
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
                        logger.warning(" 自动评股: 没有要评估的股票")
                        await asyncio.sleep(60)
                        continue
                    
                    logger.info(f"📊 自动评股: 评估 {len(all_stocks)} 只股票")
                    
                    # 批量评估
                    results = ai_evaluator.batch_evaluate(all_stocks, username='auto_scheduler')
                    
                    # 推送到飞书
                    if config.get('push_to_feishu', True):
                        await self._push_ai_evaluation_report(results)
                    
                    logger.info(f"✅ 自动评股完成: {len(results)} 条记录")
                    
                except Exception as e:
                    logger.error(f" 自动评股失败: {e}")
                
                # 等待1分钟避免重复执行
                await asyncio.sleep(60)
    
    async def _push_ai_evaluation_report(self, results):
        """推送AI评估报告到飞书"""
        try:
            if not results:
                return
            
            # 从自动评股配置中获取 webhook URL
            config = ai_evaluator.get_auto_config()
            webhook = config.get('feishu_webhook', '')
            if not webhook:
                # 回退到全局飞书配置的 webhook
                try:
                    from feishu_push import FeishuPusher
                    import json, os
                    from paths import DATA_DIR
                    feishu_config_file = os.path.join(DATA_DIR, "feishu_config.json")
                    if os.path.exists(feishu_config_file):
                        with open(feishu_config_file) as f:
                            fc = json.load(f)
                        webhook = fc.get('webhook_url', '')
                except Exception:
                    pass
            
            if not webhook:
                logger.warning(" 自动评股推送: 未配置飞书 Webhook")
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
            
            report = f"🤖 自动AI评股报告\n\n"
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
            await asyncio.sleep(60)  # 避开重复触发
    
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
                        views_aggregator.reload()
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(True, f"定时刷新成功 {today}")
                        logger.info("✅ 定时刷新完成")
                    except Exception as e:
                        logger.error(f" 定时刷新失败: {e}")
                await asyncio.sleep(60)
            except Exception as e:
                logger.info(f"定时刷新任务异常: {e}")
                await asyncio.sleep(60)
    
    async def file_watch_task(self):
        """文件变动监听任务（轮询 CSV 文件 mtime）"""
        import os
        
        # 建立初始 mtime 快照
        file_mtimes = {}
        csv_extensions = ('.csv',)
        
        def scan_files():
            """扫描策略数据目录中的 CSV 文件"""
            mtimes = {}
            if os.path.isdir(EXTERNAL_DATA_DIR):
                for fname in os.listdir(EXTERNAL_DATA_DIR):
                    if fname.endswith(csv_extensions):
                        fpath = os.path.join(EXTERNAL_DATA_DIR, fname)
                        try:
                            mtimes[fpath] = os.path.getmtime(fpath)
                        except OSError:
                            pass
            return mtimes
        
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
                
                # 检测变动
                changed = False
                for fpath, mtime in current_mtimes.items():
                    if fpath not in file_mtimes or file_mtimes[fpath] != mtime:
                        changed = True
                        logger.info(f"📁 检测到文件变动: {os.path.basename(fpath)}")
                        break
                
                # 检测新增文件
                if not changed:
                    for fpath in current_mtimes:
                        if fpath not in file_mtimes:
                            changed = True
                            logger.info(f"📁 检测到新文件: {os.path.basename(fpath)}")
                            break
                
                # 检测删除文件
                if not changed:
                    for fpath in file_mtimes:
                        if fpath not in current_mtimes:
                            changed = True
                            logger.info(f"📁 检测到文件删除: {os.path.basename(fpath)}")
                            break
                
                if changed:
                    logger.info("🔄 触发文件变动刷新...")
                    try:
                        parser.reload()
                        views_aggregator.reload()
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(True, "文件变动触发刷新")
                        logger.info("✅ 文件变动刷新完成")
                    except Exception as e:
                        logger.error(f" 文件变动刷新失败: {e}")
                
                # 更新快照
                file_mtimes = current_mtimes
                await asyncio.sleep(60)  # 每60秒检查一次
                
            except Exception as e:
                logger.info(f"文件监听任务异常: {e}")
                await asyncio.sleep(60)
    
    async def start(self):
        """启动调度器"""
        self.running = True
        logger.info("⏰ 定时任务调度器已启动")
        
        # 启动所有任务
        asyncio.create_task(self.daily_report_task())
        asyncio.create_task(self.weekly_report_task())
        asyncio.create_task(self.auto_evaluate_task())
        asyncio.create_task(self.data_refresh_task())
        asyncio.create_task(self.file_watch_task())
    
    async def stop(self):
        """停止调度器"""
        self.running = False
        logger.info("⏰ 定时任务调度器已停止")


# 全局单例
scheduler = Scheduler()


if __name__ == '__main__':
    async def test():
        logger.info("测试调度器...")
        # 测试推送（不等待定时，直接发送）
        scheduler.pusher.send_daily_report()
    
    asyncio.run(test())
