# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.5): 页面源码重建 —— 结构分治后保持历史用例的源码断言有效

结构分治把页面模板搬移到同目录片段模块，注册文件里的 ``template:`` 改为引用
（``template: window.__quantModules.<域>.<页面>``）。历史用例直接读注册文件源码，
并对模板文案 / ``<!-- 标记 -->`` 区间 / 内联样式做断言 —— 若不放行会整体失效。

本模块把注册文件中的 ``template:`` 引用**原位替换**为解析出的模板内容：
重建结果与拆分前的源码逐字符一致（片段按 ``+`` 顺序拼接即原模板，见
``behavior_parity.TemplateResolver``），因此既有断言无需改写。

用法（在各测试文件的读取辅助函数首行插入委派）::

    _b = page_source.bundle(rel)
    if _b is not None:
        return _b

无需重建（字面量模板 / 文件不存在 / 解析不到引用）时返回 ``None``，调用方
退回原读取逻辑，行为不变。
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import behavior_parity as bp  # noqa: E402

BASE = bp.BASE
FRONTEND = bp.FRONTEND
JS_ROOT = os.path.join(FRONTEND, "js")

# ``template:`` 后到行尾/逗号（拆分后为单行引用，故取到逗号即可）
_TPL_HEAD_RE = re.compile(r"template:\s*([^,\n]+)")

# 6.3.0 (T-6.3.0.6~.9): 页面注册文件的逻辑域片段（注册文件 setup body 的内聚域下沉）。
# 历史用例把「页面源码」当作单文件来断言（标识符存在性 / 固定缩进函数体 / 结构约定），
# 分治后这些断言的对象实际是「注册文件 + 域片段」。故按表中顺序把片段**前置**拼接：
#   - 前置可保证注册文件的 ``setup()`` / ``return {`` 切片约定不受片段影响
#     （见 test_frontend_consistency.test_page_components_template_calls_resolve）
#   - 片段保留原缩进，故依赖固定缩进的正则（如 ``\n      }``）仍可命中
_LOGIC_SIDECARS = {
    "frontend/js/components/research-page.js": [
        "frontend/js/components/research/logic-market-review.js",
        "frontend/js/components/research/logic-factor.js",
        "frontend/js/components/research/logic-history.js",
    ],
    # 无模板的纯逻辑域模块（整份 setup body 分治）：片段顺序与装配顺序无关，
    # 只要保证「同名前缀唯一」——历史用例以 wl.index(...) 取首个命中即可。
    "frontend/js/watchlist.js": [
        "frontend/js/watchlist/history.js",
        "frontend/js/watchlist/list.js",
        "frontend/js/watchlist/analytics.js",
        "frontend/js/watchlist/realtime.js",
    ],
}

_texts = None
_resolver = None


def _load():
    """读取 frontend/js 全部源码并建立模板常量符号表（首次调用时构建，随后复用）"""
    global _texts, _resolver
    if _texts is None:
        texts = {}
        for dirpath, dirnames, filenames in os.walk(JS_ROOT):
            dirnames[:] = [d for d in dirnames if d not in ("node_modules", "vendor")]
            for fn in filenames:
                if not fn.endswith(".js"):
                    continue
                path = os.path.normpath(os.path.join(dirpath, fn))
                try:
                    with io.open(path, encoding="utf-8") as f:
                        texts[path] = f.read()
                except (OSError, UnicodeDecodeError):
                    continue
        _texts = texts
        _resolver = bp.TemplateResolver(texts)
    return _texts, _resolver


def abspath(rel):
    """相对路径归一：``frontend/...`` 相对仓库根，其余相对 frontend 根；绝对路径原样

    返回值统一经 ``os.path.normpath``，与 ``_load`` 中源码表的键保持同一形态。
    """
    p = str(rel).replace("\\", "/")
    if os.path.isabs(p):
        return os.path.normpath(p)
    if p.startswith("frontend/"):
        return os.path.normpath(os.path.join(BASE, p))
    return os.path.normpath(os.path.join(FRONTEND, p))


def _rel_key(path):
    """绝对路径 → 仓库根相对 posix 路径（用于查片段表）"""
    return os.path.relpath(path, BASE).replace("\\", "/")


def _sidecar_prefix(rel_key, texts):
    """页面注册文件的逻辑域片段拼接（无片段时返回空串）"""
    names = _LOGIC_SIDECARS.get(rel_key)
    if not names:
        return ""
    return "".join(texts.get(abspath(n), "") for n in names)


def bundle(rel):
    """返回重建后的源码；无需重建时返回 ``None``"""
    path = abspath(rel)
    texts, resolver = _load()
    text = texts.get(path)
    if text is None:
        return None
    prefix = _sidecar_prefix(_rel_key(path), texts)
    m = _TPL_HEAD_RE.search(text)
    tpl = None
    if m is not None:
        expr = m.group(1).strip()
        if not expr.startswith("`"):
            tpl = resolver.resolve(expr, path)
    if tpl is None:
        # 字面量模板 / 解析不到引用：仅在存在逻辑域片段时前置拼接，否则按原行为返回 None
        return (prefix + text) if prefix else None
    return prefix + text[:m.start()] + "template: `" + tpl + "`" + text[m.end():]


def read(rel):
    """读取源码：可重建的走重建，其余读原文件（等价于原 ``open(...).read()``）"""
    rebuilt = bundle(rel)
    if rebuilt is not None:
        return rebuilt
    with io.open(abspath(rel), encoding="utf-8") as f:
        return f.read()