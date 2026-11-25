# -*- coding: utf-8 -*-
"""v7.19 (FR-7): 问股历史 —— 计数口径 / 分级空态 / 模板属性完整性

来由（实机三次修复）：
1. `view-part1.js` 的空态 `:title` 里被塞进了另一组属性（`action-text="…"`），
   模板编译直接报 `Attribute name cannot contain U+0022`，**整个 AI 页白屏** ——
   用户看到的「问股历史左侧列表加载不了」正是这个。这里加一条廉价门禁：
   模板里不允许「属性值里再出现 属性名="」。
2. 补上 `/history/stats` 计数后，界面文案仍不生效：`chatHistoryMeta` 没有从
   ai-chat 域解构进 qcState，模板拿到 undefined 后静默回落到默认文案。
   现有 `test_page_components_template_calls_resolve` 只校验 `xxx(` 形式的调用，
   裸标识符（ref 名）不在覆盖内，所以漏过 —— 这里补定向回归。
"""
import asyncio
import os
import re
import sys
import tempfile

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, 'frontend')
sys.path.insert(0, os.path.join(BASE, 'backend'))

# 属性值内嵌属性: `:title="xxx action-text="` —— 模板编译必炸
NESTED_ATTR = re.compile(r':[A-Za-z-]+="[^"<>]*?\s[A-Za-z-]+="')


def _read(*parts):
    with open(os.path.join(FRONTEND, *parts), encoding='utf-8') as f:
        return f.read()


@pytest.fixture
def chat_db():
    import db
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, 'app.db')
    assert db.init_db() is True
    yield db
    db.DATA_DIR, db.DB_FILE = old_data, old_file


class TestTemplateAttributeIntegrity:

    def _view_parts(self):
        out = []
        for dirpath, _dirs, files in os.walk(os.path.join(FRONTEND, 'js', 'components')):
            for fn in files:
                if fn.startswith('view-part') and fn.endswith('.js'):
                    out.append(os.path.join(dirpath, fn))
        return out

    def test_no_nested_attribute_in_templates(self):
        bad = []
        for path in self._view_parts():
            with open(path, encoding='utf-8') as f:
                src = f.read()
            for m in NESTED_ATTR.finditer(src):
                line = src[:m.start()].count('\n') + 1
                bad.append('%s:%d -> %s' % (os.path.relpath(path, FRONTEND), line, m.group(0)[:80]))
        assert not bad, '模板属性值内嵌属性（会导致整页模板编译失败）: %s' % bad[:5]

    def test_chat_empty_state_has_action(self):
        src = _read('js', 'components', 'ai', 'view-part1.js')
        seg = src[src.index('AI 问股历史'):]
        seg = seg[:seg.index('V5.20 (F1)')] if 'V5.20 (F1)' in seg else seg[:2000]
        assert 'action-text="开始新对话"' in seg
        assert 'action-key="new_chat"' in seg


class TestChatHistoryMetaWiring:

    def test_qcstate_exposes_chat_history_meta(self):
        app = _read('js', 'app-logic.js')
        # ① 从 ai-chat 域解构出来  ② 再暴露进 qcState 字面量 —— 少任一处, 模板都拿到 undefined
        m = re.search(r'const \{([^}]*)\} = __aiChatDomain', app, re.S)
        assert m, '未找到 ai-chat 域解构块'
        assert 'chatHistoryMeta' in m.group(1), '解构块漏了 chatHistoryMeta'
        seg = app[app.index('const qcState = {'):]
        assert 'chatHistoryMeta' in seg, 'qcState 字面量未暴露 chatHistoryMeta'
        ai = _read('js', 'ai-chat.js')
        assert 'const chatHistoryMeta = ref(' in ai
        assert 'chatHistoryMeta,' in ai  # 域工厂必须导出

    def test_template_uses_meta_for_graded_copy(self):
        src = _read('js', 'components', 'ai', 'view-part1.js')
        assert "chatHistoryMeta.other_total > 0" in src
        assert '当前账号暂无问股记录' in src
        assert '属于其他账号' in src


class TestHistoryStats:

    def test_stats_splits_own_and_others(self, chat_db):
        import api.v1.chat as chat
        chat_db.chat_append('guest', '600519.SH', 'user', '茅台怎么样', '贵州茅台')
        chat_db.chat_append('guest', '600519.SH', 'assistant', '偏强', '贵州茅台')
        out = asyncio.run(chat.get_history_stats(user={'username': 'admin'}))
        assert out['total'] == 0
        assert out['system_total'] == 2
        assert out['other_total'] == 2

    def test_stats_counts_own_records(self, chat_db):
        import api.v1.chat as chat
        chat_db.chat_append('admin', '000001.SZ', 'user', '平安银行怎么看', '平安银行')
        chat_db.chat_append('guest', '600519.SH', 'user', '茅台', '贵州茅台')
        out = asyncio.run(chat.get_history_stats(user={'username': 'admin'}))
        assert (out['total'], out['system_total'], out['other_total']) == (1, 2, 1)

    def test_stats_degrades_without_db(self, monkeypatch):
        import api.v1.chat as chat

        def _boom(*_a, **_k):
            raise RuntimeError('db down')

        monkeypatch.setattr(chat, '_load_history', lambda username='default': [{'id': 1}, {'id': 2}])
        import db as _db
        monkeypatch.setattr(_db, 'get_conn', _boom)
        out = asyncio.run(chat.get_history_stats(user={'username': 'admin'}))
        # 统计失败不能 500: 退回「本账号条数」, other_total 归零
        assert out['total'] == 2 and out['other_total'] == 0
