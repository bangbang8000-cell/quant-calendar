"""
依赖锁文件一致性测试 (TC-10.9, FR-3.10.2)

校验:
- requirements.in 的每个直接依赖在 requirements.lock 中被精确锁定 (==)
- 锁文件不含未锁定的 `>=`/`<=` 约束
- 若本机有 uv，则重编译比对，确保锁文件未漂移（权威校验由 CI 执行）
"""
import os
import re
import shutil
import subprocess

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PIN_RE = re.compile(r'^([A-Za-z0-9_.\-]+)==([^;]+)')


def _direct_deps(in_path):
    """解析 requirements.in 顶层直接依赖（去注释/空行），返回 {包名: 约束}"""
    deps = {}
    for line in open(in_path, encoding='utf-8'):
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        # 去掉 extra marker，如 python-jose[cryptography]
        name = line.split('[')[0].split('>=')[0].split('==')[0].strip()
        deps[name] = line
    return deps


def _locked_versions(lock_path):
    """解析 requirements.lock，返回 {包名: 版本}"""
    locked = {}
    for line in open(lock_path, encoding='utf-8'):
        line = line.strip()
        m = PIN_RE.match(line)
        if m:
            locked[m.group(1)] = m.group(2)
    return locked


def test_every_direct_dep_is_pinned():
    """requirements.in 的直接依赖全部在 lock 中精确锁定"""
    direct = _direct_deps(os.path.join(BASE, 'requirements.in'))
    locked = _locked_versions(os.path.join(BASE, 'requirements.lock'))
    assert direct, 'requirements.in 不应为空'
    for name, constraint in direct.items():
        assert '==' not in constraint, f'requirements.in 不应预锁定 {name}（由 uv 统一解析）'
        assert name in locked, f'直接依赖 {name} 未出现在 requirements.lock 中'
        assert '>' not in locked[name] and '<' not in locked[name], \
            f'{name} 未锁定为精确版本: {locked[name]}'


def test_lock_has_no_unpinned_entries():
    """锁文件不允许出现未锁定的约束（如 x>=1 或裸包名）"""
    for line in open(os.path.join(BASE, 'requirements.lock'), encoding='utf-8'):
        stripped = line.strip()
        if not stripped or stripped.startswith('#') or line[0] in ' \t':
            continue  # 空行 / 注释 / 缩进的 # via 注释
        assert re.match(r'^[A-Za-z0-9_.\-]+==', stripped), \
            f'锁文件出现未锁定行: {stripped}'


def test_lock_matches_in_no_drift():
    """重编译比对（本机有 uv 时）：requirements.lock 与 requirements.in 无漂移"""
    if not shutil.which('uv'):
        pytest_skip = 'uv 未安装，漂移校验由 CI 执行'
        import pytest
        pytest.skip(pytest_skip)
    out = '/tmp/_qc_lock_check.lock'
    # 清坏代理(系统 127.0.0.1:7892 无监听)避免 uv 拉索引结果漂移
    env = {k: v for k, v in os.environ.items() if not k.lower().endswith('proxy')}
    env['no_proxy'] = '*'
    env['NO_PROXY'] = '*'
    # 只读根文件系统/容器环境: uv 默认缓存 ~/.cache/uv 不可写会直接失败 → 重定向到可写临时目录
    default_cache = os.path.join(os.path.expanduser('~'), '.cache', 'uv')
    if os.path.exists(default_cache) and not os.access(default_cache, os.W_OK):
        import tempfile
        env.setdefault('UV_CACHE_DIR', tempfile.mkdtemp(prefix='qc-uv-cache-'))
    subprocess.run(['uv', 'pip', 'compile', '--universal', '--python-version', '3.11',
                    '-q', '-o', out, os.path.join(BASE, 'requirements.in')],
                   check=True, capture_output=True, env=env)
    # 忽略头部自动生成注释（含 -o 输出路径，会随路径变化），只比对依赖钉版本
    def package_lines(path):
        return [ln for ln in open(path, encoding='utf-8')
                if ln.strip() and not ln.strip().startswith('#')]
    assert package_lines(out) == package_lines(os.path.join(BASE, 'requirements.lock')), \
        'requirements.lock 已漂移，请重新运行 uv pip compile'
