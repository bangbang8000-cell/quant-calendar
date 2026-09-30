# -*- coding: utf-8 -*-
"""6.3.5 (BUG-FIX 回归守卫): 密钥「查看 / 编辑」控件必须真的可点击

用户反馈: 系统配置 → AI 服务 / 数据源 里**点击眼睛无法查看密钥、也无法编辑密钥**。

根因（已用 Playwright 在真实浏览器上复现）: 前端 6.9.4 把 ``frontend/lib/element-plus.css``
对齐到 Element Plus 2.14.5 后，该样式表新增了一条

    .el-input.is-disabled .el-input__suffix-inner { pointer-events: none }

密钥输入框锁定态写作 ``:disabled="!xxx._editing"``（默认锁定），而解锁按钮 ``el-button``
与查看眼睛 ``.key-reveal-toggle`` 原先都写在 ``el-input`` 的 ``#suffix`` 插槽里 ——
``pointer-events`` 是可继承属性，二者因此全部继承 ``none``：未解锁时既点不开「编辑密钥」，
也点不开眼睛，形成死锁（实测 ``elementFromPoint`` 返回 null、Playwright click 超时）。

修复口径：**交互控件一律移出禁用输入框的 ``#suffix``**，落在输入框同一行的
``.key-field-row`` 容器内（禁用控件不得承载可交互后代）。

守卫三条:
  ① 三处密钥控件（AI 厂商 API Key / sxsc-tushare Token / tushare Token）落在 .key-field-row 内;
  ② 全前端模板：``disabled`` 的 el-input 不得在 #suffix 内放 el-button / .key-reveal-toggle;
  ③ 展示掩码的密钥输入框必须同时认 `_revealed`（否则验密成功仍显示掩码 = 查看无效）;
  ④ layout.css 定义 .key-field-row（控件移出后的落位样式）。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
SYSTEM_DIR = os.path.join(FRONTEND, "js", "components", "system")

KEY_TEMPLATES = {
    "view-part1.js": ["toggleVendorKeyReveal(v)", "toggleDatasourceEdit('sxsc_tushare')"],
    "view-part2.js": ["toggleDatasourceEdit('tushare')"],
}


def _read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def _iter_js_templates():
    """遍历 frontend/js 下全部模板片段源码"""
    for dirpath, _dirs, files in os.walk(os.path.join(FRONTEND, "js")):
        for name in files:
            if name.endswith(".js"):
                yield os.path.join(dirpath, name)


def test_key_controls_live_in_key_field_row():
    """① 三处密钥的解锁/查看控件必须在 .key-field-row 内（而非 el-input 的 #suffix 插槽）"""
    for name, handlers in KEY_TEMPLATES.items():
        src = _read(os.path.join(SYSTEM_DIR, name))
        assert "key-field-row" in src, f"{name} 缺少 .key-field-row 容器"
        for handler in handlers:
            idx = src.find(handler)
            assert idx != -1, f"{name} 未找到密钥控件回调 {handler}"
            # 回调所在行必须位于 .key-field-row 区块内：取该行前最近的一个 class 容器
            line_start = src.rfind("\n", 0, idx) + 1
            before = src[:line_start]
            row_at = before.rfind('class="key-field-row"')
            assert row_at != -1, f"{name} 的 {handler} 不在 .key-field-row 内"
            # 控件与容器之间不得出现闭合该容器的 </div>（说明控件已跑到容器外）
            assert "</div>" not in src[row_at:line_start], (
                f"{name} 的 {handler} 落在 .key-field-row 之外"
            )


def test_no_interactive_control_in_disabled_input_suffix():
    """② 禁用输入框的 #suffix 内不得出现交互控件（EP 2.14.5 下 suffix 全量 pointer-events:none）"""
    offenders = []
    suffix_re = re.compile(r"<template\s+#suffix>(.*?)</template>", re.S)
    for path in _iter_js_templates():
        src = _read(path)
        for m in suffix_re.finditer(src):
            body = m.group(1)
            if "el-button" not in body and "key-reveal-toggle" not in body:
                continue
            # 找该 #suffix 之前最近的 el-input 开标签，判断其是否禁用
            head = src[: m.start()]
            open_at = head.rfind("<el-input")
            if open_at == -1:
                continue
            tag = head[open_at : head.find(">", open_at) + 1]
            if ":disabled" in tag or re.search(r"\sdisabled[\s>]", tag):
                rel = os.path.relpath(path, BASE)
                offenders.append(f"{rel}: {tag.strip()[:110]}")
    assert not offenders, (
        "禁用 el-input 的 #suffix 内存在交互控件（EP 2.14.5 起 pointer-events:none，必然点不动）:\n"
        + "\n".join(offenders)
    )


def test_key_field_row_style_defined():
    """③ layout.css 必须定义 .key-field-row（输入框占满、按钮/眼睛不收缩）"""
    css = _read(os.path.join(FRONTEND, "css", "layout.css"))
    assert ".key-field-row {" in css, "layout.css 缺少 .key-field-row 规则"
    assert ".key-field-row > .el-input" in css, "layout.css 缺少 .key-field-row > .el-input 规则"
    assert ".key-field-row > .key-reveal-toggle" in css, \
        "layout.css 缺少 .key-field-row > .key-reveal-toggle 规则"


def test_masked_inputs_honour_revealed_state():
    """③ 任何展示 _masked 的密钥输入框都必须同时认 _revealed, 否则「查看完整密钥」验密成功后仍是掩码

    历史缺陷: AI 厂商密钥框写作 ``:model-value="v._editing ? v.api_key : v._masked"`` ——
    眼睛回调 ``toggleVendorKeyReveal`` 只置 ``_revealed``, 输入框不认它, 于是密码验证通过、
    图标已切「收起」, 但框里还是 ``****``（被 #suffix 点不动的问题掩盖过一段时间）。
    """
    offenders = []
    model_re = re.compile(r'<el-input\b[^>]*?:model-value="([^"]*)"[^>]*?>')
    for path in _iter_js_templates():
        src = _read(path)
        for m in model_re.finditer(src):
            expr = m.group(1)
            if "_masked" in expr and "_revealed" not in expr:
                rel = os.path.relpath(path, BASE)
                offenders.append(f"{rel}: {expr[:130]}")
    assert not offenders, (
        "展示掩码的密钥输入框未认 _revealed（查看完整密钥将无效）:\n" + "\n".join(offenders)
    )
