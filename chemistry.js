const chemistryData = {
    title: "الكيمياء",
    category: "Chemistry",
    ar: {
        questions: [
            // --- الأسئلة والمفاهيم النظرية والقوانين من الملف الأول ---
            {
                q: "ما هو الاصطلاح العلمي والرمز المعتمد لوحدة الكتلة الذرية في الحسابات الكيميائية؟",
                options: [
                    "رمزها المختصر (amu) وتستخدم للتعبير عن كتل الذرات والجزيئات بصورة معيارية",
                    "رمزها (mol) وتستخدم حصراً للتعبير عن عدد أفوغادرو للمادة النقية",
                    "رمزها (N) وتستخدم للتعبير عن العيارية والوزن المكافئ الجرامي",
                    "رمزها (R) وتستخدم للتعبير عن ثابت الغازات العام في الظروف القياسية"
                ],
                correct: 0,
                explanation: "وحدة الكتلة الذرية يُطلق عليها اختصاراً (amu - Atomic Mass Unit)[cite: 1]."
            },
            {
                q: "كيف يُعرّف المول (Mole) في الكيمياء بناءً على محتواه الكمي من الجسيمات؟",
                options: [
                    "هو كمية المادة التي تحتوي على عدد أفوغادرو من الذرات، أو الجزيئات، أو الأيونات",
                    "هو كتلة المذاب بالجرام الموجودة في لتر واحد من المحلول المعياري",
                    "هو النسبة الحسابية بين مولات المذاب ومولات المحلول الكلي",
                    "هو القوة المؤثرة عمودياً على وحدة المساحة لجدران الوعاء الحاوي"
                ],
                correct: 0,
                explanation: "المول (Mole) هو كمية من المادة تحتوي على عدد أفوغادرو من الذرات، الجزيئات، أو الأيونات[cite: 1]."
            },
            {
                q: "ما هي القيمة العددية الدقيقة لعدد أفوغادرو (Avogadro's number) المستخدمة في حسابات البنية المادية؟",
                options: [
                    "6.02 × 10^23 جسيم لكل مول",
                    "1.38 × 10^-23 جزيء لكل كلفن",
                    "8.314 جول لكل مول كلفن",
                    "2.24 × 10^22 لتر تحت الضغط المعياري"
                ],
                correct: 0,
                explanation: "عدد أفوغادرو يساوي 6.02 × 10^23[cite: 1]."
            },
            {
                q: "ما هي العلاقة الرياضية الصحيحة لحساب عدد الذرات أو الجزيئات الكلية في عينة كيميائية؟",
                options: [
                    "عدد الذرات = عدد المولات × عدد أفوغادرو (6.02 × 10^23)",
                    "عدد الذرات = كتلة المادة بالجرام / الكتلة المولية للمركب",
                    "عدد الذرات = الحجم باللتر مضروباً في التركيز المولاري للمحلول",
                    "عدد الذرات = الوزن المكافئ الجرامي مقسوماً على العيارية (N)"
                ],
                correct: 0,
                explanation: "عدد الذرات يحسب بالعلاقة: Number of atoms = Number of moles X Avogadro number (6.02 × 10^23)[cite: 1]."
            },
            {
                q: "ما هي التصنيفات الثلاثة الرئيسية لأنواع الصيغ الكيميائية للمركبات (A, B, C) كما وردت في الأدبيات؟",
                options: [
                    "الصيغة الأولية (Simple/Empirical)، الصيغة الجزيئية (Molecular)، والصيغة البنائية (Structural)",
                    "الصيغة الأيونية، الصيغة الإلكتروستاتيكية، وصيغة الإلكتروليت القوي",
                    "صيغة التخفيف، صيغة الكسر المولي، وصيغة ضغط الغاز المثالي",
                    "صيغة الاتزان الكيميائي، صيغة حاصل الإذابة، وصيغة ثابت التفاعل (Q)"
                ],
                correct: 0,
                explanation: "أنواع الصيغ الكيميائية هي: A. الصيغة البسيطة أو الأولية مثل CH2O، B. الصيغة الجزيئية مثل C6H12O5، C. الصيغة البنائية[cite: 1]."
            },
            {
                q: "ما هو التعريف الدقيق للمادة المحددة للتفاعل (Limiting Reagent) في التفاعلات الكيميائية؟",
                options: [
                    "هي المادة التي تستهلك أولاً بالكامل في التفاعل وتحدد كمية النواتج المتكونة",
                    "هي المادة الفائضة التي تبقى دون تفاعل في نهاية التفاعل العكوس",
                    "هي المادة غير الموصلة التي لا تتأين في المحاليل المائية نهائياً",
                    "هي الوسيط الحراري الذي يغير من قيمة ثابت الاتزان (K)"
                ],
                correct: 0,
                explanation: "المواد المحددة للتفاعل (Limiting Reagents) هي التي تستهلك أولاً في التفاعل[cite: 1]."
            },
            {
                q: "كيف تُميز العيارية (Normality) بالرمز وما هي معادلتها الرياضية الأساسية؟",
                options: [
                    "يرمز لها بالحرف (N) وتحسب كالتالي: كتلة المذاب بالجرام / (الحجم باللتر × الوزن المكافئ الجرامي)",
                    "يرمز لها بالحرف (M) وتحسب كالتالي: عدد مولات المذاب / كتلة المذيب بالكيلوجرام",
                    "يرمز لها بالحرف (Q) وتحسب كالتالي: حاصل ضرب تراكيز النواتج مقسومة على المتفاعلات",
                    "يرمز لها بالحرف (P) وتحسب كالتالي: مجموع الضغوط الجزئية للغازات دالتون"
                ],
                correct: 0,
                explanation: "العيارية يرمز لها بالحرف (N) وتحسب رياضياً: N = Mass of solute in grams / (volume in Liter) / Gram equivalent weight[cite: 1]."
            },
            {
                q: "ما هو دور الوزن المكافئ الجرامي (Gram equivalent weight) في حسابات المحاليل الكيميائية؟",
                options: [
                    "يستخدم في المقام ضمن قانون حساب العيارية (N) للمحاليل",
                    "يستخدم حصراً لتحديد ضغط الغازات المثالية عند ثبات درجة الحرارة",
                    "يمثل عدد أفوغادرو للذرات المتواجدة في الجزيء التساهمي",
                    "يمثل معامل اللزوجة الحركية للسوائل العضوية البسيطة"
                ],
                correct: 0,
                explanation: "الوزن المكافئ الجرامي (Gram equivalent weight) يدخل بشكل مباشر في حسابات العيارية (N)[cite: 1]."
            },
            {
                q: "كيف تُعرّف المولارية (Molarity - M) بدقة من حيث التركيز والكمية؟",
                options: [
                    "هي عدد مولات المذاب في لتر واحد من المحلول",
                    "هي عدد مولات المذاب في 1000 جرام (1 كجم) من المذيب",
                    "هي النسبة بين مولات المذاب إلى مولات المحلول الكلي",
                    "هي القوة المؤثرة عمودياً على وحدة المساحة للمحلول"
                ],
                correct: 0,
                explanation: "المولارية (M): هي عدد مولات المذاب في لتر واحد من المحلول[cite: 1]."
            },
            {
                q: "كيف تُعرّف المولالية (Molality) من حيث وحدة قياس المذيب والكمية؟",
                options: [
                    "هي عدد مولات المذاب في 1000 جرام (1 كجم) من المذيب",
                    "هي عدد مولات المذاب في لتر واحد من المحلول المتجانس",
                    "هي كتلة المذاب بالجرام مقسومة على الوزن المكافئ الجرامي",
                    "هي النسبة المئوية لحجم الغاز تحت ظروف الضغط المعياري"
                ],
                correct: 0,
                explanation: "المولالية هي عدد مولات المذاب في 1000 g (1 kg) من المذيب[cite: 1]."
            },
            {
                q: "ماذا يمثل تركيز الكسر المولي (Mole Fraction Concentration) في المحاليل الكيميائية؟",
                options: [
                    "يُمثل نسبة مولات المذاب إلى مولات المحلول بأكمله",
                    "يُمثل حاصل ضرب العيارية في الوزن المكافئ الجرامي",
                    "يُمثل معدل التغير في الضغط البخاري للسائل عند التسخين",
                    "يُمثل ثابت الاتزان (K) للتفاعلات العكوسة التامة"
                ],
                correct: 0,
                explanation: "الكسر المولي (Mole Fraction Concentration) يمثل نسبة مولات المذاب إلى مولات المحلول بأكمله[cite: 1]."
            },
            {
                q: "ما هي الصيغة الرياضية المعتمدة لتخفيف المحاليل الكيميائية (Dilution of Solutions)؟",
                options: [
                    "M1V1 = M2V2",
                    "P1V1 = P2V2",
                    "PV = nRT",
                    "K = Q"
                ],
                correct: 0,
                explanation: "تخفيف المحاليل يعتمد على العلاقة: M1V1 = M2V2[cite: 1]."
            },
            {
                q: "ما هي حالات المادة الثلاث الأساسية (The states of matter) المذكورة في المرجع؟",
                options: [
                    "الحالة السائلة (Liquid state)، الحالة الغازية (Gaseous state)، والحالة الصلبة (Solid state)",
                    "الحالة الأيونية، الحالة الإلكتروليتية، وحالة التبخر البخاري",
                    "حالة الاتزان، حالة حاصل التفاعل، وحالة المحاليل المنظمة",
                    "الحالة البسيطة، الحالة الجزيئية، والحالة البنائية المركبة"
                ],
                correct: 0,
                explanation: "حالات المادة هي: Liquid state - Gaseous state - Solid state[cite: 1]."
            },
            {
                q: "ما هي المتغيرات الأربعة الأساسية التي تؤثر على حالة الغاز (Variables affecting the state of a gas)؟",
                options: [
                    "الحجم (Volume)، الضغط (Pressure)، درجة الحرارة (Temperature)، والكتلة (Mass)",
                    "اللزوجة، التوتر السطحي، الضغط البخاري، ونقطة الغليان",
                    "المولارية، المولالية، الكسر المولي، والعيارية (N)",
                    "ثابت الاتزان (K)، حاصل التفاعل (Q)، والروابط الأيونية"
                ],
                correct: 0,
                explanation: "المتغيرات المؤثرة على حالة الغاز هي: Volume - pressure - temperature - Mass[cite: 1]."
            },
            {
                q: "كيف يُعرّف الضغط (Pressure) فيزيائياً وكيف يمكن استخدامه؟",
                options: [
                    "هو القوة المؤثرة لكل وحدة مساحة، ويمكن استخدامه لتحديد تدفق الكتلة من مكان لآخر",
                    "هو المقاومة التي يبديها جزء من السائل لسريان جزء آخر",
                    "هو القوة المؤثرة عمودياً لتحديد التوتر السطحي للسوائل",
                    "هو عدد مولات الغاز في لتر واحد من الوعاء الحاوي"
                ],
                correct: 0,
                explanation: "الضغط (Pressure) هو خاصية يمكن استخدامها لتحديد تدفق الكتلة من مكان لآخر، ويُعرّف بأنه القوة المؤثرة per unit area[cite: 1]."
            },
            {
                q: "كيف يُعرّف ضغط الغاز (Gas pressure) داخل الأوعية الحاوية؟",
                options: [
                    "هو تأثير وضغط جزيئات الغاز على جدران الوعاء الحاوي له",
                    "هو قوة التوتر السطحي المؤثرة عمودياً على سطح السائل",
                    "هو الوزن المكافئ الجرامي للغاز تحت الصفر المئوي",
                    "هو الضغط البخاري الناتج عن غليان المحلول الإلكتروليتي"
                ],
                correct: 0,
                explanation: "ضغط الغاز (Gas pressure) هو: gas on the walls of the container[cite: 1]."
            },
            {
                q: "ما هو المعيار الفيزيائي الدقيق للضغط الجوي الواحد (1 atm) بناءً على عمود الزئبق؟",
                options: [
                    "عمود من الزئبق طوله 76 سم عند درجة حرارة صفر مئوية",
                    "عمود من الزئبق طوله 760 متراً عند درجة حرارة 25 مئوية",
                    "عمود من الزئبق طوله 7.6 سم عند نقطة الغليان المعيارية",
                    "عمود من الزئبق طوله 1 متر عند الاتزان الكيميائي التام"
                ],
                correct: 0,
                explanation: "One atmosphere (1 atm) = column of mercury 76 cm long at a temperature of zero degrees Celsius[cite: 1]."
            },
            {
                q: "ما هي الصيغة الرياضية لقانون بويل للغازات (Boyle's Law)؟",
                options: [
                    "P1 V1 = P2 V2",
                    "PV = nRT",
                    "M1V1 = M2V2",
                    "P = P1 + P2 + P3"
                ],
                correct: 0,
                explanation: "قانون بويل: P1 V1 = P2 V2[cite: 1]."
            },
            {
                q: "ماذا ينص قانون تشارلز - جاي لوساك (Charles-Gay Lussac's Law) للغازات؟",
                options: [
                    "عند ثبات الضغط، يتناسب حجم كمية معينّة من الغاز طردياً مع درجة الحرارة المطلقة",
                    "عند ثبات درجة الحرارة، يتناسب الضغط عكسياً مع الحجم الكلي للوعاء",
                    "الضغط الكلي لخليط غازي يساوي مجموع الضغوط الجزئية للمكونات",
                    "معدل سرعة التفاعل الأمامي يتساوي مع العكسي عند حالة الاتزان"
                ],
                correct: 0,
                explanation: "Charles-Gay Lussac's Law: عندما يكون الضغط ثابتاً، فإن حجم كمية معينة من الغاز يتناسب طردياً مع درجة الحرارة المطلقة[cite: 1]."
            },
            {
                q: "ما هي معادلة قانون الغاز المثالي العام (General Ideal Gas Law) وماذا يمثل الرمز R؟",
                options: [
                    "PV = nRT، حيث R ثابت يسمى ثابت الغازات العام (Universal gas constant)",
                    "P1V1 = P2V2، حيث R يمثل ثابت الاتزان الكيميائي للتفاعل",
                    "N = M / V، حيث R يمثل العيارية والوزن المكافئ الجرامي",
                    "K = Q، حيث R يمثل ثابت تفكك الإلكتروليت الضعيف"
                ],
                correct: 0,
                explanation: "General Ideal Gas Law: PV=nRT، حيث R هو ثابت يسمى universal gas constant[cite: 2]."
            },
            {
                q: "ما هي الصيغة الرياضية لقانون دالتون للضغوط الجزئية (Dalton's Law of Partial Pressures)؟",
                options: [
                    "P = P1 + P2 + P3...",
                    "P1 V1 = P2 V2",
                    "PV = nRT",
                    "M1V1 = M2V2"
                ],
                correct: 0,
                explanation: "Dalton's Law of Partial Pressures: P = P1 + P2 + P3...[cite: 2]."
            },
            {
                q: "كيف تُعرّف اللزوجة (Viscosity) في السوائل والغازات؟",
                options: [
                    "بأنها المقاومة التي يبديها جزء من السائل لسريان جزء آخر",
                    "بأنها القوة المؤثرة بشكل عمودي على وحدة المساحة السطحية",
                    "بأنها درجة الحرارة التي يتساوى عندها الضغط البخاري مع الخارجي",
                    "بأنها النسبة بين مولات المذاب إلى حجم المحلول باللتر"
                ],
                correct: 0,
                explanation: "Viscosity: the resistance that can be exerted by one part of a liquid to the flow of another part[cite: 2]."
            },
            {
                q: "كيف يُعرّف التوتر السطحي (Surface Tension - γ) في السوائل؟",
                options: [
                    "بأنه القوة المؤثرة بشكل عمودي (defined as the force acting perpendicularly)",
                    "بأنه المقاومة التي تبديها طبقات السائل ضد السريان الداخلي",
                    "بأنه الضغط البخاري للسائل عند نقطة الغليان المعيارية",
                    "بأنه عدد مولات المذاب في 1000 جرام من المذيب النقي"
                ],
                correct: 0,
                explanation: "Surface Tension (γ): defined as the force acting perpendicularly[cite: 2]."
            },
            {
                q: "ما هي طبيعة العلاقة بين الضغط البخاري ودرجة الحرارة للسوائل؟",
                options: [
                    "يرتفع الضغط البخاري دائماً مع ارتفاع درجة الحرارة",
                    "يتناقص الضغط البخاري دائماً بارتفاع درجة الحرارة",
                    "لا يوجد أي تأثير لدرجة الحرارة على الضغط البخاري مطلقاً",
                    "يثبت الضغط البخاري عند نقطة التجمد ولا يتغير أبداً"
                ],
                correct: 0,
                explanation: "The Relationship Between Vapor Pressure and Temperature: Vapor pressure always increases with rising temperature[cite: 2]."
            },
            {
                q: "ما هو التعريف العلمي الدقيق لنقطة الغليان (Boiling Point)؟",
                options: [
                    "هي درجة الحرارة التي يتساوى عندها الضغط البخاري للسائل مع الضغط الواقع على سطحه",
                    "هي درجة الحرارة التي يتعايش فيها الصلب والسائل في حالة اتزان تام",
                    "هي النقطة التي ينعدم عندها الضغط البخاري تماماً بانخفاض الحرارة",
                    "هي النقطة التي يتفكك عندها الإلكتروليت القوي إلى أيونات حرة"
                ],
                correct: 0,
                explanation: "Boiling Point: the temperature at which the liquid's vapor pressure equals the pressure on its surface[cite: 2]."
            },
            {
                q: "كيف تُعرّف نقطة التجمد (Freezing Point) للمواد؟",
                options: [
                    "هي درجة الحرارة التي تتواجد عندها الحالة السائلة والصلبة للمادة معاً في حالة اتزان",
                    "هي النقطة التي يتساوى عندها الضغط البخاري مع الضغط الجوي المعياري (1 atm)",
                    "هي درجة الحرارة التي تتحول فيها المادة الغازية مباشرة إلى صلبة",
                    "هي النقطة التي يصل عندها ثابت الاتزان (K) إلى القيمة صفر"
                ],
                correct: 0,
                explanation: "Freezing Point: the temperature at which the liquid and solid states of a matter coexist in equilibrium[cite: 2]."
            },
            {
                q: "كيف تُصنف الروابط الأيونية (Ionic Bonds) من الناحية الفيزيائية الكهربائية؟",
                options: [
                    "بأنها روابط إلكتروستاتيكية (electrostatic bonds)",
                    "بأنها روابط تساهمية أحادية غير قطبية",
                    "بأنها روابط هيدروجينية ضعيفة ومؤقتة",
                    "بأنها روابط فلزية حرة الحركة في السوائل النقية"
                ],
                correct: 0,
                explanation: "Ionic Bonds: The ionic bonds are electrostatic bonds[cite: 2]."
            },
            {
                q: "ما هي خصائص التفاعلات التامة أو غير العكوسة (Complete / Irreversible)؟",
                options: [
                    "تسير في اتجاه واحد فقط",
                    "تسير في الاتجاهين الأمامي والعكسي معاً بانتظام",
                    "تتساوى فيها سرعة التفاعل الأمامي مع العكسي دائماً",
                    "تتميز بأن ثابت الاتزان (K) فيها يساوي دائماً الواحد الصحيح"
                ],
                correct: 0,
                explanation: "Complete (Irreversible): single direction[cite: 2]."
            },
            {
                q: "كيف تسير التفاعلات غير التامة أو العكوسة (Incomplete / Reversible)؟",
                options: [
                    "تسير في الاتجاهين المعاكسين (reverse directions)",
                    "تسير في اتجاه واحد حصراً حتى تنفد المادة المحددة",
                    "لا تتأثر نهائياً بتغير درجات الحرارة أو الضغط",
                    "تتحول فيها المتفاعلات بنسبة 100% إلى نواتج دون رجعة"
                ],
                correct: 0,
                explanation: "Incomplete (Reversible): reverse directions[cite: 2]."
            },
            {
                q: "ما هو التعريف الدقيق لحالة الاتزان الكيميائي (Chemical Equilibrium)؟",
                options: [
                    "هي الحالة التي تتساوى فيها سرعة التفاعل الأمامي مع سرعة التفاعل العكسي",
                    "هي الحالة التي تتوقف فيها التفاعلات الكيميائية تماماً عن الحركة",
                    "هي النقطة التي يصبح فيها حاصل التفاعل (Q) مساوياً للصفر",
                    "هي النسبة المئوية لتفكك الإلكتروليتات الضعيفة في الماء النقي"
                ],
                correct: 0,
                explanation: "Definition of Chemical Equilibrium; which the rate of the forward reaction is equal to the rate of the reverse reaction[cite: 2]."
            },
            {
                q: "كيف يُعرّف ثابت الاتزان (Equilibrium Constant - K) رياضياً وتركيبياً؟",
                options: [
                    "يمثل كسرًا (fraction) بسطه يمثل النواتج ومقامه يمثل المتفاعلات (numerator / denominator)",
                    "يمثل حاصل ضرب العيارية في حجم المحلول باللتر",
                    "يمثل الفرق المطلق بين سرعة التفاعل الأمامي والعكسي",
                    "يمثل الكتلة المولية للمادة المحددة للتفاعل أولاً"
                ],
                correct: 0,
                explanation: "Equilibrium Constant (K): fraction numerator denominator[cite: 2]."
            },
            {
                q: "ما هما العاملان الأساسيان اللذان يؤثران على قيمة ثابت الاتزان الكيميائي (Equilibrium Constant)؟",
                options: [
                    "طبيعة المتفاعلات والنواتج، ودرجة الحرارة (The nature of the reactants/products, and Temperature)",
                    "الضغط الجوي والحجم الكلي للوعاء فقط دون اعتبار لدرجة الحرارة",
                    "تركيز المذاب بالمولارية والكسر المولي للمحلول",
                    "العدد الذري لعدد أفوغادرو والكتلة المولية للمركب"
                ],
                correct: 0,
                explanation: "Factors affecting the chemical equilibrium constant: (1) The nature of the reactants products (2) Temperature[cite: 2]."
            },
            {
                q: "ماذا تعني دلالة قيمة ثابت الاتزان عندما تكون (K > 1) في التفاعلات؟",
                options: [
                    "أن المتفاعلات قد تحولت بشكل كبير إلى نواتج (have been converted to products)",
                    "أن التفاعل لم يتحول إلى نواتج وبقيت المتفاعلات هي السائدة",
                    "أن التفاعل في حالة سكون تام وسرعته منعدمة",
                    "أن حاصل التفاعل (Q) أكبر بكثير من قيمة K"
                ],
                correct: 0,
                explanation: "(K > 1) have been converted to products[cite: 2]."
            },
            {
                q: "ماذا تعني دلالة قيمة ثابت الاتزان عندما تكون (K < 1) في التفاعلات؟",
                options: [
                    "أن المتفاعلات لم تتحول بشكل أساسي إلى نواتج",
                    "أن المواد المتفاعلة تحولت بالكامل بنسبة 100% إلى نواتج",
                    "أن النظام وصل إلى حالة الضغط الجوي المعياري (1 atm)",
                    "أن سرعة التفاعل الأمامي تفوق سرعة التفاعل العكسي أضعافاً مضاعفة"
                ],
                correct: 0,
                explanation: "(K < 1), have not been converted to products[cite: 2]."
            },
            {
                q: "ما هي العوامل الثلاثة الرئيسية المؤثرة على حالة الاتزان الكيميائي (Chemical Equilibrium State)؟",
                options: [
                    "درجة الحرارة (Temperature)، الضغط (Pressure)، والتركيز (Concentration)",
                    "اللزوجة، التوتر السطحي، والضغط البخاري للسائل",
                    "المولارية، المولالية، والكسر المولي للمحلول",
                    "وحدة الكتلة الذرية، عدد أفوغادرو، والوزن المكافئ"
                ],
                correct: 0,
                explanation: "Factors affecting the chemical equilibrium state: 1-Temperature 2- Pressure 3- Concentration[cite: 2, 3]."
            },
            {
                q: "ما هو حاصل التفاعل (Reaction Quotient - Q) وما هي أهميته؟",
                options: [
                    "هو تعبير يُحسب بنفس طريقة ثابت الاتزان ولكن في أي لحظة زمنية لتحديد اتجاه التفاعل",
                    "هو ثابت تفكك الإلكتروليتات القوية في الماء النقي",
                    "هو الوزن المكافئ الجرامي المستخدم لحساب العيارية (N)",
                    "هو الضغط الجزئي للغازات وفقاً لقانون دالتون"
                ],
                correct: 0,
                explanation: "Reaction Quotient (Q): Reaction Quotient (Q) represents the ratio at any given time[cite: 2, 3]."
            },
            {
                q: "متى يكون النظام في حالة الاتزان الكيميائي بناءً على مقارنة (K) مع (Q)؟",
                options: [
                    "إذا كان K = Q (at chemical equilibrium)",
                    "إذا كان K < Q (ويتجه النظام لليسار)",
                    "إذا كان K > Q (ويتجه النظام لليمين)",
                    "إذا انعدمت سرعة التفاعل الأمامي تماماً"
                ],
                correct: 0,
                explanation: "If K = Q: at chemical equilibrium[cite: 2, 3]."
            },
            {
                q: "ماذا يحدث للنظام إذا كان ثابت الاتزان أصغر من حاصل التفاعل (K < Q)؟",
                options: [
                    "يقلل من قيمة Q ويتجه التفاعل نحو جهة اليسار",
                    "يزيد من قيمة Q ويتجه التفاعل نحو جهة اليمين",
                    "يبقى النظام مستقراً وثابتاً في حالة الاتزان المعياري",
                    "تتحول جميع المتفاعلات الفائضة إلى نواتج فورية"
                ],
                correct: 0,
                explanation: "If K < Q; reduces the value of Q (to the left)[cite: 3]."
            },
            {
                q: "ماذا يحدث للنظام إذا كان ثابت الاتزان أكبر من حاصل التفاعل (K > Q)؟",
                options: [
                    "يزيد من قيمة Q ويتجه التفاعل نحو جهة اليمين",
                    "يقلل من قيمة Q ويتجه التفاعل نحو جهة اليسار",
                    "تتوقف التفاعلات العكوسة تماماً عن العمل",
                    "يتحول المحلول إلى إلكتروليت ضعيف غير موصل"
                ],
                correct: 0,
                explanation: "If K > Q increases the value of Q (to the right)[cite: 3]."
            },
            {
                q: "كيف تُعرّف المواد الموصلة أو الإلكتروليتات (Electrolytes) عند إيذابتها في الماء؟",
                options: [
                    "هي مواد تتوصل للكهرباء عند إذابتها في الماء",
                    "هي مواد تمنع مرور التيار الكهربائي نهائياً مثل السكر",
                    "هي غازات خاملة تخضع لقانون الغاز المثالي العام",
                    "هي سوائل لها توتر سطحي مرتفع ولا تتبخر بالتسخين"
                ],
                correct: 0,
                explanation: "Conductive Substances; (Electrolytes): conducts electricity when dissolved in water[cite: 3]."
            },
            {
                q: "أعطِ أمثلة على الإلكتروليتات القوية (Strong electrolytes) كما وردت في النص؟",
                options: [
                    "كلوريد الصوديوم (NaCl) وحمض الكلوريك (HCl)",
                    "حمض الأسيتيك (CH3COOH) والماء النقي (H2O)",
                    "السكر والملح غير المتأين في المحاليل العضوية",
                    "الزئبق وغاز الهيدروجين تحت ضغط 1 atm"
                ],
                correct: 0,
                explanation: "(Strong electrolytes) NaCl, Chloric acid (HCl)[cite: 3]."
            },
            {
                q: "أعطِ أمثلة على الإلكتروليتات الضعيفة (Weak Electrolytes) كما وردت في المرجع؟",
                options: [
                    "حمض الأسيتيك (CH3COOH) والماء (H2O)",
                    "كلوريد الصوديوم (NaCl) وحمض الكلوريك (HCl)",
                    "السكر والسكريات الثنائية غير المتأينة",
                    "الغازات المثالية تحت ظروف الضغط المنخفض"
                ],
                correct: 0,
                explanation: "(Weak Electrolytes): CH3COOH, H2O[cite: 3]."
            },
            {
                q: "ما هو المثال الكلاسيكي للمواد غير الموصلة (Non-Electrolytes)؟",
                options: [
                    "السكر (Sugar)",
                    "كلوريد الصوديوم (NaCl)",
                    "حمض الكلوريك (HCl)",
                    "حمض الأسيتيك (CH3COOH)"
                ],
                correct: 0,
                explanation: "(Non-Electrolytes); Sugar[cite: 3]."
            },
            {
                q: "كيف يُعرّف التفكك (Dissociation) في المركبات الكيميائية؟",
                options: [
                    "هو انفصال الروابط الأيونية الأصلية (separation of the original ionic bonds)",
                    "هو تحويل الجزيئات غير الأيونية إلى أيونات حرة الحركة",
                    "هو زيادة الضغط البخاري للسائل بارتفاع درجة الحرارة",
                    "هو النسبة بين مولات المذاب ومولات المحلول بأكمله"
                ],
                correct: 0,
                explanation: "Dissociation: Dissociation is the separation of the original ionic bonds[cite: 3]."
            },
            {
                q: "ما هو التعريف الدقيق لعملية التأين (Ionization)؟",
                options: [
                    "هو تحويل الجزيئات غير الأيونية إلى أيونات يمكنها التحرك بحرية في الماء",
                    "هو انفصال الروابط الأيونية القوية بالحرارة دون تكوين أيونات",
                    "هو تقليل قيمة حاصل التفاعل (Q) واتجاه النظام نحو اليسار",
                    "هو حساب العيارية (N) عبر الوزن المكافئ الجرامي"
                ],
                correct: 0,
                explanation: "Ionization; the conversion of non-ionic molecules into ions that can then move freely in water[cite: 3]."
            },
            {
                q: "ما هي الأعيان التي تنتجها الأحماض وما تأثيرها على ورق تباع الشمس؟",
                options: [
                    "تنتج أيونات الهيدروجين (H+) وتحول ورق تباع الشمس الأزرق إلى اللون الأحمر",
                    "تنتج أيونات الهيدروكسيد (OH-) وتحول ورق تباع الشمس الأحمر إلى الأزرق",
                    "تنتج أيونات الصوديوم وتثبت قيمة pH دون تغير",
                    "تنتج إلكتروليتات ضعيفة لا تؤثر على الكواشف اللونية"
                ],
                correct: 0,
                explanation: "Acids: produce hydrogen ions (H+). Properties: (1) release hydrogen ions (H+) (2) Acids turn blue litmus paper red[cite: 3]."
            },
            {
                q: "ما هي الأعيان التي تنتجها القواعد (Bases) وما تأثيرها على ورق تباع الشمس؟",
                options: [
                    "تنتج أيونات الهيدروكسيد (OH-) وتحول ورق تباع الشمس الأحمر إلى اللون الأزرق",
                    "تنتج أيونات الهيدروجين (H+) وتحول تباع الشمس الأزرق إلى الأحمر",
                    "تنتج سكريات غير موصلة تسمى Non-Electrolytes",
                    "تنتج غازات مثالية تخضع لقانون دالتون للضغوط الجزئية"
                ],
                correct: 0,
                explanation: "Bases: solutions to produce hydroxide ions (OH-). Properties: 1- release hydroxide ions (OH-) 2- Bases turn red litmus paper blue[cite: 3]."
            },
            {
                q: "ما هي الصيغة الرياضية لحساب (pOH) والعلاقة المرتبطة بتركيز الأيونات؟",
                options: [
                    "pOH = -log [OH-] وعلاقتها بتركيز [H+] و [OH-]",
                    "pOH = log [H+] وعلاقتها بحاصل التفاعل (Q)",
                    "pOH = M1V1 / M2V2 الخاصة بتخفيف المحاليل",
                    "pOH = PV / nRT الخاصة بالغازات المثالية"
                ],
                correct: 0,
                explanation: "pOH = -log [OH- [H+] [OH-][cite: 3]."
            },
            {
                q: "ما هي المحاليل المنظمة (Buffer Solutions) وما هي صفتها المميزة؟",
                options: [
                    "هي محاليل لا تتغير قيمة pH لها بشكل ملحوظ عند إضافة كمية صغيرة من حمض أو قاعدة",
                    "هي محاليل تتغير حموضتها بشكل جذري وفوري عند إضافة أي أثر طفيف",
                    "هي محاليل تحتوي حصراً على السكر وتعتبر غير موصلة Non-Electrolytes",
                    "هي مخاليط غازية تخضع لقانون دالتون للضغوط الجزئية عند ثبات الحرارة"
                ],
                correct: 0,
                explanation: "Buffer Solutions: These are solutions whose pH value does not change significantly upon adding a small amount of acid or base[cite: 3]."
            },
            {
                q: "كيف يُعرّف حاصل الإذابة (Solubility Product) في المحاليل المشبعة؟",
                options: [
                    "هو رقم يتم الحصول عليه عن طريق ضرب تراكيز الأيونات",
                    "هو النسبة بين مولات المذاب إلى حجم المحلول باللتر",
                    "هو الوزن المكافئ الجرامي مقسوماً على عيارية المحلول (N)",
                    "هو ثابت الاتزان للتفاعلات غير التامة العكوسة"
                ],
                correct: 0,
                explanation: "Solubility Product: product is a number obtained by multiplying the concentrations of the ions[cite: 3]."
            },

            // --- المسائل والأمثلة الحسابية من ملف معادلات الكيمياء الجديد ---
            {
                q: "ما هي كتلة 0.25 مول من ذرات الحديد (Fe) علماً بأن الكتلة الذرية للحديد تساوي 56؟",
                options: [
                    "14 جرام",
                    "5.6 جرام",
                    "22.4 جرام",
                    "11.2 جرام"
                ],
                correct: 0,
                explanation: "كتلة المادة بالجرام = عدد المولات × الكتلة الذرية = 0.25 مول × 56 (جم/مول) = 14 جم[cite: 4]."
            },
            {
                q: "ما هي كتلة 0.5 مول من غاز ثاني أكسيد الكربون (CO2) علماً بأن الكتلة الذرية للأكسجين = 16 والكربون = 12؟",
                options: [
                    "22 جرام",
                    "44 جرام",
                    "11 جرام",
                    "88 جرام"
                ],
                correct: 0,
                explanation: "كتلة المادة بالجرام = عدد المولات × الكتلة المولية = 0.5 × (2 × 16 + 12) = 22 جم[cite: 4]."
            },
            {
                q: "ما هي كُتلة نترات الفضة اللازمة لتحضير 500 مللتر من محلول بتركيز 0.125 عياري (N) علماً بأن الكتلة الذرية لنترات الفضة = 169.6؟",
                options: [
                    "10.6 جرام",
                    "21.2 جرام",
                    "5.3 جرام",
                    "42.4 جرام"
                ],
                correct: 0,
                explanation: "الحسابات: (500 × 169.6 × 0.125) / 1000 = 10.6 جرام[cite: 4]."
            },
            {
                q: "كم حجم الماء بالمللتر الواجب إضافته إلى 200 مللتر من محلول حمض الهيدروكلوريك بتركيز 0.05 مولاري لجعل تركيزه 0.02 مولاري؟",
                options: [
                    "300 مللتر",
                    "500 مللتر",
                    "200 مللتر",
                    "150 مللتر"
                ],
                correct: 0,
                explanation: "بتطبيق قانون التخفيف M1V1 = M2V2: يحسب الحجم النهائي V2 = 500 مل، وحجم الماء المضاف = 500 - 200 = 300 مل[cite: 4]."
            },
            {
                q: "عينة من غاز تشغل حجماً قدره 2 لتر تحت ضغط 1 جوي (atm)، فإذا ثبَتت درجة الحرارة، فما هو الحجم الذي تشغله العينة تحت ضغط نصف (1/2) جوي؟",
                options: [
                    "4 لتر",
                    "1 لتر",
                    "2 لتر",
                    "8 لتر"
                ],
                correct: 0,
                explanation: "بتطبيق قانون بويل P1V1 = P2V2: (1 × 2 = 1/2 × V2) إذن الحجم V2 = 4 لتر[cite: 4]."
            },
            {
                q: "ما هي قيمة الرقم الهيدروجيني (pH) لمحلول حمض الهيدروكلوريك إذا كان تركيز الحمض يساوي 1 × 10^-5 مولاري (مع افتراض تفكك الحمض كلياً)؟",
                options: [
                    "5",
                    "1",
                    "10",
                    "7"
                ],
                correct: 0,
                explanation: "قانون الحساب: pH = -log[H+] أي pH = -log(10^-5) إذن القيمة تساوي 5[cite: 5]."
            },
            {
                q: "ما هي عيارية (Normality) محلول حجمه 500 مللتر من هيدروكسيد الصوديوم (NaOH) يحتوي على 20 جرام من القاعدة (علماً أن الكتلة المولية تساوي 40 جم/مول)؟",
                options: [
                    "1 عياري (1 Normal)",
                    "0.5 عياري",
                    "2 عياري",
                    "4 عياري"
                ],
                correct: 0,
                explanation: "العيارية (N) = [كتلة المذاب بالجرام / الحجم باللتر] / الوزن المكافئ الجرامي = [20 / 0.5] / 40 = 1 Normal[cite: 5]."
            }
        ]
    },
    en: {
        questions: [
            // --- Theory & Concepts from File 1 ---
            {
                q: "What is the standard abbreviation and scientific term for atomic mass unit?",
                options: [
                    "Atomic Mass Unit; called the atomic mass unit (amu)",
                    "Expressed as mol representing Avogadro's amount",
                    "Expressed as normality (N) for equivalent weights",
                    "Expressed as the universal gas constant (R)"
                ],
                correct: 0,
                explanation: "Atomic Mass Unit; called the atomic mass unit (amu)[cite: 1]."
            },
            {
                q: "How is a mole defined based on its quantitative particulate content?",
                options: [
                    "It is an amount of a matter that contains Avogadro's number of atoms, molecules, or ions",
                    "It is the mass of solute in grams per liter of solution",
                    "It is the ratio of solute moles to entire solution moles",
                    "It is the pressure exerted on the container walls"
                ],
                correct: 0,
                explanation: "Mole: It is an amount of a matter that contains Avogadro's number of atoms, molecules, or ions[cite: 1]."
            },
            {
                q: "What is the exact numerical value of Avogadro's number?",
                options: [
                    "6.02 × 10^23",
                    "1.38 × 10^-23",
                    "8.314",
                    "2.24 × 10^22"
                ],
                correct: 0,
                explanation: "Avogadro's number; 6.02 × 10^23[cite: 1]."
            },
            {
                q: "What is the correct formula to calculate the number of atoms?",
                options: [
                    "Number of atoms = Number of moles X Avogadro number (6.02 × 10^23)",
                    "Number of atoms = Mass in grams / Molar mass",
                    "Number of atoms = Volume in liters × Molarity",
                    "Number of atoms = Equivalent weight / Normality"
                ],
                correct: 0,
                explanation: "Number of atoms = Number of moles X Avogadro number (6.02 × 10^23)[cite: 1]."
            },
            {
                q: "What are the three main types of chemical formulae (A, B, C)?",
                options: [
                    "A. Simple or Empirical (CH2O), B. Molecular Formula (C6H12O5), C. Structural Formula",
                    "A. Ionic, B. Electrostatic, C. Strong electrolyte",
                    "A. Dilution, B. Mole fraction, C. Ideal gas",
                    "A. Equilibrium, B. Solubility product, C. Reaction quotient"
                ],
                correct: 0,
                explanation: "Types of Chemical Formulae: A. Simple or Empirical, B. Molecular Formula, C. Structural Formula[cite: 1]."
            },
            {
                q: "How are limiting reagents defined in chemical reactions?",
                options: [
                    "Consumed first in the reaction",
                    "Remaining excess in reversible reactions",
                    "Non-conductive non-ionized molecules",
                    "Thermal catalysts altering equilibrium constant K"
                ],
                correct: 0,
                explanation: "Limiting Reagents: consumed first in the reaction[cite: 1]."
            },
            {
                q: "How is Normality symbolized and calculated?",
                options: [
                    "Symbolized by letter (N); N = Mass of solute in grams / (volume in Liter) / Gram equivalent weight",
                    "Symbolized by letter (M); M = Moles of solute / kg of solvent",
                    "Symbolized by letter (Q); Q = Products / Reactants ratio",
                    "Symbolized by letter (P); P = Sum of partial pressures"
                ],
                correct: 0,
                explanation: "Normality: symbolized by the letter (N); N = Mass of solute in grams / (volume in Liter) / Gram equivalent weight[cite: 1]."
            },
            {
                q: "What is the function of gram equivalent weight in solutions?",
                options: [
                    "It acts as the denominator in normality calculations",
                    "It determines ideal gas pressure at constant temperature",
                    "It represents Avogadro's number for covalent molecules",
                    "It represents organic liquid kinematic viscosity"
                ],
                correct: 0,
                explanation: "Gram equivalent weight is used in normality (N) calculations[cite: 1]."
            },
            {
                q: "What is the definition of Molarity (M)?",
                options: [
                    "It is the number of moles of the solute in one liter of solution",
                    "It is the number of moles of solute in 1000g of solvent",
                    "It is the ratio of solute moles to total solution moles",
                    "It is the perpendicular force per unit area"
                ],
                correct: 0,
                explanation: "Molarity (M): It is the number of moles of the solute in one liter of solution[cite: 1]."
            },
            {
                q: "What is the definition of Molality?",
                options: [
                    "Number of moles of solute in 1000 g (1 kg) of solvent",
                    "Number of moles of solute in one liter of solution",
                    "Mass of solute divided by gram equivalent weight",
                    "Percentage volume of gas under standard conditions"
                ],
                correct: 0,
                explanation: "Molality; number of moles of solute in 1000 g (1 kg) of solvent[cite: 1]."
            },
            {
                q: "What does Mole Fraction Concentration represent?",
                options: [
                    "Represents the ratio of moles of the solute to the moles of the entire solution",
                    "Represents normality multiplied by gram equivalent weight",
                    "Represents liquid vapor pressure variation rate",
                    "Represents equilibrium constant K for complete reactions"
                ],
                correct: 0,
                explanation: "Mole Fraction Concentration: represents the ratio of moles of the solute to the moles of the entire solution[cite: 1]."
            },
            {
                q: "What is the formula for the dilution of solutions?",
                options: [
                    "M1V1 = M2V2",
                    "P1V1 = P2V2",
                    "PV = nRT",
                    "K = Q"
                ],
                correct: 0,
                explanation: "Dilution of Solutions: M1V1 = M2V2[cite: 1]."
            },
            {
                q: "What are the three states of matter?",
                options: [
                    "Liquid state - Gaseous state - Solid state",
                    "Ionic state - Electrolytic state - Vapor state",
                    "Equilibrium state - Reaction quotient state - Buffer state",
                    "Simple state - Molecular state - Structural state"
                ],
                correct: 0,
                explanation: "The states of matter: Liquid state - Gaseous state - Solid state[cite: 1]."
            },
            {
                q: "What are the variables affecting the state of a gas?",
                options: [
                    "Volume - pressure - temperature - Mass",
                    "Viscosity - surface tension - vapor pressure - boiling point",
                    "Molarity - molality - mole fraction - normality",
                    "Equilibrium constant - reaction quotient - ionic bonds"
                ],
                correct: 0,
                explanation: "Variables affecting the state of a gas: Volume - pressure - temperature - Mass[cite: 1]."
            },
            {
                q: "How is pressure defined physically?",
                options: [
                    "Pressure is a property that can be used to determine the flow of mass from one place to another, defined as force acting per unit area",
                    "The resistance exerted by one liquid part to another flow",
                    "The perpendicular force determining liquid surface tension",
                    "Moles of gas per liter in a container"
                ],
                correct: 0,
                explanation: "Pressure: Pressure is a property that can be used to determine the flow of mass from one place to another. Pressure is defined as the force acting per unit area[cite: 1]."
            },
            {
                q: "What is gas pressure?",
                options: [
                    "Gas on the walls of the container",
                    "Surface tension force acting perpendicularly",
                    "Gram equivalent weight at zero Celsius",
                    "Electrolytic solution vapor pressure"
                ],
                correct: 0,
                explanation: "Gas pressure is; gas on the walls of the container[cite: 1]."
            },
            {
                q: "What defines one atmosphere (1 atm) using a mercury column?",
                options: [
                    "Column of mercury 76 cm long at a temperature of zero degrees Celsius",
                    "Column of mercury 760 meters long at 25°C",
                    "Column of mercury 7.6 cm long at standard boiling point",
                    "Column of mercury 1 meter long at chemical equilibrium"
                ],
                correct: 0,
                explanation: "One atmosphere (1 atm) = column of mercury 76 cm long at a temperature of zero degrees Celsius[cite: 1]."
            },
            {
                q: "What is Boyle's Law formula?",
                options: [
                    "P1 V1 = P2 V2",
                    "PV = nRT",
                    "M1V1 = M2V2",
                    "P = P1 + P2 + P3"
                ],
                correct: 0,
                explanation: "Boyle's Law: P1 V1 = P2 V2[cite: 1]."
            },
            {
                q: "What does Charles-Gay Lussac's Law state?",
                options: [
                    "When the pressure is constant, the volume of a certain amount of gas is directly proportional to the absolute temperature",
                    "When temperature is constant, pressure is inversely proportional to volume",
                    "Total pressure equals sum of partial pressures",
                    "Forward reaction rate equals reverse rate at equilibrium"
                ],
                correct: 0,
                explanation: "Charles-Gay Lussac's Law: when the pressure is constant, the volume of a certain amount of gas is directly proportional to the absolute temperature[cite: 1]."
            },
            {
                q: "What is the General Ideal Gas Law equation and what is R?",
                options: [
                    "PV = nRT, where R is a constant called the universal gas constant",
                    "P1V1 = P2V2, where R is the chemical equilibrium constant",
                    "N = M / V, where R is the normality factor",
                    "K = Q, where R is the weak electrolyte dissociation constant"
                ],
                correct: 0,
                explanation: "General Ideal Gas Law: PV = nRT. Where R is a constant and is called the universal gas constant[cite: 2]."
            },
            {
                q: "What is Dalton's Law of Partial Pressures equation?",
                options: [
                    "P = P1 + P2 + P3...",
                    "P1 V1 = P2 V2",
                    "PV = nRT",
                    "M1V1 = M2V2"
                ],
                correct: 0,
                explanation: "Dalton's Law of Partial Pressures: P = P1 + P2 + P3...[cite: 2]."
            },
            {
                q: "How is viscosity defined?",
                options: [
                    "The resistance that can be exerted by one part of a liquid to the flow of another part",
                    "The force acting perpendicularly on surface area",
                    "The temperature where vapor pressure equals external pressure",
                    "The ratio of solute moles to solution volume"
                ],
                correct: 0,
                explanation: "Viscosity: 'the resistance that can be exerted by one part of a liquid to the flow of another part'[cite: 2]."
            },
            {
                q: "How is Surface Tension (γ) defined?",
                options: [
                    "Defined as the force acting perpendicularly",
                    "Resistance exerted by liquid layers against flow",
                    "Vapor pressure at standard boiling point",
                    "Moles of solute per 1000g of pure solvent"
                ],
                correct: 0,
                explanation: "Surface Tension (γ): defined as the force acting perpendicularly[cite: 2]."
            },
            {
                q: "What is the relationship between vapor pressure and temperature?",
                options: [
                    "Vapor pressure always increases with rising temperature",
                    "Vapor pressure always decreases with rising temperature",
                    "Vapor pressure has no relation to temperature",
                    "Vapor pressure stays constant at freezing point"
                ],
                correct: 0,
                explanation: "The Relationship Between Vapor Pressure and Temperature: Vapor pressure always increases with rising temperature[cite: 2]."
            },
            {
                q: "How is Boiling Point defined?",
                options: [
                    "The temperature at which the liquid's vapor pressure equals the pressure on its surface",
                    "The temperature where solid and liquid coexist in equilibrium",
                    "The point where vapor pressure vanishes completely",
                    "The point where strong electrolytes dissociate"
                ],
                correct: 0,
                explanation: "Boiling Point: 'the temperature at which the liquid's vapor pressure equals the pressure on its surface'[cite: 2]."
            },
            {
                q: "How is Freezing Point defined?",
                options: [
                    "The temperature at which the liquid and solid states of a matter coexist in equilibrium",
                    "The point where vapor pressure equals 1 atm",
                    "The temperature where gas turns directly into solid",
                    "The point where equilibrium constant K equals zero"
                ],
                correct: 0,
                explanation: "Freezing Point: the temperature at which the liquid and solid states of a matter coexist in equilibrium[cite: 2]."
            },
            {
                q: "How are Ionic Bonds classified?",
                options: [
                    "The ionic bonds are electrostatic bonds",
                    "Single non-polar covalent bonds",
                    "Weak temporary hydrogen bonds",
                    "Free-moving metallic bonds in pure liquids"
                ],
                correct: 0,
                explanation: "Ionic Bonds: The ionic bonds are electrostatic bonds[cite: 2]."
            },
            {
                q: "What characterizes Complete (Irreversible) reactions?",
                options: [
                    "Single direction",
                    "Both forward and reverse directions",
                    "Forward rate equals reverse rate constantly",
                    "Equilibrium constant K always equals one"
                ],
                correct: 0,
                explanation: "Complete (Irreversible); single direction[cite: 2]."
            },
            {
                q: "How do Incomplete (Reversible) reactions proceed?",
                options: [
                    "Reverse directions",
                    "Single direction until limiting reagent is consumed",
                    "Unaffected by temperature or pressure changes",
                    "100% conversion of reactants into products"
                ],
                correct: 0,
                explanation: "Incomplete (Reversible); reverse directions[cite: 2]."
            },
            {
                q: "What is the definition of Chemical Equilibrium?",
                options: [
                    "Which the rate of the forward reaction is equal to the rate of the reverse reaction",
                    "Reactions stop completely",
                    "Reaction quotient Q equals zero",
                    "Percentage dissociation of weak electrolytes"
                ],
                correct: 0,
                explanation: "Definition of Chemical Equilibrium; which the rate of the forward reaction is equal to the rate of the reverse reaction[cite: 2]."
            },
            {
                q: "How is the Equilibrium Constant (K) structured?",
                options: [
                    "Fraction numerator denominator",
                    "Normality multiplied by volume in liters",
                    "Absolute difference between forward and reverse rates",
                    "Molar mass of the limiting reagent"
                ],
                correct: 0,
                explanation: "Equilibrium Constant(K): fraction numerator denominator[cite: 2]."
            },
            {
                q: "What are the factors affecting the chemical equilibrium constant?",
                options: [
                    "(1) The nature of the reactants products (2) Temperature",
                    "Atmospheric pressure and total vessel volume only",
                    "Molarity and mole fraction concentration",
                    "Avogadro's number and molar mass"
                ],
                correct: 0,
                explanation: "Factors affecting the chemical equilibrium constant: (1) The nature of the reactants products (2) Temperature[cite: 2]."
            },
            {
                q: "What does (K > 1) indicate?",
                options: [
                    "Have been converted to products",
                    "Have not been converted to products",
                    "System is static with zero rate",
                    "Reaction quotient Q is much larger than K"
                ],
                correct: 0,
                explanation: "(K > 1) have been converted to products[cite: 2]."
            },
            {
                q: "What does (K < 1) indicate?",
                options: [
                    "Have not been converted to products",
                    "Completely converted to products",
                    "System reached standard atmospheric pressure (1 atm)",
                    "Forward rate exceeds reverse rate massively"
                ],
                correct: 0,
                explanation: "(K < 1), have not been converted to products[cite: 2]."
            },
            {
                q: "What are the factors affecting the chemical equilibrium state?",
                options: [
                    "1-Temperature 2- Pressure 3- Concentration",
                    "Viscosity, surface tension, vapor pressure",
                    "Molarity, molality, mole fraction",
                    "Atomic mass unit, Avogadro's number, equivalent weight"
                ],
                correct: 0,
                explanation: "Factors affecting the chemical equilibrium state: 1-Temperature 2- Pressure 3- Concentration[cite: 2, 3]."
            },
            {
                q: "What is the Reaction Quotient (Q)?",
                options: [
                    "Reaction Quotient (Q): represents the concentration ratio at any time",
                    "Strong electrolyte dissociation constant in water",
                    "Gram equivalent weight used in normality calculations",
                    "Partial pressure according to Dalton's law"
                ],
                correct: 0,
                explanation: "Reaction Quotient (Q): Reaction Quotient (Q)[cite: 2, 3]."
            },
            {
                q: "When is the system at chemical equilibrium based on Q and K?",
                options: [
                    "If K = Q: at chemical equilibrium",
                    "If K < Q: reduces Q to the left",
                    "If K > Q: increases Q to the right",
                    "Forward rate drops to zero"
                ],
                correct: 0,
                explanation: "If K = Q: at chemical equilibrium[cite: 2, 3]."
            },
            {
                q: "What happens if K < Q?",
                options: [
                    "Reduces the value of Q (to the left)",
                    "Increases the value of Q (to the right)",
                    "System remains stable at standard equilibrium",
                    "Excess reactants convert into instant products"
                ],
                correct: 0,
                explanation: "If K < Q; reduces the value of Q (to the left)[cite: 3]."
            },
            {
                q: "What happens if K > Q?",
                options: [
                    "Increases the value of Q (to the right)",
                    "Reduces the value of Q (to the left)",
                    "Reversible reactions stop completely",
                    "Solution turns into a weak non-electrolyte"
                ],
                correct: 0,
                explanation: "If K > Q increases the value of Q (to the right)[cite: 3]."
            },
            {
                q: "How are conductive substances (Electrolytes) defined?",
                options: [
                    "Conducts electricity when dissolved in water",
                    "Prevent electric passage like sugar",
                    "Inert gases obeying ideal gas law",
                    "Liquids with high surface tension"
                ],
                correct: 0,
                explanation: "Conductive Substances; (Electrolytes): conducts electricity when dissolved in water[cite: 3]."
            },
            {
                q: "What are examples of strong electrolytes?",
                options: [
                    "NaCl, Chloric acid (HCl)",
                    "CH3COOH, H2O",
                    "Sugar in organic solutions",
                    "Mercury and hydrogen gas at 1 atm"
                ],
                correct: 0,
                explanation: "(Strong electrolytes) NaCl, Chloric acid (HCl)[cite: 3]."
            },
            {
                q: "What are examples of weak electrolytes?",
                options: [
                    "CH3COOH, H2O",
                    "NaCl, HCl",
                    "Sugar and non-ionized disaccharides",
                    "Ideal gases at low pressure"
                ],
                correct: 0,
                explanation: "(Weak Electrolytes): CH3 COOH H2O[cite: 3]."
            },
            {
                q: "What is an example of a non-electrolyte?",
                options: [
                    "Sugar",
                    "NaCl",
                    "HCl",
                    "CH3COOH"
                ],
                correct: 0,
                explanation: "(Non-Electrolytes); Sugar[cite: 3]."
            },
            {
                q: "How is dissociation defined?",
                options: [
                    "Dissociation is the separation of the original ionic bonds",
                    "Conversion of non-ionic molecules into free ions",
                    "Vapor pressure increase with temperature",
                    "Ratio of solute moles to entire solution moles"
                ],
                correct: 0,
                explanation: "Dissociation: Dissociation is the separation of the original ionic bonds[cite: 3]."
            },
            {
                q: "How is ionization defined?",
                options: [
                    "The conversion of non-ionic molecules into ions that can then move freely in water",
                    "Separation of strong ionic bonds without free ions",
                    "Reduction of reaction quotient Q to the left",
                    "Normality calculation via equivalent weight"
                ],
                correct: 0,
                explanation: "Ionization; the conversion of non-ionic molecules into ions that can then move freely in water[cite: 3]."
            },
            {
                q: "What do acids produce and what is their effect on litmus paper?",
                options: [
                    "Produce hydrogen ions (H+); acids turn blue litmus paper red",
                    "Produce hydroxide ions (OH-); turn red litmus paper blue",
                    "Produce sodium ions and fix pH value",
                    "Produce weak electrolytes without indicator effect"
                ],
                correct: 0,
                explanation: "Acids: produce hydrogen ions (H+). Properties: (1) release hydrogen ions (H+) (2) Acids turn blue litmus paper red[cite: 3]."
            },
            {
                q: "What do bases produce and what is their effect on litmus paper?",
                options: [
                    "Solutions to produce hydroxide ions (OH-); bases turn red litmus paper blue",
                    "Produce hydrogen ions (H+); turn blue litmus paper red",
                    "Produce non-conductive sugars called non-electrolytes",
                    "Produce ideal gases obeying Dalton's law"
                ],
                correct: 0,
                explanation: "Bases: solutions to produce hydroxide ions (OH-). Properties: 1- release hydroxide ions (OH-) 2- Bases turn red litmus paper blue[cite: 3]."
            },
            {
                q: "What is the formula related to pOH and ion concentrations?",
                options: [
                    "pOH = - log [OH- [H+] [OH-]",
                    "pOH = log [H+] related to reaction quotient Q",
                    "pOH = M1V1 / M2V2 for dilution",
                    "pOH = PV / nRT for ideal gases"
                ],
                correct: 0,
                explanation: "pOH= - log [OH- [H+] [OH-][cite: 3]."
            },
            {
                q: "What are Buffer Solutions?",
                options: [
                    "These are solutions whose pH value does not change significantly upon adding a small amount of acid or base",
                    "Solutions whose acidity changes drastically and instantly",
                    "Solutions containing sugar exclusively as non-electrolytes",
                    "Gas mixtures obeying Dalton's law at constant temperature"
                ],
                correct: 0,
                explanation: "Buffer Solutions :These are solutions whose pH value does not change significantly upon adding a small amount of acid or base[cite: 3]."
            },
            {
                q: "How is Solubility Product defined?",
                options: [
                    "Product is a number obtained by multiplying the concentrations of the ions",
                    "Ratio of solute moles to solution volume in liters",
                    "Gram equivalent weight divided by normality (N)",
                    "Equilibrium constant for incomplete reversible reactions"
                ],
                correct: 0,
                explanation: "Solubility Product: product is a number obtained by multiplying the concentrations of the ions[cite: 3]."
            },

            // --- Applied Problems from File 2 ---
            {
                q: "What is the mass of 0.25 moles of iron atoms, given that the atomic mass of iron is 56?",
                options: [
                    "14 g",
                    "5.6 g",
                    "22.4 g",
                    "11.2 g"
                ],
                correct: 0,
                explanation: "Mass in grams = number of moles × atomic mass = 0.25 mole × 56 (g/mole) = 14 g[cite: 4]."
            },
            {
                q: "What is the mass of 0.5 moles of carbon dioxide (CO2), given atomic mass of oxygen = 16 and carbon = 12?",
                options: [
                    "22 g",
                    "44 g",
                    "11 g",
                    "88 g"
                ],
                correct: 0,
                explanation: "Mass in grams = number of moles × atomic mass = 0.5 × (2 × 16 + 12) = 22 g[cite: 4]."
            },
            {
                q: "How many grams of silver nitrate are needed to prepare 500 ML of its solution with a concentration of 0.125 N (atomic mass = 169.6)?",
                options: [
                    "10.6 g",
                    "21.2 g",
                    "5.3 g",
                    "42.4 g"
                ],
                correct: 0,
                explanation: "Calculation: (500 × 169.6 × 0.125) / 1000 = 10.6 g[cite: 4]."
            },
            {
                q: "How many ml of water must be added to 200 ml of a 0.05M hydrochloric acid solution to make its concentration 0.02M?",
                options: [
                    "300 ml",
                    "500 ml",
                    "200 ml",
                    "150 ml"
                ],
                correct: 0,
                explanation: "Using M1V1 = M2V2: V2 = 500 ml, so the volume of water to be added = 500 - 200 = 300 ml[cite: 4]."
            },
            {
                q: "A sample of gas occupies 2 liters at a pressure of 1 atm. If temperature remains constant, what is the volume at 1/2 atm?",
                options: [
                    "4 liters",
                    "1 liter",
                    "2 liters",
                    "8 liters"
                ],
                correct: 0,
                explanation: "Applying Boyle's Law P1V1 = P2V2: (1 × 2 = 1/2 × V2) therefore V2 = 4 L[cite: 4]."
            },
            {
                q: "Calculate the pH value of a hydrochloric acid solution if the acid concentration is 1 × 10^-5 Molar (assuming complete dissociation)?",
                options: [
                    "5",
                    "1",
                    "10",
                    "7"
                ],
                correct: 0,
                explanation: "pH = -log(10^-5) = 5[cite: 5]."
            },
            {
                q: "What is the normality of a 500 ml solution of NaOH containing 20 g of base (molar mass = 40 g/mol)?",
                options: [
                    "1 Normal",
                    "0.5 Normal",
                    "2 Normal",
                    "4 Normal"
                ],
                correct: 0,
                explanation: "N = [Mass in grams / volume in Liters] / Equivalent weight = [20 / 0.5] / 40 = 1 Normal[cite: 5]."
            }
        ]
    }
};