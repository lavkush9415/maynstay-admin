'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, MapPin, Star, Phone, Mail, Eye, Edit2, Calendar, MessageSquare, Building2 } from 'lucide-react';
import { hotels } from '@/lib/mockData';

type Hotel = typeof hotels[0];

export default function HotelsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAdd, setShowAdd] = useState(false);
  const [editHotel, setEditHotel] = useState<Hotel | null>(null);
  const [viewHotel, setViewHotel] = useState<Hotel | null>(null);
  const [showContact, setShowContact] = useState<Hotel | null>(null);
  const [hotelList, setHotelList] = useState(hotels);

  const filtered = hotelList.filter(h => {
    const matchSearch = h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.city.toLowerCase().includes(search.toLowerCase()) ||
      h.owner.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || h.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this hotel?')) {
      setHotelList(prev => prev.filter(h => h.id !== id));
    }
  };

  const handleStatusToggle = (id: string) => {
    setHotelList(prev => prev.map(h =>
      h.id === id ? { ...h, status: h.status === 'active' ? 'inactive' : 'active' } : h
    ));
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>All Hotels on Platform</h1>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
          <Plus size={16} /> + Add New Hotel
        </button>
      </div>

      <div className="card" style={{ marginBottom: 24, padding: '16px 20px' }}>
        <div style={{ marginBottom: 4, fontWeight: 700, fontSize: 15 }}>All Hotels on Platform</div>
        <div style={{ color: '#2563eb', fontSize: 13, marginBottom: 14 }}>{filtered.length} hotels registered</div>

        <div className="filter-row">
          <div className="search-bar" style={{ maxWidth: 400 }}>
            <Search className="search-icon" size={15} />
            <input placeholder="Search hotels..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="hotel-grid">
        {filtered.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <div className="hotel-card-header">
              <div>
                <div className="hotel-card-name">{hotel.name}</div>
                <div className="hotel-card-location"><MapPin size={12} /> {hotel.area}</div>
              </div>
              <span className={`badge badge-${hotel.status}`}>{hotel.status}</span>
            </div>

            <div className="hotel-card-info">
              <div className="hotel-rating">
                <Star size={14} className="star" fill="#f59e0b" stroke="#f59e0b" />
                {hotel.rating} Rating
              </div>
              <div className="hotel-info-row">Owner: <strong>{hotel.owner}</strong></div>
              <div className="hotel-info-row">Rooms: <strong>{hotel.occupiedRooms}/{hotel.rooms} occupied</strong></div>
              <div className="hotel-info-row">Revenue: <span className="green-text">₹{hotel.revenue.toLocaleString('en-IN')}</span></div>
              <div className="hotel-contact"><Phone size={12} /> {hotel.phone}</div>
              <div className="hotel-contact"><Mail size={12} /> {hotel.email}</div>
            </div>

            <div className="hotel-card-actions">
              <button className="btn btn-outline btn-sm" onClick={() => setViewHotel(hotel)}><Eye size={13} /> View</button>
              <button className="btn btn-outline btn-sm" onClick={() => setEditHotel(hotel)}><Edit2 size={13} /> Edit</button>
              <Link href={`/bookings?hotel=${hotel.id}`} className="btn btn-outline btn-sm"><Calendar size={13} /> Bookings</Link>
              <button className="btn btn-outline btn-sm" onClick={() => setShowContact(hotel)}><MessageSquare size={13} /> Contact</button>
            </div>
          </div>
        ))}
      </div>

      {showAdd && <AddHotelModal onClose={() => setShowAdd(false)} onAdd={(h: Hotel) => { setHotelList(prev => [...prev, h]); setShowAdd(false); }} />}
      {editHotel && <EditHotelModal hotel={editHotel} onClose={() => setEditHotel(null)} onSave={(updated: Hotel) => { setHotelList(prev => prev.map(h => h.id === updated.id ? updated : h)); setEditHotel(null); }} />}
      {viewHotel && <ViewHotelModal hotel={viewHotel} onClose={() => setViewHotel(null)} onToggleStatus={() => { handleStatusToggle(viewHotel.id); setViewHotel(null); }} onDelete={() => { handleDelete(viewHotel.id); setViewHotel(null); }} />}
      {showContact && <ContactModal hotel={showContact} onClose={() => setShowContact(null)} />}
    </div>
  );
}

function AddHotelModal({ onClose, onAdd }: { onClose: () => void; onAdd: (h: any) => void }) {
  const [form, setForm] = useState({ name: '', city: '', area: '', category: 'Luxury', rooms: '', phone: '', email: '', owner: '' });
  const handleSubmit = () => {
    if (!form.name || !form.city) return alert('Name and city are required');
    onAdd({ ...form, id: 'H' + Date.now(), status: 'active', rating: 4.5, occupiedRooms: 0, revenue: 0, ownerId: 'OW001', checkIns: 0, image: '🏨' });
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div><div className="modal-title">Add New Hotel</div><div className="modal-subtitle">Add a new hotel to the platform</div></div>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group"><label className="form-label">Hotel Name *</label><input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. The Grand Palace" /></div>
            <div className="form-group"><label className="form-label">City *</label><input className="form-control" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="e.g. Mumbai" /></div>
          </div>
          <div className="form-group"><label className="form-label">Full Address</label><input className="form-control" value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} placeholder="Area, City" /></div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Category</label><select className="form-control form-select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}><option>Luxury</option><option>Heritage</option><option>Business</option><option>Boutique</option><option>Standard</option></select></div>
            <div className="form-group"><label className="form-label">Total Rooms</label><input type="number" className="form-control" value={form.rooms} onChange={e => setForm({ ...form, rooms: e.target.value })} placeholder="100" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Owner Name</label><input className="form-control" value={form.owner} onChange={e => setForm({ ...form, owner: e.target.value })} placeholder="Owner full name" /></div>
            <div className="form-group"><label className="form-label">Phone</label><input className="form-control" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765-XXXXX" /></div>
          </div>
          <div className="form-group"><label className="form-label">Email</label><input type="email" className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="hotel@example.com" /></div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Add Hotel</button>
        </div>
      </div>
    </div>
  );
}

function EditHotelModal({ hotel, onClose, onSave }: { hotel: any; onClose: () => void; onSave: (h: any) => void }) {
  const [form, setForm] = useState({ ...hotel });
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div><div className="modal-title">Edit Hotel</div><div className="modal-subtitle">Update hotel information</div></div>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group"><label className="form-label">Hotel Name</label><input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">City</label><input className="form-control" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} /></div>
          </div>
          <div className="form-group"><label className="form-label">Full Address</label><input className="form-control" value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} /></div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Category</label><select className="form-control form-select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}><option>Luxury</option><option>Heritage</option><option>Business</option><option>Boutique</option><option>Standard</option></select></div>
            <div className="form-group"><label className="form-label">Status</label><select className="form-control form-select" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option value="active">Active</option><option value="inactive">Inactive</option></select></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Phone</label><input className="form-control" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Email</label><input className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={() => onSave(form)}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function ViewHotelModal({ hotel, onClose, onToggleStatus, onDelete }: { hotel: any; onClose: () => void; onToggleStatus: () => void; onDelete: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-lg" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="modal-title">{hotel.name}</div>
              <span className={`badge badge-${hotel.status}`}>{hotel.status}</span>
            </div>
            <div className="modal-subtitle"><MapPin size={12} style={{ display: 'inline' }} /> {hotel.area}</div>
          </div>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div><div className="form-label">Hotel ID</div><div style={{ fontWeight: 700 }}>{hotel.id}</div></div>
            <div><div className="form-label">Category</div><div style={{ fontWeight: 700 }}>{hotel.category}</div></div>
          </div>
          <div className="divider" />
          <div className="form-row">
            <div><div className="form-label">Rating</div><div style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}><Star size={14} fill="#f59e0b" stroke="#f59e0b" /> {hotel.rating}</div></div>
            <div><div className="form-label">Rooms</div><div style={{ fontWeight: 700 }}>{hotel.occupiedRooms}/{hotel.rooms} occupied</div></div>
          </div>
          <div className="divider" />
          <div className="form-row">
            <div><div className="form-label">Owner</div><div style={{ fontWeight: 700 }}>{hotel.owner}</div></div>
            <div><div className="form-label">Revenue</div><div style={{ fontWeight: 700, color: '#16a34a' }}>₹{hotel.revenue.toLocaleString('en-IN')}</div></div>
          </div>
          <div className="divider" />
          <div><div className="form-label">Phone</div><div>{hotel.phone}</div></div>
          <div style={{ marginTop: 8 }}><div className="form-label">Email</div><div>{hotel.email}</div></div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete Hotel</button>
          <button className="btn btn-ghost" onClick={onToggleStatus}>{hotel.status === 'active' ? 'Deactivate' : 'Activate'}</button>
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

function ContactModal({ hotel, onClose }: { hotel: any; onClose: () => void }) {
  const [msg, setMsg] = useState('');
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-sm" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div><div className="modal-title">Contact Hotel</div><div className="modal-subtitle">{hotel.name}</div></div>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}><Phone size={14} style={{ color: '#6b7280' }} /><span>{hotel.phone}</span></div>
            <div style={{ display: 'flex', gap: 8 }}><Mail size={14} style={{ color: '#6b7280' }} /><span>{hotel.email}</span></div>
          </div>
          <div className="form-group">
            <label className="form-label">Send Message</label>
            <textarea className="form-control" rows={4} value={msg} onChange={e => setMsg(e.target.value)} placeholder="Type your message..." />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={() => { alert('Message sent!'); onClose(); }}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
