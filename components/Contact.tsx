import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { SEO } from './SEO';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send form data usually goes here
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">شكراً لتواصلك!</h2>
        <p className="text-gray-600">تم استلام رسالتك بنجاح، سنقوم بالرد عليك في أقرب وقت.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-gold-600 hover:text-gold-700 font-medium underline"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <SEO 
        title="تواصل معنا - سدر الجوري"
        description="اتصلي بنا لطلبات الجملة أو الاستفسارات حول منتجات سدر الجوري للعناية الطبيعية."
        canonicalUrl="https://sidraljouri.com/contact"
      />
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">تواصل معنا</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            لديك استفسار عن طلب؟ أو ترغب في طلب كميات للجملة؟ نحن هنا لخدمتك.
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-right">الاسم الكامل</label>
              <div className="mt-1">
                <input type="text" name="name" id="name" required className="py-3 px-4 block w-full shadow-sm focus:ring-gold-500 focus:border-gold-500 border-gray-300 border rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right">البريد الإلكتروني</label>
              <div className="mt-1">
                <input type="email" name="email" id="email" required className="py-3 px-4 block w-full shadow-sm focus:ring-gold-500 focus:border-gold-500 border-gray-300 border rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-right">الرسالة</label>
              <div className="mt-1">
                <textarea id="message" name="message" rows={4} required className="py-3 px-4 block w-full shadow-sm focus:ring-gold-500 focus:border-gold-500 border border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500">
                إرسال
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center border-t border-gray-200 pt-10">
          <div className="flex flex-col items-center">
            <div className="p-3 bg-gold-100 rounded-full text-gold-600 mb-2">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900">اتصل بنا</h3>
            <p className="text-gray-500 dir-ltr text-sm">+966 50 123 4567</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="p-3 bg-gold-100 rounded-full text-gold-600 mb-2">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900">راسلنا</h3>
            <p className="text-gray-500 text-sm">sales@puresidr.com</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="p-3 bg-gold-100 rounded-full text-gold-600 mb-2">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-gray-900">زرنا</h3>
            <p className="text-gray-500 text-sm">طريق الملك فهد، الرياض</p>
          </div>
        </div>
      </div>
    </div>
  );
};