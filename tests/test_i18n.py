# -*- coding: utf-8 -*-
"""
FR-3.17.14: i18n 国际化测试
- 语言包结构（zh-CN/en 同 key 集合、无缺词、核心 key 齐备）
- t() 渲染（普通 / 参数占位符 / 未知 key 回退原样）
- setLocale/getLocale 切换、默认 zh-CN、非法值回退
- 占位符完整性（同 key zh/en 的 {param} 集合一致）
- 缺词守卫（全前端 t('xxx') 字面量在两包中均有定义）
- 语言偏好键（preferences language）
真实 t()/setLocale 语义经 Node 执行 i18n.js + locales 验证（node 不可用时 skip）。
"""
import os
import re
import shutil
import subprocess

import pytest

FRONTEND_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + os.sep + "frontend"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
I18N_PATH = os.path.join(FRONTEND_ROOT, "js", "i18n.js")
ZH_PATH = os.path.join(FRONTEND_ROOT, "js", "locales", "zh-CN.js")
EN_PATH = os.path.join(FRONTEND_ROOT, "js", "locales", "en.js")


def _read(rel: str) -> str:
    with open(os.path.join(FRONTEND_ROOT, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


def _read_root(rel: str) -> str:
    with open(os.path.join(ROOT, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


def _locale_keys(path: str) -> set:
    """解析语言包文件中的 key 集合（'key': ... 逐行）"""
    with open(path, encoding="utf-8") as f:
        src = f.read()
    keys = re.findall(r"^\s*'([A-Za-z][A-Za-z0-9.\-]*)':", src, re.M)
    # 排除模块自身结构键（UMD 包装内非 messages 内容的 key 不会被上面的行首锚匹配到）
    return set(keys)


def _locale_values(path: str):
    """解析语言包为 {key: value}（值取首个引号字符串字面量）"""
    with open(path, encoding="utf-8") as f:
        src = f.read()
    out = {}
    for m in re.finditer(r"^\s*'([A-Za-z][A-Za-z0-9.\-]*)':\s*'((?:[^'\\]|\\.)*)'", src, re.M):
        out[m.group(1)] = m.group(2)
    return out


def _all_t_literals():
    """扫描全前端 js + index.html 提取 t('xxx') 字面量 key"""
    keys = set()
    idx = os.path.join(FRONTEND_ROOT, "index.html")
    with open(idx, encoding="utf-8") as f:
        keys.update(re.findall(r"\bt\(\s*'([^']+)'", f.read()))
    for root, _dirs, files in os.walk(os.path.join(FRONTEND_ROOT, "js")):
        for fn in files:
            if not fn.endswith(".js"):
                continue
            p = os.path.join(root, fn)
            with open(p, encoding="utf-8") as f:
                src = f.read()
            keys.update(re.findall(r"\bt\(\s*'([^']+)'", src))
    return keys


# ─── 语言包结构 ────────────────────────────────────────────────

def test_locale_files_exist():
    """语言包文件（zh-CN/en）存在且为原生 JS 对象（零构建）"""
    for p in (ZH_PATH, EN_PATH):
        assert os.path.exists(p), f"语言包文件缺失: {p}"
        with open(p, encoding="utf-8") as f:
            assert "module.exports" in f.read(), "语言包应支持 Node require（供 pytest）"


def test_locales_same_key_set():
    """zh-CN 与 en 语言包 key 集合完全一致（缺词/多词均报错）"""
    zh = _locale_keys(ZH_PATH)
    en = _locale_keys(EN_PATH)
    assert zh == en, (
        f"zh/en key 集合不一致: 仅 zh 有 {sorted(zh - en)}; 仅 en 有 {sorted(en - zh)}"
    )
    assert len(zh) >= 100, f"语言包 key 数量过少: {len(zh)}"


def test_core_keys_present():
    """核心界面 key 齐备（导航/登录/日历/详情体检/评估/自选/组合/系统/通用）"""
    required = [
        "nav.strategies", "nav.calendar", "nav.ai", "nav.research", "nav.system",
        "login.title", "login.submit", "login.guest",
        "common.loading", "common.dataUnavailable", "common.confirm", "common.cancel",
        "common.save", "common.close", "common.search", "common.empty", "common.retry",
        "calendar.poolTitle", "calendar.all", "calendar.newPool", "calendar.currentHold",
        "calendar.outPool", "calendar.poolManage",
        "detail.title", "detail.loading", "detail.tabFactor", "detail.factorLoading",
        "detail.factorEmpty", "detail.factorNoData", "detail.factorCount",
        "ai.title", "ai.watchlist", "ai.portfolio", "ai.evalHitRate",
        "research.marketReview",
        "system.title", "system.language", "system.resourceMonitor",
        "lang.zh-CN", "lang.en",
    ]
    zh = _locale_keys(ZH_PATH)
    missing = [k for k in required if k not in zh]
    assert not missing, f"语言包缺少核心 key: {missing}"


def test_zh_matches_original():
    """zh-CN 语言包关键文案与原界面一致（不改变现有中文用户观感）"""
    zh = _locale_values(ZH_PATH)
    assert zh["nav.calendar"] == "量化日历", "zh nav.calendar 应为 量化日历"
    assert zh["nav.system"] == "系统配置", "zh nav.system 应为 系统配置"
    assert zh["login.title"] == "量化选股日历"
    assert zh["calendar.poolTitle"] == "策略共识度股票池"
    assert zh["detail.factorTitle"] == "多因子体检"
    assert zh["ai.evalHitRate"] == "评估命中率"
    assert zh["research.marketReview"] == "市场复盘"
    assert zh["system.title"] == "🖥 系统状态"


def test_default_locale_zh_cn():
    """默认语言必须为 zh-CN（不破坏现有中文用户）"""
    src = _read("js/i18n.js")
    assert "const DEFAULT_LOCALE = 'zh-CN'" in src, "i18n.js 默认语言应为 zh-CN"
    assert "'zh-CN'" in src and "'en'" in src, "应声明 SUPPORTED_LOCALES 含 zh-CN/en"
    app = _read("js/app-logic.js")
    assert "'zh-CN'" in app, "app-logic 语言恢复默认应为 zh-CN"


# ─── 占位符完整性 ──────────────────────────────────────────────

def test_placeholder_integrity_across_locales():
    """同 key 的 zh/en 值中 {param} 占位符集合一致（格式不崩）"""
    zh = _locale_values(ZH_PATH)
    en = _locale_values(EN_PATH)
    bad = []
    for k in zh:
        if k not in en:
            continue
        zh_pl = set(re.findall(r"\{(\w+)\}", zh[k]))
        en_pl = set(re.findall(r"\{(\w+)\}", en[k]))
        if zh_pl != en_pl:
            bad.append((k, zh_pl, en_pl))
    assert not bad, f"占位符集合不一致: {bad}"


# ─── 缺词守卫 ─────────────────────────────────────────────────

def test_all_t_literals_defined():
    """全前端 t('xxx') 字面量 key 在 zh-CN 与 en 两包中均有定义（防缺词）；
    动态 key 前缀（如 t('nav.' + m.key)）以 '.' 结尾，单独校验前缀存在性"""
    zh = _locale_keys(ZH_PATH)
    en = _locale_keys(EN_PATH)
    t_keys = _all_t_literals()
    assert t_keys, "未扫描到任何 t('...') 调用"
    dynamic_prefixes = sorted(k for k in t_keys if k.endswith('.'))
    static_keys = {k for k in t_keys if not k.endswith('.')}
    missing = sorted(k for k in static_keys if k not in zh or k not in en)
    assert not missing, f"t() 调用在语言包中缺定义: {missing}"
    for prefix in dynamic_prefixes:
        assert any(k.startswith(prefix) for k in zh), f"动态 key 前缀 {prefix} 在 zh 包中无对应 key"
        assert any(k.startswith(prefix) for k in en), f"动态 key 前缀 {prefix} 在 en 包中无对应 key"


def test_zh_values_nonempty():
    """zh-CN 语言包值均非空（防止空串缺词）"""
    zh = _locale_values(ZH_PATH)
    empty = [k for k, v in zh.items() if not v.strip()]
    assert not empty, f"zh 语言包存在空值: {empty}"


# ─── 真实 t()/setLocale 语义（Node 执行）────────────────────────

def _node_eval(script: str):
    code = (
        "const i18n = require(process.argv[1]);\n"
        "const zh = require(process.argv[2]);\n"
        "const en = require(process.argv[3]);\n"
        "i18n.registerLocale('zh-CN', zh);\n"
        "i18n.registerLocale('en', en);\n"
        + script
    )
    proc = subprocess.run(
        ["node", "-e", code, I18N_PATH, ZH_PATH, EN_PATH],
        capture_output=True, text=True, timeout=15,
    )
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return proc.stdout


@pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")
def test_node_t_basic_zh():
    """t() 默认 zh-CN 渲染中文"""
    out = _node_eval(
        "process.stdout.write(i18n.getLocale() + '|' + i18n.t('nav.calendar')\n"
        "  + '|' + i18n.t('common.empty') + '|' + i18n.t('system.title'));"
    )
    locale, nav, empty, sys_title = out.split("|")
    assert locale == "zh-CN", f"默认 locale 应为 zh-CN, got {locale}"
    assert nav == "量化日历"
    assert empty == "暂无数据"
    assert sys_title == "🖥 系统状态"


@pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")
def test_node_t_params_placeholder():
    """t() 参数占位符 {name} 替换（zh/en）"""
    out = _node_eval(
        "const zhTxt = i18n.t('detail.subtitle', { days: 5 });\n"
        "i18n.setLocale('en');\n"
        "const enTxt = i18n.t('detail.subtitle', { days: 5 });\n"
        "const cntTxt = i18n.t('detail.factorCount', { count: 12 });\n"
        "process.stdout.write(zhTxt + '|' + enTxt + '|' + cntTxt);"
    )
    zh, en, cnt = out.split("|")
    assert zh == "📅 策略持仓 5 天"
    assert en == "📅 Held for 5 days"
    assert cnt == "12 factors in total"


@pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")
def test_node_t_unknown_key_fallback():
    """t() 未知 key 回退原样（返回 key 本身，不崩溃）"""
    out = _node_eval(
        "process.stdout.write(i18n.t('no.such.key') + '|' + i18n.t('missing.thing', {x: 1}));"
    )
    assert out == "no.such.key|missing.thing", f"未知 key 应回退原样: {out}"


@pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")
def test_node_set_get_locale_switch():
    """setLocale/getLocale 切换 + en 渲染 + 非法值回退默认"""
    out = _node_eval(
        "i18n.setLocale('en');\n"
        "const l1 = i18n.getLocale();\n"
        "const nav = i18n.t('nav.calendar');\n"
        "i18n.setLocale('xx');\n"
        "const l2 = i18n.getLocale();\n"
        "const nav2 = i18n.t('nav.calendar');\n"
        "process.stdout.write(l1 + '|' + nav + '|' + l2 + '|' + nav2);"
    )
    l1, nav, l2, nav2 = out.split("|")
    assert l1 == "en" and nav == "Quant Calendar", f"切换 en 失败: {l1}/{nav}"
    assert l2 == "zh-CN", "非法 locale 应回退默认 zh-CN"
    assert nav2 == "量化日历"


@pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")
def test_node_register_locale():
    """registerLocale 装配：支持语言返回 true、非法返回 false"""
    out = _node_eval(
        "process.stdout.write(String(i18n.registerLocale('zh-CN', zh)) + '|'"
        " + String(i18n.registerLocale('fr', {})) + '|' + String(i18n.registerLocale('en', en)));"
    )
    assert out == "true|false|true"


# ─── 语言偏好键 ────────────────────────────────────────────────

def test_preferences_language_key():
    """preferences 语言偏好键存在且合法取值 zh-CN/en（持久化）"""
    prefs = _read("js/preferences.js")
    assert "'language'" in prefs, "preferences.js 应含 language 偏好键"
    assert "'zh-CN'" in prefs and "'en'" in prefs, "language 取值应含 zh-CN/en"
    assert "PREFERENCE_KEYS" in prefs, "应注册到 PREFERENCE_KEYS"
    # 后端 user_config 同步支持 language（登录用户后端持久化）
    ucfg = _read_root("backend/api/v1/user_config.py")
    assert '"language"' in ucfg, "后端 user_config 应支持 language 偏好键"
    assert '"zh-CN"' in ucfg and '"en"' in ucfg, "后端 language 取值应含 zh-CN/en"
