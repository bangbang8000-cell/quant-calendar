# SPEC: v6.5.1 收尾 — 全量测试 35 失败归零

## 背景

6.5.1（设计系统 FR-655/656/657）完成后 `.venv` 全量复跑：3833 passed / 35 failed
（日志 `quant-calendar-dev/tmp_651_full.log`）。失败全部源于 6.5.0 导航合并（菜单定义
移入 nav-merge-core.js）与 6.5.1 themes.css 拆域 5 文件导致的**测试读取点过时**，
以及少量真实缺陷（resplit 丢样式、语包缺键、4px 栅格违例）。

**授权状态**：用户已授权「中间不要停下来问我，直到全部完成后再找我人工核对」。
本 Spec 为系统 Spec 模式合规产物，批准后连续执行到归零。

## 硬约束

- 只修测试读取点/夹具，禁止删除或弱化断言；生产代码只修真实缺陷（H/E/D 类）。
- 不做 git commit/tag/push。
- 最终验证解释器：`.venv/Scripts/python.exe`（全局 python 漂移已确认）。
- PowerShell 不支持 heredoc/`&&`：脚本落 Temp + `;` 链。

## 修复项（按类，决策已定）

### A 类：themes.css 单文件读取 → 聚合 5 文件（约 20 个失败）

themes.css 拆为 themes.css / themes-market.css / themes-features.css /
themes-components.css / themes-pages.css。以下测试仍只读 themes.css：

| 测试文件 | 读取点 | 改法 |
|---|---|---|
| test_chart_toolbox.py:96 | `_read('frontend/css/themes.css')` | 改聚合 |
| test_density_pref.py | 2 处（执行时定位） | 改聚合 |
| test_empty_error_states.py | 2 处 | 改聚合 |
| test_frontend_consistency.py | 行 154/244/342/364/384/707/1083/1306/1400/1821 | 改聚合 |
| test_ops_release_v536.py:49 | `_read(...)` | 改聚合 |
| test_performance.py:203 | `_read_frontend(...)` | 改聚合 |
| test_portfolio.py:412 | `_read_frontend(...)` | 改聚合 |
| test_theme_walkthrough.py:30 | 模块级 `THEMES_CSS` | 改聚合 |
| test_today_signals_v535.py:54 | `_read(...)` | 改聚合 |
| test_today_snapshot.py:115 | 内联 open() | 改聚合 |
| test_v515x_ui_ux.py | `_read_f` ×4 | 改聚合 |

统一模式（参照已改好的 test_a11y_631.py）：

```python
_THEME_FILES = ["css/themes.css", "css/themes-market.css", "css/themes-features.css",
                "css/themes-components.css", "css/themes-pages.css"]
def _themes_css():
    return "".join(_read(rel) for rel in _THEME_FILES)
```

### A+：test_frontend_consistency.py::test_mobile_375_responsive_guard（IndexError）

行 1766 `resp.rsplit(".sidebar {", 1)[1]`：FR-657 已删 responsive.css 的 .sidebar 规则，
移动端隐藏侧栏现为 nav.css:499 `.qc-sidebar { display: none; }`。断言改锚 `.qc-sidebar {`
（语义不变：移动端隐藏侧栏），读取文件加 nav.css。

### B 类：菜单解析 4 个测试 → 重定向 nav-merge-core.js

shell.js:123 已改为 `_navMerge.nav()` 派生 subPages，旧字面量 `{key:'x',subPages:[...]}`
不存在。command-panel.js 45 处 navigateTo 全部为旧坐标，与 NEW_NAV 成员
`page/sub` 一致（38/38 已人工核对覆盖）。

1. **test_convenience_631.py::_menu_subpages**（行 30-39）：改为解析
   `frontend/js/nav-merge-core.js` 的 NEW_NAV：`members` 数组中
   `{ key: 'x', page: 'p', sub: 's' }` → pairs 集合 `(p, s)`。门禁语义不变
   （全部子页有命令直达）。
2. **test_v63_m0_gates.py::test_subpage_names_complete**：subPageNames 对象现位于
   `js/app-logic/workspace.js:266`（含 281 subPageNamesMerged 合并组）。改为读
   workspace.js 的 `const subPageNames = {...}` 块；sub_pages 集合改从
   nav-merge-core.js NEW_NAV 成员 `sub` 键提取；保留
   `'evaluation-analysis': '评估分析'` 断言（执行时先 grep workspace.js 确认该键存在，
   缺则补进 subPageNamesMerged——生产修复）。
3. **test_v69x3_ui_opts.py::test_system_subpages_order / test_ops_menu_before_system**：
   改读 nav-merge-core.js NEW_NAV：system 成员顺序断言
   `config, feature, autoeval, datasource, user, notification, about`；
   NEW_NAV 中 ops 顺序位于 system 之前。（执行时先读原断言细节保持语义。）
4. **test_frontend_focus.py::test_focus_in_ai_menus_subpages**（IndexError）：执行时读
   该用例，按同模式把菜单/subPages 来源重定向 nav-merge-core.js（焦点名单不变）。

### C 类：test_config_v530.py::test_default_values_unchanged（.env 泄漏）

真实 `.env`（CORS_ORIGINS/PORT=8001）泄入 os.environ。夹具在导入 Settings 前遍历
`Settings.model_fields` 逐键 `monkeypatch.delenv(key, raising=False)`，并将
CORS_ORIGINS/PORT 显式 delenv。断言不动。

### D 类：test_spacing_grid.py 4px 栅格 0.896（11 处违例：10px/11px/1px/2px/6px）

执行时先读测试拿到 11 处明细，再修 CSS 值（不放宽测试）：
- 已知一处：components.css `.qc-chat-context` padding `6px 10px` → `8px 12px`（FR-650）。
- 其余按值就近归到 4px 栅格（1px/2px 若为 border 宽度且测试本就豁免 border 则不涉）；
  若个别为设计令牌固有值，在测试豁免清单登记并注明理由（最后手段，逐条给理由）。

### E 类：i18n `common.more` 缺定义（2 个失败）

5 语包 `frontend/js/locales/{zh-CN,zh-TW,en,ja,ko}.js` 的 common 段补：
`more: '更多' / '更多' / 'More' / 'もっと' / '더보기'`（执行时先 grep t('common.more')
使用点确认语义——预计为二级「更多」下拉/命令面板）。

### F 类：test_version_governance_610.py::test_app_version_defined

演进线正则只允许 6.1-6.4，扩为 `6\.[1-5]\.N`（6.5.0/6.5.1 为计划内版本）。

### G 类：test_jobs_queue.py::test_submit_many_tasks_nonblocking（1.374s）

单跑 3 次确认。通过 → 判定机器负载 flake，不改；仍失败 → 读测试与实现定位
（疑后台全量跑时资源争抢），按证据处理。

### H 类：migrated utility 未定义类 ['sidebar', 'sub-nav-more']

1. `.sub-nav-more { cursor: pointer; }` 补回 themes.css（6.5.0 FR-653.1「更多」下拉
   样式，resplit 丢失；带版本注释）。生产修复。
2. `sidebar`：引用来自 `js/components/sidebar.js` 死代码（index.html 不加载，
   SFC Sidebar.vue 覆盖）。在 test_migrated_utility_classes_defined 的
   baseline_undef 追加 `'sidebar'` + 注释（6.5.1: sidebar.js 为 SFC 覆盖死代码，
   .sidebar CSS 已按 FR-657 清零；不新增未定义类的门禁语义保持）。

### 已修复待复跑确认

- I 类 test_logic_factory_parity_630[workspace]：ctx 解构已回退、装配两侧一致。

## 验证步骤

1. 分批跑受影响测试文件（.venv）归零。
2. G 类单跑 3 次。
3. 全量：`.venv/Scripts/python.exe -m pytest tests -q -m "not e2e" --ignore=tests/test_e2e
   -p no:cacheprovider` → 0 failed（日志 quant-calendar-dev/tmp_651_final.log）。
4. dist 无需重建（本批生产改动仅 CSS 一条规则 + 语包 5 键，仍执行一次
   `npm --prefix frontend run build` 保证 dist 与源一致）。
5. 产出交付汇总：已实现项 / 测试结果 / 未完成·受限项（浏览器 SW 缓存致走查受阻的
   人工项：TC-655-01 断网、TC-656-01 KPI 密度、TC-657-01 移动实机与暗色三档、弹窗三主题）。

## 交付物

- 归零的全量测试日志
- 最终交付汇总（对话内输出，不新建文档）
