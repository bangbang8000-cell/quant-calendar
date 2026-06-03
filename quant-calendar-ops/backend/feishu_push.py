#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
飞书消息推送模块
"""

import json
import requests
from typing import Dict, List, Optional
from datetime import datetime
from data_parser import parser, STRATEGY_CONFIG


class FeishuPusher:
    def __init__(self, webhook_url: str = None):
        self.webhook_url = webhook_url
    
    def set_webhook(self, url: str):
        """设置Webhook地址"""
        self.webhook_url = url
    
    def _send_message(self, content: Dict) -> bool:
        """发送消息到飞书"""
        if not self.webhook_url:
            print("⚠️ 未配置飞书Webhook")
            return False
        
        try:
            response = requests.post(
                self.webhook_url,
                headers={"Content-Type": "application/json"},
                data=json.dumps(content),
                timeout=10
            )
            result = response.json()
            if result.get('code') == 0:
                print("✅ 飞书消息发送成功")
                return True
            else:
                print(f"❌ 飞书消息发送失败: {result}")
                return False
        except Exception as e:
            print(f"❌ 发送异常: {e}")
            return False
    
    def build_daily_report(self, date: str) -> Dict:
        """构建每日选股报告卡片"""
        summary = parser.get_date_summary(date)
        consensus = parser.get_strategy_consensus(date, top_n=20)
        
        # 高共识股票（>=3个策略）
        high_consensus = [c for c in consensus if c['strategy_count'] >= 3]
        
        # 各策略持仓数量
        strategy_text = []
        for sid, count in summary.get('strategy_counts', {}).items():
            name = STRATEGY_CONFIG[sid]['name']
            strategy_text.append(f"• {name}: {count}只")
        
        # 高共识股票列表
        stock_text = []
        for item in high_consensus[:10]:
            strategies = '+'.join([STRATEGY_CONFIG[s]['name'].replace('策略', '') for s in item['strategies']])
            stock_text.append(f"• {item['stock']} [{strategies}]")
        
        card = {
            "msg_type": "interactive",
            "card": {
                "header": {
                    "title": {
                        "tag": "plain_text",
                        "content": f"📅 量化选股日报 - {date}"
                    },
                    "template": "blue"
                },
                "elements": [
                    {
                        "tag": "div",
                        "fields": [
                            {
                                "is_short": True,
                                "text": {
                                    "tag": "lark_md",
                                    "content": f"**📊 持仓总数**\n{summary.get('total_unique_stocks', 0)}只"
                                }
                            },
                            {
                                "is_short": True,
                                "text": {
                                    "tag": "lark_md",
                                    "content": f"**💎 4策略共识**\n{summary.get('consensus_count', 0)}只"
                                }
                            }
                        ]
                    },
                    {
                        "tag": "hr"
                    },
                    {
                        "tag": "div",
                        "text": {
                            "tag": "lark_md",
                            "content": "**📈 各策略持仓**"
                        }
                    },
                    {
                        "tag": "div",
                        "text": {
                            "tag": "lark_md",
                            "content": "\n".join(strategy_text) if strategy_text else "暂无数据"
                        }
                    },
                    {
                        "tag": "hr"
                    },
                    {
                        "tag": "div",
                        "text": {
                            "tag": "lark_md",
                            "content": f"**🔥 高共识股票 (≥3策略, 共{len(high_consensus)}只)**"
                        }
                    },
                    {
                        "tag": "div",
                        "text": {
                            "tag": "lark_md",
                            "content": "\n".join(stock_text) if stock_text else "暂无高共识股票"
                        }
                    },
                    {
                        "tag": "hr"
                    },
                    {
                        "tag": "note",
                        "elements": [
                            {
                                "tag": "plain_text",
                                "content": f"⏰ 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
                            }
                        ]
                    }
                ]
            }
        }
        
        return card
    
    def send_daily_report(self, date: str = None) -> bool:
        """发送每日选股报告"""
        if date is None:
            dates = parser.get_available_dates()
            date = dates[-1] if dates else None
        
        if not date:
            print("❌ 没有可用的日期数据")
            return False
        
        card = self.build_daily_report(date)
        return self._send_message(card)
    
    def send_text(self, text: str) -> bool:
        """发送纯文本消息"""
        content = {
            "msg_type": "text",
            "content": {
                "text": text
            }
        }
        return self._send_message(content)


# 测试
if __name__ == '__main__':
    pusher = FeishuPusher()
    # 测试卡片生成
    dates = parser.get_available_dates()
    if dates:
        card = pusher.build_daily_report(dates[-1])
        print(json.dumps(card, ensure_ascii=False, indent=2))
        print("\n✅ 卡片生成成功，请设置webhook后调用 send_daily_report()")
