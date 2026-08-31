"""pytest configuration — fixtures and mocks"""
import sys
import os
import tempfile
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

# Force test mode: don't touch real .env during tests
os.environ.setdefault('FERNET_KEY', 'test-fernet-key-not-for-production-use-32bytes!!')


@pytest.fixture(scope='session', autouse=True)
def patch_users_file():
    """Use temp path so UserManager auto-creates admin+guest"""
    import paths
    old = paths.USERS_FILE
    paths.USERS_FILE = os.path.join(tempfile.mkdtemp(), 'users.json')
    yield
    paths.USERS_FILE = old


@pytest.fixture(scope='session', autouse=True)
def patch_data_dir():
    """Use temp dir for all data files during tests"""
    import paths
    import db
    old_data = paths.DATA_DIR
    tmp = tempfile.mkdtemp(prefix='qc-test-data-')
    paths.DATA_DIR = tmp

    # v3.18 (FR-3.18.12): 统一重定向全部数据文件常量 (此前仅 users/db/ai_config,
    # 其余常量在 import 时捕获真实 DATA_DIR 导致写真实 data/ 污染)
    _DATA_FILE_KEYS = (
        'USERS_FILE', 'STOCK_INFO_FILE', 'MERRILL_CACHE_FILE', 'MERRILL_HISTORY_FILE',
        'MERRILL_SNAPSHOT_FILE', 'MARKET_CACHE_FILE', 'CONSENSUS_DATA_FILE',
        'AI_CONFIG_FILE', 'AI_EVALUATION_HISTORY_FILE', 'AUTO_EVALUATE_CONFIG_FILE',
        'GROUPS_FILE',
    )
    _saved = {}
    for _key in _DATA_FILE_KEYS:
        _old = getattr(paths, _key, None)
        _saved[_key] = _old
        if _old:
            setattr(paths, _key, os.path.join(tmp, os.path.basename(_old)))
    # 关键修复: db 模块在导入时即捕获 DATA_DIR/DB_FILE (db.py:18),
    # 若不重定向, 测试会读写真实 data/app.db 造成跨测试/跨会话污染
    old_db_data_dir = db.DATA_DIR
    old_db_file = db.DB_FILE
    db.DATA_DIR = tmp
    db.DB_FILE = os.path.join(tmp, 'app.db')
    # v3.21: strategy_db 同源隔离 (strategy.db 含参数方案/运行记录)
    import strategy_db as _sdb
    _old_sdb_dir = getattr(_sdb, 'DATA_DIR', None)
    _old_sdb_file = getattr(_sdb, 'DB_FILE', None)
    _sdb.DATA_DIR = tmp
    _sdb.DB_FILE = os.path.join(tmp, 'strategy.db')
    yield
    paths.DATA_DIR = old_data
    for _key, _val in _saved.items():
        setattr(paths, _key, _val)
    db.DATA_DIR = old_db_data_dir
    db.DB_FILE = old_db_file
    if _old_sdb_dir is not None:
        _sdb.DATA_DIR = _old_sdb_dir
    if _old_sdb_file is not None:
        _sdb.DB_FILE = _old_sdb_file


@pytest.fixture
def mock_settings():
    """Mock config.settings"""
    from unittest.mock import patch
    with patch('config.settings') as mock:
        mock.SECRET_KEY = 'test-secret'
        mock.ALGORITHM = 'HS256'
        mock.ACCESS_TOKEN_EXPIRE_MINUTES = 30
        mock.FERNET_KEY = 'test-fernet-key'
        yield mock


@pytest.fixture
def sample_stock_data():
    """Standard test stock data"""
    return {
        'stock_code': '000001.SZ',
        'stock_name': '平安银行',
        'has_kline': True,
        'has_fundamentals': True,
        'latest': {
            'date': '2026-07-14',
            'open': 12.50, 'close': 12.80,
            'low': 12.30, 'high': 12.90,
            'volume': 50000000,
            'ma5': 12.60, 'ma10': 12.40, 'ma20': 12.20,
            'pct_chg': 2.4,
        },
        'rsi': 58.5,
        'macd': {'dif': 0.15, 'dea': 0.10, 'hist': 0.05},
        'ma_alignment': '多头排列',
        'fundamentals': {
            'pe': 6.5, 'pb': 0.85,
            'turnover_rate': 1.2,
            'total_mv': 250000000000,
            'data_source': 'tushare',
        }
    }


@pytest.fixture
def sample_csv_content():
    """Sample strategy CSV content"""
    return (
        "代码,名称,最新价,涨跌幅,趋势评分,动量评分\n"
        "000001.SZ,平安银行,12.80,2.40,85,72\n"
        "600036.SH,招商银行,38.50,1.20,90,78\n"
        "000858.SZ,五粮液,145.00,-0.50,65,55\n"
    )
