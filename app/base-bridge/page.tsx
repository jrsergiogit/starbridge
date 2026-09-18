import type { Metadata } from "next";
import SeoBridgePage, { type SeoPageData } from "@/components/SeoBridgePage";

const data: SeoPageData = {
  title: "Base Bridge",
  description: "Bridge supported assets to and from Base with StarBridge. Review live cross-chain routes and fees before signing.",
  eyebrow: "BASE BRIDGE",
  heading: "Bridge supported assets to Base.",
  intro: "Check live routes to and from Base through StarBridge's cross-chain interface powered by LI.FI routing infrastructure.",
  sections: [
      { title: "Bridging to Base", body: "Base is an Ethereum Layer 2 ecosystem. The available route to Base depends on the source network, asset, liquidity and bridge infrastructure available at the time of the quote." },
      { title: "Ethereum, L2s and Base", body: "Common cross-chain use cases include moving assets between Ethereum and Base or between Base and other supported networks. The live interface determines which combinations are currently available." },
      { title: "USDC and other supported assets", body: "USDC and other assets may be available on Base, but availability and the exact destination representation depend on the current route. Review the token shown by the bridge before signing." },
      { title: "Check gas on the destination", body: "After bridging an asset that is not the native gas token, you may need a small amount of the destination network's gas token for subsequent transactions. Plan accordingly." }
  ],
  related: [
      { href: "/usdc-bridge", label: "USDC bridge" },
      { href: "/arbitrum-bridge", label: "Arbitrum bridge" },
      { href: "/crypto-bridge", label: "Crypto bridge" },
      { href: "/chains", label: "Supported chains" }
  ],
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/base-bridge" },
  openGraph: {
    title: `${data.title} | StarBridge`,
    description: data.description,
    url: `https://starbridge.finance/base-bridge`,
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

export default function Page() {
  return <SeoBridgePage data={data} />;
}
