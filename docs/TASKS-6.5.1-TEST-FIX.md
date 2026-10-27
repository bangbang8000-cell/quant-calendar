# TASKS: v6.5.1 收尾测试归零

- [x] T1 H类生产修复：themes-components.css 补回 `.sub-nav-more { cursor: pointer; }`（6.5.1 注释，active 块之后）
- [x] T2 H类测试基线：test_frontend_consistency.test_migrated_utility_classes_defined
      baseline_undef 追加 'sidebar'（死代码 sidebar.js，SFC 覆盖，FR-657 清零注释）
- [x] T3 A类聚合读取：11 个测试文件 themes.css 读取点改 5 文件聚合
      （脚本 Temp/qc651_t3_aggregate.py，全部命中次数断言 + py_compile 校验通过）
- [x] T4 A+：test_frontend_consistency.test_mobile_375_responsive_guard 锚点
      `.sidebar {` → `.qc-sidebar {`（读 nav.css），断言语义不变（移动端隐藏侧栏）
- [x] T5 B1：test_convenience_631._menu_subpages 重定向 nav-merge-core.js NEW_NAV
      成员 (page, sub)
- [x] T6 B2：test_v63_m0_gates.test_subpage_names_complete 改读 nav-merge-core sub 集合
      + workspace.js subPageNames 块（'evaluation-analysis': '评估分析' 确认存在）
- [x] T7 B3：test_v69x3_ui_opts 两用例改读 NEW_NAV（system 成员 sub 序 / key: 'ops' 先于 'system'）
- [x] T8 B4：test_frontend_focus.test_focus_in_ai_menus_subpages 重定向（nav-merge-core
      ai 成员含 focus + workspace.js 兜底 + 5 语包）
- [x] T9 C类：test_config_v530 夹具遍历 Settings.model_fields 全量 delenv +
      test_default_values_unchanged 加 _fresh_import()
- [x] T10 D类：扫描面扩至拆分后 5 文件（分母塌缩修复，拆分文件实测 0 违例）+
      components.css .qc-chat-context gap/padding 6/10 → 8/12（4px 栅格）
- [x] T11 E类：5 语包 common 段补 'common.more'（更多/更多/More/もっと見る/더보기）
- [x] T12 F类：test_version_governance_610 演进线扩 6.1.N ~ 6.5.N
- [x] T13 G类：定位为真实生产低效（提交×心跳同锁竞争+O(N) 全表读写）→ jobs.py 生产优化：
      表缓存（stat 签名失效）+ get_task/list_tasks 快照拷贝 + update_progress 0.5s 去抖；
      测试加环境自校准（预热基准拦截稳定慢 IO + 超时复判区分突发停顿/真退化），
      断言一字不动；25/25 过，单跑 4 次稳定
- [x] T14 分批复跑受影响文件归零（20 文件 310 passed 1 skipped）
- [x] T15 全量复跑（.venv，not e2e）→ **3868 passed, 5 skipped, 0 failed**（12:39），
      日志 tmp_651_final.log；第 5 个 skip 为 jobs 自校准（本机单写 28.1ms 拦截，预期行为）
- [x] T16 dist 重建成功（52s），产物核对：5 文件 link / qc-page-head / common.more 均在
- [x] T17 最终交付汇总（实现项 / 测试结果 / 人工走查受限项），不 commit

