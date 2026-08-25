"""V4.7.1: save_state 部分更新保留未传 sid 字段 (universe 不被重置)"""
import json


def test_save_state_partial_update_keeps_universe(tmp_path, monkeypatch):
    """PUT 只传 1 个 sid 时, 其余 sid 的 universe 保留现有值 (all 不被重置为 default)"""
    import strategy_governance as gov
    monkeypatch.setattr(gov, 'GOV_FILE', str(tmp_path / 'strategy_governance.json'))
    monkeypatch.setattr(gov, 'DATA_DIR', str(tmp_path))

    init = {
        sid: {"enabled": True, "schedule": "20:00", "universe": "all",
              "show_in_calendar": True, "last_run": None, "last_holdings": None}
        for sid in gov.BUILTIN_SIDS
    }
    with open(gov.GOV_FILE, 'w', encoding='utf-8') as f:
        json.dump(init, f, ensure_ascii=False)

    partial = {
        "sector_rotation": {"enabled": True, "schedule": "20:00", "universe": "all",
                            "show_in_calendar": True, "last_run": None, "last_holdings": None}
    }
    clean = gov.save_state(partial)
    assert clean['multi_factor']['universe'] == 'all'
    assert clean['capital_flow']['universe'] == 'all'
    assert clean['index_enhance']['universe'] == 'all'
    assert clean['sector_rotation']['universe'] == 'all'


def test_save_state_explicit_default_overrides(tmp_path, monkeypatch):
    """显式传 default 应覆盖 existing 的 all"""
    import strategy_governance as gov
    monkeypatch.setattr(gov, 'GOV_FILE', str(tmp_path / 'strategy_governance.json'))
    monkeypatch.setattr(gov, 'DATA_DIR', str(tmp_path))
    init = {
        sid: {"enabled": True, "schedule": "20:00", "universe": "all",
              "show_in_calendar": True, "last_run": None, "last_holdings": None}
        for sid in gov.BUILTIN_SIDS
    }
    with open(gov.GOV_FILE, 'w', encoding='utf-8') as f:
        json.dump(init, f, ensure_ascii=False)
    partial = {
        "multi_factor": {"enabled": True, "schedule": "20:00", "universe": "default",
                         "show_in_calendar": True, "last_run": None, "last_holdings": None}
    }
    clean = gov.save_state(partial)
    assert clean['multi_factor']['universe'] == 'default'
    assert clean['sector_rotation']['universe'] == 'all'
