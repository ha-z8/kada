const chemistryData = {
    title: "مادة الكيمياء الشاملة (تغطية جميع صفحات الملف)",
    category: "Chemistry (Comprehensive Review - All Pages)",
    ar: {
        questions: [
            // Chapter 1: Introduction to Chemistry & Measurements
            {
                q: "ما هو التعريف الدقيق لعملية الحساب (Calculation) في الكيمياء حسب الفصل الأول؟",
                options: [
                    "القيم التي يتم الحصول عليها باستخدام الأجهزة المخبرية كالـ pH meter",
                    "القيم الرقمية الناتجة عن عمليات رياضية مختلفة كالجمع والطرح والقسمة والمعادلات التفاضلية",
                    "فصل المواد المادية عن طريق المغناطيس",
                    "قياس درجة الانصهار والغليان"
                ],
                correct: 1,
                explanation: "الحساب (Calculation) يمثل القيم الرقمية الناتجة عن العمليات الرياضية مثل الجمع، الطرح، الضرب، القسمة، والمعادلات التفاضلية."
            },
            {
                q: "كيف تُعرّف عملية القياس (Measurement) في الكيمياء؟",
                options: [
                    "القيم الرقمية الناتجة عن العمليات الجبرية البحتة",
                    "القيم التي يتم الحصول عليها باستخدام الأدوات والأجهزة مثل الموازين ومقاييس الحموضة ومقاييس الحرارة",
                    "حساب الكتلة المولية دون استخدام أدوات",
                    "تحديد أعداد الكم الرئيسية للذرة"
                ],
                correct: 1,
                explanation: "القياس (Measurement) يشير إلى القيم التي يتم الحصول عليها باستخدام الأدوات والأجهزة مثل الموازين، مقاييس الحموضة (pH meters)، ومقاييس الحرارة (thermometers)[cite: 1]."
            },
            {
                q: "ما هي القاعدة الصحيحة لتحديد الأرقام المعنوية للأصفار الواقعة إلى يسار الرقم (مثل 0.0126 أو 0.00038)؟",
                options: [
                    "تعتبر أرقاماً معنوية أساسية ويجب حسابها دائماً",
                    "لا تعتبر أرقاماً معنوية (فهي أصفار لحفظ المنازل فقط)",
                    "تضاعف قيمة الرقم الإجمالية",
                    "تحدد وحدات القياس الدولية"
                ],
                correct: 1,
                explanation: "حسب قواعد الأرقام المعنوية في الفصل الأول، الأصفار الواقعة إلى يسار العدد لا تُعتبر أرقاماً معنوية لأنها مجرد خانات عشرية[cite: 1]."
            },
            {
                q: "ما هو عدد الأرقام المعنوية في الرقم 1001 بناءً على قواعد الأرقام المعنوية؟",
                options: ["2 أرقام معنوية", "3 أرقام معنوية", "4 أرقام معنوية", "5 أرقام معنوية"],
                correct: 2,
                explanation: "الأصفار الواقعة بين أرقام غير صفرية تُعتبر أرقاماً معنوية، وبالتالي الرقم 1001 يحتوي على 4 أرقام معنوية[cite: 1]."
            },
            {
                q: "كم عدد الوحدات الأساسية السبع في النظام الدولي للوحدات (SI)؟",
                options: [
                    "المتر، الكيلوجرام، الثانية، الأمبير، الكلفن، الشمعة (Candela)، والمول",
                    "اللتر، الجرام، السيلزيوس، الباسكال، الجول، الإرج، والبار",
                    "السرعة، التسارع، القوة، الضغط، الحجم، الكثافة، والطاقة",
                    "العدد الذري، العدد الكتلي، النيوترون، البروتون، الإلكترون، الأيون، والنظير"
                ],
                correct: 0,
                explanation: "الوحدات الأساسية السبعة في النظام الدولي (SI) هي: المتر للطول، الكيلوجرام للكتلة، الثانية للزمن، الأمبير للتيار، الكلفن للحرارة، الشمعة لشدة الإضاءة، والمول كمية المادة[cite: 1]."
            },
            {
                q: "ما هي العلاقة الرياضية الصحيحة للتحويل بين درجة الحرارة السيلزيوس (°C) والكلفن (K)؟",
                options: [
                    "°C = K - 273 أو K = °C + 273",
                    "°C = K + 273 أو K = °C - 273",
                    "°C = (°F - 32) * 9/5",
                    "K = °C * 273"
                ],
                correct: 0,
                explanation: "العلاقة الرياضية المذكورة في الفصل الأول لتحويل الحرارة هي: °C = K - 273 أو K = °C + 273[cite: 1]."
            },
            {
                q: "كيف تُعرّف الكثافة (Density) كوحدة مشتقة في النظام الدولي؟",
                options: [
                    "كتلة المادة مقسومة على حجمها وتقاس بـ (g/ml)",
                    "القوة المؤثرة على وحدة المساحة",
                    "الطقدرة على إنجاز شغل",
                    "مجموع كتل البروتونات والنيوترونات"
                ],
                correct: 0,
                explanation: "الكثافة هي كتلة المادة مقسومة على حجمها (Mass / Volume) وتُقاس بـ (g/ml) وتُعرّف بأنها الكتلة لكل وحدة حجم[cite: 1]."
            },
            {
                q: "ما هي الوحدة الرئيسية المستخدمة لقياس الطاقة (Energy) في النظام الدولي للوحدات (SI)؟",
                options: ["السعرة الحرارية (Calorie)", "الجول (Joule)", "الإرج (Erg)", "البار (Bar)"],
                correct: 1,
                explanation: "تُقاس الطاقة في النظام الدولي للوحدات (SI) بالجول (J)، وتُستخدم أحياناً وحدات أخرى كالإرج والسعرة الحرارية[cite: 1]."
            },

            // Chapter 2: Introduction to the Basics of Chemistry
            {
                q: "كيف تُعرّف حالة المادة السائلة (Liquid state) عند درجة حرارة معينة؟",
                options: [
                    "لها شكل وحجم ثابتان تماماً",
                    "لها حجم ثابت وشكل متغيّر (حسب الوعاء الحاضن)",
                    "ليس لها شكل ولا حجم ثابتان بل تتطاير بحرية",
                    "تتكون من أيونات موجبة وسالبة حرة"
                ],
                correct: 1,
                explanation: "حسب الفصل الثاني، الحالة السائلة تتميز بأن المادة لها حجم ثابت ولكن شكلها متغيّر حسب الوعاء الذي توضع فيه[cite: 1]."
            },
            {
                q: "ما الفرق بين التغيرات الفيزيائية (Physical changes) والتغيرات الكيميائية (Chemical changes)؟",
                options: [
                    "التغيرات الفيزيائية تحدث في الشكل الظاهري للمادة، بينما التغيرات الكيميائية تحدث في التركيب الأساسي وتظهر مواد جديدة",
                    "لا يوجد أي فرق بينهما في علم الكيمياء",
                    "التغيرات الكيميائية لا تغير التركيب الداخلي",
                    "التغيرات الفيزيائية تفني المادة وتستحدث طاقة"
                ],
                correct: 0,
                explanation: "التغيرات الفيزيائية تخص الشكل الظاهري للمادة فقط، بينما التغيرات الكيميائية تغير الشكل والتركيب الأساسي وتنتج مواد جديدة[cite: 1]."
            },
            {
                q: "أي من الطرق التالية تعتبر من طرق الفصل الكيميائية (Chemical separation methods)؟",
                options: [
                    "الترشيح (Filtration) والتبخير (Evaporation)",
                    "استخدام المغناطيس وتوضيح الرواسب",
                    "التحليل الكهربائي للماء وتسخين كربونات الكالسيوم",
                    "الترسيب البسيط والفرز اليدوي"
                ],
                correct: 2,
                explanation: "طرق الفصل الكيميائية تعتمد على الخواص الكيميائية مثل التحليل الكهربائي للماء (Electrolysis of water) وتسخين كربونات الكالسيوم[cite: 1]."
            },
            {
                q: "ما هو تعريف المذيب (Solvent) في المحاليل الكيميائية؟",
                options: [
                    "المادة الموجودة بنسبة أو كمية صغيرة",
                    "المادة الموجودة بنسبة أو كمية كبيرة",
                    "الغاز الناتج من تفاعل عنصريين",
                    "الرابطة الأيونية بين جزيئين"
                ],
                correct: 1,
                explanation: "المذيب (Solvent) هو المادة الموجودة بكمية أكبر في المحلول، بينما المذاب (Solute) هو المادة الموجودة بكمية أقل[cite: 1]."
            },
            {
                q: "من هو العالم الذي استخدم مصطلح الجزيء (Molecule) لأول مرة في عام 1811؟",
                options: ["دالتون (Dalton)", "رذرفورد (Rutherford)", "أفوجادرو (Avogadro)", "بور (Bohr)"],
                correct: 2,
                explanation: "استخدم العالم أفوجادرو (Avogadro) مصطلح الجزيء لأول مرة عام 1811 ليعبر عن أصغر جزء من المادة الاحتفاظ بخصائصها[cite: 1]."
            },
            {
                q: "ماذا ينص قانون النسب الثابتة أو التركيب الثابت (Law of definite proportions)؟",
                options: [
                    "حجوم الغازات المتساوية تحوي عدد ذرات متساوٍ",
                    "كل مركب كيميائي مهما كانت طرق تحضيره يتكون من نفس العناصر المتححدة بنسبة كتلية ثابتة",
                    "الضغط يتناسب طردياً مع الحرارة",
                    "الذرة غير قابلة للانقسام نهائياً"
                ],
                correct: 1,
                explanation: "ينص القانون على أن أي مركب كيميائي يتألف من نفس العناصر المندمجة بنسب كتلية ثابتة بغض النظر عن طريقة تحضيره[cite: 1]."
            },
            {
                q: "ما هي الملاحظة الأبرز لفريق رذرفورد في تجربة صفيحة الذهب عام 1909 عند قذفها بجسيمات ألفا؟",
                options: [
                    "مرور معظم دقائق ألفا من خلال الصفيحة دون أي انحراف",
                    "ارتداد جميع الدقائق بنسبة 100% للوراء",
                    "انحراف كافة الدقائق بزاوية 90 درجة",
                    "تحول الذهب إلى غاز الهيليوم"
                ],
                correct: 0,
                explanation: "ملاحظات رذرفورد شملت مرور معظم دقائق ألفا من خلال صفيحة الذهب بلا انحراف، مع انحراف نسبة ضئيلة وارتداد نسبة ضئيلة جداً[cite: 1]."
            },
            {
                q: "ماذا تقترح فرضيات نموذج بور للذرة (Bohr's model) عند انتقال الإلكترون بين المدارات؟",
                options: [
                    "يتحرك الإلكترون بلا طاقة محددة",
                    "عند انتقال الإلكترون من مدار لآخر فإنه يكسب أو يفقد وحدة طاقة واحدة تسمى فوتون (Photon)",
                    "تتلاشى كتلة الإلكترون تماماً",
                    "تخضع القفزات لقوانين الميكانيكا الكلاسيكية"
                ],
                correct: 1,
                explanation: "اقترح بور أن انتقال الإلكترون بين المدارات المسموحة يصاحبه اكتساب أو فقدان وحدة طاقة مفردة تُعرف بالفوتون (Photon)[cite: 1]."
            },
            {
                q: "ما هو الفرق بين العدد الذري (Z) والعدد الكتلي (A) في نواة الذرة؟",
                options: [
                    "العدد الذري هو عدد البروتونات (p)، والعدد الكتلي هو مجموع البروتونات والنيوترونات (p + n)",
                    "العدد الذري هو عدد الإلكترونات الحرة فقط",
                    "العدد الكتلي يمثل عدد النيوترونات وحدها",
                    "لا يوجد فرق بينهما"
                ],
                correct: 0,
                explanation: "العدد الذري (Z) يمثل عدد البروتونات، بينما العدد الكتلي (A) يمثل مجموع البروتونات والنيوترونات في النواة[cite: 1]."
            },
            {
                q: "كيف يُحسب عدد النيوترونات (N) في النواة إذا علمت العدد الكتلي (A) والعدد الذري (Z)؟",
                options: ["N = A + Z", "N = A - Z", "N = Z / A", "N = Z * A"],
                correct: 1,
                explanation: "عدد النيوترونات يُحسب بطرح العدد الذري من العدد الكتلي: (N = A - Z)[cite: 1]."
            },
            {
                q: "ما هي النظائر (Isotopes) في العناصر الكيميائية؟",
                options: [
                    "ذرات لنفس العنصر لها نفس العدد الذري (Z) وتختلف في العدد الكتلي لاختلاف عدد النيوترونات",
                    "ذرات لعناصر مختلفة تماماً ولها نفس الكتلة",
                    "أيونات موجبة فقدت نواتها بالكامل",
                    "مركبات غير مألوفة في الطبيعة"
                ],
                correct: 0,
                explanation: "النظائر هي صور لذرات العنصر الواحد تشترك في العدد الذري (Z) وتختلف في العدد الكتلي لاختلاف النيوترونات[cite: 1]."
            },
            {
                q: "ما هو الجهاز المستخدم قياسياً لسرعة وبدقة فائقة لتحديد الكتلة الذرية للعناصر؟",
                options: ["مقياس الحموضة (pH meter)", "مطياف الكتلة (Mass spectrometer)", "البارومتر الزئبقى", "المجهر الإلكتروني الماسح"],
                correct: 1,
                explanation: "مطياف الكتلة (Mass spectrometer) هو الجهاز المستخدم لقياس الكتلة الذرية للعناصر عملياً وبدقة متناهية[cite: 1]."
            },
            {
                q: "ما هي الأيزوبار (Isobars) في الكيمياء؟",
                options: [
                    "ذرات لعناصر مختلفة تختلف في العدد الذري ولكنها تتفق وتتساوى في العدد الكتلي",
                    "نظائر لنفس العنصر الكيميائي",
                    "مركبات هيدروكربونات مشبعة",
                    "غازات نبيلة خاملة"
                ],
                correct: 0,
                explanation: "الأيزوبار هي ذرات لعناصر مختلفة تختلف في أعدادها الذرية ولكنها تمتلك نفس العدد الكتلي[cite: 1]."
            },

            // Chapter 3: Atomic Structure and Electronic Configuration
            {
                q: "كيف يُعرّف الطول الموجي (Wavelength) ويرمز له بالحرف (λ)؟",
                options: [
                    "عدد الذبذبات في الثانية الواحدة",
                    "المسافة بين نقطتين متماثلتين متتاليتين في الحركة الموجية",
                    "سرعة انتشار الموجة في الفراغ",
                    "طاقة الفوتون المنبعث"
                ],
                correct: 1,
                explanation: "الطول الموجي هو المسافة بين نقطتين متماثلتين متتاليتين على منحنى الحركة الموجية ويرمز له بـ λ[cite: 1]."
            },
            {
                q: "ما هي قيم أعداد الكم الرئيسية (Principal Quantum Number - n)؟",
                options: [
                    "أعداد صحيحة موجبة (n = 1, 2, 3, 4, ...)",
                    "أعداد سالبة فقط",
                    "أعداد كسرية محصورة بين الصفر والواحد",
                    "قيم مرتبطة بالكتلة المولية فقط"
                ],
                correct: 0,
                explanation: "عدد الكم الرئيسي (n) يميز مستوى الطاقة الرئيسي ويأخذ أعداداً صحيحة موجبة (1, 2, 3, 4, ...)[cite: 1]."
            },
            {
                q: "ما هو الترتيب التصاعدي الصحيح لطاقة مستويات الطاقة الفرعية (s, p, d, f) في الذرة؟",
                options: [
                    "f < d < p < s",
                    "s < p < d < f",
                    "p < s < f < d",
                    "جميعها متساوية تماماً"
                ],
                correct: 1,
                explanation: "طاقة الإلكترونات تزداد في المستويات الفرعية بالترتيب التصاعدي: s < p < d < f[cite: 1]."
            },
            {
                q: "ما هو الحد الأقصى لسعة الإلكترونات في مستوى الطاقة الفرعي (d)؟",
                options: ["2 إلكترون", "6 إلكترونات", "10 إلكترونات", "14 إلكترون"],
                correct: 2,
                explanation: "المستوى الفرعي (s) يتسع لـ 2 إلكترون، (p) لـ 6، (d) لـ 10 إلكترونات، و (f) لـ 14 إلكترون[cite: 1]."
            },
            {
                q: "ماذا ينص مبدأ أو قاعدة هوند (Hund's rule)؟",
                options: [
                    "تمتلئ أوربيتالات الطاقة المتساوية (مثل px, py, pz) فرادى أولاً قبل أن يبدأ ازدواج الإلكترونات",
                    "تزدوج الإلكترونات فوراً في المدار الأول",
                    "لا يمكن لإلكترونين أن يتفقا في أعداد الكم الأربعة",
                    "تمتلئ مستوى f قبل مستوى s"
                ],
                correct: 0,
                explanation: "تنص قاعدة هوند على أن أوربيتالات الطاقة المتساوية تُملا فرادى أولاً بشكل منفرد قبل أن يبدأ ازدواج الإلكترونات فيها[cite: 1]."
            },
            {
                q: "كيف تُعرّف طاقة التأين (Ionization Energy) للعنصر في حالته الغازية؟",
                options: [
                    "الطاقة اللازمة لانتزاع إلكترون مفرد (الأبعد عن النواة) من الذرة وهي في حالتها الغازية",
                    "الطاقة الناتجة عن إضافة إلكترون جديد للغلاف",
                    "قوة التجاذب بين النيوترونات والبروتونات",
                    "مجموع طاقة روابط الجزيء"
                ],
                correct: 0,
                explanation: "طاقة التأين هي الطاقة المطلوبة لإزالة إلكترون مفرد (الأبعد عن النواة) من ذرة في حالتها الغازية ويرمز لها بـ (I)[cite: 1]."
            },
            {
                q: "ما هو الميل الإلكتروني (Electron Affinity) حسب مفاهيم الفصل الثالث؟",
                options: [
                    "هو التغير في الطاقة المصاحب لإضافة إلكترون إلى ذرة عنصر في حالتها الغازية (في المدار الخارجي)",
                    "هو حجم الذرة عند الانتقال أسفل المجموعة",
                    "هو ميل الذرة لفقد الإلكترونات حصراً",
                    "هو قياس درجة انصهار المواد الصلبة"
                ],
                correct: 0,
                explanation: "الميل الإلكتروني (EA) هو التغير في الطاقة الذي يرافق إضافة إلكترون إلى ذرة عنصر في حالتها الغازية في مدارها الخارجي[cite: 1]."
            }
        ]
    },
    en: {
        questions: [
            // Chapter 1
            {
                q: "What is the precise definition of calculation in Chapter One?",
                options: [
                    "Values obtained using physical instruments like pH meters",
                    "Numerical values obtained through various mathematical operations such as addition, subtraction, division, and differential equations",
                    "Methods of physical separation",
                    "Measurement of melting points"
                ],
                correct: 1,
                explanation: "Calculation refers to numerical values obtained through various mathematical operations such as addition, subtraction, multiplication, division, and differential equations[cite: 1]."
            },
            {
                q: "How is measurement defined in laboratory chemistry?",
                options: [
                    "Pure theoretical algebraic values",
                    "Values obtained using instruments and devices such as scales, pH meters, and thermometers",
                    "Calculating molar mass without tools",
                    "Determining principal quantum numbers"
                ],
                correct: 1,
                explanation: "Measurement refers to values obtained using instruments and devices such as scales, pH meters, and thermometers[cite: 1]."
            },
            {
                q: "What is the rule for zeros to the left of a number (e.g., 0.0126 or 0.00038) regarding significant figures?",
                options: [
                    "They are always considered significant figures",
                    "They are not considered significant figures (placeholder zeros)",
                    "They double the magnitude of the number",
                    "They define international unit standards"
                ],
                correct: 1,
                explanation: "Zeros to the left of a number are placeholder zeros and are not considered significant figures[cite: 1]."
            },
            {
                q: "How many significant figures are in the number 1206.6?",
                options: ["3 significant figures", "4 significant figures", "5 significant figures", "6 significant figures"],
                correct: 2,
                explanation: "Zeros between non-zero figures are considered significant figures; thus, 1206.6 has 5 significant figures[cite: 1]."
            },
            {
                q: "Which of the seven fundamental SI units measures electric current intensity?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 1,
                explanation: "The Ampere is the fundamental SI unit that measures electric current intensity, determined by electrodynamic force[cite: 1]."
            },
            {
                q: "What is the fundamental SI unit used for measuring the amount of substance?",
                options: ["Gram", "Kilogram", "Mole", "Liter"],
                correct: 2,
                explanation: "The mole is the unit for measuring the amount of matter and is commonly used in chemistry[cite: 1]."
            },
            {
                q: "What is the correct mathematical relation to convert Celsius (°C) to Kelvin (K)?",
                options: [
                    "°C = K - 273 or K = °C + 273",
                    "°C = K + 273 or K = °C - 273",
                    "°C = (°F - 32) * 5/9",
                    "K = °C * 273"
                ],
                correct: 0,
                explanation: "The temperature conversion relation is: °C = K - 273 or K = °C + 273[cite: 1]."
            },
            {
                q: "How is density defined as an SI derived unit?",
                options: [
                    "Mass of a substance divided by its volume (g/ml)",
                    "Force acting on a unit area",
                    "Capacity to do work",
                    "Sum of protons and neutrons"
                ],
                correct: 0,
                explanation: "Density is the mass of a substance divided by its volume (g/ml), defined as mass per unit volume[cite: 1]."
            },
            {
                q: "What is the main unit used to measure energy in the International System of Units (SI)?",
                options: ["Calorie", "Joule (J)", "Erg", "Bar"],
                correct: 1,
                explanation: "Energy is measured in joules (J) in the International System of Units (SI)[cite: 1]."
            },

            // Chapter 2
            {
                q: "How is the liquid state of matter defined at a certain temperature?",
                options: [
                    "Fixed shape and fixed volume",
                    "Fixed volume and variable shape depending on the container",
                    "Unstable shape and volume floating freely",
                    "Composed of free positive and negative ions"
                ],
                correct: 1,
                explanation: "In the liquid state, matter has a fixed volume and a variable shape at a certain temperature[cite: 1]."
            },
            {
                q: "What is the difference between physical changes and chemical changes?",
                options: [
                    "Physical changes affect the apparent form, while chemical changes alter the basic composition and form new substances",
                    "There is no difference in chemistry",
                    "Chemical changes do not alter internal structure",
                    "Physical changes destroy matter entirely"
                ],
                correct: 0,
                explanation: "Physical changes occur in the apparent form, whereas chemical changes occur in the basic form and composition, creating new matters[cite: 1]."
            },
            {
                q: "Which of the following is considered a chemical separation method?",
                options: [
                    "Filtration and evaporation",
                    "Using magnets and clarification",
                    "Electrolysis of water and heating calcium carbonate",
                    "Simple decantation"
                ],
                correct: 2,
                explanation: "Chemical separation methods depend on chemical properties, such as the electrolysis of water and heating calcium carbonate[cite: 1]."
            },
            {
                q: "In solutions, what is the substance present in a higher proportion called?",
                options: ["Solute", "Solvent", "Intermediate compound", "Solid alloy"],
                correct: 1,
                explanation: "The matter present in a higher proportion in a solution is called the solvent, while the lower proportion is the solute[cite: 1]."
            },
            {
                q: "Who first introduced the term 'molecule' in 1811?",
                options: ["Dalton", "Rutherford", "Avogadro", "Bohr"],
                correct: 2,
                explanation: "The term molecule was first used in 1811 by Avogadro as the smallest particle retaining chemical composition[cite: 1]."
            },
            {
                q: "What does the law of definite proportions state?",
                options: [
                    "Equal volumes of gases contain equal atoms",
                    "Every chemical compound, no matter how prepared, is composed of the same elements combined in a fixed mass ratio",
                    "Pressure is inversely proportional to temperature",
                    "Atoms are completely indivisible"
                ],
                correct: 1,
                explanation: "Every chemical compound, regardless of preparation method, is composed of the same elements combined in a fixed mass ratio[cite: 1]."
            },
            {
                q: "What was the prominent observation in Rutherford's 1909 gold foil experiment?",
                options: [
                    "Most of the alpha particles passed through the foil without any deviation",
                    "All particles bounced back 100%",
                    "All particles deflected by 90 degrees",
                    "Gold instantly converted into helium"
                ],
                correct: 0,
                explanation: "Rutherford's team observed that most alpha particles passed through the gold sheet without any deviation[cite: 1]."
            },
            {
                q: "What does Bohr's model suggest regarding electron jumps between orbits?",
                options: [
                    "Electrons move randomly without energy limits",
                    "When an electron makes a jump from one orbit to another, the energy difference gains or loses a single unit of energy called a photon",
                    "Electrons lose all mass during a jump",
                    "Classical mechanics fully govern these jumps"
                ],
                correct: 1,
                explanation: "When an electron makes a jump from one orbit to another, the energy difference gains or loses a single unit of energy called a photon[cite: 1]."
            },
            {
                q: "What is the difference between atomic number (Z) and mass number (A)?",
                options: [
                    "Atomic number is the number of protons (p), and mass number is the sum of protons and neutrons (p + n)",
                    "Atomic number represents free electrons only",
                    "Mass number represents neutrons alone",
                    "There is no difference"
                ],
                correct: 0,
                explanation: "Atomic number (Z) represents protons, while mass number (A) represents the sum of protons and neutrons[cite: 1]."
            },
            {
                q: "How is the number of neutrons (N) calculated from mass number (A) and atomic number (Z)?",
                options: ["N = A + Z", "N = A - Z", "N = Z / A", "N = Z * A"],
                correct: 1,
                explanation: "The number of neutrons is calculated by subtracting atomic number from mass number (N = A - Z)[cite: 1]."
            },
            {
                q: "What are isotopes?",
                options: [
                    "Atoms of the same chemical element having the same atomic number Z but differing in mass number",
                    "Atoms of different elements with identical masses",
                    "Positive ions missing all electrons",
                    "Compounds formed by hydrogen and chlorine"
                ],
                correct: 0,
                explanation: "Isotopes are atoms of the same chemical element having the same atomic number Z but differing in mass number[cite: 1]."
            },
            {
                q: "What device is used practically to measure the atomic mass of elements quickly and accurately?",
                options: ["pH meter", "Mass spectrometer", "Barometer", "Electron microscope"],
                correct: 1,
                explanation: "A mass spectrometer is a device used to measure the atomic mass of elements practically quickly and with extreme accuracy[cite: 1]."
            },
            {
                q: "What are isobars?",
                options: [
                    "Atoms of different elements that differ in atomic number but have the same mass number",
                    "Isotopes of the same chemical element",
                    "Saturated hydrocarbons",
                    "Noble inert gases"
                ],
                correct: 0,
                explanation: "Isobars are atoms of different elements that differ in atomic number but have the same mass number[cite: 1]."
            },

            // Chapter 3
            {
                q: "How is wavelength defined and symbolized in wave motion?",
                options: [
                    "Frequency measured in Hertz (v)",
                    "Distance between two similar successive points on the wave motion curve (λ)",
                    "Speed of light in vacuum (c)",
                    "Total energy of a photon (E)"
                ],
                correct: 1,
                explanation: "Wavelength is the distance between two similar successive points on the wave motion curve, symbolized by λ[cite: 1]."
            },
            {
                q: "What values can the Principal Quantum Number (n) take?",
                options: [
                    "Positive integer values (n = 1, 2, 3, 4, ...)",
                    "Negative integers only",
                    "Fractional values between 0 and 1",
                    "Values equal to neutron count"
                ],
                correct: 0,
                explanation: "The principal quantum number (n) distinguishes the main level and takes positive integer values (1, 2, 3, 4, ...)[cite: 1]."
            },
            {
                q: "What is the correct increasing order of energy for sublevels (s, p, d, f)?",
                options: [
                    "f < d < p < s",
                    "s < p < d < f",
                    "p < s < f < d",
                    "All sublevels have identical energy"
                ],
                correct: 1,
                explanation: "The energy of electrons increases in sublevels belonging to a specific energy level in the order: s < p < d < f[cite: 1]."
            },
            {
                q: "What is the maximum number of electrons in the (d) sublevel?",
                options: ["2 electrons", "6 electrons", "10 electrons", "14 electrons"],
                correct: 2,
                explanation: "The s sublevel holds 2, p holds 6, d holds 10, and f holds 14 electrons[cite: 1]."
            },
            {
                q: "What does Hund's rule state regarding orbital filling?",
                options: [
                    "Orbitals of equal energy (such as px, py, pz) are occupied singly first before electron pairing begins",
                    "Electrons pair up immediately in the first orbital",
                    "No two electrons can share the same quantum numbers",
                    "The f level fills before s level"
                ],
                correct: 0,
                explanation: "Hund's rule states that orbitals of equal energy are occupied singly first before electron pairing begins[cite: 1]."
            },
            {
                q: "How is Ionization Energy defined for an element in gaseous state?",
                options: [
                    "The energy required to remove an unpaired electron (the electron furthest away from the nucleus) from an atom in its gaseous state",
                    "The energy released when adding an electron",
                    "The attractive force between neutrons and protons",
                    "Total bond energy of a molecule"
                ],
                correct: 0,
                explanation: "Ionization energy is defined as the energy required to remove an unpaired electron (furthest from the nucleus) from a gaseous atom, symbolized by (I)[cite: 1]."
            },
            {
                q: "What is Electron Affinity (EA)?",
                options: [
                    "The change in energy that accompanies the addition of an electron to an atom of an element (in the outermost orbit) in the gaseous state",
                    "The atomic radius expansion down a group",
                    "The tendency of an atom to lose electrons exclusively",
                    "The melting point measurement of solids"
                ],
                correct: 0,
                explanation: "Electron Affinity (EA) is the change in energy that accompanies the addition of an electron to an atom of an element in the outermost orbit in the gaseous state[cite: 1]."
            }
        ]
    }
};