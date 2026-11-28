// ⚠ 本文件由 scripts/gen_el_registry.py 生成 — 请勿手改。
// 模板里新增 el-* 组件后必须重新生成：python3 scripts/gen_el_registry.py
// 否则该组件不会注册，运行期渲染为空元素（不报错，只在 console 留 warn）。
//
// v7.18 (FR-802): Element Plus 按需注册，替代 app.use(ElementPlus) 全量安装。
// 1) 页面模板是运行期字符串模板，无法被 unplugin-vue-components 编译期解析 → 只能全局注册；
// 2) 深度导入（es/components/x/index.mjs）才能 tree-shake，从 barrel 具名导入实测无效。
import { ElAlert } from 'element-plus/es/components/alert/index'
import { ElAutocomplete } from 'element-plus/es/components/autocomplete/index'
import { ElButton } from 'element-plus/es/components/button/index'
import { ElCheckbox, ElCheckboxGroup } from 'element-plus/es/components/checkbox/index'
import { ElCollapse, ElCollapseItem } from 'element-plus/es/components/collapse/index'
import { provideGlobalConfig } from 'element-plus/es/components/config-provider/src/hooks/use-global-config'
import { ElDatePicker } from 'element-plus/es/components/date-picker/index'
import { ElDialog } from 'element-plus/es/components/dialog/index'
import { ElDrawer } from 'element-plus/es/components/drawer/index'
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus/es/components/dropdown/index'
import { ElForm, ElFormItem } from 'element-plus/es/components/form/index'
import { ElIcon } from 'element-plus/es/components/icon/index'
import { ElInputNumber } from 'element-plus/es/components/input-number/index'
import { ElInput } from 'element-plus/es/components/input/index'
import { ElLoading } from 'element-plus/es/components/loading/index'
import { ElPagination } from 'element-plus/es/components/pagination/index'
import { ElProgress } from 'element-plus/es/components/progress/index'
import { ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus/es/components/radio/index'
import { ElOption, ElOptionGroup, ElSelect } from 'element-plus/es/components/select/index'
import { ElSlider } from 'element-plus/es/components/slider/index'
import { ElSwitch } from 'element-plus/es/components/switch/index'
import { ElTable, ElTableColumn } from 'element-plus/es/components/table/index'
import { ElTag } from 'element-plus/es/components/tag/index'
import { ElTimePicker } from 'element-plus/es/components/time-picker/index'
import { ElTooltip } from 'element-plus/es/components/tooltip/index'

const COMPONENTS = [
  ['ElAlert', ElAlert],
  ['ElAutocomplete', ElAutocomplete],
  ['ElButton', ElButton],
  ['ElCheckbox', ElCheckbox],
  ['ElCheckboxGroup', ElCheckboxGroup],
  ['ElCollapse', ElCollapse],
  ['ElCollapseItem', ElCollapseItem],
  ['ElDatePicker', ElDatePicker],
  ['ElDialog', ElDialog],
  ['ElDrawer', ElDrawer],
  ['ElDropdown', ElDropdown],
  ['ElDropdownItem', ElDropdownItem],
  ['ElDropdownMenu', ElDropdownMenu],
  ['ElForm', ElForm],
  ['ElFormItem', ElFormItem],
  ['ElIcon', ElIcon],
  ['ElInput', ElInput],
  ['ElInputNumber', ElInputNumber],
  ['ElOption', ElOption],
  ['ElOptionGroup', ElOptionGroup],
  ['ElPagination', ElPagination],
  ['ElProgress', ElProgress],
  ['ElRadio', ElRadio],
  ['ElRadioButton', ElRadioButton],
  ['ElRadioGroup', ElRadioGroup],
  ['ElSelect', ElSelect],
  ['ElSlider', ElSlider],
  ['ElSwitch', ElSwitch],
  ['ElTable', ElTable],
  ['ElTableColumn', ElTableColumn],
  ['ElTag', ElTag],
  ['ElTimePicker', ElTimePicker],
  ['ElTooltip', ElTooltip],
]

export function installEl(app, locale) {
  COMPONENTS.forEach(([name, comp]) => app.component(name, comp))
  app.use(ElLoading)
  // locale 注入：与原 app.use(ElementPlus, {locale}) 等效，但不触发全量组件安装。
  if (locale) provideGlobalConfig({ locale }, app, true)
}

export const EL_REGISTRY_META = {
  components: 33,
  directives: ['loading'],
  tags: ['el-alert', 'el-autocomplete', 'el-button', 'el-checkbox', 'el-checkbox-group', 'el-collapse', 'el-collapse-item', 'el-date-picker', 'el-dialog', 'el-drawer', 'el-dropdown', 'el-dropdown-item', 'el-dropdown-menu', 'el-form', 'el-form-item', 'el-icon', 'el-input', 'el-input-number', 'el-option', 'el-option-group', 'el-pagination', 'el-progress', 'el-radio', 'el-radio-button', 'el-radio-group', 'el-select', 'el-slider', 'el-switch', 'el-table', 'el-table-column', 'el-tag', 'el-time-picker', 'el-tooltip'],
}
