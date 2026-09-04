import io
p = "tests/test_intraday_auto_behavior.py"
src = io.open(p, encoding="utf-8").read()
old = "    def test_skip_already_collected(monkeypatch):\n        store = _FakeStore()\n        store.pools[('2026-01-01', 'intraday_10:00')] = [{'available': True}]"
assert src.count(old) == 1
new = "    def test_skip_already_collected(monkeypatch):\n        store = _FakeStore()\n        store.pools[('ANY', 'intraday_10:00')] = [{'available': True}]\n        store.load_pool = lambda d, key: [{'available': True}] if key == 'intraday_10:00' else None"
src = src.replace(old, new)
io.open(p, "w", encoding="utf-8").write(src)
print("skip test fixed")