import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export const Blog: React.FC = () => {
  const articles = [
    {
      id: 'hair-growth',
      title: 'السدر لتطويل الشعر: الوصفة السحرية لنتائج سريعة',
      excerpt: 'تعرفي على أفضل خلطات السدر لتطويل الشعر وتكثيفه في وقت قياسي. نتائج مجربة ومضمونة.',
      image: '🌿',
      category: 'الشعر',
      link: '/blog/hair-growth'
    },
    {
      id: 'skin-acne',
      title: 'علاج حب الشباب بالسدر: الحل الطبيعي النهائي',
      excerpt: 'كيف يقضي السدر على حب الشباب وآثاره؟ دليل كامل للتخلص من مشاكل البشرة الدهنية.',
      image: '✨',
      category: 'البشرة',
      link: '/blog/skin-acne'
    },
    {
      id: 'body-whitening',
      title: 'خلطات السدر لتبييض الجسم وتوحيد اللون',
      excerpt: 'أقوى خلطات السدر لتفتيح المناطق الداكنة وتوحيد لون الجسم. بشرة ناصعة البياض بمكونات طبيعية.',
      image: '🛁',
      category: 'الجسم',
      link: '/blog/body-whitening'
    }
  ];

  return (
    <>
      <SEO 
        title="مدونة سدر الجوري - مقالات ونصائح عن السدر"
        description="اكتشفي أحدث المقالات والنصائح حول استخدام السدر للشعر والبشرة والجسم. وصفات حصرية ومعلومات قيمة."
        keywords="مدونة السدر, مقالات السدر, فوائد السدر, خلطات السدر, تجارب السدر"
        canonicalUrl="https://sidraljouri.com/blog"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="bg-nature-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">مدونة سدر الجوري</h1>
            <p className="text-xl text-nature-100">كل ما يهمك عن عالم السدر والجمال الطبيعي</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-nature-100 flex items-center justify-center text-6xl">
                  {article.image}
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-nature-600 mb-2 block">{article.category}</span>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    <Link to={article.link} className="hover:text-nature-600 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    to={article.link}
                    className="inline-block text-nature-600 font-semibold hover:text-nature-800"
                  >
                    اقرأ المزيد ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
