// Service Worker - PWA支持 v3.8
const CACHE_NAME = 'quant-calendar-v3.8';
const CACHED_URLS = [
    '/',
    '/manifest.json',
    '/static/css/tokens.css',
    '/static/css/themes.css',  
    '/static/css/layout.css',
    '/static/css/animations.css',
    '/static/css/responsive.css',
    '/static/js/app-logic.js',
    '/static/js/echarts-theme.js',
    '/static/js/components/calendar-page.js',
    '/static/js/components/ai-page.js',
    '/static/js/components/strategies-page.js',
    '/static/js/components/system-page.js',
    '/static/js/components/research-page.js',
    '/static/js/merrill.js',
    '/static/lib/echarts.min.js',
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CACHED_URLS))
            .catch(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        (async () => {
            await clients.claim();
            const keys = await caches.keys();
            await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
        })()
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // API请求: 缓存兜底
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }
    
    // index.html / SW 自身 始终从网络获取
    if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/sw.js') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }
    
    // CDN 资源：网络优先，缓存兜底
    if (url.hostname === 'cdn.jsdelivr.net') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }
    
    // 页面导航请求：离线回退
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match('/'))
        );
        return;
    }
    
    // 其他请求：网络优先
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
