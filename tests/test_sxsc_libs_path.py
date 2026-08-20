# -*- coding: utf-8 -*-
"""V4.0 删除条件①: sxsc-tushare 从仓库 libs/ 加载 (家目录只读无法 editable 重装)"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))


def test_data_sources_injects_repo_libs_to_syspath():
    """data_sources 模块导入后, sys.path 首位含仓库 libs/sxsc_tushare"""
    import data_sources
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    expected = os.path.join(repo_root, 'libs', 'sxsc_tushare')
    assert expected in sys.path, 'repo libs/sxsc_tushare 未注入 sys.path'
    assert os.path.isdir(expected), f'repo libs 目录不存在: {expected}'


def test_sxsc_import_resolves_to_repo_libs():
    """import sxsc_tushare 必须解析到仓库 libs (而非 /home/evergreen/量化程序)"""
    import sxsc_tushare
    path = os.path.realpath(sxsc_tushare.__file__)
    assert '/量化程序/' not in path, f'sxsc 仍指向 量化程序: {path}'
    assert 'libs' in path, f'sxsc 未从 repo libs 加载: {path}'
