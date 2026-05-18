import { useEffect, useRef } from 'react';
import { hotelInfo, exteriorImages, FALLBACK_IMAGE } from '../data/hotelData.js';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const features = [
    { icon: '🏨', title: '5 Floors of Luxury', desc: '56+ premium rooms across 5 floors with panoramic views' },
    { icon: '🍽️', title: 'Multi-Cuisine Restaurant', desc: 'Authentic Indian and international cuisine crafted by expert chefs' },
    { icon: '💒', title: 'Grand Banquet Hall', desc: 'Capacity for 500+ guests for weddings and corporate events' },
    { icon: '🌿', title: 'Lush Lawn & Garden', desc: 'Beautiful outdoor spaces for lawn parties and celebrations' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-pad bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A84C]/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Images */}
          <div className="relative reveal-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-72 overflow-hidden card-3d">
                  <img
                    src={exteriorImages[0]?.url || FALLBACK_IMAGE}
                    alt={exteriorImages[0]?.alt || 'Hotel exterior'}
                    loading="lazy"
                    className="w-full h-full object-cover parallax-img"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                  />
                </div>
                <div className="h-48 overflow-hidden card-3d">
                  <img
                    src={exteriorImages[4]?.url || FALLBACK_IMAGE}
                    alt={exteriorImages[4]?.alt || 'Hotel lawn'}
                    loading="lazy"
                    className="w-full h-full object-cover parallax-img"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-48 overflow-hidden card-3d">
                  <img
                    src={exteriorImages[1]?.url || FALLBACK_IMAGE}
                    alt={exteriorImages[1]?.alt || 'Hotel night view'}
                    loading="lazy"
                    className="w-full h-full object-cover parallax-img"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                  />
                </div>
                <div className="h-72 overflow-hidden card-3d">
                  <img
                    src={exteriorImages[2]?.url || FALLBACK_IMAGE}
                    alt={exteriorImages[2]?.alt || 'Hotel entrance'}
                    loading="lazy"
                    className="w-full h-full object-cover parallax-img"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#C9A84C] text-black p-5 shadow-2xl floating">
              <div className="font-serif text-3xl font-bold">{new Date().getFullYear() - (hotelInfo.established || 2010)}+</div>
              <div className="text-xs font-bold uppercase tracking-wider">Years of Excellence</div>
            </div>

            {/* Award badge */}
            <div className="absolute -top-4 -left-4 bg-[#111] border border-[#C9A84C]/40 p-4 shadow-2xl floating-2">
              <div className="text-[#C9A84C] text-2xl mb-1">⭐</div>
              <div className="text-white text-sm font-bold">4.8 Rating</div>
              <div className="text-white/40 text-xs">1247 Reviews</div>
            </div>
          </div>

          {/* Right – Content */}
          <div className="reveal-right">
            <div className="section-badge">Our Story</div>
            <h2 className="section-title text-white mb-2">
              A Legacy of <br />
              <span className="text-gold-gradient">Unmatched Luxury</span>
            </h2>
            <div className="divider-gold" style={{ margin: '1.5rem 0' }} />
            <p className="text-white/60 leading-relaxed mb-6">
              {hotelInfo.description}
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Since {hotelInfo.established}, Hotel Akosha has been the preferred destination for discerning 
              travelers, celebrating families, and corporate professionals who demand nothing but the finest.
              Every detail, every service, every smile is crafted with passion and precision.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex gap-3 p-4 bg-white/3 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300 reveal-up"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{f.title}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                View Our Rooms
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
