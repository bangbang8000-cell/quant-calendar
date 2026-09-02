
import os, re
os.chdir('/home/evergreen/dsh-workspace/quant-calendar-dev')
with open('backend/api/v1/strategy_research.py') as f:
    content = f.read()
for m in re.finditer(r'@router.(get|post|put|delete|patch)([^
]+', content):
    line = m.group(0)
    print(line[:100])
