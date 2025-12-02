import React from 'react';
import { Hero } from './Hero';
import { ProductList } from './ProductList';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "سدر الجوري",
    "url": "https://sidraljouri.com",
    "description": "متجر سدر الجوري لمنتجات العناية الطبيعية. سدر عضوي، زيوت، وشامبو طبيعي للعناية بالشعر والبشرة.",
    "telephone": "+966501234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "طريق الملك فهد",
      "addressLocality": "الرياض",
      "addressCountry": "SA"
    }
  };

  return (
    <>
      <SEO 
        title="سدر الجوري - الرئيسية للعناية الطبيعية" 
        description="اكتشفي منتجات سدر الجوري الطبيعية للعناية بالشعر والبشرة. أجود أنواع السدر (Jujube)، زيوت طبيعية، وخلطات مضمونة للجمال."
        keywords="سدر, متجر سدر, عناية طبيعية, سدر الجوري, jujube shop, منتجات السدر"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/"
      />
      <Hero onCtaClick={() => navigate('/products')} />
      <div className="py-12 bg-nature-50/50">
          <div className="max-w-7xl mx-auto px-4 text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">الأكثر طلباً</h2>
          </div>
          <ProductList />
          <div className="text-center pb-8 pt-4">
            <button onClick={() => navigate('/products')} className="text-nature-700 hover:text-nature-900 font-semibold underline text-lg">
              تصفحي المتجر بالكامل
            </button>
          </div>
      </div>
      
      {/* Quick Links Section */}
      <div className="bg-gradient-to-br from-nature-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">اكتشفي عالم السدر</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              onClick={() => navigate('/sidr-hair')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border-t-4 border-nature-500"
            >
              <div className="text-nature-600 text-3xl mb-4">💇‍♀️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">السدر للشعر</h3>
              <p className="text-gray-600 text-sm">تقوية، تطويل، وعلاج التساقط</p>
            </div>
            
            <div 
              onClick={() => navigate('/sidr-skin')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border-t-4 border-pink-500"
            >
              <div className="text-pink-600 text-3xl mb-4">🌸</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">السدر للبشرة</h3>
              <p className="text-gray-600 text-sm">تنظيف، تفتيح، ونضارة طبيعية</p>
            </div>
            
            <div 
              onClick={() => navigate('/sidr-body')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border-t-4 border-green-500"
            >
              <div className="text-green-600 text-3xl mb-4">🛁</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">السدر للجسم</h3>
              <p className="text-gray-600 text-sm">استحمام منعش وعناية شاملة</p>
            </div>
            
            <div 
              onClick={() => navigate('/sidr-recipes')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border-t-4 border-amber-500"
            >
              <div className="text-amber-600 text-3xl mb-4">📜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">وصفات وخلطات</h3>
              <p className="text-gray-600 text-sm">وصفات مجربة وخلطات طبيعية</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Teaser Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-nature-600 rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">محتارة في طريقة الخلطة؟</span>
                  <span className="block text-nature-200">خبيرة الجمال هنا لمساعدتك.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-nature-100">
                  سواء كنتِ تبحثين عن طريقة عجن الحناء بالسدر، أو أفضل زيت لتطويل الشعر، مساعدنا الذكي يجيبك فوراً بأفضل النصائح.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/expert')}
                    className="bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-nature-600 hover:bg-nature-50"
                  >
                    اسألي الخبيرة الآن
                  </button>
                  <button
                    onClick={() => navigate('/sidr-guide')}
                    className="bg-nature-700 border border-nature-500 rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-nature-800"
                  >
                    دليل السدر الشامل
                  </button>
                </div>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 opacity-90"
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};