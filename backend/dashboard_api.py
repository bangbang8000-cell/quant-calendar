#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略总览Dashboard API
"""
import json
from collections import defaultdict, Counter
from datetime import datetime
from data_parser import parser, STRATEGY_CONFIG


class DashboardAnalyzer:
    def __init__(self):
        self.all_dates = parser.get_available_dates()
        self.strategies = list(STRATEGY_CONFIG.keys())

    def get_overview(self):
        """获取总览数据（全局统计，不需要日期）"""
        latest_date = self.all_dates[-1] if self.all_dates else None

        # 1. 核心统计数据
        stats = self._get_core_stats(latest_date)

        # 2. 各策略选股数量统计
        strategy_counts = self._get_strategy_counts(latest_date)

        # 3. 共识度排行TOP15
        consensus = self._get_consensus_rank(latest_date)

        # 4. 今日入池出池统计
        pool_changes = self._get_pool_changes(latest_date)

        # 5. 时间周期覆盖
        time_coverage = self._get_time_coverage()

        return {
            "latest_date": latest_date,
            "stats": stats,
            "strategy_counts": strategy_counts,
            "consensus_rank": consensus,
            "pool_changes": pool_changes,
            "time_coverage": time_coverage
        }

    def _get_core_stats(self, date: str) -> dict:
        """核心统计数据"""
        holdings = parser.get_holdings_by_date(date)

        total_stocks = set()
        for strategy_id, data in holdings.items():
            for s in data.get('stocks', []):
                code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                if code:
                    total_stocks.add(code)

        return {
            "total_trading_days": len(self.all_dates),
            "total_stocks_covered": 2364,
            "strategy_count": len(self.strategies),
            "current_pool_size": len(total_stocks),
            "date_range": {
                "start": self.all_dates[0] if self.all_dates else None,
                "end": self.all_dates[-1] if self.all_dates else None
            }
        }

    def _get_strategy_counts(self, date: str) -> list:
        """各策略选股数量统计"""
        holdings = parser.get_holdings_by_date(date)
        total_stocks = set()

        result = []
        for strategy_id, config in STRATEGY_CONFIG.items():
            stocks = holdings.get(strategy_id, {}).get('stocks', [])
            codes = set()
            for s in stocks:
                code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                if code:
                    codes.add(code)
                    total_stocks.add(code)

            result.append({
                "strategy_id": strategy_id,
                "strategy_name": config.get('name', strategy_id),
                "count": len(codes)
            })

        # 计算占比
        total = len(total_stocks) or 1
        for item in result:
            item['percentage'] = round(item['count'] / total * 100, 1)

        result.sort(key=lambda x: -x['count'])
        return result

    def _get_consensus_rank(self, date: str, top_n: int = 15) -> list:
        """共识度排行（被多少策略同时选中）"""
        holdings = parser.get_holdings_by_date(date)
        strategy_count = defaultdict(list)

        for strategy_id, config in STRATEGY_CONFIG.items():
            stocks = holdings.get(strategy_id, {}).get('stocks', [])
            for s in stocks:
                code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                name = '' if isinstance(s, str) else s.get('name', '')
                if code:
                    strategy_count[code].append(strategy_id)
                    if name and '|' not in code:
                        strategy_count[code + '|name'] = name

        result = []
        for code, strategies in strategy_count.items():
            if '|name' in code:
                continue
            name = strategy_count.get(code + '|name', '')
            result.append({
                "code": code,
                "name": name,
                "strategy_count": len(strategies),
                "strategies": strategies,
                "strategy_names": [STRATEGY_CONFIG.get(s, {}).get('name', s) for s in strategies]
            })

        result.sort(key=lambda x: -x['strategy_count'])
        return result[:top_n]

    def _get_pool_changes(self, date: str) -> dict:
        """入池出池统计"""
        try:
            idx = self.all_dates.index(date)
        except ValueError:
            return {"new_count": 0, "out_count": 0, "new_stocks": [], "out_stocks": []}

        if idx == 0:
            return {"new_count": 0, "out_count": 0, "new_stocks": [], "out_stocks": []}

        prev_date = self.all_dates[idx - 1]

        curr_stocks = set()
        curr_holdings = parser.get_holdings_by_date(date)
        for strategy_id, data in curr_holdings.items():
            for s in data.get('stocks', []):
                code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                if code:
                    curr_stocks.add(code)

        prev_stocks = set()
        prev_holdings = parser.get_holdings_by_date(prev_date)
        for strategy_id, data in prev_holdings.items():
            for s in data.get('stocks', []):
                code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                if code:
                    prev_stocks.add(code)

        new_stocks = list(curr_stocks - prev_stocks)
        out_stocks = list(prev_stocks - curr_stocks)

        return {
            "new_count": len(new_stocks),
            "out_count": len(out_stocks),
            "new_stocks": new_stocks[:10],
            "out_stocks": out_stocks[:10]
        }

    def _get_time_coverage(self) -> dict:
        """时间周期覆盖"""
        dates = self.all_dates
        if not dates:
            return {}

        start_date = datetime.strptime(dates[0], '%Y-%m-%d')
        end_date = datetime.strptime(dates[-1], '%Y-%m-%d')

        days_count = len(dates)
        months_count = len(set(d[:7] for d in dates))
        years_count = len(set(d[:4] for d in dates))

        return {
            "start_date": dates[0],
            "end_date": dates[-1],
            "days": days_count,
            "months": months_count,
            "years": years_count
        }


analyzer = DashboardAnalyzer()
