#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.5 T-5.0.52: 报表导出 PDF/Excel (report_export.py)

零外部依赖 (锁文件门禁, 不使用 openpyxl/reportlab):
- export_excel(path, sheets): 手写最小有效 .xlsx (zipfile + XML)
- export_pdf(path, lines): 手写最小有效 .pdf (标准 14 字体, ASCII 数据完整渲染, 中文替换为 '?')
- markdown_to_rows(md): Markdown → 表格行 (区块标题入列)
- export_report(md, fmt, path): 统一入口 (excel/pdf)

测试: tests/test_report_export.py (TEST-PLAN 6.1 导出结构校验)。
"""
import logging
import os
import re
import zipfile

logger = logging.getLogger(__name__)

_PDF_LINE_HEIGHT = 16
_PDF_MARGIN = 50
_PDF_PAGE_HEIGHT = 842
_PDF_PAGE_WIDTH = 595


# ---- Excel (手写最小 xlsx) ----

def _xml_escape(s):
    s = str(s)
    return (s.replace("&", "&amp;").replace("<", "&lt;")
             .replace(">", "&gt;").replace('"', "&quot;").replace("'", "&apos;"))


def _col_letter(idx):
    s = ""
    idx += 1
    while idx:
        idx, rem = divmod(idx - 1, 26)
        s = chr(65 + rem) + s
    return s


def _sheet_xml_rows(rows):
    row_xml = []
    for r, row in enumerate(rows or []):
        cell_xml = []
        for c, val in enumerate(row):
            ref = _col_letter(c) + str(r + 1)
            if isinstance(val, (int, float)) and not isinstance(val, bool):
                cell_xml.append('<c r="' + ref + '"><v>' + str(val) + '</v></c>')
            else:
                cell_xml.append('<c r="' + ref + '" t="inlineStr"><is><t>'
                                + _xml_escape(val) + '</t></is></c>')
        row_xml.append('<row r="' + str(r + 1) + '">' + "".join(cell_xml) + "</row>")
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
            '<sheetData>' + "".join(row_xml) + '</sheetData></worksheet>')


def export_excel(path, sheets):
    if not sheets:
        sheets = [{"name": "Sheet1", "rows": []}]
    content_types = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
        '<Default Extension="xml" ContentType="application/xml"/>'
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
        '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        '</Types>')
    rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
            '</Relationships>')
    wb = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
          '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
          'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
          '<sheets>'
          + "".join('<sheet name="' + _xml_escape(s.get("name", "Sheet"))
                    + '" sheetId="' + str(i + 1) + '" r:id="rId' + str(i + 1) + '"/>'
                    for i, s in enumerate(sheets))
          + '</sheets></workbook>')
    wb_rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
               + "".join('<Relationship Id="rId' + str(i + 1)
                         + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet'
                         + str(i + 1) + '.xml"/>' for i in range(len(sheets)))
               + '</Relationships>')
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", content_types)
        z.writestr("_rels/.rels", rels)
        z.writestr("xl/workbook.xml", wb)
        z.writestr("xl/_rels/workbook.xml.rels", wb_rels)
        for i, s in enumerate(sheets):
            z.writestr("xl/worksheets/sheet" + str(i + 1) + ".xml",
                       _sheet_xml_rows(s.get("rows") or []))
    return path


# ---- PDF (手写最小有效 PDF) ----

def _pdf_escape(s):
    return str(s).replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def _pdf_line_text(line):
    try:
        line.encode("latin-1")
        return line
    except UnicodeEncodeError:
        return "".join(ch if ord(ch) < 256 else "?" for ch in line)


def export_pdf(path, lines, title=None):
    lines = list(lines or [])
    if title:
        lines = [title, ""] + lines
    pages = []
    page_lines = []
    y = _PDF_PAGE_HEIGHT - _PDF_MARGIN
    for line in lines:
        if y <= _PDF_MARGIN:
            pages.append(page_lines)
            page_lines = []
            y = _PDF_PAGE_HEIGHT - _PDF_MARGIN
        page_lines.append((y, _pdf_line_text(line)))
        y -= _PDF_LINE_HEIGHT
    if page_lines or not pages:
        pages.append(page_lines)

    objects = [None]
    objects.append("<< /Type /Catalog /Pages 2 0 R >>")
    kids = " ".join(str(3 + i) + " 0 R" for i in range(len(pages)))
    objects.append("<< /Type /Pages /Kids [" + kids + "] /Count "
                   + str(len(pages)) + " >>")
    font_obj = 3 + len(pages)
    for i, p in enumerate(pages):
        content_obj = font_obj + 1 + i
        objects.append("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 "
                       + str(_PDF_PAGE_WIDTH) + " " + str(_PDF_PAGE_HEIGHT)
                       + "] /Resources << /Font << /F1 " + str(font_obj)
                       + " 0 R >> >> /Contents " + str(content_obj) + " 0 R >>")
    objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    for p in pages:
        stream = "BT /F1 12 Tf 0.1 Tw\n" + "".join(
            str(_PDF_MARGIN) + " " + str(yy) + " Td (" + _pdf_escape(txt)
            + ") Tj\n0 -" + str(_PDF_LINE_HEIGHT) + " Td\n" for yy, txt in p) + "ET"
        stream_bytes = stream.encode("latin-1")
        objects.append(("<< /Length " + str(len(stream_bytes)) + " >>\nstream\n")
                       .encode("latin-1") + stream_bytes + b"\nendstream")

    out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = [0]
    for i, obj in enumerate(objects[1:], start=1):
        offsets.append(len(out))
        if isinstance(obj, bytes):
            out += (str(i) + " 0 obj\n").encode("latin-1") + obj + b"\nendobj\n"
        else:
            out += (str(i) + " 0 obj\n" + obj + "\nendobj\n").encode("latin-1")
    xref_pos = len(out)
    out += ("xref\n0 " + str(len(objects)) + "\n").encode("latin-1")
    out += b"0000000000 65535 f \n"
    for off in offsets[1:]:
        out += ("%010d 00000 n \n" % off).encode("latin-1")
    out += ("trailer\n<< /Size " + str(len(objects)) + " /Root 1 0 R >>\n"
            "startxref\n" + str(xref_pos) + "\n%%EOF\n").encode("latin-1")

    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "wb") as f:
        f.write(bytes(out))
    return path


# ---- Markdown -> 表格 / 统一入口 ----

def markdown_to_rows(md):
    rows = []
    for line in (md or "").split("\n"):
        line = line.strip()
        if not line:
            continue
        m = re.match(r"^##\s+(.+)$", line)
        if m:
            rows.append([m.group(1).strip(), ""])
            continue
        if line.startswith("|") and line.endswith("|"):
            cells = [c.strip().strip("\u0060") for c in line.strip("|").split("|")]
            if not all(c in ("", "---", "----", "-----", "------") for c in cells):
                rows.append(cells)
            continue
        plain = re.sub(r"[*_\u0060>#-]", "", line).strip()
        if plain:
            rows.append([plain, ""])
    return rows


def export_report(markdown, fmt, path):
    fmt = (fmt or "").lower()
    if fmt == "excel":
        sheets = [{"name": "报表", "rows": markdown_to_rows(markdown)}]
        return export_excel(path, sheets)
    if fmt == "pdf":
        return export_pdf(path, markdown.split("\n"))
    raise ValueError("未知导出格式: " + str(fmt))
