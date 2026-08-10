// quant-calendar: 用户/分组域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：用户管理 + 分组/成员管理（用户组权限、菜单可见性、成员增删）。
// 工厂模式：window.__quantModules.users.create(deps) → 返回该域全部状态与函数。
// deps（共享依赖，由 app-logic 传入）:
//   currentUser <ref>  |  applyTheme <fn>  |  allMenuDefs <array>  |  loadGroupConfig <fn>
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules.users = {
    create(deps) {
      const { ref, computed } = Vue;
      const { currentUser, applyTheme, allMenuDefs, loadGroupConfig } = deps;

      // ===== 用户管理（列表/搜索/分组过滤）=====
      const userList = ref([]);
      const userSearch = ref('');
      const groupFilter = ref('');
      const userPageTab = ref('users');
      const expandedGroups = ref({});
      const addMemberGroupMap = ref({});
      const filteredUsers = computed(() => {
        let list = userList.value;
        if (groupFilter.value) {
          list = list.filter(u => (u.group || u.role) === groupFilter.value);
        }
        if (!userSearch.value) return list;
        const kw = userSearch.value.toLowerCase();
        return list.filter(u => u.username.toLowerCase().includes(kw));
      });
      function toggleGroupExpand(gid) {
        expandedGroups.value = { ...expandedGroups.value, [gid]: !expandedGroups.value[gid] };
      }
      async function removeMemberFromGroupInline(username, gid) {
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups/' + gid + '/members/' + username, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
          });
          const data = await res.json();
          if (data.success) {
            await loadUsers();
            await loadAllGroups();
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch(e) { ElementPlus.ElMessage.error('移除失败'); }
      }
      async function addMemberToGroupInline(gid) {
        const username = addMemberGroupMap.value[gid];
        if (!username) return;
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups/' + gid + '/members', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify({ username })
          });
          const data = await res.json();
          if (data.success) {
            await loadUsers();
            await loadAllGroups();
            addMemberGroupMap.value = { ...addMemberGroupMap.value, [gid]: '' };
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch(e) { ElementPlus.ElMessage.error('添加失败'); }
      }
      async function changeUserGroup(user, newGroup) {
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/users/' + user.username, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify({ group: newGroup })
          });
          const data = await res.json();
          if (data.success) {
            await loadUsers();
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch(e) { ElementPlus.ElMessage.error('分组变更失败'); }
      }
      const showAddUser = ref(false);
      const editingUser = ref(null);
      const userForm = ref({ username: '', password: '', role: 'user', theme: 'tech-blue' });
      const savingUser = ref(false);

      // ===== 分组管理 =====
      const editingGroup = ref(null);
      const menuConfigDialog = ref(false);
      const memberDialog = ref(false);
      const groupEditForm = ref({ name: '', description: '', visible_menus: {}, visible_sub_pages: {} });
      const subPageCache = ref({});  // cache sub-page states when parent is toggled off
      const showAddGroup = ref(false);
      const addGroupForm = ref({ group_id: '', name: '', description: '' });
      const savingGroup = ref(false);
      const groupMembers = ref([]);
      const addMemberUsername = ref('');
      const selectedMemberGroup = ref('');
      const subPageSectionExpanded = ref({});

      function toggleSubPageSection(key) {
        subPageSectionExpanded.value = { ...subPageSectionExpanded.value, [key]: !subPageSectionExpanded.value[key] };
      }

      function getGroupMemberCount(gid) {
        if (!userList.value || !userList.value.length) return 0;
        return userList.value.filter(u => (u.group || u.role) === gid).length;
      }

      function getMenuEnabledCount(g) {
        const menus = g?.visible_menus || {};
        return Object.values(menus).filter(Boolean).length;
      }

      const groupCount = computed(() => Object.keys(allGroups.value).length);

      // ===== 成员管理 =====
      async function openMemberManager(gid) {
        selectedMemberGroup.value = gid;
        memberDialog.value = true;
        await loadGroupMembers(gid);
      }

      async function loadGroupMembers(gid) {
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups/' + gid + '/members', {
            headers: { 'Authorization': 'Bearer ' + token }
          });
          const data = await res.json();
          if (data.success) groupMembers.value = data.members || [];
        } catch(e) { groupMembers.value = []; console.error('[loadGroupMembers]', e); }
      }

      async function addMemberToGroup() {
        if (!addMemberUsername.value || !selectedMemberGroup.value) return;
        savingGroup.value = true;
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups/' + selectedMemberGroup.value + '/members', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify({ username: addMemberUsername.value })
          });
          const data = await res.json();
          if (data.success) {
            await loadGroupMembers(selectedMemberGroup.value);
            await loadUsers();
            addMemberUsername.value = '';
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch(e) { ElementPlus.ElMessage.error('添加失败'); }
        finally { savingGroup.value = false; }
      }

      async function removeMemberFromGroup(username) {
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups/' + selectedMemberGroup.value + '/members/' + username, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
          });
          const data = await res.json();
          if (data.success) {
            await loadGroupMembers(selectedMemberGroup.value);
            await loadUsers();
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch(e) { ElementPlus.ElMessage.error('移除失败'); }
      }

      const availableUsersForGroup = computed(() => {
        if (!userList.value) return [];
        const currentMembers = new Set(groupMembers.value.map(m => m.username));
        return userList.value.filter(u =>
          u.username !== 'admin' && u.username !== 'guest' && !currentMembers.has(u.username)
        );
      });

      function onParentToggle(mk) {
        const val = groupEditForm.value.visible_menus[mk];
        const menu = allMenuDefs.find(m => m.key === mk);
        if (!menu) return;
        if (!val) {
          // Turning OFF: save current state to cache, set all sub-pages off
          const cached = {};
          menu.subPages.forEach(sp => {
            const fullKey = mk + '.' + sp;
            cached[sp] = groupEditForm.value.visible_sub_pages[fullKey];
            groupEditForm.value.visible_sub_pages[fullKey] = false;
          });
          subPageCache.value[mk] = cached;
        } else {
          // Turning ON: restore from cache, or default all true
          const cached = subPageCache.value[mk] || {};
          menu.subPages.forEach(sp => {
            const fullKey = mk + '.' + sp;
            groupEditForm.value.visible_sub_pages[fullKey] = cached[sp] !== undefined ? cached[sp] : true;
          });
        }
      }

      function openMenuConfig(gid) {
        editingGroup.value = gid;
        const g = allGroups.value[gid] || {};
        groupEditForm.value = {
          name: g.name || gid,
          description: g.description || '',
          visible_menus: { ...(g.visible_menus || {}) },
          visible_sub_pages: { ...(g.visible_sub_pages || {}) }
        };
        // Init cache from current state
        subPageCache.value = {};
        allMenuDefs.forEach(m => {
          const cached = {};
          m.subPages.forEach(sp => {
            cached[sp] = groupEditForm.value.visible_sub_pages[m.key + '.' + sp];
          });
          subPageCache.value[m.key] = cached;
        });
        menuConfigDialog.value = true;
      }

      async function saveMenuConfig() {
        savingGroup.value = true;
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups/' + editingGroup.value, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify(groupEditForm.value)
          });
          const data = await res.json();
          if (data.success) {
            menuConfigDialog.value = false;
            editingGroup.value = null;
            await loadAllGroups();
            await loadGroupConfig();
          } else {
            ElementPlus.ElMessage.error(data.message || '保存失败');
          }
        } catch(e) { ElementPlus.ElMessage.error('保存失败'); }
        finally { savingGroup.value = false; }
      }

      async function deleteGroupConfig(gid) {
        try {
          if (!confirm('确定删除分组「' + (allGroups.value[gid]?.name || gid) + '」吗？')) return;
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups/' + gid, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
          });
          const data = await res.json();
          if (data.success) {
            await loadAllGroups();
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch(e) { ElementPlus.ElMessage.error('删除失败'); }
      }

      async function createGroup() {
        if (!addGroupForm.value.group_id) return;
        savingGroup.value = true;
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/groups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify(addGroupForm.value)
          });
          const data = await res.json();
          if (data.success) {
            showAddGroup.value = false;
            addGroupForm.value = { group_id: '', name: '', description: '' };
            await loadAllGroups();
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch(e) { ElementPlus.ElMessage.error('创建失败'); }
        finally { savingGroup.value = false; }
      }

      // ===== 用户管理 (v1.9.2: 用户组支持) =====
      const allGroups = ref({});
      async function loadAllGroups() {
        try {
          const token = localStorage.getItem('quant_token');
          if (!token) return;
          const res = await fetch('/api/groups', { headers: { 'Authorization': 'Bearer ' + token } });
          if (res.ok) {
            const data = await res.json();
            allGroups.value = data.groups || {};
          }
        } catch(e) { console.warn('loadAllGroups:', e); }
      }

      function getGroupName(groupId) {
        return allGroups.value[groupId]?.name || groupId || '--';
      }

      async function loadUsers() {
        try {
          const token = localStorage.getItem('quant_token');
          if (!token) { userList.value = []; return; }
          const headers = { 'Authorization': `Bearer ${token}` };
          const res = await fetch('/api/users', { headers });
          if (res.status === 401) {
            console.warn('[loadUsers] 401, clearing session');
            localStorage.removeItem('quant_user');
            localStorage.removeItem('quant_token');
            currentUser.value = null;
            return;
          }
          const data = await res.json();
          userList.value = data.users || [];
        } catch (e) { userList.value = []; console.error('[loadUsers] error:', e); }
      }

      function editUser(user) {
        editingUser.value = user;
        userForm.value = {
          username: user.username,
          password: '',
          role: user.role,
          theme: user.theme || 'tech-blue',
          group: user.group || user.role
        };
        showAddUser.value = true;
      }

      async function saveUser() {
        if (!userForm.value.username) return;
        savingUser.value = true;
        try {
          const token = localStorage.getItem('quant_token');
          const method = editingUser.value ? 'PUT' : 'POST';
          const url = editingUser.value
            ? `/api/users/${userForm.value.username}`
            : '/api/users';
          const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(userForm.value)
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success('保存成功');
            // 如果编辑的是当前用户且主题变更，同步更新本地状态
            if (currentUser.value && userForm.value.username === currentUser.value.username) {
              const newTheme = userForm.value.theme;
              if (newTheme && newTheme !== currentUser.value.theme) {
                currentUser.value.theme = newTheme;
                localStorage.setItem('quant_user', JSON.stringify(currentUser.value));
                applyTheme(newTheme);
              }
            }
            showAddUser.value = false;
            editingUser.value = null;
            await loadUsers();
          } else {
            ElementPlus.ElMessage.error(data.message);
          }
        } catch (e) {
          ElementPlus.ElMessage.error('操作失败');
        } finally {
          savingUser.value = false;
        }
      }

      async function deleteUser(username) {
        try {
          await ElementPlus.ElMessageBox.confirm('确定删除该用户?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          });
          const token = localStorage.getItem('quant_token');
          const res = await fetch(`/api/users/${username}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success('删除成功');
            await loadUsers();
          }
        } catch(e) { console.error('[deleteUser]', e); }
      }

      async function toggleUserEnabled(user) {
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch(`/api/users/${user.username}/toggle-enabled`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ enabled: user.enabled })
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success('状态已更新');
          } else {
            ElementPlus.ElMessage.error(data.message || '操作失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('操作失败');
        }
      }

      async function resetUserPassword(user) {
        try {
          const { value: newPassword } = await ElementPlus.ElMessageBox.prompt(
            `请输入用户 "${user.username}" 的新密码`,
            '重置密码',
            { confirmButtonText: '确定', cancelButtonText: '取消', inputType: 'password' }
          );
          if (newPassword) {
            const token = localStorage.getItem('quant_token');
            const res = await fetch(`/api/users/${user.username}/reset-password`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
              body: JSON.stringify({ new_password: newPassword })
            });
            const data = await res.json();
            if (data.success) {
              ElementPlus.ElMessage.success('密码已重置');
            } else {
              ElementPlus.ElMessage.error(data.message || '重置失败');
            }
          }
        } catch (e) { /* 用户取消 */ }
      }

      return {
        // 用户管理
        userList, userSearch, groupFilter, userPageTab, expandedGroups, addMemberGroupMap,
        filteredUsers, toggleGroupExpand, removeMemberFromGroupInline, addMemberToGroupInline,
        changeUserGroup, showAddUser, editingUser, userForm, savingUser,
        // 分组管理
        editingGroup, menuConfigDialog, memberDialog, groupEditForm, subPageCache,
        showAddGroup, addGroupForm, savingGroup, groupMembers, addMemberUsername,
        selectedMemberGroup, subPageSectionExpanded, toggleSubPageSection,
        getGroupMemberCount, getMenuEnabledCount, groupCount,
        openMemberManager, loadGroupMembers, addMemberToGroup, removeMemberFromGroup,
        availableUsersForGroup, onParentToggle, openMenuConfig, saveMenuConfig,
        deleteGroupConfig, createGroup,
        // 用户组
        allGroups, getGroupName, loadAllGroups, loadUsers, editUser, saveUser, deleteUser,
        toggleUserEnabled, resetUserPassword,
      };
    }
  };
})();
