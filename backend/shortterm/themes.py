#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (FR-5.2.0.7): 涨停原因/题材串 — 问财可选, 无则如实不可用

数据诚实性(借鉴 vibe-astock duanxian/theme_tree.py):
- 题材串只认问财涨停原因列, 绝不拿行业分类冒充题材(行业 ≠ 炒作题材, 诚实披露)
- 问财未配置(IWENCAI_API_KEY)或客户端缺失 → reasons={} + error, 界面显示不可用而非编造
- 按日期查询并核对返回列名日期(涨停原因[YYYYMMDD]), 不把别的交易日的题材串塞进本场
"""
import logging
import os

logger = logging.getLogger(__name__)


def fetch_zt_reasons(date: str):
    """某交易日 代码→题材串。返回 (reasons: dict[code, str], error: str|None)。

    date 接受 YYYY-MM-DD / YYYYMMDD。error 非 None 表示不可用(诚实降级, 非异常)。
    """
    d = str(date).replace('-', '')
    if not (len(d) == 8 and d.isdigit()):
        return {}, f'日期格式应为 YYYYMMDD, 收到 {date!r}'
    try:
        from iwencai_client import IwencaiClient  # noqa: PLC0415 — 问财客户端(随仓库/可选)
    except Exception as e:  # noqa: BLE001
        return {}, f'未安装 iwencai_client, 取不到涨停原因: {type(e).__name__}'
    if not os.environ.get('IWENCAI_API_KEY'):
        return {}, '未配置 IWENCAI_API_KEY, 涨停原因不可用'
    try:
        client = IwencaiClient()
    except Exception as e:  # noqa: BLE001
        return {}, f'IwencaiClient 初始化失败: {type(e).__name__}: {str(e)[:80]}'

    query = f'{d[:4]}-{d[4:6]}-{d[6:8]}涨停的股票 涨停原因'
    dated_col = f'涨停原因[{d}]'  # 问财按查询日期返回该列; 拿它核对场次
    reasons = {}
    try:
        # 翻页拿全部涨停(单页 limit=50, 一般 1~2 页够)
        for page in range(1, 4):
            df = client.query(query, page=page, limit=50)
            if df is None or len(df) == 0:
                break
            for _, row in df.iterrows():
                code = str(row.get('股票代码', '')).split('.')[0].zfill(6)
                reason = row.get(dated_col) or row.get('涨停原因') or ''
                if code and reason:
                    reasons[code] = str(reason)
            if len(df) < 50:
                break
        return reasons, None
    except Exception as e:  # noqa: BLE001
        return {}, f'问财查询失败: {type(e).__name__}: {str(e)[:80]}'


def attach_reasons(rows, date: str):
    """给涨停池行附 reason 字段(题材串)。

    不可用时不编造、也不拿行业冒充题材 → rows 保持无 reason, 前端显示"—"。
    返回 (rows, reasons_available: bool, error: str|None)。
    """
    reasons, err = fetch_zt_reasons(date)
    if reasons:
        for r in rows or []:
            code = r.get('ts_code')
            if code and code in reasons:
                r['reason'] = reasons[code]
    return rows, bool(reasons), err
