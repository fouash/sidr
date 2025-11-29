import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, ShoppingBag, User, Leaf } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => onNavigate(Page.HOME)}
            >
              <div className="bg-nature-600 p-2 rounded-full text-white ml-2">
                <Leaf size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-nature-800">السدر النقي</h1>
                <p className="text-xs text-nature-600 font-medium tracking-wider">PURE SIDR</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 space-x-reverse">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activePage === item.page
                      ? 'text-nature-700 bg-nature-50'
                      : 'text-gray-600 hover:text-nature-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <button className="text-gray-500 hover:text-nature-600">
                <ShoppingBag size={24} />
              </button>
              <button className="text-gray-500 hover:text-nature-600">
                <User size={24} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-nature-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-right px-3 py-2 rounded-md text-base font-medium ${
                    activePage === item.page
                      ? 'text-nature-700 bg-nature-50'
                      : 'text-gray-600 hover:text-nature-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
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
                <h2 className="text-xl font-bold text-white">السدر النقي</h2>
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
                <li>info@puresidr.com</li>
                <li dir="ltr">+966 50 123 4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-nature-800 mt-8 pt-8 text-center text-sm text-nature-400">
            &copy; {new Date().getFullYear()} السدر النقي. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};