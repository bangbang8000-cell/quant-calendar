cd /home/evergreen/dsh-workspace/quant-calendar-dev
PYTHONPATH=backend /usr/bin/python3 -m pytest -q -m 'not e2e' > /tmp/py_full.log 2>&1
grep -E '^FAILED' /tmp/py_full.log | head -10
tail -2 /tmp/py_full.log