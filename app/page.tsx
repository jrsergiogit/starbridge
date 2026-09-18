import Link from "next/link";
import Bridge from "@/components/Bridge";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import NetworkIcons from "@/components/NetworkIcons";

const nodes = [
  ["eth", "Ξ", "Ethereum", "n1"],
  ["base", "—", "Base", "n2"],
  ["poly", "◆", "Polygon", "n3"],
  ["op", "OP", "Optimism", "n4"],
  ["sol", "S", "Solana", "n5"],
  ["bnb", "B", "BNB Chain", "n6"],
  ["arb", "A", "Arbitrum", "n7"],
];

const popularPages = [
  ["/crypto-bridge", "Crypto Bridge", "A simple interface for moving supported assets across chains."],
  ["/cross-chain-bridge", "Cross-Chain Bridge", "Compare supported routes through one cross-chain interface."],
  ["/token-bridge", "Token Bridge", "Move supported tokens between compatible blockchain networks."],
  ["/usdc-bridge", "USDC Bridge", "Explore supported USDC routes across connected networks."],
  ["/base-bridge", "Base Bridge", "Bridge supported assets to and from Base."],
  ["/arbitrum-bridge", "Arbitrum Bridge", "Bridge supported assets to and from Arbitrum."],
];

export default function Home() {
  return (
    <main className="referenceSite">
      <section className="referenceHero">
        <div className="heroLeft">
          <div className="eyebrow">CROSS-CHAIN BRIDGING</div>
          <h1>Move assets.<br /><span>Any chain.</span></h1>
          <p className="heroCopy">
            Review supported cross-chain routes through one non-custodial
            interface powered by LI.FI. Connect your wallet, compare the live
            route and approve the transaction yourself.
          </p>

          <Features />

          <div className="networkScene">
            <div className="planetGlow" />
            <div className="planet" />
            <div className="arc arcA" />
            <div className="arc arcB" />
            <div className="arc arcC" />
            <div className="arc arcD" />
            {nodes.map(([cls, mark, name, pos]) => (
              <div className={`chainNode ${cls} ${pos}`} key={name} title={name}>{mark}</div>
            ))}
          </div>

          <div className="stats">
            <div><strong>Non-custodial</strong><span>You control your wallet</span></div>
            <div><strong>LI.FI</strong><span>Routing infrastructure</span></div>
            <div><strong>Live</strong><span>Route availability</span></div>
            <div><strong>1%</strong><span>StarBridge fee*</span></div>
          </div>
          <p className="microDisclosure">* StarBridge currently configures a 1% interface fee on eligible widget transactions. Network and route costs may also apply.</p>
        </div>

        <div className="bridgeColumn">
          <div className="bridgeShell">
            <div className="bridgeHeader">
              <div>
                <h2>Move Assets</h2>
                <p>Select tokens and networks to bridge or swap</p>
              </div>
              <div className="poweredBy"><small>Powered by</small><b><em>◆</em> LI.FI</b></div>
            </div>
            <Bridge />
            <div className="bridgeBottomNote">
              <span>●</span> Best route &nbsp;•&nbsp; Lowest fees &nbsp;•&nbsp; Powered by LI.FI
            </div>
          </div>
        </div>
      </section>

      <section className="seoPanel">
        <article>
          <h2>Cross-chain bridge for supported assets</h2>
          <p>
            StarBridge is a non-custodial interface for moving supported digital
            assets across blockchain networks. Choose a source chain, destination
            chain and token, then review the available route.
          </p>
        </article>
        <article>
          <h2>Cross-chain routing powered by LI.FI</h2>
          <p>
            StarBridge uses LI.FI routing infrastructure to surface available
            cross-chain paths. Route availability, fees and execution times can
            change with network conditions and underlying liquidity. The live
            quote is the relevant source immediately before signing.
          </p>
        </article>
        <article>
          <h2>Built for Web3 users</h2>
          <p>
            Explore supported chains and dedicated bridge guides for common
            searches such as crypto bridge, token bridge, USDC bridge, Base
            bridge and Arbitrum bridge.
          </p>
        </article>
      </section>

      <section className="seoPanel popularPages">
        {popularPages.map(([href, title, description]) => (
          <article key={href}>
            <h2><Link href={href}>{title}</Link></h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}