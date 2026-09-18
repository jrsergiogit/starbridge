import type { Metadata } from "next";
import SeoBridgePage, { type SeoPageData } from "@/components/SeoBridgePage";

const data: SeoPageData = {
  title: "USDC Bridge",
  description: "Explore supported USDC cross-chain routes with StarBridge. Review live network, token, fee and route information before signing.",
  eyebrow: "USDC BRIDGE",
  heading: "Bridge USDC across supported networks.",
  intro: "Use the live StarBridge interface to check whether a supported USDC route is available for your source and destination networks.",
  sections: [
      { title: "USDC cross-chain transfers", body: "USDC can exist in different network environments, so the correct destination asset matters. StarBridge relies on the live route and token data provided by its underlying infrastructure." },
      { title: "Check the destination asset", body: "Before confirming a USDC bridge, verify the destination network and token shown in the quote. Do not assume that every USDC representation is interchangeable across all networks." },
      { title: "Fees and route availability", body: "Bridge fees, network gas costs, liquidity and estimated completion times can change. The live quote is the relevant source for the transaction you are about to sign." },
      { title: "Use the live bridge", body: "Connect your wallet and enter the amount to see whether the requested USDC route is currently available. Never sign a transaction that does not match the route you intended." }
  ],
  related: [
      { href: "/token-bridge", label: "Token bridge" },
      { href: "/base-bridge", label: "Base bridge" },
      { href: "/arbitrum-bridge", label: "Arbitrum bridge" },
      { href: "/cross-chain-bridge", label: "Cross-chain bridge" }
  ],
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/usdc-bridge" },
  openGraph: {
    title: `${data.title} | StarBridge`,
    description: data.description,
    url: `https://starbridge.finance/usdc-bridge`,
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
