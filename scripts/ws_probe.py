#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""verify_chain.sh 的 WS 探测子进程: 用法 ws_probe.py <base_url> <token>"""
import os, sys, json

def main():
    base = sys.argv[1]
    tok = sys.argv[2] if len(sys.argv) > 2 else ""
    from websockets.sync.client import connect
    with connect(base.replace("http", "ws") + "/api/market/ws/quotes?token=" + tok, open_timeout=8) as ws:
        ws.send(json.dumps({"subscribe": ["600519.SH"]}))
        msg = ws.recv(timeout=8)
        print("OK " + str(msg)[:60])

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print("ERR " + str(e)[:120])