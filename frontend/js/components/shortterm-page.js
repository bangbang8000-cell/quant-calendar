// quant-calendar: ShorttermPage 组件 (V5.2.0 T-5.2.09)
// 短线复盘页: 涨停复盘(三池+连板梯队) / 龙虎榜 两子页
// 数据诚实性: 接口失败字段为 null → 显示"—"而非 0; 空池是合法结果(空表格)
(function () {
  const { inject, ref, onMounted, computed, nextTick } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.ShorttermPage = {
    name: 'qc-shortterm-page',
    template: window.__quantModules.shorttermPage.view,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      const currentPage = state.currentPage;
      const currentSubPage = state.currentSubPage;

      // V5.2.4 (T-5.2.41): 7 子页共享同一「交易日」(原 poolDate/lhbDate/overviewDate/intradayDate 合并)
      const shortDate = ref('');
      const pools = ref(null);
      const poolLoading = ref(false);
      const poolError = ref(false);
      const poolErrTitle = ref('数据加载失败');
      const poolErrDesc = ref('请检查服务后重试');
      const ztBoardFilter = ref(null);   // V5.2.4 (T-5.2.45): 梯队图点击选中的连板档
      const lhbRows = ref(null);
      const lhbLoading = ref(false);
      const lhbError = ref(false);
      const lhbErrTitle = ref('数据加载失败');
      const lhbErrDesc = ref('请检查服务后重试');
      // V6.5 (PRD-6.5 F2): 数据源降级原因(available=false 时后端透出 reason)
      const lhbReason = ref(null);
      // V5.2.4 (T-5.2.54): 长表分页(>200 行启用, 每页 50)
      const lhbPage = ref(1);
      const PAGE_SIZE = 50;
      const lhbPageRows = computed(function () {
        const rows = lhbRows.value || [];
        if (rows.length <= 200) return rows;
        const start = (lhbPage.value - 1) * PAGE_SIZE;
        return rows.slice(start, start + PAGE_SIZE);
      });
      const overview = ref(null);
      const overviewLoading = ref(false);
      const overviewError = ref(false);
      const overviewErrTitle = ref('数据加载失败');
      const overviewErrDesc = ref('请检查服务后重试');
      // V5.15 (F7): 复盘日期列表 (近 N 日核心指标摘要)
      const dateList = ref([]);
      const dateListLoading = ref(false);
      async function loadDateList() {
        dateListLoading.value = true;
        try {
          const res = await cachedGet('/api/shortterm/dates/summary', false);
          if (res && res.success) dateList.value = res.dates || [];
        } catch (e) {
          dateList.value = [];
        } finally {
          dateListLoading.value = false;
        }
      }
      // 左列表点击 → 切换日期并刷新右看板
      function pickDate(d) {
        if (d === shortDate.value) return;
        shortDate.value = d;
        loadOverview(true);
      }
      const sectorType = ref('行业资金流');
      const sectorIndicator = ref('今日');
      const sectorKeyword = ref('');   // V5.2.4 (T-5.2.43): 板块资金搜索/联动预选
      const sectorRows = ref(null);
      const sectorPage = ref(1);       // V5.2.4 (T-5.2.54): 长表分页
      const sectorLoading = ref(false);
      const sectorError = ref(false);
      const sectorErrTitle = ref('数据加载失败');
      const sectorErrDesc = ref('请检查服务后重试');
      const sectorFlowSource = ref('');
      const review = ref(null);
      const reviewRunning = ref(false);
      const intradaySnapshots = ref(null);
      const intradayLoading = ref(false);
      const intradayError = ref(false);   // 6.3.1 (T-6.3.1.3): 盘中快照取数失败标志 (真实置位, 供四态面板承接)
      const intradayCollecting = ref(false);
      const chatQuestion = ref('');
      const chatAnswer = ref('');
      const chatLoading = ref(false);

      function authHeaders() {
        const t = localStorage.getItem('quant_token') || '';
        return t ? { 'Authorization': 'Bearer ' + t, 'Content-Type': 'application/json' }
                 : { 'Content-Type': 'application/json' };
      }

      // ─── V5.2.3 高效加载: 客户端 TTL 缓存 + 竞态防护 ───
      // V6.9.3 (F8.2/H6): 缓存容量上限 50 条 + LRU 淘汰 (防长会话内存增长)
      const _cache = {};
      const _cacheOrder = [];
      const CACHE_MAX = 50;
      const CACHE_TTL = 60 * 1000;   // 60s 内同 URL 不重拉(切子页/回退秒开)
      let _reqSeq = 0;               // 请求序号: 旧响应丢弃, 防快速切换覆盖新数据
      // V5.2.5 (T-5.2.57): overview/review 并行加载共享 _reqSeq 会互相覆盖导致看板永远 loading → 独立序号
      let _overviewSeq = 0;
      let _reviewSeq = 0;

      function cachedGet(url, force) {
        const now = Date.now();
        const hit = _cache[url];
        if (!force && hit && now - hit.ts < CACHE_TTL) return Promise.resolve(hit.data);
        return fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); })
          .then(function (data) {
            if (!_cache[url]) _cacheOrder.push(url);
            _cache[url] = { ts: Date.now(), data: data };
            if (_cacheOrder.length > CACHE_MAX) {
              const oldest = _cacheOrder.shift();
              delete _cache[oldest];
            }
            return data;
          });
      }

      async function loadPools(force) {
        const seq = ++_reqSeq;
        poolLoading.value = true;
        poolError.value = false;
        try {
          const url = '/api/shortterm/pools' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;   // 竞态: 已切换到新请求, 丢弃
          if (res && res.success) {
            pools.value = res;
            nextTick(renderLadderChart);
          } else if (res && res.detail) {
            // V5.2.0-fix: 未登录/token 过期(401) 时后端返回 {detail}, 提示登录而非笼统"加载失败"
            poolError.value = true;
            poolErrTitle.value = String(res.detail);
            poolErrDesc.value = '请先登录后再查看';
          } else {
            poolError.value = true;
            poolErrTitle.value = '数据加载失败';
            poolErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _reqSeq) return;
          poolError.value = true;
          poolErrTitle.value = '数据加载失败';
          poolErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _reqSeq) poolLoading.value = false;
        }
      }

      async function loadLhb(force) {
        const seq = ++_reqSeq;
        lhbLoading.value = true;
        lhbError.value = false;
        try {
          const url = '/api/shortterm/lhb' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;
          if (res && res.success) {
            lhbRows.value = Array.isArray(res.rows) ? res.rows : null;
            // V6.5 (PRD-6.5 F2): 数据源降级原因透出; available=false 时不静默
            lhbReason.value = res.available === false ? (res.reason || null) : null;
            lhbPage.value = 1;
          } else if (res && res.detail) {
            // V5.2.0-fix: 401 提示登录
            lhbError.value = true;
            lhbErrTitle.value = String(res.detail);
            lhbErrDesc.value = '请先登录后再查看';
          } else {
            lhbError.value = true;
            lhbErrTitle.value = '数据加载失败';
            lhbErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _reqSeq) return;
          lhbError.value = true;
          lhbErrTitle.value = '数据加载失败';
          lhbErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _reqSeq) lhbLoading.value = false;
        }
      }

      const ladderText = computed(function () {
        const tiers = pools.value && pools.value.ladder && pools.value.ladder.tiers;
        if (!tiers || !Object.keys(tiers).length) return '—';
        return Object.keys(tiers).sort(function (a, b) { return a - b; })
          .map(function (b) { return b + '板:' + tiers[b]; }).join(' ');
      });
      // V5.2.4 (T-5.2.45): 涨停池按梯队选中档过滤(点击梯队图切换)
      const filteredZt = computed(function () {
        const rows = (pools.value && pools.value.zt) || [];
        if (!ztBoardFilter.value) return rows;
        return rows.filter(function (r) { return r.boards === ztBoardFilter.value; });
      });
      function clearBoardFilter() { ztBoardFilter.value = null; }
      // 6.3.1 (T-6.3.1.3): 三池皆空判定 — 真实数组/梯队规模, 供 ztpool 空态承接
      const hasAnyPool = computed(function () {
        const p = pools.value;
        if (!p) return false;
        const tiers = p.ladder && p.ladder.tiers ? Object.keys(p.ladder.tiers).length : 0;
        return ((p.zt || []).length + (p.zb || []).length + (p.dt || []).length + tiers) > 0;
      });

      // V5.2.1 复盘看板: 派生展示值(硬指标, 数据诚实性: 缺失显示—)
      const moneySource = computed(function () {
        const m = overview.value && overview.value.emotion && overview.value.emotion.money_effect;
        if (!m || !m.available) return '—';
        if (m.source === 'settled') return '定稿记录';
        if (m.source === 'realtime') return m.partial ? '实时(样本不全)' : '实时';
        return '—';
      });
      const promotion1to2 = computed(function () {
        const t = overview.value && overview.value.emotion && overview.value.emotion.promotion
          && overview.value.emotion.promotion.tiers && overview.value.emotion.promotion.tiers['1进2'];
        return t ? t.rate : null;
      });
      const cycleScore = computed(function () {
        const s = overview.value && overview.value.emotion && overview.value.emotion.sentiment_cycle;
        return s && s.available && s.current_score != null ? s.current_score.toFixed(2) : '—';
      });
      const cycleTrend = computed(function () {
        const s = overview.value && overview.value.emotion && overview.value.emotion.sentiment_cycle;
        if (!s || !s.available) return '—';
        return (s.trend || '—') + (s.day_n != null ? ' · 距低谷' + s.day_n + '天' : '');
      });
      // V5.2.6 (T-5.2.50): 情绪/事实指标降级信封 reason 汇总(诚实性: 失败原因可见)
      const emotionNotice = computed(function () {
        const e = overview.value && overview.value.emotion;
        if (!e) return '';
        const reasons = [];
        for (const k of ['money_effect', 'promotion', 'consec_premium', 'sentiment_cycle']) {
          const v = e[k];
          if (v && v.available === false && v.reason) reasons.push(String(v.reason).replace(/^[[^]]*]s*/, ''));
        }
        return reasons.join('；');
      });
      const factsNotice = computed(function () {
        const f = overview.value && overview.value.facts;
        if (!f) return '';
        const reasons = [];
        for (const k of ['seal_quality', 'loss_effect', 'feedback_matrix', 'theme_structure']) {
          const v = f[k];
          if (v && v.available === false && v.reason) reasons.push(String(v.reason).replace(/^[[^]]*]s*/, ''));
        }
        return reasons.join('；');
      });
      function pct(v) {
        if (v == null || isNaN(v)) return '—';
        return (v * 100).toFixed(0) + '%';
      }
      function fmtCond(v, unit) {
        if (v == null) return '—';
        const n = typeof v === 'number' ? (Math.round(v * 100) / 100) : v;
        return n + (unit || '');
      }
      function verdictClass(v) {
        if (v === '成立') return 'tag-chip mr-4';
        if (v === '证伪') return 'tag-chip mr-4';
        return 'tag-chip mr-4';
      }

      // ─── V5.2.2 UI 增强: 红涨绿跌 / 摘要 / 时间轴 ───
      function riseFall(v) {
        if (v == null) return '';
        return v > 0 ? 'is-rise' : (v < 0 ? 'is-fall' : '');
      }
      function tagClass(g) {
        if (g === '机构') return 'is-institution';
        if (g === '游资') return 'is-hotmoney';
        if (g === '主力') return 'is-main';
        return '';
      }
      const sessionStatusText = computed(function () {
        const st = overview.value && overview.value.session_status;
        if (!st) return '—';
        const d = overview.value.date;
        if (d === st.latest_session && st.settled) return '已收盘';
        if (d === st.today && st.is_trade_day && !st.settled) return '⏳ 盘中 · 未收盘';
        return '历史交易日';
      });
      const sessionStatusClass = computed(function () {
        const st = overview.value && overview.value.session_status;
        if (!st) return '';
        const d = overview.value.date;
        if (d === st.latest_session && st.settled) return 'is-institution';
        if (d === st.today && st.is_trade_day && !st.settled) return 'is-main';
        return '';
      });

      function openStock(row) {
        // V5.2.3: 个股点击 → 打开全局详情弹窗(K线/AI评估/问股)
        if (row && row.ts_code && state && state.showStockDetail) {
          state.showStockDetail(row.ts_code);
        }
      }
      const lhbInstitutionNetBuy = computed(function () {
        return (lhbRows.value || []).filter(function (r) { return (r.tags || []).indexOf('机构') >= 0; })
          .reduce(function (s, r) { return s + (r.net_buy || 0); }, 0);
      });
      const lhbHotMoneyCount = computed(function () {
        return (lhbRows.value || []).filter(function (r) { return (r.tags || []).indexOf('游资') >= 0; }).length;
      });
      const sectorTop = computed(function () {
        const rows = (sectorRows.value || []).filter(function (r) { return r.main_net_inflow != null; });
        if (!rows.length) return null;
        return rows.reduce(function (a, b) { return (a.main_net_inflow >= b.main_net_inflow) ? a : b; });
      });
      const sectorTopName = computed(function () {
        const t = sectorTop.value;
        return t ? t.name : '—';
      });
      const sectorTopInflow = computed(function () {
        const t = sectorTop.value;
        return t ? t.main_net_inflow : null;
      });
      const sectorSource = computed(function () {
        return sectorFlowSource.value || '东财';
      });
      // V5.2.4 (T-5.2.43): 板块资金按关键词过滤(联动预选)
      const filteredSectorRows = computed(function () {
        const kw = (sectorKeyword.value || '').trim();
        const rows = sectorRows.value || [];
        if (!kw) return rows;
        return rows.filter(function (r) { return r.name && String(r.name).indexOf(kw) >= 0; });
      });
      function gotoSector(kw) {
        sectorKeyword.value = kw || '';
        if (state && state.currentSubPage) state.currentSubPage.value = 'sector';
      }
      const sectorPageRows = computed(function () {
        const rows = filteredSectorRows.value;
        if (rows.length <= 200) return rows;
        const start = (sectorPage.value - 1) * PAGE_SIZE;
        return rows.slice(start, start + PAGE_SIZE);
      });
      const intradaySlots = ['09:25', '09:35', '10:00', '11:30', '14:00', '15:00'];
      const intradayCollected = computed(function () {
        const set = {};
        (intradaySnapshots.value || []).forEach(function (s) { set[s.slot] = true; });
        return set;
      });
      function slotClass(t) {
        if (intradayCollected.value[t]) return 'is-done';
        if (t === intradayNowSlot.value) return 'is-current';
        return 'is-empty';
      }
      const intradayNowSlot = computed(function () {
        const now = new Date();
        const hh = (now.getHours() < 10 ? '0' : '') + now.getHours();
        const mm = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        const cur = hh + ':' + mm;
        for (var i = 0; i < intradaySlots.length; i++) {
          if (cur === intradaySlots[i]) return intradaySlots[i];
        }
        // 过点 8 分钟窗口
        for (var j = 0; j < intradaySlots.length - 1; j++) {
          var t = intradaySlots[j];
          var base = new Date();
          base.setHours(Number(t.split(':')[0]), Number(t.split(':')[1]), 0, 0);
          var end = new Date(base.getTime() + 8 * 60000);
          if (now >= base && now <= end) return t;
        }
        return '';
      });
      const intradayStatus = computed(function () {
        const now = new Date();
        const cur = intradayNowSlot.value;
        if (cur) return '当前处于快照窗口 ' + cur + ' (前后 8 分钟) — 可采集';
        // 下一时点
        const hh = now.getHours(), mm = now.getMinutes();
        let next = '';
        for (let i = 0; i < intradaySlots.length; i++) {
          const parts = intradaySlots[i].split(':');
          if (Number(parts[0]) > hh || (Number(parts[0]) === hh && Number(parts[1]) > mm)) {
            next = intradaySlots[i];
            break;
          }
        }
        return next ? ('下一快照时点 ' + next + ' — 非窗口期不可采集') : '今日快照时点已全部结束';
      });
      const intradayMsg = ref('');
      const intradayMsgType = ref('info');

      // V5.2.0 (FR-5.2.0.7): 连板梯队条形图(复用 charts.js 通用简单图模式, 主题切换重绘)
      function renderLadderChart() {
        const tiers = pools.value && pools.value.ladder && pools.value.ladder.tiers;
        if (!tiers || !Object.keys(tiers).length) return;
        const charts = window.__quantModules && window.__quantModules.charts;
        if (!charts || !charts.renderSimpleChartTo) return;
        const sel = ztBoardFilter.value;
        const chart = charts.renderSimpleChartTo('shorttermLadderChart', function () {
          const boards = Object.keys(tiers).sort(function (a, b) { return Number(a) - Number(b); });
          return {
            grid: { left: 8, right: 16, top: 20, bottom: 4, containLabel: true },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: boards.map(function (b) { return b + '板'; }) },
            yAxis: { type: 'value', minInterval: 1 },
            // V5.2.4 (T-5.2.45): 选中档高亮
            series: [{ type: 'bar', barWidth: '45%',
                       label: { show: true, position: 'top' },
                       itemStyle: { color: function (p) {
                           return sel && Number(boards[p.dataIndex]) === sel
                             ? 'var(--color-accent)' : 'var(--chart-split)';
                       } },
                       data: boards.map(function (b) { return tiers[b]; }) }],
          };
        }, { key: 'shortterm-ladder' });
        // 点击梯队档 → 三池表格过滤(再点取消)
        if (chart && chart.off) {
          chart.off('click');
          chart.on('click', function (params) {
            if (!params || !params.name) return;
            const b = parseInt(params.name, 10);
            if (isNaN(b)) return;
            ztBoardFilter.value = (ztBoardFilter.value === b) ? null : b;
          });
        }
      }
      if (window.__quantModules && window.__quantModules.echartsTheme
          && window.__quantModules.echartsTheme.registerChart) {
        window.__quantModules.echartsTheme.registerChart(renderLadderChart);
      }

      function fmtAmount(v) {
        if (v == null) return '—';
        const a = Math.abs(v);
        if (a >= 1e8) return (v / 1e8).toFixed(2) + '亿';
        if (a >= 1e4) return (v / 1e4).toFixed(0) + '万';
        return v.toFixed(0);
      }

      function fmtPct(v) {
        if (v == null) return '—';
        return (v >= 0 ? '+' : '') + v.toFixed(2) + '%';
      }

      async function loadOverview(force) {
        const seq = ++_overviewSeq;
        overviewLoading.value = true;
        overviewError.value = false;
        try {
          const url = '/api/shortterm/overview' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _overviewSeq) return;
          if (res && res.success) {
            overview.value = res;
          } else if (res && res.detail) {
            overviewError.value = true;
            overviewErrTitle.value = String(res.detail);
            overviewErrDesc.value = '请先登录后再查看';
          } else {
            overviewError.value = true;
            overviewErrTitle.value = '数据加载失败';
            overviewErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _overviewSeq) return;
          overviewError.value = true;
          overviewErrTitle.value = '数据加载失败';
          overviewErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _overviewSeq) overviewLoading.value = false;
        }
      }

      async function loadSectorFlow(force) {
        const seq = ++_reqSeq;
        sectorLoading.value = true;
        sectorError.value = false;
        try {
          const url = '/api/shortterm/sector-flow?indicator=' + encodeURIComponent(sectorIndicator.value)
            + '&sector_type=' + encodeURIComponent(sectorType.value);
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;
          if (res && res.success && res.available) {
            sectorRows.value = res.rows || [];
            sectorFlowSource.value = res.source || (res.note ? '同花顺' : '东财');
            sectorPage.value = 1;
          } else if (res && res.reason) {
            sectorError.value = true;
            sectorErrTitle.value = '数据加载失败';
            sectorErrDesc.value = String(res.reason).replace(/^\[[^\]]*\]\s*/, '');
          } else if (res && res.detail) {
            sectorError.value = true;
            sectorErrTitle.value = String(res.detail);
            sectorErrDesc.value = '请先登录后再查看';
          } else {
            sectorError.value = true;
            sectorErrTitle.value = '数据加载失败';
            sectorErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _reqSeq) return;
          sectorError.value = true;
          sectorErrTitle.value = '数据加载失败';
          sectorErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _reqSeq) sectorLoading.value = false;
        }
      }

      async function loadReview(force) {
        const seq = ++_reviewSeq;
        try {
          const url = '/api/shortterm/review' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reviewSeq) return;
          if (res && res.success) review.value = res.review || null;
        } catch (e) { /* 静默 */ }
      }

      async function runReview() {
        reviewRunning.value = true;
        try {
          const url = '/api/shortterm/review' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await fetch(url, { method: 'POST', headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) {
            review.value = res;
            _cache[url] = { ts: Date.now(), data: res };   // 生成后刷新缓存
          }
        } catch (e) { /* 失败保持原态 */ } finally {
          reviewRunning.value = false;
        }
      }

      async function sendChat() {
        const q = chatQuestion.value.trim();
        if (!q) return;
        chatLoading.value = true;
        chatAnswer.value = '';
        try {
          const url = '/api/shortterm/review/chat';
          const res = await fetch(url, {
            method: 'POST', headers: authHeaders(),
            body: JSON.stringify({ date: overviewDate.value, question: q }),
          }).then(function (r) { return r.json(); });
          chatAnswer.value = res.answer || '[无回复]';
        } catch (e) {
          chatAnswer.value = '[发送失败]';
        } finally {
          chatLoading.value = false;
        }
      }

      async function loadIntraday(force) {
        const seq = ++_reqSeq;
        intradayLoading.value = true;
        intradayError.value = false;
        try {
          const url = '/api/shortterm/intraday' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;
          if (res && res.success) intradaySnapshots.value = res.snapshots || [];
          else intradayError.value = true;
        } catch (e) {
          if (seq === _reqSeq) intradayError.value = true;
        } finally {
          if (seq === _reqSeq) intradayLoading.value = false;
        }
      }

      async function collectSnapshot() {
        intradayCollecting.value = true;
        try {
          const url = '/api/shortterm/intraday/snapshot' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await fetch(url, { method: 'POST', headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) {
            if (!res.accepted) {
              intradayMsg.value = '⏱ ' + (res.reason || '非快照时点');
              intradayMsgType.value = 'warn';
            } else {
              intradayMsg.value = '已采集 ' + res.slot + ' 快照' +
                (res.pools_available && !res.pools_available.zt ? ' (池源部分不可用)' : '');
              intradayMsgType.value = 'ok';
            }
            loadIntraday();
          } else {
            intradayMsg.value = '采集失败, 请稍后重试';
          }
        } catch (e) {
          intradayMsg.value = '采集失败, 请稍后重试';
        } finally {
          intradayCollecting.value = false;
        }
      }

      function setSessionDates() {
        // 仅首次进入拉一次最近已收盘交易日(缓存), 之后切子页秒开
        return cachedGet('/api/shortterm/latest-session', false).then(function (res) {
          if (res && res.date) {
            if (!shortDate.value) shortDate.value = res.date;
          }
        }).catch(function () { /* 默认空, 让用户选 */ });
      }

      function loadCurrent() {
        // V5.2.3 高效加载: 按当前子页懒加载, 不再一 mount 全量并行拉 6 组
        const sp = currentSubPage.value;
        if (sp === 'ztpool') loadPools();
        else if (sp === 'lhb') loadLhb();
        else if (sp === 'overview') { loadOverview(); loadReview(); }
        else if (sp === 'sector') loadSectorFlow();
        else if (sp === 'intraday') loadIntraday();
      }

      // V6.9.3 (F8.1): 进入短线复盘页并行预取高频子页 — 写入 TTL 缓存, 切子页秒开; 失败静默不告警
      function prefetchShortterm() {
        const d = shortDate.value ? '?date=' + shortDate.value : '';
        const urls = [
          '/api/shortterm/overview' + d,
          '/api/shortterm/pools' + d,
          '/api/shortterm/lhb' + d,
        ];
        urls.forEach(function (u) {
          cachedGet(u, false).catch(function () { /* 预取失败静默 */ });
        });
      }

      function refreshCurrent() {
        // 强制绕过 TTL 缓存重拉当前子页
        const sp = currentSubPage.value;
        if (sp === 'ztpool') loadPools(true);
        else if (sp === 'lhb') loadLhb(true);
        else if (sp === 'overview') { loadOverview(true); loadReview(true); }
        else if (sp === 'sector') loadSectorFlow(true);
        else if (sp === 'intraday') loadIntraday(true);
      }

      // ===== 6.3.0 (T-6.3.0.9): 逻辑域装配 — 短线复盘引导下沉 components/shortterm/ =====
      // 片段以 create(ctx) 工厂装配（片段须先于本文件加载，见 src/main.js）
      const __tour = window.__quantModules.shorttermPage.tour.create({
        ref, computed, currentSubPage: currentSubPage,
      });
      const { shorttermTourVisible, shorttermTourState, shorttermTourStep, shorttermTourProg, shorttermTourIsLast } = __tour;
      const { maybeShowShorttermTour, shorttermTourNext, shorttermTourFinish, shorttermTourSkip } = __tour;

      onMounted(function () { setSessionDates(); loadCurrent(); prefetchShortterm(); maybeShowShorttermTour(); loadDateList(); });
      Vue.watch(function () { return currentSubPage.value; }, function (sp) {
        loadCurrent();
        if (sp === 'overview') maybeShowShorttermTour();
      });

      return {
        currentPage, currentSubPage,
        shortDate, pools, poolLoading, poolError, ztBoardFilter, filteredZt, clearBoardFilter, hasAnyPool,
        lhbRows, lhbLoading, lhbError, lhbReason, lhbPageRows, lhbPage,
        overview, overviewLoading, overviewError,
        dateList, dateListLoading, loadDateList, pickDate,
        sectorType, sectorIndicator, sectorKeyword, sectorRows, filteredSectorRows, sectorPageRows, sectorPage, sectorLoading, sectorError, sectorFlowSource,
        PAGE_SIZE, gotoSector,
        review, reviewRunning,
        intradaySnapshots, intradayLoading, intradayError, intradayCollecting,
        intradaySlots, intradayMsg, slotClass, intradayStatus,
        chatQuestion, chatAnswer, chatLoading,
        loadPools, loadLhb, loadOverview, loadSectorFlow, loadReview, runReview,
        sendChat, loadIntraday, collectSnapshot, refreshCurrent,
        ladderText, fmtAmount, fmtPct, riseFall, tagClass, openStock,
        lhbInstitutionNetBuy, lhbHotMoneyCount, sectorTopName, sectorTopInflow, sectorSource,
        moneySource, promotion1to2, cycleScore, cycleTrend,
        pct, fmtCond, verdictClass, sessionStatusText, sessionStatusClass,
        // T-6.3.4: 6.3.0 拆分回归 — 模板 view-part1/2 引用 t()/emotionNotice/factsNotice
        // 但 setup 未返回 → 概览页 Vue 渲染崩溃 (t is not a function) + 降级原因不显示
        t: state.t, emotionNotice, factsNotice,
        // V5.3.0 (T-5.3.1.3): 短线复盘 3 步引导
        shorttermTourVisible, shorttermTourState, shorttermTourStep, shorttermTourProg, shorttermTourIsLast,
        shorttermTourNext, shorttermTourFinish, shorttermTourSkip,
      };
    },
  };
})();
