#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""个股五维分析报告生成器 (v7.9 FR-7.9-2)

上游对应: KHunter `stock_analyzer/` 五分析器 + `report_generator.py`。移植其"分维分析 → 综合结论
→ 可导出报告"的产品思路, 但重写实现以修掉三处工程缺陷:
1. 上游 report_generator 用巨型 f-string 拼 HTML 且直接插值股票名等外部数据(XSS);
   这里所有动态内容经 `html.escape`, 样式走 CSS 变量, 产出可离线打开的单文件报告。
2. 上游各分析器自算一套分数, 与评分口径脱节; 这里维度分统一交给 v7.4 的 `ScoreEngine`
   加权(35/35/10/10/10), 缺维诚实标 unknown, 不写 0 分冒充"很差"。
3. 上游缺数时编造默认值; 这里每个维度都可为 None, 并在 `data_completeness` 里显式暴露缺数比例。

口径说明(全部可解释, 每个加减分都记录原因):
- 技术: 均线多头/排列、MACD、RSI、KDJ、量能、60 日位置
- 资金: 近 5 日主力净流入 / 成交额 的强度比
- 基本面: PE / PB 落档(仅绝对估值, 无历史分位时不做分位断言)
- 板块: 由调用方注入行业分位(rank_pct), 缺失则 unknown
- 事件: 由调用方注入事件列表, 重大利空触发一票否决
"""
import html
import math
from typing import Dict, List, Optional

from strategy_sdk.scoring import ScoreEngine

DIMENSION_LABELS = {
    "technical": "技术",
    "moneyflow": "资金",
    "fundamental": "基本面",
    "sector": "板块",
    "event": "事件",
}

MA_WINDOWS = (5, 10, 20, 60)
RSI_PERIOD = 14
KDJ_PERIOD = 9
ATR_PERIOD = 14
FLOW_WINDOW = 5

# 重大利空关键词 → 一票否决(与 score_engine 的 veto 语义一致)
VETO_KEYWORDS = ("退市", "立案", "造假", "重大违法", "暂停上市")

REPORT_DISCLAIMER = "本报告由量化日历依据公开数据自动生成, 仅用于研究辅助, 不构成任何投资建议。"


# ─── 指标计算 ────────────────────────────────────────────────

def _num(value) -> Optional[float]:
    try:
        v = float(value)
    except (TypeError, ValueError):
        return None
    return v if math.isfinite(v) else None


def _closes(bars: List[Dict]) -> List[float]:
    out = []
    for b in bars or []:
        v = _num(b.get("close"))
        if v is not None and v > 0:
            out.append(v)
    return out


def _sma(values: List[float], n: int) -> Optional[float]:
    if len(values) < n:
        return None
    return sum(values[-n:]) / n


def _ema_series(values: List[float], n: int) -> List[float]:
    if not values:
        return []
    alpha = 2.0 / (n + 1)
    out = [values[0]]
    for v in values[1:]:
        out.append(alpha * v + (1 - alpha) * out[-1])
    return out


def _macd(closes: List[float], fast: int = 12, slow: int = 26, signal: int = 9):
    if len(closes) < slow + signal:
        return None
    dif = [a - b for a, b in zip(_ema_series(closes, fast), _ema_series(closes, slow))]
    dea = _ema_series(dif, signal)
    return {"dif": round(dif[-1], 4), "dea": round(dea[-1], 4),
            "hist": round((dif[-1] - dea[-1]) * 2, 4)}


def _rsi(closes: List[float], period: int = RSI_PERIOD) -> Optional[float]:
    if len(closes) <= period:
        return None
    gains = losses = 0.0
    for i in range(len(closes) - period, len(closes)):
        delta = closes[i] - closes[i - 1]
        gains += max(delta, 0.0)
        losses += max(-delta, 0.0)
    if losses == 0:
        return 100.0
    rs = (gains / period) / (losses / period)
    return round(100 - 100 / (1 + rs), 2)


def _kdj(bars: List[Dict], period: int = KDJ_PERIOD) -> Optional[Dict]:
    if len(bars) < period:
        return None
    k = d = 50.0
    for i in range(len(bars) - period, len(bars)):
        window = bars[max(0, i - period + 1):i + 1]
        highs = [_num(b.get("high")) for b in window]
        lows = [_num(b.get("low")) for b in window]
        highs = [h for h in highs if h is not None]
        lows = [v for v in lows if v is not None]
        close = _num(bars[i].get("close"))
        if not highs or not lows or close is None:
            return None
        hh, ll = max(highs), min(lows)
        rsv = 50.0 if hh == ll else (close - ll) / (hh - ll) * 100
        k = (2 * k + rsv) / 3
        d = (2 * d + k) / 3
    return {"k": round(k, 2), "d": round(d, 2), "j": round(3 * k - 2 * d, 2)}


def _atr(bars: List[Dict], period: int = ATR_PERIOD) -> Optional[float]:
    if len(bars) <= period:
        return None
    trs = []
    for i in range(1, len(bars)):
        high, low, prev_close = (_num(bars[i].get("high")), _num(bars[i].get("low")),
                                 _num(bars[i - 1].get("close")))
        if None in (high, low, prev_close):
            continue
        trs.append(max(high - low, abs(high - prev_close), abs(low - prev_close)))
    if len(trs) < period:
        return None
    return round(sum(trs[-period:]) / period, 4)


# ─── 分维分析 ────────────────────────────────────────────────

def analyze_technical(bars: List[Dict]) -> Dict:
    """技术维: 返回 {score, indicators, reasons}; 数据不足时 score=None"""
    closes = _closes(bars)
    if len(closes) < 20:
        return {"score": None, "indicators": {}, "reasons": ["K 线不足 20 根, 技术维不评分"]}
    mas = {f"ma{n}": _sma(closes, n) for n in MA_WINDOWS}
    macd = _macd(closes)
    rsi = _rsi(closes)
    kdj = _kdj(bars)
    atr = _atr(bars)
    vols = [_num(b.get("volume")) for b in bars]
    vols = [v for v in vols if v]
    vol5 = sum(vols[-5:]) / 5 if len(vols) >= 5 else None
    vol20 = sum(vols[-20:]) / 20 if len(vols) >= 20 else None
    high60 = max(closes[-60:]) if len(closes) >= 60 else max(closes)
    low60 = min(closes[-60:]) if len(closes) >= 60 else min(closes)
    last = closes[-1]

    score, reasons = 50.0, []
    ma5, ma10, ma20 = mas["ma5"], mas["ma10"], mas["ma20"]
    if ma20 and last > ma20:
        score += 10
        reasons.append("收盘站上 MA20 (+10)")
    if ma5 and ma10 and ma20 and ma5 > ma10 > ma20:
        score += 15
        reasons.append("均线多头排列 MA5>MA10>MA20 (+15)")
    elif ma5 and ma10 and ma5 < ma10:
        score -= 8
        reasons.append("MA5 下穿 MA10 (-8)")
    if macd:
        if macd["dif"] > macd["dea"]:
            score += 10
            reasons.append("MACD DIF 在 DEA 上 (+10)")
        else:
            score -= 6
            reasons.append("MACD DIF 在 DEA 下 (-6)")
    if rsi is not None:
        if 45 <= rsi <= 70:
            score += 10
            reasons.append(f"RSI {rsi} 处于强势区 (+10)")
        elif rsi > 80:
            score -= 10
            reasons.append(f"RSI {rsi} 超买 (-10)")
        elif rsi < 30:
            score += 5
            reasons.append(f"RSI {rsi} 超跌 (+5)")
    if kdj and kdj["k"] > kdj["d"]:
        score += 8
        reasons.append("KDJ K 上穿 D (+8)")
    if vol5 and vol20 and vol5 > vol20 * 1.2:
        score += 7
        reasons.append("5 日均量放大逾 20% (+7)")
    if high60 > low60:
        pos = (last - low60) / (high60 - low60)
        if pos > 0.95:
            score -= 5
            reasons.append("贴近 60 日高点, 追高风险 (-5)")
        elif pos < 0.15:
            score += 5
            reasons.append("贴近 60 日低点, 位置偏低 (+5)")

    return {
        "score": round(min(max(score, 0.0), 100.0), 1),
        "indicators": {
            **{k: (round(v, 2) if v is not None else None) for k, v in mas.items()},
            "macd": macd, "rsi": rsi, "kdj": kdj, "atr": atr,
            "vol_ratio_5_20": round(vol5 / vol20, 3) if vol5 and vol20 else None,
            "high60": round(high60, 2), "low60": round(low60, 2),
            "close": round(last, 2),
        },
        "reasons": reasons,
    }


def analyze_moneyflow(flows: List[Optional[float]], bars: List[Dict]) -> Dict:
    """资金维: 近 5 日主力净流入 / 近 5 日成交额 → 强度分"""
    series = [v for v in (_num(x) for x in (flows or [])) if v is not None]
    if len(series) < FLOW_WINDOW:
        return {"score": None, "indicators": {}, "reasons": ["主力资金数据不足, 资金维不评分"]}
    net5 = sum(series[-FLOW_WINDOW:])
    amount5 = 0.0
    for b in (bars or [])[-FLOW_WINDOW:]:
        close, volume = _num(b.get("close")), _num(b.get("volume"))
        if close and volume:
            amount5 += close * volume
    ratio = net5 / amount5 if amount5 else None
    if ratio is None:
        return {"score": None, "indicators": {"net_inflow_5d": round(net5, 2)},
                "reasons": ["成交额缺失, 无法计算资金强度"]}
    score = min(max(50 + ratio * 400, 0.0), 100.0)
    direction = "净流入" if net5 >= 0 else "净流出"
    return {
        "score": round(score, 1),
        "indicators": {"net_inflow_5d": round(net5, 2),
                       "amount_5d": round(amount5, 2), "strength": round(ratio, 4)},
        "reasons": [f"近 5 日{direction} {abs(ratio):.2%}(占成交额)"],
    }


def analyze_fundamental(basics: Dict) -> Dict:
    """基本面维: PE/PB 落档; 无数据则 unknown(不做分位断言)"""
    pe = _num((basics or {}).get("pe"))
    pb = _num((basics or {}).get("pb"))
    mv = _num((basics or {}).get("total_mv"))
    if pe is None and pb is None:
        return {"score": None, "indicators": {}, "reasons": ["估值数据缺失, 基本面维不评分"]}
    score, reasons = 50.0, []
    if pe is not None:
        if pe <= 0:
            score -= 12
            reasons.append(f"PE {pe:.1f} 为负(亏损) (-12)")
        elif pe <= 25:
            score += 12
            reasons.append(f"PE {pe:.1f} 处于低位区 (+12)")
        elif pe <= 45:
            reasons.append(f"PE {pe:.1f} 中性 (0)")
        else:
            score -= 10
            reasons.append(f"PE {pe:.1f} 偏高 (-10)")
    if pb is not None:
        if pb <= 2:
            score += 8
            reasons.append(f"PB {pb:.2f} 偏低 (+8)")
        elif pb > 5:
            score -= 8
            reasons.append(f"PB {pb:.2f} 偏高 (-8)")
    return {"score": round(min(max(score, 0.0), 100.0), 1),
            "indicators": {"pe": pe, "pb": pb, "total_mv": mv}, "reasons": reasons}


def analyze_sector(sector: Optional[Dict]) -> Dict:
    """板块维: 依赖调用方注入行业分位(rank_pct 0–100, 越高越强)"""
    if not sector or sector.get("rank_pct") is None:
        return {"score": None, "indicators": {}, "reasons": ["未接入板块强度, 板块维不评分"]}
    rank = min(max(float(sector["rank_pct"]), 0.0), 100.0)
    reasons = [f"所属行业 {sector.get('name') or '未知'} 强度分位 {rank:.0f}%"]
    if sector.get("pct5") is not None:
        reasons.append(f"行业近 5 日 {float(sector['pct5']):+.2%}")
    return {"score": round(rank, 1), "indicators": dict(sector), "reasons": reasons}


def analyze_events(events: Optional[List[Dict]]) -> Dict:
    """事件维: 近 30 日事件计数与情绪分布; 重大利空 → 否决"""
    if events is None:
        return {"score": None, "indicators": {}, "reasons": ["未接入事件数据, 事件维不评分"],
                "veto": False}
    positive = sum(1 for e in events if str(e.get("sentiment") or "") in ("利好", "positive"))
    negative = sum(1 for e in events if str(e.get("sentiment") or "") in ("利空", "negative"))
    veto_hits = [e for e in events
                 if any(k in str(e.get("title") or "") for k in VETO_KEYWORDS)]
    score = min(max(50 + positive * 5 - negative * 8, 0.0), 100.0)
    reasons = [f"近 30 日事件 {len(events)} 条: 利好 {positive} / 利空 {negative}"]
    if veto_hits:
        reasons.append("命中重大利空: " + str(veto_hits[0].get("title") or ""))
    return {"score": round(score, 1),
            "indicators": {"total": len(events), "positive": positive, "negative": negative},
            "reasons": reasons, "veto": bool(veto_hits)}


# ─── 报告组装 ────────────────────────────────────────────────

def build_report(symbol: str, name: str, date: str, bars: List[Dict],
                 flows: Optional[List] = None, basics: Optional[Dict] = None,
                 sector: Optional[Dict] = None, events: Optional[List[Dict]] = None,
                 engine: Optional[ScoreEngine] = None) -> Dict:
    """组装五维报告: 维度明细 + 加权总分 + 结论 + 数据完整度"""
    dims = {
        "technical": analyze_technical(bars),
        "moneyflow": analyze_moneyflow(flows, bars),
        "fundamental": analyze_fundamental(basics or {}),
        "sector": analyze_sector(sector),
        "event": analyze_events(events),
    }
    engine = engine or ScoreEngine()
    scores = {k: v.get("score") for k, v in dims.items()}
    veto = bool(dims["event"].get("veto"))
    veto_reason = dims["event"]["reasons"][-1] if veto else ""
    result = engine.calculate(scores, veto=veto, veto_reason=veto_reason,
                              details={k: v.get("reasons") for k, v in dims.items()})
    missing = result["missing_dimensions"]
    completeness = round(1 - len(missing) / len(dims), 3)
    return {
        "symbol": symbol,
        "name": name or symbol,
        "date": date,
        "dimensions": dims,
        "score": result,
        "data_completeness": completeness,
        "missing_dimensions": [DIMENSION_LABELS[d] for d in missing],
        "conclusion": _conclusion(result, dims, completeness),
        "disclaimer": REPORT_DISCLAIMER,
    }


def _conclusion(result: Dict, dims: Dict, completeness: float) -> Dict:
    """结论: 等级 + 主要驱动 + 主要风险 + 缺数提示(不给出买卖指令)"""
    ranked = sorted(((k, v.get("score")) for k, v in dims.items() if v.get("score") is not None),
                    key=lambda kv: kv[1], reverse=True)
    drivers = [f"{DIMENSION_LABELS[k]} {s:.0f} 分" for k, s in ranked[:2]]
    risks = [f"{DIMENSION_LABELS[k]} {s:.0f} 分" for k, s in ranked[-2:] if s < 50]
    text = f"综合评分 {result['total_score']}（{result['level']}）。"
    if result["veto_flag"]:
        text += f"触发一票否决：{result['veto_reason']}。"
    elif drivers:
        text += "主要支撑来自" + "、".join(drivers) + "。"
    if risks:
        text += "需关注" + "、".join(risks) + "。"
    if completeness < 1:
        text += f"本次缺 {max(0, round((1 - completeness) * 5))} 个维度数据, 结论完整性受影响。"
    return {"text": text, "level": result["level"],
            "drivers": drivers, "risks": risks}


# ─── HTML 渲染 ───────────────────────────────────────────────

_CSS = """
:root{--bg:#f7f8fa;--card:#fff;--fg:#1f2329;--muted:#646a73;--line:#e5e6eb;
--accent:#c62828;--ok:#1f7a4d;--warn:#b26a00}
@media (prefers-color-scheme: dark){
:root{--bg:#15171c;--card:#1e2027;--fg:#e8eaed;--muted:#9aa0a6;--line:#2f333a;
--accent:#ef5350;--ok:#66bb6a;--warn:#ffb74d}}
*{box-sizing:border-box}
body{margin:0;padding:24px;background:var(--bg);color:var(--fg);
font-family:"PingFang SC","Microsoft YaHei",system-ui,sans-serif;line-height:1.65}
.wrap{max-width:960px;margin:0 auto}
header{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:18px 20px}
h1{margin:0 0 6px;font-size:22px}
.meta{color:var(--muted);font-size:13px}
.total{margin-top:12px;font-size:15px}
.total b{font-size:26px;color:var(--accent);margin-right:6px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-top:16px}
section{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 16px}
section h2{margin:0 0 8px;font-size:15px;display:flex;justify-content:space-between;align-items:baseline}
section h2 span{font-size:13px;color:var(--muted);font-weight:400}
ul{margin:6px 0 0;padding-left:18px;font-size:13px;color:var(--fg)}
li{margin:2px 0}
.kv{font-size:13px;color:var(--muted);margin:4px 0}
footer{margin-top:16px;font-size:12px;color:var(--muted)}
.tag{display:inline-block;font-size:12px;padding:1px 8px;border-radius:10px;
border:1px solid var(--line);color:var(--muted)}
"""

_LEVEL_CLASS = {"优秀": "ok", "良好": "ok", "中性": "muted", "回避": "warn", "淘汰": "accent"}


def _esc(value) -> str:
    return html.escape("" if value is None else str(value))


def render_html(report: Dict) -> str:
    """渲染为自包含单文件 HTML(所有动态内容转义, 无外链资源)"""
    score = report.get("score") or {}
    dims = report.get("dimensions") or {}
    rows = []
    for key, label in DIMENSION_LABELS.items():
        d = dims.get(key) or {}
        s = d.get("score")
        shown = "缺数" if s is None else f"{s:.0f}"
        reasons = "".join(f"<li>{_esc(x)}</li>" for x in (d.get("reasons") or []))
        rows.append(f"<section><h2>{_esc(label)}维度 <span>得分 {_esc(shown)}</span></h2>"
                    f"<ul>{reasons or '<li>无可用依据</li>'}</ul></section>")
    conclusion = report.get("conclusion") or {}
    weighted = (score.get("dimensions") or {})
    metrics = ""
    for key, label in DIMENSION_LABELS.items():
        cell = weighted.get(key) or {}
        metrics += (f'<div class="kv">{_esc(label)}: {_esc(cell.get("score"))}'
                    f' (权重 {_esc(cell.get("weight"))})</div>')
    return f"""<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{_esc(report.get('name'))} 五维分析报告</title>
<style>{_CSS}</style></head>
<body><div class="wrap">
<header>
<h1>{_esc(report.get('name'))} <span class="tag">{_esc(report.get('symbol'))}</span></h1>
<div class="meta">报告日期 {_esc(report.get('date'))} · 数据完整度 {_esc(
        f"{float(report.get('data_completeness') or 0):.0%}")}</div>
<div class="total"><b>{_esc(score.get('total_score'))}</b>{_esc(score.get('level'))}
<span class="tag">{_esc('已否决' if score.get('veto_flag') else '正常')}</span></div>
<div class="kv">{_esc(conclusion.get('text'))}</div>
<div class="kv">缺数维度: {_esc('、'.join(report.get('missing_dimensions') or []) or '无')}</div>
</header>
<div class="grid">{''.join(rows)}</div>
<section style="margin-top:14px"><h2>加权明细</h2>{metrics}</section>
<footer>{_esc(report.get('disclaimer'))}</footer>
</div></body></html>"""
