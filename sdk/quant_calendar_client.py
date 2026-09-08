#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V5.8 (T-5.8.4): quant-calendar Python SDK — 零外部依赖 (仅标准库 urllib)

用法:
    from quant_calendar_client import QuantCalendarClient
    c = QuantCalendarClient("http://127.0.0.1:8000")
    c.login("alice", "pw")
    wl = c.get_watchlist(page=1, page_size=20)

契约 (对齐 /api/v3):
    成功 {"success": true, "data": {...}}; 错误 {"success": false, "error": {code,message,status}}
    SDK 把非 2xx 抛 QuantCalendarError(code, message, status)

transport 可注入 (测试用 FakeTransport), 默认 urllib.request。
"""
import json
import urllib.parse
import urllib.request
import urllib.error


class QuantCalendarError(Exception):
    """API 错误 — 携带 code/message/status。"""
    def __init__(self, code, message, status):
        self.code = code
        self.message = message
        self.status = status
        super().__init__("[%s] %s (HTTP %s)" % (code, message, status))


class _HttpTransport:
    """默认 urllib transport。request(method, url, body=None, headers=None) -> (status, json)"""
    def request(self, method, url, body=None, headers=None, timeout=15):
        data = None
        hdrs = dict(headers or {})
        if body is not None:
            data = json.dumps(body).encode("utf-8")
            hdrs.setdefault("Content-Type", "application/json")
        req = urllib.request.Request(url, data=data, headers=hdrs, method=method.upper())
        try:
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                raw = resp.read().decode("utf-8")
                return resp.status, (json.loads(raw) if raw else {})
        except urllib.error.HTTPError as e:
            raw = e.read().decode("utf-8") if e.fp else ""
            try:
                return e.code, (json.loads(raw) if raw else {})
            except ValueError:
                return e.code, {"detail": raw}


class QuantCalendarClient:
    def __init__(self, base_url, token=None, transport=None):
        self.base_url = base_url.rstrip("/")
        self.token = token
        self.transport = transport or _HttpTransport()

    # ─── 低层请求 ───────────────────────────────────────────
    def _url(self, path):
        return self.base_url + path

    def _headers(self):
        h = {}
        if self.token:
            h["Authorization"] = "Bearer " + self.token
        return h

    def _request(self, method, path, body=None):
        status, payload = self.transport.request(method, self._url(path), body=body,
                                                 headers=self._headers())
        if 200 <= status < 300:
            return payload
        err = (payload or {}).get("error") if isinstance(payload, dict) else None
        if err and isinstance(err, dict):
            raise QuantCalendarError(err.get("code", "ERROR"), err.get("message", ""), err.get("status", status))
        detail = (payload or {}).get("detail") if isinstance(payload, dict) else None
        raise QuantCalendarError("HTTP_%s" % status, str(detail or payload), status)

    # ─── 认证 ───────────────────────────────────────────────
    def login(self, username, password):
        payload = self._request("POST", "/api/login", body={"username": username, "password": password})
        # /api/login 响应: {"success": true, "data": {access_token, token_type, username, role, ...}, "user": {...}}
        tok = payload.get("data") if isinstance(payload, dict) else None
        if isinstance(tok, dict):
            self.token = tok.get("access_token")
        elif isinstance(tok, str):
            self.token = tok
        if not self.token:
            self.token = payload.get("access_token") or payload.get("token")
        return payload

    # ─── API v3 ─────────────────────────────────────────────
    def get_watchlist(self, page=1, page_size=20, q=None):
        params = urllib.parse.urlencode({"page": page, "page_size": page_size, **({"q": q} if q else {})})
        return self._request("GET", "/api/v3/watchlist?%s" % params).get("data", {})

    def add_watchlist(self, code, name=None):
        return self._request("POST", "/api/v3/watchlist", body={"code": code, "name": name or code})

    def remove_watchlist(self, code):
        return self._request("DELETE", "/api/v3/watchlist/%s" % urllib.parse.quote(code, safe=""))

    def get_evaluations(self, page=1, page_size=20, level=None, code=None):
        qs = {"page": page, "page_size": page_size}
        if level:
            qs["level"] = level
        if code:
            qs["code"] = code
        return self._request("GET", "/api/v3/evaluations?%s" % urllib.parse.urlencode(qs)).get("data", {})

    def list_groups(self, page=1, page_size=20):
        return self._request("GET", "/api/v3/groups?%s" % urllib.parse.urlencode({"page": page, "page_size": page_size})).get("data", {})

    # ─── RBAC ───────────────────────────────────────────────
    def get_roles(self):
        return self._request("GET", "/api/rbac/roles").get("data", {})

    def get_my_permissions(self):
        return self._request("GET", "/api/rbac/my").get("data", {})

    # ─── 运维 ───────────────────────────────────────────────
    def health(self):
        return self._request("GET", "/api/health")