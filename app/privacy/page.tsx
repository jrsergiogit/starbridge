import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy | StarBridge",
  description: "StarBridge privacy information for the website, wallet interface and support communications.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="site innerPage legalPage">
      <section className="pageHeader">
        <div className="eyebrow">STARBRIDGE PRIVACY</div>
        <h1>Your data. <span>Your control.</span></h1>
        <p>
          StarBridge is a non-custodial interface. We do not ask for private keys
          or seed phrases. This page describes the main categories of information
          involved when you use the site.
        </p>
      </section>

      <section className="legalGrid">
        <article><h2>Wallet information</h2><p>Connecting a wallet can expose a public wallet address and blockchain activity needed to display or execute a route. A public blockchain address is not a private key.</p></article>
        <article><h2>Transaction data</h2><p>Blockchain transactions are public by design. Transaction hashes, addresses, token movements and network data may be visible on the relevant public blockchain explorer.</p></article>
        <article><h2>Third-party services</h2><p>StarBridge relies on third-party infrastructure such as LI.FI and blockchain networks to provide routing and execution. Their services may process technical information according to their own policies.</p></article>
        <article><h2>Support</h2><p>If you contact support, the information you voluntarily provide may be used to answer your request and maintain the support conversation.</p></article>
        <article><h2>No seed phrases</h2><p>Never send a seed phrase, private key or wallet recovery secret to StarBridge support. StarBridge does not need these credentials to provide the interface.</p></article>
        <article><h2>Updates</h2><p>This page may be updated as the StarBridge product, infrastructure and legal requirements evolve. The current version published on this website is the applicable website notice.</p></article>
      </section>

      <section className="infoStrip">
        <strong>Questions</strong>
        <span><a href="mailto:support@starbridge.finance">support@starbridge.finance</a> · <Link href="/security">Security</Link> · <Link href="/terms">Terms</Link></span>
      </section>
      <Footer />
    </main>
  );
}
