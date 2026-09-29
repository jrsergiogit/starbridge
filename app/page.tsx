import Link from "next/link";
import Bridge from "@/components/Bridge";
import BridgeEvents from "@/components/BridgeEvents";
import Footer from "@/components/Footer";

const popularPages = [
  {
    href: "/crypto-bridge",
    title: "Crypto Bridge",
    description: "Bridge supported assets across compatible blockchain networks.",
  },
  {
    href: "/cross-chain-bridge",
    title: "Cross-Chain Bridge",
    description: "Explore cross-chain routes through one interface.",
  },
  {
    href: "/token-bridge",
    title: "Token Bridge",
    description: "Move supported tokens between connected networks.",
  },
  {
    href: "/usdc-bridge",
    title: "USDC Bridge",
    description: "Explore supported USDC routes across networks.",
  },
  {
    href: "/base-bridge",
    title: "Base Bridge",
    description: "Bridge supported assets to and from Base.",
  },
  {
    href: "/arbitrum-bridge",
    title: "Arbitrum Bridge",
    description: "Bridge supported assets to and from Arbitrum.",
  },
];

const trustItems = [
  {
    number: "01",
    title: "Non-custodial",
    text: "Your wallet stays in your control. StarBridge does not hold your assets.",
  },
  {
    number: "02",
    title: "Powered by LI.FI",
    text: "Routing infrastructure connects supported chains, bridges and liquidity sources.",
  },
  {
    number: "03",
    title: "You approve each action",
    text: "Review the route and transaction details in your wallet before anything is executed.",
  },
];

const quickTrust = [
  "No account",
  "No seed phrase",
  "Non-custodial",
  "Review before signing",
];

export default function Home() {
  return (
    <main className="homePage">
      <section className="homeHero">
        <div className="homeHeroContent">
          <div className="homeEyebrow">
            <span />
            CROSS-CHAIN BRIDGE &amp; SWAP
          </div>

          <h1>
            Bridge crypto.
            <br />
            <span>Keep control.</span>
          </h1>

          <p className="homeLead">
            Move supported assets across blockchain networks using LI.FI
            routing. StarBridge never holds your funds or private keys.
          </p>

          <div
            className="homeQuickTrust"
            aria-label="StarBridge trust highlights"
          >
            {quickTrust.map((item) => (
              <span key={item}>
                <i aria-hidden="true">✓</i>
                {item}
              </span>
            ))}
          </div>

          <div className="homeTrust">
            {trustItems.map((item) => (
              <div className="homeTrustItem" key={item.number}>
                <span className="homeTrustNumber">{item.number}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="homeTrustNote">
            <span className="homeLiveDot" />
            You approve every transaction from your own wallet.
          </div>
        </div>

        <div className="homeWidgetColumn">
          <div className="homeWidgetCard">
            <div className="homeWidgetTop">
              <div>
                <span className="homeWidgetLabel">
                  NON-CUSTODIAL CROSS-CHAIN ROUTING
                </span>
                <h2>Bridge or Swap</h2>
                <p>Connect your wallet to compare available routes.</p>
              </div>

              <a
                className="homeLifi"
                href="https://li.fi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LI.FI"
              >
                <small>Routing powered by</small>
                <strong>
                  <i>◆</i> LI.FI
                </strong>
              </a>
            </div>

            <div className="homeConnectIntro">
              <span className="homeShield" aria-hidden="true">
                ◇
              </span>
              <div>
                <strong>Connect without moving funds</strong>
                <p>
                  Connecting alone does not move funds or execute a transaction.
                  You review and approve each action in your wallet.
                </p>
              </div>
            </div>

            <Bridge />
            <BridgeEvents />

            <div className="homeWidgetBottom">
              <span className="homeLiveDot" />
              Non-custodial
              <b>•</b>
              <Link href="/security">Security</Link>
              <b>•</b>
              Live route availability
            </div>
          </div>
        </div>
      </section>

      <section className="homeTrustBar">
        <div>
          <span>01</span>
          <strong>Connect</strong>
          <p>Connect your own wallet. Your assets remain under your control.</p>
        </div>

        <div>
          <span>02</span>
          <strong>Review</strong>
          <p>Choose the route and review the current transaction details.</p>
        </div>

        <div>
          <span>03</span>
          <strong>Approve</strong>
          <p>Approve the requested action directly in your connected wallet.</p>
        </div>
      </section>

      <section className="homeAbout">
        <div className="homeAboutMain">
          <span className="homeSectionLabel">HOW STARBRIDGE WORKS</span>

          <h2>
            One interface.
            <br />
            <span>Multiple networks.</span>
          </h2>

          <p>
            StarBridge brings supported cross-chain bridge and swap routes into
            one interface. Route availability, quotes, fees and execution times
            depend on the selected assets, networks, liquidity and underlying
            providers.
          </p>

          <div className="homeAboutLinks">
            <Link href="/chains">
              Supported chains <span>→</span>
            </Link>

            <Link href="/security">
              Security <span>→</span>
            </Link>

            <Link href="/learn">
              Learn <span>→</span>
            </Link>
          </div>
        </div>

        <div className="homeAboutSide">
          <div className="homeSideItem">
            <span>BRIDGE</span>
            <p>Move supported assets between compatible networks.</p>
          </div>

          <div className="homeSideItem">
            <span>SWAP</span>
            <p>Exchange supported tokens using available routes.</p>
          </div>

          <div className="homeSideItem">
            <span>CONTROL</span>
            <p>Transactions are approved by you in your connected wallet.</p>
          </div>
        </div>
      </section>

      <section className="homeRoutes">
        <div className="homeRoutesHeader">
          <div>
            <span className="homeSectionLabel">EXPLORE</span>
            <h2>Popular bridge topics</h2>
          </div>

          <Link href="/learn">
            View all guides <span>→</span>
          </Link>
        </div>

        <div className="homeRoutesGrid">
          {popularPages.map((page, index) => (
            <Link href={page.href} className="homeRouteCard" key={page.href}>
              <span>0{index + 1}</span>
              <h3>{page.title}</h3>
              <p>{page.description}</p>
              <b>→</b>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}