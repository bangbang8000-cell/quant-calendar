# -*- coding: utf-8 -*-
"""V6.5 (TEST-PLAN 6.5 TC-6.5.2.x): 全站 emoji → Lucide 图标 + AppIcon 白名单 — L2 门禁"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

# 装饰性 emoji 字符范围（排除语义标记 ✓ ✗ ✕ ● → ▼ ★ 等）
_EMOJI_RE = re.compile(
    "[\U0001F300-\U0001FAFF\u2B00-\u2BFF\uFE0F\u200D\u23E9-\u23FA]|[\u2600-\u2604\u2606-\u27BF]"
)

# 允许残留的语义标记（非装饰性）
_ALLOWED = set("✓✗✕●→▼▲◆▣①②③↗⏳⏸")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _strip_allowed(text):
    for ch in _ALLOWED:
        text = text.replace(ch, "")
    return text


def test_dialog_static_emoji_cleaned():
    """TC-6.5.2.4: 弹窗组件模板静态位无装饰性 emoji"""
    targets = [
        "js/components/dialogs/stock-detail.js",
        "js/components/dialogs/index-detail.js",
        "js/components/dialogs/merrill-detail.js",
        "js/components/dialogs/setup-wizard.js",
        "js/components/dialogs/batch-evaluate.js",
        "js/components/dialogs/auto-evaluate.js",
        "js/components/dialogs/menu-config.js",
        "js/components/dialogs/change-password.js",
    ]
    for rel in targets:
        src = _strip_allowed(_read_f(rel))
        # 排除 JS 注释行与 HTML 注释块
        src = re.sub(r"<!--.*?-->", "", src, flags=re.S)
        lines = [ln for ln in src.splitlines() if not ln.strip().startswith("//")]
        text = "\n".join(lines)
        found = _EMOJI_RE.findall(text)
        assert not found, f"{rel} 仍含装饰性 emoji: {sorted(set(found))}"


def test_system_page_static_emoji_cleaned():
    """TC-6.5.2.4: system-page.js 模板静态位无装饰性 emoji"""
    src = _strip_allowed(_read_f("js/components/system-page.js"))
    lines = [ln for ln in src.splitlines() if not ln.strip().startswith("//")]
    found = _EMOJI_RE.findall("\n".join(lines))
    assert not found, f"system-page.js 仍含装饰性 emoji: {sorted(set(found))}"


def test_strategies_page_static_emoji_cleaned():
    """TC-6.5.2.4: strategies-page.js 模板静态位无装饰性 emoji（语义标记 ⭐☆🤖✓✗🟡🟢✕⚠ 保留）"""
    src = _read_f("js/components/strategies-page.js")
    # 语义标记单独剥离
    for ch in "⭐☆🤖📈✓✗🟡🟢✕⚠●○▲▼→":
        src = src.replace(ch, "")
    src = _strip_allowed(src)
    src = re.sub(r"<!--.*?-->", "", src, flags=re.S)
    lines = [ln for ln in src.splitlines() if not ln.strip().startswith("//")]
    found = _EMOJI_RE.findall("\n".join(lines))
    assert not found, f"strategies-page.js 仍含装饰性 emoji: {sorted(set(found))}"


def test_shortterm_page_static_emoji_cleaned():
    """TC-6.5.2.4: shortterm-page.js 模板静态位无装饰性 emoji"""
    src = _strip_allowed(_read_f("js/components/shortterm-page.js"))
    lines = [ln for ln in src.splitlines() if not ln.strip().startswith("//")]
    text = "\n".join(lines)
    # 允许状态文本内语义标记 ✅⚠️📅（运行状态提示）单独处理: 仅检查 stat-icon 容器
    stat_icons = re.findall(r'<div class="stat-icon[^"]*">([^<]*)</div>', text)
    for icon in stat_icons:
        found = _EMOJI_RE.findall(icon)
        assert not found, f"shortterm-page.js stat-icon 仍含 emoji: {found}"


def test_appicon_whitelist_supports_new_names():
    """TC-6.5.2.5: AppIcon 白名单含 V6.5 新增图标 name"""
    src = _read_f("src/components/common/AppIcon.vue")
    for name in ("brain", "lightbulb", "octagon-x", "flag", "package",
                 "clipboard-list", "pin", "radio-tower", "gauge", "landmark",
                 "candlestick-chart", "wallet", "badge-check", "key", "factory",
                 "trophy", "rocket", "flame", "map-pin", "scroll-text",
                 "book-open", "dna", "bar-chart", "plus"):
        assert f"'{name}':" in src, f"AppIcon 白名单缺 {name}"


def test_locales_emoji_cleaned():
    """V6.5: 全部语言包文案无装饰性 emoji（仅允许语义 ★）"""
    for lang in ("zh-CN", "en", "ja", "ko", "zh-TW"):
        src = _read_f(f"js/locales/{lang}.js")
        found = _EMOJI_RE.findall(src)
        assert not found, f"{lang}.js 仍含装饰性 emoji: {sorted(set(found))}"


def test_qc_icon_globally_registered():
    """V6.5: main.js 已全局注册 qc-icon 组件"""
    src = _read_f("src/main.js")
    assert "AppIconV6" in src, "main.js 未导入 AppIcon"
    assert "AppIconV6.name = 'qc-icon'" in src, "AppIcon 未命名为 qc-icon"
    assert "window.__quantComponents.AppIcon = AppIconV6" in src, \
        "AppIcon 未注册进 __quantComponents"


def _strip_semantic(text, semantic_chars):
    for ch in semantic_chars:
        text = text.replace(ch, "")
    return text


def test_v66_page_emoji_cleaned():
    """TC-6.6.1.3: V6.6 清理文件无装饰性 emoji（语义标记按文件剥离）"""
    # (路径, 该文件保留的语义标记)
    cases = [
        ("js/components/research-page.js", "✓✗① ② ③ ④ ⑤─"),
        ("js/components/ai-page.js", "✓✗−▶"),
        ("js/components/calendar-page.js", "⭐☆▾▴«»"),
        ("js/components/focus-view.js", "🟢🟡⚪🟠🔴🔥🔵🆕📍🚪▲▼"),
        ("js/components/history-record.js", "✓⭐☆"),
        ("js/components/command-panel.js", "▼✓"),
        ("js/components/global-header.js", "▼✓"),
        ("js/command-panel-core.js", ""),
    ]
    for rel, semantic in cases:
        src = _read_f(rel)
        src = _strip_semantic(src, semantic)
        src = _strip_allowed(src)
        src = re.sub(r"<!--.*?-->", "", src, flags=re.S)
        lines = [ln for ln in src.splitlines() if not ln.strip().startswith("//")]
        found = _EMOJI_RE.findall("\n".join(lines))
        assert not found, f"{rel} 仍含装饰性 emoji: {sorted(set(found))}"
