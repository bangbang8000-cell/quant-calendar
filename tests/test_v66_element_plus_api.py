"""v6.6 M5: Element Plus 单选组件 API 迁移门禁 (T-6.6.32 ~ T-6.6.34)

背景 (EVAL-v6.6 §3.1.5 / PRD FR-6.6.7):
  Element Plus 2.6 起 `<el-radio>` / `<el-radio-button>` 的 **值** 属性由 `label`
  改为 `value`; 旧的 `label` 保留为「显示文本」语义。本项目锁定 2.14.5,
  仍在用 `label` 作值 → 每次渲染产生弃用警告, 且未来升级会直接失效（值恒为 undefined）。

本测试守护:
  A. 全仓不存在把 `label` 当值用的 el-radio 写法;
  B. 迁移后 `value` 属性确实存在（不是把属性删了了事）;
  C. `label=""` 这种空字符串值必须原样迁成 `value=""`（「全部」选项）;
  D. 非 radio 组件的 `label=`（真正的显示文本）不得被误改。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_DIR = os.path.join(BASE, "frontend", "js")

# 把 label 当值用的 el-radio / el-radio-button（迁移目标）
_RADIO_LABEL = re.compile(r"<el-radio(?:-button)?\b[^>]*?\blabel=")
# 正确的 value 形式
_RADIO_VALUE = re.compile(r"<el-radio(?:-button)?\b[^>]*?\bvalue=")


def _all_js():
    out = []
    for root, _dirs, files in os.walk(JS_DIR):
        for f in files:
            if f.endswith(".js"):
                out.append(os.path.join(root, f))
    return out


def test_no_legacy_radio_label_as_value():
    """A: 全仓不得再有 el-radio 用 label 作值（Element Plus 2.6+ 已弃用）"""
    offenders = []
    for path in _all_js():
        src = open(path, encoding="utf-8").read()
        for i, line in enumerate(src.splitlines(), 1):
            if _RADIO_LABEL.search(line):
                rel = os.path.relpath(path, BASE)
                offenders.append(f"{rel}:{i}: {line.strip()[:110]}")
    assert not offenders, "仍存在把 label 当值用的 el-radio:\n" + "\n".join(offenders[:20])


def test_radio_value_present():
    """B: 迁移后必须真的用了 value, 而不是把属性删掉"""
    total = 0
    for path in _all_js():
        src = open(path, encoding="utf-8").read()
        total += len(_RADIO_VALUE.findall(src))
    assert total >= 21, f"value 用法过少({total}), 疑似属性被误删而非迁移"


def test_empty_string_value_preserved():
    """C: 「全部」选项的值是空字符串, 必须保留为 value="" 而不是丢失"""
    found = 0
    for path in _all_js():
        src = open(path, encoding="utf-8").read()
        found += len(re.findall(r'<el-radio(?:-button)?\b[^>]*?\bvalue=""', src))
    # 实测共 2 处「全部」选项: research/view-part2.js(因子视图) + system/view-part2.js(数据表筛选)
    assert found >= 2, f'空字符串值(value="")只剩 {found} 处, 疑似迁移时丢失「全部」选项'


def test_non_radio_label_untouched():
    """D: el-form-item / el-tab 等真正的显示文案 label 不得被误改"""
    # 抽查: 表单 label 普遍存在, 若被批量误改会导致表单失去标题
    total = 0
    for path in _all_js():
        src = open(path, encoding="utf-8").read()
        total += src.count("<el-form-item label=")
    assert total > 20, f"表单 label 数量异常({total}), 疑似被批量误改"


def test_radio_label_text_preserved_as_slot():
    """迁移后显示文本必须还在: 原 label="x">文本</el-radio> 的文本不能丢"""
    src = open(os.path.join(JS_DIR, "components", "system", "view-part2.js"), encoding="utf-8").read()
    assert 'value="union">并集（任一匹配）</el-radio>' in src, "迁移后显示文本丢失"
    assert 'value="kline">K线行情</el-radio>' in src, "迁移后显示文本丢失"


# ── T-6.6.43: 无数据时量比/涨速整项隐藏, 不输出孤立 % (AC-18 / 决策 D9) ──
def test_ratio_fields_hidden_when_empty():
    """「涨速 {{...}}%」必须带 v-if 守卫。

    旧实现无条件渲染, 上游不返回 rise_speed 时输出「涨速 %」—— 一个残缺的百分号。
    AC-18 明确要求「无数据时无涨速与 --%」。
    """
    p = os.path.join(BASE, "frontend", "js", "components", "ai", "view-part2.js")
    src = open(p, encoding="utf-8").read()
    import re
    for field in ("volume_ratio", "rise_speed"):
        line = [l for l in src.splitlines() if f"'{field}'" in l and "realtimeRatioText" in l and "class=" in l]
        assert line, f"未找到 {field} 的渲染行"
        assert "v-if" in line[0], (
            f"{field} 渲染行缺少 v-if 守卫（无数据会输出孤立 %）: {line[0].strip()[:100]}")
