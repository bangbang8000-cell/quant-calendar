import io
src = io.open("docs/HANDOVER.md", encoding="utf-8").read()
o1 = "2. 前端改动: `cd frontend && npm_config_cache=/home/evergreen/dsh-workspace/npm_cache npx vite build`"
o2 = "## 6. 测试体系 (v5.2.4 基线 2768 用例)"
o3 = "[- **数据源**: akshare 东财"
o4 = "[- [ ] **Docker ghcr.io 镜像未推**
print("o1:", src.count(o1))
print("o2:", src.count(o2))
print("o3:", src.count(o3))
print("o4:", src.count(o4))