
// ===================== HOTELS =====================
export const hotels = [
  { id: 'H001', name: 'The Taj Mahal Palace', city: 'Mumbai', area: 'Colaba, Mumbai', rating: 4.8, status: 'active', rooms: 245, occupiedRooms: 210, revenue: 525000, owner: 'Rajesh Kumar', ownerId: 'OW001', phone: '+91 98765-43215', email: 'reservations@tajmumbai.com', category: 'Luxury', checkIns: 45, image: '🏨' },
  { id: 'H002', name: 'The Leela Palace', city: 'Delhi', area: 'Chanakyapuri, New Delhi', rating: 4.9, status: 'active', rooms: 260, occupiedRooms: 238, revenue: 485000, owner: 'Priya Sharma', ownerId: 'OW002', phone: '+91 98765-43216', email: 'info@leeladelhi.com', category: 'Luxury', checkIns: 52, image: '🏩' },
  { id: 'H003', name: 'Taj Falaknuma Palace', city: 'Hyderabad', area: 'Falaknuma, Hyderabad', rating: 5.0, status: 'active', rooms: 60, occupiedRooms: 58, revenue: 425000, owner: 'Divya Nair', ownerId: 'OW005', phone: '+91 98765-43219', email: 'palace@tajfalaknuma.com', category: 'Heritage', checkIns: 30, image: '🏰' },
  { id: 'H004', name: 'JW Marriott', city: 'Mumbai', area: 'Juhu Beach, Mumbai', rating: 4.7, status: 'active', rooms: 580, occupiedRooms: 504, revenue: 395000, owner: 'Vikram Singh', ownerId: 'OW007', phone: '+91 98765-43221', email: 'info@marriottjuhu.com', category: 'Business', checkIns: 89, image: '🏢' },
  { id: 'H005', name: 'ITC Grand Chola', city: 'Chennai', area: 'Guindy, Chennai', rating: 4.8, status: 'active', rooms: 600, occupiedRooms: 522, revenue: 380000, owner: 'Amit Patel', ownerId: 'OW003', phone: '+91 98765-43222', email: 'grandchola@itchotels.in', category: 'Luxury', checkIns: 76, image: '🏛️' },
  { id: 'H006', name: 'Taj Ganges', city: 'Varanasi', area: 'Nadesar Palace Grounds, Varanasi', rating: 4.6, status: 'active', rooms: 130, occupiedRooms: 102, revenue: 320000, owner: 'Anita Desai', ownerId: 'OW006', phone: '+91 98765-43223', email: 'ganges@tajhotels.com', category: 'Heritage', checkIns: 38, image: '🛕' },
  { id: 'H007', name: 'BrijRama Palace', city: 'Varanasi', area: 'Darbhanga Ghat, Varanasi', rating: 4.9, status: 'active', rooms: 32, occupiedRooms: 28, revenue: 280000, owner: 'Karan Malhotra', ownerId: 'OW005', phone: '+91 98765-43224', email: 'stay@brijrama.com', category: 'Heritage', checkIns: 18, image: '🏯' },
  { id: 'H008', name: 'Suryauday Haveli', city: 'Varanasi', area: 'Shivala Ghat, Varanasi', rating: 4.7, status: 'active', rooms: 18, occupiedRooms: 14, revenue: 150000, owner: 'Neha Gupta', ownerId: 'OW009', phone: '+91 98765-43225', email: 'info@suryauday.com', category: 'Boutique', checkIns: 12, image: '🌅' },
  { id: 'H009', name: 'Hotel Ganges View', city: 'Varanasi', area: 'Assi Ghat, Varanasi', rating: 4.5, status: 'active', rooms: 45, occupiedRooms: 36, revenue: 180000, owner: 'Sanjay Mishra', ownerId: 'OW010', phone: '+91 98765-43226', email: 'stay@gangesview.com', category: 'Standard', checkIns: 22, image: '🌊' },
  { id: 'H010', name: 'The Gateway Hotel Ganges', city: 'Varanasi', area: 'Nadesar, Varanasi', rating: 4.6, status: 'active', rooms: 68, occupiedRooms: 55, revenue: 220000, owner: 'Pradeep Yadav', ownerId: 'OW011', phone: '+91 98765-43227', email: 'gateway.varanasi@tajhotels.com', category: 'Business', checkIns: 29, image: '🚪' },
  { id: 'H011', name: 'The Oberoi', city: 'Bangalore', area: 'MG Road, Bangalore', rating: 4.8, status: 'active', rooms: 168, occupiedRooms: 145, revenue: 350000, owner: 'Sneha Reddy', ownerId: 'OW004', phone: '+91 98765-43228', email: 'reservations@oberoiblr.com', category: 'Luxury', checkIns: 44, image: '🌆' },
  { id: 'H012', name: 'The Oberoi Grand', city: 'Kolkata', area: 'Jawaharlal Nehru Road, Kolkata', rating: 4.7, status: 'inactive', rooms: 209, occupiedRooms: 160, revenue: 290000, owner: 'Anita Desai', ownerId: 'OW006', phone: '+91 98765-43229', email: 'reservations@oberoigrandkol.com', category: 'Heritage', checkIns: 0, image: '🏙️' },
  { id: 'H013', name: 'ITC Rajputana', city: 'Jaipur', area: 'Palace Road, Jaipur', rating: 4.7, status: 'active', rooms: 215, occupiedRooms: 183, revenue: 310000, owner: 'Divya Nair', ownerId: 'OW008', phone: '+91 98765-43230', email: 'rajputana@itchotels.in', category: 'Heritage', checkIns: 55, image: '🏰' },
];

// ===================== OWNERS =====================
export const owners = [
  { id: 'OW001', name: 'Rajesh Kumar', hotelId: 'H001', hotelName: 'The Taj Mahal Palace', email: 'rajesh@tajmumbai.com', phone: '+91 98765-43215', username: 'rkumar', password: 'Raj@1234', city: 'Mumbai', status: 'active', joinDate: '2023-01-15', totalBookings: 1250, revenue: 525000 },
  { id: 'OW002', name: 'Priya Sharma', hotelId: 'H002', hotelName: 'The Leela Palace', email: 'priya@leeladelhi.com', phone: '+91 98765-43216', username: 'psharma', password: 'Pri@5678', city: 'Delhi', status: 'active', joinDate: '2023-02-20', totalBookings: 1480, revenue: 485000 },
  { id: 'OW003', name: 'Amit Patel', hotelId: 'H005', hotelName: 'ITC Grand Chola', email: 'amit@itcgrandchola.com', phone: '+91 98765-43217', username: 'apatel', password: 'Ami@9012', city: 'Chennai', status: 'active', joinDate: '2023-03-10', totalBookings: 980, revenue: 380000 },
  { id: 'OW004', name: 'Sneha Reddy', hotelId: 'H011', hotelName: 'The Oberoi', email: 'sneha@oberoibangalore.com', phone: '+91 98765-43218', username: 'sreddy', password: 'Sne@3456', city: 'Bangalore', status: 'active', joinDate: '2023-04-05', totalBookings: 850, revenue: 350000 },
  { id: 'OW005', name: 'Karan Malhotra', hotelId: 'H003', hotelName: 'Taj Falaknuma Palace', email: 'karan@tajfalaknuma.com', phone: '+91 98765-43219', username: 'kmalhotra', password: 'Kar@7890', city: 'Hyderabad', status: 'active', joinDate: '2023-05-18', totalBookings: 620, revenue: 425000 },
  { id: 'OW006', name: 'Anita Desai', hotelId: 'H012', hotelName: 'The Oberoi Grand', email: 'anita@oberoigrandkolkata.com', phone: '+91 98765-43220', username: 'adesai', password: 'Ani@2345', city: 'Kolkata', status: 'inactive', joinDate: '2023-06-22', totalBookings: 720, revenue: 290000 },
  { id: 'OW007', name: 'Vikram Singh', hotelId: 'H004', hotelName: 'JW Marriott', email: 'vikram@marriottjuhu.com', phone: '+91 98765-43221', username: 'vsingh', password: 'Vik@6789', city: 'Mumbai', status: 'active', joinDate: '2023-07-30', totalBookings: 1100, revenue: 395000 },
  { id: 'OW008', name: 'Divya Nair', hotelId: 'H013', hotelName: 'ITC Rajputana', email: 'divya@itcrajputana.com', phone: '+91 98765-43219', username: 'dnair', password: 'Div@4321', city: 'Jaipur', status: 'active', joinDate: '2023-08-14', totalBookings: 890, revenue: 310000 },
  { id: 'OW009', name: 'Neha Gupta', hotelId: 'H008', hotelName: 'Suryauday Haveli', email: 'neha@suryauday.com', phone: '+91 98765-43225', username: 'ngupta', password: 'Neh@1122', city: 'Varanasi', status: 'active', joinDate: '2023-09-01', totalBookings: 210, revenue: 150000 },
  { id: 'OW010', name: 'Sanjay Mishra', hotelId: 'H009', hotelName: 'Hotel Ganges View', email: 'sanjay@gangesview.com', phone: '+91 98765-43226', username: 'smishra', password: 'San@3344', city: 'Varanasi', status: 'active', joinDate: '2023-09-15', totalBookings: 340, revenue: 180000 },
  { id: 'OW011', name: 'Pradeep Yadav', hotelId: 'H010', hotelName: 'The Gateway Hotel Ganges', email: 'pradeep@gateway.varanasi.com', phone: '+91 98765-43227', username: 'pyadav', password: 'Pra@5566', city: 'Varanasi', status: 'active', joinDate: '2023-10-05', totalBookings: 420, revenue: 220000 },
];

// ===================== BOOKINGS =====================
export const bookings = [
  { id: 'BK001', guestName: 'Rahul Sharma', guestId: 'C001', hotel: 'BrijRama Palace', hotelId: 'H007', room: '101 - Deluxe Suite', checkIn: '2026-03-05', checkOut: '2026-03-08', nights: 3, status: 'confirmed', amount: 18500, paymentStatus: 'paid', phone: '+91 98765-11111', email: 'rahul.sharma@email.com' },
  { id: 'BK002', guestName: 'Priya Patel', guestId: 'C002', hotel: 'The Leela Palace', hotelId: 'H002', room: '205 - River View', checkIn: '2026-03-03', checkOut: '2026-03-10', nights: 7, status: 'checked-in', amount: 42000, paymentStatus: 'paid', phone: '+91 98765-22222', email: 'priya.patel@email.com' },
  { id: 'BK003', guestName: 'Amit Kumar', guestId: 'C003', hotel: 'Taj Falaknuma Palace', hotelId: 'H003', room: '302 - Presidential', checkIn: '2026-03-01', checkOut: '2026-03-04', nights: 3, status: 'checked-out', amount: 55000, paymentStatus: 'paid', phone: '+91 98765-33333', email: 'amit.kumar@email.com' },
  { id: 'BK004', guestName: 'Neha Singh', guestId: 'C004', hotel: 'Suryauday Haveli', hotelId: 'H008', room: '108 - Standard Room', checkIn: '2026-03-06', checkOut: '2026-03-07', nights: 1, status: 'confirmed', amount: 8500, paymentStatus: 'pending', phone: '+91 98765-44444', email: 'neha.singh@email.com' },
  { id: 'BK005', guestName: 'Vikram Malhotra', guestId: 'C005', hotel: 'Hotel Ganges View', hotelId: 'H009', room: '201 - Heritage Suite', checkIn: '2026-03-04', checkOut: '2026-03-09', nights: 5, status: 'checked-in', amount: 32000, paymentStatus: 'paid', phone: '+91 98765-55555', email: 'vikram.malhotra@email.com' },
  { id: 'BK006', guestName: 'Ananya Verma', guestId: 'C006', hotel: 'The Gateway Hotel Ganges', hotelId: 'H010', room: '105 - Deluxe', checkIn: '2026-02-28', checkOut: '2026-03-02', nights: 2, status: 'cancelled', amount: 0, paymentStatus: 'refunded', phone: '+91 98765-66666', email: 'ananya.verma@email.com' },
  { id: 'BK007', guestName: 'Siddharth Joshi', guestId: 'C007', hotel: 'The Taj Mahal Palace', hotelId: 'H001', room: '401 - Sea View Suite', checkIn: '2026-03-08', checkOut: '2026-03-12', nights: 4, status: 'confirmed', amount: 72000, paymentStatus: 'paid', phone: '+91 98765-77777', email: 'siddharth.joshi@email.com' },
  { id: 'BK008', guestName: 'Kavya Menon', guestId: 'C008', hotel: 'The Oberoi', hotelId: 'H011', room: '310 - Premier Room', checkIn: '2026-03-07', checkOut: '2026-03-09', nights: 2, status: 'checked-in', amount: 28000, paymentStatus: 'paid', phone: '+91 98765-88888', email: 'kavya.menon@email.com' },
  { id: 'BK009', guestName: 'Arjun Nair', guestId: 'C009', hotel: 'JW Marriott', hotelId: 'H004', room: '512 - Business Suite', checkIn: '2026-03-10', checkOut: '2026-03-13', nights: 3, status: 'confirmed', amount: 38500, paymentStatus: 'pending', phone: '+91 98765-99999', email: 'arjun.nair@email.com' },
  { id: 'BK010', guestName: 'Pooja Agarwal', guestId: 'C010', hotel: 'ITC Grand Chola', hotelId: 'H005', room: '220 - Club Room', checkIn: '2026-03-02', checkOut: '2026-03-06', nights: 4, status: 'checked-out', amount: 45000, paymentStatus: 'paid', phone: '+91 98765-10101', email: 'pooja.agarwal@email.com' },
  { id: 'BK011', guestName: 'Rohit Verma', guestId: 'C011', hotel: 'Taj Ganges', hotelId: 'H006', room: '115 - Ganges View', checkIn: '2026-03-09', checkOut: '2026-03-11', nights: 2, status: 'confirmed', amount: 22000, paymentStatus: 'paid', phone: '+91 98765-11100', email: 'rohit.verma@email.com' },
  { id: 'BK012', guestName: 'Meera Krishnan', guestId: 'C012', hotel: 'ITC Rajputana', hotelId: 'H013', room: '330 - Royal Suite', checkIn: '2026-03-05', checkOut: '2026-03-08', nights: 3, status: 'checked-out', amount: 35000, paymentStatus: 'paid', phone: '+91 98765-12121', email: 'meera.krishnan@email.com' },
];

// ===================== CUSTOMERS =====================
export const customers = [
  { id: 'C001', name: 'Rahul Sharma', email: 'rahul.sharma@email.com', phone: '+91 98765-11111', city: 'Mumbai', state: 'Maharashtra', joinDate: '2024-05-10', totalBookings: 15, upcomingBookings: 2, totalSpent: 485000, avgSpend: 32333, loyaltyTier: 'PLATINUM', status: 'active' },
  { id: 'C002', name: 'Priya Patel', email: 'priya.patel@email.com', phone: '+91 98765-22222', city: 'Delhi', state: 'Delhi', joinDate: '2024-06-15', totalBookings: 12, upcomingBookings: 1, totalSpent: 320000, avgSpend: 26667, loyaltyTier: 'PLATINUM', status: 'active' },
  { id: 'C003', name: 'Amit Kumar', email: 'amit.kumar@email.com', phone: '+91 98765-33333', city: 'Bangalore', state: 'Karnataka', joinDate: '2024-07-20', totalBookings: 8, upcomingBookings: 0, totalSpent: 185000, avgSpend: 23125, loyaltyTier: 'GOLD', status: 'active' },
  { id: 'C004', name: 'Neha Singh', email: 'neha.singh@email.com', phone: '+91 98765-44444', city: 'Chennai', state: 'Tamil Nadu', joinDate: '2024-08-05', totalBookings: 5, upcomingBookings: 1, totalSpent: 95000, avgSpend: 19000, loyaltyTier: 'GOLD', status: 'active' },
  { id: 'C005', name: 'Vikram Malhotra', email: 'vikram.malhotra@email.com', phone: '+91 98765-55555', city: 'Hyderabad', state: 'Telangana', joinDate: '2024-09-12', totalBookings: 20, upcomingBookings: 3, totalSpent: 620000, avgSpend: 31000, loyaltyTier: 'PLATINUM', status: 'active' },
  { id: 'C006', name: 'Ananya Verma', email: 'ananya.verma@email.com', phone: '+91 98765-66666', city: 'Kolkata', state: 'West Bengal', joinDate: '2025-01-18', totalBookings: 3, upcomingBookings: 0, totalSpent: 82000, avgSpend: 27333, loyaltyTier: 'BRONZE', status: 'active' },
  { id: 'C007', name: 'Siddharth Joshi', email: 'siddharth.joshi@email.com', phone: '+91 98765-77777', city: 'Pune', state: 'Maharashtra', joinDate: '2024-11-22', totalBookings: 7, upcomingBookings: 1, totalSpent: 210000, avgSpend: 30000, loyaltyTier: 'GOLD', status: 'active' },
  { id: 'C008', name: 'Kavya Menon', email: 'kavya.menon@email.com', phone: '+91 98765-88888', city: 'Kochi', state: 'Kerala', joinDate: '2025-02-14', totalBookings: 4, upcomingBookings: 0, totalSpent: 110000, avgSpend: 27500, loyaltyTier: 'SILVER', status: 'active' },
  { id: 'C009', name: 'Arjun Nair', email: 'arjun.nair@email.com', phone: '+91 98765-99999', city: 'Jaipur', state: 'Rajasthan', joinDate: '2024-12-01', totalBookings: 9, upcomingBookings: 1, totalSpent: 245000, avgSpend: 27222, loyaltyTier: 'GOLD', status: 'active' },
  { id: 'C010', name: 'Pooja Agarwal', email: 'pooja.agarwal@email.com', phone: '+91 98765-10101', city: 'Ahmedabad', state: 'Gujarat', joinDate: '2025-03-05', totalBookings: 2, upcomingBookings: 0, totalSpent: 48000, avgSpend: 24000, loyaltyTier: 'BRONZE', status: 'active' },
  { id: 'C011', name: 'Rohit Verma', email: 'rohit.verma@email.com', phone: '+91 98765-11100', city: 'Varanasi', state: 'Uttar Pradesh', joinDate: '2025-04-10', totalBookings: 6, upcomingBookings: 0, totalSpent: 155000, avgSpend: 25833, loyaltyTier: 'SILVER', status: 'inactive' },
  { id: 'C012', name: 'Meera Krishnan', email: 'meera.krishnan@email.com', phone: '+91 98765-12121', city: 'Chennai', state: 'Tamil Nadu', joinDate: '2025-05-20', totalBookings: 4, upcomingBookings: 1, totalSpent: 125000, avgSpend: 31250, loyaltyTier: 'SILVER', status: 'active' },
];

// ===================== DISCOUNTS =====================
export const discounts = [
  { id: 'D001', code: 'SUMMER25', hotel: 'Grand Plaza Hotel', hotelId: 'H001', type: 'percentage', discount: 25, validFrom: '2026-06-01', validTo: '2026-08-31', usageCount: 45, maxUsage: 100, roomTypes: ['Deluxe Suite', 'Standard'], status: 'active' },
  { id: 'D002', code: 'WEEKEND20', hotel: 'Seaside Resort', hotelId: 'H002', type: 'percentage', discount: 20, validFrom: '2026-03-01', validTo: '2026-03-31', usageCount: 38, maxUsage: 80, roomTypes: ['Ocean View', 'All Rooms'], status: 'active' },
  { id: 'D003', code: 'WINTER30', hotel: 'Grand Plaza Hotel', hotelId: 'H001', type: 'percentage', discount: 30, validFrom: '2025-12-01', validTo: '2026-01-31', usageCount: 80, maxUsage: 100, roomTypes: ['All Rooms'], status: 'expired' },
  { id: 'D004', code: 'EARLYBIRD15', hotel: 'Sunset Paradise', hotelId: 'H003', type: 'percentage', discount: 15, validFrom: '2026-01-01', validTo: '2026-12-31', usageCount: 67, maxUsage: 200, roomTypes: ['All Rooms'], status: 'active' },
  { id: 'D005', code: 'FLASH40', hotel: 'City Center Inn', hotelId: 'H004', type: 'percentage', discount: 40, validFrom: '2026-03-01', validTo: '2026-03-05', usageCount: 22, maxUsage: 30, roomTypes: ['Standard Room'], status: 'expired' },
  { id: 'D006', code: 'LASTMIN50', hotel: 'Mountain View Lodge', hotelId: 'H005', type: 'fixed', discount: 5000, validFrom: '2026-01-01', validTo: '2026-12-31', usageCount: 15, maxUsage: 50, roomTypes: ['All Rooms'], status: 'active' },
  { id: 'D007', code: 'SPRING18', hotel: 'Royal Suites', hotelId: 'H007', type: 'seasonal', discount: 18, validFrom: '2026-03-20', validTo: '2026-05-31', usageCount: 0, maxUsage: 100, roomTypes: ['Suite', 'Deluxe'], status: 'active' },
];

// ===================== REVENUE =====================
export const monthlyRevenue = [
  { month: 'Jan', revenue: 120000, bookings: 245 },
  { month: 'Feb', revenue: 145000, bookings: 289 },
  { month: 'Mar', revenue: 168000, bookings: 320 },
  { month: 'Apr', revenue: 152000, bookings: 298 },
  { month: 'May', revenue: 178000, bookings: 335 },
  { month: 'Jun', revenue: 225000, bookings: 440 },
  { month: 'Jul', revenue: 198000, bookings: 380 },
  { month: 'Aug', revenue: 210000, bookings: 410 },
  { month: 'Sep', revenue: 185000, bookings: 360 },
  { month: 'Oct', revenue: 220000, bookings: 420 },
  { month: 'Nov', revenue: 240000, bookings: 460 },
  { month: 'Dec', revenue: 260000, bookings: 500 },
];

export const revenueByHotel = [
  { name: 'The Taj Mahal Palace', revenue: 525000, share: 17, growth: '+12%', trend: 'Growing' },
  { name: 'The Leela Palace', revenue: 485000, share: 16, growth: '+8%', trend: 'Growing' },
  { name: 'Taj Falaknuma Palace', revenue: 425000, share: 14, growth: '+22%', trend: 'Growing' },
  { name: 'JW Marriott', revenue: 395000, share: 13, growth: '+5%', trend: 'Growing' },
  { name: 'ITC Grand Chola', revenue: 380000, share: 12, growth: '+15%', trend: 'Growing' },
  { name: 'Taj Ganges', revenue: 320000, share: 10, growth: '+8%', trend: 'Growing' },
  { name: 'Royal Suites', revenue: 88000, share: 8, growth: '+5%', trend: 'Growing' },
  { name: 'Mountain View Lodge', revenue: 65000, share: 6, growth: '+15%', trend: 'Growing' },
  { name: 'Lakefront Hotel', revenue: 52000, share: 4, growth: '+22%', trend: 'Growing' },
  { name: 'Heritage Palace', revenue: 45000, share: 4, growth: '-8%', trend: 'Declining' },
];

export const transactions = [
  { id: 'TXN001', bookingId: 'BK2845', hotel: 'Sunset Paradise', guest: 'John Doe', amount: 2400, date: '2026-03-03', status: 'completed' },
  { id: 'TXN002', bookingId: 'BK2846', hotel: 'Seaside Resort', guest: 'Jane Smith', amount: 1800, date: '2026-03-03', status: 'completed' },
  { id: 'TXN003', bookingId: 'BK2847', hotel: 'Grand Plaza', guest: 'Mike Johnson', amount: 1500, date: '2026-03-02', status: 'pending' },
  { id: 'TXN004', bookingId: 'BK2848', hotel: 'Mountain View', guest: 'Sarah Williams', amount: 980, date: '2026-03-02', status: 'completed' },
  { id: 'TXN005', bookingId: 'BK2849', hotel: 'Royal Suites', guest: 'David Brown', amount: 2200, date: '2026-03-02', status: 'completed' },
  { id: 'TXN006', bookingId: 'BK2850', hotel: 'City Center', guest: 'Lisa Anderson', amount: 750, date: '2026-03-01', status: 'refunded' },
  { id: 'TXN007', bookingId: 'BK2851', hotel: 'Lakefront Hotel', guest: 'Robert Taylor', amount: 1200, date: '2026-03-01', status: 'completed' },
  { id: 'TXN008', bookingId: 'BK2852', hotel: 'Heritage Palace', guest: 'Emily Davis', amount: 1650, date: '2026-03-01', status: 'pending' },
];

// ===================== COLLABORATIONS =====================
export const cities = [
  { id: 'C1', name: 'Mumbai', hotels: 15, stores: 52 },
  { id: 'C2', name: 'Delhi', hotels: 14, stores: 48 },
  { id: 'C3', name: 'Bangalore', hotels: 12, stores: 38 },
  { id: 'C4', name: 'Hyderabad', hotels: 10, stores: 32 },
  { id: 'C5', name: 'Chennai', hotels: 9, stores: 28 },
  { id: 'C6', name: 'Kolkata', hotels: 8, stores: 25 },
  { id: 'C7', name: 'Jaipur', hotels: 7, stores: 22 },
  { id: 'C8', name: 'Varanasi', hotels: 6, stores: 20 },
];

export const fashionStores = [
  { id: 'FS001', name: 'FabIndia - Bandra', city: 'Mumbai', category: 'Ethnic', owner: 'Rajesh Kumar', discount: 20, rating: 4.8, redemptions: 285, revenue: 14300, phone: '+91 98765-43210', email: 'bandra@fabindia.com', status: 'active', brand: 'FabIndia' },
  { id: 'FS002', name: 'Westside - Connaught Place', city: 'Delhi', category: 'Fashion', owner: 'Sunita Rao', discount: 15, rating: 4.5, redemptions: 210, revenue: 12500, phone: '+91 98765-43211', email: 'cp@westside.com', status: 'active', brand: 'Westside' },
  { id: 'FS003', name: 'Biba - Phoenix Mall', city: 'Mumbai', category: 'Ethnic', owner: 'Meena Joshi', discount: 18, rating: 4.6, redemptions: 195, revenue: 10800, phone: '+91 98765-43212', email: 'phoenix@biba.in', status: 'active', brand: 'Biba' },
  { id: 'FS004', name: 'Manyavar - Lajpat Nagar', city: 'Delhi', category: 'Ethnic', owner: 'Harish Gupta', discount: 12, rating: 4.7, redemptions: 320, revenue: 18500, phone: '+91 98765-43213', email: 'lajpat@manyavar.com', status: 'active', brand: 'Manyavar' },
  { id: 'FS005', name: 'Sabyasachi - Kala Ghoda', city: 'Mumbai', category: 'Designer', owner: 'Ritu Chopra', discount: 10, rating: 4.9, redemptions: 195, revenue: 19500, phone: '+91 98765-43214', email: 'kalagoda@sabyasachi.com', status: 'active', brand: 'Sabyasachi' },
  { id: 'FS006', name: 'Tanishq - MG Road', city: 'Bangalore', category: 'Jewelry', owner: 'Anand Pillai', discount: 8, rating: 4.8, redemptions: 175, revenue: 25000, phone: '+91 98765-43215', email: 'mgroad@tanishq.com', status: 'active', brand: 'Tanishq' },
  { id: 'FS007', name: 'Zara - Inorbit Mall', city: 'Hyderabad', category: 'Fashion', owner: 'Prerna Shah', discount: 15, rating: 4.4, redemptions: 380, revenue: 22000, phone: '+91 98765-43216', email: 'inorbit@zara.com', status: 'active', brand: 'Zara' },
  { id: 'FS008', name: 'H&M - Select Citywalk', city: 'Delhi', category: 'Fashion', owner: 'Vikas Malhotra', discount: 20, rating: 4.3, redemptions: 420, revenue: 19800, phone: '+91 98765-43217', email: 'citywalk@hm.com', status: 'active', brand: 'H&M' },
  { id: 'FS009', name: 'Louis Philippe - Forum Mall', city: 'Bangalore', category: 'Luxury', owner: 'Suresh Iyer', discount: 12, rating: 4.7, redemptions: 145, revenue: 18500, phone: '+91 98765-43218', email: 'forum@louisphilippe.com', status: 'active', brand: 'Louis Philippe' },
  { id: 'FS010', name: 'Ritu Kumar - Santushti', city: 'Delhi', category: 'Designer', owner: 'Kavitha Nair', discount: 10, rating: 4.8, redemptions: 98, revenue: 14200, phone: '+91 98765-43219', email: 'santushti@ritukumar.com', status: 'active', brand: 'Ritu Kumar' },
  { id: 'FS011', name: 'Myntra Experience - Koramangala', city: 'Bangalore', category: 'Fashion', owner: 'Aditya Singh', discount: 25, rating: 4.5, redemptions: 520, revenue: 28000, phone: '+91 98765-43220', email: 'koramangala@myntra.com', status: 'active', brand: 'Myntra' },
  { id: 'FS012', name: 'Tanishq - Anna Nagar', city: 'Chennai', category: 'Jewelry', owner: 'Lakshmi Subramanian', discount: 8, rating: 4.9, redemptions: 170, revenue: 26800, phone: '+91 98765-43221', email: 'annanagar@tanishq.com', status: 'active', brand: 'Tanishq' },
];

// ===================== ACTIVITY LOG =====================
export const activityLog = [
  { id: 1, action: 'New booking created', detail: 'BK001 - Rahul Sharma at BrijRama Palace', time: '2 min ago', type: 'booking' },
  { id: 2, action: 'Hotel status updated', detail: 'The Oberoi Grand marked as Inactive', time: '15 min ago', type: 'hotel' },
  { id: 3, action: 'New customer registered', detail: 'Meera Krishnan joined the platform', time: '1 hr ago', type: 'customer' },
  { id: 4, action: 'Discount created', detail: 'SPRING18 created by Royal Suites', time: '2 hrs ago', type: 'discount' },
  { id: 5, action: 'Payment received', detail: '₹55,000 from Amit Kumar (BK003)', time: '3 hrs ago', type: 'payment' },
  { id: 6, action: 'New hotel added', detail: 'ITC Rajputana added to platform', time: '5 hrs ago', type: 'hotel' },
  { id: 7, action: 'Booking cancelled', detail: 'BK006 - Ananya Verma cancelled', time: '6 hrs ago', type: 'booking' },
  { id: 8, action: 'Owner account created', detail: 'Pradeep Yadav - Gateway Hotel Ganges', time: '1 day ago', type: 'owner' },
];

export const topHotels = [
  { rank: 1, name: 'The Taj Mahal Palace', owner: 'Amit Patel', revenue: 525000, color: '#f59e0b' },
  { rank: 2, name: 'The Leela Palace', owner: 'Sneha Reddy', revenue: 485000, color: '#6b7280' },
  { rank: 3, name: 'Taj Falaknuma Palace', owner: 'Divya Nair', revenue: 425000, color: '#d97706' },
];

export const avgBookingData = [
  { month: 'Jan', avg: 490 }, { month: 'Feb', avg: 500 }, { month: 'Mar', avg: 495 },
  { month: 'Apr', avg: 510 }, { month: 'May', avg: 505 }, { month: 'Jun', avg: 498 },
  { month: 'Jul', avg: 520 }, { month: 'Aug', avg: 515 }, { month: 'Sep', avg: 508 },
  { month: 'Oct', avg: 525 }, { month: 'Nov', avg: 530 }, { month: 'Dec', avg: 540 },
];

export const revenueBySource = [
  { source: 'Direct Booking', percent: 0.35, color: '#3b82f6' },
  { source: 'Online Travel', percent: 0.28, color: '#10b981' },
  { source: 'Corporate', percent: 0.20, color: '#f59e0b' },
  { source: 'Walk-in', percent: 0.10, color: '#8b5cf6' },
  { source: 'Travel Agent', percent: 0.07, color: '#ef4444' },
];
