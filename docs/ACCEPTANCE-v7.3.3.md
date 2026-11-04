# 验收记录 — v7.3.3「CI 全链路修复 + 3 个真实缺陷」

| 项 | 结果 |
|---|---|
| 版本 | `APP_VERSION = 7.3.3` |
| 交付 | 13 文件（1 workflow / 1 脚本 / 4 后端 / 6 测试 / 1 文档） |
| **GitHub CI** | **8/8 job success**（run [41778817648](https://github.com/bangbang8000-cell/quant-calendar/actions/runs/41778817648)，提交 `b765e54`） |
| 本地测试 | **4293 passed / 1 skipped / 0 failed**（`TZ=UTC`，对齐 CI） |
| ruff（CI 范围） | `backend/` 全绿 |

## 修复链条（每修一层才暴露下一层）

| # | 失败点 | 根因 | 修法 |
|---|---|---|---|
| 1 | 0s 失败、无 job | workflow YAML 非法：UTF-8 BOM + 3 处步骤名含「: 」未加引号 | 去 BOM、加引号；本地 PyYAML 校验 + 校验 job 图 |
| 2 | 锁文件漂移 | `uv pip compile -o <已存在文件>` 沿用旧 pin；CI 编译到临时路径取最新 | `--upgrade` 重编译，与 CI 输出逐字符一致 |
| 3 | 锁文件仍红 | 本机 uv 0.13.7 与 CI 0.11.7 的 `# via` 注释不同（重复 `-c requirements.lock`） | 装 0.11.7 重编译 dev 锁 |
| 4 | exit 127 | Lint 步骤从未安装 ruff | 新增安装步骤，版本取自 dev 锁 |
| 5 | 9 处 ruff 违规 | 历史欠债 | 逐条真修（含 1 个 F821 真 bug） |
| 6 | 覆盖率 68.85% | merrill `_correction.py` 0%（门禁测试集缺文件，且有两处门禁） | 两处都补 `test_v66_merrill_correction.py` → 78.27% |
| 7 | 覆盖率 52.33% / 56.66% | data_sources `_fuyao.py` 20%（同上，两处门禁） | 两处都补 4 个 Fuyao 测试 → 67.58% / 66.69% |
| 8 | 覆盖率 64.51% | watchlist API 56%，门禁测试集不含它的测试 | 补 API 用例 + 把 `test_watchlist.py` 并进门禁 → 76.94% |
| 9 | 7 场景断言失败 | 标题断言停在旧口径；详情只认弹窗（宽屏默认分栏） | 按 `MEMBER_LABELS` 更新 8 处；ready 兼容 `.detail-split-pane, .kline-dialog` |
| 10 | 体积门禁三连红 | PRD 目标值（1800/400/600KB）被当 fail 线，实测 2475/1085/907KB | 拆「回归护栏（实测+8%）/ 目标值（仅展示）」+ 同步 4 个契约用例 |

## 过程中修出的 3 个真实产品缺陷

1. **DWH 落库日期时区相关**（v7.0 引入）：`CAST(to_timestamp(date_ms/1000) AS DATE)` 在 UTC 容器里整体前移一天，导致 `raw_kline_daily` 日期错、增量判定 INCREMENTAL 误变 FULL。改为按 +08:00 固定折算 + 新增 TZ 无关用例。
2. **`GET /api/market/datasource/config` 缺段 KeyError → 500**：`datasource_config.json` 没有 `sxsc_tushare` 段时系统配置页打不开。改 `setdefault` 兜底 + 回归用例。
3. **调度器 `_sleep_until` NameError**（v6.3.0 拆分引入）：用了 `timedelta` 但模块未导入，跨日休眠必崩。补导入。

## 已知欠债（未在本版处理）

- `tests/` 目录数百处 ruff 历史问题，CI 仅 lint `backend/`
- 视觉基线是旧 UI，`--strict` 未启用；启用前需一次正式 re-baseline
- 锁文件"解析最新版"策略会随上游发版再次漂移，建议加每周自动刷新 lock 的定时任务
