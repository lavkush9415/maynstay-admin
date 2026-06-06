'use client';
import { useState } from 'react';
import { Search, Download, Plus, Star, MapPin, Phone, Mail, Eye, Edit2, Trash2 } from 'lucide-react';
import { customers } from '@/lib/mockData';

type Customer = typeof customers[0];

const tierColors: Record<string, string> = {
  PLATINUM: 'badge-platinum',
  GOLD: 'badge-gold',
  SILVER: 'badge-silver',
  BRONZE: 'badge-bronze',
};

const tierData = [
  { tier: 'PLATINUM', customers: 3, revenue: 1220000, avgSpend: 406733, color: '#1a1f2e' },
  { tier: 'GOLD', customers: 4, revenue: 639000, avgSpend: 159750, color: '#d97706' },
  { tier: 'SILVER', customers: 3, revenue: 146000, avgSpend: 48667, color: '#6b7280' },
  { tier: 'BRONZE', customers: 2, revenue: 85000, avgSpend: 42500, color: '#92400e' },
];

export default function CustomersPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [tierFilter, setTierFilter] = useState('all');
  const [customerList, setCustomerList] = useState(customers);
  const [viewCustomer, setViewCustomer] = useState<Customer | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  const filtered = customerList.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      c.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || c.status === statusFilter;
    const matchTier = tierFilter === 'all' || c.loyaltyTier === tierFilter;
    return matchSearch && matchStatus && matchTier;
  });

  const totalRevenue = customers.reduce((s, c) => s + c.totalSpent, 0);
  const avgSpend = Math.round(totalRevenue / customers.length);
  const vipCount = customers.filter(c => c.loyaltyTier === 'PLATINUM').length;

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>Customer Management</h1>
          <p>View and manage all customers on the platform</p>
        </div>
        <div className="page-header-right">
          <button className="btn btn-outline" onClick={() => alert('Exporting customers...')}>
            <Download size={15} /> Export
          </button>
          <button className="btn btn-dark" onClick={() => setShowAdd(true)}>
            <Plus size={15} /> Add Customer
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Total Customers</span>
            <div className="kpi-icon blue" style={{ background: '#ede9fe', color: '#7c3aed' }}>👥</div>
          </div>
          <div className="kpi-value">{customers.length}</div>
          <div className="kpi-sub">{customers.filter(c => c.status === 'active').length} active</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">VIP Customers</span>
            <div style={{ background: '#fdf4ff', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>⭐</div>
          </div>
          <div className="kpi-value">{vipCount}</div>
          <div className="kpi-sub neutral">{Math.round((vipCount / customers.length) * 100)}% of total</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Total Revenue</span>
            <div className="kpi-icon green">💳</div>
          </div>
          <div className="kpi-value">₹{Math.round(totalRevenue / 1000)}K</div>
          <div className="kpi-sub neutral">From all customers</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Avg. Spending</span>
            <div className="kpi-icon orange">💰</div>
          </div>
          <div className="kpi-value">₹{avgSpend.toLocaleString('en-IN')}</div>
          <div className="kpi-sub neutral">Per customer</div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="card" style={{ padding: '16px 20px', marginBottom: 20 }}>
        <div className="filter-row" style={{ marginBottom: 0 }}>
          <div className="search-bar" style={{ flex: 2 }}>
            <Search className="search-icon" size={15} />
            <input placeholder="Search by name, email, phone, or ID..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <select className="filter-select" value={tierFilter} onChange={e => setTierFilter(e.target.value)}>
            <option value="all">All Tiers</option>
            <option value="PLATINUM">Platinum</option>
            <option value="GOLD">Gold</option>
            <option value="SILVER">Silver</option>
            <option value="BRONZE">Bronze</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-header">
          <div className="card-title">All Customers ({filtered.length})</div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Total Bookings</th>
                <th>Total Spent</th>
                <th>Loyalty Tier</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td><strong>{c.id}</strong></td>
                  <td>
                    <div style={{ fontWeight: 700 }}>{c.name}</div>
                    <div style={{ fontSize: 11.5, color: '#6b7280' }}>Joined {c.joinDate}</div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12.5, marginBottom: 3 }}>
                      <Mail size={11} style={{ color: '#6b7280' }} /> {c.email}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12.5, color: '#6b7280' }}>
                      <Phone size={11} /> {c.phone}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13 }}>
                      <MapPin size={12} style={{ color: '#6b7280' }} /> {c.city}, {c.state}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 700 }}>{c.totalBookings}</div>
                    {c.upcomingBookings > 0 && <div style={{ fontSize: 11.5, color: '#2563eb' }}>+{c.upcomingBookings} upcoming</div>}
                  </td>
                  <td>
                    <div className="text-green">₹{c.totalSpent.toLocaleString('en-IN')}</div>
                    <div style={{ fontSize: 11.5, color: '#6b7280' }}>Avg: ₹{c.avgSpend.toLocaleString('en-IN')}</div>
                  </td>
                  <td>
                    <span className={`badge ${tierColors[c.loyaltyTier]}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Star size={10} fill="white" stroke="white" /> {c.loyaltyTier}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn-icon" onClick={() => setViewCustomer(c)}><Eye size={14} /></button>
                      <button className="btn-icon" onClick={() => alert(`Editing ${c.name}`)}><Edit2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Loyalty Tier Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {tierData.map(t => (
          <div key={t.tier} className="card" style={{ padding: 18 }}>
            <div style={{ background: t.color, color: 'white', borderRadius: 20, padding: '3px 10px', display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
              <Star size={11} fill="white" stroke="white" /> {t.tier}
            </div>
            <div style={{ marginBottom: 6 }}>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 2 }}>Customers</div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{t.customers}</div>
            </div>
            <div style={{ marginBottom: 6 }}>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 2 }}>Revenue</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#16a34a' }}>₹{Math.round(t.revenue / 1000)}K</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 2 }}>Avg Spend</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>₹{t.avgSpend.toLocaleString('en-IN')}</div>
            </div>
          </div>
        ))}
      </div>

      {/* View Customer Modal */}
      {viewCustomer && (
        <div className="modal-overlay" onClick={() => setViewCustomer(null)}>
          <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="modal-title">{viewCustomer.name}</div>
                  <span className={`badge ${tierColors[viewCustomer.loyaltyTier]}`}><Star size={10} fill="white" stroke="white" /> {viewCustomer.loyaltyTier}</span>
                </div>
                <div className="modal-subtitle">{viewCustomer.id} • Joined {viewCustomer.joinDate}</div>
              </div>
              <button className="btn-icon" onClick={() => setViewCustomer(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Email</div><div style={{ color: '#2563eb' }}>{viewCustomer.email}</div></div>
                <div><div className="form-label">Phone</div><div>{viewCustomer.phone}</div></div>
              </div>
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Location</div><div>{viewCustomer.city}, {viewCustomer.state}</div></div>
                <div><div className="form-label">Status</div><span className={`badge badge-${viewCustomer.status}`}>{viewCustomer.status}</span></div>
              </div>
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Total Bookings</div><div style={{ fontWeight: 700, fontSize: 20 }}>{viewCustomer.totalBookings}</div></div>
                <div><div className="form-label">Upcoming</div><div style={{ fontWeight: 700, fontSize: 20, color: '#2563eb' }}>{viewCustomer.upcomingBookings}</div></div>
              </div>
              <div className="form-row">
                <div><div className="form-label">Total Spent</div><div style={{ fontWeight: 700, fontSize: 20, color: '#16a34a' }}>₹{viewCustomer.totalSpent.toLocaleString('en-IN')}</div></div>
                <div><div className="form-label">Avg per Booking</div><div style={{ fontWeight: 700, fontSize: 20 }}>₹{viewCustomer.avgSpend.toLocaleString('en-IN')}</div></div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setViewCustomer(null)}>Close</button>
              <button className="btn btn-primary" onClick={() => { alert('Edit customer'); }}>Edit Profile</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
