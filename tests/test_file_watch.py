"""
文件变动监听自动导入测试 (v3.12 / FR-3.12.1, task 12.3 / TC-12.4)

覆盖 detect_csv_changes 纯函数:
- 无变动 → (False, ...)
- 修改 (mtime 变化) → (True, 文件变动)
- 新增文件 → (True, 新文件)
- 删除文件 → (True, 文件删除)
"""
from scheduler import detect_csv_changes


def test_no_change():
    prev = {'/q/a.csv': 100.0}
    cur = {'/q/a.csv': 100.0}
    changed, desc = detect_csv_changes(prev, cur)
    assert changed is False
    assert '无变动' in desc


def test_modified_mtime():
    prev = {'/q/a.csv': 100.0}
    cur = {'/q/a.csv': 105.0}
    changed, desc = detect_csv_changes(prev, cur)
    assert changed is True
    assert 'a.csv' in desc
    assert '文件变动' in desc


def test_new_file():
    prev = {'/q/a.csv': 100.0}
    cur = {'/q/a.csv': 100.0, '/q/b.csv': 120.0}
    changed, desc = detect_csv_changes(prev, cur)
    assert changed is True
    assert 'b.csv' in desc
    assert '新文件' in desc


def test_deleted_file():
    prev = {'/q/a.csv': 100.0, '/q/b.csv': 120.0}
    cur = {'/q/a.csv': 100.0}
    changed, desc = detect_csv_changes(prev, cur)
    assert changed is True
    assert 'a.csv' in desc or 'b.csv' in desc
    assert '文件删除' in desc


def test_empty_both_sides():
    assert detect_csv_changes({}, {})[0] is False
    assert detect_csv_changes({}, {'/q/a.csv': 1.0})[0] is True
