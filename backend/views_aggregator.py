#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多视图股票池聚合器
支持：日视图、周视图、月视图、年视图
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Set, Optional
from collections import defaultdict

from data_parser import STRATEGY_CONFIG


class ViewsAggregator:
    def __init__(self, data_file: str = None):
        if data_file is None:
            from paths import CONSENSUS_DATA_FILE
            data_file = CONSENSUS_DATA_FILE
        self.data_file = data_file
        self.daily_data = {}  # date -> stocks
        self.all_dates = []
        self._load_data()

    def _load_data(self):
        """从data_parser加载历史共识数据"""
        try:
            from data_parser import parser
            self.all_dates = parser.get_available_dates()
            self.daily_data = {}
            
            # 从所有日期中提取共识数据
            for d in self.all_dates:
                holdings = parser.get_holdings_by_date(d)
                # 计算共识股票池
                stock_set = set()
                stock_info = {}  # code -> {name, strategy_count}
                
                for strategy_id, strategy_data in holdings.items():
                    for s in strategy_data.get('stocks', []):
                        code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                        name = '' if isinstance(s, str) else s.get('name', '')
                        if code:
                            stock_set.add(code)
                            if code not in stock_info:
                                stock_info[code] = {'name': name, 'strategies': set()}
                            stock_info[code]['strategies'].add(strategy_id)
                
                self.daily_data[d] = [
                    {'stock': code, 'name': info['name'], 'strategy_count': len(info['strategies']), 'strategies': [STRATEGY_CONFIG.get(sid, {}).get('name', sid) for sid in info['strategies']]}
                    for code, info in stock_info.items()
                ]
                
            print(f"✅ 加载完成: {len(self.all_dates)}个交易日, {sum(len(v) for v in self.daily_data.values())}条股票记录")
        except Exception as e:
            print(f"加载数据失败: {e}")
            import traceback
            traceback.print_exc()
            self.daily_data = {}
            self.all_dates = []

    def _get_week_range(self, date_str: str) -> List[str]:
        """获取某一天所在周的所有交易日"""
        d = datetime.strptime(date_str, '%Y-%m-%d')
        # 找到本周一
        monday = d - timedelta(days=d.weekday())
        week_dates = []
        for i in range(7):
            day = monday + timedelta(days=i)
            day_str = day.strftime('%Y-%m-%d')
            if day_str in self.daily_data:
                week_dates.append(day_str)
        return sorted(week_dates)

    def _get_month_range(self, date_str: str) -> List[str]:
        """获取某月的所有交易日"""
        year_month = date_str[:7]  # YYYY-MM
        return [d for d in self.all_dates if d.startswith(year_month)]

    def _get_year_range(self, date_str: str) -> List[str]:
        """获取某年的所有交易日"""
        year = date_str[:4]
        return [d for d in self.all_dates if d.startswith(year)]

    def _aggregate_stocks(self, dates: List[str]) -> Dict:
        """聚合多个日期的股票池（优化版）"""
        stock_map = {}

        for d in dates:
            stocks = self.daily_data.get(d, [])
            for s in stocks:
                code = s.get('stock', '') or s.get('code', '')
                if not code:
                    continue
                if code not in stock_map:
                    stock_map[code] = {
                        'code': code,
                        'name': s.get('name', ''),
                        'strategy_count': s.get('strategy_count', 1),
                        'days_count': 1,
                        'first_appear': d,
                        'last_appear': d,
                        'strategies': set(s.get('strategies', []))
                    }
                else:
                    info = stock_map[code]
                    info['days_count'] += 1
                    info['strategy_count'] = max(info['strategy_count'], s.get('strategy_count', 1))
                    info['strategies'].update(s.get('strategies', []))
                    if d < info['first_appear']:
                        info['first_appear'] = d
                    if d > info['last_appear']:
                        info['last_appear'] = d

        # 转换格式
        result = []
        for code, info in stock_map.items():
            info['strategies'] = list(info['strategies'])
            result.append(info)

        # 按出现天数排序
        result.sort(key=lambda x: (-x['days_count'], x['code']))
        return {
            'total': len(result),
            'stocks': result[:200],  # 限制返回数量，前端加载更快
            'days_count': len(dates)
        }

    def get_day_view(self, date: str) -> Dict:
        """日视图"""
        stocks = self.daily_data.get(date, [])
        # 格式化
        formatted = []
        for s in stocks:
            formatted.append({
                'code': s.get('stock', '') or s.get('code', ''),
                'name': s.get('name', ''),
                'strategy_count': s.get('strategy_count', 1),
                'strategies': s.get('strategies', []),
                'days_count': 1,
                'first_appear': date,
                'last_appear': date
            })
        return {
            'view': 'day',
            'date': date,
            'total': len(formatted),
            'stocks': formatted
        }

    def get_week_view(self, date: str) -> Dict:
        """周视图"""
        week_dates = self._get_week_range(date)
        result = self._aggregate_stocks(week_dates)
        result['view'] = 'week'
        result['week_start'] = week_dates[0] if week_dates else date
        return result

    def get_month_view(self, date: str) -> Dict:
        """月视图"""
        month_dates = self._get_month_range(date)
        result = self._aggregate_stocks(month_dates)
        result['view'] = 'month'
        result['month'] = date[:7]
        return result

    def get_year_view(self, date: str) -> Dict:
        """年视图"""
        year_dates = self._get_year_range(date)
        result = self._aggregate_stocks(year_dates)
        result['view'] = 'year'
        result['year'] = date[:4]
        return result

    def calculate_status(self, stock_code: str, current_date: str, view: str = 'day') -> str:
        """
        计算股票状态:
        - new: 新入池 (本周期新出现)
        - current: 当前持仓 (持续在池)
        - out: 已出池 (本周期调出)
        """
        try:
            curr_idx = self.all_dates.index(current_date)
        except:
            return 'current'

        if view == 'day':
            # 日视图：和前一天对比
            if curr_idx > 0:
                prev_date = self.all_dates[curr_idx - 1]
                prev_stocks = set(s.get('stock', '') or s.get('code', '') for s in self.daily_data.get(prev_date, []))
                curr_stocks = set(s.get('stock', '') or s.get('code', '') for s in self.daily_data.get(current_date, []))

                if stock_code in curr_stocks and stock_code not in prev_stocks:
                    return 'new'
                elif stock_code in curr_stocks:
                    return 'current'
                return 'out'

        elif view == 'week':
            # 周视图：和上一周所有交易日对比
            week_dates = self._get_week_range(current_date)
            if not week_dates:
                return 'current'
            curr_idx = self.all_dates.index(current_date)
            prev_week_start = max(0, curr_idx - len(week_dates) - 5)
            prev_week_dates = self.all_dates[prev_week_start:curr_idx - len(week_dates) + 1] if curr_idx >= len(week_dates) else []
            
            prev_stocks = set()
            curr_stocks = set()
            for d in prev_week_dates:
                prev_stocks.update(s.get('stock', '') or s.get('code', '') for s in self.daily_data.get(d, []))
            for d in week_dates:
                curr_stocks.update(s.get('stock', '') or s.get('code', '') for s in self.daily_data.get(d, []))

            if stock_code in curr_stocks and stock_code not in prev_stocks:
                return 'new'
            elif stock_code in curr_stocks:
                return 'current'
            return 'out'

        elif view == 'month':
            # 月视图：和上个月对比
            curr_month = current_date[:7]
            prev_month = None
            for i in range(curr_idx, -1, -1):
                d = self.all_dates[i]
                if not d.startswith(curr_month):
                    prev_month = d[:7]
                    break
            if prev_month:
                prev_stocks = set()
                curr_stocks = set()
                for d in self.all_dates:
                    if d.startswith(prev_month):
                        prev_stocks.update(s.get('stock', '') or s.get('code', '') for s in self.daily_data.get(d, []))
                    if d.startswith(curr_month):
                        curr_stocks.update(s.get('stock', '') or s.get('code', '') for s in self.daily_data.get(d, []))

                if stock_code in curr_stocks and stock_code not in prev_stocks:
                    return 'new'
                elif stock_code in curr_stocks:
                    return 'current'
                return 'out'

        elif view == 'year':
            # 年视图：简化处理，一律显示为current
            return 'current'

        return 'current'


# 全局实例
views_aggregator = ViewsAggregator()
