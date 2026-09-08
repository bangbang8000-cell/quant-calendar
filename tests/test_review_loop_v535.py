# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.5.4 / FR-5.3.5.4): 短线复盘闭环守护

复盘闭环链路 (V5.2.4 基线 + V5.3.5 确认):
- 验证条件自设 (custom 覆盖基线阈值)
- 三态核验 (verify_conditions → hit/miss/unknown)
- 记分板 (reflection.save_reflection)
- 前端追问聊天 + 验证条件展示
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    with open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_verification_custom_override_route():
    """verification API 支持 custom 覆盖基线阈值"""
    src = _read("backend/api/v1/shortterm.py")
    assert "custom: str = None" in src
    assert "_parse_custom" in src
    assert "'threshold': v" in src, "custom 阈值应覆盖基线"


def test_three_state_verification():
    """三态核验: hit/miss/unknown"""
    src = _read("backend/api/v1/shortterm.py")
    assert "verify_conditions" in src
    assert "reflection.save_reflection" in src, "记分板落盘"


def test_frontend_verification_display():
    """前端展示验证条件 + 追问聊天"""
    src = _read("frontend/js/components/shortterm-page.js")
    assert "明日验证条件" in src, "验证条件展示缺失"
    assert "sendChat" in src and "chatQuestion" in src, "追问聊天链路缺失"


def test_verification_module_three_states():
    """verification 模块支持三态判定"""
    import sys
    sys.path.insert(0, os.path.join(BASE, "backend"))
    from shortterm import verification as v
    assert v._direction(">=", 5.0, 4.0) == "成立"
    assert v._direction(">=", 3.0, 4.0) == "证伪"
    assert v._direction(">=", None, 4.0) == "数据不足"
