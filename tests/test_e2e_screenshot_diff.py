"""TC-11.14 视觉回归截图对比 (FR-3.11.9)

调用 tests/e2e/visual_regression.py --report 对 7 个 SM 验收场景截图做
基线对比，产出 HTML diff 报告。

设计要点:
- @pytest.mark.e2e: 需要 Playwright + chromium + dev server，CI 主测试命令用
  `-m "not e2e"` 排除，另有独立的 e2e-visual CI job（continue-on-error）
  跑真实浏览器并上传报告工件。
- 无 chromium / 服务器未启动时 skip（信息性检查，不阻塞）。
- 报告为非阻塞（默认 exit 0），差异仅写进 HTML 报告供人工审阅。
"""
import os
import subprocess
import sys

import pytest

HARNESS = os.path.join(os.path.dirname(__file__), 'e2e', 'visual_regression.py')
REPORT = os.path.join(os.path.dirname(__file__), 'e2e', 'reports', 'visual-diff.html')
BASE_URL = os.environ.get('E2E_BASE_URL', 'http://localhost:8001/')


pytest.importorskip('playwright')


def _server_up():
    import urllib.request
    try:
        with urllib.request.urlopen(BASE_URL, timeout=3) as r:
            return r.status == 200
    except Exception:
        return False


@pytest.mark.e2e
def test_e2e_screenshot_diff():
    """运行视觉回归 harness，产出 diff 报告（非阻塞，7 个 SM 验收场景）

    chromium 由 harness 自行发现: --chromium 指定可执行文件路径，否则回退
    Playwright 自带浏览器（CI 用 `playwright install chromium`）。
    """
    if not _server_up():
        pytest.skip(f'dev server 未启动: {BASE_URL}（启动: uvicorn main_new:app --port 8001）')

    # chromium 路径: 环境变量 > 本机 snap chromium > 空 (Playwright 自带, CI 已 install)
    chromium = os.environ.get('PLAYWRIGHT_CHROMIUM', '')
    if not chromium and os.path.exists('/snap/bin/chromium'):
        chromium = '/snap/bin/chromium'
    cmd = [sys.executable, HARNESS, '--report', '--base-url', BASE_URL]
    if chromium:
        cmd += ['--chromium', chromium]
    proc = subprocess.run(cmd, capture_output=True, text=True, timeout=420)
    # 信息性检查: 有视觉差异也不 exit 1（--report 默认非阻塞），但 harness 执行本身必须成功
    assert proc.returncode == 0, (
        f'视觉回归 harness 执行失败 (rc={proc.returncode})\n'
        f'stdout: {proc.stdout[-2000:]}\nstderr: {proc.stderr[-2000:]}'
    )
    assert os.path.exists(REPORT), 'diff 报告未产出'
    with open(REPORT, encoding='utf-8') as f:
        html = f.read()
    assert '视觉回归' in html, '报告内容异常（缺少标题）'
    # 报告应包含全部 7 个 SM 验收场景
    for key in ('login', 'strategies_desktop', 'calendar', 'stock_detail',
                'command_panel', 'strategies_mobile', 'dark_theme'):
        assert key in html, f'报告缺少场景: {key}'
