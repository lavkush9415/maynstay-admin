'use client';
import { useState } from 'react';
import { Settings, Bell, Shield, Globe, Palette, Save } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'localization', label: 'Localization', icon: Globe },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>Settings</h1>
          <p>Manage platform settings and preferences</p>
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          <Save size={15} /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 20 }}>
        {/* Tabs */}
        <div className="card" style={{ padding: 8, height: 'fit-content' }}>
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                style={{ color: activeTab === tab.id ? 'white' : '#374151' }}
              >
                <Icon size={16} /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div>
          {activeTab === 'general' && (
            <div className="card">
              <div className="card-header"><div className="card-title">General Settings</div></div>
              <div className="card-body">
                <div className="form-group"><label className="form-label">Platform Name</label><input className="form-control" defaultValue="Maynstayy" /></div>
                <div className="form-group"><label className="form-label">Support Email</label><input className="form-control" defaultValue="support@maynstayy.com" /></div>
                <div className="form-group"><label className="form-label">Support Phone</label><input className="form-control" defaultValue="+91 98765-00000" /></div>
                <div className="form-group"><label className="form-label">Platform Description</label><textarea className="form-control" rows={3} defaultValue="India's premier multi-hotel booking platform" /></div>
                <div className="form-group"><label className="form-label">Default Currency</label>
                  <select className="form-control form-select">
                    <option value="INR">Indian Rupee (₹)</option>
                    <option value="USD">US Dollar ($)</option>
                  </select>
                </div>
                <div className="form-group"><label className="form-label">Timezone</label>
                  <select className="form-control form-select">
                    <option>Asia/Kolkata (IST, UTC+5:30)</option>
                    <option>UTC</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card">
              <div className="card-header"><div className="card-title">Notification Preferences</div></div>
              <div className="card-body">
                {[
                  'New booking alerts',
                  'Cancellation notifications',
                  'Payment received alerts',
                  'Low occupancy warnings',
                  'New customer registrations',
                  'Discount expiry reminders',
                  'Hotel owner activity',
                  'Weekly revenue reports',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: 13.5 }}>{item}</span>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked style={{ width: 16, height: 16 }} />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="card">
              <div className="card-header"><div className="card-title">Security Settings</div></div>
              <div className="card-body">
                <div className="form-group"><label className="form-label">Current Password</label><input type="password" className="form-control" /></div>
                <div className="form-group"><label className="form-label">New Password</label><input type="password" className="form-control" /></div>
                <div className="form-group"><label className="form-label">Confirm New Password</label><input type="password" className="form-control" /></div>
                <div className="divider" />
                <div style={{ fontWeight: 600, marginBottom: 12 }}>Two-Factor Authentication</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div>
                    <div style={{ fontSize: 13.5 }}>Enable 2FA</div>
                    <div style={{ fontSize: 12, color: '#6b7280' }}>Require OTP for login</div>
                  </div>
                  <input type="checkbox" style={{ width: 16, height: 16 }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
                  <div>
                    <div style={{ fontSize: 13.5 }}>Session Timeout</div>
                    <div style={{ fontSize: 12, color: '#6b7280' }}>Auto logout after inactivity</div>
                  </div>
                  <select className="filter-select">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option>8 hours</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'localization' && (
            <div className="card">
              <div className="card-header"><div className="card-title">Localization Settings</div></div>
              <div className="card-body">
                <div className="form-group"><label className="form-label">Language</label>
                  <select className="form-control form-select">
                    <option>English (India)</option>
                    <option>Hindi</option>
                    <option>Bengali</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                  </select>
                </div>
                <div className="form-group"><label className="form-label">Currency</label>
                  <select className="form-control form-select">
                    <option>₹ Indian Rupee (INR)</option>
                  </select>
                </div>
                <div className="form-group"><label className="form-label">Date Format</label>
                  <select className="form-control form-select">
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
                <div className="form-group"><label className="form-label">Phone Format</label>
                  <select className="form-control form-select">
                    <option>+91 XXXXX-XXXXX (India)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="card">
              <div className="card-header"><div className="card-title">Appearance Settings</div></div>
              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Theme</label>
                  <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                    {['Light', 'Dark', 'Auto'].map(t => (
                      <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13.5 }}>
                        <input type="radio" name="theme" defaultChecked={t === 'Light'} /> {t}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Accent Color</label>
                  <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                    {['#2563eb', '#16a34a', '#7c3aed', '#d97706', '#dc2626'].map(c => (
                      <div key={c} style={{ width: 32, height: 32, borderRadius: '50%', background: c, cursor: 'pointer', border: c === '#2563eb' ? '3px solid #1e40af' : 'none' }} onClick={() => {}} />
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Sidebar Style</label>
                  <select className="form-control form-select">
                    <option>Dark Sidebar (Current)</option>
                    <option>Light Sidebar</option>
                    <option>Minimal Sidebar</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Font Size</label>
                  <select className="form-control form-select">
                    <option>Small</option>
                    <option selected>Medium (Default)</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
