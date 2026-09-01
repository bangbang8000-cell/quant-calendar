#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.3): API v3 路由汇总 (prefix=/v3 → /api/v3)"""
from fastapi import APIRouter

from .watchlist import router as v3_watchlist
from .evaluations import router as v3_evaluations
from .groups import router as v3_groups

router = APIRouter(prefix="/v3", tags=["API v3"])
router.include_router(v3_watchlist, prefix="/watchlist")
router.include_router(v3_evaluations, prefix="/evaluations")
router.include_router(v3_groups, prefix="/groups")