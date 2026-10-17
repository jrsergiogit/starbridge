'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackStarBridgeEvent } from '@/lib/analytics/tracker';

export default function AnalyticsPageTracker() {
  const pathname = usePathname();
  const last = useRef('');
  useEffect(() => {
    if (!pathname || pathname.startsWith('/dashboard')) return;
    const key = pathname;
    if (last.current === key) return;
    last.current = key;
    trackStarBridgeEvent('page_view');
  }, [pathname]);
  return null;
}
