# -*- coding: utf-8 -*-
"""
V5.3.0 (T-5.3.0.3): 测试隔离守卫测试

历史问题（HANDOVER §5.3 记录）：test_today_snapshot.py 顶层 import 污染真实 data/。
根治方案：把模块级 import 改为 fixture/函数内 import（延迟加载），
并在此守卫：断言不再存在"导入即触碰真实 data/"的顶层副作用模式。

守卫目标：
- 全量测试与 dev(:8001) 服务并行运行时，不写入真实 data/ 目录
- 扫描 tests/ 下测试文件：禁止在模块顶层 import backend 业务模块的同时
  又在顶层直接 open 真实 data/ 路径（应在 fixture 内做）
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _scan_for_top_level_side_effect_files():
    """扫描 tests/ 中同时具备以下特征的文件：
    1) 模块顶层有 backend 业务 import（非 stdlib）
    2) 模块顶层有 open(...)/read(...) 指向 BASE/data 或 BASE/qresult 的调用
    这代表"导入即触碰真实数据目录"的污染模式。
    """
    offenders = []
    for fname in os.listdir(os.path.join(BASE, 'tests')):
        if not fname.endswith('.py') or fname.startswith('test_isolation'):
            continue
        path = os.path.join(BASE, 'tests', fname)
        with open(path, encoding='utf-8') as f:
            lines = f.readlines()
        # 只检查类/函数定义之前（模块顶层）的部分
        top_lines = []
        for ln in lines:
            if re.match(r'^\s*(def |class |@pytest|@)', ln):
                break
            top_lines.append(ln)
        top = ''.join(top_lines)
        # 顶层业务 import（不含 stdlib / pytest / 相对导入）
        biz_import = re.search(
            r'^\s*(from (data_sources|api|auth|config|db|data_parser|views_aggregator|shortterm|jobs|strategy_|factor_|risk|report_|merrill|scan_engine|scheduler|notify|events|rules|rbac|collaboration|plugins|survivorship|pit|walkforward|benchmark|attribution|backtest|portfolio|market_review|eval_track|stock_|paths|main_new) import|import (data_sources|api|auth|config|db|data_parser))',
            top, re.M)
        # 顶层直接 open 真实 data 目录
        top_data_open = re.search(
            r'open\([^)]*(BASE\s*\+\s*[\'\"]?[/\\]?(data|qresult)|data\/)', top)
        if biz_import and top_data_open:
            offenders.append(fname)
    return offenders


def test_no_top_level_data_pollution_pattern():
    """禁止测试文件顶层同时存在业务 import 与真实 data/ open（隔离坑模式）"""
    offenders = _scan_for_top_level_side_effect_files()
    assert not offenders, (
        f"发现顶层 import 污染真实 data/ 的测试文件: {offenders}。"
        "请将业务 import 移入 fixture/函数内（延迟加载）。"
    )
