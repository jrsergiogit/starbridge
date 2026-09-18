import type { Metadata } from "next";
import SeoBridgePage, { type SeoPageData } from "@/components/SeoBridgePage";

const data: SeoPageData = {
  title: "Cross-Chain Bridge",
  description: "StarBridge is a cross-chain bridge interface for moving supported assets between blockchain networks with LI.FI routing.",
  eyebrow: "CROSS-CHAIN BRIDGE",
  heading: "Connect chains. Move value.",
  intro: "Use one interface to review supported cross-chain routes for digital assets across connected blockchain ecosystems.",
  sections: [
      { title: "What is cross-chain bridging?", body: "Cross-chain bridging lets users move supported assets or value from one blockchain ecosystem to another. The exact route depends on the asset, source chain, destination chain and available liquidity." },
      { title: "Why routing matters", body: "Different bridge providers and liquidity sources can have different fees, execution paths and completion times. StarBridge uses LI.FI routing infrastructure to surface available cross-chain paths." },
      { title: "Review before signing", body: "A bridge transaction should always be reviewed before it is signed. Check the source and destination networks, token, amount, quoted output, fees and estimated route information shown by the live interface." },
      { title: "Supported ecosystems", body: "StarBridge currently presents supported networks through its bridge interface and Supported Chains page. The list is dynamic and may change as integrations and liquidity evolve." }
  ],
  related: [
      { href: "/crypto-bridge", label: "Crypto bridge" },
      { href: "/token-bridge", label: "Token bridge" },
      { href: "/base-bridge", label: "Base bridge" },
      { href: "/arbitrum-bridge", label: "Arbitrum bridge" }
  ],
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/cross-chain-bridge" },
  openGraph: {
    title: `${data.title} | StarBridge`,
    description: data.description,
    url: `https://starbridge.finance/cross-chain-bridge`,
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
