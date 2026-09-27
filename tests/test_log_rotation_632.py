# -*- coding: utf-8 -*-
"""6.3.2 (T-6.3.2.4): 日志轮转与磁盘守护复核门禁

- 应用日志 (app.log) 按日轮转 (TimedRotatingFileHandler, midnight)
- 结构化日志 (app.json.log) 按日轮转 + 幂等安装 (install_json_handler 去重)
- 审计日志 (audit.log) 按日轮转 + 超期归档清理
- 磁盘阈值告警 (scheduler._check_disk_alert) 存在且默认阈值合理
"""
import io
import logging
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_app_log_rotates_midnight():
    """应用日志 basicConfig 按日轮转且保留 >= 30 份"""
    src = _read("backend/main_new.py")
    assert "TimedRotatingFileHandler" in src, "应用日志未使用轮转 handler"
    assert 'when="midnight"' in src, "应用日志应午夜轮转"
    assert "backupCount=30" in src, "应用日志应保留 30 份归档"


def test_json_log_handler_rotates_and_idempotent(tmp_path):
    """结构化日志 handler 按日轮转; 重复安装同文件不重复追加"""
    import structured_log
    lg = logging.getLogger("test.rotation.632")
    lg.setLevel(logging.INFO)
    lg.propagate = False
    h1 = structured_log.install_json_handler(str(tmp_path), logger=lg)
    h2 = structured_log.install_json_handler(str(tmp_path), logger=lg)
    assert h1 is h2, "重复安装应返回同一 handler (幂等去重)"
    assert lg.handlers.count(h1) == 1, "同一 handler 不应重复追加"
    assert isinstance(h1, logging.handlers.TimedRotatingFileHandler)
    assert h1.when.upper() == "MIDNIGHT" and h1.backupCount >= 30


def test_audit_log_rotates_and_cleans():
    """审计日志按日轮转 + 启动清理超期归档"""
    src = _read("backend/audit_log.py")
    assert "TimedRotatingFileHandler" in src, "审计日志未使用轮转 handler"
    assert 'when="midnight"' in src, "审计日志应午夜轮转"
    assert "backupCount=30" in src, "审计日志应保留 30 份"
    assert "_cleanup_old_archives" in src, "缺审计归档清理"
    assert "AUDIT_RETENTION_DAYS" in src, "审计保留天数应可配置"


def test_json_handler_wired_in_main():
    """main_new.py 安装 app.json.log handler (结构化日志落地)"""
    src = _read("backend/main_new.py")
    assert "structured_log.install_json_handler(LOG_DIR)" in src, "main_new.py 未安装 JSON handler"


def test_disk_alert_guard_present():
    """磁盘阈值告警存在且默认阈值合理 (10%)"""
    src = _read("backend/scheduler/_alerts.py")
    assert "def _check_disk_alert" in src, "缺磁盘告警检测"
    assert "threshold_percent: float = 10.0" in src, "磁盘告警默认阈值应为 10%"
    assert "每日最多一次" in src or "self._disk_alert_date" in src, "磁盘告警应每日节流"