#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.01): 短线三池(涨停/炸板/跌停)数据抓取与标准化

数据诚实性(借鉴 vibe-astock):
- 取数失败 → available=False + [⚠️] 信封, 绝不返回 0 家
- 空池是合法结果(available=True, rows=[]), 判据必须 is not None / available
- 代码 6 位补零, NaN→None, 封板时间归一 HH:MM:SS
"""
import logging

from .limits import board_of

logger = logging.getLogger(__name__)

# 涨停/炸板/跌停池 列名映射 (akshare 东财中文列 → 统一英文键)
_ZT_COLUMN_MAP = {
    '代码': 'ts_code', '名称': 'name', '涨跌幅': 'pct_chg', '最新价': 'price',
    '成交额': 'amount', '流通市值': 'float_mv', '总市值': 'total_mv',
    '换手率': 'turnover_rate', '封板资金': 'seal_amount',
    '首次封板时间': 'first_seal_time', '最后封板时间': 'last_seal_time',
    '炸板次数': 'break_times', '涨停统计': 'zt_stat', '连板数': 'boards',
    '所属行业': 'industry',
}
_ZB_COLUMN_MAP = {
    '代码': 'ts_code', '名称': 'name', '涨跌幅': 'pct_chg', '最新价': 'price',
    '涨停价': 'limit_price', '成交额': 'amount', '流通市值': 'float_mv',
    '总市值': 'total_mv', '换手率': 'turnover_rate', '涨速': 'speed',
    '首次封板时间': 'first_seal_time', '炸板次数': 'break_times',
    '涨停统计': 'zt_stat', '振幅': 'amplitude', '所属行业': 'industry',
}
_DT_COLUMN_MAP = {
    '代码': 'ts_code', '名称': 'name', '涨跌幅': 'pct_chg', '最新价': 'price',
    '成交额': 'amount', '流通市值': 'float_mv', '总市值': 'total_mv',
    '动态市盈率': 'pe_ttm', '换手率': 'turnover_rate', '封单资金': 'seal_amount',
    '最后封板时间': 'last_seal_time', '板上成交额': 'on_board_amount',
    '连续跌停': 'consec_dt', '开板次数': 'break_times', '所属行业': 'industry',
}

_POOL_MAP = {'zt': _ZT_COLUMN_MAP, 'zb': _ZB_COLUMN_MAP, 'dt': _DT_COLUMN_MAP}
_AKSHARE_POOL_FUNC = {
    'zt': 'stock_zt_pool_em',
    'zb': 'stock_zt_pool_zbgc_em',
    'dt': 'stock_zt_pool_dtgc_em',
}
_POOL_LABEL = {'zt': '涨停池', 'zb': '炸板池', 'dt': '跌停池'}


def _norm_time(v):
    """'092500' → '09:25:00'; None/NaN → None; 已带冒号原样返回"""
    if v is None:
        return None
    s = str(v).strip()
    if not s or s.lower() in ('nan', 'none'):
        return None
    if ':' in s:
        return s
    s = s.zfill(6)
    return f"{s[0:2]}:{s[2:4]}:{s[4:6]}" if len(s) == 6 else s


def _to_float(v):
    if v is None:
        return None
    try:
        f = float(v)
    except (TypeError, ValueError):
        return None
    if f != f:  # NaN
        return None
    return f


def _to_int(v):
    if v is None:
        return None
    try:
        f = float(v)
    except (TypeError, ValueError):
        return None
    if f != f:  # NaN
        return None
    return int(f)


def _zero_pad(code):
    """代码 6 位补零: '2909' → '002909'"""
    if code is None:
        return None
    s = str(code).strip().split('.')[0]
    return s.zfill(6) if s.isdigit() else s


def _norm_date(date):
    """'2026-09-02' → '20260902' (akshare 东财要求 YYYYMMDD)"""
    return str(date).replace('-', '')


def _normalize_row(raw: dict, column_map: dict) -> dict:
    out = {}
    for zh, en in column_map.items():
        v = raw.get(zh)
        if en == 'ts_code':
            out[en] = _zero_pad(v)
        elif en in ('boards', 'break_times', 'consec_dt'):
            out[en] = _to_int(v)
        elif en in ('first_seal_time', 'last_seal_time'):
            out[en] = _norm_time(v)
        elif en in ('pct_chg', 'price', 'amount', 'float_mv', 'total_mv',
                    'turnover_rate', 'seal_amount', 'speed', 'amplitude',
                    'limit_price', 'pe_ttm', 'on_board_amount'):
            out[en] = _to_float(v)
        else:
            out[en] = None if v is None or (isinstance(v, float) and v != v) else v
    # 涨跌幅制度标签(复用 scan_engine 单一实现)
    out['board'] = board_of(out.get('ts_code') or '', out.get('name') or '')
    return out


def normalize_pool_df(df, column_map: dict) -> list:
    """标准化三池 DataFrame → list[dict]"""
    if df is None or len(df) == 0:
        return []
    rows = []
    for _, row in df.iterrows():
        rows.append(_normalize_row(dict(row), column_map))
    return rows


# tushare limit_list_d 列名 → 统一英文键 (涨停/跌停兜底源)
# ts_code 形如 '002909.SZ'(_zero_pad 去后缀补零); up_stat=连板数; limit_amount=封单金额
_TUSHARE_MAP = {
    'zt': {'ts_code': 'ts_code', 'name': 'name', 'pct_chg': 'pct_chg',
           'close': 'price', 'amount': 'amount', 'float_mv': 'float_mv',
           'total_mv': 'total_mv', 'turnover_ratio': 'turnover_rate',
           'limit_amount': 'seal_amount', 'first_time': 'first_seal_time',
           'last_time': 'last_seal_time', 'open_times': 'break_times',
           'up_stat': 'boards', 'industry': 'industry'},
    'dt': {'ts_code': 'ts_code', 'name': 'name', 'pct_chg': 'pct_chg',
           'close': 'price', 'amount': 'amount', 'float_mv': 'float_mv',
           'total_mv': 'total_mv', 'turnover_ratio': 'turnover_rate',
           'limit_amount': 'seal_amount', 'last_time': 'last_seal_time',
           'open_times': 'break_times', 'industry': 'industry'},
}
_TUSHARE_LIMIT = {'zt': 'U', 'dt': 'D'}  # limit_list_d 的 limit 取值

# 各池源链: 按序尝试, 首个可用即用; 全失败 → 降级信封。
# 炸板池 tushare 无对应源(limit_list_d 不区分炸板), 保持东财单源, 由 [⚠️] 诚实降级。
# ⚠️ 测试用 monkeypatch 改此表以隔离真实网络/校验降级路径。
_SOURCE_CHAINS = {
    'zt': ['sxsc_tushare', 'akshare.eastmoney', 'tushare'],
    'dt': ['sxsc_tushare', 'akshare.eastmoney', 'tushare'],
    'zb': ['akshare.eastmoney'],
}


def _fetch_akshare_eastmoney(pool_type: str, compact: str, date_str: str) -> dict:
    """东财涨停/炸板/跌停池 (FR-5.2.0.1 首选源)"""
    import akshare as ak
    func = getattr(ak, _AKSHARE_POOL_FUNC[pool_type])
    df = func(compact)
    rows = normalize_pool_df(df, _POOL_MAP[pool_type])
    return {'available': True, 'source': 'akshare.eastmoney',
            'date': date_str, 'rows': rows}


def _fetch_tushare_limit_list(pool_type: str, compact: str, date_str: str) -> dict:
    """tushare 标准版兜底 (limit_list_d, 需 2000+ 积分; 无 token/无权限 → 抛错交外层降级)"""
    import tushare as ts
    from config import settings
    token = getattr(settings, 'TUSHARE_TOKEN', '') or ''
    if not token:
        raise RuntimeError('未配置 TUSHARE_TOKEN, tushare 兜底不可用')
    pro = ts.pro_api(token)
    df = pro.limit_list_d(trade_date=compact)
    if df is None or len(df) == 0:
        return {'available': True, 'source': 'tushare', 'date': date_str, 'rows': []}
    limit = _TUSHARE_LIMIT[pool_type]
    if 'limit' in df.columns:
        df = df[df['limit'] == limit]
    rows = normalize_pool_df(df, _TUSHARE_MAP[pool_type])
    return {'available': True, 'source': 'tushare', 'date': date_str, 'rows': rows}


def _fetch_sxsc_limit_list(pool_type: str, compact: str, date_str: str) -> dict:
    """V5.3.10: sxsc(山证Tushare)涨停/跌停池 — limit_list_d

    优先级最高(券商网关, 功能和实效性更高)。经 data_source_manager 的 sxsc
    客户端调用; dev 无 sxsc token → 客户端缺失 → 抛错交外层回落 akshare。

    ⚠️ 券商网关列格式与 tushare 标准版不同 (V5.3.10 实测):
    - up_stat 为 'X/Y' 字符串 (连板数X/累计炸板Y), 如 '4/4' = 4连板;
      需解析 X 为 boards, Y 为 break_times (U 类专用, D 类为 NaN)
    - limit_amount: U 类全 NaN (券商不填封单), D 类有值 → 如实保留
    """
    from data_sources import data_source_manager
    api = data_source_manager._clients.get('sxsc_tushare')
    if api is None:
        raise RuntimeError('sxsc 客户端未初始化(dev 未配置 SXSC_TUSHARE_TOKEN)')
    df = api.query('limit_list_d', trade_date=compact)
    if df is None or len(df) == 0:
        return {'available': True, 'source': 'sxsc_tushare', 'date': date_str, 'rows': []}
    limit = _TUSHARE_LIMIT[pool_type]
    if 'limit' in df.columns:
        df = df[df['limit'] == limit]
    if pool_type == 'zt' and 'up_stat' in df.columns:
        # 'X/Y' → X=连板数, Y=累计炸板; 兼容纯数字/NaN
        def _parse_up_stat(v):
            if v is None or (isinstance(v, float) and v != v):
                return None
            s = str(v)
            if '/' in s:
                x, y = s.split('/')[:2]
                xi = _to_int(x) if x else None
                return xi
            return _to_int(v)
        df['up_stat'] = df['up_stat'].map(_parse_up_stat)
    rows = normalize_pool_df(df, _TUSHARE_MAP[pool_type])
    return {'available': True, 'source': 'sxsc_tushare', 'date': date_str, 'rows': rows}


def _fetch_pool(pool_type: str, date: str) -> dict:
    """抓取三池之一(源链 fallback)。date 接受 YYYY-MM-DD / YYYYMMDD。

    数据诚实性: 全源失败 → available=False + [⚠️] 信封(绝不返回 0 家); 空池合法。
    """
    compact = _norm_date(date)
    label = _POOL_LABEL[pool_type]
    date_str = str(date)
    errs = []
    for source in _SOURCE_CHAINS.get(pool_type, ['akshare.eastmoney']):
        try:
            if source == 'sxsc_tushare':
                out = _fetch_sxsc_limit_list(pool_type, compact, date_str)
            elif source == 'akshare.eastmoney':
                out = _fetch_akshare_eastmoney(pool_type, compact, date_str)
            elif source == 'tushare':
                out = _fetch_tushare_limit_list(pool_type, compact, date_str)
            else:
                errs.append(f'{source}: 未知源')
                continue
            if out is not None and out.get('available'):
                return out
            errs.append(f'{source}: {out and out.get("reason") or "空返回"}')
        except Exception as e:  # noqa: BLE001 — 单源异常, 试下一源
            logger.warning('短线 %s %s 源失败(%s): %s', label, source, compact, e)
            errs.append(f'{source}: {type(e).__name__}: {str(e)[:80]}')
    reason = '；'.join(errs)
    logger.warning('短线 %s 全源失败(%s): %s', label, compact, reason)
    return {'available': False,
            'reason': f'[⚠️ {label}｜{date} 数据获取失败已降级：{reason}]'}


def fetch_zt_pool(date: str) -> dict:
    """涨停池"""
    return _fetch_pool('zt', date)


def fetch_zb_pool(date: str) -> dict:
    """炸板池"""
    return _fetch_pool('zb', date)


def fetch_dt_pool(date: str) -> dict:
    """跌停池"""
    return _fetch_pool('dt', date)
