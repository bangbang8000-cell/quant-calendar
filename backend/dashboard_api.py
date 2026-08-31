#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略总览Dashboard API
"""
import json
import time
from collections import defaultdict, Counter
from datetime import datetime
from data_parser import parser, STRATEGY_CONFIG


class DashboardAnalyzer:
    def __init__(self):
        self.strategies = list(STRATEGY_CONFIG.keys())
        self._cache = {}        # url → (timestamp, data)
        self._cache_ttl = 60    # seconds
    
    @property
    def all_dates(self):
        """动态获取所有可用日期（实时从 parser 读取，非静态快照）"""
        return parser.get_available_dates()
    
    def _get_from_cache(self, key: str):
        """简单的内存缓存"""
        entry = self._cache.get(key)
        if entry and (time.time() - entry[0]) < self._cache_ttl:
            return entry[1]
        return None
    
    def _set_cache(self, key: str, data):
        self._cache[key] = (time.time(), data)

    def get_overview(self):
        """获取总览数据（全局统计，不需要日期）"""
        cache_key = 'overview'
        cached = self._get_from_cache(cache_key)
        if cached:
            return cached

        latest_date = self.all_dates[-1] if self.all_dates else None

        # 1. 核心统计数据
        stats = self._get_core_stats(latest_date)

        # 2. 各策略选股数量统计
        strategy_counts = self._get_strategy_counts(latest_date)

        # 3. 共识度排行TOP30
        consensus = self._get_consensus_rank(latest_date, top_n=30)

        # 4. 今日/近周/近月入池出池统计
        pool_changes = self._get_pool_changes(latest_date)

        # 5. 时间周期覆盖
        time_coverage = self._get_time_coverage()

        data = {
            "latest_date": latest_date,
            "stats": stats,
            "strategy_counts": strategy_counts,
            "consensus_rank": consensus,
            "pool_changes": pool_changes,
            "time_coverage": time_coverage
        }
        self._set_cache(cache_key, data)
        return data

    def _get_core_stats(self, date: str) -> dict:
        """核心统计数据"""
        holdings = parser.get_holdings_by_date(date)

        total_stocks = set()
        for strategy_id, data in holdings.items():
            for s in data.get('stocks', []):
                code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                if code:
                    total_stocks.add(code)

        # v1.11: 动态计算 total_stocks_covered（从所有历史数据去重统计）
        all_time_stocks = set()
        for d in self.all_dates:
            h = parser.get_holdings_by_date(d)
            for sid, sdata in h.items():
                for s in sdata.get('stocks', []):
                    code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                    if code:
                        all_time_stocks.add(code)

        return {
            "total_trading_days": len(self.all_dates),
            "total_stocks_covered": len(all_time_stocks),
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

    def _get_consensus_rank(self, date: str, top_n: int = 30) -> list:
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
        """入池出池统计（当日 + 近5日 + 近20日）"""
        try:
            idx = self.all_dates.index(date)
        except ValueError:
            return {"new_count": 0, "out_count": 0, "new_stocks": [], "out_stocks": [],
                    "weekly_new": 0, "weekly_out": 0,
                    "monthly_new": 0, "monthly_out": 0}

        def _pool_for_date(d):
            stocks = set()
            h = parser.get_holdings_by_date(d)
            for sid, sdata in h.items():
                for s in sdata.get('stocks', []):
                    code = s if isinstance(s, str) else (s.get('code') or s.get('stock', ''))
                    if code:
                        stocks.add(code)
            return stocks

        curr_stocks = _pool_for_date(date)

        # 与前一日对比
        if idx == 0:
            new_stocks = []
            out_stocks = []
        else:
            prev_stocks = _pool_for_date(self.all_dates[idx - 1])
            new_stocks = list(curr_stocks - prev_stocks)
            out_stocks = list(prev_stocks - curr_stocks)

        # v1.11: 近5日累计换手
        week_start = max(0, idx - 5)
        if week_start < idx:
            week_ref = _pool_for_date(self.all_dates[week_start])
            weekly_new = len(curr_stocks - week_ref)
            weekly_out = len(week_ref - curr_stocks)
        else:
            weekly_new = 0
            weekly_out = 0

        # v1.11: 近20日累计换手
        month_start = max(0, idx - 20)
        if month_start < idx:
            month_ref = _pool_for_date(self.all_dates[month_start])
            monthly_new = len(curr_stocks - month_ref)
            monthly_out = len(month_ref - curr_stocks)
        else:
            monthly_new = 0
            monthly_out = 0

        return {
            "new_count": len(new_stocks),
            "out_count": len(out_stocks),
            "new_stocks": new_stocks[:10],
            "out_stocks": out_stocks[:10],
            "weekly_new": weekly_new,
            "weekly_out": weekly_out,
            "monthly_new": monthly_new,
            "monthly_out": monthly_out
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
