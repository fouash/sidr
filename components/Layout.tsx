import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Menu, X, ShoppingBag, User, Leaf } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes or screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { page: Page.HOME, label: 'الرئيسية' },
    { page: Page.PRODUCTS, label: 'المتجر' },
    { page: Page.BENEFITS, label: 'فوائد السدر' },
    { page: Page.EXPERT, label: 'خبيرة الجمال' },
    { page: Page.ABOUT, label: 'قصتنا' },
    { page: Page.CONTACT, label: 'تواصل معنا' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 bg-white">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => {
                onNavigate(Page.HOME);
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="bg-nature-600 p-2 rounded-full text-white ml-2 transition-transform group-hover:scale-110">
                <Leaf size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-nature-800">سدر الجوري</h1>
                <p className="text-xs text-nature-600 font-medium tracking-wider">SIDR AL JOURI</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 space-x-reverse">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activePage === item.page
                      ? 'text-nature-700 bg-nature-50'
                      : 'text-gray-600 hover:text-nature-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <button className="text-gray-500 hover:text-nature-600 transition-colors p-2 rounded-full hover:bg-gray-100">
                <ShoppingBag size={24} />
              </button>
              <button className="text-gray-500 hover:text-nature-600 transition-colors p-2 rounded-full hover:bg-gray-100">
                <User size={24} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
               <button className="text-gray-500 hover:text-nature-600 p-2 relative">
                <ShoppingBag size={24} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-nature-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Backdrop for Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Dropdown */}
        <div className={`
          absolute top-full left-0 w-full bg-white shadow-xl z-40 md:hidden transform transition-all duration-300 ease-in-out border-t border-gray-100 origin-top
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible pointer-events-none'}
        `}>
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center w-full text-right px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                  activePage === item.page
                    ? 'text-nature-700 bg-nature-50 border border-nature-100'
                    : 'text-gray-600 hover:text-nature-600 hover:bg-gray-50'
                }`}
              >
                {activePage === item.page && <Leaf size={16} className="ml-2 text-nature-600" />}
                {item.label}
              </button>
            ))}
             
             {/* Mobile Extra Actions */}
             <div className="pt-4 mt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-nature-600 transition-colors">
                    <div className="bg-gray-100 p-2 rounded-full mb-2">
                        <ShoppingBag size={20} />
                    </div>
                    <span className="text-sm font-medium">سلة المشتريات</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-nature-600 transition-colors">
                    <div className="bg-gray-100 p-2 rounded-full mb-2">
                        <User size={20} />
                    </div>
                    <span className="text-sm font-medium">حسابي</span>
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-nature-900 text-nature-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                 <div className="bg-nature-600 p-2 rounded-full text-white ml-2">
                    <Leaf size={20} />
                  </div>
                <h2 className="text-xl font-bold text-white">سدر الجوري</h2>
              </div>
              <p className="text-nature-200 max-w-sm text-sm leading-relaxed">
                وجهتكم الأولى لمنتجات العناية الطبيعية. نقدم لكم أجود أنواع السدر (بودرة، أوراق، وزيوت) للعناية بالشعر والبشرة، مستخلصة بعناية من أشجار السدر المباركة.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate(Page.PRODUCTS)} className="hover:text-white transition-colors">منتجاتنا</button></li>
                <li><button onClick={() => onNavigate(Page.BENEFITS)} className="hover:text-white transition-colors">فوائد السدر</button></li>
                <li><button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-white transition-colors">قصتنا</button></li>
                <li><button onClick={() => onNavigate(Page.EXPERT)} className="hover:text-white transition-colors">خبيرة الجمال</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-sm text-nature-200">
                <li>الرياض، المملكة العربية السعودية</li>
                <li>info@sidraljouri.com</li>
                <li dir="ltr">+966 50 123 4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-nature-800 mt-8 pt-8 text-center text-sm text-nature-400">
            &copy; {new Date().getFullYear()} سدر الجوري. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};