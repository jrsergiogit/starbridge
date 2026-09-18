import type { Metadata } from "next";
import SeoBridgePage, { type SeoPageData } from "@/components/SeoBridgePage";

const data: SeoPageData = {
  title: "Arbitrum Bridge",
  description: "Bridge supported assets to and from Arbitrum with StarBridge. Review live routes, tokens and fees before signing.",
  eyebrow: "ARBITRUM BRIDGE",
  heading: "Bridge supported assets to Arbitrum.",
  intro: "Use StarBridge to check available cross-chain routes between Arbitrum and other supported blockchain networks.",
  sections: [
      { title: "Bridging to Arbitrum", body: "Arbitrum is an Ethereum Layer 2 ecosystem. A cross-chain route to Arbitrum depends on the source network, token, liquidity and available bridge infrastructure." },
      { title: "L2-to-L2 routes", body: "Users may need to move assets between Arbitrum and other Layer 2 networks such as Base or Optimism. The live quote determines whether a route is available for the selected asset." },
      { title: "Stablecoin routes", body: "Stablecoins such as USDC and USDT are common cross-chain assets, but the exact token representation and destination network should always be checked before signing." },
      { title: "Review the quote", body: "Confirm the source, destination, token, amount, fees and estimated output shown in the live bridge interface. Route conditions can change quickly as liquidity and gas conditions change." }
  ],
  related: [
      { href: "/usdc-bridge", label: "USDC bridge" },
      { href: "/base-bridge", label: "Base bridge" },
      { href: "/token-bridge", label: "Token bridge" },
      { href: "/cross-chain-bridge", label: "Cross-chain bridge" }
  ],
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/arbitrum-bridge" },
  openGraph: {
    title: `${data.title} | StarBridge`,
    description: data.description,
    url: `https://starbridge.finance/arbitrum-bridge`,
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
