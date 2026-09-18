import type { MetadataRoute } from "next";
import {
  chainPairParams,
  chainPairUrl,
  tokenPairParams,
  tokenPairUrl,
} from "@/lib/seo-data";
import { LEARN_ARTICLES } from "@/lib/learn-data";

const baseUrl = "https://starbridge.finance";
const lastModified = new Date("2026-09-18T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPaths = [
    "/",
    "/transactions",
    "/chains",
    "/about",
    "/crypto-bridge",
    "/cross-chain-bridge",
    "/token-bridge",
    "/usdc-bridge",
    "/base-bridge",
    "/arbitrum-bridge",
    "/stargate-alternative",
    "/learn",
    "/security",
    "/privacy",
    "/terms",
  ];

  const fixedPages: MetadataRoute.Sitemap = fixedPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  const chainPages: MetadataRoute.Sitemap = chainPairParams().map(
    ({ from, to }) => ({
      url: `${baseUrl}${chainPairUrl(from, to)}`,
      lastModified,
    }),
  );

  const tokenPages: MetadataRoute.Sitemap = tokenPairParams().map(
    ({ token, pair }) => {
      const [from, to] = pair.split("-to-");
      return {
        url: `${baseUrl}${tokenPairUrl(token, from, to)}`,
        lastModified,
      };
    },
  );

  const learnPages: MetadataRoute.Sitemap = LEARN_ARTICLES.map(({ slug }) => ({
    url: `${baseUrl}/learn/${slug}`,
    lastModified,
  }));

  return [...fixedPages, ...chainPages, ...tokenPages, ...learnPages];
}
