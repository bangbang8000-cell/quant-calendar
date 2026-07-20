// quant-calendar: useDashboard composable v3.0
(function() {
  const { ref, computed } = Vue;

  const strategies = ref([]);
  const overviewData = ref({});
  const loading = ref(false);
  const error = ref('');

  async function loadDashboard() {
    loading.value = true;
    error.value = '';
    try {
      const res = await fetch('/api/dashboard');
      const data = await res.json();
      overviewData.value = data.data || data || {};
      return overviewData.value;
    } catch (e) {
      error.value = e.message;
      console.error('[useDashboard] loadDashboard:', e);
    } finally {
      loading.value = false;
    }
  }

  async function loadStrategies() {
    try {
      const res = await fetch('/api/strategies');
      const data = await res.json();
      strategies.value = data.data || data || [];
      return strategies.value;
    } catch (e) {
      console.error('[useDashboard] loadStrategies:', e);
    }
  }

  const statCards = computed(() => {
    const ov = overviewData.value;
    return [
      { label: '策略总数', value: ov.total_strategies ?? strategies.value.length ?? 0, icon: '📊' },
      { label: '今日事件', value: ov.today_events ?? 0, icon: '📅' },
      { label: '自选股', value: ov.watchlist_count ?? 0, icon: '⭐' },
      { label: 'AI评估', value: ov.ai_evals ?? 0, icon: '🤖' },
    ];
  });

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useDashboard = {
    strategies, overviewData, loading, error, statCards,
    loadDashboard, loadStrategies,
    init() {
      return { strategies, overviewData, loading, error, statCards, loadDashboard, loadStrategies };
    }
  };
})();