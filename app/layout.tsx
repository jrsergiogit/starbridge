import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://starbridge.finance"),
  title: {
    default: "StarBridge | Cross-Chain Crypto Bridge",
    template: "%s | StarBridge",
  },
  description:
    "Bridge crypto across Ethereum, Arbitrum, Base, Solana and other supported networks with a simple cross-chain interface powered by LI.FI.",
  keywords: [
    "crypto bridge",
    "cross-chain bridge",
    "cross chain bridge",
    "blockchain bridge",
    "token bridge",
    "USDC bridge",
    "USDT bridge",
    "Ethereum bridge",
    "Arbitrum bridge",
    "Base bridge",
    "Solana bridge",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon-transparent.png",
    shortcut: "/favicon-transparent.png",
    apple: "/favicon-transparent.png",
  },
  openGraph: {
    title: "StarBridge | Cross-Chain Crypto Bridge",
    description:
      "Move supported digital assets across blockchain networks through a simple non-custodial interface powered by LI.FI.",
    url: "https://starbridge.finance",
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
  twitter: {
    card: "summary_large_image",
    title: "StarBridge | Cross-Chain Crypto Bridge",
    description:
      "Move supported digital assets across blockchain networks through a simple cross-chain interface powered by LI.FI.",
    images: ["/logo-horizontal-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://starbridge.finance/#website",
      url: "https://starbridge.finance/",
      name: "StarBridge",
      description:
        "Cross-chain crypto bridge interface powered by LI.FI.",
    },
    {
      "@type": "Organization",
      "@id": "https://starbridge.finance/#organization",
      name: "StarBridge",
      url: "https://starbridge.finance/",
      email: "support@starbridge.finance",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@starbridge.finance",
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://starbridge.finance/#app",
      name: "StarBridge",
      url: "https://starbridge.finance/",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "A non-custodial interface for reviewing and initiating supported cross-chain crypto routes.",
      isAccessibleForFree: true,
      applicationSubCategory: "Cross-chain crypto bridge",
      provider: { "@id": "https://starbridge.finance/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
