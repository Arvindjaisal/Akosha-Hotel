import { useState, useEffect } from 'react';
import { hotelInfo } from '../data/hotelData.js';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Banquet', href: '#banquet' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map(n => n.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('#home')}>
              <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-sm font-serif">HA</span>
              </div>
              <div>
                <div className="font-serif text-white text-lg font-bold leading-none tracking-wide">
                  {hotelInfo.name}
                </div>
                <div className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">{hotelInfo.tagline}</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`nav-link ${activeSection === item.href.replace('#', '') ? 'text-[#C9A84C]' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="hidden sm:flex btn-gold text-xs px-5 py-2.5"
              >
                Book Now
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[1999]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ✕
        </button>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
            <span className="text-[#C9A84C] font-bold text-sm">HA</span>
          </div>
          <div>
            <div className="font-serif text-white text-lg font-bold">Hotel Akosha</div>
            <div className="text-[#C9A84C] text-xs tracking-widest uppercase">Luxury Stay</div>
          </div>
        </div>
        {navItems.map((item, i) => (
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="block text-left text-white text-lg font-light hover:text-[#C9A84C] transition-colors py-2 border-b border-white/10"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('#contact')}
          className="btn-gold w-full justify-center mt-6"
        >
          Book Now
        </button>
        <div className="mt-auto pt-8 text-center">
          <p className="text-white/40 text-xs">📞 {hotelInfo.phone}</p>
        </div>
      </div>
    </>
  );
}
