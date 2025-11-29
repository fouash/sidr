import React from 'react';
import { Sparkles, Droplet, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SidrSkin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
       <div className="relative bg-orange-50 py-12 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">جمال طبيعي</span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2 sm:text-5xl">السدر للوجه والجسم</h1>
            <p className="mt-4 text-xl text-gray-600">سر النقاء والصفاء لبشرة مشرقة خالية من الشوائب.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 prose lg:prose-xl">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6">فوائد السدر للبشرة</h2>
        <p className="text-gray-700 leading-loose mb-8">
            لطالما استُخدم <strong>السدر للوجه</strong> في الطب العربي لتنقية البشرة وعلاج مشاكلها. يعمل السدر كمنظف عميق ومقشر طبيعي، حيث يساعد في:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
            <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                <Sun className="mx-auto text-orange-500 mb-2" />
                <h3 className="font-bold text-gray-900">توحيد اللون</h3>
                <p className="text-sm text-gray-500 mt-1">يساعد في إزالة التصبغات وآثار الشمس.</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                <Droplet className="mx-auto text-blue-500 mb-2" />
                <h3 className="font-bold text-gray-900">علاج حب الشباب</h3>
                <p className="text-sm text-gray-500 mt-1">يعقم البشرة ويجفف الحبوب بفضل خواصه المطهرة.</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                <Sparkles className="mx-auto text-nature-500 mb-2" />
                <h3 className="font-bold text-gray-900">شد البشرة</h3>
                <p className="text-sm text-gray-500 mt-1">يحارب التجاعيد ويعطي نضارة فورية.</p>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">ماسك السدر للوجه</h2>
        <p className="text-gray-700 leading-loose mb-4">
            للحصول على بشرة نضرة، جربي هذا الماسك البسيط:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 bg-orange-50 p-6 rounded-xl">
            <li>ملعقة كبيرة من <strong>بودرة السدر</strong>.</li>
            <li>ملعقة من الحليب البودرة (للتفتيح).</li>
            <li>ماء ورد للعجن.</li>
            <li className="mt-2 text-sm italic text-gray-600">اخلطي المكونات وضعيها على الوجه لمدة 15 دقيقة ثم اغسلي بماء فاتر.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">السدر للجسم (الاغتسال بالسدر)</h2>
        <p className="text-gray-700 leading-loose mb-6">
            <strong>الاغتسال بالسدر</strong> وتحديداً بـ <strong>ورق السدر الأخضر</strong> المطحون يعتبر من أفضل الطرق لتنظيف الجسم واسترخاء العضلات، كما يعتقد بفوائده في إزالة الطاقة السلبية والحسد في الطب الشعبي.
        </p>
        <p className="text-gray-700 leading-loose mb-6">
            يمكنك عمل مقشر للجسم بخلط السدر مع الملح الخشن وزيت الزيتون، وفرك الجسم به بحركات دائرية أثناء الاستحمام لإزالة الجلد الميت وتنعيم البشرة.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">الاستحمام بالسدر</h2>
        <p className="text-gray-700 leading-loose mb-8">
            يمكن إضافة 7 ورقات من السدر (يفضل طحنها بين حجرين كما في الأثر) إلى دلو ماء والاغتسال به لتعميم الفائدة على كامل الجسم والشعر.
        </p>

        <div className="text-center mt-12">
            <button 
                onClick={() => navigate('/products')} 
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors shadow-lg"
            >
                 اطلبي بودرة السدر ومقشر الجسم
            </button>
        </div>
      </div>
    </div>
  );
};