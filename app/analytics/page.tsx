'use client';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { monthlyRevenue, hotels, revenueByHotel } from '@/lib/mockData';

const COLORS = ['#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#8b5cf6'];

const occupancyTrend = [
  { month: 'Jan', rate: 72 }, { month: 'Feb', rate: 75 }, { month: 'Mar', rate: 80 },
  { month: 'Apr', rate: 78 }, { month: 'May', rate: 83 }, { month: 'Jun', rate: 88 },
  { month: 'Jul', rate: 85 }, { month: 'Aug', rate: 87 }, { month: 'Sep', rate: 82 },
  { month: 'Oct', rate: 89 }, { month: 'Nov', rate: 91 }, { month: 'Dec', rate: 94 },
];

const hotelDistribution = hotels.slice(0, 5).map(h => ({ name: h.name.split(' ').slice(-1)[0], value: h.revenue }));

export default function AnalyticsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>Analytics</h1>
          <p>Platform-wide analytics and performance insights</p>
        </div>
        <button className="btn btn-outline" onClick={() => alert('Exporting analytics...')}>Export Report</button>
      </div>

      {/* Top KPIs */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Platform Occupancy</span><div className="kpi-icon green">📊</div></div>
          <div className="kpi-value">85.3%</div>
          <div className="kpi-sub">+3.2% vs last month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Total Revenue</span><div className="kpi-icon blue">💰</div></div>
          <div className="kpi-value">₹4.3M</div>
          <div className="kpi-sub">+22% vs last year</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Avg Rating</span><div className="kpi-icon yellow">⭐</div></div>
          <div className="kpi-value">4.72</div>
          <div className="kpi-sub neutral">Across all hotels</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Guest Satisfaction</span><div className="kpi-icon purple">😊</div></div>
          <div className="kpi-value">94%</div>
          <div className="kpi-sub">+1.5% this quarter</div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="chart-grid-2" style={{ marginBottom: 20 }}>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Platform Revenue Trend</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyRevenue.slice(0, 6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
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
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="bookings" fill="#10b981" radius={[4, 4, 0, 0]} name="Bookings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="chart-grid-2" style={{ marginBottom: 20 }}>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Occupancy Rate Trend</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={occupancyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} domain={[60, 100]} />
              <Tooltip formatter={(v: any) => [`${v}%`, 'Occupancy Rate']} />
              <Line type="monotone" dataKey="rate" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} name="Occupancy %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Revenue Distribution by Hotel</div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={hotelDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}
                label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                {hotelDistribution.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v: any) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Revenue']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Hotel Performance Table */}
      <div className="card">
        <div className="card-header"><div className="card-title">Hotel Performance Ranking</div></div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Hotel</th>
                <th>City</th>
                <th>Revenue</th>
                <th>Occupancy</th>
                <th>Rating</th>
                <th>Bookings</th>
              </tr>
            </thead>
            <tbody>
              {hotels.slice(0, 10).sort((a, b) => b.revenue - a.revenue).map((h, i) => (
                <tr key={h.id}>
                  <td>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: i < 3 ? ['#f59e0b','#6b7280','#d97706'][i] : '#f3f4f6', color: i < 3 ? 'white' : '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>
                      {i + 1}
                    </div>
                  </td>
                  <td><strong>{h.name}</strong></td>
                  <td style={{ color: '#6b7280' }}>{h.city}</td>
                  <td className="text-green">₹{h.revenue.toLocaleString('en-IN')}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ minWidth: 36, fontWeight: 600 }}>{Math.round((h.occupiedRooms / h.rooms) * 100)}%</span>
                      <div className="progress-bar" style={{ flex: 1 }}>
                        <div className="progress-fill green" style={{ width: `${(h.occupiedRooms / h.rooms) * 100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td>{h.rating} ⭐</td>
                  <td>{h.checkIns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
