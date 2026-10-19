#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""verify_chain.sh 的 WS 探测子进程: 用法 ws_probe.py <base_url> <token>

v6.4 (FR-6.4.2) 修正: recv 超时原为 8s，而服务端首帧推送发生在
`await asyncio.wait_for(receive_json, timeout=QUOTE_PUSH_INTERVAL)` 触发之后
(QUOTE_PUSH_INTERVAL = 15s) —— 探测必然在首帧到达前超时，该探针**从来不可能通过**。
现按「推送间隔 + 余量」取超时，并允许用环境变量覆盖以适配调小间隔的测试环境。

判定口径 (TEST-PLAN §11.3): 报价源不可达属环境限制，只要收到帧即算通，
不看 data 是否非空 —— 降级帧会带 degraded=true + reason。
"""
import json
import os
import sys

# 服务端 QUOTE_PUSH_INTERVAL 默认 15s，首帧在收到订阅后的下一次超时轮询发出
RECV_TIMEOUT = float(os.environ.get('QC_WS_PROBE_TIMEOUT', '22'))


def main():
    base = sys.argv[1]
    tok = sys.argv[2] if len(sys.argv) > 2 else ""
    from websockets.sync.client import connect

    url = base.replace("http", "ws") + "/api/market/ws/quotes?token=" + tok
    with connect(url, open_timeout=8) as ws:
        ws.send(json.dumps({"subscribe": ["600519.SH"]}))
        msg = ws.recv(timeout=RECV_TIMEOUT)
        try:
            frame = json.loads(msg)
        except Exception:
            frame = {}
        kind = frame.get('type') or 'unknown'
        degraded = frame.get('degraded')
        reason = frame.get('reason') or ''
        extra = ''
        if kind == 'quotes':
            extra = ' degraded=%s' % degraded
            if reason:
                extra += ' reason=%s' % reason
        print("OK type=%s%s %s" % (kind, extra, str(msg)[:60]))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print("ERR " + str(e)[:120])
        sys.exit(1)
