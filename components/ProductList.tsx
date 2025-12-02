import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { SEO } from './SEO';

const products: Product[] = [
  {
    id: 4,
    name: "بودرة السدر (للشعر والجسم)",
    weight: "250 جرام",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=600",
    description: "سدر مطحون ناعم جداً ومنقى من الشوائب. مثالي لماسكات الشعر والوجه.",
    features: ["طبيعي 100%", "طحن ناعم", "خالي من الأتربة"]
  },
  {
    id: 5,
    name: "ورق سدر مجفف فاخر",
    weight: "200 جرام",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5a?auto=format&fit=crop&q=80&w=600",
    description: "أوراق سدر خضراء مجففة بعناية في الظل للحفاظ على خواصها. تستخدم للمنقوع والاغتسال.",
    features: ["قطفة أولى", "تجفيف طبيعي", "نظيف ومنقى"]
  },
  {
    id: 6,
    name: "زيت السدر المركز",
    weight: "120 مل",
    image: "https://images.unsplash.com/photo-1599447421405-0c307838241f?auto=format&fit=crop&q=80&w=600",
    description: "زيت سدر طبيعي معصور على البارد. يغذي فروة الرأس ويحفز نمو الشعر.",
    features: ["معصور على البارد", "مركز", "سريع الامتصاص"]
  },
  {
    id: 7,
    name: "شامبو السدر الطبيعي",
    weight: "400 مل",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600",
    description: "شامبو بخلاصة السدر والأعشاب، خالي من السلفات والبارابين.",
    features: ["خالي من السلفات", "رغوة غنية", "لطيف على الشعر"]
  },
  {
    id: 8,
    name: "باقة العناية المتكاملة",
    weight: "مجموعة",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
    description: "تحتوي على بودرة السدر، زيت السدر، وشامبو السدر بسعر توفيري.",
    features: ["توفير 15%", "روتين كامل", "هدية مثالية"]
  },
  {
    id: 9,
    name: "مقشر السدر للجسم",
    weight: "300 جرام",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80&w=600",
    description: "مقشر طبيعي بالسدر والملح البحري والزيوت العطرية لنعومة فائقة.",
    features: ["تقشير وتفتيح", "رائحة منعشة", "ترطيب عميق"]
  }
];

export const ProductList: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "description": product.description,
      "image": product.image,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <div className="bg-white py-12">
      <SEO
        title="متجر منتجات السدر - سدر الجوري"
        description="تسوقي أفضل منتجات السدر: بودرة سدر، ورق سدر، زيت السدر، شامبو طبيعي. منتجات عضوية 100% للعناية بجمالك."
        keywords="شراء سدر, سدر مطحون, زيت السدر للشعر, شامبو سدر, متجر سدر"
        schema={schema}
        canonicalUrl="https://sidraljouri.com/products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-nature-600 font-semibold tracking-wide uppercase">متجرنا</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            منتجات السدر الطبيعية
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            مجموعة مختارة من أجود منتجات السدر للعناية بجمالك وصحتك، من الطبيعة إليكِ مباشرة.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 xl:aspect-w-7 xl:aspect-h-8 relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {product.weight}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">{product.description}</p>

                <ul className="text-xs text-gray-400 mb-4 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-nature-400 rounded-full ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-end mt-auto pt-4 border-t border-gray-100">
                  <button className="relative z-10 bg-gray-900 text-white p-2 rounded-lg hover:bg-nature-600 transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};