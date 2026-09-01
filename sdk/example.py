#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar SDK 示例 — python3 sdk/example.py [base_url] [user] [pass]"""
import sys

sys.path.insert(0, __file__.rsplit("/", 1)[0])
from quant_calendar_client import QuantCalendarClient, QuantCalendarError


def main():
    base = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8000"
    user = sys.argv[2] if len(sys.argv) > 2 else "admin"
    pw = sys.argv[3] if len(sys.argv) > 3 else "admin123"
    c = QuantCalendarClient(base)
    info = c.login(user, pw)
    print("登录:", info.get("username"), info.get("role"))
    wl = c.get_watchlist()
    print("自选总数:", wl["total"])
    perms = c.get_my_permissions()
    print("权限数:", len(perms.get("permissions", [])))
    try:
        c.remove_watchlist("999999.SZ")
    except QuantCalendarError as e:
        print("预期错误:", e.code, e.status)


if __name__ == "__main__":
    main()