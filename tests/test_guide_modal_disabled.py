# -*- coding: utf-8 -*-
"""V5.4.2 (FR): 向导弹窗机制取消 — 评估结论 + 守护

评估: 程序累计存在三套自动弹窗引导 (首次使用 tour v3.11 / 5步 onboarding V5.0.6 /
短线复盘 3步引导 V5.3.0), 均在用户无主动请求时自动弹出, 打断使用、重复冗余。
结论: 默认取消全部自动弹出 (保留组件与状态机供未来手动入口复用)。

守护:
1. index.html 不再挂载 qc-onboarding (5步新手引导覆盖层不再自动弹出)
2. ops.js maybeShowTour 带全局门禁 __quantGuideModalsEnabled, 默认不弹
3. shortterm-page.js maybeShowShorttermTour 带全局门禁, 默认不弹
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(ROOT, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


def test_global_onboarding_mount_removed():
    """qc-onboarding 不再挂载 (5步新手引导覆盖层不再自动弹出)。"""
    idx = _read("index.html")
    assert "qc-onboarding" not in idx, "index.html 不应再挂载 qc-onboarding (向导弹窗已取消)"


def test_tour_dialog_auto_show_gated():
    """首次使用 tour: maybeShowTour 带全局门禁, 默认不自动弹出。"""
    ops = _read("js/app-logic/ops.js")
    assert "__quantGuideModalsEnabled" in ops, "ops.js maybeShowTour 应带全局引导门禁"
    assert ops.index("function maybeShowTour") < ops.index("tourVisible.value = true"), \
        "maybeShowTour 内应先经过门禁再弹窗"


def test_shortterm_tour_auto_show_gated():
    """短线复盘 3 步引导: maybeShowShorttermTour 带全局门禁, 默认不自动弹出。"""
    sp = _read("js/components/shortterm-page.js")
    assert "__quantGuideModalsEnabled" in sp, "shortterm-page 引导应带全局门禁"
    assert sp.index("function maybeShowShorttermTour") < sp.index("shorttermTourVisible.value = true"), \
        "maybeShowShorttermTour 内应先经过门禁再弹窗"


def test_guide_modal_components_kept_for_manual_entry():
    """组件与状态机保留 (供未来手动入口), 不整体删除。"""
    assert "QuantOnboarding" in _read("js/onboarding-core.js")
    assert "window.__quantComponents.Onboarding" in _read("js/onboarding.js")
    assert "window.__quantComponents.TourDialog" in _read("js/components/dialogs/tour.js")
