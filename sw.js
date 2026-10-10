// sw.js - Service Worker للتشغيل والتنقل أوفلاين بالكامل لمنصة KAADA

const CACHE_NAME = 'kaada-hub-v2026.10.10';

// قائمة الملفات الأساسية التي يجب حفظها لتعمل المنصة بدون إنترنت
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './home.html',
    './map.html',
    './study.html',
    './style.css',
    './script.js',
    './layout.js',
    './features.js',
    './study-guide.js',
    './notifications.js',
    './aqeedah.js',
    './chemistry.js',
    './math.js',
    './computer.js',
    './fiqh.js',
    './manifest.json',
    './KAADA-logo.png',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Inter:wght@400;500;600;700;800&display=swap'
];

// 1. مرحلة التثبيت (Install): حفظ الملفات الأساسية في الكاش المحلي
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('✨ جاري تخزين ملفات منصة KAADA محلياً للتشغيل أوفلاين...');
            return cache.addAll(ASSETS_TO_CACHE);
        }).catch(err => {
            console.log('خطأ أثناء التخزين المؤقت:', err);
        })
    );
    self.skipWaiting();
});

// 2. مرحلة التفعيل (Activate): تنظيف الكاش القديم إن وجد
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('🧹 حذف الكاش القديم:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 3. مرحلة جلب الطلبات (Fetch): التخزين الديناميكي والتعامل مع الانتقال أوفلاين
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // إذا وجد الملف أو الصفحة في الكاش، قم بإرجاعه فوراً
            if (cachedResponse) {
                return cachedResponse;
            }

            // إذا لم يكن موجوداً، قم بطلبه من الشبكة وحفظه تلقائياً في الكاش للاستخدام اللاحق
            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && !event.request.url.startsWith('http')) {
                    return networkResponse;
                }

                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            }).catch(() => {
                // في حال انقطاع الإنترنت ولم يتم العثور على الصفحة، يتم توجيه التصفح بسلاسة لصفحة home.html
                if (event.request.mode === 'navigate') {
                    return caches.match('./home.html');
                }
            });
        })
    );
});