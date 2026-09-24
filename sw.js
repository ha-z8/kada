const CACHE_NAME = 'kaada-quiz-v4';
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

// تثبيت الخدمة وحفظ الملفات في الكاش
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache.map(url => new Request(url, { mode: 'no-cors' })));
        })
    );
    self.skipWaiting();
});

// تفعيل الخدمة وتنظيف الكاش القديم
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
        })
    );
    self.clients.claim();
});

// جلب الملفات من الكاش أولاً، ثم الشبكة (Cache First, falling back to Network)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                // إذا لم يتوفر اتصال بالإنترنت ولم يكن الملف مخزناً
                if (event.request.headers.get('accept').includes('text/html')) {
                    return caches.match('./home.html');
                }
            });
        })
    );
});