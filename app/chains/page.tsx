import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CORE_CHAINS, chainBySlug, chainPairUrl, tokenPairUrl, CORE_TOKENS, CORE_TOKEN_CHAINS } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Supported Chains",
  description: "Explore blockchain networks supported by StarBridge and jump to popular cross-chain bridge routes between Ethereum, Arbitrum, Base, Optimism, Polygon, BNB Chain, Avalanche and Solana.",
  alternates: { canonical: "/chains" },
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

      <section className="seoContentGrid">
        {CORE_CHAINS.map((fromSlug) => {
          const from = chainBySlug(fromSlug);
          if (!from) return null;
          return (
            <article key={fromSlug}>
              <h2>Bridge from {from.name}</h2>
              <p>
                {CORE_CHAINS.filter((s) => s !== fromSlug).map((toSlug, i) => {
                  const to = chainBySlug(toSlug);
                  if (!to) return null;
                  return (
                    <span key={toSlug}>
                      {i > 0 ? " · " : ""}
                      <Link href={chainPairUrl(fromSlug, toSlug)}>
                        {from.name} to {to.name}
                      </Link>
                    </span>
                  );
                })}
              </p>
            </article>
          );
        })}
      </section>

      <section className="seoContentGrid">
        <article>
          <h2>Popular stablecoin routes</h2>
          <p>
            {CORE_TOKENS.flatMap((token) =>
              CORE_TOKEN_CHAINS.flatMap((f) =>
                CORE_TOKEN_CHAINS.filter((t) => t !== f).map((t) => ({ token, f, t })),
              ),
            ).map(({ token, f, t }, i) => (
              <span key={`${token}-${f}-${t}`}>
                {i > 0 ? " · " : ""}
                <Link href={tokenPairUrl(token, f, t)}>
                  {token.toUpperCase()} {chainBySlug(f)?.name} to {chainBySlug(t)?.name}
                </Link>
              </span>
            ))}
          </p>
        </article>
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