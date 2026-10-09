// features.js - ملف الميزات والخدمات المطور لمنصة KAADA

// 1. إدارة دفتر الملاحظات الشخصي
function notesManager() {
    return {
        userNotes: localStorage.getItem('kaada_user_notes') || '',
        saveUserNotes() {
            localStorage.setItem('kaada_user_notes', this.userNotes);
        }
    }
}

// 2. مؤقت التركيز المطور والتفاعلي (يسمح بالتعديل المباشر من العداد)
// features.js - مؤقت التركيز الاحترافي والمطور
function customPomodoro() {
    return {
        inputMinutes: 25,     
        pomoSeconds: 25 * 60, 
        pomoRunning: false,
        pomoTimer: null,

        // تعيين الوقت مباشرة عند تحريك الـ Slider أو الضغط على الأزرار السريعة
        setMinutes(mins) {
            if (!this.pomoRunning) {
                this.inputMinutes = mins;
                this.pomoSeconds = mins * 60;
            }
        },

        startPomodoro() {
            if (this.pomoSeconds <= 0) {
                this.pomoSeconds = this.inputMinutes * 60;
            }
            this.pomoRunning = true;
            
            this.pomoTimer = setInterval(() => {
                if (this.pomoSeconds > 0) {
                    this.pomoSeconds--;
                } else {
                    this.pausePomodoro();
                    alert('⏰ انتهى وقت التركيز بنجاح! خذ استراحة قصيرة لتجديد نشاطك.');
                    if (typeof showNotify === 'function') {
                        showNotify('🎉 انتهت جلسة التركيز بنجاح!');
                    }
                }
            }, 1000);
        },

        pausePomodoro() {
            this.pomoRunning = false;
            clearInterval(this.pomoTimer);
        },

        resetPomodoro() {
            this.pausePomodoro();
            this.pomoSeconds = this.inputMinutes * 60;
        },

        formatPomodoroTime() {
            const mins = Math.floor(this.pomoSeconds / 60);
            const secs = this.pomoSeconds % 60;
            return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    }
}
// 3. دالة المزامنة والتحديث الشامل
function forceSyncUpdate() {
    if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (let registration of registrations) {
                registration.unregister();
            }
            caches.keys().then((names) => {
                for (let name of names) {
                    caches.delete(name);
                }
                alert('✨ تم تفريغ الكاش وسحب أحدث نسخة بنجاح!');
                window.location.reload(true);
            });
        });
    } else {
        window.location.reload(true);
    }
}