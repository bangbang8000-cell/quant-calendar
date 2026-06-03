#!/usr/bin/env python3
"""pytest for auth"""
import pytest


@pytest.fixture(scope='module')
def auth():
    import sys, os
    sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
    import config
    config.settings.SECRET_KEY = 'test-secret-pytest'
    from auth import create_access_token, login_user
    return create_access_token, login_user


class TestAuth:
    def test_token_creation(self, auth):
        create, _ = auth
        token = create({'sub': 'admin', 'role': 'admin'})
        assert len(token) > 20

    def test_login_admin(self, auth):
        _, login = auth
        token = login('admin', 'admin')
        assert token is not None
        assert token.username == 'admin'

    def test_login_guest(self, auth):
        _, login = auth
        token = login('guest', 'guest')
        assert token is not None
        assert token.role == 'guest'

    def test_login_fail(self, auth):
        _, login = auth
        assert login('admin', 'wrong') is None
