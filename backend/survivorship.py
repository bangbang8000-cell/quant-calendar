#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.1 T-5.0.15: 幸存者偏差治理 (survivorship.py)

退市/改名股票必须按 PIT 纳入历史池: as_of 时点可交易即纳入, 杜绝"用现在成分股回溯"高估收益。
- 注册表: backend/survivorship_registry.json (内置种子) + data/survivorship_registry.json (运维覆盖, 优先)
- is_tradable_on(ts_code, as_of): 上市日<=as_of 且 (未退市或退市日>=as_of)
- universe_as_of(pool, as_of): 当前池 + 在 as_of 可交易的退市股
- resolve_name(ts_code, as_of): 按时间取当时名称 (改名治理)
- check_survivorship(pool, as_of): 诊断池是否含不应存在(未上市/已退市)的标的

测试: tests/test_survivorship.py。
"""
import json
import logging
import os

import paths

logger = logging.getLogger(__name__)

BUILTIN_REGISTRY_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                     "survivorship_registry.json")


class SurvivorshipError(Exception):
    pass


def _override_path():
    return os.path.join(paths.DATA_DIR, "survivorship_registry.json")


def _load_json(path):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except OSError:
        return None
    except ValueError as e:
        logger.warning("注册表 JSON 解析失败 %s: %s", path, e)
        return None


def _load_builtin():
    data = _load_json(BUILTIN_REGISTRY_FILE)
    if data is None:
        raise SurvivorshipError(f"内置注册表缺失: {BUILTIN_REGISTRY_FILE}")
    return data


_cache = None


def load_registry(force=False):
    """内置种子 + data 覆盖合并 (覆盖优先, 按 ts_code 覆盖整个条目)。"""
    global _cache
    if _cache is not None and not force:
        return _cache
    merged = _load_builtin()
    stocks = dict(merged.get("stocks", {}))
    override = _load_json(_override_path())
    if override and isinstance(override.get("stocks"), dict):
        stocks.update(override["stocks"])
    merged = dict(merged)
    merged["stocks"] = stocks
    _cache = merged
    return merged


def _entry(ts_code):
    return load_registry().get("stocks", {}).get(ts_code)


def is_delisted(ts_code):
    e = _entry(ts_code)
    if e is None:
        return False
    return bool(e.get("delisted")) or e.get("delist_date") is not None


def delist_date(ts_code):
    e = _entry(ts_code)
    return (e or {}).get("delist_date")


def list_date(ts_code):
    e = _entry(ts_code)
    return (e or {}).get("list_date")


def is_tradable_on(ts_code, as_of):
    """PIT 可交易性: 上市日 <= as_of 且 (未退市 或 退市日 >= as_of)。未知标的默认可交易。"""
    e = _entry(ts_code)
    if e is None:
        return True
    ld = e.get("list_date")
    dd = e.get("delist_date")
    if ld and as_of < ld:
        return False
    if dd and as_of >= dd:
        return False
    return True


def universe_as_of(pool, as_of):
    """PIT 宇宙: 当前池 + 在 as_of 仍可交易的退市股 (去重, 保序)。"""
    out = list(dict.fromkeys(pool or []))
    for ts_code in load_registry().get("stocks", {}):
        e = load_registry()["stocks"][ts_code]
        if e.get("delisted") and ts_code not in out and is_tradable_on(ts_code, as_of):
            out.append(ts_code)
    return out


def resolve_name(ts_code, as_of):
    """按 as_of 取当时名称 (name_history 中日期 <= as_of 的最新条目)。"""
    e = _entry(ts_code)
    if e is None:
        return None
    hist = e.get("name_history") or []
    cur = None
    for h in hist:
        if h.get("date", "") <= as_of:
            cur = h["name"]
    return cur or (hist[0]["name"] if hist else None)


def check_survivorship(pool, as_of):
    """诊断: 池中注册表已知且 as_of 时点不可交易 (未上市/已退市) 的标的。"""
    issues = []
    for code in pool or []:
        e = _entry(code)
        if e is None:
            continue
        if not is_tradable_on(code, as_of):
            reason = f"as_of {as_of} 时未上市 (list_date={e.get('list_date')})" \
                if e.get("list_date") and as_of < e["list_date"] \
                else f"as_of {as_of} 时已退市 (delist_date={e.get('delist_date')})"
            issues.append({"code": code, "reason": reason})
    return issues
