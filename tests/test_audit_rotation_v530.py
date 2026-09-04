# -*- coding: utf-8 -*-
"""
V5.3.0 (T-5.3.0.6): 审计日志轮转守卫测试

覆盖:
- 按日归档文件命名审计 (audit.log.YYYY-MM-DD)
- 启动清理: 超过保留天数(默认 30)的归档被删除, 新归档保留
- 保留天数可配置 (AUDIT_RETENTION_DAYS env)
- 清理幂等 (无归档/已清理过不报错)
"""
import os
import sys
import time

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))


@pytest.fixture
def audit_dir(tmp_path, monkeypatch):
    """隔离: 把 audit 文件重定向到临时目录, 并重置模块级 logger"""
    import audit_log
    _old_file = audit_log.AUDIT_LOG_FILE
    _old_db = audit_log.AUDIT_DB_FILE
    _old_logger = audit_log._logger
    audit_log.AUDIT_LOG_FILE = str(tmp_path / "audit.log")
    audit_log.AUDIT_DB_FILE = str(tmp_path / "audit_logs.db")
    audit_log._logger = None  # 强制重建 handler
    yield tmp_path, audit_log
    audit_log.AUDIT_LOG_FILE = _old_file
    audit_log.AUDIT_DB_FILE = _old_db
    audit_log._logger = _old_logger


def _make_archive(tmp_path, days_ago):
    """构造一个 audit.log.YYYY-MM-DD 归档文件 (mtime = now - days_ago 天)"""
    from datetime import datetime, timedelta
    day = (datetime.now() - timedelta(days=days_ago)).strftime('%Y-%m-%d')
    p = tmp_path / ("audit.log." + day)
    p.write_text("test-line\n", encoding='utf-8')
    past = time.time() - days_ago * 86400
    os.utime(p, (past, past))
    return p


class TestStartupCleanup:
    def test_cleanup_removes_old_archives(self, audit_dir):
        """超过保留天数的归档被清理"""
        tmp_path, audit_log = audit_dir
        old = _make_archive(tmp_path, 31)
        fresh = _make_archive(tmp_path, 3)
        removed = audit_log._cleanup_old_archives()
        assert not old.exists(), "31 天前的归档应被清理"
        assert fresh.exists(), "3 天前的归档应保留"
        assert removed >= 1

    def test_cleanup_keeps_new_archives(self, audit_dir):
        """保留天数内的归档全部保留"""
        tmp_path, audit_log = audit_dir
        for d in (1, 5, 29, 30):
            _make_archive(tmp_path, d)
        audit_log._cleanup_old_archives()
        remaining = [p.name for p in tmp_path.glob("audit.log.*")]
        assert len(remaining) == 4, f"应保留 4 个新归档: {remaining}"

    def test_cleanup_idempotent_without_archives(self, audit_dir):
        """无归档时清理幂等不报错"""
        tmp_path, audit_log = audit_dir
        assert audit_log._cleanup_old_archives() == 0

    def test_cleanup_respects_retention_env(self, audit_dir, monkeypatch):
        """AUDIT_RETENTION_DAYS 环境变量控制保留天数"""
        tmp_path, audit_log = audit_dir
        monkeypatch.setenv("AUDIT_RETENTION_DAYS", "7")
        old = _make_archive(tmp_path, 10)
        fresh = _make_archive(tmp_path, 2)
        audit_log._cleanup_old_archives()
        assert not old.exists(), "10 天前归档应在 7 天保留下被清理"
        assert fresh.exists()

    def test_startup_calls_cleanup(self, audit_dir):
        """_get_logger 初始化时自动执行启动清理"""
        tmp_path, audit_log = audit_dir
        old = _make_archive(tmp_path, 40)
        _ = audit_log._get_logger()
        assert not old.exists(), "启动时应自动清理超期归档"
