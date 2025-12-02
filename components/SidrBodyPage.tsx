import React from 'react';
import { SEO } from './SEO';

export const SidrBodyPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "السدر للجسم - العناية الشاملة والفوائد الطبيعية",
    "description": "دليل شامل لاستخدام السدر للعناية بالجسم، فوائده للبشرة، التنظيف، والاستحمام الطبيعي",
    "author": {
      "@type": "Organization",
      "name": "سدر الجوري"
    }
  };

  return (
    <>
      <SEO 
        title="السدر للجسم - العناية الطبيعية الشاملة | سدر الجوري"
        description="اكتشفي فوائد السدر للجسم المذهلة. طرق الاستحمام بالسدر، العناية بالبشرة، التنظيف الطبيعي، وخلطات السدر للجسم."
        keywords="السدر للجسم, سدر للاستحمام, فوائد السدر للجسم, السدر للعناية بالجسم, غسول السدر, سكراب السدر, السدر الطبيعي للجسم"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/sidr-body"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">السدر للجسم</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              تمتعي بتجربة استحمام فاخرة وعناية شاملة للجسم مع السدر الطبيعي 100%
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">فوائد السدر للجسم</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                <div className="text-green-600 text-3xl mb-4">🚿</div>
                <h3 className="text-xl font-bold mb-3">تنظيف طبيعي</h3>
                <p className="text-gray-600">السدر ينظف الجسم بعمق ولطف، يزيل الأوساخ والبكتيريا دون جفاف البشرة</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                <div className="text-green-600 text-3xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3">نعومة فائقة</h3>
                <p className="text-gray-600">يترك السدر البشرة ناعمة كالحرير ومرطبة طبيعياً دون الحاجة لمرطبات إضافية</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                <div className="text-green-600 text-3xl mb-4">🌿</div>
                <h3 className="text-xl font-bold mb-3">مضاد للبكتيريا</h3>
                <p className="text-gray-600">خصائص السدر الطبيعية المضادة للبكتيريا تحمي الجسم من الالتهابات والروائح</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                <div className="text-green-600 text-3xl mb-4">🌸</div>
                <h3 className="text-xl font-bold mb-3">رائحة منعشة</h3>
                <p className="text-gray-600">يمنح السدر الجسم رائحة طبيعية منعشة تدوم طويلاً دون عطور صناعية</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                <div className="text-green-600 text-3xl mb-4">💧</div>
                <h3 className="text-xl font-bold mb-3">ترطيب عميق</h3>
                <p className="text-gray-600">يحافظ على رطوبة البشرة الطبيعية ويمنع الجفاف والتشقق</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                <div className="text-green-600 text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">حماية طبيعية</h3>
                <p className="text-gray-600">يكون طبقة حماية طبيعية على البشرة ضد العوامل البيئية الضارة</p>
              </div>
            </div>
          </section>

          {/* Bath Methods Section */}
          <section className="mb-16 bg-green-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">طرق الاستحمام بالسدر</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">1. الاستحمام التقليدي بالسدر</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>5-6 ملاعق كبيرة سدر مطحون</li>
                      <li>ماء دافئ</li>
                      <li>ملعقة كبيرة زيت زيتون (اختياري)</li>
                      <li>قطرات زيت عطري طبيعي</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">طريقة التحضير:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي السدر مع الماء الدافئ</li>
                      <li>اتركي الخليط ينقع 10 دقائق</li>
                      <li>أضيفي الزيت والعطر</li>
                      <li>استخدمي كغسول للجسم</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">2. حمام السدر المنقوع</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>كوب سدر مطحون</li>
                      <li>3 أكواب ماء مغلي</li>
                      <li>ملعقتان كبيرتان عسل</li>
                      <li>ملعقة كبيرة ملح البحر</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">الفوائد:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>استرخاء عميق للجسم</li>
                      <li>تنظيف شامل ولطيف</li>
                      <li>ترطيب مكثف للبشرة</li>
                      <li>تهدئة التوتر والإجهاد</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">3. سكراب السدر للجسم</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>4 ملاعق كبيرة سدر خشن</li>
                      <li>2 ملعقة كبيرة سكر بني</li>
                      <li>3 ملاعق كبيرة زيت جوز الهند</li>
                      <li>ملعقة صغيرة عسل</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">طريقة الاستخدام:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي جميع المكونات</li>
                      <li>دلكي الجسم بحركات دائرية</li>
                      <li>ركزي على المناطق الخشنة</li>
                      <li>اشطفي بالماء الدافئ</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Body Areas Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">السدر لمناطق الجسم المختلفة</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">🦵 للأرجل والقدمين</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• نقع القدمين في منقوع السدر</li>
                  <li>• إزالة الجلد الميت والخشونة</li>
                  <li>• تنعيم الكعبين المتشققين</li>
                  <li>• منع رائحة القدمين</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">💪 للذراعين واليدين</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تنعيم خشونة المرفقين</li>
                  <li>• ترطيب اليدين الجافتين</li>
                  <li>• إزالة البقع الداكنة</li>
                  <li>• حماية من التشقق</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">🫸 للظهر والكتفين</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تنظيف عميق للمسام</li>
                  <li>• علاج حبوب الظهر</li>
                  <li>• تقشير لطيف للجلد الميت</li>
                  <li>• تهدئة الالتهابات</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">🤱 للمناطق الحساسة</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تنظيف لطيف وآمن</li>
                  <li>• منع الالتهابات والحساسية</li>
                  <li>• توازن الحموضة الطبيعية</li>
                  <li>• رائحة منعشة طبيعية</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">🦴 للركبتين والمفاصل</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تفتيح اسمرار الركبتين</li>
                  <li>• تنعيم الخشونة</li>
                  <li>• تحسين مظهر الجلد</li>
                  <li>• ترطيب المناطق الجافة</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">🫁 للصدر والبطن</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تنظيف لطيف للبشرة الحساسة</li>
                  <li>• ترطيب ونعومة</li>
                  <li>• منع ظهور علامات التمدد</li>
                  <li>• تحسين ملمس البشرة</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Recipes Section */}
          <section className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">خلطات خاصة للجسم</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">خلطة السدر للتفتيح</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>المكونات:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>5 ملاعق كبيرة سدر مطحون</li>
                    <li>2 ملعقة كبيرة كركم</li>
                    <li>ملعقة كبيرة عصير ليمون</li>
                    <li>3 ملاعق كبيرة لبن رائب</li>
                    <li>ملعقة كبيرة عسل أبيض</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>الاستخدام:</strong> طبقي على المناطق الداكنة واتركي 20 دقيقة ثم اشطفي</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">خلطة السدر المرطبة</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>المكونات:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>4 ملاعق كبيرة سدر مطحون</li>
                    <li>2 ملعقة كبيرة زبدة الشيا</li>
                    <li>ملعقة كبيرة زيت الأرغان</li>
                    <li>ملعقة كبيرة جليسرين</li>
                    <li>ماء ورد للخلط</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>الاستخدام:</strong> مثالية للبشرة الجافة والمتشققة، استخدمي مرتين أسبوعياً</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">خلطة السدر المنعشة</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>المكونات:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>6 ملاعق كبيرة سدر مطحون</li>
                    <li>ملعقة كبيرة نعناع مجفف</li>
                    <li>ملعقة صغيرة زيت النعناع</li>
                    <li>ماء بارد للخلط</li>
                    <li>ملعقة كبيرة جل الصبار</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>الاستخدام:</strong> مثالية للصيف، تمنح انتعاشاً وبرودة طبيعية</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">خلطة السدر المقشرة</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>المكونات:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>4 ملاعق كبيرة سدر خشن</li>
                    <li>3 ملاعق كبيرة ملح البحر</li>
                    <li>2 ملعقة كبيرة زيت زيتون</li>
                    <li>ملعقة كبيرة عسل</li>
                    <li>قطرات زيت اللافندر</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>الاستخدام:</strong> للتقشير العميق وإزالة الجلد الميت، مرة أسبوعياً</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">نصائح للعناية المثلى بالجسم</h2>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-4">✅ للحصول على أفضل النتائج</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>استخدمي الماء الدافئ وليس الساخن</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>دلكي الجسم بحركات دائرية لطيفة</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>اتركي السدر ينقع قبل الاستخدام</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>رطبي البشرة بعد الاستحمام</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">❌ تجنبي هذه الأخطاء</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>الفرك القوي للبشرة الحساسة</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>استخدام السدر المعالج كيميائياً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>الاستحمام بماء ساخن جداً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>إهمال الترطيب بعد الاستحمام</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">تمتعي بتجربة استحمام فاخرة</h2>
            <p className="text-xl mb-8 text-green-100">اطلبي أجود أنواع السدر الطبيعي للعناية الشاملة بجسمك</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
              تسوقي منتجات العناية بالجسم
            </button>
          </section>
        </div>
      </div>
    </>
  );
};