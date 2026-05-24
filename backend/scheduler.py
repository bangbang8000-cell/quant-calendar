#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
定时任务调度器
"""

import asyncio
from datetime import datetime
from typing import Optional, Callable
from data_parser import parser
from feishu_push import FeishuPusher
from ai_evaluator import ai_evaluator


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
            # 每个交易日 9:00 推送
            if now.hour == 9 and now.minute == 0:
                dates = parser.get_available_dates()
                if dates:
                    print(f"📤 执行每日推送任务: {dates[-1]}")
                    self.pusher.send_daily_report(dates[-1])
                # 等待1分钟避免重复执行
                await asyncio.sleep(60)
            await asyncio.sleep(30)
    
    async def auto_evaluate_task(self):
        """自动评股任务"""
        while self.running:
            now = datetime.now()
            config = ai_evaluator.get_auto_config()
            
            # 检查是否启用自动评股
            if not config.get('enabled', False):
                await asyncio.sleep(60)
                continue
            
            schedule_time = config.get('schedule_time', '09:00')
            target_hour, target_minute = map(int, schedule_time.split(':'))
            
            # 检查是否到执行时间
            if now.hour == target_hour and now.minute == target_minute:
                # 避免重复执行
                if not self._should_execute_today():
                    await asyncio.sleep(60)
                    continue
                
                print(f"🤖 开始自动评股任务: {now}")
                
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
                        print("⚠️ 自动评股: 没有要评估的股票")
                        await asyncio.sleep(60)
                        continue
                    
                    print(f"📊 自动评股: 评估 {len(all_stocks)} 只股票")
                    
                    # 批量评估
                    results = ai_evaluator.batch_evaluate(all_stocks)
                    
                    # 推送到飞书
                    if config.get('push_to_feishu', True):
                        await self._push_ai_evaluation_report(results)
                    
                    print(f"✅ 自动评股完成: {len(results)} 条记录")
                    
                except Exception as e:
                    print(f"❌ 自动评股失败: {e}")
                
                # 等待1分钟避免重复执行
                await asyncio.sleep(60)
            
            await asyncio.sleep(30)
    
    async def _push_ai_evaluation_report(self, results):
        """推送AI评估报告到飞书"""
        try:
            if not results:
                return
            
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
            print("✅ AI评估报告已推送到飞书")
        except Exception as e:
            print(f"❌ 推送AI报告失败: {e}")
    
    async def weekly_report_task(self):
        """每周报告任务"""
        while self.running:
            now = datetime.now()
            # 周六 10:00 推送周报
            if now.weekday() == 5 and now.hour == 10 and now.minute == 0:
                print("📤 执行每周报告任务")
                # 生成周报逻辑
                await asyncio.sleep(60)
            await asyncio.sleep(30)
    
    async def start(self):
        """启动调度器"""
        self.running = True
        print("⏰ 定时任务调度器已启动")
        
        # 启动所有任务
        asyncio.create_task(self.daily_report_task())
        asyncio.create_task(self.weekly_report_task())
        asyncio.create_task(self.auto_evaluate_task())
    
    async def stop(self):
        """停止调度器"""
        self.running = False
        print("⏰ 定时任务调度器已停止")


# 全局单例
scheduler = Scheduler()


if __name__ == '__main__':
    async def test():
        print("测试调度器...")
        # 测试推送（不等待定时，直接发送）
        scheduler.pusher.send_daily_report()
    
    asyncio.run(test())
