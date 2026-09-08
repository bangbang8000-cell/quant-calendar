#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V5.9 (T-5.9.7): 脚手架生成器 — 按仓库约定生成模块/测试/迁移骨架
用法:
  python3 scripts/scaffold.py test <name>            # tests/test_<name>.py
  python3 scripts/scaffold.py module <name>          # backend/<name>.py
  python3 scripts/scaffold.py migration <N> <name>   # backend/migrations/_NNNN_<name>.py
安全: 拒绝覆盖已存在文件; 标识符校验 (小写下划线); UTF-8 输出。
"""
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class ScaffoldError(Exception):
    pass


_IDENT = re.compile(r"^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$")  # 小写下划线, 不允许首尾/连续下划线


def _check_ident(name: str):
    if not _IDENT.match(name):
        raise ScaffoldError("非法标识符: %r (需小写下划线, 如 user_prefs)" % name)


def scaffold_test(name: str) -> str:
    _check_ident(name)
    path = os.path.join(BASE, "tests", "test_%s.py" % name)
    if os.path.exists(path):
        raise ScaffoldError("已存在: %s" % path)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    body = (
        "# -*- coding: utf-8 -*-\n"
        '"""V5.9 (T-5.9.7): %s 测试骨架 — 按 TDD 四步填写\n'
        "\n"
        "1. 写断言 (红)  2. 最小实现 (绿)  3. 重构  4. 全量回归\n"
        '"""\n'
        "import os\nimport sys\nimport pytest\n\n"
        'sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))\n\n\n'
        "@pytest.fixture\ndef sample():\n    return {}\n\n\n"
        "def test_placeholder(sample):\n    assert sample == {}\n"
    ) % name
    with open(path, "w", encoding="utf-8") as f:
        f.write(body)
    return path


def scaffold_module(name: str) -> str:
    _check_ident(name)
    path = os.path.join(BASE, "backend", "%s.py" % name)
    if os.path.exists(path):
        raise ScaffoldError("已存在: %s" % path)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    body = (
        "#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n"
        '"""%s — 模块骨架 (V5.9 T-5.9.7 脚手架生成)\n'
        "按仓库约定: 纯函数可单测, 模块级状态显式 reset, 文档串含版本出处。\n"
        '"""\nimport logging\n\nlogger = logging.getLogger(__name__)\n\n\n'
        "def hello() -> str:\n    return \"world\"\n"
    ) % name
    with open(path, "w", encoding="utf-8") as f:
        f.write(body)
    return path


def scaffold_migration(version: int, name: str) -> str:
    if not isinstance(version, int) or version <= 0:
        raise ScaffoldError("迁移版本必须是正整数")
    _check_ident(name)
    path = os.path.join(BASE, "backend", "migrations", "_%04d_%s.py" % (version, name))
    if os.path.exists(path):
        raise ScaffoldError("已存在: %s" % path)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    body = (
        "#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n"
        '"""V5.9 (T-5.9.4): 迁移 %04d — %s\n'
        "upgrade: 幂等; downgrade: 可逆 (列删除不可逆时用最佳努力+日志)。\n"
        '"""\n\n'
        'VERSION = %d\nNAME = "%s"\nDESCRIPTION = "%s"\n\n\n'
        "def upgrade(conn):\n    pass\n\n\n"
        "def downgrade(conn):\n    pass\n"
    ) % (version, name, version, name, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(body)
    return path


def main(argv=None):
    args = argv if argv is not None else sys.argv[1:]
    if len(args) < 2:
        print("用法: scaffold.py test|module|migration <name> [version]")
        return 2
    kind = args[0]
    try:
        if kind == "test":
            path = scaffold_test(args[1])
        elif kind == "module":
            path = scaffold_module(args[1])
        elif kind == "migration":
            path = scaffold_migration(int(args[1]), args[2])
        else:
            print("未知类型: %s" % kind)
            return 2
    except ScaffoldError as e:
        print("FAIL %s" % e)
        return 1
    print("OK %s" % path)
    return 0


if __name__ == "__main__":
    sys.exit(main())