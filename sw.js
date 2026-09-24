const CACHE_NAME = 'kaada-quiz-v1';
const assetsToCache = [
    './',
    './home.html',
    './index.html',
    './style.css',
    './script.js',
    './aqeedah.js',
    './fiqh.js',
    './chemistry.js',
    './math.js',
    './computer.js',
    './KAADA-logo.png'
];

// تثبيت وتخزين الملفات في ذاكرة المتصفح
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

// جلب الملفات من الكاش عندما لا يوجد إنترنت
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});