import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Security | StarBridge",
  description:
    "Learn how StarBridge handles wallet connections, transaction signing, routing, fees and security for cross-chain transfers.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <main className="site innerPage legalPage">
      <section className="pageHeader">
        <div className="eyebrow">STARBRIDGE SECURITY</div>
        <h1>Security and <span>trust.</span></h1>
        <p>
          StarBridge is a non-custodial web interface. This page explains what
          StarBridge controls, what the connected wallet controls, and where
          third-party infrastructure is involved.
        </p>
      </section>

      <section className="legalGrid">
        <article>
          <h2>Non-custodial architecture</h2>
          <p>
            StarBridge does not require users to deposit assets into a StarBridge
            account and does not hold users&apos; private keys. Transaction approvals
            are made from the wallet connected by the user.
          </p>
        </article>
        <article>
          <h2>Transaction signing</h2>
          <p>
            The wallet is the final signing authority. Users should verify the
            source network, destination network, token, amount, recipient and
            transaction details shown by the wallet before approving any request.
          </p>
        </article>
        <article>
          <h2>Routing infrastructure</h2>
          <p>
            StarBridge uses LI.FI routing infrastructure to surface available
            cross-chain and swap routes. Route availability, providers, liquidity,
            fees and execution times can change without notice.
          </p>
        </article>
        <article>
          <h2>Third-party protocols</h2>
          <p>
            A route may involve third-party bridges, exchanges, liquidity venues,
            blockchain networks and smart contracts. StarBridge does not control
            those external protocols and users should evaluate the transaction
            presented by the live route before signing.
          </p>
        </article>
        <article>
          <h2>Fee transparency</h2>
          <p>
            StarBridge currently configures a 1% interface fee on eligible widget
            transactions. The final route may also include network gas, provider,
            swap, liquidity or other route-related costs shown by the live quote.
          </p>
        </article>
        <article>
          <h2>What StarBridge does not promise</h2>
          <p>
            Non-custodial does not mean risk-free. Cross-chain transactions can
            involve smart-contract risk, bridge risk, liquidity risk, network
            failures, incorrect approvals and irreversible blockchain transactions.
          </p>
        </article>
      </section>

      <section className="securityChecklist">
        <h2>Before you sign</h2>
        <ol>
          <li>Confirm the source and destination networks.</li>
          <li>Confirm the exact token and destination asset.</li>
          <li>Check the amount you send and the estimated amount received.</li>
          <li>Review fees, route steps and required approvals.</li>
          <li>Make sure the wallet request matches the route you intended.</li>
          <li>Never share your seed phrase or private key with StarBridge or anyone else.</li>
        </ol>
      </section>

      <section className="supportBox">
        <div>
          <span>SECURITY CONTACT</span>
          <h2>Report a security issue.</h2>
          <p>For responsible disclosure or security questions, contact the StarBridge team.</p>
        </div>
        <a href="mailto:support@starbridge.finance">support@starbridge.finance</a>
      </section>

      <section className="infoStrip">
        <strong>Related</strong>
        <span>
          <Link href="/learn/are-crypto-bridges-safe">Bridge security guide</Link> ·{" "}
          <Link href="/learn/crypto-bridge-security-checklist">Security checklist</Link> ·{" "}
          <Link href="/about">About StarBridge</Link>
        </span>
      </section>

      <Footer />
    </main>
  );
}
