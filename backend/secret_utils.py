#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
密钥展示安全 (V4.0 需求2)
- mask_secret: 确定性部分掩码, 默认只露首尾真实字符, 中间打 * (与前端 JS 镜像实现保持同规则)
- is_masked_form: 提交值等于存储值的掩码形式 → 视为未修改 (保存时不覆盖真实 key)
- verify_key_view_password: 校验「查看完整密钥」密码 (settings.KEY_VIEW_PASSWORD, 默认 admin123)
"""
import hmac


def mask_secret(secret) -> str:
    """部分掩码: 空串→空; len<=4→首字符+星; len<=8→首2尾2; 其余→首4尾4"""
    if not secret:
        return ""
    s = str(secret)
    n = len(s)
    if n <= 4:
        return s[0] + "*" * (n - 1)
    head = 2 if n <= 8 else 4
    return s[:head] + "*" * (n - head - head) + s[-head:]


def is_masked_form(submitted, stored) -> bool:
    """提交值与存储值的掩码形式一致 → 视为未修改 (含两边皆空的场景)"""
    if stored == "":
        return submitted == ""
    return submitted == mask_secret(stored)


def verify_key_view_password(password) -> bool:
    """常量时间比较查看密码; 空密码一律拒绝; V4.1: 未显式配置 KEY_VIEW_PASSWORD 时一律拒绝查看"""
    import os
    from config import settings
    if not password:
        return False
    if os.environ.get("KEY_VIEW_PASSWORD") is None and settings.KEY_VIEW_PASSWORD == "admin123":
        return False  # 默认口令未覆盖 → 拒绝查看完整密钥
    return hmac.compare_digest(str(password), settings.KEY_VIEW_PASSWORD)
