#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.93): data_sources 常量与初始化 (拆自 data_sources.py 头)"""
import os
import sys
import logging
import threading
from paths import DATA_DIR

__all__ = [
    'KLINE_CACHE_TTL','KLINE_CACHE_MAX','DATASOURCE_CONFIG_FILE','DEFAULT_CONFIG','SOURCE_ORDER','AKSHARE_INDEX_COLUMN_MAP','AKSHARE_STOCK_COLUMN_MAP','DEGRADE_THRESHOLD','FRESHNESS_STALE_HOURS','ROUTE_FAIL_THRESHOLD','ROUTE_COOLDOWN_SECONDS','MAX_RETRIES','BACKOFF_BASE_SECONDS','PULL_FAILURE_ALERT_THRESHOLD','ALERT_QUEUE','ALERT_QUEUE_MAX','logger',
]

# V4.0 删除条件①: sxsc-tushare 从仓库 libs/ 加载 (家目录只读无法 editable 重装;
# sys.path 优先于 site-packages .pth, 保证任意启动方式都不再 import /home/evergreen/量化程序/sxsc-tushare)
# V5.0.9 (T-5.0.93): 文件已移至 data_sources/, __file__ 上提一级回到 backend/ 再取 ../libs
_LIBS_SXSC_DIR = os.path.abspath(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '..', 'libs', 'sxsc_tushare'))
if os.path.isdir(_LIBS_SXSC_DIR) and _LIBS_SXSC_DIR not in sys.path:
    sys.path.insert(0, _LIBS_SXSC_DIR)

# v3.20.1 (网络修复): 清掉失效的系统代理环境变量, 强制直连外网。
# 本机历史遗留 http_proxy=127.0.0.1:7892 指向不存在的代理端口, requests 默认读取导致数据源全挂。
for _k in ('http_proxy', 'https_proxy', 'HTTP_PROXY', 'HTTPS_PROXY', 'all_proxy', 'ALL_PROXY', 'ftp_proxy', 'FTP_PROXY'):
    os.environ.pop(_k, None)
os.environ['no_proxy'] = '*'
os.environ['NO_PROXY'] = '*'

# v3.8.1: K线内存缓存 TTL (秒) — 同股票同周期短时间重复请求直接命中, 避免每次切换实时调外部API
KLINE_CACHE_TTL = 300
KLINE_CACHE_MAX = 1000

logger = logging.getLogger(__name__)

# 配置文件路径
DATASOURCE_CONFIG_FILE = os.path.join(DATA_DIR, "datasource_config.json")

# 默认配置
DEFAULT_CONFIG = {
    "sources": {
        "sxsc_tushare": {
            "enabled": True,
            "token": "",  # v1.8: 从 .env SXSC_TUSHARE_TOKEN 读取
            "timeout": 5  # V4.6: 连接超时缩短(30->5s)
        },
        "tushare": {
            "enabled": True,
            "token": "",
            "endpoint": "http://api.tushare.pro",
            "timeout": 5  # V4.6: 连接超时缩短(30->5s)
        },
        "akshare": {
            "enabled": True
        }
    }
}

SOURCE_ORDER = ['sxsc_tushare', 'tushare', 'akshare']

# akshare 列名映射
AKSHARE_INDEX_COLUMN_MAP = {
    'date': 'trade_date', 'open': 'open', 'close': 'close',
    'high': 'high', 'low': 'low', 'volume': 'vol',
}
_SINA_STOCK_COLUMN_MAP = {
    'date': 'trade_date', 'open': 'open', 'close': 'close',
    'high': 'high', 'low': 'low', 'volume': 'vol', 'amount': 'amount',
    'turnover': 'turnover_rate', 'pct_change': 'pct_chg',
}


AKSHARE_STOCK_COLUMN_MAP = {
    '日期': 'trade_date', '开盘': 'open', '收盘': 'close',
    '最高': 'high', '最低': 'low', '成交量': 'vol', '成交额': 'amount',
    '涨跌幅': 'pct_chg', '换手率': 'turnover_rate',
}


# ==================== 数据源健康监控 (v3.10 / FR-3.10.3) ====================
# 记录每个数据源的调用成功/失败/延迟；连续失败达阈值标记 degraded，
# 输出到 /api/system/metrics 供运维可见。v3.11 数据自动化将消费该指标。

DEGRADE_THRESHOLD = 3  # 连续失败次数达到该值 → degraded
FRESHNESS_STALE_HOURS = 24  # v3.12 (FR-3.12.2): 距上次成功拉取超过该小时数 → stale 超期标黄

# v3.18 (FR-3.18.4): 数据源健康自动路由
ROUTE_FAIL_THRESHOLD = 3        # 连续失败达该值 → 源进入冷却(暂停参与路由, 直接切备用源)
ROUTE_COOLDOWN_SECONDS = 300    # 冷却窗口: 期满后源恢复参与路由(回切探测), 避免抖动

_health_lock = threading.Lock()
_health = {}

# v3.18 (FR-3.18.4): 路由状态 (原 data_sources.py 中段)
_route_lock = threading.Lock()
_route_state = {}

# v3.19 (FR-3.19.5): 指数退避重试 + 告警队列常量 (原 data_sources.py 中段)
MAX_RETRIES = 3
BACKOFF_BASE_SECONDS = 2.0
PULL_FAILURE_ALERT_THRESHOLD = 3
_alert_lock = threading.Lock()
ALERT_QUEUE = []
ALERT_QUEUE_MAX = 200
