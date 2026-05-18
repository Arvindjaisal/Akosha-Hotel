import { useEffect, useRef, useState } from 'react';
import { FALLBACK_IMAGE } from '../data/hotelData.js';

const events = [
  { icon: '💒', title: 'Weddings', desc: 'Your dream wedding, perfectly curated. From mandap to reception.', capacity: '500+ guests' },
  { icon: '🎉', title: 'Birthday Parties', desc: 'Celebrate life\'s milestones in grand style with bespoke setups.', capacity: 'Up to 300 guests' },
  { icon: '🏢', title: 'Corporate Events', desc: 'Professional conference rooms with AV equipment and catering.', capacity: 'Up to 200 guests' },
  { icon: '🌿', title: 'Outdoor Lawn Events', desc: 'Open-air celebrations under the stars in our lush lawns.', capacity: '600+ guests' },
  { icon: '💑', title: 'Engagement Ceremonies', desc: 'A romantic setting for your special commitment celebration.', capacity: '150–250 guests' },
  { icon: '🎓', title: 'Social Gatherings', desc: 'Get-togethers, reunions, and community events done right.', capacity: 'Flexible' },
];

export default function BanquetSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="banquet" ref={sectionRef} className="section-pad bg-[#050505] relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/banquet.jpg"
          alt="Banquet background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="section-badge justify-center">Events & Celebrations</div>
          <h2 className="section-title text-white mb-4">
            Grand Banquet & <span className="text-gold-gradient">Event Spaces</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            From intimate gatherings to grand wedding receptions, our versatile event spaces 
            transform your vision into an unforgettable reality.
          </p>
        </div>

        {/* Main Banquet Images */}
        <div className="grid lg:grid-cols-3 gap-4 mb-16">
          <div className="lg:col-span-2 relative overflow-hidden h-80 lg:h-auto reveal-left">
            <img
              src={imgErrors['ban-main'] ? FALLBACK_IMAGE : '/images/banquet.jpg'}
              alt="Grand banquet hall Hotel Akosha"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => setImgErrors(prev => ({ ...prev, 'ban-main': true }))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Grand Ballroom</div>
              <div className="font-serif text-white text-2xl font-bold">500+ Guests Capacity</div>
            </div>
          </div>
          <div className="space-y-4 reveal-right">
            <div className="relative overflow-hidden h-36">
              <img
                src={imgErrors['ban-wed'] ? FALLBACK_IMAGE : '/images/wedding.jpg'}
                alt="Wedding mandap setup"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                onError={() => setImgErrors(prev => ({ ...prev, 'ban-wed': true }))}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">Wedding Mandap</div>
            </div>
            <div className="relative overflow-hidden h-36">
              <img
                src={imgErrors['ban-lawn'] ? FALLBACK_IMAGE : '/images/lawn.jpg'}
                alt="Outdoor lawn event"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                onError={() => setImgErrors(prev => ({ ...prev, 'ban-lawn': true }))}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">Lawn Events</div>
            </div>
            <div className="relative overflow-hidden h-36">
              <img
                src={imgErrors['ban-corp'] ? FALLBACK_IMAGE : '/images/banquet.jpg'}
                alt="Corporate event setup"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                onError={() => setImgErrors(prev => ({ ...prev, 'ban-corp': true }))}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">Corporate</div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {events.map((event, i) => (
            <div
              key={event.title}
              className="p-6 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 bg-white/2 transition-all duration-400 group reveal-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{event.icon}</div>
              <h3 className="font-serif text-white text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">{event.desc}</p>
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm">{event.capacity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Wedding Package Highlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <div className="section-badge">🌸 Wedding Specialists</div>
            <h3 className="font-serif text-white text-3xl font-bold mt-4 mb-4">
              Your Dream <span className="text-[#C9A84C]">Wedding</span>, <br />Perfectly Crafted
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Let Hotel Akosha be the canvas for your love story. Our expert wedding planners 
              coordinate every detail — from the mandap setup to the grand reception — ensuring 
              your special day is nothing short of magical.
            </p>
            <div className="space-y-3 mb-8">
              {[
                '✓ Traditional Mandap & Floral Decoration',
                '✓ Multi-cuisine Wedding Feast',
                '✓ Indoor & Outdoor Venue Options',
                '✓ Bridal Suite with Exclusive Amenities',
                '✓ Professional Event Management Team',
                '✓ Custom Lighting & Audio-Visual Setup',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="text-[#C9A84C]">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold"
            >
              Plan Your Wedding ›
            </button>
          </div>
          <div className="relative reveal-right">
            <img
              src={imgErrors['wed-main'] ? FALLBACK_IMAGE : '/images/wedding.jpg'}
              alt="Luxury Indian wedding at Hotel Akosha"
              loading="lazy"
              className="w-full object-cover"
              style={{ height: '420px' }}
              onError={() => setImgErrors(prev => ({ ...prev, 'wed-main': true }))}
            />
            <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] text-black p-6 shadow-2xl floating">
              <div className="font-serif text-4xl font-bold">500+</div>
              <div className="text-xs font-bold uppercase tracking-wider">Weddings Hosted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
