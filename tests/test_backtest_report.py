"""V5.0.2 T-5.0.26: 回测报告导出测试 (复用 report_generator 语义, 零外部依赖)

CSV (UTF-8 BOM, Excel 兼容) + HTML 报告 (浏览器打印 → PDF) + 文件落盘。
"""
import os

import pytest

from backtest_report import (export_csv, export_html, save_report,
                             build_report_sections, _fmt_row)


def _result(**over):
    d = {
        "success": True,
        "strategy_id": "s1",
        "total_return": 12.34,
        "annual_return": 8.5,
        "max_drawdown": -15.2,
        "sharpe_ratio": 1.2,
        "win_rate": 55.0,
        "volatility": 18.0,
        "total_days": 120,
        "message": "回测完成",
    }
    d.update(over)
    return d


class TestCsv:
    def test_has_bom(self):
        csv = export_csv(_result())
        assert csv.startswith("\ufeff")

    def test_header_and_rows(self):
        csv = export_csv(_result())
        assert "指标" in csv and "总收益率" in csv and "12.34" in csv
        assert "年化收益率" in csv and "8.5" in csv

    def test_crlf(self):
        csv = export_csv(_result())
        assert "\r\n" in csv

    def test_benchmark_section(self):
        r = _result(benchmark={"benchmark_name": "沪深300", "excess_total": 0.05,
                               "information_ratio": 0.8})
        csv = export_csv(r)
        assert "超额收益" in csv and "沪深300" in csv


class TestHtml:
    def test_contains_title_and_metrics(self):
        html = export_html(_result(), title="测试报告")
        assert "<html" in html and "测试报告" in html
        assert "12.34" in html and "8.5" in html

    def test_self_contained_no_external_assets(self):
        html = export_html(_result())
        assert "http://" not in html and "https://" not in html

    def test_wf_and_benchmark_optional_sections(self):
        r = _result(wf_stable=True, wf_cv=0.2,
                    benchmark={"excess_total": 0.03})
        html = export_html(r)
        assert "walk-forward" in html or "样本外" in html


class TestSections:
    def test_build_report_sections_keys(self):
        sec = build_report_sections(_result())
        for k in ("metrics", "equity", "summary"):
            assert k in sec
        assert sec["metrics"]["total_return"] == 12.34

    def test_empty_result(self):
        sec = build_report_sections({"success": False, "message": "无数据"})
        assert sec["summary"] == "无数据"


class TestSave:
    def test_save_csv_writes_file(self, tmp_path):
        path = save_report(_result(), "csv", out_dir=str(tmp_path))
        assert path["success"] is True
        assert path["filename"].endswith(".csv")
        assert os.path.exists(path["path"])
        assert path["bytes"] > 0

    def test_save_html_writes_file(self, tmp_path):
        path = save_report(_result(), "html", out_dir=str(tmp_path))
        assert path["success"] is True
        assert path["filename"].endswith(".html")
        assert path["bytes"] > 0

    def test_invalid_fmt(self, tmp_path):
        path = save_report(_result(), "xlsx", out_dir=str(tmp_path))
        assert path["success"] is False

    def test_filename_contains_sid_and_date(self):
        from backtest_report import _report_filename
        fn = _report_filename("s1", "csv")
        assert fn.startswith("backtest_s1") and fn.endswith(".csv")


class TestRowHelper:
    def test_fmt_row(self):
        assert _fmt_row("a", "b") == ["a", "b"]
