#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.01): 短线三池(涨停/炸板/跌停)数据抓取与标准化

数据诚实性(借鉴 vibe-astock):
- 取数失败 → available=False + [⚠️] 信封, 绝不返回 0 家
- 空池是合法结果(available=True, rows=[]), 判据必须 is not None / available
- 代码 6 位补零, NaN→None, 封板时间归一 HH:MM:SS
"""
import logging

from . import pool_merge
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


#: Fuyao 三池端点（T2 周边；limit-up-pool 含 ST，共 52 家）
_FUYAO_POOL_PATH = {
    'zt': '/api/a-share/special-data/limit-up-pool',
    'zb': '/api/a-share/special-data/limit-break-pool',
    'dt': '/api/a-share/special-data/limit-down-pool',
}


def _date_to_ms(compact: str):
    """YYYYMMDD → Asia/Shanghai 零点毫秒戳（Fuyao date_ms 口径）。"""
    try:
        from datetime import datetime, timedelta, timezone
        dt = datetime.strptime(compact, '%Y%m%d').replace(tzinfo=timezone(timedelta(hours=8)))
        return int(dt.timestamp() * 1000)
    except Exception:  # noqa: BLE001 — 日期不可解析时不传，交给接口用当日
        return None


def _fetch_fuyao_pool(pool_type: str, compact: str):
    """从 Fuyao 取一池（T2 优先）。不可用返回 None（由上层回退本地链路）。

    数据诚实性：能力未启用/未配置 Key/接口失败 → 返回 None，**不伪造空列表**。
    """
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('special'):
            return None
        client = data_source_manager.fuyao_client()
        if client is None:
            return None
    except Exception as e:  # noqa: BLE001 — 分层/开关不可用时不阻断短线链路
        logger.debug('短线 %s fuyao 不可用: %s', pool_type, e)
        return None

    params = {'page': 1, 'size': 200}
    ms = _date_to_ms(compact)
    if ms:
        params['date_ms'] = ms
    if pool_type == 'zt':
        params.update({'sort_field': 'continue_day_cnt', 'sort_dir': 'desc'})

    rows = []
    page = 1
    while page <= 30:  # 防御：最多 6000 行
        params['page'] = page
        r = client.get('special.%s' % _FUYAO_POOL_PATH[pool_type].rsplit('/', 1)[-1],
                       _FUYAO_POOL_PATH[pool_type], params)
        if not r.get('ok'):
            if page == 1:
                logger.info('短线 %s fuyao 取数未成功(%s)，回退本地源', pool_type, r.get('reason'))
                return None
            break
        data = r.get('data') or {}
        items = data.get('item') or []
        rows.extend(items)
        pg = data.get('pagination') or {}
        if page >= int(pg.get('pages') or 1) or not items:
            break
        page += 1
    return rows


def _fetch_legacy_pool(pool_type: str, compact: str, date_str: str) -> dict:
    """本地源链（东财 → tushare → sxsc）抓取；全失败返回 available=False 信封。"""
    label = _POOL_LABEL[pool_type]
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
            'reason': f'[⚠️ {label}｜{date_str} 数据获取失败已降级：{reason}]'}


def _enrich_missing_valuation(rows, pool_type, max_codes=30):
    """对缺失市值/换手的行用 tushare/sxsc daily_basic 兜底补齐（best-effort）。

    Fuyao 的涨停池不含市值/换手；东财池不含 ST，故 ST 行会缺这些字段。
    为避免"缺失率 >5%"，这里对小批量缺失行补一次 daily_basic。
    """
    need = [r for r in rows if r.get('total_mv') is None or r.get('turnover_rate') is None]
    if not need or len(need) > max_codes:
        return 0
    try:
        from data_sources import data_source_manager
    except Exception:  # noqa: BLE001
        return 0
    filled = 0
    for r in need:
        try:
            basic = data_source_manager.get_daily_basic(r['ts_code'], limit=1)
        except Exception as e:  # noqa: BLE001 — 单票失败不影响整池
            logger.debug('补市值失败 %s: %s', r.get('ts_code'), e)
            continue
        if not basic:
            continue
        hit = False
        for src_key, dst_key in (('total_mv', 'total_mv'), ('circ_mv', 'float_mv'),
                                 ('turnover_rate', 'turnover_rate')):
            if r.get(dst_key) is None and basic.get(src_key) is not None:
                # tushare daily_basic 的市值单位为万元，东财池为元 → 统一到元
                val = basic[src_key]
                if src_key in ('total_mv', 'circ_mv'):
                    try:
                        val = float(val) * 10000.0
                    except (TypeError, ValueError):
                        continue
                r[dst_key] = val
                hit = True
        if hit:
            r['field_source'] = 'mixed' if r.get('field_source') == 'fuyao' else r.get('field_source')
            r.setdefault('enriched_by_local', []).append('daily_basic')
            filled += 1
    return filled


def _fetch_pool(pool_type: str, date: str, prefer: str = 'local') -> dict:
    """抓取三池之一：Fuyao（T2 优先）→ 本地源链，二者**合并**后返回。

    date 接受 YYYY-MM-DD / YYYYMMDD。数据诚实性：两侧都失败 → available=False + [⚠️]；
    空池合法（available=True + rows=[]）；绝不用 0 冒充。
    """
    compact = _norm_date(date)
    label = _POOL_LABEL[pool_type]

    fy_rows = None
    if prefer == 'fuyao':
        try:
            fy_rows = _fetch_fuyao_pool(pool_type, compact)
        except Exception as e:  # noqa: BLE001 — 单源异常，回退本地
            logger.warning('短线 %s fuyao 异常(%s): %s', label, compact, e)
            fy_rows = None

    legacy = _fetch_legacy_pool(pool_type, compact, str(date))

    if fy_rows is not None:
        merged = pool_merge.build_merged(pool_type, compact, fy_rows, legacy)
        try:
            n = _enrich_missing_valuation(merged.get('rows') or [], pool_type)
            if n:
                merged['stats']['daily_basic_enriched'] = n
                logger.info('短线 %s 市值兜底补齐 %d 行', label, n)
        except Exception as e:  # noqa: BLE001 — 兜底失败不阻断主流程
            logger.debug('短线 %s 市值兜底异常: %s', label, e)
        logger.info('短线 %s fuyao 合并完成(%s): %s', label, compact, merged.get('stats'))
        return merged
    return legacy


def fetch_zt_pool(date: str, prefer: str = 'local') -> dict:
    """涨停池。prefer='fuyao' 时走 Fuyao 优先 + 本地补齐（v6.8.0）。"""
    return _fetch_pool('zt', date, prefer=prefer)


def fetch_zb_pool(date: str, prefer: str = 'local') -> dict:
    """炸板池。"""
    return _fetch_pool('zb', date, prefer=prefer)


def fetch_dt_pool(date: str, prefer: str = 'local') -> dict:
    """跌停池。"""
    return _fetch_pool('dt', date, prefer=prefer)
