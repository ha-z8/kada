// study-guide.js - مخصص لصفحة دليل الشرح والمذاكرة الفعالة
function studyGuideApp() {
    return {
        ...createNotifier(),
        guideLang: 'ar', // متغير مستقل خاص بلغة دليل الشرح فقط
        studyGuideSubject: 'chem',
        searchQuery: '',
        
        // دالة تبديل اللغة الخاصة بدليل الشرح للمواد الداعمة
        toggleStudyLang() {
            this.guideLang = this.guideLang === 'ar' ? 'en' : 'ar';
            this.showNotify(this.guideLang === 'ar' ? '🌐 تم تحويل الشرح إلى اللغة العربية' : '🌐 Study guide switched to English');
        },

        get filteredStudyQuestions() {
            const subjectObj = quizzesData[this.studyGuideSubject];
            if (!subjectObj) return [];
            
            // جلب محتوى المادة بناءً على لغة الدليل الحالية للمواد الداعمة
            let quiz = (subjectObj.arabicOnly || !subjectObj[this.guideLang]) ? (subjectObj.ar || subjectObj) : subjectObj[this.guideLang];
            const list = quiz && quiz.questions ? quiz.questions : (Array.isArray(quiz) ? quiz : []);
            
            if (!this.searchQuery.trim()) return list;
            const q = this.searchQuery.toLowerCase();
            return list.filter(item => 
                item.q.toLowerCase().includes(q) || 
                (item.explanation && item.explanation.toLowerCase().includes(q))
            );
        },

        isBookmarked(questionObj) {
            const bookmarks = JSON.parse(localStorage.getItem('kaada_bookmarks') || '[]');
            return bookmarks.some(b => b.q === questionObj.q);
        },

        toggleBookmark(questionObj) {
            let bookmarks = JSON.parse(localStorage.getItem('kaada_bookmarks') || '[]');
            const index = bookmarks.findIndex(b => b.q === questionObj.q);
            if (index >= 0) {
                bookmarks.splice(index, 1);
                this.showNotify('🗑️ تم إزالة السؤال من بنك المفضلة');
            } else {
                bookmarks.push(questionObj);
                this.showNotify('⭐ تم حفظ السؤال في بنك المفضلة بنجاح');
            }
            localStorage.setItem('kaada_bookmarks', JSON.stringify(bookmarks));
        }
    }
}