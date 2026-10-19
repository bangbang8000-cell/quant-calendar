# -*- coding: utf-8 -*-
"""v6.4 (FR-6.4.6): 启动弱口令告警必须回传**实际命中**的口令。

事故
----
生产日志长期输出：

    管理员密码仍为默认口令 (admin/admin123)!

而 bcrypt 实测生产口令是 `admin`，`admin123` 从未校验过。提示本身不可信，
运维照着改口令时会先试 `admin123` 而失败。根因是文案硬编码候选清单。
"""
import os
import re
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from user_manager import UserManager  # noqa: E402


def _um_with(username, password, role='admin'):
    """构造一个不落盘的 UserManager。"""
    um = UserManager()
    um.users = {
        username: {
            'username': username,
            'password': um._hash_password(password),
            'role': role,
            'theme': 'gold',
            'enabled': True,
        }
    }
    return um


def test_matched_default_password_returns_actual_value():
    """弱口令 admin → 回传 'admin'（而不是布尔）。"""
    um = _um_with('admin', 'admin')
    assert um.matched_default_password('admin') == 'admin'
    assert um.is_default_password('admin') is True


def test_matched_default_password_other_candidate():
    """弱口令 admin123 → 回传 'admin123'，证明不是写死 'admin'。"""
    um = _um_with('admin', 'admin123')
    assert um.matched_default_password('admin') == 'admin123'


def test_strong_password_no_warning():
    """U-302: 强口令不产生告警。"""
    um = _um_with('admin', 'Str0ng-Pass!2026')
    assert um.matched_default_password('admin') is None
    assert um.default_password_warning('admin') is None


def test_warning_text_uses_matched_value():
    """U-301: 文案含真实值、不含未命中的候选。"""
    um = _um_with('admin', 'admin')
    msg = um.default_password_warning('admin')
    assert msg, '弱口令必须告警'
    assert '(admin/admin)' in msg, '文案应回传实际命中的口令'
    assert 'admin123' not in msg, '文案不得列举未命中的候选口令'


def test_guest_warning_path():
    """访客告警同样回传真实值。"""
    um = UserManager()
    um.users = {
        'guest': {'username': 'guest',
                  'password': um._hash_password('guest'),
                  'role': 'guest', 'theme': 'gold', 'enabled': True}
    }
    msg = um.default_password_warning('guest')
    assert msg and '(guest/guest)' in msg
    # admin 不存在时不应误报
    assert um.default_password_warning('admin') is None


def test_startup_code_has_no_hardcoded_candidate():
    """源码级护栏：启动段不得再出现硬编码的 admin123 文案。"""
    p = os.path.join(os.path.dirname(__file__), '..', 'backend', 'main_new.py')
    with open(p, encoding='utf-8') as f:
        src = f.read()
    assert 'admin/admin123' not in src, '启动告警文案不得再硬编码候选口令'
    assert 'default_password_warning' in src, '启动段应调用回传真实值的告警方法'


def test_no_plaintext_password_in_warning():
    """日志文案只含口令值本身，不泄露哈希。"""
    um = _um_with('admin', 'admin')
    msg = um.default_password_warning('admin')
    assert not re.search(r'\$2[aby]\$', msg), '告警不得包含 bcrypt 哈希'
