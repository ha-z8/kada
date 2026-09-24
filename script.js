const quizzesData = {
    aqeedah: {
        ...aqeedahData,
        arabicOnly: true,
        category: "العقيدة الإسلامية",
        title: "منهج العقيدة للكليات العسكرية"
    },
    chem: chemistryData,
    math: mathData,
    comp: computerData
};

function quizApp() {
    return {
        // دمج نظام الإشعارات
        ...createNotifier(),

        currentView: 'home',
        activeKey: 'aqeedah',
        timerSeconds: 30,
        currentTitle: '',
        currentCategory: '',
        currentQuestions: [],
        currentIndex: 0,
        userAnswers: [],
        score: 0,
        userHistory: [],
        studyGuideSubject: 'aqeedah',
        searchQuery: '',
        timerInterval: null,
        timeLeft: 30,
        
        bookmarks: JSON.parse(localStorage.getItem('kaada_bookmarks') || '[]'),
        userNotes: localStorage.getItem('kaada_user_notes') || '',
        calcCorrect: 18,
        calcTotal: 20,
        pomoSeconds: 25 * 60,
        pomoRunning: false,
        pomoInterval: null,

        statsTotalQuizzes: parseInt(localStorage.getItem('kaada_total_quizzes') || '0'),
        statsTotalScoreSum: parseInt(localStorage.getItem('kaada_score_sum') || '0'),

        get statsAvgScore() {
            if (this.statsTotalQuizzes === 0) return 0;
            return Math.round(this.statsTotalScoreSum / this.statsTotalQuizzes);
        },

        flashcardIndex: 0,
        flashcardFlipped: false,

        openFlashcards() {
            clearInterval(this.timerInterval);
            this.flashcardIndex = 0;
            this.flashcardFlipped = false;
            this.currentView = 'flashcards';
        },

        getFlashcardsList() {
            const sub = quizzesData[this.studyGuideSubject] || quizzesData.chem;
            const qObj = (sub.arabicOnly || !sub[this.lang]) ? sub.ar : sub[this.lang];
            return qObj.questions || qObj;
        },

        getCurrentFlashcard() {
            const list = this.getFlashcardsList();
            return list[this.flashcardIndex] || { q: 'لا توجد بطاقات', explanation: '' };
        },

        nextFlashcard() {
            const list = this.getFlashcardsList();
            if (this.flashcardIndex < list.length - 1) this.flashcardIndex++;
            else this.flashcardIndex = 0;
        },

        prevFlashcard() {
            const list = this.getFlashcardsList();
            if (this.flashcardIndex > 0) this.flashcardIndex--;
            else this.flashcardIndex = list.length - 1;
        },

        customSubject: 'chem',
        customCount: 10,

        openCustomQuizBuilder() {
            clearInterval(this.timerInterval);
            this.currentView = 'custom_quiz';
        },

        startCustomQuiz() {
            const quizGroup = quizzesData[this.customSubject];
            if (!quizGroup) return;

            let targetQuiz = (quizGroup.arabicOnly || !quizGroup[this.lang]) ? quizGroup.ar : quizGroup[this.lang];
            let rawQuestions = [...(targetQuiz.questions || targetQuiz)];
            
            rawQuestions.sort(() => Math.random() - 0.5);
            const selectedQuestions = rawQuestions.slice(0, this.customCount);

            this.activeKey = this.customSubject;
            this.currentTitle = "المحاكي والاختبار الحر";
            this.currentCategory = "تدريب حر";

            this.currentQuestions = selectedQuestions.map(q => {
                const correctText = q.options[q.correct];
                const shuffledOptions = [...q.options];
                shuffledOptions.sort(() => Math.random() - 0.5);
                const newCorrectIndex = shuffledOptions.indexOf(correctText);

                return {
                    q: q.q,
                    options: shuffledOptions,
                    correct: newCorrectIndex !== -1 ? newCorrectIndex : 0,
                    explanation: q.explanation || "الشرح غير متوفر."
                };
            });

            this.currentIndex = 0;
            this.userAnswers = new Array(this.currentQuestions.length).fill(null);
            this.currentView = 'quiz';
            this.loadQuestion();
            this.showNotify('✨ تم إنشاء الاختبار المخصص بنجاح');
        },

        openAnalytics() {
            clearInterval(this.timerInterval);
            this.currentView = 'analytics';
        },

        toggleBookmark(questionObj) {
            const index = this.bookmarks.findIndex(b => b.q === questionObj.q);
            if (index >= 0) {
                this.bookmarks.splice(index, 1);
                this.showNotify('🗑️ تم إزالة السؤال من بنك المفضلة');
            } else {
                this.bookmarks.push(questionObj);
                this.showNotify('⭐ تم حفظ السؤال في بنك المفضلة بنجاح');
            }
            localStorage.setItem('kaada_bookmarks', JSON.stringify(this.bookmarks));
        },

        isBookmarked(questionObj) {
            if (!questionObj) return false;
            return this.bookmarks.some(b => b.q === questionObj.q);
        },

        saveNotes() {
            localStorage.setItem('kaada_user_notes', this.userNotes);
        },

        openBookmarks() {
            clearInterval(this.timerInterval);
            this.currentView = 'bookmarks';
        },

        openNotes() {
            clearInterval(this.timerInterval);
            this.currentView = 'notes';
        },

        openCalculator() {
            clearInterval(this.timerInterval);
            this.currentView = 'calculator';
        },

        openPomodoro() {
            clearInterval(this.timerInterval);
            this.currentView = 'pomodoro';
        },

        calculateGPA() {
            if (!this.calcTotal || this.calcTotal <= 0) return { percentage: 0, grade: 'غير محدد' };
            const pct = Math.round((this.calcCorrect / this.calcTotal) * 100);
            let grade = '';
            const ar = this.lang === 'ar';
            if (pct >= 90) grade = ar ? 'ممتاز مرتفع (A+)' : 'Distinction (A+)';
            else if (pct >= 80) grade = ar ? 'ممتاز (A)' : 'Excellent (A)';
            else if (pct >= 70) grade = ar ? 'جيد جداً (B)' : 'Very Good (B)';
            else if (pct >= 60) grade = ar ? 'جيد (C)' : 'Good (C)';
            else grade = ar ? 'يحتاج تحسين' : 'Needs Improvement';
            return { percentage: pct, grade: grade };
        },

        startPomodoro() {
            if (this.pomoRunning) return;
            this.pomoRunning = true;
            this.showNotify('🔥 بدأت جلسة التركيز (25 دقيقة)');
            this.pomoInterval = setInterval(() => {
                if (this.pomoSeconds > 0) {
                    this.pomoSeconds--;
                } else {
                    this.pomoRunning = false;
                    clearInterval(this.pomoInterval);
                    this.showNotify('🎉 انتهت جلسة التركيز! استرح قليلاً.');
                }
            }, 1000);
        },

        pausePomodoro() {
            this.pomoRunning = false;
            clearInterval(this.pomoInterval);
            this.showNotify('⏸️ تم إيقاف المؤقت مؤقتاً', 'warning');
        },

        resetPomodoro() {
            this.pausePomodoro();
            this.pomoSeconds = 25 * 60;
            this.showNotify('🔄 تم إعادة ضبط مؤقت التركيز');
        },

        formatPomodoroTime() {
            const mins = Math.floor(this.pomoSeconds / 60);
            const secs = this.pomoSeconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        },

        get filteredStudyQuestions() {
            const subjectObj = quizzesData[this.studyGuideSubject];
            if (!subjectObj) return [];
            
            let quiz = null;
            if (subjectObj.arabicOnly || !subjectObj[this.lang]) {
                quiz = subjectObj.ar || subjectObj;
            } else {
                quiz = subjectObj[this.lang];
            }

            const list = quiz && quiz.questions ? quiz.questions : (Array.isArray(quiz) ? quiz : []);
            
            if (!this.searchQuery.trim()) return list;
            const q = this.searchQuery.toLowerCase();
            return list.filter(item => 
                item.q.toLowerCase().includes(q) || 
                item.explanation.toLowerCase().includes(q)
            );
        },

        isSubjectVisible(key) {
            const item = quizzesData[key];
            if (item && item.arabicOnly && this.lang !== 'ar') {
                return false;
            }
            return true;
        },

        startQuiz(key) {
            this.activeKey = key;
            const quizGroup = quizzesData[key];
            if (!quizGroup) return;
            
            if (quizGroup.arabicOnly && this.lang !== 'ar') return;

            let targetQuiz = null;
            if (quizGroup.arabicOnly || !quizGroup[this.lang]) {
                targetQuiz = quizGroup.ar || quizGroup;
            } else {
                targetQuiz = quizGroup[this.lang];
            }

            const rawQuestions = targetQuiz.questions || targetQuiz;
            if (!rawQuestions || rawQuestions.length === 0) return;

            this.currentTitle = quizGroup.title || targetQuiz.title || "اختبار المادة";
            this.currentCategory = quizGroup.category || targetQuiz.category || "اختبار شامل";

            this.currentQuestions = JSON.parse(JSON.stringify(rawQuestions)).map(q => {
                const correctText = q.options[q.correct];
                const shuffledOptions = [...q.options];
                for (let i = shuffledOptions.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
                }
                const newCorrectIndex = shuffledOptions.indexOf(correctText);

                return {
                    q: q.q,
                    options: shuffledOptions,
                    correct: newCorrectIndex !== -1 ? newCorrectIndex : 0,
                    explanation: q.explanation || "الشرح غير متوفر."
                };
            });

            this.currentIndex = 0;
            this.userAnswers = new Array(this.currentQuestions.length).fill(null);
            this.currentView = 'quiz';
            this.loadQuestion();
            this.showNotify('🚀 تم بدء الاختبار بنجاح');
        },

        loadQuestion() {
            if (this.timerSeconds > 0) {
                clearInterval(this.timerInterval);
                this.timeLeft = this.timerSeconds;
                this.timerInterval = setInterval(() => {
                    this.timeLeft--;
                    if (this.timeLeft <= 0) {
                        clearInterval(this.timerInterval);
                        if (this.currentIndex < this.currentQuestions.length - 1) {
                            this.nextQuestion();
                        }
                    }
                }, 1000);
            }
        },

        selectOption(optionIdx) {
            this.userAnswers[this.currentIndex] = optionIdx;
        },

        nextQuestion() {
            if (this.currentIndex < this.currentQuestions.length - 1) {
                this.currentIndex++;
                this.loadQuestion();
            }
        },

        prevQuestion() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.loadQuestion();
            }
        },

        finishQuiz() {
            clearInterval(this.timerInterval);
            this.score = 0;
            this.userHistory = [];

            this.currentQuestions.forEach((q, idx) => {
                const selected = this.userAnswers[idx];
                const isCorrect = (selected === q.correct);
                if (isCorrect) this.score++;
                this.userHistory.push({
                    question: q.q,
                    options: q.options,
                    selected: selected,
                    correct: q.correct,
                    isCorrect: isCorrect,
                    explanation: q.explanation
                });
            });

            this.statsTotalQuizzes++;
            const pct = this.getResultPercentage();
            this.statsTotalScoreSum += pct;
            localStorage.setItem('kaada_total_quizzes', this.statsTotalQuizzes);
            localStorage.setItem('kaada_score_sum', this.statsTotalScoreSum);

            this.currentView = 'results';
            this.showNotify('🏁 انتهى الاختبار! تم رصد النتيجة بنجاح.');
        },

        getResultPercentage() {
            if (this.currentQuestions.length === 0) return 0;
            return Math.round((this.score / this.currentQuestions.length) * 100);
        },

        getResultTitle() {
            const pct = this.getResultPercentage();
            const ar = this.lang === 'ar';
            if (pct >= 85) return ar ? "أداء مبهر! ممتاز جداً" : "Outstanding Performance!";
            if (pct >= 60) return ar ? "أداء جيد، يمكنك مراجعة الأخطاء" : "Good Job, Review Mistakes!";
            return ar ? "تحتاج إلى مراجعة ودراسة إضافية" : "Needs More Review & Study";
        },

        getResultBadgeText() {
            const pct = this.getResultPercentage();
            const ar = this.lang === 'ar';
            if (pct >= 90) return ar ? "🏆 وسام التفوق والامتياز" : "🏆 Distinction Badge";
            if (pct >= 75) return ar ? "⭐ وسام الأداء المتميز" : "⭐ Excellence Badge";
            return ar ? "💡 وسام المثابرة والاجتهاد" : "💡 Perseverance Badge";
        },

        hasMistakes() {
            return this.userHistory.some(item => !item.isCorrect);
        },

        retakeMistakesOnly() {
            const mistakes = this.userHistory.filter(item => !item.isCorrect);
            if (mistakes.length === 0) return;

            this.currentQuestions = mistakes.map(m => ({
                q: m.question,
                options: m.options,
                correct: m.correct,
                explanation: m.explanation
            }));

            this.currentIndex = 0;
            this.userAnswers = new Array(this.currentQuestions.length).fill(null);
            this.currentView = 'quiz';
            this.loadQuestion();
            this.showNotify('🔄 بدء مراجعة وإعادة الأسئلة الخاطئة فقط');
        },

        restartCurrentQuiz() {
            this.startQuiz(this.activeKey);
        },

        openStudyGuide() {
            clearInterval(this.timerInterval);
            this.studyGuideSubject = this.activeKey || 'chem';
            this.searchQuery = '';
            this.currentView = 'study_guide';
        },

        returnToHome() {
            clearInterval(this.timerInterval);
            this.currentView = 'home';
        }
    }
}