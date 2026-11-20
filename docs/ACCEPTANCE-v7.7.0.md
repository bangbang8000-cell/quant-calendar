# ACCEPTANCE — v7.7.0「治理与运维增强」

| 项 | 值 |
|---|---|
| 版本 | v7.7.0（APP_VERSION / README / HANDOVER 三处对齐，bump_version --check 通过） |
| 基线 | v7.6.0（commit 4608235） |
| 日期 | 2026-11-20 |
| 上游依据 | PRD v1.2 §10、DEV-TEST-PLAN v1.0 |
| 状态 | 本地门禁全绿；部署冒烟见下；**远程 GitHub CI 因 origin 无 push 凭证未触发** |

## 1. 交付内容（FR 对应）

| FR | 需求 | 实现 | 状态 |
|---|---|---|---|
| FR-7.7-1 | 参数锁定/追踪 + 审计表 | migration 0009 `param_audit_log`；`param_governance.py` 规范化 SHA-256 参数哈希、锁定/解锁/校验状态机；`GET/POST/DELETE /api/strategies/{sid}/lock` + `/verify` + `/audit` | ✅ |
| FR-7.7-2 | 数据任务全周期管控 | 属 y.1，本中版本不做 | ⏸ 按 PRD §6.4 |
| FR-7.7-3 | 指标回填/一致性自检工具链 | 属 y.1，本中版本不做 | ⏸ |
| FR-7.7-4 | 飞书指令安全版 | 属 y.2，本中版本不做 | ⏸ |
| FR-7.7-5 | 健康自检扩展 | 属 y.2，本中版本不做 | ⏸ |
| FR-7.7-6 | 双副本一致性门禁 | 属 y.2，本中版本不做 | ⏸ |

> Y 小版本口径：v7.7.0 = 参数锁定/追踪 + 审计表；v7.7.1 = 任务管控 + 回填自检；v7.7.2 = 飞书安全指令 + 健康自检 + 双副本门禁。本中版本只交付 y.0 核心，与该版本"方便运维/逻辑清晰"重点一致。

## 2. 关键设计决策

- **参数哈希规范化**：`json.dumps(sort_keys=True, separators=(",", ":"))` 后 SHA-256，同参数不同键序哈希一致；回测可复现断言有稳定指纹。
- **单一事实来源**：锁定状态从 `param_audit_log` 最新 `lock`/`unlock` 事件派生，不维护第二份可变状态（与 focus_evals 同源思路），避免状态漂移。
- **最小权限**：锁定/校验仅需登录用户，解锁强制 admin（deny-by-default），操作者与原因全部留痕。
- **REST 兼容**：解锁 `reason` 走 query 参数，兼容不支持 body 的 DELETE 客户端。
- **校验可留痕**：`verify` 事件写入审计日志，形成"谁在何时用哪套参数回测"的证据链；`verdict` 明确 `unlocked`/`match`/`mismatch`，由调用方决定是否阻断。
- **幂等迁移**：store 层带 `CREATE TABLE IF NOT EXISTS` 兜底，未跑迁移的单测环境也可安全 CRUD。

## 3. 测试结果

| 项目 | 结果 |
|---|---|
| 新增 `test_param_governance_v77.py`（6） | ✅ 6 passed |
| 全量回归 `pytest tests/ -m "not e2e and not network"` | ✅ 4377 passed, 4 deselected, 0 failed |
| 门禁专项（module_size/rbac/pit/split-parity/frontend×2/coverage_gate） | ✅ 252 passed |
| ruff / bump_version --check / lockfile diff | ✅ 全过（runtime 213/213 行、dev 57/57 行一致） |

## 4. 依赖变更

无新增依赖；lockfile 保持不变。

## 5. 部署冒烟

待填。

## 6. 五维护栏验收

- A（美观）：本版本无新页面。✅ 不破坏
- C（便捷）：锁定/校验 API 可直接接入回测前端；审计可按 sid 过滤。✅
- E（高效）：哈希 O(n) 参数量；审计查询带 `(sid, ts)` 索引。✅
- L（逻辑清晰）：状态单一来源、规范化哈希、明确 verdict。✅ 重点达标
- O（方便运维）：审计证据链、admin 解锁、幂等迁移、版本三处对齐。✅ 重点达标

## 7. 远程 CI 状态

**未触发**：GitHub origin 无 push 凭证（用户自行配置中）。本地已完整复现阻塞门禁，配置凭证后需补跑远程 CI。
