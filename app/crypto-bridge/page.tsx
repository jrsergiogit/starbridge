import type { Metadata } from "next";
import SeoBridgePage, { type SeoPageData } from "@/components/SeoBridgePage";

const data: SeoPageData = {
  title: "Crypto Bridge",
  description: "Use StarBridge to move supported crypto assets across blockchain networks through a simple cross-chain interface powered by LI.FI.",
  eyebrow: "CRYPTO BRIDGE",
  heading: "A simpler way to bridge crypto.",
  intro: "Move supported digital assets between connected blockchain networks without jumping between multiple bridge interfaces.",
  sections: [
      { title: "What is a crypto bridge?", body: "A crypto bridge connects assets and liquidity across different blockchain networks. StarBridge provides a single interface where you can select supported source and destination networks and review an available route." },
      { title: "How StarBridge works", body: "Connect your wallet, choose the source network and token, choose the destination network and token, then review the route presented by the underlying routing infrastructure before signing from your own wallet." },
      { title: "Non-custodial by design", body: "StarBridge does not ask you to deposit funds into an account controlled by StarBridge. Transactions are approved from your connected wallet and route execution depends on the underlying protocols and network conditions." },
      { title: "Supported networks change", body: "Available chains, tokens, routes, fees and estimated completion times can change as networks and liquidity evolve. Always review the live quote in the bridge interface before confirming a transaction." }
  ],
  related: [
      { href: "/cross-chain-bridge", label: "Cross-chain bridge" },
      { href: "/token-bridge", label: "Token bridge" },
      { href: "/usdc-bridge", label: "USDC bridge" },
      { href: "/chains", label: "Supported chains" }
  ],
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/crypto-bridge" },
  openGraph: {
    title: `${data.title} | StarBridge`,
    description: data.description,
    url: `https://starbridge.finance/crypto-bridge`,
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
