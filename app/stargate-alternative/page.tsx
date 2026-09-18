import type { Metadata } from "next";
import SeoBridgePage, { type SeoPageData } from "@/components/SeoBridgePage";

const data: SeoPageData = {
  title: "Stargate Alternative",
  description: "Looking for a Stargate alternative? StarBridge is an independent cross-chain interface powered by LI.FI routing for supported assets and networks.",
  eyebrow: "STARGATE ALTERNATIVE",
  heading: "An independent alternative for cross-chain bridging.",
  intro: "If you are comparing bridge interfaces, StarBridge offers an independent way to review supported cross-chain routes through LI.FI infrastructure.",
  sections: [
      { title: "StarBridge is independent", body: "StarBridge is not affiliated with or endorsed by Stargate Finance. The page exists to help users who are comparing cross-chain bridge options find an independent interface." },
      { title: "Route selection through LI.FI", body: "StarBridge uses LI.FI routing infrastructure to surface available cross-chain paths. Route availability, fees and execution depend on the underlying providers and current network conditions." },
      { title: "Use the live quote", body: "Rather than promising a fixed route or fee, StarBridge shows the current availability through the bridge interface. Always compare the live quote and verify the transaction before signing." },
      { title: "Explore other bridge options", body: "Users comparing cross-chain solutions can also review the supported chains and general crypto bridge pages on StarBridge to understand the interface and supported use cases." }
  ],
  related: [
      { href: "/crypto-bridge", label: "Crypto bridge" },
      { href: "/cross-chain-bridge", label: "Cross-chain bridge" },
      { href: "/token-bridge", label: "Token bridge" },
      { href: "/chains", label: "Supported chains" }
  ],
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/stargate-alternative" },
  openGraph: {
    title: `${data.title} | StarBridge`,
    description: data.description,
    url: `https://starbridge.finance/stargate-alternative`,
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
