import React from 'react';
import { Leaf, Sparkles, TreeDeciduous, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const Benefits: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <SEO 
        title="مدونة فوائد السدر - سدر الجوري"
        description="دليلك الشامل لفوائد شجرة السدر (النبق). مقالات مفصلة عن استخدام السدر للشعر، البشرة، وطرق الاستخدام التقليدية والحديثة."
        keywords="مدونة السدر, فوائد النبق, معلومات عن السدر, jujube benefits, Sidr blog"
        canonicalUrl="https://sidraljouri.com/benefits"
      />
      {/* Hero for Benefits */}
      <div className="relative bg-nature-900 py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
             <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b1d?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="شجرة السدر" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">مدونة سدر الجوري</h1>
            <p className="mt-4 text-xl text-green-100 max-w-2xl mx-auto">دليلك الشامل لفوائد شجرة السدر، العناية بالشعر، والجمال الطبيعي</p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: The Tree */}
            <div className="bg-white rounded-2xl shadow-lg border border-nature-100 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col" onClick={() => navigate('/benefits/general')}>
                <div className="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&q=80" alt="شجرة السدر" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-3">
                        <TreeDeciduous className="text-nature-600 ml-2" />
                        <h3 className="text-xl font-bold text-gray-900">شجرة السدر (النبق)</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">تعرفي على شجرة السدر المباركة، تاريخها، وأنواعها المختلفة.</p>
                    <span className="text-nature-600 font-bold flex items-center mt-auto">
                        اقرأ المزيد <ArrowLeft size={16} className="mr-2" />
                    </span>
                </div>
            </div>

            {/* Card 2: Hair Care */}
            <div className="bg-white rounded-2xl shadow-lg border border-nature-100 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col" onClick={() => navigate('/benefits/hair')}>
                <div className="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1595156829732-4d6d67425178?auto=format&fit=crop&q=80" alt="السدر للشعر" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-3">
                        <Leaf className="text-nature-600 ml-2" />
                        <h3 className="text-xl font-bold text-gray-900">السدر للشعر</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">أفضل الخلطات والزيوت لتكثيف الشعر، علاج القشرة، واستخدام الشامبو الطبيعي.</p>
                    <span className="text-nature-600 font-bold flex items-center mt-auto">
                        اقرأ المزيد <ArrowLeft size={16} className="mr-2" />
                    </span>
                </div>
            </div>

            {/* Card 3: Skin Care */}
            <div className="bg-white rounded-2xl shadow-lg border border-nature-100 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col" onClick={() => navigate('/benefits/skin')}>
                <div className="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80" alt="السدر للبشرة" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-3">
                        <Sparkles className="text-nature-600 ml-2" />
                        <h3 className="text-xl font-bold text-gray-900">السدر للوجه والجسم</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">فوائد الاغتسال بالسدر، ماسكات الوجه، وتقشير الجسم لنعومة فائقة.</p>
                    <span className="text-nature-600 font-bold flex items-center mt-auto">
                        اقرأ المزيد <ArrowLeft size={16} className="mr-2" />
                    </span>
                </div>
            </div>

        </div>
      </div>
      
      {/* Quick Summary Section */}
      <div className="bg-nature-50 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-nature-800 mb-4">لماذا السدر؟</h2>
              <p className="text-gray-700 leading-relaxed">
                  السدر ليس مجرد نبات، بل هو صيدلية طبيعية متكاملة. سواء كنتِ تبحثين عن <strong>علاج لتساقط الشعر</strong>، أو ترغبين في <strong>بشرة صافية</strong>، فإن منتجات السدر الطبيعية (ورق، بودرة، زيت) هي الخيار الأمثل والآمن بعيداً عن المواد الكيميائية.
              </p>
          </div>
      </div>
    </div>
  );
};