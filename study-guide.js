// study-guide.js - مخصص لصفحة دليل الشرح والمذاكرة الفعالة
function studyGuideApp() {
    return {
        ...createNotifier(),
        lang: 'ar',
        studyGuideSubject: 'chem',
        searchQuery: '',
        
        toggleLang() {
            this.lang = this.lang === 'ar' ? 'en' : 'ar';
            document.documentElement.setAttribute('dir', this.lang === 'ar' ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('lang', this.lang);
        },

        get filteredStudyQuestions() {
            const subjectObj = quizzesData[this.studyGuideSubject];
            if (!subjectObj) return [];
            
            let quiz = (subjectObj.arabicOnly || !subjectObj[this.lang]) ? (subjectObj.ar || subjectObj) : subjectObj[this.lang];
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