import React from 'react';
import { SEO } from './SEO';

export const SidrHairPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "السدر للشعر - فوائد وطرق الاستخدام",
    "description": "دليل شامل لاستخدام السدر للشعر، فوائده، طرق التحضير، والخلطات الطبيعية لتقوية وتطويل الشعر",
    "author": {
      "@type": "Organization",
      "name": "سدر الجوري"
    }
  };

  return (
    <>
      <SEO 
        title="السدر للشعر - فوائد وطرق الاستخدام | سدر الجوري"
        description="اكتشفي فوائد السدر للشعر المذهلة. طرق استخدام السدر لتطويل الشعر، علاج التساقط، والحصول على شعر صحي ولامع طبيعياً."
        keywords="السدر للشعر, سدر للشعر, فوائد السدر للشعر, السدر لتطويل الشعر, السدر لتساقط الشعر, خلطات السدر للشعر, السدر الطبيعي للشعر"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/sidr-hair"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-nature-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-nature-600 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">السدر للشعر</h1>
            <p className="text-xl text-nature-100 max-w-3xl mx-auto">
              اكتشفي سر الجمال الطبيعي مع السدر - الحل الأمثل لشعر صحي وقوي ولامع
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">فوائد السدر للشعر</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-nature-500">
                <div className="text-nature-600 text-3xl mb-4">🌿</div>
                <h3 className="text-xl font-bold mb-3">تقوية الشعر</h3>
                <p className="text-gray-600">السدر غني بالفيتامينات والمعادن التي تقوي بصيلات الشعر وتمنع التكسر والتساقط</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-nature-500">
                <div className="text-nature-600 text-3xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3">لمعان طبيعي</h3>
                <p className="text-gray-600">يمنح السدر الشعر لمعاناً طبيعياً ونعومة فائقة دون استخدام مواد كيميائية ضارة</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-nature-500">
                <div className="text-nature-600 text-3xl mb-4">📏</div>
                <h3 className="text-xl font-bold mb-3">تطويل الشعر</h3>
                <p className="text-gray-600">يحفز السدر الدورة الدموية في فروة الرأس مما يساعد على نمو الشعر بشكل أسرع</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-nature-500">
                <div className="text-nature-600 text-3xl mb-4">🧴</div>
                <h3 className="text-xl font-bold mb-3">تنظيف عميق</h3>
                <p className="text-gray-600">ينظف السدر الشعر وفروة الرأس بعمق ويزيل الدهون الزائدة والشوائب</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-nature-500">
                <div className="text-nature-600 text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-3">علاج القشرة</h3>
                <p className="text-gray-600">خصائص السدر المضادة للفطريات تساعد في علاج قشرة الشعر والحكة</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-nature-500">
                <div className="text-nature-600 text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-3">حماية من التلف</h3>
                <p className="text-gray-600">يحمي السدر الشعر من العوامل البيئية الضارة والتلوث والأشعة فوق البنفسجية</p>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="mb-16 bg-nature-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">طرق استخدام السدر للشعر</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-nature-700 mb-4">1. ماسك السدر الأساسي</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>3 ملاعق كبيرة من مسحوق السدر</li>
                      <li>ماء دافئ حسب الحاجة</li>
                      <li>ملعقة كبيرة زيت زيتون (اختياري)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">طريقة التحضير:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>اخلطي السدر مع الماء الدافئ</li>
                      <li>أضيفي الزيت واخلطي جيداً</li>
                      <li>اتركي الخليط 15 دقيقة</li>
                      <li>طبقي على الشعر واتركيه 30 دقيقة</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-nature-700 mb-4">2. خلطة السدر والحناء</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>2 ملعقة كبيرة سدر مطحون</li>
                      <li>2 ملعقة كبيرة حناء طبيعية</li>
                      <li>ماء دافئ أو شاي أسود</li>
                      <li>ملعقة صغيرة زيت جوز الهند</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">الفوائد:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>تقوية الشعر وتكثيفه</li>
                      <li>إضافة لون طبيعي جميل</li>
                      <li>علاج تساقط الشعر</li>
                      <li>نعومة ولمعان فائق</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-nature-700 mb-4">3. شامبو السدر الطبيعي</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">المكونات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>4 ملاعق كبيرة سدر مطحون</li>
                      <li>كوب ماء مغلي</li>
                      <li>ملعقة صغيرة عسل طبيعي</li>
                      <li>قطرات زيت اللافندر</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">طريقة الاستخدام:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>انقعي السدر في الماء المغلي</li>
                      <li>اتركيه ينقع لمدة ساعة</li>
                      <li>صفي الخليط وأضيفي العسل</li>
                      <li>استخدميه كشامبو طبيعي</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">نصائح مهمة لاستخدام السدر</h2>
            <div className="bg-gradient-to-r from-nature-100 to-nature-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-nature-700 mb-4">✅ افعلي</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>استخدمي السدر الطبيعي 100%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>اتركي الخليط ينقع قبل الاستخدام</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>طبقي على شعر رطب قليلاً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>دلكي فروة الرأس بلطف</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">❌ تجنبي</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>استخدام السدر المخلوط بمواد كيميائية</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>ترك الخليط أكثر من ساعة على الشعر</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>الفرك القوي لفروة الرأس</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>استخدام الماء الساخن جداً</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">أسئلة شائعة حول السدر للشعر</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">كم مرة يجب استخدام السدر للشعر؟</h3>
                <p className="text-gray-600">يُنصح باستخدام السدر مرة إلى مرتين أسبوعياً للحصول على أفضل النتائج دون إجهاد الشعر.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">هل السدر مناسب لجميع أنواع الشعر؟</h3>
                <p className="text-gray-600">نعم، السدر مناسب لجميع أنواع الشعر، لكن الشعر الدهني قد يحتاج استخدام أكثر من الشعر الجاف.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">متى تظهر نتائج السدر على الشعر؟</h3>
                <p className="text-gray-600">تبدأ النتائج في الظهور بعد 2-4 أسابيع من الاستخدام المنتظم، مع تحسن ملحوظ في قوة ولمعان الشعر.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-nature-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">جربي منتجات السدر الطبيعية الآن</h2>
            <p className="text-xl mb-8 text-nature-100">احصلي على أجود أنواع السدر الطبيعي 100% من متجرنا</p>
            <button className="bg-white text-nature-600 px-8 py-3 rounded-lg font-bold hover:bg-nature-50 transition-colors">
              تسوقي الآن
            </button>
          </section>
        </div>
      </div>
    </>
  );
};