# 运维：GHCR 镜像版本留存策略与清理 Runbook

| 项 | 内容 |
|---|---|
| 适用对象 | `ghcr.io/bangbang8000-cell/quant-calendar` |
| 生效版本 | 留存口径自 `092473b`；构建门槛（关键版本才出镜像）与 10 个上限自 2026-11-03 用户决策 |
| 相关文件 | `.github/workflows/docker-publish.yml`、`scripts/docker_versions_prune.sh` |
| 策略 | 留存窗口 **上限 10 个发行版本**（滚动淘汰最老的，含其浮动别名标签）<br>容器构建 **只针对关键版本**（`x.y.0` 里程碑；小版本只打 tag 不出镜像） |

---

## 1. 为什么需要这份文档（一次真实事故）

2026-11-03 首次实施留存策略时，用了社区常用的 `actions/delete-package-versions@v5` + `min-versions-to-keep: 5`，结果**多删了 20 多个版本**：

| 事实 | 说明 |
|---|---|
| 现象 | 本意"保留最近 5 个发行版本"，实际只剩 2 个（6.6.0 / 6.5.8），**`latest` 标签一度消失** |
| 日志证据 | action 输出 `Total versions deleted till now: 97` |
| 根因 | **该 action 的 `min-versions-to-keep` 计数单位是「GHCR 包版本条数」，不是「发行版本数」**。同一个 manifest 的多个标签（`6.6.0` / `6.6` / `v6.6.0` / `latest`）在 GHCR 里登记成**多条版本记录**，因此"保留 5 条记录"≈"保留 1 个多标签发行版 + 少量邻居" |
| 次生影响 | `docker pull ...:latest` 失效（README 默认用法），浮动别名 `6.6`/`6.5` 一并丢失 |
| 修复 | 改为 **workflow 内自算**：按 semver 分组 → 保留最近 5 个发行版 → 删除更早发行版的所有版本记录；`latest` 所在版本硬保护 |
| 回归 | 已用 mock 版本清单离线验证：保留 5 个发行版（含各自浮动别名）、删除更早、`latest` 不动、未知标签不动 |

> **教训**：不要用"包版本条数"这类**与标签数量耦合**的指标来表达"保留 N 个版本"的业务语义。
> 任何自动删除型任务，上线前必须先用 mock 数据跑一遍分支，并确认**保护白名单**（`latest`）真的生效。

---

## 2. 当前策略（workflow 内实现）

`docker-publish.yml` 的两个 job：

| job | 触发条件 | 行为 |
|---|---|---|
| `build-and-push` | push tag `v*`；或 `workflow_dispatch` 且 `mode=build/all` | 构建并推送 `6.6.0` / `6.6` / `v6.6.0` / `latest` |
| `prune-versions` | push tag；或 `workflow_dispatch` 且 `mode=prune/all` | 按发行版本号保留最近 `KEEP_VERSIONS=5` 个，删除更早 |

`prune-versions` 的判定口径：

1. 拉取 `/users/<owner>/packages/container/quant-calendar/versions`（最多 100 条）
2. 每条版本取其标签中的**三段式发行号**（优先 `v` 前缀）作为"所属发行版"
3. 发行版按 semver 降序，前 5 个进入保留集
4. 删除：属于更早发行版、且**不含 `latest`** 的所有版本记录（连带其浮动别名）
5. **不删**：无发行号的未知标签版本（只在日志列出，人工判断）

---

## 2.1 何时构建容器（关键版本才出镜像）

**用户决策（2026-11-03）：「小版本不用编译容器版本，只有关键版本才需要」。**

| 触发 | 是否构建 | 说明 |
|---|---|---|
| push tag `v6.7.0` / `v7.0.0`（patch = 0） | ✅ 构建 | 里程碑版本 → 产出 `6.7.0` / `6.7` / `v6.7.0` / `latest` |
| push tag `v6.7.1` / `v6.5.8`（patch ≠ 0） | ❌ 不构建 | 小版本只打 git tag；`prune-versions` 仍会跑（通常无删除） |
| `workflow_dispatch` + `mode=build\|all` | ✅ 构建 | 给小版本补镜像、或按 tag 重建历史版本 |
| `workflow_dispatch` + `mode=prune` | ❌ 不构建 | 只修剪留存窗口 |

判定式（见 `docker-publish.yml` 的 job 级 `if`）：

```yaml
(github.event_name == 'workflow_dispatch' && inputs.mode != 'prune') ||
(github.event_name == 'push' && github.ref_type == 'tag' && endsWith(github.ref_name, '.0'))
```

**为什么用「tag 名以 `.0` 结尾」而不是维护白名单**：不需要任何人记住约定，任何一次跑失败的日志都能直接复核；且 `v6.10.0` 这类两位 patch 不会被误判（`v5.7.10` 结尾是 `.10`，不匹配）。

小版本需要镜像时的正确做法：

```bash
# 给某个小版本补镜像（会重建该版本镜像，非字节级副本）
gh workflow run "Docker Build & Publish" --ref v6.7.1 -f mode=build
```

> 防呆：若在**分支**上 dispatch build，构建会在 "校验构建来源必须是 tag" 步直接失败并给出上面的命令
> —— 因为 semver 标签只能从 tag ref 推导，分支构建只会产出一个空的标签集。

---

## 3. 手动清理 Runbook

### 3.1 推荐：走 Actions（无需个人 PAT）

```
GitHub → Actions → Docker Build & Publish → Run workflow
  Branch: master
  mode:  prune        # 只清理，不构建、不推送新镜像
```

- 使用仓库内置 `GITHUB_TOKEN`（`packages: write`），无需个人令牌
- 摘要会写到 Step Summary：保留哪 5 个发行版、删除多少条记录

### 3.2 本机脚本（默认 dry-run）

```bash
cd quant-calendar-dev

# 只看计划（只读，可无 delete:packages 权限）
scripts/docker_versions_prune.sh

# 改保留个数
KEEP=3 scripts/docker_versions_prune.sh

# 执行删除（需 delete:packages）
gh auth refresh -h github.com -s read:packages,delete:packages
scripts/docker_versions_prune.sh --apply

# 本地 docker 镜像同样只看计划 / 执行
scripts/docker_versions_prune.sh --local
scripts/docker_versions_prune.sh --local --apply
```

> 脚本无 `delete:packages` 时会**自动回落到匿名 registry tags 接口**（只能出计划，不能删），
> 并在提示中给出改用 Actions 的路径 —— 避免"以为删了其实没删"。

### 3.3 验证结果

registry 的 `tags/list` 接口**有 CDN 缓存**，删完立刻查可能仍是旧结果。
用 HEAD 探针逐标签验证才可靠：

```bash
GT=$(gh auth token)
T=$(curl -s -u "bangbang8000-cell:$GT" \
  "https://ghcr.io/token?scope=repository:bangbang8000-cell/quant-calendar:pull&service=ghcr.io" \
  | python3 -c 'import sys,json;print(json.load(sys.stdin)["token"])')
for t in latest 6.6 6.6.0 v6.6.0; do
  echo -n "$t -> "
  curl -s -o /dev/null -w "%{http_code}\n" -I -H "Authorization: Bearer $T" \
    -H "Accept: application/vnd.oci.image.index.v1+json" \
    "https://ghcr.io/v2/bangbang8000-cell/quant-calendar/manifests/$t"
done
```

期望：保留集内全部 `200`；已删除版本 `404`。

---

## 4. 回滚 / 恢复被删除的版本

GHCR 的版本删除**不可撤销**。要恢复某个已删版本，用它的 git tag 重新构建：

```bash
gh workflow run "Docker Build & Publish" --ref v6.4.0
```

注意三点：

1. `--ref <tag>` 会使用**该 tag 当时的工作流文件**（老版本可能没有 `prune-versions` job，属正常且更安全）
2. 重建镜像是"同源码重编"，**不是原镜像的字节级副本**（基础镜像与系统包可能已漂移）
3. 若该版本仍需长期保留，请同步确认 `KEEP_VERSIONS` 覆盖到它，否则下一轮 prune 会再次删除

---

## 5. 容量参考（实测）

| 项 | 数值 |
|---|---|
| 单个发行版（多架构 manifests + 别名标签） | 约 4 条版本记录 |
| 5 个发行版占用 | 约 20 条版本记录 |
| 10 个发行版（上限）占用 | 约 40 条版本记录 |
| 精简前（2026-11-03） | **69 个标签 / 29 个发行版** |
| 精简后目标 | 现行 5 个发行版 × 约 4 标签 ≈ 16 个标签；上限 10 个时约 40 个标签 |
| 本地 docker 清理收益（本机实测） | 1.66 GB → 125 MB（释放 ≈1.54 GB） |
