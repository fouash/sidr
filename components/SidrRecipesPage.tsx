import React from 'react';
import { SEO } from './SEO';

export const SidrRecipesPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "وصفات وخلطات السدر الطبيعية - دليل شامل",
    "description": "مجموعة شاملة من وصفات وخلطات السدر للشعر والبشرة والجسم مع طرق التحضير والاستخدام",
    "author": {
      "@type": "Organization",
      "name": "سدر الجوري"
    }
  };

  return (
    <>
      <SEO 
        title="وصفات وخلطات السدر الطبيعية - دليل شامل | سدر الجوري"
        description="اكتشفي أفضل وصفات وخلطات السدر الطبيعية للشعر والبشرة والجسم. طرق تحضير واستخدام السدر مع مكونات طبيعية مجربة."
        keywords="وصفات السدر, خلطات السدر, طرق استخدام السدر, وصفات السدر للشعر, خلطات السدر للبشرة, وصفات طبيعية بالسدر"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/sidr-recipes"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">وصفات وخلطات السدر</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              مجموعة شاملة من الوصفات المجربة والخلطات الطبيعية بالسدر للجمال والعناية
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          {/* Categories Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">فئات الوصفات</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-6 text-center">
                <div className="text-amber-600 text-4xl mb-4">💇‍♀️</div>
                <h3 className="text-2xl font-bold text-amber-700 mb-2">وصفات الشعر</h3>
                <p className="text-gray-600">خلطات متنوعة لتقوية وتطويل وتنعيم الشعر</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-6 text-center">
                <div className="text-pink-600 text-4xl mb-4">🌸</div>
                <h3 className="text-2xl font-bold text-pink-700 mb-2">وصفات البشرة</h3>
                <p className="text-gray-600">ماسكات طبيعية لتنظيف وتفتيح ونضارة البشرة</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6 text-center">
                <div className="text-green-600 text-4xl mb-4">🛁</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">وصفات الجسم</h3>
                <p className="text-gray-600">خلطات شاملة للعناية بالجسم والاستحمام</p>
              </div>
            </div>
          </section>

          {/* Hair Recipes Section */}
          <section className="mb-16 bg-amber-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">وصفات السدر للشعر</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-700 mb-4">🌟 وصفة السدر الذهبية لتطويل الشعر</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-amber-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>4 ملاعق كبيرة سدر مطحون</li>
                      <li>2 ملعقة كبيرة حناء طبيعية</li>
                      <li>ملعقة كبيرة زيت الخروع</li>
                      <li>ملعقة كبيرة زيت جوز الهند</li>
                      <li>كوب شاي أخضر مركز</li>
                      <li>ملعقة صغيرة عسل</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-amber-600">طريقة التحضير:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي السدر والحناء</li>
                      <li>أضيفي الشاي الأخضر تدريجياً</li>
                      <li>اتركي الخليط ينقع ساعة</li>
                      <li>أضيفي الزيوت والعسل</li>
                      <li>اخلطي جيداً حتى تحصلي على قوام كريمي</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-amber-600">طريقة الاستخدام:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>طبقي على الشعر من الجذور للأطراف</li>
                      <li>دلكي فروة الرأس بلطف</li>
                      <li>اتركي لمدة 45 دقيقة</li>
                      <li>اشطفي بالماء الفاتر</li>
                      <li>كرري مرتين أسبوعياً</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-700 mb-4">💪 وصفة السدر لتقوية الشعر الضعيف</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-amber-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>3 ملاعق كبيرة سدر مطحون</li>
                      <li>ملعقة كبيرة بروتين البيض</li>
                      <li>ملعقة كبيرة زيت الأرغان</li>
                      <li>ملعقة صغيرة فيتامين E</li>
                      <li>ماء دافئ للخلط</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-amber-600">الفوائد:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>تقوية بصيلات الشعر</li>
                      <li>منع التساقط والتكسر</li>
                      <li>زيادة كثافة الشعر</li>
                      <li>لمعان طبيعي فائق</li>
                      <li>حماية من التلف</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-700 mb-4">✨ شامبو السدر الطبيعي المنزلي</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-amber-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>6 ملاعق كبيرة سدر مطحون</li>
                      <li>2 كوب ماء مغلي</li>
                      <li>ملعقة كبيرة جليسرين</li>
                      <li>ملعقة صغيرة زيت اللافندر</li>
                      <li>ملعقة صغيرة عسل</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-amber-600">طريقة التحضير:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>انقعي السدر في الماء المغلي</li>
                      <li>اتركيه ينقع لمدة ساعتين</li>
                      <li>صفي الخليط جيداً</li>
                      <li>أضيفي باقي المكونات</li>
                      <li>احفظي في زجاجة نظيفة</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skin Recipes Section */}
          <section className="mb-16 bg-pink-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">وصفات السدر للبشرة</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">🌟 ماسك السدر الملكي للتفتيح</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-pink-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>3 ملاعق كبيرة سدر ناعم</li>
                      <li>ملعقة كبيرة كركم</li>
                      <li>ملعقة كبيرة دقيق الشوفان</li>
                      <li>2 ملعقة كبيرة لبن رائب</li>
                      <li>ملعقة صغيرة عسل مانوكا</li>
                      <li>قطرات زيت الورد</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-pink-600">طريقة التحضير:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي المكونات الجافة</li>
                      <li>أضيفي اللبن تدريجياً</li>
                      <li>أضيفي العسل والزيت</li>
                      <li>اخلطي حتى تحصلي على عجينة ناعمة</li>
                      <li>اتركي الخليط 10 دقائق</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-pink-600">النتائج المتوقعة:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>تفتيح فوري للبشرة</li>
                      <li>إزالة البقع الداكنة</li>
                      <li>نعومة ونضارة</li>
                      <li>توحيد لون البشرة</li>
                      <li>إشراق طبيعي</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">🧴 غسول السدر للبشرة الحساسة</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-pink-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>4 ملاعق كبيرة سدر مطحون</li>
                      <li>كوب ماء ورد</li>
                      <li>ملعقة كبيرة جل الصبار</li>
                      <li>ملعقة صغيرة زيت الجوجوبا</li>
                      <li>قطرات زيت البابونج</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-pink-600">مناسب لـ:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>البشرة الحساسة والملتهبة</li>
                      <li>البشرة المعرضة للحساسية</li>
                      <li>البشرة الجافة والمتهيجة</li>
                      <li>بعد التعرض للشمس</li>
                      <li>الاستخدام اليومي اللطيف</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">💎 ماسك السدر الماسي المضاد للشيخوخة</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-pink-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>2 ملعقة كبيرة سدر ناعم</li>
                      <li>ملعقة كبيرة كولاجين طبيعي</li>
                      <li>ملعقة صغيرة فيتامين C</li>
                      <li>ملعقة كبيرة زيت الورد البري</li>
                      <li>ماء الأرز المخمر</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-pink-600">الفوائد المضادة للشيخوخة:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>تقليل التجاعيد والخطوط</li>
                      <li>شد البشرة طبيعياً</li>
                      <li>تحفيز تجديد الخلايا</li>
                      <li>زيادة مرونة البشرة</li>
                      <li>إشراق شبابي</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Body Recipes Section */}
          <section className="mb-16 bg-green-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">وصفات السدر للجسم</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-700 mb-4">🛁 حمام السدر الملكي المنعش</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-green-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>كوب سدر مطحون</li>
                      <li>نصف كوب ملح البحر الميت</li>
                      <li>ربع كوب بيكربونات الصوديوم</li>
                      <li>3 ملاعق كبيرة زيت اللوز</li>
                      <li>10 قطرات زيت اللافندر</li>
                      <li>5 قطرات زيت النعناع</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-green-600">طريقة التحضير:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي جميع المكونات الجافة</li>
                      <li>أضيفي الزيوت تدريجياً</li>
                      <li>اخلطي جيداً حتى التجانس</li>
                      <li>احفظي في وعاء محكم الإغلاق</li>
                      <li>استخدمي 3-4 ملاعق لكل حمام</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-green-600">الفوائد:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>استرخاء عميق للعضلات</li>
                      <li>تنظيف شامل للجسم</li>
                      <li>ترطيب مكثف للبشرة</li>
                      <li>تهدئة التوتر والقلق</li>
                      <li>رائحة منعشة تدوم طويلاً</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-700 mb-4">🌿 سكراب السدر الطبيعي للتقشير</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-green-600">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>5 ملاعق كبيرة سدر خشن</li>
                      <li>3 ملاعق كبيرة سكر بني</li>
                      <li>2 ملعقة كبيرة قهوة مطحونة</li>
                      <li>4 ملاعق كبيرة زيت جوز الهند</li>
                      <li>ملعقة كبيرة عسل</li>
                      <li>زيت عطري حسب الرغبة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-green-600">طريقة الاستخدام:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي جميع المكونات</li>
                      <li>طبقي على الجسم المبلل</li>
                      <li>دلكي بحركات دائرية لطيفة</li>
                      <li>ركزي على المناطق الخشنة</li>
                      <li>اشطفي بالماء الدافئ</li>
                      <li>استخدمي مرة أسبوعياً</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special Occasions Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">وصفات السدر للمناسبات الخاصة</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">👰 وصفة العروس الذهبية</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>للشعر والبشرة معاً:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>6 ملاعق كبيرة سدر فاخر</li>
                    <li>2 ملعقة كبيرة ماء الورد البلغاري</li>
                    <li>ملعقة كبيرة عسل مانوكا</li>
                    <li>ملعقة صغيرة زعفران منقوع</li>
                    <li>زيت الورد الطبيعي</li>
                  </ul>
                  <p className="text-purple-600 font-semibold">مثالية قبل الزفاف بأسبوع</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">🏖️ وصفة الصيف المنعشة</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>للحماية من الشمس:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>4 ملاعق كبيرة سدر</li>
                    <li>ملعقة كبيرة جل الصبار</li>
                    <li>ملعقة صغيرة زيت جوز الهند</li>
                    <li>قطرات زيت النعناع</li>
                    <li>ماء الخيار البارد</li>
                  </ul>
                  <p className="text-blue-600 font-semibold">مهدئة ومرطبة بعد التعرض للشمس</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">🍂 وصفة الشتاء المغذية</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>للترطيب العميق:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>5 ملاعق كبيرة سدر</li>
                    <li>2 ملعقة كبيرة زبدة الشيا</li>
                    <li>ملعقة كبيرة زيت الأرغان</li>
                    <li>ملعقة صغيرة فيتامين E</li>
                    <li>حليب دافئ للخلط</li>
                  </ul>
                  <p className="text-orange-600 font-semibold">مثالية للبشرة الجافة في الشتاء</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-700 mb-4">🌱 وصفة الربيع المجددة</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>لتجديد البشرة:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>4 ملاعق كبيرة سدر طازج</li>
                    <li>ملعقة كبيرة عصير الليمون</li>
                    <li>ملعقة كبيرة عسل طبيعي</li>
                    <li>ملعقة صغيرة كركم</li>
                    <li>ماء الورد للخلط</li>
                  </ul>
                  <p className="text-green-600 font-semibold">لإشراق ونضارة الربيع</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">نصائح مهمة لنجاح الوصفات</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-amber-700 mb-4">✅ أسرار النجاح</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>استخدمي السدر الطبيعي 100% فقط</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>اتركي الخلطات تنقع قبل الاستخدام</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>اختبري الخلطة على منطقة صغيرة أولاً</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>استخدمي أدوات نظيفة للخلط</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>حضري الكمية المناسبة للاستخدام الفوري</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4">❌ أخطاء يجب تجنبها</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>استخدام السدر المعالج كيميائياً</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>ترك الخلطة تجف تماماً على البشرة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>الإفراط في كمية المكونات الحمضية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>حفظ الخلطات المحضرة لفترة طويلة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>تجاهل اختبار الحساسية</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">ابدئي رحلتك مع وصفات السدر الطبيعية</h2>
            <p className="text-xl mb-8 text-amber-100">احصلي على أجود أنواع السدر الطبيعي لتحضير أفضل الوصفات</p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-amber-50 transition-colors">
              تسوقي السدر الطبيعي الآن
            </button>
          </section>
        </div>
      </div>
    </>
  );
};