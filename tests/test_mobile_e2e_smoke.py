"""TC-3.17.8 移动端冒烟 (FR-3.17.8 / 移动端一等公民)

调用 tests/e2e/mobile_smoke.py 跑 Playwright 移动视口冒烟
(375x667, is_mobile+has_touch, headless, --no-proxy-server)。
覆盖: 375px 可用性两条链路 + 手势(下拉刷新/左滑露出) + PWA(SW 注册/离线壳) + 无横向溢出 + 0 pageerror。

- @pytest.mark.e2e: 需要 Playwright chromium + dev server，CI 主测试命令用
  `-m "not e2e"` 排除。
- 无 chromium / 服务器未启动时 skip（信息性检查，不阻塞）。
"""
import os
import subprocess
import sys

import pytest

HARNESS = os.path.join(os.path.dirname(__file__), 'e2e', 'mobile_smoke.py')
BASE_URL = os.environ.get('E2E_BASE_URL', 'http://127.0.0.1:8001/')

pytest.importorskip('playwright')


def _server_up():
    import urllib.request
    try:
        with urllib.request.urlopen(BASE_URL, timeout=3) as r:
            return r.status == 200
    except Exception:
        return False


@pytest.mark.e2e
def test_mobile_e2e_smoke():
    """运行移动端冒烟 harness（375x667 两条高频链路 + 手势 + PWA）"""
    if not _server_up():
        pytest.skip(f'dev server 未启动: {BASE_URL}（启动: uvicorn main_new:app --port 8001）')
    chromium = os.environ.get('PLAYWRIGHT_CHROMIUM', '')
    if not chromium and os.path.exists('/snap/bin/chromium'):
        chromium = '/snap/bin/chromium'
    cmd = [sys.executable, HARNESS, '--base-url', BASE_URL]
    if chromium:
        cmd += ['--chromium', chromium]
    proc = subprocess.run(cmd, capture_output=True, text=True, timeout=420)
    assert proc.returncode == 0, (
        f'移动端冒烟失败 (rc={proc.returncode})\n'
        f'stdout: {proc.stdout[-4000:]}\nstderr: {proc.stderr[-2000:]}'
    )
