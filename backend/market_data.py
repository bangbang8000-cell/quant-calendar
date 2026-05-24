#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
市场行情数据模块
获取中国各交易市场指数数据
"""
import pandas as pd
import numpy as np
import json
import os
from datetime import datetime, timedelta
import logging
from config import settings

logger = logging.getLogger(__name__)

# 主要指数配置
INDEX_CONFIG = {
    'sh': {
        'code': '000001.SH',
        'name': '上证指数',
        'market': '上海'
    },
    'sz': {
        'code': '399001.SZ',
        'name': '深证成指',
        'market': '深圳'
    },
    'cyb': {
        'code': '399006.SZ',
        'name': '创业板指',
        'market': '创业板'
    },
    'kc': {
        'code': '000688.SH',
        'name': '科创50',
        'market': '科创板'
    },
    'hs300': {
        'code': '000300.SH',
        'name': '沪深300',
        'market': '全市场'
    },
    'zz500': {
        'code': '000905.SH',
        'name': '中证500',
        'market': '全市场'
    }
}

# 数据缓存文件
from paths import MARKET_CACHE_FILE as CACHE_FILE

# 中国股市交易时间
TRADING_START = (9, 30)   # 09:30
TRADING_MID = (11, 30)   # 11:30
TRADING_RESTART = (13, 0) # 13:00
TRADING_END = (15, 0)     # 15:00


def is_trading_day(date=None):
    """判断是否为交易日（简化版，周一到周五）"""
    if date is None:
        date = datetime.now()
    # 0=周一, 4=周五, 5=周六, 6=周日
    return date.weekday() < 5


def is_trading_hours(now=None):
    """判断是否在交易时间内"""
    if now is None:
        now = datetime.now()
    
    if not is_trading_day(now):
        return False
    
    current_time = (now.hour, now.minute)
    
    # 早盘: 9:30 - 11:30
    morning_trading = TRADING_START <= current_time <= TRADING_MID
    # 午盘: 13:00 - 15:00
    afternoon_trading = TRADING_RESTART <= current_time <= TRADING_END
    
    return morning_trading or afternoon_trading


def get_cache_duration(now=None):
    """获取缓存有效期（秒）"""
    if now is None:
        now = datetime.now()
    
    # 非交易日：缓存到下一个交易日9:25
    if not is_trading_day(now):
        # 找下一个交易日
        next_trading = now + timedelta(days=1)
        while next_trading.weekday() >= 5:  # 跳过周六日
            next_trading += timedelta(days=1)
        next_trading_925 = next_trading.replace(hour=9, minute=25, second=0, microsecond=0)
        delta = next_trading_925 - now
        return int(delta.total_seconds())
    
    # 交易日，但非交易时间
    if not is_trading_hours(now):
        current_time = (now.hour, now.minute)
        if current_time < TRADING_START:
            # 开盘前：缓存到9:30
            target = now.replace(hour=9, minute=30, second=0, microsecond=0)
        else:
            # 收盘后：缓存到下一个交易日9:25
            next_day = now + timedelta(days=1)
            while next_day.weekday() >= 5:
                next_day += timedelta(days=1)
            target = next_day.replace(hour=9, minute=25, second=0, microsecond=0)
        delta = target - now
        return int(delta.total_seconds())
    
    # 交易时间内：每10分钟更新一次
    return 600  # 10分钟 = 600秒


class MarketData:
    """市场行情数据获取类"""
    
    def __init__(self):
        self.cache = self._load_cache()
        # 尝试导入标准tushare
        try:
            import tushare as ts
            if settings.TUSHARE_TOKEN:
                ts.set_token(settings.TUSHARE_TOKEN)
                self.pro = ts.pro_api()
                self.tushare_available = True
                logger.info("✅ Tushare Pro连接成功")
            else:
                logger.warning("⚠️ Tushare token未配置，使用模拟数据")
                self.tushare_available = False
                self.pro = None
        except Exception as e:
            logger.warning(f"⚠️ Tushare不可用: {e}")
            import traceback
            logger.warning(traceback.format_exc())
            self.tushare_available = False
            self.pro = None
    
    def update_tushare_token(self, token: str):
        """动态更新 Tushare Token"""
        if token and token != getattr(self, 'tushare_token', ''):
            self.tushare_token = token
            try:
                import tushare as ts
                ts.set_token(token)
                self.tushare_available = True
                return True, "Token 更新成功"
            except Exception as e:
                self.tushare_available = False
                return False, f"Token 更新失败: {str(e)}"
        return True, "无需更新"

    def test_tushare_connection(self) -> dict:
        """测试 Tushare 连接"""
        if not self.tushare_available:
            return {
                "success": False,
                "message": "Tushare 未配置或不可用",
                "available": False
            }
        
        try:
            import tushare as ts
            pro = ts.pro_api()
            # 简单测试：获取交易日历
            result = pro.trade_cal(start_date='20240101', end_date='20240105')
            return {
                "success": True,
                "message": "✅ 连接测试成功",
                "available": True,
                "data_count": len(result)
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"❌ 连接失败: {str(e)}",
                "available": False
            }
    
    def _load_cache(self):
        """加载缓存"""
        if os.path.exists(CACHE_FILE):
            try:
                with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except:
                pass
        return {}
    
    def _save_cache(self):
        """保存缓存"""
        os.makedirs(os.path.dirname(CACHE_FILE), exist_ok=True)
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.cache, f, ensure_ascii=False, indent=2)
    
    def _is_cache_valid(self, cache_key):
        """检查缓存是否有效"""
        if cache_key not in self.cache:
            return False
        
        cache_data = self.cache[cache_key]
        cache_time = datetime.fromisoformat(cache_data['fetch_time'])
        now = datetime.now()
        
        # 根据时间段计算有效期
        cache_duration = get_cache_duration(cache_time)
        return (now - cache_time).total_seconds() < cache_duration
    
    def get_index_daily(self, ts_code, trade_date=None):
        """获取指数日线数据"""
        cache_key = f"index_{ts_code}_{trade_date or 'latest'}"
        
        # 检查缓存是否有效
        if self._is_cache_valid(cache_key):
            return self.cache[cache_key]['data']
        
        if self.tushare_available:
            try:
                # 从API获取
                df = self.pro.index_daily(
                    ts_code=ts_code,
                    trade_date=trade_date,
                    limit=10
                )
                
                if df is not None and len(df) > 0:
                    # 按日期排序取最新
                    df = df.sort_values('trade_date', ascending=False)
                    latest = df.iloc[0].to_dict()
                    
                    # 存入缓存
                    self.cache[cache_key] = {
                        'fetch_time': datetime.now().isoformat(),
                        'data': latest
                    }
                    self._save_cache()
                    
                    return latest
            except Exception as e:
                logger.error(f"获取指数数据失败 {ts_code}: {e}")
        
        # API不可用或获取失败时使用模拟数据
        return self._get_mock_data(ts_code)
    
    def _get_mock_data(self, ts_code):
        """生成模拟数据（API不可用时）"""
        # 基础点位映射
        base_points = {
            '000001.SH': 4135,
            '399001.SZ': 12300,
            '399006.SZ': 2750,
            '000688.SH': 1050,
            '000300.SH': 5300,
            '000905.SH': 7800,
        }
        base = base_points.get(ts_code, 3000)
        
        # 随机波动 ±2%
        change_pct = np.random.uniform(-0.02, 0.02)
        point = base * (1 + change_pct)
        change_amount = base * change_pct
        
        return {
            'ts_code': ts_code,
            'trade_date': datetime.now().strftime('%Y%m%d'),
            'close': round(point, 2),
            'pct_chg': round(change_pct * 100, 2),
            'change': round(change_amount, 2),
            'open': round(point * (1 + np.random.uniform(-0.005, 0.005)), 2),
            'high': round(point * (1 + abs(np.random.uniform(0, 0.01))), 2),
            'low': round(point * (1 - abs(np.random.uniform(0, 0.01))), 2),
            'vol': round(np.random.uniform(1000000, 5000000), 0),
            'amount': round(np.random.uniform(100000, 500000), 0),
            '_is_mock': True
        }
    
    def get_market_overview(self, date=None):
        """获取市场概览数据"""
        now = datetime.now()
        is_trading = is_trading_day(now)
        in_trading_hours = is_trading_hours(now)
        
        overview = {
            'date': now.strftime('%Y-%m-%d %H:%M:%S'),
            'update_time': now.isoformat(),
            'is_trading_day': is_trading,
            'in_trading_hours': in_trading_hours,
            'cache_duration': get_cache_duration(),
            'indices': []
        }
        
        for idx_key, config in INDEX_CONFIG.items():
            index_data = self.get_index_daily(config['code'], date)
            overview['indices'].append({
                'id': idx_key,
                'code': config['code'],
                'name': config['name'],
                'market': config['market'],
                'close': index_data.get('close', 0),
                'pct_chg': index_data.get('pct_chg', 0),
                'change': index_data.get('change', 0),
                'vol': index_data.get('vol', 0),
                'amount': index_data.get('amount', 0),
                'is_mock': index_data.get('_is_mock', False),
                'trade_date': index_data.get('trade_date', '')
            })
        
        # 计算整体市场情绪
        chg_list = [idx['pct_chg'] for idx in overview['indices']]
        avg_chg = np.mean(chg_list)
        if avg_chg > 1:
            sentiment = 'bull'
            sentiment_text = '普涨行情'
        elif avg_chg > 0:
            sentiment = 'weak_bull'
            sentiment_text = '震荡偏强'
        elif avg_chg > -1:
            sentiment = 'weak_bear'
            sentiment_text = '震荡偏弱'
        else:
            sentiment = 'bear'
            sentiment_text = '普跌行情'
        
        overview['market_sentiment'] = {
            'type': sentiment,
            'text': sentiment_text,
            'avg_pct_chg': round(float(avg_chg), 2)
        }
        
        return overview


# 全局实例
market_data = MarketData()


if __name__ == '__main__':
    # 测试
    overview = market_data.get_market_overview()
    print(json.dumps(overview, ensure_ascii=False, indent=2))


# ===== K线数据获取 =====
def _is_index_code(ts_code):
    """判断是否为指数代码"""
    # 指数代码规则：
    # 上证指数类: 000xxx.SH (如 000001.SH, 000016.SH, 000300.SH)
    # 深证指数类: 399xxx.SZ (如 399001.SZ, 399006.SZ)
    # 科创50: 000688.SH
    # 股票: 600xxx.SH, 000xxx.SZ, 300xxx.SZ, 688xxx.SH
    
    # 上海市场: 000开头 = 指数, 600/688开头 = 股票
    if ts_code.endswith('.SH'):
        if ts_code.startswith('000') or ts_code.startswith('0000'):
            return True  # 000001.SH, 000300.SH 等是指数
        return False  # 600xxx, 688xxx 是股票
    
    # 深圳市场: 399开头 = 指数, 000/300开头 = 股票
    if ts_code.endswith('.SZ'):
        if ts_code.startswith('399'):
            return True  # 399001.SZ, 399006.SZ 等是指数
        return False  # 000xxx, 300xxx 是股票
    
    return False


def get_kline_data(ts_code, period='daily', limit=60):
    """获取K线数据（支持股票和指数）
    period: daily=日线, weekly=周线, monthly=月线
    """
    try:
        import tushare as ts
        import pandas as pd
        from config import settings
        
        if settings.TUSHARE_TOKEN:
            ts.set_token(settings.TUSHARE_TOKEN)
            pro = ts.pro_api()
        else:
            logger.warning("⚠️ Tushare token未配置，无法获取K线数据")
            return None
        
        is_index = _is_index_code(ts_code)
        
        # 根据类型和周期选择API
        if is_index:
            # 指数使用 index_* API
            if period == 'weekly':
                df = pro.index_weekly(ts_code=ts_code, limit=limit)
            elif period == 'monthly':
                df = pro.index_monthly(ts_code=ts_code, limit=limit)
            else:
                df = pro.index_daily(ts_code=ts_code, limit=limit)
        else:
            # 股票使用普通 daily / weekly / monthly API
            if period == 'weekly':
                df = pro.weekly(ts_code=ts_code, limit=limit)
            elif period == 'monthly':
                df = pro.monthly(ts_code=ts_code, limit=limit)
            else:
                df = pro.daily(ts_code=ts_code, limit=limit)
        
        if df is None or len(df) == 0:
            return None
        
        # 按日期升序排列
        df = df.sort_values('trade_date', ascending=True).reset_index(drop=True)
        
        # 计算均线
        df['ma5'] = df['close'].rolling(window=5).mean()
        df['ma10'] = df['close'].rolling(window=10).mean()
        df['ma20'] = df['close'].rolling(window=20).mean()
        
        # 转换为前端需要的格式
        kline_data = []
        for _, row in df.iterrows():
            kline_data.append([
                str(row['trade_date']),  # 日期
                float(row['open']),      # 开盘
                float(row['close']),     # 收盘
                float(row['low']),       # 最低
                float(row['high']),      # 最高
                float(row['vol']),       # 成交量
                float(row.get('ma5', 0)) if pd.notna(row.get('ma5')) else None,
                float(row.get('ma10', 0)) if pd.notna(row.get('ma10')) else None,
                float(row.get('ma20', 0)) if pd.notna(row.get('ma20')) else None,
            ])
        
        return kline_data
    except Exception as e:
        import logging
        logging.error(f"获取K线数据失败 {ts_code} {period}: {e}")
        return None
