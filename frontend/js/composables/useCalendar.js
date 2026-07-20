// quant-calendar: useCalendar composable v3.0
(function() {
  const { ref, computed } = Vue;

  const calendarData = ref([]);
  const currentDate = ref(new Date().toISOString().split('T')[0]);
  const viewMode = ref('daily');
  const searchKeyword = ref('');
  const loading = ref(false);

  const filteredData = computed(() => {
    let data = calendarData.value;
    if (searchKeyword.value) {
      const kw = searchKeyword.value.toLowerCase();
      data = data.filter(d =>
        (d.name || '').toLowerCase().includes(kw) ||
        (d.code || '').toLowerCase().includes(kw)
      );
    }
    return data;
  });

  async function loadCalendar(opts = {}) {
    loading.value = true;
    try {
      const params = new URLSearchParams();
      if (opts.date) params.set('date', opts.date);
      if (opts.mode) params.set('mode', opts.mode);
      const res = await fetch(`/api/calendar?${params}`);
      const data = await res.json();
      calendarData.value = data.data || data || [];
      return calendarData.value;
    } catch (e) {
      console.error('[useCalendar] loadCalendar:', e);
      calendarData.value = [];
    } finally {
      loading.value = false;
    }
  }

  function navigateDate(delta) {
    const [y, m, d] = currentDate.value.split('-').map(Number);
    const next = new Date(y, m - 1, d + delta);
    currentDate.value = next.toISOString().split('T')[0];
  }

  function onDateChange(date) {
    currentDate.value = date;
  }

  function toggleCalendarView(mode) {
    viewMode.value = mode;
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useCalendar = {
    calendarData, currentDate, viewMode, searchKeyword, loading, filteredData,
    loadCalendar, navigateDate, onDateChange, toggleCalendarView,
    init() {
      return { calendarData, currentDate, viewMode, searchKeyword, loading, filteredData, loadCalendar, navigateDate, onDateChange, toggleCalendarView };
    }
  };
})();