// quant-calendar v7.11 (FR-7.11-4): 参数锁定面板 — 消费 /api/strategies/{sid}/lock* (v7.7 交付的治理域)
// 语义: 锁定=记录参数快照哈希; 回测前 verify 发现不一致则 verdict=mismatch(由调用方决定是否阻断);
//       解锁为 admin 专属, 非 admin 会 403 —— 面板如实展示, 不隐藏入口也不伪造成功。
(function () {
  const { ref, computed, watch } = Vue;
  function S() { return window.__quantModules.v711; }

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.ParamLockPanel = {
    name: 'qc-param-lock',
    props: {
      sid: { type: String, default: '' },
      params: { type: Object, default: null },
    },
    template: `
      <div class="qc711-panel qc711-panel-inline">
        <div class="qc711-head">
          <div class="qc711-card-title"><qc-icon name="lock" :size="14" /> 参数锁定与追踪</div>
          <span class="qc711-hint">快照哈希锁定 · 回测前可校验 · 解锁限管理员</span>
        </div>

        <div v-if="!sid" class="qc711-empty">先在页面上方选择策略，锁定面板随后加载该策略的锁定状态。</div>

        <template v-else>
          <div class="qc711-kv">
            <span class="qc711-k">当前状态</span>
            <span class="qc711-v">
              <el-tag size="small" :type="lock.locked ? 'success' : 'info'">{{ lock.locked ? '已锁定' : '未锁定' }}</el-tag>
              <span v-if="lock.locked" class="qc711-dim">哈希 {{ shortHash }}</span>
            </span>
          </div>
          <div v-if="lock.locked" class="qc711-kv"><span class="qc711-k">锁定人</span><span class="qc711-v">{{ lock.operator || '—' }}</span></div>
          <div v-if="lock.locked" class="qc711-kv"><span class="qc711-k">锁定时间</span><span class="qc711-v">{{ lock.ts || '—' }}</span></div>
          <div v-if="lock.locked && lock.reason" class="qc711-kv"><span class="qc711-k">锁定原因</span><span class="qc711-v">{{ lock.reason }}</span></div>

          <div class="qc711-form">
            <el-input v-model="reason" size="small" placeholder="锁定/解锁原因（留痕）" class="qc711-w240" />
            <el-button size="small" type="primary" :loading="locking" @click="doLock">
              <qc-icon name="lock" :size="14" /> 锁定当前参数
            </el-button>
            <el-button size="small" :loading="verifying" @click="doVerify">
              <qc-icon name="search-check" :size="14" /> 校验一致
            </el-button>
            <el-button v-if="lock.locked" size="small" :loading="unlocking" @click="doUnlock">解锁</el-button>
          </div>

          <div v-if="verdict" class="qc711-kv">
            <span class="qc711-k">校验结果</span>
            <span class="qc711-v">
              <span :class="verdictClass">{{ verdictText }}</span>
              <span v-if="verdict.locked" class="qc711-dim">快照 {{ shortOf(verdict.locked_hash) }} / 当前 {{ shortOf(verdict.params_hash) }}</span>
            </span>
          </div>

          <div class="qc711-card-title qc711-mt12">审计流水（最近 {{ audit.length }} 条）</div>
          <el-table v-if="audit.length" :data="audit" size="small" border max-height="240">
            <el-table-column prop="ts" label="时间" width="160"></el-table-column>
            <el-table-column label="事件" width="90">
              <template slot-scope="a">
                <el-tag size="small" :type="eventTag(a.row.event_type)">{{ eventLabel(a.row.event_type) }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="哈希" width="110">
              <template slot-scope="a"><span class="qc711-mono">{{ shortOf(a.row.params_hash) }}</span></template>
            </el-table-column>
            <el-table-column prop="operator" label="操作人" width="110"></el-table-column>
            <el-table-column prop="reason" label="原因" show-overflow-tooltip></el-table-column>
          </el-table>
          <div v-else class="qc711-empty">暂无审计记录。锁定后此处会出现 lock / unlock / verify 事件。</div>
        </template>
      </div>
    `,
    setup(props) {
      const lock = ref({ locked: false, params_hash: '', operator: '', reason: '', ts: null });
      const audit = ref([]);
      const verdict = ref(null);
      const reason = ref('');
      const locking = ref(false);
      const unlocking = ref(false);
      const verifying = ref(false);

      const shortHash = computed(() => shortOf(lock.value && lock.value.params_hash));
      const verdictText = computed(() => {
        const v = verdict.value;
        if (!v) return '';
        if (v.verdict === 'unlocked') return '策略未锁定，本次校验不做阻断建议';
        if (v.verdict === 'match') return '参数与锁定快照一致，可复现';
        return '参数与锁定快照不一致（mismatch）——该次回测不可与锁定口径互认';
      });
      const verdictClass = computed(() => {
        const v = verdict.value && verdict.value.verdict;
        if (v === 'match') return 'qc711-tone-up';
        if (v === 'mismatch') return 'qc711-tone-down';
        return 'qc711-tone-mute';
      });

      function shortOf(h) { return h ? String(h).slice(0, 12) : '—'; }
      function eventLabel(e) {
        const m = { lock: '锁定', unlock: '解锁', verify: '校验' };
        return m[e] || e;
      }
      function eventTag(e) {
        if (e === 'lock') return 'success';
        if (e === 'unlock') return 'warning';
        return 'info';
      }

      // 待锁定/校验的参数: 优先取页面当前策略参数, 缺省为空对象
      function currentParams() {
        const p = props.params;
        return (p && typeof p === 'object') ? p : {};
      }

      async function load() {
        if (!props.sid) return;
        try {
          const j = await S().api('/api/strategies/' + encodeURIComponent(props.sid) + '/lock');
          lock.value = j || lock.value;
          const a = await S().api('/api/strategies/' + encodeURIComponent(props.sid) + '/lock/audit?limit=50');
          audit.value = (a && a.items) || [];
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      async function doLock() {
        locking.value = true;
        try {
          await S().post('/api/strategies/' + encodeURIComponent(props.sid) + '/lock',
            { params: currentParams(), reason: reason.value });
          ElementPlus.ElMessage.success('已锁定当前参数快照');
          await load();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          locking.value = false;
        }
      }

      async function doVerify() {
        verifying.value = true;
        try {
          verdict.value = await S().post('/api/strategies/' + encodeURIComponent(props.sid) + '/lock/verify',
            { params: currentParams() });
          await load();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          verifying.value = false;
        }
      }

      async function doUnlock() {
        unlocking.value = true;
        try {
          await S().del('/api/strategies/' + encodeURIComponent(props.sid) + '/lock?reason=' +
            encodeURIComponent(reason.value || ''));
          ElementPlus.ElMessage.success('已解锁');
          await load();
        } catch (e) {
          // 非管理员会 403 —— 如实提示, 不静默失败
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          unlocking.value = false;
        }
      }

      watch(() => props.sid, function (v) {
        verdict.value = null;
        if (v) load();
      }, { immediate: true });

      return {
        S: window.__quantModules.v711,
        lock, audit, verdict, reason, locking, unlocking, verifying,
        shortHash, verdictText, verdictClass,
        shortOf, eventLabel, eventTag, doLock, doVerify, doUnlock,
      };
    },
  };
})();
