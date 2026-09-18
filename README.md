# StarBridge

StarBridge is a non-custodial web interface for reviewing and initiating supported cross-chain crypto bridge and swap routes. The interface uses [LI.FI](https://li.fi/) routing infrastructure.

## Product facts

- **Custody:** non-custodial; StarBridge does not request private keys or seed phrases.
- **Signing:** transactions are approved by the user in their connected wallet.
- **Routing:** LI.FI.
- **Availability:** dynamic; routes depend on networks, assets, liquidity and third-party providers.
- **StarBridge fee:** currently configured at **1% on eligible widget transactions**. Network and route-related costs may also apply.
- **Support:** support@starbridge.finance

## Security

See [`SECURITY.md`](./SECURITY.md) and the live security page at https://starbridge.finance/security. Security reports can be sent to support@starbridge.finance.

The project also publishes machine-readable product information at:

- https://starbridge.finance/llms.txt
- https://starbridge.finance/llms-full.txt
- https://starbridge.finance/.well-known/security.txt

## Architecture

- Next.js 16
- React 18
- LI.FI Widget 3.28
- TypeScript
- Vercel-compatible deployment

The main application is under `app/` and reusable UI components are under `components/`. SEO content and route generation live in `lib/`.

## Environment variables

Secrets and provider credentials must be configured in the deployment environment and must not be committed to source control. Review `.gitignore` and the deployment configuration before publishing the repository.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
```

## Important risk note

Non-custodial does not mean risk-free. Cross-chain transactions can involve smart-contract, bridge, liquidity, provider, network and user-approval risks. Blockchain transactions may be irreversible. Always review the live route and wallet request before signing.
