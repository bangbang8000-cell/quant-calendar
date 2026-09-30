// Service Worker - PWA 支持 (v3.17.8 / FR-3.17.8 移动端一等公民)
// 版本化缓存策略:
//   - cacheName 含 APP_VERSION（由后端 main_new.py 注入 __APP_VERSION__，与 /api/health 版本同源），
//     activate 时清理旧版本缓存 → 发布新版本即缓存爆破。
//   - 核心壳（index.html + 主 CSS + 关键 JS + libs）install 时 precache；
//     并自动解析 index.html 内 /static/ 资源一并预缓存，保证离线可读壳。
//   - 运行时缓存只缓存 GET（POST/PUT/DELETE 等一律直连网络，绝不复用响应）。
//   - 离线: 导航回退到缓存 '/'，API 回退到**同身份分区**的 GET 缓存（已缓存数据可读）。
//
// V6.3.6 (安全加固): API 缓存改为「按身份分区 + 敏感端点不入缓存」
//   原实现把所有 GET /api/* 写进同一个缓存、断网时无条件回放。而 Cache API 的键只有 URL
//   （caches.match 不看 Authorization，响应头仅 Vary: Accept-Encoding），于是「管理员会话
//   留下的明文密钥响应」会被回放给访客 / 无凭据 / 伪造凭据的请求（已在 ops 真实密钥上复现）。
//   现在:
//     ① 敏感端点（密钥/凭据/配置/用户目录…）不缓存、不回放，只走网络；
//     ② 其余 API 按请求身份（JWT sub）分区缓存，跨身份不可能命中；
//     ③ 无命中返回 503 空态，绝不回放他人数据；登出由页面侧清理 API 缓存。
const APP_VERSION = '__APP_VERSION__';
const CACHE_NAME = 'quant-calendar-' + APP_VERSION;

// API 分区缓存名前缀: quant-calendar-api-<版本>-<身份键>
const API_CACHE_PREFIX = 'quant-calendar-api-';

// V6.3.6: 纯判定（身份派生 / 敏感端点）抽到独立 UMD 模块，便于 Node 单测。
// importScripts 失败时降级为「完全不缓存 API」——只损失离线 API 读取，绝不放宽安全口径。
let SW_CORE = null;
try {
    importScripts('/static/js/sw-cache-core.js?v=' + APP_VERSION);
    SW_CORE = self.QuantSwCacheCore || null;
} catch (err) {
    SW_CORE = null;
}

function apiCachePrefix() {
    return API_CACHE_PREFIX + APP_VERSION + '-';
}

// 身份分区缓存名（无 SW_CORE 时返回 null → 调用方跳过缓存）
function apiCacheNameFor(request) {
    if (!SW_CORE) return null;
    return apiCachePrefix() + SW_CORE.identityKey(request.headers.get('Authorization'));
}

// 命中缓存时打标 X-QC-Cache: hit（避免回放数据被当成实时数据）
async function matchApiCache(cacheName, request) {
    try {
        const cache = await caches.open(cacheName);
        const hit = await cache.match(request);
        if (!hit) return null;
        const body = await hit.blob();
        const headers = new Headers(hit.headers);
        headers.set('X-QC-Cache', 'hit');
        return new Response(body, { status: hit.status, statusText: hit.statusText, headers });
    } catch (e) {
        return null;
    }
}

// API: 网络优先 → 成功写「本身份分区」；失败仅回放本分区；无命中回 503 空态
async function handleApiRequest(request) {
    const cacheName = apiCacheNameFor(request);
    try {
        const response = await fetch(request);
        if (response && response.ok && cacheName) {
            const clone = response.clone();
            caches.open(cacheName)
                .then(cache => cache.put(request, clone))
                .catch(() => { /* 配额/隐私模式失败不影响响应 */ });
        }
        return response;
    } catch (err) {
        const hit = cacheName ? await matchApiCache(cacheName, request) : null;
        if (hit) return hit;
        return new Response(
            JSON.stringify({ success: false, offline: true, message: '离线且本地无该数据的缓存' }),
            { status: 503, headers: { 'Content-Type': 'application/json; charset=utf-8', 'X-QC-Cache': 'miss' } }
        );
    }
}

// 核心壳预缓存清单（index.html 内的 /static/ 资源会自动追加）
const CACHED_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/static/css/tokens.css',
    '/static/css/themes.css',
    '/static/css/layout.css',
    '/static/css/animations.css',
    '/static/css/responsive.css',
    '/static/lib/vue.global.prod.min.js',
    '/static/lib/element-plus.min.js',
    '/static/lib/element-plus.css',
    '/static/lib/echarts.min.js',
    '/static/lib/zh-cn.min.js',
    '/static/js/core.js',
    '/static/js/icons.js',
    '/static/js/themes.js',
    '/static/js/mobile-gestures.js',
    '/static/js/charts.js',
    '/static/js/virtual-list-core.js',
    '/static/js/components/virtual-list.js',
    '/static/js/app-logic.js',
    '/static/js/components/calendar-page.js',
    '/static/js/components/ai-page.js',
    '/static/js/components/research-page.js',
    '/static/js/components/strategies-page.js',
    '/static/js/components/system-page.js',
    '/static/js/components/global-header.js',
    '/static/js/components/sidebar.js',
    '/static/js/components/dialogs/stock-detail.js',
    '/static/js/echarts-theme.js',
];

// 从 index.html 提取 /static/ 资源 URL（含版本查询串），补充到预缓存清单
function collectAssetUrls(html) {
    const urls = [];
    const re = /(?:src|href)=["'](\/static\/[^"']+)["']/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        const raw = m[1];
        // 去除引号内可能的绝对 http 前缀与空格
        if (raw && raw.indexOf('http') !== 0) urls.push(raw);
    }
    return urls;
}

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        (async () => {
            try {
                // 拉取当前 index.html 并解析全部静态资源 → 核心壳离线可读
                const res = await fetch('/index.html', { cache: 'no-store' });
                let urls = CACHED_URLS.slice();
                if (res && res.ok) {
                    const html = await res.text();
                    urls = urls.concat(collectAssetUrls(html));
                }
                // 去重 + 过滤掉已带查询串的版本化 URL（保留带 ?v= 的，避免与无参版本并存）
                const seen = {};
                const uniq = [];
                urls.forEach(u => {
                    if (seen[u]) return;
                    seen[u] = 1;
                    uniq.push(u);
                });
                const cache = await caches.open(CACHE_NAME);
                // 逐个 add 而非 addAll：单个失败不整体失败，离线壳尽可能完整
                await Promise.all(uniq.map(u =>
                    cache.add(u).catch(() => { /* 单个资源失败不阻塞 */ })
                ));
            } catch (e) {
                // 网络失败时仍预缓存基础清单
                const cache = await caches.open(CACHE_NAME);
                await cache.addAll(CACHED_URLS).catch(() => {});
            }
        })()
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        (async () => {
            await clients.claim();
            const keys = await caches.keys();
            const apiPrefix = apiCachePrefix();
            // V6.3.6: 保留当前壳缓存 + 当前版本的 API 分区缓存，其余（含旧版本 API 缓存）清理
            await Promise.all(
                keys
                    .filter(k => k.indexOf('quant-calendar-') === 0
                        && k !== CACHE_NAME
                        && k.indexOf(apiPrefix) !== 0)
                    .map(k => caches.delete(k))
            );
        })()
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // 仅缓存 GET（POST 等非安全方法直接放行，绝不复用）
    if (event.request.method !== 'GET') return;

    // API 请求（V6.3.6: 敏感端点直接放行 → 不写缓存、不回放）
    if (url.pathname.startsWith('/api/')) {
        if (!SW_CORE || SW_CORE.isSensitiveApi(url)) return;
        event.respondWith(handleApiRequest(event.request));
        return;
    }

    // SW 自身: 始终网络优先，不回退缓存（保证拿到最新版本）
    if (url.pathname === '/sw.js') {
        event.respondWith(fetch(event.request));
        return;
    }

    // CDN 资源: 网络优先，缓存兜底
    if (url.hostname === 'cdn.jsdelivr.net') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (response && response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // 页面导航请求: 网络优先，离线回退缓存 '/'（核心壳可读）
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (response && response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => caches.match('/').then(r => r || caches.match('/index.html')))
        );
        return;
    }

    // 静态资源: 优先缓存（版本化 ?v= 保证新版本换新缓存条目）
    if (url.pathname.startsWith('/static/')) {
        event.respondWith(
            caches.match(event.request).then(hit => {
                if (hit) return hit;
                return fetch(event.request)
                    .then(response => {
                        if (response && response.ok) {
                            const clone = response.clone();
                            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                        }
                        return response;
                    })
                    .catch(() => hit);
            })
        );
        return;
    }

    // 其他请求: 网络优先，缓存兜底
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
