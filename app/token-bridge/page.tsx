import type { Metadata } from "next";
import SeoBridgePage, { type SeoPageData } from "@/components/SeoBridgePage";

const data: SeoPageData = {
  title: "Token Bridge",
  description: "Move supported tokens between connected blockchain networks with StarBridge and LI.FI cross-chain routing.",
  eyebrow: "TOKEN BRIDGE",
  heading: "Bridge supported tokens across chains.",
  intro: "Select a supported token and destination network, then review the available cross-chain route before signing from your wallet.",
  sections: [
      { title: "What is a token bridge?", body: "A token bridge enables supported assets to move between blockchain networks. Depending on the route, the underlying infrastructure may use different bridge or liquidity mechanisms." },
      { title: "Token and network compatibility", body: "A token is not automatically available on every network. StarBridge shows the combinations supported by the live routing infrastructure rather than assuming that every token can be moved everywhere." },
      { title: "Stablecoins and major assets", body: "Stablecoins and major network assets are common cross-chain use cases, but availability depends on the current route and liquidity. Always verify the exact asset and destination before confirming." },
      { title: "Your wallet stays in control", body: "StarBridge is a non-custodial interface. You connect your wallet and approve the transaction yourself; StarBridge does not require a custodial account for the bridge interface." }
  ],
  related: [
      { href: "/crypto-bridge", label: "Crypto bridge" },
      { href: "/usdc-bridge", label: "USDC bridge" },
      { href: "/cross-chain-bridge", label: "Cross-chain bridge" },
      { href: "/chains", label: "Supported chains" }
  ],
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/token-bridge" },
  openGraph: {
    title: `${data.title} | StarBridge`,
    description: data.description,
    url: `https://starbridge.finance/token-bridge`,
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
