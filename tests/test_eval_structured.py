# -*- coding: utf-8 -*-
"""6.1.6 (F1): AI 评估输出结构化测试 (eval_struct.py)"""
from eval_struct import parse_eval_structured, extract_json_block


def test_extract_fenced_json():
    d = extract_json_block('```json\n{"conclusion": "看好", "score": 85}\n```')
    assert d == {"conclusion": "看好", "score": 85}


def test_extract_bare_json():
    d = extract_json_block('回答：{"conclusion": "中性"} 完毕')
    assert d == {"conclusion": "中性"}


def test_extract_invalid_returns_none():
    assert extract_json_block("纯文本无 JSON") is None
    assert extract_json_block("") is None


def test_parse_structured_full():
    out = parse_eval_structured(
        '{"conclusion": "看多", "evidence": ["量价齐升", "MACD金叉"], "risk": "高位回调", "score": 82, "signal": "看多"}')
    assert out["structured"] is True
    assert out["conclusion"] == "看多"
    assert out["evidence"] == ["量价齐升", "MACD金叉"]
    assert out["score"] == 82 and out["signal"] == "看多"


def test_parse_plain_text_falls_back():
    out = parse_eval_structured("该股基本面稳健，建议持有。")
    assert out["structured"] is False
    assert out["text"] == "该股基本面稳健，建议持有。"


def test_parse_empty_input():
    out = parse_eval_structured("")
    assert out["structured"] is False


def test_parse_invalid_signal_reset():
    out = parse_eval_structured('{"conclusion": "ok", "signal": "买买买"}')
    assert out["signal"] == ""


def test_parse_empty_skeleton_falls_back():
    out = parse_eval_structured('{"foo": "bar"}')
    assert out["structured"] is False


def test_parse_evidence_string_coerced():
    out = parse_eval_structured('{"conclusion": "x", "evidence": "单条依据"}')
    assert out["evidence"] == ["单条依据"]
