#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
股票基础信息管理 - Tushare数据源
"""

import json
import os
from typing import Dict, Optional

# Tushare配置 - 优先从环境变量/配置文件读取
def _get_tushare_token():
    """获取 Tushare Token，优先从环境变量/配置文件读取"""
    try:
        from config import settings
        if settings.TUSHARE_TOKEN:
            return settings.TUSHARE_TOKEN
    except:
        pass
    token = os.environ.get("TUSHARE_TOKEN", "")
    if token:
        return token
    return ""

TUSHARE_TOKEN = _get_tushare_token()
from paths import STOCK_INFO_FILE


class StockInfoManager:
    def __init__(self):
        self.stock_map: Dict[str, str] = {}  # code -> name
        self._load_from_file()
    
    def _load_from_file(self):
        """从本地文件加载股票信息"""
        if os.path.exists(STOCK_INFO_FILE):
            try:
                with open(STOCK_INFO_FILE, 'r', encoding='utf-8') as f:
                    self.stock_map = json.load(f)
                print(f"✅ 已加载 {len(self.stock_map)} 只股票信息")
            except Exception as e:
                print(f"⚠️ 加载股票信息失败: {e}")
        else:
            print("⚠️ 股票信息文件不存在，将从Tushare获取")
    
    def _save_to_file(self):
        """保存股票信息到本地文件"""
        os.makedirs(os.path.dirname(STOCK_INFO_FILE), exist_ok=True)
        with open(STOCK_INFO_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.stock_map, f, ensure_ascii=False, indent=2)
        print(f"✅ 已保存 {len(self.stock_map)} 只股票信息到本地")
    
    def fetch_from_tushare(self) -> bool:
        """从Tushare获取股票基础信息"""
        try:
            import requests
            url = 'http://api.tushare.pro'
            
            # 获取A股股票列表
            params = {
                "api_name": "stock_basic",
                "token": TUSHARE_TOKEN,
                "params": {
                    "exchange": "",
                    "list_status": "L"  # L上市状态：上市
                },
                "fields": "ts_code,symbol,name,area,industry,list_date"
            }
            
            response = requests.post(url, json=params, timeout=30)
            data = response.json()
            
            if data.get('code') == 0:
                items = data.get('data', {}).get('items', [])
                fields = data.get('data', {}).get('fields', [])
                
                for item in items:
                    stock_data = dict(zip(fields, item))
                    ts_code = stock_data.get('ts_code', '')
                    name = stock_data.get('name', '')
                    
                    if ts_code and name:
                        # Tushare格式转换: 600000.SH -> 600000.SH
                        # 我们的数据格式是 600000.SH，与持仓数据一致
                        self.stock_map[ts_code] = name
                
                self._save_to_file()
                print(f"✅ 从Tushare获取了 {len(items)} 只股票信息")
                return True
            else:
                print(f"❌ Tushare API错误: {data}")
                return False
                
        except Exception as e:
            print(f"❌ 获取股票信息失败: {e}")
            return False
    
    def get_name(self, stock_code: str) -> str:
        """获取股票中文名称"""
        return self.stock_map.get(stock_code, stock_code)
    
    def search(self, keyword: str) -> list:
        """搜索股票"""
        results = []
        keyword = keyword.lower()
        for code, name in self.stock_map.items():
            if keyword in code.lower() or keyword in name:
                results.append({"code": code, "name": name})
        return results[:50]
    
    def has_stock(self, stock_code: str) -> bool:
        """检查是否有该股票信息"""
        return stock_code in self.stock_map
    
    def get_daily_data(self, ts_code: str, trade_date: str) -> Optional[Dict]:
        """获取指定日期的股票行情数据"""
        try:
            import requests
            url = 'http://api.tushare.pro'
            
            params = {
                "api_name": "daily",
                "token": TUSHARE_TOKEN,
                "params": {
                    "ts_code": ts_code,
                    "trade_date": trade_date.replace('-', '')
                },
                "fields": "ts_code,trade_date,open,high,low,close,vol,amount,change,pct_chg"
            }
            
            response = requests.post(url, json=params, timeout=10)
            data = response.json()
            
            if data.get('code') == 0 and data.get('data', {}).get('items'):
                item = data['data']['items'][0]
                fields = data['data']['fields']
                return dict(zip(fields, item))
            return None
        except Exception as e:
            print(f"❌ 获取行情数据失败 {ts_code}: {e}")
            return None
    
    def get_ma_data(self, ts_code: str, end_date: str, days: int = 30) -> Optional[Dict]:
        """获取均线数据（MA5, MA14, MA20）"""
        try:
            import requests
            url = 'http://api.tushare.pro'
            
            params = {
                "api_name": "daily",
                "token": TUSHARE_TOKEN,
                "params": {
                    "ts_code": ts_code,
                    "end_date": end_date.replace('-', ''),
                    "limit": days
                },
                "fields": "ts_code,trade_date,close,vol"
            }
            
            response = requests.post(url, json=params, timeout=10)
            data = response.json()
            
            if data.get('code') == 0:
                items = data.get('data', {}).get('items', [])
                if not items:
                    return None
                
                closes = [item[2] for item in items if item[2]]  # 收盘价列表
                
                # 计算均线
                ma_data = {}
                
                if len(closes) >= 5:
                    ma_data['ma5'] = round(sum(closes[:5]) / 5, 2)
                if len(closes) >= 14:
                    ma_data['ma14'] = round(sum(closes[:14]) / 14, 2)
                if len(closes) >= 20:
                    ma_data['ma20'] = round(sum(closes[:20]) / 20, 2)
                
                ma_data['current_price'] = closes[0] if closes else None
                ma_data['data_count'] = len(closes)
                
                return ma_data
            return None
        except Exception as e:
            print(f"❌ 获取均线数据失败 {ts_code}: {e}")
            return None
    
    def calculate_score(self, daily_data: Dict, ma_data: Dict) -> Dict:
        """计算股票综合评分（百分制）"""
        score = 50  # 基础分
        details = []
        
        if not daily_data or not ma_data:
            return {'score': score, 'level': '中性', 'details': ['数据不足，默认评分'], 'color': '#999'}
        
        current_price = ma_data.get('current_price', 0)
        pct_chg = daily_data.get('pct_chg', 0) or 0
        vol = daily_data.get('vol', 0) or 0
        
        # 1. 价格位置评分 (25分)
        price_score = 0
        if current_price and ma_data.get('ma5'):
            if current_price > ma_data['ma5']:
                price_score += 8
                details.append('站上MA5均线 +8分')
            else:
                details.append('跌破MA5均线 -5分')
                price_score -= 5
            
            if ma_data.get('ma14') and current_price > ma_data['ma14']:
                price_score += 8
                details.append('站上MA14均线 +8分')
            else:
                details.append('跌破MA14均线 -5分')
                price_score -= 5
            
            if ma_data.get('ma20') and current_price > ma_data['ma20']:
                price_score += 9
                details.append('站上MA20均线 +9分')
            else:
                details.append('跌破MA20均线 -5分')
                price_score -= 5
        
        # 2. 均线排列评分 (15分)
        ma_score = 0
        if all([ma_data.get('ma5'), ma_data.get('ma14'), ma_data.get('ma20')]):
            if ma_data['ma5'] > ma_data['ma14'] > ma_data['ma20']:
                ma_score += 15
                details.append('多头排列（MA5>MA14>MA20） +15分')
            elif ma_data['ma5'] < ma_data['ma14'] < ma_data['ma20']:
                ma_score -= 10
                details.append('空头排列（MA5<MA14<MA20） -10分')
            else:
                ma_score += 5
                details.append('均线纠缠 +5分')
        
        # 3. 涨跌幅评分 (20分)
        change_score = 0
        if pct_chg > 5:
            change_score += 20
            details.append(f'大涨{pct_chg:.2f}% +20分')
        elif pct_chg > 3:
            change_score += 15
            details.append(f'上涨{pct_chg:.2f}% +15分')
        elif pct_chg > 0:
            change_score += 10
            details.append(f'收涨{pct_chg:.2f}% +10分')
        elif pct_chg > -3:
            change_score -= 5
            details.append(f'微跌{pct_chg:.2f}% -5分')
        elif pct_chg > -5:
            change_score -= 12
            details.append(f'下跌{pct_chg:.2f}% -12分')
        else:
            change_score -= 18
            details.append(f'大跌{pct_chg:.2f}% -18分')
        
        # 4. K线形态评分 (20分)
        kline_score = 10
        open_p = daily_data.get('open', 0) or 0
        high = daily_data.get('high', 0) or 0
        low = daily_data.get('low', 0) or 0
        close = daily_data.get('close', 0) or 0
        
        if close > open_p:
            body = close - open_p
            upper_shadow = high - close
            lower_shadow = open_p - low
            
            if upper_shadow < body * 0.3 and lower_shadow < body * 0.3:
                kline_score += 8
                details.append('光头光脚阳线 +8分')
            elif lower_shadow > body:
                kline_score += 6
                details.append('长下影阳线 +6分')
            else:
                kline_score += 4
                details.append('普通阳线 +4分')
        else:
            body = open_p - close
            upper_shadow = high - open_p
            lower_shadow = close - low
            
            if upper_shadow < body * 0.3 and lower_shadow < body * 0.3:
                kline_score -= 6
                details.append('光头光脚阴线 -6分')
            elif upper_shadow > body:
                kline_score -= 8
                details.append('长上影阴线 -8分')
            else:
                kline_score -= 3
                details.append('普通阴线 -3分')
        
        # 5. 振幅评分 (10分)
        amplitude_score = 5
        if high and low:
            amplitude = (high - low) / low * 100 if low else 0
            if amplitude < 2:
                amplitude_score += 5
                details.append(f'窄幅震荡{amplitude:.1f}% +5分')
            elif amplitude < 4:
                amplitude_score += 3
                details.append(f'适度波动{amplitude:.1f}% +3分')
            elif amplitude < 6:
                amplitude_score -= 2
                details.append(f'波动较大{amplitude:.1f}% -2分')
            else:
                amplitude_score -= 5
                details.append(f'剧烈波动{amplitude:.1f}% -5分')
        
        # 计算总分
        total_score = max(0, min(100, score + price_score + ma_score + change_score + kline_score + amplitude_score))
        
        # 评级
        if total_score >= 80:
            level = '强势'
            color = '#f56c6c'
        elif total_score >= 65:
            level = '偏强'
            color = '#e6a23c'
        elif total_score >= 50:
            level = '中性'
            color = '#409eff'
        elif total_score >= 35:
            level = '偏弱'
            color = '#67c23a'
        else:
            level = '弱势'
            color = '#909399'
        
        return {
            'score': total_score,
            'level': level,
            'color': color,
            'details': details,
            'price_score': price_score,
            'ma_score': ma_score,
            'change_score': change_score,
            'kline_score': kline_score,
            'amplitude_score': amplitude_score
        }


# 全局单例
stock_manager = StockInfoManager()


if __name__ == '__main__':
    # 测试：获取股票信息
    print("正在从Tushare获取股票基础信息...")
    stock_manager.fetch_from_tushare()
    print(f"\n测试查询:")
    print(f"平安银行: {stock_manager.get_name('000001.SZ')}")
    print(f"贵州茅台: {stock_manager.get_name('600519.SH')}")
    print(f"搜索'银行': {stock_manager.search('银行')[:5]}")
