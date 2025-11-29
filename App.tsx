import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { AIExpert } from './components/AIExpert';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { SidrGeneral } from './components/SidrGeneral';
import { SidrHair } from './components/SidrHair';
import { SidrSkin } from './components/SidrSkin';
import { Contact } from './components/Contact';
import { Page } from './types';

// Helper to get title based on path
const getPageTitle = (path: string) => {
  if (path === '/') return 'سدر الجوري - الرئيسية';
  if (path === '/products') return 'المتجر - سدر الجوري';
  if (path === '/benefits') return 'مدونة الفوائد - سدر الجوري';
  if (path === '/benefits/general') return 'ماهو السدر؟ معلومات شاملة - سدر الجوري';
  if (path === '/benefits/hair') return 'السدر للشعر: الفوائد والخلطات - سدر الجوري';
  if (path === '/benefits/skin') return 'السدر للوجه والجسم: نضارة وصفاء - سدر الجوري';
  if (path === '/expert') return 'خبيرة الجمال - سدر الجوري';
  if (path === '/about') return 'قصتنا - سدر الجوري';
  if (path === '/contact') return 'تواصل معنا - سدر الجوري';
  return 'سدر الجوري - للعناية الطبيعية';
};

// Wrapper component to handle routing state within Layout
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState<Page>(Page.HOME);

  // Sync active page state and document title with current URL
  useEffect(() => {
    const path = location.pathname;
    
    // Update Title
    document.title = getPageTitle(path);

    if (path.startsWith('/benefits')) {
      setActivePage(Page.BENEFITS);
    } else {
      switch (path) {
        case '/':
          setActivePage(Page.HOME);
          break;
        case '/products':
          setActivePage(Page.PRODUCTS);
          break;
        case '/expert':
          setActivePage(Page.EXPERT);
          break;
        case '/about':
          setActivePage(Page.ABOUT);
          break;
        case '/contact':
          setActivePage(Page.CONTACT);
          break;
        default:
          setActivePage(Page.HOME);
      }
    }
  }, [location]);

  const handleNavigate = (page: Page) => {
    switch (page) {
      case Page.HOME:
        navigate('/');
        break;
      case Page.PRODUCTS:
        navigate('/products');
        break;
      case Page.BENEFITS:
        navigate('/benefits');
        break;
      case Page.EXPERT:
        navigate('/expert');
        break;
      case Page.ABOUT:
        navigate('/about');
        break;
      case Page.CONTACT:
        navigate('/contact');
        break;
    }
    window.scrollTo(0, 0);
  };

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate}>
      <Routes>
        <Route path="/" element={
          <>
            <Hero onCtaClick={() => handleNavigate(Page.PRODUCTS)} />
            <div className="py-12 bg-nature-50/50">
               <div className="max-w-7xl mx-auto px-4 text-center mb-8">
                 <h2 className="text-3xl font-bold text-gray-900">الأكثر طلباً</h2>
               </div>
               <ProductList />
               <div className="text-center pb-8 pt-4">
                 <button onClick={() => handleNavigate(Page.PRODUCTS)} className="text-nature-700 hover:text-nature-900 font-semibold underline text-lg">
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
                        onClick={() => handleNavigate(Page.EXPERT)}
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
        } />
        <Route path="/products" element={<ProductList />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/benefits/general" element={<SidrGeneral />} />
        <Route path="/benefits/hair" element={<SidrHair />} />
        <Route path="/benefits/skin" element={<SidrSkin />} />
        <Route path="/expert" element={<AIExpert />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;