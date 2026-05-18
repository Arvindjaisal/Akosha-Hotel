import { useEffect, useRef, useState } from 'react';
import { galleryImages, FALLBACK_IMAGE } from '../data/hotelData.js';

const categories = ['All', 'Exterior', 'Lobby', 'Rooms', 'Bathrooms', 'Restaurant', 'Food', 'Banquet', 'Lawn', 'Corridors', 'Kitchen', 'Parking'];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(18);

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

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox({ open: false, index: 0 });
      if (e.key === 'ArrowRight') setLightbox(prev => ({ ...prev, index: Math.min(prev.index + 1, filteredImages.length - 1) }));
      if (e.key === 'ArrowLeft') setLightbox(prev => ({ ...prev, index: Math.max(prev.index - 1, 0) }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeCategory]);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const displayImages = filteredImages.slice(0, visibleCount);

  const handleImgError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" ref={sectionRef} className="section-pad bg-[#060606] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <div className="section-badge justify-center">Visual Journey</div>
          <h2 className="section-title text-white mb-4">
            Hotel <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            A curated visual tour of Hotel Akosha — explore every corner through our lens.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal-up delay-200">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(18); }}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {displayImages.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-item reveal-scale ${i % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{
                height: i % 7 === 0 ? '320px' : '200px',
                transitionDelay: `${(i % 9) * 0.04}s`
              }}
              onClick={() => setLightbox({ open: true, index: i })}
            >
              <img
                src={imgErrors[img.id] ? FALLBACK_IMAGE : img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={() => handleImgError(img.id)}
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-icon">🔍</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white text-xs font-semibold">{img.title}</div>
                <div className="text-[#C9A84C] text-xs">{img.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredImages.length && (
          <div className="text-center mt-10 reveal-up">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="btn-outline"
            >
              Load More Photos ({filteredImages.length - visibleCount} remaining)
            </button>
          </div>
        )}

        <p className="text-center text-white/30 text-sm mt-6">
          {filteredImages.length} images in gallery · Click any image to view full size
        </p>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox" onClick={() => setLightbox({ open: false, index: 0 })}>
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-[#C9A84C] transition-colors"
            onClick={() => setLightbox({ open: false, index: 0 })}
          >✕</button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#C9A84C] transition-colors z-50"
            onClick={e => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: Math.max(prev.index - 1, 0) })); }}
          >‹</button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#C9A84C] transition-colors z-50"
            onClick={e => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: Math.min(prev.index + 1, filteredImages.length - 1) })); }}
          >›</button>

          <div className="max-w-4xl max-h-[85vh] w-full mx-4" onClick={e => e.stopPropagation()}>
            <img
              src={imgErrors[displayImages[lightbox.index]?.id] ? FALLBACK_IMAGE : displayImages[lightbox.index]?.url}
              alt={displayImages[lightbox.index]?.alt}
              className="w-full h-full object-contain max-h-[75vh]"
              onError={() => handleImgError(displayImages[lightbox.index]?.id)}
            />
            <div className="text-center mt-4">
              <div className="text-white font-semibold">{displayImages[lightbox.index]?.title}</div>
              <div className="text-[#C9A84C] text-sm">{displayImages[lightbox.index]?.category}</div>
              <div className="text-white/40 text-xs mt-1">{lightbox.index + 1} / {filteredImages.length}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
