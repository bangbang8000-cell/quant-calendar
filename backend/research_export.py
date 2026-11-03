#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""研究报告导出：单文件离线 HTML (v7.1.0 / B5.3, PRD FR-7.1.2)

产物要求（来自最佳实践 §4.1）：
- **单文件、内联一切**（CSS + 图表 + 数据 + JS），断网可打开、可交互
- 强制尾注四要素（数据时间 / 来源 endpoint / 计算口径 / 非投资建议）
- **不得包含**：凭据、预签名 URL、全市场原始明细
"""

import html
import json
import logging
import os

import disclosure_terms as dt

logger = logging.getLogger(__name__)

_CSS = """
:root{--bg:#f7f7f5;--panel:#fff;--ink:#1c1917;--muted:#78716c;--line:#e7e5e4;
--accent:#c2410c;--up:#b91c1c;--down:#15803d;}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
font-family:Inter,system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;
font-size:14px;line-height:1.5}
.wrap{max-width:1120px;margin:0 auto;padding:32px 24px 64px}
h1{font-size:22px;font-weight:600;margin:0 0 4px}
.sub{color:var(--muted);font-size:12px;margin-bottom:24px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:20px;margin-bottom:20px}
table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
th,td{padding:6px 8px;border-bottom:1px solid var(--line);text-align:right;font-size:13px}
th:first-child,td:first-child{text-align:left}
th{color:var(--muted);font-weight:500;cursor:pointer;user-select:none;white-space:nowrap}
th:hover{color:var(--ink)}
.up{color:var(--up)}.down{color:var(--down)}
.bar{display:inline-block;height:8px;border-radius:2px;background:var(--accent);vertical-align:middle}
.qc-footer-meta{margin-top:28px;padding-top:12px;border-top:1px solid var(--line);
color:var(--muted);font-size:12px}
"""

_JS = """
(function(){
  function num(s){var v=parseFloat(String(s).replace(/[^0-9.\\-]/g,''));return isNaN(v)?null:v;}
  document.querySelectorAll('th[data-sort]').forEach(function(th){
    th.addEventListener('click',function(){
      var table=th.closest('table'),idx=Array.prototype.indexOf.call(th.parentNode.children,th);
      var tbody=table.tBodies[0];
      var rows=Array.prototype.slice.call(tbody.rows);
      var dir=th.dataset.dir==='asc'?-1:1;th.dataset.dir=dir===1?'desc':'asc';
      rows.sort(function(a,b){
        var x=num(a.cells[idx].textContent),y=num(b.cells[idx].textContent);
        if(x===null&&y===null)return 0; if(x===null)return 1; if(y===null)return -1;
        return (x-y)*dir;
      });
      rows.forEach(function(r){tbody.appendChild(r);});
    });
  });
})();
"""


def _esc(v):
    return html.escape(str(v if v is not None else ''))


def _fmt(v, digits=2, suffix=''):
    if v is None or v == '':
        return '—'
    try:
        return ('%.' + str(digits) + 'f') + suffix
    except (TypeError, ValueError):
        return _esc(v)


def _bar(value, scale=20.0):
    """用内联 div 画横条（无外部图表库）。"""
    try:
        w = max(0, min(140, int(abs(float(value)) / scale * 100)))
    except (TypeError, ValueError):
        return ''
    return '<span class="bar" style="width:%dpx"></span>' % w


def render_industry_matrix(matrix, title='行业强度作战矩阵'):
    """把 industry_strength 的结果渲染成单文件离线 HTML 字符串。"""
    rows = (matrix or {}).get('rows') or []
    meta = (matrix or {}).get('meta') or {}
    _default_caliber = ('相对强度 = 行业 N 日涨幅 − 全行业中位数；加速度 = rel_5 − rel_20；'
                        '成交额脉冲 = 近5日均额 ÷ 近20日均额；当前成分等权涨跌为等权涨跌代理')
    footer = dt.build_footer(
        (matrix or {}).get('generated_at') or '',
        meta.get('endpoints') or [],
        # 调用方提供的口径优先（便于逐看板定制），缺省用本看板默认口径
        meta.get('caliber') or _default_caliber,
        mode=dt.MODE_REAL if rows else dt.MODE_NO_DATA,
    )
    body_rows = []
    for r in sorted(rows, key=lambda x: -(x.get('rel', {}).get('rel_20') or 0)):
        rel = r.get('rel') or {}
        acc = r.get('acceleration')
        cls = 'up' if (rel.get('rel_20') or 0) > 0 else 'down'
        body_rows.append(
            '<tr><td>%s</td><td>%s</td><td class="%s">%s %s</td><td>%s</td><td>%s</td>'
            '<td>%s</td><td>%s</td><td>%s</td></tr>' % (
                _esc(r.get('name')), _esc(r.get('index_code')),
                cls, _fmt(rel.get('rel_20'), 2, '%'), _bar(rel.get('rel_20') or 0),
                _fmt(rel.get('rel_5'), 2, '%'), _fmt(acc, 2, '%'),
                _fmt(r.get('volume_pulse'), 3), _fmt(r.get('rank_20'), 0),
                _fmt(r.get('rank_change'), 0)))
    data_json = json.dumps(
        [{k: r.get(k) for k in ('index_code', 'name', 'rel', 'acceleration',
                                'volume_pulse', 'rank_20', 'rank_change')}
         for r in rows], ensure_ascii=False)
    doc = """<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>%(title)s</title><style>%(css)s</style></head>
<body><div class="wrap">
<h1>%(title)s</h1>
<div class="sub">覆盖 %(covered)d / %(requested)d 个同花顺行业 · 生成于 %(generated)s</div>
<div class="card">
<table>
<thead><tr>
<th data-sort>行业</th><th data-sort>代码</th><th data-sort>相对强度(20日)</th>
<th data-sort>相对强度(5日)</th><th data-sort>加速度</th><th data-sort>成交额脉冲</th>
<th data-sort>20日排名</th><th data-sort>排名变化</th>
</tr></thead>
<tbody>%(rows)s</tbody></table>
</div>
%(footer)s
</div>
<script type="application/json" id="qc-data">%(data)s</script>
<script>%(js)s</script>
</body></html>""" % {
        'title': _esc(title), 'css': _CSS, 'js': _JS,
        'covered': len(rows), 'requested': int((matrix or {}).get('requested') or len(rows)),
        'generated': _esc((matrix or {}).get('generated_at') or ''),
        'rows': ''.join(body_rows) or '<tr><td colspan="8">未取到数据</td></tr>',
        'footer': dt.footer_html(footer),
        'data': data_json.replace('</', '<\\/'),
    }
    return doc, footer


def export_industry_matrix(matrix, path, title='行业强度作战矩阵'):
    """写出单文件离线 HTML，并做导出前口径与泄露检查。"""
    doc, footer = render_industry_matrix(matrix, title)
    check = dt.check_export_text(doc)
    if not check['ok']:
        raise ValueError('导出物不合格: 违规=%r 缺项=%r'
                         % ([h['term'] for h in check['violations']], check['missing']))
    if 'sk-fuyao' in doc or 'HITHINK_FINANCE_API_KEY' in doc:
        raise ValueError('导出物疑似包含凭据，已中止')
    if 'presigned_url' in doc or 'AWSAccessKeyId' in doc:
        raise ValueError('导出物包含预签名下载链接，已中止')
    os.makedirs(os.path.dirname(path) or '.', exist_ok=True)
    tmp = path + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(doc)
    os.replace(tmp, path)
    return {'path': path, 'bytes': os.path.getsize(path),
            'rows': len((matrix or {}).get('rows') or []),
            'footer': footer}


def is_self_contained(doc):
    """自检：无外链资源（script src / link href / img src 远程）。"""
    lowered = (doc or '').lower()
    for bad in ('<script src=', '<link rel="stylesheet"', 'src="http'):
        if bad in lowered:
            return False
    return True
