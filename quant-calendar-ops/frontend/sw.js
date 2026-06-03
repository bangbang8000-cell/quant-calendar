// Service Worker - 基础PWA支持 (v3 - no CDN cache, graceful fallback)
const CACHE_NAME = 'quant-calendar-v3';
const CACHED_URLS = [
    '/manifest.json'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    // 只缓存本地资源，CDN资源走网络（jsdelivr国内可能受限）
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CACHED_URLS))
            .catch(() => self.skipWaiting()) // 即使缓存失败也要激活
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
    // 清除所有旧缓存
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(k => caches.delete(k)))
        )
    );
});

// 网络优先策略：所有资源先走网络，失败回退缓存
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // index.html / SW 自身 始终从网络获取
    if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/sw.js') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // 成功拿到后更新缓存
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
    
    // 其他请求：网络优先
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
