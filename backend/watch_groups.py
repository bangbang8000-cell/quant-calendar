#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.2 (B3): 自选分组管理 — 纯函数 (node 无需, python 可测)

数据模型:
  groups  = [{name, color, sort_order, expanded}]
  mapping = {stock_code: group_name}

能力: 归一化(默认分组恒存在/颜色白名单/排序) / 移动股票 / 重命名 / 删除并入默认 / 设颜色
颜色: 8 色白名单 (主色 + 语义色)
"""
DEFAULT_GROUP = "默认分组"

COLORS = (
    "#c49b2e",  # 金 (主色)
    "#2563eb",  # 蓝
    "#dc2626",  # 红
    "#16a34a",  # 绿
    "#7c3aed",  # 紫
    "#db2777",  # 粉
    "#64748b",  # 灰
    "#b45309",  # 棕
)


def default_groups() -> list:
    return [{"name": DEFAULT_GROUP, "color": COLORS[0], "sort_order": 0, "expanded": True}]


def normalize_groups(groups, mapping=None):
    """保证: 默认分组恒存在(首位) / 字段完整 / 颜色白名单 / sort_order 0..n"""
    out = []
    for i, g in enumerate(groups or []):
        name = (g.get("name") or "").strip()
        if not name:
            continue
        color = g.get("color") if g.get("color") in COLORS else COLORS[i % len(COLORS)]
        out.append({
            "name": name,
            "color": color,
            "sort_order": i,
            "expanded": bool(g.get("expanded", True)),
        })
    if not any(g["name"] == DEFAULT_GROUP for g in out):
        out.insert(0, {"name": DEFAULT_GROUP, "color": COLORS[0], "sort_order": 0, "expanded": True})
    return out


def move_stock(mapping, code, group, groups):
    """股票移入分组; group 不存在则回默认分组。返回新 mapping。"""
    names = {g["name"] for g in groups}
    target = group if group in names else DEFAULT_GROUP
    m = dict(mapping or {})
    m[code] = target
    return m


def rename_group(groups, old, new):
    """重命名分组 → (新 groups, 新名 or None, 错误信息 or None)"""
    new = (new or "").strip()
    if not new:
        return groups, None, "分组名不能为空"
    if new == old:
        return groups, None, "新名与旧名相同"
    if any(g["name"] == new for g in groups):
        return groups, None, f"分组已存在: {new}"
    out = [dict(g, name=new) if g["name"] == old else g for g in groups]
    return out, new, None


def delete_group(groups, mapping, name):
    """删除分组 → 股票并入默认分组; 默认分组不可删 → (groups, mapping, ok)"""
    if name == DEFAULT_GROUP or not any(g["name"] == name for g in groups):
        return groups, mapping, False
    out = [g for g in groups if g["name"] != name]
    m = {}
    for code, g in (mapping or {}).items():
        m[code] = DEFAULT_GROUP if g == name else g
    return out, m, True


def set_color(groups, name, color):
    """设置分组颜色 → (groups, ok); 颜色必须白名单内"""
    if color not in COLORS or not any(g["name"] == name for g in groups):
        return groups, False
    out = [dict(g, color=color) if g["name"] == name else g for g in groups]
    return out, True
