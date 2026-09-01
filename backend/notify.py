#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4 T-5.4.1: 通知中心通道抽象 (notify.py)

统一通道契约 + 重试 + 多通道投递:
- Channel 基类: send(recipient, title, content) -> bool
- FakeChannel: 记录 send 调用 (测试契约)
- FeishuChannel: 复用 feishu_push.FeishuPusher (既有飞书兼容)
- WebhookChannel: 通用 JSON POST (http_post 可注入, 零依赖 urllib)
- EmailChannel: smtplib (smtp_send 可注入)
- DingTalk/WeCom/Telegram: 配置化 URL 构造 (沙箱不实测, 走契约 + 注入)
- get_channel / build_channel: 通道工厂 (注册表)
- send_notification: 失败重试 (指数退避)
- dispatch_to_all: 多通道投递, 单通道故障不影响其他通道

测试: tests/test_notify_channels.py (TEST-PLAN 5.1/5.2)。
"""
import json
import logging
import time
import urllib.request

logger = logging.getLogger(__name__)


class NotifyError(Exception):
    """通道投递失败 (可重试)。"""


class Channel:
    """通知通道基类契约: send(recipient, title, content) -> bool。"""

    name = "base"

    def send(self, recipient, title, content) -> bool:
        raise NotImplementedError


class FakeChannel(Channel):
    """测试通道: 记录 send 调用; fail_first 前 N 次抛 NotifyError。"""

    name = "fake"

    def __init__(self, fail_first=0):
        self.fail_first = int(fail_first)
        self.attempts = 0
        self.sent = []

    def send(self, recipient, title, content) -> bool:
        self.attempts += 1
        if self.attempts <= self.fail_first:
            raise NotifyError(f"fake 模拟失败 (第 {self.attempts} 次)")
        self.sent.append((recipient, title, content))
        return True


class FeishuChannel(Channel):
    """飞书机器人 webhook (复用既有 feishu_push.FeishuPusher, 保持兼容)。"""

    name = "feishu"

    def __init__(self, webhook):
        self.webhook = webhook

    def send(self, recipient, title, content) -> bool:
        from feishu_push import FeishuPusher
        text = f"📢 {title}\n{content}"
        ok = FeishuPusher(self.webhook).send_text(text)
        if not ok:
            raise NotifyError("飞书推送返回失败")
        return True


class WebhookChannel(Channel):
    """通用 Webhook: POST JSON {recipient, title, content}。"""

    name = "webhook"

    def __init__(self, url, headers=None, http_post=None):
        self.url = url
        self.headers = headers or {}
        self._http_post = http_post  # 测试注入: (url, data, headers, timeout) -> dict

    def _default_post(self, url, data, headers=None, timeout=10):
        req = urllib.request.Request(url, data=data, headers=headers or {},
                                     method="POST")
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return {"status": resp.status}

    def send(self, recipient, title, content) -> bool:
        body = json.dumps({"recipient": recipient, "title": title,
                           "content": content}, ensure_ascii=False).encode("utf-8")
        post = self._http_post or self._default_post
        try:
            post(self.url, body, self.headers, 10)
        except Exception as e:
            raise NotifyError(f"webhook 投递失败: {e}")
        return True


class EmailChannel(Channel):
    """SMTP 邮件通道 (smtp_send 可注入测试)。"""

    name = "email"

    def __init__(self, smtp_host, smtp_port, username, password, sender,
                 smtp_send=None):
        self.smtp_host, self.smtp_port = smtp_host, smtp_port
        self.username, self.password = username, password
        self.sender = sender
        self._smtp_send = smtp_send

    def _default_smtp_send(self, server, from_addr, to_addr, msg):
        server.sendmail(from_addr, [to_addr], msg)
        return True

    def send(self, recipient, title, content) -> bool:
        import smtplib
        from email.mime.text import MIMEText
        msg = MIMEText(f"{title}\n\n{content}", "plain", "utf-8")
        msg["Subject"] = title
        msg["From"] = self.sender
        msg["To"] = recipient
        if self._smtp_send is not None:
            # 测试注入模式: 跳过真实 SMTP 连接, 直接调注入发送
            try:
                self._smtp_send(None, self.sender, recipient, msg.as_string())
            except Exception as e:
                raise NotifyError(f"邮件投递失败: {e}")
            return True
        try:
            server = smtplib.SMTP(self.smtp_host, self.smtp_port)
            try:
                server.starttls()
                server.login(self.username, self.password)
            except smtplib.SMTPException:
                pass
            try:
                server.sendmail(self.sender, [recipient], msg.as_string())
            finally:
                server.quit()
        except Exception as e:
            raise NotifyError(f"邮件投递失败: {e}")
        return True


class DingTalkChannel(WebhookChannel):
    """钉钉机器人 webhook (JSON 消息体)。"""

    name = "dingtalk"

    def send(self, recipient, title, content) -> bool:
        body = json.dumps({"msgtype": "text",
                           "text": {"content": f"{title}\n{content}"}},
                          ensure_ascii=False).encode("utf-8")
        post = self._http_post or self._default_post
        try:
            post(self.url, body, self.headers, 10)
        except Exception as e:
            raise NotifyError(f"钉钉投递失败: {e}")
        return True


class WeComChannel(WebhookChannel):
    """企业微信机器人 webhook。"""

    name = "wecom"

    def send(self, recipient, title, content) -> bool:
        body = json.dumps({"msgtype": "text",
                           "text": {"content": f"{title}\n{content}"}},
                          ensure_ascii=False).encode("utf-8")
        post = self._http_post or self._default_post
        try:
            post(self.url, body, self.headers, 10)
        except Exception as e:
            raise NotifyError(f"企微投递失败: {e}")
        return True


class TelegramChannel(WebhookChannel):
    """Telegram bot sendMessage API。"""

    name = "telegram"

    def send(self, recipient, title, content) -> bool:
        payload = {"chat_id": recipient, "text": f"{title}\n{content}"}
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        post = self._http_post or self._default_post
        try:
            post(self.url, body, self.headers, 10)
        except Exception as e:
            raise NotifyError(f"Telegram 投递失败: {e}")
        return True


_CHANNELS = {
    "fake": lambda cfg: FakeChannel(fail_first=cfg.get("fail_first", 0)),
    "feishu": lambda cfg: FeishuChannel(cfg["webhook"]),
    "webhook": lambda cfg: WebhookChannel(cfg["url"], cfg.get("headers") or {}),
    "dingtalk": lambda cfg: DingTalkChannel(cfg["url"]),
    "wecom": lambda cfg: WeComChannel(cfg["url"]),
    "telegram": lambda cfg: TelegramChannel(cfg["url"]),
    "email": lambda cfg: EmailChannel(cfg["smtp_host"], cfg["smtp_port"],
                                      cfg.get("username"), cfg.get("password"),
                                      cfg["sender"]),
}


def register_channel(name, factory) -> None:
    """注册自定义通道工厂 (扩展点)。"""
    _CHANNELS[name] = factory


def build_channel(name, config):
    """按配置构造通道实例。"""
    name = str(name or "").lower()
    if name not in _CHANNELS:
        raise ValueError(f"未知通道类型: {name}")
    return _CHANNELS[name](config or {})


def get_channel(name, config):
    return build_channel(name, config)


def send_notification(channel, recipient, title, content,
                      retries=3, base_delay=0.1):
    """单通道投递 + 失败重试 (指数退避 base_delay * attempt)。

    返回 {ok, attempts, error, channel}。
    """
    attempts = 0
    last_err = None
    for attempt in range(1, int(retries) + 1):
        attempts = attempt
        try:
            ok = channel.send(recipient, title, content)
            if ok:
                return {"ok": True, "attempts": attempts,
                        "error": None, "channel": getattr(channel, "name", "?")}
        except NotifyError as e:
            last_err = str(e)
        except Exception as e:  # 通道内部异常统一按可重试失败处理
            last_err = str(e)
        if attempt < retries and base_delay > 0:
            time.sleep(base_delay * attempt)
    return {"ok": False, "attempts": attempts, "error": last_err,
            "channel": getattr(channel, "name", "?")}


def dispatch_to_all(channels, recipients, title, content, **kw):
    """多通道 × 多收件人投递; 单通道故障不影响其他通道 (TEST-PLAN 5.2)。"""
    results = []
    for ch in channels or []:
        for r in recipients or []:
            results.append(send_notification(ch, r, title, content, **kw))
    return results
