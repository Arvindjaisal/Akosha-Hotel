import { useState } from 'react';

export default function BookingBar() {
  const [form, setForm] = useState({ checkIn: '', checkOut: '', roomType: '', guests: '2' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#0a0a0a]/95 backdrop-blur-md border-y border-[#C9A84C]/20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-1.5">Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="input-gold py-2.5 text-sm"
            />
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-1.5">Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="input-gold py-2.5 text-sm"
            />
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-1.5">Room Type</label>
            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="input-gold py-2.5 text-sm"
            >
              <option value="">Any Room</option>
              <option>Deluxe Room</option>
              <option>Super Deluxe</option>
              <option>Premium Room</option>
              <option>Family Room</option>
              <option>Suite Room</option>
            </select>
          </div>
          <div className="flex-1 min-w-[100px]">
            <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-1.5">Guests</label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="input-gold py-2.5 text-sm"
            >
              {['1', '2', '3', '4', '5', '6+'].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="btn-gold py-3 whitespace-nowrap text-xs"
          >
            Check Availability ›
          </button>
        </div>
      </div>
    </div>
  );
}
