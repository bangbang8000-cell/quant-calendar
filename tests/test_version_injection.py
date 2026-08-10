"""
版本号前后端统一测试 (v3.10 / FR-3.10.5, TC-10.12)

校验:
- index.html 中每个应用 JS/CSS 资源 URL 都带 {{APP_VERSION}} 占位符，无残留硬编码版本号
- 渲染后资源版本 === 后端 APP_VERSION（单一来源联动）
- backend/main_new.py 确实执行了占位符注入（.replace 接线存在）
"""
import ast
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_HTML = os.path.join(BASE, 'frontend', 'index.html')
MAIN_NEW = os.path.join(BASE, 'backend', 'main_new.py')


def _app_version_from_source() -> str:
    """从 main_new.py 源码提取 APP_VERSION 常量（避免导入整个 FastAPI 应用）"""
    tree = ast.parse(open(MAIN_NEW, encoding='utf-8').read())
    for node in ast.walk(tree):
        if (isinstance(node, ast.Assign)
                and isinstance(node.targets[0], ast.Name)
                and node.targets[0].id == 'APP_VERSION'
                and isinstance(node.value, ast.Constant)):
            return node.value.value
    raise AssertionError('main_new.py 中未找到 APP_VERSION 常量')


def test_every_app_resource_carries_version_placeholder():
    """每个应用 JS/CSS 资源 URL 均带 ?v={{APP_VERSION}} 占位符"""
    html = open(INDEX_HTML, encoding='utf-8').read()
    urls = re.findall(r'(?:src|href)="(/static/(?:css|js)/[^"]+)"', html)
    app_urls = [u for u in urls if '/static/lib/' not in u]
    assert app_urls, '未找到任何应用静态资源引用'
    for url in app_urls:
        assert '?v={{APP_VERSION}}' in url, f'资源未带版本占位符: {url}'


def test_no_stale_hardcoded_version():
    """index.html 无残留数字硬编码版本号 ?v=X.Y.Z"""
    html = open(INDEX_HTML, encoding='utf-8').read()
    assert not re.search(r'\?v=\d', html), '存在硬编码版本号，应改为 {{APP_VERSION}}'


def test_rendered_version_matches_app_version():
    """渲染后（占位符替换）资源版本 === 后端 APP_VERSION"""
    app_version = _app_version_from_source()
    assert re.match(r'^\d+\.\d+\.\d+', app_version), f'APP_VERSION 格式异常: {app_version}'
    html = open(INDEX_HTML, encoding='utf-8').read().replace('{{APP_VERSION}}', app_version)
    # 所有资源 URL 现在都带实际版本号
    assert f'?v={app_version}' in html
    # 健康/版本单一来源：main_new 中 APP_VERSION 就是该值
    assert app_version.startswith('3.8')


def test_backend_injects_placeholder():
    """main_new.py 的 root() 渲染确实执行了 APP_VERSION 注入"""
    src = open(MAIN_NEW, encoding='utf-8').read()
    assert "html.replace('{{APP_VERSION}}', APP_VERSION)" in src, \
        'root() 未执行 APP_VERSION 占位符注入'
