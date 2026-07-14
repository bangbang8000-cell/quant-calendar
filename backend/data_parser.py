#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
量化策略持仓数据解析器
"""
import os
import csv
import time
import logging
from datetime import datetime
from typing import Dict, List, Optional
from collections import defaultdict
from stock_info import stock_manager

from paths import EXTERNAL_DATA_DIR as DATA_DIR

logger = logging.getLogger(__name__)

STRATEGY_CONFIG = {
    'multifactor': {
        'name': '多因子策略',
        'files': ['多因子策略持仓-剔除ST.csv', '多因子策略持仓.csv'],
        'use_st_filtered': True
    },
    'industry_rotation': {
        'name': '行业轮动策略',
        'files': ['行业轮动策略持仓-剔除ST.csv', '行业轮动策略持仓.csv'],
        'use_st_filtered': True
    },
    'index_enhance': {
        'name': '指数增强策略',
        'files': ['指数增强策略持仓-剔除ST.csv', '指数增强策略持仓.csv'],
        'use_st_filtered': True
    },
    'money_flow': {
        'name': '资金流策略',
        'files': ['资金流策略持仓文件-剔除ST.csv', '资金流策略持仓文件.csv'],
        'use_st_filtered': True
    }
}


class DataParser:
    def __init__(self):
        self.holdings_data = {}  # strategy -> {date -> set(stocks)}
        self.date_list = []
        self.stock_info = defaultdict(lambda: {'strategies': set(), 'hold_days': defaultdict(int)})
        self._load_all_data()
    
    def _load_all_data(self):
        """加载所有策略数据"""
        print("📊 开始加载策略数据...")
        
        all_dates = set()
        
        for strategy_id, config in STRATEGY_CONFIG.items():
            # 尝试所有可能的文件名，找到第一个存在的
            filepath = None
            found_file = None
            for filename in config['files']:
                test_path = os.path.join(DATA_DIR, filename)
                if os.path.exists(test_path):
                    filepath = test_path
                    found_file = filename
                    break
            
            if not filepath:
                print(f"⚠️ 找不到 {config['name']} 的任何数据文件，已尝试: {config['files']}")
                continue
            
            print(f"✅ 加载: {found_file}")
            
            self.holdings_data[strategy_id] = {}
            
            with open(filepath, 'r', encoding='utf-8') as f:
                reader = csv.reader(f)
                headers = next(reader)[1:]  # 跳过第一列空列
                
                for row in reader:
                    if not row or not row[0]:
                        continue
                    
                    date = row[0].strip()
                    stocks = set()
                    
                    for idx, value in enumerate(row[1:]):
                        if idx < len(headers) and value and float(value) > 0:
                            stock_code = headers[idx].strip()
                            stocks.add(stock_code)
                            self.stock_info[stock_code]['strategies'].add(strategy_id)
                            self.stock_info[stock_code]['hold_days'][strategy_id] += 1
                    
                    if stocks:
                        self.holdings_data[strategy_id][date] = stocks
                        all_dates.add(date)
        
        self.date_list = sorted(all_dates)
        print(f"✅ 数据加载完成: {len(self.date_list)}个交易日, {len(self.stock_info)}只股票")
    
    def reload(self) -> dict:
        """重新加载所有策略数据（原子替换，失败不回滚旧数据）"""
        # 构建临时数据
        temp_holdings = {}
        temp_stock_info = defaultdict(lambda: {'strategies': set(), 'hold_days': defaultdict(int)})
        temp_date_list = []
        all_dates = set()

        for strategy_id, config in STRATEGY_CONFIG.items():
            filepath = None
            found_file = None
            for filename in config['files']:
                test_path = os.path.join(DATA_DIR, filename)
                if os.path.exists(test_path):
                    filepath = test_path
                    found_file = filename
                    break

            if not filepath:
                print(f"⚠️ 找不到 {config['name']} 的任何数据文件")
                continue

            print(f"✅ 加载: {found_file}")
            temp_holdings[strategy_id] = {}

            with open(filepath, 'r', encoding='utf-8') as f:
                reader = csv.reader(f)
                headers = next(reader)[1:]
                for row in reader:
                    if not row or not row[0]:
                        continue
                    date = row[0].strip()
                    stocks = set()
                    for idx, value in enumerate(row[1:]):
                        if idx < len(headers) and value and float(value) > 0:
                            stock_code = headers[idx].strip()
                            stocks.add(stock_code)
                            temp_stock_info[stock_code]['strategies'].add(strategy_id)
                            temp_stock_info[stock_code]['hold_days'][strategy_id] += 1
                    if stocks:
                        temp_holdings[strategy_id][date] = stocks
                        all_dates.add(date)

        temp_date_list = sorted(all_dates)

        # 原子替换
        self.holdings_data = temp_holdings
        self.stock_info = temp_stock_info
        self.date_list = temp_date_list

        stats = {
            "dates_count": len(self.date_list),
            "stocks_count": len(self.stock_info),
            "latest_date": self.date_list[-1] if self.date_list else None
        }
        print(f"✅ 数据刷新完成: {stats['dates_count']}个交易日, {stats['stocks_count']}只股票")
        return stats

    def get_available_dates(self) -> List[str]:
        """获取所有可用日期"""
        return self.date_list
    
    def get_holdings_by_date(self, date: str, strategy: Optional[str] = None) -> Dict:
        """获取指定日期的持仓"""
        result = {}
        
        if strategy:
            strategies = [strategy] if strategy in STRATEGY_CONFIG else []
        else:
            strategies = list(STRATEGY_CONFIG.keys())
        
        for s in strategies:
            if s in self.holdings_data and date in self.holdings_data[s]:
                stocks_list = []
                for code in sorted(list(self.holdings_data[s][date])):
                    stocks_list.append({
                        'code': code,
                        'name': stock_manager.get_name(code)
                    })
                result[s] = {
                    'name': STRATEGY_CONFIG[s]['name'],
                    'stocks': stocks_list,
                    'count': len(stocks_list)
                }
        
        return result
    
    def get_strategy_consensus(self, date: str) -> Dict:
        """获取指定日期的策略共识度分析"""
        stock_counts = defaultdict(list)
        
        for strategy_id in STRATEGY_CONFIG.keys():
            if strategy_id in self.holdings_data and date in self.holdings_data[strategy_id]:
                for stock in self.holdings_data[strategy_id][date]:
                    stock_counts[stock].append(strategy_id)
        
        consensus = []
        for stock, strategies in stock_counts.items():
            consensus.append({
                'stock': stock,
                'name': stock_manager.get_name(stock),
                'strategy_count': len(strategies),
                'strategies': strategies,
                'consensus_level': len(strategies) / len(STRATEGY_CONFIG)
            })
        
        return sorted(consensus, key=lambda x: -x['strategy_count'])
    
    def get_stock_history(self, stock_code: str) -> Dict:
        """获取单只股票的持仓历史"""
        history = []
        
        for strategy_id in STRATEGY_CONFIG.keys():
            strategy_data = self.holdings_data.get(strategy_id, {})
            hold_dates = []
            
            for date in self.date_list:
                if date in strategy_data and stock_code in strategy_data[date]:
                    hold_dates.append(date)
            
            if hold_dates:
                history.append({
                    'strategy': strategy_id,
                    'strategy_name': STRATEGY_CONFIG[strategy_id]['name'],
                    'hold_dates': hold_dates,
                    'hold_count': len(hold_dates)
                })
        
        return {
            'stock': stock_code,
            'name': stock_manager.get_name(stock_code),
            'total_days': sum(h['hold_count'] for h in history),
            'history': history
        }
    
    def get_date_summary(self, date: str) -> Dict:
        """获取某日的汇总数据"""
        holdings = self.get_holdings_by_date(date)
        
        all_stocks = set()
        strategy_counts = {}
        
        for s, data in holdings.items():
            # stocks 现在是字典列表: [{code, name}]
            stock_codes = set(stock['code'] for stock in data['stocks'])
            all_stocks.update(stock_codes)
            strategy_counts[s] = len(stock_codes)
        
        # 计算交集
        if holdings:
            stock_sets = [set(stock['code'] for stock in data['stocks']) for data in holdings.values()]
            intersection = set.intersection(*stock_sets) if stock_sets else set()
        else:
            intersection = set()
        
        return {
            'date': date,
            'total_unique_stocks': len(all_stocks),
            'strategy_counts': strategy_counts,
            'full_consensus_stocks': sorted(list(intersection)),
            'consensus_count': len(intersection)
        }


# 全局单例
parser = DataParser()


if __name__ == '__main__':
    # 测试
    latest_date = parser.get_available_dates()[-1]
    print(f"最新日期: {latest_date}")
    summary = parser.get_date_summary(latest_date)
    print(f"当日汇总: {summary}")
    consensus = parser.get_strategy_consensus(latest_date)[:10]
    print(f"前10只高共识股票: {consensus}")
