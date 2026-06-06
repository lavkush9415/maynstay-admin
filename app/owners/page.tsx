'use client';
import { useState } from 'react';
import { Search, Plus, Copy, Check, Edit2, Trash2, Eye } from 'lucide-react';
import { owners } from '@/lib/mockData';

type Owner = typeof owners[0];

export default function OwnersPage() {
  const [search, setSearch] = useState('');
  const [ownerList, setOwnerList] = useState(owners);
  const [showAdd, setShowAdd] = useState(false);
  const [editOwner, setEditOwner] = useState<Owner | null>(null);
  const [viewOwner, setViewOwner] = useState<Owner | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = ownerList.filter(o =>
    o.name.toLowerCase().includes(search.toLowerCase()) ||
    o.hotelName.toLowerCase().includes(search.toLowerCase()) ||
    o.email.toLowerCase().includes(search.toLowerCase()) ||
    o.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this owner?')) setOwnerList(prev => prev.filter(o => o.id !== id));
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>Hotel Owners Management</h1>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Hotel Owners & Credentials</div>
            <div className="card-subtitle" style={{ color: '#2563eb' }}>Manage all hotel owner accounts and access</div>
          </div>
          <button className="btn btn-dark" onClick={() => setShowAdd(true)}>
            <Plus size={15} /> Add New Owner
          </button>
        </div>

        <div style={{ padding: '14px 20px', borderBottom: '1px solid #f1f5f9' }}>
          <div className="search-bar">
            <Search className="search-icon" size={15} />
            <input placeholder="Search by name, hotel, email, or username..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Owner ID</th>
                <th>Owner Name</th>
                <th>Hotel Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(owner => (
                <tr key={owner.id}>
                  <td><strong>{owner.id}</strong></td>
                  <td><div style={{ fontWeight: 600 }}>{owner.name}</div></td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {owner.hotelName}
                      <span style={{ background: '#f3f4f6', border: '1px solid #e2e8f0', borderRadius: 4, padding: '1px 6px', fontSize: 11, color: '#6b7280' }}>{owner.hotelId}</span>
                    </div>
                  </td>
                  <td style={{ color: '#2563eb' }}>{owner.email}</td>
                  <td>
                    <div className="username-badge">
                      {owner.username}
                      <button className="copy-btn" onClick={() => handleCopy(owner.username, owner.id + '-user')}>
                        {copiedId === owner.id + '-user' ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ letterSpacing: 2, fontSize: 13 }}>••••••••</span>
                      <button className="copy-btn" onClick={() => handleCopy(owner.password, owner.id + '-pass')}>
                        {copiedId === owner.id + '-pass' ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </td>
                  <td><span className={`badge badge-${owner.status}`}>{owner.status}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn-icon" title="View" onClick={() => setViewOwner(owner)}><Eye size={14} /></button>
                      <button className="btn-icon" title="Edit" onClick={() => setEditOwner(owner)}><Edit2 size={14} /></button>
                      <button className="btn-icon" title="Delete" style={{ color: '#dc2626' }} onClick={() => handleDelete(owner.id)}><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAdd && <OwnerModal mode="add" onClose={() => setShowAdd(false)} onSave={(o: Owner) => { setOwnerList(prev => [...prev, o]); setShowAdd(false); }} />}
      {editOwner && <OwnerModal mode="edit" owner={editOwner} onClose={() => setEditOwner(null)} onSave={(o: Owner) => { setOwnerList(prev => prev.map(x => x.id === o.id ? o : x)); setEditOwner(null); }} />}
      {viewOwner && (
        <div className="modal-overlay" onClick={() => setViewOwner(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div><div className="modal-title">{viewOwner.name}</div><div className="modal-subtitle">{viewOwner.id}</div></div>
              <button className="btn-icon" onClick={() => setViewOwner(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Hotel</div><div style={{ fontWeight: 600 }}>{viewOwner.hotelName}</div></div>
                <div><div className="form-label">City</div><div>{viewOwner.city}</div></div>
              </div>
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Email</div><div style={{ color: '#2563eb' }}>{viewOwner.email}</div></div>
                <div><div className="form-label">Phone</div><div>{viewOwner.phone}</div></div>
              </div>
              <div className="form-row" style={{ marginBottom: 12 }}>
                <div><div className="form-label">Username</div><div className="username-badge" style={{ display: 'inline-flex' }}>{viewOwner.username}</div></div>
                <div><div className="form-label">Status</div><span className={`badge badge-${viewOwner.status}`}>{viewOwner.status}</span></div>
              </div>
              <div className="form-row">
                <div><div className="form-label">Total Bookings</div><div style={{ fontWeight: 700 }}>{viewOwner.totalBookings}</div></div>
                <div><div className="form-label">Revenue</div><div style={{ fontWeight: 700, color: '#16a34a' }}>₹{viewOwner.revenue.toLocaleString('en-IN')}</div></div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => { setEditOwner(viewOwner); setViewOwner(null); }}>Edit</button>
              <button className="btn btn-primary" onClick={() => setViewOwner(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OwnerModal({ mode, owner, onClose, onSave }: { mode: 'add' | 'edit'; owner?: any; onClose: () => void; onSave: (o: any) => void }) {
  const [form, setForm] = useState(owner || { id: 'OW' + Date.now(), name: '', hotelId: '', hotelName: '', email: '', phone: '', username: '', password: '', city: '', status: 'active', joinDate: new Date().toISOString().split('T')[0], totalBookings: 0, revenue: 0 });
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div><div className="modal-title">{mode === 'add' ? 'Add New Owner' : 'Edit Owner'}</div></div>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group"><label className="form-label">Full Name *</label><input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Hotel Name *</label><input className="form-control" value={form.hotelName} onChange={e => setForm({ ...form, hotelName: e.target.value })} /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Email *</label><input type="email" className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Phone</label><input className="form-control" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX-XXXXX" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Username *</label><input className="form-control" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Password *</label><input type="password" className="form-control" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">City</label><input className="form-control" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Status</label><select className="form-control form-select" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option value="active">Active</option><option value="inactive">Inactive</option></select></div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-dark" onClick={() => { if (!form.name) return alert('Name required'); onSave(form); }}>{mode === 'add' ? 'Add Owner' : 'Save Changes'}</button>
        </div>
      </div>
    </div>
  );
}
