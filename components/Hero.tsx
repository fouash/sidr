import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Star, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        // Apply parallax effect: move image down slower than scroll speed
        imageRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-nature-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-nature-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">سر الطبيعة</span>{' '}
                <span className="block text-nature-600 xl:inline">لجمال شعرك وبشرتك</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                اكتشفي قوة السدر الطبيعي. منتجات عضوية 100% من أوراق شجرة السدر المباركة، تمنحك شعراً كثيفاً وبشرة مشرقة بلمسة تراثية أصيلة.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={onCtaClick}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-nature-600 hover:bg-nature-700 md:py-4 md:text-lg transition-all"
                  >
                    تسوقي الآن
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:mr-3">
                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-nature-700 bg-nature-100 hover:bg-nature-200 md:py-4 md:text-lg transition-all"
                  >
                    اكتشفي الفوائد
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Decorative Image Side */}
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 overflow-hidden">
        <img
          ref={imageRef}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90 will-change-transform"
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="أوراق السدر والعناية الطبيعية"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nature-50 to-transparent lg:via-nature-50/20"></div>
      </div>

      {/* Features strip */}
      <div className="relative bg-white py-8 shadow-sm border-b border-nature-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                      <div className="p-3 bg-nature-100 rounded-full mb-3 text-nature-600">
                          <ShieldCheck size={28} />
                      </div>
                      <h3 className="font-bold text-gray-800">عضوي 100%</h3>
                      <p className="text-sm text-gray-500">خالي من المواد الكيميائية والمواد الحافظة</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="p-3 bg-nature-100 rounded-full mb-3 text-nature-600">
                          <Star size={28} />
                      </div>
                      <h3 className="font-bold text-gray-800">جودة فاخرة</h3>
                      <p className="text-sm text-gray-500">من أجود مزارع السدر، منقى ومطحون بعناية</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="p-3 bg-nature-100 rounded-full mb-3 text-nature-600">
                          <Sparkles size={28} />
                      </div>
                      <h3 className="font-bold text-gray-800">نتائج مضمونة</h3>
                      <p className="text-sm text-gray-500">وصفات مجربة لتعزيز صحة الشعر والبشرة</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
