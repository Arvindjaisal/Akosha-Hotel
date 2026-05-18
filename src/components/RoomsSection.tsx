import { useState, useEffect, useRef } from 'react';
import { FALLBACK_IMAGE } from '../data/hotelData.js';

const roomTypes = ['All', 'Deluxe Room', 'Super Deluxe', 'Premium Room', 'Family Room', 'Suite Room'];

const featuredRooms = [
  {
    type: 'Deluxe Room',
    price: 2499,
    image: '/images/room-deluxe.jpg',
    alt: 'Spacious deluxe room with king size bed',
    description: 'Elegant room with premium bedding, city views, and modern amenities for a comfortable stay.',
    amenities: ['King Bed', 'AC', 'Wi-Fi', 'LED TV', 'Hot Water', 'Room Service'],
    size: '280 sq ft',
    capacity: '2 Guests',
    badge: 'Most Popular',
  },
  {
    type: 'Super Deluxe',
    price: 2999,
    image: '/images/room-deluxe.jpg',
    alt: 'Super deluxe room with balcony',
    description: 'Spacious room with private balcony, enhanced amenities, and breathtaking garden views.',
    amenities: ['King Bed', 'Balcony', 'AC', 'Wi-Fi', 'LED TV', 'Mini Fridge', 'Room Service'],
    size: '320 sq ft',
    capacity: '2 Guests',
    badge: 'Fan Favourite',
  },
  {
    type: 'Premium Room',
    price: 3499,
    image: '/images/suite.jpg',
    alt: 'Premium luxury room',
    description: 'Premium luxury room with exclusive furnishings, panoramic views, and personalized services.',
    amenities: ['King Bed', 'Balcony', 'AC', 'Wi-Fi', '55" TV', 'Mini Bar', 'Butler', 'Room Service'],
    size: '380 sq ft',
    capacity: '2 Guests',
    badge: 'Premium',
  },
  {
    type: 'Family Room',
    price: 3999,
    image: '/images/room-deluxe.jpg',
    alt: 'Spacious family room',
    description: 'Perfect for families — spacious layout with extra beds, lounge area, and kid-friendly amenities.',
    amenities: ['Extra Beds', 'AC', 'Wi-Fi', 'LED TV', 'Sofa', 'Hot Water', 'Room Service'],
    size: '450 sq ft',
    capacity: '4 Guests',
    badge: 'Family Pick',
  },
  {
    type: 'Suite Room',
    price: 5999,
    image: '/images/suite.jpg',
    alt: 'Presidential suite room',
    description: 'The pinnacle of luxury — a sprawling suite with separate living room, Jacuzzi, and butler service.',
    amenities: ['King Bed', 'Living Room', 'Jacuzzi', 'AC', 'Wi-Fi', '65" TV', 'Mini Bar', 'Butler'],
    size: '650 sq ft',
    capacity: '2 Guests',
    badge: '⭐ Presidential',
  },
];

function RoomCard({ room, index }: { room: any; index: number }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="room-card reveal-up"
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '260px' }}>
        <img
          src={imgError ? FALLBACK_IMAGE : room.image}
          alt={room.alt}
          loading="lazy"
          className="room-img w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
        {/* Badge */}
        <div className="absolute top-4 left-4 bg-[#C9A84C] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
          {room.badge}
        </div>
        {/* Price */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 text-center">
          <div className="text-[#C9A84C] font-serif font-bold text-lg">₹{room.price.toLocaleString()}</div>
          <div className="text-white/60 text-xs">per night</div>
        </div>
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold text-xs"
          >
            Book This Room
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-white text-xl font-bold">{room.type}</h3>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-white/40 text-xs">📐 {room.size}</span>
              <span className="text-white/40 text-xs">👥 {room.capacity}</span>
            </div>
          </div>
          <div className="flex text-[#C9A84C] text-sm">★★★★★</div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-4">{room.description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {room.amenities.map((a: string) => (
            <span key={a} className="text-xs text-[#C9A84C] border border-[#C9A84C]/30 px-2 py-1">
              {a}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold flex-1 justify-center text-xs py-3"
          >
            Book Now
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline px-4 py-3 text-xs"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RoomsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

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

  const displayRooms = activeFilter === 'All'
    ? featuredRooms
    : featuredRooms.filter(r => r.type === activeFilter || r.type.includes(activeFilter));

  return (
    <section id="rooms" ref={sectionRef} className="section-pad bg-[#050505] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-20 left-0 w-px h-96 bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-20 right-0 w-px h-96 bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <div className="section-badge justify-center">Accommodation</div>
          <h2 className="section-title text-white mb-4">
            Luxury Rooms & <span className="text-gold-gradient">Suites</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            From cozy deluxe rooms to sprawling presidential suites — each room is a masterpiece of 
            comfort, designed to make every moment of your stay extraordinary.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal-up delay-200">
          {roomTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`filter-btn ${activeFilter === type ? 'active' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Room Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayRooms.map((room, i) => (
            <RoomCard key={room.type} room={room} index={i} />
          ))}
        </div>

        {/* Floor-wise Room Count */}
        <div className="mt-16 reveal-up">
          <h3 className="text-center font-serif text-white text-2xl mb-8">
            Floor-wise <span className="text-gold-gradient">Room Distribution</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { floor: '1st Floor', count: 8, range: '101–108' },
              { floor: '2nd Floor', count: 12, range: '201–212' },
              { floor: '3rd Floor', count: 14, range: '301–314' },
              { floor: '4th Floor', count: 12, range: '401–412' },
              { floor: '5th Floor', count: 12, range: '501–512' },
            ].map((f, i) => (
              <div
                key={f.floor}
                className="text-center p-6 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-all duration-300 reveal-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-[#C9A84C] font-serif text-3xl font-bold">{f.count}</div>
                <div className="text-white text-sm font-semibold mt-1">{f.floor}</div>
                <div className="text-white/30 text-xs mt-1">Rooms {f.range}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
