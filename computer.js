const computerData = {
    title: "الحاسب الآلي (نظري وعملي - مراجعة شاملة الفصول ١-٣)",
    category: "Computer Science (Chapters 1-3 Review)",
    ar: {
        questions: [
            // --- Chapter 1: Introduction to Computer ---
            {
                q: "ما هو التعريف الدقيق للحاسب الآلي (Computer) حسب المستند؟",
                options: [
                    "جهاز ميكانيكي يدوي لإجراء العمليات الحسابية البسيطة فقط",
                    "جهاز إلكتروني قادر على معالجة، حفظ، واسترجاع البيانات، وإجراء العمليات الرياضية والمنطقية",
                    "شاشة عرض تُستخدم حصرياً لمشاهدة مقاطع الفيديو",
                    "وحدة تخزين صلبة غير قابلة للمعالجة"
                ],
                correct: 1,
                explanation: "الحاسب الآلي هو جهاز إلكتروني قادر على معالجة، حفظ، واسترجاع البيانات، وإجراء العمليات الرياضية والمنطقية."
            },
            {
                q: "ما هي أبرز المميزات والخصائص الأساسية للحاسب الآلي المذكورة في المراجعة؟",
                options: ["السرعة والدقة (Speed and Accuracy)", "الوزن الخفيف واللون فقط", "القدرة على إصلاح الأعطال ذاتياً", "الاستغناء الكامل عن الطاقة الكهربائية"],
                correct: 0,
                explanation: "السرعة والدقة هما أبرز سمات ومميزات الحاسب الآلي."
            },
            {
                q: "كيف تُعرّف المعلومات (Information) بحسب المراجعة؟",
                options: [
                    "هي الأرقام الخام قبل إدخالها",
                    "هي المعاني والمفاهيم التي يفهمها البشر بعد معالجة البيانات",
                    "هي الذاكرة المؤقتة للجهاز",
                    "هي لغات البرمجة عالية المستوى"
                ],
                correct: 1,
                explanation: "المعلومات هي المعاني والمفاهيم التي يفهمها ويستوعبها البشر بعد عملية معالجة البيانات."
            },
            {
                q: "ما هي طبيعة عمل الحواسيب الرقمية (Digital computers)؟",
                options: [
                    "تعالج بيانات رقمية ذات قيم ثابتة مثل الحروف والأرقام من 0 إلى 9",
                    "تعتمد على نطاق متصل من القيم مثل شدة الصوت ودرجة الحرارة",
                    "تستخدم للأغراض العسكرية السرية حصراً",
                    "لا تستخدم الأرقام الثنائية"
                ],
                correct: 0,
                explanation: "الحواسيب الرقمية تعالج بيانات رقمية ذات قيم ثابتة مثل الحروف والأرقام من 0 إلى 9."
            },
            {
                q: "ما هي طبيعة عمل الحواسيب التناظرية (Analog computers)؟",
                options: [
                    "تستخدم بيانات تناظرية ذات نطاق متصل من القيم مثل شدة الصوت ودرجة الحرارة",
                    "تتعامل مع الأرقام الثنائية 0 و 1 فقط",
                    "تدعم أكثر من 1000 مستخدم في نفس الوقت",
                    "تقتصر على نصوص مايكروسوفت وورد"
                ],
                correct: 0,
                explanation: "الحواسيب التناظرية تستخدم بيانات تناظرية ذات نطاق متصل من القيم مثل شدة الصوت ودرجة الحرارة."
            },
            {
                q: "ما هو نوع الحاسوب الشائع في المؤسسات الكبرى والشركات والجامعات والذي يمكنه دعم أكثر من 1000 مستخدم في وقت واحد؟",
                options: ["Microcomputer", "Mainframe", "Workstation", "Laptop"],
                correct: 1,
                explanation: "الحواسيب المركزية (Mainframes) شائعة في المؤسسات الكبرى والشركات والجامعات، ويمكنها دعم أكثر من 1000 مستخدم في وقت واحد."
            },
            {
                q: "ماذا يسمى حاسوب محطة العمل (Workstation) وما هو استخدامه الأساسي؟",
                options: [
                    "حاسب شخصي ضعيف للاستخدام المنزلي",
                    "حاسب أقوى في المعالجة والتخزين والرسومات؛ يستخدمه العلماء والمهندسون وفي المختبرات والمصانع",
                    "نظام تشغيل أقراص نصي",
                    "جهاز إدخال يربط المستخدم باللوحة الأم"
                ],
                correct: 1,
                explanation: "حاسوب محطة العمل (Workstation) يكون أقوى في المعالجة والتخزين والرسومات، ويستخدمه العلماء والمهندسون وفي المختبرات والمصانع."
            },
            {
                q: "ما هي الأسماء البديلة للحواسيب الدقيقة (Microcomputers)؟",
                options: ["الحواسيب الشخصية (Personal computers)", "الحواسيب العملاقة (Supercomputers)", "الحواسيب التناظرية", "الخوادم المركزية"],
                correct: 0,
                explanation: "الحواسيب الدقيقة (Microcomputers) يُطلق عليها أيضاً اسم الحواسيب الشخصية (Personal computers)، ومن أنواعها المكتبي والمحمول."
            },
            {
                q: "ما هو القياس الصحيح للبت (Bit) والبايت (Byte)؟",
                options: [
                    "البايت الواحد يساوي 8 بت",
                    "البت الواحد يساوي 1024 بايت",
                    "الكيلوبايت يساوي 100 بايت",
                    "الميجابايت يساوي 1000 بايت"
                ],
                correct: 0,
                explanation: "البايت (Byte) يتكون من 8 بت."
            },
            {
                q: "كم يساوي الكيلوبايت (KB) والميجابايت (MB) والجيجابايت (GB) حسب جدول الأحجام في المراجعة؟",
                options: [
                    "الكيلوبايت = 1024 بايت، والميجابايت = 1024 كيلوبايت، والجيجابايت = 1024 ميجابايت",
                    "كل وحدة تساوي 1000 من سابقتها",
                    "الميجابايت تساوي 500 كيلوبايت",
                    "الجيجابايت تساوي 100 ميجابايت"
                ],
                correct: 0,
                explanation: "الكيلوبايت = 1024 بايت، والميجابايت = 1024 كيلوبايت، والجيجابايت = 1024 ميجابايت."
            },

            // --- Chapter 2: Computer Components ---
            {
                q: "بماذا تُعرّف المكونات المادية (Hardware) والبرمجيات (Software)؟",
                options: [
                    "Hardware هي الأجزاء التي يمكن لمسها ورؤيتها، بينما Software هي مكونات غير ملموسة تُستخدم عند تشغيل الجهاز",
                    "لا يوجد فرق فني بينهما",
                    "Software هي الأجزاء المادية الصلبة",
                    "Hardware هي مجموعة الأوامر والنصوص فقط"
                ],
                correct: 0,
                explanation: "المكونات المادية (Hardware) هي الأجزاء التي يمكن لمسها ورؤيتها، بينما البرمجيات (Software) هي مكونات غير ملموسة تُستخدم عند تشغيل الكمبيوتر."
            },
            {
                q: "ما هي وظيفة وحدة المعالجة (Processing Unit)؟",
                options: [
                    "إدخال البيانات عبر الفأرة",
                    "معالجة البيانات وتنفيذ العمليات الحسابية والمنطقية",
                    "تخزين بيانات الإقلاع الدائمة",
                    "طباعة المستندات الورقية"
                ],
                correct: 1,
                explanation: "وحدة المعالجة تتولى معالجة البيانات وتنفيذ العمليات الحسابية والمنطقية."
            },
            {
                q: "بماذا تُقاس سرعة أداء وحدة المعالجة (Processing speed)؟",
                options: ["بالبايت (Bytes)", "بالهرتز (Hertz - Hz)", "بالفولت (Volts)", "بالمتر المربع"],
                correct: 1,
                explanation: "سرعة أداء المعالجة تُقاس بالهرتز (Hertz - Hz)."
            },
            {
                q: "ما هي خصائص ذاكرة الوصول العشوائي (RAM) عند انقطاع التيار الكهربائي؟",
                options: [
                    "تخزن البيانات مؤقتاً أثناء التشغيل، وتفقد محتواها عند إغلاق الجهاز أو انقطاع التيار",
                    "تحتفظ بالبيانات للأبد دون كهرباء",
                    "تحتفظ ببيانات الإقلاع الأساسية للشركة المصنعة",
                    "تعد وحدة إدخال رئيسية"
                ],
                correct: 0,
                explanation: "ذاكرة RAM تخزن البيانات مؤقتاً وتفقد محتواها عند إغلاق الجهاز أو انقطاع التيار."
            },
            {
                q: "ما هي وظيفة وخصائص ذاكرة القراءة فقط (ROM)؟",
                options: [
                    "تفقد بياناتها فور إغلاق الجهاز",
                    "تحتفظ بالبيانات الأساسية اللازمة للإقلاع ومعلومات الشركة المصنعة ولا تفقد محتواها عند انقطاع الكهرباء",
                    "تُستخدم لتشغيل برامج الوورد والألعاب المؤقتة",
                    "تعمل كوحدة إدخال رئيسية لللوحة الأم"
                ],
                correct: 1,
                explanation: "ذاكرة ROM تحتفظ بالبيانات الأساسية للإقلاع ومعلومات المصنع، ولا تفقد محتواها عند إغلاق الجهاز أو انقطاع التيار."
            },
            {
                q: "ما هي المسؤولية الأساسية لوحدات الإدخال (Input Units)؟",
                options: [
                    "إدخال البيانات إلى الحاسب الآلي وتعمل كحلقة وصل بين المستخدم واللوحة الأم",
                    "عرض النتائج بصرياً للمستخدم",
                    "تخزين الملفات لفترات طويلة",
                    "إجراء العمليات الحسابية"
                ],
                correct: 0,
                explanation: "وحدات الإدخال مسؤولة عن إدخال البيانات إلى الحاسب وتعمل كحلقة وصل بين المستخدم واللوحة الأم."
            },
            {
                q: "أي من الخيارات التالية يمثل أمثلة صحيحة على وحدات الإدخال ووحدات الإخراج؟",
                options: [
                    "الإدخال: الفأرة والماسح الضوئي | الإخراج: الشاشة والطابعة",
                    "الإدخال: الشاشة والطابعة | الإخراج: الفأرة والماسح",
                    "الإدخال: القرص الصلب | الإخراج: ذاكرة RAM",
                    "الإدخال: نظام التشغيل | الإخراج: فيجوال بيسك"
                ],
                correct: 0,
                explanation: "الفأرة والماسح الضوئي أمثلة على وحدات الإدخال، بينما الشاشة والطابعة أمثلة على وحدات الإخراج."
            },
            {
                q: "ما هو تصنيف القرص الصلب (Hard Disk) ضمن وحدات التخزين؟",
                options: ["وحدة تخزين داخلية (Internal storage unit)", "وحدة إدخال أساسية", "ذاكرة قراءة فقط متطايرة", "وحدة إخراج رئيسية"],
                correct: 0,
                explanation: "القرص الصلب (Hard Disk) يعتبر مثالاً على وحدة تخزين داخلية."
            },
            {
                q: "كيف تُعرّف البرامج (Programs) في الحاسب؟",
                options: [
                    "مجموعة من الأوامر والتعليمات المرتبة لغرض معين",
                    "الأجزاء المادية التي يمكن لمسها",
                    "القرص الصلب الخارجي",
                    "وحدات الإدخال الصوتية"
                ],
                correct: 0,
                explanation: "البرامج (Programs) هي مجموعة من الأوامر والتعليمات المرتبة لغرض معين."
            },
            {
                q: "ما هو تعريف نظام التشغيل (Operating system)؟",
                options: [
                    "مجموعة من البرامج التي تشغل الحاسب، تتعامل مع مكوناته، وتدير البرمجيات والتطبيقات",
                    "لغة برمجة لتصميم الشاشات",
                    "وحدة معالجة مركزية تفقد بياناتها عند الإغلاق",
                    "برنامج لتعديل النصوص فقط"
                ],
                correct: 0,
                explanation: "نظام التشغيل هو مجموعة من البرامج التي تشغل الحاسب، تتعامل مع مكوناته، وتدير البرمجيات والتطبيقات."
            },
            {
                q: "ما هي عيوب نظام تشغيل الأقراص DOS (Disk Operating System)؟",
                options: [
                    "يعتمد على واجهة سطر الأوامر (Command-line interface) ولا يسمح للمستخدم بتشغيل عدة برامج في نفس الوقت",
                    "يدعم اللمس المتعدد وواجهات رسومية معقدة",
                    "يفتقر للقرص الصلب تماماً",
                    "لا يتعامل مع لوحة المفاتيح"
                ],
                correct: 0,
                explanation: "نظام DOS يعتمد على سطر الأوامر ولا يسمح للمستخدم بتشغيل عدة برامج في نفس الوقت."
            },
            {
                q: "ما هي ميزة لغات البرمجة عالية المستوى (High Level Languages) وما مثال عليها؟",
                options: [
                    "تكون أقرب للغة البشر، ومثالها لغة فيجوال بيسك (Visual Basic)",
                    "تكتب بلغة الآلة الثنائية الصرفة",
                    "تُستدم فقط لتشغيل نظام DOS",
                    "تعد جزءاً من المكونات المادية الصلبة"
                ],
                correct: 0,
                explanation: "اللغات عالية المستوى تكون أقرب للغة البشر، ولغة فيجوال بيسك (Visual Basic) مثال عليها."
            },

            // --- Chapter 3: Electronic Documents and Software Development (Including Practical Aspects) ---
            {
                q: "ما هو مقصود المستندات الإلكترونية (Electronic Documents)؟",
                options: [
                    "الأجزاء المادية واللوحة الأم",
                    "المستندات أو الملفات المُنشأة باستخدام تطبيقات الحاسب مثل مستندات النصوص (Text documents)",
                    "أنظمة التشغيل القديمة",
                    "وحدات الإدخال المادية"
                ],
                correct: 1,
                explanation: "المستندات الإلكترونية هي المستندات أو الملفات المُنشأة باستخدام تطبيقات الحاسب مثل مستندات النصوص."
            },
            {
                q: "ما هي الأنشطة التي تتم في مرحلة تحليل النظم (System Analysis)؟",
                options: [
                    "دراسة حاجات المستخدمين لتسهيل العمل، جمع البيانات، وتحديد خطوات سير العمل (مثل تحليل نظام شركة)",
                    "كتابة الكود البرمجي النهائي",
                    "تصميم واجهات وشاشات الإدخال العملية",
                    "اختبار النظام بحثاً عن الأخطاء"
                ],
                correct: 0,
                explanation: "تحليل النظم يشمل دراسة حاجات المستخدمين لتسهيل العمل، جمع البيانات، وتحديد خطوات سير العمل."
            },
            {
                q: "ماذا تتضمن مرحلة تصميم النظم (System Design) من الناحية العملية؟",
                options: [
                    "تصميم شاشات الإدخال بوضوح وبساطة لكي يتمكن المستخدم من إدخال الأوامر بطريقة سهلة",
                    "كتابة الأوامر البرمجية وقواعد البيانات",
                    "تجميع البيانات وتحليل نظام الشركات",
                    "إصلاح قطع العتاد T التالفة"
                ],
                correct: 0,
                explanation: "تصميم النظم يشمل تصميم شاشات الإدخال بوضوح وبساطة لكي يتمكن المستخدم من إدخال الأوامر بسهولة."
            },
            {
                q: "ما الذي يحدث في مرحلة تنفيذ النظم (System Implementation)؟",
                options: [
                    "كتابة الأوامر أو الكود (Write commands or code) في لغة برمجة أو نظام إدارة قواعد بيانات لتنفيذ المهام المطلوبة",
                    "دراسة متطلبات العميل فقط",
                    "تشغيل نظام التشغيل النصي DOS",
                    "التأكد من خلو البرنامج من الأخطاء البرمجية"
                ],
                correct: 0,
                explanation: "تنفيذ النظم يتم فيه كتابة الأوامر أو الكود في لغة برمجة أو نظام إدارة قواعد بيانات لتنفيذ المهام المطلوبة."
            },
            {
                q: "ما هو الهدف من مرحلة اختبار النظم (System Testing)؟",
                options: [
                    "اختبار النظام والتأكد من أنه خالٍ من الأخطاء وأنه يلبي متطلبات المستخدم (Meets user requirements)",
                    "تصميم الشاشات الرسومية وتوزيع الأزرار",
                    "جمع البيانات الأولية للمشروع",
                    "شراء الأقراص الصلبة والذاكرة العشوائية"
                ],
                correct: 0,
                explanation: "اختبار النظم يهدف لاختبار النظام للتأكد من أنه خالٍ من الأخطاء وأنه يلبي متطلبات المستخدم."
            },
            {
                q: "أي من الخيارات التالية يمثل الترتيب الصحيح لمراحل تطوير النظم (Software Development)؟",
                options: [
                    "التحليل، التصميم، التنفيذ، الاختبار (Analysis / Design / Implementation / Testing)",
                    "التنفيذ، الاختبار، التحليل، التصميم",
                    "التصميم، التحليل، الاختبار، التنفيذ",
                    "الاختبار، التنفيذ، التصميم، التحليل"
                ],
                correct: 0,
                explanation: "الترتيب الصحيح لمراحل تطوير النظم هو: التحليل -> التصميم -> التنفيذ -> الاختبار."
            }
        ]
    },
    en: {
        questions: [
            // --- Chapter 1: Introduction to Computer ---
            {
                q: "What is the precise definition of a computer according to the document?",
                options: [
                    "A manual mechanical tool for simple calculations only",
                    "An electronic device that can process, save, and retrieve data, and do mathematical and logical operations",
                    "A display screen used exclusively for watching videos",
                    "A solid storage unit without processing capabilities"
                ],
                correct: 1,
                explanation: "A computer is an electronic device that can process, save, and retrieve data, and do mathematical and logical operations."
            },
            {
                q: "What are the core features of a computer mentioned in the review?",
                options: ["Speed and Accuracy", "Light weight and color", "Self-repairing capacity", "Completely wireless operation"],
                correct: 0,
                explanation: "Speed and Accuracy are core features of a computer."
            },
            {
                q: "How is information defined after processing data?",
                options: [
                    "Raw, unprocessed numbers",
                    "Meanings and concepts that humans understand after processing data",
                    "Temporary RAM cache",
                    "High-level programming syntax"
                ],
                correct: 1,
                explanation: "Information represents meanings and concepts that humans understand after processing data."
            },
            {
                q: "How do digital computers operate?",
                options: [
                    "Process digital data with fixed values such as alphabets and digits from 0 to 9",
                    "Use continuous analog values like temperature",
                    "Operate exclusively for secret military intelligence",
                    "Do not use binary numbers"
                ],
                correct: 0,
                explanation: "Digital computers process digital data with fixed values such as alphabets and digits from 0 to 9."
            },
            {
                q: "What characterizes analog computers?",
                options: [
                    "Use analog data with a continuous range of values such as sound intensity and temperature",
                    "Process binary bits 0 and 1 only",
                    "Support over 1000 users simultaneously",
                    "Limited to MS Word documents"
                ],
                correct: 0,
                explanation: "Analog computers use analog data with a continuous range of values such as sound intensity and temperature."
            },
            {
                q: "What computer type is common in large institutions and universities, supporting over 1000 users at once?",
                options: ["Microcomputer", "Mainframe", "Workstation", "Laptop"],
                correct: 1,
                explanation: "Mainframes are common in institutions, large companies, and universities; they can support more than 1000 users at once."
            },
            {
                q: "What is a workstation computer primarily used for?",
                options: [
                    "Basic home office typing",
                    "More powerful in processing, storage, and graphics; used by scientists, engineers, and in laboratories and factories",
                    "Running disk operating systems only",
                    "Acting as a simple input peripheral"
                ],
                correct: 1,
                explanation: "A workstation is more powerful in processing, storage, and graphics; used by scientists, engineers, and in laboratories and factories."
            },
            {
                q: "What are the alternative names for microcomputers?",
                options: ["Personal computers", "Supercomputers", "Analog computers", "Central servers"],
                correct: 0,
                explanation: "Microcomputers are also called personal computers; widely used types include desktop and laptop computers."
            },
            {
                q: "What are the standard equivalencies for Bit and Byte?",
                options: [
                    "1 Byte equals 8 bits",
                    "1 Bit equals 1024 bytes",
                    "1 Kilobyte equals 100 bytes",
                    "1 Megabyte equals 1000 bytes"
                ],
                correct: 0,
                explanation: "A bit represents one binary digit (0 or 1), and 1 byte equals 8 bits."
            },
            {
                q: "How many bytes make up a Kilobyte (KB), a Megabyte (MB), and a Gigabyte (GB)?",
                options: [
                    "1 Kilobyte = 1024 bytes, 1 Megabyte = 1024 KB, 1 Gigabyte = 1024 MB",
                    "Each unit equals 1000 of the previous",
                    "1 Megabyte = 500 KB",
                    "1 Gigabyte = 100 MB"
                ],
                correct: 0,
                explanation: "Kilobytes = 1024 bytes, Megabytes = 1024 KB, and Gigabytes = 1024 MB."
            },

            // --- Chapter 2: Computer Components ---
            {
                q: "What is the distinction between Hardware and Software?",
                options: [
                    "Hardware are physical parts that can be touched and seen; Software are intangible components used when operating a computer",
                    "There is no technical difference",
                    "Software are physical electronic chips",
                    "Hardware refers to text files and commands"
                ],
                correct: 0,
                explanation: "Hardware are the parts and accessories that make up the device; Software are intangible components used when operating a computer."
            },
            {
                q: "What is the function of the Processing Unit?",
                options: [
                    "Entering data via mouse",
                    "Handles data processing and executes arithmetic and logical operations",
                    "Storing startup data permanently",
                    "Printing physical documents"
                ],
                correct: 1,
                explanation: "The Processing Unit handles data processing and executes arithmetic and logical operations."
            },
            {
                q: "How is processing performance speed measured?",
                options: ["In Bytes", "In Hertz (Hz)", "In Volts", "In Square Meters"],
                correct: 1,
                explanation: "The performance speed of processing is measured in Hertz (Hz)."
            },
            {
                q: "What happens to RAM data during a power outage or shutdown?",
                options: [
                    "RAM temporarily stores data while running, and its contents are lost when the device shuts down or during a power outage",
                    "Data is retained permanently",
                    "Data transfers to ROM automatically",
                    "It acts as a primary input unit"
                ],
                correct: 0,
                explanation: "RAM temporarily stores data while running, and its contents are lost when the device shuts down or during a power outage."
            },
            {
                q: "What is the function and characteristic of Read-Only Memory (ROM)?",
                options: [
                    "Losing all data upon shutdown",
                    "Retains basic data needed for startup and manufacturer information without loss during power outages",
                    "Running temporary game applications",
                    "Acting as main system input unit"
                ],
                correct: 1,
                explanation: "ROM retains basic data needed for startup and manufacturer information without loss during power outages."
            },
            {
                q: "What is the primary responsibility of Input Units?",
                options: [
                    "Responsible for entering data into the computer and act as the link between the user and the system board",
                    "Displaying results visually to the user",
                    "Storing files for long periods",
                    "Executing math calculations"
                ],
                correct: 0,
                explanation: "Input units are responsible for entering data into the computer and act as the link between the user and the system board."
            },
            {
                q: "Which of the following correctly pairs Input and Output units?",
                options: [
                    "Input: Mouse and Scanner | Output: Monitor and Printer",
                    "Input: Monitor and Printer | Output: Mouse and Scanner",
                    "Input: Hard Disk | Output: RAM",
                    "Input: Operating System | Output: Visual Basic"
                ],
                correct: 0,
                explanation: "Mouse and Scanner are examples of input units, while Monitor and Printer are examples of output units."
            },
            {
                q: "What is the classification of a Hard Disk among storage units?",
                options: ["An example of an internal storage unit", "A primary input unit", "Volatile read-only memory", "A main output unit"],
                correct: 0,
                explanation: "Hard Disk is an example of an internal storage unit."
            },
            {
                q: "How are Programs defined in a computer?",
                options: [
                    "A set of commands and instructions arranged for a specific purpose",
                    "Physical parts that can be touched",
                    "An external hard drive device",
                    "Audio input peripherals"
                ],
                correct: 0,
                explanation: "Programs are a set of commands and instructions arranged for a specific purpose."
            },
            {
                q: "What is the definition of an Operating System?",
                options: [
                    "A set of programs that operates the computer, handles its components, and manages software and applications",
                    "A programming language for screen design",
                    "A CPU cache that loses data on shutdown",
                    "A text editing application only"
                ],
                correct: 0,
                explanation: "An operating system is a set of programs that operates the computer, handles its components, and manages software and applications."
            },
            {
                q: "What are the limitations of Disk Operating System (DOS)?",
                options: [
                    "Command-line interface; does not allow the user to run multiple programs at the same time",
                    "Supports multi-touch and complex graphical windowing",
                    "Lacks any hard disk storage support",
                    "Does not interact with keyboards"
                ],
                correct: 0,
                explanation: "DOS is a command-line interface operating system that does not allow the user to run multiple programs at the same time."
            },
            {
                q: "What characterizes high-level languages, and what is an example?",
                options: [
                    "They are closer to human language; Visual Basic is an example",
                    "They are written in pure binary machine code",
                    "They are restricted exclusively to DOS",
                    "They form physical hardware accessories"
                ],
                correct: 0,
                explanation: "High-level languages are closer to human language, and Visual Basic is an example of a high-level language."
            },

            // --- Chapter 3: Electronic Documents and Software Development ---
            {
                q: "What are electronic documents?",
                options: [
                    "Physical computer hardware components",
                    "Documents or files created using computer applications such as text documents",
                    "Legacy operating systems",
                    "Physical input peripherals"
                ],
                correct: 1,
                explanation: "Electronic documents are documents or files created using computer applications such as text documents."
            },
            {
                q: "What activities take place during System Analysis?",
                options: [
                    "Study user needs to facilitate work, collect data, and identify workflow steps (such as analyzing a company's system)",
                    "Writing final programming compilation code",
                    "Designing graphical input screens",
                    "Testing systems for bug fixes"
                ],
                correct: 0,
                explanation: "System analysis involves studying user needs to facilitate work, collect data, and identify workflow steps."
            },
            {
                q: "What does System Design involve?",
                options: [
                    "Design input screens clearly and simply so the user can enter commands in an easy way",
                    "Writing code syntax and database structures",
                    "Gathering company preliminary analysis data",
                    "Repairing broken hardware circuits"
                ],
                correct: 0,
                explanation: "System design involves designing input screens clearly and simply so the user can enter commands in an easy way."
            },
            {
                q: "What happens during System Implementation?",
                options: [
                    "Write commands or code in a programming language or database management system to execute required tasks",
                    "Studying customer requirements only",
                    "Operating command-line DOS prompts",
                    "Ensuring error-free software compliance"
                ],
                correct: 0,
                explanation: "System implementation involves writing commands or code in a programming language or database management system to execute required tasks."
            },
            {
                q: "What is the goal of System Testing?",
                options: [
                    "Test the system to ensure it is free of errors and meets user requirements",
                    "Design graphical interface window layouts",
                    "Collect project preliminary facts",
                    "Purchase hard drives and RAM modules"
                ],
                correct: 0,
                explanation: "System testing aims to test the system to ensure it is free of errors and meets user requirements."
            },
            {
                q: "What is the correct sequence of phases in software development?",
                options: [
                    "Analysis / Design / Implementation / Testing",
                    "Implementation / Testing / Analysis / Design",
                    "Design / Analysis / Testing / Implementation",
                    "Testing / Implementation / Design / Analysis"
                ],
                correct: 0,
                explanation: "The correct sequence is Analysis / Design / Implementation / Testing."
            }
        ]
    }
};