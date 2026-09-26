// sw.js - النسخة المعدلة لضمان العمل بدون إنترنت 100%
const CACHE_NAME = 'kaada-quiz-v8.3';
const assetsToCache = [
    './',
    './index.html',
    './home.html',
    './map.html',
    './style.css',
    './aqeedah.js',
    './chemistry.js',
    './math.js',
    './computer.js',
    './script.js',
    './KAADA-logo.png',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Inter:wght@400;500;600;700;800&display=swap'
];

// 1. تثبيت الخدمة وحفظ الأصول في الكاش
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache.map(url => new Request(url, { mode: 'no-cors' })));
        })
    );
    self.skipWaiting();
});

// 2. تفعيل الخدمة وحذف أي إصدارات كاش قديمة
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

// 3. استراتيجية الجلب المضمونة للعمل بدون إنترنت (Cache First)
self.addEventListener('fetch', (event) => {
    // تخطي طلبات الـ WebSocket الخاصة بـ Live Server لكي لا تسبب أخطاء في الكونسول
    if (event.request.url.includes('/ws')) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // إذا وجدنا الملف في الكاش، نقوم بإرجاعه فوراً للمتصفح
            if (cachedResponse) {
                // تحديث النسخة في الكاش بصمت بالخلفية إذا كان الإنترنت متوفراً
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse);
                        });
                    }
                }).catch(() => {});
                
                return cachedResponse;
            }

            // إذا لم يكن مخزناً، نحاول جلبه من الشبكة
            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                // في حال انقطاع الإنترنت ولم يتم العثور على الملف، يمكن إرجاع الصفحة الرئيسية كاحتياط
                if (event.request.mode === 'navigate') {
                    return caches.match('./home.html');
                }
            });
        })
    );
});
