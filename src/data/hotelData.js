// ============================================================
// HOTEL AKOSHA — CENTRALIZED IMAGE & DATA STORE
// Replace the `url` values with actual hotel photos later.
// All local images are stored in /public/images/
// ============================================================

export const FALLBACK_IMAGE = "/images/hero-day.jpg";

// ──────────────────────────────────────────────
// HERO IMAGES (used also for Open Graph / social)
// ──────────────────────────────────────────────
export const heroImages = [
  {
    id: "hero-1",
    title: "Hotel Akosha – Day View",
    category: "hero",
    url: "/images/hero-day.jpg",
    alt: "Hotel Akosha grand front elevation daytime view with manicured gardens",
  },
  {
    id: "hero-2",
    title: "Hotel Akosha – Night View",
    category: "hero",
    url: "/images/hero-night.jpg",
    alt: "Hotel Akosha beautifully illuminated at night with golden facade lights",
  },
  {
    id: "hero-3",
    title: "Grand Lobby",
    category: "hero",
    url: "/images/lobby.jpg",
    alt: "Magnificent Hotel Akosha grand lobby with chandelier and marble floors",
  },
];

// ──────────────────────────────────────────────
// EXTERIOR & BUILDING IMAGES
// ──────────────────────────────────────────────
export const exteriorImages = [
  {
    id: "ext-1",
    title: "Hotel Front Elevation – Day",
    category: "exterior",
    url: "/images/hero-day.jpg",
    alt: "Hotel Akosha front elevation daytime luxury building facade",
  },
  {
    id: "ext-2",
    title: "Hotel Front Elevation – Night",
    category: "exterior",
    url: "/images/hero-night.jpg",
    alt: "Hotel Akosha illuminated night view with elegant lighting",
  },
  {
    id: "ext-3",
    title: "Main Entrance",
    category: "exterior",
    url: "/images/hero-day.jpg",
    alt: "Hotel Akosha main entrance with grand porch and valet area",
  },
  {
    id: "ext-4",
    title: "Full Building Facade",
    category: "exterior",
    url: "/images/hero-night.jpg",
    alt: "Complete hotel building facade showing all five floors",
  },
  {
    id: "ext-5",
    title: "Parking Area",
    category: "exterior",
    url: "/images/lawn.jpg",
    alt: "Hotel Akosha spacious parking area with security",
  },
  {
    id: "ext-6",
    title: "Lawn & Outdoor Area",
    category: "exterior",
    url: "/images/lawn.jpg",
    alt: "Beautifully landscaped hotel lawn and outdoor event area",
  },
];

// ──────────────────────────────────────────────
// GROUND FLOOR IMAGES
// ──────────────────────────────────────────────
export const groundFloorImages = [
  {
    id: "gf-1",
    title: "Reception / Front Desk",
    category: "ground-floor",
    url: "/images/lobby.jpg",
    alt: "Elegant hotel reception and front desk with staff",
  },
  {
    id: "gf-2",
    title: "Grand Lobby",
    category: "ground-floor",
    url: "/images/lobby.jpg",
    alt: "Grand Hotel Akosha lobby with chandelier and marble floors",
  },
  {
    id: "gf-3",
    title: "Banquet Hall",
    category: "ground-floor",
    url: "/images/banquet.jpg",
    alt: "Spacious hotel banquet hall for weddings and events",
  },
  {
    id: "gf-4",
    title: "Wedding Mandap",
    category: "ground-floor",
    url: "/images/wedding.jpg",
    alt: "Traditional Hindu wedding mandap setup in hotel banquet hall",
  },
  {
    id: "gf-5",
    title: "Lawn Event Area",
    category: "ground-floor",
    url: "/images/lawn.jpg",
    alt: "Hotel outdoor lawn area for events and celebrations",
  },
  {
    id: "gf-6",
    title: "Kitchen",
    category: "ground-floor",
    url: "/images/food-indian.jpg",
    alt: "Professional hotel kitchen with modern cooking equipment",
  },
];

// ──────────────────────────────────────────────
// FLOOR IMAGES (grouped by floor)
// ──────────────────────────────────────────────
export const floorImages = {
  ground: [
    { id: "grd-1", title: "Grand Lobby", category: "floor-ground", url: "/images/lobby.jpg", alt: "Hotel Akosha grand lobby" },
    { id: "grd-2", title: "Banquet Hall", category: "floor-ground", url: "/images/banquet.jpg", alt: "Banquet hall ground floor" },
    { id: "grd-3", title: "Wedding Mandap", category: "floor-ground", url: "/images/wedding.jpg", alt: "Wedding mandap setup" },
    { id: "grd-4", title: "Lawn Area", category: "floor-ground", url: "/images/lawn.jpg", alt: "Outdoor lawn ground floor" },
  ],
  first: [
    { id: "f1-1", title: "Restaurant Interior", category: "floor-1", url: "/images/restaurant.jpg", alt: "First floor restaurant" },
    { id: "f1-2", title: "Breakfast Buffet", category: "floor-1", url: "/images/food-indian.jpg", alt: "Morning breakfast buffet" },
    { id: "f1-3", title: "Balcony Sitting Area", category: "floor-1", url: "/images/lawn.jpg", alt: "First floor balcony lounge" },
    { id: "f1-4", title: "Room 101", category: "floor-1", url: "/images/room-deluxe.jpg", alt: "Room 101 deluxe interior" },
    { id: "f1-5", title: "Room 102", category: "floor-1", url: "/images/room-deluxe.jpg", alt: "Room 102 deluxe interior" },
  ],
  second: [
    { id: "f2-1", title: "Second Floor Lounge", category: "floor-2", url: "/images/lobby.jpg", alt: "Second floor lounge area" },
    { id: "f2-2", title: "Room 201", category: "floor-2", url: "/images/room-deluxe.jpg", alt: "Room 201 superior room" },
    { id: "f2-3", title: "Room 205", category: "floor-2", url: "/images/suite.jpg", alt: "Room 205 premium room" },
  ],
  third: [
    { id: "f3-1", title: "Third Floor Corridor", category: "floor-3", url: "/images/lobby.jpg", alt: "Third floor corridor" },
    { id: "f3-2", title: "Room 301", category: "floor-3", url: "/images/room-deluxe.jpg", alt: "Room 301 deluxe" },
    { id: "f3-3", title: "Room 307", category: "floor-3", url: "/images/suite.jpg", alt: "Room 307 suite" },
  ],
  fourth: [
    { id: "f4-1", title: "Fourth Floor Corridor", category: "floor-4", url: "/images/lobby.jpg", alt: "Fourth floor corridor" },
    { id: "f4-2", title: "Room 401", category: "floor-4", url: "/images/suite.jpg", alt: "Room 401 premium suite" },
    { id: "f4-3", title: "Room 408", category: "floor-4", url: "/images/room-deluxe.jpg", alt: "Room 408 deluxe" },
  ],
  fifth: [
    { id: "f5-1", title: "Fifth Floor Corridor", category: "floor-5", url: "/images/lobby.jpg", alt: "Fifth floor corridor" },
    { id: "f5-2", title: "Room 501", category: "floor-5", url: "/images/suite.jpg", alt: "Room 501 presidential suite" },
    { id: "f5-3", title: "Room 510", category: "floor-5", url: "/images/suite.jpg", alt: "Room 510 luxury suite" },
  ],
};

// ──────────────────────────────────────────────
// ROOM TYPE IMAGES
// ──────────────────────────────────────────────
export const roomTypeImages = [
  {
    id: "rt-1",
    title: "Deluxe Room",
    category: "room-type",
    url: "/images/room-deluxe.jpg",
    alt: "Spacious deluxe room with king bed and city view",
  },
  {
    id: "rt-2",
    title: "Super Deluxe Room",
    category: "room-type",
    url: "/images/room-deluxe.jpg",
    alt: "Super deluxe room with premium amenities and elegant decor",
  },
  {
    id: "rt-3",
    title: "Premium Room",
    category: "room-type",
    url: "/images/suite.jpg",
    alt: "Premium room with luxury furnishings and panoramic view",
  },
  {
    id: "rt-4",
    title: "Family Room",
    category: "room-type",
    url: "/images/room-deluxe.jpg",
    alt: "Spacious family room with multiple beds and lounge area",
  },
  {
    id: "rt-5",
    title: "Suite Room",
    category: "room-type",
    url: "/images/suite.jpg",
    alt: "Presidential suite with separate living room and luxury bathroom",
  },
  {
    id: "rt-6",
    title: "Luxury Bathroom",
    category: "room-type",
    url: "/images/suite.jpg",
    alt: "Marble-finish luxury hotel bathroom with rain shower",
  },
  {
    id: "rt-7",
    title: "Balcony View",
    category: "room-type",
    url: "/images/lawn.jpg",
    alt: "Scenic balcony view from hotel room overlooking garden",
  },
];

// ──────────────────────────────────────────────
// RESTAURANT & FOOD IMAGES
// ──────────────────────────────────────────────
export const restaurantImages = [
  {
    id: "res-1",
    title: "Restaurant Interior",
    category: "restaurant",
    url: "/images/restaurant.jpg",
    alt: "Elegant Hotel Akosha restaurant interior with fine dining setup",
  },
  {
    id: "res-2",
    title: "Breakfast Buffet",
    category: "restaurant",
    url: "/images/food-indian.jpg",
    alt: "Lavish breakfast buffet spread at Hotel Akosha restaurant",
  },
  {
    id: "res-3",
    title: "Lunch Buffet",
    category: "restaurant",
    url: "/images/food-indian.jpg",
    alt: "Elaborate lunch buffet with multi-cuisine options",
  },
  {
    id: "res-4",
    title: "Dinner Setup",
    category: "restaurant",
    url: "/images/restaurant.jpg",
    alt: "Romantic candlelit dinner setup in hotel restaurant",
  },
];

export const foodImages = [
  {
    id: "food-1",
    title: "Indian Cuisine",
    category: "food",
    url: "/images/food-indian.jpg",
    alt: "Authentic Indian cuisine spread with dal makhani, biryani and naan",
  },
  {
    id: "food-2",
    title: "Multi-Cuisine Platter",
    category: "food",
    url: "/images/food-indian.jpg",
    alt: "International multi-cuisine platter with variety of dishes",
  },
  {
    id: "food-3",
    title: "Signature Dishes",
    category: "food",
    url: "/images/food-indian.jpg",
    alt: "Chef's signature dishes beautifully plated",
  },
  {
    id: "food-4",
    title: "Desserts",
    category: "food",
    url: "/images/food-indian.jpg",
    alt: "Delicious dessert spread including gulab jamun and ice cream",
  },
  {
    id: "food-5",
    title: "Tea and Coffee",
    category: "food",
    url: "/images/restaurant.jpg",
    alt: "Premium tea and coffee service at Hotel Akosha",
  },
];

// ──────────────────────────────────────────────
// AMENITIES IMAGES
// ──────────────────────────────────────────────
export const amenitiesImages = [
  {
    id: "am-1",
    title: "Free Wi-Fi",
    category: "amenities",
    url: "/images/lobby.jpg",
    alt: "High-speed free Wi-Fi throughout Hotel Akosha",
  },
  {
    id: "am-2",
    title: "Air Conditioning",
    category: "amenities",
    url: "/images/room-deluxe.jpg",
    alt: "Modern air conditioning system in all hotel rooms",
  },
  {
    id: "am-3",
    title: "LED TV",
    category: "amenities",
    url: "/images/room-deluxe.jpg",
    alt: "Large LED smart TV in every hotel room",
  },
  {
    id: "am-4",
    title: "Hot Water",
    category: "amenities",
    url: "/images/suite.jpg",
    alt: "24/7 hot water availability in all bathrooms",
  },
  {
    id: "am-5",
    title: "Laundry Service",
    category: "amenities",
    url: "/images/lobby.jpg",
    alt: "Professional laundry and dry-cleaning service",
  },
  {
    id: "am-6",
    title: "CCTV Security",
    category: "amenities",
    url: "/images/hero-day.jpg",
    alt: "24/7 CCTV security monitoring throughout the hotel",
  },
  {
    id: "am-7",
    title: "Room Service",
    category: "amenities",
    url: "/images/food-indian.jpg",
    alt: "24-hour in-room dining and room service",
  },
  {
    id: "am-8",
    title: "Elevator / Lift",
    category: "amenities",
    url: "/images/lobby.jpg",
    alt: "Modern elevator service for all floors",
  },
  {
    id: "am-9",
    title: "Power Backup",
    category: "amenities",
    url: "/images/hero-night.jpg",
    alt: "100% power backup ensuring uninterrupted electricity",
  },
  {
    id: "am-10",
    title: "Car Parking",
    category: "amenities",
    url: "/images/lawn.jpg",
    alt: "Spacious complimentary car parking at Hotel Akosha",
  },
];

// ──────────────────────────────────────────────
// BANQUET & EVENT IMAGES
// ──────────────────────────────────────────────
export const banquetImages = [
  {
    id: "ban-1",
    title: "Wedding Decoration",
    category: "banquet",
    url: "/images/wedding.jpg",
    alt: "Grand wedding decoration in Hotel Akosha banquet hall",
  },
  {
    id: "ban-2",
    title: "Mandap Ceremony Setup",
    category: "banquet",
    url: "/images/wedding.jpg",
    alt: "Traditional Indian mandap ceremony setup with floral decoration",
  },
  {
    id: "ban-3",
    title: "Corporate Conference",
    category: "banquet",
    url: "/images/banquet.jpg",
    alt: "Professional corporate conference setup in hotel banquet hall",
  },
  {
    id: "ban-4",
    title: "Birthday Celebration",
    category: "banquet",
    url: "/images/banquet.jpg",
    alt: "Elegant birthday celebration setup with balloons and decor",
  },
  {
    id: "ban-5",
    title: "Banquet Seating",
    category: "banquet",
    url: "/images/banquet.jpg",
    alt: "Formal banquet seating arrangement for 500+ guests",
  },
  {
    id: "ban-6",
    title: "Lawn Event",
    category: "banquet",
    url: "/images/lawn.jpg",
    alt: "Outdoor lawn event setup under fairy lights",
  },
];

// ──────────────────────────────────────────────
// GALLERY (30+ images covering all areas)
// ──────────────────────────────────────────────
export const galleryImages = [
  // Exterior
  { id: "gal-1",  title: "Hotel Exterior Day",      category: "Exterior",    url: "/images/hero-day.jpg",    alt: "Hotel Akosha exterior daytime view" },
  { id: "gal-2",  title: "Hotel Exterior Night",    category: "Exterior",    url: "/images/hero-night.jpg",  alt: "Hotel Akosha illuminated at night" },
  { id: "gal-3",  title: "Main Entrance",           category: "Exterior",    url: "/images/hero-day.jpg",    alt: "Grand entrance of Hotel Akosha" },
  { id: "gal-4",  title: "Hotel Building Facade",   category: "Exterior",    url: "/images/hero-night.jpg",  alt: "Full building facade with golden lighting" },
  // Lobby
  { id: "gal-5",  title: "Grand Lobby",             category: "Lobby",       url: "/images/lobby.jpg",       alt: "Grand lobby with chandelier" },
  { id: "gal-6",  title: "Reception Desk",          category: "Lobby",       url: "/images/lobby.jpg",       alt: "Elegant reception area" },
  // Rooms
  { id: "gal-7",  title: "Deluxe Room",             category: "Rooms",       url: "/images/room-deluxe.jpg", alt: "Luxury deluxe room with king bed" },
  { id: "gal-8",  title: "Super Deluxe Room",       category: "Rooms",       url: "/images/room-deluxe.jpg", alt: "Super deluxe room interior" },
  { id: "gal-9",  title: "Premium Room",            category: "Rooms",       url: "/images/suite.jpg",       alt: "Premium room with panoramic view" },
  { id: "gal-10", title: "Suite Room",              category: "Rooms",       url: "/images/suite.jpg",       alt: "Presidential suite room" },
  { id: "gal-11", title: "Family Room",             category: "Rooms",       url: "/images/room-deluxe.jpg", alt: "Spacious family room" },
  { id: "gal-12", title: "Room Balcony",            category: "Rooms",       url: "/images/lawn.jpg",        alt: "Room balcony with garden view" },
  // Bathrooms
  { id: "gal-13", title: "Luxury Bathroom",         category: "Bathrooms",   url: "/images/suite.jpg",       alt: "Marble finish luxury bathroom" },
  { id: "gal-14", title: "Rain Shower",             category: "Bathrooms",   url: "/images/suite.jpg",       alt: "Premium rain shower bathroom" },
  // Restaurant
  { id: "gal-15", title: "Restaurant Interior",     category: "Restaurant",  url: "/images/restaurant.jpg",  alt: "Fine dining restaurant interior" },
  { id: "gal-16", title: "Breakfast Buffet",        category: "Restaurant",  url: "/images/food-indian.jpg", alt: "Lavish breakfast buffet" },
  { id: "gal-17", title: "Dinner Setup",            category: "Restaurant",  url: "/images/restaurant.jpg",  alt: "Romantic dinner table setup" },
  // Food
  { id: "gal-18", title: "Indian Cuisine",          category: "Food",        url: "/images/food-indian.jpg", alt: "Authentic Indian cuisine" },
  { id: "gal-19", title: "Multi-Cuisine",           category: "Food",        url: "/images/food-indian.jpg", alt: "International multi-cuisine" },
  { id: "gal-20", title: "Desserts",                category: "Food",        url: "/images/food-indian.jpg", alt: "Luxury dessert spread" },
  { id: "gal-21", title: "Chef's Signature",        category: "Food",        url: "/images/food-indian.jpg", alt: "Chef's signature dishes" },
  // Banquet
  { id: "gal-22", title: "Wedding Banquet",         category: "Banquet",     url: "/images/banquet.jpg",     alt: "Grand wedding banquet setup" },
  { id: "gal-23", title: "Wedding Mandap",          category: "Banquet",     url: "/images/wedding.jpg",     alt: "Traditional mandap ceremony" },
  { id: "gal-24", title: "Corporate Event",         category: "Banquet",     url: "/images/banquet.jpg",     alt: "Corporate conference setup" },
  { id: "gal-25", title: "Banquet Hall Full",       category: "Banquet",     url: "/images/banquet.jpg",     alt: "Full banquet hall view" },
  // Lawn
  { id: "gal-26", title: "Hotel Lawn",              category: "Lawn",        url: "/images/lawn.jpg",        alt: "Lush hotel garden lawn" },
  { id: "gal-27", title: "Outdoor Event",           category: "Lawn",        url: "/images/lawn.jpg",        alt: "Outdoor lawn event setup" },
  // Other Areas
  { id: "gal-28", title: "Hotel Corridor",          category: "Corridors",   url: "/images/lobby.jpg",       alt: "Elegantly lit hotel corridor" },
  { id: "gal-29", title: "Elevator Lobby",          category: "Corridors",   url: "/images/lobby.jpg",       alt: "Modern elevator lobby" },
  { id: "gal-30", title: "Hotel Staircase",         category: "Corridors",   url: "/images/lobby.jpg",       alt: "Grand hotel staircase" },
  { id: "gal-31", title: "Kitchen",                 category: "Kitchen",     url: "/images/food-indian.jpg", alt: "Professional hotel kitchen" },
  { id: "gal-32", title: "Parking Area",            category: "Parking",     url: "/images/hero-day.jpg",    alt: "Spacious hotel parking area" },
  { id: "gal-33", title: "Suite Bedroom",           category: "Rooms",       url: "/images/suite.jpg",       alt: "Luxury suite bedroom" },
  { id: "gal-34", title: "Night Exterior",          category: "Exterior",    url: "/images/hero-night.jpg",  alt: "Hotel Akosha at night" },
  { id: "gal-35", title: "Lawn Night Event",        category: "Lawn",        url: "/images/lawn.jpg",        alt: "Lawn event under night sky" },
];

// ──────────────────────────────────────────────
// CONTACT IMAGES
// ──────────────────────────────────────────────
export const contactImages = [
  {
    id: "con-1",
    title: "Hotel Location Map",
    category: "contact",
    url: "/images/hero-day.jpg",
    alt: "Hotel Akosha location on Google Map",
  },
  {
    id: "con-2",
    title: "Contact Support",
    category: "contact",
    url: "/images/lobby.jpg",
    alt: "Hotel Akosha front desk customer support",
  },
];

// ──────────────────────────────────────────────
// ROOMS DATA (all rooms across all floors)
// ──────────────────────────────────────────────
export const rooms = [
  // Floor 1 – Rooms 101–108
  { roomNumber: "101", roomType: "Deluxe Room",       floor: 1, price: 2499, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "102", roomType: "Deluxe Room",       floor: 1, price: 2499, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "103", roomType: "Super Deluxe",      floor: 1, price: 2999, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "104", roomType: "Super Deluxe",      floor: 1, price: 2999, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "105", roomType: "Deluxe Room",       floor: 1, price: 2499, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "106", roomType: "Deluxe Room",       floor: 1, price: 2499, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "107", roomType: "Premium Room",      floor: 1, price: 3499, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "108", roomType: "Family Room",       floor: 1, price: 3999, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Extra Beds", "Room Service"] },

  // Floor 2 – Rooms 201–212
  { roomNumber: "201", roomType: "Deluxe Room",       floor: 2, price: 2599, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "202", roomType: "Deluxe Room",       floor: 2, price: 2599, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "203", roomType: "Super Deluxe",      floor: 2, price: 3099, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "204", roomType: "Super Deluxe",      floor: 2, price: 3099, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "205", roomType: "Premium Room",      floor: 2, price: 3599, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "206", roomType: "Premium Room",      floor: 2, price: 3599, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "207", roomType: "Deluxe Room",       floor: 2, price: 2599, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "208", roomType: "Deluxe Room",       floor: 2, price: 2599, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "209", roomType: "Family Room",       floor: 2, price: 4199, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Extra Beds", "Room Service"] },
  { roomNumber: "210", roomType: "Suite Room",        floor: 2, price: 5999, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "211", roomType: "Super Deluxe",      floor: 2, price: 3099, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "212", roomType: "Deluxe Room",       floor: 2, price: 2599, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },

  // Floor 3 – Rooms 301–314
  { roomNumber: "301", roomType: "Deluxe Room",       floor: 3, price: 2699, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "302", roomType: "Deluxe Room",       floor: 3, price: 2699, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "303", roomType: "Super Deluxe",      floor: 3, price: 3199, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "304", roomType: "Super Deluxe",      floor: 3, price: 3199, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "305", roomType: "Premium Room",      floor: 3, price: 3699, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "306", roomType: "Premium Room",      floor: 3, price: 3699, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "307", roomType: "Suite Room",        floor: 3, price: 6499, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "308", roomType: "Family Room",       floor: 3, price: 4399, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Extra Beds", "Room Service"] },
  { roomNumber: "309", roomType: "Deluxe Room",       floor: 3, price: 2699, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "310", roomType: "Deluxe Room",       floor: 3, price: 2699, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "311", roomType: "Super Deluxe",      floor: 3, price: 3199, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "312", roomType: "Super Deluxe",      floor: 3, price: 3199, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "313", roomType: "Deluxe Room",       floor: 3, price: 2699, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "314", roomType: "Deluxe Room",       floor: 3, price: 2699, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },

  // Floor 4 – Rooms 401–412
  { roomNumber: "401", roomType: "Premium Room",      floor: 4, price: 3799, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "402", roomType: "Premium Room",      floor: 4, price: 3799, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "403", roomType: "Suite Room",        floor: 4, price: 6999, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "404", roomType: "Super Deluxe",      floor: 4, price: 3299, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "405", roomType: "Super Deluxe",      floor: 4, price: 3299, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "406", roomType: "Deluxe Room",       floor: 4, price: 2799, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "407", roomType: "Deluxe Room",       floor: 4, price: 2799, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },
  { roomNumber: "408", roomType: "Family Room",       floor: 4, price: 4599, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Extra Beds", "Room Service"] },
  { roomNumber: "409", roomType: "Suite Room",        floor: 4, price: 7499, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "410", roomType: "Premium Room",      floor: 4, price: 3799, image: "/images/suite.jpg",       amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "411", roomType: "Super Deluxe",      floor: 4, price: 3299, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "412", roomType: "Deluxe Room",       floor: 4, price: 2799, image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Room Service"] },

  // Floor 5 – Rooms 501–512
  { roomNumber: "501", roomType: "Presidential Suite", floor: 5, price: 12999, image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Butler", "Room Service"] },
  { roomNumber: "502", roomType: "Suite Room",         floor: 5, price: 7999,  image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "503", roomType: "Suite Room",         floor: 5, price: 7999,  image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "504", roomType: "Premium Room",       floor: 5, price: 3999,  image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "505", roomType: "Premium Room",       floor: 5, price: 3999,  image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "506", roomType: "Super Deluxe",       floor: 5, price: 3399,  image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "507", roomType: "Super Deluxe",       floor: 5, price: 3399,  image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
  { roomNumber: "508", roomType: "Family Room",        floor: 5, price: 4799,  image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Extra Beds", "Room Service"] },
  { roomNumber: "509", roomType: "Suite Room",         floor: 5, price: 8499,  image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "510", roomType: "Suite Room",         floor: 5, price: 8499,  image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Jacuzzi", "Room Service"] },
  { roomNumber: "511", roomType: "Premium Room",       floor: 5, price: 3999,  image: "/images/suite.jpg",     amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Mini Bar", "Room Service"] },
  { roomNumber: "512", roomType: "Super Deluxe",       floor: 5, price: 3399,  image: "/images/room-deluxe.jpg", amenities: ["AC", "TV", "Wi-Fi", "Hot Water", "Balcony", "Room Service"] },
];

// ──────────────────────────────────────────────
// HOTEL INFO
// ──────────────────────────────────────────────
export const hotelInfo = {
  name: "Hotel Akosha",
  tagline: "Where Luxury Meets Legacy",
  description: "Experience the pinnacle of hospitality at Hotel Akosha. From grandeur banquet halls to intimate fine dining, every corner of our hotel is crafted with passion and precision to give you an unforgettable stay.",
  address: "123, Main Road, City Center, Your City – 000000",
  phone: "+91 98765 43210",
  email: "info@hotelakosha.com",
  whatsapp: "+919876543210",
  checkin: "12:00 PM",
  checkout: "11:00 AM",
  totalRooms: 56,
  floors: 5,
  established: 2010,
  rating: 4.8,
  reviews: 1247,
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
};

export const stats = [
  { label: "Luxury Rooms", value: 56, suffix: "+" },
  { label: "Years of Excellence", value: 15, suffix: "+" },
  { label: "Happy Guests", value: 50000, suffix: "+" },
  { label: "Star Rating", value: 4.8, suffix: "★" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Delhi",
    rating: 5,
    review: "Hotel Akosha is simply magnificent! The rooms are spacious, the staff is incredibly warm, and the food is out of this world. Our family reunion here was absolutely perfect.",
    avatar: "RS",
    date: "January 2025",
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Mumbai",
    rating: 5,
    review: "We hosted our daughter's wedding at Hotel Akosha and it was a dream come true. The banquet hall was decorated beautifully and the mandap setup was beyond expectations.",
    avatar: "PM",
    date: "February 2025",
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Bangalore",
    rating: 5,
    review: "Stayed for a corporate retreat and was blown away by the professionalism and amenities. The conference facilities were world-class and the rooms were extremely comfortable.",
    avatar: "AK",
    date: "March 2025",
  },
  {
    id: 4,
    name: "Sunita Patel",
    location: "Ahmedabad",
    rating: 5,
    review: "The suite room is absolutely stunning with amazing views. Breakfast buffet was phenomenal. Will definitely come back for our anniversary next year!",
    avatar: "SP",
    date: "April 2025",
  },
];
