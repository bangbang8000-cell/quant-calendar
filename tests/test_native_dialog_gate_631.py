# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.1): 原生弹窗清零门禁

前端业务源码不得直接调用浏览器原生弹窗（``alert`` / ``confirm`` / ``prompt``）：
三者会阻塞渲染线程、无法跟随主题、无法无障碍标注，且与站内消息/确认组件风格割裂。
统一走 Element Plus 的 ``ElMessage``（消息）与 ``ElMessageBox``（确认 / 输入）。

扫描口径：
- 目录 ``frontend/js``（``dist`` / ``vendor`` / ``node_modules`` 排除）
- 先剥字符串再剥注释（复用 ``test_frontend_deps_audit`` 的两个剥离器），
  避免注释与文案里的示例写法误报
- 只匹配独立调用；成员调用（``ElMessageBox.confirm(``）不计
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from test_frontend_deps_audit import _strip_comments, _strip_strings  # noqa: E402

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_ROOT = os.path.join(BASE, "frontend", "js")
SKIP_DIRS = {"node_modules", "vendor", "dist"}

# 独立调用（前置字符非标识符/成员点，排除 `ElMessageBox.confirm(` 与 `xalert(`）
# 以及显式全局限定调用（`window.alert(` / `globalThis.confirm(`）都算原生弹窗
_NATIVE_CALL_RE = re.compile(
    r'(?<![\w.$])(?:window\.|globalThis\.|self\.)?(alert|confirm|prompt)\s*\('
)


def _iter_sources():
    """遍历业务源码，产出 (仓库根相对路径, 去注释去字符串后的源码)"""
    for dirpath, dirnames, filenames in os.walk(JS_ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in sorted(filenames):
            if not fn.endswith(".js"):
                continue
            path = os.path.join(dirpath, fn)
            with io.open(path, encoding="utf-8", errors="ignore") as f:
                raw = f.read()
            rel = os.path.relpath(path, BASE).replace("\\", "/")
            yield rel, _strip_comments(_strip_strings(raw))


def collect_violations():
    """返回 {相对路径: [命中的原生调用名, ...]}"""
    out = {}
    for rel, src in _iter_sources():
        hits = [m.group(1) for m in _NATIVE_CALL_RE.finditer(src)]
        if hits:
            out[rel] = hits
    return out


def test_no_native_dialog_call():
    violations = collect_violations()
    detail = "\n  ".join(
        "%s: %s" % (rel, ", ".join("%s(" % n for n in sorted(set(hits))))
        for rel, hits in sorted(violations.items())
    )
    assert not violations, (
        "前端业务源码存在原生弹窗调用（6.3.1 要求清零）：\n  %s\n"
        "消息用 ElementPlus.ElMessage.{success,error,warning}，"
        "确认/输入用 ElementPlus.ElMessageBox.{confirm,prompt}。" % detail
    )


def test_gate_catches_stripped_comment_example():
    """门禁自检：注释里的示例写法不误报，真实调用必须命中"""
    sample = (
        "// v3.16: confirm() → ElMessageBox.confirm（统一确认弹窗风格）\n"
        "/* alert('示例') */\n"
        "const s = \"https://example.com/alert(a)\";\n"
        "ElMessageBox.confirm('确定？');\n"
        "ElMessage.error('失败');\n"
    )
    assert not _NATIVE_CALL_RE.findall(_strip_comments(_strip_strings(sample)))
    assert _NATIVE_CALL_RE.findall("window.alert('x');") == ["alert"]