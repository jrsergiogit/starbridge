import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transaction Verification | StarBridge",
  description:
    "Learn how to verify a StarBridge cross-chain transaction using your wallet, transaction hash and blockchain explorer.",
  alternates: { canonical: "/transactions" },
};

export default function Transactions() {
  return (
    <main className="site innerPage">
      <section className="pageHeader">
        <div className="eyebrow">TRANSACTION VERIFICATION</div>
        <h1>Verify your <span>transaction.</span></h1>
        <p>
          StarBridge does not publish invented or sample transaction activity.
          For a real transfer, use the transaction hash from your wallet and the
          relevant blockchain explorer to verify what happened on-chain.
        </p>
      </section>

      <section className="legalGrid">
        <article><h2>1. Check your wallet</h2><p>Confirm the network, token, amount and transaction status shown by the wallet you used to approve the route.</p></article>
        <article><h2>2. Save the transaction hash</h2><p>The transaction hash is the blockchain identifier for the submitted transaction. Keep it for verification and support requests.</p></article>
        <article><h2>3. Use a blockchain explorer</h2><p>Open the explorer for the source network and search the transaction hash. Check the sender, recipient, status, token transfer and block confirmation.</p></article>
        <article><h2>4. Check the destination</h2><p>For cross-chain routes, verify the destination network and wallet balance separately. Completion can require additional steps after the source transaction is confirmed.</p></article>
        <article><h2>5. Do not resend automatically</h2><p>If a route is pending, investigate the current route and provider status before submitting another transaction. Sending again can create a second transfer.</p></article>
        <article><h2>Need help?</h2><p>When contacting StarBridge support, provide the relevant transaction hash and route details. Never provide your seed phrase or private key.</p></article>
      </section>

      <section className="infoStrip">
        <strong>Security resources</strong>
        <span><Link href="/security">Security model</Link> · <Link href="/learn/crypto-bridge-security-checklist">Security checklist</Link> · <Link href="/learn/how-to-verify-a-bridge-transaction">Transaction verification guide</Link></span>
      </section>
      <Footer />
    </main>
  );
}
