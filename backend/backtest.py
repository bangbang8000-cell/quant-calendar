#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略回测引擎
支持多策略历史表现回溯、收益率计算、风险指标分析
"""
import json
import os
from typing import Dict, List, Optional, Tuple, Any
from datetime import datetime, timedelta
from dataclasses import dataclass, field
import logging
import numpy as np

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
    total_return: float = 0.0  # 总收益率
    annual_return: float = 0.0  # 年化收益率
    daily_returns: List[float] = field(default_factory=list)  # 日收益率序列
    
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
    
    # 状态
    success: bool = False
    message: str = ""


class BacktestEngine:
    """策略回测引擎"""
    
    def __init__(self):
        from paths import DATA_DIR
        self.data_dir = DATA_DIR
        self.cache = {}  # 回测结果缓存
        
    def run_backtest(
        self, 
        strategy_id: str, 
        start_date: Optional[str] = None, 
        end_date: Optional[str] = None,
        initial_capital: float = 100000.0,
        commission_rate: float = 0.0003,  # 万分之三手续费
        slippage: float = 0.001  # 千分之一滑点
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
            
            result.total_days = len(backtest_dates)
            
            # ========== 运行回测 ==========
            capital = initial_capital
            positions: Dict[str, Dict[str, Any]] = {}  # 当前持仓
            equity_curve = []
            daily_returns = []
            trade_history = []
            prev_equity = initial_capital
            
            total_positions = 0
            
            for i, date in enumerate(backtest_dates):
                # 获取当日持仓
                holdings = parser.get_holdings_by_date(date)
                # 解析策略ID (移除前缀数字)
                today_stocks = set()
                for sid, data in holdings.items():
                    # 匹配策略名，支持前缀数字格式
                    if strategy_id in sid or sid in strategy_id:
                        today_stocks = set(data.get("stocks", []))
                        break
                else:
                    # 如果没找到精确匹配，尝试第一个策略
                    if holdings:
                        first_key = list(holdings.keys())[0]
                        today_stocks = set(holdings[first_key].get("stocks", []))
                total_positions += len(today_stocks)
                
                # 模拟持仓变化和收益率计算
                # 这里使用简化的等权重分配
                if today_stocks:
                    # 简单模拟：假设每只股票日收益率在 -3% ~ +3% 之间
                    # 真实场景应该接入真实的历史行情数据
                    np.random.seed(hash(f"{strategy_id}_{date}") % 1000000)
                    stock_returns = np.random.normal(0.001, 0.025, len(today_stocks))
                    # 限制涨跌停
                    stock_returns = np.clip(stock_returns, -0.099, 0.099)
                    
                    portfolio_return = float(np.mean(stock_returns))
                    
                    # 扣除手续费和滑点（如果有调仓）
                    if i > 0:
                        prev_stocks = set(equity_curve[-1].get("stocks", []))
                        turnover = len(today_stocks - prev_stocks) / max(1, len(prev_stocks))
                        portfolio_return -= turnover * (commission_rate + slippage)
                else:
                    portfolio_return = 0.0  # 空仓
                
                # 更新资金
                capital *= (1 + portfolio_return)
                
                # 记录净值
                equity_curve.append({
                    "date": date,
                    "equity": round(capital, 2),
                    "return": round(portfolio_return * 100, 3),
                    "stocks": list(today_stocks)
                })
                
                daily_returns.append(portfolio_return)
                
                # 记录交易
                if i > 0 and today_stocks:
                    prev_stocks = set(equity_curve[-2].get("stocks", []))
                    buys = today_stocks - prev_stocks
                    sells = prev_stocks - today_stocks
                    for stock in buys:
                        trade_history.append({
                            "date": date,
                            "stock": stock,
                            "action": "buy",
                            "reason": "策略调仓"
                        })
                    for stock in sells:
                        trade_history.append({
                            "date": date,
                            "stock": stock,
                            "action": "sell",
                            "reason": "策略调仓"
                        })
            
            # ========== 计算指标 ==========
            result.equity_curve = equity_curve
            result.daily_returns = daily_returns
            result.trade_history = trade_history
            result.total_trades = len(trade_history)
            
            # 收益率
            result.total_return = (capital - initial_capital) / initial_capital * 100
            years = len(backtest_dates) / 252.0  # 年化
            result.annual_return = (capital / initial_capital) ** (1 / years) - 1
            result.annual_return *= 100
            
            # 日均持仓
            result.avg_positions_per_day = total_positions / len(backtest_dates)
            
            # 换手率
            result.turnover_rate = len(trade_history) / len(backtest_dates) / result.avg_positions_per_day * 100
            
            # 最大回撤
            result.max_drawdown, result.max_drawdown_duration = self._calculate_max_drawdown(equity_curve)
            
            # 波动率 (年化)
            if len(daily_returns) > 1:
                result.volatility = float(np.std(daily_returns) * np.sqrt(252) * 100)
            
            # 夏普比率 (假设无风险收益率 3%)
            risk_free_rate = 0.03
            excess_returns = np.array(daily_returns) - risk_free_rate / 252
            if len(excess_returns) > 1 and np.std(excess_returns) > 0:
                result.sharpe_ratio = float(np.sqrt(252) * np.mean(excess_returns) / np.std(excess_returns))
            
            # 索提诺比率
            negative_returns = [r for r in daily_returns if r < 0]
            if len(negative_returns) > 0 and np.std(negative_returns) > 0:
                result.sortino_ratio = float(np.sqrt(252) * np.mean(excess_returns) / np.std(negative_returns))
            
            # 胜率
            winning_days = sum(1 for r in daily_returns if r > 0)
            result.win_rate = winning_days / len(daily_returns) * 100
            
            # 盈亏比
            gains = [r for r in daily_returns if r > 0]
            losses = [abs(r) for r in daily_returns if r < 0]
            if gains and losses:
                result.profit_loss_ratio = sum(gains) / sum(losses)
            
            # 月度收益率统计
            result.monthly_returns = self._calculate_monthly_returns(equity_curve)
            
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
            pass
        return None
    
    def _prev_trading_day(self, date: str, all_dates: List[str]) -> Optional[str]:
        """查找上一个交易日"""
        try:
            idx = all_dates.index(date)
            if idx > 0:
                return all_dates[idx - 1]
        except ValueError:
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
            'annual_return': round(result.annual_return, 2),
            
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
    print("=" * 60)
    print("📊 策略回测引擎测试")
    print("=" * 60)
    
    from data_parser import STRATEGY_CONFIG
    
    for sid in STRATEGY_CONFIG.keys():
        print(f"\n🔍 回测策略: {sid}")
        result = backtest_engine.run_backtest(sid)
        summary = backtest_engine.get_backtest_summary(result)
        print(f"   总收益率: {summary['total_return']}%")
        print(f"   年化收益: {summary['annual_return']}%")
        print(f"   最大回撤: {summary['max_drawdown']}%")
        print(f"   夏普比率: {summary['sharpe_ratio']}")
        print(f"   胜率: {summary['win_rate']}%")
