import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { LEARN_ARTICLES, learnArticleBySlug, learnParams } from "@/lib/learn-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return learnParams();
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = learnArticleBySlug(slug);
  if (!article) return {};
  const url = `https://starbridge.finance/learn/${article.slug}`;
  return {
    title: `${article.title} | StarBridge`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} | StarBridge`,
      description: article.description,
      url,
      siteName: "StarBridge",
      type: "article",
      images: [{ url: "/logo-horizontal-transparent.png", width: 413, height: 122, alt: "StarBridge" }],
    },
  };
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = learnArticleBySlug(slug);
  if (!article) return null;

  const url = `https://starbridge.finance/learn/${article.slug}`;
  const related = LEARN_ARTICLES
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    author: { "@type": "Organization", name: "StarBridge", url: "https://starbridge.finance/" },
    publisher: { "@type": "Organization", name: "StarBridge", url: "https://starbridge.finance/" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <main className="site innerPage seoLanding">
      <section className="pageHeader">
        <div className="eyebrow">STARBRIDGE LEARN</div>
        <h1>{article.title}.</h1>
        <p>{article.description}</p>
      </section>
      <section className="seoContentGrid">
        {article.sections.map(([heading, body]) => (
          <article key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="infoStrip">
        <strong>Try a live route</strong>
        <span>
          {article.related.map((href, i) => (
            <span key={href}>
              {i > 0 ? " · " : ""}
              <Link href={href}>
                {href.includes("/usdc/") ? "USDC bridge" :
                 href.includes("/usdt/") ? "USDT bridge" :
                 href.includes("ethereum-to-base") ? "Ethereum to Base bridge" :
                 href.includes("ethereum-to-arbitrum") ? "Ethereum to Arbitrum bridge" :
                 "Crypto bridge"}
              </Link>
            </span>
          ))}
        </span>
      </section>
      <section className="infoStrip">
        <strong>More from StarBridge Learn</strong>
        <span>
          {related.map((item, i) => (
            <span key={item.slug}>
              {i > 0 ? " · " : ""}
              <Link href={`/learn/${item.slug}`}>{item.title}</Link>
            </span>
          ))}
        </span>
      </section>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
