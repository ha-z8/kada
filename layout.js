// layout.js - المكون الذكي والموحد للرأس والذيل لجميع صفحات منصة KAADA

document.addEventListener("DOMContentLoaded", function () {
    injectHeaderAndFooter();
});

function injectHeaderAndFooter() {
    // معرفة اسم الصفحة الحالية تلقائياً
    const currentPath = window.location.pathname.split('/').pop() || 'home.html';

    // تحديد الأزرار المناسبة لكل صفحة ديناميكياً
    let actionButtonsHTML = '';

    if (currentPath === 'home.html' || currentPath === '') {
        // إذا كان المستخدم في الصفحة الرئيسية (نضيف زر الخريطة ودليل الشرح وخروج)
        actionButtonsHTML = `
            <button onclick="window.location.href='study.html'" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-900/60 text-xs font-semibold text-emerald-300 transition-all shadow flex items-center gap-1">
                📖 دليل الشرح
            </button>
            <button onclick="window.location.href='map.html'" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-900/60 text-xs font-semibold text-emerald-300 transition-all shadow flex items-center gap-1">
                🗺️ الخريطة
            </button>
            <button onclick="localStorage.removeItem('kaada_auth'); window.location.replace('index.html');" class="px-2.5 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-xs font-semibold text-red-300 transition-all shadow">
                خروج
            </button>
        `;
    } else if (currentPath === 'study.html') {
        // إذا كان المستخدم في صفحة دليل الشرح
        actionButtonsHTML = `
            <button onclick="window.location.href='home.html'" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-900/60 text-xs font-semibold text-emerald-300 transition-all shadow">
                &larr; الرئيسية
            </button>
            <button onclick="window.location.href='map.html'" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-900/60 text-xs font-semibold text-emerald-300 transition-all shadow">
                🗺️ الخريطة
            </button>
            <button onclick="localStorage.removeItem('kaada_auth'); window.location.replace('index.html');" class="px-2.5 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-xs font-semibold text-red-300 transition-all shadow">
                خروج
            </button>
        `;
    } else if (currentPath === 'map.html') {
        // إذا كان المستخدم في صفحة الخريطة
        actionButtonsHTML = `
            <button onclick="window.location.href='home.html'" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-900/60 text-xs font-semibold text-emerald-300 transition-all shadow">
                &larr; الرئيسية
            </button>
            <button onclick="window.location.href='study.html'" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-900/60 text-xs font-semibold text-emerald-300 transition-all shadow">
                📖 دليل الشرح
            </button>
            <button onclick="localStorage.removeItem('kaada_auth'); window.location.replace('index.html');" class="px-2.5 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-xs font-semibold text-red-300 transition-all shadow">
                خروج
            </button>
        `;
    } else {
        // الأزرار الافتراضية لأي صفحة أخرى
        actionButtonsHTML = `
            <button onclick="window.location.href='home.html'" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-900/60 text-xs font-semibold text-emerald-300 transition-all shadow">
                &larr; الرئيسية
            </button>
            <button onclick="localStorage.removeItem('kaada_auth'); window.location.replace('index.html');" class="px-2.5 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-xs font-semibold text-red-300 transition-all shadow">
                خروج
            </button>
        `;
    }

    // 1. حقن الرأس (Header) الذكي الموحد في بداية الصفحة
    const headerHTML = `
    <header class="glass-card border-b border-emerald-900/40 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-3 md:px-4 py-3 flex justify-between items-center">
            <div class="flex items-center gap-2.5 cursor-pointer" onclick="window.location.href='home.html'">
                <div class="bg-gradient-to-tr from-emerald-700 to-emerald-900 p-2 rounded-xl md:rounded-2xl shadow-lg shadow-emerald-950/50 text-white">
                    <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <div>
                    <h1 class="text-xs md:text-base font-black text-white">منصة الاختبارات والمذاكرة الذكية</h1>
                    <p class="text-[10px] md:text-xs text-slate-400">كلية الملك عبدالله للدفاع الجوي</p>
                </div>
            </div>

            <div class="flex items-center gap-2">
                ${actionButtonsHTML}
            </div>
        </div>
    </header>
    `;

    // 2. حقن الذيل (Footer) الموحد في نهاية الصفحة
    const footerHTML = `
    <footer class="glass-card border-t border-emerald-900/50 mt-12 py-6 text-xs text-slate-400 z-10">
        <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-4 items-center text-center md:text-right">
            <div class="space-y-0.5">
                <p class="font-bold text-slate-200 text-xs md:text-sm">كلية الملك عبدالله للدفاع الجوي</p>
                <p class="text-slate-400 text-[11px]">قسم طلبة المتوسط - منصة الاختبارات والمذاكرة الذكية</p>
            </div>
            
            <div class="space-y-0.5 text-center flex flex-col items-center justify-center">
                <p class="font-bold text-emerald-400 tracking-wide text-[11px]">
                    <span>إشراف: </span>
                    <span class="text-white font-black">هزاع الهزاع</span>
                </p>
                <p class="text-slate-400 text-[10px]">جميع الحقوق محفوظة © 2026</p>
                <span class="text-[10px] text-emerald-400/80 font-mono mt-1">آخر تحديث: أكتوبر 2026 - V9.2</span>
            </div>

            <div class="flex justify-center md:justify-end">
                <button onclick="if(typeof forceSyncUpdate === 'function') { forceSyncUpdate(); } else { window.location.reload(true); }" class="px-3.5 py-1.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-600/40 text-emerald-300 text-[11px] font-bold transition-all shadow flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    <span>تحديث ومزامنة الأكواد</span>
                </button>
            </div>
        </div>
    </footer>
    `;

    // حقن العناصر في مكانهما الصحيح
    const existingHeader = document.querySelector('header');
    if (existingHeader) {
        existingHeader.outerHTML = headerHTML;
    }

    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    }
}