'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import {
  Building2, TrendingUp, DollarSign, CalendarCheck,
  Filter, Download, MoreVertical, Eye, Edit2, Calendar
} from 'lucide-react';
import {
  hotels, bookings, monthlyRevenue, topHotels, activityLog
} from '@/lib/mockData';

const today = new Date();
const dateStr = today.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

export default function DashboardPage() {
  const [showFilters, setShowFilters] = useState(false);
  const totalRevenue = hotels.reduce((s, h) => s + h.revenue, 0);
  const totalRooms = hotels.reduce((s, h) => s + h.rooms, 0);
  const occupiedRooms = hotels.reduce((s, h) => s + h.occupiedRooms, 0);
  const occupancyRate = ((occupiedRooms / totalRooms) * 100).toFixed(1);

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <h1>Maynstayy Hotels and more.....</h1>
          <p>Manage all hotels and bookings from one place</p>
        </div>
        <div className="current-date">
          <span>Current Date</span>
          <strong>{dateStr}</strong>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Total Hotels</span>
            <div className="kpi-icon blue"><Building2 size={20} /></div>
          </div>
          <div className="kpi-value">{hotels.length}</div>
          <div className="kpi-sub">{hotels.filter(h => h.status === 'active').length} active</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Platform Occupancy</span>
            <div className="kpi-icon green">🏨</div>
          </div>
          <div className="kpi-value">{occupancyRate}%</div>
          <div className="kpi-sub neutral">{occupiedRooms}/{totalRooms} rooms</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Total Revenue</span>
            <div className="kpi-icon purple"><DollarSign size={20} /></div>
          </div>
          <div className="kpi-value">₹{Math.round(totalRevenue / 1000)}K</div>
          <div className="kpi-sub">+22% from last month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Total Bookings</span>
            <div className="kpi-icon orange"><CalendarCheck size={20} /></div>
          </div>
          <div className="kpi-value">332</div>
          <div className="kpi-sub">+15% this month</div>
        </div>
      </div>

      {/* Hotels Overview */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Hotels Overview</h2>
          <Link href="/hotels" className="btn btn-ghost btn-sm">View All →</Link>
        </div>
        <div className="hotel-overview-grid">
          {hotels.slice(0, 4).map(h => (
            <div key={h.id} className="hotel-overview-card">
              <div className="hotel-overview-name">{h.name}</div>
              <div className="hotel-overview-city">{h.area}</div>
              <div className="hotel-overview-stat">
                <span>Occupancy:</span>
                <span>{Math.round((h.occupiedRooms / h.rooms) * 100)}%</span>
              </div>
              <div style={{ margin: '4px 0 6px' }}>
                <div className="progress-bar">
                  <div className="progress-fill green" style={{ width: `${(h.occupiedRooms / h.rooms) * 100}%` }} />
                </div>
              </div>
              <div className="hotel-overview-stat">
                <span>Revenue:</span>
                <span className="green">₹{Math.round(h.revenue / 1000)}K</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="section">
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Recent Bookings</div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-outline btn-sm" onClick={() => setShowFilters(!showFilters)}>
                <Filter size={14} /> Advanced Filters
              </button>
              <button className="btn btn-outline btn-sm">
                <Download size={14} /> Export
              </button>
            </div>
          </div>
          {showFilters && <FiltersPanel onClose={() => setShowFilters(false)} />}
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Guest Name</th>
                  <th>Room</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.slice(0, 6).map(b => (
                  <tr key={b.id}>
                    <td><strong>{b.id}</strong></td>
                    <td>
                      <Link href={`/customers/${b.guestId}`} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>
                        {b.guestName}
                      </Link>
                    </td>
                    <td style={{ color: '#f59e0b', fontWeight: 500 }}>{b.room}</td>
                    <td>{b.checkIn}</td>
                    <td>{b.checkOut}</td>
                    <td><span className={`badge badge-${b.status}`}>{b.status}</span></td>
                    <td><strong>₹{b.amount.toLocaleString('en-IN')}</strong></td>
                    <td><ActionMenu bookingId={b.id} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Top Performing Hotels */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Top Performing Hotels</h2>
        </div>
        <div className="top-hotels-grid">
          {topHotels.map(h => (
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

      {/* Charts */}
      <div className="chart-grid-2">
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Platform Revenue Trend</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyRevenue.slice(0, 6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v: any) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Revenue']} />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} name="Revenue (₹)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Monthly Bookings</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyRevenue.slice(0, 6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="bookings" fill="#10b981" radius={[4, 4, 0, 0]} name="Bookings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function ActionMenu({ bookingId }: { bookingId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="action-menu-wrapper">
      <button className="btn-icon" onClick={() => setOpen(!open)}>
        <MoreVertical size={16} />
      </button>
      {open && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setOpen(false)} />
          <div className="action-menu" style={{ zIndex: 100 }}>
            <Link href={`/bookings/${bookingId}`} className="action-menu-item" onClick={() => setOpen(false)}>
              <Eye size={14} /> View Details
            </Link>
            <button className="action-menu-item" onClick={() => { alert(`Editing ${bookingId}`); setOpen(false); }}>
              <Edit2 size={14} /> Edit Booking
            </button>
            <button className="action-menu-item" onClick={() => { alert(`Check-in for ${bookingId}`); setOpen(false); }}>
              <Calendar size={14} /> Check In
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function FiltersPanel({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<string[]>([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const toggleStatus = (s: string) =>
    setStatus(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 380, background: 'white', zIndex: 500, boxShadow: '-4px 0 24px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column', animation: 'slideInRight 0.25s ease' }}>
      <div className="modal-header">
        <div>
          <div className="modal-title">Advanced Filters</div>
          <div className="modal-subtitle">Refine your search with advanced filter options</div>
        </div>
        <button className="btn-icon" onClick={onClose}>✕</button>
      </div>
      <div className="drawer-body">
        <div className="form-group">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <Calendar size={15} style={{ color: '#6b7280' }} />
            <strong style={{ fontSize: 13 }}>Date Range</strong>
          </div>
          <div className="form-row">
            <div>
              <label className="form-label">From</label>
              <input type="date" className="form-control" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
            </div>
            <div>
              <label className="form-label">To</label>
              <input type="date" className="form-control" value={dateTo} onChange={e => setDateTo(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <strong style={{ fontSize: 13, display: 'block', marginBottom: 10 }}>Booking Status</strong>
          {['Confirmed', 'Checked-in', 'Checked-out', 'Cancelled'].map(s => (
            <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, cursor: 'pointer', fontSize: 13 }}>
              <input type="checkbox" checked={status.includes(s)} onChange={() => toggleStatus(s)} />
              {s}
            </label>
          ))}
        </div>
        <div className="form-group">
          <strong style={{ fontSize: 13, display: 'block', marginBottom: 10 }}>Number of Nights</strong>
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
        <button className="btn btn-ghost flex-1" onClick={() => { setStatus([]); setDateFrom(''); setDateTo(''); }}>
          ✕ Clear All
        </button>
        <button className="btn btn-dark flex-1" onClick={onClose}>Apply Filters</button>
      </div>
    </div>
  );
}
