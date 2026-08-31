#!/usr/bin/env python3
"""pytest for user_manager"""
import pytest


@pytest.fixture(scope='module')
def um():
    import sys, os
    sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
    from user_manager import UserManager
    return UserManager()


class TestUserManager:
    def test_admin_exists(self, um):
        admin = um.get_user('admin')
        assert admin is not None
        assert admin['role'] == 'admin'

    def test_guest_exists(self, um):
        guest = um.get_user('guest')
        assert guest is not None
        assert guest['role'] == 'guest'
        assert guest.get('locked') is True

    def test_password_verify(self, um):
        assert um.verify_password('admin', 'admin')
        assert um.verify_password('guest', 'guest')
        assert not um.verify_password('admin', 'wrong')

    def test_add_and_delete(self, um):
        assert um.add_user('alice', 'pw123', 'user')
        assert not um.add_user('alice', 'x')
        assert um.delete_user('alice')

    def test_admin_guest_protected(self, um):
        assert not um.delete_user('admin')
        assert not um.delete_user('guest')

    def test_guest_role_locked(self, um):
        assert not um.update_user('guest', role='admin')

    def test_list_users_no_leak(self, um):
        for u in um.list_users():
            assert 'password' not in u
