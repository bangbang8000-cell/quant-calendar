# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.5.5 / FR-5.3.5.5): 报表模板化 + HTML 导出

- export_html: Markdown → 自包含 HTML (无乱码, 可浏览器打开)
- reports.py 支持 fmt=html
- 模板一致: 报表用 report_center.render_report 统一编排
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

from report_export import export_html, _md_to_html  # noqa: E402


def test_md_to_html_headings():
    h = _md_to_html("# 标题\n\n## 子标题\n")
    assert "<h1>标题</h1>" in h
    assert "<h2>子标题</h2>" in h


def test_md_to_html_table():
    h = _md_to_html("| 代码 | 名称 |\n| --- | --- |\n| 600000 | 浦发 |\n")
    assert "<table>" in h
    assert "<td>600000</td>" in h
    assert "<td>浦发</td>" in h


def test_export_html_writes_utf8(tmp_path):
    out = tmp_path / "report.html"
    r = export_html(str(out), "# 测试报表\n\n| A | B |\n| 1 | 2 |\n")
    assert r["format"] == "html"
    data = out.read_bytes()
    assert b"utf-8" in data.lower() or b"charset" in data.lower(), "应声明 UTF-8"
    assert "<html" in data.decode("utf-8", "replace")
    # 中文无乱码
    assert "测试报表" in out.read_text(encoding="utf-8")


def test_export_report_html_branch(tmp_path):
    from report_export import export_report
    out = tmp_path / "report.html"
    r = export_report("# 日报\n\n正文", "html", str(out))
    assert r["format"] == "html"
    assert out.exists()


def test_reports_api_supports_html():
    """reports.py 导出 API 支持 fmt=html"""
    src = open(os.path.join(BASE, "backend", "api", "v1", "reports.py"), encoding="utf-8").read()
    assert "text/html" in src, "html media_type 缺失"
    assert "'html'" in src or '"html"' in src, "html fmt 分支缺失"
