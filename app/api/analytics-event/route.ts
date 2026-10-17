import { NextResponse } from 'next/server';
import { ALLOWED_EVENTS, cleanAnalyticsProperties, cleanText } from '@/lib/analytics/schema';
import { hasAllowedOrigin, rateAllowed, readSmallJson } from '@/lib/analytics/request-guard';

export const runtime = 'nodejs';
const headers = { 'Cache-Control': 'no-store' };

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'development' || process.env.STARBRIDGE_ANALYTICS_PREVIEW === '1')
    return NextResponse.json({ ok: true, local_preview: true }, { status: 202, headers });
  if (!hasAllowedOrigin(request)) return NextResponse.json({ ok: false }, { status: 403, headers });
  if (!rateAllowed(request, 'starbridge-events', 180, 60)) return NextResponse.json({ ok: false }, { status: 429, headers });
  const url = process.env.ANALYTICS_SHEETS_WEB_APP_URL;
  const secret = process.env.ANALYTICS_SHARED_SECRET;
  if (!url || !secret) return NextResponse.json({ ok: true, configured: false }, { status: 202, headers });

  try {
    const raw = await readSmallJson(request) as Record<string, unknown>;
    const event = cleanText(raw?.event, 60);
    const session = cleanText(raw?.session_id, 100);
    const eventId = cleanText(raw?.event_id, 100);
    if (!ALLOWED_EVENTS.has(event) || !/^[a-zA-Z0-9_-]{6,100}$/.test(session) || !/^[a-zA-Z0-9_-]{6,100}$/.test(eventId))
      return NextResponse.json({ ok: false, error: 'Invalid event' }, { status: 400, headers });

    const properties = cleanAnalyticsProperties(raw.properties);
    const data = {
      event, session_id: session, device: cleanText(raw.device, 20), path: cleanText(raw.path, 160).split('?')[0],
      source: cleanText(raw.source, 100), medium: cleanText(raw.medium, 100), campaign: cleanText(raw.campaign),
      content: cleanText(raw.content), term: cleanText(raw.term), referrer: cleanText(raw.referrer, 180), properties,
    };
    const response = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'event', secret, data }), redirect: 'follow', cache: 'no-store', signal: AbortSignal.timeout(6000),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok === false) return NextResponse.json({ ok: false, error: 'Analytics upstream error' }, { status: 502, headers });
    return NextResponse.json({ ok: true }, { headers });
  } catch {
    return NextResponse.json({ ok: false, error: 'Analytics write failed' }, { status: 400, headers });
  }
}

export async function GET(request: Request) {
  const webAppUrl = process.env.ANALYTICS_SHEETS_WEB_APP_URL;
  const sharedSecret = process.env.ANALYTICS_SHARED_SECRET;
  const dashboardPassword = process.env.ANALYTICS_DASHBOARD_PASSWORD;
  if (!webAppUrl || !sharedSecret || !dashboardPassword) return NextResponse.json({ ok: false, error: 'Analytics dashboard is not configured.' }, { status: 503 });
  const auth = request.headers.get('authorization') || '';
  const received = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  const { safeSecretMatch } = await import('@/lib/analytics/request-guard');
  if (!received || !safeSecretMatch(received, dashboardPassword)) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  const requestedDays = Number(new URL(request.url).searchParams.get('days') || '30');
  const days = Math.min(365, Math.max(1, Number.isFinite(requestedDays) ? requestedDays : 30));
  try {
    const response = await fetch(webAppUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'dashboard', secret: sharedSecret, days }), redirect: 'follow', cache: 'no-store', signal: AbortSignal.timeout(10000) });
    if (!response.ok) return NextResponse.json({ ok: false, error: 'Analytics upstream error' }, { status: 502 });
    const data = await response.json();
    if (!data?.ok) return NextResponse.json({ ok: false, error: data?.error || 'Unable to read analytics data.' }, { status: 502 });
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch { return NextResponse.json({ ok: false, error: 'Unable to load analytics data.' }, { status: 502 }); }
}
