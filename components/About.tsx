import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="relative bg-nature-900 py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&q=80"
            alt="Sidr Tree background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">قصتنا</h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-nature-200">
            من أغصان شجرة السدر المباركة، نستخلص لكم أسرار الجمال العربي القديم.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">البداية</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              بدأت رحلة "السدر النقي" من إيمان عميق بكنوز الطبيعة التي وهبنا الله إياها. لاحظنا كيف اعتمدت جداتنا على أوراق السدر المطحونة للحفاظ على جمال شعرهن وصفاء بشرتهن قبل انتشار المستحضرات الكيميائية.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              قررنا إحياء هذا التراث الجميل وتقديمه بشكل عصري ومضمون. نقوم بجمع أوراق السدر البري في مواسم محددة، وتجفيفها في الظل للحفاظ على زيوتها الطيارة وفعاليتها، ثم طحنها وتنقيتها بأحدث التقنيات لضمان منتج نقي 100%.
            </p>
            <div className="border-r-4 border-nature-500 pr-6 my-8">
              <p className="text-xl font-medium text-gray-800 italic">
                "نحن لا نبيع مجرد منتجات، بل نعيد إحياء تقاليد جمالية أصيلة وصحية."
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-nature-200 rounded-2xl transform rotate-3"></div>
            <img
              className="relative rounded-2xl shadow-lg w-full"
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b1d?auto=format&fit=crop&q=80&w=800"
              alt="Sidr Tree"
            />
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-nature-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-nature-800 mb-3">النقاء</h3>
              <p className="text-gray-600">منتجاتنا خالية تماماً من أي إضافات كيميائية أو عطور صناعية.</p>
            </div>
            <div className="bg-nature-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-nature-800 mb-3">الجودة</h3>
              <p className="text-gray-600">نختار الأوراق الخضراء النضرة فقط، ونستبعد الأوراق الصفراء والشوائب.</p>
            </div>
            <div className="bg-nature-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-nature-800 mb-3">البيئة</h3>
              <p className="text-gray-600">نتبع طرق حصاد مستدامة لا تضر بالأشجار ونستخدم عبوات صديقة للبيئة.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};