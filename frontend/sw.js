// Service Worker - PWA 支持 (v3.17.8 / FR-3.17.8 移动端一等公民)
// 版本化缓存策略:
//   - cacheName 含 APP_VERSION（由后端 main_new.py 注入 __APP_VERSION__，与 /api/health 版本同源），
//     activate 时清理旧版本缓存 → 发布新版本即缓存爆破。
//   - 核心壳（index.html + 主 CSS + 关键 JS + libs）install 时 precache；
//     并自动解析 index.html 内 /static/ 资源一并预缓存，保证离线可读壳。
//   - 运行时缓存只缓存 GET（POST/PUT/DELETE 等一律直连网络，绝不复用响应）。
//   - 离线: 导航回退到缓存 '/'，API 回退到同名 GET 缓存（已缓存数据可读）。
const APP_VERSION = '__APP_VERSION__';
const CACHE_NAME = 'quant-calendar-' + APP_VERSION;

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
            await Promise.all(
                keys
                    .filter(k => k !== CACHE_NAME && k.indexOf('quant-calendar-') === 0)
                    .map(k => caches.delete(k))
            );
        })()
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // 仅缓存 GET（POST 等非安全方法直接放行，绝不复用）
    if (event.request.method !== 'GET') return;

    // API 请求: 网络优先，成功后写缓存（离线回退同名 GET 缓存，已缓存数据可读）
    if (url.pathname.startsWith('/api/')) {
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
