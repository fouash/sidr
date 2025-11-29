import React from 'react';
import { TreeDeciduous, Info, MapPin } from 'lucide-react';

export const SidrGeneral: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-nature-50 py-12 border-b border-nature-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-nature-600 font-semibold tracking-wide uppercase text-sm">معلومات عامة</span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2 sm:text-5xl">ماهو السدر (النبق)؟</h1>
            <p className="mt-4 text-xl text-gray-600">كل ما تحتاجين معرفته عن شجرة السدر المباركة وفوائدها التاريخية.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 prose lg:prose-xl prose-nature">
        
        <div className="flex items-start mb-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <Info className="text-blue-500 ml-4 flex-shrink-0 mt-1" />
            <div>
                <h3 className="text-blue-800 font-bold text-lg m-0">هل تعلم؟</h3>
                <p className="text-blue-700 text-sm mt-1 m-0">
                    السدر يُعرف أيضاً باسم "النبق"، وهو الثمر الذي تنتجه الشجرة. وقد ورد ذكر السدر في القرآن الكريم 4 مرات، مما يدل على فضله وبركته.
                </p>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">شجرة السدر (Ziziphus)</h2>
        <p className="text-gray-700 leading-loose mb-6">
            <strong>شجرة السدر</strong> هي شجرة كثيفة الأوراق، تنتمي للفصيلة العنابية. تتميز بتحملها للظروف الصحراوية القاسية، وتنتشر في الجزيرة العربية. 
            تعتبر السدرة كنزاً طبيعياً، حيث يُستفاد من أوراقها، ثمارها (النبق)، وحتى خشبها.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">أنواع السدر</h2>
        <p className="text-gray-700 leading-loose mb-6">
            يوجد عدة أنواع من السدر، منها السدر البري الذي يتميز بأشواكه الكثيفة وأوراقه الصغيرة الغنية بالمواد الفعالة، والسدر البستاني (بدون شوك) الذي يزرع للزينة وللثمار.
            في "السدر النقي"، نحن نستخدم <strong>السدر البري</strong> لمنتجات العناية نظراً لتركيز الفوائد في أوراقه.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">النبق (ثمار السدر)</h2>
        <p className="text-gray-700 leading-loose mb-6">
            النبق هو ثمرة شجرة السدر، وهي ثمرة حلوة المذاق ولها قيمة غذائية عالية. قديماً كان يتم تجفيف النبق وطحنه لاستخدامه كغذاء. أما في مجال التجميل، فالتركيز الأكبر يكون على <strong>أوراق السدر</strong> لاحتوائها على مواد مطهرة ومنظفة (Saponins).
        </p>

        <div className="my-10">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b1d?auto=format&fit=crop&q=80&w=1000" alt="شجرة سدر قديمة" className="rounded-xl shadow-lg w-full" />
            <p className="text-center text-sm text-gray-500 mt-2">شجرة سدر معمرة في بيئة صحراوية</p>
        </div>
      </div>
    </div>
  );
};