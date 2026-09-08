#!/usr/bin/env python3
"""每日定时预加载所有用户自选股K线数据到缓存

运行方式: python3 scripts/preload_watchlist_kline.py
Cron: 0 8 * * 1-5  cd ~/.openclaw/workspace/quant-calendar-ops && python3 scripts/preload_watchlist_kline.py
"""
import sys, os, json, logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

# Add backend to path
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'backend'))

from paths import DATA_DIR
from market_data import get_kline_data

USERS_DIR = os.path.join(DATA_DIR, "users")


def preload_all_users():
    users = [d for d in os.listdir(USERS_DIR)
             if os.path.isdir(os.path.join(USERS_DIR, d)) and not d.startswith('.')]
    
    total_loaded = 0
    total_failed = 0
    
    for username in users:
        watchlist_path = os.path.join(USERS_DIR, username, "watchlist.json")
        if not os.path.exists(watchlist_path):
            continue
        
        with open(watchlist_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        stocks = data.get("stocks", [])
        if not stocks:
            logger.info(f"用户 {username}: 自选为空，跳过")
            continue
        
        logger.info(f"用户 {username}: 预加载 {len(stocks)} 只自选股 K线...")
        for stock in stocks:
            code = stock["code"]
            try:
                kline = get_kline_data(code, 'daily', 60)
                if kline and len(kline) > 0:
                    total_loaded += 1
                    logger.debug(f"  ✓ {code} {stock.get('name','')}: {len(kline)} bars")
                else:
                    total_failed += 1
                    logger.warning(f"  ✗ {code} {stock.get('name','')}: 无数据")
            except Exception as e:
                total_failed += 1
                logger.warning(f"  ✗ {code} {stock.get('name','')}: {e}")
    
    logger.info(f"预加载完成: {total_loaded} 成功, {total_failed} 失败")


if __name__ == '__main__':
    preload_all_users()
