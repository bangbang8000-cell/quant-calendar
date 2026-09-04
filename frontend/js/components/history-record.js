// quant-calendar: 历史记录行组件 (v3.16 / FR-3.16.7 16.9)
// ai-page 评估历史/问股历史三视图共 6 处重复行模板收敛到本组件。
// 用法：
//   <qc-history-record :item="record" type="history" :show-dims="true" time-format="time"></qc-history-record>
//   <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
// type: 'history' | 'chat'；timeFormat: 'time' | 'datetime'；showDims: 是否显示维度数。
(function () {
  const { computed, inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.HistoryRecord = {
    name: 'qc-history-record',
    props: {
      item: { type: Object, required: true },
      type: { type: String, default: 'history' },
      showDims: { type: Boolean, default: false },
      timeFormat: { type: String, default: 'time' },
    },
    template: `
      <div class="ai-history-item border-bottom-light" :class="{'selected': isSelected}">
        <div @click.stop="toggleSelect" class="history-checkbox">
          <div class="checkbox-inner" :class="{'checked': isSelected}">{{ isSelected ? '✓' : '' }}</div>
        </div>
        <div class="history-content" @click="view">
          <div class="history-header">
            <div class="stock-info">
              <span class="stock-code">{{ item.stock_code }}</span>
              <span class="stock-name">{{ item.stock_name }}</span>
              <template v-if="type === 'history'">
                <span @click.stop="toggleWatchlist(item.stock_code, item.stock_name)" tabindex="0" role="button"
                      :aria-label="watchState.label" :title="watchState.label" class="history-star"
                      @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">{{ watchState.icon }}</span>
                <span v-if="evaluatedCodes.has(item.stock_code)" title="已AI评估" class="history-flag">🤖</span>
                <span v-if="klineLoadedCodes.has(item.stock_code)" title="已加载K线" class="history-flag">📈</span>
              </template>
            </div>
            <span v-if="type === 'history'" class="score-badge-small" :style="{background: item.result.level_color + '20', color: item.result.level_color}">
              <span class="score-num">{{ fmtNum(item.result.total_score) }}</span>
              <span class="score-level">{{ item.result.level }}</span>
            </span>
            <span v-else class="score-badge-small chat-badge">
              <span class="score-num">{{ item.msg_count }}</span>
              <span class="score-level">条消息</span>
            </span>
          </div>
          <div class="history-footer">
            <span class="history-time">🕐 {{ timeText }}</span>
            <span class="history-provider">{{ providerIcon }} {{ providerText }}</span>
            <span v-if="type === 'history' && showDims" class="history-dims">🔬 {{ dimsText }}</span>
          </div>
        </div>
        <div class="history-actions">
          <el-button size="small" type="danger" text @click.stop="remove" aria-label="删除记录">🗑</el-button>
        </div>
      </div>
    `,
    setup(props) {
      const state = inject('qcState');
      if (!state) return {};

      const isSelected = computed(() =>
        // v3.16 (bugfix): selectedHistoryIds/selectedChatIds 为 ref，须取 .value
        props.type === 'history'
          ? state.selectedHistoryIds.value.includes(props.item.id)
          : state.selectedChatIds.value.includes(props.item.id));

      const watchState = computed(() => {
        // v3.16 (bugfix): watchlistCodes 为 computed ref，须取 .value（否则 .has 未定义→渲染 TypeError→行空白）
        const has = state.watchlistCodes.value.has(props.item.stock_code);
        return { icon: has ? '⭐' : '☆', label: has ? '取消收藏' : '加入收藏' };
      });

      const providerIcon = computed(() => (props.type === 'history' ? '🤖' : '💬'));
      const providerText = computed(() =>
        props.type === 'history'
          ? (props.item.result?.provider || '')
          : (props.item.first_msg || ''));
      const dimsText = computed(() => `${props.item.result?.dimensions?.length || 9}维度分析`);

      const timeText = computed(() => {
        const raw = props.type === 'history' ? props.item.evaluate_time : (props.item.created_at || '');
        if (!raw) return '';
        if (props.timeFormat === 'datetime') {
          return props.type === 'history'
            ? `${raw.split('T')[0]} ${(raw.split('T')[1] || '').split('.')[0]}`
            : `${raw.split('T')[0]} ${raw.split('T')[1]?.substring(0, 5) || ''}`;
        }
        return props.type === 'history'
          ? ((raw.split('T')[1] || '').split('.')[0] || raw)
          : (raw.split('T')[1]?.substring(0, 5) || '');
      });

      function toggleSelect() {
        if (props.type === 'history') state.toggleSelectHistory(props.item.id);
        else state.toggleSelectChat(props.item.id);
      }
      function view() {
        if (props.type === 'history') state.viewAiResult(props.item);
        else state.viewChatSession(props.item);
      }
      function remove() {
        if (props.type === 'history') state.deleteSingleHistory(props.item.id);
        else state.deleteChatSession(props.item.id);
      }
      function toggleWatchlist(code, name) { state.toggleWatchlist(code, name); }

      return {
        isSelected, watchState, providerIcon, providerText, dimsText, timeText,
        toggleSelect, view, remove, toggleWatchlist,
        keyClick: state.keyClick,
        fmtNum: state.fmtNum,
        evaluatedCodes: state.evaluatedCodes,
        klineLoadedCodes: state.klineLoadedCodes,
      };
    },
  };
})();
