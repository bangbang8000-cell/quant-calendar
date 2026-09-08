"""
术语统一回归守卫 (TC-13.1, v3.13) — 「评股」残留检测

v3.13 起全站术语统一为「评估」。此测试静态 grep 活动源码集，
断言「评股」出现次数为 0，防止历史词汇回归。

扫描范围（活动源码）:
- frontend/js/ 全部（含 components/、dialogs/）
- frontend/css/*.css
- frontend/index.html
- backend/**/*.py
- data/groups.json（若存在；gitignore 运行时文件）

已排除:
- frontend/lib/（第三方库，本仓库当前不存在）
- frontend/_new_script.html（废弃草稿）
- docs/（历史记录，不追溯改写）
- tests/ 自身
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TARGET = '评股'


def _source_files():
    """活动源码文件集"""
    files = []
    frontend = os.path.join(BASE, 'frontend')

    # JS 全部（排除 lib/）
    js_root = os.path.join(frontend, 'js')
    for root, dirs, names in os.walk(js_root):
        dirs[:] = [d for d in dirs if d != 'lib']
        for n in sorted(names):
            if n.endswith('.js'):
                files.append(os.path.join(root, n))

    # CSS
    css_dir = os.path.join(frontend, 'css')
    if os.path.isdir(css_dir):
        files += [os.path.join(css_dir, n) for n in sorted(os.listdir(css_dir)) if n.endswith('.css')]

    # 入口 HTML（排除 _new_script.html）
    idx = os.path.join(frontend, 'index.html')
    if os.path.exists(idx):
        files.append(idx)

    # 后端 Python
    bk = os.path.join(BASE, 'backend')
    for root, _, names in os.walk(bk):
        for n in sorted(names):
            if n.endswith('.py'):
                files.append(os.path.join(root, n))

    # 运行时用户组文件（gitignore；存在才扫描）
    gj = os.path.join(BASE, 'data', 'groups.json')
    if os.path.exists(gj):
        files.append(gj)

    return files


def test_no_pinggu_leftover_in_active_sources():
    """活动源码集不得残留「评股」"""
    hits = []
    for path in _source_files():
        for ln, raw in enumerate(open(path, encoding='utf-8'), 1):
            if TARGET in raw:
                hits.append((os.path.relpath(path, BASE), ln, raw.strip()))
    assert not hits, f'「评股」残留 {len(hits)} 处:\n' + '\n'.join(
        f'  {p}:{ln}  {s[:100]}' for p, ln, s in hits)


def _themes_js_names():
    """前端 themes.js 的 主题key → 显示名 (v3.13 规范名)"""
    import re
    path = os.path.join(BASE, 'frontend', 'js', 'themes.js')
    out = {}
    for raw in open(path, encoding='utf-8'):
        m = re.search(r"'([\w-]+)':\s*\{\s*name:\s*'([^']+)'", raw)
        if m:
            out[m.group(1)] = m.group(2)
    return out


def _backend_themes_names():
    """后端 user_manager.THEMES (GET /api/themes, 顶部主题菜单数据源) 的 主题key → 显示名"""
    import re
    path = os.path.join(BASE, 'backend', 'user_manager.py')
    text = open(path, encoding='utf-8').read()
    out = {}
    for km in re.finditer(r'"([\w-]+)":\s*\{', text):
        key = km.group(1)
        if key in ('THEMES',):
            continue
        # 取该块内第一个 "name"
        nm = re.search(r'"name":\s*"([^"]+)"', text[km.end():])
        if nm:
            out[key] = nm.group(1)
    return out


def test_theme_names_consistent_frontend_backend():
    """TC-13.2 回归守卫: 前端 themes.js 与后端 user_manager.THEMES 的主题显示名必须一致

    v3.13 冒烟发现: 顶部主题菜单 (GET /api/themes ← user_manager.THEMES)
    仍显示旧名 (专业蓝/土豪金/经典白（红）等), 与前端 themes.js 规范名不一致。
    两处必须同步维护, 防止回归。
    """
    js = _themes_js_names()
    bk = _backend_themes_names()
    assert js, '无法解析 frontend/js/themes.js 主题名'
    assert bk, '无法解析 backend/user_manager.py THEMES 主题名'
    # 前端 7 个主题在后端都有同名条目
    missing = sorted(set(js) - set(bk))
    assert not missing, f'后端 THEMES 缺少主题: {missing}'
    # 同 key 显示名一致
    diff = [(k, js[k], bk[k]) for k in js if js[k] != bk[k]]
    assert not diff, f'前后端主题显示名不一致 (key, 前端, 后端):\n' + '\n'.join(
        f'  {k}: 前端={a} 后端={b}' for k, a, b in diff)
