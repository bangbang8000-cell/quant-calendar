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

    def _stock_panel(self, code, start, end, kline_fields, basic_fields, flow_fields):
        """单只股票: K线(日频) + 估值/资金流(单点前向填充) → 面板切片"""
        kline = self._fetch_kline(code, start, end)
        if kline is None or kline.empty:
            return None
        idx = pd.MultiIndex.from_arrays([kline['date'].values, [code] * len(kline)],
                                        names=['date', 'symbol'])
        out = pd.DataFrame(index=idx)
        for f in kline_fields:
            if f in kline.columns:
                out[f] = kline[f].values
        # 估值/资金流: 单点数据前向填充到整个区间(日频近似)
        basic = self._fetch_basic(code) if basic_fields else {}
        flow = self._fetch_flow(code) if flow_fields else {}
        for f in basic_fields:
            out[f] = basic.get(f, float('nan'))
        for f in flow_fields:
            out[f] = flow.get(f, float('nan'))
        return out

    # ---- 各数据源方法(带失败兜底) ----

    def _fetch_kline(self, code, start, end):
        """K线: 返回 {date: [...], close: [...]} 或 None"""
        try:
            res = self.source.get_kline_data(code, period='daily', limit=120)
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

    def _fetch_basic(self, code) -> Dict:
        """估值快照(最新一条) → {pe, pb, ...} (兼容 dict/list 返回)"""
        try:
            raw = self.source.get_daily_basic(code, limit=1)
            if isinstance(raw, dict):
                row = raw
            elif isinstance(raw, list) and raw and isinstance(raw[-1], dict):
                row = raw[-1]
            else:
                return {}
            out = {k: v for k, v in row.items() if k in ('pe', 'pb', 'ps', 'dv_ratio', 'total_mv', 'circ_mv')}
            # v3.21 (P0-8): float_mv(流通市值) = circ_mv 别名, 供换手因子(volume/float_mv)
            if 'float_mv' not in out and 'circ_mv' in out:
                out['float_mv'] = out['circ_mv']
            return out
        except Exception as e:
            logger.warning('估值取数失败 %s: %s', code, e)
            return {}

    def _fetch_flow(self, code) -> Dict:
        """资金流快照(最新一天主力净流入), 兼容字段名 main_net_inflow/net_mf_amount/net_amount"""
        try:
            rows = self.source.get_moneyflow(code, limit=3)
            if isinstance(rows, dict):
                rows = [rows]
            rows = rows or []
            if not isinstance(rows, list) or not rows:
                return {}
            row = rows[-1] if isinstance(rows[-1], dict) else rows[0]
            val = row.get('main_net_inflow')
            if val is None:
                val = row.get('net_mf_amount')
            if val is None:
                val = row.get('net_amount')
            return {'main_net_inflow': val}
        except Exception as e:
            logger.warning('资金流取数失败 %s: %s', code, e)
            return {}
