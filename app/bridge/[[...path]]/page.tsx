import type { Metadata } from "next";
import Link from "next/link";
import Bridge from "@/components/Bridge";
import Footer from "@/components/Footer";
import {
  chainBySlug,
  tokenBySlug,
  chainPairParams,
  tokenPairParams,
  chainPairUrl,
  tokenPairUrl,
  SEO_CHAINS,
  SEO_TOKENS,
} from "@/lib/seo-data";

export const dynamicParams = false;

type Props = {
  params: Promise<{ path?: string[] }>;
};

function getChainData(pair: string) {
  const m = pair.match(/^(.+)-to-(.+)$/);
  if (!m) return null;

  const from = chainBySlug(m[1]);
  const to = chainBySlug(m[2]);

  if (!from || !to || from.slug === to.slug) return null;

  return { from, to };
}

function getTokenData(tokenSlug: string, pair: string) {
  const m = pair.match(/^(.+)-to-(.+)$/);
  if (!m) return null;

  const token = tokenBySlug(tokenSlug);
  const from = chainBySlug(m[1]);
  const to = chainBySlug(m[2]);

  if (!token || !from || !to || from.slug === to.slug) return null;

  return { token, from, to };
}

export function generateStaticParams() {
  return [
    { path: [] },

    ...chainPairParams().map((item) => ({
      path: [item.pair],
    })),

    ...tokenPairParams().map((item) => ({
      path: [item.token, item.pair],
    })),
  ];
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { path = [] } = await params;

  if (path.length === 1) {
    const data = getChainData(path[0]);

    if (!data) return {};

    const { from, to } = data;
    const title = `${from.name} to ${to.name} Bridge`;
    const description = `Bridge supported crypto assets from ${from.name} to ${to.name} with StarBridge. Check live routes, fees and availability before signing.`;
    const url = `https://starbridge.finance${chainPairUrl(
      from.slug,
      to.slug
    )}`;

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${title} | StarBridge`,
        description,
        url,
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
  }

  if (path.length === 2) {
    const data = getTokenData(path[0], path[1]);

    if (!data) return {};

    const { token, from, to } = data;
    const title = `${token.symbol} Bridge: ${from.name} to ${to.name}`;
    const description = `Check the live ${token.symbol} bridge route from ${from.name} to ${to.name} with StarBridge. Review availability, estimated output and fees before signing.`;
    const url = `https://starbridge.finance${tokenPairUrl(
      token.slug,
      from.slug,
      to.slug
    )}`;

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${title} | StarBridge`,
        description,
        url,
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
  }

  return {
    title: "Cross-Chain Bridge | StarBridge",
    description:
      "Bridge supported digital assets across blockchain networks with StarBridge.",
    alternates: {
      canonical: "https://starbridge.finance/bridge",
    },
  };
}

export default async function Page({ params }: Props) {
  const { path = [] } = await params;

  if (path.length === 1) {
    const data = getChainData(path[0]);

    if (!data) return null;

    const { from, to } = data;

    const related = SEO_CHAINS.filter(
      (c) => c.slug !== from.slug && c.slug !== to.slug
    ).slice(0, 6);

    const canonical = `https://starbridge.finance${chainPairUrl(
      from.slug,
      to.slug
    )}`;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${from.name} to ${to.name} Bridge`,
      url: canonical,
      description: `StarBridge route page for moving supported assets from ${from.name} to ${to.name}.`,
      isPartOf: {
        "@type": "WebSite",
        name: "StarBridge",
        url: "https://starbridge.finance/",
      },
    };

    return (
      <main className="site innerPage seoLanding">
        <section className="pageHeader">
          <div className="eyebrow">CROSS-CHAIN BRIDGE</div>

          <h1>
            {from.name} to {to.name} bridge.
          </h1>

          <p>
            Review the current route for moving supported digital assets from{" "}
            {from.name} to {to.name}. Availability, fees, liquidity and
            execution estimates can change with network conditions.
          </p>
        </section>

        <section className="seoBridgeWidget">
          <div className="bridgeShell">
            <div className="bridgeHeader">
              <div>
                <h2>Bridge Assets</h2>
                <p>Select tokens and networks to bridge</p>
              </div>

              <div className="poweredBy">
                <small>Powered by</small>
                <b>
                  <em>◆</em> LI.FI
                </b>
              </div>
            </div>

            <Bridge />
          </div>
        </section>

        <section className="seoContentGrid">
          <article>
            <h2>
              Bridge from {from.name} to {to.name}
            </h2>

            <p>
              Use StarBridge to check available cross-chain routes between{" "}
              {from.name} and {to.name}. The live bridge interface determines
              which assets and routes are currently available.
            </p>
          </article>

          <article>
            <h2>Check the live route</h2>

            <p>
              Before approving a transaction, review the source network,
              destination network, asset, estimated output, network costs and
              route details shown in the live quote.
            </p>
          </article>

          <article>
            <h2>Non-custodial wallet flow</h2>

            <p>
              StarBridge provides an interface for connecting your wallet and
              reviewing a route. You approve transactions from your own wallet
              rather than depositing funds into a StarBridge custodial
              account.
            </p>
          </article>

          <article>
            <h2>Fees and completion time</h2>

            <p>
              Cross-chain costs can include source-network gas, destination
              execution costs and route or liquidity-provider fees. Estimated
              completion time depends on the selected route and current
              blockchain conditions.
            </p>
          </article>
        </section>

        <section className="infoStrip">
          <strong>Explore more bridge routes</strong>

          <span>
            {related.map((c, i) => (
              <span key={c.slug}>
                {i > 0 ? " · " : ""}
                <Link href={chainPairUrl(from.slug, c.slug)}>
                  {from.name} to {c.name}
                </Link>
              </span>
            ))}
          </span>
        </section>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </main>
    );
  }

  if (path.length === 2) {
    const data = getTokenData(path[0], path[1]);

    if (!data) return null;

    const { token: asset, from, to } = data;

    const canonical = `https://starbridge.finance${tokenPairUrl(
      asset.slug,
      from.slug,
      to.slug
    )}`;

    const related = SEO_TOKENS.filter(
      (t) => t.slug !== asset.slug
    ).slice(0, 4);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${asset.symbol} Bridge: ${from.name} to ${to.name}`,
      url: canonical,
      description: `StarBridge route page for ${asset.symbol} between ${from.name} and ${to.name}.`,
      isPartOf: {
        "@type": "WebSite",
        name: "StarBridge",
        url: "https://starbridge.finance/",
      },
    };

    return (
      <main className="site innerPage seoLanding">
        <section className="pageHeader">
          <div className="eyebrow">TOKEN BRIDGE</div>

          <h1>
            {asset.symbol}: {from.name} to {to.name}.
          </h1>

          <p>
            Check whether a live route is available for {asset.name} (
            {asset.symbol}) from {from.name} to {to.name}. The bridge interface
            provides the current route and quote for supported combinations.
          </p>
        </section>

        <section className="seoBridgeWidget">
          <div className="bridgeShell">
            <div className="bridgeHeader">
              <div>
                <h2>Bridge Assets</h2>
                <p>Select tokens and networks to bridge</p>
              </div>

              <div className="poweredBy">
                <small>Powered by</small>
                <b>
                  <em>◆</em> LI.FI
                </b>
              </div>
            </div>

            <Bridge />
          </div>
        </section>

        <section className="seoContentGrid">
          <article>
            <h2>
              {asset.symbol} from {from.name} to {to.name}
            </h2>

            <p>
              {asset.name} can have different representations and availability
              across blockchain networks. Use the live StarBridge route to
              confirm the exact source and destination asset before approving a
              transaction.
            </p>
          </article>

          <article>
            <h2>Verify the destination</h2>

            <p>
              Check the destination network and token shown in the quote. Do
              not assume that similarly named assets are interchangeable across
              networks or that every route is available at every moment.
            </p>
          </article>

          <article>
            <h2>Fees and route availability</h2>

            <p>
              Network gas, liquidity, route selection and provider fees can
              affect the amount received. The live quote is the best reference
              for the transaction you are about to sign.
            </p>
          </article>

          <article>
            <h2>Wallet-controlled execution</h2>

            <p>
              StarBridge is a non-custodial interface. Connect your wallet,
              review the route and approve the transaction yourself. Never sign
              a transaction that does not match your intended asset and
              destination.
            </p>
          </article>
        </section>

        <section className="infoStrip">
          <strong>Other token bridge pages</strong>

          <span>
            {related.map((t, i) => (
              <span key={t.slug}>
                {i > 0 ? " · " : ""}
                <Link href={tokenPairUrl(t.slug, from.slug, to.slug)}>
                  {t.symbol} on {from.name} to {to.name}
                </Link>
              </span>
            ))}
          </span>
        </section>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </main>
    );
  }

  return (
    <main className="site innerPage seoLanding">
      <section className="pageHeader">
        <div className="eyebrow">CROSS-CHAIN BRIDGE</div>

        <h1>Bridge assets across blockchains.</h1>

        <p>
          Connect your wallet and check live cross-chain routes, supported
          assets, fees and estimated execution.
        </p>
      </section>

      <section className="seoBridgeWidget">
        <div className="bridgeShell">
          <div className="bridgeHeader">
            <div>
              <h2>Bridge Assets</h2>
              <p>Select tokens and networks to bridge</p>
            </div>

            <div className="poweredBy">
              <small>Powered by</small>
              <b>
                <em>◆</em> LI.FI
              </b>
            </div>
          </div>

          <Bridge />
        </div>
      </section>

      <Footer />
    </main>
  );
}