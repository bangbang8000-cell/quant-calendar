# -*- coding: utf-8 -*-
"""v7.22: UI 细节修复回归门禁。

FR-1/2 股票行字号与 2×2 矩阵；FR-3 问股历史 scope/匿名隔离/迁移；
FR-4 回测对比卡片化；FR-5/6 研究历史中文名与 date_range；FR-7/8 系统页对齐。
"""
import os
import re
import sys
import tempfile

import pytest
from fastapi.testclient import TestClient

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))


def _fe(*parts):
    with open(os.path.join(BASE, "frontend", *parts), encoding="utf-8") as f:
        return f.read()


# ─── FR-1/FR-2 股票列表 ───────────────────────────────────────────────

class TestStockListLayout:
    def test_count_badge_and_tag_font_up(self):
        comp = _fe("css", "components.css")
        toks = _fe("css", "tokens.css")
        assert "--qc-stock-tag-font-lg: 13px" in toks, "标准档策略 tag 应放大到 13px"
        assert "--qc-stock-tag-font-lg: var(--qc-font-size-2xs)" in toks, "紧凑档应保持 11px 防截断"
        idx = comp.index(".qc-stock-tags .qc-stock-tag.is-count")
        assert "font-size: var(--qc-font-size-xs)" in comp[idx:idx + 400], "计数徽章应升到 12px"
        grid = comp.index(".qc-strat-grid {")
        assert "row-gap: 6px" in comp[grid:grid + 400], "矩阵纵向间距应加大"
        tag = comp.index(".qc-strat-grid .qc-stock-tag {")
        assert "text-align: center" in comp[tag:tag + 500], "策略名应在格子里居中"
        assert "padding: 2px 4px" in comp[tag:tag + 500], "策略 tag 应有上下内边距"

    def test_row_width_budget_kept(self):
        toks = _fe("css", "tokens.css")
        sect = toks[toks.index("个股行尺寸三档"):]
        root = sect[sect.index(":root {"):sect.index("html[data-density=\"compact\"]")]
        assert "--qc-stock-info-w: 92px" in root and "--qc-stock-badge-w: 44px" in root


# ─── FR-3 问股历史 ────────────────────────────────────────────────────

class TestChatHistoryScope:
    @pytest.fixture
    def chat_db(self):
        import db
        old_data, old_file = db.DATA_DIR, db.DB_FILE
        db.DATA_DIR = tempfile.mkdtemp()
        db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
        db.init_db()
        with db._db_lock:
            conn = db.get_conn()
            conn.execute("DELETE FROM chat_history")
            conn.commit()
            conn.close()
        yield db
        db.DATA_DIR, db.DB_FILE = old_data, old_file

    @pytest.fixture
    def client(self):
        from main_new import app
        from auth import create_access_token
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": f"Bearer {token}"})
        return c

    def test_admin_all_scope_sees_other_owner(self, chat_db, client):
        chat_db.chat_append("guest", "600519.SH", "user", "茅台怎么样", "贵州茅台")
        mine = client.get("/api/ai/chat/history?view=date&scope=mine").json()
        all_rows = client.get("/api/ai/chat/history?view=date&scope=all").json()
        assert sum(len(g["items"]) for g in mine) == 0
        assert sum(len(g["items"]) for g in all_rows) == 1
        assert all_rows[0]["items"][0]["owner"] == "guest", "全量视图应带 owner 字段"

    def test_anonymous_returns_empty(self, chat_db, client):
        chat_db.chat_append("guest", "600519.SH", "user", "茅台怎么样", "贵州茅台")
        anon = TestClient(client.app)
        out = anon.get("/api/ai/chat/history?view=date")
        assert out.status_code == 200
        assert out.json() == [], "匿名不应读到 default 归档"

    def test_stats_scope_all_zero_other(self, chat_db, client):
        chat_db.chat_append("guest", "600519.SH", "user", "m", "贵州茅台")
        d = client.get("/api/ai/chat/history/stats?scope=all").json()
        assert d["scope"] == "all" and d["other_total"] == 0

    def test_migration_script_idempotent_template(self):
        p = os.path.join(BASE, "scripts", "migrate_chat_owner.py")
        assert os.path.isfile(p), "应提供一次性归属迁移脚本"
        src = open(p, encoding="utf-8").read()
        assert "--dry-run" in src and "UPDATE chat_history" in src


# ─── FR-4 回测对比卡片 ────────────────────────────────────────────────

class TestOverviewCompareCard:
    def test_block_outside_dashboard_grid(self):
        src = _fe("js", "components", "research", "view-part1.js")
        grid_open = src.index('<div class="dashboard-grid">')
        grid_close = src.index("</div>\n                        <!-- v7.22 (FR-4)")
        block = src.index("v7.22 (FR-4)")
        assert block > grid_close > grid_open, "对比块必须在 dashboard-grid 闭合之后"
        seg = src[block:block + 2500]
        assert 'class="card mt-8"' in seg and 'class="table-container"' in seg
        assert "qr-compare-table" in seg and "@click=\"goBacktestFor(r.sid)\"" in seg

    def test_number_formats(self):
        src = _fe("js", "components", "research", "view-part1.js")
        assert "fmtPct(r.win_rate).replace('+', '')" in src, "胜率不应带正号"
        assert "fmtPct(-Math.abs(r.max_drawdown || 0))" in src, "回撤应统一负向显示"
        assert "r.ts.slice(0, 16).replace('T', ' ')" in src, "时间应单行显示"


# ─── FR-5/FR-6 研究历史 ───────────────────────────────────────────────

class TestResearchHistoryNames:
    @pytest.fixture
    def client(self):
        from main_new import app
        from auth import create_access_token
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": f"Bearer {token}"})
        return c

    @pytest.fixture(autouse=True)
    def _clean(self, patch_data_dir):
        from backend import research_store
        research_store._ensure_table()
        research_store._clear_all_for_test()
        yield

    def test_list_exposes_subject_names(self, client, monkeypatch):
        from backend import research_store
        import api.v1.strategy_research_support as support
        monkeypatch.setattr(support, "symbol_names", lambda codes: {c: "测试名称" for c in codes})
        eid = research_store.save_experiment({
            "type": "timing_matrix", "subject": "600519.SH,000651.SZ",
            "summary": {}, "result": {"rows": [
                {"symbol": "600519.SH", "name": "贵州茅台"},
                {"symbol": "000651.SZ", "name": "格力电器"},
            ]},
        })
        r = client.get("/api/strategies/research-history")
        item = next(x for x in r.json()["items"] if x["id"] == eid)
        assert item["subject_codes"] == ["600519.SH", "000651.SZ"]
        assert item["subject_names"]["600519.SH"] == "贵州茅台", "result.rows 名称应优先"
        assert item["result"]["rows"], "列表仍保留 result，详情展开不得退化"

    def test_template_uses_label_and_date_range(self):
        src = _fe("js", "components", "research", "view-part2.js")
        assert "researchSubjectLabel(exp)" in src
        assert "researchSubjectLabel(row)" in src
        assert "exp.date_range && exp.date_range.length" in src
        assert "exp.range" not in src
        assert 'value="timing_matrix"' in src, "筛选入口应含择时矩阵类型"
        logic = _fe("js", "components", "research", "logic-history.js")
        assert "'timing_matrix': '择时矩阵'" in logic


# ─── FR-7/FR-8 系统页 ─────────────────────────────────────────────────

class TestSystemAlignment:
    def test_health_badge_centered(self):
        src = _fe("js", "components", "system", "view-part2.js")
        idx = src.index("运维健康摘要")
        assert "flex-c-gap-12-wrap" in src[idx:idx + 500], "健康摘要应使用居中工具类"
        css = _fe("css", "themes-components.css")
        badge = css.index(".health-badge {")
        block = css[badge:badge + 400]
        assert "display: inline-flex" in block and "align-items: center" in block

    def test_usage_empty_placeholder_and_flex(self):
        src = _fe("js", "components", "system", "view-part2.js")
        assert 'v-else><div class="usage-ai-panel-title">模型调用分布' in src
        css = _fe("css", "themes-pages.css")
        grid = css.index(".usage-ai-grid {")
        assert "minmax(0, 1fr)" in css[grid:grid + 300]
        assert ".usage-ai-panel { min-width: 0" in css
