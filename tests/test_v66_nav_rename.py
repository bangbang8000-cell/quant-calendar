"""v6.6 M4: 一级菜单更名门禁 (T-6.6.29 ~ T-6.6.31)

用户原话: 「一级菜单 策略 需要改成 策略概览」

背景 (EVAL-v6.6 §3.1.4 / PRD FR-6.6.6, 决策 D1):
  一级菜单「策略」与其下的二级「策略研究」、三级「策略管理/策略回测」语义重叠,
  用户无法区分「策略」是栏目还是动作。更名「策略概览」后形成
  一级「策略概览」→ 二级「概览」的清晰层级。

本测试只守护**一级菜单标签**, 不碰其它同词概念:
  - exec.strategy(执行策略)、glossary.cat.strategy(术语分类)、
    command-panel 的 subLabel '策略' 都属于不同语义, 不应改动。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(*parts):
    return open(os.path.join(BASE, *parts), encoding="utf-8").read()


# ── 一级菜单主体 ──
def test_nav_first_level_renamed():
    src = _read("frontend", "js", "nav-merge-core.js")
    assert "key: 'strategies', name: '策略概览'" in src, "一级菜单未更名「策略概览」"
    assert "key: 'strategies', name: '策略'" not in src, "仍存在旧的一级菜单名「策略」"


def test_nav_comment_updated():
    """文件头的一级菜单清单注释也要同步, 否则后续维护者会被误导"""
    src = _read("frontend", "js", "nav-merge-core.js")
    line = [l for l in src.splitlines() if "一级 7:" in l]
    assert line, "未找到一级菜单清单注释"
    assert "策略概览" in line[0], f"注释未同步: {line[0]}"


# ── 多语言 ──
def test_zh_cn_locale_renamed():
    src = _read("frontend", "js", "locales", "zh-CN.js")
    assert "'nav.strategies': '策略概览'" in src


def test_all_locales_have_nonempty_nav_strategies():
    """所有语言包都必须有该键, 否则切换语言后出现空菜单项"""
    loc_dir = os.path.join(BASE, "frontend", "js", "locales")
    files = [f for f in sorted(os.listdir(loc_dir)) if f.endswith(".js")]
    assert len(files) >= 4, f"语言包数量异常: {files}"
    for fname in files:
        src = open(os.path.join(loc_dir, fname), encoding="utf-8").read()
        m = re.search(r"'nav\.strategies':\s*'([^']*)'", src)
        assert m, f"{fname} 缺少 nav.strategies"
        assert m.group(1).strip(), f"{fname} 的 nav.strategies 为空"
        # 除中文简体外, 各语言应有自己的译法（不是照抄中文）
        if fname not in ("zh-CN.js", "zh-TW.js"):
            assert m.group(1) != "策略", f"{fname} 仍是中文原文"


# ── 不得误伤同词概念 ──
def test_unrelated_strategy_labels_untouched():
    """exec.strategy / glossary.cat.strategy 属不同语义, 不得被一起改掉"""
    cn = _read("frontend", "js", "locales", "zh-CN.js")
    assert "'exec.strategy': '策略'" in cn, "执行策略被误改"
    assert "'glossary.cat.strategy': '策略'" in cn, "术语分类被误改"


def test_subpage_name_already_consistent():
    """二级「概览」映射已存在, 更名后一级/二级语义一致"""
    src = _read("frontend", "js", "app-logic", "workspace.js")
    assert "'strategies.overview': '策略概览'" in src, "二级概览名不一致"


# ── 移动端底部导航 ──
def test_mobile_bottom_tab_renamed():
    """移动端底部 7 个 tab 也是「一级菜单」入口, 必须同步更名"""
    src = _read("frontend", "src", "components", "MobileNav.vue")
    assert "{ key: 'strategies', label: '策略概览'" in src, "移动端 tab 未更名"
    assert "{ key: 'strategies', label: '策略'" not in src, "移动端 tab 仍为旧名"


def test_mobile_tab_no_wrap_guard():
    """4 字标签在窄屏(320-375px)下 7 个 tab 会折行破版 → 必须有 not-wrap 约束"""
    css = _read("frontend", "css", "nav.css")
    assert ".qc-mobile-tab > span" in css, "缺少移动端 tab 文本约束"
    block = css.split(".qc-mobile-tab > span")[1].split("}")[0]
    assert "nowrap" in block, "未禁止折行"
    assert "ellipsis" in block, "缺少溢出省略兜底"
