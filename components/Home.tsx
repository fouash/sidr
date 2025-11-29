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
                <button
                  onClick={() => navigate('/expert')}
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-nature-600 hover:bg-nature-50"
                >
                  اسألي الخبيرة الآن
                </button>
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