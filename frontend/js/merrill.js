// quant-calendar: merrill clock module (v3.0)
// 美林时钟核心逻辑 - 从 index.html 解耦
(function() {
  const { ref, computed, watch, onUnmounted } = Vue;

  // ─── 常量 ─────────────────────────────────
  const FULL_CYCLE_MONTHS = 72;

  const charLabels = {
    gdp: 'GDP增长',
    corporate: '企业盈利',
    inventory: '库存周期',
    employment: '就业市场',
    policy: '货币政策'
  };

  const assetNames = {
    stock: '📈 股票',
    bond: '📜 债券',
    commodity: '🛢️ 大宗商品',
    cash: '💰 现金'
  };

  const stageTaglines = {
    recovery: '股票为王 · 现金贬值',
    overheat: '商品为王 · 债券贬值',
    stagflation: '现金为王 · 商品次之',
    recession: '债券为王 · 现金次之'
  };

  // ─── 导出 composable ──────────────────────
  window.useMerrillClock = function() {
    // ===== 状态 =====
    const merrillData = ref({
      stage: 'recovery',
      stage_cn: '复苏',
      stage_name: '复苏期',
      name: '复苏期',
      icon: '🌱',
      color: '#27AE60',
      description: '2025年开启新一轮复苏周期，政策发力，经济触底回升',
      timing: {
        current_stage_start_date: '2025年初',
        duration_days: 500,
        avg_duration_months: 18,
        progress_percent: 72
      },
      indicators: {
        pmi: 50.8, gdp_growth: 5.3, cpi: 0.8, m2_growth: 9.8
      }
    });

    const merrillStagesConfig = ref({});
    const showMerrillDetail = ref(false);
    const merrillDetailData = ref({});
    const merrillClockConfig = ref({ autoRefresh: true, refreshInterval: 300 });
    const merrillClockLastUpdated = ref('');
    const merrillReevalResult = ref('');
    const merrillReevalLoading = ref(false);
    const merrillPrevStage = ref('');

    let merrillRefreshTimer = null;
    const clockPrevPos = { x: 0, y: 0 };
    let _lastClockStage = '';

    // ===== Computed =====
    const stages = computed(() => {
      const cfg = merrillStagesConfig.value;
      const order = ['recession', 'recovery', 'overheat', 'stagflation'];
      return order.map(key => {
        const s = cfg[key] || {};
        return {
          key, name: s.name || key, icon: s.icon || '📊',
          color: s.color || '#888', bg: s.bg_color || '#f5f5f5',
          textColor: s.color || '#333',
          tagline: s.allocation ? (stageTaglines[key] || '') : ''
        };
      });
    });

    const indicatorList = computed(() => {
      const ind = merrillData.value.indicators || {};
      return [
        { key: 'pmi', label: 'PMI', value: ind.pmi?.toFixed(1), color: ind.pmi >= 50 ? '#43a047' : '#E53935' },
        { key: 'gdp', label: 'GDP增速', value: ind.gdp_growth?.toFixed(1) + '%', color: '#43a047' },
        { key: 'cpi', label: 'CPI同比', value: ind.cpi?.toFixed(1) + '%', color: ind.cpi > 1.2 ? '#E53935' : '#43a047' },
        { key: 'm2', label: 'M2增速', value: ind.m2_growth?.toFixed(1) + '%', color: '#43a047' }
      ];
    });

    // v3.0: 通用维度评分构建器
    const buildDimensionScoreList = (scores) => {
      scores = scores || {};
      const dims = [
        { key: 'growth', label: '增长' },
        { key: 'inflation', label: '通胀' },
        { key: 'liquidity', label: '流动性' },
        { key: 'employment', label: '就业' },
        { key: 'external', label: '外部' }
      ];
      const levelColors = { '宽松': '#43a047', '中位': '#FF9800', '偏低': '#E53935', '高增长': '#43a047', '承压': '#E53935', '不利': '#E53935' };
      return dims.map(d => {
        const dim = scores[d.key] || {};
        const z = dim.score || 0;
        const barWidth = Math.min(100, Math.max(5, (z + 2) * 25));
        const barColor = z >= 0.3 ? '#66BB6A' : z >= -0.3 ? '#FFB74D' : '#EF5350';
        const scoreColor = z >= 0 ? '#66BB6A' : '#EF5350';
        return {
          key: d.key, label: d.label,
          scoreStr: z.toFixed(2),
          level: dim.level || '—',
          barWidth, barColor, scoreColor,
          color: levelColors[dim.level] || '#888888'
        };
      });
    };

    const dimensionScoreList = computed(() => buildDimensionScoreList(merrillData.value.dimension_scores));
    const detailDimensionScoreList = computed(() => buildDimensionScoreList(merrillDetailData.value._dimensions));

    const confidenceColor = computed(() => {
      const lvl = merrillData.value.confidence?.level || '';
      return lvl === '高' ? '#43a047' : lvl === '中' ? '#FF9800' : lvl === '低' ? '#E53935' : 'var(--text-secondary)';
    });

    const timelineStages = computed(() => {
      const cfg = merrillStagesConfig.value;
      const order = { recovery: 0, overheat: 1, stagflation: 2, recession: 3 };
      const full = {};
      for (const [key, s] of Object.entries(cfg)) {
        full[key] = {
          name: s.name,
          icon: s.icon,
          color: s.color,
          lightColor: s.bg_color,
          duration: '~' + (s.historical_stats?.avg_duration_months || 18) + '个月',
          order: order[key] || 0,
          period: s.case_studies?.[0]?.split('：')[0] || '',
          avgMonths: s.historical_stats?.avg_duration_months || 18
        };
      }
      return full;
    });

    const clockPosition = computed(() => {
      const stage = merrillData.value.stage;
      const positions = {
        recovery: { x: 150, y: 150 },
        overheat: { x: 150, y: 50 },
        stagflation: { x: 50, y: 50 },
        recession: { x: 50, y: 150 }
      };
      const pos = positions[stage] || { x: 150, y: 150 };
      const dims = merrillData.value.dimension_scores || {};
      const g = dims.growth?.score || 0;
      const inf = dims.inflation?.score || 0;
      const offsetX = Math.max(-30, Math.min(30, g * 15));
      const offsetY = Math.max(-30, Math.min(30, -inf * 15));
      return {
        x: pos.x + offsetX,
        y: pos.y + offsetY,
        prevX: clockPrevPos.x,
        prevY: clockPrevPos.y
      };
    });

    const merrillProgressStyle = computed(() => {
      const pct = Math.min(100, merrillData.value.timing?.progress_percent || 0);
      const color = merrillData.value.color || '#4CAF50';
      const bg = pct > 100
        ? 'linear-gradient(90deg, ' + color + ', #FF9800)'
        : color;
      return { width: pct + '%', background: bg };
    });

    // ===== 辅助函数 =====
    function getStageAngle() {
      const angles = {
        recovery: Math.PI / 4,
        overheat: 3 * Math.PI / 4,
        stagflation: 5 * Math.PI / 4,
        recession: 7 * Math.PI / 4
      };
      return angles[merrillData.value.stage] || 0;
    }

    function getCycleProgress() {
      return merrillData.value?.timing?.progress_percent || 0;
    }

    function getCurrentStageMonths() {
      return merrillData.value?.timing?.duration_months || 0;
    }

    function getStageTotalMonths() {
      return merrillData.value?.timing?.avg_duration_months || 18;
    }

    function isStageCompleted(stage) {
      const tl = timelineStages.value;
      const currentOrder = tl[merrillData.value.stage]?.order || 0;
      const targetOrder = tl[stage]?.order || 0;
      return targetOrder < currentOrder;
    }

    function getCharLabel(key) { return charLabels[key] || key; }
    function getAssetName(key) { return assetNames[key] || key; }
    function getRankColor(rank) {
      const colors = ['#43a047', '#f57c00', '#1976d2', '#757575'];
      return colors[rank - 1] || colors[3];
    }

    // ===== API 函数 =====
    async function fetchMerrillStages() {
      try {
        const res = await fetch('/api/market/merrill-clock/stages');
        const data = await res.json();
        if (data.success && data.data) {
          merrillStagesConfig.value = data.data;
        }
      } catch (e) {
        console.warn('获取美林时钟阶段配置失败');
      }
    }

    async function fetchMerrillClock() {
      try {
        const res = await fetch('/api/market/merrill-clock');
        const data = await res.json();
        const stage = data.stage || 'recovery';
        const preset = merrillStagesConfig.value[stage] || {};
        merrillData.value = {
          ...preset,
          ...data,
          stage_cn: data.stage_cn || preset.stage_cn || '',
          stage_name: data.stage_name || preset.name || '',
          name: data.name || preset.name || '复苏期'
        };
        merrillClockLastUpdated.value = new Date().toLocaleTimeString('zh-CN');

        // 阶段变更检测
        if (merrillPrevStage.value && merrillPrevStage.value !== stage) {
          const cfg = merrillStagesConfig.value;
          const oldName = cfg[merrillPrevStage.value]?.name || merrillPrevStage.value;
          const newName = cfg[stage]?.name || stage;
          ElementPlus.ElMessage({
            message: '🔔 美林时钟阶段切换：' + oldName + ' → ' + newName,
            type: 'warning',
            duration: 6000,
            showClose: true
          });
        }
        merrillPrevStage.value = stage;
      } catch (e) {
        console.error('获取美林时钟失败:', e);
        const recoveryCfg = merrillStagesConfig.value.recovery || {};
        merrillData.value = {
          ...recoveryCfg,
          indicators: { pmi: 51.2, gdp_growth: 5.2, cpi: 0.8, m2_growth: 10.5 }
        };
      }
    }

    async function showStageDetail(stage) {
      showMerrillDetail.value = true;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      merrillDetailData.value = merrillStagesConfig.value[stage] || merrillStagesConfig.value.recovery || {};

      const isActive = merrillData.value?.stage === stage;
      merrillDetailData.value._isCurrent = isActive;
      if (isActive && merrillData.value) {
        merrillDetailData.value._nextPrediction = merrillData.value.next_stage_prediction;
        merrillDetailData.value._confidence = merrillData.value.confidence;
        merrillDetailData.value._stage = merrillData.value.stage;
        merrillDetailData.value._dimensions = merrillData.value.dimension_scores;
      }

      // 弹窗打开后强制刷新布局
      setTimeout(() => {
        document.body.style.display = 'none';
        setTimeout(() => { document.body.style.display = ''; }, 10);
      }, 100);

      // 后台异步请求API更新
      try {
        const res = await fetch('/api/market/merrill-clock/stage/' + stage);
        const data = await res.json();
        if (data.success && data.data) {
          const apiData = { ...merrillStagesConfig.value[stage], ...data.data };
          if (apiData._is_current !== undefined) {
            apiData._isCurrent = apiData._is_current;
          }
          if (apiData._current_timing) {
            apiData._currentTiming = apiData._current_timing;
          }
          if (apiData._last_period) {
            apiData._lastPeriod = apiData._last_period;
          }
          if (merrillDetailData.value._nextPrediction)
            apiData._nextPrediction = merrillDetailData.value._nextPrediction;
          if (merrillDetailData.value._confidence)
            apiData._confidence = merrillDetailData.value._confidence;
          if (merrillDetailData.value._stage)
            apiData._stage = merrillDetailData.value._stage;
          if (merrillDetailData.value._dimensions)
            apiData._dimensions = merrillDetailData.value._dimensions;
          merrillDetailData.value = apiData;
        }
      } catch (e) {
        console.warn('获取阶段详情失败:', e);
      }
    }

    function saveMerrillClockConfig() {
      localStorage.setItem('merrill_clock_config', JSON.stringify({
        autoRefresh: merrillClockConfig.value.autoRefresh,
        refreshInterval: merrillClockConfig.value.refreshInterval
      }));
      if (merrillClockConfig.value.autoRefresh) {
        clearInterval(merrillRefreshTimer);
        merrillRefreshTimer = setInterval(fetchMerrillClock, merrillClockConfig.value.refreshInterval * 1000);
      } else {
        clearInterval(merrillRefreshTimer);
      }
      ElementPlus.ElMessage.success('美林时钟配置已保存');
    }

    async function doMerrillReevaluate() {
      merrillReevalLoading.value = true;
      merrillReevalResult.value = '';
      try {
        const res = await fetch('/api/market/merrill-clock/reevaluate', { method: 'POST' });
        const data = await res.json();
        if (data.success) {
          merrillReevalResult.value = '重评估完成：' + (data.stage_name || data.stage);
          await fetchMerrillClock();
          ElementPlus.ElMessage.success('重评估完成');
        } else {
          merrillReevalResult.value = (data.message || '重评估失败');
          ElementPlus.ElMessage.error(data.message || '重评估失败');
        }
      } catch (e) {
        merrillReevalResult.value = '请求失败';
        ElementPlus.ElMessage.error('重评估请求失败');
      } finally {
        merrillReevalLoading.value = false;
      }
    }

    // ===== 定时器管理 =====
    function startAutoRefresh() {
      const savedConfig = localStorage.getItem('merrill_clock_config');
      if (savedConfig) {
        try {
          const cfg = JSON.parse(savedConfig);
          merrillClockConfig.value = { ...merrillClockConfig.value, ...cfg };
        } catch (e) { /* ignore */ }
      }
      if (merrillClockConfig.value.autoRefresh) {
        merrillRefreshTimer = setInterval(() => {
          console.log('[美林时钟] 定时刷新...');
          fetchMerrillClock();
        }, merrillClockConfig.value.refreshInterval * 1000);
      }
    }

    function stopAutoRefresh() {
      if (merrillRefreshTimer) clearInterval(merrillRefreshTimer);
    }

    onUnmounted(() => {
      stopAutoRefresh();
    });

    // ===== 返回所有暴露的属性和方法 =====
    return {
      // 状态
      merrillData,
      merrillStagesConfig,
      showMerrillDetail,
      merrillDetailData,
      merrillClockConfig,
      merrillClockLastUpdated,
      merrillReevalResult,
      merrillReevalLoading,
      // Computed
      stages,
      indicatorList,
      dimensionScoreList,
      detailDimensionScoreList,
      confidenceColor,
      timelineStages,
      clockPosition,
      merrillProgressStyle,
      // 常量
      FULL_CYCLE_MONTHS,
      // 辅助函数
      getStageAngle,
      getCycleProgress,
      getCurrentStageMonths,
      getStageTotalMonths,
      isStageCompleted,
      getCharLabel,
      getAssetName,
      getRankColor,
      // API
      fetchMerrillStages,
      fetchMerrillClock,
      showStageDetail,
      saveMerrillClockConfig,
      doMerrillReevaluate,
      startAutoRefresh,
      stopAutoRefresh
    };
  };
})();