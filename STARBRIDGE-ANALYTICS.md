# StarBridge Analytics dashboard

This package adds first-party traffic attribution, an event endpoint, a password-protected analytics dashboard, and a separate Google Sheets backend. Existing LI.FI widget, SEO pages, Telegram alerts, and Google Ads setup are preserved.

## Files added
- `lib/analytics/tracker.ts`: first-touch source/UTM attribution, anonymous session IDs, page and product event tracking.
- `lib/analytics/schema.ts`: event allowlist and property sanitization.
- `lib/analytics/request-guard.ts`: origin checks, request size limit, rate limit, timing-safe password comparison.
- `app/api/analytics-event/route.ts`: POST event ingestion and authenticated GET dashboard data.
- `components/analytics/AnalyticsPageTracker.tsx`: page view tracking.
- `app/dashboard/page.tsx`: dashboard UI.
- `analytics-google-sheets/Code.gs`: Apps Script storage and aggregation backend.
- `analytics-google-sheets/SETUP.md`: Google Sheets and Vercel setup instructions.

## Deployment
1. Follow `analytics-google-sheets/SETUP.md` to create the dedicated StarBridge Analytics spreadsheet and deploy Apps Script.
2. Set `ANALYTICS_SHEETS_WEB_APP_URL`, `ANALYTICS_SHARED_SECRET`, and `ANALYTICS_DASHBOARD_PASSWORD` in Vercel. These are server-only variables.
3. Commit and deploy the StarBridge project.
4. Visit `/dashboard` and enter the dashboard password.

## Events currently wired
- `page_view` for route changes.
- `wallet_connected` from the existing LI.FI wallet-management event.
- `route_completed` from the existing LI.FI route completion event.

The remaining allowlisted route events are available for wiring when the matching LI.FI events/interaction points are verified. The widget is kept intact; this change does not claim to track events that aren't currently hooked up.

## Important limitations
- Browser referrers may be missing, so some AI/social visits can appear as `direct`.
- Sessions use sessionStorage and a 30-minute idle timeout; this is session attribution, not a cross-device user identity.
- Revenue and USD volume are not fabricated. Connect a reliable commission/transaction data source before reporting earnings.
- The in-memory rate limiter is per server instance; for larger traffic, a shared Redis limiter can be added.
