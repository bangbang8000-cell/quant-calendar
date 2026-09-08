import io
p = "docs/HANDOVER.md"
src = io.open(p, encoding="utf-8").read()
# 1) 前端改动说明: 零构建
o1 = "2. 前端改动: `cd frontend && npm_config_cache=/home/evergreen/dsh-workspace/npm_cache npx vite build`"
n1 = "2. 前端改动: 零构建 SPA — 直接改 `frontend/` 源码, 后端 serve 源码实时生效 (无需 vite build)"
assert src.count(o1) == 1, "o1 count: %d" % src.count(o1)
src = src.replace(o1, n1)
# 2) 测试基线 2768 → 2896
o2 = "## 6. 测试体系 (v5.2.4 基线 2768 用例)"
n2 = "## 6. 测试体系 (v5.3.6 基线 2896 用例)"
assert src.count(o2) == 1, "o2 count: %d" % src.count(o2)
src = src.replace(o2, n2)
# 3) 已知事项: 加 5.3 完成状态
o3 = "[- **数据源**: akshare 东财"
n3 = "[- **v5.3 全版本完成**: 5.3.0 工程卫生 / 5.3.1 体验统一 / 5.3.2 视觉设计系统 / 5.3.3 导航效率 / 5.3.4 性能容量 / 5.3.5 智能决策 / 5.3.6 运维发布 — 全部 tag v5.3.N ↔ APP_VERSION + 双端推送\n]- **数据源**: akshare 东财"
assert src.count(o3) == 1, "o3 count: %d" % src.count(o3)
src = src.replace(o3, n3)
# 4) 待办: Docker 已完成 (CI 有 workflow, 但需实际触发)
o4 = "[- [ ] **Docker ghcr.io 镜像未推**(v5.2.3/v5.2.4 均未推, 需 CI 或手动 build+push)]"
n4 = "[- [ ] **Docker ghcr.io 镜像实际推送**: docker-publish.yml 已就绪 (tag 触发 latest+semver), 但 v5.3.x 未实际跑过 — 下个 tag 验证]"
assert src.count(o4) == 1, "o4 count: %d" % src.count(o4)
src = src.replace(o4, n4)
io.open(p, "w", encoding="utf-8").write(src)
print("HANDOVER updated")