import { useEffect, useRef, useState } from 'react';
import { hotelInfo } from '../data/hotelData.js';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', checkIn: '', checkOut: '', roomType: '', guests: '2', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
              .forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', checkIn: '', checkOut: '', roomType: '', guests: '2', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="section-pad bg-[#050505] relative overflow-hidden">
      {/* Gold glow background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <div className="section-badge justify-center">Get In Touch</div>
          <h2 className="section-title text-white mb-4">
            Book Your <span className="text-gold-gradient">Stay</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            Reserve your room today or inquire about our banquet and event packages. 
            Our team is ready to craft your perfect experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal-left">
            <h3 className="font-serif text-white text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {[
                { icon: '📍', label: 'Address', value: hotelInfo.address },
                { icon: '📞', label: 'Phone', value: hotelInfo.phone, href: `tel:${hotelInfo.phone}` },
                { icon: '📧', label: 'Email', value: hotelInfo.email, href: `mailto:${hotelInfo.email}` },
                { icon: '💬', label: 'WhatsApp', value: hotelInfo.whatsapp, href: `https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}` },
                { icon: '⏰', label: 'Check-in / Check-out', value: `${hotelInfo.checkin} / ${hotelInfo.checkout}` },
              ].map(item => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[#C9A84C] text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-[#C9A84C] transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white/70 text-sm">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Placeholder */}
            <div className="relative overflow-hidden h-56 bg-[#111] border border-[#C9A84C]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-3">🗺️</div>
                <div className="text-white/60 text-sm">Google Map Placeholder</div>
                <div className="text-[#C9A84C] text-xs mt-1">{hotelInfo.address}</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-[#C9A84C] border border-[#C9A84C]/40 px-4 py-2 hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
                >
                  Open in Google Maps ›
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href={`tel:${hotelInfo.phone}`}
                className="btn-gold justify-center text-xs py-3"
              >
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold py-3 px-4 uppercase tracking-wider hover:bg-[#1da851] transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="reveal-right">
            <div className="booking-form p-8">
              <h3 className="font-serif text-white text-2xl font-bold mb-6">
                Make a <span className="text-[#C9A84C]">Reservation</span>
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-[#C9A84C]/10 border border-[#C9A84C] text-[#C9A84C] text-sm">
                  ✅ Booking request submitted! We'll confirm within 2 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="input-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="input-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="input-gold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Check-in Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="input-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="input-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Room Type</label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="input-gold"
                    >
                      <option value="">Select Type</option>
                      <option>Deluxe Room</option>
                      <option>Super Deluxe</option>
                      <option>Premium Room</option>
                      <option>Family Room</option>
                      <option>Suite Room</option>
                      <option>Banquet/Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="input-gold"
                    >
                      {['1', '2', '3', '4', '5', '6+'].map(n => (
                        <option key={n} value={n}>{n} Guest{n !== '1' ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Special Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any special requirements, preferences, or event details..."
                    className="input-gold resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center py-4 text-sm">
                  Submit Booking Request ›
                </button>

                <p className="text-white/30 text-xs text-center">
                  Our team will confirm your booking within 2 hours via phone/WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
