// quant-calendar: MenuConfigDialog 组件 (v3.11 / FR-3.11.2)
// 菜单访问授权对话框 — 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.MenuConfigDialog = {
    name: 'qc-menu-config-dialog',
    template: `
        <el-dialog v-model="menuConfigDialog" :title="'⚙️ ' + (allGroups[editingGroup]?.name || '') + ' — 菜单访问授权'" width="600px">
            <div style="padding: 15px 0;">
                <el-form label-width="60px" size="small">
                    <el-form-item label="组名">
                        <el-input v-model="groupEditForm.name" placeholder="组名" />
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="groupEditForm.description" placeholder="组功能描述" />
                    </el-form-item>
                </el-form>
                <div style="margin-bottom: 8px; font-weight: 600; font-size: var(--font-sm);">菜单访问授权</div>
                <div v-for="menu in allMenuDefs" :key="menu.key" style="margin-bottom: 6px; border: 1px solid var(--border-light); border-radius: 8px; overflow: hidden;">
                    <div @click="toggleSubPageSection(menu.key)" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: var(--bg-hover); cursor: pointer; user-select: none; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
                            <el-switch v-model="groupEditForm.visible_menus[menu.key]" @change="onParentToggle(menu.key)" size="small" @click.stop />
                            <span style="font-weight: 600; font-size: var(--font-sm); white-space: nowrap;">{{ menu.name }}</span>
                            <span v-if="!groupEditForm.visible_menus[menu.key]" style="font-size: 10px; color: var(--text-tertiary); white-space: nowrap;">子项已关</span>
                        </div>
                        <span :style="{transform: subPageSectionExpanded[menu.key] ? 'rotate(180deg)' : '', transition: 'transform 0.2s', fontSize: '12px', flexShrink: 0}">▼</span>
                    </div>
                    <div v-if="subPageSectionExpanded[menu.key]" style="padding: 8px 14px 10px 40px; display: flex; gap: 8px; flex-wrap: wrap;"
                        :style="{opacity: groupEditForm.visible_menus[menu.key] ? 1 : 0.4}">
                        <el-switch v-for="sp in menu.subPages" :key="sp"
                            v-model="groupEditForm.visible_sub_pages[menu.key + '.' + sp]"
                            :active-text="subPageNames[sp] || sp"
                            :disabled="!groupEditForm.visible_menus[menu.key]"
                            size="small" />
                    </div>
                </div>
            </div>
            <template #footer>
                <el-button @click="menuConfigDialog = false">取消</el-button>
                <el-button type="primary" @click="saveMenuConfig" :loading="savingGroup">💾 保存</el-button>
            </template>
        </el-dialog>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      return { ...state };
    },
  };
})();
