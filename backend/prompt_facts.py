#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
事实护栏「数据卡」— 智能投顾助手 (FR-3.17.1)

提供：
- build_stock_fact_card      个股数据卡：估值/技术/资金/风险 数值全部来自本地数据源
- build_compare_table        多股对比数据卡 → 结构化对比表
- build_conversation_context 多轮上下文组装（会话内追问记忆）
- parse_compare_request      多代码解析（>=2 代码识别 → 对比请求）

护栏规则（C. 事实护栏）：
- 涉及行情/估值/财务的数字只允许引用数据卡中的数值（value + source + generated_at）；
- 取不到的字段 value 置 None、field_sources 标 'unavailable'，prompt 渲染为「数据暂不可用」；
- 禁止编造数字；来源不可得明确标注。

所有函数支持注入 fake data_source/stock_info，纯本地不触网，便于单测。
"""
import logging
import re
from datetime import datetime
from typing import Dict, List, Optional

logger = logging.getLogger(__name__)

# 数据卡指标定义: (字段key, 展示标签, 单位)
METRICS = [
    ('pe', 'PE(市盈率)', '倍'),
    ('pb', 'PB(市净率)', '倍'),
    ('ps', 'PS(市销率)', '倍'),
    ('close', '收盘价', '元'),
    ('pct_chg', '当日涨跌幅', '%'),
    ('pct_5d', '近5日涨跌幅', '%'),
    ('rsi', 'RSI(14)', ''),
    ('net_mf_5d', '近5日主力净流入', '万'),
    ('volatility', '年化波动率', '%'),
    ('max_drawdown', '区间最大回撤', '%'),
]

# K线行格式: [trade_date, open, close, low, high, vol, ma5, ...]
_K_DATE, _K_OPEN, _K_CLOSE, _K_LOW, _K_HIGH = 0, 1, 2, 3, 4

# 波动率计算: 日收益率样本窗口 + 年化因子
_VOL_WINDOW = 20
_ANNUALIZE = 252
_RSI_NEED = 15  # calc_rsi 需 period+1=15 根


# ─── 代码解析（纯函数，无网络）────────────────────────────

def normalize_stock_code(raw: str) -> Optional[str]:
    """6位代码 → 标准 ts_code（补 .SZ/.SH/.BJ 后缀）；非法输入返回 None"""
    if not raw:
        return None
    s = str(raw).strip()
    if re.fullmatch(r'\d{6}\.[A-Za-z]+', s):
        return s.upper()
    if re.fullmatch(r'\d{6}', s):
        if s.startswith(('0', '3')):
            return f"{s}.SZ"
        if s.startswith('6'):
            return f"{s}.SH"
        if s.startswith(('4', '8')):
            return f"{s}.BJ"
    return None


def extract_stock_codes(message: str) -> List[str]:
    """从用户消息中提取全部股票代码（归一化 + 去重保序）"""
    if not message:
        return []
    seen: List[str] = []
    for raw in re.findall(r'\b(\d{6})\b', str(message)):
        norm = normalize_stock_code(raw)
        if norm and norm not in seen:
            seen.append(norm)
    return seen


def parse_compare_request(message: str, current_stock: str = None) -> Dict:
    """判断是否为多股对比请求：消息含 >=2 个代码 → is_compare=True。
    返回 {'is_compare': bool, 'codes': [ts_code...]}（最多4只）"""
    codes = extract_stock_codes(message)
    if len(codes) >= 2:
        return {'is_compare': True, 'codes': codes[:4]}
    return {'is_compare': False, 'codes': codes}


# ─── 数据源访问（可注入 fake，优雅降级）───────────────────

def _safe_call(obj, name, *args, **kwargs):
    """安全调用数据源方法；对象缺方法/抛异常 → None"""
    if obj is None:
        return None
    fn = getattr(obj, name, None)
    if fn is None:
        return None
    try:
        return fn(*args, **kwargs)
    except Exception as e:
        logger.warning(f"prompt_facts {name} 调用失败: {e}")
        return None


def _to_float(v) -> Optional[float]:
    try:
        if v is None:
            return None
        f = float(v)
        if f != f:  # NaN
            return None
        return f
    except (TypeError, ValueError):
        return None


def _round(v, n=2):
    return round(v, n) if v is not None else None


def _kline_rows(kline) -> List[list]:
    """归一化 K线返回：dict{data:[...]} / list → 行列表"""
    if isinstance(kline, dict):
        return kline.get('data') or []
    if isinstance(kline, list):
        return kline
    return []


def _daily_basic_fields(basic: Optional[Dict]) -> tuple:
    """从 daily_basic 提取 {pe,pb,ps} 与来源"""
    fields = {}
    source = 'unavailable'
    if basic:
        source = basic.get('data_source') or 'unavailable'
        for k in ('pe', 'pb', 'ps'):
            v = _to_float(basic.get(k))
            if v is not None:
                fields[k] = v
    return fields, source


def _kline_metrics(kline) -> tuple:
    """从 K线计算 {close,pct_chg,pct_5d,rsi,volatility,max_drawdown} 与来源"""
    rows = _kline_rows(kline)
    closes = []
    dates = []
    for r in rows:
        try:
            closes.append(float(r[_K_CLOSE]))
            dates.append(str(r[_K_DATE]))
        except (TypeError, ValueError, IndexError):
            logger.debug('prompt_facts:152 跳过 ((TypeError, ValueError, IndexError))')
            continue
    if len(closes) < 2:
        return {}, 'unavailable', None

    source = 'unavailable'
    if isinstance(kline, dict):
        source = kline.get('data_source') or source
    if source == 'unavailable':
        source = 'kline'

    fields = {}
    close = closes[-1]
    fields['close'] = _round(close)
    prev = closes[-2]
    if prev:
        fields['pct_chg'] = _round((close - prev) / prev * 100)
    if len(closes) >= 6 and closes[-6]:
        fields['pct_5d'] = _round((close - closes[-6]) / closes[-6] * 100)

    # RSI(14)
    if len(closes) >= _RSI_NEED:
        try:
            from ai_indicators import calc_rsi
            fields['rsi'] = calc_rsi(list(closes))
        except Exception as e:
            logger.warning(f"prompt_facts calc_rsi 失败: {e}")

    # 年化波动率（近 _VOL_WINDOW 日日收益标准差 × √252）
    if len(closes) >= _VOL_WINDOW + 1:
        seg = closes[-(_VOL_WINDOW + 1):]
        rets = [(seg[i] / seg[i - 1] - 1) for i in range(1, len(seg)) if seg[i - 1]]
        if len(rets) >= 2:
            mean = sum(rets) / len(rets)
            var = sum((r - mean) ** 2 for r in rets) / len(rets)
            vol = (var ** 0.5) * (_ANNUALIZE ** 0.5) * 100
            fields['volatility'] = _round(vol)

    # 区间最大回撤（全量 closes）
    peak = closes[0]
    mdd = 0.0
    for p in closes:
        if p > peak:
            peak = p
        if peak > 0:
            dd = (peak - p) / peak * 100
            if dd > mdd:
                mdd = dd
    fields['max_drawdown'] = _round(mdd)

    latest_date = dates[-1] if dates else None
    return fields, source, latest_date


def _moneyflow_5d(mf: Optional[list]) -> Optional[float]:
    """近5日主力净流入合计（万元）"""
    if not mf:
        return None
    vals = []
    for r in mf[-5:]:
        if isinstance(r, dict):
            v = _to_float(r.get('net_mf_amount'))
            if v is not None:
                vals.append(v)
    return _round(sum(vals)) if vals else None


# ─── 数据卡（C. 事实护栏）────────────────────────────────

def build_stock_fact_card(code: str, date: str = None, data_source=None, stock_info=None) -> Dict:
    """构建个股数据卡。

    数值全部来自注入的 data_source（默认 data_source_manager）；取不到的字段
    value=None 且 field_sources 标 'unavailable'；整体 source 无任何可用字段时
    标 'unavailable'（prompt 侧显示「数据暂不可用」）。

    返回:
        {code, name, date, fields, field_sources, source, generated_at}
    """
    code = (code or '').strip()
    if data_source is None:
        try:
            from data_sources import data_source_manager
            data_source = data_source_manager
        except Exception as e:
            logger.warning(f"prompt_facts 默认 data_source 不可用: {e}")
    if stock_info is None:
        try:
            from stock_info import stock_manager
            stock_info = stock_manager
        except Exception as e:
            logger.warning(f"prompt_facts 默认 stock_info 不可用: {e}")

    name = code
    raw_name = _safe_call(stock_info, 'get_name', code)
    if raw_name and str(raw_name) != code:
        name = str(raw_name)

    fields: Dict[str, Optional[float]] = {}
    field_sources: Dict[str, str] = {}

    # 估值面 (pe/pb/ps)
    basic = _safe_call(data_source, 'get_daily_basic', code, 5)
    val_fields, basic_source = _daily_basic_fields(basic)
    for k, v in val_fields.items():
        fields[k] = v
        field_sources[k] = basic_source
    basic_date = (basic or {}).get('trade_date') if isinstance(basic, dict) else None

    # 技术面 (close/pct_chg/pct_5d/rsi) + 风险 (volatility/max_drawdown)
    kline = _safe_call(data_source, 'get_kline_data', code, 'daily', 60)
    k_fields, k_source, k_date = _kline_metrics(kline)
    for k, v in k_fields.items():
        fields[k] = v
        field_sources[k] = k_source

    # 资金面 (net_mf_5d)
    mf = _safe_call(data_source, 'get_moneyflow', code, 10)
    mf5 = _moneyflow_5d(mf)
    if mf5 is not None:
        fields['net_mf_5d'] = mf5
        field_sources['net_mf_5d'] = 'moneyflow'
    else:
        field_sources['net_mf_5d'] = 'unavailable'

    # 兜底: 未产出字段统一标 unavailable（保证字段齐全，渲染安全）
    for key, _label, _unit in METRICS:
        fields.setdefault(key, None)
        field_sources.setdefault(key, 'unavailable')

    overall_source = 'unavailable' if not any(
        s != 'unavailable' for s in field_sources.values()) else 'data_source_manager'

    return {
        'code': code,
        'name': name,
        'date': date or basic_date or k_date,
        'fields': fields,
        'field_sources': field_sources,
        'source': overall_source,
        'generated_at': datetime.now().isoformat(timespec='seconds'),
    }


def build_fact_card_markdown(card: Optional[Dict]) -> str:
    """数据卡 → markdown 文本（供 prompt 注入；缺失字段渲染为「数据暂不可用」）"""
    if not card:
        return ''
    lines = [
        f"## 数据卡：{card.get('name') or card.get('code')}({card.get('code')})",
        f"- 数据日期: {card.get('date') or '未知'} | 生成时间: {card.get('generated_at')}",
        "| 指标 | 数值 | 数据来源 |",
        "|---|---|---|",
    ]
    for key, label, unit in METRICS:
        fsrc = (card.get('field_sources') or {}).get(key, 'unavailable')
        val = (card.get('fields') or {}).get(key)
        if val is None:
            lines.append(f"| {label} | 数据暂不可用 | {fsrc} |")
        else:
            vstr = f"{val}{unit}" if unit else str(val)
            lines.append(f"| {label} | {vstr} | {fsrc} |")
    return "\n".join(lines)


# ─── 多股对比（B. 多股票对比）──────────────────────────────

def build_compare_table(codes: List[str], date: str = None, data_source=None, stock_info=None) -> Dict:
    """为多只股票构建结构化对比表。

    返回:
        {codes, cards, header, rows, available, generated_at}
        - header: ['指标', '名称1(代码1)', ...]
        - rows:   [[标签, 值1, 值2, ...], ...]（值缺失为「数据暂不可用(来源)」）
    """
    codes = list(dict.fromkeys(c for c in (codes or []) if c))
    cards = [build_stock_fact_card(c, date=date, data_source=data_source, stock_info=stock_info)
             for c in codes]
    if not cards:
        return {'codes': [], 'cards': [], 'header': [], 'rows': [], 'available': False,
                'generated_at': datetime.now().isoformat(timespec='seconds')}

    header = ['指标'] + [f"{c.get('name') or c.get('code')}({c.get('code')})" for c in cards]
    rows = []
    for key, label, unit in METRICS:
        row = [label]
        for c in cards:
            val = (c.get('fields') or {}).get(key)
            fsrc = (c.get('field_sources') or {}).get(key, 'unavailable')
            if val is None:
                row.append(f"数据暂不可用({fsrc})")
            else:
                row.append(f"{val}{unit}" if unit else str(val))
        rows.append(row)

    available = any(c.get('source') != 'unavailable' for c in cards)
    return {
        'codes': codes,
        'cards': cards,
        'header': header,
        'rows': rows,
        'available': available,
        'generated_at': cards[0].get('generated_at', datetime.now().isoformat(timespec='seconds')),
    }


def build_compare_table_markdown(data: Optional[Dict]) -> str:
    """对比表结构 → markdown 文本（供 prompt 注入）"""
    if not data or not data.get('header'):
        return ''
    lines = [
        "## 多股对比数据卡（以下表格中的数字为唯一可信数值，禁止编造）",
        "| " + " | ".join(data['header']) + " |",
        "|" + "---|" * len(data['header']),
    ]
    for row in data.get('rows', []):
        lines.append("| " + " | ".join(row) + " |")
    return "\n".join(lines)


# ─── 多轮上下文（A. 多轮对话）──────────────────────────────

def build_conversation_context(messages: List[Dict], max_rounds: int = 6, max_chars: int = 300) -> str:
    """把历史消息精简为追问上下文。

    - messages: [{role, content}] 旧→新（role: user/assistant）
    - 仅保留最近 max_rounds 轮（user+assistant 对），每条内容截断到 max_chars
    - 返回 '' 表示无历史
    """
    msgs = [m for m in (messages or []) if isinstance(m, dict) and m.get('content')]
    if not msgs:
        return ''
    recent = msgs[-(max_rounds * 2):]
    lines = ["[历史对话摘要 — 供追问衔接，非本次新提问]"]
    for m in recent:
        role = m.get('role', 'user')
        label = '用户' if role == 'user' else '助手'
        content = str(m.get('content') or '').strip()
        if len(content) > max_chars:
            content = content[:max_chars] + "…"
        lines.append(f"{label}: {content}")
    return "\n".join(lines)
