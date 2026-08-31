#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
定时任务调度器
"""

import asyncio
import json
import logging
import os
from datetime import datetime, timedelta
from data_parser import parser
from feishu_push import FeishuPusher
from ai_evaluator import ai_evaluator
from views_aggregator import views_aggregator
from paths import EXTERNAL_DATA_DIR, DATA_DIR
from db import backup_db
from report_generator import generate_weekly_report

logger = logging.getLogger(__name__)

# v3.17.12 (FR-3.17.12): 数据拉取任务连续失败飞书告警阈值
PULL_ALERT_THRESHOLD = 3

# V4.9 (P1): 调度执行历史持久化 — 记录每次任务运行详情
HISTORY_FILE = os.path.join(DATA_DIR, "scheduler_history.json")
_HISTORY_MAX = 5000  # 最多保留 5000 条记录




# v3.21 (P0-8): 策略定期运行 — 对 governance 中 enabled 策略逐个 run-once 生成持仓
def run_strategy_once(progress_cb=None):
    """执行所有启用策略的 run-once (同步, 供调度任务与手工触发共用)
    返回 (ok, executed_sids, errors)
    progress_cb(sid, stage): V4.9.2 可选进度回调 (stage: generating/done), 供执行监控
    """
    import strategy_governance as gov
    state = gov.get_state()
    executed = []
    errors = []
    for sid, s in state.items():
        if not s.get("enabled"):
            continue
        try:
            if progress_cb:
                progress_cb(sid, "generating")
            gov.run_once(sid)
            executed.append(sid)
            if progress_cb:
                progress_cb(sid, "done")
        except Exception as e:
            logger.error("策略 %s 定期运行失败: %s", sid, e)
            errors.append({"sid": sid, "error": str(e)[:120]})
    return (not errors, executed, errors)


def verify_day_ingest(date, agg=None):
    """V4.9.2 (F1.2): 校验某日期持仓是否已进入日视图 (聚合器整体新鲜度金丝雀).

    四个视图(日/周/月/年)共享 views_aggregator.daily_data; 日视图 total>0
    即代表聚合器包含该日期 → 四视图一致. 返回 (ok, detail).
    """
    from views_aggregator import views_aggregator as _default_agg
    agg = agg or _default_agg
    dates = list(getattr(agg, "all_dates", None) or [])
    if date not in dates:
        latest = dates[-1] if dates else "无"
        return False, f"{date} 不在聚合器可用日期内(共{len(dates)}天, 最新 {latest})"
    try:
        total = int((agg.get_day_view(date) or {}).get("total", 0))
    except Exception as e:
        return False, f"{date} 日视图查询失败: {str(e)[:60]}"
    if total <= 0:
        return False, f"{date} 日视图为空(total=0)"
    return True, f"{date} 日视图已可见(total={total})"


def scan_csv_files(dirs, recursive=False):
    """扫描多个目录下 .csv 的 mtime (V4.9.2 扩展: 含 data/holdings 递归目录).

    recursive=True 时遍历子目录(适配 holdings/{日期}/*.csv 结构).
    返回 {绝对路径: mtime}
    """
    import os as _os
    mtimes = {}
    for d in dirs:
        if not d or not _os.path.isdir(d):
            continue
        if recursive:
            for root, _subdirs, files in _os.walk(d):
                for fname in files:
                    if fname.endswith(".csv"):
                        fpath = _os.path.join(root, fname)
                        try:
                            mtimes[fpath] = _os.path.getmtime(fpath)
                        except OSError:
                            pass
        else:
            for fname in _os.listdir(d):
                if fname.endswith(".csv"):
                    fpath = _os.path.join(d, fname)
                    try:
                        mtimes[fpath] = _os.path.getmtime(fpath)
                    except OSError:
                        pass
    return mtimes


def detect_csv_changes(prev_mtimes: dict, current_mtimes: dict):
    """检测 CSV 文件变动 (FR-3.12.1 / task 12.3, 纯函数可测)

    返回 (changed, description); changed=True 表示有 变动/新增/删除。
    """
    for fpath, mtime in current_mtimes.items():
        if fpath in prev_mtimes and prev_mtimes[fpath] != mtime:
            return True, f"文件变动: {os.path.basename(fpath)}"
    for fpath in current_mtimes:
        if fpath not in prev_mtimes:
            return True, f"新文件: {os.path.basename(fpath)}"
    for fpath in prev_mtimes:
        if fpath not in current_mtimes:
            return True, f"文件删除: {os.path.basename(fpath)}"
    return False, "无变动"


class Scheduler:
    def __init__(self):
        self.pusher = FeishuPusher()
        self.tasks = {}
        self.running = False
        self.last_exec_date = None  # 记录最后执行日期，避免重复
        # v3.17.12 (FR-3.17.12): 各调度任务运行状态 (供 /api/system/health-detail + Prometheus)
        self.task_status = {}
        self._disk_alert_date = None  # 磁盘告警每日节流
        self._backup_failures = 0  # 备份连续失败计数
        # V4.9.2 (P1): 策略自动执行进度快照 (供 /api/strategies/execution/status)
        self.execution_progress = None

    def _record_task_run(self, task: str, success: bool, detail: str = ''):
        """记录一次调度任务运行结果 (状态聚合 + Prometheus 埋点 + 持久化历史)"""
        now = datetime.now()
        slot = self.task_status.setdefault(task, {
            'name': task, 'last_run': None, 'last_success': None,
            'last_status': None, 'detail': '',
            'success_count': 0, 'failure_count': 0, 'consecutive_failures': 0,
        })
        slot['last_run'] = now.strftime('%Y-%m-%d %H:%M:%S')
        slot['detail'] = detail or ''
        if success:
            slot['last_success'] = now.strftime('%Y-%m-%d %H:%M:%S')
            slot['last_status'] = 'success'
            slot['success_count'] += 1
            slot['consecutive_failures'] = 0
        else:
            slot['last_status'] = 'failed'
            slot['failure_count'] += 1
            slot['consecutive_failures'] += 1
        try:
            import metrics
            metrics.record_scheduler_run(task, success)
        except Exception:
            logger.warning("指标埋点失败 (忽略)", exc_info=True)
        # V4.9 (P1): 持久化每条历史记录
        self._persist_history(task, success, detail)
        return slot

    def _persist_history(self, task: str, success: bool, detail: str):
        """将单次执行记录追加到 scheduler_history.json"""
        try:
            record = {
                'task': task,
                'success': success,
                'detail': detail[:200] if detail else '',
                'ts': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            }
            history = []
            if os.path.exists(HISTORY_FILE):
                try:
                    with open(HISTORY_FILE, 'r', encoding='utf-8') as f:
                        history = json.load(f)
                except (json.JSONDecodeError, OSError):
                    history = []
            history.append(record)
            # 超限滚动删除最旧记录
            if len(history) > _HISTORY_MAX:
                history = history[-_HISTORY_MAX:]
            with open(HISTORY_FILE, 'w', encoding='utf-8') as f:
                json.dump(history, f, ensure_ascii=False, indent=2)
        except Exception as e:
            logger.warning("调度历史持久化失败 (忽略): %s", e)

    def get_execution_history(self, days: int = 7, task: str = '', status: str = '', limit: int = 200) -> list:
        """从持久化文件读取执行历史，支持按天/任务名/状态筛选"""
        try:
            if not os.path.exists(HISTORY_FILE):
                return []
            with open(HISTORY_FILE, 'r', encoding='utf-8') as f:
                history = json.load(f)
        except (json.JSONDecodeError, OSError):
            return []
        if not isinstance(history, list):
            return []
        # 按时间倒序（最新在前）；同秒记录按写入顺序倒序（后写在前）
        history = list(enumerate(history))
        history.sort(key=lambda i_r: (i_r[1].get('ts', ''), i_r[0]), reverse=True)
        history = [r for _, r in history]
        # 按天数筛选
        if days > 0:
            cutoff = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
            history = [r for r in history if r.get('ts', '')[:10] >= cutoff]
        # 按任务名筛选
        if task:
            history = [r for r in history if r.get('task', '') == task]
        # 按状态筛选
        if status == 'success':
            history = [r for r in history if r.get('success')]
        elif status == 'failed':
            history = [r for r in history if not r.get('success')]
        return history[:limit]

    def get_execution_summary(self, days: int = 30) -> dict:
        """聚合统计：各任务执行次数/成功率/趋势"""
        history = self.get_execution_history(days=days, limit=_HISTORY_MAX)
        total = len(history)
        success_count = sum(1 for r in history if r.get('success'))
        by_task = {}
        for r in history:
            t = r.get('task', 'unknown')
            if t not in by_task:
                by_task[t] = {'total': 0, 'success': 0, 'failed': 0, 'last_run': '', 'last_status': ''}
            by_task[t]['total'] += 1
            if r.get('success'):
                by_task[t]['success'] += 1
            else:
                by_task[t]['failed'] += 1
            if r.get('ts', '') > by_task[t]['last_run']:
                by_task[t]['last_run'] = r['ts']
                by_task[t]['last_status'] = 'success' if r.get('success') else 'failed'
        # 每日趋势
        daily = {}
        for r in history:
            day = r.get('ts', '')[:10]
            if day not in daily:
                daily[day] = {'total': 0, 'success': 0, 'failed': 0}
            daily[day]['total'] += 1
            if r.get('success'):
                daily[day]['success'] += 1
            else:
                daily[day]['failed'] += 1
        return {
            'total': total,
            'success_count': success_count,
            'success_rate': round(success_count / total * 100, 1) if total > 0 else 0,
            'by_task': by_task,
            'daily_trend': daily,
        }

    def get_task_status(self) -> dict:
        """返回各调度任务运行状态快照 (FR-3.17.12)"""
        return dict(self.task_status)

    @staticmethod
    def _read_feishu_webhook() -> str:
        """读取飞书 Webhook (data/feishu_config.json), 未配置/读取失败返回空串"""
        try:
            import json
            from paths import DATA_DIR
            cfg_path = os.path.join(DATA_DIR, "feishu_config.json")
            if os.path.exists(cfg_path):
                with open(cfg_path, 'r', encoding='utf-8') as f:
                    return json.load(f).get('webhook_url', '')
        except Exception:
            logger.warning("读取飞书配置失败", exc_info=True)
        return ''

    def _send_feishu_alert(self, title: str, body: str) -> bool:
        """发送飞书告警; 未配置/不可达仅记录日志不崩溃 (FR-3.17.12)"""
        webhook = self._read_feishu_webhook()
        if not webhook:
            logger.warning(f"飞书告警未发送 (未配置 webhook): {title}")
            return False
        try:
            pusher = FeishuPusher(webhook)
            ok = pusher.send_text(f"🚨 {title}\n{body}")
            if ok:
                logger.info(f"📮 告警已发送飞书: {title}")
            else:
                logger.warning(f"飞书告警发送失败: {title}")
            return ok
        except Exception as e:
            logger.error(f"飞书告警发送异常: {e}")
            return False

    def _check_disk_alert(self, threshold_percent: float = 10.0):
        """磁盘剩余空间 < 阈值 → 飞书告警 (每日最多一次, FR-3.17.12)"""
        try:
            from paths import DATA_DIR
            st = os.statvfs(DATA_DIR)
            total = st.f_blocks * st.f_frsize
            free = st.f_bavail * st.f_frsize
            if total <= 0:
                return
            percent = round(free / total * 100, 2)
            today = datetime.now().strftime('%Y-%m-%d')
            if percent < threshold_percent and self._disk_alert_date != today:
                self._disk_alert_date = today
                self._send_feishu_alert(
                    "磁盘剩余空间不足",
                    f"剩余 {percent}% (可用 {free / (1024 ** 3):.1f} GB / 共 {total / (1024 ** 3):.1f} GB)\n"
                    f"阈值: {threshold_percent}%"
                )
        except (AttributeError, OSError):
            # 平台不支持 os.statvfs (Windows) → 忽略
            logger.debug("磁盘检测不可用 (平台不支持 os.statvfs)")
        except Exception as e:
            logger.warning(f"磁盘告警检测异常: {e}")

    def set_webhook(self, url: str):
        """设置飞书Webhook"""
        self.pusher.set_webhook(url)

    def _should_execute_today(self) -> bool:
        """判断今天是否应该执行（避免重复执行）"""
        today = datetime.now().strftime('%Y-%m-%d')
        if self.last_exec_date == today:
            return False
        self.last_exec_date = today
        return True

    async def daily_report_task(self):
        """每日报告任务 (v3.5.0-T2: 用批量日报生成器 + 飞书推送)"""
        while self.running:
            now = datetime.now()
            # 计算到下一个 9:00 的秒数
            target = now.replace(hour=9, minute=0, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break
            dates = parser.get_available_dates()
            if dates:
                logger.info(f"📤 执行每日推送任务: {dates[-1]}")
                try:
                    # v3.5.0-T1: 生成批量日报
                    from report_generator import generate_daily_report
                    report = generate_daily_report(dates[-1])
                    if report.get("success"):
                        logger.info(f"✅ 批量日报生成: {report['stats']['strategies']} 策略 / {report['stats']['stocks']} 只")
                        # v3.17.15 (FR-3.17.15): Webhook — review_ready 事件
                        try:
                            from webhook import dispatch as webhook_dispatch
                            webhook_dispatch("review_ready", {"date": dates[-1], "type": "daily_report"})
                        except Exception as we:
                            logger.warning("webhook review_ready 投递失败 (忽略): %s", we)
                        # 飞书推送 (Markdown 文本)
                        self.pusher.send_text(report["content"][:3500])
                        logger.info("📮 日报已推送飞书")
                        self._record_task_run("daily_report", True, f"日报 {dates[-1]}")
                    else:
                        # 回退旧版推送
                        self.pusher.send_daily_report(dates[-1])
                        self._record_task_run("daily_report", True, "日报回退旧版推送")
                except Exception as e:
                    logger.error(f"日报推送失败, 回退旧版: {e}")
                    self._record_task_run("daily_report", False, str(e)[:120])
                    try:
                        self.pusher.send_daily_report(dates[-1])
                    except Exception:
                        logger.warning('scheduler:215 静默异常 (Exception)')
            await asyncio.sleep(60)  # 避开重复触发

    async def auto_evaluate_task(self):
        """自动评估任务"""
        while self.running:
            now = datetime.now()
            config = ai_evaluator.get_auto_config()

            if not config.get('enabled', False):
                # 未启用时每小时检查一次（而非每60秒空转）
                await asyncio.sleep(3600)
                continue

            schedule_time = config.get('schedule_time', '09:00')
            target_hour, target_minute = map(int, schedule_time.split(':'))

            # 计算到目标时间的秒数
            target = now.replace(hour=target_hour, minute=target_minute, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break

            if self._should_execute_today():
                logger.info(f"🤖 开始自动评估任务: {datetime.now()}")

                try:
                    # 获取要评估的股票列表
                    selected_stocks = config.get('selected_stocks', [])
                    selected_strategies = config.get('selected_strategies', [])

                    # 如果选择了策略，从策略中获取股票池
                    strategy_stocks = set()
                    if selected_strategies:
                        dates = parser.get_available_dates()
                        if dates:
                            for strategy in selected_strategies:
                                holdings = parser.get_strategy_holdings(strategy, dates[-1])
                                for stock in holdings:
                                    strategy_stocks.add(stock['code'])

                    # 合并股票列表
                    all_stocks = list(set(selected_stocks) | strategy_stocks)

                    if not all_stocks:
                        logger.warning(" 自动评估: 没有要评估的股票")
                        await asyncio.sleep(60)
                        continue

                    logger.info(f"📊 自动评估: 评估 {len(all_stocks)} 只股票")

                    # 批量评估
                    results = await ai_evaluator.batch_evaluate(all_stocks, username='auto_scheduler')

                    # 推送到飞书
                    if config.get('push_to_feishu', True):
                        await self._push_ai_evaluation_report(results)

                    logger.info(f"✅ 自动评估完成: {len(results)} 条记录")
                    self._record_task_run("auto_evaluate", True, f"评估 {len(results)} 只")
                    # v3.17.15 (FR-3.17.15): Webhook — evaluate_done 事件
                    try:
                        from webhook import dispatch as webhook_dispatch
                        webhook_dispatch("evaluate_done", {
                            "username": "auto_scheduler",
                            "count": len(results),
                            "at": datetime.now().isoformat(),
                        })
                    except Exception as we:
                        logger.warning("webhook evaluate_done 投递失败 (忽略): %s", we)

                except Exception as e:
                    logger.error(f" 自动评估失败: {e}")
                    self._record_task_run("auto_evaluate", False, str(e)[:120])

                # 等待1分钟避免重复执行
                await asyncio.sleep(60)

    async def _push_ai_evaluation_report(self, results):
        """推送AI评估报告到飞书"""
        try:
            if not results:
                return

            # 从自动评估配置中获取 webhook URL
            config = ai_evaluator.get_auto_config()
            webhook = config.get('feishu_webhook', '')
            if not webhook:
                # 回退到全局飞书配置的 webhook
                try:
                    import json
                    import os
                    from paths import DATA_DIR
                    feishu_config_file = os.path.join(DATA_DIR, "feishu_config.json")
                    if os.path.exists(feishu_config_file):
                        with open(feishu_config_file) as f:
                            fc = json.load(f)
                        webhook = fc.get('webhook_url', '')
                except Exception:
                    logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
                    pass

            if not webhook:
                logger.warning(" 自动评估推送: 未配置飞书 Webhook")
                return

            self.pusher.set_webhook(webhook)

            # 生成报告
            total_count = len(results)
            avg_score = sum(r['result']['total_score'] for r in results) / total_count

            # 按评级分类
            level_counts = {}
            for r in results:
                level = r['result']['level']
                level_counts[level] = level_counts.get(level, 0) + 1

            # 找出高分股票
            high_score = sorted(results, key=lambda x: x['result']['total_score'], reverse=True)[:5]

            report = "🤖 自动AI评估报告\n\n"
            report += f"📊 评估总数: {total_count} 只\n"
            report += f"📈 平均评分: {avg_score:.1f} 分\n\n"

            report += "🏆 评级分布:\n"
            for level, count in sorted(level_counts.items(), key=lambda x: -x[1]):
                report += f"  • {level}: {count} 只\n"

            report += "\n⭐ 高分推荐 (Top 5):\n"
            for stock in high_score:
                report += f"  • {stock['stock_name']} ({stock['stock_code']}): {stock['result']['total_score']}分 - {stock['result']['level']}\n"

            report += f"\n⏰ 评估时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"

            self.pusher.send_text(report)
            logger.info("✅ AI评估报告已推送到飞书")
        except Exception as e:
            logger.error(f" 推送AI报告失败: {e}")

    async def weekly_report_task(self):
        """每周报告任务"""
        while self.running:
            now = datetime.now()
            # 计算到下一个周六 10:00 的秒数
            days_until_saturday = (5 - now.weekday()) % 7
            if days_until_saturday == 0 and now.hour >= 10:
                days_until_saturday = 7  # 本周六已过，等下周六
            target = now.replace(hour=10, minute=0, second=0, microsecond=0) + timedelta(days=days_until_saturday)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break
            logger.info("📤 执行每周报告任务")
            try:
                result = generate_weekly_report()
                if result.get('success'):
                    logger.info(f"✅ 周报生成成功: {result.get('path', '')}")
                    self._record_task_run("weekly_report", True, result.get('path', ''))
                    # 飞书推送周报摘要
                    try:
                        content = result.get('content', '')
                        preview = content[:1500] + ('...' if len(content) > 1500 else '')
                        self.pusher.send_text(f"📈 量化选股周报\n\n{preview}")
                        logger.info("✅ 周报已推送到飞书")
                    except Exception as e:
                        logger.warning(f"周报飞书推送失败: {e}")
                else:
                    logger.warning(f"周报生成失败: {result.get('message', '')}")
                    self._record_task_run("weekly_report", False, result.get('message', '')[:120])
            except Exception as e:
                logger.error(f"每周报告任务异常: {e}")
                self._record_task_run("weekly_report", False, str(e)[:120])
            await asyncio.sleep(60)  # 避开重复触发

    # ─── v3.21 (P0-8): 策略定期运行(默认 20:00) ───
    def _refresh_after_strategy_run(self, today):
        """V4.9.2 (F1.1/F1.2): 持仓生成后刷新 parser+views_aggregator 并校验日视图可见性.

        四视图(日/周/月/年)共享聚合器 daily_data, 一次 reload() 全覆盖;
        校验失败返回 (False, 原因), 由调用方据实记录, 不再报假成功.
        """
        try:
            from data_parser import parser as _dp_parser
            _dp_parser.reload()
            views_aggregator.reload()
            logger.info("📊 策略持仓已热刷新进日历数据(parser+views_aggregator)")
        except Exception as _e:
            logger.warning("策略持仓热刷新失败: %s", _e)
            return False, f"策略持仓热刷新失败: {str(_e)[:120]}"
        return verify_day_ingest(today)

    def _self_heal_aggregator(self) -> bool:
        """V4.9.2 (F1.3): 聚合器自愈 — 持仓最新日期 > 聚合器最新日期时自动刷新.

        health_check 每5分钟调用; 触发刷新时记录 self_heal 任务, 无漂移不记录.
        """
        try:
            holdings_root = os.path.join(DATA_DIR, "holdings")
            if not os.path.isdir(holdings_root):
                return False
            dates = sorted(d for d in os.listdir(holdings_root)
                           if os.path.isdir(os.path.join(holdings_root, d)))
            if not dates:
                return False
            latest_holdings = dates[-1]
            agg_latest = views_aggregator.all_dates[-1] if views_aggregator.all_dates else None
            if agg_latest is None or latest_holdings > agg_latest:
                stats = views_aggregator.reload()
                new_latest = (stats or {}).get("latest_date") or latest_holdings
                self._record_task_run(
                    "self_heal", True,
                    f"聚合器滞后 {agg_latest}→{latest_holdings}, 已自动刷新至 {new_latest}")
                logger.warning("🛠 聚合器自愈: 刷新至 %s", new_latest)
                return True
            return False
        except Exception as _e:
            logger.warning("聚合器自愈检查失败: %s", _e)
            return False

    async def strategy_run_task(self):
        """每日收盘后按 governance 纳管状态定时运行启用策略 → 持仓文件"""
        last_date = None
        while self.running:
            try:
                import strategy_governance as gov
                state = gov.get_state()
                # 用第一个启用策略的 schedule(全局默认), 单任务统一调度
                schedule_time = gov.DEFAULT_SCHEDULE
                for _sid, _s in state.items():
                    if _s.get("enabled"):
                        schedule_time = _s.get("schedule") or gov.DEFAULT_SCHEDULE
                        break
                now = datetime.now()
                th, tm = map(int, schedule_time.split(":"))
                target = now.replace(hour=th, minute=tm, second=0, microsecond=0)
                if target <= now:
                    target += timedelta(days=1)
                await asyncio.sleep(max((target - now).total_seconds(), 10))
                if not self.running:
                    break
                today = datetime.now().strftime("%Y-%m-%d")
                if last_date == today:
                    await asyncio.sleep(60)
                    continue
                last_date = today
                logger.info("⏰ 策略定期运行: %s", today)
                try:
                    # V4.7.1 (并发安全): 引擎取数/因子计算同步阻塞事件循环(全市场每策略 60-120s) → 移入后台线程
                    started = datetime.now()
                    self.execution_progress = {
                        "phase": "running", "current_sid": None, "stage": "generating",
                        "started_at": started.strftime("%Y-%m-%d %H:%M:%S"),
                        "updated_at": started.strftime("%H:%M:%S"),
                        "detail": f"策略持仓生成中 {today}",
                    }

                    def _progress_cb(sid, stage):
                        self.execution_progress.update({
                            "current_sid": sid, "stage": stage,
                            "updated_at": datetime.now().strftime("%H:%M:%S"),
                        })

                    run_ok, executed, errors = await asyncio.to_thread(run_strategy_once, _progress_cb)
                    # V4.9.2 (F1.1/F1.2): 刷新 parser+聚合器并校验当日已进日视图
                    _ok, _detail = self._refresh_after_strategy_run(today)
                    ok = run_ok and _ok and not errors
                    detail = f"策略持仓已生成 {today}; {_detail}; 策略:{','.join(executed or []) or '无'}"
                    if errors:
                        detail += "; 失败:" + ";".join(e["sid"] + ":" + e["error"] for e in errors)[:100]
                    self.execution_progress = {
                        "phase": "done" if ok else "failed", "current_sid": None,
                        "stage": "reloaded", "started_at": started.strftime("%Y-%m-%d %H:%M:%S"),
                        "updated_at": datetime.now().strftime("%H:%M:%S"),
                        "detail": detail[:200],
                    }
                    self._record_task_run("strategy_run", ok, detail[:200])
                except Exception as e:
                    logger.error("策略定期运行失败: %s", e)
                    if self.execution_progress:
                        self.execution_progress["phase"] = "failed"
                        self.execution_progress["updated_at"] = datetime.now().strftime("%H:%M:%S")
                    self._record_task_run("strategy_run", False, str(e)[:120])
                await asyncio.sleep(60)
            except Exception as e:
                logger.info("策略定时任务异常: %s", e)
                await asyncio.sleep(60)
    async def data_refresh_task(self):
        """定时刷新策略数据任务"""
        last_refresh_date = None
        while self.running:
            try:
                from data_refresh_config import load_config
                config = load_config()

                if not config.get('scheduled_enabled', False):
                    await asyncio.sleep(3600)  # 未启用时每小时检查
                    continue

                now = datetime.now()
                schedule_time = config.get('scheduled_time', '22:00')
                target_hour, target_minute = map(int, schedule_time.split(':'))

                # 计算到目标时间的秒数
                target = now.replace(hour=target_hour, minute=target_minute, second=0, microsecond=0)
                if target <= now:
                    target += timedelta(days=1)
                wait = (target - now).total_seconds()
                await asyncio.sleep(max(wait, 10))

                if not self.running:
                    break

                today = datetime.now().strftime('%Y-%m-%d')
                if last_refresh_date != today:
                    last_refresh_date = today
                    logger.info(f"⏰ 定时刷新: {today}")
                    try:
                        parser.reload()
                        views_aggregator.reload()
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(True, f"定时刷新成功 {today}")
                        logger.info("✅ 定时刷新完成")
                        self._record_task_run("data_refresh", True, f"刷新成功 {today}")
                    except Exception as e:
                        logger.error(f" 定时刷新失败: {e}")
                        self._record_task_run("data_refresh", False, str(e)[:120])
                await asyncio.sleep(60)
            except Exception as e:
                logger.info(f"定时刷新任务异常: {e}")
                await asyncio.sleep(60)

    async def tushare_pull_task(self):
        """定时 Tushare 日线拉取任务 (FR-3.12.1)

        依据 data_refresh_config 的 pull_enabled/pull_time/pull_frequency
        定时拉取日线快照 → 触发解析器刷新 (自动入库)。
        """
        last_pull_date = None
        consecutive_failures = 0  # v3.12 (FR-3.12.3): 连续失败计数, 达阈值告警入队
        while self.running:
            try:
                from data_refresh_config import load_config, pull_should_run
                config = load_config()
                if not config.get('pull_enabled', False):
                    await asyncio.sleep(3600)
                    continue

                now = datetime.now()
                pull_time = config.get('pull_time', '22:30')
                target_hour, target_minute = map(int, pull_time.split(':'))
                target = now.replace(hour=target_hour, minute=target_minute, second=0, microsecond=0)
                if target <= now:
                    target += timedelta(days=1)
                await asyncio.sleep(max((target - now).total_seconds(), 10))
                if not self.running:
                    break

                today = datetime.now().strftime('%Y-%m-%d')
                if last_pull_date != today and pull_should_run(config, datetime.now()):
                    last_pull_date = today
                    logger.info(f"📥 定时拉取启动: {today}")
                    try:
                        from data_pipeline import run_daily_pull
                        # 阻塞式拉取放线程, 不阻塞事件循环
                        result = await asyncio.to_thread(run_daily_pull)
                        from data_refresh_config import update_refresh_status
                        ok = result.get("failed", 1) == 0
                        update_refresh_status(ok, (
                            f"日线拉取 {result.get('pulled', 0)}/{result.get('total', 0)} 成功, "
                            f"最新日期 {result.get('latest_date')}"
                        ))
                        # v3.12 (FR-3.12.3): 连续失败计数 → 达阈值告警入队
                        if ok:
                            consecutive_failures = 0
                            # 拉取成功后刷新解析器/视图 (自动入库)
                            parser.reload()
                            views_aggregator.reload()
                            self._record_task_run("tushare_pull", True, f"拉取 {result.get('pulled', 0)}/{result.get('total', 0)}")
                        else:
                            consecutive_failures += 1
                            from data_sources import record_batch_failure
                            record_batch_failure(
                                'data_pipeline', consecutive_failures,
                                f"日线拉取 {result.get('pulled', 0)}/{result.get('total', 0)} 成功, "
                                f"失败 {result.get('failed', 0)}"
                            )
                            self._record_task_run("tushare_pull", False, f"拉取 {result.get('pulled', 0)}/{result.get('total', 0)}")
                            # v3.17.12 (FR-3.17.12): 连续失败达阈值 → 飞书告警
                            if consecutive_failures >= PULL_ALERT_THRESHOLD:
                                self._send_feishu_alert(
                                    "数据拉取任务连续失败",
                                    f"连续失败 {consecutive_failures} 次\n"
                                    f"拉取 {result.get('pulled', 0)}/{result.get('total', 0)} 成功, 失败 {result.get('failed', 0)}"
                                )
                        logger.info(f"✅ 定时拉取完成: {result}")
                    except Exception as e:
                        consecutive_failures += 1
                        from data_sources import record_batch_failure
                        record_batch_failure('data_pipeline', consecutive_failures, f"定时拉取异常: {e}")
                        logger.error(f"定时拉取失败: {e}")
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(False, f"定时拉取失败: {e}")
                        self._record_task_run("tushare_pull", False, str(e)[:120])
                        if consecutive_failures >= PULL_ALERT_THRESHOLD:
                            self._send_feishu_alert("数据拉取任务连续失败", f"连续失败 {consecutive_failures} 次\n异常: {e}")
                await asyncio.sleep(60)
            except Exception as e:
                logger.info(f"定时拉取任务异常: {e}")
                await asyncio.sleep(60)

    async def file_watch_task(self):
        """文件变动监听任务（轮询 CSV 文件 mtime）"""
        import os

        # 建立初始 mtime 快照
        file_mtimes = {}

        def scan_files():
            """V4.9.2 (F1.4): 扫描 qresult + data/holdings(递归) 下的 CSV mtime"""
            return scan_csv_files([EXTERNAL_DATA_DIR, os.path.join(DATA_DIR, "holdings")],
                                  recursive=True)

        # 建立基线
        file_mtimes = scan_files()

        while self.running:
            try:
                from data_refresh_config import load_config
                config = load_config()

                if not config.get('watch_enabled', False):
                    await asyncio.sleep(60)
                    continue

                current_mtimes = scan_files()

                # 检测变动 (纯函数)
                changed, change_desc = detect_csv_changes(file_mtimes, current_mtimes)
                if changed:
                    logger.info(f"📁 检测到{change_desc}")
                    logger.info("🔄 触发文件变动刷新...")
                    try:
                        parser.reload()
                        views_aggregator.reload()
                        from data_refresh_config import update_refresh_status
                        update_refresh_status(True, "文件变动触发刷新")
                        logger.info("✅ 文件变动刷新完成")
                        self._record_task_run("file_watch", True, change_desc)
                    except Exception as e:
                        logger.error(f" 文件变动刷新失败: {e}")
                        self._record_task_run("file_watch", False, str(e)[:120])

                # 更新快照
                file_mtimes = current_mtimes
                await asyncio.sleep(60)  # 每60秒检查一次

            except Exception as e:
                logger.info(f"文件监听任务异常: {e}")
                await asyncio.sleep(60)

    async def daily_backup_task(self):
        """v3.3.0-T7: 每日自动备份数据库 (凌晨 3:05)
        v3.17.12 (FR-3.17.12): 失败 → 飞书告警 + 任务状态/指标记录
        """
        while self.running:
            now = datetime.now()
            # 3:05-3:10 窗口内执行
            if now.hour == 3 and 5 <= now.minute < 10:
                try:
                    name = backup_db()
                    if name:
                        logger.info(f"💾 每日自动备份成功: {name}")
                        self._record_task_run("daily_backup", True, name)
                        self._backup_failures = 0
                    else:
                        logger.warning("💾 每日自动备份失败")
                        self._record_task_run("daily_backup", False, "backup_db 返回空")
                        self._backup_failures += 1
                        self._send_feishu_alert(
                            "数据库备份失败",
                            f"连续失败 {self._backup_failures} 次, 请检查磁盘空间与数据库状态"
                        )
                except Exception as e:
                    logger.error(f"💾 每日自动备份异常: {e}")
                    self._record_task_run("daily_backup", False, str(e)[:120])
                    self._backup_failures += 1
                    self._send_feishu_alert("数据库备份失败", f"连续失败 {self._backup_failures} 次, 异常: {e}")
                # 执行后休眠 1 小时避免重复
                await asyncio.sleep(3600)
            else:
                await asyncio.sleep(60)

    async def health_check_task(self):
        """v3.4.0-T9: 健康检查自动化 — 每5分钟检查, 连续3次失败 → 飞书告警"""
        consecutive_failures = 0
        while self.running:
            await asyncio.sleep(300)  # 5 分钟
            try:
                # 检查本地健康端点 (通过内部检查避免自调网络)
                from data_parser import parser
                dates = parser.get_available_dates()
                healthy = len(dates) > 0
                # 检查数据库
                import db
                db_ok = db.schema_ok()
                # v3.17.12 (FR-3.17.12): 记录健康检查任务状态
                self._record_task_run("health_check", healthy and db_ok, f"dates={len(dates) if dates else 0} db={db_ok}")
                if healthy and db_ok:
                    consecutive_failures = 0
                    logger.info("💚 健康检查通过")
                else:
                    consecutive_failures += 1
                    logger.warning(f"⚠️ 健康检查失败 ({consecutive_failures}/3): dates={len(dates) if dates else 0} db={db_ok}")
                    if consecutive_failures >= 3:
                        # 触发飞书告警
                        try:
                            import json
                            import os
                            from paths import DATA_DIR
                            cfg_path = os.path.join(DATA_DIR, "feishu_config.json")
                            webhook = ""
                            if os.path.exists(cfg_path):
                                with open(cfg_path, 'r', encoding='utf-8') as f:
                                    webhook = json.load(f).get('webhook_url', '')
                            if webhook:
                                from feishu_push import FeishuPusher
                                pusher = FeishuPusher(webhook)
                                pusher.send_text(
                                    f"🚨 量化选股日历健康检查连续 {consecutive_failures} 次失败!\n"
                                    f"数据日期数: {len(dates) if dates else 0}\n"
                                    f"数据库: {'正常' if db_ok else '异常'}"
                                )
                                logger.info("📮 健康检查告警已发送飞书")
                        except Exception as e:
                            logger.error(f"健康检查告警发送失败: {e}")
                # V4.9.2 (F1.3): 聚合器自愈 — 持仓最新日期>聚合器最新日期时自动刷新
                self._self_heal_aggregator()
                # v3.17.12 (FR-3.17.12): 磁盘剩余空间不足 → 飞书告警
                self._check_disk_alert()
            except Exception as e:
                logger.error(f"健康检查任务异常: {e}")
                self._record_task_run("health_check", False, str(e)[:120])

    async def error_alert_task(self):
        """v3.4.0-T5: 异常告警 → 飞书 (监控错误率)"""
        while self.running:
            await asyncio.sleep(600)  # 每 10 分钟
            try:
                from api.v1.system import get_metrics
                m = get_metrics()
                if m["requests"] >= 20 and m["error_rate"] > 10:
                    logger.warning(f"⚠️ 错误率超阈值: {m['error_rate']}% ({m['requests']} 请求)")
                    self._record_task_run("error_alert", True, f"错误率 {m['error_rate']}%")
                    try:
                        import json
                        import os
                        from paths import DATA_DIR
                        cfg_path = os.path.join(DATA_DIR, "feishu_config.json")
                        webhook = ""
                        if os.path.exists(cfg_path):
                            with open(cfg_path, 'r', encoding='utf-8') as f:
                                webhook = json.load(f).get('webhook_url', '')
                        if webhook:
                            from feishu_push import FeishuPusher
                            pusher = FeishuPusher(webhook)
                            pusher.send_text(
                                f"🚨 API 错误率告警!\n错误率: {m['error_rate']}%\n"
                                f"请求数: {m['requests']} | 平均延迟: {m['avg_ms']}ms | p95: {m['p95_ms']}ms"
                            )
                            logger.info("📮 错误率告警已发送飞书")
                    except Exception as e:
                        logger.error(f"错误率告警发送失败: {e}")
                else:
                    self._record_task_run("error_alert", True, f"错误率 {m['error_rate']}% 正常")
            except Exception as e:
                logger.error(f"错误率监控异常: {e}")
                self._record_task_run("error_alert", False, str(e)[:120])

    def run_daily_review(self, today=None):
        """产出当日复盘并判定 (FR-3.18.1): 返回 {report, degraded, reason}。

        - 异常 → 视为失败 (degraded=True, report=None)
        - 数据卡关键字段全不可达 → degraded=True (降级产出, 记失败 + 触发 16:30 重试)
        """
        from market_review import generate_review, is_review_degraded
        try:
            review = generate_review(today)
        except Exception as e:
            logger.error(f"市场复盘生成异常: {e}")
            return {"report": None, "degraded": True, "reason": f"生成异常: {e}"}
        degraded = is_review_degraded(review)
        reason = "数据卡关键字段全不可达(降级产出)" if degraded else "正常产出"
        return {"report": review, "degraded": degraded, "reason": reason}

    def _handle_review_outcome(self, today, outcome, stage="16:00"):
        """按产出判定记录任务状态 + 失败飞书告警 (FR-3.18.1, 不再静默)。

        返回 True = 本次产出成功; False = 失败(已告警)。
        """
        if not outcome.get("degraded"):
            self._record_task_run("daily_market_review", True, f"{today}({stage})")
            # v3.17.15: Webhook — market_review_ready 事件
            try:
                from webhook import dispatch as webhook_dispatch
                webhook_dispatch("market_review_ready", {"date": today})
            except Exception as we:
                logger.warning("webhook market_review_ready 投递失败 (忽略): %s", we)
            return True
        self._record_task_run("daily_market_review", False, f"{today}({stage}) {outcome.get('reason', '')}")
        consecutive = self.task_status.get("daily_market_review", {}).get("consecutive_failures", 1)
        self._send_feishu_alert(
            "AI 每日复盘产出失败(数据不可达)",
            f"{today} ({stage}) {outcome.get('reason', '')} (连续失败 {consecutive} 次)",
        )
        return False

    async def _sleep_until(self, hour, minute):
        """休眠到当日指定时刻 (跨日则等次日)"""
        now = datetime.now()
        target = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
        if target <= now:
            target += timedelta(days=1)
        await asyncio.sleep(max((target - now).total_seconds(), 1))

    def _should_retry_review(self, now_hm=None):
        """16:30 前允许重试 (FR-3.18.1); now_hm 可注入便于测试"""
        now_hm = now_hm or datetime.now().strftime('%H:%M')
        return now_hm < '16:30'

    async def _run_market_review_with_retry(self, today):
        """16:00 主跑 → 降级则 16:30 重试一次 → 失败可见 (FR-3.18.1)"""
        outcome = self.run_daily_review(today)
        if self._handle_review_outcome(today, outcome, stage="16:00"):
            return
        # 降级 → 16:30 自动重试一次 (不再静默)
        if self._should_retry_review():
            await self._sleep_until(hour=16, minute=30)
            if not self.running:
                return
            retry = self.run_daily_review(today)
            self._handle_review_outcome(today, retry, stage="16:30 重试")

    def review_produced_today(self, today=None):
        """今日是否已有"非降级"复盘归档 (FR-3.18.1 错过补偿门控)"""
        from market_review import get_review, is_review_degraded
        today = today or datetime.now().strftime('%Y-%m-%d')
        r = get_review(date=today)
        return bool(r) and not is_review_degraded(r)

    async def _catchup_market_review(self):
        """FR-3.18.1 错过补偿: 服务启动时若 16:00 已过且当日未产出 → 补跑一次"""
        await asyncio.sleep(3)  # 等调度器就绪
        try:
            now = datetime.now()
            today = now.strftime('%Y-%m-%d')
            if now.hour >= 16 and not self.review_produced_today(today):
                logger.info(f"[复盘错过补偿] {today} 已过 16:00 未产出, 补跑")
                await self._run_market_review_with_retry(today)
        except Exception as e:
            logger.error(f"复盘错过补偿异常: {e}")

    async def event_alert_scan_task(self):
        """每日事件提醒扫描 (FR-3.18.2): 09:30 扫描关注股票事件 + 24h 去重 + 飞书推送"""
        while self.running:
            now = datetime.now()
            target = now.replace(hour=9, minute=30, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            await asyncio.sleep(max((target - now).total_seconds(), 10))
            if not self.running:
                break
            try:
                from event_alert import run_event_scan
                res = run_event_scan(username='default', scope='watchlist')
                self._record_task_run("event_alert_scan", True,
                                      f"新事件 {res.get('new_count', 0)} 条 | {res.get('note') or ''}")
                logger.info("事件提醒扫描完成: %s", res.get('note'))
            except Exception as e:
                logger.error(f"事件提醒扫描失败: {e}")
                self._record_task_run("event_alert_scan", False, str(e)[:120])
            await asyncio.sleep(60)

    async def fact_check_audit_task(self):
        """每日 AI 事实护栏抽查 (FR-3.18.9): 17:30 抽查历史回复数值与数据卡一致性, 产出审计报告"""
        while self.running:
            now = datetime.now()
            target = now.replace(hour=17, minute=30, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            await asyncio.sleep(max((target - now).total_seconds(), 10))
            if not self.running:
                break
            try:
                from fact_check import run_daily_audit, save_audit_report
                report = run_daily_audit()
                save_audit_report(report)
                self._record_task_run("fact_check_audit", True,
                                      f"抽查 {report.get('checked', 0)} 数字, 通过率 {report.get('pass_rate')}%")
                logger.info("事实护栏抽查完成: %s", report.get('pass_rate'))
            except Exception as e:
                logger.error(f"事实护栏抽查失败: {e}")
                self._record_task_run("fact_check_audit", False, str(e)[:120])
            await asyncio.sleep(60)

    async def daily_market_review_task(self):
        """每日收盘后自动生成《市场复盘》 (FR-3.17.2, 16:00 执行; FR-3.18.1 激活)

        失败仅打日志, 不中断其他定时任务; 产出判定/16:30 重试/错过补偿见 FR-3.18.1。
        """
        while self.running:
            now = datetime.now()
            target = now.replace(hour=16, minute=0, second=0, microsecond=0)
            if target <= now:
                target += timedelta(days=1)
            wait = (target - now).total_seconds()
            await asyncio.sleep(max(wait, 10))

            if not self.running:
                break
            today = datetime.now().strftime('%Y-%m-%d')
            logger.info(f"生成每日市场复盘: {today}")
            await self._run_market_review_with_retry(today)
            await asyncio.sleep(60)  # 避开重复触发

    async def start(self):
        """启动调度器"""
        self.running = True
        logger.info("⏰ 定时任务调度器已启动")

        # 启动所有任务
        asyncio.create_task(self.daily_report_task())
        asyncio.create_task(self.weekly_report_task())
        asyncio.create_task(self.auto_evaluate_task())
        asyncio.create_task(self.strategy_run_task())
        asyncio.create_task(self.data_refresh_task())
        asyncio.create_task(self.tushare_pull_task())
        asyncio.create_task(self.file_watch_task())
        asyncio.create_task(self.daily_backup_task())
        asyncio.create_task(self.health_check_task())
        asyncio.create_task(self.error_alert_task())
        asyncio.create_task(self.daily_market_review_task())
        # v3.18 (FR-3.18.1): 错过补偿 — 启动时若 16:00 已过且当日未产出则补跑
        asyncio.create_task(self._catchup_market_review())
        # v3.18 (FR-3.18.2): 每日事件提醒扫描
        asyncio.create_task(self.event_alert_scan_task())
        # v3.18 (FR-3.18.9): 每日 AI 事实护栏抽查
        asyncio.create_task(self.fact_check_audit_task())

    async def stop(self):
        """停止调度器"""
        self.running = False
        logger.info("⏰ 定时任务调度器已停止")


# 全局单例
scheduler = Scheduler()


if __name__ == '__main__':
    async def test():
        logger.info("测试调度器...")
        # 测试推送（不等待定时，直接发送）
        scheduler.pusher.send_daily_report()

    asyncio.run(test())
