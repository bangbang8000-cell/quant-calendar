"""pytest configuration — fixtures and mocks"""
import sys, os, tempfile, json
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
    old_data = paths.DATA_DIR
    paths.DATA_DIR = tempfile.mkdtemp()
    old_config = paths.AI_CONFIG_FILE
    paths.AI_CONFIG_FILE = os.path.join(paths.DATA_DIR, 'ai_config.json')
    old_history = paths.AI_EVALUATION_HISTORY_FILE
    paths.AI_EVALUATION_HISTORY_FILE = os.path.join(paths.DATA_DIR, 'ai_evaluation_history.json')
    old_models = os.path.join(paths.DATA_DIR, 'ai_models.json')
    yield
    paths.DATA_DIR = old_data
    paths.AI_CONFIG_FILE = old_config
    paths.AI_EVALUATION_HISTORY_FILE = old_history


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
