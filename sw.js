// sw.js - Service Worker للتشغيل أوفلاين بالكامل والتخزين المؤقت لمنصة KAADA

const CACHE_NAME = 'kaada-hub-v2026.10.9';

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

// 1. مرحلة التثبيت (Install): حفظ الملفات في الكاش المحلي
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

// 2. مرحلة التفعيل (Activate): تنظيف الملفات والكاش القديم إن وجد
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

// 3. مرحلة جلب الطلبات (Fetch): استراتيجية (Cache First, fallback to Network)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // إذا كان الملف موجوداً في الكاش المحلي، نعيده فوراً (يعمل أوفلاين بسرعة فائقة)
            if (cachedResponse) {
                return cachedResponse;
            }

            // إذا لم يكن موجوداً، نحاول جلبه من الشبكة العادية
            return fetch(event.request).then((networkResponse) => {
                // تخزين الطلب الجديد في الكاش للمرات القادمة
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                // في حال انقطاع الإنترنت ولم يتم العثور على الملف، يمكن عرض صفحة بديلة أو تسجيل تنبيه
                console.log('⚠️ لا يوجد إنترنت، ولم يتم العثور على الملف:', event.request.url);
            });
        })
    );
});