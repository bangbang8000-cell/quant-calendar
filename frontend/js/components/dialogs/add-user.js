// quant-calendar: AddUserDialog 组件 (v3.11 / FR-3.11.2)
// 添加/编辑用户对话框 — 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.AddUserDialog = {
    name: 'qc-add-user-dialog',
    template: `
        <el-dialog v-model="showAddUser" :title="editingUser ? '编辑用户' : '添加用户'" width="440px">
            <el-form class="p-15-0-25" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="userForm.username" :disabled="!!editingUser" placeholder="输入用户名" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userForm.password" type="password" placeholder="留空则不修改" show-password />
                </el-form-item>
                <el-form-item label="角色">
                    <el-select class="w-select-sm" v-model="userForm.role">
                        <el-option label="管理员" value="admin" />
                        <el-option label="普通用户" value="user" />
                    </el-select>
                </el-form-item>
                <el-form-item label="所属组">
                    <el-select class="w-select-sm" v-model="userForm.group">
                        <el-option v-for="(g, gid) in allGroups" :key="gid" :label="g.name" :value="gid" :disabled="userForm.username === 'admin' || userForm.username === 'guest'" />
                    </el-select>
                </el-form-item>
                <el-form-item label="默认主题">
                    <el-select class="w-select-sm" v-model="userForm.theme">
                        <!-- T-6.3.4: 用户关联主题下拉须用 legacyThemes(8 主题, 与后端 THEMES 一致) —
                            修复前用 qcState.themes({light,dark}) 导致: ①选项只剩浅色/深色
                            ②存量用户 legacy 主题值不在选项中无法回显 ③保存 light/dark 破坏用户列表主题点 -->
                        <el-option v-for="(theme, key) in themeOptions" :key="key" :label="theme.name" :value="key" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="showAddUser = false">取消</el-button>
                <el-button type="primary" @click="saveUser" :loading="savingUser">保存</el-button>
            </template>
        </el-dialog>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      // T-6.3.4: 用户关联主题选项 = legacyThemes (8 主题, 与后端 user_manager.THEMES 键一致)。
      // 兜底回退 qcState.themes, 避免模块未装配时下拉空白。
      const legacyThemes = (window.__quantModules && window.__quantModules.themes
        && window.__quantModules.themes.legacyThemes) || {};
      const themeOptions = Object.keys(legacyThemes).length
        ? legacyThemes
        : (state.themes || { light: { name: '浅色' }, dark: { name: '深色' } });
      return { ...state, themeOptions };
    },
  };
})();
