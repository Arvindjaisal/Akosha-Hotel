import { hotelInfo } from '../data/hotelData.js';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-bg relative overflow-hidden">
      {/* Top gold line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-sm">HA</span>
              </div>
              <div>
                <div className="font-serif text-white text-xl font-bold">{hotelInfo.name}</div>
                <div className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">{hotelInfo.tagline}</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Experience unparalleled luxury, exquisite dining, and world-class hospitality at Hotel Akosha.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: '📘', label: 'Facebook', href: hotelInfo.socialLinks.facebook },
                { icon: '📸', label: 'Instagram', href: hotelInfo.socialLinks.instagram },
                { icon: '🐦', label: 'Twitter', href: hotelInfo.socialLinks.twitter },
                { icon: '▶️', label: 'YouTube', href: hotelInfo.socialLinks.youtube },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center text-sm hover:bg-[#C9A84C] hover:border-[#C9A84C] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-6">
              Quick <span className="text-[#C9A84C]">Links</span>
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Rooms', id: 'rooms' },
                { label: 'Restaurant', id: 'restaurant' },
                { label: 'Banquet Hall', id: 'banquet' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Contact', id: 'contact' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#C9A84C] text-xs">›</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Room Types */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-6">
              Room <span className="text-[#C9A84C]">Types</span>
            </h4>
            <ul className="space-y-3">
              {['Deluxe Room', 'Super Deluxe Room', 'Premium Room', 'Family Room', 'Suite Room', 'Presidential Suite'].map(room => (
                <li key={room}>
                  <button
                    onClick={() => scrollTo('rooms')}
                    className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#C9A84C] text-xs">›</span>
                    {room}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-6">
              Contact <span className="text-[#C9A84C]">Us</span>
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-[#C9A84C] text-lg mt-0.5">📍</span>
                <p className="text-white/50 text-sm leading-relaxed">{hotelInfo.address}</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#C9A84C] text-lg">📞</span>
                <a href={`tel:${hotelInfo.phone}`} className="text-white/70 text-sm hover:text-[#C9A84C] transition-colors">
                  {hotelInfo.phone}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#C9A84C] text-lg">📧</span>
                <a href={`mailto:${hotelInfo.email}`} className="text-white/70 text-sm hover:text-[#C9A84C] transition-colors">
                  {hotelInfo.email}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#C9A84C] text-lg">⏰</span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider">Check-in / Check-out</div>
                  <div className="text-white/70 text-sm">{hotelInfo.checkin} / {hotelInfo.checkout}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Line */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} {hotelInfo.name}. All rights reserved. Designed with ♥
            </p>
            <div className="flex items-center gap-1">
              {['⭐', '⭐', '⭐', '⭐', '⭐'].map((s, i) => (
                <span key={i} className="text-[#C9A84C] text-sm">{s}</span>
              ))}
              <span className="text-white/30 text-xs ml-2">4.8 / 5.0</span>
            </div>
            <div className="flex gap-4 text-xs text-white/30">
              <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
