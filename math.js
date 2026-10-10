const mathData = {
    title: "الاختبار النهائي الشامل: كافة قوانين الجبر، الهندسة، التفاضل، التكامل، والدوال المثلثية بالتفصيل الدقيق",
    category: "Complete Exhaustive Final Exam: All Algebra, Geometry, Calculus & Trigonometry Laws",
    ar: {
        questions: [
            // S.1
            {
                q: "ما هي الصيغة العامة لمعادلة خطية بمجهول واحد (The Linear Equation in One Unknown)؟",
                options: [
                    "ax + b = 0",
                    "ax + by + c = 0",
                    "ax^2 + bx + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "الصيغة العامة لمعادلة خطية بمجهول واحد هي ax + b = 0[cite: 19, 21]."
            },
            // S.2
            {
                q: "ما هو حل المعادلة الخطية بمجهول واحد: 2x + 14 = 0 ؟",
                options: [
                    "x = -7",
                    "x = 5",
                    "x = 1",
                    "x = 2"
                ],
                correct: 0,
                explanation: "بحل المعادلة 2x + 14 = 0 نقل 14 للطرف الآخر ثم القسمة على 2 ينتج x = -7[cite: 19]."
            },
            // S.3
            {
                q: "ما هو حل المعادلة الخطية بمجهول واحد: 8x - 3 = 2x + 27 ؟",
                options: [
                    "x = 5",
                    "x = -7",
                    "x = 1",
                    "x = 2"
                ],
                correct: 0,
                explanation: "بترتيب الحدود: 8x - 2x = 27 + 3 أي 6x = 30 ومنها x = 5[cite: 18, 19]."
            },
            // S.4
            {
                q: "ما هو حل المعادلة الخطية التي تحتوي على كسور: (1/2)x + (2/3)x = (x/6) + (2/3) ؟",
                options: [
                    "x = 1",
                    "x = 5",
                    "x = -7",
                    "x = 2"
                ],
                correct: 0,
                explanation: "بتوحيد المقامات وحل المعادلة الناتجة ينتج x = 1[cite: 19]."
            },
            // S.5
            {
                q: "ما هو حل المعادلة الخطية: 2x + 3(x - 2) = 6 - 2(x - 1) ؟",
                options: [
                    "x = 2",
                    "x = 5",
                    "x = 1",
                    "x = -7"
                ],
                correct: 0,
                explanation: "بفك الأقواس وتجميع الحدود المتشابهة ينتج x = 2[cite: 19]."
            },
            // S.6
            {
                q: "ما هي الصيغة العامة لمعادلة خطية بمجهولين (The Linear Equation in Two Unknowns)؟",
                options: [
                    "ax + by + c = 0",
                    "ax + b = 0",
                    "ax^2 + bx + c = 0",
                    "y = mx + b"
                ],
                correct: 0,
                explanation: "الصيغة العامة لمعادلة خطية بمجهولين هي ax + by + c = 0[cite: 19, 21]."
            },
            // S.7
            {
                q: "ما هي الأزواج المرتبطة التي تحقق المعادلة الخطية بمجهولين: 3x + y = 5 ؟",
                options: [
                    "(0, 5), (1, 2), (2, -1)",
                    "(0, -3), (1, -1.5), (2, 0)",
                    "(1, 1), (2, 2), (3, 3)",
                    "(-1, 5), (0, 0), (2, 3)"
                ],
                correct: 0,
                explanation: "بالتعويض بقيم x في المعادلة نجد أن الأزواج هي (0, 5), (1, 2), (2, -1)[cite: 19]."
            },
            // S.8
            {
                q: "ما هي الأزواج المرتبطة التي تحقق المعادلة: 3x - 2y = 6 ؟",
                options: [
                    "(0, -3), (1, -1.5), (2, 0)",
                    "(0, 5), (1, 2), (2, -1)",
                    "(3, 2), (4, 6), (1, 1)",
                    "(-2, 5/3), (-1, 6)"
                ],
                correct: 0,
                explanation: "بالتعويض بالقيم نجد أن الأزواج هي (0, -3), (1, -1.5), (2, 0)[cite: 19]."
            },
            // S.9
            {
                q: "ما هي قيمة الثابت b إذا كانت النقطة (-2, 1) تحقق المعادلة 3x + by = 1 ؟",
                options: [
                    "b = 7",
                    "b = 5",
                    "b = -2",
                    "b = 0"
                ],
                correct: 0,
                explanation: "بالتعويض بـ x = -2 و y = 1 في المعادلة: 3(-2) + b(1) = 1 أي -6 + b = 1 ومنها b = 7[cite: 19]."
            },
            // S.10
            {
                q: "ما هي القيمة المطلقة للعدد الحقيقي |2| ؟",
                options: [
                    "2",
                    "-2",
                    "0",
                    "1"
                ],
                correct: 0,
                explanation: "القيمة المطلقة لأي عدد موجب هي نفس العدد، إذن |2| = 2[cite: 19]."
            },
            // S.11
            {
                q: "ما هي القيمة المطلقة للعدد الحقيقي |-5| ؟",
                options: [
                    "5",
                    "-5",
                    "0",
                    "1"
                ],
                correct: 0,
                explanation: "القيمة المطلقة تحول العدد السالب إلى موجب، إذن |-5| = 5[cite: 19]."
            },
            // S.12
            {
                q: "ما هي القيمة المطلقة للعدد الحقيقي |0| ؟",
                options: [
                    "0",
                    "1",
                    "-1",
                    "5"
                ],
                correct: 0,
                explanation: "القيمة المطلقة للصفر هي صفر، أي |0| = 0[cite: 19]."
            },
            // S.13
            {
                q: "من خصائص القيمة المطلقة، ما هي الصيغة الصحيحة لقسمة قيمتين مطلقبتين |x / y| بشرط y لا تساوي صفر؟",
                options: [
                    "|x| / |y|",
                    "|x + y|",
                    "|x . y|",
                    "|a^2|"
                ],
                correct: 0,
                explanation: "من خصائص القيمة المطلقة: |x / y| = |x| / |y| حيث y لا تساوي صفر[cite: 19]."
            },
            // S.14
            {
                q: "ما هي الخاصية المرتبطة بضرب قيمتين مطلقبتين |x . y| من خواص القيمة المطلقة؟",
                options: [
                    "|x| . |y|",
                    "|x| + |y|",
                    "|x / y|",
                    "|a|"
                ],
                correct: 0,
                explanation: "خاصية الضرب: |x . y| = |x| . |y|[cite: 19]."
            },
            // S.15
            {
                q: "ما هي متباينة المثلث (Triangle Inequality) المرتبطة بالجمع من خصائص القيمة المطلقة؟",
                options: [
                    "|x + y| <= |x| + |y|",
                    "|x + y| = |x| + |y|",
                    "|x . y| = |x| . |y|",
                    "|a^2| = |a|"
                ],
                correct: 0,
                explanation: "متباينة الجمع للقيمة المطلقة هي |x + y| <= |x| + |y|[cite: 19]."
            },
            // S.16
            {
                q: "من خصائص القيمة المطلقة، ما هي نتيجة المربع |a^2| ؟",
                options: [
                    "|a|^2 أو a^2",
                    "|a|",
                    "-|a|",
                    "0"
                ],
                correct: 0,
                explanation: "مربع القيمة المطلقة يساوي مربع العدد الحقيقي نفسه، أي |a^2| = |a|^2 = a^2[cite: 19]."
            },
            // S.17
            {
                q: "ما هي الخاصية المرتبطة بمعكوس العدد في القيمة المطلقة |-a| ؟",
                options: [
                    "|a|",
                    "-|a|",
                    "a^2",
                    "0"
                ],
                correct: 0,
                explanation: "القيمة المطلقة للعدد تساوي القيمة المطلقة لمعكوسه، أي |-a| = |a|[cite: 19]."
            },
            // S.18
            {
                q: "ما هي صيغة قانون المسافة بين نقطتين P1(x1, y1) و P2(x2, y2) ؟",
                options: [
                    "الجذر التربيعي لـ ((x2 - x1)^2 + (y2 - y1)^2)",
                    "((x2 + x1)/2, (y2 + y1)/2)",
                    "y2 - y1 / x2 - x1",
                    "y = mx + b"
                ],
                correct: 0,
                explanation: "قانون المسافة بين نقطتين هو الجذر التربيعي لـ ((x2 - x1)^2 + (y2 - y1)^2)[cite: 19, 21]."
            },
            // S.19
            {
                q: "ما هي المسافة بين النقطتين (1, 2) و (4, 6)؟",
                options: [
                    "5",
                    "4",
                    "جذر 17",
                    "3"
                ],
                correct: 0,
                explanation: "باستخدام قانون المسافة: جذر((4 - 1)^2 + (6 - 2)^2) = جذر(3^2 + 4^2) = جذر(9 + 16) = جذر(25) = 5[cite: 19]."
            },
            // S.20
            {
                q: "ما هو الرمز المستخدم للدلالة على ميل الخط المستقيم (The Symbol of the Slope)؟",
                options: [
                    "m",
                    "b",
                    "x",
                    "y"
                ],
                correct: 0,
                explanation: "رمز الميل في المعادلات الخطية هو الحرف m[cite: 19, 21]."
            },
            // S.21
            {
                q: "ما هي صيغة حساب ميل الخط المستقيم المار بالنقطتين P1(x1, y1) و P2(x2, y2) ؟",
                options: [
                    "m = (y2 - y1) / (x2 - x1)",
                    "m = (x2 - x1) / (y2 - y1)",
                    "y - y1 = m(x - x1)",
                    "y = mx + b"
                ],
                correct: 0,
                explanation: "قانون حساب الميل بنقطتين هو m = (y2 - y1) / (x2 - x1)[cite: 19, 21]."
            },
            // S.22
            {
                q: "ما هو ميل الخط المستقيم المار بالنقطتين (-2, -3) و (-4, 1) ؟",
                options: [
                    "m = -2",
                    "m = 2",
                    "m = 1/2",
                    "m = -1/2"
                ],
                correct: 0,
                explanation: "بتطبيق قانون الميل: m = (1 - (-3)) / (-4 - (-2)) = 4 / -2 = -2[cite: 19]."
            },
            // S.23
            {
                q: "ما هي معادلة الخط المستقيم بمعلومية ميله ونقطة تمر به (Equation of a Line Given Its Slope and a Point)؟",
                options: [
                    "y - y1 = m(x - x1)",
                    "y = mx + b",
                    "ax + by + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "معادلة المستقيم بميل ونقطة هي y - y1 = m(x - x1)[cite: 19, 21]."
            },
            // S.24
            {
                q: "ما هي معادلة الخط المستقيم المار بالنقطة (3, -1) وميله يساوي 1 ؟",
                options: [
                    "y - x = -4",
                    "y + x = 2",
                    "y = x + 3",
                    "y - 1 = x - 3"
                ],
                correct: 0,
                explanation: "بالتعويض في صيغة الميل والنقطة: y - (-1) = 1(x - 3) أي y + 1 = x - 3 ومنها y - x = -4[cite: 19]."
            },
            // S.25
            {
                q: "ما هي الصيغة العامة لمعادلة الخط المستقيم بمعلومية ميله وجزء مقطوع من محور الصادات (Slope-Intercept Form)؟",
                options: [
                    "y = mx + b",
                    "y - y1 = m(x - x1)",
                    "ax + by + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "الصيغة العامة للميل والجزء المقطوع هي y = mx + b حيث b هو الجزء المقطوع من محور y[cite: 19, 21]."
            },
            // S.26
            {
                q: "ما هو ميل الخط المستقيم للمعادلة 2y + 3x = 10 عند كتابتها بالصيغة y = mx + b ؟",
                options: [
                    "-3/2",
                    "3/2",
                    "5",
                    "-2/3"
                ],
                correct: 0,
                explanation: "بترتيب المعادلة لتصبح على الصورة y = -3/2 x + 5، إذن الميل m يساوي -3/2[cite: 19]."
            },
            // S.27
            {
                q: "ما هي الصيغة العامة للمعادلة التربيعية في مجهول واحد (The Quadratic Equation in One Unknown)؟",
                options: [
                    "ax^2 + bx + c = 0",
                    "ax + b = 0",
                    "ax + by + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "الصيغة العامة للمعادلة التربيعية في مجهول واحد هي ax^2 + bx + c = 0[cite: 19, 21]."
            },
            // S.28
            {
                q: "ما هو حل المعادلة التربيعية: x(x - 3) = 0 ؟",
                options: [
                    "{0, 3}",
                    "{-3, 0}",
                    "{1, 3}",
                    "{-3, 3}"
                ],
                correct: 0,
                explanation: "إما x = 0 أو x - 3 = 0 أي x = 3، إذن مجموعة الحل هي {0, 3}[cite: 19]."
            },
            // S.29
            {
                q: "ما هو حل المعادلة التربيعية: (x + 2)(3x - 5) = 0 ؟",
                options: [
                    "{-2, 5/3}",
                    "{2, -5/3}",
                    "{-3, 2/5}",
                    "{0, 5/3}"
                ],
                correct: 0,
                explanation: "إما x + 2 = 0 أي x = -2، أو 3x - 5 = 0 أي x = 5/3، إذن الحل هو {-2, 5/3}[cite: 19]."
            },
            // S.30
            {
                q: "ما هو حل المعادلة التربيعية: x^2 - 5x - 6 = 0 ؟",
                options: [
                    "{-1, 6}",
                    "{1, -6}",
                    "{-2, 3}",
                    "{2, -3}"
                ],
                correct: 0,
                explanation: "بتحليل المعادلة إلى (x - 6)(x + 1) = 0 إذن الحلول هي x = 6 و x = -1، أي {-1, 6}[cite: 19]."
            },
            // S.31
            {
                q: "ما هو حل المعادلة التربيعية: x^2 + 8x + 15 = 0 ؟",
                options: [
                    "{-3, -5}",
                    "{3, 5}",
                    "{-1, 15}",
                    "{-3, 5}"
                ],
                correct: 0,
                explanation: "بتحليل المعادلة إلى (x + 3)(x + 5) = 0 إذن الحلول هي {-3, -5}[cite: 19]."
            },
            // S.32
            {
                q: "ما هو الحل العام (الجذور) للمعادلة التربيعية: 36x^2 + 84x + 49 = 0 ؟",
                options: [
                    "{-7/6}",
                    "{7/6}",
                    "{-6/7}",
                    "{-7/6, 7/6}"
                ],
                correct: 0,
                explanation: "المعادلة تمثل مربعاً كاملاً (6x + 7)^2 = 0، ومنها x = -7/6[cite: 19]."
            },
            // S.33
            {
                q: "ما هو الحل العام للمعادلة التربيعية: 25x^2 + 20x + 4 = 0 ؟",
                options: [
                    "{-2/5}",
                    "{2/5}",
                    "{-5/2}",
                    "{-2/5, 2/5}"
                ],
                correct: 0,
                explanation: "المعادلة تمثل مربعاً كاملاً (5x + 2)^2 = 0، ومنها x = -2/5[cite: 19]."
            },
            // S.34
            {
                q: "ما هو حل معادلة الفرق بين مربعين: x^2 - 4 = 0 ؟",
                options: [
                    "{-2, 2}",
                    "{4}",
                    "{-4, 4}",
                    "{0, 2}"
                ],
                correct: 0,
                explanation: "بتحليل الفرق بين مربعين (x - 2)(x + 2) = 0، إذن الحل هو {-2, 2}[cite: 19]."
            },
            // S.35
            {
                q: "ما هو حل معادلة الفرق بين مربعين: x^2 - 25 = 0 ؟",
                options: [
                    "{-5, 5}",
                    "{25}",
                    "{-25, 25}",
                    "{0, 5}"
                ],
                correct: 0,
                explanation: "بالتحليل (x - 5)(x + 5) = 0، إذن الحل هو {-5, 5}[cite: 20]."
            },
            // S.36
            {
                q: "ما هو حل معادلة الفرق بين مربعين: x^2 - 1 = 0 ؟",
                options: [
                    "{-1, 1}",
                    "{0, 1}",
                    "{-1}",
                    "{1}"
                ],
                correct: 0,
                explanation: "بالتحليل (x - 1)(x + 1) = 0، إذن الحل هو {-1, 1}[cite: 20]."
            },
            // S.37
            {
                q: "ما هو حل المعادلة: x^2 + 12x = 0 ؟",
                options: [
                    "{-12, 0}",
                    "{12, 0}",
                    "{-6, 6}",
                    "{0}"
                ],
                correct: 0,
                explanation: "بأخذ عامل مشترك x(x + 12) = 0، إذن الحل هو {-12, 0}[cite: 20]."
            },
            // S.38
            {
                q: "ما هو حل المعادلة: x^2 - 6x + 5 = 0 ؟",
                options: [
                    "{1, 5}",
                    "{-1, -5}",
                    "{-5, 6}",
                    "{2, 3}"
                ],
                correct: 0,
                explanation: "بالتحليل (x - 1)(x - 5) = 0، إذن الحل هو {1, 5}[cite: 20]."
            },
            // S.39
            {
                q: "ما هي صيغة القانون العام (Quadratic Formula) لحل المعادلة التربيعية ax^2 + bx + c = 0 ؟",
                options: [
                    "x = (-b ± sqrt(b^2 - 4ac)) / 2a",
                    "x = (-b ± sqrt(4ac - b^2)) / 2a",
                    "x = (b ± sqrt(b^2 + 4ac)) / a",
                    "x = -b / 2a"
                ],
                correct: 0,
                explanation: "صيغة القانون العام هي x = (-b ± sqrt(b^2 - 4ac)) / 2a[cite: 20, 21]."
            },
            // S.40
            {
                q: "باستخدام القانون العام، ما هو حل المعادلة التربيعية x^2 - 5x + 6 = 0 ؟",
                options: [
                    "{3, 2}",
                    "{-3, -2}",
                    "{1, 6}",
                    "{-1, 5}"
                ],
                correct: 0,
                explanation: "بالتحليل أو القانون العام (x - 2)(x - 3) = 0، إذن الجذور هي {3, 2}[cite: 20]."
            },
            // S.41
            {
                q: "باستخدام القانون العام، ما هو حل المعادلة التربيعية x^2 - 9 = 0 ؟",
                options: [
                    "{3, -3}",
                    "{9}",
                    "{-9, 9}",
                    "{0, 3}"
                ],
                correct: 0,
                explanation: "بحل المعادلة x^2 = 9 إذن x = ±3، ومجموعة الحل {3, -3}[cite: 20]."
            },
            // S.42
            {
                q: "ما هي الصيغة العامة لمعادلة دائرية بمتغيرين (A Quadratic Equation in Two Variables / Equation of a Circle)؟",
                options: [
                    "ax^2 + by^2 + cx + dy + r = 0",
                    "ax + by + c = 0",
                    "y = mx + b",
                    "x^2 + y^2 = 0"
                ],
                correct: 0,
                explanation: "الصيغة العامة لمعادلة الدائرة بمتغيرين هي ax^2 + by^2 + cx + dy + r = 0[cite: 20, 21]."
            },
            // S.43
            {
                q: "ما هي معادلة الدائرة التي مركزها نقطة الأصل (0,0) ونصف قطرها 5 وحدات؟",
                options: [
                    "x^2 + y^2 = 25",
                    "x^2 + y^2 = 5",
                    "x^2 + y^2 = 10",
                    "(x - 5)^2 + (y - 5)^2 = 25"
                ],
                correct: 0,
                explanation: "معادلة الدائرة بمركز الأصل ونصف قطر r هي x^2 + y^2 = r^2، وبما أن r = 5 إذن x^2 + y^2 = 25[cite: 20]."
            },
            // S.44
            {
                q: "ما هو الرمز المستخدم للدلالة على الاشتقاق (The Symbol of Derivation)؟",
                options: [
                    "dy/dx أو y'",
                    "f(x) dx",
                    "int f(x)",
                    "m"
                ],
                correct: 0,
                explanation: "رمز الاشتقاق هو dy/dx أو y'[cite: 20, 21]."
            },
            // S.45
            {
                q: "ما هي مشتقة الدالة الثابتة (The Constant Function Derivative) f(x) = c حيث c ثابت؟",
                options: [
                    "f'(x) = 0",
                    "f'(x) = c",
                    "f'(x) = 1",
                    "f'(x) = x"
                ],
                correct: 0,
                explanation: "مشتقة أي عدد ثابت تساوي صفراً، أي f'(x) = 0[cite: 20]."
            },
            // S.46
            {
                q: "ما هي قاعدة مشتقة دالة القوة (The Power Function Derivative) لـ y = [f(x)]^n ؟",
                options: [
                    "y' = n[f(x)]^(n-1) . f'(x)",
                    "y' = n[f(x)]^n",
                    "y' = [f(x)]^(n-1)",
                    "y' = f'(x) / n"
                ],
                correct: 0,
                explanation: "قاعدة مشتقة القوة (السلسلة): y' = n[f(x)]^(n-1) . f'(x)[cite: 20]."
            },
            // S.47
            {
                q: "ما هي المشتقة الأولى للدالة f(x) = 4x^5 - 5x^2 + 5x - 1 ؟",
                options: [
                    "f'(x) = 20x^4 - 10x + 5",
                    "f'(x) = 4x^4 - 5x + 5",
                    "f'(x) = 20x^5 - 10x^2",
                    "f'(x) = 20x^4 + 10x - 5"
                ],
                correct: 0,
                explanation: "باشتقاق كل حد على حده: (5×4)x^4 - (2×5)x + 5 = 20x^4 - 10x + 5[cite: 20]."
            },
            // S.48
            {
                q: "ما هي المشتقة الأولى للدالة المركبة f(x) = (x^3 - 4x^2 + 3x - 6)^5 ؟",
                options: [
                    "f'(x) = 5(x^3 - 4x^2 + 3x - 6)^4 . (3x^2 - 8x + 3)",
                    "f'(x) = (x^3 - 4x^2 + 3x - 6)^4",
                    "f'(x) = 5(3x^2 - 8x + 3)^5",
                    "f'(x) = 15(x^3 - 4x^2 + 3x - 6)^4"
                ],
                correct: 0,
                explanation: "باستخدام قاعدة القوة (السلسلة): 5(x^3 - 4x^2 + 3x - 6)^4 مضروبة في مشتقة ما بداخل القوس (3x^2 - 8x + 3)[cite: 20]."
            },
            // S.49
            {
                q: "ما هي مشتقة دالة الجيب y = sin x ؟",
                options: [
                    "y' = cos x",
                    "y' = -sin x",
                    "y' = sec^2 x",
                    "y' = -csc^2 x"
                ],
                correct: 0,
                explanation: "مشتقة y = sin x هي y' = cos x[cite: 20, 21]."
            },
            // S.50
            {
                q: "ما هي مشتقة دالة جيب التمام y = cos x ؟",
                options: [
                    "y' = -sin x",
                    "y' = cos x",
                    "y' = csc^2 x",
                    "y' = sec x tan x"
                ],
                correct: 0,
                explanation: "مشتقة y = cos x هي y' = -sin x[cite: 20, 21]."
            },
            // S.51
            {
                q: "ما هي مشتقة دالة الظل y = tan x ؟",
                options: [
                    "y' = sec^2 x",
                    "y' = -csc^2 x",
                    "y' = sec x tan x",
                    "y' = -csc x cot x"
                ],
                correct: 0,
                explanation: "مشتقة y = tan x هي y' = sec^2 x[cite: 20, 21]."
            },
            // S.52
            {
                q: "ما هي مشتقة دالة تمام الظل y = cot x ؟",
                options: [
                    "y' = -csc^2 x",
                    "y' = sec^2 x",
                    "y' = -csc x cot x",
                    "y' = sec x tan x"
                ],
                correct: 0,
                explanation: "مشتقة y = cot x هي y' = -csc^2 x[cite: 20, 21]."
            },
            // S.53
            {
                q: "ما هي مشتقة دالة القاطع y = sec x ؟",
                options: [
                    "y' = sec x tan x",
                    "y' = -csc x cot x",
                    "y' = sec^2 x",
                    "y' = -sin x"
                ],
                correct: 0,
                explanation: "مشتقة y = sec x هي y' = sec x tan x[cite: 20, 21]."
            },
            // S.54
            {
                q: "ما هي مشتقة دالة قاطع التمام y = csc x ؟",
                options: [
                    "y' = -csc x cot x",
                    "y' = sec x tan x",
                    "y' = -csc^2 x",
                    "y' = cos x"
                ],
                correct: 0,
                explanation: "مشتقة y = csc x هي y' = -csc x cot x[cite: 20, 21]."
            },
            // S.55
            {
                q: "ما هو الرمز المستخدم للدلالة على التكامل (The Symbol of the Integral)؟",
                options: [
                    "الحرف الممدود int F(x) dx",
                    "dy/dx",
                    "y'",
                    "m"
                ],
                correct: 0,
                explanation: "رمز التكامل هو int F(x) dx[cite: 20, 21]."
            },
            // S.56
            {
                q: "ما هو تكامل الدالة f(x) = 20x^4 - 10x + 5 ؟",
                options: [
                    "4x^5 - 5x^2 + 5x + c",
                    "20x^5 - 10x^2 + 5x + c",
                    "5x^5 - 5x^2 + c",
                    "4x^4 - 10x + c"
                ],
                correct: 0,
                explanation: "التكامل: (20x^5)/5 - (10x^2)/2 + 5x + c = 4x^5 - 5x^2 + 5x + c[cite: 20]."
            },
            // S.57
            {
                q: "ما هو تكامل الدالة المركبة int 5(x^3 - 4x^2 + 3x - 6)^4 (3x^2 - 8x + 3) dx ؟",
                options: [
                    "(x^3 - 4x^2 + 3x - 6)^5 + c",
                    "5(x^3 - 4x^2 + 3x - 6)^5 + c",
                    "(3x^2 - 8x + 3)^5 + c",
                    "4x^5 - 5x^2 + c"
                ],
                correct: 0,
                explanation: "بما أن القوس مضروب في مشتقة ما بداخله، فتكاملها هو (x^3 - 4x^2 + 3x - 6)^5 + c[cite: 20]."
            },
            // S.58
            {
                q: "ما هو تكامل دالة الجيب int sin x dx ؟",
                options: [
                    "-cos x + c",
                    "sin x + c",
                    "tan x + c",
                    "-cot x + c"
                ],
                correct: 0,
                explanation: "تكامل int sin x dx هو -cos x + c[cite: 20, 21]."
            },
            // S.59
            {
                q: "ما هو تكامل دالة جيب التمام int cos x dx ؟",
                options: [
                    "sin x + c",
                    "-cos x + c",
                    "tan x + c",
                    "sec x + c"
                ],
                correct: 0,
                explanation: "تكامل int cos x dx هو sin x + c[cite: 20, 21]."
            },
            // S.60
            {
                q: "ما هو تكامل دالة الظل المربع int sec^2 x dx ؟",
                options: [
                    "tan x + c",
                    "-cot x + c",
                    "sec x + c",
                    "-csc x + c"
                ],
                correct: 0,
                explanation: "تكامل int sec^2 x dx هو tan x + c[cite: 20, 21]."
            },
            // S.61
            {
                q: "ما هو تكامل دالة تمام الظل المربع int csc^2 x dx ؟",
                options: [
                    "-cot x + c",
                    "tan x + c",
                    "sec x + c",
                    "sin x + c"
                ],
                correct: 0,
                explanation: "تكامل int csc^2 x dx هو -cot x + c[cite: 20, 21]."
            },
            // S.62
            {
                q: "ما هو تكامل الدالة int sec x tan x dx ؟",
                options: [
                    "sec x + c",
                    "-csc x + c",
                    "tan x + c",
                    "-cot x + c"
                ],
                correct: 0,
                explanation: "تكامل int sec x tan x dx هو sec x + c[cite: 20, 21]."
            },
            // S.63
            {
                q: "ما هو تكامل الدالة int csc x cot x dx ؟",
                options: [
                    "-csc x + c",
                    "sec x + c",
                    "tan x + c",
                    "sin x + c"
                ],
                correct: 0,
                explanation: "تكامل int csc x cot x dx هو -csc x + c[cite: 20, 21]."
            }
        ]
    },
    en: {
        questions: [
            // S.1
            {
                q: "What is the general form of a Linear Equation in One Unknown?",
                options: [
                    "ax + b = 0",
                    "ax + by + c = 0",
                    "ax^2 + bx + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "The general form of a linear equation in one unknown is ax + b = 0[cite: 19, 21]."
            },
            // S.2
            {
                q: "Find the solution of the equation 2x + 14 = 0",
                options: [
                    "x = -7",
                    "x = 5",
                    "x = 1",
                    "x = 2"
                ],
                correct: 0,
                explanation: "Solving 2x + 14 = 0 gives x = -7[cite: 19]."
            },
            // S.3
            {
                q: "Find the solution of the equation 8x - 3 = 2x + 27",
                options: [
                    "x = 5",
                    "x = -7",
                    "x = 1",
                    "x = 2"
                ],
                correct: 0,
                explanation: "Rearranging terms: 8x - 2x = 27 + 3 => 6x = 30 => x = 5[cite: 18, 19]."
            },
            // S.4
            {
                q: "Find the solution of the equation (1/2)x + (2/3)x = (x/6) + (2/3)",
                options: [
                    "x = 1",
                    "x = 5",
                    "x = -7",
                    "x = 2"
                ],
                correct: 0,
                explanation: "Solving the fractional linear equation yields x = 1[cite: 19]."
            },
            // S.5
            {
                q: "Find the solution of the equation 2x + 3(x - 2) = 6 - 2(x - 1)",
                options: [
                    "x = 2",
                    "x = 5",
                    "x = 1",
                    "x = -7"
                ],
                correct: 0,
                explanation: "Expanding and combining like terms yields x = 2[cite: 19]."
            },
            // S.6
            {
                q: "What is the general form of a Linear Equation in Two Unknowns?",
                options: [
                    "ax + by + c = 0",
                    "ax + b = 0",
                    "ax^2 + bx + c = 0",
                    "y = mx + b"
                ],
                correct: 0,
                explanation: "The general form of a linear equation in two unknowns is ax + by + c = 0[cite: 19, 21]."
            },
            // S.7
            {
                q: "Find three ordered pairs that satisfy the equation: 3x + y = 5",
                options: [
                    "(0, 5), (1, 2), (2, -1)",
                    "(0, -3), (1, -1.5), (2, 0)",
                    "(1, 1), (2, 2), (3, 3)",
                    "(-1, 5), (0, 0), (2, 3)"
                ],
                correct: 0,
                explanation: "Substituting values yields ordered pairs (0, 5), (1, 2), (2, -1)[cite: 19]."
            },
            // S.8
            {
                q: "Find three ordered pairs that satisfy the equation: 3x - 2y = 6",
                options: [
                    "(0, -3), (1, -1.5), (2, 0)",
                    "(0, 5), (1, 2), (2, -1)",
                    "(3, 2), (4, 6), (1, 1)",
                    "(-2, 5/3), (-1, 6)"
                ],
                correct: 0,
                explanation: "Substituting values yields ordered pairs (0, -3), (1, -1.5), (2, 0)[cite: 19]."
            },
            // S.9
            {
                q: "Find the value of the constant b if 3x + by = 1 with a pair (-2, 1)",
                options: [
                    "b = 7",
                    "b = 5",
                    "b = -2",
                    "b = 0"
                ],
                correct: 0,
                explanation: "Substituting x = -2 and y = 1 gives 3(-2) + b(1) = 1 => -6 + b = 1 => b = 7[cite: 19]."
            },
            // S.10
            {
                q: "What is the absolute value of a real number |2|?",
                options: [
                    "2",
                    "-2",
                    "0",
                    "1"
                ],
                correct: 0,
                explanation: "The absolute value of a positive number is itself, |2| = 2[cite: 19]."
            },
            // S.11
            {
                q: "What is the absolute value of a real number |-5|?",
                options: [
                    "5",
                    "-5",
                    "0",
                    "1"
                ],
                correct: 0,
                explanation: "The absolute value converts negative numbers to positive, |-5| = 5[cite: 19]."
            },
            // S.12
            {
                q: "What is the absolute value of a real number |0|?",
                options: [
                    "0",
                    "1",
                    "-1",
                    "5"
                ],
                correct: 0,
                explanation: "The absolute value of zero is zero, |0| = 0[cite: 19]."
            },
            // S.13
            {
                q: "From Properties of absolute value, what is |x / y| equal to (y != 0)?",
                options: [
                    "|x| / |y|",
                    "|x + y|",
                    "|x . y|",
                    "|a^2|"
                ],
                correct: 0,
                explanation: "From absolute value properties: |x / y| = |x| / |y| where y != 0[cite: 19]."
            },
            // S.14
            {
                q: "From Properties of absolute value, what is |x . y| equal to?",
                options: [
                    "|x| . |y|",
                    "|x| + |y|",
                    "|x / y|",
                    "|a|"
                ],
                correct: 0,
                explanation: "Multiplication property: |x . y| = |x| . |y|[cite: 19]."
            },
            // S.15
            {
                q: "From Properties of absolute value, what is the inequality for |x + y|?",
                options: [
                    "|x + y| <= |x| + |y|",
                    "|x + y| = |x| + |y|",
                    "|x . y| = |x| . |y|",
                    "|a^2| = |a|"
                ],
                correct: 0,
                explanation: "Triangle inequality for absolute value: |x + y| <= |x| + |y|[cite: 19]."
            },
            // S.16
            {
                q: "From Properties of absolute value, what is |a^2| equal to?",
                options: [
                    "|a|^2 or a^2",
                    "|a|",
                    "-|a|",
                    "0"
                ],
                correct: 0,
                explanation: "The absolute value of a square equals the square of the absolute value, |a^2| = |a|^2 = a^2[cite: 19]."
            },
            // S.17
            {
                q: "From Properties of absolute value, what is |-a| equal to?",
                options: [
                    "|a|",
                    "-|a|",
                    "a^2",
                    "0"
                ],
                correct: 0,
                explanation: "The absolute value of a number equals the absolute value of its negation, |-a| = |a|[cite: 19]."
            },
            // S.18
            {
                q: "The Distance Between Two Points P1(x1, y1), P2(x2, y2) we use:",
                options: [
                    "sqrt((x2 - x1)^2 + (y2 - y1)^2)",
                    "((x2 + x1)/2, (y2 + y1)/2)",
                    "(y2 - y1) / (x2 - x1)",
                    "y = mx + b"
                ],
                correct: 0,
                explanation: "The distance formula between two points is sqrt((x2 - x1)^2 + (y2 - y1)^2)[cite: 19, 21]."
            },
            // S.19
            {
                q: "Find the distance between the two points (1, 2), (4, 6) where P1P2 = sqrt((x2 - x1)^2 + (y2 - y1)^2):",
                options: [
                    "5",
                    "4",
                    "sqrt(17)",
                    "3"
                ],
                correct: 0,
                explanation: "Calculating distance: sqrt((4 - 1)^2 + (6 - 2)^2) = sqrt(3^2 + 4^2) = 5[cite: 19]."
            },
            // S.20
            {
                q: "The symbol of the Slope of a Line is:",
                options: [
                    "m",
                    "b",
                    "x",
                    "y"
                ],
                correct: 0,
                explanation: "The symbol representing the slope of a line is m[cite: 19, 21]."
            },
            // S.21
            {
                q: "The slope of a line with Two Points P1(x1, y1), P2(x2, y2) defined by:",
                options: [
                    "m = (y2 - y1) / (x2 - x1)",
                    "m = (x2 - x1) / (y2 - y1)",
                    "y - y1 = m(x - x1)",
                    "y = mx + b"
                ],
                correct: 0,
                explanation: "The slope formula given two points is m = (y2 - y1) / (x2 - x1)[cite: 19, 21]."
            },
            // S.22
            {
                q: "Find the slope of the line passing through the two points: (-2, -3), (-4, 1) where m = (y2 - y1) / (x2 - x1):",
                options: [
                    "m = -2",
                    "m = 2",
                    "m = 1/2",
                    "m = -1/2"
                ],
                correct: 0,
                explanation: "Calculating slope: m = (1 - (-3)) / (-4 - (-2)) = 4 / -2 = -2[cite: 19]."
            },
            // S.23
            {
                q: "The Equation of a Line Given Its Slope and a Point is:",
                options: [
                    "y - y1 = m(x - x1)",
                    "y = mx + b",
                    "ax + by + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "The point-slope equation form is y - y1 = m(x - x1)[cite: 19, 21]."
            },
            // S.24
            {
                q: "Find the equation of the line passing through the point P1(3, -1) and its slope equals 1 where y - y1 = m(x - x1):",
                options: [
                    "y - x = -4",
                    "y + x = 2",
                    "y = x + 3",
                    "y - 1 = x - 3"
                ],
                correct: 0,
                explanation: "Substituting into point-slope form: y - (-1) = 1(x - 3) => y + 1 = x - 3 => y - x = -4[cite: 19]."
            },
            // S.25
            {
                q: "The Equation of a Line Given Its Slope and Y-Intercepted is:",
                options: [
                    "y = mx + b",
                    "y - y1 = m(x - x1)",
                    "ax + by + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "The slope-intercept form is y = mx + b[cite: 19, 21]."
            },
            // S.26
            {
                q: "Find the slope of the line 2y + 3 x = 10, where y = mx + b:",
                options: [
                    "-3/2",
                    "3/2",
                    "5",
                    "-2/3"
                ],
                correct: 0,
                explanation: "Rewriting as y = -3/2 x + 5 gives slope m = -3/2[cite: 19]."
            },
            // S.27
            {
                q: "The Quadratic Equation in One Unknown is:",
                options: [
                    "ax^2 + bx + c = 0",
                    "ax + b = 0",
                    "ax + by + c = 0",
                    "x^2 + y^2 = r^2"
                ],
                correct: 0,
                explanation: "The quadratic equation in one unknown is ax^2 + bx + c = 0[cite: 19, 21]."
            },
            // S.28
            {
                q: "Find the solution to the equations x(x - 3) = 0:",
                options: [
                    "{0, 3}",
                    "{-3, 0}",
                    "{1, 3}",
                    "{-3, 3}"
                ],
                correct: 0,
                explanation: "Solutions are x = 0 or x = 3, written as {0, 3}[cite: 19]."
            },
            // S.29
            {
                q: "Find the solution to the equations (x + 2)(3x - 5) = 0:",
                options: [
                    "{-2, 5/3}",
                    "{2, -5/3}",
                    "{-3, 2/5}",
                    "{0, 5/3}"
                ],
                correct: 0,
                explanation: "Solutions are x = -2 and x = 5/3, written as {-2, 5/3}[cite: 19]."
            },
            // S.30
            {
                q: "Find the solution to the equations x^2 - 5x - 6 = 0:",
                options: [
                    "{-1, 6}",
                    "{1, -6}",
                    "{-2, 3}",
                    "{2, -3}"
                ],
                correct: 0,
                explanation: "Factoring as (x - 6)(x + 1) = 0 gives solutions {-1, 6}[cite: 19]."
            },
            // S.31
            {
                q: "Find the solution to the equations x^2 + 8x + 15 = 0:",
                options: [
                    "{-3, -5}",
                    "{3, 5}",
                    "{-1, 15}",
                    "{-3, 5}"
                ],
                correct: 0,
                explanation: "Factoring as (x + 3)(x + 5) = 0 gives solutions {-3, -5}[cite: 19]."
            },
            // S.32
            {
                q: "Find the general answer of the equation 36x^2 + 84x + 49 = 0:",
                options: [
                    "{-7/6}",
                    "{7/6}",
                    "{-6/7}",
                    "{-7/6, 7/6}"
                ],
                correct: 0,
                explanation: "Perfect square trinomial (6x + 7)^2 = 0 gives x = -7/6[cite: 19]."
            },
            // S.33
            {
                q: "Find the general answer of the equation 25x^2 + 20x + 4 = 0:",
                options: [
                    "{-2/5}",
                    "{2/5}",
                    "{-5/2}",
                    "{-2/5, 2/5}"
                ],
                correct: 0,
                explanation: "Perfect square trinomial (5x + 2)^2 = 0 gives x = -2/5[cite: 19]."
            },
            // S.34
            {
                q: "Find the general answer of the equation x^2 - 4 = 0:",
                options: [
                    "{-2, 2}",
                    "{4}",
                    "{-4, 4}",
                    "{0, 2}"
                ],
                correct: 0,
                explanation: "Difference of squares (x - 2)(x + 2) = 0 gives solutions {-2, 2}[cite: 19]."
            },
            // S.35
            {
                q: "Find the general answer of the equation x^2 - 25 = 0:",
                options: [
                    "{-5, 5}",
                    "{25}",
                    "{-25, 25}",
                    "{0, 5}"
                ],
                correct: 0,
                explanation: "Difference of squares gives solutions {-5, 5}[cite: 20]."
            },
            // S.36
            {
                q: "Find the general answer of the equation x^2 - 1 = 0:",
                options: [
                    "{-1, 1}",
                    "{0, 1}",
                    "{-1}",
                    "{1}"
                ],
                correct: 0,
                explanation: "Difference of squares gives solutions {-1, 1}[cite: 20]."
            },
            // S.37
            {
                q: "Find the general answer of the equation x^2 + 12x = 0:",
                options: [
                    "{-12, 0}",
                    "{12, 0}",
                    "{-6, 6}",
                    "{0}"
                ],
                correct: 0,
                explanation: "Factoring x(x + 12) = 0 gives solutions {-12, 0}[cite: 20]."
            },
            // S.38
            {
                q: "Find the general answer of the equation x^2 - 6x + 5 = 0:",
                options: [
                    "{1, 5}",
                    "{-1, -5}",
                    "{-5, 6}",
                    "{2, 3}"
                ],
                correct: 0,
                explanation: "Factoring (x - 1)(x - 5) = 0 gives solutions {1, 5}[cite: 20]."
            },
            // S.39
            {
                q: "The Method for Solving the Equation Using the Quadratic Formula:",
                options: [
                    "x = (-b ± sqrt(b^2 - 4ac)) / 2a",
                    "x = (-b ± sqrt(4ac - b^2)) / 2a",
                    "x = (b ± sqrt(b^2 + 4ac)) / a",
                    "x = -b / 2a"
                ],
                correct: 0,
                explanation: "The quadratic formula is x = (-b ± sqrt(b^2 - 4ac)) / 2a[cite: 20, 21]."
            },
            // S.40
            {
                q: "By applying the quadratic formula to find the answer of the Equation x^2 - 5x + 6 = 0:",
                options: [
                    "{3, 2}",
                    "{-3, -2}",
                    "{1, 6}",
                    "{-1, 5}"
                ],
                correct: 0,
                explanation: "Applying the formula gives roots {3, 2}[cite: 20]."
            },
            // S.41
            {
                q: "By applying the quadratic formula to find the answer of the Equation x^2 - 9 = 0:",
                options: [
                    "{3, -3}",
                    "{9}",
                    "{-9, 9}",
                    "{0, 3}"
                ],
                correct: 0,
                explanation: "Applying the formula gives roots {3, -3}[cite: 20]."
            },
            // S.42
            {
                q: "A Quadratic Equation in Two Variables (Equation of a Circle):",
                options: [
                    "ax^2 + by^2 + cx + dy + r = 0",
                    "ax + by + c = 0",
                    "y = mx + b",
                    "x^2 + y^2 = 0"
                ],
                correct: 0,
                explanation: "Quadratic equation in two variables representing a circle is ax^2 + by^2 + cx + dy + r = 0[cite: 20, 21]."
            },
            // S.43
            {
                q: "Find the equation of the circle with its center at the origin and a radius of 5 units.",
                options: [
                    "x^2 + y^2 = 25",
                    "x^2 + y^2 = 5",
                    "x^2 + y^2 = 10",
                    "(x - 5)^2 + (y - 5)^2 = 25"
                ],
                correct: 0,
                explanation: "Center at origin with radius 5 gives x^2 + y^2 = 25[cite: 20]."
            },
            // S.44
            {
                q: "The symbol of the Derivation is:",
                options: [
                    "dy/dx or y'",
                    "f(x) dx",
                    "int f(x)",
                    "m"
                ],
                correct: 0,
                explanation: "The symbol of derivation is dy/dx or y'[cite: 20, 21]."
            },
            // S.45
            {
                q: "The Constant Function Derivative of f(x) = c is:",
                options: [
                    "f'(x) = 0",
                    "f'(x) = c",
                    "f'(x) = 1",
                    "f'(x) = x"
                ],
                correct: 0,
                explanation: "The derivative of any constant function is f'(x) = 0[cite: 20]."
            },
            // S.46
            {
                q: "The Power Function Derivative of y = [f(x)]^n is:",
                options: [
                    "y' = n[f(x)]^(n-1) . f'(x)",
                    "y' = n[f(x)]^n",
                    "y' = [f(x)]^(n-1)",
                    "y' = f'(x) / n"
                ],
                correct: 0,
                explanation: "The power rule (chain rule) derivative is y' = n[f(x)]^(n-1) . f'(x)[cite: 20]."
            },
            // S.47
            {
                q: "Find the first derivative of the function f(x) = 4x^5 - 5x^2 + 5x - 1:",
                options: [
                    "f'(x) = 20x^4 - 10x + 5",
                    "f'(x) = 4x^4 - 5x + 5",
                    "f'(x) = 20x^5 - 10x^2",
                    "f'(x) = 20x^4 + 10x - 5"
                ],
                correct: 0,
                explanation: "Differentiating term by term gives f'(x) = 20x^4 - 10x + 5[cite: 20]."
            },
            // S.48
            {
                q: "Find the first derivative of the function f(x) = (x^3 - 4x^2 + 3x - 6)^5:",
                options: [
                    "f'(x) = 5(x^3 - 4x^2 + 3x - 6)^4 . (3x^2 - 8x + 3)",
                    "f'(x) = (x^3 - 4x^2 + 3x - 6)^4",
                    "f'(x) = 5(3x^2 - 8x + 3)^5",
                    "f'(x) = 15(x^3 - 4x^2 + 3x - 6)^4"
                ],
                correct: 0,
                explanation: "Applying chain rule gives 5(x^3 - 4x^2 + 3x - 6)^4 . (3x^2 - 8x + 3)[cite: 20]."
            },
            // S.49
            {
                q: "Find the first derivative of the function y = sin x:",
                options: [
                    "y' = cos x",
                    "y' = -sin x",
                    "y' = sec^2 x",
                    "y' = -csc^2 x"
                ],
                correct: 0,
                    explanation: "The derivative of y = sin x is y' = cos x[cite: 20, 21]."
            },
            // S.50
            {
                q: "Find the first derivative of the function y = cos x:",
                options: [
                    "y' = -sin x",
                    "y' = cos x",
                    "y' = csc^2 x",
                    "y' = sec x tan x"
                ],
                correct: 0,
                explanation: "The derivative of y = cos x is y' = -sin x[cite: 20, 21]."
            },
            // S.51
            {
                q: "Find the first derivative of the function y = tan x:",
                options: [
                    "y' = sec^2 x",
                    "y' = -csc^2 x",
                    "y' = sec x tan x",
                    "y' = -csc x cot x"
                ],
                correct: 0,
                explanation: "The derivative of y = tan x is y' = sec^2 x[cite: 20, 21]."
            },
            // S.52
            {
                q: "Find the first derivative of the function y = cot x:",
                options: [
                    "y' = -csc^2 x",
                    "y' = sec^2 x",
                    "y' = -csc x cot x",
                    "y' = sec x tan x"
                ],
                correct: 0,
                explanation: "The derivative of y = cot x is y' = -csc^2 x[cite: 20, 21]."
            },
            // S.53
            {
                q: "Find the first derivative of the function y = sec x:",
                options: [
                    "y' = sec x tan x",
                    "y' = -csc x cot x",
                    "y' = sec^2 x",
                    "y' = -sin x"
                ],
                correct: 0,
                explanation: "The derivative of y = sec x is y' = sec x tan x[cite: 20, 21]."
            },
            // S.54
            {
                q: "Find the first derivative of the function y = csc x:",
                options: [
                    "y' = -csc x cot x",
                    "y' = sec x tan x",
                    "y' = -csc^2 x",
                    "y' = cos x"
                ],
                correct: 0,
                explanation: "The derivative of y = csc x is y' = -csc x cot x[cite: 20, 21]."
            },
            // S.55
            {
                q: "The symbol of the Integral of F(x) is:",
                options: [
                    "int F(x) dx",
                    "dy/dx",
                    "y'",
                    "m"
                ],
                correct: 0,
                explanation: "The symbol of integration is int F(x) dx[cite: 20, 21]."
            },
            // S.56
            {
                q: "Find the integral of the function f(x) = 20x^4 - 10x + 5:",
                options: [
                    "4x^5 - 5x^2 + 5x + c",
                    "20x^5 - 10x^2 + 5x + c",
                    "5x^5 - 5x^2 + c",
                    "4x^4 - 10x + c"
                ],
                correct: 0,
                explanation: "Integrating term by term gives 4x^5 - 5x^2 + 5x + c[cite: 20]."
            },
            // S.57
            {
                q: "Find the function integration int 5(x^3 - 4x^2 + 3x - 6)^4 (3x^2 - 8x + 3) dx:",
                options: [
                    "(x^3 - 4x^2 + 3x - 6)^5 + c",
                    "5(x^3 - 4x^2 + 3x - 6)^5 + c",
                    "(3x^2 - 8x + 3)^5 + c",
                    "4x^5 - 5x^2 + c"
                ],
                correct: 0,
                explanation: "Since the integrand matches the chain rule derivative, the integral is (x^3 - 4x^2 + 3x - 6)^5 + c[cite: 20]."
            },
            // S.58
            {
                q: "Find the function integration int sin x dx:",
                options: [
                    "-cos x + c",
                    "sin x + c",
                    "tan x + c",
                    "-cot x + c"
                ],
                correct: 0,
                explanation: "The integral of int sin x dx is -cos x + c[cite: 20, 21]."
            },
            // S.59
            {
                q: "Find the function integration int cos x dx:",
                options: [
                    "sin x + c",
                    "-cos x + c",
                    "tan x + c",
                    "sec x + c"
                ],
                correct: 0,
                explanation: "The integral of int cos x dx is sin x + c[cite: 20, 21]."
            },
            // S.60
            {
                q: "Find the function integration int sec^2 x dx:",
                options: [
                    "tan x + c",
                    "-cot x + c",
                    "sec x + c",
                    "-csc x + c"
                ],
                correct: 0,
                explanation: "The integral of int sec^2 x dx is tan x + c[cite: 20, 21]."
            },
            // S.61
            {
                q: "Find the function integration int csc^2 x dx:",
                options: [
                    "-cot x + c",
                    "tan x + c",
                    "sec x + c",
                    "sin x + c"
                ],
                correct: 0,
                explanation: "The integral of int csc^2 x dx is -cot x + c[cite: 20, 21]."
            },
            // S.62
            {
                q: "Find the function integration int sec x tan x dx:",
                options: [
                    "sec x + c",
                    "-csc x + c",
                    "tan x + c",
                    "-cot x + c"
                ],
                correct: 0,
                explanation: "The integral of int sec x tan x dx is sec x + c[cite: 20, 21]."
            },
            // S.63
            {
                q: "Find the function integration int csc x cot x dx:",
                options: [
                    "-csc x + c",
                    "sec x + c",
                    "tan x + c",
                    "sin x + c"
                ],
                correct: 0,
                explanation: "The integral of int csc x cot x dx is -csc x + c[cite: 20, 21]."
            }
        ]
    }
};