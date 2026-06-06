'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Download, MoreVertical, Eye, Edit2, Calendar, X, Check } from 'lucide-react';
import { bookings } from '@/lib/mockData';

type Booking = typeof bookings[0];

export default function BookingsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [bookingList, setBookingList] = useState(bookings);
  const [viewBooking, setViewBooking] = useState<Booking | null>(null);
  const [editBooking, setEditBooking] = useState<Booking | null>(null);

  const filtered = bookingList.filter(b => {
    const matchSearch = b.guestName.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.hotel.toLowerCase().includes(search.toLowerCase()) ||
      b.room.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleStatusChange = (id: string, newStatus: string) => {
    setBookingList(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>All Bookings</h1>
          <p>View all bookings across all hotels on the platform</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">Recent Bookings</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn btn-outline btn-sm" onClick={() => setShowFilters(true)}>
              <Filter size={14} /> Advanced Filters
            </button>
            <button className="btn btn-outline btn-sm" onClick={() => alert('Exporting bookings...')}>
              <Download size={14} /> Export
            </button>
          </div>
        </div>

        <div style={{ padding: '14px 20px', borderBottom: '1px solid #f1f5f9' }}>
          <div className="filter-row" style={{ marginBottom: 0 }}>
            <div className="search-bar">
              <Search className="search-icon" size={15} />
              <input placeholder="Search bookings..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="checked-in">Checked-in</option>
              <option value="checked-out">Checked-out</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Guest Name</th>
                <th>Hotel</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(b => (
                <tr key={b.id}>
                  <td><strong>{b.id}</strong></td>
                  <td>
                    <Link href={`/customers/${b.guestId}`} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>
                      {b.guestName}
                    </Link>
                  </td>
                  <td style={{ fontSize: 13 }}>{b.hotel}</td>
                  <td style={{ color: '#f59e0b', fontWeight: 500 }}>{b.room}</td>
                  <td>{b.checkIn}</td>
                  <td>{b.checkOut}</td>
                  <td><span className={`badge badge-${b.status}`}>{b.status}</span></td>
                  <td><strong>₹{b.amount.toLocaleString('en-IN')}</strong></td>
                  <td><BookingActionMenu booking={b} onView={() => setViewBooking(b)} onEdit={() => setEditBooking(b)} onStatusChange={handleStatusChange} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9' }}>
          <span style={{ fontSize: 13, color: '#6b7280' }}>Showing {filtered.length} of {bookingList.length} bookings</span>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="btn btn-outline btn-sm">← Prev</button>
            <button className="btn btn-primary btn-sm">1</button>
            <button className="btn btn-outline btn-sm">2</button>
            <button className="btn btn-outline btn-sm">Next →</button>
          </div>
        </div>
      </div>

      {/* Top Performing Hotels */}
      <div className="section mt-6">
        <h2 className="section-title" style={{ marginBottom: 16 }}>Top Performing Hotels</h2>
        <div className="top-hotels-grid">
          {[
            { rank: 1, name: 'The Taj Mahal Palace', owner: 'Amit Patel', revenue: 525000, color: '#f59e0b' },
            { rank: 2, name: 'The Leela Palace', owner: 'Sneha Reddy', revenue: 485000, color: '#6b7280' },
            { rank: 3, name: 'Taj Falaknuma Palace', owner: 'Divya Nair', revenue: 425000, color: '#d97706' },
          ].map(h => (
            <div key={h.rank} className="top-hotel-card">
              <div className={`rank-badge rank-${h.rank}`}>#{h.rank}</div>
              <div className="top-hotel-name">{h.name}</div>
              <div className="top-hotel-owner">{h.owner}</div>
              <div className="top-hotel-revenue">
                <span className="arrow">↗</span>
                ₹{h.revenue.toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <>
          <div className="drawer-overlay" onClick={() => setShowFilters(false)} />
          <div className="drawer">
            <div className="drawer-header">
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Advanced Filters</div>
                <div style={{ fontSize: 12.5, color: '#6b7280' }}>Refine your search with advanced filter options</div>
              </div>
              <button className="btn-icon" onClick={() => setShowFilters(false)}><X size={16} /></button>
            </div>
            <div className="drawer-body">
              <div className="form-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <Calendar size={15} style={{ color: '#6b7280' }} />
                  <strong style={{ fontSize: 13 }}>Date Range</strong>
                </div>
                <div className="form-row">
                  <div><label className="form-label">From</label><input type="date" className="form-control" /></div>
                  <div><label className="form-label">To</label><input type="date" className="form-control" /></div>
                </div>
              </div>
              <div className="form-group">
                <strong style={{ fontSize: 13, display: 'block', marginBottom: 10 }}>Booking Status</strong>
                {['Confirmed', 'Checked-in', 'Checked-out', 'Cancelled'].map(s => (
                  <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, cursor: 'pointer', fontSize: 13 }}>
                    <input type="checkbox" /> {s}
                  </label>
                ))}
              </div>
              <div className="form-group">
                <strong style={{ fontSize: 13, display: 'block', marginBottom: 8 }}>Booking Amount</strong>
                <input type="range" style={{ width: '100%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b7280' }}><span>₹0</span><span>₹500K</span></div>
              </div>
              <div className="form-group">
                <strong style={{ fontSize: 13, display: 'block', marginBottom: 8 }}>Number of Nights</strong>
                <select className="form-control form-select">
                  <option>Select duration</option>
                  <option>1 night</option>
                  <option>2-3 nights</option>
                  <option>4-7 nights</option>
                  <option>7+ nights</option>
                </select>
              </div>
            </div>
            <div className="drawer-footer">
              <button className="btn btn-ghost flex-1"><X size={14} /> Clear All</button>
              <button className="btn btn-dark flex-1" onClick={() => setShowFilters(false)}>Apply Filters</button>
            </div>
          </div>
        </>
      )}

      {/* View Booking Modal */}
      {viewBooking && (
        <div className="modal-overlay" onClick={() => setViewBooking(null)}>
          <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div className="modal-title">Booking {viewBooking.id}</div>
                <div className="modal-subtitle">{viewBooking.hotel}</div>
              </div>
              <button className="btn-icon" onClick={() => setViewBooking(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Guest</div><div style={{ fontWeight: 600 }}>{viewBooking.guestName}</div></div>
                <div><div className="form-label">Room</div><div style={{ color: '#f59e0b', fontWeight: 600 }}>{viewBooking.room}</div></div>
              </div>
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Check-in</div><div>{viewBooking.checkIn}</div></div>
                <div><div className="form-label">Check-out</div><div>{viewBooking.checkOut}</div></div>
              </div>
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Status</div><span className={`badge badge-${viewBooking.status}`}>{viewBooking.status}</span></div>
                <div><div className="form-label">Amount</div><div style={{ fontWeight: 700, color: '#16a34a' }}>₹{viewBooking.amount.toLocaleString('en-IN')}</div></div>
              </div>
              <div className="form-row">
                <div><div className="form-label">Phone</div><div>{viewBooking.phone}</div></div>
                <div><div className="form-label">Email</div><div style={{ color: '#2563eb' }}>{viewBooking.email}</div></div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setViewBooking(null)}>Close</button>
              <button className="btn btn-primary" onClick={() => { setEditBooking(viewBooking); setViewBooking(null); }}>Edit Booking</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Booking Modal */}
      {editBooking && (
        <div className="modal-overlay" onClick={() => setEditBooking(null)}>
          <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div><div className="modal-title">Edit Booking {editBooking.id}</div></div>
              <button className="btn-icon" onClick={() => setEditBooking(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group"><label className="form-label">Check-in Date</label><input type="date" className="form-control" defaultValue={editBooking.checkIn} /></div>
                <div className="form-group"><label className="form-label">Check-out Date</label><input type="date" className="form-control" defaultValue={editBooking.checkOut} /></div>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control form-select" defaultValue={editBooking.status}>
                  <option value="confirmed">Confirmed</option>
                  <option value="checked-in">Checked-in</option>
                  <option value="checked-out">Checked-out</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Room</label>
                <input className="form-control" defaultValue={editBooking.room} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setEditBooking(null)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => { alert('Booking updated!'); setEditBooking(null); }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BookingActionMenu({ booking, onView, onEdit, onStatusChange }: { booking: any; onView: () => void; onEdit: () => void; onStatusChange: (id: string, s: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="action-menu-wrapper">
      <button className="btn-icon" onClick={() => setOpen(!open)}><MoreVertical size={16} /></button>
      {open && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setOpen(false)} />
          <div className="action-menu">
            <button className="action-menu-item" onClick={() => { onView(); setOpen(false); }}><Eye size={14} /> View Details</button>
            <button className="action-menu-item" onClick={() => { onEdit(); setOpen(false); }}><Edit2 size={14} /> Edit Booking</button>
            <button className="action-menu-item" onClick={() => { onStatusChange(booking.id, 'checked-in'); setOpen(false); }}><Check size={14} /> Check In</button>
            <button className="action-menu-item" onClick={() => { onStatusChange(booking.id, 'checked-out'); setOpen(false); }}><Calendar size={14} /> Check Out</button>
            <button className="action-menu-item danger" onClick={() => { onStatusChange(booking.id, 'cancelled'); setOpen(false); }}>✕ Cancel</button>
          </div>
        </>
      )}
    </div>
  );
}
