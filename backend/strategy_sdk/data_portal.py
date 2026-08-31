#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
三源 DataPortal (FR: 策略研究数据层)
实现 DataPortal 协议: 从 data_sources 三源(akshare/tushare/sxsc)取真实行情组装面板
字段映射:
  close/volume/amount  ← get_kline_data(ts_code)
  pe/pb                ← get_daily_basic(ts_code)
  main_net_inflow      ← get_moneyflow(ts_code)
优雅降级: 数据源不可达/无数据 → 返回空面板(不抛异常)
"""
import logging
from typing import Dict, List, Optional

import pandas as pd

logger = logging.getLogger(__name__)

_FIELD_SOURCE = {
    'pe': 'basic', 'pb': 'basic', 'ps': 'basic', 'dv_ratio': 'basic',
    'total_mv': 'basic', 'circ_mv': 'basic', 'float_mv': 'basic',
    'main_net_inflow': 'moneyflow',
}


class RealDataPortal:
    """三源数据门户: 实现 get_panel(fields, start, end, universe) 协议"""

    def __init__(self, source=None):
        """source: 数据源管理器(默认 data_sources.data_source_manager)"""
        if source is None:
            try:
                from data_sources import data_source_manager as source
            except Exception as e:
                logger.warning('三源管理器不可用: %s', e)
                source = None
        self.source = source
        self.requests = []

    # ---- 协议 -

    def get_panel(self, fields: List[str], start: str, end: str,
                  universe: Optional[List[str]] = None,
                  max_workers: int = 1) -> pd.DataFrame:
        """组装 MultiIndex(date, symbol) 面板(列含请求 fields)

        v3.21 (遗留1): max_workers>1 时并发取数(全池5530只提速), 尊重数据源限流。
        """
        self.requests.append({'start': start, 'end': end, 'fields': list(fields),
                              'universe': universe})
        if self.source is None:
            return pd.DataFrame()
        symbols = universe or []
        if not symbols:
            return pd.DataFrame()
        # 字段归类: 哪些来自 K 线, 哪些来自单股数据
        kline_fields = [f for f in fields if f in ('close', 'volume', 'amount', 'high', 'low', 'open')]
        basic_fields = [f for f in fields if _FIELD_SOURCE.get(f) == 'basic']
        flow_fields = [f for f in fields if _FIELD_SOURCE.get(f) == 'moneyflow']
        frames = []

        def _fetch_one(code):
            """单股取数(线程安全: data_sources 内部有锁)"""
            try:
                stock_df = self._stock_panel(code, start, end, kline_fields,
                                             basic_fields, flow_fields)
                return stock_df if stock_df is not None and not stock_df.empty else None
            except Exception as e:
                logger.warning('股票 %s 取数失败: %s', code, e)
                return None

        if max_workers and max_workers > 1 and len(symbols) > 1:
            import concurrent.futures
            with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as ex:
                for df in ex.map(_fetch_one, symbols):
                    if df is not None:
                        frames.append(df)
        else:
            for code in symbols:
                df = _fetch_one(code)
                if df is not None:
                    frames.append(df)
        if not frames:
            return pd.DataFrame()
        panel = pd.concat(frames)
        if panel.empty:
            return pd.DataFrame()
        # 仅保留请求字段 + 索引列
        panel = panel[fields] if all(f in panel.columns for f in fields) else panel
        return panel

    def _calc_limit(self, start, end, default=250, cap=2000):
        """按请求日期区间估算所需 K 线/序列条数(留 1.5x 缓冲), 上限 cap — V4.0 M1-2 去 120 硬编码"""
        import datetime as _dt
        try:
            s = (start or '').replace('-', '')
            e = (end or '').replace('-', '') or _dt.datetime.now().strftime('%Y%m%d')
            if s and e and len(s) == 8 and len(e) == 8 and s <= e:
                days = (_dt.datetime.strptime(e, '%Y%m%d') - _dt.datetime.strptime(s, '%Y%m%d')).days
                return max(default, min(int(days * 1.5) + 20, cap))
        except Exception:
            pass
        return default

    def _stock_panel(self, code, start, end, kline_fields, basic_fields, flow_fields):
        """单只股票: K线(日频) + 估值/资金流(历史序列按日合并, 前向填充不越界 → 无未来函数)

        V4.0 M1-2: 估值/资金流不再用"最新快照前向填充全区间"(未来信息),
        改用历史序列按面板日期 reindex+ffill — 每个日期只用 <= 当日的数据。
        """
        limit = self._calc_limit(start, end)
        kline = self._fetch_kline(code, start, end, limit)
        if kline is None or kline.empty:
            return None
        idx = pd.MultiIndex.from_arrays([kline['date'].values, [code] * len(kline)],
                                        names=['date', 'symbol'])
        out = pd.DataFrame(index=idx)
        for f in kline_fields:
            if f in kline.columns:
                out[f] = kline[f].values
        # 估值/资金流: 历史序列按面板日期合并(只向前填充, 无未来函数)
        basic_rows = self._fetch_basic_series(code, limit) if basic_fields else []
        flow_rows = self._fetch_flow_series(code, limit) if flow_fields else []
        panel_dates = [str(d).replace('-', '') for d in kline['date']]

        def _merge_series(rows, fields):
            df = pd.DataFrame(rows)
            if df.empty:
                return {f: [float('nan')] * len(panel_dates) for f in fields}
            df['_d'] = df['trade_date'].astype(str).str.replace('-', '', regex=False)
            df = df.drop_duplicates('_d').set_index('_d').sort_index()
            vals = {}
            for f in fields:
                if f not in df.columns:
                    vals[f] = [float('nan')] * len(panel_dates)
                    continue
                vals[f] = df[f].reindex(panel_dates).ffill().values.tolist()
            return vals

        merged = {}
        merged.update(_merge_series(basic_rows, basic_fields))
        merged.update(_merge_series(flow_rows, flow_fields))
        # v3.21 (P0-8) 延续: float_mv = circ_mv 别名(供换手因子), 序列版同样生效
        if 'float_mv' in basic_fields and 'circ_mv' in merged and 'circ_mv' not in merged.get('float_mv', []):
            merged['float_mv'] = merged['circ_mv']
        for f in basic_fields + flow_fields:
            out[f] = merged.get(f, [float('nan')] * len(panel_dates))
        return out

    # ---- 各数据源方法(带失败兜底) ----

    def _fetch_kline(self, code, start, end, limit=250):
        """K线: 返回 {date: [...], close: [...]} 或 None (limit 按请求区间参数化)"""
        try:
            res = self.source.get_kline_data(code, period='daily', limit=limit)
            data = (res or {}).get('data') or []
            if not data:
                return None
            dates, closes, vols = [], [], []
            for row in data:
                # [trade_date, open, close, low, high, vol, ...]
                dates.append(str(row[0]))
                closes.append(float(row[2]))
                vols.append(float(row[5]) if len(row) > 5 else 0.0)
            df = pd.DataFrame({'date': dates, 'close': closes, 'volume': vols})
            # 过滤日期范围 (统一 YYYYMMDD 格式, 兼容 K线源 YYYYMMDD/YYYY-MM-DD 差异)
            df['_d'] = df['date'].str.replace('-', '', regex=False)
            s = (start or '').replace('-', '')
            e = (end or '').replace('-', '') or '99999999'
            if s or e:
                df = df[(df['_d'] >= s) & (df['_d'] <= e)]
            df = df.drop(columns=['_d'])
            return df if not df.empty else None
        except Exception as e:
            logger.warning('K线取数失败 %s: %s', code, e)
            return None

    def _fetch_basic_series(self, code, limit=20) -> List[Dict]:
        """基本面历史序列(旧→新, {trade_date, pe, pb, ...}) — V4.0 M1-2 去快照前向填充"""
        try:
            rows = self.source.get_daily_basic_series(code, limit=limit) or []
            return [r for r in rows if isinstance(r, dict)]
        except Exception as e:
            logger.warning('估值序列取数失败 %s: %s', code, e)
            return []

    def _fetch_flow_series(self, code, limit=10) -> List[Dict]:
        """资金流历史序列(旧→新, {trade_date, main_net_inflow}) — V4.0 M1-2 去快照前向填充"""
        try:
            rows = self.source.get_moneyflow(code, limit=limit)
            if isinstance(rows, dict):
                rows = [rows]
            out = []
            for r in (rows or []):
                if not isinstance(r, dict):
                    continue
                val = r.get('main_net_inflow')
                if val is None:
                    val = r.get('net_mf_amount')
                if val is None:
                    val = r.get('net_amount')
                row = dict(r)
                row['main_net_inflow'] = val
                out.append(row)
            return out
        except Exception as e:
            logger.warning('资金流序列取数失败 %s: %s', code, e)
            return []
