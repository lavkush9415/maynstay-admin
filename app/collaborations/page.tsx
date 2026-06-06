'use client';
import { useState } from 'react';
import { MapPin, ShoppingBag, Users, DollarSign, Plus, Search, Star, Phone, Mail, ChevronRight } from 'lucide-react';
import { cities, fashionStores } from '@/lib/mockData';

const categoryIcons: Record<string, string> = {
  Fashion: '👕', Ethnic: '✨', Jewelry: '👑', Accessories: '⌚',
  Luxury: '🏅', Designer: '⭐', Footwear: '👟', Boutique: '🎁'
};

const categoryData = [
  { name: 'Fashion', stores: 4, redemptions: 1670, revenue: 64300, color: '#ede9fe' },
  { name: 'Ethnic', stores: 4, redemptions: 1050, revenue: 63000, color: '#f0fdf4' },
  { name: 'Jewelry', stores: 2, redemptions: 345, revenue: 51800, color: '#fef3c7' },
  { name: 'Accessories', stores: 1, redemptions: 240, revenue: 12000, color: '#fff7ed' },
  { name: 'Luxury', stores: 3, redemptions: 0, revenue: 60900, color: '#fdf4ff' },
  { name: 'Designer', stores: 1, redemptions: 195, revenue: 19500, color: '#fffbeb' },
  { name: 'Footwear', stores: 0, redemptions: 0, revenue: 0, color: '#f0f9ff' },
  { name: 'Boutique', stores: 0, redemptions: 0, revenue: 0, color: '#fdf2f8' },
];

export default function CollaborationsPage() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [activeTab, setActiveTab] = useState<'stores' | 'owners'>('stores');
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  const cityStores = fashionStores.filter(s => s.city === selectedCity.name && s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>Fashion & Shopping Collaborations</h1>
          <p>Manage clothing store partnerships across India</p>
        </div>
        <div className="page-header-right">
          <button className="btn btn-dark" onClick={() => setShowAdd(true)}><Plus size={15} /> Add New Store</button>
          <button className="btn btn-outline" onClick={() => alert('Exporting report...')}>Export Report</button>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Active Cities</span><div style={{ background: '#ede9fe', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={18} style={{ color: '#7c3aed' }} /></div></div>
          <div className="kpi-value">{cities.length}</div>
          <div className="kpi-sub neutral">81 hotels partnered</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Fashion Stores</span><div style={{ background: '#fdf4ff', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShoppingBag size={18} style={{ color: '#a21caf' }} /></div></div>
          <div className="kpi-value">265</div>
          <div className="kpi-sub">+18 this month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Guest Redemptions</span><div className="kpi-icon green"><Users size={18} /></div></div>
          <div className="kpi-value">9,300</div>
          <div className="kpi-sub neutral">Shopping benefits used</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Partnership Revenue</span><div className="kpi-icon orange"><DollarSign size={18} /></div></div>
          <div className="kpi-value">₹2240K</div>
          <div className="kpi-sub">+22% growth</div>
        </div>
      </div>

      <div className="city-layout">
        {/* City List */}
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, padding: '0 4px' }}>Select City</div>
          <div className="city-list">
            {cities.map(c => (
              <div key={c.id} className={`city-item ${selectedCity.id === c.id ? 'active' : ''}`} onClick={() => setSelectedCity(c)}>
                <div className="city-item-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <MapPin size={14} style={{ color: selectedCity.id === c.id ? '#2563eb' : '#6b7280' }} />
                    <span className="name">{c.name}</span>
                  </div>
                  <div className="meta">{c.hotels} hotels &nbsp;•&nbsp; {c.stores} stores</div>
                </div>
                <ChevronRight size={14} style={{ color: '#9ca3af' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Store Details */}
        <div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">{selectedCity.name} - Fashion Stores</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className={`btn btn-sm ${activeTab === 'stores' ? 'btn-dark' : 'btn-outline'}`} onClick={() => setActiveTab('stores')}>Stores ({selectedCity.stores})</button>
                <button className={`btn btn-sm ${activeTab === 'owners' ? 'btn-dark' : 'btn-outline'}`} onClick={() => setActiveTab('owners')}>Owners (2)</button>
              </div>
            </div>
            <div style={{ padding: '12px 20px', borderBottom: '1px solid #f1f5f9' }}>
              <div className="search-bar">
                <Search className="search-icon" size={14} />
                <input placeholder="Search stores..." value={search} onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
            <div style={{ padding: 16 }}>
              {cityStores.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: '#6b7280' }}>
                  <ShoppingBag size={32} style={{ margin: '0 auto 12px', display: 'block', color: '#d1d5db' }} />
                  No stores found in {selectedCity.name}
                </div>
              ) : cityStores.map(store => (
                <div key={store.id} className="store-card">
                  <div className="store-card-header">
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div className="store-brand-icon">✨</div>
                      <div>
                        <div className="store-name">{store.name}</div>
                        <div className="store-desc">Premium ethnic wear and handcrafted clothing</div>
                        <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>Owner: {store.owner}</div>
                      </div>
                    </div>
                    <span className="badge badge-active">{store.status}</span>
                  </div>
                  <div className="store-stats">
                    <div className="store-stat">
                      <strong style={{ color: '#7c3aed' }}>% {store.discount}%</strong>
                      <span>Discount</span>
                    </div>
                    <div className="store-stat">
                      <strong style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Star size={12} fill="#f59e0b" stroke="#f59e0b" /> {store.rating}</strong>
                      <span>Rating</span>
                    </div>
                    <div className="store-stat">
                      <strong>{store.redemptions}</strong>
                      <span>Redemptions</span>
                    </div>
                    <div className="store-stat">
                      <strong className="green">₹{(store.revenue / 1000).toFixed(1)}K</strong>
                      <span>Revenue</span>
                    </div>
                  </div>
                  <div className="store-contact">
                    <span style={{ display: 'flex', gap: 5 }}><Phone size={12} /> {store.phone}</span>
                    <span style={{ display: 'flex', gap: 5 }}><Mail size={12} /> {store.email}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 12, paddingTop: 10, borderTop: '1px solid #f1f5f9' }}>
                    <button className="btn btn-outline btn-sm">View Details</button>
                    <button className="btn btn-outline btn-sm">Edit</button>
                    <button className="btn btn-ghost btn-sm" style={{ color: '#dc2626' }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Store Performance by Category */}
      <div style={{ marginTop: 28 }}>
        <h2 className="section-title" style={{ marginBottom: 16 }}>Store Performance by Category</h2>
        <div className="category-grid">
          {categoryData.map(cat => (
            <div key={cat.name} className="category-card">
              <div className="category-icon" style={{ background: cat.color }}>
                {categoryIcons[cat.name] || '🏢'}
              </div>
              <div className="category-name">{cat.name}</div>
              <div className="category-stat"><span>Stores</span><span>{cat.stores}</span></div>
              <div className="category-stat"><span>Redemptions</span><span>{cat.redemptions}</span></div>
              <div className="category-stat"><span>Revenue</span><span className="green">₹{(cat.revenue / 1000).toFixed(1)}K</span></div>
            </div>
          ))}
        </div>
      </div>

      {showAdd && (
        <div className="modal-overlay" onClick={() => setShowAdd(false)}>
          <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div><div className="modal-title">Add New Store</div><div className="modal-subtitle">Add a fashion store partnership</div></div>
              <button className="btn-icon" onClick={() => setShowAdd(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group"><label className="form-label">Store Name *</label><input className="form-control" placeholder="FabIndia - Bandra" /></div>
                <div className="form-group"><label className="form-label">Brand</label><select className="form-control form-select"><option>FabIndia</option><option>Westside</option><option>Biba</option><option>Manyavar</option><option>Sabyasachi</option><option>Tanishq</option><option>Zara</option><option>H&M</option><option>Louis Philippe</option><option>Ritu Kumar</option><option>Myntra</option></select></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">City *</label><select className="form-control form-select">{cities.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
                <div className="form-group"><label className="form-label">Category</label><select className="form-control form-select"><option>Fashion</option><option>Ethnic</option><option>Jewelry</option><option>Luxury</option><option>Designer</option></select></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Owner Name</label><input className="form-control" placeholder="Rajesh Kumar" /></div>
                <div className="form-group"><label className="form-label">Discount %</label><input type="number" className="form-control" placeholder="20" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Phone</label><input className="form-control" placeholder="+91 98765-XXXXX" /></div>
                <div className="form-group"><label className="form-label">Email</label><input className="form-control" placeholder="store@brand.com" /></div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="btn btn-dark" onClick={() => { alert('Store added!'); setShowAdd(false); }}>Add Store</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
