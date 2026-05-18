import { useEffect, useRef, useState } from 'react';
import { restaurantImages, foodImages, FALLBACK_IMAGE } from '../data/hotelData.js';

const menuHighlights = [
  { category: 'Breakfast', icon: '🌅', items: ['Idli Sambar', 'Poha', 'Aloo Paratha', 'Continental', 'Fresh Juices', 'South Indian Platter'] },
  { category: 'Lunch', icon: '☀️', items: ['Dal Makhani', 'Paneer Butter Masala', 'Biryani', 'Naan Bread', 'Live Counter', 'Salad Bar'] },
  { category: 'Dinner', icon: '🌙', items: ['Butter Chicken', 'Mutton Rogan Josh', 'Seafood Special', 'Chinese', 'Tandoor Section', 'Dessert Buffet'] },
  { category: 'Beverages', icon: '☕', items: ['Masala Chai', 'Fresh Lime', 'Lassi', 'Mocktails', 'Smoothies', 'Specialty Coffee'] },
];

export default function RestaurantSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale')
              .forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImgError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="restaurant" ref={sectionRef} className="section-pad bg-[#080808] relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="section-badge justify-center">Fine Dining</div>
          <h2 className="section-title text-white mb-4">
            A Culinary <span className="text-gold-gradient">Journey</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            Our multi-cuisine restaurant is a gastronomic haven where authentic Indian flavors 
            meet international culinary artistry. Every dish is a work of art.
          </p>
        </div>

        {/* Main Restaurant Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative reveal-left">
            <div className="relative overflow-hidden" style={{ height: '500px' }}>
              <img
                src={imgErrors['res-main'] ? FALLBACK_IMAGE : restaurantImages[0]?.url}
                alt={restaurantImages[0]?.alt || 'Hotel restaurant interior'}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={() => handleImgError('res-main')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Open Daily</div>
                <div className="font-serif text-2xl font-bold">7 AM – 11 PM</div>
              </div>
            </div>
            {/* Small image overlay */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 overflow-hidden border-4 border-[#0a0a0a] shadow-2xl">
              <img
                src={imgErrors['res-small'] ? FALLBACK_IMAGE : foodImages[0]?.url}
                alt="Signature dish"
                loading="lazy"
                className="w-full h-full object-cover"
                onError={() => handleImgError('res-small')}
              />
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="reveal-right">
            <h3 className="font-serif text-white text-3xl font-bold mb-4">
              Akosha Kitchen & <span className="text-[#C9A84C]">Bar</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Step into a world where culinary excellence meets elegant ambiance. 
              Our expert chefs source the finest ingredients to create dishes that 
              tantalize your taste buds and warm your soul.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🍴', label: 'Cuisines', val: 'Indian + International' },
                { icon: '👨‍🍳', label: 'Expert Chefs', val: '8+ Specialists' },
                { icon: '🪑', label: 'Seating', val: '120 Covers' },
                { icon: '🕐', label: 'Hours', val: '7 AM – 11 PM' },
              ].map(item => (
                <div key={item.label} className="p-4 bg-white/3 border border-[#C9A84C]/10">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="text-white/40 text-xs mt-2 uppercase tracking-wider">{item.label}</div>
                  <div className="text-white text-sm font-semibold mt-1">{item.val}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold"
            >
              Reserve a Table ›
            </button>
          </div>
        </div>

        {/* Menu Highlights */}
        <div className="reveal-up">
          <h3 className="text-center font-serif text-white text-2xl mb-8">
            Our <span className="text-gold-gradient">Menu Highlights</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {menuHighlights.map((m, i) => (
              <button
                key={m.category}
                onClick={() => setActiveMenu(i)}
                className={`flex items-center gap-2 px-6 py-3 transition-all duration-300 ${activeMenu === i ? 'bg-[#C9A84C] text-black font-bold' : 'border border-[#C9A84C]/30 text-white/60 hover:text-[#C9A84C]'}`}
              >
                <span>{m.icon}</span>
                {m.category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {menuHighlights[activeMenu].items.map((item, i) => (
              <div
                key={item}
                className="text-center p-4 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 reveal-up"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="text-[#C9A84C] text-2xl mb-2">{menuHighlights[activeMenu].icon}</div>
                <div className="text-white text-sm">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Food Gallery Row */}
        <div className="mt-16 reveal-up">
          <h3 className="text-center font-serif text-white text-2xl mb-8">
            From Our <span className="text-gold-gradient">Kitchen</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {foodImages.slice(0, 4).map((food, i) => (
              <div key={food.id} className="relative overflow-hidden group h-48 reveal-scale" style={{ transitionDelay: `${i * 0.1}s` }}>
                <img
                  src={imgErrors[food.id] ? FALLBACK_IMAGE : food.url}
                  alt={food.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => handleImgError(food.id)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white text-sm font-semibold">{food.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
