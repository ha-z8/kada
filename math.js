const mathData = {
    title: "الرياضيات، أنظمة الأعداد، والمنطق الرياضي الشامل",
    category: "Mathematics, Logic & Number Systems (Comprehensive)",
    ar: {
        questions: [
            // --- أنظمة الأعداد (Number Systems) ---
            {
                q: "ما هو أساس مجموعة الأرقام في نظام الأعداد العشري (Decimal System) المستخدم في حياتنا اليومية؟",
                options: ["الأس 2", "الأس 8", "الأس 10", "الأس 16"],
                correct: 2,
                explanation: "أساس نظام الأعداد العشري هو الرقم 10، ومجموعة أرقامه تتكون من {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}."
            },
            {
                q: "كيف يُمثل الحاسوب البيانات داخل الذاكرة في نظام الأعداد الثنائي (Binary System)؟",
                options: ["عبر 10 حالات مختلفة", "بواسطة حالتين [OFF (0)] و [ON (1)]", "عبر أرقام ثمانية من 0 إلى 7", "بواسطة الحروف من A إلى F"],
                correct: 1,
                explanation: "يمثل الحاسوب البيانات في النظام الثنائي الذي أساسه 2 عبر حالتين أساسيتين هما [OFF (0)] و [ON (1)]."
            },
            {
                q: "كم عدد الأرقام التي يستخدمها نظام الأعداد الثماني (Octal Number System)؟",
                options: ["8 أرقام من 0 إلى 7", "10 أرقام من 0 إلى 9", "16 رقماً وحرفاً", "رقمين فقط (0 و 1)"],
                correct: 0,
                explanation: "يستخدم النظام الثماني ثمانية أرقام تبدأ من 0 وتنتهي عند 7، وأساسه هو الرقم 8."
            },
            {
                q: "ما هي الرموز الإضافية التي تمثل الأرقام من 10 إلى 15 في نظام الأعداد السداسي عشر (Hexadecimal)؟",
                options: ["G, H, I, J, K, L", "A, B, C, D, E, F", "U, V, W, X, Y, Z", "لا توجد رموز إضافية"],
                correct: 1,
                explanation: "يستخدم النظام السداسي عشر (الأساس 16) الحروف A, B, C, D, E, F لتمثيل القيم الإضافية من 10 إلى 15."
            },
            {
                q: "ما هي قيمة الموضع الرابع (المنزلة الرابعة) في نظام الأعداد الثنائي الممثلة بالأسس (2 أس 3)؟",
                options: ["1", "2", "4", "8"],
                correct: 3,
                explanation: "قيم مواضع النظام الثنائي تبدأ من (2 أس 0 = 1)، ثم (2 أس 1 = 2)، ثم (2 أس 2 = 4)، ثم (2 أس 3 = 8) للمنزلة الرابعة."
            },
            {
                q: "عند إجراء عملية جمع لعددين في النظام الثنائي، ماذا ينتج عن جمع (1 + 1) في خانة الآحاد؟",
                options: ["الناتج 0 مع باقي ترحيل (Carry) يساوي 1", "الناتج 1 مع باقي ترحيل 0", "الناتج 11", "الناتج 10 ولكن بدون ترحيل"],
                correct: 0,
                explanation: "قاعدة جمع الثنائي بالمنطق الرقمي: (1 + 1 = 0 مع ترحيل 1 إلى المنزلة التالية اليسرى)."
            },

            // --- الفصل الثاني: المنطق الرياضي الأساسي (Mathematical Logic) ---
            {
                q: "كيف يُعرّف التقرير أو العبارة (Statement) في المنطق الرياضي؟",
                options: [
                    "جملة إنشائية تعبر عن التمني أو الاستفهام",
                    "جملة خبرية إما أن تكون صحيحة تماماً (T) أو خاطئة تماماً (F)",
                    "معادلة تفاضلية من الدرجة الثانية",
                    "مجموعة غير منتهية من العناصر"
                ],
                correct: 1,
                explanation: "العبارة (Statement) هي جملة خبرية تحمل خبراً يمكن التحقق منه إما بصحة قيمته (T) أو خطئها (F)."
            },
            {
                q: "متى تكون دالة الوصل أو التقاطع المنطقي (Conjunction: p AND q) صحيحة تماماً؟",
                options: [
                    "إذا كانت إحدى العبارتين صحيحة على الأقل",
                    "فقط عندما تكون كلتا العبارتين (p و q) صحيحتين معاً (T)",
                    "إذا كانت العبارتان خاطئتين معاً",
                    "دائماً بغض النظر عن قيم المكونات"
                ],
                correct: 1,
                explanation: "دالة الوصل تقرأ 'و' وتكون صحيحة فقط عندما تكون العبارتان المكونتان لها صحيحتين معاً."
            },
            {
                q: "متى تكون دالة الفصل أو التخيير المنطقي (Disjunction: p OR q) خاطئة (F)؟",
                options: [
                    "فقط عندما تكون كلتا العبارتين (p و q) خاطئتين معاً",
                    "عندما تكون إحدى العبارتين خاطئة",
                    "دائماً لا تكون خاطئة أبداً",
                    "إذا كانت p صحيحة و q خاطئة"
                ],
                correct: 0,
                explanation: "دالة الفصل تقرأ 'أو' وتكون خاطئة حصراً إذا كانت العبارتان خاطئتين معاً، وتكون صحيحة فيما عدا ذلك."
            },
            {
                q: "في دالة الاشتراط أو التضمين (Conditional: p implies q)، متى تكون العبارة المركبة خاطئة؟",
                options: [
                    "دائماً صادقة",
                    "فقط إذا كانت المقدمة p صحيحة (T) والنتيجة q خاطئة (F)",
                    "إذا كانت p خاطئة و q صحيحة",
                    "إذا كانت كلتاهما خاطئتين"
                ],
                correct: 1,
                explanation: "الشرط يكون خاطئاً في حالة واحدة فقط وهي إذا صدقت p وكذبت q، وفيما عدا ذلك فهو صحيح دائماً."
            },
            {
                q: "ما هو تعريف العبارة التي تمثل تحصيل حاصل (Tautology) في المنطق الرياضي؟",
                options: [
                    "عبارة مركبة تكون خاطئة منطقياً في جميع الاحتمالات",
                    "عبارة مركبة تكون صحيحة منطقياً دائماً بغض النظر عن قيم صدق مكوناتها",
                    "عبارة تحتوي على متغيرات مجهولة فقط",
                    "عبارة تكافئ مجموعة خالية"
                ],
                correct: 1,
                explanation: "الـ Tautology هو تعبير أو عبارة مركبة نتيجتها النهائية في جدول الصواب كلها صحيحة (T) بغض النظر عن قيم مكوناتها."
            },
            {
                q: "ما هو التناقض (Contradiction) في التعبيرات المنطقية؟",
                options: [
                    "عبارة صحيحة دائماً",
                    "عبارة مركبة تكون خاطئة تماماً (F) في جميع صفوف جدول الصواب بغض النظر عن مكوناتها",
                    "عبارة متساوية مع مجموعة القوة",
                    "عبارة تحتمل الصواب والخطأ معاً"
                ],
                correct: 1,
                explanation: "التناقض (Contradiction) هو عبارة مركبة خاطئة تماماً في كل الاحتمالات، وعكسها تماماً هو تحصيل الحاصل."
            },

            // --- الفصل الثالث: مقدمة في نظرية المجموعات (Set Theory) ---
            {
                q: "كيف يُعرّف مفهوم المجموعة (The Set) في الرياضيات؟",
                options: [
                    "أي تجمع عشوائي وغير محدد لعناصر غير معروفة",
                    "تجمع محدد تماماً ومنصوص عليه بوضوح من الكائنات التي لها خصائص مميزة مشتركة تسمى عناصر",
                    "مجموعة الأعداد العقدية فقط",
                    "العملية العكسية للتقاطع المنطقي"
                ],
                correct: 1,
                explanation: "المجموعة هي تجمع محدد بوضوح (well defined) من الأشياء التي لها خصائص مميزة مشتركة تدعى عناصر."
            },
            {
                q: "ما هي الرموز الصحيحة التي تعبر عن علاقة «عنصر ينتمي إلى مجموعة» وعلاقة «مجموعة محتواة في مجموعة أخرى جزئية»؟",
                options: [
                    "الانتماء: رمز الجزئية ، الاحتواء: ينتمي",
                    "الانتماء: ينتمي ، الاحتواء (الجزئية): جزئية من",
                    "الانتماء: يساوی ، الاحتواء: اتحاد",
                    "الانتماء: مجموعة خالية ، الاحتواء: تقاطع"
                ],
                correct: 1,
                explanation: "رمز الانتماء يربط بين عنصر ومجموعة، بينما رمز الاحتواء أو الجزئية يربط بين مجموعة ومجموعة أخرى."
            },
            {
                q: "إذا كانت المجموعة A تحتوي على (n) من العناصر، فما هو عدد عناصر مجموعة القوة (Power Set) الممثلة رياضياً بـ (2 أس n)؟",
                options: ["n", "2n", "2 أس n", "n تربيع"],
                correct: 2,
                explanation: "مبرهنة مجموعة القوة تنص على أنه إذا كانت A مجموعة منتهية فيها n من العناصر، فإن عدد عناصر مجموعة القوة هو (2 أس n)."
            },
            {
                q: "ما هو تعريف المجموعات المتباينة أو المنفصلة (Disjoint Sets)؟",
                options: [
                    "مجموعتان تقاطعهما يساوي المجموعة الخالية، أي ليس بينهما عناصر مشتركة",
                    "مجموعتان متساويتان تماماً في العناصر",
                    "مجموعتان اتحادهم يعطي المجموعة الشاملة",
                    "مجموعتان إحداهما محتواة بالكامل في الأخرى"
                ],
                correct: 0,
                explanation: "تكون المجموعتان متباينتين أو منفصلتين إذا كان تقاطعهما خالياً وليس لهما أي عناصر مشتركة."
            },
            {
                q: "كيف يُعرّف الفرق بين مجموعتين (A - B) رياضياً؟",
                options: [
                    "العناصر التي تنتمي إلى B ولا تنتمي إلى A",
                    "العناصر التي تنتمي إلى المجموعة A ولا تنتمي إلى المجموعة B",
                    "العناصر المشتركة فقط بينهما",
                    "مكملة اتحاد المجموعتين"
                ],
                correct: 1,
                explanation: "الفرق (A - B) يتكون من جميع العناصر التي تنتمي للمجموعة الأولى A ولا تنتمي للمجموعة الثانية B."
            },
            {
                q: "ما هو قانون دي مورجان الأول (DeMorgan's Law) لمتممة التقاطع؟",
                options: [
                    "متممة (A تقاطع B) تساوي (متممة A اتحاد متممة B)",
                    "متممة (A اتحاد B) تساوي (متممة A تقاطع متممة B)",
                    "A اتحاد B يساوي B اتحاد A",
                    "A تقاطع (B اتحاد C) تساوي (A تقاطع B) اتحاد (A تقاطع C)"
                ],
                correct: 0,
                explanation: "قوانين دي مورجان تشمل: متممة التقاطع تساوي اتحاد المتممات."
            }
        ]
    },
    en: {
        questions: [
            // --- Number Systems ---
            {
                q: "Which number system is used in our daily lives with a base of 10?",
                options: ["Binary system", "Decimal system", "Octal system", "Hexadecimal system"],
                correct: 1,
                explanation: "The decimal system is used in our daily lives and has a base of 10 with digits {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}."
            },
            {
                q: "What are the positional values in the octal number system?",
                options: ["1, 2, 4, 8, 16", "1, 8, 64, 512, ...", "1, 10, 100, 1000", "1, 16, 256, 4096"],
                correct: 1,
                explanation: "The octal positional values (base 8) are 8^0=1, 8^1=8, 8^2=64, 8^3=512, etc."
            },
            {
                q: "What decimal value does the binary number [11001] represent?",
                options: ["25", "19", "83", "12"],
                correct: 0,
                explanation: "Analyzing the binary number [11001] yields decimal 25."
            },
            {
                q: "What is the positional value of the third position in hexadecimal (16^2)?",
                options: ["1", "16", "256", "4096"],
                correct: 2,
                explanation: "Hexadecimal positional values are 16^0=1, 16^1=16, and 16^2=256 for the third position."
            },

            // --- Mathematical Logic ---
            {
                q: "In the truth table for a conjunction (p AND q), what is the result if p is true (T) and q is false (F)?",
                options: ["T", "F", "Depends on r", "Undefined"],
                correct: 1,
                explanation: "Conjunction is true only when both statements are true; thus (T AND F) is F."
            },
            {
                q: "In a disjunction (p OR q), when is the compound statement false?",
                options: [
                    "Only when both component statements are false (F OR F = F)",
                    "When one statement is false",
                    "Never false",
                    "When p is true and q is false"
                ],
                correct: 0,
                explanation: "Disjunction is false exclusively when both component statements are false."
            },
            {
                q: "In a conditional statement (p implies q), when does it yield a false value?",
                options: [
                    "Only if p is true while q is false (T IMPLIES F = F)",
                    "If p is false and q is true",
                    "If both are false",
                    "It is never false"
                ],
                correct: 0,
                explanation: "The conditional is false in only one case: when the premise is true and the conclusion is false."
            },
            {
                q: "What does logical equivalence (A is equivalent to B) mean?",
                options: [
                    "The two compound statements have the same truth values in their truth table",
                    "One statement is the negation of the other",
                    "They intersect at a null set",
                    "They form a contradiction"
                ],
                correct: 0,
                explanation: "Two compound statements are logically equivalent if they have the same truth values regardless of components."
            },
            {
                q: "What is DeMorgan's first law for logical conjunction?",
                options: [
                    "NOT(p AND q) is equivalent to NOT(p) OR NOT(q)",
                    "NOT(p OR q) is equivalent to NOT(p) AND NOT(q)",
                    "p AND q is equivalent to q AND p",
                    "p OR (q AND r) is equivalent to (p OR q) AND (p OR r)"
                ],
                correct: 0,
                explanation: "DeMorgan's law for conjunction states that the negation of a conjunction is equivalent to the disjunction of the negations."
            },

            // --- Set Theory ---
            {
                q: "What does 'well defined' mean when describing a set?",
                options: [
                    "Determining whether elements belong to the set or not completely and unambiguously",
                    "Having an infinite number of elements",
                    "Being an empty set",
                    "Representing a power set"
                ],
                correct: 0,
                explanation: "Well defined means determining whether elements belong to the set or not completely and with certainty."
            },
            {
                q: "What is the difference between { } and empty set symbol?",
                options: [
                    "Both denote the empty set (null set)",
                    "{} contains the empty set while the symbol is the empty set itself",
                    "The symbol is number zero",
                    "There is no difference"
                ],
                correct: 1,
                explanation: "The source notes a distinction: the symbol is the empty set itself, and { } can represent it or the set containing it depending on context."
            },
            {
                q: "What is a power set P(A) of any set A?",
                options: [
                    "The set whose elements are all subsets of set A",
                    "The universal set U",
                    "The null set only",
                    "The disjoint set"
                ],
                correct: 0,
                explanation: "The set whose elements are all subsets of any set A is called the power set of A, denoted P(A)."
            },
            {
                q: "What is the Universal Set U represented as in Venn diagrams?",
                options: [
                    "A rectangle containing all elements of the sets being dealt with",
                    "A small circle",
                    "An empty set symbol",
                    "A power set notation"
                ],
                correct: 0,
                explanation: "The universal set U includes all elements being dealt with and is represented by a rectangle."
            },
            {
                q: "How is the complement of a set A (denoted A') defined mathematically?",
                options: [
                    "A' = U minus A",
                    "A' = A intersect U",
                    "A' = A union empty set",
                    "A' = Power set of A"
                ],
                correct: 0,
                explanation: "The complement of set A consists of all elements in U not belonging to A, defined as A' = U - A."
            },
            {
                q: "What is the absorption law for A union (A intersect B)?",
                options: ["A", "B", "U", "Empty set"],
                correct: 0,
                explanation: "According to the absorption laws: A union (A intersect B) = A and A intersect (A union B) = A."
            }
        ]
    }
};