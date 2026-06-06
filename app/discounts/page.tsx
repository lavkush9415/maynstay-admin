'use client';
import { useState } from 'react';
import { Plus, Tag, TrendingDown, Search } from 'lucide-react';
import { discounts } from '@/lib/mockData';

type Discount = typeof discounts[0];

const mostUsed = [
  { code: 'WINTER30', hotel: 'Grand Plaza Hotel', uses: 80 },
  { code: 'EARLYBIRD15', hotel: 'Sunset Paradise', uses: 67 },
  { code: 'SUMMER25', hotel: 'Grand Plaza Hotel', uses: 45 },
  { code: 'WEEKEND20', hotel: 'Seaside Resort', uses: 38 },
  { code: 'FLASH40', hotel: 'City Center Inn', uses: 22 },
];

const highestSavings = [
  { code: 'WINTER30', desc: '30% off', savings: 19200 },
  { code: 'SUMMER25', desc: '25% off', savings: 11250 },
  { code: 'EARLYBIRD15', desc: '15% off', savings: 10050 },
  { code: 'WEEKEND20', desc: '20% off', savings: 6840 },
  { code: 'FLASH40', desc: '40% off', savings: 2640 },
];

const expiringSoon = [
  { code: 'EARLYBIRD15', hotel: 'Sunset Paradise', date: '2026-12-31' },
  { code: 'WEEKEND20', hotel: 'Seaside Resort', date: '2026-03-31' },
  { code: 'FLASH40', hotel: 'City Center Inn', date: '2026-03-05' },
  { code: 'LASTMIN50', hotel: 'Mountain View Lodge', date: '2026-12-31' },
];

export default function DiscountsPage() {
  const [discountList, setDiscountList] = useState(discounts);
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showCreate, setShowCreate] = useState(false);
  const [editDiscount, setEditDiscount] = useState<Discount | null>(null);

  const filtered = discountList.filter(d => {
    const matchStatus = statusFilter === 'all' || d.status === statusFilter;
    const matchType = typeFilter === 'all' || d.type === typeFilter;
    return matchStatus && matchType;
  });

  const activeCount = discountList.filter(d => d.status === 'active').length;
  const totalSavings = 52000;
  const avgDiscount = 28;

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>Discount Management</h1>
          <p>Manage all discounts, offers, and promotional codes</p>
        </div>
        <button className="btn btn-dark" onClick={() => setShowCreate(true)}>
          <Plus size={15} /> Create Discount
        </button>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Total Discounts</span><div style={{ background: '#ede9fe', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Tag size={18} style={{ color: '#7c3aed' }} /></div></div>
          <div className="kpi-value">{discountList.length}</div>
          <div className="kpi-sub">{activeCount} active</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Active Discounts</span><div style={{ background: '#dcfce7', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>%</div></div>
          <div className="kpi-value">{activeCount}</div>
          <div className="kpi-sub neutral">{Math.round((activeCount / discountList.length) * 100)}% of total</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Total Savings</span><div style={{ background: '#fdf4ff', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingDown size={18} style={{ color: '#a21caf' }} /></div></div>
          <div className="kpi-value">₹52K</div>
          <div className="kpi-sub neutral">Customer savings</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Avg Discount</span><div style={{ background: '#fff7ed', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#ea580c', fontWeight: 800 }}>%</div></div>
          <div className="kpi-value">{avgDiscount}%</div>
          <div className="kpi-sub neutral">Across all offers</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-header">
          <div className="card-title">All Discounts ({discountList.length})</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="expired">Expired</option>
            </select>
            <select className="filter-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
              <option value="all">All Types</option>
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed</option>
              <option value="seasonal">Seasonal</option>
            </select>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Hotel</th>
                <th>Type</th>
                <th>Discount</th>
                <th>Valid Period</th>
                <th>Usage</th>
                <th>Room Types</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr key={d.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Tag size={13} style={{ color: '#6b7280' }} />
                      <strong>{d.code}</strong>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: 13 }}>{d.hotel}</div>
                    <div style={{ fontSize: 11, color: '#6b7280' }}>{d.hotelId}</div>
                  </td>
                  <td><span className={`badge badge-${d.type}`}>{d.type}</span></td>
                  <td>
                    <strong style={{ color: d.type === 'percentage' ? '#7c3aed' : '#d97706', fontSize: 15 }}>
                      {d.type === 'fixed' ? `₹${d.discount}` : `${d.discount}%`} OFF
                    </strong>
                  </td>
                  <td style={{ fontSize: 12.5 }}>
                    {d.validFrom}<br /><span style={{ color: '#6b7280' }}>to {d.validTo}</span>
                  </td>
                  <td style={{ minWidth: 120 }}>
                    <div style={{ fontSize: 12.5, marginBottom: 4 }}>{d.usageCount} / {d.maxUsage} uses</div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${(d.usageCount / d.maxUsage) * 100}%` }} />
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {d.roomTypes.map(r => (
                        <span key={r} style={{ background: '#f3f4f6', border: '1px solid #e2e8f0', borderRadius: 4, padding: '2px 7px', fontSize: 11.5 }}>{r}</span>
                      ))}
                    </div>
                  </td>
                  <td><span className={`badge badge-${d.status}`}>{d.status}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn btn-outline btn-sm" onClick={() => setEditDiscount(d)}>Edit</button>
                      <button className="btn btn-ghost btn-sm" style={{ color: '#dc2626' }} onClick={() => { if (confirm('Delete?')) setDiscountList(prev => prev.filter(x => x.id !== d.id)); }}>Del</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Analytics section */}
      <div className="discount-analytics">
        <div className="discount-analytics-card">
          <div className="discount-analytics-title">Most Used Discounts</div>
          {mostUsed.map(d => (
            <div key={d.code} className="discount-analytics-item">
              <div>
                <div className="discount-analytics-code">{d.code}</div>
                <div className="discount-analytics-hotel">{d.hotel}</div>
              </div>
              <div className="discount-analytics-value">{d.uses}<br /><span style={{ fontSize: 11, color: '#6b7280' }}>uses</span></div>
            </div>
          ))}
        </div>
        <div className="discount-analytics-card">
          <div className="discount-analytics-title">Highest Savings</div>
          {highestSavings.map(d => (
            <div key={d.code} className="discount-analytics-item">
              <div>
                <div className="discount-analytics-code">{d.code}</div>
                <div className="discount-analytics-hotel">{d.desc}</div>
              </div>
              <div className="discount-analytics-value text-green">₹{d.savings.toLocaleString('en-IN')}<br /><span style={{ fontSize: 11, color: '#6b7280' }}>saved</span></div>
            </div>
          ))}
        </div>
        <div className="discount-analytics-card">
          <div className="discount-analytics-title">Expiring Soon</div>
          {expiringSoon.map(d => (
            <div key={d.code} className="expiring-item">
              <div>
                <div className="expiring-code">{d.code}</div>
                <div className="expiring-hotel">{d.hotel}</div>
              </div>
              <div className="expiring-date">{d.date}<br /><span style={{ fontSize: 11 }}>expires</span></div>
            </div>
          ))}
        </div>
      </div>

      {showCreate && <DiscountModal mode="add" onClose={() => setShowCreate(false)} onSave={(d: Discount) => { setDiscountList(prev => [...prev, d]); setShowCreate(false); }} />}
      {editDiscount && <DiscountModal mode="edit" discount={editDiscount} onClose={() => setEditDiscount(null)} onSave={(d: Discount) => { setDiscountList(prev => prev.map(x => x.id === d.id ? d : x)); setEditDiscount(null); }} />}
    </div>
  );
}

function DiscountModal({ mode, discount, onClose, onSave }: { mode: 'add' | 'edit'; discount?: any; onClose: () => void; onSave: (d: any) => void }) {
  const [form, setForm] = useState(discount || { id: 'D' + Date.now(), code: '', hotel: '', hotelId: '', type: 'percentage', discount: '', validFrom: '', validTo: '', usageCount: 0, maxUsage: 100, roomTypes: ['All Rooms'], status: 'active' });
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div><div className="modal-title">{mode === 'add' ? 'Create Discount' : 'Edit Discount'}</div></div>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group"><label className="form-label">Promo Code *</label><input className="form-control" value={form.code} onChange={e => setForm({ ...form, code: e.target.value.toUpperCase() })} placeholder="SUMMER25" /></div>
            <div className="form-group"><label className="form-label">Hotel</label><input className="form-control" value={form.hotel} onChange={e => setForm({ ...form, hotel: e.target.value })} placeholder="Hotel name" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Discount Type</label><select className="form-control form-select" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}><option value="percentage">Percentage (%)</option><option value="fixed">Fixed Amount (₹)</option><option value="seasonal">Seasonal</option></select></div>
            <div className="form-group"><label className="form-label">Discount Value</label><input type="number" className="form-control" value={form.discount} onChange={e => setForm({ ...form, discount: e.target.value })} placeholder={form.type === 'fixed' ? '5000' : '25'} /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Valid From</label><input type="date" className="form-control" value={form.validFrom} onChange={e => setForm({ ...form, validFrom: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Valid To</label><input type="date" className="form-control" value={form.validTo} onChange={e => setForm({ ...form, validTo: e.target.value })} /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Max Usage</label><input type="number" className="form-control" value={form.maxUsage} onChange={e => setForm({ ...form, maxUsage: parseInt(e.target.value) })} /></div>
            <div className="form-group"><label className="form-label">Status</label><select className="form-control form-select" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option value="active">Active</option><option value="expired">Expired</option></select></div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-dark" onClick={() => { if (!form.code) return alert('Code required'); onSave(form); }}>{mode === 'add' ? 'Create Discount' : 'Save Changes'}</button>
        </div>
      </div>
    </div>
  );
}
