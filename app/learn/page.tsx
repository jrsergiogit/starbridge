import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { LEARN_ARTICLES } from "@/lib/learn-data";

export const metadata: Metadata = {
  title: "Learn | Crypto Bridge Guides & Cross-Chain Education",
  description:
    "Learn how crypto bridges work, compare cross-chain routes, understand fees and discover practical guides for bridging supported assets.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Learn | Crypto Bridge Guides & Cross-Chain Education | StarBridge",
    description:
      "Practical guides and educational articles about crypto bridges, cross-chain transfers, fees, routes and supported networks.",
    url: "https://starbridge.finance/learn",
    siteName: "StarBridge",
    type: "website",
    images: [
      {
        url: "/logo-horizontal-transparent.png",
        width: 413,
        height: 122,
        alt: "StarBridge",
      },
    ],
  },
};

const categoryLabels = {
  guides: "Guides",
  education: "Education",
  comparisons: "Comparisons",
} as const;

export default function LearnPage() {
  return (
    <main className="site innerPage seoLanding">
      <section className="pageHeader">
        <div className="eyebrow">STARBRIDGE LEARN</div>
        <h1>Learn crypto bridging.<br /><span>Move with confidence.</span></h1>
        <p>
          Practical guides covering crypto bridges, cross-chain transfers,
          fees, routes, wallets, stablecoins and supported networks.
        </p>
      </section>

      <section className="seoContentGrid learnGrid">
        {LEARN_ARTICLES.map((article) => (
          <article key={article.slug} className="learnCard">
            <div className="learnCategory">{categoryLabels[article.category]}</div>
            <h2>
              <Link href={`/learn/${article.slug}`}>{article.title}</Link>
            </h2>
            <p>{article.description}</p>
            <Link className="learnRead" href={`/learn/${article.slug}`}>
              Read guide →
            </Link>
          </article>
        ))}
      </section>

      <section className="infoStrip">
        <strong>Try a live route</strong>
        <span>
          <Link href="/crypto-bridge">Crypto bridge</Link> ·{" "}
          <Link href="/cross-chain-bridge">Cross-chain bridge</Link> ·{" "}
          <Link href="/usdc-bridge">USDC bridge</Link> ·{" "}
          <Link href="/base-bridge">Base bridge</Link> ·{" "}
          <Link href="/arbitrum-bridge">Arbitrum bridge</Link>
        </span>
      </section>

      <Footer />
    </main>
  );
}
