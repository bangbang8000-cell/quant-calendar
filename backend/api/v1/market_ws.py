#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
盘中增强实时化（FR-3.17.7 实时化，可选）— WS 实时报价端点

- WS /api/market/ws/quotes?token=xxx（JWT 查询参数鉴权，复用 auth.get_current_user）
- 首帧 JSON 订阅: {"subscribe": ["600519", "000001"]}（支持后续更新订阅）
- 服务端按 QUOTE_PUSH_INTERVAL 推送:
    {"type": "quotes", "data": [{code,name,price,change_pct,volume_ratio,rise_speed}],
     "degraded": true/false}
- 数据源不可达 → degraded=true + 空 data，不抛错；空订阅不推送
- 断线清理、订阅上限校验、空订阅不推送
"""
import asyncio
import logging
from typing import List

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from auth import get_current_user
from realtime_quotes import (
    RealtimeQuoteSource,
    build_quote_payload,
    parse_subscribe,
)

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/market", tags=["盘中实时报价"])

# 推送间隔（秒）；测试可改小以加速
QUOTE_PUSH_INTERVAL = 15.0

# 模块级数据源（测试可整体替换注入 mock 源）
_quote_source = RealtimeQuoteSource()


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

    try:
        while True:
            try:
                message = await asyncio.wait_for(
                    websocket.receive_json(), timeout=QUOTE_PUSH_INTERVAL)
            except asyncio.TimeoutError:
                message = None
            except (WebSocketDisconnect, RuntimeError):
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
                logger.info('[ws/quotes] %s 订阅 %d 只',
                            user.get('username'), len(codes))

            if not subscribed:
                continue  # 空订阅不推送

            codes = [s['code'] for s in subscribed]
            quotes_map, degraded = await asyncio.to_thread(
                _quote_source.fetch_quotes, codes)
            payload = build_quote_payload(subscribed, quotes_map, degraded)
            await websocket.send_json(payload)
    except WebSocketDisconnect:
        pass
    except Exception as e:
        logger.warning('[ws/quotes] 连接处理异常（已清理）: %s', e)
    finally:
        try:
            await websocket.close()
        except Exception:
            pass
        logger.info('[ws/quotes] 连接已关闭')
