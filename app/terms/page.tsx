import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms | StarBridge",
  description: "Important terms and risk information for using the StarBridge cross-chain interface.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="site innerPage legalPage">
      <section className="pageHeader">
        <div className="eyebrow">STARBRIDGE TERMS</div>
        <h1>Use the interface with <span>care.</span></h1>
        <p>
          StarBridge provides software for reviewing and initiating supported
          blockchain routes. Digital-asset transactions involve financial and
          technical risks and may be irreversible.
        </p>
      </section>

      <section className="legalGrid">
        <article><h2>Software interface</h2><p>StarBridge provides a non-custodial interface. It does not take custody of user assets or control the private keys of connected wallets.</p></article>
        <article><h2>Third-party execution</h2><p>Routes can involve LI.FI and other external protocols, bridges, liquidity providers, exchanges and blockchain networks. Their availability and terms can change.</p></article>
        <article><h2>Live quotes</h2><p>Displayed fees, prices, estimated outputs and completion times are estimates that can change before or during execution. The wallet transaction and live route are the relevant information immediately before signing.</p></article>
        <article><h2>User responsibility</h2><p>Users are responsible for selecting the correct network, token, amount and destination and for reviewing wallet approval requests before signing.</p></article>
        <article><h2>Irreversible transactions</h2><p>Blockchain transactions may be irreversible. A mistaken network, recipient, token or approval can result in loss of assets.</p></article>
        <article><h2>Fees</h2><p>StarBridge does not add a separate interface fee. Other costs may apply depending on the selected route, network and underlying providers.</p></article>
      </section>

      <section className="disclaimer">
        <strong>Risk notice</strong>
        <p>Nothing on this website is financial, investment, legal or tax advice. Users should independently assess whether a transaction is appropriate for their circumstances.</p>
      </section>

      <Footer />
    </main>
  );
}
