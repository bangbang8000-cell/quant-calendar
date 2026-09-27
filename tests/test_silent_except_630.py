# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.3): 静默异常门禁

口径（AST，可复现）：``except`` 分支体仅有一个 ``pass`` 的处理点即为静默异常。
它与「打了日志再返回降级值」的区别在于：后者留下可追踪的痕迹。

三档治理（T-6.3.0.2）：

- 有意忽略 — 业务上确有意义的忽略，保留 ``pass`` 并在处理体内写明原因，进白名单
- 可降级 — 该步骤失败不影响主流程，改为记录警告日志并返回降级值
- 应暴露 — 该步骤失败会导致结果错误或数据不一致，改为记录错误日志并向上抛出

白名单每条必须写明理由；新增静默异常零容忍。
"""
import ast
import io
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCAN_ROOT = os.path.join(BASE, "backend")
SKIP_DIRS = {"__pycache__", ".git", ".venv", "venv", "node_modules", "dist"}

# 有意忽略的处理点：键为 "相对路径::作用域::except 头#序号"，值为业务理由（不得为空）
WHITELIST = {
    # 客户端断开是 WebSocket 正常生命周期事件，不是故障
    "backend/api/v1/market_ws.py::ws_quotes::except WebSocketDisconnect:#1":
        "客户端主动断开属正常生命周期, 无需告警",
    # 对端已关闭时 close 失败同样属预期，记日志只是增噪
    "backend/api/v1/market_ws.py::ws_quotes::except Exception:#1":
        "连接可能已由对端关闭, close 失败属预期",
    # 该处失败即走实时行情，是设计内的两条路径之一
    "backend/api/v1/shortterm.py::get_sector_flow::except Exception:#1":
        "时间解析失败走实时行情, 属设计内分支",
    # 部分 SMTP 服务器不开放认证，登录失败后按匿名投递
    "backend/notify.py::EmailChannel.send::except smtplib.SMTPException:#1":
        "部分 SMTP 无需认证, 登录失败后按匿名投递",
    # 先整段解析 JSON，失败则退到片段提取，两级策略的第一级
    "backend/shortterm/synthesizer.py::parse_verdict::except Exception:#1":
        "整段解析失败是预期分支, 随后尝试提取 {...} 片段",
    # 片段提取也失败后由调用方按无结构化结论处理，此处无更优降级
    "backend/shortterm/synthesizer.py::parse_verdict::except Exception:#2":
        "片段提取失败后由调用方按无结构化结论处理",
    # akshare 日历不可用由外层统一记录 debug，此处重复记录只会增噪
    "backend/stock_calendar.py::_fetch_trade_calendar::except Exception:#1":
        "akshare 日历不可用由外层统一记录 debug, 此处不重复",
}

# 白名单条目上限（ratchet：只允许下调，不允许上调）
WHITELIST_MAX = 10


def _canonical_head(segment):
    """取 except 语句首行并去掉行尾注释，避免注释变动影响键"""
    first = (segment or "").split("\n")[0].strip()
    return first.split("#")[0].strip()


def scan_source(src):
    """扫描单份源码，返回 [(作用域, except 头)]，按出现顺序"""
    tree = ast.parse(src)
    hits = []

    class _Visitor(ast.NodeVisitor):
        def __init__(self):
            self.scope = []

        def _enter(self, node):
            self.scope.append(node.name)

        def _leave(self, node):
            self.scope.pop()

        def visit_FunctionDef(self, node):
            self._enter(node)
            self.generic_visit(node)
            self._leave(node)

        visit_AsyncFunctionDef = visit_FunctionDef

        def visit_ClassDef(self, node):
            self._enter(node)
            self.generic_visit(node)
            self._leave(node)

        def visit_ExceptHandler(self, node):
            if len(node.body) == 1 and isinstance(node.body[0], ast.Pass):
                seg = ast.get_source_segment(src, node)
                hits.append((".".join(self.scope), _canonical_head(seg)))
            self.generic_visit(node)

    _Visitor().visit(tree)
    return hits


def collect_silent_handlers():
    """扫描 backend 全部模块，返回 {键: 相对路径:行号}"""
    out = {}
    for dirpath, dirnames, filenames in os.walk(SCAN_ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in sorted(filenames):
            if not fn.endswith(".py"):
                continue
            path = os.path.join(dirpath, fn)
            rel = os.path.relpath(path, BASE).replace("\\", "/")
            try:
                with io.open(path, encoding="utf-8") as f:
                    src = f.read()
            except (OSError, UnicodeDecodeError):
                continue
            try:
                hits = scan_source(src)
            except SyntaxError:
                continue
            counters = {}
            for scope, head in hits:
                base_key = "%s::%s::%s" % (rel, scope, head)
                counters[base_key] = counters.get(base_key, 0) + 1
                key = "%s#%d" % (base_key, counters[base_key])
                out[key] = "%s" % rel
    return out


def test_no_unlisted_silent_except():
    current = collect_silent_handlers()
    unlisted = sorted(set(current) - set(WHITELIST))
    assert not unlisted, (
        "发现未登记的静默异常（except 分支体仅有 pass）：\n  "
        + "\n  ".join(unlisted)
        + "\n按三档处置：有意忽略→处理体内写明原因并登记白名单；可降级→记录警告并返回降级值；"
          "应暴露→记录错误并向上抛出。"
    )


def test_whitelist_entries_have_reason_and_are_live():
    blank = sorted(k for k, v in WHITELIST.items() if not (v or "").strip())
    assert not blank, "白名单条目缺少业务理由:\n  " + "\n  ".join(blank)

    current = set(collect_silent_handlers())
    stale = sorted(set(WHITELIST) - current)
    assert not stale, "白名单条目已失效（处理点已改动或已治理），需从表中移除:\n  " + "\n  ".join(stale)


def test_whitelist_within_ratchet():
    assert len(WHITELIST) <= WHITELIST_MAX, (
        "白名单条数 %d 超过上限 %d，需继续治理而非扩容" % (len(WHITELIST), WHITELIST_MAX))


def test_detector_flags_silent_and_ignores_logged(tmp_path):
    """门禁必须抓得到新写的 pass，且不误伤已记日志的处理"""
    src = (
        "def f():\n"
        "    try:\n"
        "        a()\n"
        "    except ValueError:\n"
        "        pass\n"
        "    try:\n"
        "        b()\n"
        "    except KeyError as e:\n"
        "        logger.warning('降级: %s', e)\n"
        "        return None\n"
    )
    assert scan_source(src) == [("f", "except ValueError:")]


def test_detector_uses_handler_scope(tmp_path):
    """作用域进入键，便于定位到具体方法（同名方法在不同类下不会混淆）"""
    src = (
        "class A:\n"
        "    def run(self):\n"
        "        try:\n"
        "            x()\n"
        "        except OSError:\n"
        "            pass\n"
        "class B:\n"
        "    def run(self):\n"
        "        try:\n"
        "            y()\n"
        "        except OSError:\n"
        "            pass\n"
    )
    assert scan_source(src) == [("A.run", "except OSError:"), ("B.run", "except OSError:")]


if __name__ == "__main__":  # 便于手工核对当前口径下的处理点
    for key in sorted(collect_silent_handlers()):
        sys.stdout.write(key + "\n")