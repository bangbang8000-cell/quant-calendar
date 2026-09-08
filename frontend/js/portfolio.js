// quant-calendar: 组合/模拟持仓域模块 (v3.17.8 / FR-3.17.5)
// 从 ai-page 组合子页使用: window.__quantModules.portfolio.create(deps) → 组合域状态与函数。
// 与 watchlist.js 同工厂模式; 页面模板位于 ai-page.js 的「组合」子页 (入口: AI 概览「组合持仓」卡片)。
// 规范: 无内联 style, 无新增 emoji, 数据不可达优雅降级。
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules.portfolio = {
    create(deps) {
      const { ref, computed } = Vue;

      // ─── 状态 ───────────────────────────────────────────────
      const positions = ref([]);
      const summary = ref(null);
      const trades = ref([]);
      const loading = ref(false);
      const loadError = ref(false);
      const showAddForm = ref(false);
      const addForm = ref({ stock_code: '', stock_name: '', cost_price: null, quantity: null });
      const addSaving = ref(false);
      const tradeFormVisible = ref(false);
      const tradeForm = ref({ stock_code: '', stock_name: '', action: 'buy', price: null, quantity: null, trade_date: '', note: '' });
      const tradeSaving = ref(false);
      const portfolioTab = ref('positions');
      const equityDays = ref(30);
      const equityLoading = ref(false);
      const equityNote = ref('');
      const equityHasData = ref(false);
      const equityData = ref({ dates: [], equity: [], values: [] });

      const portfolioCount = computed(() => positions.value.length);

      // ─── V5.0.3 T-5.0.34: 风险 Tab (指标/规则/再平衡建议) ────
      const riskTab = ref('metrics');
      const riskLoading = ref(false);
      const riskNote = ref('');
      const riskHasData = ref(false);
      const riskData = ref({ metrics: null, rules: [], rebalance: null });

      const riskMetricList = computed(function () {
        const m = riskData.value.metrics;
        if (!m) return [];
        const pct = function (v) { return v == null ? '--' : Number(v).toFixed(2) + '%'; };
        const num = function (v) { return v == null ? '--' : Number(v).toFixed(2); };
        return [
          { key: 'volatility', label: '年化波动率', value: pct(m.volatility) },
          { key: 'var_historical', label: 'VaR(95% 历史)', value: pct(m.var_historical) },
          { key: 'var_parametric', label: 'VaR(95% 参数)', value: pct(m.var_parametric) },
          { key: 'cvar', label: 'CVaR(95%)', value: pct(m.cvar) },
          { key: 'max_drawdown', label: '最大回撤', value: pct(m.max_drawdown) },
          { key: 'annual_return', label: '年化收益', value: pct(m.annual_return) },
          { key: 'sharpe_ratio', label: '夏普比率', value: num(m.sharpe_ratio) },
          { key: 'sortino_ratio', label: 'Sortino', value: num(m.sortino_ratio) },
          { key: 'calmar_ratio', label: 'Calmar', value: num(m.calmar_ratio) },
          { key: 'beta', label: 'Beta', value: num(m.beta) },
        ];
      });

      async function loadRisk() {
        riskLoading.value = true;
        try {
          const m = await (await fetch('/api/portfolio/risk?days=60')).json();
          const r = await (await fetch('/api/portfolio/risk-rules?days=60')).json();
          const metrics = m && m.success ? m.risk : null;
          const rules = r && r.success ? (r.rules || []) : [];
          const rebalance = r && r.success ? r.rebalance : null;
          riskData.value = { metrics: metrics, rules: rules, rebalance: rebalance };
          riskHasData.value = !!(metrics && Object.keys(metrics).length > 0);
          riskNote.value = (m && m.note) || (r && r.note) || '';
        } catch (e) {
          console.warn('[portfolio] 加载风险数据失败:', e);
          riskHasData.value = false;
          riskNote.value = '风险数据加载失败';
        } finally {
          riskLoading.value = false;
        }
      }

      // ─── 持仓 ───────────────────────────────────────────────
      async function loadPortfolio() {
        loading.value = true;
        loadError.value = false;
        try {
          const res = await fetch('/api/portfolio');
          const data = await res.json();
          if (data.success) {
            positions.value = data.positions || [];
            summary.value = data.summary || null;
          } else {
            loadError.value = true;
          }
        } catch (e) {
          console.warn('[portfolio] 加载持仓失败:', e);
          loadError.value = true;
        } finally {
          loading.value = false;
        }
      }

      async function addPosition() {
        const f = addForm.value;
        const code = (f.stock_code || '').trim();
        if (!code) { ElementPlus.ElMessage.warning('请输入股票代码'); return; }
        const cost = Number(f.cost_price);
        const qty = Number(f.quantity);
        if (!(cost > 0) || !(qty > 0)) { ElementPlus.ElMessage.warning('成本价与数量须为正数'); return; }
        addSaving.value = true;
        try {
          const res = await fetch('/api/portfolio/positions', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stock_code: code, stock_name: (f.stock_name || '').trim(), cost_price: cost, quantity: qty })
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success(data.message || '持仓已更新');
            showAddForm.value = false;
            addForm.value = { stock_code: '', stock_name: '', cost_price: null, quantity: null };
            await loadPortfolio();
            loadEquity(equityDays.value);
          } else {
            ElementPlus.ElMessage.error(data.message || '添加失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('网络异常，添加失败');
        } finally {
          addSaving.value = false;
        }
      }

      async function removePosition(code) {
        try {
          await ElementPlus.ElMessageBox.confirm('确定删除持仓 ' + code + ' ？', '删除持仓', {
            confirmButtonText: '删除', cancelButtonText: '取消', type: 'warning'
          });
        } catch (e) { return; }
        try {
          const res = await fetch('/api/portfolio/positions/' + encodeURIComponent(code), {
            method: 'DELETE'
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success('已删除持仓');
            await loadPortfolio();
            loadTrades();
            loadEquity(equityDays.value);
          } else {
            ElementPlus.ElMessage.error(data.message || '删除失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('网络异常，删除失败');
        }
      }

      // ─── 调仓 ───────────────────────────────────────────────
      function openTradeForm(code, name) {
        tradeForm.value = { stock_code: code, stock_name: name || '', action: 'buy', price: null, quantity: null, trade_date: '', note: '' };
        tradeFormVisible.value = true;
      }

      async function submitTrade() {
        const f = tradeForm.value;
        if (!f.stock_code) { ElementPlus.ElMessage.warning('请选择持仓股票'); return; }
        const price = Number(f.price);
        const qty = Number(f.quantity);
        if (!(price > 0) || !(qty > 0)) { ElementPlus.ElMessage.warning('价格与数量须为正数'); return; }
        tradeSaving.value = true;
        try {
          const res = await fetch('/api/portfolio/trades', {
            method: 'POST', headers: _authHeaders(),
            body: JSON.stringify({
              stock_code: f.stock_code, stock_name: f.stock_name || '',
              action: f.action, price: price, quantity: qty,
              trade_date: f.trade_date || '', note: (f.note || '').trim()
            })
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success(data.message || '调仓已记录');
            tradeFormVisible.value = false;
            await loadPortfolio();
            await loadTrades();
            loadEquity(equityDays.value);
          } else {
            ElementPlus.ElMessage.error(data.message || '记录失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('网络异常，记录失败');
        } finally {
          tradeSaving.value = false;
        }
      }

      async function loadTrades() {
        try {
          const res = await fetch('/api/portfolio/trades');
          const data = await res.json();
          if (data.success) trades.value = data.trades || [];
        } catch (e) {
          console.warn('[portfolio] 加载调仓记录失败:', e);
        }
      }

      // ─── 收益曲线 (ECharts 折线, 复用 charts.js 渲染模式) ────
      const getCSSVar = (n) => (getComputedStyle(document.documentElement).getPropertyValue(n) || '').trim();
      // V5.3.0 (T-5.3.2.3 / FR-5.3.2.3): 逐日回撤序列 (peak-to-trough, % 负值)
      function computeDrawdown(nav) {
        if (!nav || !nav.length) return [];
        let peak = nav[0] || 0;
        const out = [];
        for (let i = 0; i < nav.length; i++) {
          const v = nav[i] || 0;
          if (v > peak) peak = v;
          out.push(peak > 0 ? Math.round(((v - peak) / peak) * 1000) / 10 : 0);
        }
        return out;
      }
      // qc-allow-hardcode: 以下 #hex 为 ECharts 运行时兜底字面量, 非静态硬编码
      function buildEquityOption() {
        const themeColors = {
          primary: getCSSVar('--primary-color') || '#2563eb',
          textPrimary: getCSSVar('--text-primary') || '#1f2937',
          textSecondary: getCSSVar('--text-secondary') || '#6b7280',
          border: getCSSVar('--border-light') || '#e5e7eb',
          up: getCSSVar('--color-rise') || '#E63946',
          down: getCSSVar('--color-fall') || '#2E7D32',
        };
        const d = equityData.value;
        return {
          tooltip: {
            trigger: 'axis',
            backgroundColor: getCSSVar('--bg-card') || '#ffffff',
            borderColor: themeColors.border,
            textStyle: { color: themeColors.textPrimary },
            formatter: function (params) {
              const idx = params[0] ? params[0].dataIndex : -1;
              const date = d.dates[idx] || '';
              const eq = d.equity[idx];
              const val = d.values[idx];
              let s = date || '';
              if (eq != null) s += '<br/>组合净值: ' + eq;
              if (val != null) s += '<br/>组合市值: ' + val;
              return s;
            }
          },
          grid: { left: 48, right: 48, top: 20, bottom: 30 },
          xAxis: { type: 'category', data: d.dates, boundaryGap: false, axisLabel: { fontSize: 10, color: themeColors.textSecondary }, axisLine: { lineStyle: { color: themeColors.border } } },
          yAxis: [
            { type: 'value', scale: true, name: '净值', axisLabel: { fontSize: 10, color: themeColors.textSecondary }, splitLine: { lineStyle: { color: themeColors.border, type: 'dashed' } } },
            // V5.3.0 (T-5.3.2.3): 回撤副轴 (右侧, %) — 净值+回撤双轴专业图
            { type: 'value', name: '回撤%', axisLabel: { fontSize: 10, color: themeColors.down, formatter: '{value}%' }, splitLine: { show: false } },
          ],
          series: [{
            name: '组合净值',
            type: 'line',
            data: d.equity,
            smooth: true,
            showSymbol: false,
            lineStyle: { color: themeColors.primary, width: 2 },
            itemStyle: { color: themeColors.primary },
            areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: getCSSVar('--primary-rgb') ? 'rgba(' + getCSSVar('--primary-rgb') + ',0.25)' : 'rgba(37,99,235,0.25)' }, { offset: 1, color: getCSSVar('--primary-rgb') ? 'rgba(' + getCSSVar('--primary-rgb') + ',0.02)' : 'rgba(37,99,235,0.02)' }]) },
          }, {
            name: '回撤',
            type: 'line',
            yAxisIndex: 1,
            data: computeDrawdown(d.equity),
            smooth: true,
            showSymbol: false,
            lineStyle: { color: themeColors.down, width: 1.5 },
            itemStyle: { color: themeColors.down },
            areaStyle: { color: 'rgba(46,125,50,0.15)' },
          }],
        };
      }

      function _disposeEquityChart() {
        if (window.__quantModules && window.__quantModules.charts && window.__quantModules.charts.disposePortfolio) {
          window.__quantModules.charts.disposePortfolio('portfolioEquityChart');
        }
      }

      function _renderEquity(dates, equity, values) {
        equityData.value = { dates: dates || [], equity: equity || [], values: values || [] };
        equityHasData.value = !!dates && dates.length > 0;
        if (equityHasData.value && window.__quantModules && window.__quantModules.charts && window.__quantModules.charts.renderPortfolioTo) {
          window.__quantModules.charts.renderPortfolioTo('portfolioEquityChart', buildEquityOption, { key: 'portfolio-equity' });
        } else {
          _disposeEquityChart();
        }
      }

      async function loadEquity(days) {
        equityLoading.value = true;
        equityNote.value = '';
        const d = Number(days) || equityDays.value || 30;
        equityDays.value = d;
        try {
          const res = await fetch('/api/portfolio/equity_curve?days=' + d);
          const data = await res.json();
          if (data.success) {
            equityNote.value = data.note || '';
            _renderEquity(data.dates || [], data.equity || [], data.values || []);
          } else {
            equityNote.value = '数据暂不可用';
            _disposeEquityChart();
          }
        } catch (e) {
          console.warn('[portfolio] 加载收益曲线失败:', e);
          equityNote.value = '数据暂不可用';
          _disposeEquityChart();
        } finally {
          equityLoading.value = false;
        }
      }

      // 主题切换 → 用缓存 option 工厂重绘 (与回测图同模式)
      if (window.__quantModules && window.__quantModules.echartsTheme && !window.__quantModules.echartsTheme.__portfolioChartRegistered) {
        window.__quantModules.echartsTheme.__portfolioChartRegistered = true;
        window.__quantModules.echartsTheme.registerChart(function () {
          if (window.__quantModules && window.__quantModules.charts && window.__quantModules.charts.redrawPortfolio) {
            window.__quantModules.charts.redrawPortfolio('portfolioEquityChart');
          }
        });
      }

      // ─── 格式化助手 ─────────────────────────────────────────
      function fmtSigned(v, digits) {
        if (v == null || v === '' || isNaN(Number(v))) return '--';
        const n = Number(v);
        const d = digits == null ? 2 : digits;
        return (n >= 0 ? '+' : '') + n.toFixed(d);
      }

      function fmtSignedPct(v, digits) {
        if (v == null || v === '' || isNaN(Number(v))) return '--';
        const n = Number(v);
        const d = digits == null ? 2 : digits;
        return (n >= 0 ? '+' : '') + n.toFixed(d) + '%';
      }

      function signClass(v) {
        if (v == null || v === '' || isNaN(Number(v))) return '';
        const n = Number(v);
        if (n > 0) return 'portfolio-up';
        if (n < 0) return 'portfolio-down';
        return '';
      }

      return {
        positions, summary, trades, loading, loadError,
        showAddForm, addForm, addSaving,
        tradeFormVisible, tradeForm, tradeSaving,
        portfolioTab, equityDays, equityLoading, equityNote, equityHasData,
        portfolioCount,
        loadPortfolio, addPosition, removePosition,
        openTradeForm, submitTrade, loadTrades, loadEquity,
        fmtSigned, fmtSignedPct, signClass,
        riskTab, riskLoading, riskNote, riskHasData, riskData,
        riskMetricList, loadRisk,
      };
    }
  };
})();
