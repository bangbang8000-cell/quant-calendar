"""pytest configuration — patch paths before module imports"""
import sys, os, tempfile
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))


@pytest.fixture(scope='session', autouse=True)
def patch_users_file():
    """Use non-existent path so UserManager auto-creates admin+guest"""
    import paths
    old = paths.USERS_FILE
    paths.USERS_FILE = os.path.join(tempfile.mkdtemp(), 'users.json')
    yield
    paths.USERS_FILE = old
