'use client';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { DollarSign, TrendingUp, CreditCard, Clock, Download, FileText } from 'lucide-react';
import { monthlyRevenue, revenueByHotel, transactions, revenueBySource } from '@/lib/mockData';
import { useState } from 'react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];

export default function RevenuePage() {
  const [period, setPeriod] = useState('12m');
  const totalRevenue = monthlyRevenue.reduce((s, m) => s + m.revenue, 0);
  const thisMonth = monthlyRevenue[monthlyRevenue.length - 1].revenue;

  const paymentBreakdown = [
    { name: 'Completed', amount: 985000, count: 2450, color: '#16a34a', percent: 105.9 },
    { name: 'Pending', amount: 125000, count: 320, color: '#d97706', percent: 13.4 },
    { name: 'Refunded', amount: 28000, count: 85, color: '#dc2626', percent: 3.0 },
    { name: 'Failed', amount: 12000, count: 45, color: '#6b7280', percent: 1.3 },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="page-title">
          <h1>Revenue Management</h1>
          <p>Comprehensive revenue analytics and insights</p>
        </div>
        <div className="page-header-right">
          <button className="btn btn-outline" onClick={() => alert('Exporting report...')}><Download size={15} /> Export Report</button>
          <button className="btn btn-dark" onClick={() => alert('Generating invoice...')}><FileText size={15} /> Generate Invoice</button>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Total Revenue</span><div style={{ background: '#dbeafe', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><DollarSign size={18} style={{ color: '#2563eb' }} /></div></div>
          <div className="kpi-value">₹930K</div>
          <div className="kpi-sub">+25.0% from last month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">This Month</span><div style={{ background: '#dcfce7', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={18} style={{ color: '#16a34a' }} /></div></div>
          <div className="kpi-value">₹235K</div>
          <div className="kpi-sub neutral">December 2026</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Avg Booking Value</span><div style={{ background: '#ede9fe', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CreditCard size={18} style={{ color: '#7c3aed' }} /></div></div>
          <div className="kpi-value">₹205</div>
          <div className="kpi-sub">+2.3% from average</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-header"><span className="kpi-label">Pending Payments</span><div style={{ background: '#fff7ed', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={18} style={{ color: '#ea580c' }} /></div></div>
          <div className="kpi-value">₹125K</div>
          <div className="kpi-sub neutral">320 transactions</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="chart-grid-2" style={{ marginBottom: 20 }}>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Revenue Trend (12 Months)</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: any) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Revenue']} />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={false} fill="#dbeafe" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Average Booking Value</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: any) => [`₹${v}`, 'Avg per Booking']} />
              <Line type="monotone" dataKey="bookings" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} name="Avg per Booking (₹)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue by Source + Payment Breakdown */}
      <div className="chart-grid-2" style={{ marginBottom: 20 }}>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Revenue by Source</div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={revenueBySource} dataKey="percent" nameKey="source" cx="50%" cy="50%" outerRadius={80}
                label={({ source, percent }: any) => `${source}: ₹${(percent * 100).toFixed(0)}%`}>
                {revenueBySource.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v: any) => [`${(Number(v) * 100).toFixed(0)}%`, 'Share']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <div className="card-title" style={{ marginBottom: 16 }}>Payment Status Breakdown</div>
          {paymentBreakdown.map(p => (
            <div key={p.name} className="payment-status-item">
              <div className="payment-status-dot" style={{ background: p.color }} />
              <div className="payment-status-info">
                <div className="payment-status-name">{p.name}</div>
                <div className="payment-status-count">{p.count} transactions</div>
                <div style={{ marginTop: 4 }}>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${Math.min(p.percent, 100)}%`, background: p.color }} />
                  </div>
                </div>
              </div>
              <div>
                <div className="payment-status-amount">₹{p.amount.toLocaleString('en-IN')}</div>
                <div style={{ fontSize: 11.5, color: '#6b7280', textAlign: 'right' }}>{p.percent}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue by Hotel */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-header">
          <div className="card-title">Revenue by Hotel</div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>Revenue</th>
                <th>Share</th>
                <th>Growth</th>
                <th>Trend</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {revenueByHotel.map(h => (
                <tr key={h.name}>
                  <td><strong>{h.name}</strong></td>
                  <td className="text-green">₹{h.revenue.toLocaleString('en-IN')}</td>
                  <td style={{ minWidth: 120 }}>
                    <div style={{ fontSize: 12.5, marginBottom: 4 }}>{h.share}%</div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width: `${h.share * 5}%` }} /></div>
                  </td>
                  <td><span style={{ color: h.growth.startsWith('+') ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{h.growth}</span></td>
                  <td><span style={{ color: h.trend === 'Growing' ? '#16a34a' : '#dc2626', fontSize: 12.5, fontWeight: 600 }}>{h.trend === 'Growing' ? '↗ Growing' : '↘ Declining'}</span></td>
                  <td><button className="btn btn-outline btn-sm" onClick={() => alert(`Viewing ${h.name} details`)}>View Details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Recent Transactions</div>
          <button className="btn btn-ghost btn-sm">View All</button>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Booking ID</th>
                <th>Hotel</th>
                <th>Guest</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(t => (
                <tr key={t.id}>
                  <td><strong>{t.id}</strong></td>
                  <td style={{ color: '#2563eb' }}>{t.bookingId}</td>
                  <td>{t.hotel}</td>
                  <td>{t.guest}</td>
                  <td><strong>₹{t.amount.toLocaleString('en-IN')}</strong></td>
                  <td style={{ color: '#6b7280' }}>{t.date}</td>
                  <td><span className={`badge badge-${t.status}`}>{t.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
