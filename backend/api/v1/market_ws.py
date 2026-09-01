#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
盘中增强实时化（FR-3.17.7 实时化，可选）— WS 实时报价端点 (V5.4 T-5.4.4: WS 2.0)

- WS /api/market/ws/quotes?token=xxx（JWT 查询参数鉴权，复用 auth.get_current_user）
- 首帧 JSON 订阅: {"subscribe": ["600519", "000001"]}（支持后续更新订阅）
- 服务端按 QUOTE_PUSH_INTERVAL 推送 (WS 2.0):
    订阅后首推 = 全量快照 {"type":"quotes","full":true,"data":[...],"degraded":...}
    之后 = 增量 {"type":"quotes","delta":true,"data":[仅变化条目],...}
- 心跳: 每 HEARTBEAT_INTERVAL 发 {"type":"ping"}; 发送失败 → 断线清理
- 订阅管理: ConnectionManager 多客户端注册表; 断线/重连自动清理与恢复
- 数据源不可达 → degraded=true + 空 data，不抛错；空订阅不推送
- 断线清理、订阅上限校验、空订阅不推送
"""
import asyncio
import logging
import time
import uuid
from typing import List

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from auth import get_current_user
from realtime_quotes import (
    RealtimeQuoteSource,
    build_quote_payload,
    parse_subscribe,
)
from ws_v2 import (
    ConnectionManager,
    build_frame,
    compute_quote_delta,
    heartbeat_frame,
    should_heartbeat,
)

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/market", tags=["盘中实时报价"])

# 推送间隔（秒）；测试可改小以加速
QUOTE_PUSH_INTERVAL = 15.0
# 心跳间隔（秒）；<=0 禁用心跳
HEARTBEAT_INTERVAL = 30.0

# 模块级数据源（测试可整体替换注入 mock 源）
_quote_source = RealtimeQuoteSource()
# WS 2.0: 连接管理注册表 (多客户端订阅管理)
_connection_manager = ConnectionManager()


@router.websocket("/ws/quotes")
async def ws_quotes(websocket: WebSocket):
    """实时报价 WebSocket 端点

    流程:
      1. 鉴权: query token 校验失败 → close(4401)
      2. 接收首帧订阅 {"subscribe": [...]}（校验非法/超限/空订阅）
      3. 循环: 每 QUOTE_PUSH_INTERVAL 拉取报价并推送；期间可收新订阅帧
      4. 断线/异常 → 清理退出（不抛错）
    """
    token = websocket.query_params.get('token', '')
    user = await get_current_user(token)
    if user is None:
        await websocket.close(code=4401)
        return

    await websocket.accept()
    subscribed: List[dict] = []
    conn_id = uuid.uuid4().hex
    _connection_manager.register(conn_id, user.get('username', ''))
    prev_payload = None          # None → 下次推送为全量快照
    last_heartbeat = time.monotonic()

    try:
        while True:
            try:
                message = await asyncio.wait_for(
                    websocket.receive_json(), timeout=QUOTE_PUSH_INTERVAL)
            except asyncio.TimeoutError:
                message = None
            except (WebSocketDisconnect, RuntimeError):
                logger.debug('market_ws:64 跳过 ((WebSocketDisconnect, RuntimeError))')
                break
            except Exception as e:
                logger.warning('[ws/quotes] 接收异常: %s', e)
                break

            if message is not None:
                codes, err = parse_subscribe(message)
                if err:
                    await websocket.send_json({"type": "error", "message": err})
                    continue
                subscribed = codes
                _connection_manager.set_subscription(conn_id,
                                                     [s['code'] for s in codes])
                prev_payload = None  # 订阅变更 → 下次全量快照
                logger.info('[ws/quotes] %s 订阅 %d 只',
                            user.get('username'), len(codes))

            if not subscribed:
                continue  # 空订阅不推送

            codes = [s['code'] for s in subscribed]
            quotes_map, degraded = await asyncio.to_thread(
                _quote_source.fetch_quotes, codes)
            payload = build_quote_payload(subscribed, quotes_map, degraded)
            if prev_payload is None:
                # WS 2.0: 全量快照 (兼容既有字段 type/degraded/data)
                frame = dict(payload)
                frame["full"] = True
            else:
                # WS 2.0: 增量推送 (仅变化条目)
                delta = compute_quote_delta(prev_payload, payload)
                frame = build_frame("quotes", delta,
                                    delta=True)
                frame["degraded"] = bool(payload.get("degraded", False))
            prev_payload = payload
            await websocket.send_json(frame)

            # WS 2.0: 心跳 (发送失败 → 视为断线退出)
            now = time.monotonic()
            if should_heartbeat(now - last_heartbeat, HEARTBEAT_INTERVAL):
                await websocket.send_json(heartbeat_frame())
                last_heartbeat = now
    except WebSocketDisconnect:
        pass
    except Exception as e:
        logger.warning('[ws/quotes] 连接处理异常（已清理）: %s', e)
    finally:
        _connection_manager.unregister(conn_id)
        try:
            await websocket.close()
        except Exception:
            pass
        logger.info('[ws/quotes] 连接已关闭')
