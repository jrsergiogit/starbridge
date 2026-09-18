import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Supported Chains",
  description: "Explore blockchain networks supported by StarBridge."
};

const chains = [
  ["Ethereum", "Ξ", "eth", "Ethereum mainnet"],
  ["Arbitrum", "A", "arb", "Fast Ethereum L2"],
  ["Base", "B", "base", "Coinbase L2"],
  ["Solana", "S", "sol", "High-performance chain"],
  ["Polygon", "M", "poly", "Ethereum scaling network"],
  ["Optimism", "O", "op", "Ethereum L2"],
  ["BNB Chain", "B", "bnb", "EVM-compatible network"]
];

export default function Chains() {
  return (
    <main className="site innerPage">
      <section className="pageHeader">
        <div className="eyebrow">SUPPORTED CHAINS</div>

        <h1>
          One bridge.
          <br />
          <span>Many networks.</span>
        </h1>

        <p>
          Connect assets across leading blockchain ecosystems through one simple interface.
        </p>
      </section>

      <section className="chainGrid">
        {chains.map(([name, mark, cls, desc]) => (
          <article className="chainCard" key={name}>
            <div className={`networkIcon large ${cls}`}>
              {mark}
            </div>

            <div>
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>

            <span className="chainArrow">→</span>
          </article>
        ))}
      </section>

      <div className="infoStrip">
        <strong>Powered by LI.FI routing</strong>
        <span>
          Available routes and assets can change as networks and liquidity evolve.
        </span>
      </div>

      <Footer />
    </main>
  );
}