import React from 'react';
import { SEO } from './SEO';

export const SidrSkinPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "السدر للبشرة - فوائد وطرق العناية الطبيعية",
    "description": "دليل شامل لاستخدام السدر للبشرة، فوائده للوجه والجسم، وأفضل الخلطات الطبيعية للعناية بالبشرة",
    "author": {
      "@type": "Organization",
      "name": "سدر الجوري"
    }
  };

  return (
    <>
      <SEO 
        title="السدر للبشرة - العناية الطبيعية والفوائد المذهلة | سدر الجوري"
        description="اكتشفي فوائد السدر للبشرة الرائعة. خلطات طبيعية للوجه، تنظيف البشرة، علاج الحبوب، وتفتيح البشرة بالسدر الطبيعي."
        keywords="السدر للبشرة, سدر للوجه, فوائد السدر للبشرة, السدر لتفتيح البشرة, السدر للحبوب, خلطات السدر للوجه, السدر الطبيعي للبشرة"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/sidr-skin"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-pink-500 to-rose-600 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">السدر للبشرة</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              اكتشفي سر النضارة والجمال الطبيعي مع السدر - العناية المثالية لبشرة صحية ومشرقة
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">فوائد السدر للبشرة</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
                <div className="text-pink-600 text-3xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3">تنظيف عميق</h3>
                <p className="text-gray-600">السدر ينظف البشرة بعمق ويزيل الشوائب والدهون الزائدة دون جفاف البشرة</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
                <div className="text-pink-600 text-3xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-3">تفتيح طبيعي</h3>
                <p className="text-gray-600">يساعد السدر على توحيد لون البشرة وتفتيح البقع الداكنة بشكل طبيعي وآمن</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
                <div className="text-pink-600 text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">مضاد للبكتيريا</h3>
                <p className="text-gray-600">خصائص السدر المضادة للبكتيريا تساعد في علاج الحبوب ومنع ظهورها</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
                <div className="text-pink-600 text-3xl mb-4">💧</div>
                <h3 className="text-xl font-bold mb-3">ترطيب طبيعي</h3>
                <p className="text-gray-600">يحافظ السدر على رطوبة البشرة الطبيعية ويمنع الجفاف والتشقق</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
                <div className="text-pink-600 text-3xl mb-4">🌿</div>
                <h3 className="text-xl font-bold mb-3">مهدئ للالتهابات</h3>
                <p className="text-gray-600">يهدئ السدر التهابات البشرة والحساسية ويقلل من الاحمرار والتهيج</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
                <div className="text-pink-600 text-3xl mb-4">⏰</div>
                <h3 className="text-xl font-bold mb-3">مكافحة الشيخوخة</h3>
                <p className="text-gray-600">مضادات الأكسدة في السدر تحارب علامات التقدم في السن وتحافظ على نضارة البشرة</p>
              </div>
            </div>
          </section>

          {/* Face Care Section */}
          <section className="mb-16 bg-pink-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">خلطات السدر للوجه</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">1. ماسك السدر للتنظيف العميق</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>2 ملعقة كبيرة سدر مطحون ناعم</li>
                      <li>ماء ورد طبيعي</li>
                      <li>ملعقة صغيرة عسل أبيض</li>
                      <li>قطرات زيت اللوز الحلو</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">طريقة الاستخدام:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي السدر مع ماء الورد</li>
                      <li>أضيفي العسل والزيت</li>
                      <li>طبقي على الوجه النظيف</li>
                      <li>اتركيه 15-20 دقيقة ثم اشطفي</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">2. ماسك السدر لتفتيح البشرة</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>3 ملاعق كبيرة سدر مطحون</li>
                      <li>ملعقة كبيرة لبن رائب</li>
                      <li>ملعقة صغيرة عصير ليمون</li>
                      <li>ملعقة صغيرة كركم</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">الفوائد:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>تفتيح البقع الداكنة</li>
                      <li>توحيد لون البشرة</li>
                      <li>إزالة خلايا الجلد الميتة</li>
                      <li>نعومة ونضارة فورية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">3. ماسك السدر للبشرة الحساسة</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>2 ملعقة كبيرة سدر مطحون</li>
                      <li>ملعقة كبيرة جل الصبار</li>
                      <li>ملعقة صغيرة زيت جوز الهند</li>
                      <li>ماء مقطر بارد</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">مناسب لـ:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>البشرة الحساسة والملتهبة</li>
                      <li>البشرة المتهيجة من الشمس</li>
                      <li>البشرة الجافة والمتشققة</li>
                      <li>البشرة المعرضة للحساسية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Body Care Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">السدر للعناية بالجسم</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">سكراب السدر للجسم</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>المكونات:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>4 ملاعق كبيرة سدر مطحون خشن</li>
                    <li>2 ملعقة كبيرة سكر بني</li>
                    <li>3 ملاعق كبيرة زيت زيتون</li>
                    <li>قطرات زيت اللافندر</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>الاستخدام:</strong> دلكي الجسم بحركات دائرية لطيفة ثم اشطفي بالماء الدافئ</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">غسول السدر للجسم</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>المكونات:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>5 ملاعق كبيرة سدر مطحون</li>
                    <li>كوبين ماء مغلي</li>
                    <li>ملعقة كبيرة جليسرين</li>
                    <li>زيت عطري حسب الرغبة</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>الاستخدام:</strong> انقعي السدر في الماء المغلي، صفي واستخدمي كغسول طبيعي</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skin Types Section */}
          <section className="mb-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">السدر حسب نوع البشرة</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">البشرة الدهنية</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• استخدمي السدر مع الطين الأخضر</li>
                  <li>• أضيفي عصير الليمون للتحكم في الدهون</li>
                  <li>• استخدمي 2-3 مرات أسبوعياً</li>
                  <li>• ركزي على منطقة T-Zone</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">البشرة الجافة</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• اخلطي السدر مع العسل والزيوت</li>
                  <li>• استخدمي الحليب بدلاً من الماء</li>
                  <li>• استخدمي مرة واحدة أسبوعياً</li>
                  <li>• رطبي البشرة بعد الاستخدام</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">البشرة المختلطة</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• استخدمي خلطات متوازنة</li>
                  <li>• ركزي على المناطق الدهنية</li>
                  <li>• استخدمي مرتين أسبوعياً</li>
                  <li>• اتبعي بمرطب خفيف</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">نصائح مهمة للعناية بالبشرة</h2>
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-pink-700 mb-4">✅ نصائح للاستخدام الأمثل</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>اختبري الخلطة على منطقة صغيرة أولاً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>استخدمي السدر الطبيعي الخالي من الإضافات</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>نظفي وجهك جيداً قبل التطبيق</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>استخدمي الماء الفاتر للشطف</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">❌ تجنبي هذه الأخطاء</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>ترك الماسك حتى يجف تماماً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>الفرك القوي عند الإزالة</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>استخدام السدر المعالج كيميائياً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>الإفراط في الاستخدام</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">احصلي على بشرة نضرة ومشرقة</h2>
            <p className="text-xl mb-8 text-pink-100">جربي منتجات السدر الطبيعية عالية الجودة من متجرنا</p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition-colors">
              تسوقي منتجات العناية بالبشرة
            </button>
          </section>
        </div>
      </div>
    </>
  );
};