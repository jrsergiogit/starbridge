export const ALLOWED_EVENTS = new Set([
  'page_view', 'bridge_opened', 'swap_opened', 'wallet_connect_started',
  'wallet_connected', 'route_available', 'route_selected', 'route_execution_started',
  'route_execution_failed', 'route_cancelled', 'route_completed',
  'transaction_submitted', 'transaction_confirmed',
]);

const PROPERTY_KEYS = new Set([
  'language', 'feature', 'result', 'from_chain_id', 'to_chain_id', 'route_status',
  'route_tool', 'error_category', 'operation_id', 'stage', 'route_count',
  'analytics_version', 'has_ad_click', 'transaction_type',
]);

export function cleanText(value: unknown, max = 140): string {
  if (typeof value !== 'string') return '';
  let text = value.replace(/[\r\n\t\u0000]/g, ' ').replace(/0x[a-fA-F0-9]{40,64}/g, '[redacted]').slice(0, max);
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return text;
}

export function cleanAnalyticsProperties(raw: unknown): Record<string, string | number | boolean> {
  const result: Record<string, string | number | boolean> = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return result;
  for (const [key, value] of Object.entries(raw)) {
    if (!PROPERTY_KEYS.has(key)) continue;
    if (typeof value === 'string') result[key] = cleanText(value, 120);
    else if (typeof value === 'boolean') result[key] = value;
    else if (typeof value === 'number' && Number.isFinite(value)) result[key] = value;
  }
  return result;
}
