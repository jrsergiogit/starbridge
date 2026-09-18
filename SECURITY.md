# Security Policy

## Scope

StarBridge is a non-custodial web interface. It does not require users to provide private keys or seed phrases and does not custody user funds. The interface relies on third-party routing and blockchain infrastructure, including LI.FI and the networks/protocols selected by a live route.

## Reporting a vulnerability

Please report suspected security vulnerabilities to:

**support@starbridge.finance**

When possible, include:

- affected URL or component;
- concise description of the issue;
- reproduction steps;
- screenshots or logs that do not contain private keys, seed phrases or other secrets; and
- transaction hash or wallet address only when necessary to reproduce or investigate the issue.

Do not send seed phrases, private keys, passwords or wallet recovery secrets.

## Security expectations

- Never treat a non-custodial interface as risk-free.
- Review the source and destination network, token, amount, recipient and quoted output before signing.
- Review every wallet approval request.
- Use established blockchain explorers and provider status information to investigate pending or failed transactions.

## Related resources

- https://starbridge.finance/security
- https://starbridge.finance/.well-known/security.txt
