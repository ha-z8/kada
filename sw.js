// sw.js - تخزين ذكي مع التحديث الفوري للأكواد الجديدة
const CACHE_NAME = 'kaada-quiz-v8.0';
const assetsToCache = [
    './',
    './index.html',
    './home.html',
    './style.css',
    './aqeedah.js',
    './chemistry.js',
    './math.js',
    './computer.js',
    './script.js',
    './KAADA-logo.png',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Inter:wght@400;500;600;700;800&display=swap'
];

// تثبيت الخدمة وحفظ الملفات الأساسية
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache.map(url => new Request(url, { mode: 'no-cors' })));
        })
    );
    self.skipWaiting();
});

// تفعيل وتطهير أي كاش قديم تلقائياً
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// استراتيجية الجلب: الشبكة أولاً لجلب التحديثات فوراً، ثم الكاش كاحتياط
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).then((networkResponse) => {
            return caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
            });
        }).catch(() => {
            return caches.match(event.request);
        })
    );
});