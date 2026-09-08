#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
安全工具集 (V4.1 FR-4.1.3)

- validate_base_url: SSRF 防护 — 校验厂商 base_url
  * http 仅允许本地地址(localhost/127.0.0.1, 本地模型如 ollama)
  * https 禁止指向内网/链路本地/元数据/保留地址
"""
import ipaddress
import logging
from urllib.parse import urlparse
from fastapi import HTTPException

logger = logging.getLogger(__name__)

LOCALHOST_HOSTS = {"localhost", "127.0.0.1", "::1"}


def is_private_host(host: str) -> bool:
    """判断 host 是否指向内网/保留地址(返回 True 表示私密, 应拒绝)

    支持 IP 字面量静态判定; 域名走 DNS 解析静态判定不可行, 仅拦截常见内网域名形态。
    """
    h = (host or "").lower().rstrip(".").split("%")[0]
    if h in LOCALHOST_HOSTS or h.endswith(".localhost"):
        return True
    # 常见内网/元数据域名后缀
    if h.endswith(".internal") or h.endswith(".local"):
        return True
    try:
        addr = ipaddress.ip_address(h)
        if (addr.is_private or addr.is_loopback or addr.is_link_local
                or addr.is_reserved or addr.is_multicast or addr.is_unspecified):
            return True
        return False
    except ValueError:
        # 普通域名: 静态不可判定, 放行(https 场景)
        return False


def validate_base_url(base_url) -> None:
    """SSRF 防护: 校验 AI 厂商 base_url, 不合法抛 400"""
    if not base_url or not str(base_url).strip():
        raise HTTPException(status_code=400, detail="base_url 不能为空")
    raw = str(base_url).strip()
    try:
        p = urlparse(raw)
    except Exception:
        raise HTTPException(status_code=400, detail="base_url 格式无效")
    scheme = (p.scheme or "").lower()
    if scheme not in ("http", "https"):
        raise HTTPException(status_code=400, detail="base_url 仅支持 http/https")
    host = (p.hostname or "").lower()
    if not host:
        raise HTTPException(status_code=400, detail="base_url 缺少主机名")
    if scheme == "http":
        if host not in LOCALHOST_HOSTS and not host.endswith(".localhost"):
            raise HTTPException(status_code=400, detail="http 协议仅允许本地地址(localhost/127.0.0.1)")
        return
    # https: 禁止内网/保留地址
    if is_private_host(host):
        raise HTTPException(status_code=400, detail="base_url 不允许指向内网/保留地址")
    logger.debug("[ssrf] base_url 校验通过: %s", host)
