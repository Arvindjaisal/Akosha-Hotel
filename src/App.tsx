import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookingBar from './components/BookingBar';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import RoomsSection from './components/RoomsSection';
import RestaurantSection from './components/RestaurantSection';
import BanquetSection from './components/BanquetSection';
import AmenitiesSection from './components/AmenitiesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';
import { hotelInfo } from './data/hotelData.js';

// ──────────────────────────────────────────────
// LOADING SCREEN
// ──────────────────────────────────────────────
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onDone, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-all duration-600"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      {/* Background canvas particles */}
      <div className="absolute inset-0 opacity-30">
        <ThreeDBackground />
      </div>

      <div className="relative z-10 text-center px-8">
        {/* Logo circle */}
        <div
          className="w-24 h-24 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mx-auto mb-6 floating"
          style={{ boxShadow: '0 0 40px rgba(201,168,76,0.3)' }}
        >
          <span className="text-[#C9A84C] font-bold text-2xl font-serif">HA</span>
        </div>

        <h1 className="font-serif text-white text-4xl font-bold mb-2 text-gold-gradient">
          {hotelInfo.name}
        </h1>
        <p className="text-[#C9A84C] text-sm tracking-[0.4em] uppercase mb-10">
          {hotelInfo.tagline}
        </p>

        {/* Progress bar */}
        <div className="w-64 h-px bg-white/10 mx-auto mb-3 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[#C9A84C]/60 text-xs tracking-widest uppercase">
          Loading Experience... {Math.min(Math.round(progress), 100)}%
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"
              style={{
                animation: `floatSlow ${1 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// BACK TO TOP BUTTON
// ──────────────────────────────────────────────
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-[#C9A84C] text-black flex items-center justify-center shadow-lg hover:bg-[#E8D5A3] transition-all duration-300 hover:-translate-y-1"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

// ──────────────────────────────────────────────
// MAIN APP
// ──────────────────────────────────────────────
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <div
        className="relative min-h-screen"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease',
          background: '#0a0a0a'
        }}
      >
        {/* Global 3D canvas background */}
        <ThreeDBackground />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />

          <main>
            <HeroSection />
            <BookingBar />
            <AboutSection />
            <StatsSection />
            <RoomsSection />
            <RestaurantSection />
            <BanquetSection />
            <AmenitiesSection />
            <GallerySection />
            <TestimonialsSection />
            <ContactSection />
          </main>

          <Footer />
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>

        {/* Back to Top */}
        <BackToTop />
      </div>
    </>
  );
}
