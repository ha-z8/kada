// notifications.js - النظام الموحد للتنبيهات والإشعارات الفورية
function createNotifier() {
    return {
        notification: {
            show: false,
            message: '',
            type: 'success' // success, info, warning
        },
        
        showNotify(msg, type = 'success') {
            this.notification.message = msg;
            this.notification.type = type;
            this.notification.show = true;
            
            // إخفاء الإشعار تلقائياً بعد 3 ثوانٍ
            setTimeout(() => {
                this.notification.show = false;
            }, 3000);
        }
    };
}