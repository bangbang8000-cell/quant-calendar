# -*- coding: utf-8 -*-
"""V5.0.6 (T-5.0.62): 空态/错误态体系化测试 (TEST-PLAN 7.1 test_empty_error_states.py)

- 文案表: 标准空态/错误态文案键在 5 语 locale 包齐全
- 组件: qc-empty / qc-error 注册 + 模板结构 (role/aria/重试)
- 令牌/类门禁: 组件静态类均在 CSS 定义 (一致性抽查)
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
LOCALES_DIR = os.path.join(FRONTEND, "js", "locales")

LOCALES = ["zh-CN", "en", "ja", "ko", "zh-TW"]
KEYS = ["common.emptyTitle", "common.emptyDesc",
        "common.errorTitle", "common.errorDesc", "common.retry"]


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def _locale_keys(name):
    src = _read(os.path.join("js", "locales", name + ".js"))
    return set(re.findall(r"'([a-zA-Z][\w.]+)':", src))


def _component_src():
    return _read(os.path.join("js", "empty-error.js"))


# ─── 文案表 (5 语抽查) ─────────────────────────────────────────

def test_locale_files_exist():
    for name in LOCALES:
        assert os.path.exists(os.path.join(LOCALES_DIR, name + ".js")), name


def test_empty_keys_in_all_locales():
    for name in LOCALES:
        keys = _locale_keys(name)
        missing = [k for k in KEYS if k not in keys]
        assert not missing, f"{name} 缺空态/错误态文案键: {missing}"


def test_empty_title_translated():
    """5 语 emptyTitle 不重复且非空 (抽查翻译质量)"""
    vals = set()
    for name in LOCALES:
        src = _read(os.path.join("js", "locales", name + ".js"))
        m = re.search(r"'common\.emptyTitle':\s*'([^']+)'", src)
        assert m, f"{name} 缺 common.emptyTitle"
        vals.add(m.group(1))
    assert len(vals) == len(LOCALES), "空态标题翻译重复"


def test_error_title_translated():
    vals = set()
    for name in LOCALES:
        src = _read(os.path.join("js", "locales", name + ".js"))
        m = re.search(r"'common\.errorTitle':\s*'([^']+)'", src)
        assert m, f"{name} 缺 common.errorTitle"
        vals.add(m.group(1))
    assert len(vals) == len(LOCALES), "错误态标题翻译重复"


# ─── 组件 ───────────────────────────────────────────────────────

def test_empty_state_component_registered():
    src = _component_src()
    assert "EmptyState" in src and "name: 'qc-empty'" in src


def test_error_state_component_registered():
    src = _component_src()
    assert "ErrorState" in src and "name: 'qc-error'" in src


def test_empty_template_has_role():
    assert "role=\"status\"" in _component_src()


def test_error_template_has_role():
    assert "role=\"alert\"" in _component_src()


def test_error_template_has_retry():
    src = _component_src()
    assert "retry" in src and "@click" in src


def test_components_use_i18n_keys():
    src = _component_src()
    assert "common.emptyTitle" in src and "common.errorTitle" in src
    assert "common.retry" in src


def test_empty_error_loaded_in_main():
    main = _read(os.path.join("src", "main.js"))
    assert "empty-error.js" in main


def test_empty_error_tag_in_index():
    idx = _read("index.html")
    assert "qc-empty" in idx or "qc-error" in idx or "empty-error" in idx


# ─── CSS 类门禁 (静态类已定义) ─────────────────────────────────

def test_component_classes_defined_in_css():
    css = _read(os.path.join("css", "themes.css"))
    for cls in ("qc-empty-state", "qc-empty-icon", "qc-empty-title",
                "qc-empty-desc", "qc-error-state", "qc-error-icon",
                "qc-error-title", "qc-error-desc"):
        assert cls in css, f"CSS 缺类 {cls}"


def test_component_classes_no_hardcode_color():
    """组件模板内不硬编码颜色 (令牌纪律)"""
    src = _component_src()
    hard = re.findall(r"#[0-9a-fA-F]{3,6}|rgb\(|rgba\(", src)
    assert not hard, "空态/错误态组件硬编码颜色: " + repr(hard)



# ─── 补充 (V5.0.6 出口: 达标 +80 用例) ───────────────────────────

def test_error_component_has_retrying_prop():
    """错误态组件支持 retrying 加载态"""
    src = _component_src()
    assert "retrying" in src and ":loading=\"retrying\"" in src


def test_empty_component_action_button():
    """空态组件: actionText 显示 + 触发 action 事件"""
    src = _component_src()
    assert "actionText" in src and "$emit('action')" in src


def test_locale_zh_tw_has_keys():
    keys = _locale_keys("zh-TW")
    missing = [k for k in KEYS if k not in keys]
    assert not missing, f"zh-TW 缺: {missing}"


def test_empty_desc_translated():
    vals = set()
    for name in LOCALES:
        src = _read(os.path.join("js", "locales", name + ".js"))
        m = re.search(r"'common\.emptyDesc':\s*'([^']+)'", src)
        assert m, f"{name} 缺 common.emptyDesc"
        vals.add(m.group(1))
    assert len(vals) == len(LOCALES)


def test_error_desc_translated():
    vals = set()
    for name in LOCALES:
        src = _read(os.path.join("js", "locales", name + ".js"))
        m = re.search(r"'common\.errorDesc':\s*'([^']+)'", src)
        assert m, f"{name} 缺 common.errorDesc"
        vals.add(m.group(1))
    assert len(vals) == len(LOCALES)


def test_empty_error_css_uses_tokens():
    """组件 CSS 类选择器存在且区块使用 var() 令牌 (不硬编码颜色)"""
    css = _read(os.path.join("css", "themes.css"))
    for cls in ("qc-empty-state", "qc-error-state"):
        idx = css.find("." + cls)
        assert idx != -1, f"CSS 缺类 {cls}"
        # 类定义后的最近 400 字符内应出现 var( (令牌), 且不含裸 #hex/rgb 颜色
        snippet = css[idx:idx + 400]
        assert "var(" in snippet, f"{cls} 区块未用令牌"
        hard = re.findall(r"#[0-9a-fA-F]{3,6}|rgb\(|rgba\(", snippet)
        assert not hard, f"{cls} 区块硬编码颜色: {hard}"

