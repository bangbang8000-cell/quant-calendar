#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
盘中增强实时化（FR-3.17.7 实时化，可选）— 实时报价聚合纯函数 + 可注入数据源

- build_quote_payload: 纯函数，把订阅股票 + 报价映射聚合为 WS 推送帧
  （字段完整性 / 涨速·量比计算 / degraded 降级空数据）
- parse_subscribe: 纯函数，校验订阅消息（非法代码/超限/空订阅）
- RealtimeQuoteSource: 真实源不可达时优雅降级（degraded=True + 空数据，绝不抛错）
"""
import logging
from typing import Dict, List, Optional, Tuple

logger = logging.getLogger(__name__)

# 预警阈值（与前端 frontend/js/core.js 常量保持一致，供后端侧引用/测试）
WARN_RISE_SPEED_THRESHOLD = 1.0    # |涨速| > 1% → 涨速预警
WARN_VOLUME_RATIO_THRESHOLD = 2.5  # 量比 > 2.5 → 放量预警

# 单连接订阅上限
MAX_SUBSCRIBE_CODES = 50

# 6.5.5: 腾讯行情轻量直连源（一次请求批量返回订阅代码，不依赖 akshare 全市场快照）
TENCENT_QUOTE_URL = 'https://qt.gtimg.cn/q=%s'


def _safe_float(value, default=None):
    """安全转 float；None/NaN/非法返回 default"""
    try:
        if value is None:
            return default
        f = float(value)
        if f != f:  # NaN
            return default
        return f
    except (TypeError, ValueError):
        return default


def _pct_change(price, pre_close):
    """涨跌幅 = (price - pre_close)/pre_close*100；缺参返回 None"""
    price = _safe_float(price)
    pre = _safe_float(pre_close)
    if price is None or pre is None or pre == 0:
        return None
    return round((price - pre) / pre * 100, 2)


def _rise_speed(price, prev_price):
    """涨速 = (最新价 - 上一帧价)/上一帧价*100（%）；缺上一帧返回 None"""
    price = _safe_float(price)
    prev = _safe_float(prev_price)
    if price is None or prev is None or prev == 0:
        return None
    return round((price - prev) / prev * 100, 2)


def _volume_ratio(volume, avg_volume_5d):
    """量比 = 现量 / 前5日均量；缺基准返回 None"""
    vol = _safe_float(volume)
    avg = _safe_float(avg_volume_5d)
    if vol is None or avg is None or avg <= 0:
        return None
    return round(vol / avg, 2)


def _normalize_code(raw) -> Optional[str]:
    """把订阅代码规范化为 ts_code：
    - '600519' → '600519.SH'（沪市 60/68/51 开头）
    - '000001' → '000001.SZ'（深市 00/30/15/16 开头）
    - '8xxxxx/4xxxxx/92xxxx' → '.BJ'（北交所）
    - '600519.SH' 等已带后缀 → 原样校验
    - 非法（非 6 位数字、前缀不符）→ None
    """
    if raw is None:
        return None
    code = str(raw).strip().upper()
    if '.' in code:
        ts_code, _, suffix = code.partition('.')
        if ts_code.isdigit() and len(ts_code) == 6 and suffix in ('SH', 'SZ', 'BJ'):
            return f"{ts_code}.{suffix}"
        return None
    if not code.isdigit() or len(code) != 6:
        return None
    if code.startswith(('60', '68', '51')):
        return f"{code}.SH"
    if code.startswith(('00', '30', '15', '16')):
        return f"{code}.SZ"
    if code.startswith(('8', '4', '92')):
        return f"{code}.BJ"
    return None


def _resolve_name(code: str) -> str:
    """股票 ts_code → 中文名（尽力而为，失败回退代码）"""
    try:
        from stock_info import stock_manager
        name = stock_manager.get_name(code)
        return name if name and name != code else code
    except Exception:
        return code


def parse_subscribe(message, max_codes: int = MAX_SUBSCRIBE_CODES):
    """解析订阅 JSON → (stocks: List[{code,name}], error: Optional[str])

    校验规则（纯函数，可单测）：
    - 非 dict / 缺 subscribe 列表 → 错误
    - 空订阅列表 → 错误
    - 超过 max_codes → 错误
    - 非法代码过滤；全部非法 → 错误
    - 合法代码去重、规范化
    """
    if not isinstance(message, dict):
        return [], '订阅消息格式错误'
    raw_codes = message.get('subscribe')
    if not isinstance(raw_codes, list):
        return [], '缺少 subscribe 代码列表'
    codes = [str(c).strip() for c in raw_codes if str(c).strip()]
    if not codes:
        return [], '订阅列表为空'
    if len(codes) > max_codes:
        return [], f'订阅数量超过上限（{max_codes}）'
    seen = set()
    stocks: List[dict] = []
    for c in codes:
        norm = _normalize_code(c)
        if norm is None or norm in seen:
            continue
        seen.add(norm)
        stocks.append({'code': norm, 'name': _resolve_name(norm)})
    if not stocks:
        return [], '订阅代码均为非法代码'
    return stocks, None


def trading_session_state(now=None) -> str:
    """v6.4 (FR-6.4.2): 当前是否处于 A 股常规交易时段。

    仅用于给 degraded 帧标注原因，不做交易日历判定（节假日仍按"时段内"处理，
    因为此时上游不可达与休市在界面上都要提示，措辞差异不影响用户判断）。
    返回: 'open' | 'closed' | 'weekend'
    """
    from datetime import datetime as _dt
    now = now or _dt.now()
    if now.weekday() >= 5:
        return "weekend"
    hm = now.hour * 60 + now.minute
    if (9 * 60 + 30) <= hm <= (11 * 60 + 30) or (13 * 60) <= hm <= (15 * 60):
        return "open"
    return "closed"


def degrade_reason(state: str = None) -> str:
    """v6.4 (FR-6.4.2): degraded 帧的原因码。"""
    state = state or trading_session_state()
    if state in ("closed", "weekend"):
        return "non_trading_hours"
    return "upstream_unreachable"


def build_quote_payload(stocks: List[dict], quotes_map: Optional[Dict], degraded: bool = False,
                        reason: str = None) -> dict:
    """聚合报价帧（纯函数，可单测）

    Args:
        stocks: 订阅股票 [{code, name}, ...]
        quotes_map: {ts_code: {price, pre_close, prev_price, volume, avg_volume_5d,
                               change_pct?, volume_ratio?, rise_speed?}}
        degraded: 数据源不可达标记
        reason: v6.4 (FR-6.4.2) 降级原因码；缺省 upstream_unreachable。
                'upstream_unreachable' | 'non_trading_hours'

    Returns:
        {"type": "quotes", "data": [...], "degraded": bool, "reason"?: str}
        degraded=True 或 quotes_map 为空/无匹配 → {"type": "quotes", "data": [], "degraded": True, "reason": ...}
    """
    if degraded or not quotes_map:
        return {"type": "quotes", "data": [], "degraded": True,
                "reason": reason or "upstream_unreachable"}
    data = []
    for s in stocks:
        code = s.get('code')
        q = quotes_map.get(code)
        if not q:
            continue
        price = _safe_float(q.get('price'))
        if price is None:
            continue
        change_pct = _safe_float(q.get('change_pct'))
        if change_pct is None:
            change_pct = _pct_change(price, q.get('pre_close'))
        volume_ratio = _safe_float(q.get('volume_ratio'))
        if volume_ratio is None:
            volume_ratio = _volume_ratio(q.get('volume'), q.get('avg_volume_5d'))
        rise_speed = _safe_float(q.get('rise_speed'))
        if rise_speed is None:
            rise_speed = _rise_speed(price, q.get('prev_price'))
        data.append({
            "code": code,
            "name": s.get('name') or code,
            "price": price,
            "change_pct": change_pct,
            "volume_ratio": volume_ratio,
            "rise_speed": rise_speed,
        })
    if not data:
        return {"type": "quotes", "data": [], "degraded": True}
    return {"type": "quotes", "data": data, "degraded": False}


class RealtimeQuoteSource:
    """实时报价数据源（真实源不可达时优雅降级）

    - 构造可注入 fetcher 纯函数（测试用）：fetcher(codes) -> (quotes_map, degraded)
    - 默认走真实数据源（akshare 全市场快照 → tushare 实时快照），沙箱网络不可达 → 降级
    """

    def __init__(self, fetcher=None, timeout: float = 5.0):
        self._fetcher = fetcher
        self._timeout = timeout

    def fetch_quotes(self, codes: List[str]) -> Tuple[Dict, bool]:
        """拉取一批 ts_code 的实时报价 → (quotes_map, degraded)

        任何异常/不可达 → ({}, True)，绝不抛出（优雅降级关键）。
        """
        if not codes:
            return {}, True
        if self._fetcher is not None:
            try:
                quotes, degraded = self._fetcher(list(codes))
                if degraded:
                    return {}, True
                if not isinstance(quotes, dict) or not quotes:
                    return {}, True
                allowed = set(codes)
                return {k: v for k, v in quotes.items() if k in allowed}, False
            except Exception as e:
                logger.warning('实时报价 mock 源异常，降级: %s', e)
                return {}, True
        try:
            return self._fetch_from_data_source(list(codes))
        except Exception as e:
            logger.warning('实时报价数据源不可达，降级: %s', e)
            return {}, True

    def _fetch_from_data_source(self, codes: List[str]) -> Tuple[Dict, bool]:
        """真实源拉取: 腾讯直连 → akshare 全市场快照 → tushare 实时快照回退 (FR-3.18.3 / 6.5.5)。

        腾讯源只需一次批量请求即可覆盖订阅代码, 不受 akshare 全市场快照
        (5000+ 行分页) 被上游断连的影响; 三者皆失败抛最后一个异常,
        由 fetch_quotes 捕获 → 优雅降级 degraded=True。
        """
        try:
            return self._fetch_from_tencent(codes)
        except Exception as e0:
            logger.warning('腾讯行情源不可达, 尝试 akshare 回退: %s', e0)
        try:
            return self._fetch_from_akshare(codes)
        except Exception as e1:
            logger.warning('akshare 实时快照不可达, 尝试 tushare 回退: %s', e1)
            try:
                return self._fetch_from_tushare(codes)
            except Exception as e2:
                logger.warning('tushare 实时快照也不可达: %s', e2)
                raise

    def _fetch_from_tencent(self, codes: List[str]) -> Tuple[Dict, bool]:
        """腾讯行情直连 (qt.gtimg.cn) — 批量拉取订阅代码的现价/昨收/涨跌幅/量比。

        字段位: 2=代码 3=现价 4=昨收 32=涨跌幅% 49=量比 (GBK 文本, 一次请求多代码)。
        停牌/无成交时为 0 → 回退昨收价, 避免前端把 0.00 当成真实报价。
        """
        import requests
        symbols = []
        for code in codes:
            ts_code, _, suffix = str(code).partition('.')
            if not ts_code.isdigit() or suffix not in ('SH', 'SZ', 'BJ'):
                continue
            symbols.append(suffix.lower() + ts_code)
        if not symbols:
            raise RuntimeError('无合法腾讯行情代码')
        resp = requests.get(TENCENT_QUOTE_URL % ','.join(symbols),
                            headers={'User-Agent': 'Mozilla/5.0'},
                            timeout=self._timeout)
        resp.encoding = 'gbk'
        wanted = set(codes)
        quotes = {}
        for line in resp.text.split(';'):
            if '"' not in line:
                continue
            fields = line.split('"')[1].split('~')
            if len(fields) < 50:
                continue
            norm = _normalize_code(fields[2])
            if norm is None or norm not in wanted:
                continue
            price = _safe_float(fields[3])
            pre_close = _safe_float(fields[4])
            if not price or price <= 0:
                price = pre_close
            if not price or price <= 0:
                continue
            change_pct = _safe_float(fields[32])
            volume_ratio = _safe_float(fields[49])
            quotes[norm] = {
                'price': price,
                'pre_close': pre_close,
                'change_pct': change_pct,
                'volume_ratio': volume_ratio,
                'rise_speed': None,
            }
        if not quotes:
            raise RuntimeError('未匹配到订阅代码的腾讯实时报价')
        return quotes, False

    def _fetch_from_akshare(self, codes: List[str]) -> Tuple[Dict, bool]:
        """akshare 全市场快照 (含量比/涨速字段), 失败抛异常由上层回退/降级。"""
        try:
            import akshare as ak
            df = ak.stock_zh_a_spot_em()
            if df is None or len(df) == 0:
                raise RuntimeError('akshare 实时快照为空')
            col_map = {
                '代码': 'code', '名称': 'name', '最新价': 'price',
                '涨跌幅': 'change_pct', '量比': 'volume_ratio',
                '涨速': 'rise_speed', '昨收': 'pre_close',
            }
            df = df.rename(columns={k: v for k, v in col_map.items() if k in df.columns})
            wanted = set(codes)
            quotes = {}
            for _, row in df.iterrows():
                code = str(row.get('code', '')).strip().upper()
                if code not in wanted:
                    continue
                quotes[code] = {
                    'price': _safe_float(row.get('price')),
                    'pre_close': _safe_float(row.get('pre_close')),
                    'change_pct': _safe_float(row.get('change_pct')),
                    'volume_ratio': _safe_float(row.get('volume_ratio')),
                    'rise_speed': _safe_float(row.get('rise_speed')),
                }
            if not quotes:
                raise RuntimeError('未匹配到订阅代码的实时报价')
            return quotes, False
        except Exception:
            raise

    def _fetch_from_tushare(self, codes: List[str]) -> Tuple[Dict, bool]:
        """tushare 实时快照回退源（无 token 亦可尝试；失败抛异常由上层降级）"""
        try:
            import tushare as ts
            # T-6.3.4: tushare 1.4.x get_realtime_quotes 签名为 (symbols=None) —
            # 传 ts_code= 关键字会抛 TypeError("unexpected keyword argument 'ts_code'"),
            # 导致 tushare 回退永远失败 → 实时报价长期降级。改用位置参数 symbols。
            df = ts.get_realtime_quotes(','.join(c.split('.')[0] for c in codes))
            if df is None or len(df) == 0:
                raise RuntimeError('tushare 实时快照为空')
            wanted = set(codes)
            quotes = {}
            for _, row in df.iterrows():
                raw = str(row.get('code', '')).strip()
                norm = _normalize_code(raw)
                if norm is None or norm not in wanted:
                    continue
                quotes[norm] = {
                    'price': _safe_float(row.get('price')),
                    'pre_close': _safe_float(row.get('pre_close')),
                    'change_pct': None,  # 由 build_quote_payload 按 pre_close 推算
                    'volume_ratio': None,
                    'rise_speed': None,
                }
            if not quotes:
                raise RuntimeError('未匹配到订阅代码的 tushare 实时报价')
            return quotes, False
        except Exception:
            raise
