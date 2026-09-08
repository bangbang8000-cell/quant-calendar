"""
测试隔离污染哨兵 (FR-3.18.12 / T12)

断言全量测试期间真实 data/ 未被写入:
- 所有 paths 数据文件常量已重定向到测试临时目录 (非真实 data/)
- 经各常量写文件不会触碰真实 data/ (用唯一哨兵标记检测, 避免与运行中服务并发写误判)
"""
import os

import paths


# 真实数据目录 (基于 BASE_DIR 计算, 与 conftest 重定向的 paths.DATA_DIR 无关)
REAL_DATA_DIR = os.path.join(paths.BASE_DIR, "data")

# 覆盖全部数据文件常量 (此前 conftest 仅隔离 users/db/ai_config, 其余遗漏)
DATA_FILE_KEYS = (
    'USERS_FILE', 'STOCK_INFO_FILE', 'MERRILL_CACHE_FILE', 'MERRILL_HISTORY_FILE',
    'MERRILL_SNAPSHOT_FILE', 'MARKET_CACHE_FILE', 'CONSENSUS_DATA_FILE',
    'AI_CONFIG_FILE', 'AI_EVALUATION_HISTORY_FILE', 'AUTO_EVALUATE_CONFIG_FILE',
    'GROUPS_FILE',
)

SENTINEL_MARKER = 'SENTINEL-ISOLATION-MARKER-3a9f'


def _real_path(key):
    return os.path.join(REAL_DATA_DIR, os.path.basename(getattr(paths, key)))


def test_data_file_constants_redirected_to_tmp():
    """所有数据文件常量应指向测试临时目录 (非真实 data/)"""
    for key in DATA_FILE_KEYS:
        val = getattr(paths, key, None)
        assert val, f"paths.{key} 应存在"
        assert not val.startswith(REAL_DATA_DIR), f"paths.{key}={val} 仍指向真实 data/"


def test_real_data_dir_not_polluted():
    """经各常量写文件不会触碰真实 data/ (哨兵)"""
    for key in DATA_FILE_KEYS:
        val = getattr(paths, key)
        os.makedirs(os.path.dirname(val), exist_ok=True)
        with open(val, 'w', encoding='utf-8') as f:
            f.write(SENTINEL_MARKER)
    # 真实 data/ 对应文件不应含哨兵标记 (若常量未重定向, 标记会落入真实文件)
    polluted = []
    for key in DATA_FILE_KEYS:
        p = _real_path(key)
        if os.path.exists(p):
            try:
                with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                    if SENTINEL_MARKER in f.read():
                        polluted.append(os.path.basename(p))
            except OSError:
                pass
    assert not polluted, f"真实 data/ 被测试写入: {polluted}"
