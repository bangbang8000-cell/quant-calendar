// quant-calendar: useSystem composable v3.0
(function() {
  const { ref, computed } = Vue;

  const systemConfig = ref({});
  const users = ref([]);
  const groups = ref([]);
  const loading = ref(false);
  const error = ref('');

  async function loadSystemConfig() {
    loading.value = true;
    try {
      const res = await fetch('/api/system/config');
      const data = await res.json();
      systemConfig.value = data.data || data || {};
      return systemConfig.value;
    } catch (e) {
      console.error('[useSystem] loadSystemConfig:', e);
    } finally {
      loading.value = false;
    }
  }

  async function saveSystemConfig(config) {
    try {
      await fetch('/api/system/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      systemConfig.value = { ...systemConfig.value, ...config };
    } catch (e) {
      console.error('[useSystem] saveSystemConfig:', e);
    }
  }

  async function loadUsers() {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      users.value = data.data || data || [];
      return users.value;
    } catch (e) {
      console.error('[useSystem] loadUsers:', e);
    }
  }

  async function loadGroups() {
    try {
      const res = await fetch('/api/groups');
      const data = await res.json();
      groups.value = data.data || data || [];
      return groups.value;
    } catch (e) {
      console.error('[useSystem] loadGroups:', e);
    }
  }

  async function createUser(userData) {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      const data = await res.json();
      if (data.success || data.id) await loadUsers();
      return data;
    } catch (e) {
      console.error('[useSystem] createUser:', e);
    }
  }

  async function updateUser(username, updates) {
    try {
      await fetch(`/api/users/${username}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      await loadUsers();
    } catch (e) {
      console.error('[useSystem] updateUser:', e);
    }
  }

  async function deleteUser(username) {
    try {
      await fetch(`/api/users/${username}`, { method: 'DELETE' });
      users.value = users.value.filter(u => u.username !== username);
    } catch (e) {
      console.error('[useSystem] deleteUser:', e);
    }
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useSystem = {
    systemConfig, users, groups, loading, error,
    loadSystemConfig, saveSystemConfig, loadUsers, loadGroups, createUser, updateUser, deleteUser,
    init() {
      return { systemConfig, users, groups, loading, error, loadSystemConfig, saveSystemConfig, loadUsers, loadGroups, createUser, updateUser, deleteUser };
    }
  };
})();