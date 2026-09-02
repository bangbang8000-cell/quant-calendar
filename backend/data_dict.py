#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.1 T-5.0.14: 数据字典 YAML 单一事实源 (data_dict.py) — 零外部依赖

字段口径 (规范字段/别名/分类/单位) 在 backend/data_dict.yaml 单点维护;
DataPortal 口径 (FIELD_ALIASES) 与本字典通过 tests/test_data_dict.py 双向对拍。

mini-YAML 子集解析器 (不依赖 PyYAML, 遵守项目零外部依赖纪律):
- 注释: 行首 '#' 或 ' #' 后 (子集内不含引号内 '#' )
- 扁平映射: key: value (顶层与 2 空格缩进子块)
- 块列表: '- ' 项 + 更深缩进的子键
- 行内列表: [a, b, c]
- 标量: 字符串/整数/浮点/true/false/null
- 超出子集 (流式 {} / 深嵌套) → DataDictError 明确报错
"""
import logging
import os

logger = logging.getLogger(__name__)

DICT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data_dict.yaml")
FIELD_CATEGORIES = ("kline", "daily_basic", "financial", "calendar", "quality")


class DataDictError(Exception):
    """字典文件缺失 / 结构非法 / 超出解析子集。"""


# ─── mini-YAML 子集解析器 ───

def _parse_scalar(s):
    s = s.strip()
    if s.startswith("[") and s.endswith("]"):
        inner = s[1:-1].strip()
        return [_parse_scalar(x) for x in inner.split(",")] if inner else []
    if s.startswith('"') and s.endswith('"') and len(s) >= 2:
        return s[1:-1]
    if s.startswith("'") and s.endswith("'") and len(s) >= 2:
        return s[1:-1]
    low = s.lower()
    if low == "true":
        return True
    if low == "false":
        return False
    if low in ("null", "none", "~"):
        return None
    if s == "":
        return ""
    try:
        if "." in s or "e" in low or "E" in s:
            return float(s)
        return int(s)
    except ValueError:
        return s


def _split_kv(line):
    if ":" not in line:
        raise DataDictError(f"不支持的 YAML 结构 (缺 ':'): {line!r}")
    k, v = line.split(":", 1)
    return k.strip(), v.strip()


def _lines_of(text):
    out = []
    for raw in text.splitlines():
        line = raw
        if "#" in line:
            stripped = line.lstrip()
            if stripped.startswith("#"):
                continue
            idx = line.find("#")
            if idx > 0 and line[idx - 1] in " 	":
                line = line[:idx].rstrip()
        if not line.strip():
            continue
        indent = len(line) - len(line.lstrip(" "))
        out.append((indent, line.strip()))
    return out


def _parse_seq(lines, idx, indent):
    """解析一列同缩进节点 → (dict|list, next_idx)。"""
    if idx >= len(lines):
        return {}, idx
    if lines[idx][0] != indent:
        raise DataDictError(f"缩进错位: 期望 {indent} 得到 {lines[idx][0]}")
    if lines[idx][1].startswith("- "):
        items = []
        while idx < len(lines) and lines[idx][0] == indent and lines[idx][1].startswith("- "):
            rest = lines[idx][1][2:].strip()
            if ":" not in rest:
                items.append(_parse_scalar(rest))
                idx += 1
                continue
            k, v = _split_kv(rest)
            item = {}
            if v:
                _reject_flow(v)
                item[k] = _parse_scalar(v)
                idx += 1
            else:
                sub, idx = _parse_seq(lines, idx + 1, indent + 2)
                item[k] = sub
            # 吸收本项更深缩进的其余子键
            while idx < len(lines) and lines[idx][0] > indent:
                dk, dv = _split_kv(lines[idx][1])
                if dv:
                    _reject_flow(dv)
                    item[dk] = _parse_scalar(dv)
                else:
                    sub, idx2 = _parse_seq(lines, idx + 1, lines[idx][0] + 2)
                    item[dk] = sub
                    idx = idx2
                    continue
                idx += 1
            items.append(item)
        return items, idx
    obj = {}
    while idx < len(lines) and lines[idx][0] == indent and not lines[idx][1].startswith("- "):
        k, v = _split_kv(lines[idx][1])
        if v:
            _reject_flow(v)
            obj[k] = _parse_scalar(v)
            idx += 1
        else:
            sub, idx = _parse_seq(lines, idx + 1, indent + 2)
            obj[k] = sub
    return obj, idx


def _reject_flow(v):
    if "{" in v or "}" in v:
        raise DataDictError(f"超出 YAML 子集 (流式结构 {{}} 不支持): {v!r}")


def _parse(text):
    lines = _lines_of(text)
    if not lines:
        return {}
    return _parse_seq(lines, 0, lines[0][0])[0]


def parse_yaml(text):
    """公开的 mini-YAML 子集解析入口 (供测试/扩展, 不校验字典结构)。"""
    return _parse(text)


# ─── 字典加载与访问 ───

_cache = {}


def load_dict(path=None, force=False):
    """加载字典 (带缓存)。文件缺失/结构非法抛 DataDictError。"""
    p = path or DICT_FILE
    if not force and p in _cache:
        return _cache[p]
    if not os.path.exists(p):
        raise DataDictError(f"字典文件不存在: {p}")
    try:
        with open(p, encoding="utf-8") as f:
            d = _parse(f.read())
    except OSError as e:
        raise DataDictError(f"读取字典失败: {e}") from e
    if not isinstance(d.get("fields"), list):
        raise DataDictError(f"字典缺少 fields 列表: {p}")
    _cache[p] = d
    return d


def list_fields(path=None):
    return load_dict(path=path)["fields"]


def canonical_field_keys(path=None):
    return [f["key"] for f in list_fields(path=path)]


def get_field(key, path=None):
    for f in list_fields(path=path):
        if f["key"] == key:
            return f
    raise DataDictError(f"字典无字段: {key}")
