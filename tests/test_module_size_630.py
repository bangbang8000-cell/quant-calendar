# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.3): 单文件行数门禁

结构分治的可验收条件之一是「单文件可读」——本门禁把 700 行设为硬上限：
超过该行数的业务源文件必须登记在 ``PENDING_SPLIT`` 并挂上拆分任务号，
拆分完成后从表中移除条目，门禁随即变成「不得再超限」。

扫描范围：
- 前端 ``frontend/js``（业务脚本；``dist``/``vendor``/``node_modules`` 不参与）
- 后端 ``backend``（``.py``）

CSS 不在范围内（见 PRD-6.3.X：主题/布局类样式表按整表维护，不按行数拆分）。
"""
import io
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCAN_TARGETS = [
    (os.path.join(BASE, "frontend", "js"), ".js"),
    (os.path.join(BASE, "backend"), ".py"),
]
SKIP_DIRS = {"__pycache__", ".git", ".venv", "venv", "node_modules", "dist", "vendor"}

# 单文件行数上限
LIMIT = 700

# 待拆分清单：路径 -> 承接该文件的拆分任务号（拆分完成后必须移除）
PENDING_SPLIT = {
    "frontend/js/watchlist.js": "T-6.3.0.8",
    "frontend/js/components/ai-page.js": "T-6.3.0.9",
    "frontend/js/components/shortterm-page.js": "T-6.3.0.9",
    "frontend/js/app-logic.js": "T-6.3.0.10",
}


def _count_lines(path):
    with io.open(path, encoding="utf-8", errors="ignore") as f:
        return sum(1 for _ in f)


def collect_oversized():
    """返回 {相对路径: 行数}，仅含超过 LIMIT 的文件"""
    out = {}
    for root, ext in SCAN_TARGETS:
        for dirpath, dirnames, filenames in os.walk(root):
            dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
            for fn in sorted(filenames):
                if not fn.endswith(ext):
                    continue
                path = os.path.join(dirpath, fn)
                n = _count_lines(path)
                if n > LIMIT:
                    rel = os.path.relpath(path, BASE).replace("\\", "/")
                    out[rel] = n
    return out


def _fmt(items):
    return "\n  ".join("%s (%d 行)" % (k, v) for k, v in sorted(items))


def test_no_unregistered_oversized_file():
    oversized = collect_oversized()
    unregistered = {k: v for k, v in oversized.items() if k not in PENDING_SPLIT}
    assert not unregistered, (
        "以下文件超过 %d 行且未登记待拆分任务：\n  %s\n"
        "请拆分为「视图 / 状态 / 取数」三段后登记任务号。"
        % (LIMIT, _fmt(unregistered))
    )


def test_pending_entries_still_oversized_and_live():
    oversized = collect_oversized()
    missing = sorted(k for k in PENDING_SPLIT if not os.path.exists(os.path.join(BASE, k)))
    assert not missing, (
        "待拆分清单中的文件已不存在（重命名或已删除），需更新清单:\n  " + "\n  ".join(missing)
    )

    done = sorted(k for k in PENDING_SPLIT if k not in oversized)
    assert not done, (
        "以下文件已不再超过 %d 行，应从待拆分清单移除（拆分已完成）:\n  %s"
        % (LIMIT, "\n  ".join(done))
    )


def test_pending_entries_carry_task_id():
    blank = sorted(k for k, v in PENDING_SPLIT.items() if not (v or "").strip())
    assert not blank, "待拆分条目未挂任务号:\n  " + "\n  ".join(blank)


if __name__ == "__main__":  # 便于手工核对当前超限清单
    import sys
    for k, v in sorted(collect_oversized().items()):
        sys.stdout.write("%s\t%d\t%s\n" % (k, v, PENDING_SPLIT.get(k, "-")))