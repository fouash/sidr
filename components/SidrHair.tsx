import React from 'react';
import { Leaf, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const SidrHair: React.FC = () => {
  const navigate = useNavigate();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "السدر للشعر: خلطات، زيوت، وفوائد شاملة",
    "image": "https://images.unsplash.com/photo-1595156829732-4d6d67425178?auto=format&fit=crop&q=80",
    "author": "سدر الجوري",
    "publisher": {
      "@type": "Organization",
      "name": "سدر الجوري"
    },
    "description": "ملف كامل عن السدر للشعر: طريقة عمل ماسك السدر، مدة وضعه، فوائده للتكثيف والتطويل، وعلاج القشرة."
  };

  return (
    <div className="bg-white">
      <SEO 
        title="السدر للشعر: خلطات، زيوت، وفوائد - سدر الجوري"
        description="ملف كامل عن السدر للشعر: طريقة عمل ماسك السدر، مدة وضعه، فوائده للتكثيف والتطويل، وعلاج القشرة. تخلصي من التساقط بطرق طبيعية."
        keywords="السدر للشعر, خلطة السدر, ماسك السدر, زيت السدر, كم مدة السدر, شامبو السدر, سدر للتكثيف"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/benefits/hair"
      />
      <div className="bg-nature-600 py-12 border-b border-nature-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <span className="bg-nature-500 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">العناية بالشعر</span>
            <h1 className="text-4xl font-extrabold mt-4 sm:text-5xl">السدر للشعر: دليلك الشامل</h1>
            <p className="mt-4 text-xl text-nature-100">اكتشفي أسرار السدر لتطويل، تكثيف، وعلاج الشعر التالف.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 prose lg:prose-xl">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6">لماذا السدر للشعر؟</h2>
        <p className="text-gray-700 leading-loose mb-6">
            يعتبر <strong>السدر للشعر</strong> بديلاً طبيعياً وقوياً للشامبوهات الكيميائية. تحتوي أوراق السدر على مادة "الصاربونين" التي تنظف فروة الرأس وتزيل الدهون والقشرة دون أن تسبب الجفاف الذي تسببه المواد الكيميائية. بالإضافة إلى ذلك، يعمل السدر على تغذية البصيلات وتقويتها.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-nature-700">فوائد السدر للشعر</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle size={16} className="text-nature-500 ml-2" /> يوقف التساقط ويعزز الكثافة.</li>
                    <li className="flex items-center"><CheckCircle size={16} className="text-nature-500 ml-2" /> يقضي على القشرة والحكة.</li>
                    <li className="flex items-center"><CheckCircle size={16} className="text-nature-500 ml-2" /> يعطي الشعر لمعاناً وحيوية.</li>
                    <li className="flex items-center"><CheckCircle size={16} className="text-nature-500 ml-2" /> ينظم إفرازات الدهون.</li>
                </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                 <h3 className="font-bold text-lg mb-2 text-nature-700">أشكال السدر</h3>
                 <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><span className="font-bold ml-1">سدر مطحون:</span> للماسكات والعجين.</li>
                    <li className="flex items-center"><span className="font-bold ml-1">ورق سدر:</span> للمنقوع والشطف.</li>
                    <li className="flex items-center"><span className="font-bold ml-1">زيت السدر:</span> للترطيب العميق.</li>
                    <li className="flex items-center"><span className="font-bold ml-1">شامبو السدر:</span> للاستخدام اليومي.</li>
                </ul>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">أشهر خلطات السدر للشعر</h2>
        
        <div className="bg-nature-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-nature-800 mb-2">1. خلطة السدر للتكثيف (ماسك السدر)</h3>
            <p className="mb-2"><strong>المكونات:</strong> 3 ملاعق سدر مطحون + كوب زبادي + ملعقة زيت زيتون.</p>
            <p><strong>الطريقة:</strong> اخلطي المكونات حتى تحصلي على قوام متماسك. ضعي الخليط على الشعر من الجذور للأطراف.</p>
        </div>

        <div className="bg-nature-50 p-6 rounded-xl mb-8">
             <h3 className="text-xl font-bold text-nature-800 mb-2">2. مغلي ورق السدر (تونر)</h3>
             <p className="mb-2"><strong>المكونات:</strong> حفنة من ورق السدر الأخضر أو المجفف + لتر ماء.</p>
             <p><strong>الطريقة:</strong> اغلي الورق في الماء لمدة 10 دقائق، صفيه واتركيه يبرد. استخدميه كآخر شطفة للشعر بعد الاستحمام.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="ml-2 text-nature-600" />
            كم مدة السدر على الشعر؟
        </h2>
        <p className="text-gray-700 leading-loose mb-6">
            تختلف <strong>مدة السدر على الشعر</strong> حسب الغرض:
            <br />- <strong>للغسيل والتنظيف:</strong> يكفي 5-10 دقائق (مثل الشامبو).
            <br />- <strong>كقناع علاجي (ماسك):</strong> ينصح بتركه من 2 إلى 4 ساعات للحصول على أقصى فائدة. لا ينصح بتركه أكثر من ذلك لتجنب جفاف الأطراف.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">نصائح مهمة</h2>
        <p className="text-gray-700 leading-loose mb-8">
            عند استخدام <strong>السدر المطحون</strong>، تأكدي من نخله جيداً لإزالة الشوائب التي قد تعلق بالشعر. للحصول على أفضل النتائج، رطبي شعرك بـ <strong>زيت السدر</strong> بعد غسل الماسك، لأن السدر قد يسبب جفافاً بسيطاً للشعر الجاف بطبيعته.
        </p>

        <div className="text-center mt-12">
            <button 
                onClick={() => navigate('/products')} 
                className="bg-nature-600 text-white px-8 py-4 rounded-full font-bold hover:bg-nature-700 transition-colors shadow-lg"
            >
                تسوقي منتجات السدر للشعر الآن
            </button>
        </div>
      </div>
    </div>
  );
};