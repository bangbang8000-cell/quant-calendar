#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试支持: FakePortal —— 内存数据面板, 记录取数请求(用于防前视断言)
"""
import pandas as pd


class FakePortal:
    """返回随机/固定数据的面板, 记录每次 get_panel 请求参数"""

    def __init__(self, dates, symbols, seed=42):
        self.dates = dates
        self.symbols = symbols
        self.requests = []
        self._rng = __import__("numpy").random.default_rng(seed)

    def get_panel(self, fields, start, end, universe=None):
        self.requests.append({"start": start, "end": end, "fields": list(fields),
                              "universe": universe})
        idx = [(d, s) for d in self.dates for s in self.symbols]
        data = {"close": self._rng.uniform(5, 50, len(idx))}
        for f in fields:
            if f not in data:
                data[f] = self._rng.uniform(1, 100, len(idx))
        panel = pd.DataFrame(data, index=pd.MultiIndex.from_tuples(idx, names=["date", "symbol"]))
        return panel
