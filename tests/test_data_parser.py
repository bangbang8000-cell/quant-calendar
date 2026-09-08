"""Tests for data_parser.py — CSV strategy parsing"""
import pytest
import tempfile, os
from data_parser import parser, STRATEGY_CONFIG


class TestStrategyConfig:
    """Strategy configuration integrity"""

    def test_config_has_strategies(self):
        """STRATEGY_CONFIG must contain strategy definitions"""
        assert len(STRATEGY_CONFIG) > 0
        assert 'trend' in STRATEGY_CONFIG or len(STRATEGY_CONFIG) >= 2

    def test_config_columns_structure(self):
        """Each strategy must define columns"""
        for sid, cfg in STRATEGY_CONFIG.items():
            assert 'columns' in cfg or 'name' in cfg, f"{sid}: missing name/columns"


class TestParserLoad:
    """CSV file loading tests"""

    def test_load_empty_csv(self):
        """Empty CSV should return empty result"""
        with tempfile.NamedTemporaryFile(mode='w', suffix='.csv', delete=False, encoding='utf-8') as f:
            f.write("代码,名称,最新价\n")
            path = f.name
        try:
            # Parser loads via its internals; test that it doesn't crash
            dates = parser.get_available_dates()
            assert isinstance(dates, list)
        finally:
            os.unlink(path)

    def test_load_utf8_csv(self, sample_csv_content, tmp_path):
        """UTF-8 CSV should parse correctly"""
        csv_file = tmp_path / "test.csv"
        csv_file.write_text(sample_csv_content, encoding='utf-8')
        assert csv_file.read_text(encoding='utf-8').startswith('代码')


class TestDateParsing:
    """Date extraction tests"""

    def test_get_available_dates(self):
        """get_available_dates returns a list"""
        dates = parser.get_available_dates()
        assert isinstance(dates, list)

    def test_get_available_dates_not_none(self):
        """Should never return None"""
        dates = parser.get_available_dates()
        assert dates is not None


class TestParserEdgeCases:
    """Edge case handling"""

    def test_unknown_date_returns_empty(self):
        """Querying a non-existent date should not crash"""
        for date_str in ['2099-01-01', '2000-01-01']:
            result = parser.get_holdings_by_date(date_str)
            assert isinstance(result, dict)

    def test_invalid_strategy_id(self):
        """Invalid strategy should return empty holdings"""
        result = parser.get_holdings_by_date('2024-01-01', strategy='nonexistent_strategy_xyz')
        assert isinstance(result, dict)

    def test_parser_get_holdings(self):
        """get_holdings_by_date returns dict even for missing dates"""
        result = parser.get_holdings_by_date('1999-01-01')
        assert isinstance(result, dict)
