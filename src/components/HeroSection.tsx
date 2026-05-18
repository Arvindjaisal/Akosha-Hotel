import { useState, useEffect, useRef } from 'react';
import { heroImages, hotelInfo, FALLBACK_IMAGE } from '../data/hotelData.js';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 2}px`,
  duration: `${Math.random() * 10 + 8}s`,
  delay: `${Math.random() * 8}s`,
  opacity: Math.random() * 0.5 + 0.2,
}));

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => setTextVisible(true), 300);
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Slides */}
      {heroImages.map((img, idx) => (
        <div
          key={img.id}
          className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
          style={{ opacity: idx === currentSlide ? 1 : 0 }}
        >
          <img
            src={img.url}
            alt={img.alt}
            loading={idx === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Animated Particles */}
      <div className="particles-container">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Decorations */}
      <div className="absolute top-1/4 left-8 w-1 h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent floating" />
      <div className="absolute top-1/3 right-8 w-1 h-24 bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent floating-2" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent floating-3" />
      <div className="absolute top-1/2 right-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent floating" />

      {/* Corner Decorations */}
      <div className="absolute top-24 left-8 w-12 h-12 border-l-2 border-t-2 border-[#C9A84C]/40 floating" />
      <div className="absolute top-24 right-8 w-12 h-12 border-r-2 border-t-2 border-[#C9A84C]/40 floating-2" />
      <div className="absolute bottom-24 left-8 w-12 h-12 border-l-2 border-b-2 border-[#C9A84C]/40 floating-3" />
      <div className="absolute bottom-24 right-8 w-12 h-12 border-r-2 border-b-2 border-[#C9A84C]/40 floating" />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Badge */}
          <div className={`section-badge justify-center mb-6 transition-all duration-700 delay-200 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            ★ Luxury Hotel & Resort ★
          </div>

          {/* Hotel Name */}
          <h1 className={`font-serif text-white leading-tight mb-4 transition-all duration-700 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            <span className="text-gold-gradient glow-text">Hotel</span>
            <br />
            <span className="text-white">Akosha</span>
          </h1>

          {/* Divider */}
          <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 delay-400 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm tracking-[0.4em] uppercase font-light">{hotelInfo.tagline}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </div>

          {/* Tagline */}
          <p className={`text-white/70 max-w-xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
            Experience unparalleled luxury across {hotelInfo.totalRooms}+ premium rooms, 
            grand banquet halls, and fine dining — all under one iconic roof.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-600 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button onClick={() => scrollToSection('rooms')} className="btn-gold">
              Explore Rooms ›
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-outline">
              Book a Table
            </button>
          </div>

          {/* Quick Stats */}
          <div className={`flex flex-wrap items-center justify-center gap-8 mt-12 transition-all duration-700 delay-700 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { value: '56+', label: 'Rooms' },
              { value: '5⭐', label: 'Rating' },
              { value: '15+', label: 'Years' },
              { value: '50K+', label: 'Guests' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[#C9A84C] font-serif font-bold text-2xl">{stat.value}</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-8 h-2 bg-[#C9A84C]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-20">
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
