"""T-5.1.42: 研究报告导出 (report_export) — 实验 → Markdown, 复用 export_report。

FR-5.1.4.2: 单实验可导出 Markdown 报告 (元信息/指标表/结论), 可经 export_report 转 pdf/xlsx。
"""
import pytest
import tempfile
import os

import pytest

from report_export import (
    markdown_to_rows, experiment_to_markdown,
    export_experiment_report, export_report,
)


@pytest.fixture(autouse=True)
def _fresh_store(patch_data_dir):
    from backend import research_store
    research_store._ensure_table()
    research_store._clear_all_for_test()
    yield


class TestExperimentToMarkdown:
    def _exp(self, **over):
        exp = {
            'id': 'exp_1', 'type': 'factor_ic', 'subject': 'multi_factor/mom20',
            'params': {'window': 20}, 'date_range': ['2026-01-01', '2026-03-31'],
            'app_version': '5.1.0', 'created_at': '2026-09-01T10:00:00',
            'summary': {'ic_mean': 0.03, 'icir': 0.6, 'win_rate': 55.0},
            'hypothesis': '动量有效', 'conclusion': 'ICIR 显著',
            'tags': ['动量'], 'notes': '样本含牛熊',
            'result': {'ic_series': [0.01, 0.02]},
        }
        exp.update(over)
        return exp

    def test_markdown_contains_header(self):
        md = experiment_to_markdown(self._exp())
        assert '# 研究实验报告' in md
        assert 'exp_1' in md
        assert 'factor_ic' in md

    def test_markdown_contains_summary_table(self):
        md = experiment_to_markdown(self._exp())
        assert 'IC' in md
        assert '0.03' in md

    def test_markdown_contains_conclusion(self):
        md = experiment_to_markdown(self._exp())
        assert 'ICIR 显著' in md

    def test_markdown_contains_hypothesis_notes_tags(self):
        md = experiment_to_markdown(self._exp())
        assert '动量有效' in md
        assert '样本含牛熊' in md
        assert '动量' in md

    def test_markdown_empty_summary_graceful(self):
        md = experiment_to_markdown(self._exp(summary={}))
        assert '# 研究实验报告' in md

    def test_markdown_rows_parseable(self):
        """markdown_to_rows 可解析报告表格 (与既有导出管线兼容)"""
        md = experiment_to_markdown(self._exp())
        rows = markdown_to_rows(md)
        assert isinstance(rows, list)


class TestExportReport:
    def test_export_by_id(self):
        from backend import research_store
        eid = research_store.save_experiment({
            'type': 'factor_ic', 'subject': 'mom20',
            'summary': {'ic': 0.05}, 'conclusion': '有效'})
        md = export_experiment_report(eid)
        assert 'mom20' in md
        assert '# 研究实验报告' in md

    def test_export_missing_returns_none(self):
        assert export_experiment_report('exp_none') is None

    def test_export_to_markdown_file(self, tmp_path):
        from backend import research_store
        eid = research_store.save_experiment({
            'type': 'factor_ic', 'subject': 'mom20', 'summary': {'ic': 0.05}})
        path = os.path.join(str(tmp_path), 'report.md')
        export_report(experiment_to_markdown(
            research_store.get_experiment(eid)), 'md', path)
        assert os.path.exists(path)
        with open(path) as f:
            assert '# 研究实验报告' in f.read()
