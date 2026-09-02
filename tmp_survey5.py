
import os
os.chdir('/home/evergreen/dsh-workspace/quant-calendar-dev')
with open('backend/research_store.py') as f:
    content = f.read()
print('LINES:', len(content.splitlines()))
import re
for m in re.finditer(r'^def ([a-z_]+)(|^class ([A-Za-z_]+)', content, re.M):
    print(m.group(1) or m.group(2))
