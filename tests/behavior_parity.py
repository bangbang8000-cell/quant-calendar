# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.1): 通用行为对拍基座

拆分（结构分治）不承载功能变更，因此拆分前先固化「拆分前行为」，拆分后逐项一致。
本模块提供两类对拍能力：

1. 纯函数对拍 — ``capture`` 对一组输入调用实现，记录返回值或异常类型；``assert_parity``
   比较拆分前后的记录，差异以「第 N 项 + 期望值 + 实际值」输出，便于定位。
2. 模块对拍 — ``node_run`` 在 Node 环境加载前端纯逻辑模块并取回 JSON 结果；
   ``js_component_fingerprints`` 采集前端组件的公开面（注册名 / 模板指纹 / 插值键 /
   图标 / 指令 / setup 返回键），``py_import_surface`` 与 ``py_class_surface``
   采集后端聚合类与原导入路径的公开名。

黄金快照存放在 ``tests/parity_golden/<name>.json``，由 ``save_golden`` 在拆分前捕获。
"""
import ast
import hashlib
import importlib
import io
import json
import os
import re
import shutil
import subprocess
import sys
import time

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
BACKEND = os.path.join(BASE, "backend")
TESTS = os.path.dirname(os.path.abspath(__file__))
GOLDEN_DIR = os.path.join(TESTS, "parity_golden")

NEEDS_NODE = shutil.which("node") is None


# ─── 归一化与差异报告 ─────────────────────────────────────────

def normalize(value):
    """把任意返回值规整为 JSON 可序列化结构（集合排序、元组转列表、其余取 repr）"""
    if value is None or isinstance(value, (bool, int, float, str)):
        return value
    if isinstance(value, dict):
        return {str(k): normalize(v) for k, v in sorted(value.items(), key=lambda kv: str(kv[0]))}
    if isinstance(value, (list, tuple)):
        return [normalize(v) for v in value]
    if isinstance(value, (set, frozenset)):
        items = [normalize(v) for v in value]
        return sorted(items, key=lambda x: json.dumps(x, sort_keys=True, ensure_ascii=False))
    if hasattr(value, "isoformat"):
        return value.isoformat()
    return repr(value)


def _brief(value, limit=200):
    text = json.dumps(value, ensure_ascii=False, sort_keys=True)
    return text if len(text) <= limit else text[:limit] + "..."


def diff_report(expected, actual, limit=20):
    """逐项比较并返回可读差异行；空列表表示完全一致"""
    lines = []
    if len(expected) != len(actual):
        lines.append("条目数不一致: 期望 %d 实际 %d" % (len(expected), len(actual)))
    for i, (exp, act) in enumerate(zip(expected, actual)):
        if exp != act:
            lines.append("第 %d 项不一致:\n  期望 %s\n  实际 %s" % (i, _brief(exp), _brief(act)))
        if len(lines) >= limit:
            lines.append("... 差异较多, 已截断")
            break
    return lines


def assert_parity(label, expected, actual):
    """断言两份对拍记录一致，失败时输出差异明细"""
    diff = diff_report(expected, actual)
    assert not diff, "行为对拍不一致 [%s]:\n%s" % (label, "\n".join(diff))


def capture(fn, cases):
    """对同一函数跑一组输入，记录返回值或异常类型（不吞异常，只归类）"""
    out = []
    for case in cases:
        args = list(case) if isinstance(case, (list, tuple)) else [case]
        try:
            out.append({"case": normalize(args), "ok": True, "out": normalize(fn(*args))})
        except Exception as exc:  # noqa: BLE001 — 对拍需要记录异常类型而非中断
            out.append({"case": normalize(args), "ok": False, "error": type(exc).__name__})
    return out


# ─── 黄金快照读写 ─────────────────────────────────────────────

def golden_file(name):
    return os.path.join(GOLDEN_DIR, name + ".json")


def has_golden(name):
    return os.path.exists(golden_file(name))


def load_golden(name):
    with io.open(golden_file(name), encoding="utf-8") as f:
        return json.load(f)


def save_golden(name, payload):
    """拆分前捕获用；仅在显式重建基线时调用"""
    if not os.path.isdir(GOLDEN_DIR):
        os.makedirs(GOLDEN_DIR)
    with io.open(golden_file(name), "w", encoding="utf-8", newline="\n") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2, sort_keys=True)
        f.write("\n")


# ─── 前端：Node 模块对拍 ──────────────────────────────────────

def node_run(module_js, script, timeout=20):
    """在 Node 中 require 指定模块，执行 script（可用 M 引用模块），取回 JSON 结果"""
    code = ("const M = require(process.argv[1]);\n"
            "(async () => {\n"
            "  const out = await (async function(){\n" + script + "\n  })();\n"
            "  process.stdout.write(JSON.stringify(out));\n"
            "})();\n")
    proc = subprocess.run(["node", "-e", code, module_js],
                          capture_output=True, text=True, timeout=timeout)
    assert proc.returncode == 0, "node 执行失败: %s" % proc.stderr
    return json.loads(proc.stdout)


# ─── 前端：组件公开面指纹 ─────────────────────────────────────

_COMPONENT_RE = re.compile(r"window\.__quantComponents\.([A-Za-z_$][\w$]*)\s*=\s*\{")
_CLASS_RE = re.compile(r'class="([^"]*)"')
_ICON_RE = re.compile(r'<qc-icon[^>]*\bname="([^"]+)"')
_I18N_RE = re.compile(r"\bt\(\s*'([^']+)'")
_DIRECTIVE_RE = re.compile(r"\s(v-if|v-else-if|v-else|v-for|v-show|v-model|v-bind|v-on|v-html|v-text|v-slot)(?=[\s=:>])")
_SPREAD_RE = re.compile(r"\.\.\.\s*([A-Za-z_$][\w$]*)")

# 模板值表达式（取 `template:` 后到行尾/逗号，兼容 ``template: ` `` 多行字面量）
_TPL_EXPR_RE = re.compile(r"template:\s*([^,\n]+)")
# 全局挂载点赋值: window.__quantModules.<域>.<名> = <表达式>;
_GLOBAL_ASSIGN_RE = re.compile(
    r"window\.__quantModules\.([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*=(?!=)\s*([^;]+);")
# 同文件顶层常量: const/let/var <名> = <表达式>;
_LOCAL_CONST_RE = re.compile(
    r"(?:^|[;{}\s])(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=(?!=)\s*([^;]+);", re.M)


def _split_top_level_plus(expr):
    """按顶层 ``+`` 切分表达式（跳过字符串/模板串与括号内部）"""
    parts = []
    depth = 0
    quote = None
    esc = False
    start = 0
    for i, ch in enumerate(expr):
        if quote:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == quote:
                quote = None
            continue
        if ch in "\"'`":
            quote = ch
        elif ch in "([{":
            depth += 1
        elif ch in ")]}":
            depth -= 1
        elif ch == "+" and depth == 0:
            parts.append(expr[start:i])
            start = i + 1
    parts.append(expr[start:])
    return [p for p in (x.strip() for x in parts) if p]


class TemplateResolver:
    """把 ``template:`` 的值表达式解析为模板字符串。

    结构分治（6.3.0 T-6.3.0.5~.10）把大模板搬移到页面目录下的片段模块，
    注册处改写成 ``template: window.__quantModules.<域>.<名>``（片段常量以
    ``+`` 顺序拼接）。本解析器沿引用回溯并按 ``+`` 拼接，取回的字符串与拆分前
    逐字符一致 —— 因此模板指纹（sha / 长度 / 类名 / 图标 / 插值键 / 指令）
    仍逐项严格对拍，不因落点变化而放行。

    解析不到时返回 ``None``，调用方退回「首个反引号字面量」的原行为。
    """

    def __init__(self, texts):
        self.texts = texts
        self.globals = {}
        self.locals = {}  # (path, name) -> 表达式
        for path, text in texts.items():
            for m in _GLOBAL_ASSIGN_RE.finditer(text):
                self.globals[m.group(1)] = m.group(2).strip()
            for m in _LOCAL_CONST_RE.finditer(text):
                self.locals[(path, m.group(1))] = m.group(2).strip()

    def resolve(self, expr, path, depth=0):
        expr = (expr or "").strip()
        if not expr or depth > 8:
            return None
        parts = _split_top_level_plus(expr)
        if len(parts) > 1:
            out = []
            for part in parts:
                piece = self.resolve(part, path, depth + 1)
                if piece is None:
                    return None
                out.append(piece)
            return "".join(out)
        if expr.startswith("`"):
            return _template_literal(expr, 0)
        if expr.startswith("window.__quantModules."):
            target = self.globals.get(expr[len("window.__quantModules."):])
            return self.resolve(target, path, depth + 1) if target is not None else None
        if re.match(r"^[A-Za-z_$][\w$]*$", expr):
            # 仅认同文件顶层常量，避免跨文件同名常量误解析
            target = self.locals.get((path, expr))
            return self.resolve(target, path, depth + 1) if target is not None else None
        return None


def _match_brace(text, start):
    """text[start] 为 '{' 时返回配对 '}' 的下标，否则 -1（跳过字符串与转义）"""
    depth = 0
    quote = None
    esc = False
    for i in range(start, len(text)):
        ch = text[i]
        if quote:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == quote:
                quote = None
            continue
        if ch in "\"'`":
            quote = ch
        elif ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return i
    return -1


def _template_literal(text, pos):
    """取 pos 之后的首个反引号字符串内容"""
    start = text.find("`", pos)
    if start < 0:
        return None
    i = start + 1
    while i < len(text):
        if text[i] == "\\":
            i += 2
            continue
        if text[i] == "`":
            return text[start + 1:i]
        i += 1
    return None


def _top_level_keys(body):
    """取对象字面量顶层键（含 ...spread）"""
    keys = []
    depth = 0
    quote = None
    esc = False
    token_start = 0
    parts = []
    for i, ch in enumerate(body):
        if quote:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == quote:
                quote = None
            continue
        if ch in "\"'`":
            quote = ch
        elif ch in "{[(":
            depth += 1
        elif ch in "}])":
            depth -= 1
        elif ch == "," and depth == 0:
            parts.append(body[token_start:i])
            token_start = i + 1
    parts.append(body[token_start:])
    for part in parts:
        part = part.strip()
        if not part:
            continue
        spread = _SPREAD_RE.match(part)
        if spread:
            keys.append("..." + spread.group(1))
            continue
        m = re.match(r"([A-Za-z_$][\w$]*)\s*:", part)
        if m:
            keys.append(m.group(1))
        elif re.match(r"^[A-Za-z_$][\w$]*$", part):
            keys.append(part)
    return sorted(keys)


def _setup_return_keys(text, setup_pos):
    """定位 setup() 内最后一个 return { 的顶层键"""
    brace = text.find("{", text.find(")", setup_pos))
    if brace < 0:
        return []
    end = _match_brace(text, brace)
    if end < 0:
        return []
    body = text[brace + 1:end]
    last = None
    for m in re.finditer(r"\breturn\s*\{", body):
        last = m
    if last is None:
        return []
    obj_start = body.index("{", last.start())
    obj_end = _match_brace(body, obj_start)
    if obj_end < 0:
        return []
    return _top_level_keys(body[obj_start + 1:obj_end])


def js_component_fingerprint(text, resolver=None, path=None):
    """单个组件源码 → 公开面指纹（不含行号，拆分搬移不影响）

    ``template:`` 值可为字面量，也可为常量引用（拆分后指向片段模块）；
    后者经 ``resolver`` 解析回原字符串后再算指纹。
    """
    tpl = None
    tpl_pos = text.find("template:")
    if tpl_pos >= 0:
        expr_m = _TPL_EXPR_RE.search(text, tpl_pos)
        is_literal = (not expr_m) or expr_m.group(1).strip().startswith("`")
        if not is_literal:
            tpl = resolver.resolve(expr_m.group(1), path) if resolver is not None else None
        if tpl is None:
            tpl = _template_literal(text, tpl_pos)  # 字面量或引用解析不到时退回原行为
    name_m = re.search(r"\bname:\s*'([^']+)'", text)
    setup_pos = text.find("setup(")
    classes = set()
    icons = set()
    if tpl:
        for chunk in _CLASS_RE.findall(tpl):
            for tok in chunk.split():
                if "{" not in tok and "}" not in tok:
                    classes.add(tok)
        icons = set(_ICON_RE.findall(tpl))
    i18n = set(_I18N_RE.findall(tpl or ""))
    directives = sorted(set(_DIRECTIVE_RE.findall(tpl or "")))
    tpl_sha = ""
    if tpl is not None:
        norm = re.sub(r"\s+", " ", tpl).strip()
        tpl_sha = hashlib.sha1(norm.encode("utf-8")).hexdigest()[:16]
    return {
        "name": name_m.group(1) if name_m else "",
        "template_sha": tpl_sha,
        "template_len": len(tpl) if tpl is not None else 0,
        "classes": sorted(classes),
        "icons": sorted(icons),
        "i18n_keys": sorted(i18n),
        "directives": directives,
        "setup_keys": _setup_return_keys(text, setup_pos) if setup_pos >= 0 else [],
    }


def js_component_fingerprints(root=None):
    """递归扫描前端源码，按注册名返回组件指纹（拆分后落点变化不影响键）

    两趟：先读入全部源码并建立模板常量符号表，再逐文件算指纹 ——
    模板片段模块与注册处分离时，指纹仍按解析后的模板内容比对。
    """
    root = root or FRONTEND
    texts = {}
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in ("node_modules", "dist", ".git")]
        for fn in filenames:
            if not fn.endswith(".js"):
                continue
            path = os.path.join(dirpath, fn)
            try:
                with io.open(path, encoding="utf-8") as f:
                    texts[path] = f.read()
            except (OSError, UnicodeDecodeError):
                continue
    resolver = TemplateResolver(texts)
    out = {}
    for path in sorted(texts):
        text = texts[path]
        for m in _COMPONENT_RE.finditer(text):
            out[m.group(1)] = js_component_fingerprint(text, resolver, path)
    return out


# ─── 后端：导入面与聚合类公开面 ───────────────────────────────

def _ensure_backend_path():
    if BACKEND not in sys.path:
        sys.path.insert(0, BACKEND)


def _is_module(obj):
    return isinstance(obj, type(os))


def py_import_surface(module_name, skip=("router",)):
    """运行时导入模块，取公开名字面（函数 / 类 / 常量，排除子模块与 skip 项）"""
    _ensure_backend_path()
    mod = importlib.import_module(module_name)
    names = []
    for n in dir(mod):
        if n.startswith("_"):
            continue
        val = getattr(mod, n)
        if _is_module(val) or n in skip:
            continue
        names.append(n)
    return sorted(names)


def py_class_surface(dotted):
    """聚合类（如 Mixin）的公开方法名集合 —— 拆分为多个 Mixin 后必须完全一致"""
    _ensure_backend_path()
    module_name, _, class_name = dotted.rpartition(".")
    mod = importlib.import_module(module_name)
    cls = getattr(mod, class_name)
    names = set()
    for klass in cls.__mro__:
        if klass.__module__.startswith("builtins"):
            continue
        for n, _ in vars(klass).items():
            if n.startswith("__"):
                continue
            names.add(n)
    return sorted(names)


def py_ast_public_surface(path):
    """源码级公开面（不导入）：顶层公开函数签名 / 类名 / 常量名"""
    with io.open(path, encoding="utf-8") as f:
        tree = ast.parse(f.read())
    funcs = {}
    classes = []
    consts = []
    for node in tree.body:
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            if not node.name.startswith("_"):
                funcs[node.name] = ast.unparse(node.args)
        elif isinstance(node, ast.ClassDef):
            if not node.name.startswith("_"):
                classes.append(node.name)
        elif isinstance(node, ast.Assign):
            for tgt in node.targets:
                if isinstance(tgt, ast.Name) and not tgt.id.startswith("_"):
                    consts.append(tgt.id)
    return {"functions": funcs, "classes": sorted(classes), "constants": sorted(consts)}


# ─── 共享夹具：任务队列对拍环境 ───────────────────────────────

def wait_terminal(jobs_mod, job_id, timeout=5.0):
    """轮询任务直到进入终态"""
    deadline = time.time() + timeout
    while time.time() < deadline:
        rec = jobs_mod.get_task(job_id)
        if rec and rec["status"] in ("success", "failed", "cancelled"):
            return rec
        time.sleep(0.02)
    return jobs_mod.get_task(job_id)


@pytest.fixture
def parity_jobs(tmp_path, monkeypatch):
    """隔离的任务队列环境 + 一个记录执行顺序的探针任务类型（617 / 630 共用）"""
    _ensure_backend_path()
    import jobs
    monkeypatch.setattr(jobs, "JOBS_FILE", str(tmp_path / "jobs.json"))
    jobs.reset_jobs()
    saved_registry = dict(jobs._registry)
    jobs._registry.clear()
    order = []

    @jobs.register("test-order")
    def _order_fn(payload, ctx):  # noqa: ARG001
        tag = payload.get("tag", "?")
        order.append(tag)
        time.sleep(0.01)
        return {"tag": tag}

    yield jobs, order
    jobs._registry.clear()
    jobs._registry.update(saved_registry)
    jobs.reset_jobs()
    jobs.shutdown()