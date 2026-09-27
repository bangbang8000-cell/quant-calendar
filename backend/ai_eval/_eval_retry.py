#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.4): AI 云 API 网络级重试封装 — 自 _eval.py 拆分。

供 _eval_core / _eval_llm 共用；行为与拆分前一致。
"""
import logging
import requests

logger = logging.getLogger(__name__)


# ─── 网络调用重试 (FIX 2026-09-08: 云 API 瞬时 Read timed out 自动重试) ──────
# 仅重试网络/超时类异常 (ReadTimeout/ConnectTimeout/ConnectionError), HTTP 4xx/5xx
# 不重试 — key 失效/模型不存在等重试无意义且放大费用。策略: 最多 3 次, 退避 1s/2s。
_AI_RETRIES = 2          # 额外重试次数 (总尝试 = 3)
_AI_RETRY_BACKOFF = (1, 2)

def _post_with_retry(endpoint: str, headers: dict, json: dict, timeout: float):
    """requests.post 网络级重试封装 — 供 _call_llm/generate_review/generate_pool_signal 共用"""
    last_exc = None
    for attempt in range(_AI_RETRIES + 1):
        try:
            resp = requests.post(endpoint, headers=headers, json=json, timeout=timeout)
            resp.raise_for_status()
            return resp
        except (requests.exceptions.Timeout,
                requests.exceptions.ConnectionError,
                requests.exceptions.ChunkedEncodingError) as e:
            last_exc = e
            if attempt < _AI_RETRIES:
                import time as _t
                _t.sleep(_AI_RETRY_BACKOFF[min(attempt, len(_AI_RETRY_BACKOFF) - 1)])
                logger.warning("AI 调用网络异常第 %s 次重试 (%s): %s", attempt + 1, endpoint.split('//')[1].split('/')[0], str(e)[:80])
        except Exception:
            raise  # HTTP 4xx/5xx 等业务错误直接抛, 不重试
    raise last_exc
