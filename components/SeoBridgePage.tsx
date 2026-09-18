import type { Metadata } from "next";
import Link from "next/link";
import Bridge from "@/components/Bridge";
import Footer from "@/components/Footer";

export type SeoPageData = {
  title: string;
  description: string;
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
  sections: Array<{ title: string; body: string }>;
  related: Array<{ href: string; label: string }>;
};

export function seoMetadata(data: SeoPageData): Metadata {
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `/${data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    },
    openGraph: {
      title: `${data.title} | StarBridge`,
      description: data.description,
      url: `https://starbridge.finance/${data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
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

export default function SeoBridgePage({ data }: { data: SeoPageData }) {
  return (
    <main className="site innerPage seoLanding">
      <section className="pageHeader">
        <div className="eyebrow">{data.eyebrow}</div>
        <h1>{data.heading}</h1>
        <p>{data.intro}</p>
      </section>

      <section className="seoBridgeWidget">
        <div className="bridgeShell">
          <div className="bridgeHeader">
            <div>
              <h2>Bridge Assets</h2>
              <p>Select tokens and networks to bridge</p>
            </div>
            <div className="poweredBy"><small>Powered by</small><b><em>◆</em> LI.FI</b></div>
          </div>
          <Bridge />
        </div>
      </section>

      <section className="seoContentGrid">
        {data.sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className="infoStrip">
        <strong>Explore StarBridge</strong>
        <span>
          {data.related.map((item, index) => (
            <span key={item.href}>
              {index > 0 ? " · " : ""}
              <Link href={item.href}>{item.label}</Link>
            </span>
          ))}
        </span>
      </section>

      <Footer />
    </main>
  );
}
