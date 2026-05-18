import { useEffect, useRef } from 'react';

const amenities = [
  { icon: '📶', title: 'Free Wi-Fi', desc: 'High-speed internet throughout the hotel, in rooms and common areas.' },
  { icon: '❄️', title: 'Air Conditioning', desc: 'Modern central AC system ensuring perfect room temperature year-round.' },
  { icon: '📺', title: 'LED Smart TV', desc: '55-inch LED Smart TVs with premium channels in every room.' },
  { icon: '🚿', title: '24/7 Hot Water', desc: 'Continuous hot water supply with rain shower and bathtub options.' },
  { icon: '👕', title: 'Laundry Service', desc: 'Express laundry and professional dry-cleaning within 4 hours.' },
  { icon: '📷', title: 'CCTV Security', desc: '360° CCTV surveillance with 24/7 security personnel on all floors.' },
  { icon: '🍽️', title: 'Room Service', desc: 'In-room dining available from 7 AM to midnight with full menu.' },
  { icon: '🛗', title: 'Modern Elevators', desc: 'Multiple high-speed elevators ensuring quick access to all floors.' },
  { icon: '⚡', title: 'Power Backup', desc: '100% generator backup ensuring zero power interruptions.' },
  { icon: '🚗', title: 'Car Parking', desc: 'Spacious complimentary parking for 100+ vehicles with valet option.' },
  { icon: '🏥', title: 'First Aid', desc: 'On-site medical first-aid and doctor-on-call service available 24/7.' },
  { icon: '🧹', title: 'Housekeeping', desc: 'Twice-daily housekeeping with premium toiletries and fresh linen.' },
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="amenities" ref={sectionRef} className="section-pad bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="section-badge justify-center">World-Class Facilities</div>
          <h2 className="section-title text-white mb-4">
            Premium <span className="text-gold-gradient">Amenities</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            Every facility at Hotel Akosha is thoughtfully curated to provide the ultimate 
            comfort, convenience, and luxury experience for our esteemed guests.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((amenity, i) => (
            <div
              key={amenity.title}
              className="amenity-card reveal-up"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="amenity-icon">
                <span className="text-2xl">{amenity.icon}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{amenity.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{amenity.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 relative overflow-hidden reveal-up">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/20 to-transparent" />
          <div className="border border-[#C9A84C]/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">★ Complimentary Services</div>
              <h3 className="font-serif text-white text-2xl md:text-3xl font-bold">
                Everything Included, <span className="text-[#C9A84C]">Nothing Extra</span>
              </h3>
              <p className="text-white/50 mt-2">
                Free Wi-Fi · Free Parking · Free Breakfast (select rooms) · 24/7 Concierge
              </p>
            </div>
            <button
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold whitespace-nowrap"
            >
              View Room Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
