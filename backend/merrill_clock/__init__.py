#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.93): 美林时钟子包 — MerrillClock 拆分自 merrill_clock.py"""
from ._indicators import ClockIndicatorsMixin
from ._history import ClockHistoryMixin
from ._constants import STAGES, CACHE_FILE, HISTORY_FILE, SNAPSHOT_FILE, SCORING_WEIGHTS  # noqa: F401
from ._indicators import _normalize_score  # noqa: F401
from ._core import ClockCoreMixin

class MerrillClock(ClockCoreMixin, ClockHistoryMixin, ClockIndicatorsMixin):
    """美林时钟分析类 (拆分后聚合 Mixin, 行为与拆分前一致)"""
    pass

merrill_clock = MerrillClock()
