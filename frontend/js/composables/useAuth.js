// quant-calendar: useAuth composable v3.0
(function() {
  const { ref, computed } = Vue;

  const currentUser = ref(null);
  const token = ref(localStorage.getItem('quant_token') || '');
  const loading = ref(false);
  const isLoggedIn = computed(() => !!token.value && !!currentUser.value);

  async function handleLogin(username, password) {
    loading.value = true;
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.token) {
        token.value = data.token;
        localStorage.setItem('quant_token', data.token);
        currentUser.value = data.user;
        localStorage.setItem('quant_user', JSON.stringify(data.user));
        return true;
      }
      return false;
    } finally {
      loading.value = false;
    }
  }

  async function handleGuestLogin() {
    loading.value = true;
    try {
      const res = await fetch('/api/guest-login', { method: 'POST' });
      const data = await res.json();
      if (data.token) {
        token.value = data.token;
        localStorage.setItem('quant_token', data.token);
        currentUser.value = data.user;
        localStorage.setItem('quant_user', JSON.stringify(data.user));
        return true;
      }
      return false;
    } finally {
      loading.value = false;
    }
  }

  function handleLogout() {
    token.value = '';
    currentUser.value = null;
    localStorage.removeItem('quant_token');
    localStorage.removeItem('quant_user');
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useAuth = {
    currentUser, token, loading, isLoggedIn,
    handleLogin, handleGuestLogin, handleLogout,
    init() {
      return { currentUser, token, loading, isLoggedIn, handleLogin, handleGuestLogin, handleLogout };
    }
  };
})();