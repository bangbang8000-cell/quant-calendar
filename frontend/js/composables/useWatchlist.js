// quant-calendar: useWatchlist composable v3.0
(function() {
  const { ref, computed } = Vue;

  const stocks = ref([]);
  const loading = ref(false);
  const searchKeyword = ref('');

  const filteredStocks = computed(() => {
    if (!searchKeyword.value) return stocks.value;
    const kw = searchKeyword.value.toLowerCase();
    return stocks.value.filter(s =>
      (s.name || '').toLowerCase().includes(kw) ||
      (s.code || '').toLowerCase().includes(kw)
    );
  });

  async function loadWatchlist() {
    loading.value = true;
    try {
      const res = await fetch('/api/watchlist');
      const data = await res.json();
      stocks.value = data.data || data || [];
      return stocks.value;
    } catch (e) {
      console.error('[useWatchlist] loadWatchlist:', e);
    } finally {
      loading.value = false;
    }
  }

  async function addStock(stock) {
    try {
      const res = await fetch('/api/watchlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stock)
      });
      const data = await res.json();
      if (data.success || data.id) await loadWatchlist();
      return data;
    } catch (e) {
      console.error('[useWatchlist] addStock:', e);
    }
  }

  async function removeStock(stockId) {
    try {
      await fetch(`/api/watchlist/${stockId}`, { method: 'DELETE' });
      stocks.value = stocks.value.filter(s => s.id !== stockId && s._id !== stockId);
    } catch (e) {
      console.error('[useWatchlist] removeStock:', e);
    }
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useWatchlist = {
    stocks, loading, searchKeyword, filteredStocks,
    loadWatchlist, addStock, removeStock,
    init() {
      return { stocks, loading, searchKeyword, filteredStocks, loadWatchlist, addStock, removeStock };
    }
  };
})();