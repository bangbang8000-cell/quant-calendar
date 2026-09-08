#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.2 T-5.0.26: 回测报告导出 (backtest_report.py) — 零外部依赖

- export_csv: 回测结果 → UTF-8 BOM CSV (Excel 直接打开)
- export_html: 回测结果 → 自包含 HTML 报告 (浏览器打印 → PDF)
- save_report: 落盘 (data/reports/), 返回 {path, filename, bytes}
- build_report_sections: 结构化报告节 (指标/净值摘要/基准/稳定性)

测试: tests/test_backtest_report.py。
"""
import io
import logging
import os
from datetime import datetime

logger = logging.getLogger(__name__)

REPORT_DIR_NAME = "reports"


def _fmt_row(label, value):
    return [str(label), str(value)]


_METRIC_LABELS = [("total_return", "总收益率(%)"), ("annual_return", "年化收益率(%)"),
                  ("max_drawdown", "最大回撤(%)"), ("volatility", "年化波动(%)"),
                  ("sharpe_ratio", "夏普比率"), ("win_rate", "胜率(%)"),
                  ("total_days", "回测天数")]
_BENCH_LABELS = [("benchmark_name", "基准"), ("excess_total", "超额收益"),
                 ("information_ratio", "信息比率(IR)"), ("alpha", "Alpha"),
                 ("beta", "Beta"), ("tracking_error", "跟踪误差")]


def build_report_sections(result):
    """结构化报告节: {metrics: {...}, equity: {...}, summary, benchmark, wf}"""
    sec = {
        "metrics": {},
        "equity": {},
        "summary": result.get("message", ""),
    }
    for key in ("total_return", "annual_return", "max_drawdown",
                "volatility", "sharpe_ratio", "win_rate", "total_days"):
        if result.get(key) is not None:
            sec["metrics"][key] = result[key]
    eq = result.get("equity_curve")
    if isinstance(eq, list) and eq:
        sec["equity"] = {"start": eq[0], "end": eq[-1],
                         "length": len(eq), "gain": round(float(eq[-1]) - 1.0, 4)}
    if result.get("benchmark"):
        sec["benchmark"] = result["benchmark"]
    if result.get("wf_supported") or result.get("wf_stable") is not None:
        sec["wf"] = {"stable": result.get("wf_stable"),
                     "cv": result.get("wf_cv"),
                     "mean_oos_total": result.get("wf_mean_oos_total")}
    return sec


def export_csv(result) -> str:
    """回测结果 → CSV (UTF-8 BOM + CRLF, Excel 兼容)。"""
    sec = build_report_sections(result)
    out = io.StringIO()
    out.write("\ufeff")  # BOM
    out.write("量化选股日历 · 回测报告\r\n")
    out.write("策略," + str(result.get("strategy_id", "")) + "\r\n")
    out.write("生成时间," + datetime.now().strftime("%Y-%m-%d %H:%M:%S") + "\r\n")
    out.write("\r\n指标,\r\n")
    for k, label in _METRIC_LABELS:
        if sec["metrics"].get(k) is not None:
            v = sec["metrics"][k]
            v = round(float(v), 4) if isinstance(v, (int, float)) else v
            out.write(",".join(_fmt_row(label, v)) + "\r\n")
    if sec.get("benchmark"):
        b = sec["benchmark"]
        out.write("\r\n基准对比,\r\n")
        for k, label in _BENCH_LABELS:
            if b.get(k) is not None:
                v = b[k]
                v = round(float(v), 4) if isinstance(v, (int, float)) else v
                out.write(",".join(_fmt_row(label, v)) + "\r\n")
    if sec.get("equity"):
        e = sec["equity"]
        out.write("\r\n净值,\r\n")
        out.write("起点," + str(e["start"]) + "\r\n")
        out.write("终点," + str(e["end"]) + "\r\n")
        out.write("累计增益," + str(e["gain"]) + "\r\n")
    return out.getvalue()


def _esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def export_html(result, title="回测报告") -> str:
    """回测结果 → 自包含 HTML (内联 CSS, 无外链, 浏览器可打印为 PDF)。"""
    sec = build_report_sections(result)
    rows = "".join(
        f"<tr><td>{_esc(label)}</td><td>{_esc(round(float(sec['metrics'][k]), 4) if isinstance(sec['metrics'][k], (int, float)) else sec['metrics'][k])}</td></tr>"
        for k, label in _METRIC_LABELS if sec["metrics"].get(k) is not None)
    extra = ""
    if sec.get("benchmark"):
        b = sec["benchmark"]
        extra += "<h3>基准对比</h3><table>"
        for k, label in _BENCH_LABELS:
            if b.get(k) is not None:
                extra += f"<tr><td>{_esc(label)}</td><td>{_esc(round(float(b[k]), 4) if isinstance(b[k], (int, float)) else b[k])}</td></tr>"
        extra += "</table>"
    if sec.get("wf"):
        w = sec["wf"]
        extra += (f"<h3>样本外稳定性</h3><p>stable={w.get('stable')}, "
                  f"cv={w.get('cv')}, mean_oos_total={w.get('mean_oos_total')}</p>")
    if sec.get("equity"):
        e = sec["equity"]
        extra += (f"<h3>净值摘要</h3><p>起点 {e['start']} → 终点 {e['end']} "
                  f"({e['length']} 日, 累计增益 {e['gain']})</p>")
    return (
        "<!DOCTYPE html><html><head><meta charset='utf-8'><title>"
        + _esc(title) + "</title><style>"
        + "body{font-family:sans-serif;margin:32px;color:#1a1a2e}"
        + "h1{font-size:22px}h3{font-size:15px;margin-top:20px}"
        + "table{border-collapse:collapse;margin-top:8px}td,th{border:1px solid #ccc;padding:6px 12px;font-size:13px}"
        + "</style></head><body>"
        + f"<h1>{_esc(title)}</h1>"
        + f"<p>策略: {_esc(result.get('strategy_id', ''))} · "
        + f"生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>"
        + f"<h3>绩效指标</h3><table>{rows}</table>" + extra
        + "</body></html>"
    )


def _report_filename(sid, fmt):
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    return f"backtest_{sid}_{ts}.{fmt}"


def save_report(result, fmt="csv", out_dir=None):
    """报告落盘。fmt: csv|html。返回 {success, path, filename, bytes}。"""
    fmt = (fmt or "csv").lower()
    if fmt not in ("csv", "html"):
        return {"success": False, "message": f"不支持的格式: {fmt} (仅 csv/html)"}
    content = export_csv(result) if fmt == "csv" else export_html(result)
    filename = _report_filename(result.get("strategy_id", "unknown"), fmt)
    directory = out_dir or os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "..", "data", REPORT_DIR_NAME)
    os.makedirs(directory, exist_ok=True)
    path = os.path.join(directory, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    return {"success": True, "path": os.path.abspath(path),
            "filename": filename, "bytes": len(content.encode("utf-8"))}
