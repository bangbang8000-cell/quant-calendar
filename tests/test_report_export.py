"""V5.5 T-5.5.2: 报表导出 PDF/Excel 测试 (TEST-PLAN 6.1 test_report_export.py)

导出结构校验 (可打开/含关键数据)。零外部依赖: xlsx 手写 zip+XML, pdf 手写最小 PDF。
"""
import io
import os
import sys
import tempfile
import zipfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from report_export import (export_excel, export_pdf, export_report,
                           markdown_to_rows)


@pytest.fixture
def tmp():
    d = tempfile.mkdtemp()
    return d


def _sample_report():
    return ("# 量化选股日报 2026-01-05\n"
            "> 统计日期: 2026-01-05\n"
            "## 二、策略持仓\n"
            "- **策略A** (2 只): 600519.SH、000001.SZ\n"
            "## 五、组合风险\n"
            "- 年化波动率: 0.25\n"
            "- 夏普比率: 1.3\n")


class TestExcel:
    def test_creates_xlsx_zip(self, tmp):
        path = os.path.join(tmp, "r.xlsx")
        export_excel(path, [{"name": "Sheet1", "rows": [["a", 1], ["b", 2]]}])
        assert zipfile.is_zipfile(path)

    def test_xlsx_has_required_parts(self, tmp):
        path = os.path.join(tmp, "r.xlsx")
        export_excel(path, [{"name": "Sheet1", "rows": [["a", 1]]}])
        with zipfile.ZipFile(path) as z:
            names = z.namelist()
            assert "xl/workbook.xml" in names
            assert any(n.startswith("xl/worksheets/sheet") for n in names)

    def test_xlsx_contains_data(self, tmp):
        path = os.path.join(tmp, "r.xlsx")
        export_excel(path, [{"name": "Sheet1",
                             "rows": [["股票", "涨跌幅"], ["600519.SH", "6.5"]]}])
        with zipfile.ZipFile(path) as z:
            sheet = [n for n in z.namelist() if n.startswith("xl/worksheets/sheet")]
            xml = z.read(sheet[0]).decode("utf-8")
            assert "600519.SH" in xml and "6.5" in xml

    def test_multiple_sheets(self, tmp):
        path = os.path.join(tmp, "r.xlsx")
        export_excel(path, [{"name": "S1", "rows": [["a"]]},
                            {"name": "S2", "rows": [["b"]]}])
        with zipfile.ZipFile(path) as z:
            sheets = [n for n in z.namelist() if n.startswith("xl/worksheets/sheet")]
            assert len(sheets) == 2

    def test_empty_sheet_ok(self, tmp):
        path = os.path.join(tmp, "r.xlsx")
        export_excel(path, [{"name": "S", "rows": []}])
        assert zipfile.is_zipfile(path)

    def test_xml_escape(self, tmp):
        path = os.path.join(tmp, "r.xlsx")
        export_excel(path, [{"name": "S", "rows": [["a<b&c"]]}])
        with zipfile.ZipFile(path) as z:
            sheet = [n for n in z.namelist() if n.startswith("xl/worksheets/sheet")]
            xml = z.read(sheet[0]).decode("utf-8")
            assert "&lt;" in xml and "<b" not in xml


class TestPdf:
    def test_creates_valid_pdf(self, tmp):
        path = os.path.join(tmp, "r.pdf")
        export_pdf(path, ["line1", "line2"])
        with open(path, "rb") as f:
            data = f.read()
        assert data.startswith(b"%PDF-1.4")
        assert b"%%EOF" in data

    def test_pdf_xref_valid(self, tmp):
        path = os.path.join(tmp, "r.pdf")
        export_pdf(path, ["hello"])
        with open(path, "rb") as f:
            data = f.read()
        # trailer 包含 xref 偏移且偏移处是 "xref"
        assert b"trailer" in data
        idx = data.rfind(b"startxref")
        off = int(data[idx + len(b"startxref"):].strip().split(b"\n")[0].strip())
        assert data[off:off + 4] == b"xref"

    def test_pdf_contains_ascii_data(self, tmp):
        path = os.path.join(tmp, "r.pdf")
        export_pdf(path, ["600519.SH +6.5%", "夏普 1.3"])
        with open(path, "rb") as f:
            data = f.read()
        assert b"600519.SH" in data and b"6.5" in data

    def test_pdf_multiline(self, tmp):
        path = os.path.join(tmp, "r.pdf")
        export_pdf(path, ["a", "b", "c"])
        with open(path, "rb") as f:
            data = f.read()
        assert b"Tj" in data  # 文本对象存在


class TestExportReport:
    def test_export_excel_from_report(self, tmp):
        path = os.path.join(tmp, "r.xlsx")
        export_report(_sample_report(), fmt="excel", path=path)
        assert zipfile.is_zipfile(path)
        with zipfile.ZipFile(path) as z:
            sheet = [n for n in z.namelist() if n.startswith("xl/worksheets/sheet")]
            xml = z.read(sheet[0]).decode("utf-8")
            assert "600519.SH" in xml

    def test_export_pdf_from_report(self, tmp):
        path = os.path.join(tmp, "r.pdf")
        export_report(_sample_report(), fmt="pdf", path=path)
        with open(path, "rb") as f:
            data = f.read()
        assert data.startswith(b"%PDF-1.4")
        assert b"600519.SH" in data

    def test_export_unknown_format(self, tmp):
        path = os.path.join(tmp, "r.x")
        with pytest.raises(ValueError):
            export_report(_sample_report(), fmt="doc", path=path)


class TestMarkdownToRows:
    def test_headers_to_sections(self):
        rows = markdown_to_rows("# 标题\n## 一、周期\na\n## 二、策略\nb")
        assert any(r[0] == "一、周期" for r in rows)
        assert any(r[0] == "二、策略" for r in rows)

    def test_table_lines_to_cells(self):
        rows = markdown_to_rows("| a | b |\n| 1 | 2 |")
        assert ("a", "b") in rows or ["a", "b"] in rows

    def test_no_empty_rows(self):
        rows = markdown_to_rows("")
        assert rows == []
