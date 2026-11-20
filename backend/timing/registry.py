#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""择时策略注册表 (v7.5)"""
from timing.strategies import (BollingerTiming, RSITiming, SupportTiming,
    TurtleTiming, LowTurtleTiming, TurtlePlusTiming,
    UptrendPullbackTiming, ShunShiBaoTiming)

TIMING_REGISTRY = {
    cls.id: cls for cls in (BollingerTiming, RSITiming, SupportTiming,
                            TurtleTiming, LowTurtleTiming, TurtlePlusTiming,
                            UptrendPullbackTiming, ShunShiBaoTiming)
}


def list_timing():
    return [{"id": sid, "name": cls.name, "version": cls.version}
            for sid, cls in TIMING_REGISTRY.items()]


def get_timing(sid: str):
    if sid not in TIMING_REGISTRY:
        raise KeyError(f"未知择时策略: {sid}")
    return TIMING_REGISTRY[sid]()
