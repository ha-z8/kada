const computerData = {
    title: "المراجعة الشاملة التفصيلية: البرامج المكتبية، الشبكات، الإنترنت، وأمن المعلومات (شامل لجميع السطور)",
    category: "Complete Exhaustive Review: Spreadsheet, Presentation, Networks, Internet & Cyber Security",
    ar: {
        questions: [
            // --- 1. Spreadsheet Program - Microsoft Excel ---
            {
                q: "ما هو التعريف الشامل لبرنامج مايكروسوفت إكسل (Microsoft Excel) وما هي وظائفه الأساسية؟",
                options: [
                    "هو برنامج جداول بيانات (spreadsheet program) يُستخدم لتنظيم البيانات، إجراء الحسابات الرياضية، تعديل الأرقام، وإنشاء المخططات والرسوم البيانية",
                    "هو برنامج مخصص حصراً لإنشاء العروض التقديمية التفاعلية والمحاضرات المصورة",
                    "هو جدار حماية رقمي يُستخدم لحماية الحواسيب وشبكات الاتصال ضد البرمجيات الخبيثة",
                    "هو متصفح ويب متخصص لفهرسة مواقع الإنترنت وتسهيل الوصول إلى المعلومات"
                ],
                correct: 0,
                explanation: "مايكروسوفت إكسل هو برنامج جداول بيانات يُستخدم لتنظيم البيانات، إجراء الحسابات الرياضية، تعديل الأرقام، وإنشاء المخططات[cite: 6]."
            },
            {
                q: "ما هي القاعدة الهامة جداً بخصوص الاستخدام الأساسي لبرنامج مايكروسوفت إكسل مقارنة بغيره؟",
                options: [
                    "إكسل يُستخدم في الغالب للحسابات والبيانات العددية وليس لإنشاء العروض التقديمية",
                    "إكسل يُستخدم حصراً لإنشاء العروض التقديمية وممنوع استخدامه في العمليات الحسابية",
                    "إكسل يُعتبر نظام تشغيل كامل لربط الحواسيب ببعضها عبر شبكة LAN",
                    "إكسل يُستخدم فقط لتشفير الملفات باستخدام التشفير غير المتناظر"
                ],
                correct: 0,
                explanation: "ملاحظة هامة: Microsoft Excel يُستخدم بشكل أساسي للحسابات والبيانات العددية، وليس لإنشاء العروض التقديمية[cite: 6]."
            },
            {
                q: "كيف تُميز وتُعرّف الصفوف (Rows)، الأعمدة (Columns)، والخلايا (Cells) في جداول إكسل؟",
                options: [
                    "الصف (Row) هو مجموعة أفقية من الخلايا ويتم ترقيمها (1, 2, 3...)، العمود (Column) هو مجموعة رأسية ويتم تسميتها بالحروف (A, B, C...)، والخلية (Cell) هي تقاطع صف مع عمود",
                    "الصف هو مجموعة رأسية ويتم تسميتها بالحروف، بينما العمود هو مجموعة أفقية يتم ترقيمها بأرقام",
                    "الخلية هي تقاطع شبكة الإنترنت مع جدار الحماية، والعمود يمثل عنوان الموقع URL",
                    "الصف يمثل نطاق البيانات الممتد من A1 إلى D11 فقط"
                ],
                correct: 0,
                explanation: "الصف (Row) هو مجموعة أفقية من الخلايا وترقم (1, 2, 3)، العمود (Column) مجموعة رأسية وتسملى بالحروف (A, B, C)، والخلية تقاطع الصف مع العمود[cite: 6]."
            },
            {
                q: "كيف يُصاغ عنوان الخلية (Cell Address) في برنامج إكسل، وما هو مثال عليه؟",
                options: [
                    "حرف العمود متبوعاً برقم الصف، مثل A1 أو B5 أو D10",
                    "رقم الصف متبوعاً بحرف العمود، مثل 1A أو 5B",
                    "اسم الملف متبوعاً بنطاق الخلايا مثل Excel:A1",
                    "الرمز @ متبوعاً باسم النطاق مثل @A1"
                ],
                correct: 0,
                explanation: "عنوان الخلية (Cell Address) يتكون من حرف العمود متبوعاً برقم الصف. أمثلة: A1, B5, D10[cite: 6]."
            },
            {
                q: "كيف يتم كتابة وتحديد نطاق الخلايا (Cell Range) في برنامج إكسل؟",
                options: [
                    "باستخدام الخلية الأولى متبوعة بنقطتين رأسيتين ثم الخلية الأخيرة، مثل A1:D11",
                    "باستخدام الخلية الأولى متبوعة بشرطة مائلة ثم الخلية الأخيرة مثل A1/D11",
                    "باستخدام فاصلة منقوطة تفصل بين أسماء الخلايا الفردية فقط",
                    "باستخدام علامة الجمع بين الخلية الأولى والأخيرة مثل A1+D11"
                ],
                correct: 0,
                explanation: "نطاق الخلايا (Range) هو مجموعة خلايا محددة ويُكتب هكذا: الخلية الأولى:الخلية الأخيرة، مثل A1:D11 أي كل الخلايا من A1 إلى D11 محددة[cite: 6]."
            },
            {
                q: "ماذا يعني ظهور الرموز (#####) داخل خلية في إكسل، وما هو التصرف الصحيح لحل هذه المشكلة؟",
                options: [
                    "العمود عادة لا يكون عريضاً بما يكفي لعرض القيمة، والحل هو النقر المزدوج على حافة عنوان العمود لتوسيعه تلقائياً",
                    "هناك خطأ في البرمجة وانهيار كامل لملف الجداول",
                    "تم تجاوز الحد الأقصى لعدد الحروف المسموح بها في الخلية الواحدة ولا يمكن حلها",
                    "الخلية محددة بنطاق غير صحيح مثل A1:D11 ويجب حذفها"
                ],
                correct: 0,
                explanation: "إذا ظهرت ##### داخل خلية إكسل، فالعمود ليس عريضاً بما يكفي لعرض القيمة. الحل: انقر مرتين على حافة عنوان العمود لتوسيعه تلقائياً (Widen the column)[cite: 6]."
            },
            {
                q: "ما هي الدوال الأساسية في إكسل (SUM, AVERAGE, MAX) وما هي وظائفها المحددة؟",
                options: [
                    "دالة SUM تجمع الأرقام، دالة AVERAGE تجد المتوسط الحسابي، ودالة MAX تجد القيمة الأكبر (أكبر قيمة)",
                    "دالة SUM تجد المتوسط، AVERAGE تجمع الأرقام، ودالة MAX تبحث عن نصوص الويب",
                    "جميعها دوال مخصصة لإنشاء الرسوم البيانية وإدارة البريد الإلكتروني",
                    "دالة SUM تُستخدم لتشفير كلمات المرور ودالة MAX تحسب ضغط الغازات"
                ],
                correct: 0,
                explanation: "الدوال الهامة: SUM لإضافة الأرقام، AVERAGE لإيجاد المتوسط، وMAX لإيجاد أكبر قيمة (Largest value)[cite: 6]."
            },
            {
                q: "ما هي الخطوات الصحيحة بالترتيب لإنشاء مخطط (Chart) في برنامج إكسل؟",
                options: [
                    "تحديد نطاق البيانات (Select data) ← الانتقال إلى إدراج (Insert) ← اختيار مخطط (Chart)",
                    "النقر على إدراج ← اختيار مخطط ← تحديد البيانات في النهاية",
                    "الذهاب إلى تصميم (Design) ← تنسيق الخلفية ← إدراج Chart",
                    "كتابة الصيغة =AVERAGE ثم الضغط على إدراج مخطط"
                ],
                correct: 0,
                explanation: "لإنشاء مخطط: 1. تحديد نطاق البيانات، 2. الانتقال إلى Insert، 3. اختيار Chart. ولا تقم بإدراج مخطط قبل تحديد البيانات المطلوبة[cite: 6, 7]."
            },

            // --- 2. Presentation Program - Microsoft PowerPoint ---
            {
                q: "ما هو الاستخدام الأساسي لبرنامج مايكروسوفت باوربوينت (Microsoft PowerPoint)؟",
                options: [
                    "يُستخدم بشكل أساسي لإنشاء العروض التقديمية (Presentations)",
                    "يُستخدم لإجراء العمليات الحسابية المعقدة وتنظيم الجداول الرقمية الكبيرة",
                    "يُستخدم كمتصفح ويب لفتح مواقع الإنترنت والبحث عن المعلومات",
                    "يُستخدم لإنشاء جدار حماية شبكي لحماية الحواسيب ضد هجمات DoS"
                ],
                correct: 0,
                explanation: "مايكروسوفت باوربوينت يُستخدم بشكل رئيسي لإنشاء العروض التقديمية (Create presentations)[cite: 7]."
            },
            {
                q: "كيف يتم إضافة شريحة جديدة (New Slide) في برنامج باوربوينت، وأين تقع هذه الأداة؟",
                options: [
                    "من خلال علامة التبويب الصفحة الرئيسية (Home) ← شريحة جديدة (New Slide)",
                    "من خلال علامة التبويب تصميم (Design) ← شريحة جديدة",
                    "من خلال علامة التبويب إدراج (Insert) ← خلفية الشريحة",
                    "من خلال النقر المزدوج على عنوان العمود الأيمن"
                ],
                correct: 0,
                explanation: "لإضافة شريحة جديدة: Home → New Slide (توجد أداة New Slide في تبويب Home)[cite: 7]."
            },
            {
                q: "ما هو دور تبويب التصميم (Design Tab) ومعاينة الأنساق (Themes) في الباوربوينت؟",
                options: [
                    "يُستخدم للتحكم في المظهر العام للعرض التقديمي، وتوفر معاينات الأنساق إمكانية اختيار أنساق مختلفة وتغيير المظهر العام للشرائح وتنسيق الخلفيات",
                    "يُستخدم حصراً للتحكم في كيفية ظهور النصوص والحركات أثناء عرض الشرائح",
                    "يُستخدم لإدارة خوادم شبكات المنطقة الواسعة (WAN)",
                    "يُستخدم لحساب المتوسط الحسابي للبيانات العددية في الشرائح"
                ],
                correct: 0,
                explanation: "تبويب Design يتحكم في المظهر. النسق (Theme) يغير المظهر العام ويوفر تنسيق الخلفية (Background formatting) ومعاينات الأنساق Theme previews[cite: 7, 8]."
            },
            {
                q: "كيف يتم تغيير خلفية الشريحة (Slide Background) في برنامج باوربوينت؟",
                options: [
                    "من خلال المسار: Design → Format Background",
                    "من خلال المسار: Home → New Slide",
                    "من خلال المسار: Insert → Chart",
                    "من خلال المسار: URL → Background"
                ],
                correct: 0,
                explanation: "لتغيير خلفية الشريحة: Design → Format Background، وهذا يتيح تعديل مظهر خلفية الشريحة[cite: 7, 8]."
            },
            {
                q: "ما هي وظيفة الحركات (Animations) في برنامج مايكروسوفت باوربوينت؟",
                options: [
                    "التحكم في كيفية ظهور أو تحرك الكائنات مثل النصوص أثناء عرض الشرائح (Slide Show)",
                    "تغيير خلفية العرض بالكامل وتطبيق الأنساق التلقائية",
                    "إدارة شبكة الند للند وتوصيل الأجهزة ببعضها",
                    "حفظ المواقع المفضلة في المتصفح وإلغاء تحميل الصفحات"
                ],
                correct: 0,
                explanation: "الحركات (Animations) تتحكم في كيفية ظهور الكائنات مثل النصوص أو تحركها أثناء عرض الشرائح (Slide show)[cite: 8]."
            },

            // --- 3. Introduction to Networks ---
            {
                q: "ما هو تعريف شبكة الحاسوب (Computer Network) وما هي فوائدها الرئيسية؟",
                options: [
                    "هي مجموعة من الحواسيب والأجهزة الأخرى المترابطة معاً لمشاركة الموارد، ومن أبرز فوائدها مشاركة المعلومات بين مستخدمي الشبكة",
                    "هي برنامج جداول بيانات يُستخدم لإجراء العمليات الحسابية في إكسل",
                    "هي متصفح إنترنت لفتح المواقع وفهرسة محركات البحث",
                    "هي برمجيات خبيثة تشفر الملفات وتطالب بفدية مالية"
                ],
                correct: 0,
                explanation: "شبكة الحاسوب هي مجموعة حواسيب وأجهزة متصلة لمشاركة الموارد، وأهم فوائدها مشاركة المعلومات بين المستخدمين[cite: 8]."
            },
            {
                q: "كيف تختلف أنواع الشبكات من حيث النطاق الجغرافي (LAN, MAN, WAN)؟",
                options: [
                    "LAN تغطي منطقة محدودة (قاعة كلية، مدرسة، مبنى شركة)، MAN تغطي منطقة متوسطة الحجم (مدن مختلفة)، وWAN تغطي منطقة واسعة جداً (دول ومناطق متباعدة جداً)",
                    "LAN تغطي دولاً بأكملها، بينما WAN تغطي غرفة صغيرة فقط",
                    "MAN تغطي الأجهزة الشخصية فقط، بينما LAN تغطي شبكة الإنترنت العالمية",
                    "جميعها مصطلحات مترادفة لا علاقة لها بالمساحة الجغرافية"
                ],
                correct: 0,
                explanation: "أنواع الشبكات حسب المساحة: LAN (محدودة/صغيرة مثل مدرسة)، MAN (متوسطة الحجم مثل مدن)، WAN (كبيرة جداً مثل دول ومناطق متباعدة)[cite: 8, 9]."
            },
            {
                q: "ما هي خصائص شبكة الند للند (Peer-to-Peer Network)؟",
                options: [
                    "العلاقة بين الأجهزة متساوية (Equal relationship)، ويمكن لحاسوب المستخدم أن يعمل كخادم (Server) وكعميل (Client) في نفس الوقت",
                    "توجد أجهزة خادم رئيسية فقط تمتلك قدرات تخزين عالية ولا يمكن للعملاء تقديم خدمات",
                    "تعتمد حصراً على كابلات فيزيائية ولا تدعم الاتصال اللاسلكي",
                    "تستخدم بروتوكولات التشفير غير المتناظر بمفتاحين عام وخاص فقط"
                ],
                correct: 0,
                explanation: "في شبكة Peer-to-Peer العلاقة متساوية بين الأجهزة، ويمكن لجهاز المستخدم أن يعمل كـ Server و Client[cite: 9, 10]."
            },
            {
                q: "ما هو تعريف الخادم (Server) والعميل (Client) في شبكات الحاسوب؟",
                options: [
                    "الخادم حاسوب ذو قدرات معالجة وتخزين عالية ويستخدم برمجيات متخصصة لتقديم خدمات للحواسيب الأخرى، بينما العميل جهاز يستفيد من هذه الخدمات",
                    "العميل هو الخادم الرئيسي للإنترنت، والخادم هو متصفح الويب الافتراضي",
                    "الخادم هو برنامج إكسل لتنظيم البيانات، والعميل هو شريحة الباوربوينت",
                    "الخادم جهاز محمول يفتقر لأي طاقة تخزين، والعميل هو جدار الحماية"
                ],
                correct: 0,
                explanation: "Server: حاسوب بقدرات معالجة وتخزين عالية يقدم خدمات للآخرين. Client: حاسوب أو جهاز يستدم الخدمات المقدمة عبر الشبكة[cite: 9]."
            },
            {
                q: "ما هو الفارق بين الشبكات السلكية (Wired Networks) والشبكات اللاسلكية (Wireless Networks)؟",
                options: [
                    "الشبكات السلكية تستخدم كابلات فيزيائية لربط الأجهزة، بينما اللاسلكية لا تعتمد على كابلات وتستخدم إشارات لاسلكية",
                    "الشبكات السلكية لا تستخدم كابلات أبداً، بينما اللاسلكية تعتمد حصراً على الأسلاك النحاسية",
                    "الشبكات السلكية مخصصة للإنترنت فقط واللاسلكية لبرامج أوفيس",
                    "كلاهما يستخدمان خطوط الهاتف الأرضية فقط لتوصيل مودم الإنترنت"
                ],
                correct: 0,
                explanation: "Wired network: تستخدم كابلات فيزيائية (Cables). Wireless network: لا تعتمد على كابلات فيزيائية وتستخدم إشارات لاسلكية[cite: 9]."
            },
            {
                q: "ما هي وظائف الأجهزة الهامة في الشبكات: المبدل (Switch)، المودم (Modem)، وبطاقة واجهة الشبكة (NIC)؟",
                options: [
                    "Switch يربط الحاسوب الخادم بالحواسيب الأخرى في الشبكة، Modem يوصل الحاسوب بالإنترنت عبر خط الهاتف، وNIC يسمح للحاسوب بالاتصال بالشبكة",
                    "Switch يعمل كجدار حماية، Modem يصمم العروض التقديمية، وNIC يحسب الدوال SUM",
                    "جميعها أجهزة مخصصة لإنشاء الرسوم البيانية وإدارة برمجيات الفدية",
                    "Modem يمنع هجمات DoS، وSwitch يشفر البيانات بتشفير متناظر"
                ],
                correct: 0,
                explanation: "Switch: يربط حاسوب الخادم بالحواسيب بالشبكة. Modem: يوصل الحاسوب بالإنترنت عبر خط الهاتف. NIC (Network Interface Card): يتيح للجهز الاتصال بالشبكة[cite: 9, 10]."
            },

            // --- 4. Using the Internet ---
            {
                q: "ماذا يعني اختصار (WWW) وما هو تعريفه الأساسي؟",
                options: [
                    "يعني World Wide Web (شبكة الويب العالمية)",
                    "يعني Wide Wireless WAN (شبكة لاسلكية واسعة)",
                    "يعني Web Working Window (نافذة عمل الويب)",
                    "يعني Wired Web Wrapper (غلاف الويب السلكي)"
                ],
                correct: 0,
                explanation: "WWW يرمز إلى World Wide Web[cite: 10, 12]."
            },
            {
                q: "ما هي الوظائف والمهام التي تقوم بها متصفحات الويب (Web Browsers)؟",
                options: [
                    "فتح ومواجهة التفاعل مع مواقع الويب، العمل كوسطاء بين المستخدم والإنترنت، فتح المواقع، التنقل بينها، تحديث الصفحات، إيقاف التحميل، وحفظ المواقع المفضلة",
                    "تصميم الجداول الرياضية وإجراء عمليات الجمع والطرح",
                    "تشفير القرص الصلب ومطالبة المستخدم بفدية مالية",
                    "فهرسة مواقع الإنترنت بالكامل لتكون بمثابة محرك بحث مستقل"
                ],
                correct: 0,
                explanation: "متصفحات الويب هي برامج لفتح والتفاعل مع المواقع وكوسطاء بين الإنترنت والمستخدم. وظائفها: فتح المواقع، التنقل، تحديث الصفحة (Refresh)، إيقاف التحميل (Stop)، وحفظ المفضلة (Favorites)[cite: 10, 11]."
            },
            {
                q: "ما هي وظائف أزرار التحكم في المتصفح: شريط العنوان (Address Bar)، زر الصفحة الرئيسية (Home)، زر التحديث (Refresh)، وزر التوقف (Stop)؟",
                options: [
                    "Address Bar لإدخال عنوان الموقع المراد تصفحه، Home يفتح الصفحة الرئيسية الافتراضية، Refresh يعيد تحميل الصفحة، وStop يوقف تحميل الموقع",
                    "Address Bar يحفظ المفضلة، Home يغلق المتصفح، Refresh يشفر البيانات، وStop ينشئ شريحة جديدة",
                    "جميعها أزرار خاصة ببرنامج مايكروسوفت إكسل فقط",
                    "تستخدم لإدارة جدار الحماية وحظر برمجيات التجسس Spyware"
                ],
                correct: 0,
                explanation: "Address Bar: إدخال عنوان الموقع. Home: فتح الصفحة الرئيسية الافتراضية. Refresh: إعادة تحميل الصفحة الحالية. Stop: إيقاف تحميل الموقع[cite: 11, 12]."
            },
            {
                q: "ما هي الشاعات والامتدادات الشائعة لنطاقات الويب (GOV, EDU, COM) وما ماذا تعني؟",
                options: [
                    "GOV تعني حكومي (Government)، EDU تعني تعليمي/مؤسسات تعليمية (Education)، وCOM تعني تجاري (Commercial organizations)",
                    "GOV تعني تجاري، EDU تعني حكومي، وCOM تعني عسكري",
                    "جميعها تدل على برمجيات خبيثة تابعة لشبكة WAN",
                    "تستخدم لتحديد نوع التشفير المتناظر وغير المتناظر في البريد"
                ],
                correct: 0,
                explanation: "امتدادات النطاقات: GOV للحكومة (Government)، EDU للتعليم (Education)، COM للمؤسسات التجارية (Commercial)[cite: 11, 13]."
            },
            {
                q: "ما هو الفارق بين متصفح الويب (Web Browser) ومحرك البحث (Search Engine)؟",
                options: [
                    "متصفح الويب هو برنامج/تطبيق لفتح والتفاعل مع المواقع، بينما محرك البحث هو موقع متخصص يفهرس مواقع أخرى لمساعدة المستخدمين في العثور على المعلومات",
                    "محرك البحث هو برنامج إكسل، بينما المتصفح هو برنامج باوربوينت",
                    "كلاهما نفس التطبيق تماماً ولا يوجد أي فرق تقني بينهما",
                    "محرك البحث يحمي الجهاز من فيروسات Ransomware بينما المتصفح يدير الشبكات"
                ],
                correct: 0,
                explanation: "Browser: برنامج لفتح ومواجهة التفاعل مع المواقع. Search Engine: موقع متخصص يفهرس المواقع لمساعدة المستخدمين في إيجاد المعلومات[cite: 12]."
            },
            {
                q: "ما هي بنية هيكل عنوان البريد الإلكتروني (Email Address Structure) ومكوناته؟",
                options: [
                    "يتكون من: اسم المستخدم (Username) + الرمز (@) + اسم النطاق (Domain Name)، حيث يفصل الرمز @ بين اسم المستخدم والنطاق (مثل student@gmail.com)",
                    "يتكون من: اسم النطاق + الرمز (#) + كلمة المرور السرية للمستخدم",
                    "الرمز @ يكون دائماً في بداية العنوان ويليه اسم النطاق فقط دون اسم مستخدم",
                    "عنوان البريد الإلكتروني يعتمد حصراً على رقم IP الخاص بالموجه (Router)"
                ],
                correct: 0,
                explanation: "هيكل البريد الإلكتروني (مثل student@gmail.com): Username + @ + Domain Name. الرمز @ يفصل بين اسم المستخدم والنطاق ولا يكون في البداية أبدًا[cite: 12, 13]."
            },

            // --- 5. Cyber Security ---
            {
                q: "ما هو تعريف أمن المعلومات أو الأمن السيبراني (Cybersecurity) وعلاقته بأمن المعلومات؟",
                options: [
                    "هو حماية الحواسيب والشبكات والأنظمة والبيانات ضد الهجمات والتهديدات الرقمية، وهو مفهوم أوسع وأشمل من أمن المعلومات",
                    "هو برنامج لتصميم الجداول الإلكترونية وإجراء العمليات الحسابية",
                    "هو مجموعة كابلات فيزيائية لربط أجهزة شبكة LAN المحلية",
                    "هو طريقة لإنشاء عروض تقديمية في برنامج باوربوينت"
                ],
                correct: 0,
                explanation: "Cybersecurity: حماية الحواسيب، الشبكات، الأنظمة، والبيانات ضد الهجمات الرقمية. وهو مفهوم أوسع من أمن المعلومات (Broad concept)[cite: 13, 16]."
            },
            {
                q: "ما هي الأهداف الأمنية الثلاثة الرئيسية المعروفة بمثلث CIA Triad، وما هو تفسير كل منها؟",
                options: [
                    "1. السرية (Confidentiality): منع الكشف غير المصرح به للبيانات (من يراها؟)، 2. السلامة (Integrity): ضمان عدم تعديل البيانات سراً (هل تم تغييرها؟)، 3. التوفر (Availability): ضمان استمرار الوصول للأنظمة والبيانات عند الحاجة (هل يمكنني الوصول إليها؟)",
                    "1. التشفير، 2. الجدار الناري، 3. المتصفح",
                    "1. السرعة، 2. التكلفة، 3. سعة التخزين",
                    "1. نطاق LAN، 2. نطاق MAN، 3. نطاق WAN"
                ],
                correct: 0,
                explanation: "أهداف CIA: Confidentiality (منع الكشف غير المصرح به / من يراها؟)، Integrity (منع التعديل غير المصرح به / هل تغيرت؟)، Availability (ضمان الوصول المستمر / هل يمكن الوصول لها؟)[cite: 13, 14]."
            },
            {
                q: "ما هو الفرق الأساسي بين التشفير المتناظر (Symmetric Encryption) والتشفير غير المتناظر (Asymmetric Encryption)؟",
                options: [
                    "التشفير المتناظر يستخدم مفتاحاً سرياً واحداً مشتركاً بين المرسل والمستقبل، بينما التشفير غير المتناظر يستخدم مفتاحين: مفتاح عام (Public key) يمكن مشاركته ومفتاح خاص (Private key) يجب أن يبقى سرياً",
                    "التشفير المتناظر لا يستخدم أي مفاتيح، بينما غير المتناظر يستخدم ألف مفتاح",
                    "التشفير المتناظر مخصص لبرامج أوفيس، وغير المتناظر مخصص للشبكات اللاسلكية فقط",
                    "كلاهما يستخدمان نفس المفتاح العام للعامة دون أي مفتاح خاص"
                ],
                correct: 0,
                explanation: "Symmetric: مفتاح سري مشترك واحد بين المرسل والمستقبل. Asymmetric: مفتاحين (Public key قابل للمشاركة + Private key سري)[cite: 14, 15]."
            },
            {
                q: "ما هو دور ووظيفة جدار الحماية (Firewall) في أمن الشبكات؟",
                options: [
                    "يعمل كحاجز (Barrier) بين الشبكة الداخلية وشبكة الإنترنت للتحكم في الاتصالات الشبكية وحمايتها",
                    "يقوم بتشفير ملفات القرص الصلب ومطالبة المستخدم بفدية مالية",
                    "يزيد من سرعة نقل البيانات بين أجهزة شبكة WAN الواسعة",
                    "يُستخدم كمتصفح ويب لفتح المواقع وحفظ المفضلة"
                ],
                correct: 0,
                explanation: "Firewall: يعمل كحاجز (Barrier) بين الشبكة الداخلية والإنترنت للتحكم وحماية الاتصالات[cite: 14, 15]."
            },
            {
                q: "ما هي البرمجيات الخبيثة المعروفة ببرمجيات الفدية (Ransomware) وكيف تعمل؟",
                options: [
                    "هي برمجيات خبيثة تشفر أو تمنع الوصول إلى البيانات والملفات، تجعلها غير قابلة للاستخدام، وتطالب بفدية مالية لاستعادة الوصول إليها",
                    "هي برمجيات لتخزين البيانات وتنظيم جداول إكسل الحسابية",
                    "هي متصفحات إنترنت آمنة لتصفح المواقع الحكومية GOV",
                    "هي أدوات لربط أجهزة الكمبيوتر ببعضها عبر تقنية الند للند"
                ],
                correct: 0,
                explanation: "Ransomware: برمجيات خبيثة تشفر أو تحجب الوصول للملفات، تجعلها غير قابلة للاستخدام، وتطلب فدية مالية (Demands a ransom)[cite: 15, 16]."
            },
            {
                q: "ما هو هجوم حجب الخدمة (Denial of Service - DoS Attack) وما هو الهدف الأمني المتأثر به أساساً؟",
                options: [
                    "هو هجوم يغرق الخدمة أو الشبكة ببيانات أو طلبات وهمية كثيرة جداً بحيث لا يستطيع المستخدمون الشرعيون الوصول إليها، وهو يؤثر أساساً على عنصر التوفر (Availability)",
                    "هو هجوم يسرق المفتاح الخاص للتشفير ويؤثر على السرية (Confidentiality)",
                    "هو هجوم يغير البيانات سرا ويؤثر على السلامة (Integrity)",
                    "هو هجوم يربط الحاسوب بخط الهاتف للاتصال بالإنترنت عبر المودم"
                ],
                correct: 0,
                explanation: "DoS Attack: يغرق الخدمة بطلبات وهمية منعاً للمستخدمين الحقيقيين من الوصول، ويؤثر بشكل أساسي على Availability[cite: 15, 16]."
            }
        ]
    },
    en: {
        questions: [
            // --- 1. Spreadsheet Program - Microsoft Excel ---
            {
                q: "What is the comprehensive definition and primary function of Microsoft Excel?",
                options: [
                    "Microsoft Excel is a spreadsheet program used to organize data, perform mathematical calculations, modify numbers, and create charts",
                    "Microsoft Excel is a program dedicated exclusively to creating interactive presentations and slide shows",
                    "Microsoft Excel is a digital firewall used to protect computers and networks against malware",
                    "Microsoft Excel is a specialized web browser used to index internet websites"
                ],
                correct: 0,
                explanation: "Microsoft Excel is a spreadsheet program used to organize data, perform mathematical calculations, modify numbers, and create charts[cite: 6]."
            },
            {
                q: "What is the very important rule regarding the primary use of Microsoft Excel compared to presentations?",
                options: [
                    "Microsoft Excel is mainly used for calculations and numerical data, not for creating presentations",
                    "Microsoft Excel is used exclusively for creating presentations and forbidden from calculations",
                    "Microsoft Excel is considered a complete operating system for local networks",
                    "Microsoft Excel is only used for asymmetric encryption of files"
                ],
                correct: 0,
                explanation: "Important: Microsoft Excel is mainly used for calculations and numerical data, not for creating presentations[cite: 6]."
            },
            {
                q: "How are rows, columns, and cells defined and structured in Excel spreadsheets?",
                options: [
                    "Row is a horizontal group of cells numbered (1, 2, 3...), Column is a vertical group labeled with letters (A, B, C...), and Cell is the intersection of a row and a column",
                    "Row is a vertical group labeled with letters, while Column is a horizontal group numbered numerically",
                    "Cell is the intersection of the internet with a firewall, and column represents the URL address",
                    "Row represents the data range from A1 to D11 only"
                ],
                correct: 0,
                explanation: "Row: horizontal group numbered 1, 2, 3. Column: vertical group labeled A, B, C. Cell: intersection of a row and a column[cite: 6]."
            },
            {
                q: "How is a cell address formulated in Excel, and what are examples of it?",
                options: [
                    "The column letter followed by the row number. Examples: A1, B5, D10",
                    "The row number followed by the column letter. Examples: 1A, 5B, 10D",
                    "The file name followed by the cell range like Excel:A1",
                    "The symbol @ followed by the domain name like @A1"
                ],
                correct: 0,
                explanation: "Cell Address: The column letter followed by the row number. Examples: A1, B5, D10[cite: 6]."
            },
            {
                q: "How is a cell range written and selected in Microsoft Excel?",
                options: [
                    "Using the first cell followed by a colon and the last cell, such as A1:D11",
                    "Using the first cell followed by a forward slash and the last cell like A1/D11",
                    "Using semicolons separating individual cell names only",
                    "Using a plus sign between the first and last cell like A1+D11"
                ],
                correct: 0,
                explanation: "A range is a group of selected cells written using: First Cell: Last Cell, e.g., A1:D11[cite: 6]."
            },
            {
                q: "What does the appearance of (#####) inside an Excel cell mean, and what is the proper action to fix it?",
                options: [
                    "The column is usually not wide enough to display the value, and the solution is to double-click the edge of the column heading to widen it automatically",
                    "There is a programming error and complete collapse of the spreadsheet file",
                    "The maximum character limit per cell has been exceeded and cannot be fixed",
                    "The cell is restricted by an incorrect range like A1:D11 and must be deleted"
                ],
                correct: 0,
                explanation: "If ##### appears inside an Excel cell, the column is not wide enough. Solution: Double-click the edge of the column heading to widen it automatically (Widen the column)[cite: 6]."
            },
            {
                q: "What are the important Excel functions (SUM, AVERAGE, MAX) and their specific purposes?",
                options: [
                    "SUM adds numbers, AVERAGE finds the average of numbers, and MAX finds the largest value",
                    "SUM finds the average, AVERAGE adds numbers, and MAX searches for web texts",
                    "All of them are functions dedicated to creating charts and managing emails",
                    "SUM is used to encrypt passwords and MAX calculates gas pressure"
                ],
                correct: 0,
                explanation: "Important Excel Functions: SUM adds numbers, AVERAGE finds the average, MAX finds the largest value[cite: 6]."
            },
            {
                q: "What is the correct order of steps to create a chart in Excel?",
                options: [
                    "Select the range of data -> Go to Insert -> Choose Chart",
                    "Click Insert -> Choose Chart -> Select Data at the end",
                    "Go to Design -> Format Background -> Insert Chart",
                    "Write =AVERAGE formula then click insert chart"
                ],
                correct: 0,
                explanation: "Creating a Chart: 1. Select the range of data, 2. Go to Insert, 3. Choose Chart. Do not insert a chart before selecting required data[cite: 6, 7]."
            },

            // --- 2. Presentation Program - Microsoft PowerPoint ---
            {
                q: "What is the primary use of Microsoft PowerPoint?",
                options: [
                    "Microsoft PowerPoint is mainly used to create presentations",
                    "Microsoft PowerPoint is mainly used to perform complex mathematical calculations and large spreadsheets",
                    "Microsoft PowerPoint is used as a web browser to open internet websites and search for information",
                    "Microsoft PowerPoint is used to build network firewalls against DoS attacks"
                ],
                correct: 0,
                explanation: "Microsoft PowerPoint is mainly used to create presentations[cite: 7]."
            },
            {
                q: "How do you add a new slide in PowerPoint, and where is this tool found?",
                options: [
                    "From the Home tab -> New Slide",
                    "From the Design tab -> Format Background",
                    "From the Insert tab -> Slide Background",
                    "By double-clicking the right column header"
                ],
                correct: 0,
                explanation: "To add a new slide: Home → New Slide (New Slide is found on the Home tab)[cite: 7]."
            },
            {
                q: "What is the role of the Design tab and Theme previews in PowerPoint?",
                options: [
                    "The Design tab is used to control presentation appearance, and theme previews allow choosing different themes to change general appearance and background formatting",
                    "It is used exclusively to control how text and movements appear during slide shows",
                    "It is used to manage wide area network (WAN) servers",
                    "It is used to calculate averages of numerical data in slides"
                ],
                correct: 0,
                explanation: "Design tab controls presentation appearance. Themes change general appearance with theme previews and background formatting[cite: 7, 8]."
            },
            {
                q: "How do you change the slide background in PowerPoint?",
                options: [
                    "Design → Format Background",
                    "Home → New Slide",
                    "Insert → Chart",
                    "URL → Background"
                ],
                correct: 0,
                explanation: "To change the background of a slide: Design → Format Background, which modifies the appearance of the slide background[cite: 7, 8]."
            },
            {
                q: "What is the function of Animations in PowerPoint?",
                options: [
                    "Animations control how objects such as text appear or move during a slide show",
                    "They change the entire presentation background and apply automatic themes",
                    "They manage peer-to-peer networks and connect devices",
                    "They save favorite websites in the browser and stop page loading"
                ],
                correct: 0,
                explanation: "Animations control how objects such as text appear or move during a slide show[cite: 8]."
            },

            // --- 3. Introduction to Networks ---
            {
                q: "What is the definition of a Computer Network and what are its main benefits?",
                options: [
                    "A Computer Network is a group of computers and other devices connected together to share resources, and an important benefit is sharing information between network users",
                    "A spreadsheet program used to calculate numbers in Excel",
                    "An internet browser used to open websites and index search engines",
                    "Malicious software that encrypts files and demands ransom"
                ],
                correct: 0,
                explanation: "A computer network connects computers and devices to share resources. An important benefit is sharing information between users[cite: 8]."
            },
            {
                q: "How do network types differ according to geographic area (LAN, MAN, WAN)?",
                options: [
                    "LAN covers a limited area (college hall, school, company building), MAN covers a medium-sized area (different cities), and WAN covers a very large area (different countries and very distant regions)",
                    "LAN covers entire countries, while WAN covers a single small room",
                    "MAN covers personal devices only, while LAN covers the global internet",
                    "All of them are synonymous terms with no relation to geographic area"
                ],
                correct: 0,
                explanation: "Types according to area: LAN (limited/small area like school), MAN (medium-sized area like cities), WAN (large area / countries or distant regions)[cite: 8, 9]."
            },
            {
                q: "What are the characteristics of a Peer-to-Peer network?",
                options: [
                    "The relationship between devices is equal, and a user's computer can act as a server or a client at the same time",
                    "There are primary server devices with high storage capabilities while clients cannot provide services",
                    "It relies exclusively on physical cables and does not support wireless connections",
                    "It uses asymmetric encryption protocols with public and private keys only"
                ],
                correct: 0,
                explanation: "In a Peer-to-Peer network, the relationship between devices is equal, and a user's computer can act as both a server and a client[cite: 9, 10]."
            },
            {
                q: "What is the definition of a Server and a Client in computer networks?",
                options: [
                    "A Server is a computer with high processing and storage capabilities using specialized software to provide services to other computers, while a Client is a device that uses services provided through the network",
                    "A Client is the main internet server, and a Server is the default web browser",
                    "A Server is an Excel spreadsheet program, and a Client is a PowerPoint slide",
                    "A Server is a mobile device lacking storage power, and a Client is a firewall"
                ],
                correct: 0,
                explanation: "Server: powerful computer with high processing and storage capabilities providing services. Client: computer or device using services provided through the network[cite: 9]."
            },
            {
                q: "What is the difference between Wired Networks and Wireless Networks?",
                options: [
                    "A wired network uses physical cables to connect devices, while a wireless network does not depend on physical cables and uses wireless signals",
                    "A wired network never uses cables, while a wireless network relies solely on copper wires",
                    "Wired networks are for internet only and wireless for office applications",
                    "Both use telephone landlines exclusively to connect internet modems"
                ],
                correct: 0,
                explanation: "Wired network uses physical cables. Wireless network does not depend on physical cables for communication and uses wireless signals[cite: 9]."
            },
            {
                q: "What are the functions of important network devices: Switch, Modem, and Network Interface Card (NIC)?",
                options: [
                    "Switch connects the server computer with other computers on the network, Modem connects a home computer to the Internet through a telephone line, and NIC allows a device to connect to a network",
                    "Switch acts as a firewall, Modem creates presentations, and NIC calculates SUM functions",
                    "All of them are devices dedicated to creating charts and managing ransomware",
                    "Modem prevents DoS attacks, and Switch encrypts data using symmetric encryption"
                ],
                correct: 0,
                explanation: "Switch connects network computers. Modem connects a computer to the internet through a telephone line. Network Interface Card (NIC) allows a device to connect to a network[cite: 9, 10]."
            },

            // --- 4. Using the Internet ---
            {
                q: "What does WWW stand for and what is its basic definition?",
                options: [
                    "WWW stands for World Wide Web",
                    "WWW stands for Wide Wireless WAN",
                    "WWW stands for Web Working Window",
                    "WWW stands for Wired Web Wrapper"
                ],
                correct: 0,
                explanation: "WWW stands for: World Wide Web[cite: 10, 12]."
            },
            {
                q: "What are the functions and tasks performed by Web Browsers?",
                options: [
                    "Open and interact with websites, act as intermediates between the internet and the user, open websites, navigate between them, refresh pages, stop page loading, and save favorite websites",
                    "Design spreadsheets and perform addition and subtraction operations",
                    "Encrypt hard drives and demand financial ransom",
                    "Index internet websites entirely to act as an independent search engine"
                ],
                correct: 0,
                explanation: "Web browsers are programs used to open and interact with websites and act as intermediates. Functions: opening websites, navigating, refreshing pages (Refresh), stopping page loading (Stop), and saving favorites (Favorites)[cite: 10, 11]."
            },
            {
                q: "What are the functions of browser controls: Web Address Bar, Home Button, Refresh Button, and Stop Button?",
                options: [
                    "Address Bar is used to enter the address of the website you want to browse, Home opens the default homepage, Refresh reloads the current webpage, and Stop stops loading the requested website",
                    "Address Bar saves favorites, Home closes the browser, Refresh encrypts data, and Stop creates a new slide",
                    "All of them are controls exclusively for Microsoft Excel",
                    "They are used to manage firewalls and block spyware"
                ],
                correct: 0,
                explanation: "Address Bar: enter website address. Home Button: opens default homepage. Refresh Button: reloads current webpage. Stop Button: stops page loading[cite: 11, 12]."
            },
            {
                q: "What do common domain abbreviations GOV, EDU, and COM mean?",
                options: [
                    "GOV refers to government, EDU refers to education / educational institutions, and COM is commonly associated with commercial organizations",
                    "GOV refers to commercial, EDU refers to government, and COM refers to military",
                    "All of them indicate malicious software belonging to WAN networks",
                    "They are used to determine symmetric and asymmetric encryption types in emails"
                ],
                correct: 0,
                explanation: "Domain abbreviations: GOV refers to government, EDU refers to education, COM is associated with commercial organizations[cite: 11, 13]."
            },
            {
                q: "What is the core difference between a Web Browser and a Search Engine?",
                options: [
                    "A web browser opens and interacts with websites, while a search engine is a specialized website that indexes other websites so users can find information",
                    "A search engine is Excel, while a web browser is PowerPoint",
                    "Both are identical applications with no technical difference",
                    "A search engine protects against Ransomware while a browser manages networks"
                ],
                correct: 0,
                explanation: "Browser: opens and interacts with websites. Search Engine: specialized website that indexes other websites so users can find information[cite: 12]."
            },
            {
                q: "What is the structure of an email address and its components?",
                options: [
                    "It contains: Username + the symbol (@) + Domain Name, where the @ symbol separates the username from the domain name (e.g., student@gmail.com)",
                    "It contains: Domain name + the symbol (#) + secret user password",
                    "The @ symbol is always at the beginning followed by the domain name without username",
                    "Email address relies exclusively on Router IP address"
                ],
                correct: 0,
                explanation: "Email address structure (e.g., student@gmail.com): Username + @ + Domain Name. The @ symbol separates the username from the domain name and is never at the beginning[cite: 12, 13]."
            },

            // --- 5. Cyber Security ---
            {
                q: "What is the definition of Cybersecurity and its relationship with information security?",
                options: [
                    "Cybersecurity is concerned with protecting computers, networks, systems, and data against digital threats and attacks, and it is a broader concept than information security",
                    "Cybersecurity is a program to design spreadsheets and perform calculations",
                    "Cybersecurity is a group of physical cables to connect local LAN devices",
                    "Cybersecurity is a method to create PowerPoint presentations"
                ],
                correct: 0,
                explanation: "Cybersecurity protects computers, networks, systems, and data against digital threats and attacks. It is a broader concept than information security[cite: 13, 16]."
            },
            {
                q: "What are the three main security objectives known as the CIA Triad, and what does each mean?",
                options: [
                    "1. Confidentiality: preventing unauthorized disclosure of data (Who can see the data?), 2. Integrity: ensuring data remains accurate and unaltered (Has the data been changed?), 3. Availability: ensuring continued access to systems and information when needed (Can I access it?)",
                    "1. Encryption, 2. Firewall, 3. Browser",
                    "1. Speed, 2. Cost, 3. Storage capacity",
                    "1. LAN range, 2. MAN range, 3. WAN range"
                ],
                correct: 0,
                explanation: "CIA objectives: Confidentiality (Prevent unauthorized disclosure / Who can see?), Integrity (Prevent unauthorized modification / Has it changed?), Availability (Ensure continued access / Can I access it?)[cite: 13, 14]."
            },
            {
                q: "What is the main difference between Symmetric Encryption and Asymmetric Encryption?",
                options: [
                    "Symmetric encryption uses one shared secret key for encryption and decryption, while asymmetric encryption uses two keys: a public key that can be shared and a private key that must remain secret",
                    "Symmetric encryption uses no keys, while asymmetric uses a thousand keys",
                    "Symmetric encryption is for office apps, while asymmetric is for wireless networks only",
                    "Both use the same public key for everyone without any private key"
                ],
                correct: 0,
                explanation: "Symmetric uses one shared secret key for both sender and receiver. Asymmetric uses two keys: Public key (can be shared) + Private key (must remain secret)[cite: 14, 15]."
            },
            {
                q: "What is the role and function of a Firewall in network security?",
                options: [
                    "A Firewall works as a barrier between the internal network and the Internet to control and protect network communication",
                    "It encrypts hard drive files and demands a financial ransom",
                    "It increases data transfer speed between wide WAN network devices",
                    "It is used as a web browser to open sites and save favorites"
                ],
                correct: 0,
                explanation: "Firewall works as a barrier between the internal network and the Internet to control and protect network communication[cite: 14, 15]."
            },
            {
                q: "What is Ransomware and how does it work?",
                options: [
                    "Ransomware is malicious software that encrypts or blocks access to data and files, makes files unusable, and demands a ransom to restore access",
                    "Ransomware is software to store data and organize Excel spreadsheets",
                    "Ransomware is a secure internet browser to browse GOV websites",
                    "Ransomware is a tool to connect computers via Peer-to-Peer technology"
                ],
                correct: 0,
                explanation: "Ransomware is malicious software that encrypts or blocks access to data/files, makes them unusable, and demands a ransom to restore access[cite: 15, 16]."
            },
            {
                q: "What is a Denial of Service (DoS) attack and what security objective does it primarily affect?",
                options: [
                    "A Denial of Service (DoS) attack floods a service or network with unnecessary data or fake requests so legitimate users cannot access it, and it primarily affects Availability",
                    "It is an attack that steals the private encryption key affecting Confidentiality",
                    "It is an attack that modifies data secretly affecting Integrity",
                    "It connects a computer to a telephone line for internet access via modem"
                ],
                correct: 0,
                explanation: "A Denial of Service (DoS) attack floods a service or network with unnecessary data or fake requests so legitimate users cannot access it, primarily affecting Availability[cite: 15, 16]."
            }
        ]
    }
};