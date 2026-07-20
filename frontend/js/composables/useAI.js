// quant-calendar: useAI composable v3.0
(function() {
  const { ref, computed } = Vue;

  const aiConfig = ref({});
  const aiHistory = ref([]);
  const evaluations = ref([]);
  const loading = ref(false);
  const evaluating = ref(false);
  const error = ref('');

  async function loadAIConfig() {
    try {
      const res = await fetch('/api/ai/config');
      const data = await res.json();
      aiConfig.value = data.data || data || {};
      return aiConfig.value;
    } catch (e) {
      console.error('[useAI] loadAIConfig:', e);
    }
  }

  async function loadAIHistory() {
    try {
      const res = await fetch('/api/ai/history');
      const data = await res.json();
      aiHistory.value = data.data || data || [];
      return aiHistory.value;
    } catch (e) {
      console.error('[useAI] loadAIHistory:', e);
    }
  }

  async function evaluate(params) {
    evaluating.value = true;
    error.value = '';
    try {
      const res = await fetch('/api/ai/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });
      const data = await res.json();
      evaluations.value = data.data || data || [];
      return evaluations.value;
    } catch (e) {
      error.value = e.message;
      console.error('[useAI] evaluate:', e);
    } finally {
      evaluating.value = false;
    }
  }

  async function saveAIConfig(config) {
    try {
      await fetch('/api/ai/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      aiConfig.value = { ...aiConfig.value, ...config };
    } catch (e) {
      console.error('[useAI] saveAIConfig:', e);
    }
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useAI = {
    aiConfig, aiHistory, evaluations, loading, evaluating, error,
    loadAIConfig, loadAIHistory, evaluate, saveAIConfig,
    init() {
      return { aiConfig, aiHistory, evaluations, loading, evaluating, error, loadAIConfig, loadAIHistory, evaluate, saveAIConfig };
    }
  };
})();