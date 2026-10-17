import { createHash, timingSafeEqual } from 'node:crypto';

export function hasAllowedOrigin(request: Request): boolean {
  if (request.headers.get('sec-fetch-site') === 'cross-site') return false;
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try { return new URL(origin).origin === new URL(request.url).origin; } catch { return false; }
}

function clientKey(request: Request): string {
  // Vercel/reverse proxy should overwrite these headers.
  const value = request.headers.get('x-vercel-forwarded-for')?.split(',')[0].trim()
    || request.headers.get('x-forwarded-for')?.split(',')[0].trim()
    || request.headers.get('x-real-ip')?.trim() || 'unknown';
  return createHash('sha256').update(value).digest('hex').slice(0, 32);
}

const windows = new Map<string, { count: number; expires: number }>();
export function rateAllowed(request: Request, scope: string, limit: number, seconds: number): boolean {
  const now = Date.now();
  if (windows.size > 10000) for (const [key, value] of windows) if (value.expires <= now) windows.delete(key);
  const key = `${scope}:${clientKey(request)}:${Math.floor(now / (seconds * 1000))}`;
  let entry = windows.get(key);
  if (!entry || entry.expires <= now) { entry = { count: 0, expires: now + seconds * 1000 }; windows.set(key, entry); }
  entry.count += 1;
  return entry.count <= limit;
}

export async function readSmallJson(request: Request, maxBytes = 12000): Promise<unknown> {
  const declared = Number(request.headers.get('content-length') || 0);
  if (declared > maxBytes) throw new Error('BODY_TOO_LARGE');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('INVALID_JSON');
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > maxBytes) { await reader.cancel(); throw new Error('BODY_TOO_LARGE'); }
      chunks.push(value);
    }
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } finally { reader.releaseLock(); }
}

export function safeSecretMatch(received: string, expected: string): boolean {
  const a = Buffer.from(received); const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
