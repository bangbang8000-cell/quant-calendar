#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

qc_log "核心/新模块覆盖率门禁 (13+ 组)"

# 1. 美林时钟 >=70% —— 必须含 correction 测试（_correction.py 曾覆盖 0% 拖到 68.85%）
python3 -m pytest tests/test_merrill_clock.py tests/test_data_sources.py \
  tests/test_v66_merrill_correction.py \
  --cov=merrill_clock --cov-report=term --cov-fail-under=70 -m "not e2e"

# 2. 因子IC / 事实护栏 / 决策复盘数据层 >=70%
python3 -m pytest tests/test_factor_ic.py tests/test_fact_check.py tests/test_eval_track.py \
  tests/test_factor_ic_detail.py \
  --cov=factor_ic --cov=fact_check --cov=eval_track --cov-report=term --cov-fail-under=70 -m "not e2e"

# 3. 数据源自愈 / 复盘激活 / 事件提醒 >=60% —— 含 Fuyao 新模块测试（否则 _fuyao.py 仅 20%）
python3 -m pytest tests/test_data_source_routing.py tests/test_data_sources.py tests/test_data_sources_fetch.py \
  tests/test_market_review_activation.py tests/test_event_alert_live.py tests/test_market_review.py \
  tests/test_kline_minute_v540.py tests/test_fuyao_client.py tests/test_fuyao_units.py \
  tests/test_fuyao_switches.py tests/test_fuyao_secret_guard.py tests/test_data_tier_guard.py \
  --cov=data_sources --cov=market_review --cov=event_alert --cov-report=term --cov-fail-under=60 -m "not e2e"

# 4. 数据中台 >=70%
python3 -m pytest tests/test_data_portal2.py tests/test_data_quality.py tests/test_pit_no_lookahead.py \
  tests/test_data_dict.py tests/test_survivorship.py tests/test_data_lineage.py \
  --cov=data_portal2 --cov=data_quality --cov=pit --cov=data_dict --cov=survivorship --cov=lineage \
  --cov-report=term --cov-fail-under=70 -m "not e2e"

# 5. 回测模块 >=70%
python3 -m pytest tests/test_cost_model.py tests/test_backtest_benchmark.py tests/test_walkforward.py \
  tests/test_param_stability.py tests/test_attribution.py tests/test_backtest_report.py \
  --cov=cost_model --cov=benchmark --cov=walkforward --cov=param_stability \
  --cov=attribution --cov=backtest_report --cov-report=term --cov-fail-under=70 -m "not e2e"

# 6. 风险/组合 >=70%
python3 -m pytest tests/test_risk_metrics.py tests/test_position_sizing.py tests/test_risk_rules.py \
  tests/test_risk_events.py tests/test_portfolio_risk_api.py \
  --cov=risk --cov=rules --cov=risk_events --cov-report=term --cov-fail-under=70 -m "not e2e"

# 7. 通知通道 + 事件引擎 >=70%
python3 -m pytest tests/test_notify_channels.py tests/test_event_engine.py tests/test_alert_rules.py \
  tests/test_alerts_api.py --cov=notify --cov=events --cov=rules_alert \
  --cov-report=term --cov-fail-under=70 -m "not e2e"

# 8. 报表中心 >=70%
python3 -m pytest tests/test_report_templates.py tests/test_report_export.py \
  tests/test_report_subscribe.py tests/test_today_highlights.py \
  --cov=report_center --cov=report_export --cov=report_subscribe \
  --cov-report=term --cov-fail-under=70 -m "not e2e"

# 9. 缓存/任务队列/降采样 >=70%
python3 -m pytest tests/test_cache2.py tests/test_jobs_queue.py tests/test_jobs_integration.py \
  tests/test_downsample.py --cov=jobs --cov=cache --cov=downsample \
  --cov-report=term --cov-fail-under=70 -m "not e2e"

# 10. RBAC >=70%
python3 -m pytest tests/test_rbac_matrix.py --cov=rbac --cov-report=term --cov-fail-under=70 -m "not e2e"

# 11. 协作 >=70%
python3 -m pytest tests/test_collaboration.py --cov=collaboration --cov-report=term --cov-fail-under=70 -m "not e2e"

# 12. APIv3 / SDK / watchlist >=70% —— 必须含 test_watchlist.py（否则仅 64.51%）
python3 -m pytest tests/test_api_v3.py tests/test_sdk.py tests/test_watchlist.py \
  --cov=api.v3 --cov=api.v1.watchlist --cov-report=term --cov-fail-under=70 -m "not e2e"

# 13. 插件 SDK >=70%
python3 -m pytest tests/test_plugins_v2.py --cov=plugin_sdk --cov-report=term --cov-fail-under=70 -m "not e2e"

# 14. AI 评估拆分后不降 >=50%
python3 -m pytest tests/test_ai_evaluator.py tests/test_ai_mock.py tests/test_eval_track.py tests/test_fact_check.py \
  tests/test_api_ai_models.py tests/test_api_batch_evaluate_stream.py tests/test_batch_evaluate_stream.py \
  tests/test_ai_eval_ui.py --cov=ai_eval --cov=ai_evaluator --cov-report=term --cov-fail-under=50 -m "not e2e"

# 15. 调度器拆分后不降 >=30%
python3 -m pytest tests/test_scheduler.py tests/test_file_watch.py tests/test_market_review_activation.py \
  tests/test_v492_day_view_fix.py tests/test_v492_daily_execution.py tests/test_reliability_atomic.py \
  tests/test_reliability_faults.py tests/test_metrics.py tests/test_holdings_concurrency.py \
  --cov=scheduler --cov-report=term --cov-fail-under=30 -m "not e2e"

# 16. 数据源门禁第二处 >=60% —— 同样必须含 Fuyao 测试（否则 52.33%）
python3 -m pytest tests/test_data_sources.py tests/test_data_sources_fetch.py tests/test_data_source_routing.py \
  tests/test_batch_fetch.py \
  tests/test_fuyao_client.py tests/test_fuyao_units.py tests/test_fuyao_switches.py \
  tests/test_data_tier_guard.py --cov=data_sources --cov-report=term --cov-fail-under=60 -m "not e2e"

# 17. 美林门禁第二处 >=70% —— 同样必须含 correction 测试
python3 -m pytest tests/test_merrill_clock.py tests/test_merrill_timeline.py tests/test_v66_merrill_correction.py \
  --cov=merrill_clock --cov-report=term --cov-fail-under=70 -m "not e2e"

# 18. 迁移框架 >=70%
python3 -m pytest tests/test_migrations.py --cov=migrations --cov-report=term --cov-fail-under=70 -m "not e2e"

# 19. 一键升级/回滚工具 >=80%
python3 -m pytest tests/test_upgrade_rollback.py --cov=deploy_tool --cov-report=term --cov-fail-under=80 -m "not e2e"

# 20. 观测性 2.0 >=80%
python3 -m pytest tests/test_observability.py tests/test_metrics.py \
  --cov=metrics --cov=structured_log --cov-report=term --cov-fail-under=80 -m "not e2e"

# 21. 契约 / property
python3 -m pytest tests/test_contract_openapi.py tests/test_property_based.py -q -m "not e2e"

# 22. 脚手架 >=80%
python3 -m pytest tests/test_scaffold.py --cov=scripts_scaffold --cov-report=term --cov-fail-under=80 -m "not e2e"

# 23~25. 6.3.x 拆分产物 / 效率可靠性 / 智能化收敛
python3 -m pytest tests/test_coverage_gate_631.py -q -m "not e2e"
python3 -m pytest tests/test_logging_consistency_632.py tests/test_backup_schedule_632.py \
  tests/test_alert_linkage_632.py tests/test_log_rotation_632.py -q -m "not e2e"
python3 -m pytest tests/test_ai_fallback_633.py tests/test_ai_obs_633.py -q -m "not e2e"

echo "全部模块覆盖率门禁通过"
