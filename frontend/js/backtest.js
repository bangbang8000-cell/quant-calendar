// quant-calendar: 回测工作台域模块 (v3.17.4 / FR-3.17.4)
// 参数表单 + 回测 API 调用 + 结果数据组装 + CSV 导出。
// 工厂模式：window.__quantModules.backtest.create(deps) → 该域全部状态与函数。
// deps（共享依赖）:
//   backtestStrategies 策略列表 [{id,name}]（复用 app-logic 现有策略列表）
// 纯计算下沉 backtest-core.js（window.QuantBacktest，node 可单测）
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules.backtest = {
    create(deps) {
      const { ref, computed } = Vue;
      const CORE = window.QuantBacktest || {};
      const depsObj = deps || {};

      // 策略列表：优先复用 app-logic 现有 backtestStrategies，缺失回退内置清单
      const FALLBACK_STRATEGIES = [
        { id: 'multifactor', name: '多因子策略' },
        { id: 'industry_rotation', name: '行业轮动策略' },
        { id: 'index_enhance', name: '指数增强策略' },
        { id: 'money_flow', name: '资金流策略' },
      ];
      const srcStrategies = (Array.isArray(depsObj.backtestStrategies) && depsObj.backtestStrategies.length)
        ? depsObj.backtestStrategies
        : FALLBACK_STRATEGIES;
      const btStrategyOptions = srcStrategies.map((s) => ({ id: s.id, name: s.name }));

      // ─── 参数表单状态 ───
      const btSelectedStrategies = ref(btStrategyOptions.length ? [btStrategyOptions[0].id] : []);
      const btDateRange = ref(defaultDateRange());
      const btCapital = ref(100000);
      const btCommissionRate = ref(0.0003);
      const btIncludeBenchmark = ref(false);
      const btRunning = ref(false);
      const btResult = ref(null);
      const btError = ref('');

      function defaultDateRange() {
        const end = new Date();
        const start = new Date();
        start.setFullYear(start.getFullYear() - 1);
        const fmt = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        return [fmt(start), fmt(end)];
      }

      // 切换策略勾选（保留至少一个）
      function toggleBtStrategy(id) {
        const idx = btSelectedStrategies.value.indexOf(id);
        if (idx >= 0) {
          if (btSelectedStrategies.value.length > 1) btSelectedStrategies.value.splice(idx, 1);
        } else {
          btSelectedStrategies.value.push(id);
        }
      }

      function strategyName(id) {
        const hit = btStrategyOptions.find((o) => o.id === id);
        return hit ? hit.name : id;
      }

      // ─── 结果数据组装（依赖 backtest-core 纯函数）─────────────────

      // 归一化后端 summary/结果对象（single 的 summary 与 multi 的 result 字段名对齐）
      function normalizeSummary(src) {
        const s = src.summary || src;
        return {
          strategy_id: s.strategy_id,
          start_date: s.start_date,
          end_date: s.end_date,
          total_days: s.total_days,
          total_return: s.total_return,
          annual_return: s.annual_return,
          max_drawdown: s.max_drawdown,
          volatility: s.volatility,
          sharpe_ratio: s.sharpe_ratio,
          sortino_ratio: s.sortino_ratio,
          win_rate: s.win_rate,
          profit_loss_ratio: s.profit_loss_ratio,
          avg_positions: s.avg_positions != null ? s.avg_positions : s.avg_positions_per_day,
          total_trades: s.total_trades,
          turnover_rate: s.turnover_rate,
          success: s.success !== false,
          message: s.message || '',
          // v3.18 (FR-3.18.8): 回测真实性 — 样本内/外 + 过拟合警示
          insample_total_return: s.insample_total_return != null ? s.insample_total_return : null,
          outsample_total_return: s.outsample_total_return != null ? s.outsample_total_return : null,
          out_sample_ratio: s.out_sample_ratio != null ? s.out_sample_ratio : 0.2,
          overfit_warning: !!s.overfit_warning,
          overfit_reason: s.overfit_reason || '',
        };
      }

      function equityPoints(curve) {
        return (Array.isArray(curve) ? curve : []).map((p) => ({
          date: p.date,
          value: p.equity != null ? p.equity : p.value,
        }));
      }

      function assembleSingle(sid, data) {
        const summary = normalizeSummary(data);
        const equityCurve = equityPoints(data.equity_curve);
        const monthlyReturns = data.monthly_returns || {};
        const trades = Array.isArray(data.trade_history) ? data.trade_history : [];
        const primary = { id: sid, name: strategyName(sid), summary, equityCurve, monthlyReturns, trades };
        let benchmark = null;
        if (btIncludeBenchmark.value) {
          // 后端未提供市场指数基准：单策略以"现金基准"（恒定初始资金）作不投资对照
          const capital = Number(btCapital.value) || 100000;
          benchmark = {
            name: '现金基准',
            points: equityCurve.map((p) => ({ date: p.date, value: capital })),
          };
        }
        return {
          success: true,
          mode: 'single',
          strategies: [primary],
          primary,
          benchmark,
          period: (summary.start_date || '') + ' ~ ' + (summary.end_date || ''),
        };
      }

      function assembleMulti(ids, data) {
        const results = data.strategy_results || {};
        const strategies = ids
          .map((id) => {
            const raw = results[id];
            if (!raw) return null;
            const summary = normalizeSummary(raw);
            return {
              id: id,
              name: strategyName(id),
              summary: summary,
              equityCurve: equityPoints(raw.equity_curve),
              monthlyReturns: raw.monthly_returns || {},
              trades: Array.isArray(raw.trade_history) ? raw.trade_history : [],
            };
          })
          .filter((s) => s && s.summary.success !== false);
        const firstOk = strategies.length ? strategies[0] : null;
        let benchmark = null;
        if (btIncludeBenchmark.value) {
          // 等权组合净值作为基准线（后端 multi 返回 portfolio_equity）
          benchmark = { name: '等权组合基准', points: equityPoints(data.portfolio_equity) };
        }
        return {
          success: strategies.length > 0,
          mode: 'multi',
          strategies: strategies,
          primary: firstOk,
          benchmark: benchmark,
          period: firstOk ? (firstOk.summary.start_date + ' ~ ' + firstOk.summary.end_date) : '',
        };
      }

      // ─── 指标卡（取首个成功策略）──────────────────────────────────
      const btMetrics = computed(() => {
        const r = btResult.value;
        if (!r || !r.primary) return [];
        return CORE.buildMetrics ? CORE.buildMetrics(r.primary.summary) : [];
      });

      // 年度收益列表（来自首策略月度收益）
      const btAnnualReturns = computed(() => {
        const r = btResult.value;
        if (!r || !r.primary || !r.primary.monthlyReturns) return [];
        return CORE.buildAnnualReturns ? CORE.buildAnnualReturns(r.primary.monthlyReturns) : [];
      });

      // 交易明细（首策略，按日期倒序）
      const btTrades = computed(() => {
        const r = btResult.value;
        if (!r || !r.primary) return [];
        return (r.primary.trades || [])
          .slice()
          .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
      });

      // 多策略指标对比行（每策略一行指标）
      const btStrategyMetricsRows = computed(() => {
        const r = btResult.value;
        if (!r || !r.strategies || r.strategies.length < 2) return [];
        return r.strategies.map((s) => ({
          name: s.name,
          metrics: CORE.buildMetrics ? CORE.buildMetrics(s.summary) : [],
        }));
      });

      // 最大回撤区间（供图表 markArea 与说明）
      const btDrawdownRegion = computed(() => {
        const r = btResult.value;
        if (!r || !r.primary) return null;
        return CORE.computeMaxDrawdownRegion ? CORE.computeMaxDrawdownRegion(r.primary.equityCurve) : null;
      });

      // ─── 运行回测 ────────────────────────────────────────────────
      async function runBacktestWorkbench() {
        const token = localStorage.getItem('quant_token');
        if (!token) { ElementPlus.ElMessage.warning('请先登录'); return; }
        const ids = btSelectedStrategies.value;
        if (!ids.length) { ElementPlus.ElMessage.warning('请至少选择一个策略'); return; }
        const range = btDateRange.value;
        const payload = {
          start_date: (range && range[0]) || undefined,
          end_date: (range && range[1]) || undefined,
        };
        const headers = { 'Content-Type': 'application/json' };
        btRunning.value = true;
        btResult.value = null;
        btError.value = '';
        try {
          if (ids.length === 1) {
            // 单策略：/api/backtest/{id}（支持初始资金/手续费率，并返回 trade_history）
            const params = Object.assign({}, payload, {
              initial_capital: Number(btCapital.value) || 100000,
              commission_rate: Number(btCommissionRate.value) || 0.0003,
            });
            const res = await fetch('/api/backtest/' + encodeURIComponent(ids[0]), {
              method: 'POST', headers: headers, body: JSON.stringify(params),
            });
            if (!res.ok) {
              const err = await res.json().catch(() => ({}));
              throw new Error(err.detail || '回测失败');
            }
            const data = await res.json();
            if (!data.success) throw new Error(data.message || '回测失败');
            btResult.value = assembleSingle(ids[0], data);
          } else {
            // 多策略：/api/backtest/multi（各策略曲线 + 等权组合基准）
            const res = await fetch('/api/backtest/multi', {
              method: 'POST', headers: headers,
              body: JSON.stringify(Object.assign({}, payload, { strategy_ids: ids })),
            });
            if (!res.ok) {
              const err = await res.json().catch(() => ({}));
              throw new Error(err.detail || '回测失败');
            }
            const data = await res.json();
            if (!data.success) throw new Error(data.message || '多策略回测失败');
            btResult.value = assembleMulti(ids, data.data || {});
            if (!btResult.value.success) throw new Error('所选策略回测均失败，请检查策略与数据');
          }
          ElementPlus.ElMessage.success('回测完成');
        } catch (e) {
          btError.value = (e && e.message) ? e.message : '回测失败';
          ElementPlus.ElMessage.error(btError.value);
        } finally {
          btRunning.value = false;
        }
      }

      // ─── 净值图 option 工厂（渲染时读 CSS 令牌，主题切换重绘重跑）───
      // qc-allow-hardcode: 下方 #hex 为 ECharts canvas 运行时兜底字面量
      function buildNavOption() {
        const r = btResult.value;
        const empty = { dates: [], series: [] };
        if (!r) return empty;
        const curves = r.strategies.map((s) => ({ name: s.name, points: s.equityCurve }));
        if (r.benchmark && r.benchmark.points && r.benchmark.points.length) {
          curves.push({ name: r.benchmark.name, points: r.benchmark.points });
        }
        const nav = CORE.buildNavSeries ? CORE.buildNavSeries(curves) : empty;
        return buildNavChartOption(nav, r);
      }

      function buildNavChartOption(nav, result) {
        const getCSSVar = (n) => (getComputedStyle(document.documentElement).getPropertyValue(n) || '').trim();
        // qc-allow-hardcode: 以下 #hex 为 ECharts 运行时兜底字面量
        const themeColors = {
          primary: getCSSVar('--primary-color') || '#2563eb',
          success: getCSSVar('--color-success') || '#4CAF50',
          accent: getCSSVar('--color-accent') || '#F59E0B',
          info: getCSSVar('--color-info') || '#1976d2',
          ai: getCSSVar('--color-ai') || '#6366f1',
          textPrimary: getCSSVar('--text-primary') || '#1f2937',
          textSecondary: getCSSVar('--text-secondary') || '#6b7280',
          border: getCSSVar('--border-light') || '#e5e7eb',
          up: getCSSVar('--color-rise') || '#E63946',
          down: getCSSVar('--color-fall') || '#2E7D32',
          bg: getCSSVar('--bg-card') || '#ffffff',
        };
        const palette = [themeColors.primary, themeColors.success, themeColors.accent, themeColors.info, themeColors.ai];
        const isDark = themeColors.bg.length === 7 && parseInt(themeColors.bg.slice(1, 3), 16) < 80;
        const tooltipBg = isDark ? 'rgba(15,23,42,0.94)' : 'rgba(255,255,255,0.94)';
        const dd = CORE.computeMaxDrawdownRegion ? CORE.computeMaxDrawdownRegion(result.primary ? result.primary.equityCurve : []) : null;
        const markArea = (dd && dd.peakDate && dd.troughDate) ? {
          silent: true,
          label: { show: true, position: 'insideTop', color: themeColors.textPrimary, fontSize: 11 },
          data: [[
            { name: '最大回撤 ' + dd.maxDrawdown + '%', xAxis: dd.peakDate, itemStyle: { color: themeColors.down } },
            { xAxis: dd.troughDate },
          ]],
        } : undefined;
        const series = nav.series.map((s, i) => {
          const isBenchmark = result.benchmark && s.name === result.benchmark.name;
          const color = palette[i % palette.length];
          return {
            name: s.name,
            type: 'line',
            data: s.data,
            smooth: true,
            symbol: 'none',
            connectNulls: false,
            lineStyle: { width: isBenchmark ? 2 : 2.4, type: isBenchmark ? 'dashed' : 'solid', color: color },
            itemStyle: { color: color },
            emphasis: { focus: 'series' },
            ...(i === 0 && markArea ? { markArea: markArea } : {}),
          };
        });
        return {
          tooltip: {
            trigger: 'axis',
            confine: true,
            backgroundColor: tooltipBg,
            borderColor: themeColors.border,
            textStyle: { color: themeColors.textPrimary, fontSize: 12 },
          },
          legend: {
            type: 'scroll',
            selectedMode: 'multiple',
            icon: 'roundRect',
            itemWidth: 14,
            itemHeight: 8,
            textStyle: { color: themeColors.textSecondary, fontSize: 11 },
          },
          grid: { left: 56, right: 20, top: 36, bottom: 48 },
          xAxis: {
            type: 'category',
            data: nav.dates,
            boundaryGap: false,
            axisLine: { lineStyle: { color: themeColors.border } },
            axisLabel: { color: themeColors.textSecondary, fontSize: 11 },
          },
          yAxis: {
            type: 'value',
            scale: true,
            axisLabel: { color: themeColors.textSecondary, fontSize: 11 },
            splitLine: { lineStyle: { color: themeColors.border, type: 'dashed' } },
          },
          dataZoom: [
            { type: 'inside' },
            { type: 'slider', height: 18, bottom: 8, borderColor: themeColors.border, textStyle: { color: themeColors.textSecondary, fontSize: 10 } },
          ],
          series: series,
        };
      }

      // 图表渲染（ref 回调，element 挂载时绘制，实例生命周期委托 charts.js）
      function registerBacktestNavChart(el) {
        if (!el) {
          // 子页卸载 → 释放实例，避免实例绑定已脱离 DOM 的容器
          if (window.__quantModules && window.__quantModules.charts && window.__quantModules.charts.disposeBacktest) {
            window.__quantModules.charts.disposeBacktest('backtestNavChart');
          }
          return;
        }
        if (window.__quantModules && window.__quantModules.charts && window.__quantModules.charts.renderBacktestTo) {
          window.__quantModules.charts.renderBacktestTo('backtestNavChart', buildNavOption, { key: 'bt-nav' });
        }
      }

      // 主题切换 → 回测图重绘（缓存 option 工厂重跑，保留图例选中）
      if (window.__quantModules && window.__quantModules.echartsTheme && !window.__quantModules.echartsTheme.__backtestWorkbenchRegistered) {
        window.__quantModules.echartsTheme.__backtestWorkbenchRegistered = true;
        window.__quantModules.echartsTheme.registerChart(function () {
          if (window.__quantModules && window.__quantModules.charts && window.__quantModules.charts.redrawBacktest) {
            window.__quantModules.charts.redrawBacktest('backtestNavChart');
          }
        });
      }

      // ─── 导出 CSV ────────────────────────────────────────────────
      function exportBacktestCSV() {
        const r = btResult.value;
        if (!r || !r.primary) { ElementPlus.ElMessage.warning('暂无回测结果可导出'); return; }
        const curves = r.strategies.map((s) => ({ name: s.name, points: s.equityCurve }));
        if (r.benchmark) curves.push({ name: r.benchmark.name, points: r.benchmark.points });
        const nav = CORE.buildNavSeries ? CORE.buildNavSeries(curves) : { dates: [], series: [] };
        const toAction = CORE.tradeActionText || ((a) => a);
        const trades = btTrades.value.map((t) => ({
          date: t.date,
          stock: t.stock,
          action: toAction(t.action),
          reason: t.reason,
        }));
        const csv = CORE.buildBacktestCsv
          ? CORE.buildBacktestCsv({ metrics: btMetrics.value, dates: nav.dates, series: nav.series, trades: trades })
          : '';
        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'backtest-' + r.strategies.map((s) => s.id).join('_') + '-' + new Date().toISOString().slice(0, 10) + '.csv';
        a.click();
        URL.revokeObjectURL(url);
        ElementPlus.ElMessage.success('回测结果已导出 CSV');
      }

      // 数值格式化（null/NaN 回退 '--'）
      function btFmtNum(v, digits) {
        if (v == null || v === '' || isNaN(Number(v))) return '--';
        return Number(v).toFixed(digits == null ? 2 : digits);
      }

      return {
        btStrategyOptions, btSelectedStrategies, toggleBtStrategy,
        btDateRange, btCapital, btCommissionRate, btIncludeBenchmark,
        btRunning, btResult, btError,
        btMetrics, btAnnualReturns, btTrades, btStrategyMetricsRows, btDrawdownRegion,
        runBacktestWorkbench, exportBacktestCSV, registerBacktestNavChart, btFmtNum,
      };
    },
  };
})();
