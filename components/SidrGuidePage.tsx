import React from 'react';
import { SEO } from './SEO';

export const SidrGuidePage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "دليل السدر الشامل - كل ما تحتاجين معرفته",
    "description": "دليل شامل ومفصل عن السدر، أنواعه، فوائده، طرق الاستخدام، والنصائح المهمة للحصول على أفضل النتائج",
    "author": {
      "@type": "Organization",
      "name": "سدر الجوري"
    }
  };

  return (
    <>
      <SEO 
        title="دليل السدر الشامل - كل ما تحتاجين معرفته | سدر الجوري"
        description="دليل شامل عن السدر الطبيعي، أنواعه، فوائده للشعر والبشرة والجسم، طرق الاستخدام، والنصائح المهمة للعناية الطبيعية."
        keywords="دليل السدر, معلومات السدر, أنواع السدر, فوائد السدر, السدر الطبيعي, كيفية استخدام السدر, نصائح السدر"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/sidr-guide"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">دليل السدر الشامل</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              كل ما تحتاجين معرفته عن السدر الطبيعي - من الألف إلى الياء
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">محتويات الدليل</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#what-is-sidr" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                <span className="mr-2">📖</span> ما هو السدر؟
              </a>
              <a href="#types" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                <span className="mr-2">🌿</span> أنواع السدر
              </a>
              <a href="#benefits" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                <span className="mr-2">✨</span> الفوائد الصحية
              </a>
              <a href="#how-to-use" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                <span className="mr-2">🔧</span> طرق الاستخدام
              </a>
              <a href="#quality" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                <span className="mr-2">🏆</span> معايير الجودة
              </a>
              <a href="#tips" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                <span className="mr-2">💡</span> نصائح مهمة
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          
          {/* What is Sidr Section */}
          <section id="what-is-sidr" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">ما هو السدر؟</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-700 mb-4">التعريف العلمي</h3>
                  <p className="text-gray-600 mb-4">
                    السدر (Ziziphus spina-christi) هو شجرة مباركة ذكرت في القرآن الكريم، تنتمي إلى عائلة النبق. 
                    تنمو في المناطق الاستوائية وشبه الاستوائية، وتشتهر بفوائدها العلاجية والتجميلية المذهلة.
                  </p>
                  <p className="text-gray-600 mb-4">
                    أوراق السدر غنية بالصابونين الطبيعي، الفلافونويدات، والمركبات المضادة للأكسدة، 
                    مما يجعلها مثالية للعناية الطبيعية بالشعر والبشرة.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-6">
                  <h4 className="font-bold text-indigo-700 mb-3">الأسماء المختلفة للسدر:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• السدر (العربية)</li>
                    <li>• النبق</li>
                    <li>• Jujube (الإنجليزية)</li>
                    <li>• Christ's Thorn</li>
                    <li>• Ziziphus (الاسم العلمي)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Types Section */}
          <section id="types" className="mb-16 bg-indigo-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">أنواع السدر</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">🌿 السدر اليمني</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• الأجود والأغلى ثمناً</li>
                  <li>• لون أخضر فاتح مميز</li>
                  <li>• رغوة كثيفة وطبيعية</li>
                  <li>• رائحة عطرة مميزة</li>
                  <li>• فعالية عالية في التنظيف</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">🌱 السدر الهندي</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• جودة ممتازة وسعر معقول</li>
                  <li>• لون أخضر داكن</li>
                  <li>• رغوة جيدة ومناسبة</li>
                  <li>• متوفر بكثرة في الأسواق</li>
                  <li>• مناسب للاستخدام اليومي</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">🍃 السدر المصري</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• جودة جيدة وسعر اقتصادي</li>
                  <li>• لون أخضر متوسط</li>
                  <li>• رغوة معتدلة</li>
                  <li>• مناسب للمبتدئات</li>
                  <li>• متوفر في معظم المتاجر</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">🌿 السدر السوداني</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• جودة عالية ونقاء ممتاز</li>
                  <li>• لون أخضر زاهي</li>
                  <li>• رغوة كثيفة ومستدامة</li>
                  <li>• خالي من الشوائب</li>
                  <li>• مفضل لدى الخبراء</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">🌱 السدر الباكستاني</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• جودة متوسطة إلى جيدة</li>
                  <li>• لون أخضر فاتح</li>
                  <li>• رغوة خفيفة</li>
                  <li>• سعر مناسب للجميع</li>
                  <li>• مناسب للاستخدام العام</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">🍃 السدر المغربي</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• جودة ممتازة ونادر</li>
                  <li>• لون أخضر مائل للذهبي</li>
                  <li>• رغوة كريمية فاخرة</li>
                  <li>• رائحة مميزة وعطرة</li>
                  <li>• مطلوب من الخبراء</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">الفوائد الصحية والتجميلية</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">💇♀️ فوائد السدر للشعر</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-600 mb-2">تقوية الشعر</h4>
                    <p className="text-gray-600 text-sm">يقوي بصيلات الشعر ويمنع التساقط والتكسر</p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-600 mb-2">تطويل الشعر</h4>
                    <p className="text-gray-600 text-sm">يحفز الدورة الدموية ويسرع نمو الشعر</p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-600 mb-2">لمعان طبيعي</h4>
                    <p className="text-gray-600 text-sm">يمنح الشعر لمعاناً صحياً ونعومة فائقة</p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-600 mb-2">علاج القشرة</h4>
                    <p className="text-gray-600 text-sm">يزيل القشرة ويهدئ حكة فروة الرأس</p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-600 mb-2">تنظيف عميق</h4>
                    <p className="text-gray-600 text-sm">ينظف الشعر وفروة الرأس من الدهون والشوائب</p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-600 mb-2">حماية طبيعية</h4>
                    <p className="text-gray-600 text-sm">يحمي الشعر من العوامل البيئية الضارة</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-pink-700 mb-6">🌸 فوائد السدر للبشرة</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-pink-600 mb-2">تنظيف لطيف</h4>
                    <p className="text-gray-600 text-sm">ينظف البشرة بعمق دون جفاف أو تهيج</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-pink-600 mb-2">تفتيح طبيعي</h4>
                    <p className="text-gray-600 text-sm">يوحد لون البشرة ويفتح البقع الداكنة</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-pink-600 mb-2">مضاد للبكتيريا</h4>
                    <p className="text-gray-600 text-sm">يحارب البكتيريا ويمنع ظهور الحبوب</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-pink-600 mb-2">ترطيب طبيعي</h4>
                    <p className="text-gray-600 text-sm">يحافظ على رطوبة البشرة الطبيعية</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-pink-600 mb-2">مكافحة الشيخوخة</h4>
                    <p className="text-gray-600 text-sm">يؤخر علامات التقدم في السن</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-pink-600 mb-2">تهدئة الالتهابات</h4>
                    <p className="text-gray-600 text-sm">يهدئ الالتهابات والحساسية</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6">🛁 فوائد السدر للجسم</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-2">استحمام منعش</h4>
                    <p className="text-gray-600 text-sm">يوفر تجربة استحمام فاخرة ومنعشة</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-2">نعومة فائقة</h4>
                    <p className="text-gray-600 text-sm">يترك البشرة ناعمة كالحرير</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-2">رائحة طبيعية</h4>
                    <p className="text-gray-600 text-sm">يمنح الجسم رائحة منعشة تدوم طويلاً</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-2">حماية من البكتيريا</h4>
                    <p className="text-gray-600 text-sm">يحمي الجسم من البكتيريا والفطريات</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-2">تقشير لطيف</h4>
                    <p className="text-gray-600 text-sm">يزيل خلايا الجلد الميتة بلطف</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-2">استرخاء وهدوء</h4>
                    <p className="text-gray-600 text-sm">يساعد على الاسترخاء وتهدئة الأعصاب</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section id="how-to-use" className="mb-16 bg-purple-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">طرق الاستخدام الصحيحة</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">📋 الخطوات الأساسية</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-purple-600 mb-3">التحضير:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                      <li>اختاري السدر الطبيعي عالي الجودة</li>
                      <li>اطحني الأوراق إذا كانت كاملة</li>
                      <li>نخلي السدر لإزالة الشوائب</li>
                      <li>احفظيه في مكان جاف ومظلم</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-600 mb-3">الخلط:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                      <li>استخدمي الماء الدافئ للخلط</li>
                      <li>اتركي الخليط ينقع 15-30 دقيقة</li>
                      <li>حركي الخليط للحصول على رغوة</li>
                      <li>أضيفي المكونات الإضافية حسب الحاجة</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">⏰ أوقات الاستخدام المثلى</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-purple-600 mb-2">للشعر</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• مرة إلى مرتين أسبوعياً</li>
                      <li>• قبل الاستحمام بساعة</li>
                      <li>• في المساء للراحة</li>
                      <li>• تجنبي الأيام الباردة</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-purple-600 mb-2">للبشرة</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 2-3 مرات أسبوعياً</li>
                      <li>• في المساء قبل النوم</li>
                      <li>• تجنبي أوقات الشمس</li>
                      <li>• بعد تنظيف البشرة</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-purple-600 mb-2">للجسم</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• يومياً أو حسب الحاجة</li>
                      <li>• أثناء الاستحمام</li>
                      <li>• في أي وقت من اليوم</li>
                      <li>• مناسب لجميع الفصول</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Section */}
          <section id="quality" className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">معايير الجودة والاختيار</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-green-700 mb-4">✅ علامات الجودة العالية</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>اللون:</strong> أخضر طبيعي زاهي دون تغيير في اللون
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>الرائحة:</strong> عطرة وطبيعية دون روائح كيميائية
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>الملمس:</strong> ناعم ومطحون جيداً دون قطع كبيرة
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>الرغوة:</strong> كثيفة وطبيعية عند الخلط بالماء
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>النقاء:</strong> خالي من الشوائب والأتربة والمواد الغريبة
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-red-700 mb-4">❌ علامات الجودة المنخفضة</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>اللون الباهت:</strong> أخضر باهت أو مائل للبني
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>رائحة غريبة:</strong> رائحة كيميائية أو عفنة
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>ملمس خشن:</strong> قطع كبيرة أو طحن غير منتظم
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>رغوة قليلة:</strong> لا ينتج رغوة كافية أو طبيعية
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <div>
                      <strong>شوائب:</strong> وجود أتربة أو مواد غريبة أو حشرات
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section id="tips" className="mb-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">نصائح الخبراء</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">🏪 نصائح الشراء</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• اشتري من مصادر موثوقة</li>
                  <li>• تأكدي من تاريخ الإنتاج</li>
                  <li>• اطلبي عينة قبل الشراء</li>
                  <li>• قارني الأسعار والجودة</li>
                  <li>• اقرئي تقييمات العملاء</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">📦 نصائح التخزين</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• احفظيه في مكان جاف</li>
                  <li>• تجنبي أشعة الشمس المباشرة</li>
                  <li>• استخدمي عبوات محكمة الإغلاق</li>
                  <li>• تجنبي الأماكن الرطبة</li>
                  <li>• لا تخزنيه في الثلاجة</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">🔬 نصائح الاختبار</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• اختبري على منطقة صغيرة أولاً</li>
                  <li>• انتظري 24 ساعة للتأكد</li>
                  <li>• راقبي أي تفاعلات حساسية</li>
                  <li>• ابدئي بكميات قليلة</li>
                  <li>• استشيري طبيب الجلدية عند الحاجة</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">⚡ نصائح الاستخدام</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• استخدمي الماء الدافئ للخلط</li>
                  <li>• اتركي الخليط ينقع قبل الاستخدام</li>
                  <li>• دلكي بحركات دائرية لطيفة</li>
                  <li>• لا تتركي الخليط يجف تماماً</li>
                  <li>• اشطفي بالماء الفاتر</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">🌟 نصائح للنتائج</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• كوني صبورة للحصول على النتائج</li>
                  <li>• استخدمي بانتظام وثبات</li>
                  <li>• اشربي الماء بكثرة</li>
                  <li>• اتبعي نظاماً غذائياً صحياً</li>
                  <li>• تجنبي المواد الكيميائية القاسية</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">⚠️ تحذيرات مهمة</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تجنبي السدر المعالج كيميائياً</li>
                  <li>• لا تستخدمي كميات مفرطة</li>
                  <li>• تجنبي الفرك القوي</li>
                  <li>• لا تخلطي مع مواد كيميائية</li>
                  <li>• توقفي عند ظهور حساسية</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">أسئلة شائعة</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">هل السدر مناسب لجميع أنواع الشعر والبشرة؟</h3>
                <p className="text-gray-600">نعم، السدر الطبيعي مناسب لجميع أنواع الشعر والبشرة، لكن قد تحتاجين لتعديل طريقة الاستخدام حسب نوع شعرك أو بشرتك.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">كم من الوقت يحتاج السدر لإظهار النتائج؟</h3>
                <p className="text-gray-600">تبدأ النتائج الأولية في الظهور خلال 2-4 أسابيع من الاستخدام المنتظم، بينما النتائج الكاملة تظهر خلال 2-3 أشهر.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">هل يمكن استخدام السدر يومياً؟</h3>
                <p className="text-gray-600">للجسم نعم، أما للشعر والوجه فيُنصح بالاستخدام 2-3 مرات أسبوعياً لتجنب الإفراط في التنظيف.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">كيف أعرف إذا كان السدر أصلي أم مغشوش؟</h3>
                <p className="text-gray-600">السدر الأصلي له لون أخضر طبيعي، رائحة عطرة، وينتج رغوة كثيفة عند الخلط بالماء. تجنبي السدر ذو اللون الباهت أو الرائحة الكيميائية.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">ابدئي رحلتك مع السدر الطبيعي</h2>
            <p className="text-xl mb-8 text-indigo-100">احصلي على أجود أنواع السدر الطبيعي عالي الجودة من متجرنا</p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
              تسوقي السدر الطبيعي الآن
            </button>
          </section>
        </div>
      </div>
    </>
  );
};