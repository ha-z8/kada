const quizzesData = {
    aqeedah: {
        ...aqeedahData,
        arabicOnly: true // خاص بالعربي فقط
    },
    fiqh: {
        ...fiqhData,
        arabicOnly: true // خاص بالعربي فقط
    },
    chem: chemistryData,
    math: mathData,
    comp: computerData
};

function quizApp() {
    return {
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
        timerInterval: null,
        timeLeft: 30,

        // دالة مساعدة لفحص هل المادة تظهر في القائمة حسب اللغة الحالية
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
            
            // إذا كانت المادة عربية فقط ولغة الموقع إنجليزية، امنع الدخول
            if (quizGroup.arabicOnly && this.lang !== 'ar') return;

            const quiz = quizGroup[this.lang] || quizGroup.ar;
            this.currentTitle = quizGroup.title;
            this.currentCategory = quizGroup.category;

            // خلط وتوزيع الأسئلة والخيارات عشوائياً في كل مرة يفتح فيها الاختبار
            this.currentQuestions = JSON.parse(JSON.stringify(quiz.questions)).map(q => {
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
                    correct: newCorrectIndex,
                    explanation: q.explanation
                };
            });

            this.currentIndex = 0;
            this.userAnswers = new Array(this.currentQuestions.length).fill(null);
            this.currentView = 'quiz';
            this.loadQuestion();
        },

        loadQuestion() {
            if (this.timerSeconds > 0) {
                clearInterval(this.timerInterval);
                this.timeLeft = this.timerSeconds;
                this.timerInterval = setInterval(() => {
                    this.timeLeft--;
                    if (this.timeLeft <= 0) {
                        clearInterval(this.timerInterval);
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
                if (isCorrect) {
                    this.score++;
                }
                this.userHistory.push({
                    question: q.q,
                    options: q.options,
                    selected: selected,
                    correct: q.correct,
                    isCorrect: isCorrect,
                    explanation: q.explanation
                });
            });

            this.currentView = 'results';
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

        restartCurrentQuiz() {
            this.startQuiz(this.activeKey);
        },

        openStudyGuide() {
            clearInterval(this.timerInterval);
            this.studyGuideSubject = this.activeKey || 'chem';
            this.currentView = 'study_guide';
        },

        returnToHome() {
            clearInterval(this.timerInterval);
            this.currentView = 'home';
        }
    }
}