'use client';

import { useCallback, useEffect, useState } from 'react';

type Group = { name: string; sessions: number; page_views?: number; completed?: number; conversion_rate?: number };
type Daily = { date: string; sessions: number; page_views: number; route_completed: number };
type DashboardData = {
  ok: boolean; generated_at: string; period_days: number;
  summary: { sessions: number; page_views: number; bridge_sessions: number; swap_sessions: number; route_completed: number; route_failed: number; wallet_connected: number; completion_rate: number };
  daily: Daily[]; sources: Group[]; campaigns: Group[]; devices: Group[]; features: Group[];
};
const number = (value?: number) => new Intl.NumberFormat('en-US').format(value || 0);
const percent = (value?: number) => `${(value || 0).toFixed(1)}%`;

export default function AnalyticsDashboard() {
  const [password, setPassword] = useState('');
  const [savedPassword, setSavedPassword] = useState('');
  const [days, setDays] = useState('30');
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const load = useCallback(async (token: string, period: string) => {
    setLoading(true); setError('');
    try {
      const response = await fetch(`/api/analytics-event?days=${period}`, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' });
      const json = await response.json();
      if (!response.ok || !json.ok) throw new Error(json.error || 'Could not load dashboard.');
      setData(json as DashboardData); setSavedPassword(token);
    } catch (e) { setData(null); setError(e instanceof Error ? e.message : 'Could not load dashboard.'); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { /* Password is deliberately not persisted in browser storage. */ }, []);
  const maxSource = Math.max(1, ...(data?.sources || []).map((x) => x.sessions));
  const maxDaily = Math.max(1, ...(data?.daily || []).map((x) => x.sessions));

  return <main style={{ minHeight: '100vh', background: '#080b14', color: '#f4f6ff', padding: '40px 20px 70px' }}>
    <div style={{ maxWidth: 1180, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
        <div><div style={{ color: '#9b83ff', letterSpacing: 3, fontSize: 12, fontWeight: 800 }}>STARBRIDGE</div><h1 style={{ fontSize: 32, margin: '8px 0' }}>Analytics dashboard</h1><p style={{ color: '#99a4bd', margin: 0 }}>Traffic sources, product engagement and completed routes</p></div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <select value={days} onChange={(e) => { setDays(e.target.value); if (savedPassword) void load(savedPassword, e.target.value); }} style={inputStyle}><option value="7">Last 7 days</option><option value="30">Last 30 days</option><option value="90">Last 90 days</option><option value="365">Last 365 days</option></select>
          {data && <button onClick={() => void load(savedPassword, days)} style={buttonStyle}>{loading ? 'Loading…' : 'Refresh'}</button>}
        </div>
      </header>
      {!data && <form onSubmit={(e) => { e.preventDefault(); void load(password, days); }} style={{ background: '#11182a', border: '1px solid #28334d', borderRadius: 16, padding: 24, maxWidth: 500, marginBottom: 24 }}>
        <h2 style={{ marginTop: 0 }}>Dashboard sign in</h2><p style={{ color: '#99a4bd', lineHeight: 1.5 }}>Enter the dashboard password configured in your hosting environment.</p>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Dashboard password" autoComplete="current-password" style={{ ...inputStyle, width: '100%', boxSizing: 'border-box', marginBottom: 12 }} />
        <button type="submit" disabled={loading || !password} style={{ ...buttonStyle, width: '100%', opacity: loading || !password ? .6 : 1 }}>{loading ? 'Loading…' : 'Open dashboard'}</button>
        {error && <p role="alert" style={{ color: '#fca5a5', marginBottom: 0 }}>{error}</p>}
      </form>}
      {data && <>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 14, marginBottom: 18 }}>
          <Metric title="Sessions" value={number(data.summary.sessions)} note={`Last ${data.period_days} days`} />
          <Metric title="Page views" value={number(data.summary.page_views)} note="Tracked page_view events" />
          <Metric title="Bridge sessions" value={number(data.summary.bridge_sessions)} note="Bridge interaction observed" />
          <Metric title="Swap sessions" value={number(data.summary.swap_sessions)} note="Swap interaction observed" />
          <Metric title="Completed routes" value={number(data.summary.route_completed)} note="LI.FI completion event" />
          <Metric title="Completion rate" value={percent(data.summary.completion_rate)} note="Completed routes / sessions" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 16 }}>
          <section style={panelStyle}><h2 style={h2Style}>Traffic sources</h2><p style={subStyle}>Sessions by first identifiable source</p>{data.sources.length ? data.sources.map((s) => <div key={s.name} style={{ margin: '18px 0' }}><div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 7 }}><span>{s.name}</span><strong>{number(s.sessions)}</strong></div><div style={trackStyle}><div style={{ height: '100%', width: `${Math.max(2, s.sessions / maxSource * 100)}%`, background: 'linear-gradient(90deg,#6d5dfc,#42c9c0)', borderRadius: 99 }} /></div></div>) : <Empty />}</section>
          <section style={panelStyle}><h2 style={h2Style}>Daily sessions</h2><p style={subStyle}>Unique session IDs recorded each day</p><div style={{ height: 190, display: 'flex', alignItems: 'end', gap: 3, paddingTop: 12 }}>{data.daily.map((d) => <div key={d.date} title={`${d.date}: ${d.sessions} sessions`} style={{ flex: 1, minWidth: 2, height: `${Math.max(3, d.sessions / maxDaily * 100)}%`, background: '#806bff', borderRadius: '3px 3px 0 0', opacity: .9 }} />)}</div><p style={subStyle}>Most recent day: {data.daily.at(-1)?.date || '—'}</p></section>
          <section style={panelStyle}><h2 style={h2Style}>Product events</h2><p style={subStyle}>Sessions by observed interaction</p>{data.features.length ? data.features.map((x) => <div key={x.name} style={listRow}><span>{x.name.replaceAll('_', ' ')}</span><strong>{number(x.sessions)}</strong></div>) : <Empty />}</section>
          <section style={panelStyle}><h2 style={h2Style}>Campaigns</h2><p style={subStyle}>UTM campaign attribution</p>{data.campaigns.length ? data.campaigns.map((x) => <div key={x.name} style={listRow}><span>{x.name}</span><strong>{number(x.sessions)}</strong></div>) : <Empty />}</section>
          <section style={panelStyle}><h2 style={h2Style}>Devices</h2><p style={subStyle}>Device category by session</p>{data.devices.length ? data.devices.map((x) => <div key={x.name} style={listRow}><span>{x.name}</span><strong>{number(x.sessions)}</strong></div>) : <Empty />}</section>
        </div>
        <p style={{ color: '#73809a', fontSize: 12, marginTop: 22 }}>Updated {new Date(data.generated_at).toLocaleString()} · Analytics only reports events captured after deployment; route volume and commission revenue are not inferred from traffic data.</p>
      </>}
    </div>
  </main>;
}
function Metric({ title, value, note }: { title: string; value: string; note: string }) { return <div style={panelStyle}><div style={{ color: '#9ba8c3', fontSize: 13 }}>{title}</div><div style={{ fontSize: 30, fontWeight: 750, margin: '12px 0 6px' }}>{value}</div><div style={{ color: '#7785a2', fontSize: 12 }}>{note}</div></div>; }
function Empty() { return <p style={{ color: '#7785a2', fontSize: 13 }}>No data for this period yet.</p>; }
const panelStyle: React.CSSProperties = { background: '#11182a', border: '1px solid #27334c', borderRadius: 16, padding: 20 };
const h2Style: React.CSSProperties = { fontSize: 18, margin: '0 0 5px' };
const subStyle: React.CSSProperties = { color: '#8794b0', fontSize: 12, margin: '0 0 12px' };
const inputStyle: React.CSSProperties = { background: '#0b1120', border: '1px solid #33415f', color: '#eef2ff', borderRadius: 9, padding: '10px 12px' };
const buttonStyle: React.CSSProperties = { background: '#7658f6', border: 0, color: '#fff', borderRadius: 9, padding: '11px 15px', fontWeight: 700, cursor: 'pointer' };
const trackStyle: React.CSSProperties = { height: 7, background: '#222d45', borderRadius: 99, overflow: 'hidden' };
const listRow: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 12, padding: '12px 0', borderBottom: '1px solid #26314a', textTransform: 'capitalize' };
