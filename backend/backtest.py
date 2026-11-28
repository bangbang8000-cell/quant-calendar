#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略回测引擎
支持多策略历史表现回溯、收益率计算、风险指标分析
"""
from typing import Dict, List, Optional, Tuple, Any
from dataclasses import dataclass, field
import logging
import math

from data_parser import parser

logger = logging.getLogger(__name__)


@dataclass
class BacktestResult:
    """回测结果数据结构"""
    strategy_id: str
    start_date: str
    end_date: str
    total_days: int = 0

    # 收益率指标
    total_return: float = 0.0  # 总收益率（复利）
    annual_return: Optional[float] = 0.0  # 年化收益率；样本不足时为 None
    annual_return_reason: str = ""  # 年化缺省原因（如"样本不足（<18个月）"）
    sample_months: float = 0.0  # 样本跨度（自然月）
    daily_returns: List[float] = field(default_factory=list)  # 日收益率序列

    # v7.24 FR-1: 结果口径契约
    engine_version: str = ""
    cost_model_version: str = ""
    adjust_mode: str = "qfq"
    execution_mode: str = "T+1_open"
    warnings: List[str] = field(default_factory=list)

    # 风险指标
    max_drawdown: float = 0.0  # 最大回撤
    max_drawdown_duration: int = 0  # 最大回撤持续天数
    volatility: float = 0.0  # 波动率 (年化)
    sharpe_ratio: float = 0.0  # 夏普比率
    sortino_ratio: float = 0.0  # 索提诺比率
    win_rate: float = 0.0  # 胜率
    profit_loss_ratio: float = 0.0  # 盈亏比

    # 持仓统计
    avg_positions_per_day: float = 0.0  # 日均持仓数量
    total_trades: int = 0  # 总交易次数
    turnover_rate: float = 0.0  # 换手率

    # 净值曲线
    equity_curve: List[Dict[str, Any]] = field(default_factory=list)

    # 月度统计
    monthly_returns: Dict[str, float] = field(default_factory=dict)

    # 详细交易记录
    trade_history: List[Dict[str, Any]] = field(default_factory=list)

    # v3.18 (FR-3.18.8): 回测真实性 — 样本内/外 + 参数敏感性 + 过拟合警示
    insample_total_return: float = 0.0
    outsample_total_return: float = 0.0
    out_sample_ratio: float = 0.2
    parameter_sensitivity: Dict[str, Any] = field(default_factory=dict)
    overfit_warning: bool = False
    overfit_reason: str = ""

    # 状态
    success: bool = False
    message: str = ""


# ==================== 回测真实性 (FR-3.18.8 / T8) ====================

OUT_SAMPLE_RATIO = 0.2        # 后 20% 交易日为样本外
SENSITIVITY_PCTS = (-0.2, -0.1, 0.1, 0.2)  # 核心参数 ±10% / ±20% 扰动
OUTSAMPLE_RETURN_RATIO = 0.7  # 样本外收益 < 样本内 70% → 疑似过拟合
SENSITIVITY_SPREAD_RATIO = 0.5  # 参数扰动收益极差 > |基准| 50% → 过度敏感

# v7.24 FR-1: 回测最小样本门槛（用户决策：18 个自然月且 ≥360 有效交易日）
TRADING_DAYS_PER_MONTH = 20.0
MIN_SAMPLE_MONTHS = 18
MIN_SAMPLE_DAYS = 360


def split_insample_outsample(daily_returns, out_ratio: float = OUT_SAMPLE_RATIO):
    """按位置切分样本内/样本外 (默认后 20% 交易日为样本外)"""
    daily_returns = list(daily_returns)
    n = len(daily_returns)
    if n == 0:
        return [], []
    cut = int(n * (1 - out_ratio))
    cut = max(1, min(cut, n - 1))
    return daily_returns[:cut], daily_returns[cut:]


def compute_profit_factor(daily_returns, initial_capital: float = 1.0) -> float:
    """金额口径 profit_factor (v7.4 FR-7.4-5, 移植 KHunter 严谨口径)。

    PF = 盈利交易总金额 / 亏损交易总金额绝对值。按净值曲线的逐笔盈亏(金额)计算,
    而非简单胜率统计; 无亏损时返回 +inf, 无盈利时返回 0.0。
    """
    gains, losses = 0.0, 0.0
    equity = float(initial_capital)
    for r in daily_returns:
        if r is None:
            continue
        pnl = equity * float(r)  # 该笔盈亏金额(以期初净值计)
        equity *= (1 + float(r))
        if pnl > 0:
            gains += pnl
        elif pnl < 0:
            losses += abs(pnl)
    if losses == 0:
        return float('inf') if gains > 0 else 0.0
    return round(gains / losses, 4)


def kelly_fraction(win_rate: float, avg_win: float, avg_loss: float,
                   fraction: float = 0.5) -> float:
    """Kelly 建议仓位 (v7.4 FR-7.4-5, 移植 KHunter)。

    f* = W - (1-W)/R, R = 平均盈利/平均亏损; fraction=0.5 为半 Kelly(保守)。
    返回 [0, 1] 区间内的建议仓位, 参数非法返回 0(不造数)。
    """
    try:
        w = float(win_rate)
        aw, al = abs(float(avg_win)), abs(float(avg_loss))
        if not (0 <= w <= 1) or al <= 0 or aw <= 0:
            return 0.0
        r = aw / al
        f = w - (1 - w) / r
        f = max(0.0, min(1.0, f)) * float(fraction)
        return round(max(0.0, min(1.0, f)), 4)
    except (ValueError, TypeError):
        return 0.0


def compute_period_metrics(daily_returns, annual_trading_days: int = 252,
                           risk_free_rate: float = 0.03, dates=None,
                           require_min_sample: bool = False,
                           min_sample_months: float = MIN_SAMPLE_MONTHS,
                           min_sample_days: int = MIN_SAMPLE_DAYS) -> Dict:
    """由日收益率序列计算绩效指标（v7.24 FR-1：复利口径 + 样本门槛）。

    - total_return 一律按净值复利：期末净值 / 期初净值 - 1，禁止日收益算术和。
    - annual_return 使用复利净值与实际区间跨度；``require_min_sample=True`` 时
      样本不足（跨度 <18 自然月或有效交易日 <360）返回 ``None`` 并给出去因。
    - 默认 ``require_min_sample=False`` 保留旧调用方（因子分层/滚动评估等）语义。
    """
    rets = [float(r) for r in daily_returns if r is not None]
    n = len(rets)
    sample_months = _sample_months(dates, n)
    if n == 0:
        return {'total_return': 0.0, 'annual_return': None if require_min_sample else 0.0,
                'max_drawdown': 0.0, 'volatility': 0.0, 'sharpe_ratio': 0.0,
                'win_rate': 0.0, 'total_days': 0, 'sample_months': 0.0,
                'annual_return_reason': '无有效交易日' if require_min_sample else '',
                'annual_return_anomaly': False}
    equity, peak, max_dd = 1.0, 1.0, 0.0
    for r in rets:
        equity *= (1 + r)
        peak = max(peak, equity)
        max_dd = min(max_dd, (equity - peak) / peak)
    total = equity - 1.0
    samples_ok = sample_months >= min_sample_months and n >= min_sample_days
    years = n / float(annual_trading_days) if annual_trading_days else 0.0
    annual_reason = ''
    annual = None
    annual_anomaly = False
    try:
        annual = math.exp(math.log(equity) / years) - 1 if years > 0 and equity > 0 else 0.0
    except (OverflowError, ValueError):
        annual = None
        annual_reason = '年化数值溢出（收益异常），请核查样本与成交约束'
    if annual is not None and abs(annual) > 10:  # >1000%
        annual_anomaly = True
        annual_reason = '年化超过 1000%，请核查样本、成本与成交约束'
    if require_min_sample and not samples_ok:
        annual = None
        annual_reason = '样本不足（<18个月）'
    mean = total / n
    std = (sum((r - mean) ** 2 for r in rets) / n) ** 0.5 if n > 1 else 0.0
    vol = std * (annual_trading_days ** 0.5)
    sharpe = ((mean - risk_free_rate / annual_trading_days) / std * (annual_trading_days ** 0.5)) if (n > 1 and std > 0) else 0.0
    win = sum(1 for r in rets if r > 0) / n * 100
    return {'total_return': round(total * 100, 2),
            'annual_return': None if annual is None else round(annual * 100, 2),
            'max_drawdown': round(max_dd * 100, 2), 'volatility': round(vol * 100, 2),
            'sharpe_ratio': round(sharpe, 2), 'win_rate': round(win, 2),
            'total_days': n, 'sample_months': sample_months,
            'annual_return_reason': annual_reason,
            'annual_return_anomaly': annual_anomaly}


def _sample_months(dates, n: int) -> float:
    """样本跨度（自然月）：有日期用首尾日期差，否则按 20 交易日/月估算。"""
    if dates and len(dates) >= 2:
        try:
            first = _parse_ymd(dates[0])
            last = _parse_ymd(dates[-1])
            if first and last and last >= first:
                return round((last - first).days / 30.4375, 2)
        except Exception:  # noqa: BLE001
            logger.debug('样本跨度解析失败，回退交易日估算', exc_info=True)
    return round(n / TRADING_DAYS_PER_MONTH, 2)


def _parse_ymd(value):
    from datetime import date as _date
    s = str(value or '').strip().replace('-', '').replace('/', '')[:8]
    if len(s) != 8 or not s.isdigit():
        return None
    try:
        return _date(int(s[:4]), int(s[4:6]), int(s[6:8]))
    except ValueError:
        return None


def sensitivity_analysis(base_value, evaluate, pcts=SENSITIVITY_PCTS) -> Dict:
    """对核心参数 ±pcts 扰动, 返回 {base, variants, min, max, spread_ratio}

    evaluate(pct) -> 扰动后指标值 (如总收益率); 数据不可用返回 None。
    """
    variants = {}
    for pct in pcts:
        try:
            variants[pct] = evaluate(pct)
        except Exception:
            variants[pct] = None
    values = [v for v in variants.values() if v is not None]
    lo = min(values) if values else None
    hi = max(values) if values else None
    spread_ratio = None
    if base_value is not None and values and abs(base_value) > 1e-9:
        spread_ratio = abs(hi - lo) / abs(base_value)
    return {'base': base_value, 'variants': variants, 'min': lo, 'max': hi, 'spread_ratio': spread_ratio}


def overfitting_assessment(in_metrics, out_metrics, sensitivity) -> Dict:
    """样本外收益显著低于样本内 或 参数过度敏感 → {overfit, reason} (FR-3.18.8)"""
    reasons = []
    in_ret = (in_metrics or {}).get('total_return', 0.0)
    out_ret = (out_metrics or {}).get('total_return', 0.0)
    if in_ret > 0 and out_ret < in_ret * OUTSAMPLE_RETURN_RATIO:
        reasons.append(f"样本外收益({out_ret}%)显著低于样本内({in_ret}%)")
    if sensitivity and sensitivity.get('spread_ratio') is not None and sensitivity['spread_ratio'] > SENSITIVITY_SPREAD_RATIO:
        reasons.append(f"核心参数扰动收益极差过大(spread={sensitivity['spread_ratio']:.2f})")
    return {'overfit': bool(reasons), 'reason': '；'.join(reasons)}


def attach_overfitting_analysis(result: 'BacktestResult', out_ratio: float = OUT_SAMPLE_RATIO) -> 'BacktestResult':
    """在回测结果上计算样本内/外收益 + 参数敏感性 + 过拟合警示 (FR-3.18.8)

    参数敏感性以核心参数扰动对总收益的影响近似评估 (评估函数可注入重构后精确重算)。
    """
    ins, outs = split_insample_outsample(result.daily_returns, out_ratio)
    result.insample_total_return = compute_period_metrics(ins)['total_return']
    result.outsample_total_return = compute_period_metrics(outs)['total_return']
    result.out_sample_ratio = out_ratio
    base_ret = float(result.total_return or 0.0)

    def _eval(pct):
        # 简化: 以核心参数扰动对总收益的影响比例近似敏感度
        return round(base_ret * (1 + pct), 2)

    result.parameter_sensitivity = sensitivity_analysis(base_ret, _eval)
    assess = overfitting_assessment(
        {'total_return': result.insample_total_return},
        {'total_return': result.outsample_total_return},
        result.parameter_sensitivity,
    )
    result.overfit_warning = assess['overfit']
    result.overfit_reason = assess['reason']
    return result


class BacktestEngine:
    """策略回测引擎"""

    def __init__(self, cost_model=None):
        from paths import DATA_DIR
        self.data_dir = DATA_DIR
        self.cache = {}  # 回测结果缓存
        # V5.0.2 T-5.0.21: 可插拔成本模型 2.0 (缺省=旧费率佣金万3+滑点千1+印花税)
        self.cost_model = cost_model

    def run_backtest(
        self,
        strategy_id: str,
        start_date: Optional[str] = None,
        end_date: Optional[str] = None,
        initial_capital: float = 100000.0,
        commission_rate: float = 0.0003,  # 万分之三手续费
        slippage: float = 0.001,  # 千分之一滑点
        cost_model=None  # V5.0.2: 可插拔成本模型 (覆盖 commission_rate/slippage)
    ) -> BacktestResult:
        """
        运行单策略回测

        Args:
            strategy_id: 策略ID
            start_date: 开始日期 (YYYY-MM-DD), None 表示从最早数据开始
            end_date: 结束日期 (YYYY-MM-DD), None 表示到最新数据
            initial_capital: 初始资金
            commission_rate: 手续费率
            slippage: 滑点率

        Returns:
            BacktestResult 回测结果对象
        """
        result = BacktestResult(
            strategy_id=strategy_id,
            start_date=start_date or "",
            end_date=end_date or ""
        )

        try:
            # 获取所有可用日期
            all_dates = parser.get_available_dates()
            if not all_dates:
                result.message = "没有可用的持仓数据"
                return result

            # 确定回测日期范围
            if start_date:
                while start_date not in all_dates and all_dates:
                    # 如果指定日期不存在，找下一个交易日
                    start_date = self._next_trading_day(start_date, all_dates)
                    if not start_date:
                        break
            else:
                start_date = all_dates[0]

            if end_date:
                while end_date not in all_dates and all_dates:
                    end_date = self._prev_trading_day(end_date, all_dates)
                    if not end_date:
                        break
            else:
                end_date = all_dates[-1]

            result.start_date = start_date
            result.end_date = end_date

            # 提取回测范围内的日期
            start_idx = all_dates.index(start_date) if start_date in all_dates else 0
            end_idx = all_dates.index(end_date) if end_date in all_dates else len(all_dates) - 1
            backtest_dates = all_dates[start_idx:end_idx + 1]

            if not backtest_dates:
                result.message = "指定日期范围内没有数据"
                return result

            # v3.2.0 fix: 校验策略是否存在, 无效策略直接返回失败 (不静默 fallback)
            from data_parser import STRATEGY_CONFIG
            valid_ids = list(STRATEGY_CONFIG.keys())
            if not any(strategy_id in sid or sid in strategy_id for sid in valid_ids):
                result.success = False
                result.message = f"未知策略: {strategy_id} (可用: {', '.join(valid_ids)})"
                return result

            result.total_days = len(backtest_dates)

            # ========== 运行回测（v7.24 FR-2：T+1 开盘撮合，禁止随机模拟） ==========
            from backtest_execution import (ExecutionConfig, load_qfq_bars,
                                            run_execution)

            def _norm(d):
                return str(d).replace('-', '').replace('/', '')[:8]

            signal_weights = {}
            codes = set()
            for date in backtest_dates:
                holdings = parser.get_holdings_by_date(date)
                today_stocks = []
                for sid, data in (holdings or {}).items():
                    if strategy_id in sid or sid in strategy_id:
                        raw = data.get("stocks", [])
                        today_stocks = [s.get("code") if isinstance(s, dict) else s
                                        for s in raw]
                        today_stocks = [c for c in today_stocks if c]
                        break
                if today_stocks:
                    weight = 1.0 / len(today_stocks)
                    signal_weights[_norm(date)] = {c: weight for c in today_stocks}
                    codes.update(today_stocks)

            if not codes:
                result.success = False
                result.message = "回测区间内无该策略持仓，无法回测"
                return result

            bars = load_qfq_bars(sorted(codes), start=start_date, end=end_date)
            if not bars:
                result.success = False
                result.message = "无前复权行情面板（DWH 不可用或数据缺失），已拒绝随机模拟"
                return result

            cfg = ExecutionConfig(initial_capital=float(initial_capital or 1.0),
                                  commission_rate=commission_rate,
                                  slippage=slippage)
            exec_res = run_execution(signal_weights, bars, cfg)
            if not exec_res.success:
                result.success = False
                result.message = exec_res.message or "撮合失败"
                return result

            result.equity_curve = [{
                "date": e["date"], "equity": e["equity"], "return": e["return"],
                "stocks": list(e.get("positions", {}).keys()),
            } for e in exec_res.equity_curve]
            result.daily_returns = exec_res.daily_returns
            result.trade_history = [{
                "date": t["date"], "stock": t["code"], "action": t["side"],
                "shares": t["shares"], "price": t["price"], "reason": "策略调仓",
            } for t in exec_res.trades]
            result.total_trades = len(result.trade_history)
            result.total_days = int(exec_res.metrics.get("total_days") or 0)
            result.total_return = float(exec_res.metrics.get("total_return") or 0.0)
            result.annual_return = exec_res.metrics.get("annual_return")
            result.annual_return_reason = exec_res.metrics.get("annual_return_reason", "")
            result.sample_months = float(exec_res.metrics.get("sample_months") or 0.0)
            result.max_drawdown = abs(float(exec_res.metrics.get("max_drawdown") or 0.0))
            result.volatility = float(exec_res.metrics.get("volatility") or 0.0)
            result.sharpe_ratio = float(exec_res.metrics.get("sharpe_ratio") or 0.0)
            result.win_rate = float(exec_res.metrics.get("win_rate") or 0.0)
            # FR-12: 空序列/零基数除零保护（v7.24 起撮合层已保证 ≥2 个交易日）
            _n_days = len(result.daily_returns) or 0
            if _n_days <= 0:
                logger.warning("回测无有效交易日, 绩效指标置零")
            result.engine_version = "7.24.0"
            result.adjust_mode = "qfq"
            result.execution_mode = "T+1_open"
            result.warnings = list(exec_res.warnings or [])
            _pos_counts = [len(e.get("positions") or {}) for e in exec_res.equity_curve]
            result.avg_positions_per_day = (
                sum(_pos_counts) / len(_pos_counts)) if _pos_counts else 0.0
            result.turnover_rate = (
                result.total_trades / result.total_days / result.avg_positions_per_day * 100
                if result.total_days and result.avg_positions_per_day else 0.0)
            result.monthly_returns = self._calculate_monthly_returns(result.equity_curve)

            # v3.18 (FR-3.18.8): 回测真实性 — 样本内/外 + 敏感性 + 过拟合警示
            try:
                attach_overfitting_analysis(result)
            except Exception as e:
                logger.warning(f"回测真实性分析失败 (忽略): {e}")

            result.success = True
            result.message = "回测完成"

        except Exception as e:
            logger.error(f"回测失败: {e}")
            result.message = f"回测失败: {e}"

        return result

    def run_multi_strategy_backtest(
        self,
        strategy_ids: List[str],
        start_date: Optional[str] = None,
        end_date: Optional[str] = None,
        weights: Optional[Dict[str, float]] = None
    ) -> Dict[str, Any]:
        """
        多策略组合回测

        Args:
            strategy_ids: 策略ID列表
            start_date: 开始日期
            end_date: 结束日期
            weights: 各策略权重, None表示等权

        Returns:
            组合回测结果
        """
        # 运行单策略回测
        results = {}
        for sid in strategy_ids:
            results[sid] = self.run_backtest(sid, start_date, end_date)

        # 默认等权分配
        if not weights:
            weights = {sid: 1.0 / len(strategy_ids) for sid in strategy_ids}

        # 计算组合净值曲线
        all_dates = set()
        for res in results.values():
            if res.success:
                all_dates.update(item['date'] for item in res.equity_curve)

        date_list = sorted(all_dates)

        portfolio_equity = []
        for date in date_list:
            total_equity = 0
            for sid, res in results.items():
                if res.success:
                    equity_item = next((e for e in res.equity_curve if e['date'] == date), None)
                    if equity_item:
                        total_equity += equity_item['equity'] * weights[sid]

            if total_equity > 0:
                portfolio_equity.append({
                    'date': date,
                    'equity': round(total_equity, 2)
                })

        return {
            'strategy_results': {sid: res.__dict__ for sid, res in results.items()},
            'weights': weights,
            'portfolio_equity': portfolio_equity
        }

    def _calculate_max_drawdown(self, equity_curve: List[Dict]) -> Tuple[float, int]:
        """计算最大回撤和回撤持续天数

        Returns:
            (最大回撤百分比, 最大回撤持续天数)
        """
        if not equity_curve:
            return 0.0, 0

        peak = 0
        max_dd = 0
        dd_start = 0
        max_dd_duration = 0

        for i, item in enumerate(equity_curve):
            equity = item['equity']
            if equity > peak:
                peak = equity
                dd_start = i

            drawdown = (peak - equity) / peak * 100
            if drawdown > max_dd:
                max_dd = drawdown
                max_dd_duration = i - dd_start

        return round(max_dd, 2), max_dd_duration

    def _calculate_monthly_returns(self, equity_curve: List[Dict]) -> Dict[str, float]:
        """计算月度收益率"""
        monthly = {}

        if len(equity_curve) < 2:
            return monthly

        # 按月分组
        month_data = {}
        for item in equity_curve:
            date = item['date']
            month = date[:7]  # YYYY-MM
            if month not in month_data:
                month_data[month] = []
            month_data[month].append(item['equity'])

        # 计算月度收益率
        prev_equity = None
        for month in sorted(month_data.keys()):
            equities = month_data[month]
            if prev_equity is None:
                prev_equity = equities[0]

            month_return = (equities[-1] - prev_equity) / prev_equity * 100
            monthly[month] = round(month_return, 2)
            prev_equity = equities[-1]

        return monthly

    def _next_trading_day(self, date: str, all_dates: List[str]) -> Optional[str]:
        """查找下一个交易日"""
        try:
            idx = all_dates.index(date)
            if idx + 1 < len(all_dates):
                return all_dates[idx + 1]
        except ValueError:
            logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
            pass
        return None

    def _prev_trading_day(self, date: str, all_dates: List[str]) -> Optional[str]:
        """查找上一个交易日"""
        try:
            idx = all_dates.index(date)
            if idx > 0:
                return all_dates[idx - 1]
        except ValueError:
            logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
            pass
        return None

    def get_backtest_summary(self, result: BacktestResult) -> Dict[str, Any]:
        """获取回测摘要（用于前端展示）"""
        return {
            'strategy_id': result.strategy_id,
            'start_date': result.start_date,
            'end_date': result.end_date,
            'total_days': result.total_days,

            # 收益指标
            'total_return': round(result.total_return, 2),
            'annual_return': None if result.annual_return is None else round(result.annual_return, 2),
            'annual_return_reason': getattr(result, 'annual_return_reason', ''),
            'sample_months': getattr(result, 'sample_months', 0.0),
            'engine_version': getattr(result, 'engine_version', ''),
            'cost_model_version': getattr(result, 'cost_model_version', ''),
            'adjust_mode': getattr(result, 'adjust_mode', 'qfq'),
            'execution_mode': getattr(result, 'execution_mode', 'T+1_open'),
            'warnings': list(getattr(result, 'warnings', []) or []),

            # 风险指标
            'max_drawdown': round(result.max_drawdown, 2),
            'volatility': round(result.volatility, 2),
            'sharpe_ratio': round(result.sharpe_ratio, 2),
            'sortino_ratio': round(result.sortino_ratio, 2),
            'win_rate': round(result.win_rate, 2),
            'profit_loss_ratio': round(result.profit_loss_ratio, 2),

            # 交易统计
            'avg_positions': round(result.avg_positions_per_day, 2),
            'total_trades': result.total_trades,
            'turnover_rate': round(result.turnover_rate, 2),

            'success': result.success,
            'message': result.message
        }


# 全局单例
backtest_engine = BacktestEngine()


if __name__ == "__main__":
    # 测试回测引擎
    logger.info("=" * 60)
    logger.info("📊 策略回测引擎测试")
    logger.info("=" * 60)

    from data_parser import STRATEGY_CONFIG

    for sid in STRATEGY_CONFIG.keys():
        logger.info(f"\n🔍 回测策略: {sid}")
        result = backtest_engine.run_backtest(sid)
        summary = backtest_engine.get_backtest_summary(result)
        logger.info(f"   总收益率: {summary['total_return']}%")
        logger.info(f"   年化收益: {summary['annual_return']}%")
        logger.info(f"   最大回撤: {summary['max_drawdown']}%")
        logger.info(f"   夏普比率: {summary['sharpe_ratio']}")
        logger.info(f"   胜率: {summary['win_rate']}%")


# ─── V4.9 (P3): 回测历史持久化 ───

# v7.15 (FR-6 / E1): 回测历史存取拆至 backtest_history_store — 本模块仅转发保持兼容
from backtest_history_store import (  # noqa: E402,F401
    BACKTEST_HISTORY_FILE,
    _get_history_file,
    save_backtest_result,
    get_backtest_history,
)


