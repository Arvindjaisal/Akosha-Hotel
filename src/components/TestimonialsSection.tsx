import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/hotelData.js';

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-scale')
              .forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-[#080808] relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 left-10 text-[#C9A84C]/5 font-serif" style={{ fontSize: '20rem', lineHeight: 1 }}>"</div>
      <div className="absolute bottom-10 right-10 text-[#C9A84C]/5 font-serif" style={{ fontSize: '20rem', lineHeight: 1 }}>"</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="section-badge justify-center">Guest Stories</div>
          <h2 className="section-title text-white mb-4">
            What Our Guests <span className="text-gold-gradient">Say</span>
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-3xl mx-auto text-center mb-12 reveal-up">
          <div className="text-[#C9A84C] text-6xl font-serif mb-6">"</div>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light italic mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            {testimonials[activeIndex]?.review}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center">
              <span className="text-black font-bold text-sm">{testimonials[activeIndex]?.avatar}</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">{testimonials[activeIndex]?.name}</div>
              <div className="text-[#C9A84C] text-sm">{testimonials[activeIndex]?.location} · {testimonials[activeIndex]?.date}</div>
            </div>
            <div className="flex text-[#C9A84C] text-lg ml-4">
              {'★'.repeat(testimonials[activeIndex]?.rating || 5)}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${i === activeIndex ? 'w-8 h-2 bg-[#C9A84C]' : 'w-2 h-2 bg-white/30'}`}
            />
          ))}
        </div>

        {/* All Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`testimonial-card p-6 cursor-pointer reveal-up ${i === activeIndex ? 'border-[#C9A84C]/50' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setActiveIndex(i)}
            >
              <div className="flex text-[#C9A84C] text-sm mb-4">{'★'.repeat(t.rating)}</div>
              <p className="text-white/60 text-sm leading-relaxed mb-4 italic">"{t.review.substring(0, 100)}..."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-xs">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Banner */}
        <div className="mt-12 text-center reveal-up">
          <div className="inline-flex items-center gap-6 p-6 border border-[#C9A84C]/20 bg-white/2">
            <div className="text-center">
              <div className="text-[#C9A84C] font-serif text-4xl font-bold">4.8</div>
              <div className="text-white text-sm mt-1">Google Rating</div>
              <div className="flex text-[#C9A84C] text-lg">★★★★★</div>
            </div>
            <div className="h-16 w-px bg-[#C9A84C]/20" />
            <div className="text-center">
              <div className="text-white font-serif text-4xl font-bold">1247</div>
              <div className="text-white/50 text-sm mt-1">Verified Reviews</div>
            </div>
            <div className="h-16 w-px bg-[#C9A84C]/20" />
            <div className="text-center">
              <div className="text-[#C9A84C] font-serif text-4xl font-bold">98%</div>
              <div className="text-white/50 text-sm mt-1">Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
