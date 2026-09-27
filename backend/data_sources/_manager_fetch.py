#!/usr/bin/env python3
# ruff: noqa: F405
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.93): DataSourceManager (拆自 data_sources.py) — 6.3.0 (T-6.3.0.4) 取数段

按「视图 / 状态 / 取数」三段拆分中的「取数」段：各数据源适配器 (_fetch_*)、
K 线响应构建、分钟周期常量与分钟列归一化。原 _manager.py 保留同名 DataSourceManager
聚合壳，公开面与行为不变。
"""
import logging
import pandas as pd
from datetime import datetime

from ._constants import *  # noqa: F401,F403
from ._mapping import *  # noqa: F401,F403
from ._mapping import (_safe_float, _ts_code_to_akshare_index, _ts_code_to_akshare_stock,
              _ts_code_to_sina_symbol, _is_index_code, _map_akshare_columns)

logger = logging.getLogger(__name__)

# V5.4.0 (FR-5.4.8): 分钟级 K线周期白名单 — 打开股票弹窗按需加载(不预加载)
MINUTE_PERIODS = ('15min', '30min', '60min')
MINUTE_PERIOD_TO_FREQ = {'15min': '15min', '30min': '30min', '60min': '60min'}
# akshare 分钟接口 period 参数: 15min→'15', 30min→'30', 60min→'60'
MINUTE_PERIOD_TO_AKSHARE = {'15min': '15', '30min': '30', '60min': '60'}


class DataSourceFetchMixin:
    """DataSourceManager 取数 Mixin（6.3.0 T-6.3.0.4 按职责拆出）。"""

    def _get_resampled_kline(self, ts_code, period, limit):
        """获取季线/年线数据：拉取月线 + 聚合"""
        import pandas as pd

        # 拉取足够的月线数据
        monthly_limit = limit * 12  # 季度需要3x月线，年度需要12x
        monthly_data = None
        for src_name in SOURCE_ORDER:
            if not self._source_client_ready(src_name):  # V5.3.13: 客户端缺失跳过, 不记失败
                continue  # V5.3.13: 客户端缺失跳过, 不记失败
            src_cfg = self._get_source_config(src_name)
            if not src_cfg.get('enabled', True):
                continue
            try:
                df = self._fetch_kline(src_name, ts_code, 'monthly', monthly_limit)
                if df is not None and len(df) > 0:
                    monthly_data = df
                    break
            except Exception as e:
                logger.warning(f"{src_name} resampled kline failed: {e}")

        if monthly_data is None or len(monthly_data) == 0:
            return None

        # 聚合: quarterly(3个月) / yearly(12个月)
        try:
            monthly_data['trade_date'] = pd.to_datetime(monthly_data['trade_date'], format='%Y%m%d', errors='coerce')
            monthly_data = monthly_data.dropna(subset=['trade_date'])
            monthly_data = monthly_data.sort_values('trade_date', ascending=True)

            if period == 'quarterly':
                monthly_data['period_key'] = monthly_data['trade_date'].dt.to_period('Q')
            else:
                monthly_data['period_key'] = monthly_data['trade_date'].dt.to_period('Y')

            grouped = monthly_data.groupby('period_key').agg(
                trade_date=('trade_date', 'last'),
                open=('open', 'first'),
                high=('high', 'max'),
                low=('low', 'min'),
                close=('close', 'last'),
                vol=('vol', 'sum'),
            ).reset_index(drop=True)

            # 格式化日期回 %Y%m%d
            grouped['trade_date'] = grouped['trade_date'].dt.strftime('%Y%m%d')

            return self._build_kline_response(grouped, 'monthly_resampled')
        except Exception as e:
            logger.warning(f"resample kline error: {e}")
            return None

    def _fetch_daily_basic_series(self, src_name, ts_code, limit):
        """各数据源获取基本面历史序列（旧→新）
        tushare 系(标准版/券商版)走 daily_basic 多日; akshare 无历史接口返回单元素快照"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        if src_name in ('sxsc_tushare', 'tushare'):
            api = self._clients.get(src_name)
            if not api:
                return []
            try:
                if src_name == 'sxsc_tushare':
                    df = api.query('daily_basic', ts_code=ts_code, limit=limit,
                                   fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
                else:
                    df = api.daily_basic(ts_code=ts_code, limit=limit,
                                         fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
            except Exception:
                return []
            if df is None or len(df) == 0:
                return []
            rows = []
            for _, row in df.sort_values('trade_date').iterrows():
                d = {'trade_date': row.get('trade_date')}
                for f in ('pe', 'pb', 'turnover_rate', 'total_mv'):
                    d[f] = _safe_float(row.get(f))
                rows.append(d)
            return rows
        # akshare: 无历史接口, 返回单元素快照(自身异常不影响路由)
        try:
            one = self._fetch_daily_basic(src_name, ts_code, 1)
        except Exception:
            one = None
        return [one] if one else []

    # ==================== 各数据源适配器 ====================

    def _fetch_index_daily(self, src_name, ts_code, trade_date):
        """各数据源获取指数日线"""
        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            df = api.query('index_daily', ts_code=ts_code, trade_date=trade_date, limit=10)
            if df is None or len(df) == 0:
                return None
            df = df.sort_values('trade_date', ascending=False)
            return df.iloc[0].to_dict()

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            df = pro.index_daily(ts_code=ts_code, trade_date=trade_date, limit=10)
            if df is None or len(df) == 0:
                return None
            df = df.sort_values('trade_date', ascending=False)
            return df.iloc[0].to_dict()

        elif src_name == 'akshare':
            symbol = _ts_code_to_akshare_index(ts_code)
            import akshare as ak
            df = ak.stock_zh_index_daily(symbol=symbol)
            if df is None or len(df) == 0:
                return None
            df = _map_akshare_columns(df, AKSHARE_INDEX_COLUMN_MAP)
            df = df.sort_values('trade_date', ascending=False)
            row = df.iloc[0].to_dict()
            row['ts_code'] = ts_code
            return row

        return None

    def _fetch_kline(self, src_name, ts_code, period, limit):
        """各数据源获取K线 DataFrame"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        is_index = _is_index_code(ts_code)

        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            if period in MINUTE_PERIODS:
                # V5.4.0 (FR-5.4.8): 券商版 tushare 分钟线走 stk_mins (freq=60min/30min/15min)
                # V5.4.1 (R1): 列名归一化 (trade_time → trade_date) — stk_mins 返回 trade_time
                df = api.query('stk_mins', ts_code=ts_code, freq=period, limit=limit)
                return self._normalize_minute_df(df) if df is not None else None
            api_name_map = {'daily': 'daily', 'weekly': 'weekly', 'monthly': 'monthly'}
            api_name = api_name_map.get(period, 'daily')
            if is_index:
                api_name = f"index_{api_name}"
            df = api.query(api_name, ts_code=ts_code, limit=limit)
            return df

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            if period in MINUTE_PERIODS:
                # V5.4.0 (FR-5.4.8): tushare 分钟线走 pro_bar(freq=60min/30min/15min)
                # V5.4.1 (R1): 列名归一化 (trade_time → trade_date)
                import tushare as ts
                df = ts.pro_bar(ts_code=ts_code, freq=period, adj='qfq', limit=limit)
                return self._normalize_minute_df(df) if df is not None else None
            if is_index:
                if period == 'weekly':
                    df = pro.index_weekly(ts_code=ts_code, limit=limit)
                elif period == 'monthly':
                    df = pro.index_monthly(ts_code=ts_code, limit=limit)
                else:
                    df = pro.index_daily(ts_code=ts_code, limit=limit)
            else:
                if period == 'weekly':
                    df = pro.weekly(ts_code=ts_code, limit=limit)
                elif period == 'monthly':
                    df = pro.monthly(ts_code=ts_code, limit=limit)
                else:
                    df = pro.daily(ts_code=ts_code, limit=limit)
            return df

        elif src_name == 'akshare':
            import akshare as ak
            if is_index:
                symbol = _ts_code_to_akshare_index(ts_code)
                df = ak.stock_zh_index_daily(symbol=symbol)
                df = _map_akshare_columns(df, AKSHARE_INDEX_COLUMN_MAP)
                return df.tail(limit)
            elif period in MINUTE_PERIODS:
                # V5.4.0 (FR-5.4.8): akshare 分钟线 stock_zh_a_hist_min_em(period='60'/'30'/'15')
                # V5.4.1 (R1): 中文列归一化 (时间/开盘→trade_date/open)
                symbol = _ts_code_to_akshare_stock(ts_code)
                ak_period = MINUTE_PERIOD_TO_AKSHARE.get(period, '60')
                df = ak.stock_zh_a_hist_min_em(symbol=symbol, period=ak_period, adjust="qfq")
                if df is None:
                    return None
                df = self._normalize_minute_df(df)
                return df.tail(limit)
            else:
                # v3.20.1 (网络修复): 东财源反爬拦截时 fallback 到新浪源
                try:
                    symbol = _ts_code_to_akshare_stock(ts_code)
                    df = ak.stock_zh_a_hist(symbol=symbol, period=period, adjust="qfq")
                except Exception as e:
                    logger.warning('akshare 东财源失败(%s), 切新浪源', e)
                    sina = _ts_code_to_sina_symbol(ts_code)
                    df = ak.stock_zh_a_daily(symbol=sina, adjust="qfq")
                    # 新浪源返回英文列: date/volume/amount 等, 补一层映射到 tushare 标准列
                    df = _map_akshare_columns(df, _SINA_STOCK_COLUMN_MAP)
                df = _map_akshare_columns(df, AKSHARE_STOCK_COLUMN_MAP)
                return df.tail(limit)

        return None

    def _fetch_financial(self, src_name, ts_code):
        """各数据源获取财务指标 (FR-3.12.1: 财务数据拉取)

        字段: roe / netprofit_yoy / grossprofit_margin / debt_to_assets
        (tushare fina_indicator 最近一期)
        """
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        try:
            if src_name in ('sxsc_tushare', 'tushare'):
                api = self._clients.get(src_name)
                if not api:
                    return None
                if src_name == 'sxsc_tushare':
                    df = api.query('fina_indicator', ts_code=ts_code, limit=1)
                else:
                    df = api.fina_indicator(ts_code=ts_code, limit=1)
                if df is None or len(df) == 0:
                    return None
                row = df.iloc[0].to_dict()
                return {
                    'ts_code': ts_code,
                    'ann_date': row.get('ann_date'),
                    'end_date': row.get('end_date'),
                    'roe': _safe_float(row.get('roe')),
                    'netprofit_yoy': _safe_float(row.get('netprofit_yoy')),
                    'grossprofit_margin': _safe_float(row.get('grossprofit_margin')),
                    'debt_to_assets': _safe_float(row.get('debt_to_assets')),
                    'eps': _safe_float(row.get('eps')),
                    'bps': _safe_float(row.get('bps')),
                }
            elif src_name == 'akshare':
                # akshare 无统一财务接口, 退化为 daily_basic 中的 pe/pb
                return None
        except Exception as e:
            logger.warning(f"{src_name} _fetch_financial({ts_code}) 失败: {e}")
            return None
        return None

    def _fetch_moneyflow(self, src_name, ts_code, limit):
        """各数据源获取资金流向（仅支持 tushare 系；akshare 不可达返回 None → 因子降级）"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            df = api.query('moneyflow', ts_code=ts_code, limit=limit,
                           fields='trade_date,net_mf_amount')
            if df is None or len(df) == 0:
                return None
            rows = []
            for _, row in df.sort_values('trade_date').iterrows():
                rows.append({'trade_date': row.get('trade_date'), 'net_mf_amount': _safe_float(row.get('net_mf_amount'))})
            return rows

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            df = pro.moneyflow(ts_code=ts_code, limit=limit,
                               fields='trade_date,net_mf_amount')
            if df is None or len(df) == 0:
                return None
            rows = []
            for _, row in df.sort_values('trade_date').iterrows():
                rows.append({'trade_date': row.get('trade_date'), 'net_mf_amount': _safe_float(row.get('net_mf_amount'))})
            return rows

        # akshare 无统一逐日主力净流入接口，降级
        return None

    def _fetch_daily_basic(self, src_name, ts_code, limit):
        """各数据源获取基本面数据"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            df = api.query('daily_basic', ts_code=ts_code, limit=limit,
                           fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
            if df is None or len(df) == 0:
                return None
            return df.iloc[0].to_dict()

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            df = pro.daily_basic(ts_code=ts_code, limit=limit,
                                 fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
            if df is None or len(df) == 0:
                return None
            return df.iloc[0].to_dict()

        elif src_name == 'akshare':
            # akshare 基本面信息字段不同，返回有限字段
            import akshare as ak
            try:
                symbol = _ts_code_to_akshare_stock(ts_code)
                info = ak.stock_individual_info_em(symbol=symbol)
                # info 是 DataFrame，'item' 列是字段名，'value' 列是值
                result = {'ts_code': ts_code, 'trade_date': datetime.now().strftime('%Y%m%d')}
                for _, row in info.iterrows():
                    item = str(row.get('item', ''))
                    val = row.get('value', '')
                    if '市盈率' in item:
                        try:
                            result['pe'] = float(val)
                        except Exception:
                            logger.debug("数据源回退尝试")
                            pass
                    elif '市净率' in item:
                        try:
                            result['pb'] = float(val)
                        except Exception:
                            logger.debug("数据源回退尝试")
                            pass
                    elif '总市值' in item:
                        try:
                            result['total_mv'] = float(val) / 10000  # 元→万元
                        except Exception:
                            logger.debug("数据源回退尝试")
                            pass
                return result
            except Exception as e:
                logger.warning(f"akshare daily_basic 失败: {e}")
                return None

        return None

    # ==================== K线响应构建 ====================

    # ==================== V5.4.1 (R1 / FR-5.4.8 可用化): 分钟级支持 ====================

    def _minute_priority(self):
        """分钟数据源优先级 — 从配置 minute.priority 读取, 缺省 SOURCE_ORDER (券商版优先)。"""
        try:
            prio = (self.config or {}).get('minute', {}).get('priority')
            if prio:
                # 过滤: 只保留已知源且去重, 保持用户配置顺序
                seen, out = set(), []
                for s in prio:
                    if s in SOURCE_ORDER and s not in seen:
                        seen.add(s)
                        out.append(s)
                if out:
                    return out
        except Exception as e:
            # 可降级: 用户配置源优先级不可用时回退内置顺序, 但需留痕
            logger.warning("[data_sources] 读取源优先级配置失败, 回退内置顺序: %s", e)
        return list(SOURCE_ORDER)

    def _minute_interval(self):
        try:
            return int((self.config or {}).get('minute', {}).get('interval_seconds', 60))
        except Exception:
            return 60

    def _normalize_minute_df(self, df):
        """分钟源 DataFrame 列归一化 → 标准 trade_date 列 (YYYYMMDD)。

        - tushare/sxsc stk_mins 返回 trade_time('YYYY-MM-DD HH:MM:SS')
        - akshare min_em 返回中文列 (时间/开盘/收盘/最高/最低/成交量/成交额)
        统一: 产出 trade_date (YYYYMMDD), 并补齐 open/high/low/close/vol/amount 标准列。
        """
        df = df.copy()
        if 'trade_time' in df.columns:
            df['trade_date'] = df['trade_time'].astype(str).str[:10].str.replace('-', '')
        elif '时间' in df.columns:
            df['trade_date'] = df['时间'].astype(str).str[:10].str.replace('-', '')
        elif '日期' in df.columns:
            df['trade_date'] = df['日期'].astype(str).str[:10].str.replace('-', '')
        elif 'datetime' in df.columns:
            df['trade_date'] = df['datetime'].astype(str).str[:10].str.replace('-', '')
        # 中文列 → 标准列 (akshare)
        zh_map = {'开盘': 'open', '收盘': 'close', '最高': 'high', '最低': 'low',
                  '成交量': 'vol', '成交额': 'amount'}
        for zh, en in zh_map.items():
            if zh in df.columns and en not in df.columns:
                df[en] = df[zh]
        # 兜底: 若仍无 trade_date 但有 trade_time, 保底取首列
        if 'trade_date' not in df.columns:
            first_col = df.columns[0] if len(df.columns) else None
            if first_col is not None:
                df['trade_date'] = df[first_col].astype(str).str[:10].str.replace('-', '')
        return df

    def _build_kline_response(self, df, source_name):
        """将 DataFrame 构建为前端 K 线数组格式，含 MA 计算"""
        df = df.sort_values('trade_date', ascending=True).reset_index(drop=True)
        df['ma5'] = df['close'].rolling(window=5).mean()
        df['ma10'] = df['close'].rolling(window=10).mean()
        df['ma20'] = df['close'].rolling(window=20).mean()
        df['ma60'] = df['close'].rolling(window=60).mean()
        df['vol_ma5'] = df['vol'].rolling(window=5).mean()

        # v3.22-kline-fix: 主字段 NaN/Inf → None — 数据源缺行/异常值若直接 float() 会产出 NaN,
        #   FastAPI JSON 序列化报 "Out of range float values are not JSON compliant" → K线加载失败(ops 实测)
        def _safe(v):
            try:
                f = float(v)
                return f if (f == f and f not in (float('inf'), float('-inf'))) else None
            except (TypeError, ValueError):
                return None
        kline_data = []
        for _, row in df.iterrows():
            # V4.0 bugfix: 统一日期为 YYYYMMDD — akshare 源返回 YYYY-MM-DD, 前端按 YYYYMMDD 切片致 ops K线日期错乱
            _d = str(row['trade_date']).replace('-', '')
            kline_data.append([
                _d,
                _safe(row['open']),
                _safe(row['close']),
                _safe(row['low']),
                _safe(row['high']),
                _safe(row['vol']),
                float(row['ma5']) if pd.notna(row.get('ma5')) else None,
                float(row['ma10']) if pd.notna(row.get('ma10')) else None,
                float(row['ma20']) if pd.notna(row.get('ma20')) else None,
                float(row['ma60']) if pd.notna(row.get('ma60')) else None,
                float(row['vol_ma5']) if pd.notna(row.get('vol_ma5')) else None,
            ])

        return {"data": kline_data, "data_source": source_name}
